import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const W = 1920
const H = 1080

const C = {
  bg: '#f3efe6',
  paper: '#fffaf0',
  ink: '#171a1f',
  graphite: '#4f5965',
  muted: '#7b827f',
  hairline: '#c9c1b3',
  grid: '#ded7ca',
  amber: '#c17a1b',
  amberSoft: '#f2e2c7',
  blue: '#2f68a2',
  blueSoft: '#dce8f3',
  green: '#16745c',
  greenSoft: '#d7ebe3',
  violet: '#755aa3',
  violetSoft: '#e6dff0',
  danger: '#ad4355',
}

const esc = value => String(value)
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')

function defs() {
  return `<defs>
  <pattern id="paper-grid" width="48" height="48" patternUnits="userSpaceOnUse">
    <path d="M48 0H0V48" fill="none" stroke="${C.grid}" stroke-width="1" opacity="0.22"/>
  </pattern>
  <filter id="paper-shadow" x="-30%" y="-30%" width="160%" height="180%">
    <feDropShadow dx="0" dy="10" stdDeviation="13" flood-color="#493f30" flood-opacity="0.12"/>
  </filter>
  <marker id="arrow-ink" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto">
    <path d="M0 0L12 6L0 12Z" fill="${C.graphite}"/>
  </marker>
  <marker id="arrow-amber" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto">
    <path d="M0 0L12 6L0 12Z" fill="${C.amber}"/>
  </marker>
  <marker id="arrow-violet" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto">
    <path d="M0 0L12 6L0 12Z" fill="${C.violet}"/>
  </marker>
</defs>`
}

function svgDoc(title, description, body) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="title desc" font-family="Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif">
<title id="title">${esc(title)}</title>
<desc id="desc">${esc(description)}</desc>
${defs()}
<rect width="${W}" height="${H}" fill="${C.bg}"/>
<rect width="${W}" height="${H}" fill="url(#paper-grid)"/>
${body}
</svg>\n`
}

function text(x, y, value, {
  size = 28,
  fill = C.ink,
  weight = 600,
  anchor = 'start',
  tracking = 0,
  opacity = 1,
} = {}) {
  return `<text x="${x}" y="${y}" fill="${fill}" font-size="${size}" font-weight="${weight}" text-anchor="${anchor}" letter-spacing="${tracking}" opacity="${opacity}">${esc(value)}</text>`
}

function header(kicker, title) {
  return `${text(104, 92, kicker.toUpperCase(), { size: 20, fill: C.muted, weight: 760, tracking: 3.6 })}
${text(104, 156, title, { size: 48, weight: 760 })}
<path d="M104 190H1816" stroke="${C.hairline}" stroke-width="2"/>`
}

function card(x, y, w, h, color, fill) {
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="22" fill="${fill}" stroke="${color}" stroke-width="3" filter="url(#paper-shadow)"/>`
}

function toolGlyph(kind, x, y, color) {
  if (kind === 'deposit') return `<path d="M${x - 55} ${y + 42}H${x + 55}M${x - 48} ${y + 22}H${x + 48}M${x - 40} ${y + 2}H${x + 40}" stroke="${color}" stroke-width="9" stroke-linecap="round"/>
<path d="M${x - 36} ${y - 54}V${y - 20}M${x} ${y - 68}V${y - 20}M${x + 36} ${y - 54}V${y - 20}" stroke="${color}" stroke-width="4" marker-end="url(#arrow-amber)"/>`
  if (kind === 'etch') return `<path d="M${x - 58} ${y - 44}H${x - 16}V${y + 44}H${x + 16}V${y - 44}H${x + 58}" fill="none" stroke="${color}" stroke-width="10" stroke-linejoin="round"/>
<path d="M${x} ${y - 78}V${y - 18}" stroke="${color}" stroke-width="4" marker-end="url(#arrow-amber)"/>`
  if (kind === 'implant') return `<path d="M${x - 52} ${y + 42}H${x + 52}" stroke="${color}" stroke-width="10" stroke-linecap="round"/>
${[-38, -18, 2, 22, 42].map(dx => `<circle cx="${x + dx}" cy="${y + 18}" r="6" fill="${color}"/><path d="M${x + dx} ${y - 64}V${y - 2}" stroke="${color}" stroke-width="3" marker-end="url(#arrow-amber)"/>`).join('')}`
  if (kind === 'polish') return `<ellipse cx="${x}" cy="${y + 34}" rx="58" ry="18" fill="none" stroke="${color}" stroke-width="8"/>
<circle cx="${x}" cy="${y - 12}" r="40" fill="none" stroke="${color}" stroke-width="8"/><path d="M${x - 22} ${y - 12}H${x + 28}" stroke="${color}" stroke-width="6" marker-end="url(#arrow-amber)"/>`
  if (kind === 'thermal') return `<rect x="${x - 60}" y="${y - 56}" width="120" height="112" rx="14" fill="none" stroke="${color}" stroke-width="7"/>
<path d="M${x - 34} ${y + 22}C${x - 54} ${y - 4} ${x - 14} ${y - 15} ${x - 34} ${y - 42}M${x} ${y + 22}C${x - 20} ${y - 4} ${x + 20} ${y - 15} ${x} ${y - 42}M${x + 34} ${y + 22}C${x + 14} ${y - 4} ${x + 54} ${y - 15} ${x + 34} ${y - 42}" fill="none" stroke="${color}" stroke-width="5"/>`
  if (kind === 'measure') return `<circle cx="${x - 12}" cy="${y - 10}" r="42" fill="none" stroke="${color}" stroke-width="8"/><path d="M${x + 20} ${y + 22}L${x + 62} ${y + 64}" stroke="${color}" stroke-width="10" stroke-linecap="round"/><path d="M${x - 68} ${y + 62}H${x + 68}" stroke="${color}" stroke-width="8"/>`
  if (kind === 'track') return `<path d="M${x} ${y - 72}C${x - 36} ${y - 20} ${x - 48} ${y + 4} ${x - 48} ${y + 24}A48 48 0 0 0 ${x + 48} ${y + 24}C${x + 48} ${y + 4} ${x + 36} ${y - 20} ${x} ${y - 72}Z" fill="none" stroke="${color}" stroke-width="7"/><path d="M${x - 62} ${y + 70}H${x + 62}" stroke="${color}" stroke-width="9"/>`
  return `<rect x="${x - 58}" y="${y - 52}" width="116" height="80" rx="8" fill="none" stroke="${color}" stroke-width="7"/><path d="M${x - 38} ${y - 32}H${x + 38}M${x - 38} ${y - 10}H${x + 38}M${x} ${y + 30}V${y + 72}" stroke="${color}" stroke-width="5"/><path d="M${x - 32} ${y + 72}H${x + 32}" stroke="${color}" stroke-width="9"/>`
}

function appliedCoverage() {
  const tools = [
    ['DEPOSITION', 'deposit'],
    ['ETCH', 'etch'],
    ['IMPLANT', 'implant'],
    ['POLISH', 'polish'],
    ['THERMAL', 'thermal'],
    ['METROLOGY', 'measure'],
    ['TRACK', 'track'],
    ['LITHOGRAPHY', 'litho'],
  ]
  const row = tools.map(([label], index) => {
    const x = 112 + index * 212
    const covered = index < 6
    const color = covered ? C.amber : C.graphite
    const fill = covered ? C.amberSoft : C.paper
    return `<rect x="${x}" y="420" width="184" height="170" rx="18" fill="${fill}" stroke="${color}" stroke-width="4"/>
${text(x + 92, 502, label, { size: label.length > 9 ? 17 : 20, fill: color, weight: 820, anchor: 'middle', tracking: 0.8 })}
${covered ? text(x + 92, 548, 'COVERED', { size: 15, fill: C.amber, weight: 760, anchor: 'middle', tracking: 1.8 }) : text(x + 92, 548, index === 6 ? 'TEL' : 'ASML', { size: 15, fill: C.muted, weight: 760, anchor: 'middle', tracking: 1.8 })}`
  }).join('\n')

  return svgDoc(
    'Applied Materials process coverage',
    'Eight tool categories are shown. Applied Materials covers deposition, etch, implant, polish, thermal processing, and metrology, while track and lithography remain outside its portfolio.',
    `${header('Process coverage', 'Applied participates in six of eight wafer-fab tool categories')}
<path d="M112 352V300H1356V352" fill="none" stroke="${C.amber}" stroke-width="6"/>
${text(734, 276, 'APPLIED MATERIALS', { size: 24, fill: C.amber, weight: 840, anchor: 'middle', tracking: 2.2 })}
${row}
<path d="M112 680H1816" stroke="${C.hairline}" stroke-width="3"/>
${text(112, 756, 'BREADTH', { size: 22, fill: C.amber, weight: 820, tracking: 2 })}
${text(112, 812, 'One supplier can capture spend across most process steps—without owning lithography or track.', { size: 31, fill: C.ink, weight: 650 })}`,
  )
}

function nandStack(x, top, width, height, layers) {
  const rows = Array.from({ length: layers }, (_, i) => {
    const y = top + i * (height / layers)
    return `<rect x="${x}" y="${y}" width="${width}" height="${height / layers - 2}" fill="${i % 2 ? C.paper : C.amberSoft}" stroke="${i % 2 ? C.hairline : C.amber}" stroke-width="1.2"/>`
  }).join('\n')
  return `<g>${rows}</g>`
}

function lamDeepEtch() {
  return svgDoc(
    'Lam Research deep NAND channel etch',
    'A wafer of repeated memory holes zooms into a tall cutaway stack. A single narrow channel is etched straight through more than one hundred layers, roughly fifty times deeper than it is wide.',
    `${header('Dry etch', 'One channel must stay straight through 100+ layers')}
<g filter="url(#paper-shadow)">
  <ellipse cx="388" cy="520" rx="230" ry="146" fill="${C.paper}" stroke="${C.graphite}" stroke-width="5"/>
  ${Array.from({ length: 9 }, (_, row) => Array.from({ length: 13 }, (_, col) => `<ellipse cx="${224 + col * 27 + (row % 2) * 13}" cy="${436 + row * 22}" rx="7" ry="4.5" fill="${C.graphite}" opacity="${0.45 + ((row + col) % 3) * 0.16}"/>`).join('')).join('')}
</g>
${text(388, 716, 'BILLIONS OF CHANNELS / WAFER', { size: 21, fill: C.graphite, weight: 780, anchor: 'middle', tracking: 1.4 })}
<path d="M612 520H742" stroke="${C.graphite}" stroke-width="4" stroke-dasharray="8 9" marker-end="url(#arrow-ink)"/>

<rect x="760" y="242" width="1056" height="728" rx="30" fill="${C.paper}" stroke="${C.hairline}" stroke-width="2" filter="url(#paper-shadow)"/>
${nandStack(938, 318, 610, 548, 28)}
<rect x="1215" y="304" width="56" height="588" rx="28" fill="${C.bg}" stroke="${C.amber}" stroke-width="8"/>
<path d="M1243 236V306" stroke="${C.amber}" stroke-width="8" marker-end="url(#arrow-amber)"/>
${text(1243, 278, 'LAM DRY ETCH', { size: 20, fill: C.amber, weight: 820, anchor: 'middle', tracking: 1.5 })}
<path d="M1585 318H1627M1585 866H1627M1606 318V866" stroke="${C.graphite}" stroke-width="3"/>
${text(1648, 548, '~50:1', { size: 40, fill: C.ink, weight: 820 })}
${text(1648, 592, 'ASPECT RATIO', { size: 17, fill: C.muted, weight: 760, tracking: 1.5 })}
${text(1648, 684, 'ONE PASS', { size: 23, fill: C.amber, weight: 820, tracking: 1.5 })}
${text(1648, 730, '100+ LAYERS', { size: 24, fill: C.ink, weight: 780 })}`,
  )
}

function telAsmSplit() {
  return svgDoc(
    'Tokyo Electron track and ASM atomic layer deposition',
    'The left half shows a wafer moving through a Tokyo Electron coat and develop track around an ASML exposure step. The right half shows atomic layer deposition wrapping a recessed gate-all-around structure one conformal layer at a time.',
    `${header('Adjacent steps', 'TEL prepares the pattern; ASM coats the hidden surfaces')}
<rect x="104" y="246" width="812" height="714" rx="28" fill="${C.paper}" stroke="${C.hairline}" stroke-width="2" filter="url(#paper-shadow)"/>
${text(150, 308, 'TOKYO ELECTRON · TRACK', { size: 23, fill: C.amber, weight: 820, tracking: 1.5 })}
${text(150, 348, '>90% SHARE', { size: 19, fill: C.muted, weight: 760, tracking: 1.4 })}
<rect x="154" y="444" width="194" height="230" rx="22" fill="${C.amberSoft}" stroke="${C.amber}" stroke-width="3"/>
${toolGlyph('track', 251, 535, C.amber)}
${text(251, 640, 'COAT', { size: 22, fill: C.amber, weight: 820, anchor: 'middle', tracking: 1.6 })}
<rect x="414" y="444" width="194" height="230" rx="22" fill="${C.blueSoft}" stroke="${C.blue}" stroke-width="3"/>
${toolGlyph('litho', 511, 535, C.blue)}
${text(511, 640, 'EXPOSE', { size: 22, fill: C.blue, weight: 820, anchor: 'middle', tracking: 1.6 })}
<rect x="674" y="444" width="194" height="230" rx="22" fill="${C.amberSoft}" stroke="${C.amber}" stroke-width="3"/>
${toolGlyph('track', 771, 535, C.amber)}
${text(771, 640, 'DEVELOP', { size: 22, fill: C.amber, weight: 820, anchor: 'middle', tracking: 1.2 })}
<path d="M348 559H402M608 559H662" stroke="${C.graphite}" stroke-width="4" marker-end="url(#arrow-ink)"/>
${text(251, 724, 'TEL', { size: 24, fill: C.amber, weight: 820, anchor: 'middle' })}
${text(511, 724, 'ASML', { size: 24, fill: C.blue, weight: 820, anchor: 'middle' })}
${text(771, 724, 'TEL', { size: 24, fill: C.amber, weight: 820, anchor: 'middle' })}
<path d="M190 824H830" stroke="${C.hairline}" stroke-width="3"/>
${text(510, 872, 'one inline lithography cell', { size: 25, fill: C.graphite, weight: 620, anchor: 'middle' })}

<rect x="1004" y="246" width="812" height="714" rx="28" fill="${C.paper}" stroke="${C.hairline}" stroke-width="2" filter="url(#paper-shadow)"/>
${text(1050, 308, 'ASM INTERNATIONAL · ALD', { size: 23, fill: C.violet, weight: 820, tracking: 1.5 })}
${text(1050, 348, 'ONE ATOMIC LAYER / CYCLE', { size: 19, fill: C.muted, weight: 760, tracking: 1.4 })}
<path d="M1110 458H1712V520H1530V700H1292V520H1110Z" fill="${C.violetSoft}" stroke="${C.violet}" stroke-width="4" stroke-linejoin="round"/>
<path d="M1142 486H1680V500H1500V670H1322V500H1142Z" fill="none" stroke="${C.violet}" stroke-width="16" stroke-linejoin="round" opacity="0.55"/>
<path d="M1164 512H1658M1474 522V644M1348 522V644" fill="none" stroke="${C.violet}" stroke-width="10" stroke-linecap="round"/>
<rect x="1356" y="550" width="110" height="66" rx="33" fill="${C.greenSoft}" stroke="${C.green}" stroke-width="4"/>
${text(1411, 592, 'CHANNEL', { size: 16, fill: C.green, weight: 800, anchor: 'middle', tracking: 1.1 })}
<path d="M1740 438C1782 500 1782 670 1710 752" fill="none" stroke="${C.violet}" stroke-width="5" stroke-dasharray="10 10" marker-end="url(#arrow-violet)"/>
${text(1620, 794, 'CONFORMAL COATING', { size: 21, fill: C.violet, weight: 820, anchor: 'middle', tracking: 1.6 })}
${text(1410, 852, 'wraps every recessed surface', { size: 26, fill: C.graphite, weight: 620, anchor: 'middle' })}`,
  )
}

const SCENES = {
  'equipment-applied-coverage.svg': appliedCoverage,
  'equipment-lam-deep-etch.svg': lamDeepEtch,
  'equipment-tel-asm.svg': telAsmSplit,
}

export function generateEquipmentFollowupVisuals(outDir) {
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
  const written = generateEquipmentFollowupVisuals(outDir)
  console.log(`wrote ${written.length} equipment follow-up visuals to ${outDir}`)
}
