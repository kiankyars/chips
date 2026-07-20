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
pays_off: [owns-no-factories]         # nvidia's "owns no factories" cashed at this act-end Money Bar
stamps: []                            # cards earn no chokepoint stamps
diagrams: [map-design]                # Money Bar is inline HTML per BUILDING §4
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

# Illustrative economics of a GB300-class GPU

<div class="text-sm opacity-70 mb-3">One GB300-class accelerator · ~$50k street price per GPU <span class="opacity-50">(analyst estimate — Nvidia publishes no list price)</span></div>

<div class="w-full border-2 border-gray-400 rounded-lg overflow-hidden mt-2">
  <div class="flex h-16 text-white text-sm font-bold">
<div class="bg-green-700 flex items-center justify-center" style="width:75%">Nvidia gross profit at current company margin: ~$37k</div>
<div class="bg-gray-500 flex items-center justify-center" style="width:25%">estimated cost of revenue: ~$13k</div>
  </div>
</div>

<div class="grid grid-cols-2 gap-8 mt-6 text-sm">
<div>

**Reported economics**
- Nvidia company gross margin: **~75%**

</div>
<div>

**Major downstream suppliers**
- TSMC manufacturing · HBM memory · CoWoS packaging

</div>
</div>

<div class="text-xs opacity-40 mt-6">This is not a bill of materials. Nvidia does not disclose per-GPU supplier costs, and EDA and Arm costs are not public per-unit line items.</div>

<!--
- A GB300-class GPU may sell for about $50,000, though Nvidia publishes no list price.
- Applying Nvidia’s companywide gross margin gives about $37,000 of gross profit and $13,000 of cost of revenue.
- TSMC manufacturing, HBM memory, and advanced packaging make up major parts of the supplier side, but Nvidia does not disclose a product-level breakdown.
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
