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
diagrams: [journey-1]                              # structural only; teardown visuals + cost curve are inline HTML
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
class: visual-sequence paper-visual
title: "The basic switch"
---

<div class="visual-sequence__kicker">THE BASIC SWITCH</div>

<div class="visual-sequence__frame">
  <img src="/diagrams/rendered/transistor-switch-v2.png" alt="An n-type MOSFET shown off and on; positive gate voltage opens an electron channel from source to drain" />
</div>

<div class="visual-sequence__caption"><strong>n-type</strong><span>Positive gate voltage opens the channel; p-type uses the opposite polarity.</span></div>
<div class="visual-sequence__source">n-type: electrons · p-type: holes · CMOS pairs both</div>

<!--
- This diagram shows an n-type MOSFET: positive gate-to-source voltage creates an electron channel between source and drain.
- A p-type MOSFET uses holes as carriers and switches with the opposite gate polarity.
- CMOS pairs both types so one path is normally off, reducing static current.
- Modern chips repeat these complementary switches hundreds of billions of times.
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

<!--
- Counting one transistor per second would take 38 minutes for the first chip and more than 10,000 years for the second.
- That 146-million-fold increase gives designers enough circuitry for parallel arithmetic, memory control, and data movement on one accelerator package.
-->

---

# Logic computes; memory stores data

<div class="grid grid-cols-2 gap-8 mt-8">

<div class="border-2 border-gray-400 rounded-lg p-6">
<div class="text-3xl font-bold">LOGIC</div>
<div class="opacity-70 mt-1">compute circuitry</div>
<div class="mt-4 text-sm leading-relaxed">
Billions of custom switches perform arithmetic and control. This is the GPU die itself.
</div>
</div>

<div class="border-2 border-gray-400 rounded-lg p-6">
<div class="text-3xl font-bold">MEMORY</div>
<div class="opacity-70 mt-1">repeated storage cells</div>
<div class="mt-4 text-sm leading-relaxed">
A regular grid of identical cells stores data. Different companies fabricate it and place it beside the logic dies.
</div>
</div>

</div>

<div class="text-sm opacity-60 mt-8 text-center">Both use silicon, but they require different circuit structures, processes, and suppliers.</div>

<!--
- Logic uses custom transistor networks to perform arithmetic and control, while memory uses regular arrays of cells to retain data.
- An accelerator needs both, but companies fabricate them with different processes and place the memory beside the logic dies.
-->

---

# "2 nm" names a process generation, not a dimension

<div class="text-center text-2xl mt-6">On a "3 nm" process, the name does not specify a <b>3 nm feature.</b></div>

<div class="grid grid-cols-3 gap-6 mt-10 text-center">
<div>
<div class="text-5xl font-bold">~45 nm</div>
<div class="opacity-70 mt-2">real gate pitch (N3)</div>
</div>
<div>
<div class="text-5xl font-bold">~23 nm</div>
<div class="opacity-70 mt-2">tightest metal pitch (N3)</div>
</div>
<div>
<div class="text-5xl font-bold">PPA</div>
<div class="opacity-70 mt-2">power · performance · area · the design targets for each generation</div>
</div>
</div>

<div class="text-sm opacity-60 mt-10 text-center">Node names stopped matching a physical dimension in the late 1990s. They now distinguish process generations.</div>

<!--
- Node names identify process generations: TSMC N3, for example, has a gate pitch near 45 nm and a tightest metal pitch near 23 nm.
- Each generation targets better power, performance, and area, though gains depend on the design.
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

<div class="visual-sequence__caption"><strong>Planar</strong><span>The gate controls the channel from above.</span></div>
<div class="visual-sequence__source">Leading-edge transition to FinFETs began · 2011</div>

<!--
- Amber is the channel, blue is the gate, and cyan marks their interface.
- A planar gate controls the channel from above.
- As the channel shrinks, current leaks when the switch is off.
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

<div class="visual-sequence__caption"><strong>FinFET</strong><span>Raise the channel; the gate now controls three sides.</span></div>
<div class="visual-sequence__source">Intel 22nm announcement · 2011</div>

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

<div class="visual-sequence__caption"><strong>Gate-all-around</strong><span>Split the fin into sheets; the gate surrounds every channel.</span></div>
<div class="visual-sequence__source">Samsung 3nm production · 2022</div>

<!--
- A gate-all-around transistor divides the fin into stacked nanosheets and surrounds the top, bottom, and sides of each sheet with gate material, giving tighter control as channels shrink.
- Samsung began 3 nm production with this geometry in 2022.
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
<div class="visual-sequence__source">First-order yield model · e<sup>−A·D₀</sup></div>

<!--
- A stray particle or process defect can ruin the die beneath it.
- Larger dies cover more wafer area, so they encounter defects more often and produce fewer working chips per wafer.
- Accelerator designers split large designs into chiplets to improve yield, then reconnect the smaller dies inside one package.
-->

---
class: visual-sequence paper-visual
title: "The power wall"
---

<div class="visual-sequence__kicker">THE POWER WALL</div>

<div class="visual-sequence__frame">
  <img src="/diagrams/rendered/density-clock-v2.png" alt="Transistor count continues rising while clock speed plateaus around 2004, leading designers toward many parallel cores" />
</div>

<div class="visual-sequence__caption"><strong>Clock speeds stalled after 2004.</strong><span>Designers added cores instead.</span></div>
<div class="visual-sequence__source">Pentium 4 · ~3.8 GHz · 2004</div>

<!--
- Until the mid-2000s, shrinking transistors allowed clock speeds to rise without a matching increase in power.
- Leakage broke that relationship, and processor clocks stalled around the Pentium 4’s 3.8 GHz level.
- Designers continued adding transistors by building more cores, which made parallel processors such as GPUs more important.
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
