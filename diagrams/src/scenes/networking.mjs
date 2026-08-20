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
  <pattern id="network-grid" width="48" height="48" patternUnits="userSpaceOnUse">
    <path d="M48 0H0V48" fill="none" stroke="${C.grid}" stroke-width="1" opacity="0.24"/>
  </pattern>
  <filter id="network-shadow" x="-30%" y="-30%" width="160%" height="180%">
    <feDropShadow dx="0" dy="10" stdDeviation="13" flood-color="#493f30" flood-opacity="0.12"/>
  </filter>
  <marker id="network-arrow" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto">
    <path d="M0 0L12 6L0 12Z" fill="${C.graphite}"/>
  </marker>
  <marker id="network-arrow-rose" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto">
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
<rect width="${W}" height="${H}" fill="url(#network-grid)"/>
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
  width = 4,
  dash = '',
  opacity = 1,
  marker = false,
} = {}) {
  const markerId = typeof marker === 'string' ? marker : 'network-arrow'
  return `<path d="M${x1} ${y1}L${x2} ${y2}" fill="none" stroke="${color}" stroke-width="${width}" stroke-linecap="round"${dash ? ` stroke-dasharray="${dash}"` : ''}${marker ? ` marker-end="url(#${markerId})"` : ''} opacity="${opacity}"/>`
}

function panel(x, y, width, height, stroke = C.hairline, fill = C.paper) {
  return `<rect x="${x}" y="${y}" width="${width}" height="${height}" rx="28" fill="${fill}" stroke="${stroke}" stroke-width="2.5" filter="url(#network-shadow)"/>`
}

function header(kicker, title) {
  return `${text(104, 92, kicker.toUpperCase(), { size: 20, fill: C.muted, weight: 760, tracking: 3.6 })}
${text(104, 156, title, { size: 48, weight: 760 })}
<path d="M104 190H1816" stroke="${C.hairline}" stroke-width="2"/>`
}

function gpu(x, y, label, color = C.green, size = 86) {
  const pins = []
  for (let i = 0; i < 3; i++) {
    const offset = 20 + i * 23
    pins.push(`<path d="M${x - 10} ${y + offset}H${x}M${x + size} ${y + offset}H${x + size + 10}" stroke="${color}" stroke-width="3"/>`)
  }
  return `<g>
${pins.join('\n')}
<rect x="${x}" y="${y}" width="${size}" height="${size}" rx="13" fill="${color}" opacity="0.14" stroke="${color}" stroke-width="4"/>
${text(x + size / 2, y + size / 2 + 8, label, { size: 19, fill: color, weight: 820, anchor: 'middle' })}
</g>`
}

function switchBox(x, y, width, label, color = C.violet) {
  return `<g>
<rect x="${x}" y="${y}" width="${width}" height="64" rx="14" fill="${C.paper}"/>
<rect x="${x}" y="${y}" width="${width}" height="64" rx="14" fill="${color}" opacity="0.13" stroke="${color}" stroke-width="3"/>
${text(x + width / 2, y + 40, label, { size: 20, fill: color, weight: 800, anchor: 'middle', tracking: 0.8 })}
</g>`
}

function rack(x, y, label, color = C.blue) {
  const slots = Array.from({ length: 5 }, (_, index) => `<rect x="${x + 18}" y="${y + 50 + index * 42}" width="124" height="28" rx="6" fill="${color}" opacity="${0.12 + index * 0.025}" stroke="${color}" stroke-width="2"/>`).join('\n')
  return `<g>
<rect x="${x}" y="${y}" width="160" height="286" rx="20" fill="${C.paper}" stroke="${color}" stroke-width="3" filter="url(#network-shadow)"/>
${text(x + 80, y + 32, label, { size: 18, fill: color, weight: 800, anchor: 'middle', tracking: 1 })}
${slots}
</g>`
}

function scaleScene() {
  const localGpuPositions = [
    [188, 392],
    [650, 392],
    [188, 650],
    [650, 650],
  ]
  const localLinks = localGpuPositions
    .map(([x, y]) => line(x + 48, y + 48, 493, 579, { color: C.violet, width: 4, opacity: 0.66 }))
    .join('\n')
  const localGpus = localGpuPositions
    .map(([x, y], index) => gpu(x, y, `GPU ${index + 1}`, C.green, 96))
    .join('\n')

  return svgDoc(
    'Scale-up connects GPUs; scale-out connects racks',
    'NVLink and NVSwitch connect GPUs inside one GB300 NVL72 rack. Ethernet or InfiniBand connect complete racks through SuperNIC, leaf, and spine switches.',
    `${header('Communication scopes', 'Scale-up connects GPUs; scale-out connects racks')}

${panel(104, 230, 778, 702, C.violet, C.violetSoft)}
${text(150, 292, 'SCALE UP', { size: 25, fill: C.violet, weight: 840, tracking: 2.2 })}
${text(150, 332, 'inside one rack', { size: 19, fill: C.muted, weight: 620 })}
${localLinks}
${localGpus}
${switchBox(363, 547, 260, 'NVSWITCH FABRIC', C.violet)}
${text(493, 786, '4 SHOWN OF 72 GPUS', { size: 17, fill: C.muted, weight: 760, anchor: 'middle', tracking: 1.5 })}
${text(493, 834, 'NVLINK · ONE GB300 NVL72 RACK', { size: 21, fill: C.violet, weight: 800, anchor: 'middle', tracking: 0.8 })}
${text(493, 874, '1.8 TB/s per GPU · 130 TB/s aggregate', { size: 18, fill: C.muted, weight: 620, anchor: 'middle' })}

${panel(958, 230, 858, 702, C.blue, C.blueSoft)}
${text(1004, 292, 'SCALE OUT', { size: 25, fill: C.blue, weight: 840, tracking: 2.2 })}
${text(1004, 332, 'between complete racks', { size: 19, fill: C.muted, weight: 620 })}
${switchBox(1285, 330, 204, 'SPINE', C.amber)}
${switchBox(1070, 454, 190, 'LEAF', C.blue)}
${switchBox(1514, 454, 190, 'LEAF', C.blue)}
${line(1387, 394, 1165, 454, { color: C.amber, width: 4 })}
${line(1387, 394, 1609, 454, { color: C.amber, width: 4 })}
${line(1165, 518, 1165, 574, { color: C.blue, width: 4 })}
${line(1609, 518, 1609, 574, { color: C.blue, width: 4 })}
${rack(1085, 574, 'RACK A')}
${rack(1529, 574, 'RACK B')}
${text(1165, 838, 'SUPERNIC', { size: 16, fill: C.blue, weight: 820, anchor: 'middle', tracking: 1.1 })}
${text(1609, 838, 'SUPERNIC', { size: 16, fill: C.blue, weight: 820, anchor: 'middle', tracking: 1.1 })}
${text(1387, 720, 'ETHERNET / INFINIBAND', { size: 20, fill: C.blue, weight: 800, anchor: 'middle', tracking: 0.8 })}
${text(1387, 756, 'PACKET FABRIC', { size: 16, fill: C.muted, weight: 760, anchor: 'middle', tracking: 1.4 })}`,
  )
}

function valueGpu(x, y, label, value, color, size = 96) {
  return `<g>
${gpu(x, y, label, color, size)}
${text(x + size / 2, y + size + 42, value, { size: 21, fill: color, weight: 820, anchor: 'middle' })}
</g>`
}

function allReduceScene() {
  const colors = [C.green, C.blue, C.rose, C.amber]
  const stageXs = [104, 705, 1306]
  const gpuOffsets = [
    [92, 190],
    [316, 190],
    [92, 430],
    [316, 430],
  ]
  const stageValues = [
    ['g1', 'g2', 'g3', 'g4'],
    ['Σ shard 1', 'Σ shard 2', 'Σ shard 3', 'Σ shard 4'],
    ['Σg', 'Σg', 'Σg', 'Σg'],
  ]
  const stageGpus = stageXs.map((stageX, stageIndex) => gpuOffsets
    .map(([dx, dy], index) => valueGpu(stageX + dx, 230 + dy, `GPU ${index + 1}`, stageValues[stageIndex][index], colors[index]))
    .join('\n'))

  return svgDoc(
    'All-reduce sums every GPU gradient and returns the result to all GPUs',
    'Four GPUs begin with local gradient arrays. Reduce-scatter leaves one summed shard on each GPU, then all-gather leaves the same complete summed array on every GPU.',
    `${header('Collective communication', 'All-reduce sums gradients—then returns the result to all')}
${panel(104, 230, 510, 670, C.green, C.greenSoft)}
${panel(705, 230, 510, 670, C.violet, C.violetSoft)}
${panel(1306, 230, 510, 670, C.blue, C.blueSoft)}

${text(359, 298, '1 · LOCAL GRADIENTS', { size: 22, fill: C.green, weight: 840, anchor: 'middle', tracking: 1.3 })}
${text(359, 338, 'one full array per GPU', { size: 18, fill: C.muted, weight: 620, anchor: 'middle' })}
${stageGpus[0]}

${text(960, 298, '2 · REDUCE-SCATTER', { size: 22, fill: C.violet, weight: 840, anchor: 'middle', tracking: 1.3 })}
${text(960, 338, 'one summed shard per GPU', { size: 18, fill: C.muted, weight: 620, anchor: 'middle' })}
${stageGpus[1]}

${text(1561, 298, '3 · ALL-GATHER', { size: 22, fill: C.blue, weight: 840, anchor: 'middle', tracking: 1.3 })}
${text(1561, 338, 'same full sum on every GPU', { size: 18, fill: C.muted, weight: 620, anchor: 'middle' })}
${stageGpus[2]}

${line(630, 565, 680, 565, { color: C.graphite, width: 5, marker: true })}
${line(1231, 565, 1281, 565, { color: C.graphite, width: 5, marker: true })}

${text(960, 982, 'THE NEXT COMPUTE STEP WAITS UNTIL EVERY GPU HOLDS THE SAME SUM', { size: 21, fill: C.ink, weight: 820, anchor: 'middle', tracking: 1.4 })}`,
  )
}

function pathNode(x, y, width, title, sub, color, height = 160) {
  return `<g>
<rect x="${x}" y="${y}" width="${width}" height="${height}" rx="22" fill="${color}" opacity="0.11" stroke="${color}" stroke-width="4" filter="url(#network-shadow)"/>
${text(x + width / 2, y + 62, title, { size: 21, fill: color, weight: 820, anchor: 'middle' })}
${text(x + width / 2, y + 104, sub, { size: 16, fill: C.muted, weight: 620, anchor: 'middle' })}
</g>`
}

function packetPathScene() {
  const nodes = [
    [110, 500, 230, 'GPU MEMORY', 'source tensors', C.green],
    [385, 500, 180, 'SUPERNIC', 'RDMA endpoint', C.blue],
    [610, 500, 170, 'LEAF', 'source rack', C.violet],
    [825, 500, 170, 'SPINE', 'fabric core', C.amber],
    [1040, 500, 170, 'LEAF', 'destination rack', C.violet],
    [1255, 500, 180, 'SUPERNIC', 'RDMA endpoint', C.blue],
    [1480, 500, 230, 'GPU MEMORY', 'destination tensors', C.green],
  ]
  const nodeSvg = nodes.map(args => pathNode(...args)).join('\n')
  const links = nodes.slice(0, -1).map((node, index) => {
    const optical = index === 2 || index === 3
    return line(node[0] + node[2] + 8, 580, nodes[index + 1][0] - 12, 580, {
      color: optical ? C.rose : C.graphite,
      width: 5,
      marker: optical ? 'network-arrow-rose' : true,
    })
  }).join('\n')

  return svgDoc(
    'GPUDirect RDMA avoids CPU-memory payload copies',
    'The payload travels symmetrically from source GPU memory through a SuperNIC and leaf-spine fabric to a destination SuperNIC and GPU memory. Optical links carry the longer fabric reach, while host CPUs set up but do not copy the payload.',
    `${header('The physical data path', 'GPUDirect RDMA avoids a CPU-memory payload bounce')}

<rect x="150" y="248" width="430" height="126" rx="22" fill="${C.hairline}" opacity="0.2" stroke="${C.graphite}" stroke-width="3" stroke-dasharray="9 7"/>
${text(365, 296, 'SOURCE HOST CPU + MEMORY', { size: 21, fill: C.graphite, weight: 800, anchor: 'middle', tracking: 1 })}
${text(365, 336, 'control only · no payload copy', { size: 17, fill: C.muted, weight: 620, anchor: 'middle' })}
<rect x="1240" y="248" width="430" height="126" rx="22" fill="${C.hairline}" opacity="0.2" stroke="${C.graphite}" stroke-width="3" stroke-dasharray="9 7"/>
${text(1455, 296, 'DESTINATION HOST CPU + MEMORY', { size: 21, fill: C.graphite, weight: 800, anchor: 'middle', tracking: 1 })}
${text(1455, 336, 'control only · no payload copy', { size: 17, fill: C.muted, weight: 620, anchor: 'middle' })}

<path d="M225 480C250 420 280 390 312 374M520 374C500 420 490 450 475 480" fill="none" stroke="${C.graphite}" stroke-width="3.5" stroke-dasharray="10 8" opacity="0.5"/>
<path d="M1595 480C1570 420 1540 390 1508 374M1300 374C1320 420 1330 450 1345 480" fill="none" stroke="${C.graphite}" stroke-width="3.5" stroke-dasharray="10 8" opacity="0.5"/>
<path d="M338 402L374 438M374 402L338 438M1446 402L1482 438M1482 402L1446 438" fill="none" stroke="${C.rose}" stroke-width="7" stroke-linecap="round"/>

<rect x="748" y="414" width="324" height="44" rx="22" fill="${C.roseSoft}" stroke="${C.rose}" stroke-width="2.5"/>
${text(910, 443, 'OPTICAL FABRIC LINKS', { size: 17, fill: C.rose, weight: 840, anchor: 'middle', tracking: 1.1 })}

${links}
${nodeSvg}

${text(338, 730, 'SOURCE ENDPOINT', { size: 18, fill: C.green, weight: 800, anchor: 'middle', tracking: 1.7 })}
${text(910, 730, 'PACKET FABRIC', { size: 18, fill: C.violet, weight: 800, anchor: 'middle', tracking: 1.7 })}
${text(1482, 730, 'DESTINATION ENDPOINT', { size: 18, fill: C.green, weight: 800, anchor: 'middle', tracking: 1.7 })}

${text(960, 948, 'HOST CPUS SET UP THE TRANSFER · THE PAYLOAD STAYS ON THE GPU-TO-NETWORK PATH', { size: 20, fill: C.ink, weight: 820, anchor: 'middle', tracking: 1.4 })}`,
  )
}

function throughputScene() {
  const gate = (x, title, sub, color) => `<g>
<path d="M${x} 376V648" stroke="${color}" stroke-width="4" stroke-dasharray="10 9" opacity="0.75"/>
<circle cx="${x}" cy="668" r="7" fill="${color}"/>
${text(x, 713, title, { size: 20, fill: color, weight: 820, anchor: 'middle', tracking: 1.1 })}
${text(x, 745, sub, { size: 16, fill: C.muted, weight: 620, anchor: 'middle' })}
</g>`

  return svgDoc(
    'Line rate is a ceiling, not training throughput',
    'An 800 gigabit per second adapter converts to a 100 gigabyte per second raw ceiling. Protocol overhead, shared-path contention, and topology plus software narrow the useful collective rate. A separate synchronization timeline shows the slowest participant delaying the next compute step.',
    `${header('Bandwidth budget', 'Line rate is a ceiling—not training throughput')}

${text(132, 280, 'UNIT CONVERSION', { size: 18, fill: C.muted, weight: 780, tracking: 2.2 })}
<g filter="url(#network-shadow)">
  <path d="M132 354H424L488 512L424 670H132Z" fill="${C.green}" opacity="0.9"/>
  ${text(280, 476, '800 Gb/s', { size: 52, fill: C.paper, weight: 840, anchor: 'middle' })}
  ${text(280, 522, 'ADAPTER LINE RATE', { size: 18, fill: C.paper, weight: 760, anchor: 'middle', tracking: 1.7 })}
</g>
<circle cx="518" cy="512" r="58" fill="${C.paper}" stroke="${C.hairline}" stroke-width="3"/>
${text(518, 506, '÷ 8', { size: 31, fill: C.ink, weight: 820, anchor: 'middle' })}
${text(518, 538, 'bits / byte', { size: 15, fill: C.muted, weight: 620, anchor: 'middle' })}

<defs>
  <linearGradient id="throughput-band" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="${C.blue}" stop-opacity="0.92"/>
    <stop offset="100%" stop-color="${C.violet}" stop-opacity="0.88"/>
  </linearGradient>
</defs>
<path d="M604 378H792L1690 464V560L792 646H604Z" fill="url(#throughput-band)" filter="url(#network-shadow)"/>
<path d="M604 378H792L1690 464" fill="none" stroke="${C.blue}" stroke-width="4" opacity="0.7"/>
<path d="M604 646H792L1690 560" fill="none" stroke="${C.violet}" stroke-width="4" opacity="0.7"/>
${text(704, 488, '100 GB/s', { size: 48, fill: C.paper, weight: 840, anchor: 'middle' })}
${text(704, 532, 'RAW BYTE CEILING', { size: 17, fill: C.paper, weight: 760, anchor: 'middle', tracking: 1.5 })}
${text(1540, 492, 'USEFUL COLLECTIVE', { size: 19, fill: C.paper, weight: 800, anchor: 'middle', tracking: 1.1 })}
${text(1540, 529, 'THROUGHPUT', { size: 28, fill: C.paper, weight: 840, anchor: 'middle', tracking: 1.5 })}

${gate(924, 'PROTOCOL', 'headers + encoding', C.rose)}
${gate(1190, 'CONTENTION', 'shared paths', C.amber)}
${gate(1450, 'TOPOLOGY + SOFTWARE', 'hops + collective mapping', C.violet)}
${text(960, 782, 'QUALITATIVE NARROWING · NO FIXED LOSS SHARE', { size: 16, fill: C.muted, weight: 700, anchor: 'middle', tracking: 1.7 })}

<path d="M132 842H1788" stroke="${C.hairline}" stroke-width="2"/>
${text(132, 892, 'SYNCHRONIZATION LATENCY', { size: 18, fill: C.blue, weight: 820, tracking: 2 })}
<path d="M444 885H1570" stroke="${C.graphite}" stroke-width="4" marker-end="url(#network-arrow)" opacity="0.62"/>
${[690, 820, 950].map((x, index) => `<circle cx="${x}" cy="885" r="12" fill="${C.green}"/><path d="M${x} 885V${930 + index * 8}" stroke="${C.green}" stroke-width="3" opacity="0.62"/>`).join('\n')}
<circle cx="1350" cy="885" r="14" fill="${C.rose}"/>
<path d="M950 945H1350" stroke="${C.rose}" stroke-width="5" stroke-linecap="round"/>
${text(820, 978, 'most participants ready', { size: 18, fill: C.green, weight: 720, anchor: 'middle' })}
${text(1350, 978, 'slowest participant', { size: 18, fill: C.rose, weight: 760, anchor: 'middle' })}
<path d="M1400 830V956" stroke="${C.rose}" stroke-width="3" stroke-dasharray="8 7"/>
<rect x="1518" y="846" width="270" height="78" rx="18" fill="${C.blueSoft}" stroke="${C.blue}" stroke-width="3"/>
${text(1653, 878, 'NEXT COMPUTE', { size: 18, fill: C.blue, weight: 820, anchor: 'middle', tracking: 1.1 })}
${text(1653, 905, 'STEP RESUMES', { size: 18, fill: C.blue, weight: 820, anchor: 'middle', tracking: 1.1 })}`,
  )
}

export function generateNetworkingScenes(outDir) {
  mkdirSync(outDir, { recursive: true })
  const scenes = {
    'networking-scale.svg': scaleScene(),
    'networking-allreduce.svg': allReduceScene(),
    'networking-path.svg': packetPathScene(),
    'networking-throughput.svg': throughputScene(),
  }
  for (const [name, svg] of Object.entries(scenes)) {
    writeFileSync(join(outDir, name), svg)
  }
}
