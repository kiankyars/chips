---
layout: section
---

<!-- SEGMENT
id: equipment-dep-etch
act: IV — The Fab Tour
tier: E            # ensemble sweep — two ⭐ players + two cards, one continuous story
angle: "ASML gets the fame for printing the pattern — but a chip is actually BUILT by adding material and carving it away, a thousand times over; and when shrinking sideways got too hard, the whole industry started building UPWARD, quietly moving the money from the printer to the sculptors."   # YOU OWN THIS LINE — rewrite it in your voice
runtime: ~5 min
status: draft
seeds: []
pays_off: []
stamps: []          # NO new stamp — board stays at board-5 (from asml); these players are dominant but not on the locked seven
diagrams: [map-equipment, flow-deposit, flow-etch, flow-coat]
sources: research/equipment-dep-etch.md
-->


# Deposition and etch

<div class="text-xl opacity-70 mt-2">Part 4 · Fabrication · deposition and etch</div>

<div class="grid grid-cols-2 gap-8 mt-6 items-center">
<div>

![industry map — equipment region lit](/diagrams/rendered/map-equipment.svg)

</div>
<div class="text-2xl leading-relaxed">
Lithography defines a pattern.<br>
<b>Deposition</b> adds material.<br>
<span class="opacity-70"><b>Etching</b> removes selected material.</span>
</div>
</div>

<!--
- Lithography defines where a feature should go, deposition adds a thin film, and etching removes the regions exposed by the pattern.
- A leading-edge fab repeats this sequence across about a thousand process steps to build the chip layer by layer.
-->

---
class: visual-sequence paper-visual
title: "3D NAND"
---

<div class="visual-sequence__kicker">3D NAND</div>

<div class="visual-sequence__frame">
  <img src="/diagrams/rendered/nand-vertical-scaling.png" alt="Three vertical NAND stacks grow from short to very tall while keeping the same footprint and vertical channels" />
</div>

<div class="visual-sequence__caption"><strong>NAND makers stack more layers.</strong><span>Each generation requires deeper channels.</span></div>
<div class="visual-sequence__source">24 layers · 2013 → 200+ today → ~1,000 on roadmaps</div>

<!--
- NAND makers moved from planar cells to vertical stacks when shrinking the footprint became harder.
- Layer counts grew from 24 in 2013 to more than 200 today, with roadmaps approaching 1,000.
- Each taller stack requires more deposited films and a deeper channel etched through them, increasing demand for deposition and etch equipment.
-->

---
class: visual-sequence paper-visual
title: "Process coverage"
---

<div class="visual-sequence__kicker">PROCESS COVERAGE</div>

<div class="visual-sequence__frame">
  <img src="/diagrams/rendered/equipment-applied-coverage.svg" alt="Applied Materials spans six fab tool categories while track and lithography remain outside its portfolio" />
</div>

<div class="visual-sequence__caption"><strong>Applied reaches six tool categories.</strong><span>Track and lithography remain outside its portfolio.</span></div>
<div class="visual-sequence__source">Deposition · etch · implant · polish · thermal · metrology</div>

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
  <img src="/diagrams/rendered/equipment-lam-deep-etch-v2.png" alt="A narrow Lam Research dry-etch channel cuts straight through more than one hundred NAND layers" />
</div>

<div class="visual-sequence__caption"><strong>Lam etches through 100+ layers.</strong><span>The channel is about 50 times deeper than wide.</span></div>
<div class="visual-sequence__source">100+ layers · one pass · billions of channels per wafer</div>

<!--
- Lam Research etches 3D NAND channels through more than one hundred layers in one pass, reaching a depth about fifty times the channel width.
- A wafer needs billions of these channels with consistent dimensions, because a miss can disable a memory cell.
-->

---
class: visual-sequence paper-visual
title: "Adjacent steps"
---

<div class="visual-sequence__kicker">ADJACENT STEPS</div>

<div class="visual-sequence__frame">
  <img src="/diagrams/rendered/equipment-tel-asm-v2.png" alt="Tokyo Electron coats and develops resist around exposure while ASM atomic layer deposition wraps recessed surfaces" />
</div>

<div class="visual-sequence__caption"><strong>TEL coats and develops the resist.</strong><span>ASM coats recessed surfaces one atomic layer at a time.</span></div>
<div class="visual-sequence__source">TEL track &gt;90% share · ASM ALD · GAA</div>

<!--
- Tokyo Electron's track coats the wafer with photoresist before exposure and develops it afterward.
- The track connects to the ASML scanner, and TEL supplies more than 90 percent of this market.
- ASM's atomic layer deposition uses self-limiting reactions to deposit conformal gate films around every side of a gate-all-around transistor's channel.
-->

---

# 3D scaling increased deposition and etch demand

<div class="grid grid-cols-2 gap-10 mt-6 items-center">
<div class="text-2xl leading-relaxed">
Fabs build chips by repeatedly depositing material<br>
and etching selected regions across<br>
<b>roughly 1,000 process steps</b>.
</div>
<div>
<div class="text-sm opacity-60 mb-2">INSTALLED-BASE REVENUE</div>
<div class="text-lg leading-relaxed">
Lam has roughly <b>100,000</b> process chambers in the field. Vendors earn service revenue over tools' 20–25-year operating lives.
</div>
<div class="opacity-60 text-base mt-2">Lam: ~36% of revenue recurring · Applied's services arm now entirely recurring.</div>
</div>
</div>

<div class="text-2xl mt-8 text-center leading-relaxed">
KLA's inspection tools check whether each process step met its target.
</div>

<!--
- A leading-edge process repeats deposition, lithography, and etch across about a thousand steps.
- Fabs place inspection and metrology after selected critical steps, where early detection prevents bad work from spreading through more wafers.
- Toolmakers service their installed base for decades; Lam alone has about 100,000 process chambers in the field.
-->
