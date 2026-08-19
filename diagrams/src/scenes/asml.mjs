import { mkdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const W = 1920
const H = 1080

const C = {
  bg: '#05080e',
  ink: '#f8fafc',
  muted: '#9aa9bd',
  line: '#435168',
  cyan: '#67e8f9',
  blue: '#60a5fa',
  amber: '#fbbf24',
  rose: '#fb7185',
  violet: '#c084fc',
  green: '#34d399',
  panel: '#101827',
  panel2: '#172136',
}

const esc = value => String(value)
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')

function svgDoc(title, description, body, defs = '') {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="title desc" font-family="Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif">
<title id="title">${esc(title)}</title>
<desc id="desc">${esc(description)}</desc>
<defs>
  <filter id="glow" x="-100%" y="-100%" width="300%" height="300%">
    <feGaussianBlur stdDeviation="9" result="blur"/>
    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
  </filter>
  <marker id="arrow-cyan" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto"><path d="M0,0 L12,6 L0,12 Z" fill="${C.cyan}"/></marker>
  <marker id="arrow-amber" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto"><path d="M0,0 L12,6 L0,12 Z" fill="${C.amber}"/></marker>
  <marker id="arrow-rose" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto"><path d="M0,0 L12,6 L0,12 Z" fill="${C.rose}"/></marker>
${defs}
</defs>
<rect width="${W}" height="${H}" fill="${C.bg}"/>
${body}
</svg>\n`
}

function label(x, y, value, { size = 26, fill = C.ink, weight = 600, anchor = 'start', tracking = 0 } = {}) {
  return `<text x="${x}" y="${y}" fill="${fill}" font-size="${size}" font-weight="${weight}" text-anchor="${anchor}" letter-spacing="${tracking}">${esc(value)}</text>`
}

function dimension(x1, y1, x2, y2, value, { vertical = false } = {}) {
  if (vertical) {
    const mid = (y1 + y2) / 2
    return `<path d="M${x1 - 14} ${y1}H${x1 + 14}M${x1} ${y1}V${y2}M${x1 - 14} ${y2}H${x1 + 14}" fill="none" stroke="${C.cyan}" stroke-width="3"/>
${label(x1 + 30, mid + 9, value, { size: 30, fill: C.cyan, weight: 720 })}`
  }
  const mid = (x1 + x2) / 2
  return `<path d="M${x1} ${y1 - 14}V${y1 + 14}M${x1} ${y1}H${x2}M${x2} ${y1 - 14}V${y1 + 14}" fill="none" stroke="${C.cyan}" stroke-width="3"/>
${label(mid, y1 - 24, value, { size: 30, fill: C.cyan, weight: 720, anchor: 'middle' })}`
}

function humanSilhouette(x, floorY, height) {
  const top = floorY - height
  const headR = height * 0.075
  const headY = top + headR
  const shoulderY = top + height * 0.23
  const hipY = top + height * 0.61
  return `<g fill="${C.ink}" opacity="0.82">
  <circle cx="${x}" cy="${headY}" r="${headR}"/>
  <path d="M${x - height * 0.11} ${shoulderY}Q${x} ${top + height * 0.17} ${x + height * 0.11} ${shoulderY}L${x + height * 0.085} ${hipY}H${x - height * 0.085}Z"/>
  <path d="M${x - height * 0.08} ${shoulderY + height * 0.04}L${x - height * 0.19} ${top + height * 0.5}L${x - height * 0.14} ${top + height * 0.53}L${x} ${top + height * 0.31}L${x + height * 0.14} ${top + height * 0.53}L${x + height * 0.19} ${top + height * 0.5}L${x + height * 0.08} ${shoulderY + height * 0.04}Z"/>
  <path d="M${x - height * 0.08} ${hipY}H${x - height * 0.005}L${x - height * 0.12} ${floorY}H${x - height * 0.18}Z"/>
  <path d="M${x + height * 0.005} ${hipY}H${x + height * 0.08}L${x + height * 0.18} ${floorY}H${x + height * 0.12}Z"/>
</g>`
}

function scannerScaleScene() {
  const machineX = 300
  const machineY = 350
  const machineW = 1330
  const machineH = 380
  const floorY = machineY + machineH
  const personHeight = machineH * (1.75 / 4)

  const machine = `<g>
  <path d="M${machineX + 20} ${machineY}H${machineX + machineW - 30}L${machineX + machineW} ${machineY + 30}V${machineY + machineH - 20}L${machineX + machineW - 20} ${machineY + machineH}H${machineX + 20}L${machineX} ${machineY + machineH - 20}V${machineY + 20}Z" fill="${C.panel}" stroke="${C.cyan}" stroke-width="4"/>
  <path d="M${machineX + 350} ${machineY + 28}V${machineY + machineH - 48}M${machineX + 892} ${machineY + 28}V${machineY + machineH - 48}" stroke="${C.line}" stroke-width="3"/>
  ${label(machineX + 42, machineY + 58, 'SOURCE', { size: 20, fill: C.blue, weight: 760, tracking: 2 })}
  ${label(machineX + 392, machineY + 58, 'ILLUMINATION + PROJECTION OPTICS', { size: 20, fill: C.violet, weight: 760, tracking: 1.7 })}
  ${label(machineX + 934, machineY + 58, 'RETICLE + WAFER STAGES', { size: 20, fill: C.green, weight: 760, tracking: 1.7 })}
  <circle cx="${machineX + 174}" cy="${machineY + 190}" r="74" fill="${C.panel2}" stroke="${C.blue}" stroke-width="4"/>
  <circle cx="${machineX + 174}" cy="${machineY + 190}" r="35" fill="none" stroke="${C.blue}" stroke-width="3" opacity="0.65"/>
  <path d="M${machineX + 84} ${machineY + 190}H${machineX + 264}" stroke="${C.blue}" stroke-width="3" opacity="0.44"/>
  <path d="M${machineX + 430} ${machineY + 214}Q${machineX + 496} ${machineY + 270} ${machineX + 562} ${machineY + 214}M${machineX + 610} ${machineY + 246}Q${machineX + 676} ${machineY + 190} ${machineX + 742} ${machineY + 246}" fill="none" stroke="${C.violet}" stroke-width="5" stroke-linecap="round" opacity="0.8"/>
  <path d="M${machineX + 496} ${machineY + 248}L${machineX + 676} ${machineY + 212}" stroke="${C.violet}" stroke-width="3" opacity="0.38"/>
  <rect x="${machineX + 950}" y="${machineY + 118}" width="128" height="170" rx="8" fill="${C.panel2}" stroke="${C.green}" stroke-width="3"/>
  <rect x="${machineX + 1112}" y="${machineY + 118}" width="128" height="170" rx="8" fill="${C.panel2}" stroke="${C.green}" stroke-width="3"/>
  <path d="M${machineX + 924} ${machineY + 312}H${machineX + 1270}" stroke="${C.green}" stroke-width="5" opacity="0.65"/>
  <path d="M${machineX + 84} ${machineY + machineH - 36}H${machineX + machineW - 80}" stroke="${C.line}" stroke-width="3"/>
  ${label(machineX + 42, machineY + machineH - 62, 'EXE HIGH-NA EUV · INSTALLED SYSTEM ENVELOPE', { size: 21, fill: C.muted, weight: 700, tracking: 1.8 })}
</g>`

  return svgDoc(
    'High-NA EUV scanner at human scale',
    'A 14 metre long, 4 metre high High-NA EUV scanner is shown beside a 1.75 metre person.',
    `${label(104, 126, 'SIDE ELEVATION · SHARED SCALE', { size: 20, fill: C.muted, weight: 760, tracking: 2.4 })}
<path d="M96 ${floorY}H1778" stroke="${C.line}" stroke-width="3"/>
${machine}
${humanSilhouette(190, floorY, personHeight)}
${dimension(machineX, 266, machineX + machineW, 266, '14 m')}
${dimension(1688, machineY, 1688, machineY + machineH, '4 m', { vertical: true })}
<path d="M98 ${floorY - personHeight}H126M112 ${floorY - personHeight}V${floorY}M98 ${floorY}H126" fill="none" stroke="${C.cyan}" stroke-width="3"/>
${label(190, floorY - personHeight - 20, '1.75 m', { size: 26, fill: C.cyan, weight: 720, anchor: 'middle' })}
${label(1628, 866, '>150 t', { size: 58, fill: C.ink, anchor: 'end', weight: 780 })}
${label(1628, 906, 'installed system', { size: 21, fill: C.muted, anchor: 'end', weight: 560 })}`,
  )
}

function reticleFieldScene() {
  const waferCx = 1450
  const waferCy = 520
  const waferR = 300
  const fieldW = 66
  const fieldH = 52
  const fieldX = waferCx - fieldW / 2
  const fieldY = waferCy - fieldH / 2
  const fields = []
  for (let row = -5; row <= 5; row++) {
    for (let col = -5; col <= 5; col++) {
      const x = fieldX + col * (fieldW + 7)
      const y = fieldY + row * (fieldH + 7)
      fields.push(`<rect x="${x}" y="${y}" width="${fieldW}" height="${fieldH}" rx="2" fill="none" stroke="${C.line}" stroke-width="1.5" opacity="0.58"/>`)
    }
  }

  const defs = `<clipPath id="wafer-clip"><circle cx="${waferCx}" cy="${waferCy}" r="${waferR}"/></clipPath>`
  return svgDoc(
    'Reticle, exposure field and wafer at one physical scale',
    'A reticle pattern is reduced four times to a 26 by 33 millimetre exposure field, which is stepped across a 300 millimetre wafer.',
    `${label(104, 126, 'DRAWN AT ONE PHYSICAL SCALE', { size: 20, fill: C.muted, weight: 760, tracking: 2.4 })}
<g>
  <rect x="126" y="350" width="304" height="304" rx="10" fill="${C.panel}" stroke="${C.muted}" stroke-width="3"/>
  <rect x="146" y="398" width="264" height="208" fill="#162b36" stroke="${C.cyan}" stroke-width="4"/>
  <g fill="none" stroke="${C.cyan}" stroke-width="2" opacity="0.48">
    <path d="M164 420H250V468H310V444H392M164 494H220V548H288V514H392M164 580H246V530H332V568H392"/>
    <rect x="178" y="438" width="42" height="34"/><rect x="252" y="488" width="52" height="42"/><rect x="328" y="452" width="46" height="52"/><rect x="188" y="548" width="62" height="34"/><rect x="292" y="544" width="68" height="38"/>
  </g>
  ${label(278, 304, 'RETICLE PATTERN', { size: 25, fill: C.muted, anchor: 'middle', weight: 700, tracking: 2.4 })}
  ${label(278, 706, '132 × 104 mm', { size: 25, fill: C.ink, anchor: 'middle', weight: 650 })}
</g>

<path d="M410 398L628 466M410 606L628 544" fill="none" stroke="${C.cyan}" stroke-width="3" opacity="0.72"/>
<path d="M628 466Q662 500 628 544" fill="none" stroke="${C.cyan}" stroke-width="9" stroke-linecap="round"/>
<path d="M636 466L798 486M636 544L798 538" fill="none" stroke="${C.cyan}" stroke-width="3" opacity="0.72"/>
${label(626, 390, '4:1 LINEAR REDUCTION', { size: 22, fill: C.cyan, anchor: 'middle', weight: 760, tracking: 1.7 })}

<g>
  <rect x="798" y="486" width="66" height="52" rx="3" fill="rgba(251,191,36,0.18)" stroke="${C.amber}" stroke-width="4"/>
  <path d="M806 498H824V507H838V496H856M806 526H822V516H842V530H856" fill="none" stroke="${C.amber}" stroke-width="1.8" opacity="0.72"/>
  ${label(831, 452, 'EXPOSURE FIELD', { size: 20, fill: C.amber, anchor: 'middle', weight: 760, tracking: 1.5 })}
  <path d="M798 564V584M798 574H864M864 564V584" fill="none" stroke="${C.amber}" stroke-width="2.5"/>
  ${label(831, 614, '33 mm', { size: 21, fill: C.amber, anchor: 'middle', weight: 700 })}
  <path d="M884 486H904M894 486V538M884 538H904" fill="none" stroke="${C.amber}" stroke-width="2.5"/>
  ${label(922, 520, '26 mm', { size: 21, fill: C.amber, weight: 700 })}
</g>

<path d="M972 512H1128" fill="none" stroke="${C.amber}" stroke-width="3" marker-end="url(#arrow-amber)"/>
${label(1048, 478, 'STEP + REPEAT', { size: 20, fill: C.muted, anchor: 'middle', weight: 760, tracking: 1.8 })}
<g>
  <circle cx="${waferCx}" cy="${waferCy}" r="${waferR}" fill="#0b1523" stroke="${C.muted}" stroke-width="4"/>
  <path d="M${waferCx - 52} ${waferCy + waferR - 2}H${waferCx + 52}" stroke="${C.muted}" stroke-width="8"/>
  <g clip-path="url(#wafer-clip)">${fields.join('')}</g>
  <rect x="${fieldX}" y="${fieldY}" width="${fieldW}" height="${fieldH}" rx="3" fill="rgba(251,191,36,0.32)" stroke="${C.amber}" stroke-width="4"/>
  <path d="M${fieldX + 8} ${fieldY + 12}H${fieldX + 26}V${fieldY + 21}H${fieldX + 40}V${fieldY + 10}H${fieldX + 58}M${fieldX + 8} ${fieldY + 40}H${fieldX + 24}V${fieldY + 30}H${fieldX + 44}V${fieldY + 44}H${fieldX + 58}" fill="none" stroke="${C.amber}" stroke-width="1.8" opacity="0.78"/>
  ${label(waferCx, 190, '300 mm WAFER', { size: 25, fill: C.muted, anchor: 'middle', weight: 700, tracking: 2.4 })}
</g>`,
    defs,
  )
}

function mirror(x, y, rotation = 0, scale = 1) {
  return `<g transform="translate(${x} ${y}) rotate(${rotation}) scale(${scale})">
  <path d="M-58 -13Q0 24 58 -13" fill="none" stroke="${C.violet}" stroke-width="12" stroke-linecap="round"/>
  <path d="M-53 -7Q0 24 53 -7" fill="none" stroke="${C.ink}" stroke-width="2" opacity="0.65"/>
</g>`
}

function euvPathScene() {
  const arrow = (x1, x2, y, color = C.rose) => `<path d="M${x1} ${y}H${x2}" fill="none" stroke="${color}" stroke-width="5" marker-end="url(#${color === C.amber ? 'arrow-amber' : 'arrow-rose'})"/>`
  const step = (x, number, title, sub, color) => `<g>
  <circle cx="${x}" cy="320" r="28" fill="${color}"/>
  ${label(x, 329, number, { size: 24, fill: C.bg, weight: 820, anchor: 'middle' })}
  ${label(x, 400, title, { size: 24, fill: color, weight: 780, anchor: 'middle', tracking: 1.5 })}
  ${label(x, 438, sub, { size: 20, fill: C.muted, weight: 580, anchor: 'middle' })}
</g>`

  return svgDoc(
    'EUV requires plasma, vacuum and reflective optics',
    'A carbon dioxide laser strikes tin to create plasma. The plasma emits 13.5 nanometre light, which reflective optics collect, pattern, shrink four to one and project onto a wafer in vacuum.',
    `${label(104, 126, 'CAUSE → LIGHT → PATTERN', { size: 20, fill: C.muted, weight: 760, tracking: 2.4 })}
<path d="M622 220H1788V858H622" fill="none" stroke="${C.line}" stroke-width="3" stroke-dasharray="12 11"/>
${label(658, 264, 'VACUUM · AIR AND GLASS ABSORB EUV', { size: 21, fill: C.muted, weight: 720, tracking: 1.8 })}

${step(190, '1', 'CO₂ LASER', 'drives the source', C.amber)}
<rect x="88" y="500" width="204" height="118" rx="16" fill="${C.panel}" stroke="${C.amber}" stroke-width="4"/>
<path d="M126 559H250" stroke="${C.amber}" stroke-width="9" stroke-linecap="round"/>
<path d="M232 541L266 559L232 577Z" fill="${C.amber}"/>

${arrow(308, 402, 559, C.amber)}
${step(500, '2', 'TIN PLASMA', 'emits 13.5 nm EUV', C.rose)}
<circle cx="500" cy="559" r="54" fill="${C.panel}" stroke="${C.rose}" stroke-width="5"/>
<circle cx="500" cy="559" r="12" fill="${C.ink}"/>
<path d="M500 486V512M500 606V632M427 559H453M547 559H573M449 508L468 527M532 591L551 610M449 610L468 591M532 527L551 508" stroke="${C.rose}" stroke-width="5" stroke-linecap="round"/>

${arrow(572, 700, 559)}
${step(786, '3', 'COLLECT', 'multilayer mirror', C.violet)}
${mirror(786, 559, 0, 0.86)}

${arrow(866, 1004, 559)}
${step(1090, '4', 'PATTERN', 'reflective reticle', C.cyan)}
<rect x="1012" y="524" width="156" height="70" rx="7" fill="${C.panel2}" stroke="${C.cyan}" stroke-width="4"/>
<path d="M1032 544H1072V574H1106V542H1148" fill="none" stroke="${C.cyan}" stroke-width="3"/>

${arrow(1184, 1308, 559)}
${step(1400, '5', 'SHRINK 4:1', 'projection mirrors', C.violet)}
${mirror(1360, 538, 0, 0.55)}
${mirror(1442, 584, 180, 0.5)}

${arrow(1498, 1630, 559)}
${step(1710, '6', 'EXPOSE', 'one wafer field', C.green)}
<ellipse cx="1710" cy="559" rx="88" ry="28" fill="${C.panel}" stroke="${C.green}" stroke-width="5"/>
<rect x="1682" y="548" width="56" height="22" fill="rgba(251,191,36,0.25)" stroke="${C.amber}" stroke-width="3"/>

<path d="M500 750H1710" stroke="${C.rose}" stroke-width="3" opacity="0.65"/>
<path d="M500 736V764M1710 736V764" stroke="${C.rose}" stroke-width="3"/>
${label(1105, 812, '13.5 nm light stays in vacuum and touches only reflective optics', { size: 27, fill: C.ink, weight: 680, anchor: 'middle' })}`,
  )
}

function supplierModulesScene() {
  const modules = [
    { x: 118, w: 350, edge: C.amber, company: 'TRUMPF', module: '30 kW CO₂ laser', tag: 'DRIVE' },
    { x: 538, w: 350, edge: C.rose, company: 'CYMER', module: 'tin-droplet source', tag: 'CREATE EUV' },
    { x: 958, w: 350, edge: C.violet, company: 'ZEISS', module: 'collector + optics', tag: 'SHAPE LIGHT' },
    { x: 1378, w: 424, edge: C.cyan, company: 'ASML', module: 'stages + control', tag: 'PLACE PATTERN' },
  ]

  const blockSvg = modules.map(({ x, w, edge, company, module, tag }) => `<g>
  <rect x="${x}" y="402" width="${w}" height="238" rx="16" fill="${C.panel}" stroke="${edge}" stroke-width="4"/>
  <rect x="${x}" y="402" width="${w}" height="10" rx="5" fill="${edge}"/>
  ${label(x + w / 2, 474, tag, { size: 18, fill: C.muted, weight: 760, anchor: 'middle', tracking: 2 })}
  ${label(x + w / 2, 540, company, { size: 31, fill: C.ink, weight: 780, anchor: 'middle' })}
  ${label(x + w / 2, 584, module, { size: 22, fill: edge, weight: 620, anchor: 'middle' })}
</g>`).join('\n')

  return svgDoc(
    'Supplier modules inside an ASML EUV system',
    'TRUMPF supplies the carbon dioxide laser, Cymer supplies the source, ZEISS supplies the optics, and ASML supplies stages, control and system integration.',
    `<path d="M118 318V244H1802V318" fill="none" stroke="${C.cyan}" stroke-width="4"/>
${label(960, 198, 'INTEGRATION BOUNDARY', { size: 27, fill: C.cyan, anchor: 'middle', weight: 760, tracking: 2.2 })}
${blockSvg}
<path d="M468 521H526" stroke="${C.muted}" stroke-width="4" marker-end="url(#arrow-cyan)"/>
<path d="M888 521H946" stroke="${C.muted}" stroke-width="4" marker-end="url(#arrow-cyan)"/>
<path d="M1308 521H1366" stroke="${C.muted}" stroke-width="4" marker-end="url(#arrow-cyan)"/>
${label(960, 760, 'vacuum · alignment · sensors · software', { size: 27, fill: C.ink, anchor: 'middle', weight: 620 })}
${label(960, 812, 'qualified together as one production scanner', { size: 22, fill: C.muted, anchor: 'middle', weight: 580 })}`,
  )
}

export function generateAsmlScenes(outDir) {
  mkdirSync(outDir, { recursive: true })
  const scenes = {
    'asml-scanner-scale.svg': scannerScaleScene(),
    'asml-reticle-field-wafer.svg': reticleFieldScene(),
    'asml-euv-path.svg': euvPathScene(),
    'asml-supplier-modules.svg': supplierModulesScene(),
  }
  for (const [filename, contents] of Object.entries(scenes)) {
    writeFileSync(join(outDir, filename), contents)
  }
}
