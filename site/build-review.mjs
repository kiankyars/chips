#!/usr/bin/env node
// Builds a single self-contained review console (site/review.html) from the
// course segments: every slide rendered with its diagrams inlined and its beat
// sheet shown alongside. No external assets, no build step downstream — the file
// is published directly as an Artifact. Re-run after editing segments.
//
//   node site/build-review.mjs
//
// Identity: "fab datasheet / instrument panel" — system sans for reading, system
// mono for the technical voice (labels, stats, beats), act-region colors borrowed
// from the master map, chokepoint red as the single charged accent.

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const SEG = join(ROOT, 'slides', 'segments')
const REN = join(ROOT, 'diagrams', 'rendered')

// ---- segment order + act structure (mirrors slides.md / curriculum.md) ----
const ORDER = ['cold-open','foundations','great-unbundling','nvidia','eda','arm-riscv','fabless-field','tsmc','intel','foundries-field','life-of-a-wafer','asml','equipment-dep-etch','kla','materials','other-90','memory-hbm','packaging','geopolitics','synthesis']
const ACTS = [
  { key: '0',  name: 'Act 0 · The Object',        color: '#64748b', segs: ['cold-open'] },
  { key: 'I',  name: 'Act I · The Impossible Object', color: '#64748b', segs: ['foundations','great-unbundling'] },
  { key: 'II', name: 'Act II · The Blueprint',     color: '#3b82f6', segs: ['nvidia','eda','arm-riscv','fabless-field'] },
  { key: 'III',name: 'Act III · The Island',       color: '#22c55e', segs: ['tsmc','intel','foundries-field'] },
  { key: 'IV', name: 'Act IV · The Fab Tour',      color: '#f59e0b', segs: ['life-of-a-wafer','asml','equipment-dep-etch','kla','materials'] },
  { key: '—',  name: 'Interlude · The Other 90%',  color: '#64748b', segs: ['other-90'] },
  { key: 'V',  name: 'Act V · Memory & Assembly',  color: '#8b5cf6', segs: ['memory-hbm','packaging'] },
  { key: 'VI', name: 'Act VI · The Board Is the World', color: '#dc2626', segs: ['geopolitics','synthesis'] },
]
const actColorForSeg = id => (ACTS.find(a => a.segs.includes(id)) || {}).color || '#64748b'

const esc = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')

// ---- inline SVG cache ----
const svgCache = {}
function inlineSvg(file) {
  if (svgCache[file] !== undefined) return svgCache[file]
  const p = join(REN, file)
  let out = ''
  if (existsSync(p)) {
    out = readFileSync(p, 'utf8').replace(/<\?xml[^>]*\?>\s*/i, '').trim()
  } else {
    out = `<div class="missing">missing diagram: ${esc(file)}</div>`
  }
  svgCache[file] = out
  return out
}

// ---- tiny inline-markdown for text lines (bold/italic) ----
function inlineMd(s) {
  return esc(s)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/(^|[^*])\*(?!\s)([^*]+?)\*(?!\*)/g, '$1<em>$2</em>')
    .replace(/`([^`]+?)`/g, '<code>$1</code>')
    // restore a whitelist of inline HTML tags authored in the source (trusted content)
    .replace(/&lt;(\/?)(i|b|em|strong|br|sup|sub|u|span|small)((?:\s[^&]*?)?)\s*(\/?)&gt;/g, '<$1$2$3$4>')
}

// ---- render a slide body (mixed markdown + raw HTML) to HTML ----
function renderBody(body) {
  const lines = body.split('\n')
  const out = []
  let inList = false
  const closeList = () => { if (inList) { out.push('</ul>'); inList = false } }
  for (let raw of lines) {
    const line = raw.replace(/\s+$/,'')
    const t = line.trim()
    if (t === '') { closeList(); continue }
    // image → inline svg / img
    const img = t.match(/^!\[([^\]]*)\]\(([^)]+)\)$/)
    if (img) {
      closeList()
      const src = img[2]
      const m = src.match(/([a-z0-9-]+\.svg)$/i)
      if (m) out.push(`<figure class="diagram">${inlineSvg(m[1])}</figure>`)
      else out.push(`<figure class="diagram"><div class="missing">image: ${esc(src)}</div></figure>`)
      continue
    }
    // headings inside body (title is stripped earlier)
    if (/^#{1,6}\s/.test(t)) {
      closeList()
      const lvl = t.match(/^#+/)[0].length
      out.push(`<h${Math.min(lvl+1,6)} class="body-h">${inlineMd(t.replace(/^#+\s/,''))}</h${Math.min(lvl+1,6)}>`)
      continue
    }
    // markdown bullet
    if (/^-\s+/.test(t) && !t.startsWith('<')) {
      if (!inList) { out.push('<ul class="md-list">'); inList = true }
      out.push(`<li>${inlineMd(t.replace(/^-\s+/,''))}</li>`)
      continue
    }
    closeList()
    // raw HTML line → pass through untouched; else paragraph
    if (t.startsWith('<') || t.endsWith('>')) out.push(raw)
    else out.push(`<p>${inlineMd(t)}</p>`)
  }
  closeList()
  return out.join('\n')
}

// ---- render a beat-sheet note block into a structured notes panel ----
function chipify(s) {
  // [VERIFY: ...] -> chip ; [research/x §y] -> source tag
  return esc(s)
    .replace(/\[VERIFY:\s*([^\]]+)\]/g, '<span class="chip verify" title="verify before recording">VERIFY<span class="chip-body"> $1</span></span>')
    .replace(/\[research\/([^\]]+)\]/g, '<span class="chip src">$1</span>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
}
function renderNotes(note) {
  if (!note) return ''
  const lines = note.split('\n')
  const sections = []
  let cur = null
  for (const raw of lines) {
    const t = raw.trim()
    if (t === '') continue
    const head = t.match(/^(BEATS|FACT AMMO|LINE THAT LANDS|LINES THAT LAND):?$/i)
    if (head) { cur = { label: head[1].toUpperCase(), items: [] }; sections.push(cur); continue }
    if (!cur) { cur = { label: 'NOTES', items: [] }; sections.push(cur) }
    cur.items.push(t.replace(/^-\s+/,''))
  }
  if (!sections.length) return ''
  const cls = { 'BEATS':'beats', 'FACT AMMO':'ammo', 'LINE THAT LANDS':'land', 'LINES THAT LAND':'land', 'NOTES':'beats' }
  return `<div class="notes">` + sections.map(s =>
    `<div class="note-sec ${cls[s.label]||'beats'}">
      <div class="note-label">${esc(s.label)}</div>
      <ul>${s.items.map(i => `<li>${chipify(i)}</li>`).join('')}</ul>
    </div>`).join('') + `</div>`
}

// ---- parse one segment file ----
function parseSegment(id) {
  const src = readFileSync(join(SEG, `${id}.md`), 'utf8')
  // pull leading SEGMENT header
  const hm = src.match(/^<!--\s*SEGMENT([\s\S]*?)-->/)
  const meta = {}
  if (hm) {
    for (const line of hm[1].split('\n')) {
      const m = line.match(/^\s*([a-z_]+):\s*(.*?)\s*(#.*)?$/i)
      if (m && m[2] !== '') meta[m[1]] = m[2].replace(/^["']|["']$/g,'').replace(/["']\s*$/,'')
    }
  }
  const rest = src.slice(hm ? hm[0].length : 0)
  // split into slide chunks on standalone --- lines
  const tokens = rest.split(/\n---[ \t]*\n/)
  const slides = []
  let pendingLayout = null
  for (let tok of tokens) {
    const trimmed = tok.trim()
    if (trimmed === '') continue
    // frontmatter chunk? (only key: value lines, includes layout)
    const isFm = /(^|\n)\s*layout:/.test(tok) && trimmed.split('\n').every(l => l.trim()==='' || /^[a-z_]+:\s*/i.test(l.trim()))
    if (isFm) {
      const lm = tok.match(/layout:\s*(\S+)/)
      pendingLayout = lm ? lm[1] : null
      continue
    }
    // extract trailing note comment (the last <!-- ... -->)
    let body = tok, note = ''
    const comments = [...tok.matchAll(/<!--([\s\S]*?)-->/g)]
    if (comments.length) {
      const last = comments[comments.length - 1]
      note = last[1]
      body = tok.slice(0, last.index) + tok.slice(last.index + last[0].length)
    }
    // title = first heading
    let title = ''
    body = body.replace(/^\s*#\s+(.+?)\s*$/m, (_, t) => { if (!title) { title = t; return '' } return _ })
    slides.push({ layout: pendingLayout, title: title.trim(), body: renderBody(body.trim()), notes: renderNotes(note) })
    pendingLayout = null
  }
  meta.id = id
  return { meta, slides }
}

const segments = ORDER.map(parseSegment)
const totalSlides = segments.reduce((n, s) => n + s.slides.length, 0)

// ================================================================ CSS
// UnoCSS/Tailwind-compatible shim in em units (scales inside each slide face
// via container queries), plus the review-console identity.
const SP = {1:.25,2:.5,3:.75,4:1,5:1.25,6:1.5,8:2,10:2.5,12:3,14:3.5,16:4}
const TXT = {xs:.75,sm:.875,base:1,lg:1.125,xl:1.25,'2xl':1.5,'3xl':1.875,'4xl':2.25,'5xl':3,'6xl':3.75,'7xl':4.5,'8xl':6}
const COL = {white:'#fff',black:'#0b0e13','red-500':'#ef4444','red-400':'#f87171','red-700':'#b91c1c','green-500':'#22c55e','green-600':'#16a34a','green-700':'#15803d','emerald-700':'#047857','emerald-400':'#34d399','amber-500':'#f59e0b','amber-600':'#d97706','amber-400':'#fbbf24','yellow-600':'#ca8a04','blue-400':'#60a5fa','blue-600':'#2563eb','blue-700':'#1d4ed8','sky-700':'#0369a1','purple-600':'#9333ea','purple-700':'#7e22ce','rose-700':'#be123c','teal-700':'#0f766e','lime-600':'#65a30d','orange-600':'#ea580c','gray-300':'#d1d5db','gray-400':'#9ca3af','gray-500':'#6b7280','gray-600':'#4b5563','gray-700':'#374151'}
const RAD = {'':'.35em','-lg':'.6em','-t':'.35em .35em 0 0'}

let shim = ''
for (const [k,v] of Object.entries(TXT)) shim += `.text-${k}{font-size:${v}em}\n`
for (const [k,v] of Object.entries(SP)) {
  shim += `.mt-${k}{margin-top:${v}em}.mb-${k}{margin-bottom:${v}em}.ml-${k}{margin-left:${v}em}.pl-${k}{padding-left:${v}em}.pt-${k}{padding-top:${v}em}.pb-${k}{padding-bottom:${v}em}.p-${k}{padding:${v}em}.px-${k}{padding-left:${v}em;padding-right:${v}em}.py-${k}{padding-top:${v}em;padding-bottom:${v}em}.gap-${k}{gap:${v}em}.gap-x-${k}{column-gap:${v}em}.gap-y-${k}{row-gap:${v}em}\n`
  shim += `.space-y-${k}>*+*{margin-top:${v}em}\n`
}
for (const [k,v] of Object.entries(COL)) shim += `.text-${k}{color:${v}}.bg-${k}{background:${v}}.border-${k}{border-color:${v}}\n`
shim += `
.flex{display:flex}.grid{display:grid}.flex-col{flex-direction:column}.flex-1{flex:1}
.grid-cols-2{grid-template-columns:repeat(2,1fr)}.grid-cols-3{grid-template-columns:repeat(3,1fr)}
.grid-cols-4{grid-template-columns:repeat(4,1fr)}.grid-cols-5{grid-template-columns:repeat(5,1fr)}
.grid-cols-9{grid-template-columns:repeat(9,1fr)}
.grid-cols-\\[110px_1fr_150px\\]{grid-template-columns:7em 1fr 9.4em}
.grid-cols-\\[3fr_1fr\\]{grid-template-columns:3fr 1fr}
.items-center{align-items:center}.items-baseline{align-items:baseline}.items-end{align-items:flex-end}.items-stretch{align-items:stretch}
.justify-center{justify-content:center}.justify-between{justify-content:space-between}.justify-end{justify-content:flex-end}
.self-center{align-self:center}.mx-auto{margin-left:auto;margin-right:auto}
.text-center{text-align:center}.text-right{text-align:right}
.font-bold{font-weight:700}.font-normal{font-weight:400}.italic{font-style:italic}
.leading-none{line-height:1}.leading-tight{line-height:1.2}.leading-relaxed{line-height:1.6}.leading-loose{line-height:1.9}
.w-full{width:100%}.w-28{width:7em}.w-40{width:10em}.w-56{width:14em}
.h-7{height:1.75em}.h-8{height:2em}.h-10{height:2.5em}.h-14{height:3.5em}.h-16{height:4em}.h-44{height:11em}.h-56{height:14em}
.max-w-2xl{max-width:42em}.max-w-3xl{max-width:48em}.max-w-4xl{max-width:56em}
.shrink-0{flex-shrink:0}.overflow-hidden{overflow:hidden}
.border{border:1px solid}.border-2{border:2px solid}.border-b{border-bottom:1px solid}.border-l-2{border-left:2px solid}.border-l-4{border-left:4px solid}
.border-dashed{border-style:dashed}
.border-emerald-400\\/60{border-color:rgba(52,211,153,.6)}.border-red-400\\/60{border-color:rgba(248,113,113,.6)}
.rounded{border-radius:.35em}.rounded-lg{border-radius:.6em}.rounded-t{border-radius:.35em .35em 0 0}
.absolute{position:absolute}.bottom-4{bottom:1em}.right-4{right:1em}.abs-br{position:absolute;bottom:0;right:0}
`
for (const [k,v] of Object.entries({40:.4,50:.5,60:.6,70:.7,80:.8,90:.9,100:1})) shim += `.opacity-${k}{opacity:${v}}\n`

// ---- build nav + segments markup ----
const tierName = { P:'protagonist', T:'tragedy', D:'duel', E:'ensemble', C:'cards', '—':'framing', 'P-lite':'protagonist' }
function chip(text, cls='') { return `<span class="mchip ${cls}">${esc(text)}</span>` }

let navHtml = ''
for (const act of ACTS) {
  navHtml += `<div class="nav-act"><span class="nav-act-dot" style="background:${act.color}"></span>${esc(act.name)}</div>`
  for (const id of act.segs) {
    const seg = segments.find(s => s.meta.id === id)
    const m = seg.meta
    navHtml += `<a class="nav-seg" href="#seg-${id}" data-seg="${id}">
      <span class="nav-bar" style="background:${act.color}"></span>
      <span class="nav-title">${esc(m.id.replace(/-/g,' '))}</span>
      <span class="nav-meta">${seg.slides.length}·${esc(m.runtime||'').replace(/[~\s]/g,'')}</span>
    </a>`
  }
}

let segHtml = ''
for (const act of ACTS) {
  for (const id of act.segs) {
    const seg = segments.find(s => s.meta.id === id)
    const m = seg.meta
    const color = act.color
    const chips = []
    if (m.stamps && m.stamps !== '[]') chips.push(chip('★ '+m.stamps.replace(/[\[\]]/g,''), 'stamp'))
    if (m.seeds && m.seeds !== '[]') chips.push(chip('seeds: '+m.seeds.replace(/[\[\]]/g,''), 'seed'))
    if (m.pays_off && m.pays_off !== '[]') chips.push(chip('pays off: '+m.pays_off.replace(/[\[\]]/g,''), 'pay'))
    segHtml += `<section class="segment" id="seg-${id}" style="--act:${color}">
      <div class="seg-head">
        <div class="seg-eyebrow"><span class="seg-act" style="color:${color}">${esc(m.act||'')}</span>
          <span class="seg-tier" title="${tierName[m.tier]||''}">${esc(m.tier||'')}</span>
          <span class="seg-run">${esc(m.runtime||'')}</span>
          <span class="seg-count">${seg.slides.length} slides</span></div>
        <h2 class="seg-title">${esc(m.id.replace(/-/g,' '))}</h2>
        ${m.angle ? `<p class="seg-angle">“${esc(m.angle)}”</p>` : ''}
        ${chips.length ? `<div class="seg-chips">${chips.join('')}</div>` : ''}
      </div>`
    seg.slides.forEach((sl, i) => {
      const layoutCls = sl.layout ? `layout-${sl.layout}` : 'layout-default'
      segHtml += `<article class="slide">
        <div class="face-wrap">
          <div class="slide-face ${layoutCls}">
            ${sl.title ? `<h1 class="slide-title">${esc(sl.title)}</h1>` : ''}
            <div class="slide-body">${sl.body}</div>
            <span class="slide-num">${i+1}</span>
          </div>
        </div>
        <aside class="slide-side">${sl.notes || '<div class="notes empty">— no beats —</div>'}</aside>
      </article>`
    })
    segHtml += `</section>`
  }
}

// ================================================================ PAGE
const page = `<style>
:root{
  --sans: ui-sans-serif,system-ui,-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
  --mono: ui-monospace,"SF Mono","JetBrains Mono","Cascadia Code","Source Code Pro",Menlo,Consolas,monospace;
  --bg:#e9ebef; --panel:#ffffff; --panel2:#f4f6f8; --ink:#141922; --ink-soft:#5a6473;
  --line:#d3d8e0; --line-soft:#e4e8ee; --accent:#dc2626; --accent-soft:#fef2f2;
  --rail-bg:#12161d; --rail-ink:#c8cfda; --rail-soft:#7f8a9b; --rail-line:#242c39; --rail-active:#1c222d;
}
@media (prefers-color-scheme:dark){:root{
  --bg:#0b0e14; --panel:#141a23; --panel2:#0f141c; --ink:#e4e9f0; --ink-soft:#8b95a5;
  --line:#242c38; --line-soft:#1b222c; --accent:#f2565a; --accent-soft:#2a1416;
  --rail-bg:#080a0f; --rail-ink:#c8cfda; --rail-soft:#6b7688; --rail-line:#1a212c; --rail-active:#141a23;
}}
:root[data-theme="light"]{
  --bg:#e9ebef; --panel:#ffffff; --panel2:#f4f6f8; --ink:#141922; --ink-soft:#5a6473;
  --line:#d3d8e0; --line-soft:#e4e8ee; --accent:#dc2626; --accent-soft:#fef2f2;
  --rail-bg:#12161d; --rail-ink:#c8cfda; --rail-soft:#7f8a9b; --rail-line:#242c39; --rail-active:#1c222d;
}
:root[data-theme="dark"]{
  --bg:#0b0e14; --panel:#141a23; --panel2:#0f141c; --ink:#e4e9f0; --ink-soft:#8b95a5;
  --line:#242c38; --line-soft:#1b222c; --accent:#f2565a; --accent-soft:#2a1416;
  --rail-bg:#080a0f; --rail-ink:#c8cfda; --rail-soft:#6b7688; --rail-line:#1a212c; --rail-active:#141a23;
}
*{box-sizing:border-box}
.wrap{font-family:var(--sans);color:var(--ink);background:var(--bg);min-height:100vh;display:grid;grid-template-columns:270px 1fr;line-height:1.55}
a{color:inherit;text-decoration:none}

/* ---------- left rail ---------- */
.rail{position:sticky;top:0;align-self:start;height:100vh;overflow-y:auto;background:var(--rail-bg);color:var(--rail-ink);border-right:1px solid var(--rail-line);padding:1.1rem 0 2rem}
.rail-brand{padding:0 1.1rem 1rem;border-bottom:1px solid var(--rail-line);margin-bottom:.6rem}
.rail-brand h1{font-family:var(--mono);font-size:1.15rem;letter-spacing:.18em;margin:0;font-weight:700}
.rail-brand .sub{font-size:.7rem;color:var(--rail-soft);letter-spacing:.04em;margin-top:.35rem}
.rail-stats{display:flex;gap:.9rem;font-family:var(--mono);font-size:.66rem;color:var(--rail-soft);margin-top:.7rem;flex-wrap:wrap}
.rail-stats b{color:var(--rail-ink);font-weight:600}
.nav-act{font-family:var(--mono);font-size:.62rem;letter-spacing:.13em;text-transform:uppercase;color:var(--rail-soft);padding:.9rem 1.1rem .3rem;display:flex;align-items:center;gap:.5rem}
.nav-act-dot{width:.5rem;height:.5rem;border-radius:2px;flex:none}
.nav-seg{display:flex;align-items:center;gap:.5rem;padding:.32rem 1.1rem .32rem .8rem;position:relative;font-size:.82rem}
.nav-seg:hover{background:var(--rail-active)}
.nav-bar{width:3px;height:1.1rem;border-radius:2px;flex:none;opacity:.6}
.nav-title{text-transform:capitalize;flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.nav-meta{font-family:var(--mono);font-size:.6rem;color:var(--rail-soft);letter-spacing:.02em}
.nav-seg.active{background:var(--rail-active)}
.nav-seg.active .nav-bar{opacity:1;width:4px}
.nav-seg.active .nav-title{color:#fff;font-weight:600}
.nav-seg.active::before{content:"";position:absolute;left:0;top:0;bottom:0;width:3px;background:var(--accent)}

/* ---------- stage ---------- */
.stage{padding:0 clamp(1rem,3vw,2.6rem) 6rem;max-width:1180px;width:100%}
.masthead{padding:2.6rem 0 1.6rem;border-bottom:1px solid var(--line);margin-bottom:1.4rem}
.mast-eyebrow{font-family:var(--mono);font-size:.7rem;letter-spacing:.22em;text-transform:uppercase;color:var(--accent)}
.masthead h1{font-size:clamp(1.9rem,4vw,3rem);margin:.5rem 0 .3rem;letter-spacing:-.02em;text-wrap:balance;font-weight:800}
.masthead .lede{color:var(--ink-soft);max-width:60ch;font-size:1.02rem}
.mast-row{display:flex;gap:2rem;flex-wrap:wrap;margin-top:1.3rem;font-family:var(--mono);font-size:.74rem}
.mast-row .stat b{display:block;font-size:1.5rem;color:var(--ink);letter-spacing:-.01em;font-variant-numeric:tabular-nums}
.mast-row .stat span{color:var(--ink-soft);letter-spacing:.04em}
.howto{margin-top:1.3rem;background:var(--panel2);border:1px solid var(--line-soft);border-left:3px solid var(--accent);border-radius:.5rem;padding:.85rem 1.05rem;font-size:.86rem;color:var(--ink-soft);max-width:70ch}
.howto b{color:var(--ink)}
.legend{display:flex;gap:1.1rem;flex-wrap:wrap;margin-top:1rem;font-family:var(--mono);font-size:.68rem;color:var(--ink-soft)}
.legend .lg{display:flex;align-items:center;gap:.4rem}
.legend .sw{width:.7rem;height:.7rem;border-radius:2px}
.controls{display:flex;gap:.5rem;align-items:center;margin-top:1.2rem}
.btn{font-family:var(--mono);font-size:.72rem;letter-spacing:.05em;padding:.4rem .7rem;border:1px solid var(--line);border-radius:.4rem;background:var(--panel);color:var(--ink);cursor:pointer}
.btn:hover{border-color:var(--accent);color:var(--accent)}
.btn[aria-pressed="true"]{background:var(--accent);color:#fff;border-color:var(--accent)}

/* ---------- segment ---------- */
.segment{padding-top:2.4rem;scroll-margin-top:1rem}
.seg-head{border-top:1px solid var(--line);padding-top:1.1rem;margin-bottom:1rem}
.seg-eyebrow{display:flex;gap:.7rem;align-items:center;font-family:var(--mono);font-size:.68rem;letter-spacing:.06em;color:var(--ink-soft);flex-wrap:wrap}
.seg-act{font-weight:700;letter-spacing:.1em;text-transform:uppercase}
.seg-tier{border:1px solid var(--line);border-radius:2px;padding:0 .35em;font-weight:700;color:var(--ink)}
.seg-title{font-size:1.7rem;text-transform:capitalize;margin:.35rem 0 .4rem;letter-spacing:-.01em}
.seg-angle{color:var(--ink);font-size:1rem;font-style:italic;max-width:75ch;border-left:3px solid var(--act);padding-left:.8rem;margin:.4rem 0 .6rem}
.seg-chips{display:flex;gap:.4rem;flex-wrap:wrap}
.mchip{font-family:var(--mono);font-size:.64rem;letter-spacing:.03em;padding:.15em .5em;border-radius:3px;border:1px solid var(--line);color:var(--ink-soft)}
.mchip.stamp{color:var(--accent);border-color:var(--accent);background:var(--accent-soft)}
.mchip.seed{border-style:dashed}

/* ---------- slide row ---------- */
.slide{display:grid;grid-template-columns:1fr 340px;gap:1.1rem;margin-bottom:1.3rem;align-items:start}
.wrap.notes-off .slide{grid-template-columns:1fr}
.wrap.notes-off .slide-side{display:none}
.face-wrap{container-type:inline-size;min-width:0}
.slide-face{position:relative;min-height:56.25cqw;background:var(--panel);border:1px solid var(--line);border-top:3px solid var(--act);border-radius:.5rem;padding:5cqw 5.5cqw 6cqw;overflow:visible;font-size:1.95cqw;display:flex;flex-direction:column;justify-content:center;box-shadow:0 1px 3px rgba(0,0,0,.05)}
.slide-face.layout-default{justify-content:flex-start}
.slide-face.layout-section{align-items:flex-start}
.slide-title{font-size:2.1em;font-weight:800;letter-spacing:-.01em;line-height:1.08;margin:0 0 .55em;text-wrap:balance}
.slide-face.layout-section .slide-title,.slide-face.layout-center .slide-title{font-size:2.5em}
.slide-body{min-height:0}
.slide-body p{margin:.4em 0}
.slide-body .body-h{font-weight:700;margin:.3em 0}
.md-list{margin:.3em 0;padding-left:1.1em}.md-list li{margin:.25em 0}
.slide-body svg,.diagram svg{width:100%;height:auto;display:block;margin:0 auto}
.diagram{margin:.5em 0}
.slide-body code{font-family:var(--mono);font-size:.9em;background:var(--panel2);padding:0 .25em;border-radius:3px}
.missing{font-family:var(--mono);font-size:.8em;color:var(--accent);border:1px dashed var(--accent);padding:.4em;border-radius:4px}
.slide-num{position:absolute;bottom:.6cqw;right:1cqw;font-family:var(--mono);font-size:1.1em;color:var(--ink-soft);opacity:.4}

/* ---------- notes ---------- */
.slide-side{position:sticky;top:1rem}
.notes{font-size:.8rem}
.notes.empty{color:var(--ink-soft);font-family:var(--mono);font-size:.72rem;padding:.5rem 0}
.note-sec{margin-bottom:.7rem;border-left:2px solid var(--line);padding-left:.7rem}
.note-sec.beats{border-color:var(--act)}
.note-sec.ammo{border-color:#94a3b8}
.note-sec.land{border-color:var(--accent)}
.note-label{font-family:var(--mono);font-size:.6rem;letter-spacing:.14em;color:var(--ink-soft);margin-bottom:.25rem}
.note-sec.land .note-label{color:var(--accent)}
.notes ul{margin:0;padding-left:1rem}
.notes li{margin:.28rem 0;color:var(--ink)}
.note-sec.ammo li{color:var(--ink-soft);font-size:.76rem}
.note-sec.land li{font-style:italic}
.chip{font-family:var(--mono);font-size:.62rem}
.chip.verify{color:#b45309;background:#fffbeb;border:1px solid #fcd34d;border-radius:3px;padding:0 .3em;letter-spacing:.03em}
.chip.verify .chip-body{color:var(--ink-soft);font-style:normal}
.chip.src{color:var(--ink-soft);opacity:.7}
@media (prefers-color-scheme:dark){.chip.verify{color:#fbbf24;background:#2a2010;border-color:#5c4818}}
:root[data-theme="dark"] .chip.verify{color:#fbbf24;background:#2a2010;border-color:#5c4818}

/* utility shim (UnoCSS-compatible, em-scaled inside slide faces) */
${shim}
.dark\\:bg-white{}
:root[data-theme="dark"] .dark\\:bg-white{background:#fff}
@media (prefers-color-scheme:dark){:root:not([data-theme="light"]) .dark\\:bg-white{background:#fff}}

@media (max-width:1080px){
  .wrap{grid-template-columns:1fr}
  .rail{position:fixed;z-index:50;transform:translateX(-100%);transition:transform .2s;width:270px}
  .wrap.nav-open .rail{transform:none}
  .slide{grid-template-columns:1fr}
  .slide-side{position:static}
  .slide-face{font-size:3.2cqw;min-height:56.25cqw}
  .navtoggle{display:inline-flex}
}
.navtoggle{display:none;position:fixed;top:.7rem;left:.7rem;z-index:60}
@media (prefers-reduced-motion:reduce){*{scroll-behavior:auto!important;transition:none!important}}
html{scroll-behavior:smooth}
</style>

<div class="wrap" id="wrap">
  <button class="btn navtoggle" id="navToggle" aria-label="Toggle navigation">☰ segments</button>
  <aside class="rail" id="rail">
    <div class="rail-brand">
      <h1>CHIPS</h1>
      <div class="sub">Episode 1 · review console</div>
      <div class="rail-stats"><span><b>${segments.length}</b> segments</span><span><b>${totalSlides}</b> slides</span><span><b>~117</b> min</span></div>
    </div>
    <nav id="nav">${navHtml}</nav>
  </aside>

  <main class="stage">
    <header class="masthead">
      <div class="mast-eyebrow">The Five Layers of the Cake of AI</div>
      <h1>The semiconductor industry, one chip at a time</h1>
      <p class="lede">Every slide of the episode, with its diagrams and the beat-sheet notes that stay hidden in the recording deck. This is the working view — for reviewing flow, angles, and facts, not the audience cut.</p>
      <div class="mast-row">
        <div class="stat"><b>${segments.length}</b><span>segments</span></div>
        <div class="stat"><b>${totalSlides}</b><span>slides</span></div>
        <div class="stat"><b>~117</b><span>min target</span></div>
        <div class="stat"><b>7</b><span>chokepoints</span></div>
      </div>
      <div class="howto"><b>How to read this.</b> Left rail jumps between segments; each is colored by where it sits on the master map. Each slide shows its <b>face</b> (what the audience sees) beside its <b>beats</b> (what you say, in your own words — never a script). <span class="chip verify">VERIFY<span class="chip-body"></span></span> marks a number to re-check before recording; <b>★</b> marks a chokepoint earned on screen. Everything is <b>status: draft</b> — the angle line and the beats are yours to redline.</div>
      <div class="legend">
        <span class="lg"><span class="sw" style="background:#3b82f6"></span>design</span>
        <span class="lg"><span class="sw" style="background:#22c55e"></span>manufacture</span>
        <span class="lg"><span class="sw" style="background:#f59e0b"></span>equipment</span>
        <span class="lg"><span class="sw" style="background:#8b5cf6"></span>memory</span>
        <span class="lg"><span class="sw" style="background:#dc2626"></span>chokepoint / geopolitics</span>
      </div>
      <div class="controls">
        <button class="btn" id="beatsToggle" aria-pressed="true">beats: on</button>
      </div>
    </header>
    ${segHtml}
  </main>
</div>

<script>
(function(){
  var wrap=document.getElementById('wrap');
  // beats toggle
  var bt=document.getElementById('beatsToggle');
  bt.addEventListener('click',function(){
    var on=wrap.classList.toggle('notes-off');
    bt.setAttribute('aria-pressed', String(!on));
    bt.textContent='beats: '+(on?'off':'on');
  });
  // mobile nav
  var nt=document.getElementById('navToggle');
  nt.addEventListener('click',function(){wrap.classList.toggle('nav-open')});
  document.querySelectorAll('.nav-seg').forEach(function(a){
    a.addEventListener('click',function(){wrap.classList.remove('nav-open')});
  });
  // scroll-spy — deterministic: the last segment whose top has crossed the marker
  var links={};
  document.querySelectorAll('.nav-seg').forEach(function(a){links[a.getAttribute('data-seg')]=a});
  var segs=[].slice.call(document.querySelectorAll('.segment'));
  var activeId=null;
  function spy(){
    var cur=segs[0];
    for(var i=0;i<segs.length;i++){ if(segs[i].getBoundingClientRect().top<=140) cur=segs[i]; else break; }
    if(!cur) return;
    var id=cur.id.replace('seg-','');
    if(id===activeId) return;
    activeId=id;
    document.querySelectorAll('.nav-seg.active').forEach(function(x){x.classList.remove('active')});
    if(links[id]){links[id].classList.add('active');
      links[id].scrollIntoView({block:'nearest'});}
  }
  var tick=false;
  window.addEventListener('scroll',function(){if(!tick){tick=true;requestAnimationFrame(function(){spy();tick=false;});}},{passive:true});
  spy();
})();
</script>`

mkdirSync(join(ROOT, 'site'), { recursive: true })
writeFileSync(join(ROOT, 'site', 'review.html'), page)
console.log(`wrote site/review.html — ${segments.length} segments, ${totalSlides} slides, ${(page.length/1024).toFixed(0)}KB`)
