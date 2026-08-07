---
layout: section
---

<!-- SEGMENT
id: materials
act: IV — The Fab Tour
tier: E            # ensemble sweep · 🔧 pressure valve (cut here before protagonists)
angle: "Everyone's afraid of the machines. But the machine you buy once; the resist, the gas, the slurry you pour in every single day — and the deeper down that supply you go, the more it belongs to Japan."   # YOU OWN THIS LINE — rewrite it in your voice
runtime: ~3 min
status: draft
seeds: []                                         # no ledger seed planted here
pays_off: []                                      # Japan-materials stamp was earned at life-of-a-wafer; DEEPENED here, not re-earned
stamps: []                                        # no NEW stamp — this segment thickens Stamp #3 (Japan cluster, board-3)
diagrams: [map-equipment, flow-strip, slide-104-material-shocks-substitution]
sources: research/materials.md
-->


# Japan's share of semiconductor materials

<div class="text-xl opacity-70 mt-3">Materials and tooling used across fab process steps</div>

![map: equipment lit](/diagrams/rendered/map-equipment.svg)

<!--
- Fabs buy major equipment at long intervals but consume photoresist, gases, slurries, and other materials every day.
- Japanese suppliers hold about half of the global semiconductor materials market, even though Japan's share of chip manufacturing has fallen from its 1980s peak.
-->

---

# What each step depends on

![flow strip](/diagrams/rendered/flow-strip.svg)

<div class="grid grid-cols-6 gap-4 mt-5 text-sm">
<div class="col-span-2 border-l-4 border-gray-400 pl-3">
<div class="font-bold">WAFER MAKING → silicon + quartz</div>
<div class="opacity-60">High-purity quartz forms crystal-growth crucibles</div>
</div>
<div class="col-span-2 border-l-4 border-gray-400 pl-3">
<div class="font-bold">COAT → photoresist</div>
<div class="opacity-60">Japanese suppliers dominate advanced resists</div>
</div>
<div class="col-span-2 border-l-4 border-gray-400 pl-3">
<div class="font-bold">EXPOSE → reticle + light source</div>
<div class="opacity-60">The reticle carries the pattern; DUV uses ArF or KrF gas mixtures</div>
</div>
<div class="col-span-3 border-l-4 border-gray-400 pl-3">
<div class="font-bold">ETCH / CLEAN → wet chemicals</div>
<div class="opacity-60">Electronic-grade HF is one input</div>
</div>
<div class="col-span-3 border-l-4 border-gray-400 pl-3">
<div class="font-bold">POLISH → slurry + pad</div>
<div class="opacity-60">Entegris slurry, DuPont pads</div>
</div>
</div>

<!--
- Spruce Pine is a leading source of high-purity quartz used in crucibles for growing single-crystal silicon.
- Coating consumes photoresist from a supplier set concentrated in Japan.
- Exposure projects a patterned reticle; DUV light sources use krypton-fluoride or argon-fluoride excimer-laser mixtures.
- Etch, cleaning, and polishing consume high-purity chemicals, slurries, and pads that fabs qualify to a specific process.
-->

---
class: visual-sequence paper-visual
title: "Material shocks"
---

<div class="visual-sequence__kicker">MATERIAL SHOCKS</div>

<div class="visual-sequence__frame">
  <img src="/diagrams/rendered/slide-104-material-shocks-substitution.svg" alt="Three material supply shocks followed by localization, supplier diversification, or stockpile use" />
</div>

<div class="visual-sequence__caption"><strong>Customers added local suppliers, second sources, or stockpiles.</strong></div>
<div class="visual-sequence__source">Japan–Korea · 2019 · Ukraine neon · 2022 · Spruce Pine quartz · 2024</div>

<!--
- Japan restricted three semiconductor materials sold to South Korea in 2019, and Korean manufacturers responded by qualifying local and third-country suppliers.
- Russia's invasion of Ukraine disrupted a large share of semiconductor-grade neon in 2022, prompting stockpiling and new capacity.
- Hurricane Helene closed Spruce Pine quartz mines in 2024, but they restarted within weeks.
- Each shock accelerated supplier diversification.
-->

---

# Economics Ledger: wafer prices combine many inputs

<div class="grid grid-cols-2 gap-10 mt-10 text-center">
<div class="border-2 border-gray-400 rounded-lg p-6">
<div class="text-5xl font-bold">~$150</div>
<div class="text-sm opacity-60 mt-2">industry estimate: blank 300 mm wafer</div>
</div>
<div class="border-2 border-gray-400 rounded-lg p-6">
<div class="text-5xl font-bold">~$19,500</div>
<div class="text-sm opacity-60 mt-2">industry estimate after 3 nm processing</div>
</div>
</div>

<div class="text-lg opacity-80 mt-10 text-center leading-relaxed">
The difference includes equipment depreciation, consumables, labor, overhead, and foundry margin.<br>
No public source allocates those costs per GB300.
</div>

<!--
- A blank 300 millimetre wafer costs about $150; industry estimates put processed 3nm wafers near $19,500, including equipment, materials, labor, overhead, and foundry margin.
- Public reporting does not separate those components for a specific accelerator.
-->

---
layout: center
---

# Most chips are made on mature process nodes

<div class="text-xl opacity-70 mt-4">Mature-node fabs still use ultrapure silicon and process chemicals, but they do not require EUV lithography.</div>

<div class="text-2xl mt-10 leading-relaxed">
Cars, appliances, and industrial systems<br>
use large numbers of mature-node chips.
</div>

<!--
- Most chips use mature nodes because analog, power, and embedded-control functions benefit from low cost, voltage handling, proven reliability, and long qualification histories.
- These fabs skip EUV, but they still depend on ultrapure silicon wafers, photoresist, specialty gases, wet chemicals, and polishing consumables.
-->
