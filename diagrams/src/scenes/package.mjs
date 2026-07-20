import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const W = 1920
const H = 1080

const C = {
  bg: '#05080e',
  ink: '#f8fafc',
  muted: '#9aa9bd',
  line: '#526078',
  substrate: '#8a4f24',
  substrateEdge: '#f3b35f',
  interposer: '#0e6074',
  interposerEdge: '#67e8f9',
  compute: '#174ea6',
  computeEdge: '#93c5fd',
  hbm: '#55208a',
  hbmEdge: '#d8b4fe',
  lid: '#64748b',
  lidEdge: '#e2e8f0',
  copper: '#fbbf24',
}

function defs() {
  return `<defs>
  <radialGradient id="spot" cx="50%" cy="48%" r="58%">
    <stop offset="0%" stop-color="#17304d" stop-opacity="0.58"/>
    <stop offset="68%" stop-color="#0b1422" stop-opacity="0.18"/>
    <stop offset="100%" stop-color="${C.bg}" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="substrateTop" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" stop-color="#a9642e"/>
    <stop offset="100%" stop-color="#5f341d"/>
  </linearGradient>
  <linearGradient id="interposerTop" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" stop-color="#167b91" stop-opacity="0.96"/>
    <stop offset="100%" stop-color="#083d50" stop-opacity="0.96"/>
  </linearGradient>
  <linearGradient id="computeTop" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" stop-color="#2563b8"/>
    <stop offset="100%" stop-color="#102f6c"/>
  </linearGradient>
  <linearGradient id="hbmTop" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" stop-color="#7438ab"/>
    <stop offset="100%" stop-color="#35145f"/>
  </linearGradient>
  <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
    <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#94a3b8" stroke-width="1" opacity="0.045"/>
  </pattern>
  <pattern id="microbumps" width="18" height="18" patternUnits="userSpaceOnUse">
    <circle cx="4" cy="4" r="1.7" fill="#a5f3fc" opacity="0.42"/>
  </pattern>
  <filter id="shadow" x="-30%" y="-30%" width="160%" height="180%">
    <feDropShadow dx="0" dy="18" stdDeviation="18" flood-color="#000" flood-opacity="0.5"/>
  </filter>
  <filter id="softGlow" x="-40%" y="-40%" width="180%" height="180%">
    <feGaussianBlur stdDeviation="8" result="blur"/>
    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
  </filter>
</defs>`
}

function backdrop() {
  return `<rect width="${W}" height="${H}" fill="${C.bg}"/>
<rect width="${W}" height="${H}" fill="url(#spot)"/>
<rect width="${W}" height="${H}" fill="url(#grid)"/>`
}

function substrate() {
  const traces = []
  for (let i = 0; i < 8; i++) {
    const y = 420 + i * 54
    traces.push(`<path d="M 390 ${y} H ${560 + i * 12} L ${690 + i * 8} ${520 + i * 18}" fill="none" stroke="${C.copper}" stroke-width="4" opacity="0.34"/>`)
    traces.push(`<path d="M 1530 ${y} H ${1360 - i * 12} L ${1230 - i * 8} ${520 + i * 18}" fill="none" stroke="${C.copper}" stroke-width="4" opacity="0.34"/>`)
  }

  const contacts = []
  for (let x = 430; x <= 1490; x += 46) {
    contacts.push(`<circle cx="${x}" cy="842" r="6" fill="${C.copper}" opacity="0.72"/>`)
  }

  return `<g filter="url(#shadow)">
  <rect x="330" y="300" width="1260" height="520" rx="42" fill="url(#substrateTop)" stroke="${C.substrateEdge}" stroke-width="5"/>
  <rect x="350" y="320" width="1220" height="480" rx="34" fill="#211813" opacity="0.2"/>
  ${traces.join('\n  ')}
  <rect x="330" y="788" width="1260" height="64" rx="24" fill="${C.substrate}" stroke="${C.substrateEdge}" stroke-width="4"/>
  ${contacts.join('\n  ')}
</g>`
}

function interposer() {
  return `<g filter="url(#shadow)">
  <rect x="455" y="345" width="1010" height="400" rx="24" fill="url(#interposerTop)" stroke="${C.interposerEdge}" stroke-width="5"/>
  <rect x="475" y="365" width="970" height="360" rx="18" fill="url(#microbumps)" opacity="0.78"/>
  <path d="M 520 545 H 1400 M 960 390 V 700" stroke="#a5f3fc" stroke-width="2" opacity="0.24"/>
  <path d="M 560 430 C 730 430 690 510 820 510 M 1360 430 C 1190 430 1230 510 1100 510" fill="none" stroke="#a5f3fc" stroke-width="4" opacity="0.42"/>
  <path d="M 560 660 C 730 660 690 580 820 580 M 1360 660 C 1190 660 1230 580 1100 580" fill="none" stroke="#a5f3fc" stroke-width="4" opacity="0.42"/>
</g>`
}

function computeDie(x, label) {
  const lines = []
  for (let y = 434; y <= 646; y += 34) {
    lines.push(`<path d="M ${x + 24} ${y} H ${x + 206}" stroke="#bfdbfe" stroke-width="2" opacity="0.2"/>`)
  }
  return `<g filter="url(#shadow)">
  <rect x="${x}" y="400" width="230" height="280" rx="14" fill="url(#computeTop)" stroke="${C.computeEdge}" stroke-width="5"/>
  ${lines.join('\n  ')}
  <path d="M ${x + 115} 420 V 660" stroke="#bfdbfe" stroke-width="2" opacity="0.17"/>
  <text x="${x + 115}" y="548" text-anchor="middle" fill="${C.ink}" font-size="26" font-weight="750" letter-spacing="2">${label}</text>
</g>`
}

function hbmStack(x, y, label) {
  const bands = []
  for (let i = 0; i < 6; i++) {
    bands.push(`<rect x="${x + 10}" y="${y + 12 + i * 14}" width="95" height="10" rx="3" fill="#bb8be0" opacity="${0.34 + i * 0.07}"/>`)
  }
  return `<g filter="url(#shadow)">
  <rect x="${x}" y="${y}" width="115" height="105" rx="12" fill="url(#hbmTop)" stroke="${C.hbmEdge}" stroke-width="4"/>
  ${bands.join('\n  ')}
${label ? `<text x="${x + 57.5}" y="${y + 132}" text-anchor="middle" fill="${C.hbmEdge}" font-size="20" font-weight="720" letter-spacing="2">${label}</text>` : ''}
</g>`
}

function diesAndMemory() {
  const positions = [
    [465, 375], [590, 375], [465, 505], [590, 505], [465, 635], [590, 635],
    [1225, 375], [1350, 375], [1225, 505], [1350, 505], [1225, 635], [1350, 635],
  ]
  const hbm = positions.map(([x, y]) => hbmStack(x, y, '')).join('\n')
  return `${computeDie(745, 'GPU 1')}
${computeDie(980, 'GPU 2')}
${hbm}
<path d="M 973 540 H 982" stroke="${C.computeEdge}" stroke-width="12" filter="url(#softGlow)"/>`
}

function lid() {
  return `<g filter="url(#shadow)">
  <path d="M 305 274 H 1615 V 844 H 305 Z M 430 354 H 1490 V 764 H 430 Z" fill="${C.lid}" fill-rule="evenodd" opacity="0.5" stroke="${C.lidEdge}" stroke-width="5"/>
  <path d="M 430 354 H 1490 V 764 H 430 Z" fill="none" stroke="${C.lidEdge}" stroke-width="3" opacity="0.58"/>
  <path d="M 350 318 H 1570" stroke="#fff" stroke-width="3" opacity="0.3"/>
</g>`
}

function label(text, x, y, targetX, targetY, color) {
  return `<path d="M ${x - 24} ${y - 8} L ${targetX} ${targetY}" fill="none" stroke="${color}" stroke-width="2.5" opacity="0.76"/>
<circle cx="${targetX}" cy="${targetY}" r="5" fill="${color}"/>
<text x="${x}" y="${y}" fill="${color}" font-size="25" font-weight="760" letter-spacing="2">${text}</text>`
}

function scene(stage) {
  const parts = [backdrop(), substrate()]
  if (stage >= 2) parts.push(interposer())
  if (stage >= 3) parts.push(diesAndMemory())
  if (stage >= 4) parts.push(lid())

  if (stage === 1) parts.push(label('ORGANIC SUBSTRATE', 1490, 720, 1400, 736, C.substrateEdge))
  if (stage === 2) parts.push(label('SILICON INTERPOSER', 1490, 420, 1370, 452, C.interposerEdge))
  if (stage === 3) {
    parts.push(label('TWO COMPUTE DIES', 1510, 310, 1130, 420, C.computeEdge))
    parts.push(label('TWELVE HBM STACKS', 1520, 820, 1400, 700, C.hbmEdge))
  }
  if (stage === 4) parts.push(label('THERMAL LID', 1510, 230, 1510, 306, C.lidEdge))

  return parts.join('\n')
}

function svg(stage) {
  const descriptions = {
    1: 'A top-down locked view shows the organic package substrate and its copper traces.',
    2: 'The same view adds a silicon interposer above the organic substrate.',
    3: 'The same view adds two compute dies and twelve HBM stacks on the interposer.',
    4: 'The same view adds the thermal lid to complete the accelerator package.',
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="title desc" font-family="Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif">
<title id="title">Accelerator package assembly, state ${stage} of 4</title>
<desc id="desc">${descriptions[stage]}</desc>
${defs()}
${scene(stage)}
</svg>\n`
}

const SCENES = [
  ['package-01-substrate.svg', 1],
  ['package-02-interposer.svg', 2],
  ['package-03-dies-and-hbm.svg', 3],
  ['package-04-complete.svg', 4],
]

export function generatePackageScenes(outDir) {
  mkdirSync(outDir, { recursive: true })
  const written = []
  for (const [name, stage] of SCENES) {
    const path = join(outDir, name)
    writeFileSync(path, svg(stage))
    written.push(path)
  }
  return written
}

const modulePath = fileURLToPath(import.meta.url)
if (process.argv[1] && resolve(process.argv[1]) === modulePath) {
  const outDir = process.argv[2] ?? join(dirname(modulePath), '..', '..', 'rendered')
  const written = generatePackageScenes(outDir)
  console.log(`wrote ${written.length} package scenes to ${outDir}`)
}
