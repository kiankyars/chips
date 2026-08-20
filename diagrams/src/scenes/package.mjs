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
  <pattern id="landingPads" width="34" height="34" patternUnits="userSpaceOnUse">
    <circle cx="8" cy="8" r="3.2" fill="${C.copper}" opacity="0.38"/>
  </pattern>
  <filter id="shadow" x="-30%" y="-30%" width="160%" height="180%">
    <feDropShadow dx="0" dy="18" stdDeviation="18" flood-color="#000" flood-opacity="0.5"/>
  </filter>
  <filter id="softGlow" x="-40%" y="-40%" width="180%" height="180%">
    <feGaussianBlur stdDeviation="8" result="blur"/>
    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
  </filter>
  <marker id="heatArrow" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto">
    <path d="M0 0L12 6L0 12Z" fill="${C.copper}"/>
  </marker>
  <marker id="packageArrow" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto">
    <path d="M0 0L12 6L0 12Z" fill="${C.line}"/>
  </marker>
  <marker id="packageArrowCyan" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto">
    <path d="M0 0L12 6L0 12Z" fill="${C.interposerEdge}"/>
  </marker>
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
  <rect x="455" y="345" width="1010" height="400" rx="24" fill="url(#landingPads)" stroke="${C.substrateEdge}" stroke-width="3" stroke-dasharray="12 10" opacity="0.62"/>
  ${traces.join('\n  ')}
  <rect x="330" y="788" width="1260" height="64" rx="24" fill="${C.substrate}" stroke="${C.substrateEdge}" stroke-width="4"/>
  ${contacts.join('\n  ')}
</g>`
}

function interposer() {
  const localSiliconInterconnects = [
    [700, 480, 78, 132],
    [940, 480, 40, 132],
    [1182, 480, 78, 132],
  ].map(([x, y, width, height]) =>
    `<g><rect x="${x}" y="${y}" width="${width}" height="${height}" rx="8" fill="#081f2b" stroke="${C.interposerEdge}" stroke-width="3" stroke-dasharray="8 6" opacity="0.94"/>
    <path d="M${x + 10} ${y + 24}H${x + width - 10}M${x + 10} ${y + 50}H${x + width - 10}M${x + 10} ${y + 76}H${x + width - 10}M${x + 10} ${y + 102}H${x + width - 10}" stroke="${C.interposerEdge}" stroke-width="2" opacity="0.52"/></g>`,
  )

  return `<g filter="url(#shadow)">
  <rect x="455" y="345" width="1010" height="400" rx="24" fill="url(#interposerTop)" stroke="${C.interposerEdge}" stroke-width="5"/>
  <rect x="475" y="365" width="970" height="360" rx="18" fill="url(#microbumps)" opacity="0.78"/>
  <path d="M 520 545 H 1400 M 960 390 V 700" stroke="#a5f3fc" stroke-width="2" opacity="0.24"/>
  <path d="M 560 430 C 730 430 690 510 820 510 M 1360 430 C 1190 430 1230 510 1100 510" fill="none" stroke="#a5f3fc" stroke-width="4" opacity="0.42"/>
  <path d="M 560 660 C 730 660 690 580 820 580 M 1360 660 C 1190 660 1230 580 1100 580" fill="none" stroke="#a5f3fc" stroke-width="4" opacity="0.42"/>
  ${localSiliconInterconnects.join('\n  ')}
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
    [465, 395], [590, 395], [465, 590], [590, 590],
    [1225, 395], [1350, 395], [1225, 590], [1350, 590],
  ]
  const hbm = positions.map(([x, y]) => hbmStack(x, y, '')).join('\n')
  return `${computeDie(745, 'GPU 1')}
${computeDie(980, 'GPU 2')}
${hbm}
<path d="M705 500H745M705 642H745M1210 500H1225M1210 642H1225" stroke="${C.interposerEdge}" stroke-width="8" stroke-linecap="round" opacity="0.85"/>
<path d="M 973 540 H 982" stroke="${C.computeEdge}" stroke-width="12" filter="url(#softGlow)"/>`
}

function lid() {
  return `<g filter="url(#shadow)">
  <path d="M 305 274 H 1615 V 844 H 305 Z M 430 354 H 1490 V 764 H 430 Z" fill="${C.lid}" fill-rule="evenodd" opacity="0.5" stroke="${C.lidEdge}" stroke-width="5"/>
  <path d="M 430 354 H 1490 V 764 H 430 Z" fill="none" stroke="${C.lidEdge}" stroke-width="3" opacity="0.58"/>
  <path d="M 350 318 H 1570" stroke="#fff" stroke-width="3" opacity="0.3"/>
</g>`
}

function label(text, x, y, targetX, targetY, color, anchor = 'start', size = 25) {
  const estimatedWidth = text.length * size * 0.62
  let leadX = x - 24
  if (anchor === 'start' && targetX > x) leadX = x + estimatedWidth + 24
  if (anchor === 'end') leadX = targetX < x ? x - estimatedWidth - 24 : x + 24
  return `<path d="M ${leadX} ${y - 8} L ${targetX} ${targetY}" fill="none" stroke="${color}" stroke-width="2.5" opacity="0.76"/>
<circle cx="${targetX}" cy="${targetY}" r="5" fill="${color}"/>
<text x="${x}" y="${y}" text-anchor="${anchor}" fill="${color}" font-size="${size}" font-weight="760" letter-spacing="2">${text}</text>`
}

function scene(stage) {
  const parts = [backdrop(), substrate()]
  if (stage >= 2) parts.push(interposer())
  if (stage >= 3) parts.push(diesAndMemory())
  if (stage >= 4) parts.push(lid())

  if (stage === 1) {
    parts.push(label('PACKAGE LANDING FIELD', 380, 260, 505, 350, C.substrateEdge))
    parts.push(label('POWER + SIGNAL ROUTING', 1430, 720, 1390, 736, C.substrateEdge))
  }
  if (stage === 2) {
    parts.push(label('RDL WIRING PLANE', 1400, 394, 1240, 430, C.interposerEdge))
    parts.push(label('EMBEDDED LSI BRIDGES', 1400, 454, 1218, 520, C.interposerEdge))
  }
  if (stage === 3) {
    parts.push(label('2× COMPUTE DIES', 1450, 310, 1130, 420, C.computeEdge))
    parts.push(label('8× 12-HIGH HBM3E', 1450, 820, 1400, 680, C.hbmEdge))
    parts.push(label('SHORT, WIDE ROUTES', 392, 340, 725, 502, C.interposerEdge))
  }
  if (stage === 4) parts.push(label('THERMAL LID', 1510, 230, 1510, 306, C.lidEdge))

  return parts.join('\n')
}

function thermalSection() {
  const fins = Array.from({ length: 11 }, (_, i) => `<rect x="${550 + i * 78}" y="188" width="34" height="120" rx="5" fill="${C.lid}" stroke="${C.lidEdge}" stroke-width="3"/>`).join('\n')
  const heat = [700, 960, 1220].map(x => `<path d="M${x} 616V330" fill="none" stroke="${C.copper}" stroke-width="7" stroke-linecap="round" marker-end="url(#heatArrow)"/>`).join('\n')
  const hbmHeat = `<path d="M435 566C435 506 560 502 570 440V330" fill="none" stroke="${C.copper}" stroke-width="5" stroke-linecap="round" marker-end="url(#heatArrow)" opacity="0.62"/>
<path d="M1485 566C1485 506 1360 502 1350 440V330" fill="none" stroke="${C.copper}" stroke-width="5" stroke-linecap="round" marker-end="url(#heatArrow)" opacity="0.62"/>`
  return `${backdrop()}
${fins}
<rect x="500" y="292" width="920" height="78" rx="18" fill="${C.lid}" stroke="${C.lidEdge}" stroke-width="4"/>
<rect x="420" y="398" width="1080" height="92" rx="20" fill="${C.lid}" stroke="${C.lidEdge}" stroke-width="5"/>
<rect x="450" y="490" width="1020" height="28" rx="8" fill="#d7dce3" stroke="${C.ink}" stroke-width="2"/>
<rect x="560" y="534" width="300" height="122" rx="14" fill="${C.compute}" stroke="${C.computeEdge}" stroke-width="5"/>
<rect x="1060" y="534" width="300" height="122" rx="14" fill="${C.compute}" stroke="${C.computeEdge}" stroke-width="5"/>
<rect x="360" y="554" width="150" height="102" rx="13" fill="${C.hbm}" stroke="${C.hbmEdge}" stroke-width="4"/>
<rect x="1410" y="554" width="150" height="102" rx="13" fill="${C.hbm}" stroke="${C.hbmEdge}" stroke-width="4"/>
<rect x="330" y="676" width="1260" height="70" rx="14" fill="${C.interposer}" stroke="${C.interposerEdge}" stroke-width="5"/>
<rect x="260" y="770" width="1400" height="112" rx="20" fill="${C.substrate}" stroke="${C.substrateEdge}" stroke-width="5"/>
${heat}
${hbmHeat}
${label('COOLER', 1540, 246, 1400, 286, C.lidEdge, 'start', 23)}
${label('THERMAL LID', 1540, 420, 1470, 442, C.lidEdge, 'start', 23)}
${label('THERMAL INTERFACE (TIM)', 1540, 520, 1458, 504, C.ink, 'start', 22)}
${label('COMPUTE DIES + HBM', 1540, 630, 1360, 598, C.computeEdge, 'start', 22)}
${label('INTERPOSER', 1540, 722, 1480, 710, C.interposerEdge, 'start', 23)}
${label('ORGANIC SUBSTRATE', 1540, 850, 1510, 826, C.substrateEdge, 'start', 23)}
${label('HEAT FLOW', 270, 380, 700, 382, C.copper)}`
}

function packageEcosystem() {
  const beam = (x1, y1, x2, y2, color = C.line) => `<path d="M${x1} ${y1}C${(x1 + x2) / 2} ${y1} ${(x1 + x2) / 2} ${y2} ${x2} ${y2}" fill="none" stroke="${color}" stroke-width="5" stroke-linecap="round" marker-end="url(#${color === C.interposerEdge ? 'packageArrowCyan' : 'packageArrow'})" opacity="0.88"/>`
  const supplierTag = (x, y, text, color) => `<rect x="${x}" y="${y}" width="330" height="44" rx="22" fill="${color}" opacity="0.14" stroke="${color}" stroke-width="2"/>
<text x="${x + 165}" y="${y + 29}" text-anchor="middle" fill="${color}" font-size="18" font-weight="760" letter-spacing="1.1">${text}</text>`
  const hbm = [756, 1120].map(x => `<g>
  <rect x="${x}" y="454" width="92" height="116" rx="10" fill="url(#hbmTop)" stroke="${C.hbmEdge}" stroke-width="4"/>
  <path d="M${x + 12} 478H${x + 80}M${x + 12} 500H${x + 80}M${x + 12} 522H${x + 80}M${x + 12} 544H${x + 80}" stroke="${C.hbmEdge}" stroke-width="3" opacity="0.55"/>
</g>`).join('\n')

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="title desc" font-family="Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif">
<title id="title">Advanced packaging is a qualified ecosystem</title>
<desc id="desc">Substrate materials, advanced integration, assembly and test capacity, and automated test equipment converge on a qualified accelerator package. Supplier names are examples of roles rather than one universal handoff route.</desc>
${defs()}
${backdrop()}
<text x="104" y="86" fill="${C.muted}" font-size="20" font-weight="760" letter-spacing="3.5">ASSEMBLY + TEST ECOSYSTEM</text>
<text x="104" y="150" fill="${C.ink}" font-size="48" font-weight="780">A qualified package combines four specialized capabilities</text>
<path d="M104 188H1816" stroke="${C.line}" stroke-width="2" opacity="0.62"/>

<g>
  <circle cx="228" cy="344" r="54" fill="${C.substrate}" opacity="0.25" stroke="${C.substrateEdge}" stroke-width="4"/>
  <path d="M194 322H262M194 342H262M194 362H262" stroke="${C.substrateEdge}" stroke-width="6" stroke-linecap="round"/>
  <text x="316" y="314" fill="${C.substrateEdge}" font-size="24" font-weight="820" letter-spacing="1.8">SUBSTRATE MATERIALS</text>
  <text x="316" y="352" fill="${C.ink}" font-size="23" font-weight="650">ABF dielectric + copper build-up</text>
  ${supplierTag(316, 378, 'AJINOMOTO · SUBSTRATE MAKERS', C.substrateEdge)}
</g>

<g>
  <circle cx="228" cy="714" r="54" fill="${C.interposer}" opacity="0.28" stroke="${C.interposerEdge}" stroke-width="4"/>
  <path d="M192 716H264M204 694H250M204 738H250" stroke="${C.interposerEdge}" stroke-width="5" stroke-linecap="round"/>
  <text x="316" y="684" fill="${C.interposerEdge}" font-size="24" font-weight="820" letter-spacing="1.8">ADVANCED INTEGRATION</text>
  <text x="316" y="722" fill="${C.ink}" font-size="23" font-weight="650">RDL + local silicon + die / HBM placement</text>
  ${supplierTag(316, 748, 'TSMC COWOS-L · QUALIFIED PARTNERS', C.interposerEdge)}
</g>

${beam(650, 344, 752, 472, C.substrateEdge)}
${beam(650, 714, 752, 632, C.interposerEdge)}

<g filter="url(#shadow)">
  <rect x="712" y="360" width="500" height="342" rx="34" fill="url(#substrateTop)" stroke="${C.substrateEdge}" stroke-width="5"/>
  <rect x="752" y="414" width="420" height="226" rx="20" fill="url(#interposerTop)" stroke="${C.interposerEdge}" stroke-width="5"/>
  <rect x="864" y="446" width="116" height="164" rx="12" fill="url(#computeTop)" stroke="${C.computeEdge}" stroke-width="4"/>
  <rect x="990" y="446" width="116" height="164" rx="12" fill="url(#computeTop)" stroke="${C.computeEdge}" stroke-width="4"/>
  ${hbm}
  <path d="M980 528H990" stroke="${C.computeEdge}" stroke-width="10"/>
  <path d="M730 676H1194" stroke="${C.copper}" stroke-width="4" stroke-dasharray="10 8" opacity="0.6"/>
</g>
<text x="962" y="756" text-anchor="middle" fill="${C.ink}" font-size="25" font-weight="780" letter-spacing="1.6">THE PHYSICAL PACKAGE</text>

${beam(1668, 344, 1210, 472)}
${beam(1668, 714, 1210, 632)}

<g>
  <circle cx="1692" cy="344" r="54" fill="${C.compute}" opacity="0.24" stroke="${C.computeEdge}" stroke-width="4"/>
  <path d="M1663 328H1721V360H1663ZM1675 316V328M1709 316V328M1675 360V372M1709 360V372" fill="none" stroke="${C.computeEdge}" stroke-width="5" stroke-linecap="round"/>
  <text x="1604" y="314" text-anchor="end" fill="${C.computeEdge}" font-size="24" font-weight="820" letter-spacing="1.8">ASSEMBLY + TEST CAPACITY</text>
  <text x="1604" y="352" text-anchor="end" fill="${C.ink}" font-size="23" font-weight="650">attach · protect · qualify the package</text>
  <g transform="translate(1274 378)">${supplierTag(0, 0, 'ASE · AMKOR · JCET · OTHER OSATS', C.computeEdge)}</g>
</g>

<g>
  <circle cx="1692" cy="714" r="54" fill="${C.hbm}" opacity="0.24" stroke="${C.hbmEdge}" stroke-width="4"/>
  <path d="M1658 728L1672 710L1688 722L1706 688L1724 712" fill="none" stroke="${C.hbmEdge}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="1604" y="684" text-anchor="end" fill="${C.hbmEdge}" font-size="24" font-weight="820" letter-spacing="1.8">AUTOMATED TEST EQUIPMENT</text>
  <text x="1604" y="722" text-anchor="end" fill="${C.ink}" font-size="23" font-weight="650">probe · electrical test · binning</text>
  <g transform="translate(1274 748)">${supplierTag(0, 0, 'ADVANTEST · TERADYNE', C.hbmEdge)}</g>
</g>

<path d="M962 784V866" fill="none" stroke="${C.interposerEdge}" stroke-width="7" marker-end="url(#packageArrowCyan)"/>
<rect x="672" y="884" width="580" height="86" rx="43" fill="${C.interposer}" opacity="0.34" stroke="${C.interposerEdge}" stroke-width="4"/>
<circle cx="730" cy="927" r="22" fill="${C.interposerEdge}"/>
<path d="M718 927L728 937L744 917" fill="none" stroke="${C.bg}" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
<text x="784" y="937" fill="${C.ink}" font-size="29" font-weight="820" letter-spacing="1.5">QUALIFIED ACCELERATOR PACKAGE</text>
<text x="960" y="992" text-anchor="middle" fill="${C.muted}" font-size="19" font-weight="620">Supplier roles vary by product and qualified route · ATE vendors supply the test platform</text>
</svg>\n`
}

function svg(stage) {
  const descriptions = {
    1: 'A top-down locked view shows the organic package substrate and its copper traces.',
    2: 'The same view adds an RDL-based interposer with embedded local silicon interconnects above the organic substrate.',
    3: 'The same view adds two compute dies and eight 12-high HBM3E stacks on the interposer.',
    4: 'A side cross-section traces heat from the compute dies and HBM through the thermal interface material, lid, and cooler.',
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="title desc" font-family="Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif">
<title id="title">${stage === 4 ? 'Accelerator package heat-path cross-section' : `Accelerator package assembly, state ${stage} of 4`}</title>
<desc id="desc">${descriptions[stage]}</desc>
${defs()}
${stage === 4 ? thermalSection() : scene(stage)}
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
  const ecosystemPath = join(outDir, 'package-ecosystem.svg')
  writeFileSync(ecosystemPath, packageEcosystem())
  written.push(ecosystemPath)
  return written
}

const modulePath = fileURLToPath(import.meta.url)
if (process.argv[1] && resolve(process.argv[1]) === modulePath) {
  const outDir = process.argv[2] ?? join(dirname(modulePath), '..', '..', 'rendered')
  const written = generatePackageScenes(outDir)
  console.log(`wrote ${written.length} package scenes to ${outDir}`)
}
