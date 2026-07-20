---
layout: section
---

<!-- SEGMENT
id: life-of-a-wafer
act: IV — The Fab Tour
tier: —            # keystone teach — concept segment, no company tier
angle: "Nobody builds a chip — a chip survives. One seven-step loop, run ~80 times over three months, where a single invisible particle kills a die worth more than gold; every company you're about to meet exists because it owns exactly one of those steps."   # YOU OWN THIS LINE — rewrite in your voice
runtime: ~5 min
status: draft
seeds: [japan-under-everything]     # stamp #3 opens the Japan cluster; `materials` cashes the full basement tour
pays_off: [yield]                   # stage 2 of the yield chain: foundations → HERE → kla → intel → packaging (chiplets)
stamps: [japan-materials]           # stamp #3 — Japan's materials cluster
diagrams: [map-equipment, journey-3, flow-strip, flow-coat, board-3, flow-expose]
sources: research/foundations.md, research/materials.md
-->


# Inside a leading-edge fab

<div class="text-2xl opacity-80 mt-2">Three to four months and roughly 1,000 process steps</div>

<div class="grid grid-cols-2 gap-8 mt-8 items-center">
<div>

![industry map — equipment region lit](/diagrams/rendered/map-equipment.svg)

</div>
<div class="text-2xl leading-relaxed">
A leading-edge wafer passes through<br>
<b>roughly 1,000 process steps</b><br>
over <b>three to four months</b>.<br>
<span class="opacity-60 text-lg">The next sections follow its equipment and materials.</span>
</div>
</div>

![journey bar — FAB](/diagrams/rendered/journey-3.svg)

<!--
A leading-edge wafer passes through about a thousand process steps over three to four months. Different machines deposit material, print patterns, remove material, and inspect the result. Much of the cycle time comes from waiting between those operations rather than active processing.
-->

---

# A wafer and a mask set enter the fab

<div class="grid grid-cols-2 gap-10 mt-8">
<div class="border-2 border-gray-400 rounded-lg p-6 text-center">
<div class="text-sm opacity-60 mb-2">THE WAFER</div>
<div class="text-5xl font-bold">99.999999999%</div>
<div class="opacity-70 mt-2">pure silicon — "eleven nines"</div>
<div class="text-lg mt-4">300 mm disc · ~<b>$100–200</b> blank</div>
<div class="text-sm opacity-60 mt-2">Shin-Etsu · SUMCO (Japan)</div>
</div>
<div class="border-2 border-gray-400 rounded-lg p-6 text-center">
<div class="text-sm opacity-60 mb-2">THE MASKS</div>
<div class="text-5xl font-bold">60–100</div>
<div class="opacity-70 mt-2">patterned reticles — roughly one per mask level</div>
<div class="text-lg mt-4">~<b>$5–15M</b> per design</div>
<div class="text-sm opacity-60 mt-2">one EUV mask: $500k–1M</div>
</div>
</div>

<!--
The fab starts with a polished 300 millimetre silicon wafer that costs about $100 to $200 and reaches 99.999999999 percent purity. The design arrives as 60 to 100 patterned reticles, with roughly one reticle per mask level; a multi-patterned layer may need several. A leading-edge mask set therefore costs millions of dollars.
-->

---

# The fabrication cycle repeats for each layer

![flow strip: deposit → coat → expose → etch → implant → polish → measure](/diagrams/rendered/flow-strip.svg)

<div class="grid grid-cols-3 gap-6 mt-10 text-center">
<div><div class="text-4xl font-bold">1 mask level</div><div class="text-sm opacity-60">one lithography pattern</div></div>
<div><div class="text-4xl font-bold">~80–120</div><div class="text-sm opacity-60">mask levels per design</div></div>
<div><div class="text-4xl font-bold">billions</div><div class="text-sm opacity-60">features patterned across each wafer</div></div>
</div>

<!--
The fab deposits a film, coats it with light-sensitive resist, exposes a pattern, etches the open regions, implants dopants where needed, polishes the surface, and measures the result. It repeats variations of this cycle across about 80 to 120 mask levels. Each exposure patterns billions of features across the wafer at once.
-->

---

# Japan supplies the wafer, resist, and EUV mask blanks

![coat step glowing](/diagrams/rendered/flow-coat.svg)

<div class="grid grid-cols-3 gap-6 mt-6 text-center text-lg">
<div><b>The wafer</b><div class="opacity-70 text-sm mt-1">Shin-Etsu + SUMCO<br>&gt;half of world silicon</div></div>
<div><b>The resist</b><div class="opacity-70 text-sm mt-1">JSR · TOK — Japan ~90%<br>(~95% of EUV resist)</div></div>
<div><b>The mask blanks</b><div class="opacity-70 text-sm mt-1">Hoya + AGC<br>≈93% of EUV blanks</div></div>
</div>

<div class="mt-8 text-center">

![chokepoint board — third stamp](/diagrams/rendered/board-3.svg)

<div class="text-lg mt-2"><b>CHOKEPOINT #3 · Japan's materials cluster</b></div>
</div>

<!--
Wafers, photoresist, and mask blanks become part of a fab's process recipe after long qualification. A replacement can change film thickness, pattern dimensions, defect rates, or yield, so the fab must test it across many wafers before release. That requalification can take one to two years, making concentrated supply hard to replace.
-->

---
class: visual-sequence paper-visual
title: "Inside the die"
---

<div class="visual-sequence__kicker">INSIDE THE DIE</div>

<div class="visual-sequence__frame">
  <img src="/diagrams/rendered/chip-interconnect-stack.png" alt="A thin transistor layer beneath a much taller stack of metal interconnect layers and vias" />
</div>

<div class="visual-sequence__caption"><strong>Transistors occupy the floor.</strong><span>More than fifteen layers of wiring rise above them.</span></div>
<div class="visual-sequence__source">N5 · 81 mask layers · roughly three months in process</div>

<!--
Transistors occupy a thin device layer at the bottom, while more than fifteen interconnect layers above them route signals and power. Each mask level adds several process steps and more queue time, and each added step creates another chance for contamination or process drift. That is why 81 mask levels can keep an N5 wafer in the fab for months.
-->

---
class: visual-sequence paper-visual
title: "Contamination"
---

<div class="visual-sequence__kicker">CONTAMINATION</div>

<div class="visual-sequence__frame">
  <img src="/diagrams/rendered/wafer-particle-defect.png" alt="A nearly invisible particle on a wafer, magnified to show it shorting two metal lines on one die" />
</div>

<div class="visual-sequence__caption"><strong>One particle can bridge two wires.</strong><span>The bridged die fails.</span></div>
<div class="visual-sequence__source">Blank wafer · ~$150 · processed wafer · ~$30,000</div>

<!--
A particle about 100 nanometres wide can bridge nearby wires and kill a die. Cleanrooms and sealed wafer carriers limit contamination because one defect late in the process wastes months of work. Larger dies expose more area to defects, so inspection and process control have a direct effect on the number of sellable chips.
-->

---

# Exposure requires the fab's most expensive tool

![expose step glowing](/diagrams/rendered/flow-expose.svg)

<div class="text-2xl mt-10 text-center leading-relaxed">
EUV scanners perform the exposure step and cost more than any other fab tool.
</div>

<!--
During exposure, a lithography scanner projects the reticle pattern into photoresist on the wafer. EUV can replace several DUV exposures and reduce masks and process steps, but its scanner is the most expensive tool in the fab.
-->
