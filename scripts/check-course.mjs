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

if (failures.length) {
  console.error(failures.map(failure => `- ${failure}`).join('\n'))
  process.exit(1)
}

console.log(`Validated ${segmentFiles.length} segments and their diagram references.`)
