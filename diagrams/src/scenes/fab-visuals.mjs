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
  manufacture: '#16745c',
  manufactureSoft: '#d7ebe3',
  equipment: '#c17a1b',
  equipmentSoft: '#f2e2c7',
  design: '#2f68a2',
  designSoft: '#dce8f3',
  memory: '#755aa3',
  memorySoft: '#e6dff0',
  danger: '#ad4355',
  dangerSoft: '#f3dce0',
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
  <pattern id="die-grid" width="32" height="28" patternUnits="userSpaceOnUse">
    <path d="M32 0H0V28" fill="none" stroke="${C.graphite}" stroke-width="1.5" opacity="0.42"/>
  </pattern>
  <filter id="paper-shadow" x="-30%" y="-30%" width="160%" height="180%">
    <feDropShadow dx="0" dy="10" stdDeviation="13" flood-color="#493f30" flood-opacity="0.12"/>
  </filter>
  <filter id="soft-shadow" x="-30%" y="-30%" width="160%" height="180%">
    <feDropShadow dx="0" dy="5" stdDeviation="7" flood-color="#493f30" flood-opacity="0.14"/>
  </filter>
  <marker id="arrow-ink" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto">
    <path d="M0 0L12 6L0 12Z" fill="${C.graphite}"/>
  </marker>
  <marker id="arrow-green" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto">
    <path d="M0 0L12 6L0 12Z" fill="${C.manufacture}"/>
  </marker>
  <marker id="arrow-red" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto">
    <path d="M0 0L12 6L0 12Z" fill="${C.danger}"/>
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

function pill(x, y, label, color, fill, width = 150) {
  return `<rect x="${x}" y="${y}" width="${width}" height="48" rx="24" fill="${fill}" stroke="${color}" stroke-width="2"/>
${text(x + width / 2, y + 32, label, { size: 20, fill: color, weight: 760, anchor: 'middle', tracking: 0.5 })}`
}

function wafer(x, y, radius, { fill = C.paper, stroke = C.graphite, bad = false } = {}) {
  return `<g>
  <circle cx="${x}" cy="${y}" r="${radius}" fill="${fill}" stroke="${stroke}" stroke-width="3"/>
  <path d="M${x - radius * 0.68} ${y - radius * 0.42}H${x + radius * 0.68}M${x - radius * 0.82} ${y}H${x + radius * 0.82}M${x - radius * 0.68} ${y + radius * 0.42}H${x + radius * 0.68}M${x - radius * 0.42} ${y - radius * 0.82}V${y + radius * 0.82}M${x} ${y - radius}V${y + radius}M${x + radius * 0.42} ${y - radius * 0.82}V${y + radius * 0.82}" fill="none" stroke="${stroke}" stroke-width="1.5" opacity="0.34"/>
  ${bad ? `<path d="M${x - radius * 0.48} ${y - radius * 0.48}L${x + radius * 0.48} ${y + radius * 0.48}M${x + radius * 0.48} ${y - radius * 0.48}L${x - radius * 0.48} ${y + radius * 0.48}" stroke="${C.danger}" stroke-width="8" stroke-linecap="round"/>` : ''}
</g>`
}

function warning(x, y, size = 34) {
  const h = size * 0.9
  return `<path d="M${x} ${y - h}L${x + size} ${y + h}H${x - size}Z" fill="${C.equipmentSoft}" stroke="${C.equipment}" stroke-width="3" stroke-linejoin="round"/>
${text(x, y + 17, '!', { size: size, fill: C.equipment, weight: 850, anchor: 'middle' })}`
}

function governmentColumns(x, y, scale = 1) {
  const w = 106 * scale
  return `<g fill="none" stroke="${C.design}" stroke-width="${3 * scale}" stroke-linejoin="round">
  <path d="M${x} ${y}L${x + w / 2} ${y - 34 * scale}L${x + w} ${y}Z" fill="${C.designSoft}"/>
  <path d="M${x + 8 * scale} ${y + 4 * scale}H${x + w - 8 * scale}M${x + 16 * scale} ${y + 70 * scale}H${x + w - 16 * scale}"/>
  <path d="M${x + 25 * scale} ${y + 8 * scale}V${y + 66 * scale}M${x + 53 * scale} ${y + 8 * scale}V${y + 66 * scale}M${x + 81 * scale} ${y + 8 * scale}V${y + 66 * scale}"/>
</g>`
}

function foundryFrontierRace() {
  const left = 390
  const right = 1750
  const years = [
    [left, '2018'],
    [710, '2022'],
    [1030, '2023'],
    [1370, '2025'],
    [right, '2027'],
  ]
  const axis = years.map(([x, year]) => `${line(x, 250, x, 970, { color: C.hairline, width: 2, dash: '6 10' })}\n${text(x, 235, year, { size: 21, fill: C.muted, anchor: 'middle', weight: 690 })}`).join('\n')

  const lane = (y, name, color) => `${text(118, y + 9, name, { size: 27, fill: color, weight: 760 })}
${line(left, y, right, y, { color: C.hairline, width: 4 })}`

  return svgDoc(
    'Four paths at the leading edge',
    'A four-lane timeline shows Samsung continuing at the frontier despite a yield warning, GlobalFoundries ending its seven nanometre program in 2018, Rapidus beginning a state-backed two nanometre effort, and SMIC reaching seven nanometres without EUV.',
    `${header('Foundries', 'Four paths at the frontier')}
${axis}
${lane(350, 'SAMSUNG', C.manufacture)}
${line(left, 350, right - 28, 350, { color: C.manufacture, width: 8, marker: 'arrow-green' })}
<circle cx="710" cy="350" r="11" fill="${C.manufacture}"/>
${pill(634, 384, '3 nm GAA', C.manufacture, C.manufactureSoft, 152)}
${warning(1030, 350, 31)}
${text(1030, 423, 'YIELD', { size: 18, fill: C.equipment, weight: 780, anchor: 'middle', tracking: 1.4 })}

${text(78, 544, 'GLOBALFOUNDRIES', { size: 24, fill: C.graphite, weight: 760 })}
${line(left, 535, right, 535, { color: C.hairline, width: 4 })}
<path d="M366 508L414 556M414 508L366 556" stroke="${C.danger}" stroke-width="9" stroke-linecap="round"/>
${pill(425, 511, '7 nm EXIT', C.danger, C.dangerSoft, 184)}

${lane(720, 'RAPIDUS', C.design)}
${governmentColumns(1165, 666, 0.82)}
${line(1275, 720, 1370, 720, { color: C.design, width: 8 })}
<circle cx="1370" cy="720" r="13" fill="${C.design}"/>
${line(1370, 720, right - 28, 720, { color: C.design, width: 6, dash: '15 13', marker: 'arrow-ink' })}
${pill(1296, 754, '2 nm PILOT', C.design, C.designSoft, 178)}
${text(1750, 785, 'TARGET', { size: 18, fill: C.muted, weight: 760, anchor: 'middle', tracking: 1.5 })}

${lane(905, 'SMIC', C.equipment)}
${line(815, 905, 1030, 905, { color: C.equipment, width: 8 })}
<circle cx="1030" cy="905" r="13" fill="${C.equipment}"/>
<g transform="translate(1060 861)">
  <rect x="0" y="0" width="58" height="58" rx="8" fill="none" stroke="${C.equipment}" stroke-width="3"/>
  <rect x="13" y="13" width="58" height="58" rx="8" fill="none" stroke="${C.equipment}" stroke-width="3" opacity="0.72"/>
  <rect x="26" y="26" width="58" height="58" rx="8" fill="none" stroke="${C.equipment}" stroke-width="3" opacity="0.44"/>
</g>
${pill(1166, 881, '7 nm · NO EUV', C.equipment, C.equipmentSoft, 220)}
${text(1816, 1014, 'TIME →', { size: 19, fill: C.muted, weight: 730, anchor: 'end', tracking: 2 })}`,
  )
}

function lot(x, y, color, bad = false) {
  return `<g filter="url(#soft-shadow)">
  <rect x="${x - 34}" y="${y - 27}" width="68" height="54" rx="9" fill="${bad ? C.dangerSoft : C.paper}" stroke="${color}" stroke-width="3"/>
  <circle cx="${x}" cy="${y}" r="17" fill="none" stroke="${color}" stroke-width="2.5"/>${bad ? `
  <path d="M${x - 10} ${y - 10}L${x + 10} ${y + 10}M${x + 10} ${y - 10}L${x - 10} ${y + 10}" stroke="${C.danger}" stroke-width="3"/>` : ''}
</g>`
}

function inspectionGate(x, y) {
  return `<g>
  <path d="M${x - 38} ${y - 66}V${y + 66}M${x + 38} ${y - 66}V${y + 66}" stroke="${C.manufacture}" stroke-width="7" stroke-linecap="round"/>
  <path d="M${x - 55} ${y - 66}H${x + 55}" stroke="${C.manufacture}" stroke-width="7" stroke-linecap="round"/>
  <circle cx="${x}" cy="${y - 28}" r="18" fill="none" stroke="${C.manufacture}" stroke-width="5"/>
  <path d="M${x + 13} ${y - 15}L${x + 32} ${y + 4}" stroke="${C.manufacture}" stroke-width="5" stroke-linecap="round"/>
</g>`
}

function processDrift() {
  const track = (y, color, marker) => `<path d="M330 ${y}H1660" fill="none" stroke="${color}" stroke-width="5" marker-end="url(#${marker})" opacity="0.85"/>`
  const topLots = [540, 685, 830, 975, 1120, 1265, 1410].map(x => lot(x, 420, C.danger, true)).join('\n')
  const bottomGood = [900, 1060, 1220, 1380, 1540].map(x => lot(x, 805, C.manufacture, false)).join('\n')

  return svgDoc(
    'Process drift with and without in-line inspection',
    'The top process track shows a drift beginning at step 400 and many wafer lots remaining suspect until final test at step 1000. The lower track shows an inspection gate at step 401 stopping the first affected lot before later lots proceed.',
    `${header('Process control', 'One missed measurement puts months of work at risk')}
<rect x="104" y="244" width="1712" height="316" rx="26" fill="${C.paper}" stroke="${C.hairline}" stroke-width="2" filter="url(#paper-shadow)"/>
${pill(140, 276, 'NO INSPECTION', C.danger, C.dangerSoft, 212)}
${track(420, C.danger, 'arrow-red')}
${text(330, 371, '400', { size: 23, fill: C.danger, weight: 760, anchor: 'middle' })}
${text(330, 466, 'DRIFT', { size: 18, fill: C.danger, weight: 780, anchor: 'middle', tracking: 1.5 })}
<path d="M330 388V452" stroke="${C.danger}" stroke-width="5"/>
${topLots}
<path d="M1642 351L1740 389V493L1642 531Z" fill="${C.dangerSoft}" stroke="${C.danger}" stroke-width="4"/>
${text(1690, 430, 'SCRAP', { size: 21, fill: C.danger, weight: 800, anchor: 'middle', tracking: 1.5 })}
${text(1660, 371, '1,000', { size: 23, fill: C.danger, weight: 760, anchor: 'middle' })}

<rect x="104" y="614" width="1712" height="330" rx="26" fill="${C.paper}" stroke="${C.hairline}" stroke-width="2" filter="url(#paper-shadow)"/>
${pill(140, 646, 'INSPECT AT 401', C.manufacture, C.manufactureSoft, 222)}
${track(805, C.manufacture, 'arrow-green')}
${text(330, 756, '400', { size: 23, fill: C.danger, weight: 760, anchor: 'middle' })}
<path d="M330 773V837" stroke="${C.danger}" stroke-width="5"/>
${lot(520, 805, C.danger, true)}
${inspectionGate(705, 805)}
${text(705, 728, '401', { size: 23, fill: C.manufacture, weight: 760, anchor: 'middle' })}
<path d="M520 848C520 904 650 904 678 854" fill="none" stroke="${C.danger}" stroke-width="4" stroke-dasharray="8 8" marker-end="url(#arrow-red)"/>
${text(578, 917, 'ONE LOT', { size: 18, fill: C.danger, weight: 780, anchor: 'middle', tracking: 1.5 })}
${bottomGood}
${text(1660, 756, '1,000', { size: 23, fill: C.manufacture, weight: 760, anchor: 'middle' })}
${text(1816, 1014, 'PROCESS STEPS →', { size: 19, fill: C.muted, weight: 730, anchor: 'end', tracking: 2 })}`,
  )
}

function zoomArrow(x1, x2, y = 555) {
  return `<path d="M${x1} ${y}H${x2}" fill="none" stroke="${C.graphite}" stroke-width="4" stroke-dasharray="7 8" marker-end="url(#arrow-ink)" opacity="0.8"/>`
}

function defectScale() {
  const waferGrid = []
  for (let x = 215; x <= 545; x += 44) {
    waferGrid.push(`<path d="M${x} 342V690" stroke="${C.graphite}" stroke-width="1.5" opacity="0.27"/>`)
  }
  for (let y = 360; y <= 668; y += 42) {
    waferGrid.push(`<path d="M196 ${y}H564" stroke="${C.graphite}" stroke-width="1.5" opacity="0.27"/>`)
  }

  const traces = Array.from({ length: 8 }, (_, i) => {
    const y = 408 + i * 48
    return `<path d="M${1170 + (i % 2) * 20} ${y}H${1435 - (i % 3) * 28}" stroke="${i === 3 || i === 4 ? C.equipment : C.graphite}" stroke-width="${i === 3 || i === 4 ? 14 : 8}" stroke-linecap="round" opacity="${i === 3 || i === 4 ? 0.82 : 0.55}"/>`
  }).join('\n')

  return svgDoc(
    'Nested zoom from a wafer to a twenty nanometre defect',
    'A four-stage zoom moves from a 300 millimetre wafer to one die, then to metal interconnect lines, and finally to a 20 nanometre particle bridging two lines. The wafer diameter is fifteen million times the defect width.',
    `${header('Inspection scale', 'A killer defect is fifteen million times smaller than the wafer')}
<g filter="url(#paper-shadow)">
  <circle cx="380" cy="522" r="194" fill="${C.paper}" stroke="${C.graphite}" stroke-width="5"/>
  <clipPath id="wafer-clip"><circle cx="380" cy="522" r="188"/></clipPath>
  <g clip-path="url(#wafer-clip)">${waferGrid.join('\n')}</g>
  <rect x="456" y="456" width="44" height="42" fill="${C.dangerSoft}" stroke="${C.danger}" stroke-width="4"/>
</g>
${text(380, 780, '300 mm WAFER', { size: 25, fill: C.graphite, weight: 760, anchor: 'middle', tracking: 1.2 })}
${zoomArrow(590, 682)}

<g filter="url(#paper-shadow)">
  <rect x="706" y="340" width="342" height="364" rx="18" fill="${C.designSoft}" stroke="${C.design}" stroke-width="5"/>
  <path d="M732 390H1022M732 444H1022M732 498H1022M732 552H1022M732 606H1022M790 366V678M856 366V678M922 366V678M988 366V678" stroke="${C.design}" stroke-width="2" opacity="0.28"/>
  <rect x="888" y="532" width="70" height="58" fill="${C.dangerSoft}" stroke="${C.danger}" stroke-width="4"/>
</g>
${text(877, 780, 'ONE DIE', { size: 25, fill: C.design, weight: 760, anchor: 'middle', tracking: 1.2 })}
${zoomArrow(1070, 1150)}

<g filter="url(#paper-shadow)">
  <rect x="1170" y="340" width="302" height="364" rx="18" fill="${C.paper}" stroke="${C.equipment}" stroke-width="5"/>
  ${traces}
  <circle cx="1320" cy="570" r="32" fill="none" stroke="${C.danger}" stroke-width="5" stroke-dasharray="8 7"/>
</g>
${text(1321, 780, 'METAL LINES', { size: 25, fill: C.equipment, weight: 760, anchor: 'middle', tracking: 1.2 })}
${zoomArrow(1493, 1558)}

<g filter="url(#paper-shadow)">
  <circle cx="1691" cy="522" r="146" fill="${C.paper}" stroke="${C.danger}" stroke-width="5"/>
  <path d="M1566 475H1816M1566 575H1816" stroke="${C.equipment}" stroke-width="34" stroke-linecap="round"/>
  <path d="M1674 473C1654 505 1728 531 1705 576" fill="none" stroke="${C.danger}" stroke-width="28" stroke-linecap="round"/>
  <circle cx="1690" cy="525" r="25" fill="${C.danger}" opacity="0.9"/>
</g>
${text(1691, 780, '20 nm DEFECT', { size: 25, fill: C.danger, weight: 780, anchor: 'middle', tracking: 1.2 })}

<path d="M380 868H1691" stroke="${C.graphite}" stroke-width="3"/>
<path d="M380 850V886M1691 850V886" stroke="${C.graphite}" stroke-width="3"/>
${text(1036, 927, '15,000,000×', { size: 42, fill: C.ink, weight: 780, anchor: 'middle' })}
${text(1036, 966, 'LINEAR SCALE DIFFERENCE', { size: 18, fill: C.muted, weight: 720, anchor: 'middle', tracking: 2.2 })}`,
  )
}

function locationPin(x, y, color, radius = 13) {
  return `<circle cx="${x}" cy="${y}" r="${radius + 9}" fill="${color}" opacity="0.14"/>
<circle cx="${x}" cy="${y}" r="${radius}" fill="${C.paper}" stroke="${color}" stroke-width="5"/>
<circle cx="${x}" cy="${y}" r="${Math.max(4, radius - 7)}" fill="${color}"/>`
}

function fabIcon(x, y, color, scale = 1) {
  return `<g transform="translate(${x} ${y}) scale(${scale})" fill="none" stroke="${color}" stroke-width="4" stroke-linejoin="round">
  <path d="M0 82V30L48 52V30L96 52V14H150V82Z" fill="${C.paper}"/>
  <path d="M109 14V-18H137V14M19 82V60H39V82M61 82V60H81V82M111 82V54H137V82"/>
</g>`
}

function tsmcGeography() {
  return svgDoc(
    'TSMC production footprint and leading-edge concentration',
    'A simplified world map marks Arizona at N4, Dresden for automotive and industrial nodes, Kumamoto at 12 to 28 nanometres, and Taiwan as the concentrated centre of N2 production. A magnified Taiwan panel emphasizes that the leading edge remains there.',
    `${header('TSMC', 'A global footprint with one leading-edge center')}
<rect x="104" y="238" width="1186" height="702" rx="28" fill="${C.paper}" stroke="${C.hairline}" stroke-width="2" filter="url(#paper-shadow)"/>
<g fill="#ddd5c7" stroke="${C.hairline}" stroke-width="2">
  <path d="M170 424L235 356L334 322L430 341L484 397L458 459L400 479L372 547L304 563L259 517L203 503Z"/>
  <path d="M382 577L434 611L468 701L451 817L407 888L368 806L348 678Z"/>
  <path d="M648 349L705 310L767 325L794 365L763 397L719 389L686 420L642 400Z"/>
  <path d="M690 438L775 411L862 444L904 534L881 656L809 757L744 682L712 569Z"/>
  <path d="M792 348L910 294L1046 314L1162 367L1226 444L1190 512L1098 500L1044 559L973 542L916 470L838 452Z"/>
  <path d="M1115 682L1195 663L1253 704L1227 770L1140 781L1090 732Z"/>
</g>
<path d="M206 890C436 804 463 611 626 534C818 442 1022 488 1246 385" fill="none" stroke="${C.hairline}" stroke-width="2" stroke-dasharray="8 12" opacity="0.7"/>

${locationPin(329, 448, C.design)}
${line(329, 425, 329, 364, { color: C.design, width: 3 })}
${text(329, 327, 'ARIZONA', { size: 24, fill: C.design, weight: 780, anchor: 'middle', tracking: 1 })}
${pill(265, 475, 'N4', C.design, C.designSoft, 128)}

${locationPin(737, 366, C.graphite)}
${line(737, 343, 737, 296, { color: C.graphite, width: 3 })}
${text(737, 270, 'DRESDEN', { size: 24, fill: C.graphite, weight: 780, anchor: 'middle', tracking: 1 })}
${text(737, 426, 'AUTO · INDUSTRIAL', { size: 17, fill: C.muted, weight: 720, anchor: 'middle', tracking: 1.1 })}

${locationPin(1174, 403, C.equipment)}
${line(1174, 380, 1174, 334, { color: C.equipment, width: 3 })}
${text(1174, 307, 'KUMAMOTO', { size: 24, fill: C.equipment, weight: 780, anchor: 'middle', tracking: 1 })}
${pill(1110, 438, '12–28 nm', C.equipment, C.equipmentSoft, 158)}

${locationPin(1092, 478, C.manufacture, 19)}
<circle cx="1092" cy="478" r="44" fill="none" stroke="${C.manufacture}" stroke-width="3" opacity="0.45"/>
${line(1117, 492, 1392, 540, { color: C.manufacture, width: 5, marker: 'arrow-green' })}

<rect x="1360" y="238" width="456" height="702" rx="28" fill="${C.manufactureSoft}" stroke="${C.manufacture}" stroke-width="3" filter="url(#paper-shadow)"/>
${text(1588, 296, 'TAIWAN', { size: 24, fill: C.manufacture, weight: 800, anchor: 'middle', tracking: 2.3 })}
<path d="M1583 344C1544 377 1524 427 1533 484C1540 530 1518 580 1539 632C1558 680 1599 706 1614 758C1657 704 1657 641 1638 589C1622 545 1652 486 1634 432C1622 391 1605 360 1583 344Z" fill="${C.paper}" stroke="${C.manufacture}" stroke-width="5"/>
${fabIcon(1416, 733, C.manufacture, 0.72)}
${fabIcon(1541, 773, C.manufacture, 0.72)}
${fabIcon(1665, 721, C.manufacture, 0.72)}
<rect x="1438" y="838" width="300" height="64" rx="32" fill="${C.manufacture}"/>
${text(1588, 880, 'N2 PRODUCTION', { size: 25, fill: C.paper, weight: 820, anchor: 'middle', tracking: 1.2 })}
${text(697, 1005, 'OVERSEAS FABS DIVERSIFY CAPACITY', { size: 18, fill: C.muted, weight: 740, anchor: 'middle', tracking: 2.1 })}
${text(1588, 1005, 'LEADING EDGE', { size: 18, fill: C.manufacture, weight: 800, anchor: 'middle', tracking: 2.1 })}`,
  )
}

const SCENES = {
  'foundry-frontier-race.svg': foundryFrontierRace,
  'process-drift.svg': processDrift,
  'defect-scale.svg': defectScale,
  'tsmc-geography.svg': tsmcGeography,
}

export function generateFabVisuals(outDir) {
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
  const written = generateFabVisuals(outDir)
  console.log(`wrote ${written.length} fab visuals to ${outDir}`)
}
