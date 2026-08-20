import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const W = 1920
const H = 1080

const C = {
  bg: '#f4efe6',
  paper: '#fbf8f1',
  ink: '#1f272d',
  muted: '#74746f',
  line: '#a8a49a',
  faint: '#ddd6c9',
  blue: '#3977a8',
  blueSoft: '#d6e7f1',
  teal: '#387d72',
  tealSoft: '#d7e7df',
  amber: '#c3842e',
  amberSoft: '#f1dfbd',
  violet: '#7358a3',
  violetSoft: '#e1d8ef',
  rose: '#ad5a5a',
  roseSoft: '#efd7d1',
  green: '#4f8064',
  greenSoft: '#d9e7db',
}

const esc = value => String(value)
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')

function defs() {
  return `<defs>
  <filter id="shadow" x="-25%" y="-25%" width="150%" height="170%">
    <feDropShadow dx="0" dy="12" stdDeviation="12" flood-color="#1f272d" flood-opacity="0.13"/>
  </filter>
  <marker id="arrow-ink" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto">
    <path d="M0 0L12 6L0 12Z" fill="${C.ink}"/>
  </marker>
  <marker id="arrow-blue" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto">
    <path d="M0 0L12 6L0 12Z" fill="${C.blue}"/>
  </marker>
  <marker id="arrow-violet" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto">
    <path d="M0 0L12 6L0 12Z" fill="${C.violet}"/>
  </marker>
  <pattern id="hatch" width="18" height="18" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
    <path d="M0 0V18" stroke="${C.rose}" stroke-width="5" opacity="0.36"/>
  </pattern>
</defs>`
}

function svgDoc(title, description, body) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="title desc" font-family="Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif">
<title id="title">${esc(title)}</title>
<desc id="desc">${esc(description)}</desc>
${defs()}
<rect width="${W}" height="${H}" fill="${C.bg}"/>
${body}
</svg>\n`
}

function text(x, y, value, { size = 28, fill = C.ink, weight = 600, anchor = 'start', tracking = 0 } = {}) {
  return `<text x="${x}" y="${y}" fill="${fill}" font-size="${size}" font-weight="${weight}" text-anchor="${anchor}" letter-spacing="${tracking}">${esc(value)}</text>`
}

function callout(label, x, y, targetX, targetY, { color = C.ink, anchor = 'start' } = {}) {
  const estimatedWidth = label.length * 14
  const targetIsRight = targetX > x
  const leadX = targetIsRight
    ? (anchor === 'end' ? x + 18 : x + estimatedWidth + 18)
    : (anchor === 'start' ? x - 18 : x - estimatedWidth - 18)
  return `<path d="M${leadX} ${y - 8}L${targetX} ${targetY}" fill="none" stroke="${color}" stroke-width="2.5"/>
<circle cx="${targetX}" cy="${targetY}" r="5" fill="${color}"/>
${text(x, y, label, { size: 24, fill: color, weight: 720, anchor, tracking: 1.1 })}`
}

function panel(x, y, w, h) {
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="34" fill="${C.paper}" stroke="${C.faint}" stroke-width="3"/>`
}

function memoryTypesScene() {
  const refreshDots = [
    [624, 462], [642, 482], [658, 458], [627, 514], [653, 527], [643, 556],
  ].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="7" fill="${C.blue}"/>`).join('')

  const nandLayers = Array.from({ length: 12 }, (_, i) => {
    const y = 315 + i * 42
    const active = [2, 5, 8, 10].includes(i)
    return `<rect x="1190" y="${y}" width="500" height="24" rx="8" fill="${active ? C.amberSoft : C.paper}" stroke="${active ? C.amber : C.line}" stroke-width="${active ? 3 : 2}"/>
${active ? `<circle cx="1370" cy="${y + 12}" r="7" fill="${C.amber}"/><circle cx="1510" cy="${y + 12}" r="7" fill="${C.amber}"/>` : ''}`
  }).join('\n')

  return svgDoc(
    'DRAM and NAND store bits in different physical structures',
    'A DRAM cell uses one transistor and one capacitor that must be refreshed about every 64 milliseconds. A vertical NAND string traps charge across hundreds of layers and retains data without power.',
    `${panel(96, 104, 820, 850)}
${panel(1004, 104, 820, 850)}
${text(154, 185, 'DRAM', { size: 48, fill: C.blue, weight: 780, tracking: 1.2 })}
${text(154, 226, 'VOLATILE WORKING MEMORY', { size: 20, fill: C.muted, weight: 700, tracking: 2.4 })}
<g>
  <path d="M286 338V690" stroke="${C.ink}" stroke-width="8" stroke-linecap="round"/>
  ${text(286, 312, 'BIT LINE', { size: 18, fill: C.muted, weight: 700, anchor: 'middle', tracking: 1.5 })}
  <path d="M286 508H414" stroke="${C.ink}" stroke-width="8" stroke-linecap="round"/>
  <path d="M414 474V542M452 474V542" stroke="${C.blue}" stroke-width="10" stroke-linecap="round"/>
  <path d="M452 508H608" stroke="${C.ink}" stroke-width="8" stroke-linecap="round"/>
  <path d="M430 390V456" stroke="${C.blue}" stroke-width="8" stroke-linecap="round"/>
  <path d="M338 390H430" stroke="${C.blue}" stroke-width="8" stroke-linecap="round"/>
  ${text(338, 369, 'WORD LINE', { size: 18, fill: C.blue, weight: 700, anchor: 'middle', tracking: 1.5 })}
  <circle cx="608" cy="508" r="10" fill="${C.ink}"/>
  <path d="M608 508H622" stroke="${C.ink}" stroke-width="8"/>
  <path d="M622 412V604M690 412V604" stroke="${C.blue}" stroke-width="12" stroke-linecap="round"/>
  ${refreshDots}
  <path d="M716 392C806 424 818 555 732 626" fill="none" stroke="${C.blue}" stroke-width="5" stroke-dasharray="12 10" marker-end="url(#arrow-blue)"/>
  ${text(782, 508, 'refresh', { size: 24, fill: C.blue, weight: 740, anchor: 'middle' })}
  ${text(782, 540, '~64 ms', { size: 22, fill: C.blue, weight: 620, anchor: 'middle' })}
</g>
<path d="M154 746H858" stroke="${C.faint}" stroke-width="3"/>
${text(506, 811, '1 transistor + 1 capacitor', { size: 31, weight: 720, anchor: 'middle' })}
${text(506, 858, 'charge leaks · power off → empty', { size: 24, fill: C.muted, weight: 560, anchor: 'middle' })}

${text(1062, 185, 'NAND', { size: 48, fill: C.amber, weight: 780, tracking: 1.2 })}
${text(1062, 226, 'NONVOLATILE STORAGE', { size: 20, fill: C.muted, weight: 700, tracking: 2.4 })}
<g filter="url(#shadow)">
  <rect x="1150" y="282" width="580" height="560" rx="26" fill="#eee8dc" stroke="${C.faint}" stroke-width="3"/>
  ${nandLayers}
  <rect x="1407" y="290" width="66" height="540" rx="30" fill="${C.ink}" opacity="0.9"/>
  <rect x="1427" y="306" width="26" height="508" rx="13" fill="${C.amberSoft}"/>
</g>
${callout('TRAPPED CHARGE', 1110, 424, 1370, 411, { color: C.amber, anchor: 'end' })}
${callout('VERTICAL CHANNEL', 1110, 690, 1438, 648, { color: C.ink, anchor: 'end' })}
<path d="M1062 870H1766" stroke="${C.faint}" stroke-width="3"/>
${text(1414, 912, '200–400+ layers', { size: 31, weight: 720, anchor: 'middle' })}
${text(1414, 944, 'charge remains without power', { size: 20, fill: C.muted, weight: 560, anchor: 'middle' })}`,
  )
}

function isoSlab({ x, y, w, dx, dy, h, fill, edge, opacity = 1 }) {
  return `<g opacity="${opacity}">
  <path d="M${x} ${y}H${x + w}L${x + w - dx} ${y + dy}H${x - dx}Z" fill="${fill}" stroke="${edge}" stroke-width="3"/>
  <path d="M${x - dx} ${y + dy}H${x + w - dx}V${y + dy + h}H${x - dx}Z" fill="${edge}" opacity="0.28" stroke="${edge}" stroke-width="3"/>
  <path d="M${x + w} ${y}L${x + w - dx} ${y + dy}V${y + dy + h}L${x + w} ${y + h}Z" fill="${edge}" opacity="0.45" stroke="${edge}" stroke-width="3"/>
</g>`
}

function hbmPackageScene() {
  const interposer = isoSlab({ x: 370, y: 780, w: 1280, dx: 125, dy: 62, h: 30, fill: C.tealSoft, edge: C.teal })
  const baseDie = isoSlab({ x: 500, y: 660, w: 390, dx: 78, dy: 39, h: 38, fill: C.violet, edge: C.ink })
  const dramDies = Array.from({ length: 8 }, (_, i) => isoSlab({
    x: 500,
    y: 610 - i * 48,
    w: 390,
    dx: 78,
    dy: 39,
    h: 18,
    fill: i % 2 ? C.violetSoft : '#d3c5e7',
    edge: C.violet,
  })).join('\n')
  const gpu = isoSlab({ x: 1100, y: 548, w: 450, dx: 105, dy: 52, h: 96, fill: C.blue, edge: C.ink })

  const tsvs = [554, 636, 718, 800].map(x => `<path d="M${x} 290V694" stroke="${C.violet}" stroke-width="7" stroke-linecap="round" opacity="0.84"/>`).join('')
  const microbumps = Array.from({ length: 10 }, (_, i) => `<circle cx="${456 + i * 38}" cy="735" r="8" fill="${C.amber}"/>`).join('')
  const wideBus = Array.from({ length: 11 }, (_, i) => {
    const y = 716 + i * 6
    return `<path d="M820 ${y}C930 ${y} 980 ${650 + i * 4} 1090 ${650 + i * 4}" fill="none" stroke="${C.violet}" stroke-width="3" opacity="${0.42 + i * 0.035}"/>`
  }).join('')

  return svgDoc(
    'High-bandwidth memory beside a GPU on a silicon interposer',
    'An exploded axonometric package shows eight representative DRAM dies joined by through-silicon vias and microbumps above a logic base die. A wide interface crosses the silicon interposer to the GPU.',
    `<path d="M168 922H1752" stroke="${C.faint}" stroke-width="3"/>
${interposer}
${wideBus}
${gpu}
${baseDie}
${dramDies}
${tsvs}
${microbumps}
${text(628, 208, 'HBM STACK', { size: 30, fill: C.violet, weight: 780, anchor: 'middle', tracking: 1.8 })}
${text(1274, 535, 'GPU', { size: 38, fill: C.paper, weight: 780, anchor: 'middle', tracking: 2 })}
${callout('8 / 12 / 16 DRAM DIES', 142, 310, 476, 350, { color: C.violet })}
${callout('TSVs', 142, 472, 554, 472, { color: C.violet })}
${callout('LOGIC BASE DIE', 142, 668, 452, 685, { color: C.ink })}
${callout('MICROBUMPS', 142, 758, 520, 735, { color: C.amber })}
${callout('GPU DIE', 1718, 510, 1444, 592, { color: C.blue, anchor: 'end' })}
${callout('WIDE MEMORY INTERFACE', 1718, 718, 1000, 684, { color: C.violet, anchor: 'end' })}
${callout('SILICON INTERPOSER', 1718, 868, 1500, 826, { color: C.teal, anchor: 'end' })}
${text(960, 978, 'Memory sits millimeters from compute.', { size: 32, fill: C.muted, weight: 620, anchor: 'middle' })}`,
  )
}

function defect(x, y) {
  return `<g transform="translate(${x} ${y})">
  <circle r="26" fill="${C.roseSoft}" stroke="${C.rose}" stroke-width="4"/>
  <path d="M-34 0H34M0-34V34M-24-24L24 24M24-24L-24 24" stroke="${C.rose}" stroke-width="6" stroke-linecap="round"/>
</g>`
}

function tile(x, y, w, h, { fill = C.blueSoft, edge = C.blue, bad = false } = {}) {
  return `<g>
  <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="18" fill="${fill}" stroke="${edge}" stroke-width="4"/>${bad ? `
  <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="18" fill="url(#hatch)"/>` : ''}
</g>`
}

function chipletYieldScene() {
  const hbm = [1198, 1330, 1462, 1594].map(x => `<g>
  <rect x="${x}" y="824" width="92" height="78" rx="11" fill="${C.violetSoft}" stroke="${C.violet}" stroke-width="3"/>
  <path d="M${x + 12} 844H${x + 80}M${x + 12} 862H${x + 80}M${x + 12} 880H${x + 80}" stroke="${C.violet}" stroke-width="3" opacity="0.65"/>
</g>`).join('')

  return svgDoc(
    'Chiplets reduce defect loss and allow mixed process nodes beside HBM',
    'The same defect destroys a large monolithic die but only one of four smaller chiplets. A package below combines leading-edge compute tiles, a mature-node input-output die, and HBM on a silicon interposer.',
    `${text(470, 132, 'ONE MONOLITH', { size: 24, fill: C.muted, weight: 760, anchor: 'middle', tracking: 2.2 })}
${text(1450, 132, 'FOUR CHIPLET DIES', { size: 24, fill: C.muted, weight: 760, anchor: 'middle', tracking: 2.2 })}
<g filter="url(#shadow)">
  ${tile(180, 190, 580, 330, { fill: C.roseSoft, edge: C.rose, bad: true })}
  <path d="M230 245H710M230 325H710M230 405H710M330 220V490M470 220V490M610 220V490" stroke="${C.rose}" stroke-width="2" opacity="0.24"/>
</g>
${defect(615, 306)}
${text(470, 574, 'whole die lost', { size: 32, fill: C.rose, weight: 760, anchor: 'middle' })}
<path d="M855 344H1065" stroke="${C.ink}" stroke-width="4" stroke-dasharray="11 10" marker-end="url(#arrow-ink)"/>
${text(960, 312, 'same defect', { size: 22, fill: C.muted, weight: 650, anchor: 'middle' })}
<g filter="url(#shadow)">
  ${tile(1160, 190, 260, 145, { fill: C.greenSoft, edge: C.green })}
  ${tile(1480, 190, 260, 145, { fill: C.roseSoft, edge: C.rose, bad: true })}
  ${tile(1160, 375, 260, 145, { fill: C.greenSoft, edge: C.green })}
  ${tile(1480, 375, 260, 145, { fill: C.greenSoft, edge: C.green })}
</g>
${defect(1610, 262)}
${text(1450, 574, 'one tile lost · three usable', { size: 32, fill: C.green, weight: 760, anchor: 'middle' })}

<path d="M102 650H1818" stroke="${C.faint}" stroke-width="3"/>
${text(132, 708, 'ONE PACKAGE', { size: 22, fill: C.muted, weight: 760, tracking: 2.2 })}
<g filter="url(#shadow)">
  <rect x="350" y="776" width="1370" height="164" rx="30" fill="${C.tealSoft}" stroke="${C.teal}" stroke-width="4"/>
  <path d="M390 868H1680" stroke="${C.teal}" stroke-width="3" opacity="0.32"/>
  ${tile(470, 806, 250, 106, { fill: C.blueSoft, edge: C.blue })}
  ${tile(748, 806, 250, 106, { fill: C.blueSoft, edge: C.blue })}
  ${tile(1025, 806, 120, 106, { fill: C.amberSoft, edge: C.amber })}
  ${hbm}
</g>
${text(595, 862, 'COMPUTE', { size: 24, fill: C.blue, weight: 760, anchor: 'middle' })}
${text(873, 862, 'COMPUTE', { size: 24, fill: C.blue, weight: 760, anchor: 'middle' })}
${text(1085, 855, 'I/O', { size: 24, fill: C.amber, weight: 780, anchor: 'middle' })}
${text(1085, 883, 'mature node', { size: 15, fill: C.amber, weight: 650, anchor: 'middle' })}
${text(1448, 964, 'HBM millimeters away', { size: 22, fill: C.violet, weight: 700, anchor: 'middle' })}
${callout('SILICON INTERPOSER', 132, 912, 350, 896, { color: C.teal })}
${text(735, 1008, 'advanced nodes only where they pay', { size: 25, fill: C.muted, weight: 600, anchor: 'middle' })}`,
  )
}

function replacementHorizonScene() {
  const node = (x, y, title, sub, color, direction = 'down') => {
    const labelY = direction === 'down' ? y + 112 : y - 106
    const lineEnd = direction === 'down' ? labelY - 48 : labelY + 24
    return `<g>
<circle cx="${x}" cy="${y}" r="15" fill="${C.paper}" stroke="${color}" stroke-width="7"/>
<path d="M${x} ${y + (direction === 'down' ? 22 : -22)}V${lineEnd}" stroke="${color}" stroke-width="3" stroke-dasharray="7 7"/>
${text(x, labelY, title, { size: 21, fill: color, weight: 820, anchor: 'middle', tracking: 0.8 })}
${text(x, labelY + 31, sub, { size: 16, fill: C.muted, weight: 600, anchor: 'middle' })}
</g>`
  }

  return svgDoc(
    'Relative replacement difficulty across semiconductor capabilities',
    'A continuous rising horizon distinguishes reallocating existing qualified volume, building and qualifying manufacturing capability, and recreating an interdependent technology stack. OSAT assembly and test sits in the qualification region rather than at the easiest endpoint.',
    `${text(960, 82, 'RELATIVE REPLACEMENT DIFFICULTY', { size: 26, fill: C.muted, weight: 800, anchor: 'middle', tracking: 2.4 })}
${text(960, 132, 'Each step adds qualification, manufacturing depth, and interdependent know-how', { size: 25, fill: C.ink, weight: 650, anchor: 'middle' })}

<path d="M142 724C420 724 540 686 730 630S1110 552 1300 492S1600 376 1778 304L1778 770H142Z" fill="${C.blueSoft}" opacity="0.34"/>
<path d="M142 724C420 724 540 686 730 630" fill="none" stroke="${C.green}" stroke-width="17" stroke-linecap="round"/>
<path d="M730 630C980 584 1110 552 1300 492" fill="none" stroke="${C.violet}" stroke-width="17" stroke-linecap="round"/>
<path d="M1300 492C1510 426 1640 354 1744 318" fill="none" stroke="${C.amber}" stroke-width="17" stroke-linecap="round"/>
<path d="M1740 288L1800 304L1754 346Z" fill="${C.amber}"/>

${text(150, 230, 'REALLOCATE', { size: 22, fill: C.green, weight: 840, tracking: 2.1 })}
${text(150, 265, 'existing qualified volume', { size: 18, fill: C.muted, weight: 620 })}
<path d="M150 288H500" stroke="${C.green}" stroke-width="4" opacity="0.6"/>

${text(740, 230, 'BUILD + QUALIFY', { size: 22, fill: C.violet, weight: 840, tracking: 2.1 })}
${text(740, 265, 'process, yield, and manufacturing depth', { size: 18, fill: C.muted, weight: 620 })}
<path d="M740 288H1215" stroke="${C.violet}" stroke-width="4" opacity="0.6"/>

${text(1340, 230, 'RECREATE A STACK', { size: 22, fill: C.amber, weight: 840, tracking: 2.1 })}
${text(1340, 265, 'tools, IP, suppliers, and know-how align', { size: 18, fill: C.muted, weight: 620 })}
<path d="M1340 288H1778" stroke="${C.amber}" stroke-width="4" opacity="0.6"/>

${node(260, 720, 'QUALIFIED ALLOCATION', 'reroute existing volume', C.green, 'down')}
${node(565, 676, 'OSAT ASSEMBLY + TEST', 'a new route still needs qualification', C.teal, 'up')}
${node(805, 617, 'ADVANCED MATERIALS', 'scale a controlled process', C.violet, 'down')}
${node(1035, 568, 'HBM AT SCALE', 'capacity plus yield learning', C.violet, 'up')}
${node(1240, 512, 'PROCESS CONTROL', 'tools plus application know-how', C.violet, 'down')}
${node(1480, 425, 'LOGIC + COWOS', 'co-optimized manufacturing', C.amber, 'up')}
${node(1700, 334, 'INTERDEPENDENT STACKS', 'EUV + optics · EDA + CUDA', C.amber, 'down')}

<path d="M142 972H1778" stroke="${C.line}" stroke-width="4" marker-end="url(#arrow-ink)"/>
${text(142, 1012, 'MORE SUBSTITUTABLE', { size: 17, fill: C.muted, weight: 760, tracking: 1.8 })}
${text(1778, 1012, 'MORE INTERDEPENDENT', { size: 17, fill: C.muted, weight: 760, anchor: 'end', tracking: 1.8 })}
${text(960, 1050, 'Qualitative synthesis · not a forecast in years', { size: 16, fill: C.muted, weight: 560, anchor: 'middle' })}`,
  )
}

const VISUALS = [
  ['memory-types.svg', memoryTypesScene],
  ['hbm-package.svg', hbmPackageScene],
  ['chiplet-yield.svg', chipletYieldScene],
  ['replacement-horizon.svg', replacementHorizonScene],
]

export function generateMemoryVisuals(outDir) {
  mkdirSync(outDir, { recursive: true })
  const written = []
  for (const [name, render] of VISUALS) {
    const path = join(outDir, name)
    writeFileSync(path, render(), 'utf8')
    written.push(path)
  }
  return written
}

const modulePath = fileURLToPath(import.meta.url)
if (process.argv[1] && resolve(process.argv[1]) === modulePath) {
  const outDir = process.argv[2] ?? join(dirname(modulePath), '..', '..', 'rendered')
  const written = generateMemoryVisuals(outDir)
  console.log(`wrote ${written.length} memory visuals to ${outDir}`)
}
