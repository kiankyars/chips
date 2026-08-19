import { mkdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

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

function defs() {
  return `<defs>
  <pattern id="inference-grid" width="48" height="48" patternUnits="userSpaceOnUse">
    <path d="M48 0H0V48" fill="none" stroke="${C.grid}" stroke-width="1" opacity="0.24"/>
  </pattern>
  <filter id="inference-shadow" x="-30%" y="-30%" width="160%" height="180%">
    <feDropShadow dx="0" dy="10" stdDeviation="13" flood-color="#493f30" flood-opacity="0.12"/>
  </filter>
  <marker id="arrow-blue" markerUnits="userSpaceOnUse" markerWidth="18" markerHeight="18" refX="16" refY="9" orient="auto">
    <path d="M0 0L18 9L0 18Z" fill="${C.blue}"/>
  </marker>
  <marker id="arrow-blue-start" markerUnits="userSpaceOnUse" markerWidth="18" markerHeight="18" refX="2" refY="9" orient="auto">
    <path d="M18 0L0 9L18 18Z" fill="${C.blue}"/>
  </marker>
  <marker id="arrow-amber" markerUnits="userSpaceOnUse" markerWidth="18" markerHeight="18" refX="16" refY="9" orient="auto">
    <path d="M0 0L18 9L0 18Z" fill="${C.amber}"/>
  </marker>
</defs>`
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

function panel(x, y, width, height, stroke = C.hairline, fill = C.paper, shadow = true, radius = 26) {
  return `<rect x="${x}" y="${y}" width="${width}" height="${height}" rx="${radius}" fill="${fill}" stroke="${stroke}" stroke-width="2.5"${shadow ? ' filter="url(#inference-shadow)"' : ''}/>`
}

function arrowPath(d, { color = C.blue, width = 5, dash = '', start = false, end = true, opacity = 1 } = {}) {
  const markerStart = start ? ' marker-start="url(#arrow-blue-start)"' : ''
  const markerEnd = end ? ` marker-end="url(#${color === C.amber ? 'arrow-amber' : 'arrow-blue'})"` : ''
  return `<path d="${d}" fill="none" stroke="${color}" stroke-width="${width}" stroke-linecap="round" stroke-linejoin="round"${dash ? ` stroke-dasharray="${dash}"` : ''}${markerStart}${markerEnd} opacity="${opacity}"/>`
}

function node(x, y, width, height, title, subtitle, color, fill, detail = '') {
  return `<g>
${panel(x, y, width, height, color, fill)}
${text(x + width / 2, y + 64, title, { size: 24, fill: color, weight: 840, anchor: 'middle', tracking: 1 })}
${text(x + width / 2, y + 108, subtitle, { size: 20, fill: C.ink, weight: 650, anchor: 'middle' })}
${detail ? text(x + width / 2, y + height - 34, detail, { size: 17, fill: C.muted, weight: 570, anchor: 'middle' }) : ''}
</g>`
}

function inferenceForwardPass() {
  const tensorCores = [0, 1, 2, 3].map(index => {
    const x = 1500 + index * 47
    return `<rect x="${x}" y="510" width="34" height="34" rx="6" fill="${C.amberSoft}" stroke="${C.amber}" stroke-width="2.5"/>`
  }).join('\n')

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="title desc" font-family="Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif">
<title id="title">One inference forward pass through a GB300-class node</title>
<desc id="desc">Two paths meet in GPU high-bandwidth memory. At service startup, a model checkpoint can move from remote storage through local NVMe and Grace memory into HBM. For each request, prompt data arrives through the network, is prepared by the Grace CPU, and is executed using HBM, shared L2 cache, and streaming multiprocessors nested inside GPCs and TPCs.</desc>
${defs()}
<rect width="${W}" height="${H}" fill="${C.bg}"/>
<rect width="${W}" height="${H}" fill="url(#inference-grid)"/>

${text(84, 72, 'INFERENCE WALKTHROUGH', { size: 19, fill: C.muted, weight: 780, tracking: 3.2 })}
${text(84, 132, 'The model loads once; each forward pass reuses it from HBM', { size: 50, weight: 800 })}
${text(84, 176, 'A live request uses the hot path; SSD appears only during model loading.', { size: 23, fill: C.muted, weight: 540 })}
<path d="M84 206H1836" stroke="${C.hairline}" stroke-width="2"/>

${text(84, 250, 'HOT PATH · EVERY REQUEST', { size: 19, fill: C.blue, weight: 840, tracking: 2.2 })}
${panel(890, 258, 946, 486, C.green, C.greenSoft)}
${text(930, 302, 'ONE BLACKWELL ULTRA GPU', { size: 20, fill: C.green, weight: 840, tracking: 2.1 })}

${panel(1395, 316, 360, 324, C.green, C.paper, false, 22)}
${text(1422, 350, 'GPC', { size: 22, fill: C.green, weight: 840, tracking: 1.4 })}
${text(1480, 350, 'organizes TPCs', { size: 16, fill: C.muted, weight: 560 })}
${panel(1430, 374, 290, 224, C.violet, C.violetSoft, false, 18)}
${text(1452, 405, 'TPC', { size: 19, fill: C.violet, weight: 840, tracking: 1.2 })}
${text(1504, 405, 'organizes SMs', { size: 15, fill: C.muted, weight: 560 })}

${arrowPath('M260 450H300')}
${arrowPath('M510 450H550')}
${arrowPath('M820 450H938')}
${arrowPath('M1140 465H1182')}
${arrowPath('M1352 465H1468')}
${arrowPath('M1688 470H1790')}
${arrowPath('M1790 500V684H684V582', { width: 3.5, opacity: 0.58 })}

${arrowPath('M370 900H440', { color: C.amber, dash: '10 9' })}
${arrowPath('M690 900H760', { color: C.amber, dash: '10 9' })}
${arrowPath('M1040 900C1125 900 1038 696 1038 588', { color: C.amber, dash: '10 9' })}

${node(80, 340, 180, 220, 'REQUEST', 'text prompt', C.blue, C.blueSoft, 'client → rack')}
${node(300, 340, 210, 220, 'NIC / DPU', 'network ingress', C.blue, C.blueSoft, 'BlueField / ConnectX')}
${node(550, 320, 270, 260, 'GRACE CPU', 'tokenize · queue · batch', C.blue, C.blueSoft, 'LPDDR5X host memory')}
${text(878, 408, 'NVLINK', { size: 15, fill: C.blue, weight: 820, anchor: 'middle', tracking: 1.2 })}
${text(878, 429, 'C2C', { size: 15, fill: C.blue, weight: 820, anchor: 'middle', tracking: 1.2 })}

${panel(938, 350, 202, 238, C.violet, C.violetSoft, false, 20)}
${text(1039, 399, 'HBM3E', { size: 29, fill: C.violet, weight: 860, anchor: 'middle' })}
${text(1039, 446, 'model weights', { size: 19, weight: 650, anchor: 'middle' })}
${text(1039, 480, 'KV cache', { size: 19, weight: 650, anchor: 'middle' })}
${text(1039, 514, 'activations', { size: 19, weight: 650, anchor: 'middle' })}
${text(1039, 556, 'resident GPU memory', { size: 15, fill: C.muted, weight: 560, anchor: 'middle' })}

${panel(1182, 385, 170, 160, C.rose, C.roseSoft, false, 18)}
${text(1267, 445, 'SHARED L2', { size: 22, fill: C.rose, weight: 840, anchor: 'middle' })}
${text(1267, 485, 'all SMs', { size: 17, fill: C.muted, weight: 600, anchor: 'middle' })}

${panel(1468, 420, 220, 172, C.amber, C.paper, false, 16)}
${text(1578, 451, 'SM', { size: 23, fill: C.amber, weight: 860, anchor: 'middle', tracking: 1.1 })}
${text(1578, 471, 'streaming multiprocessor', { size: 13, fill: C.muted, weight: 650, anchor: 'middle' })}
<rect x="1492" y="480" width="172" height="28" rx="8" fill="${C.amberSoft}"/>
${text(1578, 500, 'L1 · shared · TMEM', { size: 14, fill: C.ink, weight: 700, anchor: 'middle' })}
${tensorCores}
${text(1578, 568, '4 TENSOR CORES', { size: 14, fill: C.amber, weight: 840, anchor: 'middle', tracking: 0.8 })}

${text(1774, 405, 'LOGITS', { size: 17, fill: C.blue, weight: 840, anchor: 'middle', tracking: 1.2 })}
${text(1774, 430, 'next token', { size: 17, fill: C.muted, weight: 650, anchor: 'middle' })}
${text(1260, 716, 'sampled token returns to CPU → network → client', { size: 18, fill: C.blue, weight: 700, anchor: 'middle' })}
${text(1575, 650, 'GPCs and TPCs organize SMs; they are not cache stages.', { size: 17, fill: C.muted, weight: 620, anchor: 'middle' })}

${text(84, 800, 'MODEL LOAD · OCCASIONAL', { size: 19, fill: C.amber, weight: 840, tracking: 2.2 })}
${node(90, 832, 280, 136, 'MODEL REGISTRY', 'remote checkpoint', C.amber, C.amberSoft)}
${node(440, 832, 250, 136, 'LOCAL NVMe SSD', 'optional cache', C.amber, C.amberSoft)}
${node(760, 832, 280, 136, 'GRACE MEMORY', 'ordinary staging path', C.amber, C.amberSoft)}
${text(1190, 874, 'SSD is not traversed per request.', { size: 31, fill: C.amber, weight: 820 })}
${text(1190, 918, 'Weights stay resident in HBM while the service runs.', { size: 20, fill: C.muted, weight: 620 })}

<path d="M84 1000H1836" stroke="${C.hairline}" stroke-width="2"/>
${text(960, 1040, 'ONE FORWARD PASS → LOGITS · PREFILL ONCE · ONE DECODE PASS PER GENERATED TOKEN', { size: 20, fill: C.ink, weight: 820, anchor: 'middle', tracking: 1.1 })}
</svg>\n`
}

export function generateInferenceScenes(outDir) {
  mkdirSync(outDir, { recursive: true })
  writeFileSync(join(outDir, 'inference-forward-pass.svg'), inferenceForwardPass())
}
