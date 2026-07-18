import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const W = 1920
const H = 1080

const C = {
  bg: '#080c14',
  grid: '#94a3b8',
  ink: '#f8fafc',
  muted: '#a8b3c7',
  gate: '#60a5fa',
  gateFill: '#102a4f',
  control: '#67e8f9',
  silicon: '#fbbf24',
  siliconDark: '#8a5b0b',
  substrate: '#253044',
  substrateTop: '#334155',
}

function sceneDefs() {
  return `<defs>
  <radialGradient id="spot" cx="50%" cy="48%" r="56%">
    <stop offset="0%" stop-color="#17284a" stop-opacity="0.72"/>
    <stop offset="70%" stop-color="#0b1220" stop-opacity="0.22"/>
    <stop offset="100%" stop-color="${C.bg}" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="substrate" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="${C.substrateTop}"/>
    <stop offset="100%" stop-color="${C.substrate}"/>
  </linearGradient>
  <linearGradient id="gate" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" stop-color="#24528c"/>
    <stop offset="100%" stop-color="${C.gateFill}"/>
  </linearGradient>
  <filter id="controlGlow" x="-80%" y="-80%" width="260%" height="260%">
    <feGaussianBlur stdDeviation="10" result="blur"/>
    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
  </filter>
  <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
    <path d="M 48 0 L 0 0 0 48" fill="none" stroke="${C.grid}" stroke-width="1" opacity="0.055"/>
  </pattern>
</defs>`
}

function baseLayers() {
  return `<rect width="${W}" height="${H}" fill="${C.bg}"/>
<rect width="${W}" height="${H}" fill="url(#spot)"/>
<rect width="${W}" height="${H}" fill="url(#grid)"/>
<text x="960" y="104" text-anchor="middle" fill="${C.muted}" font-size="25" font-weight="650" letter-spacing="5">CROSS-SECTION BENEATH THE GATE</text>
<path d="M 380 906 H 1540" stroke="#526078" stroke-width="2" opacity="0.6"/>
<rect x="380" y="650" width="1160" height="256" rx="8" fill="url(#substrate)" stroke="#526078" stroke-width="3"/>
<path d="M 410 680 H 1510" stroke="#94a3b8" stroke-width="2" opacity="0.17"/>`
}

function callout(label, x, y, x2, y2, color) {
  return `<path d="M ${x - 22} ${y - 8} L ${x2} ${y2}" fill="none" stroke="${color}" stroke-width="2.5" opacity="0.82"/>
<circle cx="${x2}" cy="${y2}" r="5" fill="${color}"/>
<text x="${x}" y="${y}" text-anchor="start" fill="${color}" font-size="24" font-weight="700" letter-spacing="2">${label}</text>`
}

function commonCallouts(gateTarget, channelTarget) {
  return `${callout('GATE', 1580, 332, gateTarget[0], gateTarget[1], C.gate)}
${callout('CHANNEL', 1580, 518, channelTarget[0], channelTarget[1], C.silicon)}
${callout('SILICON', 1580, 790, 1480, 790, C.muted)}`
}

function planar() {
  return `${baseLayers()}
<rect x="590" y="622" width="740" height="28" rx="12" fill="${C.silicon}"/>
<rect x="550" y="574" width="820" height="48" rx="12" fill="${C.control}" opacity="0.9" filter="url(#controlGlow)"/>
<rect x="540" y="330" width="840" height="244" rx="16" fill="url(#gate)" stroke="${C.gate}" stroke-width="4"/>
<path d="M 590 622 H 1330" stroke="#fff3c4" stroke-width="4" opacity="0.72"/>
${commonCallouts([1368, 402], [1314, 636])}`
}

function finfet() {
  return `${baseLayers()}
<rect x="852" y="318" width="216" height="332" rx="16" fill="${C.siliconDark}" stroke="${C.silicon}" stroke-width="4"/>
<path d="M 820 644 V 286 H 1100 V 644" fill="none" stroke="${C.control}" stroke-width="38" stroke-linejoin="round" filter="url(#controlGlow)"/>
<path d="M 674 650 V 238 Q 674 202 710 202 H 1210 Q 1246 202 1246 238 V 650 H 1100 V 286 H 820 V 650 Z" fill="url(#gate)" stroke="${C.gate}" stroke-width="4"/>
<path d="M 852 318 H 1068 M 852 318 V 650 M 1068 318 V 650" fill="none" stroke="#fff3c4" stroke-width="4" opacity="0.62"/>
${commonCallouts([1244, 350], [1066, 470])}`
}

function nanosheet(y) {
  return `<rect x="770" y="${y}" width="380" height="76" rx="30" fill="${C.control}" opacity="0.94" filter="url(#controlGlow)"/>
<rect x="788" y="${y + 18}" width="344" height="40" rx="18" fill="${C.silicon}"/>
<path d="M 818 ${y + 38} H 1102" stroke="#fff3c4" stroke-width="4" opacity="0.66"/>`
}

function gaa() {
  return `${baseLayers()}
<rect x="620" y="200" width="680" height="500" rx="34" fill="url(#gate)" stroke="${C.gate}" stroke-width="4"/>
${nanosheet(284)}
${nanosheet(424)}
${nanosheet(564)}
<path d="M 730 240 H 1190" stroke="#8cc5ff" stroke-width="3" opacity="0.34"/>
${commonCallouts([1298, 332], [1130, 462])}`
}

function svg(body) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="title desc" font-family="Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif">
<title id="title">Transistor gate geometry</title>
<desc id="desc">A fixed cross-section shows how the gate controls a planar channel, a vertical fin, or stacked nanosheets.</desc>
${sceneDefs()}
${body}
</svg>\n`
}

const SCENES = [
  ['transistor-planar.svg', planar],
  ['transistor-finfet.svg', finfet],
  ['transistor-gaa.svg', gaa],
]

export function generateTransistorScenes(outDir) {
  mkdirSync(outDir, { recursive: true })
  const written = []
  for (const [name, render] of SCENES) {
    const path = join(outDir, name)
    writeFileSync(path, svg(render()))
    written.push(path)
  }
  return written
}

const modulePath = fileURLToPath(import.meta.url)
if (process.argv[1] && resolve(process.argv[1]) === modulePath) {
  const outDir = process.argv[2] ?? join(dirname(modulePath), '..', '..', 'rendered')
  const written = generateTransistorScenes(outDir)
  console.log(`wrote ${written.length} transistor scenes to ${outDir}`)
}
