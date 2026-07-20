---
class: visual-sequence
transition: fade
title: "EUV · physical scale"
---

<!-- SEGMENT
id: asml
act: IV — The Fab Tour
tier: P
angle: "ASML is the sole supplier of production EUV scanners and integrates critical modules from ZEISS, TRUMPF, and Cymer."
runtime: ~8 min
status: draft
seeds: [multi-patterning, euv-export-license]
pays_off: []
stamps: [asml, zeiss]
diagrams: [asml-scanner-scale, asml-reticle-field-wafer, asml-euv-path, asml-supplier-modules, board-5]
sources: research/asml.md
-->


<div class="visual-sequence__kicker">EUV · physical scale</div>

<div class="visual-sequence__frame">
  <img src="/diagrams/rendered/asml-scanner-scale.svg" alt="A High-NA EUV scanner drawn beside a person, with its dimensions marked" />
</div>

<div class="visual-sequence__caption">14 m × 4 m × 4 m · 150 tonnes · High-NA EXE platform</div>
<div class="visual-sequence__source">ASML · High-NA EUV system specifications</div>

<!--
ASML's High-NA EXE platform stretches 14 metres, about the length of a semi-trailer. That enclosure contains the light source, vacuum chambers, mirror train, and precision stages needed to keep a moving wafer aligned at nanometre scale.
-->

---
class: visual-sequence
transition: fade
title: "Reticle → field → wafer"
---

<div class="visual-sequence__kicker">Reticle → field → wafer</div>

<div class="visual-sequence__frame">
  <img src="/diagrams/rendered/asml-reticle-field-wafer.svg" alt="A reticle pattern reduced four times to one exposure field that is stepped across a 300 millimetre wafer" />
</div>

<div class="visual-sequence__caption">The reticle image shrinks 4× to one 26 × 33 mm field, repeated across a 300 mm wafer.</div>
<div class="visual-sequence__source">ASML · TWINSCAN NXE:3400C and NXE:3600D</div>

<!--
A reticle holds the pattern for one exposure field, and projection optics shrink the image to one quarter of its linear size. This turns a 104 by 132 millimetre reticle pattern into a field up to 26 by 33 millimetres, which the scanner repeats across the wafer.
-->

---
class: visual-sequence
transition: fade
title: "One causal light path"
---

<div class="visual-sequence__kicker">One causal light path</div>

<div class="visual-sequence__frame">
  <img src="/diagrams/rendered/asml-euv-path.svg" alt="A laser strikes tin plasma and the resulting EUV light reflects from mirrors through a reticle to a wafer" />
</div>

<div class="visual-sequence__caption">Tin plasma emits 13.5 nm light. Mirrors carry the pattern to the wafer.</div>
<div class="visual-sequence__source">ASML · ZEISS SMT · EUV lithography principles</div>

<!--
TRUMPF's carbon-dioxide laser flattens a molten tin droplet and then vaporizes it, creating plasma that emits 13.5 nanometre light. Air and glass absorb EUV, so the scanner keeps the light path in a vacuum and uses mirrors. Those mirrors shape the light at the reticle and project the reduced pattern onto the wafer.
-->

---
class: visual-sequence
transition: fade
title: "The machine is an integrated supply chain"
---

<div class="visual-sequence__kicker">The machine is an integrated supply chain</div>

<div class="visual-sequence__frame">
  <img src="/diagrams/rendered/asml-supplier-modules.svg" alt="Critical EUV modules supplied by TRUMPF, Cymer, ZEISS and ASML inside one integrated system" />
</div>

<div class="visual-sequence__caption">ASML integrates TRUMPF's laser, Cymer's source and ZEISS optics into one scanner.</div>
<div class="visual-sequence__source">ASML · Making EUV: from lab to fab</div>

<!--
ASML integrates the scanner rather than building every critical module itself. TRUMPF supplies the high-power laser, ASML's Cymer unit supplies the EUV source, and ZEISS supplies the optics, while ASML combines them with wafer stages, sensors, control software, and a calibrated vacuum system.
-->

---

# ASML and Zeiss are single-source dependencies

![chokepoint board — 5 of 7](/diagrams/rendered/board-5.svg)

<div class="text-sm opacity-60 mt-6 text-center">
ASML is the sole EUV scanner supplier; Zeiss is the sole supplier of its optics. Both enter the dependency map.
</div>

<!--
ASML has a monopoly on production EUV scanners, and ZEISS has a monopoly on the optical system inside them. A leading-edge fab depends on both single-source suppliers within the same machine, so losing either would stop new EUV capacity.
-->

---

# ASML financials — FY2025

<div class="grid grid-cols-2 gap-x-12 gap-y-6 mt-8 text-lg">

<div><b>€32.7B</b> — total net sales <span class="opacity-50">(+16% YoY)</span></div>
<div><b>€9.6B</b> — net income</div>
<div><b>52.8%</b> — gross margin</div>
<div><b>€28.0B</b> — FY2025 net bookings</div>
<div><b>48</b> — EUV systems shipped</div>
<div><b>€11.6B</b> — EUV sales <span class="opacity-50">(+39%)</span></div>

</div>

<div class="text-xs opacity-40 text-right mt-4">FY2025 results</div>

<!--
An EUV scanner takes months to assemble, calibrate, and install, while ZEISS optics and source modules limit how fast ASML can add capacity. ASML shipped 48 EUV systems in FY2025 while taking €28 billion in bookings. Customers order years ahead because annual supply remains constrained.
-->

---

# High-NA EUV raises numerical aperture to 0.55

<div class="grid grid-cols-3 gap-6 mt-10 text-center">
<div>
<div class="text-6xl font-bold">$400M</div>
<div class="opacity-70 mt-2">per EXE:5200-class tool</div>
</div>
<div>
<div class="text-6xl font-bold">0.55</div>
<div class="opacity-70 mt-2">numerical aperture (vs 0.33)</div>
</div>
<div>
<div class="text-6xl font-bold">&lt;12</div>
<div class="opacity-70 mt-2">installed worldwide</div>
</div>
</div>

<div class="text-sm opacity-60 mt-10 text-center">
Higher NA prints smaller features in one exposure. <b>Multi-patterning</b> uses several masks for one layer, adding process time, cost, and yield risk.
</div>

<!--
High-NA EUV raises numerical aperture from 0.33 to 0.55, allowing smaller features in one exposure. Each EXE:5200-class tool costs about $400 million, and fabs have installed fewer than twelve. Without that resolution, a fab can use several masks for one layer, adding process steps, cost, and yield risk.
-->

---

# Export licenses restrict where ASML can ship EUV tools

<div class="text-3xl mt-12 leading-relaxed">
Dutch export licenses determine which customers can buy ASML's EUV systems.
</div>

<div class="text-sm opacity-60 mt-10">
ASML cannot sell EUV systems to China under Dutch export controls coordinated with the United States. Those rules are central to current chip policy.
</div>

<!--
ASML needs Dutch government licenses to export its EUV systems, and the Netherlands blocks sales to China in coordination with the United States. Because ASML has no production competitor, one export license can determine whether a country can buy the equipment needed for leading-edge chip production.
-->
