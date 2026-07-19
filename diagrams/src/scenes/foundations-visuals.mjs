import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const W = 1920
const H = 1080

const C = {
  bg: '#f3efe7',
  paper: '#fbf8f1',
  ink: '#252a31',
  muted: '#6f746f',
  faint: '#d8d2c7',
  blue: '#2e6f9e',
  blueSoft: '#d7e8f1',
  green: '#347d68',
  greenSoft: '#d8e9e1',
  amber: '#b97824',
  amberSoft: '#f0dfbd',
  rose: '#b44e57',
  roseSoft: '#efd8d8',
  violet: '#6f5b8f',
}

const esc = value => String(value)
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')

function defs(extra = '') {
  return `<defs>
  <filter id="shadow" x="-30%" y="-30%" width="160%" height="180%">
    <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="#28313a" flood-opacity="0.10"/>
  </filter>
  <marker id="arrow-ink" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto"><path d="M0 0L12 6L0 12Z" fill="${C.ink}"/></marker>
  <marker id="arrow-blue" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto"><path d="M0 0L12 6L0 12Z" fill="${C.blue}"/></marker>
  <marker id="arrow-green" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto"><path d="M0 0L12 6L0 12Z" fill="${C.green}"/></marker>
  <marker id="arrow-rose" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto"><path d="M0 0L12 6L0 12Z" fill="${C.rose}"/></marker>
  <pattern id="paper-grid" width="48" height="48" patternUnits="userSpaceOnUse">
    <path d="M48 0H0V48" fill="none" stroke="${C.ink}" stroke-width="1" opacity="0.025"/>
  </pattern>
${extra}
</defs>`
}

function svgDoc(title, description, body, extraDefs = '') {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="title desc" font-family="Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif">
<title id="title">${esc(title)}</title>
<desc id="desc">${esc(description)}</desc>
${defs(extraDefs)}
<rect width="${W}" height="${H}" fill="${C.bg}"/>
<rect width="${W}" height="${H}" fill="url(#paper-grid)"/>
${body}
</svg>\n`
}

function label(value, x, y, {
  size = 28,
  fill = C.ink,
  weight = 650,
  anchor = 'start',
  tracking = 0,
} = {}) {
  return `<text x="${x}" y="${y}" fill="${fill}" font-size="${size}" font-weight="${weight}" text-anchor="${anchor}" letter-spacing="${tracking}">${esc(value)}</text>`
}

function panel(x, y, width, height, stroke = C.faint) {
  return `<rect x="${x}" y="${y}" width="${width}" height="${height}" rx="28" fill="${C.paper}" stroke="${stroke}" stroke-width="3" filter="url(#shadow)"/>`
}

function sectionTitle(value, x, y, color, anchor = 'start') {
  return `${label(value, x, y, { size: 25, fill: color, weight: 760, anchor, tracking: 3 })}
<path d="M${anchor === 'middle' ? x - 54 : x} ${y + 18}H${anchor === 'middle' ? x + 54 : x + 108}" stroke="${color}" stroke-width="5" stroke-linecap="round"/>`
}

// ---------------------------------------------------------------- transistor

function transistorPanel(x, state) {
  const on = state === 'on'
  const sourceX = x + 92
  const drainX = x + 488
  const regionY = 615
  const gateX = x + 306
  const gateY = 356
  const channelY = 608
  const carriers = on
    ? Array.from({ length: 7 }, (_, i) => `<circle cx="${x + 282 + i * 40}" cy="${channelY + (i % 2 ? 5 : -5)}" r="8" fill="${C.green}"/>`).join('\n')
    : ''

  return `<g>
${panel(x, 218, 748, 648, on ? C.green : C.faint)}
${sectionTitle(on ? 'GATE ON' : 'GATE OFF', x + 70, 286, on ? C.green : C.muted)}

<rect x="${x + 58}" y="584" width="632" height="218" rx="12" fill="#e7d8bd" stroke="${C.amber}" stroke-width="3"/>
<path d="M${x + 78} 650H${x + 670}M${x + 78} 714H${x + 670}" stroke="${C.amber}" stroke-width="2" opacity="0.20"/>

<rect x="${sourceX}" y="${regionY}" width="174" height="187" rx="8" fill="${C.blueSoft}" stroke="${C.blue}" stroke-width="4"/>
<rect x="${drainX}" y="${regionY}" width="174" height="187" rx="8" fill="${C.blueSoft}" stroke="${C.blue}" stroke-width="4"/>

<rect x="${x + 274}" y="565" width="200" height="18" rx="8" fill="#fdfcf8" stroke="${C.violet}" stroke-width="3"/>
<rect x="${gateX}" y="${gateY}" width="136" height="196" rx="14" fill="${on ? C.greenSoft : C.blueSoft}" stroke="${on ? C.green : C.blue}" stroke-width="4"/>
<path d="M${gateX + 68} ${gateY - 50}V${gateY - 8}" stroke="${on ? C.green : C.muted}" stroke-width="5" marker-end="url(#arrow-${on ? 'green' : 'ink'})" opacity="${on ? 1 : 0.48}"/>
${label(on ? '+V' : '0 V', gateX + 116, gateY - 27, { size: 27, fill: on ? C.green : C.muted, weight: 760, anchor: 'middle' })}

${on
    ? `<rect x="${x + 258}" y="${channelY - 20}" width="236" height="40" rx="20" fill="${C.greenSoft}" stroke="${C.green}" stroke-width="3"/>
${carriers}
<path d="M${x + 292} ${channelY}H${x + 474}" stroke="${C.green}" stroke-width="4" marker-end="url(#arrow-green)"/>`
    : `<path d="M${x + 274} ${channelY}H${x + 474}" stroke="${C.muted}" stroke-width="3" stroke-dasharray="12 14" opacity="0.46"/>
<path d="M${x + 363} ${channelY - 18}L${x + 385} ${channelY + 18}M${x + 385} ${channelY - 18}L${x + 363} ${channelY + 18}" stroke="${C.rose}" stroke-width="5" stroke-linecap="round"/>`}

${label('SOURCE', sourceX + 87, 840, { size: 22, fill: C.blue, weight: 760, anchor: 'middle', tracking: 2 })}
${label('GATE', gateX + 68, 528, { size: 22, fill: on ? C.green : C.blue, weight: 760, anchor: 'middle', tracking: 2 })}
${label('DRAIN', drainX + 87, 840, { size: 22, fill: C.blue, weight: 760, anchor: 'middle', tracking: 2 })}
</g>`
}

function transistorSwitchScene() {
  return svgDoc(
    'A transistor is a voltage-controlled switch',
    'Two matched cross-sections show that without gate voltage no conducting channel joins source and drain, while applied gate voltage creates a channel and permits current to flow.',
    `${transistorPanel(110, 'off')}
${transistorPanel(1062, 'on')}
<path d="M882 542H1034" stroke="${C.ink}" stroke-width="4" marker-end="url(#arrow-ink)" opacity="0.72"/>
${label('voltage creates a channel', 960, 963, { size: 31, fill: C.ink, weight: 620, anchor: 'middle' })}`,
  )
}

// -------------------------------------------------------------------- yield

const DEFECTS = [
  [0.10, 0.15],
  [0.35, 0.20],
  [0.63, 0.13],
  [0.88, 0.25],
  [0.18, 0.58],
  [0.72, 0.55],
]

function dieField(x, y, width, height, cols, rows) {
  const cellW = width / cols
  const cellH = height / rows
  const failed = new Set(DEFECTS.map(([dx, dy]) => `${Math.min(cols - 1, Math.floor(dx * cols))}:${Math.min(rows - 1, Math.floor(dy * rows))}`))
  const dies = []

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const bad = failed.has(`${col}:${row}`)
      dies.push(`<rect x="${x + col * cellW + 3}" y="${y + row * cellH + 3}" width="${cellW - 6}" height="${cellH - 6}" rx="5" fill="${bad ? C.roseSoft : C.greenSoft}" stroke="${bad ? C.rose : C.green}" stroke-width="${bad ? 3 : 1.7}" opacity="${bad ? 1 : 0.82}"/>`)
    }
  }

  const defects = DEFECTS.map(([dx, dy]) => {
    const cx = x + dx * width
    const cy = y + dy * height
    return `<circle cx="${cx}" cy="${cy}" r="17" fill="none" stroke="${C.rose}" stroke-width="3" opacity="0.28"/>
<circle cx="${cx}" cy="${cy}" r="8" fill="${C.rose}"/>`
  }).join('\n')

  return { svg: `${dies.join('\n')}\n${defects}`, good: cols * rows - failed.size, total: cols * rows }
}

function yieldPanel(x, cols, rows, title) {
  const fieldX = x + 56
  const fieldY = 326
  const fieldW = 660
  const fieldH = 480
  const field = dieField(fieldX, fieldY, fieldW, fieldH, cols, rows)

  return `<g>
${panel(x, 204, 772, 704, C.faint)}
${sectionTitle(title, x + 386, 276, C.blue, 'middle')}
${field.svg}
${label(`${field.good} / ${field.total} good`, x + 386, 860, { size: 34, fill: field.good / field.total > 0.7 ? C.green : C.rose, weight: 760, anchor: 'middle' })}
</g>`
}

function yieldDefectsScene() {
  return svgDoc(
    'Larger dies lose more yield to the same defects',
    'The same six defects are placed across equal wafer areas. Forty-two of forty-eight small dies remain good, but only six of twelve large dies remain good.',
    `${label('SAME AREA · SAME SIX DEFECTS', 960, 108, { size: 25, fill: C.muted, weight: 760, anchor: 'middle', tracking: 4 })}
${yieldPanel(120, 8, 6, 'SMALL DIE')}
${yieldPanel(1028, 4, 3, 'LARGE DIE')}
<path d="M892 556H1000" stroke="${C.ink}" stroke-width="4" marker-end="url(#arrow-ink)" opacity="0.58"/>
<circle cx="772" cy="982" r="8" fill="${C.rose}"/>
${label('one defect can kill one entire die', 800, 992, { size: 27, fill: C.ink, weight: 600 })}`,
  )
}

// ---------------------------------------------------------- density and clock

function polyline(points, color, width = 5) {
  return `<polyline points="${points.map(([x, y]) => `${x},${y}`).join(' ')}" fill="none" stroke="${color}" stroke-width="${width}" stroke-linecap="round" stroke-linejoin="round"/>`
}

function dot(x, y, color, r = 7) {
  return `<circle cx="${x}" cy="${y}" r="${r}" fill="${C.paper}" stroke="${color}" stroke-width="4"/>`
}

function chartAxes(x, y, width, height) {
  return `<path d="M${x} ${y}V${y + height}H${x + width}" fill="none" stroke="${C.ink}" stroke-width="3" opacity="0.72"/>
<path d="M${x} ${y + height * 0.33}H${x + width}M${x} ${y + height * 0.66}H${x + width}" stroke="${C.faint}" stroke-width="2" stroke-dasharray="6 10"/>`
}

function coreGrid(x, y, cols, rows, size, gap) {
  const cells = []
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const fill = (row + col) % 5 === 0 ? C.green : C.greenSoft
      cells.push(`<rect x="${x + col * (size + gap)}" y="${y + row * (size + gap)}" width="${size}" height="${size}" rx="5" fill="${fill}" stroke="${C.green}" stroke-width="2"/>`)
    }
  }
  return cells.join('\n')
}

function densityClockScene() {
  const chartX = 150
  const chartW = 1050
  const topY = 176
  const chartH = 260
  const lowerY = 586
  const x1971 = chartX
  const x2004 = chartX + 635
  const x2026 = chartX + chartW

  const densityPoints = [[x1971, 408], [430, 365], [650, 295], [x2004, 246], [1000, 144], [x2026, 96]]
  const clockPoints = [[x1971, 850], [430, 820], [650, 742], [x2004, 636], [1000, 624], [x2026, 610]]

  return svgDoc(
    'Transistor density rose while clock speed stalled',
    'Two aligned time series show transistor counts continuing to climb while clock speed plateaus around 2004. A separate visual shows the resulting shift from one faster core to many parallel cores.',
    `${sectionTitle('TRANSISTORS', chartX, 112, C.blue)}
${chartAxes(chartX, topY, chartW, chartH)}
${polyline(densityPoints, C.blue, 7)}
${densityPoints.map(([x, y]) => dot(x, y, C.blue)).join('\n')}
${label('2,300', x1971 + 10, 390, { size: 22, fill: C.blue, weight: 700 })}
${label('208B', x2026 - 12, 72, { size: 27, fill: C.blue, weight: 760, anchor: 'end' })}

${sectionTitle('CLOCK SPEED', chartX, 522, C.rose)}
${chartAxes(chartX, lowerY, chartW, chartH)}
${polyline(clockPoints, C.rose, 7)}
${clockPoints.map(([x, y]) => dot(x, y, C.rose)).join('\n')}
${label('~3.8 GHz', x2004, 602, { size: 24, fill: C.rose, weight: 760, anchor: 'middle' })}
${label('~4–6 GHz', x2026 - 10, 576, { size: 24, fill: C.rose, weight: 760, anchor: 'end' })}

<path d="M${x2004} 154V880" stroke="${C.amber}" stroke-width="3" stroke-dasharray="8 10"/>
${label('2004', x2004, 918, { size: 22, fill: C.amber, weight: 760, anchor: 'middle' })}
${label('POWER WALL', x2004, 954, { size: 20, fill: C.amber, weight: 760, anchor: 'middle', tracking: 2 })}
${label('1971', x1971, 918, { size: 22, fill: C.muted, weight: 620, anchor: 'middle' })}
${label('2026', x2026, 918, { size: 22, fill: C.muted, weight: 620, anchor: 'middle' })}

<path d="M1284 152V908" stroke="${C.faint}" stroke-width="3"/>
${sectionTitle('AFTER 2004', 1554, 112, C.green, 'middle')}
<rect x="1454" y="224" width="200" height="200" rx="24" fill="${C.greenSoft}" stroke="${C.green}" stroke-width="5"/>
<path d="M1494 264H1614V384H1494Z" fill="none" stroke="${C.green}" stroke-width="3" opacity="0.42"/>
${label('ONE CORE', 1554, 470, { size: 21, fill: C.muted, weight: 760, anchor: 'middle', tracking: 2 })}
<path d="M1554 510V580" stroke="${C.green}" stroke-width="5" marker-end="url(#arrow-green)"/>
${coreGrid(1396, 624, 8, 6, 34, 12)}
${label('MANY CORES', 1554, 950, { size: 23, fill: C.green, weight: 760, anchor: 'middle', tracking: 2 })}`,
  )
}

// ---------------------------------------------------------------------- EDA

function rtlArtifact(x, y) {
  const widths = [182, 118, 202, 156, 184, 92]
  return `<g>
<rect x="${x}" y="${y}" width="254" height="248" rx="18" fill="#f9fbfc" stroke="${C.blue}" stroke-width="4"/>
${widths.map((width, i) => `<rect x="${x + 30 + (i === 2 || i === 4 ? 28 : 0)}" y="${y + 34 + i * 32}" width="${width}" height="8" rx="4" fill="${i === 2 ? C.violet : C.blue}" opacity="${i === 2 ? 0.82 : 0.58}"/>`).join('\n')}
</g>`
}

function gateSymbol(type, x, y) {
  if (type === 'not') {
    return `<path d="M${x} ${y}L${x + 54} ${y + 30}L${x} ${y + 60}Z" fill="${C.amberSoft}" stroke="${C.amber}" stroke-width="4"/><circle cx="${x + 63}" cy="${y + 30}" r="8" fill="${C.paper}" stroke="${C.amber}" stroke-width="4"/>`
  }
  return `<path d="M${x} ${y}H${x + 30}Q${x + 88} ${y + 30} ${x + 30} ${y + 60}H${x}Z" fill="${C.amberSoft}" stroke="${C.amber}" stroke-width="4"/>`
}

function gatesArtifact(x, y) {
  return `<g>
${gateSymbol('and', x + 18, y + 28)}
${gateSymbol('not', x + 152, y + 24)}
${gateSymbol('and', x + 78, y + 128)}
<path d="M${x} ${y + 58}H${x + 18}M${x + 106} ${y + 58}H${x + 152}M${x + 223} ${y + 54}H${x + 248}M${x + 166} ${y + 158}H${x + 248}M${x + 54} ${y + 88}V${y + 158}H${x + 78}" fill="none" stroke="${C.ink}" stroke-width="4"/>
<circle cx="${x + 54}" cy="${y + 88}" r="6" fill="${C.ink}"/>
</g>`
}

function placedArtifact(x, y) {
  const cells = []
  const widths = [34, 52, 40, 64, 36, 48]
  for (let row = 0; row < 6; row++) {
    let cx = x + 10
    for (let col = 0; col < 5; col++) {
      const width = widths[(row + col) % widths.length]
      const color = (row + col) % 4 === 0 ? C.violet : C.blue
      cells.push(`<rect x="${cx}" y="${y + 12 + row * 38}" width="${width}" height="26" rx="4" fill="${color}" opacity="${0.42 + ((row + col) % 3) * 0.16}"/>`)
      cx += width + 7
    }
  }
  return `<rect x="${x}" y="${y}" width="254" height="248" rx="15" fill="#eef2f4" stroke="${C.blue}" stroke-width="4"/>${cells.join('\n')}`
}

function routedArtifact(x, y) {
  const routes = []
  for (let i = 0; i < 8; i++) {
    routes.push(`<path d="M${x + 18} ${y + 24 + i * 26}H${x + 68 + i * 12}V${y + 50 + ((i * 3) % 7) * 24}H${x + 228}" fill="none" stroke="${i % 2 ? C.violet : C.green}" stroke-width="${i % 3 === 0 ? 7 : 4}" opacity="0.72"/>`)
  }
  return `<g>
<rect x="${x}" y="${y}" width="254" height="248" rx="15" fill="#e8ece8" stroke="${C.green}" stroke-width="4"/>
<g opacity="0.34">${placedArtifact(x, y)}</g>
${routes.join('\n')}
</g>`
}

function stage(x, title, color, artifact) {
  return `<g>
${panel(x, 282, 326, 412, color)}
${sectionTitle(title, x + 163, 352, color, 'middle')}
<g transform="translate(${x + 36} 398)">${artifact}</g>
</g>`
}

function edaFlowScene() {
  const stageXs = [92, 560, 1028, 1496]
  const arrowXs = [[430, 532], [898, 1000], [1366, 1468]]

  return svgDoc(
    'EDA turns hardware descriptions into routed chip layouts',
    'Four visual stages transform RTL source into logic gates, placed standard cells, and a routed physical layout. A verification arrow loops from the final layout back through the design flow.',
    `${label('HUMANS DESCRIBE INTENT', 92, 142, { size: 23, fill: C.muted, weight: 760, tracking: 2.4 })}
${label('SOFTWARE BUILDS THE ARTIFACT', 1822, 142, { size: 23, fill: C.muted, weight: 760, anchor: 'end', tracking: 2.4 })}
${stage(stageXs[0], 'RTL', C.blue, rtlArtifact(0, 0))}
${stage(stageXs[1], 'GATES', C.amber, gatesArtifact(0, 24))}
${stage(stageXs[2], 'PLACED', C.violet, placedArtifact(0, 0))}
${stage(stageXs[3], 'ROUTED', C.green, routedArtifact(0, 0))}
${arrowXs.map(([x1, x2]) => `<path d="M${x1} 488H${x2}" stroke="${C.ink}" stroke-width="4" marker-end="url(#arrow-ink)" opacity="0.65"/>`).join('\n')}

<path d="M1658 744V834Q1658 912 1580 912H342Q184 912 184 754" fill="none" stroke="${C.rose}" stroke-width="6" stroke-dasharray="13 11" marker-end="url(#arrow-rose)"/>
<rect x="808" y="858" width="304" height="106" rx="53" fill="${C.bg}" stroke="${C.rose}" stroke-width="4"/>
${label('VERIFY', 960, 925, { size: 31, fill: C.rose, weight: 790, anchor: 'middle', tracking: 4 })}
${label('repeat until the layout works', 960, 1025, { size: 27, fill: C.ink, weight: 580, anchor: 'middle' })}`,
  )
}

const SCENES = {
  'transistor-switch.svg': transistorSwitchScene,
  'yield-defects.svg': yieldDefectsScene,
  'density-clock.svg': densityClockScene,
  'eda-flow.svg': edaFlowScene,
}

export function generateFoundationsVisuals(outDir) {
  mkdirSync(outDir, { recursive: true })
  const written = []
  for (const [filename, render] of Object.entries(SCENES)) {
    const path = join(outDir, filename)
    writeFileSync(path, render())
    written.push(path)
  }
  return written
}

const modulePath = fileURLToPath(import.meta.url)
if (process.argv[1] && resolve(process.argv[1]) === modulePath) {
  const outDir = process.argv[2] ?? join(dirname(modulePath), '..', '..', 'rendered')
  const written = generateFoundationsVisuals(outDir)
  console.log(`wrote ${written.length} foundations visuals to ${outDir}`)
}
