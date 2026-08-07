---
layout: section
---

<!-- SEGMENT
id: fabless-field
act: II — The Blueprint
tier: C            # C cards (ensemble card montage; pressure valve 🔧)
angle: "Design is a crowd sport now — dozens of companies draw world-changing chips — precisely because manufacturing collapsed to almost nobody. Every blueprint in this segment ends the same way: on a flight to one island."   # YOU OWN THIS LINE — rewrite it in your voice
runtime: ~3 min
status: draft
seeds: [apple-iou]                    # Apple's node buyouts planted here → cashed in tsmc
pays_off: [owns-no-factories]         # nvidia's "owns no factories" is cashed in this act-end Economics Ledger
stamps: []                            # cards earn no chokepoint stamps
diagrams: [map-design, slide-047-fabless-designers]
sources: research/fabless-field.md, research/nvidia.md
-->


# Major fabless chip designers

<div class="text-xl opacity-70 mt-2">AMD, Apple, Qualcomm, Broadcom, Marvell, and MediaTek also design chips without owning leading-edge fabs.</div>

![map — design lit](/diagrams/rendered/map-design.svg)

<div class="text-sm opacity-60 mt-4">
Design is distributed across many firms; leading-edge manufacturing is concentrated among three.
</div>

<!--
- AMD, Apple, Qualcomm, Broadcom, Marvell, MediaTek, and Nvidia design advanced chips without owning leading-edge fabs because EDA tools, licensable instruction sets, and foundry access let many firms compete.
- Manufacturing remains far more concentrated, with three companies at the leading edge.
-->

---
class: visual-sequence paper-visual
title: "Fabless designers"
---

<div class="visual-sequence__kicker">FABLESS DESIGNERS</div>

<div class="visual-sequence__frame">
  <img src="/diagrams/rendered/slide-047-fabless-designers.svg" alt="Six fabless design companies sending completed layout files to one outside foundry" />
</div>

<div class="visual-sequence__caption"><strong>Six fabless designers send layout files to outside foundries.</strong></div>
<div class="visual-sequence__source">AMD · Apple · Qualcomm · Broadcom · Marvell · MediaTek</div>

<!--
- These six companies use the fabless model in different markets.
- AMD builds CPUs and accelerators; Apple its own chips; Qualcomm mobile silicon; Broadcom and Marvell networking and custom silicon; MediaTek high-volume mobile chips.
- Each sends completed layouts to an outside foundry.
-->

---

# Economics Ledger: fabless does not mean costless

<div class="grid grid-cols-2 gap-6 mt-6 text-center">
<div class="border-2 border-gray-400 rounded-lg p-4">
<div class="text-4xl font-bold">$3.7–4.0M</div>
<div class="text-sm opacity-60 mt-2">third-party GB300 NVL72 full-rack estimate</div>
<div class="text-xs opacity-45 mt-2">72 GPUs · 36 CPUs · fabric, cooling, and power delivery</div>
</div>
<div class="border-2 border-green-500 rounded-lg p-4">
<div class="text-4xl font-bold">71.1%</div>
<div class="text-sm opacity-60 mt-2">Nvidia FY26 GAAP gross margin</div>
<div class="text-xs opacity-45 mt-2">companywide, not a GB300 product margin</div>
</div>
</div>

<div class="grid grid-cols-2 gap-6 mt-6 text-sm">
<div class="border-l-4 border-blue-400 pl-4">
<b>Disclosed relationships</b><br>
TSMC fabricates logic and provides CoWoS; SK hynix, Micron, or Samsung supplies HBM.
</div>
<div class="border-l-4 border-gray-500 pl-4">
<b>Not disclosed per GB300</b><br>
Recognized revenue, gross profit, foundry cost, memory cost, and packaging cost.
</div>
</div>

<!--
- The $3.7 million to $4.0 million figure is a third-party estimate for a complete GB300 NVL72 rack, not Nvidia's disclosed price or recognized revenue.
- The 71.1 percent figure is Nvidia's companywide fiscal-2026 GAAP gross margin, not a GB300 product margin.
- Public filings identify major manufacturing relationships but do not allocate supplier costs or gross profit to one accelerator.
-->

---
layout: center
---

# Fabless designers depend on outside manufacturing

<div class="text-lg opacity-80 mt-6 leading-relaxed max-w-2xl">
These companies send completed chip layouts to foundries for manufacturing.
</div>

<div class="text-base opacity-60 mt-8">
For leading-edge production, many of these designs<br>
go to TSMC in Taiwan.
</div>

<!--
- A foundry must reserve wafer starts before a finished layout becomes a product.
- Many independent designers compete for capacity from a small group of advanced manufacturers, with TSMC receiving much of the leading-edge work.
- That dependence shifts bargaining power from the crowded design layer toward the fabs.
-->
