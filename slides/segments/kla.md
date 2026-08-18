---
layout: section
---

<!-- SEGMENT
id: kla
act: IV — The Fab Tour
tier: P-lite
angle: "KLA's core process-control franchise measures rather than depositing, etching, or printing, supporting one of wafer-fab equipment's highest company gross margins. If you can't measure it, you can't build it."   # YOU OWN THIS LINE — rewrite it in your voice
runtime: ~3 min
status: draft
seeds: []                       # plants nothing new — closes out the fab-tour equipment leg
pays_off: [yield]               # stage 3 of the yield chain: foundations → life-of-a-wafer → HERE → intel → chiplets in packaging (do NOT close it — intel & packaging still cash it)
stamps: []                      # NO new stamp — board stays at board-5 (ASML + Zeiss)
diagrams: [map-equipment, flow-measure, process-drift-v2, defect-scale-v2]
sources: research/kla.md
-->


# Inspection and metrology

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
- KLA's core inspection and metrology tools measure rather than depositing, etching, or printing; its smaller SPTS-led process business is the exception.
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
<div class="visual-sequence__source">Early detection limits the work-in-process exposed after an excursion</div>

<!--
- In this illustration, a process drifts at step 400.
- Without in-line inspection, the fab discovers the problem at final test after weeks of additional work; inspection at step 401 confines the loss to one lot.
- The value of one yield point depends on die mix, wafer value, the yield mechanism, and customer contracts, so there is no universal dollar figure.
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
<div class="visual-sequence__source">Optical inspection for coverage · targeted e-beam review for classification</div>

<!--
- A 20-nanometre defect against a 300-millimetre wafer is a 15-million-fold scale difference; at golf-ball size, the wafer would span about 600 kilometres.
- High-throughput optical inspection locates candidate defects; targeted e-beam review classifies selected sites.
- Cycle time depends on the inspection recipe, sensitivity, coverage, and sampling plan, so there is no universal per-wafer duration.
-->

---

# KLA leads process control

<div class="border-2 border-gray-400 rounded-lg p-4 mt-6">
  <div class="grid grid-cols-5 gap-4 text-center">
    <div><div class="text-3xl font-bold">$13.58B</div><div class="text-sm opacity-60">revenue FY26</div></div>
    <div><div class="text-3xl font-bold">61.3%</div><div class="text-sm opacity-60">FY26 GAAP gross margin</div></div>
    <div><div class="text-3xl font-bold">56–58%</div><div class="text-sm opacity-60">market share</div></div>
    <div><div class="text-lg font-bold leading-tight mt-1">~7× the nearest rival in process control</div></div>
    <div><div class="text-xl font-bold leading-tight mt-2">capability</div><div class="text-sm opacity-60">must scale</div></div>
  </div>
  <div class="text-xs opacity-40 text-right mt-2">FY2026 ended June 30, 2026</div>
</div>

<div class="text-center text-xl mt-8 leading-relaxed">
KLA's FY2026 GAAP gross margin was <b>61.3%</b>.<br>
<span class="opacity-60 text-lg">Process-control software and service revenue reinforce the hardware franchise.</span>
</div>

<!--
- KLA controls about 56 to 58 percent of the semiconductor process-control market, about seven times its nearest rival.
- Fabs tune inspection recipes to each layer, process window, and known defect signature, so switching vendors requires new baselines and requalification.
- That embedded process knowledge supports KLA's margin profile and makes competitive capability difficult to scale.
-->
