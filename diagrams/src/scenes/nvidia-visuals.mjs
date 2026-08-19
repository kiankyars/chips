import { mkdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const W = 1920
const H = 660

const C = {
  bg: '#080c14',
  surface: '#111827',
  surface2: '#172033',
  ink: '#f8fafc',
  muted: '#a8b3c7',
  line: '#526078',
  blue: '#60a5fa',
  blueFill: '#102a4f',
  green: '#34d399',
  greenFill: '#10382f',
  amber: '#fbbf24',
  amberFill: '#3b2b10',
  violet: '#a78bfa',
  violetFill: '#2d2050',
}

const esc = value => String(value)
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')

function defs() {
  return `<defs>
  <pattern id="nvidia-grid" width="80" height="80" patternUnits="userSpaceOnUse">
    <path d="M80 0H0V80" fill="none" stroke="#1f2937" stroke-width="1" opacity="0.42"/>
  </pattern>
  <marker id="nvidia-arrow" markerWidth="13" markerHeight="13" refX="11" refY="6.5" orient="auto">
    <path d="M0 0L13 6.5L0 13Z" fill="${C.line}"/>
  </marker>
</defs>`
}

function svgDoc(title, description, body) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="title desc" font-family="Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif">
<title id="title">${esc(title)}</title>
<desc id="desc">${esc(description)}</desc>
${defs()}
<rect width="${W}" height="${H}" fill="${C.bg}"/>
<rect width="${W}" height="${H}" fill="url(#nvidia-grid)"/>
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

function arrow(x1, y1, x2, y2, { color = C.line, width = 4, dash = '' } = {}) {
  return `<path d="M${x1} ${y1}L${x2} ${y2}" fill="none" stroke="${color}" stroke-width="${width}" stroke-linecap="round"${dash ? ` stroke-dasharray="${dash}"` : ''} marker-end="url(#nvidia-arrow)"/>`
}

function matrixIcon(x, y, size, color, { cells = 4, fillOpacity = 0.18 } = {}) {
  const gap = Math.max(2, size * 0.045)
  const cell = (size - gap * (cells - 1)) / cells
  const parts = []
  for (let row = 0; row < cells; row++) {
    for (let col = 0; col < cells; col++) {
      parts.push(`<rect x="${x + col * (cell + gap)}" y="${y + row * (cell + gap)}" width="${cell}" height="${cell}" rx="${Math.max(2, cell * 0.12)}" fill="${color}" opacity="${fillOpacity}" stroke="${color}" stroke-width="1.5"/>`)
    }
  }
  return parts.join('\n')
}

function laneGrid(x, y, columns, rows, size, gap) {
  const parts = []
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns; col++) {
      const opacity = 0.34 + ((row + col) % 4) * 0.11
      parts.push(`<rect x="${x + col * (size + gap)}" y="${y + row * (size + gap)}" width="${size}" height="${size}" rx="3" fill="${C.green}" opacity="${opacity}"/>`)
    }
  }
  return parts.join('\n')
}

function coreHierarchyScene() {
  const dies = []
  for (let die = 0; die < 2; die++) {
    const x = die === 0 ? 112 : 493
    dies.push(`<rect x="${x}" y="132" width="315" height="332" rx="20" fill="${C.surface2}" stroke="${C.line}" stroke-width="3"/>`)
    dies.push(text(x + 24, 176, `DIE ${die === 0 ? 'A' : 'B'}`, { size: 20, fill: C.muted, weight: 820, tracking: 1.8 }))
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 4; col++) {
        const sx = x + 25 + col * 68
        const sy = 206 + row * 68
        const selected = die === 1 && row === 1 && col === 3
        dies.push(`<rect x="${sx}" y="${sy}" width="52" height="46" rx="8" fill="${selected ? C.blueFill : C.surface}" stroke="${selected ? C.blue : C.line}" stroke-width="${selected ? 4 : 2}"/>`)
        dies.push(text(sx + 26, sy + 31, 'SM', { size: 16, fill: selected ? C.blue : C.muted, weight: 820, anchor: 'middle' }))
      }
    }
    dies.push(text(x + 158, 438, 'physical compute blocks', { size: 18, fill: C.muted, weight: 620, anchor: 'middle' }))
  }

  const tensorCores = []
  for (let i = 0; i < 4; i++) {
    const x = 1532 + (i % 2) * 108
    const y = 188 + Math.floor(i / 2) * 102
    tensorCores.push(`<rect x="${x}" y="${y}" width="82" height="76" rx="12" fill="${C.amberFill}" stroke="${C.amber}" stroke-width="3"/>`)
    tensorCores.push(matrixIcon(x + 18, y + 15, 46, C.amber, { cells: 3, fillOpacity: 0.34 }))
  }

  return svgDoc(
    'Blackwell Ultra compute hierarchy',
    'Two physical dies act as one CUDA-programmed GPU. A zoom into one streaming multiprocessor shows its CUDA arithmetic lanes and Tensor Cores, with GPU-wide totals below.',
    `${text(80, 58, 'TWO PHYSICAL DIES · ONE CUDA-PROGRAMMED GPU', { size: 22, fill: C.blue, weight: 820, tracking: 1.8 })}
<rect x="80" y="88" width="760" height="474" rx="28" fill="${C.surface}" stroke="${C.blue}" stroke-width="4"/>
${dies.join('\n')}
<path d="M438 260H482M438 336H482" stroke="${C.blue}" stroke-width="8" stroke-linecap="round"/>
${text(460, 306, 'NV-HBI', { size: 17, fill: C.blue, weight: 820, anchor: 'middle', tracking: 1.2 })}
${text(460, 510, 'Maximum configuration; enabled SM count varies by SKU.', { size: 20, fill: C.ink, weight: 680, anchor: 'middle' })}
${text(460, 542, 'SMs are physical; virtualization is separate.', { size: 18, fill: C.muted, weight: 620, anchor: 'middle' })}

${arrow(840, 320, 930, 320, { color: C.blue, width: 5 })}
${text(885, 286, 'ZOOM', { size: 17, fill: C.blue, weight: 820, anchor: 'middle', tracking: 1.8 })}

<rect x="960" y="72" width="880" height="500" rx="28" fill="${C.surface}" stroke="${C.blue}" stroke-width="4"/>
${text(1002, 120, 'ONE STREAMING MULTIPROCESSOR', { size: 22, fill: C.blue, weight: 820, tracking: 1.7 })}
${text(1002, 176, '128 CUDA arithmetic lanes', { size: 29, weight: 760 })}
${laneGrid(1006, 210, 8, 4, 24, 10)}

<path d="M1450 158V392" stroke="${C.line}" stroke-width="2" opacity="0.65"/>
${text(1636, 176, '4 Tensor Cores', { size: 29, weight: 760, anchor: 'middle' })}
${tensorCores.join('\n')}

<path d="M1002 414H1798" stroke="${C.line}" stroke-width="2" opacity="0.65"/>
${text(1002, 454, 'GPU TOTALS', { size: 18, fill: C.muted, weight: 820, tracking: 1.8 })}
${text(1002, 506, '20,480 CUDA arithmetic lanes', { size: 27, fill: C.green, weight: 800 })}
${text(1454, 506, '640 Tensor Cores', { size: 27, fill: C.amber, weight: 800 })}`,
  )
}

function tiledMatrix(x, y, tileSize, tileCells, tileRows, tileCols) {
  const parts = []
  const colors = [C.blue, C.green, C.amber, C.violet]
  const gap = 8
  for (let tileRow = 0; tileRow < tileRows; tileRow++) {
    for (let tileCol = 0; tileCol < tileCols; tileCol++) {
      const color = colors[(tileRow + tileCol) % colors.length]
      const tx = x + tileCol * (tileSize + gap)
      const ty = y + tileRow * (tileSize + gap)
      parts.push(`<rect x="${tx}" y="${ty}" width="${tileSize}" height="${tileSize}" rx="8" fill="${color}" opacity="0.08" stroke="${color}" stroke-width="2.5"/>`)
      parts.push(matrixIcon(tx + 10, ty + 10, tileSize - 20, color, { cells: tileCells, fillOpacity: 0.24 }))
    }
  }
  return parts.join('\n')
}

function matrixParallelismScene() {
  const activationRow = Array.from({ length: 5 }, (_, index) => {
    const x = 82 + index * 52
    return `<rect x="${x}" y="184" width="42" height="42" rx="7" fill="${C.blue}" opacity="${0.22 + index * 0.08}" stroke="${C.blue}" stroke-width="2"/>`
  }).join('\n')
  const weightColumn = Array.from({ length: 5 }, (_, index) => {
    const y = 100 + index * 52
    return `<rect x="412" y="${y}" width="42" height="42" rx="7" fill="${C.violet}" opacity="${0.22 + index * 0.08}" stroke="${C.violet}" stroke-width="2"/>`
  }).join('\n')
  const tileJobs = []
  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 5; col++) {
      const x = 834 + col * 68
      const y = 132 + row * 68
      const highlighted = row === 2 && col === 3
      tileJobs.push(`<rect x="${x}" y="${y}" width="54" height="54" rx="9" fill="${highlighted ? C.amberFill : C.greenFill}" stroke="${highlighted ? C.amber : C.green}" stroke-width="${highlighted ? 4 : 2}" opacity="${highlighted ? 1 : 0.76}"/>`)
      tileJobs.push(`<path d="M${x + 12} ${y + 17}H${x + 42}M${x + 12} ${y + 27}H${x + 42}M${x + 12} ${y + 37}H${x + 42}" stroke="${highlighted ? C.amber : C.green}" stroke-width="3" stroke-linecap="round" opacity="0.72"/>`)
    }
  }
  const smPool = []
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 4; col++) {
      const x = 1378 + col * 102
      const y = 254 + row * 86
      smPool.push(`<rect x="${x}" y="${y}" width="82" height="64" rx="12" fill="${C.surface2}" stroke="${C.blue}" stroke-width="3"/>`)
      smPool.push(text(x + 41, y + 41, 'SM', { size: 20, fill: C.blue, weight: 820, anchor: 'middle' }))
    }
  }

  return svgDoc(
    'One AI layer creates many independent tile jobs',
    'One activation block-row and one weight block-column are multiplied and accumulated into one output tile. A full layer repeats that job across an output grid, and a scheduler assigns ready jobs across the streaming-multiprocessor pool.',
    `${text(80, 62, 'ONE TILE JOB', { size: 20, fill: C.muted, weight: 820, tracking: 1.8 })}
${text(82, 150, 'ACTIVATION BLOCK-ROW', { size: 18, fill: C.blue, weight: 780, tracking: 1.1 })}
${activationRow}
${text(362, 213, '×', { size: 44, fill: C.muted, weight: 600, anchor: 'middle' })}
${weightColumn}
${text(433, 86, 'WEIGHT', { size: 18, fill: C.violet, weight: 780, anchor: 'middle', tracking: 1.1 })}
${arrow(486, 206, 566, 206, { width: 5 })}
<rect x="590" y="148" width="116" height="116" rx="16" fill="${C.amberFill}" stroke="${C.amber}" stroke-width="4"/>
${matrixIcon(614, 172, 68, C.amber, { cells: 3, fillOpacity: 0.34 })}
${text(648, 300, 'ONE OUTPUT TILE', { size: 18, fill: C.amber, weight: 820, anchor: 'middle', tracking: 1.1 })}
${text(392, 426, 'multiply + accumulate', { size: 23, fill: C.ink, weight: 700, anchor: 'middle' })}

<path d="M766 90V522" stroke="${C.line}" stroke-width="2" opacity="0.55"/>
${text(834, 62, 'SAME JOB, MANY POSITIONS', { size: 20, fill: C.green, weight: 820, tracking: 1.5 })}
${tileJobs.join('\n')}
${text(997, 510, 'ready tiles can run concurrently', { size: 21, fill: C.ink, weight: 700, anchor: 'middle' })}

${arrow(1204, 300, 1302, 300, { width: 5 })}
<path d="M1294 90V522" stroke="${C.line}" stroke-width="2" opacity="0.55"/>
${text(1378, 62, 'GPU SM POOL', { size: 20, fill: C.blue, weight: 820, tracking: 1.8 })}
<rect x="1378" y="112" width="388" height="70" rx="18" fill="${C.blueFill}" stroke="${C.blue}" stroke-width="3"/>
${text(1572, 156, 'SCHEDULER ASSIGNS READY WORK', { size: 20, fill: C.blue, weight: 800, anchor: 'middle', tracking: 1.1 })}
${arrow(1572, 190, 1572, 230, { color: C.blue, width: 4 })}
${smPool.join('\n')}
${text(1572, 510, 'many physical blocks stay busy', { size: 21, fill: C.ink, weight: 700, anchor: 'middle' })}
`,
  )
}

export function generateNvidiaVisuals(outDir) {
  mkdirSync(outDir, { recursive: true })
  writeFileSync(join(outDir, 'nvidia-core-hierarchy.svg'), coreHierarchyScene())
  writeFileSync(join(outDir, 'nvidia-matrix-parallelism.svg'), matrixParallelismScene())
}
