#!/usr/bin/env node

import { existsSync, readFileSync, readdirSync } from 'node:fs'
import { basename, dirname, join, relative, resolve, sep } from 'node:path'
import { fileURLToPath } from 'node:url'
import { parseSync } from '@slidev/parser'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const slidesFile = join(root, 'slides.md')
const segmentDir = join(root, 'slides', 'segments')
const researchDir = join(root, 'research')
const segmentFiles = readdirSync(segmentDir)
  .filter(file => file.endsWith('.md'))
  .sort()
  .map(file => join(segmentDir, file))
const researchFiles = readdirSync(researchDir)
  .filter(file => file.endsWith('.md'))
  .sort()
  .map(file => join(researchDir, file))

const failures = []
let assetReferenceCount = 0
let researchCitationCount = 0
let speakerNoteCount = 0

const displayPath = file => relative(root, file)
const isInside = (directory, target) => target === directory || target.startsWith(`${directory}${sep}`)
const diagramPathPattern = /\/diagrams\/rendered\/([^)'"<>\s?#]+)(?:[?#][^)'"<>\s]*)?/g
const findDiagramIds = source => [...source.matchAll(diagramPathPattern)]
  .map(match => match[1].replace(/\.[^.]+$/, ''))

const slidesSource = readFileSync(slidesFile, 'utf8')
const importedSegments = [...slidesSource.matchAll(/^src:\s*(\S+)\s*$/gm)]
  .map(match => resolve(dirname(slidesFile), match[1]))
const importCounts = new Map()

for (const imported of importedSegments) {
  importCounts.set(imported, (importCounts.get(imported) ?? 0) + 1)
  if (!isInside(segmentDir, imported))
    failures.push(`slides.md imports a segment outside slides/segments: ${displayPath(imported)}`)
  else if (!existsSync(imported))
    failures.push(`slides.md imports missing segment ${displayPath(imported)}`)
}

for (const file of segmentFiles) {
  const source = readFileSync(file, 'utf8')
  const name = basename(file)
  const expectedId = name.slice(0, -3)
  const metadataBlocks = [...source.matchAll(/<!--\s*SEGMENT\r?\n([\s\S]*?)-->/g)]
  const importCount = importCounts.get(file) ?? 0

  try {
    const parsedSlides = parseSync(source, file).slides
    for (const slide of parsedSlides) {
      const slideNumber = slide.index + 1
      if (!slide.note?.trim())
        failures.push(`${name} slide ${slideNumber} must end with one speaker note`)
      const extraComments = [...slide.content.matchAll(/<!--([\s\S]*?)-->/g)]
        .filter(match => !match[1].trimStart().startsWith('SEGMENT'))
      if (extraComments.length)
        failures.push(`${name} slide ${slideNumber} contains an additional HTML comment before its trailing speaker note`)
    }
  } catch (error) {
    failures.push(`${name} could not be parsed by Slidev: ${error.message}`)
  }

  if (importCount !== 1)
    failures.push(`${name} must be imported exactly once by slides.md (${importCount} found)`)
  if (source.trimStart().startsWith('<!-- SEGMENT'))
    failures.push(`${name} starts with hidden metadata and will render a blank slide`)
  if (source.includes('<!-- VERIFY'))
    failures.push(`${name} contains a nested HTML VERIFY comment`)
  if (metadataBlocks.length !== 1) {
    failures.push(`${name} must contain exactly one SEGMENT metadata block (${metadataBlocks.length} found)`)
    continue
  }

  const metadata = metadataBlocks[0][1]
  const field = key => metadata.match(new RegExp(`^${key}:\\s*(.*?)\\s*$`, 'm'))?.[1]
  const id = field('id')
  if (id !== expectedId)
    failures.push(`${name} metadata id must be ${expectedId} (${id ?? 'missing'} found)`)

  const diagramField = field('diagrams')
  const diagramList = diagramField?.match(/^\[([^\]]*)\]/)?.[1]
  if (diagramList == null) {
    failures.push(`${name} metadata diagrams must be a bracketed list`)
  } else {
    const declaredDiagrams = diagramList.split(',').map(value => value.trim()).filter(Boolean)
    const usedDiagrams = [...new Set(findDiagramIds(source))]
    const declaredSet = new Set(declaredDiagrams)
    if (declaredSet.size !== declaredDiagrams.length)
      failures.push(`${name} metadata diagrams contains a duplicate id`)
    const missingDeclarations = usedDiagrams.filter(id => !declaredSet.has(id))
    const staleDeclarations = declaredDiagrams.filter(id => !usedDiagrams.includes(id))
    if (missingDeclarations.length)
      failures.push(`${name} metadata diagrams omits: ${missingDeclarations.join(', ')}`)
    if (staleDeclarations.length)
      failures.push(`${name} metadata diagrams declares unused ids: ${staleDeclarations.join(', ')}`)
  }

  const sources = field('sources')
  if (!sources) {
    failures.push(`${name} metadata must declare at least one research source`)
    continue
  }

  for (const declaredSource of sources.split(',').map(value => value.trim()).filter(Boolean)) {
    const target = resolve(root, declaredSource)
    if (!isInside(researchDir, target))
      failures.push(`${name} declares source outside research/: ${declaredSource}`)
    else if (!existsSync(target))
      failures.push(`${name} declares missing source ${declaredSource}`)
  }
}

for (const [file, count] of importCounts) {
  if (count > 1)
    failures.push(`slides.md imports ${displayPath(file)} ${count} times`)
}

const markdownFiles = [slidesFile, ...segmentFiles]
const localAssetTypes = [
  {
    pattern: diagramPathPattern,
    directory: join(root, 'diagrams', 'rendered'),
    label: 'diagram',
  },
  {
    pattern: /\/assets\/([^)'"<>\s?#]+)(?:[?#][^)'"<>\s]*)?/g,
    directory: join(root, 'public', 'assets'),
    label: 'asset',
  },
]

for (const file of markdownFiles) {
  const source = readFileSync(file, 'utf8')
  for (const { pattern, directory, label } of localAssetTypes) {
    for (const match of source.matchAll(pattern)) {
      assetReferenceCount++
      const target = resolve(directory, match[1])
      if (!isInside(directory, target))
        failures.push(`${displayPath(file)} references ${label} outside its asset directory: ${match[1]}`)
      else if (!existsSync(target))
        failures.push(`${displayPath(file)} references missing ${label} ${match[1]}`)
    }
  }
}

if (existsSync(join(root, 'public', 'diagrams')))
  failures.push('public/diagrams republishes the diagram source tree; referenced diagrams are bundled directly')

for (const file of markdownFiles) {
  const source = readFileSync(file, 'utf8')
  for (const match of source.matchAll(/<!--([\s\S]*?)-->/g)) {
    const note = match[1].trim()
    if (!note || note.startsWith('SEGMENT'))
      continue
    speakerNoteCount++
    const lines = note.split('\n').map(line => line.trim()).filter(Boolean)
    const bulletTexts = lines.map(line => line.replace(/^-\s+/, ''))
    const wordCount = bulletTexts.join(' ').split(/\s+/).filter(Boolean).length
    if (lines.length < 2 || lines.length > 4)
      failures.push(`${displayPath(file)} speaker note must contain 2-4 bullets (${lines.length} found)`)
    if (lines.some(line => !/^-\s+\S/.test(line)))
      failures.push(`${displayPath(file)} contains a non-bullet speaker-note line`)
    for (const bullet of bulletTexts) {
      const bulletWordCount = bullet.split(/\s+/).filter(Boolean).length
      if (bulletWordCount > 28)
        failures.push(`${displayPath(file)} speaker-note bullet exceeds 28 words (${bulletWordCount})`)
    }
    if (/\[[^\]]+\]/.test(note))
      failures.push(`${displayPath(file)} exposes bracketed source notation in speaker notes`)
    if (/<(?:h[1-6]|details|summary)\b/i.test(note))
      failures.push(`${displayPath(file)} contains presentation markup in speaker notes`)
    if (/\b(?:FACT AMMO|LINE THAT LANDS|SIMPLIFICATION HEDGE|IOU|PAYOFF|CALLBACK)\b/i.test(note) || /\bSEED\b/.test(note))
      failures.push(`${displayPath(file)} exposes production jargon in speaker notes`)
    if (/\n\s*\n/.test(note))
      failures.push(`${displayPath(file)} contains multi-paragraph speaker notes`)
    if (note.includes('—'))
      failures.push(`${displayPath(file)} contains an em dash in speaker notes`)
    if (wordCount > 75)
      failures.push(`${displayPath(file)} speaker note exceeds 75 words (${wordCount})`)
  }
}

for (const file of researchFiles) {
  const source = readFileSync(file, 'utf8')
  const headings = [...source.matchAll(/^## Sources\s*$/gm)]
  if (headings.length !== 1) {
    failures.push(`${displayPath(file)} must contain exactly one "## Sources" section (${headings.length} found)`)
    continue
  }

  const body = source.slice(0, headings[0].index)
  const sourceList = source.slice(headings[0].index + headings[0][0].length)
  const references = [...body.matchAll(/\[(\d+)\]/g)].map(match => Number(match[1]))
  const definitions = [...sourceList.matchAll(/^\s*(\d+)\.\s+\S/gm)].map(match => Number(match[1]))
  const definitionSet = new Set(definitions)
  researchCitationCount += references.length

  if (definitionSet.size !== definitions.length)
    failures.push(`${displayPath(file)} contains duplicate numbered sources`)
  if (definitions.length) {
    const highest = Math.max(...definitions)
    for (let number = 1; number <= highest; number++) {
      if (!definitionSet.has(number))
        failures.push(`${displayPath(file)} source list is missing number ${number}`)
    }
  }
  for (const reference of new Set(references)) {
    if (!definitionSet.has(reference))
      failures.push(`${displayPath(file)} cites undefined source [${reference}]`)
  }
}

if (failures.length) {
  console.error(failures.map(failure => `- ${failure}`).join('\n'))
  process.exit(1)
}

console.log(
  `Validated ${segmentFiles.length} imported segments, ${speakerNoteCount} concise speaker notes, ` +
  `${assetReferenceCount} local asset references, and ${researchCitationCount} research citations.`,
)
