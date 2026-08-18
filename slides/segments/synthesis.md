---
layout: default
---

<!-- SEGMENT
id: synthesis
act: VI — The Board Is the World
tier: —            # finale synthesis — no new player, re-reads the whole board
angle: "Follow the economics: hard-to-replace capabilities can support margins, but business mix, capital intensity, and cycles determine what companies report."   # PROPOSED — YOU OWN THIS LINE
runtime: ~4 min
status: draft
seeds: []
pays_off: []                       # the owns-no-factories ledger closes in `fabless-field`
stamps: []                         # no new stamps — board-7 is a callback, complete
diagrams: [map-full, journey-6, replacement-horizon, slide-153-additional-concentration-risks, chip-rack-grid]
sources: research/nvidia.md, research/memory-hbm.md, research/packaging.md, research/tsmc.md, research/eda.md, research/asml.md, research/kla.md, research/equipment-dep-etch.md, research/materials.md
-->

# Company gross margins require like-for-like scope

<div class="grid grid-cols-2 gap-6 mt-4 text-sm">
<div class="flex flex-col gap-2">
<div class="flex justify-between bg-green-700 text-white rounded px-3 py-2"><span><b>Synopsys</b> · FY25</span><span>~77%</span></div>
<div class="flex justify-between bg-green-600 text-white rounded px-3 py-2"><span><b>Nvidia</b> · FY26 GAAP</span><span>71.1%</span></div>
<div class="flex justify-between bg-lime-600 text-white rounded px-3 py-2"><span><b>KLA</b> · FY26 GAAP</span><span>61.3%</span></div>
<div class="flex justify-between bg-lime-600 text-white rounded px-3 py-2"><span><b>TSMC</b> · FY25</span><span>59.9%</span></div>
</div>
<div class="flex flex-col gap-2">
<div class="flex justify-between bg-yellow-600 text-white rounded px-3 py-2"><span><b>ASML</b> · FY25</span><span>52.8%</span></div>
<div class="flex justify-between bg-orange-700 text-white rounded px-3 py-2"><span><b>ASE</b> · FY25</span><span>17.7%</span></div>
<div class="flex justify-between bg-red-700 text-white rounded px-3 py-2"><span><b>Amkor</b> · FY25</span><span>~14%</span></div>
<div class="border border-gray-500 rounded px-3 py-2 opacity-70">Same metric; companywide scope. Fiscal calendars and accounting frameworks still differ.</div>
</div>
</div>

<div class="text-xs opacity-60 mt-5">Latest full fiscal year in the cited research packs · reported company gross margin · no product margins</div>

<!--
- These are companywide gross margins, not product margins; each row keeps its fiscal year visible.
- Software-heavy Synopsys and platform-driven Nvidia sit above equipment and foundry companies, while OSAT assembly sits lower.
- Hard-to-replace capabilities can support pricing, but mix, capital intensity, accounting, and the memory cycle prevent a one-variable ranking.
-->

---
class: visual-sequence paper-visual
title: "Replacement horizon"
---

<div class="visual-sequence__kicker">REPLACEMENT HORIZON</div>

<div class="visual-sequence__frame">
  <img src="/diagrams/rendered/replacement-horizon.svg" alt="Three categories distinguish shifting qualified capacity, scaling a manufacturing capability, and rebuilding a semiconductor ecosystem" />
</div>

<div class="visual-sequence__caption"><strong>Shifting capacity is not the same task</strong><span>as recreating a capability or ecosystem.</span></div>
<div class="visual-sequence__source">Qualitative synthesis · no forecast in years</div>

<!--
- Existing qualified capacity can sometimes be reallocated without recreating the underlying technology.
- Scaling HBM, materials, or process-control capability adds qualification, yield learning, and manufacturing depth.
- EDA, CUDA, leading-edge foundries, and EUV depend on interlocking ecosystems rather than one replaceable factory.
-->

---
class: visual-sequence paper-visual
title: "Beyond the seven-point board"
---

<div class="visual-sequence__kicker">BEYOND THE SEVEN-POINT BOARD</div>

<div class="visual-sequence__frame">
  <img src="/diagrams/rendered/slide-153-additional-concentration-risks.svg" alt="Three additional semiconductor supply concentrations in ABF film, silicon wafers, and automated test equipment" />
</div>

<div class="visual-sequence__caption"><strong>Three more inputs have two or fewer dominant suppliers.</strong></div>
<div class="visual-sequence__source">Ajinomoto · Shin-Etsu + SUMCO · Advantest + Teradyne</div>

<!--
- The seven-point list uses a strict threshold, but other concentrated inputs still deserve attention.
- Ajinomoto dominates advanced-package insulating film, Shin-Etsu and SUMCO lead silicon wafers, and Advantest and Teradyne dominate automated test equipment.
- These markets add risk even when they do not meet the Board's control-point criterion.
-->

---
class: visual-sequence
title: "From chip to system"
---

<div class="visual-sequence__kicker">FROM CHIP TO SYSTEM</div>

<div class="visual-sequence__frame">
  <img src="/diagrams/rendered/chip-rack-grid.png" alt="An advanced accelerator package connects to an AI server rack and then to a power substation and transmission grid" />
</div>

<div class="visual-sequence__caption"><strong>One rack draws about 135 kW.</strong><span>Compute density becomes an infrastructure constraint.</span></div>
<div class="visual-sequence__source">72 GPUs · roughly 132–140 kW</div>

<!--
- A 72-GPU rack draws about 132 to 140 kilowatts.
- At that density, accelerator deployment requires power distribution, cooling, and grid capacity alongside the chips themselves.
- Semiconductor constraints therefore extend into the building and electrical system that operate the hardware.
-->

---
layout: center
---

# The accelerator reaches the data center

![journey bar — complete](/diagrams/rendered/journey-6.svg)

<!--
- Packaging produces a tested accelerator, but deployment is complete only after system integration, power, cooling, and networking are in place.
- The installed rack closes the physical journey promised in the opening.
-->

---
layout: default
class: visual-sequence contain-visual
title: "The semiconductor supply chain"
---

<div class="visual-sequence__kicker">THE SEMICONDUCTOR SUPPLY CHAIN</div>

<div class="visual-sequence__frame">
  <img src="/diagrams/rendered/map-full.svg" alt="The full semiconductor supply chain from design through manufacturing, equipment, memory, packaging, and data centers" />
</div>

<div class="visual-sequence__caption"><strong>Hard-to-replace capabilities can support margins.</strong><span>Business mix, capital intensity, and cycles still matter.</span></div>
<div class="visual-sequence__source">Design · fabrication · equipment · materials · memory · packaging</div>

<!--
- The complete supply chain links supplier economics to the availability of qualified substitutes.
- Design software, advanced fabrication, lithography, materials, memory, and packaging each contribute to one accelerator.
- Scarcity can support pricing power, but it does not explain every difference in reported margin.
-->
