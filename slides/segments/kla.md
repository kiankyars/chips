---
layout: section
sources: [research/kla.md]
---

# Measure between critical steps—not only at final test

<div class="grid grid-cols-[1fr_auto_1fr_auto_1.15fr] gap-5 mt-11 items-center text-center">
<div class="border-t-4 border-amber-400 pt-5"><div class="text-2xl font-bold">PROCESS STEP</div><div class="opacity-60 mt-2">deposit · expose · etch</div></div>
<div class="text-5xl opacity-35">→</div>
<div class="border-t-4 border-blue-400 pt-5"><div class="text-2xl font-bold">INSPECT + MEASURE</div><div class="opacity-60 mt-2">defects · dimensions · overlay</div></div>
<div class="text-5xl opacity-35">→</div>
<div class="border-2 border-slate-500 rounded-full py-7"><div class="text-2xl font-bold">WITHIN SPEC?</div></div>
</div>

<div class="grid grid-cols-2 gap-14 mt-10">
<div class="text-center"><div class="text-emerald-300 tracking-[0.18em] text-sm">YES</div><div class="text-3xl font-bold mt-2">NEXT STEP →</div></div>
<div class="text-center"><div class="text-rose-300 tracking-[0.18em] text-sm">NO</div><div class="text-2xl font-bold mt-2">HOLD LOT → ADJUST TOOL → REMEASURE ↺</div></div>
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

<div class="visual-sequence__frame">
  <img src="/diagrams/rendered/process-drift.svg" alt="Without inspection, drift reaches scrap at final test; an inspection at the next step confines the loss to one lot" />
</div>

<!--
- In this illustration, a process drifts at step 400.
- Without in-line inspection, the fab discovers the problem at final test after weeks of additional work; inspection at step 401 confines the loss to one lot.
- The value of one yield point depends on die mix, wafer value, the yield mechanism, and customer contracts, so there is no universal dollar figure.
-->

---
class: visual-sequence paper-visual
title: "Inspection scale"
---

<div class="visual-sequence__frame">
  <img src="/diagrams/rendered/defect-scale.svg" alt="A nested zoom from a 300 millimeter wafer to one die, metal lines, and a 20 nanometer defect" />
</div>

<!--
- A 20-nanometre defect against a 300-millimetre wafer is a 15-million-fold scale difference; at golf-ball size, the wafer would span about 600 kilometres.
- High-throughput optical inspection locates candidate defects; targeted e-beam review classifies selected sites.
- Cycle time depends on the inspection recipe, sensitivity, coverage, and sampling plan, so there is no universal per-wafer duration.
-->

---

# KLA's process-control lead is unusually wide

<div class="grid grid-cols-[1.25fr_1fr] gap-12 mt-9 items-center">
<div class="text-center">
  <div class="text-8xl font-bold">56–58%</div>
  <div class="text-xl opacity-65 mt-2">process-control market share</div>
  <div class="text-3xl font-bold mt-8">~7× <span class="text-lg font-normal opacity-60">the nearest rival</span></div>
</div>
<div class="border-l border-slate-600 pl-10 space-y-7">
  <div><div class="text-4xl font-bold">$13.58B</div><div class="opacity-60">FY2026 revenue</div></div>
  <div><div class="text-4xl font-bold">61.3%</div><div class="opacity-60">FY2026 GAAP gross margin</div></div>
  <div class="text-lg opacity-75">Layer-specific recipes and defect baselines raise switching costs.</div>
</div>
</div>

<!--
- KLA controls about 56 to 58 percent of the semiconductor process-control market, about seven times its nearest rival.
- Fabs tune inspection recipes to each layer, process window, and known defect signature, so switching vendors requires new baselines and requalification.
- That embedded process knowledge supports KLA's margin profile and makes competitive capability difficult to scale.
-->
