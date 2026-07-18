---
class: visual-sequence
transition: fade
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
BEATS:
- This is the current High-NA EXE platform at human scale: 14 metres long, 4 metres wide, 4 metres high and 150 tonnes.
- It is not a photograph enlarged for effect; the figure and the machine use the dimensions ASML publishes.
FACT AMMO:
- ASML, official High-NA specifications: https://www.linkedin.com/posts/asml_time-to-nerd-out-here-are-some-key-specs-activity-7158450887667924992-iSIA
-->

---
class: visual-sequence
transition: fade
---

<div class="visual-sequence__kicker">Reticle → field → wafer</div>

<div class="visual-sequence__frame">
  <img src="/diagrams/rendered/asml-reticle-field-wafer.svg" alt="A reticle pattern reduced four times to one exposure field that is stepped across a 300 millimetre wafer" />
</div>

<div class="visual-sequence__caption">The reticle image shrinks 4× to one 26 × 33 mm field, repeated across a 300 mm wafer.</div>
<div class="visual-sequence__source">ASML · TWINSCAN NXE:3400C and NXE:3600D</div>

<!--
BEATS:
- The reticle does not contain an entire wafer. Its pattern is reduced four times to one maximum 26 by 33 millimetre field.
- The scanner moves the wafer and repeats that exposure field across its 300 millimetre surface.
- The 132 by 104 millimetre reticle-pattern dimensions shown here follow directly from the published 4× reduction and 33 by 26 millimetre wafer field.
FACT AMMO:
- ASML, TWINSCAN NXE:3400C: https://www.asml.com/en/products/euv-lithography-systems/twinscan-nxe3400c
- ASML, TWINSCAN NXE:3600D: https://www.asml.com/en/products/euv-lithography-systems/twinscan-nxe-3600d
-->

---
class: visual-sequence
transition: fade
---

<div class="visual-sequence__kicker">One causal light path</div>

<div class="visual-sequence__frame">
  <img src="/diagrams/rendered/asml-euv-path.svg" alt="A laser strikes tin plasma and the resulting EUV light reflects from mirrors through a reticle to a wafer" />
</div>

<div class="visual-sequence__caption">Tin plasma emits 13.5 nm light. Mirrors carry the pattern to the wafer.</div>
<div class="visual-sequence__source">ASML · ZEISS SMT · EUV lithography principles</div>

<!--
BEATS:
- TRUMPF's carbon-dioxide laser first flattens a molten-tin droplet, then vaporizes it. The plasma emits 13.5 nanometre EUV light.
- Air and glass absorb EUV. The entire optical path therefore stays in vacuum and uses multilayer mirrors instead of lenses.
- Illumination optics shape the light at the reticle; projection optics reduce the reflected pattern onto photoresist on the wafer.
FACT AMMO:
- ASML, Light and lasers: https://www.asml.com/en/technology/lithography-principles/light-and-lasers
- ASML and Cymer, laser-produced plasma path: https://www.asml.com/en/news/press-releases/2009/asml-and-cymer-announce-advancement-in-euv-to-enable-manufacturing-of-integrated-circuits
- ZEISS SMT, EUV lithography: https://www.zeiss.com/semiconductor-manufacturing-technology/inspiring-technology/euv-lithography.html
-->

---
class: visual-sequence
transition: fade
---

<div class="visual-sequence__kicker">The machine is an integrated supply chain</div>

<div class="visual-sequence__frame">
  <img src="/diagrams/rendered/asml-supplier-modules.svg" alt="Critical EUV modules supplied by TRUMPF, Cymer, ZEISS and ASML inside one integrated system" />
</div>

<div class="visual-sequence__caption">ASML integrates TRUMPF's laser, Cymer's source and ZEISS optics into one scanner.</div>
<div class="visual-sequence__source">ASML · Making EUV: from lab to fab</div>

<!--
BEATS:
- ASML owns the system architecture and integration problem. It acquired Cymer, the San Diego source specialist, in 2013.
- TRUMPF supplies the high-power carbon-dioxide laser. ZEISS supplies the collector, illumination and projection optics.
- ASML also integrates reticle and wafer stages, sensors, control software and the calibrated vacuum system into one production tool.
FACT AMMO:
- ASML, Making EUV: from lab to fab: https://www.asml.com/en/news/stories/2022/making-euv-lab-to-fab
- ZEISS SMT, EUV lithography: https://www.zeiss.com/semiconductor-manufacturing-technology/inspiring-technology/euv-lithography.html
-->

---

# ASML and Zeiss are single-source dependencies

![chokepoint board — 5 of 7](/diagrams/rendered/board-5.svg)

<div class="text-sm opacity-60 mt-6 text-center">
ASML is the sole EUV scanner supplier; Zeiss is the sole supplier of its optics. Both enter the dependency map.
</div>

<!--
BEATS:
- Land the stamps: #4 ASML (EUV), #5 Zeiss (the optics inside it). This is the densest chokepoint moment in the whole episode — two single points of failure in one machine.
- Note the pattern for later: chokepoints nest. The board is starting to look less like a list and more like a map of leverage.
FACT AMMO:
- EUV optics are effectively single-sourced from Carl Zeiss SMT [research/asml.md §the machine].
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
BEATS:
- What a leading-edge monopoly looks like on a P&L: ~53% gross margin, a backlog measured in years, EUV growing ~40% on the AI buildout.
- The backlog is the tell — customers pre-commit billions because there's no alternative and no shelf. And the machines never really leave: installed-base service is a recurring annuity on top.
FACT AMMO:
- All figures: research/asml.md §FY2025 [1][2][3]. [VERIFY: refresh to latest 2026 quarter before recording — Q2 2026 due ~mid-July]
LINE THAT LANDS:
- "A monopoly on the leading edge looks like a 53% margin and a waiting list."
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
BEATS:
- The next generation is the most expensive production tool ever sold — how we push below 2nm. Whoever installs these first leads the next node.
- SEED multi-patterning: when you can't get (or can't buy) EUV, you fake finer features by exposing a layer several times. It works — but it's the expensive, low-yield workaround. This word comes back when we get to China and SMIC.
FACT AMMO:
- EXE:5200-class, ~$400M, NA 0.55 vs 0.33, <12 installed [research/asml.md §High-NA]. [VERIFY: throughput (~175–220 wph) and exact install count]
LINE THAT LANDS:
- "There's a way to make advanced chips without EUV. It's called doing it the hard way, and it's the story of China's whole chip program."
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
BEATS:
- Tie back to the angle — the cleanest chokepoint in the whole episode, now stamped twice.
- SEED the export license: don't go deep, just plant that this monopoly is also a weapon, and the geopolitics act will fire it.
- Closer / handoff: the wafer moves on down the tour — "ASML printed the pattern. Now something has to carve it."
FACT AMMO:
- EUV export ban to China; ASML is the West's single biggest point of leverage [research/asml.md §geopolitics].
LINE THAT LANDS:
- "Every chip-war headline you've ever read traces back to one company's export license."
-->
