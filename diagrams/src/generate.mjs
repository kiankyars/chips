#!/usr/bin/env node
// Generates every structural SVG for the course into diagrams/rendered/.
// One source of truth: edit the data below, re-run `npm run diagrams`.
// No dependencies. See STRATEGY.md ("structural diagrams are code").

import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const OUT = join(dirname(fileURLToPath(import.meta.url)), '..', 'rendered')
mkdirSync(OUT, { recursive: true })

// ---------------------------------------------------------------- palette
const C = {
  ink: '#1e293b',
  inkSoft: '#475569',
  line: '#94a3b8',
  bg: '#ffffff',
  design: { fill: '#dbeafe', edge: '#3b82f6' },
  manufacture: { fill: '#dcfce7', edge: '#22c55e' },
  equipment: { fill: '#fef3c7', edge: '#f59e0b' },
  materials: { fill: '#fef9c3', edge: '#ca8a04' },
  memory: { fill: '#ede9fe', edge: '#8b5cf6' },
  backend: { fill: '#ffe4e6', edge: '#f43f5e' },
  datacenter: { fill: '#f1f5f9', edge: '#0f172a' },
  star: '#dc2626',
}

const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

function svgDoc(w, h, body) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" font-family="Inter, -apple-system, sans-serif">
<rect width="${w}" height="${h}" fill="${C.bg}"/>
${body}
</svg>\n`
}

function box(x, y, w, h, label, { fill, edge, fs = 20, bold = false, star = 0, sub = '' } = {}) {
  const lines = Array.isArray(label) ? label : [label]
  const lh = fs * 1.25
  const ty = y + h / 2 - ((lines.length - 1) * lh) / 2 - (sub ? 7 : 0)
  let t = lines
    .map((l, i) => `<text x="${x + w / 2}" y="${ty + i * lh}" text-anchor="middle" dominant-baseline="central" font-size="${fs}" ${bold ? 'font-weight="700"' : 'font-weight="500"'} fill="${C.ink}">${esc(l)}</text>`)
    .join('\n')
  if (sub) t += `\n<text x="${x + w / 2}" y="${ty + lines.length * lh - 2}" text-anchor="middle" dominant-baseline="central" font-size="${fs * 0.72}" fill="${C.inkSoft}">${esc(sub)}</text>`
  const stars = star
    ? `<text x="${x + w - 4}" y="${y + 6}" text-anchor="end" font-size="${fs * 1.1}" fill="${C.star}">${'★'.repeat(star)}</text>`
    : ''
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" fill="${fill}" stroke="${edge}" stroke-width="2.5"/>\n${t}\n${stars}`
}

function regionFrame(x, y, w, h, title, color) {
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="14" fill="none" stroke="${color}" stroke-width="2" stroke-dasharray="7 5" opacity="0.65"/>
<text x="${x + 14}" y="${y - 12}" font-size="24" font-weight="800" letter-spacing="2" fill="${color}">${esc(title)}</text>`
}

function arrow(x1, y1, x2, y2, { color = C.line, width = 3.5, dash = '' } = {}) {
  const a = Math.atan2(y2 - y1, x2 - x1)
  const L = 13
  const p1 = `${x2 - L * Math.cos(a - 0.42)},${y2 - L * Math.sin(a - 0.42)}`
  const p2 = `${x2 - L * Math.cos(a + 0.42)},${y2 - L * Math.sin(a + 0.42)}`
  return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${width}" ${dash ? `stroke-dasharray="${dash}"` : ''}/>
<polygon points="${x2},${y2} ${p1} ${p2}" fill="${color}"/>`
}

// ================================================================ THE MAP
// Regions light up in curriculum order; earlier regions stay half-lit.
// States: dark, design, manufacture, equipment(+materials), memory, backend, full.

function buildMap(state) {
  // opacity per region for a given state
  const order = ['design', 'manufacture', 'equipment', 'memory', 'backend']
  const groupFor = r => (r === 'materials' ? 'equipment' : r === 'datacenter' ? 'backend' : r)
  const op = region => {
    if (state === 'full') return 1
    if (state === 'dark') return 0.13
    const g = groupFor(region)
    const idx = order.indexOf(g)
    const cur = order.indexOf(state)
    if (idx === cur) return 1
    if (idx !== -1 && idx < cur) return 0.55
    return 0.13
  }
  const g = (region, inner) => `<g opacity="${op(region)}">${inner}</g>`

  const parts = []

  // --- EQUIPMENT band (top)
  const eq = []
  eq.push(regionFrame(330, 52, 1010, 130, 'EQUIPMENT — the toolmakers', C.equipment.edge))
  const eqBoxes = [
    ['ASML', 2], ['Applied Materials', 0], ['Lam Research', 0], ['Tokyo Electron', 0], ['KLA', 0], ['ASM Intl', 0],
  ]
  eqBoxes.forEach(([name, star], i) => {
    eq.push(box(348 + i * 163, 82, 150, 70, name.split(' ').length > 1 ? name.split(' ') : [name], { ...C.equipment, fs: 19, star, bold: star > 0 }))
  })
  parts.push(g('equipment', eq.join('\n')))

  // --- MATERIALS band (below equipment)
  const mt = []
  mt.push(regionFrame(330, 222, 1010, 106, 'MATERIALS', C.materials.edge))
  const mtBoxes = [
    [['Shin-Etsu', 'SUMCO'], 0, 'wafers'], [['JSR · TOK'], 1, 'photoresist'], [['Hoya'], 1, 'mask blanks'],
    [['Carl Zeiss SMT'], 1, 'EUV optics'], [['gases · slurries'], 0, 'Linde · Entegris'], [['Ajinomoto'], 0, 'ABF substrate'],
  ]
  mtBoxes.forEach(([lines, star, sub], i) => {
    mt.push(box(348 + i * 163, 244, 150, 62, lines, { ...C.materials, fs: 17, star, sub }))
  })
  // zeiss feeds ASML; bands feed manufacture
  mt.push(arrow(837, 244, 470, 156, { color: C.materials.edge, dash: '5 5' }))
  parts.push(g('materials', mt.join('\n')))
  parts.push(g('equipment', [arrow(650, 330, 650, 392, { color: C.equipment.edge }), arrow(1000, 330, 1000, 392, { color: C.equipment.edge }), arrow(835, 182, 835, 218, { color: C.equipment.edge, width: 2 })].join('\n')))

  // --- DESIGN column (left)
  const ds = []
  ds.push(regionFrame(36, 420, 268, 610, 'DESIGN', C.design.edge))
  const dsGroups = [
    ['EDA', [['Synopsys', 1], ['Cadence', 1], ['Siemens EDA', 0]]],
    ['IP', [['Arm', 0], ['RISC-V', 0]]],
    ['FABLESS', [['Nvidia', 0], ['AMD', 0], ['Apple', 0], ['Qualcomm', 0], ['Broadcom · Marvell', 0], ['MediaTek', 0]]],
  ]
  let dy = 438
  for (const [gname, rows] of dsGroups) {
    ds.push(`<text x="58" y="${dy + 10}" font-size="17" font-weight="700" letter-spacing="1.5" fill="${C.inkSoft}">${gname}</text>`)
    dy += 20
    for (const [name, star] of rows) {
      ds.push(box(54, dy, 232, 40, name, { ...C.design, fs: 18, star, bold: star > 0 || name === 'Nvidia' }))
      dy += 46
    }
    dy += 10
  }
  ds.push(arrow(304, 700, 372, 700, { color: C.design.edge }))
  parts.push(g('design', ds.join('\n')))

  // --- MANUFACTURE (center)
  const mf = []
  mf.push(regionFrame(376, 420, 560, 610, 'MANUFACTURE', C.manufacture.edge))
  mf.push(`<text x="398" y="466" font-size="17" font-weight="700" letter-spacing="1.5" fill="${C.inkSoft}">FOUNDRIES</text>`)
  const foundries = [['TSMC', 2], ['Samsung Foundry', 0], ['Intel Foundry', 0], ['GlobalFoundries', 0], ['SMIC', 0], ['UMC · Rapidus', 0]]
  foundries.forEach(([name, star], i) => {
    mf.push(box(394, 480 + i * 56, 250, 46, name, { ...C.manufacture, fs: 18, star, bold: star > 0 }))
  })
  mf.push(`<text x="682" y="466" font-size="17" font-weight="700" letter-spacing="1.5" fill="${C.inkSoft}">IDM / ANALOG</text>`)
  const idms = [['Texas Instruments', 0], ['Infineon', 0], ['STMicro', 0], ['NXP', 0], ['Analog Devices', 0], ['Renesas', 0]]
  idms.forEach(([name, star], i) => {
    mf.push(box(678, 480 + i * 56, 234, 46, name, { ...C.manufacture, fs: 18, star }))
  })
  mf.push(arrow(936, 700, 1004, 700, { color: C.manufacture.edge }))
  parts.push(g('manufacture', mf.join('\n')))

  // --- MEMORY (below-right of manufacture)
  parts.push(g('memory', [
    regionFrame(1008, 800, 330, 230, 'MEMORY', C.memory.edge),
    box(1026, 824, 142, 52, 'Samsung', { ...C.memory, fs: 17 }),
    box(1182, 824, 142, 52, 'SK Hynix', { ...C.memory, fs: 17, star: 1, bold: true }),
    box(1026, 890, 142, 52, 'Micron', { ...C.memory, fs: 17 }),
    box(1182, 890, 142, 52, 'HBM', { ...C.memory, fs: 17, bold: true, sub: 'the AI bottleneck' }),
    arrow(1173, 800, 1173, 756, { color: C.memory.edge }),
  ].join('\n')))

  // --- PACKAGE & TEST (right)
  const be = []
  be.push(regionFrame(1008, 420, 330, 330, 'PACKAGE & TEST', C.backend.edge))
  ;[
    [['TSMC CoWoS'], 1, 'advanced packaging'],
    [['ASE · Amkor · JCET'], 0, 'OSAT assembly'],
    [['Advantest · Teradyne'], 0, 'test'],
  ].forEach(([lines, star, sub], i) => {
    be.push(box(1026, 448 + i * 78, 294, 64, lines, { ...C.backend, fs: 18, star, sub, bold: star > 0 }))
  })
  be.push(arrow(1338, 585, 1420, 585, { color: C.backend.edge }))
  parts.push(g('backend', be.join('\n')))

  // --- AI DATA CENTERS (far right)
  parts.push(g('datacenter', [
    box(1424, 500, 460, 170, ['AI DATA CENTERS'], { ...C.datacenter, fs: 30, bold: true, sub: 'the $600B/yr buildout' }),
    `<text x="1654" y="710" text-anchor="middle" font-size="18" fill="${C.inkSoft}">…and every phone, car, and grid</text>`,
  ].join('\n')))

  // legend for chokepoint stars (always faint, full opacity on 'full')
  parts.push(`<g opacity="${state === 'dark' ? 0.25 : 0.9}">
<text x="1424" y="86" font-size="20" fill="${C.star}" font-weight="700">★ = chokepoint</text>
<text x="1424" y="114" font-size="17" fill="${C.inkSoft}">single point of failure for</text>
<text x="1424" y="136" font-size="17" fill="${C.inkSoft}">the modern world</text>
</g>`)

  return svgDoc(1920, 1080, parts.join('\n'))
}

for (const s of ['dark', 'design', 'manufacture', 'equipment', 'memory', 'backend', 'full']) {
  writeFileSync(join(OUT, `map-${s}.svg`), buildMap(s))
}

// ============================================================ JOURNEY BAR
const STAGES = ['SAND', 'DESIGN', 'FAB', 'MEMORY', 'PACKAGE', 'DATA CENTER']
function journeyBar(active /* 0=none yet, 1..6 = stage index+1 */) {
  const W = 1920, H = 150, bw = 264, gap = 40, x0 = (W - (STAGES.length * bw + (STAGES.length - 1) * gap)) / 2
  const parts = []
  STAGES.forEach((s, i) => {
    const x = x0 + i * (bw + gap)
    const done = active > i + 1
    const cur = active === i + 1
    const fill = cur ? C.design.fill : done ? C.manufacture.fill : '#f8fafc'
    const edge = cur ? C.design.edge : done ? C.manufacture.edge : C.line
    parts.push(`<rect x="${x}" y="40" width="${bw}" height="70" rx="35" fill="${fill}" stroke="${edge}" stroke-width="${cur ? 4 : 2.5}"/>
<text x="${x + bw / 2}" y="75" text-anchor="middle" dominant-baseline="central" font-size="26" font-weight="${cur ? 800 : 600}" fill="${done || cur ? C.ink : C.line}">${done ? '✓ ' : ''}${s}</text>`)
    if (i < STAGES.length - 1) parts.push(arrow(x + bw + 6, 75, x + bw + gap - 6, 75, { color: active > i + 1 ? C.manufacture.edge : C.line }))
  })
  return svgDoc(W, H, parts.join('\n'))
}
for (let k = 0; k <= 6; k++) writeFileSync(join(OUT, `journey-${k}.svg`), journeyBar(k))

// ============================================================= FLOW STRIP
// The fab loop. Highlight states per step for each Act IV player.
const STEPS = [
  ['DEPOSIT', 'add a film, atoms thick'],
  ['COAT', 'photoresist'],
  ['EXPOSE', 'lithography'],
  ['DEVELOP', 'reveal the pattern'],
  ['ETCH', 'carve it'],
  ['IMPLANT', 'dope + anneal'],
  ['POLISH', 'CMP, atomically flat'],
  ['MEASURE', 'inspect / metrology'],
]
function flowStrip(hot = [] /* array of step indices to highlight */) {
  const W = 1920, H = 300, bw = 210, gap = 24, x0 = (W - (STEPS.length * bw + (STEPS.length - 1) * gap)) / 2
  const parts = []
  STEPS.forEach(([name, sub], i) => {
    const x = x0 + i * (bw + gap)
    const isHot = hot.includes(i)
    parts.push(`<g opacity="${hot.length && !isHot ? 0.35 : 1}">`)
    parts.push(box(x, 70, bw, 92, name, { fill: isHot ? C.equipment.fill : '#f8fafc', edge: isHot ? C.equipment.edge : C.line, fs: 24, bold: isHot, sub }))
    parts.push('</g>')
    if (i < STEPS.length - 1) parts.push(arrow(x + bw + 3, 116, x + bw + gap - 3, 116, { color: C.line }))
  })
  // loop-back arrow
  const xEnd = x0 + STEPS.length * bw + (STEPS.length - 1) * gap
  parts.push(`<path d="M ${xEnd - bw / 2} 168 L ${xEnd - bw / 2} 226 L ${x0 + bw / 2} 226 L ${x0 + bw / 2} 174" fill="none" stroke="${C.inkSoft}" stroke-width="3" stroke-dasharray="8 6"/>`)
  parts.push(`<polygon points="${x0 + bw / 2},168 ${x0 + bw / 2 - 8},182 ${x0 + bw / 2 + 8},182" fill="${C.inkSoft}"/>`)
  parts.push(`<text x="${W / 2}" y="262" text-anchor="middle" font-size="24" font-weight="700" fill="${C.inkSoft}">repeat ~1,000 steps · ~80 mask layers · 3 months per wafer</text>`)
  return svgDoc(W, H, parts.join('\n'))
}
writeFileSync(join(OUT, 'flow-strip.svg'), flowStrip())
const FLOW_STATES = { deposit: [0], coat: [1, 3], expose: [2], etch: [4], implant: [5], polish: [6], measure: [7] }
for (const [k, hot] of Object.entries(FLOW_STATES)) writeFileSync(join(OUT, `flow-${k}.svg`), flowStrip(hot))

// ======================================================== CHOKEPOINT BOARD
// Ordered by when the course EARNS each stamp (board-N fills left to right):
// eda → tsmc → life-of-a-wafer (Japan cluster) → asml (+zeiss) → memory-hbm → packaging
const CHOKEPOINTS = [
  [['Synopsys', '+ Cadence'], 'EDA'],
  [['TSMC'], 'leading-edge wafers'],
  [['JSR · TOK', '· Hoya'], 'resist + mask blanks'],
  [['ASML'], 'EUV lithography'],
  [['Zeiss SMT'], 'EUV optics'],
  [['SK Hynix'], 'HBM'],
  [['TSMC — again'], 'CoWoS packaging'],
]
function board(filled /* 0..7 */) {
  const W = 1920, H = 360, bw = 250, gap = 20, x0 = (W - (7 * bw + 6 * gap)) / 2
  const parts = [`<text x="${W / 2}" y="52" text-anchor="middle" font-size="30" font-weight="800" letter-spacing="3" fill="${C.ink}">THE CHOKEPOINT BOARD</text>`]
  CHOKEPOINTS.forEach(([name, sub], i) => {
    const x = x0 + i * (bw + gap)
    const on = i < filled
    if (on) {
      parts.push(box(x, 90, bw, 150, name, { fill: '#fee2e2', edge: C.star, fs: 22, bold: true, sub }))
      parts.push(`<text x="${x + bw / 2}" y="270" text-anchor="middle" font-size="40" fill="${C.star}">★</text>`)
    } else {
      parts.push(`<rect x="${x}" y="90" width="${bw}" height="150" rx="10" fill="#f8fafc" stroke="${C.line}" stroke-width="2.5" stroke-dasharray="8 6"/>
<text x="${x + bw / 2}" y="165" text-anchor="middle" dominant-baseline="central" font-size="54" font-weight="300" fill="${C.line}">?</text>`)
    }
  })
  parts.push(`<text x="${W / 2}" y="330" text-anchor="middle" font-size="24" fill="${C.inkSoft}">${filled}/7 single points of failure found</text>`)
  return svgDoc(W, H, parts.join('\n'))
}
for (let k = 0; k <= 7; k++) writeFileSync(join(OUT, `board-${k}.svg`), board(k))

// ========================================================== EUV LIGHT PATH
// Simple schematic replacement for the old GPT-image prompt (decorative).
{
  const parts = []
  parts.push(`<text x="960" y="60" text-anchor="middle" font-size="30" font-weight="800" fill="${C.ink}">HOW EUV LIGHT IS MADE</text>`)
  const stops = [
    [180, 'Trumpf CO₂ laser', 'fires twice per droplet', C.equipment],
    [560, 'Tin droplets', '~50,000 / second', C.materials],
    [940, 'Plasma flash', '13.5 nm light', { fill: '#fee2e2', edge: C.star }],
    [1320, 'Zeiss mirrors', 'flattest objects on Earth', C.design],
    [1700, 'Wafer', 'pattern printed', C.manufacture],
  ]
  stops.forEach(([cx, name, sub, col], i) => {
    parts.push(`<circle cx="${cx}" cy="240" r="86" fill="${col.fill}" stroke="${col.edge}" stroke-width="3"/>`)
    parts.push(`<text x="${cx}" y="228" text-anchor="middle" font-size="22" font-weight="700" fill="${C.ink}">${esc(String(name))}</text>`)
    parts.push(`<text x="${cx}" y="258" text-anchor="middle" font-size="17" fill="${C.inkSoft}">${esc(String(sub))}</text>`)
    if (i < stops.length - 1) parts.push(arrow(cx + 96, 240, stops[i + 1][0] - 96, 240, { color: C.inkSoft }))
  })
  parts.push(`<text x="960" y="420" text-anchor="middle" font-size="20" fill="${C.inkSoft}">a droplet of molten tin, hit mid-flight by a laser, twice — vaporized into plasma that shines at 13.5 nanometers</text>`)
  writeFileSync(join(OUT, 'euv-light-path.svg'), svgDoc(1920, 470, parts.join('\n')))
}

console.log(`wrote SVGs to ${OUT}`)
