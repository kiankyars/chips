---
layout: default
class: visual-sequence paper-visual
title: "3D NAND"
sources: [research/equipment-dep-etch.md]
---

<div class="visual-sequence__kicker">WHEN SHRINKING SIDEWAYS GOT HARDER, NAND STACKED UPWARD</div>

<div class="visual-sequence__frame">
  <div class="grid grid-cols-3 gap-16 w-full h-full items-end px-20 py-10 text-center text-slate-900">
    <div><div class="text-2xl font-bold mb-3">2013 · 24 layers</div><div class="relative mx-auto w-36 h-20 border-2 border-amber-600 bg-amber-50" style="background-image:repeating-linear-gradient(to bottom,transparent 0,transparent 5px,rgba(217,119,6,.55) 6px,rgba(217,119,6,.55) 8px)"><div class="absolute inset-y-0 left-1/2 w-2 -translate-x-1/2 bg-cyan-800"></div></div></div>
    <div><div class="text-2xl font-bold mb-3">Today · 200+ layers</div><div class="relative mx-auto w-36 h-52 border-2 border-amber-600 bg-amber-50" style="background-image:repeating-linear-gradient(to bottom,transparent 0,transparent 5px,rgba(217,119,6,.55) 6px,rgba(217,119,6,.55) 8px)"><div class="absolute inset-y-0 left-1/2 w-2 -translate-x-1/2 bg-cyan-800"></div></div></div>
    <div><div class="text-2xl font-bold mb-3">Roadmap · ~1,000 layers</div><div class="relative mx-auto w-36 h-80 border-2 border-amber-600 bg-amber-50" style="background-image:repeating-linear-gradient(to bottom,transparent 0,transparent 5px,rgba(217,119,6,.55) 6px,rgba(217,119,6,.55) 8px)"><div class="absolute inset-y-0 left-1/2 w-2 -translate-x-1/2 bg-cyan-800"></div></div></div>
  </div>
</div>

<div class="visual-sequence__caption"><strong>Same footprint; deeper channels.</strong><span>More layers require more deposition and etch.</span></div>

<!--
- NAND makers moved from planar cells to vertical stacks when shrinking the footprint became harder.
- Layer counts grew from 24 in 2013 to more than 200 today, with roadmaps approaching 1,000.
- Each taller stack requires more deposited films and a deeper channel etched through them, increasing demand for deposition and etch equipment.
-->

---
class: visual-sequence paper-visual
title: "Process coverage"
---

<div class="visual-sequence__frame">
  <img src="/diagrams/rendered/equipment-applied-coverage.svg" alt="Applied Materials spans six fab tool categories while track and lithography remain outside its portfolio" />
</div>

<!--
- Applied Materials sells into six tool categories, so one customer can allocate a larger share of its fab equipment budget to Applied than to a single-step specialist.
- The installed base then generates service, spare-parts, and upgrade revenue across those categories.
- Track and lithography remain outside its portfolio.
-->

---
class: visual-sequence paper-visual
title: "Deep NAND etch"
---

<div class="visual-sequence__kicker">DEEP NAND ETCH</div>

<div class="visual-sequence__frame">
  <img src="/diagrams/rendered/equipment-lam-deep-etch.svg" alt="A narrow Lam Research dry-etch channel cuts straight through more than one hundred NAND layers" />
</div>

<!--
- Lam Research etches 3D NAND channels through more than one hundred layers in one pass, reaching a depth about fifty times the channel width.
- A wafer needs billions of these channels with consistent dimensions, because a miss can disable a memory cell.
-->

---
class: visual-sequence paper-visual
title: "Adjacent steps"
---

<div class="visual-sequence__frame">
  <img src="/diagrams/rendered/equipment-tel-asm.svg" alt="Tokyo Electron coats and develops resist around exposure while ASM atomic layer deposition wraps recessed surfaces" />
</div>

<!--
- Tokyo Electron's track coats the wafer with photoresist before exposure and develops it afterward.
- The track connects to the ASML scanner, and TEL supplies more than 90 percent of this market.
- ASM's atomic layer deposition uses self-limiting reactions to deposit conformal gate films around every side of a gate-all-around transistor's channel.
-->

---

# Vertical structures turn tool sales into decades of service

<div class="grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] gap-4 mt-11 items-center text-center">
<div><div class="text-4xl font-bold">↑ layers</div><div class="opacity-65 mt-2">taller 3D structures</div></div>
<div class="text-4xl opacity-35">→</div>
<div><div class="text-3xl font-bold">harder</div><div class="opacity-65 mt-2">deposition + etch</div></div>
<div class="text-4xl opacity-35">→</div>
<div><div class="text-4xl font-bold">~100k</div><div class="opacity-65 mt-2">Lam chambers installed</div></div>
<div class="text-4xl opacity-35">→</div>
<div><div class="text-4xl font-bold">20–25 yr</div><div class="opacity-65 mt-2">service life</div></div>
</div>

<div class="mt-12 pt-6 border-t border-slate-600 text-center">
  <span class="text-5xl font-bold">~36%</span>
  <span class="text-xl opacity-70 ml-3">of Lam revenue is recurring</span>
</div>

<!--
- Taller NAND stacks and gate-all-around structures increase the number and difficulty of deposition and etch operations.
- Toolmakers service their installed base for decades; Lam alone has about 100,000 process chambers in the field.
-->
