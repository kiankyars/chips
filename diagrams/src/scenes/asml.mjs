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

function person(x, floorY, scale = 1) {
  const headY = floorY - 142 * scale
  return `<g fill="none" stroke="${C.ink}" stroke-width="${8 * scale}" stroke-linecap="round" stroke-linejoin="round" opacity="0.92">
  <circle cx="${x}" cy="${headY}" r="${17 * scale}" fill="${C.ink}" stroke="none"/>
  <path d="M${x} ${headY + 24 * scale}V${floorY - 58 * scale}M${x - 40 * scale} ${headY + 56 * scale}L${x} ${headY + 42 * scale}L${x + 39 * scale} ${headY + 66 * scale}M${x} ${floorY - 58 * scale}L${x - 30 * scale} ${floorY}M${x} ${floorY - 58 * scale}L${x + 34 * scale} ${floorY}"/>
</g>`
}

function scannerScaleScene() {
  const floorY = 885
  const machineX = 350
  const machineY = 540
  const machineW = 1120
  const machineH = 320

  const machine = `<g>
  <rect x="${machineX}" y="${machineY}" width="${machineW}" height="${machineH}" rx="18" fill="${C.panel}" stroke="${C.line}" stroke-width="4"/>
  <path d="M${machineX + 26} ${machineY + 238}H${machineX + machineW - 24}" stroke="${C.line}" stroke-width="3"/>
  <rect x="${machineX + 32}" y="${machineY + 36}" width="218" height="188" rx="10" fill="#1a2740" stroke="${C.blue}" stroke-width="3"/>
  <circle cx="${machineX + 142}" cy="${machineY + 130}" r="52" fill="none" stroke="${C.blue}" stroke-width="4"/>
  <path d="M${machineX + 286} ${machineY + 48}H${machineX + 598}V${machineY + 224}H${machineX + 286}Z" fill="#151f31" stroke="${C.line}" stroke-width="3"/>
  <path d="M${machineX + 626} ${machineY + 34}H${machineX + 854}V${machineY + 224}H${machineX + 626}Z" fill="#151f31" stroke="${C.line}" stroke-width="3"/>
  <rect x="${machineX + 884}" y="${machineY + 50}" width="200" height="174" rx="9" fill="#17263a" stroke="${C.cyan}" stroke-width="3"/>
  <g fill="${C.line}">
    <rect x="${machineX + 52}" y="${machineY + 264}" width="186" height="28" rx="4"/>
    <rect x="${machineX + 282}" y="${machineY + 264}" width="304" height="28" rx="4"/>
    <rect x="${machineX + 630}" y="${machineY + 264}" width="210" height="28" rx="4"/>
    <rect x="${machineX + 884}" y="${machineY + 264}" width="200" height="28" rx="4"/>
  </g>
  <g fill="${C.muted}" opacity="0.62">
    <circle cx="${machineX + 314}" cy="${machineY + 84}" r="7"/><circle cx="${machineX + 348}" cy="${machineY + 84}" r="7"/><circle cx="${machineX + 382}" cy="${machineY + 84}" r="7"/>
    <path d="M${machineX + 664} ${machineY + 94}H${machineX + 816}M${machineX + 664} ${machineY + 126}H${machineX + 816}M${machineX + 664} ${machineY + 158}H${machineX + 816}" stroke="${C.muted}" stroke-width="5"/>
  </g>
</g>`

  return svgDoc(
    'High-NA EUV scanner at human scale',
    'A 14 metre long, 4 metre high High-NA EUV scanner is shown beside a 1.75 metre person.',
    `<path d="M110 885H1780" stroke="${C.line}" stroke-width="3"/>
${scannerScaleSceneGrid()}
${machine}
${person(224, floorY, 1)}
${dimension(machineX, 470, machineX + machineW, 470, '14 m')}
${dimension(1532, machineY, 1532, machineY + machineH, '4 m', { vertical: true })}
${label(224, 928, '1.75 m', { size: 24, fill: C.muted, anchor: 'middle', weight: 560 })}
${label(machineX + 40, machineY + machineH - 20, 'HIGH-NA EUV · EXE PLATFORM', { size: 22, fill: C.muted, tracking: 2.2, weight: 700 })}
${label(1710, 710, '150 t', { size: 54, fill: C.ink, anchor: 'middle', weight: 740 })}
${label(1710, 748, 'system weight', { size: 22, fill: C.muted, anchor: 'middle', weight: 520 })}`,
  )
}

function scannerScaleSceneGrid() {
  const verticals = Array.from({ length: 18 }, (_, i) => `<path d="M${110 + i * 95} 885V925" stroke="${C.line}" stroke-width="2" opacity="0.42"/>`).join('')
  return `<g>${verticals}</g>`
}

function reticleFieldScene() {
  const waferCx = 1450
  const waferCy = 545
  const waferR = 300
  const fieldW = 66
  const fieldH = 52
  const fieldX = waferCx - fieldW / 2 + 34
  const fieldY = waferCy - fieldH / 2 - 52
  const fields = []
  for (let y = waferCy - 260; y <= waferCy + 230; y += fieldH + 7) {
    for (let x = waferCx - 270; x <= waferCx + 240; x += fieldW + 7) {
      fields.push(`<rect x="${x}" y="${y}" width="${fieldW}" height="${fieldH}" rx="2" fill="none" stroke="${C.line}" stroke-width="1.5" opacity="0.58"/>`)
    }
  }

  const defs = `<clipPath id="wafer-clip"><circle cx="${waferCx}" cy="${waferCy}" r="${waferR}"/></clipPath>`
  return svgDoc(
    'Reticle, exposure field and wafer at one physical scale',
    'A reticle pattern is reduced four times to a 26 by 33 millimetre exposure field, which is stepped across a 300 millimetre wafer.',
    `<g>
  <rect x="178" y="386" width="304" height="304" rx="10" fill="${C.panel}" stroke="${C.muted}" stroke-width="3"/>
  <rect x="198" y="434" width="264" height="208" fill="#162b36" stroke="${C.cyan}" stroke-width="4"/>
  <g stroke="${C.cyan}" stroke-width="1.4" opacity="0.35">
    <path d="M224 434V642M250 434V642M276 434V642M302 434V642M328 434V642M354 434V642M380 434V642M406 434V642M432 434V642"/>
    <path d="M198 460H462M198 486H462M198 512H462M198 538H462M198 564H462M198 590H462M198 616H462"/>
  </g>
  ${label(330, 344, 'RETICLE', { size: 25, fill: C.muted, anchor: 'middle', weight: 700, tracking: 2.4 })}
  ${label(330, 734, 'pattern · 132 × 104 mm', { size: 25, fill: C.ink, anchor: 'middle', weight: 620 })}
</g>
<path d="M520 538H840" fill="none" stroke="${C.cyan}" stroke-width="4" marker-end="url(#arrow-cyan)"/>
${label(680, 505, '4× reduction', { size: 27, fill: C.cyan, anchor: 'middle', weight: 700 })}
<g>
  <rect x="876" y="512" width="66" height="52" rx="3" fill="rgba(251,191,36,0.2)" stroke="${C.amber}" stroke-width="4"/>
  ${dimension(876, 607, 942, 607, '33 mm')}
  ${label(966, 548, '26 mm', { size: 24, fill: C.cyan, weight: 700 })}
  ${label(909, 475, 'ONE EXPOSURE', { size: 23, fill: C.muted, anchor: 'middle', weight: 700, tracking: 2 })}
</g>
<path d="M990 538C1080 538 1090 490 1145 474" fill="none" stroke="${C.amber}" stroke-width="3" stroke-dasharray="8 8" marker-end="url(#arrow-amber)"/>
<g>
  <circle cx="${waferCx}" cy="${waferCy}" r="${waferR}" fill="#0b1523" stroke="${C.muted}" stroke-width="4"/>
  <path d="M${waferCx - 52} ${waferCy + waferR - 2}H${waferCx + 52}" stroke="${C.muted}" stroke-width="8"/>
  <g clip-path="url(#wafer-clip)">${fields.join('')}</g>
  <rect x="${fieldX}" y="${fieldY}" width="${fieldW}" height="${fieldH}" rx="3" fill="rgba(251,191,36,0.3)" stroke="${C.amber}" stroke-width="4" filter="url(#glow)"/>
  ${label(waferCx, 196, '300 mm WAFER', { size: 25, fill: C.muted, anchor: 'middle', weight: 700, tracking: 2.4 })}
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
  const beam = 'M612 542L750 704L910 356L1100 257L1265 388L1430 559L1592 744'
  return svgDoc(
    'The causal EUV light path',
    'A carbon dioxide laser strikes tin to create plasma. Thirteen point five nanometre light then reflects through mirrors, the reticle and projection optics to a wafer in vacuum.',
    `<rect x="430" y="122" width="1360" height="790" rx="34" fill="none" stroke="${C.line}" stroke-width="3" stroke-dasharray="13 12"/>
${label(465, 174, 'VACUUM · EUV IS ABSORBED BY AIR AND GLASS', { size: 22, fill: C.muted, weight: 700, tracking: 1.8 })}
<g>
  <rect x="68" y="468" width="300" height="146" rx="16" fill="#2c2412" stroke="${C.amber}" stroke-width="3"/>
  ${label(218, 525, 'TRUMPF', { size: 31, fill: C.ink, anchor: 'middle', weight: 760 })}
  ${label(218, 563, 'CO₂ laser · 30 kW', { size: 22, fill: C.amber, anchor: 'middle', weight: 620 })}
</g>
<path d="M368 541H502" fill="none" stroke="${C.amber}" stroke-width="8" stroke-linecap="round"/>
<path d="M486 528L510 541L486 554Z" fill="${C.amber}"/>
<g>
  <circle cx="518" cy="542" r="13" fill="${C.ink}"/>
  <circle cx="584" cy="542" r="54" fill="rgba(251,113,133,0.2)" stroke="${C.rose}" stroke-width="5" filter="url(#glow)"/>
  <path d="M550 508L618 576M550 576L618 508" stroke="${C.rose}" stroke-width="5" opacity="0.75"/>
  ${label(518, 616, 'TIN', { size: 21, fill: C.muted, anchor: 'middle', weight: 700 })}
  ${label(584, 638, 'PLASMA', { size: 21, fill: C.rose, anchor: 'middle', weight: 700 })}
</g>
<path d="${beam}" fill="none" stroke="${C.rose}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" filter="url(#glow)"/>
${mirror(750, 704, 0, 1.05)}
${mirror(910, 356, 180, 0.9)}
<g transform="translate(1100 257) rotate(-11)">
  <rect x="-92" y="-13" width="184" height="26" rx="4" fill="#183446" stroke="${C.cyan}" stroke-width="4"/>
  <path d="M-68 -4H68" stroke="${C.cyan}" stroke-width="2" stroke-dasharray="6 5"/>
</g>
${mirror(1265, 388, 180, 0.92)}
${mirror(1430, 559, 0, 0.92)}
<g transform="translate(1592 744) rotate(-10)">
  <ellipse cx="0" cy="0" rx="128" ry="34" fill="#123529" stroke="${C.green}" stroke-width="5"/>
  <path d="M-112 0H112" stroke="${C.green}" stroke-width="2" opacity="0.7"/>
</g>
${label(684, 820, 'COLLECT', { size: 21, fill: C.muted, anchor: 'middle', weight: 700 })}
${label(910, 262, 'ILLUMINATE', { size: 21, fill: C.muted, anchor: 'middle', weight: 700 })}
${label(1100, 205, 'RETICLE', { size: 21, fill: C.cyan, anchor: 'middle', weight: 700 })}
${label(1348, 300, '4× PROJECTION', { size: 21, fill: C.muted, anchor: 'middle', weight: 700 })}
${label(1592, 832, 'WAFER', { size: 23, fill: C.green, anchor: 'middle', weight: 720 })}
${label(738, 564, '13.5 nm', { size: 40, fill: C.rose, weight: 760 })}`,
  )
}

function supplierModulesScene() {
  const modules = [
    { x: 128, w: 326, edge: C.amber, company: 'TRUMPF', module: '30 kW CO₂ laser', tag: 'Germany' },
    { x: 494, w: 326, edge: C.rose, company: 'CYMER (ASML)', module: 'tin-droplet source', tag: 'United States' },
    { x: 860, w: 456, edge: C.violet, company: 'ZEISS', module: 'collector + imaging optics', tag: 'Germany' },
    { x: 1356, w: 436, edge: C.cyan, company: 'ASML', module: 'architecture + integration', tag: 'Netherlands' },
  ]

  const blockSvg = modules.map(({ x, w, edge, company, module, tag }, i) => `<g>
  <rect x="${x}" y="384" width="${w}" height="284" rx="18" fill="${C.panel}" stroke="${edge}" stroke-width="4"/>
  <rect x="${x}" y="384" width="${w}" height="12" rx="6" fill="${edge}"/>
  ${label(x + 28, 463, company, { size: 31, fill: C.ink, weight: 760 })}
  ${label(x + 28, 512, module, { size: 23, fill: edge, weight: 620 })}
  ${label(x + 28, 624, tag.toUpperCase(), { size: 18, fill: C.muted, weight: 700, tracking: 1.8 })}
  ${moduleIcon(i, x, w, edge)}
</g>`).join('\n')

  return svgDoc(
    'Supplier modules inside an ASML EUV system',
    'TRUMPF supplies the carbon dioxide laser, Cymer supplies the source, ZEISS supplies the optics, and ASML supplies stages, control and system integration.',
    `<path d="M128 296V240H1792V296" fill="none" stroke="${C.cyan}" stroke-width="4"/>
${label(960, 196, 'ASML · SYSTEM ARCHITECT AND INTEGRATOR', { size: 27, fill: C.cyan, anchor: 'middle', weight: 740, tracking: 2.3 })}
${blockSvg}
<path d="M454 526H486M820 526H852M1316 526H1348" stroke="${C.muted}" stroke-width="4" stroke-dasharray="7 8"/>
${label(960, 764, 'one calibrated system', { size: 25, fill: C.muted, anchor: 'middle', weight: 560 })}
<path d="M330 808H1590" stroke="${C.line}" stroke-width="3"/>
<circle cx="330" cy="808" r="7" fill="${C.amber}"/><circle cx="1590" cy="808" r="7" fill="${C.cyan}"/>
${label(960, 854, 'laser  →  source  →  optics  →  pattern placement', { size: 26, fill: C.ink, anchor: 'middle', weight: 620 })}`,
  )
}

function moduleIcon(index, x, width, edge) {
  const cx = x + width - 74
  if (index === 0) {
    return `<path d="M${cx - 38} 568H${cx + 18}" stroke="${edge}" stroke-width="8"/><path d="M${cx + 18} 548L${cx + 50} 568L${cx + 18} 588Z" fill="${edge}"/>`
  }
  if (index === 1) {
    return `<circle cx="${cx - 12}" cy="565" r="13" fill="${edge}"/><circle cx="${cx + 24}" cy="565" r="38" fill="none" stroke="${edge}" stroke-width="5" filter="url(#glow)"/>`
  }
  if (index === 2) {
    return `${mirror(cx - 16, 558, 0, 0.58)}${mirror(cx + 52, 602, 180, 0.48)}`
  }
  return `<ellipse cx="${cx}" cy="570" rx="58" ry="17" fill="none" stroke="${edge}" stroke-width="5"/><path d="M${cx - 42} 570H${cx + 42}" stroke="${edge}" stroke-width="3"/>`
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
