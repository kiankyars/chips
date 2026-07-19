import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const W = 1920
const H = 1080

const C = {
  bg: '#f4efe6',
  paper: '#fffaf0',
  ink: '#1f272d',
  graphite: '#4f5965',
  muted: '#777c79',
  line: '#aaa398',
  faint: '#ddd5c8',
  blue: '#3977a8',
  blueSoft: '#d8e7f1',
  green: '#397a66',
  greenSoft: '#d8e8df',
  amber: '#bd7b25',
  amberSoft: '#f1dfbd',
  violet: '#7358a3',
  violetSoft: '#e4dcef',
  rose: '#ad4f5d',
  roseSoft: '#efd9dc',
}

const esc = value => String(value)
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')

function defs() {
  return `<defs>
  <pattern id="paper-grid" width="48" height="48" patternUnits="userSpaceOnUse">
    <path d="M48 0H0V48" fill="none" stroke="${C.faint}" stroke-width="1" opacity="0.22"/>
  </pattern>
  <filter id="shadow" x="-30%" y="-30%" width="160%" height="180%">
    <feDropShadow dx="0" dy="10" stdDeviation="12" flood-color="#493f30" flood-opacity="0.13"/>
  </filter>
  <marker id="arrow-ink" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto">
    <path d="M0 0L12 6L0 12Z" fill="${C.graphite}"/>
  </marker>
  <marker id="arrow-blue" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto">
    <path d="M0 0L12 6L0 12Z" fill="${C.blue}"/>
  </marker>
  <marker id="arrow-green" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto">
    <path d="M0 0L12 6L0 12Z" fill="${C.green}"/>
  </marker>
  <marker id="arrow-red" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto">
    <path d="M0 0L12 6L0 12Z" fill="${C.rose}"/>
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

function panel(x, y, w, h, { fill = C.paper, stroke = C.faint, radius = 28, shadow = false } = {}) {
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${radius}" fill="${fill}" stroke="${stroke}" stroke-width="3"${shadow ? ' filter="url(#shadow)"' : ''}/>`
}

function rule(x1, y1, x2, y2, { color = C.line, width = 3, dash = '', marker = '' } = {}) {
  return `<path d="M${x1} ${y1}L${x2} ${y2}" fill="none" stroke="${color}" stroke-width="${width}"${dash ? ` stroke-dasharray="${dash}"` : ''}${marker ? ` marker-end="url(#${marker})"` : ''}/>`
}

function pill(x, y, value, color, fill, width, { size = 21 } = {}) {
  return `<rect x="${x}" y="${y}" width="${width}" height="48" rx="24" fill="${fill}" stroke="${color}" stroke-width="2.5"/>
${text(x + width / 2, y + 31, value, { size, fill: color, weight: 760, anchor: 'middle', tracking: 0.5 })}`
}

function sectionLabel(value, x, y, color = C.muted, anchor = 'start') {
  return text(x, y, value, { size: 21, fill: color, weight: 780, anchor, tracking: 2.2 })
}

function hbmStack(x, y, color, { scale = 1, layers = 7 } = {}) {
  const w = 170 * scale
  const h = 34 * scale
  const gap = 11 * scale
  const dies = Array.from({ length: layers }, (_, i) => {
    const yy = y + (layers - 1 - i) * gap
    return `<rect x="${x}" y="${yy}" width="${w}" height="${h}" rx="${7 * scale}" fill="${i % 2 ? C.paper : C.violetSoft}" stroke="${color}" stroke-width="${3 * scale}"/>`
  }).join('\n')
  return `<g filter="url(#shadow)">${dies}
  <rect x="${x - 8 * scale}" y="${y + layers * gap + h - 5 * scale}" width="${w + 16 * scale}" height="${26 * scale}" rx="${7 * scale}" fill="${color}" opacity="0.9"/>
</g>`
}

function chipIcon(x, y, color, { scale = 1, label = '' } = {}) {
  const s = scale
  const pins = [0, 1, 2, 3, 4].map(i => `<path d="M${x + (28 + i * 28) * s} ${y - 18 * s}V${y}M${x + (28 + i * 28) * s} ${y + 150 * s}V${y + 168 * s}" stroke="${color}" stroke-width="${5 * s}" stroke-linecap="round"/>`).join('')
  return `<g>
  ${pins}
  <rect x="${x}" y="${y}" width="${168 * s}" height="${150 * s}" rx="${18 * s}" fill="${C.paper}" stroke="${color}" stroke-width="${6 * s}"/>
  <rect x="${x + 34 * s}" y="${y + 31 * s}" width="${100 * s}" height="${88 * s}" rx="12" fill="${color}" opacity="0.17" stroke="${color}" stroke-width="4"/>
  ${label ? text(x + 84 * s, y + 86 * s, label, { size: 23 * s, fill: color, weight: 800, anchor: 'middle', tracking: 1 }) : ''}
</g>`
}

function qualificationGate(x, y, color, open = false) {
  const rightTop = open ? y - 72 : y
  return `<g>
  <path d="M${x - 46} ${y - 74}V${y + 74}M${x + 46} ${rightTop - 74}V${rightTop + 74}" stroke="${color}" stroke-width="8" stroke-linecap="round"/>
  <path d="M${x - 60} ${y - 74}H${x + 60}" stroke="${color}" stroke-width="8" stroke-linecap="round"/>
  <circle cx="${x}" cy="${y - 12}" r="20" fill="${C.paper}" stroke="${color}" stroke-width="5"/>
  <path d="M${x - 10} ${y - 12}L${x - 1} ${y - 2}L${x + 16} ${y - 24}" fill="none" stroke="${color}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</g>`
}

function hbmSupplierRace() {
  const lanes = [
    { name: 'SK HYNIX', color: C.green, y: 320, end: 1690, lead: '~56% HBM · Q1 2026', sub: "Nvidia's primary HBM supplier since H100" },
    { name: 'SAMSUNG', color: C.rose, y: 545, end: 1690, lead: 'qualified · SEPT 2025', sub: 'HBM3E qualification took about 18 months' },
    { name: 'MICRON', color: C.blue, y: 770, end: 1690, lead: '~19–21% HBM · Q1 2026', sub: 'share rose from 2% in 2023' },
  ]

  const laneSvg = lanes.map((lane, i) => `<g>
${text(118, lane.y - 20, lane.name, { size: 29, fill: lane.color, weight: 800, tracking: 1.6 })}
${text(118, lane.y + 18, lane.sub, { size: 20, fill: C.muted, weight: 560 })}
${rule(430, lane.y, lane.end, lane.y, { color: lane.color, width: 8, marker: i === 0 ? 'arrow-green' : i === 1 ? 'arrow-red' : 'arrow-blue' })}
${hbmStack(510, lane.y - 78, lane.color, { scale: 0.58, layers: 6 })}
${i === 1 ? qualificationGate(1160, lane.y, lane.color, true) : qualificationGate(1015 + i * 70, lane.y, lane.color, true)}
${pill(1338, lane.y - 25, lane.lead, lane.color, i === 0 ? C.greenSoft : i === 1 ? C.roseSoft : C.blueSoft, 420, { size: 20 })}
</g>`).join('\n')

  return svgDoc(
    'HBM suppliers reached a common qualification gate by mid 2026',
    'Three horizontal lanes show SK hynix, Samsung, and Micron advancing through qualification. SK hynix held about 56 percent of HBM in the first quarter of 2026, Micron held about 19 to 21 percent, and all three were qualified for Rubin HBM4 by mid 2026.',
    `${sectionLabel('HBM SUPPLIER QUALIFICATION', 118, 112)}
${rule(118, 150, 1802, 150, { color: C.faint, width: 3 })}
${laneSvg}
<rect x="557" y="902" width="806" height="84" rx="42" fill="${C.violetSoft}" stroke="${C.violet}" stroke-width="3"/>
${text(960, 938, 'MID-2026', { size: 20, fill: C.violet, weight: 800, anchor: 'middle', tracking: 2 })}
${text(960, 972, 'all three qualified for Rubin HBM4', { size: 29, fill: C.violet, weight: 730, anchor: 'middle' })}`,
  )
}

function waferIcon(x, y, color, scale = 1) {
  return `<g>
  <ellipse cx="${x}" cy="${y}" rx="${86 * scale}" ry="${28 * scale}" fill="${C.paper}" stroke="${color}" stroke-width="${5 * scale}"/>
  <path d="M${x - 82 * scale} ${y}V${y + 22 * scale}C${x - 50 * scale} ${y + 56 * scale} ${x + 50 * scale} ${y + 56 * scale} ${x + 82 * scale} ${y + 22 * scale}V${y}" fill="${color}" opacity="0.15" stroke="${color}" stroke-width="${4 * scale}"/>
  <path d="M${x - 55 * scale} ${y - 9 * scale}H${x + 55 * scale}M${x - 35 * scale} ${y + 7 * scale}H${x + 35 * scale}" stroke="${color}" stroke-width="${2 * scale}" opacity="0.4"/>
</g>`
}

function dramRevenueSurge() {
  const baseY = 832
  const bar2025 = 330
  const bar2026 = 805
  const capacityWafers = [0, 1, 2].map(i => waferIcon(1325 + i * 170, 600 + i * 42, C.violet, 0.78)).join('\n')

  return svgDoc(
    'DRAM revenue forecast rises from 165.7 billion dollars to 404.3 billion dollars',
    'Two bars compare 2025 DRAM revenue of 165.7 billion dollars with the 2026 forecast of 404.3 billion dollars, a 144 percent increase. A capacity diagram shows that one unit of HBM output uses about three times the wafer capacity per gigabyte of DDR5.',
    `${sectionLabel('DRAM INDUSTRY REVENUE', 118, 118)}
${rule(118, baseY, 1080, baseY, { color: C.graphite, width: 4 })}
<rect x="222" y="${baseY - bar2025}" width="286" height="${bar2025}" rx="20" fill="${C.blueSoft}" stroke="${C.blue}" stroke-width="5" filter="url(#shadow)"/>
${text(365, baseY - bar2025 - 32, '$165.7B', { size: 48, fill: C.blue, weight: 800, anchor: 'middle' })}
${text(365, baseY + 48, '2025', { size: 27, fill: C.muted, weight: 760, anchor: 'middle', tracking: 1.4 })}
<rect x="670" y="${baseY - bar2026}" width="286" height="${bar2026}" rx="20" fill="${C.violetSoft}" stroke="${C.violet}" stroke-width="5" filter="url(#shadow)"/>
${text(813, baseY - bar2026 + 74, '$404.3B', { size: 48, fill: C.violet, weight: 800, anchor: 'middle' })}
${text(813, baseY + 48, '2026E', { size: 27, fill: C.muted, weight: 760, anchor: 'middle', tracking: 1.4 })}
<path d="M510 516C574 446 614 352 660 210" fill="none" stroke="${C.green}" stroke-width="7" marker-end="url(#arrow-green)"/>
${pill(468, 294, '+144%', C.green, C.greenSoft, 206, { size: 28 })}

${panel(1130, 104, 684, 820, { shadow: true })}
${sectionLabel('CAPACITY PER GIGABYTE', 1180, 178, C.violet)}
${text(1472, 241, 'HBM ≈ 3× DDR5', { size: 42, fill: C.violet, weight: 800, anchor: 'middle' })}
${capacityWafers}
${text(1470, 782, 'ONE HBM WAFER', { size: 24, fill: C.violet, weight: 780, anchor: 'middle', tracking: 1.8 })}
${text(1470, 824, 'uses capacity equivalent to roughly', { size: 23, fill: C.muted, weight: 560, anchor: 'middle' })}
${text(1470, 865, 'THREE PC-DRAM WAFERS', { size: 25, fill: C.ink, weight: 780, anchor: 'middle', tracking: 1.5 })}
${text(118, 1000, 'Forecast · data centers account for about 70% of 2026 memory output', { size: 22, fill: C.muted, weight: 560 })}`,
  )
}

function processBox(x, y, w, label, sub, color) {
  return `<g filter="url(#shadow)">
  <rect x="${x}" y="${y}" width="${w}" height="210" rx="26" fill="${C.paper}" stroke="${color}" stroke-width="4"/>
  <rect x="${x}" y="${y}" width="${w}" height="18" rx="9" fill="${color}"/>
  ${text(x + w / 2, y + 82, label, { size: 30, fill: color, weight: 800, anchor: 'middle', tracking: 1.2 })}
  ${text(x + w / 2, y + 131, sub, { size: 22, fill: C.muted, weight: 570, anchor: 'middle' })}
</g>`
}

function stopGate(x, y, color) {
  return `<g>
  <circle cx="${x}" cy="${y}" r="49" fill="${C.paper}" stroke="${color}" stroke-width="7"/>
  <path d="M${x - 24} ${y - 24}L${x + 24} ${y + 24}M${x + 24} ${y - 24}L${x - 24} ${y + 24}" stroke="${color}" stroke-width="8" stroke-linecap="round"/>
</g>`
}

function policyControlPoints() {
  const boxes = [
    { x: 92, label: 'DESIGN', sub: 'EDA software', color: C.blue },
    { x: 536, label: 'FAB', sub: 'foreign production', color: C.green },
    { x: 980, label: 'EQUIPMENT', sub: 'EUV scanner', color: C.amber },
    { x: 1424, label: 'IMPORT', sub: 'advanced chips', color: C.violet },
  ]
  const labels = [
    { x: 277, title: 'US EDA CONTROL', sub: 'license required' },
    { x: 721, title: 'FDPR', sub: 'rule reaches TSMC' },
    { x: 1165, title: 'NL EUV LICENSE', sub: 'shipment can be denied' },
    { x: 1609, title: 'SECTION 232', sub: '25% tariff' },
  ]

  return svgDoc(
    'Four policy controls act at different points in the semiconductor supply chain',
    'A horizontal supply chain marks export control points at EDA design software, foreign fab production under the foreign direct product rule, Dutch EUV export licensing, and United States imports under Section 232 tariffs.',
    `${sectionLabel('FOUR CONTROL POINTS', 92, 120)}
${rule(218, 470, 1702, 470, { color: C.graphite, width: 6, marker: 'arrow-ink' })}
${boxes.map(box => processBox(box.x, 365, 370, box.label, box.sub, box.color)).join('\n')}
${labels.map((label, i) => `<g>
${stopGate(label.x, 680, [C.blue, C.rose, C.amber, C.violet][i])}
${rule(label.x, 631, label.x, 575, { color: [C.blue, C.rose, C.amber, C.violet][i], width: 4, dash: '8 7' })}
${text(label.x, 786, label.title, { size: 24, fill: [C.blue, C.rose, C.amber, C.violet][i], weight: 800, anchor: 'middle', tracking: 1 })}
${text(label.x, 826, label.sub, { size: 20, fill: C.muted, weight: 560, anchor: 'middle' })}
</g>`).join('\n')}
${text(960, 972, 'Each rule acts on a different transaction.', { size: 31, fill: C.ink, weight: 680, anchor: 'middle' })}`,
  )
}

function scopeRing(x, y, r, color, label, sub) {
  return `<g>
  <circle cx="${x}" cy="${y}" r="${r}" fill="none" stroke="${color}" stroke-width="${Math.max(5, r / 18)}" opacity="0.78"/>
  <circle cx="${x}" cy="${y}" r="${r * 0.12}" fill="${color}"/>
  ${text(x, y + r + 56, label, { size: 26, fill: color, weight: 800, anchor: 'middle' })}
  ${text(x, y + r + 90, sub, { size: 19, fill: C.muted, weight: 560, anchor: 'middle' })}
</g>`
}

function exportControlExpansion() {
  return svgDoc(
    'United States semiconductor controls expanded in scope from 2019 through 2024',
    'Four circles grow along a timeline. Controls begin with Huawei in 2019, reach foreign fabs using United States technology in 2020, expand to advanced computing chips and manufacturing equipment in 2022, and add HBM, 140 entities, and 27 tool and software categories in 2024.',
    `${sectionLabel('CONTROL SCOPE', 92, 114)}
${rule(190, 546, 1740, 546, { color: C.rose, width: 7, marker: 'arrow-red' })}
${scopeRing(300, 546, 74, C.rose, 'MAY 2019', 'Huawei · Entity List')}
${scopeRing(720, 546, 114, C.rose, 'MAY 2020', 'FDPR reaches foreign fabs')}
${scopeRing(1150, 546, 158, C.rose, 'OCT 2022', 'advanced chips + fab tools')}
${scopeRing(1590, 546, 205, C.rose, 'DEC 2024', 'HBM · 140 entities · 27 categories')}
${text(300, 318, 'ONE COMPANY', { size: 20, fill: C.muted, weight: 760, anchor: 'middle', tracking: 2 })}
${text(1590, 254, 'COUNTRY-WIDE CAPABILITY', { size: 20, fill: C.rose, weight: 800, anchor: 'middle', tracking: 2 })}
<path d="M370 270C700 122 1240 122 1520 226" fill="none" stroke="${C.rose}" stroke-width="4" stroke-dasharray="11 10" marker-end="url(#arrow-red)" opacity="0.7"/>
${text(960, 990, 'The rule set grew outward from a named company to technologies and supply categories.', { size: 28, fill: C.ink, weight: 640, anchor: 'middle' })}`,
  )
}

function policyGate(x, y, state, label, detail) {
  const color = state === 'closed' ? C.rose : state === 'open' ? C.green : C.amber
  return `<g>
  ${panel(x - 145, y - 136, 290, 272, { fill: state === 'closed' ? C.roseSoft : state === 'open' ? C.greenSoft : C.amberSoft, stroke: color })}
  ${qualificationGate(x, y - 34, color, state !== 'closed')}
  ${text(x, y + 74, label, { size: 22, fill: color, weight: 800, anchor: 'middle', tracking: 1 })}
  ${text(x, y + 108, detail, { size: 18, fill: C.muted, weight: 560, anchor: 'middle' })}
</g>`
}

function h20PolicyCycle() {
  const dates = [
    { x: 230, date: 'OCT 2023', state: 'open', label: 'H20 CREATED', detail: 'H800 exception closes' },
    { x: 590, date: 'APR 2025', state: 'closed', label: 'LICENSED', detail: '$4.5B charge' },
    { x: 950, date: 'JUL–AUG 2025', state: 'limited', label: 'REOPENED', detail: '15% revenue share' },
    { x: 1310, date: 'AUG 2025', state: 'closed', label: 'PRODUCTION STOPS', detail: 'China discourages sales' },
    { x: 1670, date: 'JAN 2026', state: 'limited', label: 'H200 CASE-BY-CASE', detail: '25% tariff' },
  ]

  return svgDoc(
    'Policy repeatedly opened and closed the market for Nvidia China chips',
    'Five policy gates track the H20 and H200 from October 2023 to January 2026: the H20 is created after the H800 exception closes, receives a license requirement in April 2025, briefly reopens with a revenue share, stops production after Chinese discouragement, and is followed by case by case H200 licensing with a tariff.',
    `${sectionLabel('ACCESS TO CHINA', 92, 110)}
${rule(160, 520, 1760, 520, { color: C.graphite, width: 5, marker: 'arrow-ink' })}
${dates.map(item => `<g>
${text(item.x, 216, item.date, { size: 20, fill: C.muted, weight: 800, anchor: 'middle', tracking: 1.3 })}
${policyGate(item.x, 520, item.state, item.label, item.detail)}
</g>`).join('\n')}
${chipIcon(826, 845, C.blue, { scale: 0.72, label: 'H20' })}
${rule(980, 903, 1125, 903, { color: C.blue, width: 5, marker: 'arrow-blue' })}
${chipIcon(1140, 845, C.violet, { scale: 0.72, label: 'H200' })}
${text(960, 1020, 'Compliance product → licensed sale → partial reopening → halted production', { size: 25, fill: C.ink, weight: 630, anchor: 'middle' })}`,
  )
}

function multiPatternChip(x, y) {
  const masks = [0, 1, 2, 3].map(i => `<g transform="translate(${i * 34} ${-i * 24})">
  <rect x="${x}" y="${y}" width="248" height="176" rx="18" fill="${i === 3 ? C.greenSoft : C.paper}" stroke="${i === 3 ? C.green : C.line}" stroke-width="4"/>
  <path d="M${x + 34} ${y + 46}H${x + 214}M${x + 34} ${y + 88}H${x + 214}M${x + 34} ${y + 130}H${x + 214}" stroke="${i === 3 ? C.green : C.line}" stroke-width="7" opacity="0.6"/>
  </g>`).join('\n')
  return masks
}

function rackIcon(x, y, color, scale = 1) {
  const trays = Array.from({ length: 7 }, (_, i) => `<rect x="${x + 18 * scale}" y="${y + (26 + i * 48) * scale}" width="${188 * scale}" height="${32 * scale}" rx="${5 * scale}" fill="${i % 2 ? C.paper : color}" opacity="${i % 2 ? 1 : 0.18}" stroke="${color}" stroke-width="${3 * scale}"/>`).join('')
  return `<g>${panel(x, y, 224 * scale, 390 * scale, { fill: C.paper, stroke: color, radius: 15 * scale })}${trays}</g>`
}

function chinaCapabilityCost() {
  const manyRacks = [0, 1, 2, 3].map(i => rackIcon(1240 + (i % 2) * 250, 285 + Math.floor(i / 2) * 340, C.rose, 0.72)).join('\n')

  return svgDoc(
    'Chinese firms can manufacture advanced chips with yield and power penalties',
    'The left panel shows repeated DUV patterning producing 7 nanometre class logic with estimated yields of 20 to 40 percent and prices 40 to 50 percent above TSMC. The right panel shows Huawei using 384 chips across 16 racks and about four times the power to exceed a GB200 NVL72 in aggregate compute.',
    `${panel(86, 96, 830, 870, { shadow: true })}
${panel(1004, 96, 830, 870, { shadow: true })}
${sectionLabel('SMIC · LOGIC', 142, 170, C.green)}
${text(142, 218, 'DUV MULTI-PATTERNING', { size: 31, fill: C.ink, weight: 780 })}
${multiPatternChip(244, 360)}
${rule(470, 610, 470, 716, { color: C.green, width: 6, marker: 'arrow-green' })}
${pill(158, 748, 'YIELD ~20–40%', C.rose, C.roseSoft, 310, { size: 24 })}
${pill(490, 748, 'PRICE +40–50%', C.amber, C.amberSoft, 330, { size: 24 })}
${text(490, 866, '7 nm-class shipping · 5 nm-class through repeated exposures', { size: 22, fill: C.muted, weight: 560, anchor: 'middle' })}

${sectionLabel('HUAWEI · AI SYSTEM', 1060, 170, C.rose)}
${pill(1170, 208, 'AGGREGATE COMPUTE > GB200 NVL72', C.rose, C.roseSoft, 528, { size: 18 })}
${manyRacks}
${text(1138, 352, '384', { size: 54, fill: C.rose, weight: 820, anchor: 'middle' })}
${text(1138, 395, 'CHIPS', { size: 19, fill: C.muted, weight: 780, anchor: 'middle', tracking: 2 })}
${text(1138, 548, '16', { size: 54, fill: C.rose, weight: 820, anchor: 'middle' })}
${text(1138, 591, 'RACKS', { size: 19, fill: C.muted, weight: 780, anchor: 'middle', tracking: 2 })}
${text(1138, 744, '~4×', { size: 54, fill: C.amber, weight: 820, anchor: 'middle' })}
${text(1138, 787, 'POWER', { size: 19, fill: C.muted, weight: 780, anchor: 'middle', tracking: 2 })}
`,
  )
}

function gapRow(y, label, china, benchmark, color) {
  const start = 590
  const end = 1730
  const current = 735
  return `<g>
  ${text(110, y - 8, label, { size: 29, fill: color, weight: 800 })}
  ${text(110, y + 28, china, { size: 19, fill: C.muted, weight: 560 })}
  ${rule(start, y, end, y, { color: C.faint, width: 8, dash: '12 10', marker: 'arrow-ink' })}
  ${rule(start, y, current, y, { color, width: 12 })}
  <circle cx="${current}" cy="${y}" r="18" fill="${C.paper}" stroke="${color}" stroke-width="6"/>
  ${text(end, y - 24, benchmark, { size: 20, fill: C.ink, weight: 700, anchor: 'end' })}
</g>`
}

function chinaTechnologyGap() {
  return svgDoc(
    'China has different gaps in lithography, memory, and EDA',
    'Four horizontal rows compare the current reported state of Chinese EUV, DUV, HBM, and EDA with external benchmarks. The EUV prototype reports 100 to 150 watts, the announced DUV tool resolves 110 nanometres, HBM remains three to four years behind Korea, and Empyrean holds about 10 to 12 percent of the Chinese EDA market.',
    `${sectionLabel('DIFFERENT TECHNOLOGIES · DIFFERENT GAPS', 110, 110)}
${sectionLabel('REPORTED DOMESTIC STATE', 590, 176, C.muted)}
${sectionLabel('EXTERNAL REFERENCE', 1730, 176, C.muted, 'end')}
${gapRow(280, 'EUV', 'prototype · 100–150 W', 'comparable with ASML around 2017', C.amber)}
${gapRow(465, 'DUV', '110 nm dry scanner', 'not the claimed 28 nm class', C.rose)}
${gapRow(650, 'HBM', 'HBM3 targeted end-2026', 'about 3–4 years behind Korea', C.violet)}
${gapRow(835, 'EDA', 'Empyrean · ~10–12% of China market', 'advanced flow still relies on foreign tools', C.blue)}
<rect x="554" y="930" width="812" height="72" rx="36" fill="${C.roseSoft}" stroke="${C.rose}" stroke-width="3"/>
${text(960, 976, 'ESTIMATED LEADING-EDGE GAP · ABOUT FIVE YEARS', { size: 25, fill: C.rose, weight: 800, anchor: 'middle', tracking: 1.2 })}`,
  )
}

function mapPin(x, y, color, title, value, align = 'start') {
  const dx = align === 'start' ? 34 : -34
  return `<g>
  <circle cx="${x}" cy="${y}" r="24" fill="${C.paper}" stroke="${color}" stroke-width="6"/>
  <circle cx="${x}" cy="${y}" r="9" fill="${color}"/>
  ${text(x + dx, y - 8, title, { size: 22, fill: color, weight: 800, anchor: align })}
  ${text(x + dx, y + 25, value, { size: 19, fill: C.muted, weight: 580, anchor: align })}
</g>`
}

function usFabInvestment() {
  const usOutline = `<path d="M502 324L635 238L822 260L960 230L1088 281L1280 274L1418 358L1510 430L1474 530L1366 558L1320 648L1198 676L1100 748L934 725L806 760L662 690L574 598L480 512Z" fill="${C.blueSoft}" stroke="${C.blue}" stroke-width="5"/>`

  return svgDoc(
    'United States industrial policy funds semiconductor capacity through incentives and equity',
    'A simplified United States map marks TSMC in Arizona, Micron, Samsung in Taylor Texas, and the federal equity investment in Intel. Side panels show the 52.7 billion dollar CHIPS Act, a 25 percent investment tax credit, and a projected rise in United States advanced logic capacity from zero percent in 2022 to 28 percent in 2032.',
    `${panel(76, 96, 374, 868, { shadow: true })}
${sectionLabel('FEDERAL SUPPORT', 126, 174, C.blue)}
${text(126, 270, '$52.7B', { size: 58, fill: C.blue, weight: 820 })}
${text(126, 312, 'CHIPS ACT · 2022', { size: 20, fill: C.muted, weight: 760, tracking: 1.4 })}
${text(126, 430, '+25%', { size: 58, fill: C.green, weight: 820 })}
${text(126, 472, 'INVESTMENT TAX CREDIT', { size: 20, fill: C.muted, weight: 760, tracking: 1.2 })}
${text(126, 594, '$8.9B', { size: 58, fill: C.violet, weight: 820 })}
${text(126, 636, '9.9% OF INTEL', { size: 20, fill: C.muted, weight: 760, tracking: 1.4 })}
${text(126, 684, 'direct federal equity · Aug 2025', { size: 18, fill: C.muted, weight: 560 })}

${panel(490, 96, 1354, 868, { shadow: true })}
${usOutline}
${mapPin(715, 470, C.green, 'TSMC · ARIZONA', '$165B announced')}
${mapPin(1145, 392, C.violet, 'MICRON', 'up to $250B US plan')}
${mapPin(1105, 624, C.rose, 'SAMSUNG · TAYLOR', '~$37B')}
${mapPin(1336, 494, C.blue, 'INTEL', 'federal government · 9.9%', 'end')}
<path d="M602 864H1698" stroke="${C.faint}" stroke-width="18" stroke-linecap="round"/>
<path d="M602 864H909" stroke="${C.blue}" stroke-width="18" stroke-linecap="round"/>
<circle cx="602" cy="864" r="15" fill="${C.blue}"/>
<circle cx="1698" cy="864" r="15" fill="${C.green}"/>
${text(602, 828, '0%', { size: 31, fill: C.blue, weight: 800, anchor: 'middle' })}
${text(602, 912, '2022', { size: 20, fill: C.muted, weight: 700, anchor: 'middle' })}
${text(1698, 828, '28%', { size: 31, fill: C.green, weight: 800, anchor: 'middle' })}
${text(1698, 912, '2032 PROJECTED', { size: 20, fill: C.muted, weight: 700, anchor: 'middle' })}
${text(1150, 917, 'US ADVANCED-LOGIC CAPACITY', { size: 19, fill: C.muted, weight: 760, anchor: 'middle', tracking: 1.5 })}`,
  )
}

function stackLayer(x, y, w, label, sub, color) {
  return `<g filter="url(#shadow)">
  <rect x="${x}" y="${y}" width="${w}" height="124" rx="22" fill="${C.paper}" stroke="${color}" stroke-width="4"/>
  <rect x="${x}" y="${y}" width="20" height="124" rx="10" fill="${color}"/>
  ${text(x + 58, y + 51, label, { size: 28, fill: color, weight: 800 })}
  ${text(x + 58, y + 88, sub, { size: 20, fill: C.muted, weight: 560 })}
</g>`
}

function splitAiStacks() {
  const left = [
    ['ACCELERATOR', 'Nvidia GPU', C.blue],
    ['SOFTWARE', 'CUDA', C.violet],
    ['FOUNDRY', 'TSMC', C.green],
    ['TOOLS', 'ASML + US / Japan equipment', C.amber],
  ]
  const right = [
    ['ACCELERATOR', 'Huawei Ascend', C.rose],
    ['SOFTWARE', 'CANN', C.violet],
    ['FOUNDRY', 'SMIC', C.green],
    ['TOOLS', 'domestic toolchain', C.amber],
  ]

  return svgDoc(
    'The United States led and China led AI stacks use different components',
    'Two vertical stacks compare accelerators, software, foundries, and toolchains. The United States led stack uses Nvidia, CUDA, TSMC, and ASML plus United States and Japanese equipment. The China led stack uses Huawei Ascend, CANN, SMIC, and a domestic toolchain.',
    `${sectionLabel('US-LED STACK', 132, 112, C.blue)}
${sectionLabel('CHINA-LED STACK', 1788, 112, C.rose, 'end')}
${left.map((item, i) => stackLayer(122, 180 + i * 182, 670, item[0], item[1], item[2])).join('\n')}
${right.map((item, i) => stackLayer(1128, 180 + i * 182, 670, item[0], item[1], item[2])).join('\n')}
<path d="M930 150V898" stroke="${C.rose}" stroke-width="5" stroke-dasharray="16 13"/>
<path d="M990 150V898" stroke="${C.blue}" stroke-width="5" stroke-dasharray="16 13"/>
<path d="M894 445L1026 565M1026 445L894 565" stroke="${C.graphite}" stroke-width="9" stroke-linecap="round"/>
${text(960, 970, 'CURRENT MINERAL-CONTROL PAUSES EXPIRE · NOVEMBER 2026', { size: 23, fill: C.rose, weight: 800, anchor: 'middle', tracking: 1.2 })}`,
  )
}

const VISUALS = [
  ['hbm-supplier-race.svg', hbmSupplierRace],
  ['dram-revenue-surge.svg', dramRevenueSurge],
  ['policy-control-points.svg', policyControlPoints],
  ['export-control-expansion.svg', exportControlExpansion],
  ['h20-policy-cycle.svg', h20PolicyCycle],
  ['china-capability-cost.svg', chinaCapabilityCost],
  ['china-technology-gap.svg', chinaTechnologyGap],
  ['us-fab-investment.svg', usFabInvestment],
  ['split-ai-stacks.svg', splitAiStacks],
]

export function generateFollowupVisualsB(outDir) {
  mkdirSync(outDir, { recursive: true })
  const written = []
  for (const [filename, render] of VISUALS) {
    const path = join(outDir, filename)
    writeFileSync(path, render(), 'utf8')
    written.push(path)
  }
  return written
}

const modulePath = fileURLToPath(import.meta.url)
if (process.argv[1] && resolve(process.argv[1]) === modulePath) {
  const outDir = process.argv[2] ?? join(dirname(modulePath), '..', '..', 'rendered')
  const written = generateFollowupVisualsB(outDir)
  console.log(`wrote ${written.length} follow-up visuals to ${outDir}`)
}
