#!/usr/bin/env node

import { existsSync, readFileSync, readdirSync } from 'node:fs'
import { basename, dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const segmentDir = join(root, 'slides', 'segments')
const segmentFiles = readdirSync(segmentDir)
  .filter(file => file.endsWith('.md'))
  .map(file => join(segmentDir, file))

const failures = []
let speakerNoteCount = 0

for (const file of segmentFiles) {
  const source = readFileSync(file, 'utf8')
  if (source.startsWith('<!-- SEGMENT'))
    failures.push(`${basename(file)} starts with hidden metadata and will render a blank slide`)
  if (source.includes('<!-- VERIFY'))
    failures.push(`${basename(file)} contains a nested HTML VERIFY comment`)
}

const markdownFiles = [join(root, 'slides.md'), ...segmentFiles]
const diagramPattern = /\/diagrams\/rendered\/([^)'"\s]+)/g
for (const file of markdownFiles) {
  const source = readFileSync(file, 'utf8')
  for (const match of source.matchAll(diagramPattern)) {
    const asset = join(root, 'diagrams', 'rendered', match[1])
    if (!existsSync(asset))
      failures.push(`${basename(file)} references missing diagram ${match[1]}`)
  }
}

for (const file of markdownFiles) {
  const source = readFileSync(file, 'utf8')
  for (const match of source.matchAll(/<!--([\s\S]*?)-->/g)) {
    const note = match[1].trim()
    if (!note || note.startsWith('SEGMENT'))
      continue
    speakerNoteCount++
    const wordCount = note.split(/\s+/).filter(Boolean).length
    if (/^\s*-\s/m.test(note))
      failures.push(`${basename(file)} contains bullet-form speaker notes`)
    if (/\[[^\]]+\]/.test(note))
      failures.push(`${basename(file)} exposes bracketed source notation in speaker notes`)
    if (/<(?:h[1-6]|details|summary)\b/i.test(note))
      failures.push(`${basename(file)} contains presentation markup in speaker notes`)
    if (/\b(?:FACT AMMO|LINE THAT LANDS|SIMPLIFICATION HEDGE|IOU|PAYOFF|CALLBACK)\b/i.test(note) || /\bSEED\b/.test(note))
      failures.push(`${basename(file)} exposes production jargon in speaker notes`)
    if (/\n\s*\n/.test(note))
      failures.push(`${basename(file)} contains multi-paragraph speaker notes`)
    if (note.includes('—'))
      failures.push(`${basename(file)} contains an em dash in speaker notes`)
    if (wordCount > 90)
      failures.push(`${basename(file)} speaker note exceeds 90 words (${wordCount})`)
  }
}

if (failures.length) {
  console.error(failures.map(failure => `- ${failure}`).join('\n'))
  process.exit(1)
}

console.log(`Validated ${segmentFiles.length} segments, ${speakerNoteCount} concise speaker notes, and their diagram references.`)
