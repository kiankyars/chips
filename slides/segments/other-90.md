---
layout: section
---

<!-- SEGMENT
id: other-90
act: INTERLUDE — The Other 90%
tier: E            # ensemble sweep · 🔧 pressure valve (cut here first if over runtime)
angle: "The leading edge is the smallest part of the story: most chips by volume are cheap, decades-old, and invisible — and it was a thirty-cent one, not a $40,000 GPU, that halted the world's car factories."   # YOU OWN THIS LINE — rewrite it in your voice
runtime: ~5 min
status: draft
seeds: []
pays_off: []
stamps: []         # deliberately none — the honesty beat is that this layer has NO single-company chokepoint
diagrams: [map-manufacture]
sources: research/idm-analog.md
-->


# Most chips use mature process nodes

<div class="text-xl opacity-70 mt-2">Analog chips, microcontrollers, and power semiconductors</div>

![](/diagrams/rendered/map-manufacture.svg)

<!--
- Most semiconductors do not use the newest process node.
- Analog chips, microcontrollers, and power devices often favor mature processes because those nodes offer proven reliability, lower cost, and the stable high-voltage handling their applications require.
-->

---

# Analog and microcontrollers use mature nodes

<div class="grid grid-cols-3 gap-8 mt-10 text-center">
<div>
<div class="text-6xl font-bold">~$772B</div>
<div class="opacity-70 mt-2">whole chip market, 2025 <span class="opacity-50">(+22%)</span></div>
</div>
<div>
<div class="text-6xl font-bold">~$90B</div>
<div class="opacity-70 mt-2">analog <span class="opacity-50">(+7%)</span></div>
</div>
<div>
<div class="text-6xl font-bold">~$30B</div>
<div class="opacity-70 mt-2">microcontrollers</div>
</div>
</div>

<div class="text-base opacity-70 mt-12 text-center leading-relaxed">
These products use nodes introduced <b>15–40 years ago</b> and do not require EUV or leading-edge fab equipment.<br>
AI accelerators and memory drove most 2025 growth; analog grew 7%.
</div>

<!--
- The global chip market reached about $772 billion in 2025, while analog and microcontrollers accounted for about $90 billion and $30 billion.
- Many of these products use 15- to 40-year-old process nodes and need neither EUV nor the newest fab equipment.
-->

---
class: visual-sequence paper-visual
title: "The 2021 shortage"
---

<div class="visual-sequence__kicker">THE 2021 SHORTAGE</div>

<div class="visual-sequence__frame">
  <img src="/diagrams/rendered/auto-chip-shortage.png" alt="A stopped automobile assembly line with one tiny missing microcontroller enlarged in the foreground" />
</div>

<div class="visual-sequence__caption"><strong>A controller that costs cents</strong><span>can stop a $40,000 vehicle.</span></div>
<div class="visual-sequence__source">2021 · 7.7M fewer vehicles · ~$210B lost auto revenue</div>

<!--
- Automakers lost access to inexpensive mature-node controllers during the 2021 shortage.
- A missing chip worth cents could stop completion of a $40,000 vehicle.
- The industry produced about 7.7 million fewer vehicles and lost an estimated $210 billion in revenue.
-->

---
class: visual-sequence paper-visual
title: "Mature analog economics"
---

<div class="visual-sequence__kicker">MATURE ANALOG ECONOMICS</div>

<div class="visual-sequence__frame">
  <img src="/diagrams/rendered/slide-111-analog-300mm-economics-v2.png" alt="Equal-size analog dies shown on 200 and 300 millimeter wafers, with the larger wafer reducing unit cost" />
</div>

<div class="visual-sequence__caption"><strong>A 300 mm wafer cuts TI's unpackaged-chip cost by roughly 40%.</strong></div>
<div class="visual-sequence__source">Texas Instruments · mature analog · 180–45 nm</div>

<!--
- Texas Instruments builds mature analog chips on 300mm wafers across nodes from about 180nm to 45nm.
- The larger wafer fits more dies and reduces handling per chip, cutting the company's unpackaged-chip cost by about 40 percent compared with 200mm production.
-->

---
class: visual-sequence paper-visual
title: "The chips inside everything else"
---

<div class="visual-sequence__kicker">THE CHIPS INSIDE EVERYTHING ELSE</div>

<div class="visual-sequence__frame">
  <img src="/diagrams/rendered/analog-embedded-objects.png" alt="An EV inverter, radar sensor, contactless card, motor controller, server power supply, and precision instrument, each revealing a semiconductor module" />
</div>

<div class="visual-sequence__caption"><strong>These products use separate chips.</strong><span>They handle power, sensing, control, and conversion.</span></div>
<div class="visual-sequence__source">TI · Infineon · STMicro · NXP · Renesas · Analog Devices</div>

<!--
- Cars, factories, appliances, and medical equipment combine many specialized chips rather than relying on one processor.
- Analog chips measure real-world signals, power semiconductors control electricity, and microcontrollers run local tasks.
- TI, Infineon, STMicro, NXP, Renesas, and Analog Devices supply much of this market.
-->

---

# A processor still needs memory

<div class="text-3xl mt-16 leading-relaxed">
The fabricated GPU die needs nearby memory<br>
to keep its cores supplied with data.
</div>

<!--
- A processor performs work when memory delivers instructions and data.
- After fabrication, an accelerator still needs nearby high-bandwidth memory to keep thousands of compute units active.
- That requirement moves the supply chain from mature devices and logic into memory production.
-->
