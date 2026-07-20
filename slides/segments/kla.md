---
layout: section
---

<!-- SEGMENT
id: kla
act: IV — The Fab Tour
tier: P-lite
angle: "The most profitable machine in the fab is the one that builds nothing. KLA doesn't deposit, etch, or print a single atom — it only measures — and it earns the fattest margin in the industry doing it, because if you can't measure it, you can't build it."   # YOU OWN THIS LINE — rewrite it in your voice
runtime: ~3 min
status: draft
seeds: []                       # plants nothing new — closes out the fab-tour equipment leg
pays_off: [yield]               # stage 3 of the yield chain: foundations → life-of-a-wafer → HERE → intel → chiplets in packaging (do NOT close it — intel & packaging still cash it)
stamps: []                      # NO new stamp — board stays at board-5 (ASML + Zeiss)
diagrams: [flow-measure, map-equipment]
sources: research/kla.md
-->


# Inspection and metrology

<div class="text-xl opacity-70 mt-2">Part 4 · Fabrication · inspection and metrology</div>

<div class="grid grid-cols-[3fr_1fr] gap-6 mt-6 items-center">
<div>

![the loop ends on the measure step](/diagrams/rendered/flow-measure.svg)

</div>
<div class="opacity-70">

![industry map — equipment region lit](/diagrams/rendered/map-equipment.svg)

</div>
</div>

<div class="text-lg opacity-80 mt-4 text-center">
KLA's inspection and metrology tools find defects and verify dimensions after process steps.
</div>

<!--
- KLA's tools inspect wafers for defects and measure dimensions and alignment after process steps.
- KLA's tools do not deposit, etch, or print material.
- At nanometre scale, the fab needs these measurements to detect a bad process before it damages more wafers.
-->

---
class: visual-sequence paper-visual
title: "Process control"
---

<div class="visual-sequence__kicker">PROCESS CONTROL</div>

<div class="visual-sequence__frame">
  <img src="/diagrams/rendered/process-drift-v2.png" alt="Without inspection, drift reaches scrap at final test; an early inspection confines the loss to one lot" />
</div>

<div class="visual-sequence__caption"><strong>Measure at step 401.</strong><span>Do not discover the drift at final test.</span></div>
<div class="visual-sequence__source">One yield point at 50k wafer starts / month · roughly $100M / year</div>

<!--
- In this illustration, a process drifts at step 400.
- Without in-line inspection, the fab discovers the problem at final test after weeks of additional work; inspection at step 401 confines the loss to one lot.
- At 50,000 wafer starts per month, one percentage point of yield can represent about $100 million a year.
-->

---
class: visual-sequence paper-visual
title: "Inspection scale"
---

<div class="visual-sequence__kicker">INSPECTION SCALE</div>

<div class="visual-sequence__frame">
  <img src="/diagrams/rendered/defect-scale-v2.png" alt="A nested zoom from a 300 millimeter wafer to one die, metal lines, and a 20 nanometer defect" />
</div>

<div class="visual-sequence__caption"><strong>20 nanometers against 300 millimeters.</strong><span>A 15-million-fold scale difference.</span></div>
<div class="visual-sequence__source">Inspection time · roughly one hour per wafer</div>

<!--
- A 20-nanometre defect against a 300-millimetre wafer is a 15-million-fold scale difference; at golf-ball size, the wafer would span about 600 kilometres.
- KLA combines fast optical inspection with targeted electron-beam review to find and classify defects in about an hour per wafer.
-->

---

# KLA leads process control

<div class="border-2 border-gray-400 rounded-lg p-4 mt-6">
  <div class="grid grid-cols-5 gap-4 text-center">
    <div><div class="text-3xl font-bold">$12.2B</div><div class="text-sm opacity-60">revenue FY25</div></div>
    <div><div class="text-3xl font-bold">~62%</div><div class="text-sm opacity-60">gross margin</div></div>
    <div><div class="text-3xl font-bold">56–58%</div><div class="text-sm opacity-60">market share</div></div>
    <div><div class="text-lg font-bold leading-tight mt-1">~7× the nearest rival in process control</div></div>
    <div><div class="text-3xl font-bold">~10 yrs</div><div class="text-sm opacity-60">to replace</div></div>
  </div>
  <div class="text-xs opacity-40 text-right mt-2">as of Q2 2026</div>
</div>

<div class="text-center text-xl mt-8 leading-relaxed">
At <b>~62%</b>, KLA's gross margin is about <b>ten points above ASML's</b><br>
<span class="opacity-60 text-lg">and the highest among the five largest equipment vendors.</span>
</div>

<!--
- KLA controls about 56 to 58 percent of the semiconductor process-control market, about seven times its nearest rival.
- Fabs tune inspection recipes to each layer, process window, and known defect signature, so switching vendors requires new baselines and requalification.
- That embedded process knowledge supports KLA's 62 percent gross margin and the long replacement estimate.
-->
