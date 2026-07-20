---
layout: section
---

<!-- SEGMENT
id: synthesis
act: VI — The Board Is the World
tier: —            # finale synthesis — no new player, re-reads the whole board
angle: "Follow the money and it pools in exactly one place: wherever a single company would take a decade or more to replace. Margin isn't a reward for making chips — it's the market pricing the depth of a moat in real time."   # PROPOSED — YOU OWN THIS LINE
runtime: ~5 min
status: draft
seeds: []
pays_off: [owns-no-factories]      # the Money Bar completes: every toll Nvidia pays is now labeled
stamps: []                         # no new stamps — board-7 is a callback, complete
diagrams: [map-full, journey-6, board-7]
sources: research/nvidia.md, research/memory-hbm.md, research/packaging.md, research/tsmc.md, research/eda.md, research/asml.md, research/kla.md, research/equipment-dep-etch.md, research/materials.md
-->


# Scarce alternatives support higher supplier margins

<div class="text-xl opacity-70 mt-2">Part 6 · Margins and replacement time across the supply chain</div>

<div class="grid grid-cols-2 gap-8 mt-8 items-center">
<div>

![industry map — fully lit](/diagrams/rendered/map-full.svg)

</div>
<div class="text-lg opacity-80 leading-relaxed">
The map and dependency inventory are complete.<br><br>
Supplier margins vary with substitution difficulty and capital intensity.
</div>
</div>

![journey bar — complete](/diagrams/rendered/journey-6.svg)

<!--
- The completed map connects supplier economics to substitution.
- Companies with few qualified alternatives can defend higher margins, while capital-intensive assembly businesses face more competition.
- Replacement time provides a practical way to compare those positions across the supply chain.
-->

---

# Estimated price and build cost of a GB300 GPU

<div class="text-sm opacity-60 mt-4">One GB300-class GPU · street price ~$50,000 (analyst estimate; Nvidia publishes no list price)</div>

<div class="mt-4">
  <div class="text-xs opacity-50 mb-1">ESTIMATED SELLING PRICE</div>
  <div class="flex w-full h-14 rounded overflow-hidden text-sm font-bold text-center">
    <div class="bg-green-600 flex items-center justify-center" style="width:75%">Nvidia gross margin ~75% · design · CUDA · networking</div>
    <div class="bg-gray-500 flex items-center justify-center" style="width:25%">~25% build cost</div>
  </div>
</div>

<div class="mt-6">
  <div class="text-xs opacity-50 mb-1">ESTIMATED BUILD COST (illustrative; only HBM's &gt;50% share is firmly sourced)</div>
  <div class="flex w-full h-14 rounded overflow-hidden text-xs font-bold text-center">
    <div class="bg-purple-600 flex items-center justify-center" style="width:52%">HBM memory &gt;50%<br>SK Hynix / Micron / Samsung</div>
    <div class="bg-blue-600 flex items-center justify-center" style="width:20%">TSMC logic dies</div>
    <div class="bg-blue-400 flex items-center justify-center text-black" style="width:13%">TSMC CoWoS</div>
    <div class="bg-amber-500 flex items-center justify-center text-black" style="width:8%">substrate</div>
    <div class="bg-gray-400 flex items-center justify-center text-black" style="width:7%">OSAT + test</div>
  </div>
</div>

<div class="text-xs opacity-60 mt-6 leading-relaxed">
<b>Costs embedded in supplier prices:</b> EDA development (~$0.5–0.7B per leading-edge chip, spread over the run) · ASML and other fab equipment · the <b>~$150 blank wafer</b>.
</div>

<!--
- Analysts estimate a GB300-class GPU sells for about $50,000, though Nvidia publishes no list price.
- Nvidia retains most of that value through design, software, networking, and scarcity.
- Physical build cost forms a smaller share, with HBM accounting for more than half of the estimated bill of materials.
- The remaining split is illustrative.
-->

---

# Supplier margins across the chain

<div class="grid grid-cols-2 gap-6 mt-4 text-sm">
<div class="flex flex-col gap-2">
<div class="flex justify-between bg-green-700 text-white rounded px-3 py-2"><span><b>EDA</b> — Cadence ~86% / Synopsys ~77%</span><span class="opacity-80">software licensing</span></div>
<div class="flex justify-between bg-green-600 text-white rounded px-3 py-2"><span><b>Memory*</b> — Micron ~85% GM</span><span class="opacity-80">*supercycle peak</span></div>
<div class="flex justify-between bg-green-600 text-white rounded px-3 py-2"><span><b>Nvidia</b> — ~75%</span><span class="opacity-80">design and software</span></div>
<div class="flex justify-between bg-lime-600 text-white rounded px-3 py-2"><span><b>KLA</b> — ~62%</span><span class="opacity-80">56–58% process-control share</span></div>
<div class="flex justify-between bg-lime-600 text-white rounded px-3 py-2"><span><b>TSMC</b> — ~60% (66% Q1'26)</span><span class="opacity-80">72.3% foundry share</span></div>
</div>
<div class="flex flex-col gap-2">
<div class="flex justify-between bg-yellow-600 text-white rounded px-3 py-2"><span><b>ASML</b> — ~53%</span><span class="opacity-80">100% EUV share</span></div>
<div class="flex justify-between bg-yellow-600 text-white rounded px-3 py-2"><span><b>Equipment</b> — AMAT ~49% / Lam ~50%</span><span class="opacity-80">specialized equipment</span></div>
<div class="flex justify-between bg-orange-600 text-white rounded px-3 py-2"><span><b>Test</b> — Advantest ~44% op</span><span class="opacity-80">ATE duopoly</span></div>
<div class="flex justify-between bg-red-700 text-white rounded px-3 py-2"><span><b>OSAT</b> — ASE ~18% / Amkor ~14%</span><span class="opacity-80">assembly and test</span></div>
</div>
</div>

<div class="text-xs opacity-60 mt-5">Gross margins unless marked, as of Q2 2026. Higher margins generally coincide with fewer substitutes.</div>

<!--
- EDA vendors keep gross margins near 80 percent or more, while Nvidia, KLA, TSMC, and ASML also retain large shares of revenue.
- OSAT margins sit much lower because customers have more assembly options.
- Memory appears near the top during the current price cycle, but its margins can fall when new capacity creates oversupply.
-->

---
class: visual-sequence paper-visual
title: "Replacement horizon"
---

<div class="visual-sequence__kicker">REPLACEMENT HORIZON</div>

<div class="visual-sequence__frame">
  <img src="/diagrams/rendered/replacement-horizon.svg" alt="A zero-to-twenty-year horizon comparing estimated time to replace critical semiconductor suppliers" />
</div>

<div class="visual-sequence__caption"><strong>ASML and Zeiss take longest to replace.</strong><span>OSAT capacity can be added sooner.</span></div>
<div class="visual-sequence__source">Editorial ranges · not forecast completion dates</div>

<!--
- Replacing ASML and Zeiss requires rebuilding the optics and light-source supply chains around the scanner.
- Adding OSAT capacity needs less specialized knowledge.
- These ranges compare relative difficulty rather than predict completion dates.
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
- These markets add risk even when they do not meet the same replacement-time threshold.
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
layout: default
class: visual-sequence contain-visual
title: "The semiconductor supply chain"
---

<div class="visual-sequence__kicker">THE SEMICONDUCTOR SUPPLY CHAIN</div>

<div class="visual-sequence__frame">
  <img src="/diagrams/rendered/map-full.svg" alt="The full semiconductor supply chain from design through manufacturing, equipment, memory, packaging, and data centers" />
</div>

<div class="visual-sequence__caption"><strong>The highest-margin suppliers are the hardest to replace.</strong></div>
<div class="visual-sequence__source">Design · fabrication · equipment · materials · memory · packaging</div>

<!--
- The complete supply chain shows a consistent relationship between supplier margins and available substitutes.
- Design software, advanced fabrication, lithography, materials, memory, and packaging each contribute to one accelerator.
- Suppliers gain pricing power when customers cannot replace their process or capacity within a useful time.
-->
