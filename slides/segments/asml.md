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

<div class="visual-sequence__caption">High-NA EXE platform · more than 150 tonnes at Intel's first installation</div>
<div class="visual-sequence__source">ASML · Intel High-NA EUV press kit</div>

<!--
- The installed High-NA system weighs more than 150 metric tons; Intel received its first one in 43 freight containers.
- Inside are the light source, vacuum chambers, mirror train, and precision stages needed to keep a moving wafer aligned at nanometre scale.
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
- A reticle holds the pattern for one exposure field, and projection optics shrink the image to one quarter of its linear size.
- Four-to-one reduction turns a 104 by 132 millimetre reticle pattern into a field up to 26 by 33 millimetres, repeated across the wafer.
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
- TRUMPF's carbon-dioxide laser flattens a molten tin droplet and then vaporizes it, creating plasma that emits 13.5 nanometre light.
- Air and glass absorb EUV, so the scanner keeps the light path in a vacuum and uses mirrors.
- Those mirrors shape the light at the reticle and project the reduced pattern onto the wafer.
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
- ASML integrates the scanner rather than building every critical module itself.
- TRUMPF supplies the high-power laser, ASML's Cymer unit the EUV source, and ZEISS the optics; ASML integrates them with stages, sensors, software, and a calibrated vacuum.
-->

---

# ASML and ZEISS form a nested dependency

![chokepoint board — 5 of 7](/diagrams/rendered/board-5.svg)

<div class="text-sm opacity-60 mt-6 text-center">
ASML is the sole EUV scanner supplier; ZEISS is ASML's sole supplier of critical lithography optics. Both enter the dependency map.
</div>

<!--
- ASML is the world's only production EUV scanner manufacturer, and its annual report identifies ZEISS as its sole supplier of critical lithography optics.
- A leading-edge fab therefore depends on one single-source relationship nested inside another; losing either would stop new EUV capacity.
-->

---

# ASML — Q2 2026 snapshot

<div class="grid grid-cols-2 gap-x-12 gap-y-6 mt-8 text-lg">

<div><b>€9.3B</b> — Q2 total net sales</div>
<div><b>€2.9B</b> — Q2 net income</div>
<div><b>54.0%</b> — Q2 gross margin</div>
<div><b>86</b> — new lithography systems sold <span class="opacity-50">all types</span></div>
<div><b>€43–45B</b> — FY2026 sales outlook</div>
<div><b>≈65</b> — planned 2026 low-NA EUV capacity</div>

</div>

<div class="text-xs opacity-40 text-right mt-4">Q2 actuals · FY2026 company outlook · July 15, 2026</div>

<!--
- Q2 sales were 9.3 billion euros at a 54 percent gross margin; the 86 systems sold span ASML's full lithography portfolio, not EUV alone.
- ASML raised its full-year outlook to 43 to 45 billion euros and described first-half order intake as extremely strong.
- Management says 2027 low-NA EUV capacity is nearly covered by orders. That is order coverage, not a newly disclosed backlog figure.
-->

---

# High-NA EUV has entered production — on selected layers

<div class="grid grid-cols-3 gap-6 mt-10 text-center">
<div>
<div class="text-6xl font-bold">0.55</div>
<div class="opacity-70 mt-2">numerical aperture</div>
</div>
<div>
<div class="text-6xl font-bold">8 nm</div>
<div class="opacity-70 mt-2">EXE platform resolution</div>
</div>
<div>
<div class="text-6xl font-bold">175</div>
<div class="opacity-70 mt-2">wafers/hour · EXE:5200B</div>
</div>
</div>

<div class="text-sm opacity-60 mt-10 text-center">
Intel now ships a subset of Panther Lake made with High-NA on selected 18A layers.<br>
<b>A production milestone—not an industry-wide switchover.</b>
</div>

<!--
- High-NA raises numerical aperture from 0.33 to 0.55; ASML specifies 8-nanometre resolution and 175 wafers per hour for the EXE:5200B.
- In July 2026, Intel said selected 18A layers were dual-qualified on High-NA at yields matched to its NXE process.
- The scope matters: only a subset of Panther Lake and selected layers use High-NA. This is production evidence, not wholesale replacement of low-NA EUV.
-->

---

# Export licenses gate where controlled ASML tools can ship

<div class="text-3xl mt-12 leading-relaxed">
Dutch and US rules determine whether controlled ASML tools and services can ship to specific destinations and customers.
</div>

<div class="text-sm opacity-60 mt-10">
Dutch rules require authorization for covered advanced equipment shipped outside the EU; US rules add entity- and fab-specific restrictions. This is targeted licensing, not a ban on every ASML sale.
</div>

<!--
- ASML needs export licenses for EUV, specific DUV immersion systems, and other controlled products. Dutch authorities assess covered exports outside the EU case by case.
- US rules add restrictions involving particular Chinese entities and advanced-node fabs. The policy lever is targeted licensing, not a blanket ban on every ASML product.
- Because ASML has no production EUV competitor, a license decision can still determine access to the equipment needed for leading-edge production.
-->
