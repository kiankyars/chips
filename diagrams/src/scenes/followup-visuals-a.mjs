import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const W = 1920
const H = 1080

const C = {
  bg: '#f3efe7',
  paper: '#fffaf0',
  ink: '#20252b',
  graphite: '#515b64',
  muted: '#747a76',
  hairline: '#cec6b9',
  grid: '#ded7cb',
  blue: '#2f6f9f',
  blueSoft: '#dceaf3',
  green: '#2f7b65',
  greenSoft: '#d9ebe3',
  amber: '#b87821',
  amberSoft: '#f1e1c3',
  rose: '#b24956',
  roseSoft: '#f1dadd',
  violet: '#705a96',
  violetSoft: '#e7e0f0',
}

const esc = value => String(value)
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')

function defs(extra = '') {
  return `<defs>
  <pattern id="paper-grid" width="48" height="48" patternUnits="userSpaceOnUse">
    <path d="M48 0H0V48" fill="none" stroke="${C.grid}" stroke-width="1" opacity="0.24"/>
  </pattern>
  <filter id="paper-shadow" x="-30%" y="-30%" width="160%" height="180%">
    <feDropShadow dx="0" dy="10" stdDeviation="13" flood-color="#493f30" flood-opacity="0.12"/>
  </filter>
  <marker id="arrow-ink" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto"><path d="M0 0L12 6L0 12Z" fill="${C.graphite}"/></marker>
  <marker id="arrow-blue" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto"><path d="M0 0L12 6L0 12Z" fill="${C.blue}"/></marker>
  <marker id="arrow-green" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto"><path d="M0 0L12 6L0 12Z" fill="${C.green}"/></marker>
  <marker id="arrow-rose" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto"><path d="M0 0L12 6L0 12Z" fill="${C.rose}"/></marker>${extra ? `
  ${extra}` : ''}
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

function line(x1, y1, x2, y2, {
  color = C.graphite,
  width = 3,
  dash = '',
  opacity = 1,
  marker = '',
} = {}) {
  return `<path d="M${x1} ${y1}L${x2} ${y2}" fill="none" stroke="${color}" stroke-width="${width}" stroke-linecap="round"${dash ? ` stroke-dasharray="${dash}"` : ''}${marker ? ` marker-end="url(#${marker})"` : ''} opacity="${opacity}"/>`
}

function header(kicker, title) {
  return `${text(104, 92, kicker.toUpperCase(), { size: 20, fill: C.muted, weight: 760, tracking: 3.6 })}
${text(104, 156, title, { size: 48, weight: 760 })}
<path d="M104 190H1816" stroke="${C.hairline}" stroke-width="2"/>`
}

function panel(x, y, width, height, stroke = C.hairline, fill = C.paper) {
  return `<rect x="${x}" y="${y}" width="${width}" height="${height}" rx="28" fill="${fill}" stroke="${stroke}" stroke-width="2.5" filter="url(#paper-shadow)"/>`
}

function pill(x, y, value, color, fill, width) {
  return `<rect x="${x}" y="${y}" width="${width}" height="48" rx="24" fill="${fill}" stroke="${color}" stroke-width="2"/>
${text(x + width / 2, y + 32, value, { size: 19, fill: color, weight: 780, anchor: 'middle', tracking: 0.8 })}`
}

function chipIcon(x, y, color = C.blue, scale = 1) {
  const pins = []
  for (let i = 0; i < 4; i++) {
    const offset = (20 + i * 24) * scale
    pins.push(`<path d="M${x - 14 * scale} ${y + offset}H${x}M${x + 120 * scale} ${y + offset}H${x + 134 * scale}" stroke="${color}" stroke-width="${3 * scale}"/>`)
    pins.push(`<path d="M${x + offset} ${y - 14 * scale}V${y}M${x + offset} ${y + 120 * scale}V${y + 134 * scale}" stroke="${color}" stroke-width="${3 * scale}"/>`)
  }
  return `<g>
${pins.join('\n')}
<rect x="${x}" y="${y}" width="${120 * scale}" height="${120 * scale}" rx="${14 * scale}" fill="${color}" opacity="0.13" stroke="${color}" stroke-width="${4 * scale}"/>
<path d="M${x + 24 * scale} ${y + 38 * scale}H${x + 96 * scale}M${x + 24 * scale} ${y + 60 * scale}H${x + 72 * scale}V${y + 92 * scale}M${x + 88 * scale} ${y + 60 * scale}V${y + 92 * scale}" fill="none" stroke="${color}" stroke-width="${4 * scale}" stroke-linecap="round"/>
</g>`
}

function fabIcon(x, y, color = C.green, scale = 1) {
  return `<g transform="translate(${x} ${y}) scale(${scale})">
<path d="M0 150V48L86 88V48L174 88V18H228V150Z" fill="${C.paper}" stroke="${color}" stroke-width="5" stroke-linejoin="round"/>
<path d="M28 119H60V150H28ZM92 119H124V150H92ZM156 119H188V150H156Z" fill="${color}" opacity="0.26" stroke="${color}" stroke-width="3"/>
<path d="M174 18V-24H228V18" fill="${color}" opacity="0.18" stroke="${color}" stroke-width="5"/>
</g>`
}

function waferIcon(cx, cy, r, color = C.green) {
  return `<g>
<circle cx="${cx}" cy="${cy}" r="${r}" fill="${C.paper}" stroke="${color}" stroke-width="4"/>
<path d="M${cx - r * 0.65} ${cy - r * 0.36}H${cx + r * 0.65}M${cx - r * 0.86} ${cy}H${cx + r * 0.86}M${cx - r * 0.65} ${cy + r * 0.36}H${cx + r * 0.65}M${cx - r * 0.36} ${cy - r * 0.86}V${cy + r * 0.86}M${cx} ${cy - r}V${cy + r}M${cx + r * 0.36} ${cy - r * 0.86}V${cy + r * 0.86}" fill="none" stroke="${color}" stroke-width="2" opacity="0.36"/>
</g>`
}

// --------------------------------------------------------- slide 047

function designerCard(x, y, name, tag, color) {
  return `<g>
${panel(x, y, 330, 222, color)}
${chipIcon(x + 32, y + 50, color, 0.88)}
${text(x + 178, y + 84, name, { size: 25, fill: color, weight: 800 })}
${text(x + 178, y + 120, tag, { size: 18, fill: C.muted, weight: 720, tracking: 0.8 })}
<path d="M${x + 178} ${y + 153}H${x + 286}" stroke="${color}" stroke-width="4" stroke-linecap="round" opacity="0.45"/>
<path d="M${x + 178} ${y + 176}H${x + 256}" stroke="${color}" stroke-width="4" stroke-linecap="round" opacity="0.28"/>
</g>`
}

function fablessDesigners() {
  const cards = [
    [104, 244, 'AMD', 'CPU + AI', C.rose],
    [470, 244, 'APPLE', 'A · M · C', C.blue],
    [836, 244, 'QUALCOMM', 'MOBILE + RADIO', C.amber],
    [104, 548, 'BROADCOM', 'CUSTOM AI', C.violet],
    [470, 548, 'MARVELL', 'NETWORKING', C.green],
    [836, 548, 'MEDIATEK', 'MOBILE + AI', C.blue],
  ]
  const routes = cards.map(([x, y, , , color]) => `<path d="M${x + 330} ${y + 111}C1210 ${y + 111} 1204 532 1280 532" fill="none" stroke="${color}" stroke-width="3.5" stroke-dasharray="8 8" opacity="0.54"/>`).join('\n')

  return svgDoc(
    'Six fabless designers converge on one manufacturing gate',
    'Six named design companies create different processors and accelerators. Their completed layout files converge at an outside foundry, illustrating diversity in design and concentration in manufacturing.',
    `${header('Fabless designers', 'Six designers, one manufacturing gate')}
${routes}
${cards.map(args => designerCard(...args)).join('\n')}

<rect x="1202" y="454" width="164" height="156" rx="18" fill="${C.blueSoft}" stroke="${C.blue}" stroke-width="4" filter="url(#paper-shadow)"/>
<path d="M1226 454V424H1290L1314 454" fill="${C.blueSoft}" stroke="${C.blue}" stroke-width="4" stroke-linejoin="round"/>
${text(1284, 522, 'GDSII', { size: 25, fill: C.blue, weight: 820, anchor: 'middle', tracking: 1.4 })}
${text(1284, 558, 'LAYOUTS', { size: 17, fill: C.muted, weight: 740, anchor: 'middle', tracking: 1.6 })}
${line(1368, 532, 1452, 532, { color: C.graphite, width: 5, marker: 'arrow-ink' })}

${panel(1456, 244, 360, 608, C.green, C.greenSoft)}
${text(1636, 304, 'OUTSIDE FOUNDRY', { size: 22, fill: C.green, weight: 820, anchor: 'middle', tracking: 1.6 })}
${fabIcon(1522, 390, C.green, 1)}
${waferIcon(1636, 700, 92, C.green)}
${text(1636, 825, 'PHYSICAL CHIPS', { size: 21, fill: C.green, weight: 800, anchor: 'middle', tracking: 1.4 })}
${text(104, 966, 'DESIGN IS DISTRIBUTED', { size: 19, fill: C.muted, weight: 760, tracking: 2.4 })}
${text(1816, 966, 'LEADING-EDGE MANUFACTURING IS NOT', { size: 19, fill: C.green, weight: 800, anchor: 'end', tracking: 2.1 })}`,
  )
}

// --------------------------------------------------------- slide 066

function phoneIcon(x, y, color) {
  return `<g>
<rect x="${x}" y="${y}" width="132" height="236" rx="24" fill="${C.paper}" stroke="${color}" stroke-width="5"/>
<rect x="${x + 16}" y="${y + 30}" width="100" height="164" rx="10" fill="${color}" opacity="0.14"/>
<circle cx="${x + 66}" cy="${y + 214}" r="9" fill="${color}"/>
</g>`
}

function laptopIcon(x, y, color) {
  return `<g>
<rect x="${x}" y="${y}" width="220" height="142" rx="12" fill="${C.paper}" stroke="${color}" stroke-width="5"/>
<rect x="${x + 18}" y="${y + 18}" width="184" height="106" fill="${color}" opacity="0.14"/>
<path d="M${x - 30} ${y + 150}H${x + 250}L${x + 218} ${y + 178}H${x + 2}Z" fill="${C.paper}" stroke="${color}" stroke-width="5" stroke-linejoin="round"/>
</g>`
}

function rackIcon(x, y, color) {
  const units = Array.from({ length: 5 }, (_, i) => `<rect x="${x + 18}" y="${y + 20 + i * 48}" width="184" height="34" rx="6" fill="${color}" opacity="${0.12 + i * 0.035}" stroke="${color}" stroke-width="2"/><circle cx="${x + 184}" cy="${y + 37 + i * 48}" r="5" fill="${color}"/>`).join('\n')
  return `<g><rect x="${x}" y="${y}" width="220" height="286" rx="16" fill="${C.paper}" stroke="${color}" stroke-width="5"/>${units}</g>`
}

function shiftPanel(x, title, year, color, illustration, body) {
  return `<g>
${panel(x, 244, 532, 672, color)}
${pill(x + 34, 278, year, color, color === C.rose ? C.roseSoft : color === C.green ? C.greenSoft : C.blueSoft, 112)}
${text(x + 498, 311, title, { size: 22, fill: color, weight: 820, anchor: 'end', tracking: 2.1 })}
${illustration}
<path d="M${x + 34} 680H${x + 498}" stroke="${C.hairline}" stroke-width="2"/>
${body}
</g>`
}

function intelMissedShifts() {
  return svgDoc(
    'Mobile, Arm, and AI shifted volume away from Intel',
    'Three panels show Intel passing on the original iPhone chip, Apple and AWS moving CPU demand to Arm, and Nvidia data-centre revenue growing far beyond Intel company revenue.',
    `${header('Intel', 'Three markets moved away from x86')}
${shiftPanel(104, 'MOBILE', '2007', C.rose,
    `${phoneIcon(304, 364, C.rose)}
${chipIcon(168, 425, C.graphite, 0.68)}
<path d="M270 493C302 493 304 482 334 482" fill="none" stroke="${C.rose}" stroke-width="4" stroke-dasharray="8 8"/>
<path d="M283 463L317 517M317 463L283 517" stroke="${C.rose}" stroke-width="7" stroke-linecap="round"/>`,
    `${text(138, 742, 'ORIGINAL IPHONE CHIP', { size: 21, fill: C.ink, weight: 760 })}
${text(138, 792, 'VOLUME', { size: 18, fill: C.muted, weight: 760, tracking: 1.5 })}
${text(512, 805, '100× FORECAST', { size: 31, fill: C.rose, weight: 840, anchor: 'end' })}
${text(138, 866, 'Intel passed on the bid', { size: 22, fill: C.graphite, weight: 620 })}`)}

${shiftPanel(694, 'ARM', '2020', C.green,
    `${laptopIcon(850, 360, C.green)}
<rect x="925" y="402" width="70" height="70" rx="12" fill="${C.greenSoft}" stroke="${C.green}" stroke-width="4"/>
${text(960, 449, 'M1', { size: 25, fill: C.green, weight: 840, anchor: 'middle' })}
<g transform="translate(736 534)">${chipIcon(0, 0, C.graphite, 0.6)}</g>
${line(834, 582, 884, 582, { color: C.rose, width: 5, dash: '7 7', marker: 'arrow-rose' })}`,
    `${text(728, 742, 'APPLE LEAVES INTEL', { size: 21, fill: C.ink, weight: 760 })}
${text(728, 792, 'AWS NEW CPU CAPACITY', { size: 18, fill: C.muted, weight: 760, tracking: 1.2 })}
${text(1192, 805, '>50% ARM', { size: 31, fill: C.green, weight: 840, anchor: 'end' })}
${text(728, 866, 'Three consecutive years', { size: 22, fill: C.graphite, weight: 620 })}`)}

${shiftPanel(1284, 'AI', '2026', C.blue,
    `${rackIcon(1438, 352, C.blue)}
<path d="M1328 604H1390" stroke="${C.graphite}" stroke-width="18" stroke-linecap="round" opacity="0.35"/>
<path d="M1328 604H1372" stroke="${C.rose}" stroke-width="18" stroke-linecap="round"/>`,
    `${text(1318, 730, 'QUARTERLY REVENUE', { size: 18, fill: C.muted, weight: 760, tracking: 1.4 })}
${text(1318, 782, 'NVIDIA DATA CENTER', { size: 19, fill: C.blue, weight: 780 })}
${text(1782, 790, '$75.2B', { size: 34, fill: C.blue, weight: 840, anchor: 'end' })}
${text(1318, 836, 'INTEL · TOTAL', { size: 19, fill: C.rose, weight: 780 })}
${text(1782, 844, '$13.6B', { size: 29, fill: C.rose, weight: 820, anchor: 'end' })}`)}
${text(960, 986, 'Each shift redirected demand toward a different architecture or supplier.', { size: 24, fill: C.muted, weight: 620, anchor: 'middle' })}`,
  )
}

// --------------------------------------------------------- slide 069

function governmentIcon(x, y, color) {
  return `<g>
<path d="M${x} ${y + 42}L${x + 90} ${y}L${x + 180} ${y + 42}Z" fill="${color}" opacity="0.16" stroke="${color}" stroke-width="4"/>
<path d="M${x + 18} ${y + 52}H${x + 162}M${x + 28} ${y + 146}H${x + 152}" stroke="${color}" stroke-width="4"/>
<path d="M${x + 46} ${y + 54}V${y + 140}M${x + 90} ${y + 54}V${y + 140}M${x + 134} ${y + 54}V${y + 140}" stroke="${color}" stroke-width="7"/>
</g>`
}

function investorCard(x, y, width, name, amount, detail, color, icon) {
  return `<g>
${panel(x, y, width, 222, color)}
${icon}
${text(x + width - 34, y + 62, name, { size: 21, fill: color, weight: 820, anchor: 'end', tracking: 1.4 })}
${text(x + width - 34, y + 122, amount, { size: 46, fill: color, weight: 850, anchor: 'end' })}
${text(x + width - 34, y + 170, detail, { size: 18, fill: C.muted, weight: 680, anchor: 'end' })}
</g>`
}

function intelInvestmentLifeline() {
  return svgDoc(
    'Three investors supplied Intel capital but no anchor foundry order',
    'Arrows from the US government, SoftBank, and Nvidia feed 15.9 billion dollars into an Intel 14A fab. A separate empty purchase-order box shows that no external 14A anchor customer had been named.',
    `${header('Intel 14A', 'Capital arrived; the anchor customer did not')}

${investorCard(104, 260, 430, 'US GOVERNMENT', '$8.9B', '9.9% stake', C.blue, governmentIcon(140, 312, C.blue))}
${investorCard(104, 550, 430, 'SOFTBANK', '$2B', 'equity', C.amber, `<circle cx="214" cy="660" r="66" fill="${C.amberSoft}" stroke="${C.amber}" stroke-width="4"/>${text(214, 678, 'SB', { size: 44, fill: C.amber, weight: 850, anchor: 'middle' })}`)}
${investorCard(1386, 405, 430, 'NVIDIA', '$5B', 'equity + joint products', C.green, chipIcon(1428, 459, C.green, 0.74))}

<path d="M534 371C610 371 622 465 704 492" fill="none" stroke="${C.blue}" stroke-width="6" marker-end="url(#arrow-blue)"/>
<path d="M534 661C610 661 622 568 704 540" fill="none" stroke="${C.amber}" stroke-width="6" marker-end="url(#arrow-ink)"/>
<path d="M1386 516H1282" fill="none" stroke="${C.green}" stroke-width="6" marker-end="url(#arrow-green)"/>

${panel(704, 260, 578, 514, C.graphite)}
${text(993, 320, 'INTEL FOUNDRY', { size: 23, fill: C.graphite, weight: 820, anchor: 'middle', tracking: 2 })}
${fabIcon(878, 425, C.graphite, 1)}
<rect x="858" y="644" width="270" height="70" rx="35" fill="${C.violetSoft}" stroke="${C.violet}" stroke-width="3"/>
${text(993, 689, '14A · HIGH-NA EUV', { size: 22, fill: C.violet, weight: 820, anchor: 'middle', tracking: 0.8 })}

<rect x="1328" y="686" width="488" height="172" rx="24" fill="${C.roseSoft}" stroke="${C.rose}" stroke-width="3" stroke-dasharray="10 8"/>
${text(1362, 734, 'EXTERNAL 14A PURCHASE ORDER', { size: 18, fill: C.rose, weight: 780, tracking: 1.2 })}
<path d="M1362 782H1570" stroke="${C.rose}" stroke-width="4" opacity="0.32"/>
${text(1778, 824, 'NONE NAMED', { size: 31, fill: C.rose, weight: 850, anchor: 'end' })}

<rect x="512" y="868" width="896" height="92" rx="46" fill="${C.paper}" stroke="${C.hairline}" stroke-width="3"/>
${text(960, 926, '$15.9B OF EQUITY · SIX WEEKS', { size: 31, fill: C.ink, weight: 820, anchor: 'middle', tracking: 1.2 })}`,
  )
}

// --------------------------------------------------------- slide 104

function chemicalDrums(x, y, color) {
  return [0, 72, 144].map((dx, i) => `<g>
<rect x="${x + dx}" y="${y + (i % 2) * 10}" width="58" height="116" rx="10" fill="${color}" opacity="${0.13 + i * 0.05}" stroke="${color}" stroke-width="4"/>
<path d="M${x + dx + 7} ${y + 26 + (i % 2) * 10}H${x + dx + 51}M${x + dx + 7} ${y + 90 + (i % 2) * 10}H${x + dx + 51}" stroke="${color}" stroke-width="3"/>
</g>`).join('\n')
}

function gasCylinders(x, y, color) {
  return [0, 74].map(dx => `<g><rect x="${x + dx}" y="${y + 22}" width="56" height="132" rx="25" fill="${color}" opacity="0.16" stroke="${color}" stroke-width="4"/><path d="M${x + dx + 18} ${y + 22}V${y}H${x + dx + 38}V${y + 22}" fill="none" stroke="${color}" stroke-width="4"/></g>`).join('\n')
}

function mountain(x, y, color) {
  return `<path d="M${x} ${y + 174}L${x + 96} ${y + 16}L${x + 158} ${y + 104}L${x + 224} ${y + 46}L${x + 330} ${y + 174}Z" fill="${color}" opacity="0.14" stroke="${color}" stroke-width="5" stroke-linejoin="round"/>
<path d="M${x + 72} ${y + 174}L${x + 102} ${y + 116}L${x + 130} ${y + 148}L${x + 162} ${y + 106}" fill="none" stroke="${color}" stroke-width="5"/>`
}

function shockPanel(x, year, title, color, sourceSvg, shockLabel, responseLabel, metrics) {
  return `<g>
${panel(x, 244, 532, 682, color)}
${pill(x + 34, 278, year, color, color === C.rose ? C.roseSoft : color === C.amber ? C.amberSoft : C.blueSoft, 112)}
${text(x + 498, 311, title, { size: 22, fill: color, weight: 820, anchor: 'end', tracking: 1.2 })}
${sourceSvg}
<path d="M${x + 70} 532H${x + 462}" stroke="${C.rose}" stroke-width="5" stroke-dasharray="10 10"/>
<path d="M${x + 247} 508L${x + 285} 556M${x + 285} 508L${x + 247} 556" stroke="${C.rose}" stroke-width="8" stroke-linecap="round"/>
${text(x + 266, 596, shockLabel, { size: 18, fill: C.rose, weight: 800, anchor: 'middle', tracking: 1.1 })}
<path d="M${x + 266} 624V698" stroke="${C.green}" stroke-width="5" marker-end="url(#arrow-green)"/>
<rect x="${x + 58}" y="716" width="416" height="86" rx="20" fill="${C.greenSoft}" stroke="${C.green}" stroke-width="3"/>
${text(x + 266, 770, responseLabel, { size: 24, fill: C.green, weight: 830, anchor: 'middle', tracking: 0.7 })}
${text(x + 266, 864, metrics, { size: 20, fill: C.muted, weight: 690, anchor: 'middle' })}
</g>`
}

function materialShocksSubstitution() {
  return svgDoc(
    'Three concentrated-material shocks led to substitution or inventory buffering',
    'Three panels show Japanese chemical restrictions in 2019 followed by Korean localization, the 2022 halt in Ukrainian neon followed by supplier diversification, and the 2024 Spruce Pine quartz shutdown bridged by stockpiles.',
    `${header('Materials', 'Supply shocks opened replacement paths')}
${shockPanel(104, '2019', 'JAPAN → KOREA', C.blue,
    `${chemicalDrums(258, 362, C.blue)}${text(370, 354, 'PHOTORESIST · HF · POLYIMIDE', { size: 16, fill: C.blue, weight: 760, anchor: 'middle', tracking: 0.6 })}`,
    'EXPORT RESTRICTIONS', 'KOREA LOCALIZES', 'HF exports fell about 97%')}
${shockPanel(694, '2022', 'UKRAINE · NEON', C.amber,
    `${gasCylinders(888, 364, C.amber)}${text(960, 354, 'CHIP-LASER NEON', { size: 17, fill: C.amber, weight: 780, anchor: 'middle', tracking: 0.9 })}`,
    'BOTH PLANTS HALT', 'BUYERS DIVERSIFY', 'about ½ of supply · spot price 4×')}
${shockPanel(1284, '2024', 'SPRUCE PINE', C.green,
    `${mountain(1385, 350, C.green)}${text(1550, 354, 'HIGH-PURITY QUARTZ', { size: 17, fill: C.green, weight: 780, anchor: 'middle', tracking: 0.8 })}`,
    'TWO-WEEK SHUTDOWN', 'STOCKPILES BRIDGE', 'estimated 70–90% source share')}
${text(960, 988, 'The disruption was immediate; the supply response reduced repeat leverage.', { size: 24, fill: C.muted, weight: 620, anchor: 'middle' })}`,
  )
}

// --------------------------------------------------------- slide 111

function dieGrid(cx, cy, r, step, clipId, color) {
  const dies = []
  for (let x = cx - r; x <= cx + r; x += step) {
    for (let y = cy - r; y <= cy + r; y += step) {
      const shade = ((x + y) / step) % 5 === 0 ? 0.24 : 0.13
      dies.push(`<rect x="${x + 3}" y="${y + 3}" width="${step - 6}" height="${step - 6}" rx="5" fill="${color}" opacity="${shade}" stroke="${color}" stroke-width="1.5"/>`)
    }
  }
  return `<g clip-path="url(#${clipId})">${dies.join('\n')}</g><circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${color}" stroke-width="5"/>`
}

function analogEconomics() {
  const extra = `<clipPath id="wafer-200"><circle cx="330" cy="564" r="166"/></clipPath>
  <clipPath id="wafer-300"><circle cx="938" cy="564" r="249"/></clipPath>`
  return svgDoc(
    'A 300 millimetre wafer lowers unit cost for mature analog chips',
    'Equal-sized analog dies are shown on 200 and 300 millimetre wafers. The larger wafer provides about 2.3 times the area and Texas Instruments estimates roughly forty percent lower unpackaged chip cost.',
    `${header('Mature analog', 'A larger wafer lowers the cost of old designs')}
${pill(118, 226, '180–45 nm', C.blue, C.blueSoft, 176)}
${pill(314, 226, 'DEPRECIATED FABS', C.amber, C.amberSoft, 240)}
${pill(574, 226, '20-YEAR AVAILABILITY', C.green, C.greenSoft, 270)}

${dieGrid(330, 564, 166, 52, 'wafer-200', C.graphite)}
${text(330, 788, '200 mm', { size: 28, fill: C.graphite, weight: 820, anchor: 'middle' })}

${line(550, 564, 642, 564, { color: C.graphite, width: 5, marker: 'arrow-ink' })}
${text(596, 530, 'SAME DIE', { size: 17, fill: C.muted, weight: 760, anchor: 'middle', tracking: 1.5 })}

${dieGrid(938, 564, 249, 52, 'wafer-300', C.blue)}
${text(938, 860, '300 mm', { size: 31, fill: C.blue, weight: 840, anchor: 'middle' })}
${text(938, 900, '≈ 2.3× THE AREA', { size: 19, fill: C.muted, weight: 760, anchor: 'middle', tracking: 1.6 })}

${panel(1284, 244, 532, 682, C.green)}
${text(1550, 304, 'TEXAS INSTRUMENTS', { size: 22, fill: C.green, weight: 820, anchor: 'middle', tracking: 1.6 })}
${chipIcon(1459, 364, C.green, 1.48)}
${text(1550, 620, '~40%', { size: 78, fill: C.green, weight: 860, anchor: 'middle' })}
${text(1550, 666, 'LOWER COST / CHIP', { size: 23, fill: C.green, weight: 820, anchor: 'middle', tracking: 1.3 })}
<path d="M1352 714H1748" stroke="${C.hairline}" stroke-width="2"/>
${text(1352, 766, '$0.30 PART', { size: 25, fill: C.ink, weight: 790 })}
${text(1748, 766, '60%+ GM', { size: 25, fill: C.amber, weight: 830, anchor: 'end' })}
${text(1550, 842, 'The process can stay in production for decades.', { size: 20, fill: C.muted, weight: 620, anchor: 'middle' })}
${text(104, 986, 'MATURE-NODE ECONOMICS', { size: 19, fill: C.muted, weight: 760, tracking: 2.3 })}
${text(1816, 986, 'MORE DIES · LOWER UNIT COST · LONG PRODUCT LIFE', { size: 19, fill: C.green, weight: 800, anchor: 'end', tracking: 1.7 })}`,
    extra,
  )
}

// --------------------------------------------------------- slide 153

function packageCrossSection(x, y) {
  return `<g>
<rect x="${x}" y="${y}" width="266" height="70" rx="10" fill="${C.graphite}" opacity="0.18" stroke="${C.graphite}" stroke-width="3"/>
<rect x="${x + 34}" y="${y - 92}" width="198" height="88" rx="12" fill="${C.blueSoft}" stroke="${C.blue}" stroke-width="4"/>
<rect x="${x - 18}" y="${y + 74}" width="302" height="30" rx="8" fill="${C.amberSoft}" stroke="${C.amber}" stroke-width="4"/>
${[44, 88, 132, 176, 220].map(dx => `<circle cx="${x + dx}" cy="${y + 38}" r="11" fill="${C.amber}" opacity="0.7"/>`).join('')}
</g>`
}

function testerIcon(x, y) {
  return `<g>
<rect x="${x}" y="${y}" width="260" height="84" rx="18" fill="${C.violetSoft}" stroke="${C.violet}" stroke-width="5"/>
<path d="M${x + 26} ${y + 84}L${x + 54} ${y + 156}M${x + 78} ${y + 84}L${x + 94} ${y + 156}M${x + 130} ${y + 84}V${y + 156}M${x + 182} ${y + 84}L${x + 166} ${y + 156}M${x + 234} ${y + 84}L${x + 206} ${y + 156}" stroke="${C.violet}" stroke-width="4"/>
<rect x="${x + 42}" y="${y + 164}" width="176" height="104" rx="12" fill="${C.paper}" stroke="${C.graphite}" stroke-width="4"/>
<circle cx="${x + 130}" cy="${y + 216}" r="28" fill="${C.greenSoft}" stroke="${C.green}" stroke-width="4"/>
</g>`
}

function concentrationPanel(x, title, share, names, color, illustration, detail) {
  return `<g>
${panel(x, 250, 532, 664, color)}
${text(x + 266, 314, title, { size: 21, fill: color, weight: 820, anchor: 'middle', tracking: 1.4 })}
${illustration}
${text(x + 266, 688, share, { size: 68, fill: color, weight: 860, anchor: 'middle' })}
${text(x + 266, 736, names, { size: 23, fill: C.ink, weight: 800, anchor: 'middle' })}
<path d="M${x + 62} 776H${x + 470}" stroke="${C.hairline}" stroke-width="2"/>
${text(x + 266, 832, detail, { size: 19, fill: C.muted, weight: 650, anchor: 'middle' })}
</g>`
}

function additionalConcentrationRisks() {
  return svgDoc(
    'Three additional semiconductor supply concentrations',
    'Three illustrated panels show Ajinomoto ABF film in advanced packages, silicon wafers supplied by Shin-Etsu and SUMCO, and automated test equipment supplied by Advantest and Teradyne.',
    `${header('Beyond the seven-point board', 'Three more concentrated inputs')}
${pill(1616, 86, '3 MORE', C.rose, C.roseSoft, 184)}
${concentrationPanel(104, 'PACKAGE SUBSTRATE FILM', '>95%', 'AJINOMOTO', C.amber,
    `${packageCrossSection(237, 430)}${text(370, 586, 'ABF', { size: 22, fill: C.amber, weight: 840, anchor: 'middle', tracking: 2 })}`,
    'used in advanced packages')}
${concentrationPanel(694, 'SILICON WAFERS', '>50%', 'SHIN-ETSU + SUMCO', C.blue,
    `${waferIcon(960, 480, 150, C.blue)}<circle cx="907" cy="438" r="9" fill="${C.rose}"/><circle cx="1008" cy="512" r="7" fill="${C.rose}" opacity="0.55"/>${text(960, 504, '11 NINES', { size: 20, fill: C.blue, weight: 820, anchor: 'middle', tracking: 1.6 })}`,
    'electronic-grade wafer volume')}
${concentrationPanel(1284, 'AUTOMATED TEST EQUIPMENT', '>80%', 'ADVANTEST + TERADYNE', C.violet,
    testerIcon(1420, 370),
    'two-company market share')}
${text(960, 986, 'These are important concentrations, but they sit outside the course\'s seven-point cutoff.', { size: 23, fill: C.muted, weight: 620, anchor: 'middle' })}`,
  )
}

const SCENES = {
  'slide-047-fabless-designers.svg': fablessDesigners,
  'slide-066-intel-missed-shifts.svg': intelMissedShifts,
  'slide-069-intel-investment-lifeline.svg': intelInvestmentLifeline,
  'slide-104-material-shocks-substitution.svg': materialShocksSubstitution,
  'slide-111-analog-300mm-economics.svg': analogEconomics,
  'slide-153-additional-concentration-risks.svg': additionalConcentrationRisks,
}

export function generateFollowupVisualsA(outDir) {
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
  const written = generateFollowupVisualsA(outDir)
  console.log(`wrote ${written.length} follow-up visuals to ${outDir}`)
}
