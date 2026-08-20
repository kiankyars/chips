#!/usr/bin/env node

import { existsSync, readFileSync, readdirSync } from 'node:fs'
import { dirname, join, relative, resolve, sep } from 'node:path'
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

const displayPath = file => relative(root, file)
const isInside = (directory, target) =>
  target === directory || target.startsWith(`${directory}${sep}`)

const slidesSource = readFileSync(slidesFile, 'utf8')
const importedSegments = [...slidesSource.matchAll(/^src:\s*(\S+)\s*$/gm)]
  .map(match => resolve(dirname(slidesFile), match[1]))
const importCounts = new Map()

for (const imported of importedSegments) {
  importCounts.set(imported, (importCounts.get(imported) ?? 0) + 1)
  if (!isInside(segmentDir, imported))
    failures.push(`slides.md imports a file outside slides/segments: ${displayPath(imported)}`)
  else if (!existsSync(imported))
    failures.push(`slides.md imports missing segment ${displayPath(imported)}`)
}

for (const file of segmentFiles) {
  const importCount = importCounts.get(file) ?? 0
  if (importCount !== 1)
    failures.push(`${displayPath(file)} must be imported exactly once by slides.md (${importCount} found)`)

  const source = readFileSync(file, 'utf8')
  if (source.includes('<!-- VERIFY'))
    failures.push(`${displayPath(file)} contains an unresolved VERIFY marker`)

  let parsed
  try {
    parsed = parseSync(source, file)
  } catch (error) {
    failures.push(`${displayPath(file)} could not be parsed by Slidev: ${error.message}`)
    continue
  }

  const declaredSources = parsed.slides[0]?.frontmatter?.sources
  if (!Array.isArray(declaredSources) || declaredSources.length === 0) {
    failures.push(`${displayPath(file)} must list its research files in first-slide frontmatter`)
    continue
  }

  for (const declaredSource of declaredSources) {
    if (typeof declaredSource !== 'string') {
      failures.push(`${displayPath(file)} contains a non-string research source`)
      continue
    }
    const target = resolve(root, declaredSource)
    if (!isInside(researchDir, target))
      failures.push(`${displayPath(file)} declares a source outside research/: ${declaredSource}`)
    else if (!existsSync(target))
      failures.push(`${displayPath(file)} declares missing source ${declaredSource}`)
  }
}

for (const [file, count] of importCounts) {
  if (count > 1)
    failures.push(`slides.md imports ${displayPath(file)} ${count} times`)
}

const markdownFiles = [slidesFile, ...segmentFiles]
const localAssetTypes = [
  {
    pattern: /\/diagrams\/rendered\/([^)'\"<>\s?#]+)(?:[?#][^)'\"<>\s]*)?/g,
    directory: join(root, 'diagrams', 'rendered'),
    label: 'diagram',
  },
  {
    pattern: /\/assets\/([^)'\"<>\s?#]+)(?:[?#][^)'\"<>\s]*)?/g,
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

for (const file of researchFiles) {
  const source = readFileSync(file, 'utf8')
  const headings = [...source.matchAll(/^## Sources\s*$/gm)]
  if (headings.length !== 1) {
    failures.push(`${displayPath(file)} must contain exactly one \"## Sources\" section (${headings.length} found)`)
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
  `Validated ${segmentFiles.length} imported segments, ${assetReferenceCount} local asset references, ` +
  `and ${researchCitationCount} research citations.`,
)
