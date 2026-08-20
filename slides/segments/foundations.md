---
layout: section
sources: [research/foundations.md]
---

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
- Both rely on transistor switches, so we now zoom into the common building block.
-->

---
class: visual-sequence paper-visual
title: "A transistor is a switch"
---

<div class="visual-sequence__kicker">A TRANSISTOR IS A SWITCH</div>

<div class="visual-sequence__frame">
  <img src="/diagrams/rendered/transistor-switch-v2.png" alt="Two simplified views of a transistor used as a switch: without a control voltage the current path is blocked; voltage at the gate opens the path" />
</div>

<div class="visual-sequence__caption"><strong>A small voltage at the gate</strong><span>turns the path for current on or off.</span></div>

<!--
- In digital logic, a transistor acts as a microscopic switch: it allows current through or blocks it.
- A small voltage at the gate is the control signal. It opens or closes the path without any mechanical part moving.
- Billions of these switches combine to store bits and perform calculations. That is the only device-level idea we need for the rest of the course.
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

# "2 nm" is a process name, not a physical measurement

<div class="flex flex-col items-center text-center mt-8">
<div class="text-[7.5rem] font-bold leading-none">2 nm</div>
<div class="text-4xl font-bold mt-3">≠ a 2 nm feature</div>

<div class="w-4/5 border-t border-gray-600 mt-9 pt-7 text-xl leading-relaxed">
The label bundles a <b>transistor architecture</b>, <b>wiring stack</b>,<br>
<b>design rules</b>, <b>materials</b>, and <b>libraries</b>.
</div>
</div>

<!--
- A node name is a process-family label; no single feature on the chip measures exactly two nanometres.
- The name bundles the transistor architecture, interconnect stack, process rules, materials, and design libraries.
- So the number alone cannot tell us how much better a design becomes. For that, engineers compare PPA.
-->

---

# PPA: three ways a design gets better

<div class="grid grid-cols-3 gap-10 mt-7 text-center">
<div>
<div class="text-3xl font-bold whitespace-nowrap">POWER ↓</div>
<div class="text-lg opacity-70 mt-3">watts under a<br>stated workload</div>
</div>
<div>
<div class="text-3xl font-bold whitespace-nowrap">PERFORMANCE ↑</div>
<div class="text-lg opacity-70 mt-3">throughput or latency,<br>not clock speed alone</div>
</div>
<div>
<div class="text-3xl font-bold whitespace-nowrap">AREA ↓</div>
<div class="text-lg opacity-70 mt-3">physical silicon<br>occupied</div>
</div>
</div>

<div class="border-t border-gray-600 mt-8 pt-6 text-center">
<div class="text-sm tracking-widest opacity-60">TSMC N2 VERSUS N3E</div>
<div class="grid grid-cols-[1fr_auto_1fr] gap-7 items-center mt-3">
<div><span class="text-3xl font-bold">10–15% faster</span><br><span class="opacity-70">at the same power</span></div>
<div class="text-2xl font-bold opacity-50">OR</div>
<div><span class="text-3xl font-bold">25–30% less power</span><br><span class="opacity-70">at the same speed</span></div>
</div>
<div class="text-xl mt-4"><b>&gt;15% greater chip density</b> on the separate area axis</div>
</div>

<!--
- PPA means power, performance, and area; it describes an implementation, not a node label.
- Power requires a stated workload; performance means useful throughput or latency; area is occupied silicon.
- Cell, voltage, and layout choices trade speed against leakage or area, so PPA is a frontier rather than one score.
- TSMC compares N2 with N3E at matched points: faster at equal power or lower power at equal speed; density is separate.
-->

---
class: visual-sequence
transition: fade
title: "Transistor geometry · 1 / 3"
---

<div class="visual-sequence__kicker">TRANSISTOR GEOMETRY · 1 / 3</div>

<div class="visual-sequence__frame">
  <img src="/diagrams/rendered/transistor-planar.svg" alt="Longitudinal nMOS cross-section with source at left, drain at right, an off gate above the channel, and a dashed electron-leakage path running left to right" />
</div>

<div class="visual-sequence__caption"><strong>Planar</strong><span>As source and drain move closer, off-state leakage rises.</span></div>
<div class="visual-sequence__source">Longitudinal nMOS cross-section · conceptual · not to scale</div>

<!--
- This view looks along the channel: source is left, drain is right, and electron flow is left to right. Conventional current points the other way.
- The gate does not pass charge through its oxide; its electric field controls the source-to-channel barrier from above.
- With the gate off, that barrier is not infinite. As channel length shrinks, the drain field reaches farther under the gate and lowers the barrier, so more electrons leak from source to drain.
- The next slide rotates the view 90 degrees. FinFETs and gate-all-around designs wrap more channel surfaces to restore electrostatic control.

[Sources]
- MIT OpenCourseWare, 6.720J Lecture 31, “The Short MOSFET” — https://ocw.mit.edu/courses/6-720j-integrated-microelectronic-devices-spring-2007/188675286579933499c7d5b6c9920681_lecture31.pdf
[/Sources]
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

<!--
- A leading-edge fab cost about $4 million in the early 1970s and more than $20 billion today, an increase of about 5,000 times.
- Rock’s law describes a doubling about every four years.
- As the investment rose, the number of companies operating at the leading edge fell from about 25 to three.
-->
