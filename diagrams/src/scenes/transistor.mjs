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
  diffusion: '#34d399',
  diffusionFill: '#10382f',
  leak: '#fb7185',
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

function baseLayers(header = 'TRANSVERSE CHANNEL CROSS-SECTION · CURRENT INTO PAGE') {
  return `<rect width="${W}" height="${H}" fill="${C.bg}"/>
<rect width="${W}" height="${H}" fill="url(#spot)"/>
<rect width="${W}" height="${H}" fill="url(#grid)"/>
  <text x="960" y="104" text-anchor="middle" fill="${C.muted}" font-size="25" font-weight="650" letter-spacing="5">${header}</text>
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
${callout('SILICON SUBSTRATE', 1580, 790, 1480, 790, C.muted)}`
}

function planar() {
  const carriers = Array.from({ length: 7 }, (_, index) => {
    const x = 820 + index * 47
    const y = 684 + (index % 2 ? 5 : -5)
    return `<circle cx="${x}" cy="${y}" r="7" fill="${C.leak}"/>`
  }).join('\n')

  return `${baseLayers('LONGITUDINAL CHANNEL CROSS-SECTION · ELECTRONS FLOW SOURCE → DRAIN')}
<defs>
  <marker id="leakArrow" markerUnits="userSpaceOnUse" markerWidth="18" markerHeight="18" refX="16" refY="9" orient="auto">
    <path d="M0 0L18 9L0 18Z" fill="${C.leak}"/>
  </marker>
</defs>
<rect x="420" y="650" width="350" height="210" rx="10" fill="${C.diffusionFill}" stroke="${C.diffusion}" stroke-width="4"/>
<rect x="1150" y="650" width="350" height="210" rx="10" fill="${C.diffusionFill}" stroke="${C.diffusion}" stroke-width="4"/>

<path d="M 770 650 H 1150" stroke="${C.silicon}" stroke-width="16" opacity="0.92"/>
<rect x="730" y="594" width="460" height="56" rx="12" fill="${C.control}" opacity="0.9" filter="url(#controlGlow)"/>
<rect x="700" y="322" width="520" height="272" rx="16" fill="url(#gate)" stroke="${C.gate}" stroke-width="4"/>

<text x="960" y="440" text-anchor="middle" fill="${C.ink}" font-size="40" font-weight="780">GATE OFF · 0 V</text>
<text x="960" y="492" text-anchor="middle" fill="${C.control}" font-size="24" font-weight="650" letter-spacing="1.5">CONTROLS THE BARRIER FROM ABOVE</text>

<text x="595" y="750" text-anchor="middle" fill="${C.diffusion}" font-size="34" font-weight="800" letter-spacing="3">SOURCE</text>
<text x="595" y="794" text-anchor="middle" fill="${C.muted}" font-size="22" font-weight="620">electrons enter</text>
<text x="1325" y="750" text-anchor="middle" fill="${C.diffusion}" font-size="34" font-weight="800" letter-spacing="3">DRAIN</text>
<text x="1325" y="794" text-anchor="middle" fill="${C.muted}" font-size="22" font-weight="620">electrons leave</text>

<path d="M 800 684 H 1128" fill="none" stroke="${C.leak}" stroke-width="6" stroke-linecap="round" stroke-dasharray="12 12" marker-end="url(#leakArrow)"/>
${carriers}
<text x="960" y="742" text-anchor="middle" fill="${C.leak}" font-size="24" font-weight="760" letter-spacing="1.6">OFF-STATE ELECTRON LEAKAGE</text>

<path d="M 770 824 V 876 M 1150 824 V 876 M 770 858 H 1150" fill="none" stroke="${C.muted}" stroke-width="3"/>
<path d="M 770 858 L 790 848 V 868 Z M 1150 858 L 1130 848 V 868 Z" fill="${C.muted}"/>
<text x="960" y="842" text-anchor="middle" fill="${C.ink}" font-size="25" font-weight="740" letter-spacing="1.5">CHANNEL LENGTH L ↓</text>

<text x="960" y="236" text-anchor="middle" fill="${C.leak}" font-size="30" font-weight="780" letter-spacing="1.2">SHORTER L → WEAKER GATE CONTROL → MORE I<tspan baseline-shift="sub" font-size="21">OFF</tspan></text>`
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
<rect x="620" y="200" width="680" height="450" rx="34" fill="url(#gate)" stroke="${C.gate}" stroke-width="4"/>
${nanosheet(284)}
${nanosheet(424)}
${nanosheet(564)}
<path d="M 730 240 H 1190" stroke="#8cc5ff" stroke-width="3" opacity="0.34"/>
${commonCallouts([1298, 332], [1130, 462])}`
}

function svg(title, description, body) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="title desc" font-family="Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif">
<title id="title">${title}</title>
<desc id="desc">${description}</desc>
${sceneDefs()}
${body}
</svg>\n`
}

const SCENES = [
  ['transistor-planar.svg', 'Planar transistor source-to-drain leakage', 'Longitudinal nMOS cross-section with source at left and drain at right. A dashed electron-leakage path runs beneath the off gate, while a channel-length bracket shows why closer source and drain regions weaken electrostatic control.', planar],
  ['transistor-finfet.svg', 'FinFET transistor gate geometry', 'Simplified transverse cross-section through a FinFET gate. The gate controls the top and both sidewalls of the silicon fin, and current runs into the page.', finfet],
  ['transistor-gaa.svg', 'Nanosheet gate-all-around transistor geometry', 'Simplified transverse cross-section through a nanosheet gate-all-around transistor. The gate surrounds three stacked horizontal channels, and current runs into the page.', gaa],
]

export function generateTransistorScenes(outDir) {
  mkdirSync(outDir, { recursive: true })
  const written = []
  for (const [name, title, description, render] of SCENES) {
    const path = join(outDir, name)
    writeFileSync(path, svg(title, description, render()))
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
