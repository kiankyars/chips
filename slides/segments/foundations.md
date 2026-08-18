---
layout: section
---

<!-- SEGMENT
id: foundations
act: I — The Impossible Object
tier: —                                            # concept segment, no player profiled
angle: "The chip I just held up shouldn't exist — and the fastest way to understand a $600-billion-a-year industry is to take that one impossible object apart until you hit the two exponentials that built it."   # YOU OWN THIS LINE — rewrite it in your voice
runtime: ~8 min
status: draft
seeds: [yield]                                     # one particle, one dead die → cashed in life-of-a-wafer, kla, intel, packaging
pays_off: []                                       # opener of the course; nothing cashes here
stamps: []                                         # no chokepoint proven yet
diagrams: [journey-1, transistor-switch-v2, density-clock-v2, transistor-planar, transistor-finfet, transistor-gaa, yield-defects]
sources: research/foundations.md
-->


# Inside the accelerator

<div class="text-xl opacity-70 mt-2">The package combines logic, memory, interconnect, and several distinct manufacturing processes.</div>

![journey](/diagrams/rendered/journey-1.svg)

<!--
- An accelerator starts as a design file.
- A foundry prints that design into logic dies, memory makers build high-bandwidth memory stacks, and a packager joins the dies and memory on one substrate.
- Manufacturers then install completed accelerators into liquid-cooled racks for the data center.
-->

---

# Logic and DRAM optimize different constraints

<div class="grid grid-cols-2 gap-12 mt-8">
<div class="pr-8 border-r border-gray-500">
<div class="text-sm opacity-60 tracking-widest">LOGIC DIE</div>
<div class="text-3xl font-bold mt-2">Timing-driven networks</div>
<div class="text-lg mt-5 leading-relaxed">Standard cells, SRAM, and custom datapaths are placed and routed to meet timing.</div>
<div class="text-sm opacity-70 mt-5">OPTIMIZES · speed · energy · interconnect</div>
</div>

<div>
<div class="text-sm opacity-60 tracking-widest">HBM DRAM DIE</div>
<div class="text-3xl font-bold mt-2">Density-driven arrays</div>
<div class="text-lg mt-5 leading-relaxed">Billions of 1T–1C cells share wordlines, bitlines, sense amplifiers, and refresh.</div>
<div class="text-sm opacity-70 mt-5">OPTIMIZES · bits/mm² · retention · yield</div>
</div>
</div>

<div class="text-center text-lg mt-9 opacity-80">Different dominant structures and processes; both rely on transistor switches.</div>

<!--
- Logic combines standard cells, SRAM, and custom datapaths. Placement and wiring must close timing across irregular networks.
- HBM repeats 1T–1C DRAM cells in dense arrays served by shared circuitry.
- Logic still contains SRAM; the distinction is dominant circuit structure and process optimization.
- Both rely on MOSFET switching, so we now zoom into the common device.
-->

---
class: visual-sequence paper-visual
title: "Voltage-controlled switch"
---

<div class="visual-sequence__kicker">VOLTAGE-CONTROLLED SWITCH</div>

<div class="visual-sequence__frame">
  <img src="/diagrams/rendered/transistor-switch-v2.png" alt="A simplified n-channel planar MOSFET shown off and on; gate voltage creates a conductive channel from source to drain" />
</div>

<div class="visual-sequence__caption"><strong>Voltage at the gate</strong><span>opens or closes a channel between source and drain.</span></div>
<div class="visual-sequence__source">Shown: n-channel MOSFET · CMOS pairs complementary n- and p-channel devices</div>

<!--
- This is a simplified n-channel planar MOSFET shown off and on. Voltage on the gate controls whether current can flow between source and drain.
- CMOS logic pairs n- and p-channel devices that switch with opposite polarity. This keeps static current low in stable states.
- Polarity is separate from the geometry change shown later. Carry forward one idea: this switch is repeated billions of times across a modern chip.
-->

---

# Transistor counts rose 146 million-fold

<div class="grid grid-cols-3 gap-6 mt-10 text-center">
<div>
<div class="text-5xl font-bold">2,300</div>
<div class="opacity-70 mt-2">Intel 4004 · 1971</div>
</div>
<div>
<div class="text-5xl font-bold">80B</div>
<div class="opacity-70 mt-2">Nvidia H100 · 2022</div>
</div>
<div>
<div class="text-5xl font-bold">~336B</div>
<div class="opacity-70 mt-2">Nvidia Rubin · 2026</div>
</div>
</div>

<div class="text-center text-2xl mt-12">Intel 4004 to Nvidia Rubin: <b>~146,000,000×</b> in 55 years</div>

<div class="text-sm opacity-50 mt-6 text-center">Cerebras WSE-3 (2024): 4 trillion transistors on one wafer-sized chip — ~50× an H100.</div>

<div class="text-center text-xl mt-7"><b>Two routes to scale:</b> denser processes or more silicon.</div>

<!--
- Counting one transistor per second would take 38 minutes for the first chip and more than 10,000 years for the second.
- Counts rose through denser processes and larger systems. Cerebras makes the second route explicit by using nearly an entire wafer.
- The next slide isolates the density route. First, we need to decode what a process name such as "2 nm" means.
-->

---

# "2 nm" is a generation label, not a physical measurement

<div class="grid grid-cols-[0.8fr_2fr] gap-12 mt-8 items-center">
<div class="text-center">
<div class="text-8xl font-bold leading-none">2 nm</div>
<div class="text-xl opacity-70 mt-4">process family</div>
<div class="text-sm opacity-60 mt-2">not a ruler reading</div>
</div>

<div>
<div class="text-lg opacity-70 text-center mb-5">TSMC N2 versus N3E</div>
<div class="grid grid-cols-3 gap-5 text-center">
<div><div class="text-4xl font-bold whitespace-nowrap">10–15%</div><div class="opacity-70 mt-2">faster<br>at the same power</div></div>
<div><div class="text-4xl font-bold whitespace-nowrap">25–30%</div><div class="opacity-70 mt-2">less power<br>at the same speed</div></div>
<div><div class="text-4xl font-bold whitespace-nowrap">&gt;15%</div><div class="opacity-70 mt-2">greater<br>chip density</div></div>
</div>
</div>
</div>

<div class="text-center text-xl mt-9">Node names identify the generation. PPA states what improved.</div>

<!--
- A node name identifies a process family, not a literal two-nanometre feature.
- Against N3E, TSMC reports 10–15% more speed at the same power or 25–30% less power at the same speed.
- Chip density rises more than 15%; speed and power are alternative operating points.
- Gains depend on the design. Next comes the GAA geometry behind N2.
-->

---
class: visual-sequence
transition: fade
title: "Transistor geometry · 1 / 3"
---

<div class="visual-sequence__kicker">TRANSISTOR GEOMETRY · 1 / 3</div>

<div class="visual-sequence__frame">
  <img src="/diagrams/rendered/transistor-planar.svg" alt="Cross-section of a planar transistor with its gate above a flat channel" />
</div>

<div class="visual-sequence__caption"><strong>Planar</strong><span>The gate controls the channel from one surface.</span></div>
<div class="visual-sequence__source">Planar MOSFET · one controlled surface</div>

<!--
- Amber is the silicon channel, blue is the gate, and cyan is the gate dielectric between them.
- A planar gate controls the channel from above.
- As planar gate lengths shrink, electrostatic control weakens and off-state leakage rises.
- FinFETs and gate-all-around designs control more of the channel surface.
-->

---
class: visual-sequence
transition: fade
title: "Transistor geometry · 2 / 3"
---

<div class="visual-sequence__kicker">TRANSISTOR GEOMETRY · 2 / 3</div>

<div class="visual-sequence__frame">
  <img src="/diagrams/rendered/transistor-finfet.svg" alt="Cross-section of a FinFET with its gate wrapped around the top and sides of a vertical silicon fin" />
</div>

<div class="visual-sequence__caption"><strong>FinFET / Tri-Gate</strong><span>Raise the channel into a fin; the gate controls the top and both sidewalls.</span></div>
<div class="visual-sequence__source">Intel 22 nm tri-gate · announced 2011 · shipped 2012</div>

<!--
- A FinFET raises the channel into a vertical fin so the gate controls the top and both sides, improving control over a short channel and reducing leakage.
- Intel announced its 22 nm FinFET in 2011 and shipped it in Ivy Bridge the following year.
-->

---
class: visual-sequence
transition: fade
title: "Transistor geometry · 3 / 3"
---

<div class="visual-sequence__kicker">TRANSISTOR GEOMETRY · 3 / 3</div>

<div class="visual-sequence__frame">
  <img src="/diagrams/rendered/transistor-gaa.svg" alt="Cross-section of a gate-all-around transistor with a gate surrounding three stacked silicon nanosheets" />
</div>

<div class="visual-sequence__caption"><strong>Nanosheet GAA</strong><span>Stack horizontal channels; the gate surrounds all four sides of each sheet.</span></div>
<div class="visual-sequence__source">Samsung 3 nm GAA · initial production 2022</div>

<!--
- A stacked-nanosheet GAA transistor places several horizontal silicon channels above the substrate. The gate wraps the top, bottom, and both sidewalls of each sheet.
- This tighter electrostatic control supports continued scaling, and sheet width gives designers another way to tune drive current.
- Samsung announced initial 3 nm production with nanosheet GAA in June 2022.
-->

---
class: visual-sequence paper-visual
title: "Yield"
---

<div class="visual-sequence__kicker">YIELD</div>

<div class="visual-sequence__frame">
  <img src="/diagrams/rendered/yield-defects.svg" alt="The same six defects distributed across grids of small and large dies, showing that larger dies lose more yield" />
</div>

<div class="visual-sequence__caption"><strong>At the same defect density,</strong><span>larger dies lose more yield.</span></div>

<!--
- A stray particle or process defect can ruin the die beneath it.
- Larger dies cover more wafer area, so they encounter defects more often and produce fewer working chips per wafer.
- Hold the size penalty here. Packaging later shows how designers work around it.
-->

---
class: yield-model
title: "The first-order yield model"
---

# One equation explains the size penalty

<div class="yield-model__equation"><var>Y</var> = e<sup>−<var>A</var>·<var>D</var>₀</sup></div>

<div class="yield-model__terms">
  <div><strong>Y</strong><span>working dies ÷ total dies</span></div>
  <div><strong>A</strong><span>area of one die</span></div>
  <div><strong>D₀</strong><span>killer defects per unit area</span></div>
</div>

<div class="yield-model__takeaway">Larger die or more defects → exponentially fewer working dies.</div>
<div class="yield-model__limit">Assumes defects land randomly and independently. Clustering needs a richer model.</div>

<!--
- Y is the probability that a die contains zero killer defects; e is Euler's number.
- A·D₀ is the expected number of killer defects per die. Larger area or higher defect density lowers yield exponentially.
- Poisson assumes random, independent defects. Real fabs may use clustered-defect models such as the negative binomial.
-->

---
class: visual-sequence paper-visual
title: "Dennard scaling"
---

<div class="visual-sequence__kicker">THE END OF DENNARD SCALING</div>

<div class="visual-sequence__frame">
  <img src="/diagrams/rendered/density-clock-v2.png" alt="Transistor count continues rising while clock speed plateaus around 2004, leading designers toward many parallel cores" />
</div>

<div class="visual-sequence__caption"><strong>Dennard scaling ended.</strong><span>Voltage stopped falling fast enough to keep power density flat.</span></div>
<div class="visual-sequence__source">The power wall · frequency scaling stalls · ~2004–06</div>

<!--
- Dennard scaling said smaller transistors could run faster while falling voltage kept power density roughly constant.
- By the mid-2000s, voltage scaling slowed and leakage rose; frequency increases ran into the power and thermal wall.
- Designers spent new transistor budgets on multiple cores and parallel accelerators, making GPUs increasingly important.
-->

---

# Leading-edge fab cost rose from $4M to more than $20B

<div class="mt-4 mb-2 text-sm opacity-60">Cost of one leading-edge fab &nbsp;·&nbsp; <span class="opacity-80">log scale — each step ≈ 10×</span></div>

<div class="flex flex-col gap-3 mt-3">

<div class="flex items-center gap-4">
  <div class="w-28 text-right text-sm opacity-70">early 1970s</div>
  <div class="flex-1 h-7 rounded" style="background: rgba(127,127,127,0.15)"><div class="h-7 rounded" style="width:13%; background:#4b93e6"></div></div>
  <div class="w-28 text-lg font-bold">~$4M</div>
</div>

<div class="flex items-center gap-4">
  <div class="w-28 text-right text-sm opacity-70">mid-1980s</div>
  <div class="flex-1 h-7 rounded" style="background: rgba(127,127,127,0.15)"><div class="h-7 rounded" style="width:44%; background:#4b93e6"></div></div>
  <div class="w-28 text-lg font-bold">~$100M</div>
</div>

<div class="flex items-center gap-4">
  <div class="w-28 text-right text-sm opacity-70">mid-1990s</div>
  <div class="flex-1 h-7 rounded" style="background: rgba(127,127,127,0.15)"><div class="h-7 rounded" style="width:67%; background:#4b93e6"></div></div>
  <div class="w-28 text-lg font-bold">~$1B</div>
</div>

<div class="flex items-center gap-4">
  <div class="w-28 text-right text-sm opacity-70">~2015</div>
  <div class="flex-1 h-7 rounded" style="background: rgba(127,127,127,0.15)"><div class="h-7 rounded" style="width:92%; background:#4b93e6"></div></div>
  <div class="w-28 text-lg font-bold">~$14B</div>
</div>

<div class="flex items-center gap-4">
  <div class="w-28 text-right text-sm opacity-70">2020s</div>
  <div class="flex-1 h-7 rounded" style="background: rgba(127,127,127,0.15)"><div class="h-7 rounded" style="width:96%; background:#4b93e6"></div></div>
  <div class="w-28 text-lg font-bold">$20B+</div>
</div>

</div>

<div class="grid grid-cols-2 gap-8 mt-8 text-center">
<div><div class="text-3xl font-bold">~5,000×</div><div class="text-sm opacity-60">fab cost, since the early 1970s</div></div>
<div><div class="text-3xl font-bold">~25 → 3</div><div class="text-sm opacity-60">companies at the leading edge (130nm → 2nm)</div></div>
</div>

<div class="text-sm opacity-60 mt-6 text-center">As fab costs rose, the number of leading-edge manufacturers fell from roughly 25 to three.</div>

<!--
- A leading-edge fab cost about $4 million in the early 1970s and more than $20 billion today, an increase of about 5,000 times.
- Rock’s law describes a doubling about every four years.
- As the investment rose, the number of companies operating at the leading edge fell from about 25 to three.
-->
