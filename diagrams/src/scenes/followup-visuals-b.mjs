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

function header(kicker, title, subtitle = '') {
  return `${sectionLabel(kicker, 84, 72)}
${text(84, 136, title, { size: 52, fill: C.ink, weight: 820 })}
${subtitle ? text(84, 181, subtitle, { size: 23, fill: C.muted, weight: 540 }) : ''}
${rule(84, 210, 1836, 210, { color: C.faint, width: 2 })}`
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

function hbmSupplierRace() {
  const lanes = [
    { name: 'SK HYNIX', color: C.green, y: 320, end: 1690, lead: '~56% HBM · Q1 2026', sub: "Nvidia's primary HBM supplier since H100" },
    { name: 'SAMSUNG', color: C.rose, y: 545, end: 1690, lead: 'HBM3E qualified · SEPT 2025', sub: 'HBM3E qualification took about 18 months' },
    { name: 'MICRON', color: C.blue, y: 770, end: 1690, lead: '~19–21% HBM · Q1 2026', sub: 'share rose from 2% in 2023' },
  ]

  const laneSvg = lanes.map((lane, i) => `<g>
${text(118, lane.y - 20, lane.name, { size: 29, fill: lane.color, weight: 800, tracking: 1.6 })}
${text(118, lane.y + 18, lane.sub, { size: 20, fill: C.muted, weight: 560 })}
${rule(430, lane.y, lane.end, lane.y, { color: lane.color, width: 8, marker: i === 0 ? 'arrow-green' : i === 1 ? 'arrow-red' : 'arrow-blue' })}
${hbmStack(510, lane.y - 78, lane.color, { scale: 0.58, layers: 6 })}
${pill(1338, lane.y - 25, lane.lead, lane.color, i === 0 ? C.greenSoft : i === 1 ? C.roseSoft : C.blueSoft, 420, { size: 20 })}
</g>`).join('\n')

  return svgDoc(
    'NVIDIA publicly named three HBM4 suppliers for Rubin by mid 2026',
    'Three horizontal lanes show SK hynix, Samsung, and Micron. SK hynix held about 56 percent of HBM in the first quarter of 2026, Micron held about 19 to 21 percent, and NVIDIA publicly named all three as Rubin HBM4 sources by mid 2026.',
    `${sectionLabel('HBM SUPPLIER RACE', 118, 112)}
${rule(118, 150, 1802, 150, { color: C.faint, width: 3 })}
${laneSvg}
<rect x="557" y="902" width="806" height="84" rx="42" fill="${C.violetSoft}" stroke="${C.violet}" stroke-width="3"/>
${text(960, 938, 'MID-2026', { size: 20, fill: C.violet, weight: 800, anchor: 'middle', tracking: 2 })}
${text(960, 972, 'NVIDIA named all three for Rubin HBM4', { size: 29, fill: C.violet, weight: 730, anchor: 'middle' })}`,
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
${text(1470, 782, '1 GB OF HBM OUTPUT', { size: 24, fill: C.violet, weight: 780, anchor: 'middle', tracking: 1.8 })}
${text(1470, 824, 'requires roughly', { size: 23, fill: C.muted, weight: 560, anchor: 'middle' })}
${text(1470, 865, '3× DDR5 WAFER CAPACITY', { size: 25, fill: C.ink, weight: 780, anchor: 'middle', tracking: 1.5 })}
${text(118, 1000, 'Forecast revenue · HBM capacity intensity raises the wafer burden', { size: 22, fill: C.muted, weight: 560 })}`,
  )
}

function accessGate(x, y, color, open = false) {
  const rightTop = open ? y - 72 : y
  return `<g>
  <path d="M${x - 46} ${y - 74}V${y + 74}M${x + 46} ${rightTop - 74}V${rightTop + 74}" stroke="${color}" stroke-width="8" stroke-linecap="round"/>
  <path d="M${x - 60} ${y - 74}H${x + 60}" stroke="${color}" stroke-width="8" stroke-linecap="round"/>
  <circle cx="${x}" cy="${y - 12}" r="20" fill="${C.paper}" stroke="${color}" stroke-width="5"/>
  <path d="M${x - 10} ${y - 12}L${x - 1} ${y - 2}L${x + 16} ${y - 24}" fill="none" stroke="${color}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</g>`
}

function policyControlPoints() {
  const gates = [
    { y: 370, color: C.blue, transaction: 'EDA LICENSE', from: 'US supplier', to: 'chip designer', lever: 'US export control' },
    { y: 520, color: C.green, transaction: 'FAB ORDER', from: 'chip designer', to: 'foreign fab', lever: 'FDPR reaches production' },
    { y: 670, color: C.amber, transaction: 'SCANNER SHIPMENT', from: 'ASML', to: 'leading-edge fab', lever: 'Dutch EUV license' },
    { y: 820, color: C.violet, transaction: 'CHIP IMPORT', from: 'exporter', to: 'US market', lever: 'Section 232 tariff' },
  ]

  return svgDoc(
    'Four policy controls act at different points in the semiconductor supply chain',
    'Four separate transaction arrows show gates at EDA software licensing, foreign fab orders under the foreign direct product rule, Dutch EUV shipment licensing, and United States chip imports.',
    `${header('POLICY CONTROL POINTS', 'Four separate transactions can be blocked', 'Leverage sits where software, fabrication, equipment, and finished chips change hands.')}
${sectionLabel('SENDER', 118, 270, C.muted)}
${sectionLabel('CONTROLLED TRANSACTION', 700, 270, C.muted, 'middle')}
${sectionLabel('RECIPIENT', 1010, 270, C.muted)}
${sectionLabel('POLICY LEVER', 1350, 270, C.muted)}
${rule(1260, 286, 1260, 866, { color: C.faint, width: 2 })}
${gates.map(gate => `<g>
  ${text(118, gate.y + 8, gate.from, { size: 23, fill: C.ink, weight: 680 })}
  ${rule(390, gate.y, 930, gate.y, { color: C.graphite, width: 5, marker: 'arrow-ink' })}
  <circle cx="700" cy="${gate.y}" r="19" fill="${C.paper}" stroke="${gate.color}" stroke-width="6"/>
  <path d="M700 ${gate.y - 42}V${gate.y + 42}" stroke="${gate.color}" stroke-width="6" stroke-linecap="round"/>
  ${text(700, gate.y - 50, gate.transaction, { size: 20, fill: gate.color, weight: 830, anchor: 'middle', tracking: 0.8 })}
  ${text(1010, gate.y + 8, gate.to, { size: 23, fill: C.ink, weight: 680 })}
  ${text(1350, gate.y + 8, gate.lever, { size: 21, fill: gate.color, weight: 720 })}
</g>`).join('\n')}
${text(960, 970, 'Each rule targets a transaction, not the entire supply chain.', { size: 29, fill: C.ink, weight: 680, anchor: 'middle' })}`,
  )
}

function exportControlExpansion() {
  const steps = [
    { y: 330, width: 430, date: 'MAY 2019', scope: 'NAMED COMPANY', detail: 'Huawei · Entity List' },
    { y: 475, width: 760, date: 'MAY 2020', scope: 'FOREIGN PRODUCTION', detail: 'FDPR reaches foreign fabs' },
    { y: 620, width: 1090, date: 'OCT 2022', scope: 'ADVANCED TECHNOLOGIES', detail: 'advanced chips + fab tools' },
    { y: 765, width: 1430, date: 'DEC 2024', scope: 'SUPPLY CATEGORIES', detail: 'HBM · 140 entities · 27 categories' },
  ]

  return svgDoc(
    'United States semiconductor controls expanded in scope from 2019 through 2024',
    'Four progressively wider bands show controls moving from one named company to foreign production, advanced technologies, and broad supply categories.',
    `${header('CONTROL SCOPE · 2019–2024', 'US controls widened from one company to an upstream technology stack', 'The bands show categories added over time; their widths are ordinal, not quantitative.')}
${steps.map(step => `<g>
  ${text(112, step.y + 32, step.date, { size: 22, fill: C.rose, weight: 820, tracking: 1.2 })}
  <rect x="310" y="${step.y}" width="${step.width}" height="68" rx="8" fill="${C.roseSoft}" stroke="${C.rose}" stroke-width="3"/>
  ${text(344, step.y + 29, step.scope, { size: 20, fill: C.rose, weight: 820, tracking: 1.4 })}
  ${text(344, step.y + 55, step.detail, { size: 18, fill: C.ink, weight: 610 })}
</g>`).join('\n')}
${rule(1780, 318, 1780, 855, { color: C.rose, width: 5, marker: 'arrow-red' })}
${text(1748, 300, 'WIDER REACH', { size: 18, fill: C.rose, weight: 820, anchor: 'end', tracking: 1.7 })}
${text(960, 955, 'From a named firm to the capability required to build advanced chips.', { size: 28, fill: C.ink, weight: 650, anchor: 'middle' })}`,
  )
}

function policyGate(x, y, state, label, detail) {
  const color = state === 'closed' ? C.rose : state === 'open' ? C.green : C.amber
  return `<g>
  ${panel(x - 145, y - 136, 290, 272, { fill: state === 'closed' ? C.roseSoft : state === 'open' ? C.greenSoft : C.amberSoft, stroke: color })}
  ${accessGate(x, y - 34, color, state !== 'closed')}
  ${text(x, y + 74, label, { size: 22, fill: color, weight: 800, anchor: 'middle', tracking: 1 })}
  ${text(x, y + 108, detail, { size: 18, fill: C.muted, weight: 560, anchor: 'middle' })}
</g>`
}

function h20PolicyCycle() {
  const dates = [
    { x: 230, y: 400, date: 'OCT 2023', color: C.green, label: 'H20 DESIGNED', detail: 'H800 route closes', labelY: 328 },
    { x: 580, y: 600, date: 'APR 2025', color: C.rose, label: 'LICENSE REQUIRED', detail: '$4.5B charge', labelY: 660 },
    { x: 930, y: 460, date: 'JUL–AUG 2025', color: C.amber, label: 'PARTLY REOPENED', detail: 'reported 15% licensing deal', labelY: 408 },
    { x: 1280, y: 770, date: 'AUG 2025', color: C.rose, label: 'PRODUCTION HALTED', detail: 'China discourages sales', labelY: 716 },
    { x: 1630, y: 570, date: 'JAN 2026', color: C.violet, label: 'H200 CASE-BY-CASE', detail: 'conditional review', labelY: 630 },
  ]

  return svgDoc(
    'Policy repeatedly opened and closed the market for Nvidia China chips',
    'An access-state line tracks the H20 from its October 2023 design through licensing, a partial reopening, halted production, and January 2026 case-by-case review for H200.',
    `${header('ACCESS TO CHINA · OCT 2023–JAN 2026', "Policy repeatedly opened and closed Nvidia's China market", 'A compliance product did not create stable market access.')}
${text(150, 352, 'OPEN', { size: 17, fill: C.green, weight: 820, anchor: 'end', tracking: 1.5 })}
${text(150, 560, 'LICENSED', { size: 17, fill: C.amber, weight: 820, anchor: 'end', tracking: 1.5 })}
${text(150, 776, 'BLOCKED', { size: 17, fill: C.rose, weight: 820, anchor: 'end', tracking: 1.5 })}
${rule(188, 360, 188, 790, { color: C.faint, width: 4 })}
<path d="M230 400H405V600H755V460H1105V770H1455V570H1630" fill="none" stroke="${C.graphite}" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
${dates.map(item => `<g>
  ${rule(item.x, 286, item.x, 840, { color: C.faint, width: 2, dash: '8 10' })}
  ${text(item.x, 270, item.date, { size: 19, fill: C.muted, weight: 820, anchor: 'middle', tracking: 1.2 })}
  <circle cx="${item.x}" cy="${item.y}" r="17" fill="${C.paper}" stroke="${item.color}" stroke-width="7"/>
  ${text(item.x, item.labelY, item.label, { size: 20, fill: item.color, weight: 820, anchor: 'middle', tracking: 0.6 })}
  ${text(item.x, item.labelY + 30, item.detail, { size: 17, fill: C.muted, weight: 560, anchor: 'middle' })}
</g>`).join('\n')}
${text(960, 930, 'H20 compliance route', { size: 22, fill: C.blue, weight: 760, anchor: 'end' })}
${rule(982, 923, 1138, 923, { color: C.graphite, width: 4, marker: 'arrow-ink' })}
${text(1160, 930, 'H200 case-by-case review', { size: 22, fill: C.violet, weight: 760 })}`,
  )
}

function chinaMineralResponse() {
  return svgDoc(
    'China mirrored United States semiconductor controls within twenty-four hours',
    'A causal timeline links the December 2 2024 United States HBM export rule to China banning gallium and germanium exports to the United States one day later, followed by extraterritorial rare-earth rules in October 2025.',
    `${header('MINERAL COUNTER-CONTROLS', 'China mirrored US controls within 24 hours', 'The response moved from a bilateral mineral ban to rules that reach foreign-made goods.')}
${rule(166, 520, 1760, 520, { color: C.graphite, width: 6, marker: 'arrow-ink' })}
<g>
  <circle cx="300" cy="520" r="24" fill="${C.paper}" stroke="${C.blue}" stroke-width="7"/>
  ${text(300, 388, 'DEC 2, 2024', { size: 21, fill: C.blue, weight: 820, anchor: 'middle', tracking: 1.2 })}
  ${text(300, 435, 'US BANS HBM', { size: 27, fill: C.ink, weight: 800, anchor: 'middle' })}
  ${text(300, 472, 'to China', { size: 19, fill: C.muted, weight: 560, anchor: 'middle' })}
</g>
<g>
  <rect x="485" y="476" width="220" height="88" rx="44" fill="${C.amberSoft}" stroke="${C.amber}" stroke-width="3"/>
  ${text(595, 533, '24 HOURS', { size: 29, fill: C.amber, weight: 840, anchor: 'middle', tracking: 1.5 })}
</g>
<g>
  <circle cx="900" cy="520" r="24" fill="${C.paper}" stroke="${C.rose}" stroke-width="7"/>
  ${text(900, 388, 'DEC 3, 2024', { size: 21, fill: C.rose, weight: 820, anchor: 'middle', tracking: 1.2 })}
  ${text(900, 435, 'CHINA BANS Ga + Ge', { size: 27, fill: C.ink, weight: 800, anchor: 'middle' })}
  ${text(900, 472, 'to the United States', { size: 19, fill: C.muted, weight: 560, anchor: 'middle' })}
</g>
<g>
  <circle cx="1420" cy="520" r="24" fill="${C.paper}" stroke="${C.violet}" stroke-width="7"/>
  ${text(1420, 388, 'OCT 2025', { size: 21, fill: C.violet, weight: 820, anchor: 'middle', tracking: 1.2 })}
  ${text(1420, 435, 'RARE-EARTH FDPR', { size: 27, fill: C.ink, weight: 800, anchor: 'middle' })}
  ${text(1420, 472, 'reaches foreign goods', { size: 19, fill: C.muted, weight: 560, anchor: 'middle' })}
</g>
${rule(1420, 550, 1420, 714, { color: C.violet, width: 4, dash: '10 9' })}
<rect x="1030" y="714" width="780" height="116" rx="18" fill="${C.paper}" stroke="${C.faint}" stroke-width="3"/>
${text(1420, 758, 'CURRENT PAUSES EXPIRE', { size: 19, fill: C.amber, weight: 820, anchor: 'middle', tracking: 1.7 })}
${text(1420, 800, 'NOV 10 + NOV 27, 2026', { size: 29, fill: C.ink, weight: 800, anchor: 'middle' })}
${text(960, 946, 'The chokepoint moved from advanced chips to the minerals used across manufacturing.', { size: 27, fill: C.ink, weight: 650, anchor: 'middle' })}`,
  )
}

function nexperiaSupplyShock() {
  const events = [
    { x: 250, number: '1', color: C.blue, over: 'SEP 2025', label: 'DUTCH CONTROL ORDER', detail: 'technology-transfer concerns' },
    { x: 700, number: '2', color: C.rose, over: 'OCT 2025', label: 'CHINA BLOCKS EXPORTS', detail: 'Nexperia · Dongguan' },
    { x: 1150, number: '3', color: C.amber, over: 'SUPPLY EXPOSURE', label: '>50B SIMPLE CHIPS / YEAR', detail: 'mature-node volume' },
    { x: 1600, number: '4', color: C.rose, over: 'CONSEQUENCE', label: 'AUTOMAKERS WARN', detail: 'within days · production stoppages' },
  ]

  return svgDoc(
    'A Nexperia control dispute created an automotive supply shock',
    "A four-step causal timeline connects the Dutch government control order, China's Dongguan export block, more than fifty billion mature-node chips per year, and automaker warnings of production stoppages within days.",
    `${header('MATURE-NODE LEVERAGE', 'A chip-control dispute became an automotive supply shock', 'The vulnerable component was a high-volume, cents-priced mature-node part.')}
${rule(158, 520, 1760, 520, { color: C.graphite, width: 6, marker: 'arrow-ink' })}
${events.map(event => `<g>
  <circle cx="${event.x}" cy="520" r="27" fill="${event.color}"/>
  ${text(event.x, 529, event.number, { size: 24, fill: C.paper, weight: 850, anchor: 'middle' })}
  ${text(event.x, 382, event.over, { size: 23, fill: event.color, weight: 840, anchor: 'middle', tracking: 1 })}
  ${text(event.x, 625, event.label, { size: event.number === '3' ? 20 : 22, fill: C.ink, weight: 820, anchor: 'middle', tracking: 0.5 })}
  ${text(event.x, 662, event.detail, { size: 19, fill: C.muted, weight: 560, anchor: 'middle' })}
</g>`).join('\n')}
${text(960, 880, 'Cents-priced mature-node parts became the bottleneck.', { size: 31, fill: C.ink, weight: 700, anchor: 'middle' })}`,
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
  return svgDoc(
    'Chinese firms can manufacture advanced chips with yield and power penalties',
    'A single tradeoff flow shows repeated DUV exposures lowering estimated yield and raising wafer price, followed by Huawei compensating with 384 chips across 16 racks and about four times the power.',
    `${header('ADVANCED COMPUTE · 2026 ESTIMATES', 'China trades yield and power for capability', 'Multi-patterning raises manufacturing cost; system scale raises energy use.')}
${sectionLabel('SMIC · LOGIC', 118, 286, C.green)}
${text(118, 334, 'REPEATED DUV EXPOSURES', { size: 28, fill: C.ink, weight: 800 })}
${multiPatternChip(220, 430)}
${text(260, 742, '~20–40%', { size: 48, fill: C.rose, weight: 840, anchor: 'middle' })}
${text(260, 780, 'ESTIMATED YIELD', { size: 18, fill: C.muted, weight: 780, anchor: 'middle', tracking: 1.5 })}
${text(600, 742, '+40–50%', { size: 48, fill: C.amber, weight: 840, anchor: 'middle' })}
${text(600, 780, 'PRICE VS TSMC', { size: 18, fill: C.muted, weight: 780, anchor: 'middle', tracking: 1.5 })}
${rule(788, 540, 1088, 540, { color: C.graphite, width: 7, marker: 'arrow-ink' })}
${text(938, 500, 'SYSTEM COMPENSATION', { size: 18, fill: C.muted, weight: 820, anchor: 'middle', tracking: 1.4 })}
${sectionLabel('HUAWEI · CLOUDMATRIX 384', 1150, 286, C.rose)}
${rackIcon(1370, 350, C.rose, 1.08)}
${text(1230, 414, '384', { size: 52, fill: C.rose, weight: 840, anchor: 'middle' })}
${text(1230, 452, 'CHIPS', { size: 18, fill: C.muted, weight: 780, anchor: 'middle', tracking: 1.6 })}
${text(1230, 586, '16', { size: 52, fill: C.rose, weight: 840, anchor: 'middle' })}
${text(1230, 624, 'RACKS', { size: 18, fill: C.muted, weight: 780, anchor: 'middle', tracking: 1.6 })}
${text(1230, 758, '~4×', { size: 52, fill: C.amber, weight: 840, anchor: 'middle' })}
${text(1230, 796, 'POWER VS ONE NVL72', { size: 15, fill: C.muted, weight: 780, anchor: 'middle', tracking: 1 })}
${text(1565, 824, 'AGGREGATE COMPUTE', { size: 17, fill: C.muted, weight: 760, anchor: 'middle', tracking: 1 })}
${text(1565, 858, '> ONE GB200 NVL72', { size: 25, fill: C.rose, weight: 820, anchor: 'middle' })}
${text(960, 995, 'SMIC + Huawei · estimates vary by product and workload', { size: 19, fill: C.muted, weight: 560, anchor: 'middle' })}`,
  )
}

function chinaTechnologyGap() {
  const rows = [
    { y: 342, label: 'EUV', color: C.amber, domestic: 'Prototype · 100–150 W', reference: "Below production; source trails ASML's 2017 benchmark" },
    { y: 492, label: 'DUV', color: C.rose, domestic: '110 nm dry scanner', reference: 'Not the claimed 28 nm immersion class' },
    { y: 642, label: 'HBM', color: C.violet, domestic: 'HBM3 targeted end-2026', reference: 'About 3–4 years behind Korea' },
    { y: 792, label: 'EDA', color: C.blue, domestic: 'Empyrean · ~10–12% of China market', reference: 'Advanced flows still rely on foreign tools' },
  ]

  return svgDoc(
    'China has different gaps in lithography, memory, and EDA',
    'A comparison table lists the reported domestic state and a relevant external reference for EUV, DUV, HBM, and EDA without placing unlike metrics on one numeric scale.',
    `${header('TECHNOLOGY SUBSTITUTION', "China's technology gaps are not one number", 'EUV power, lithography resolution, HBM timing, and EDA coverage require different comparisons.')}
${sectionLabel('TECHNOLOGY', 112, 270, C.muted)}
${sectionLabel('REPORTED DOMESTIC STATE', 430, 270, C.muted)}
${sectionLabel('EXTERNAL REFERENCE / LIMIT', 1040, 270, C.muted)}
${rows.map(row => `<g>
  ${rule(102, row.y + 58, 1818, row.y + 58, { color: C.faint, width: 2 })}
  <rect x="108" y="${row.y - 36}" width="12" height="72" rx="6" fill="${row.color}"/>
  ${text(150, row.y + 8, row.label, { size: 32, fill: row.color, weight: 840 })}
  ${text(430, row.y + 8, row.domestic, { size: 23, fill: C.ink, weight: 680 })}
  ${text(1040, row.y + 8, row.reference, { size: 22, fill: C.ink, weight: 650 })}
</g>`).join('\n')}`,
  )
}

function usFabInvestment() {
  return svgDoc(
    'Export controls buy time while domestic semiconductor capacity builds resilience',
    'A single progression shows the projected United States share of global below ten nanometre logic capacity rising from zero percent in 2022 to twenty-eight percent in 2032, with incentives, construction, qualification, and yield ramp between them.',
    `${header('US INDUSTRIAL POLICY', 'Export controls buy time; domestic capacity builds resilience', 'The domestic half of semiconductor policy is a capacity build, not another restriction.')}
${sectionLabel('PROJECTED U.S. SHARE OF GLOBAL <10 nm LOGIC CAPACITY', 960, 350, C.violet, 'middle')}

${text(248, 640, '0%', { size: 156, fill: C.blue, weight: 860, anchor: 'middle' })}
${text(248, 704, '2022', { size: 27, fill: C.muted, weight: 800, anchor: 'middle', tracking: 1.5 })}

${rule(438, 600, 1448, 600, { color: C.graphite, width: 9, marker: 'arrow-ink' })}

<circle cx="650" cy="600" r="15" fill="${C.blue}"/>
${text(650, 486, 'PUBLIC INCENTIVES', { size: 21, fill: C.blue, weight: 840, anchor: 'middle', tracking: 1.2 })}
${text(650, 528, 'grants · loans · equity · 25% credit', { size: 21, fill: C.muted, weight: 580, anchor: 'middle' })}

<circle cx="960" cy="600" r="15" fill="${C.violet}"/>
${text(960, 486, 'CONSTRUCTION', { size: 21, fill: C.violet, weight: 840, anchor: 'middle', tracking: 1.2 })}
${text(960, 528, 'build and equip the fabs', { size: 21, fill: C.muted, weight: 580, anchor: 'middle' })}

<circle cx="1270" cy="600" r="15" fill="${C.green}"/>
${text(1270, 486, 'QUALIFICATION + YIELD', { size: 21, fill: C.green, weight: 840, anchor: 'middle', tracking: 1.2 })}
${text(1270, 528, 'turn capacity into usable output', { size: 21, fill: C.muted, weight: 580, anchor: 'middle' })}

${text(1665, 640, '28%', { size: 156, fill: C.green, weight: 870, anchor: 'middle' })}
${text(1665, 704, '2032E', { size: 27, fill: C.muted, weight: 800, anchor: 'middle', tracking: 1.5 })}

${text(960, 1000, 'SIA / BCG · May 2024', { size: 18, fill: C.muted, weight: 600, anchor: 'middle', tracking: 0.5 })}`,
  )
}

function taiwanConcentration() {
  const barX = 190
  const barW = 1540
  const taiwanW = barW * 0.92

  return svgDoc(
    'Taiwan held ninety-two percent of global sub-ten-nanometre capacity in 2022',
    'A share bar shows Taiwan at ninety-two percent and the rest of the world at eight percent of sub-ten-nanometre capacity in 2022. A separate forward-looking line notes that TSMC N2 capacity was committed through the second quarter of 2027.',
    `${header('ADVANCED-LOGIC CONCENTRATION', 'Taiwan held 92% of global sub-10 nm capacity', 'The capacity share is a 2022 snapshot; the N2 order signal below is forward-looking.')}
${sectionLabel('2022 CAPACITY SHARE', barX, 328, C.blue)}
<rect x="${barX}" y="390" width="${barW}" height="132" rx="18" fill="${C.faint}"/>
<path d="M${barX + 18} 390H${barX + taiwanW}V522H${barX + 18}Q${barX} 522 ${barX} 504V408Q${barX} 390 ${barX + 18} 390Z" fill="${C.blue}"/>
${text(barX + 44, 470, 'TAIWAN · 92%', { size: 42, fill: C.paper, weight: 850, tracking: 0.8 })}
${text(barX + barW - 40, 470, '8%', { size: 36, fill: C.graphite, weight: 840, anchor: 'end' })}
${text(barX + barW - 40, 552, 'REST OF WORLD', { size: 17, fill: C.muted, weight: 760, anchor: 'end', tracking: 1.3 })}
${rule(190, 636, 1730, 636, { color: C.faint, width: 2 })}
${sectionLabel('SEPARATE FORWARD SIGNAL', 190, 702, C.violet)}
${text(190, 772, 'TSMC N2 capacity', { size: 31, fill: C.ink, weight: 720 })}
${rule(535, 762, 1398, 762, { color: C.violet, width: 6, marker: 'arrow-ink' })}
${text(1460, 728, 'COMMITTED THROUGH', { size: 18, fill: C.muted, weight: 780, tracking: 1 })}
${text(1460, 779, 'Q2 2027', { size: 45, fill: C.violet, weight: 850 })}
${text(960, 944, 'Capacity concentration and committed demand are different measures of the same exposure.', { size: 27, fill: C.ink, weight: 650, anchor: 'middle' })}`,
  )
}

function splitAiStacks() {
  const rows = [
    { y: 360, layer: 'ACCELERATOR', left: 'Nvidia GPU', right: 'Huawei Ascend', color: C.blue },
    { y: 500, layer: 'SOFTWARE', left: 'CUDA', right: 'CANN', color: C.violet },
    { y: 640, layer: 'FOUNDRY', left: 'TSMC', right: 'SMIC', color: C.green },
    { y: 780, layer: 'TOOLS', left: 'ASML + US/Japan equipment', right: 'Domestic tools + foreign dependencies', color: C.amber },
  ]

  return svgDoc(
    'The United States led and China led AI stacks are diverging but still interdependent',
    'Aligned rows compare accelerators, software, foundries, and production tools in the United States led and China led AI stacks. The tools row makes continuing foreign dependencies explicit.',
    `${header('AI ECOSYSTEMS', 'Two AI stacks are diverging, not yet independent', 'Accelerators and software differ; tools and materials still cross borders.')}
${sectionLabel('US-LED', 170, 280, C.blue)}
${sectionLabel('LAYER', 960, 280, C.muted, 'middle')}
${sectionLabel('CHINA-LED', 1750, 280, C.rose, 'end')}
${rows.map(row => `<g>
  ${rule(112, row.y + 64, 1808, row.y + 64, { color: C.faint, width: 2 })}
  ${text(170, row.y + 8, row.left, { size: row.layer === 'TOOLS' ? 25 : 30, fill: C.ink, weight: 720 })}
  ${text(1750, row.y + 8, row.right, { size: row.layer === 'TOOLS' ? 23 : 30, fill: C.ink, weight: 720, anchor: 'end' })}
  ${text(960, row.y + 8, row.layer, { size: 21, fill: row.color, weight: 840, anchor: 'middle', tracking: 1.2 })}
</g>`).join('\n')}
${text(960, 975, 'Divergence is real; self-sufficiency is not.', { size: 31, fill: C.rose, weight: 760, anchor: 'middle' })}`,
  )
}

const VISUALS = [
  ['hbm-supplier-race.svg', hbmSupplierRace],
  ['dram-revenue-surge.svg', dramRevenueSurge],
  ['policy-control-points.svg', policyControlPoints],
  ['export-control-expansion.svg', exportControlExpansion],
  ['h20-policy-cycle.svg', h20PolicyCycle],
  ['china-mineral-response.svg', chinaMineralResponse],
  ['nexperia-supply-shock.svg', nexperiaSupplyShock],
  ['china-capability-cost.svg', chinaCapabilityCost],
  ['china-technology-gap.svg', chinaTechnologyGap],
  ['us-fab-investment.svg', usFabInvestment],
  ['taiwan-concentration.svg', taiwanConcentration],
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
