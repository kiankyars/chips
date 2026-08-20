---
layout: default
sources: [research/nvidia.md, research/memory-hbm.md, research/packaging.md, research/tsmc.md, research/eda.md, research/asml.md, research/kla.md, research/equipment-dep-etch.md, research/materials.md]
---

# Scarcity alone does not explain gross margin

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
  <img src="/diagrams/rendered/replacement-horizon.svg" alt="Three categories distinguish shifting qualified capacity, scaling manufacturing, and recreating an interdependent technology stack" />
</div>

<!--
- Existing qualified volume can sometimes be reallocated without recreating the underlying technology.
- A new OSAT assembly-and-test route still requires package-specific processes, test programs, yield learning, and qualification; it is not equivalent to moving volume within an already qualified line.
- Scaling HBM, materials, or process-control capability adds qualification, yield learning, and manufacturing depth.
- EDA, CUDA, leading-edge foundries, and EUV depend on interlocking tools, suppliers, and accumulated know-how rather than one replaceable factory.
-->

---
class: visual-sequence
title: "Rack power extends the bottleneck beyond the chip"
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

<div class="visual-sequence__caption"><strong>One accelerator depends on the whole chain.</strong></div>

<!--
- The complete supply chain links supplier economics to the availability of qualified substitutes.
- Design software, advanced fabrication, lithography, materials, memory, and packaging each contribute to one accelerator.
- Scarcity can support pricing power, but it does not explain every difference in reported margin.
-->
