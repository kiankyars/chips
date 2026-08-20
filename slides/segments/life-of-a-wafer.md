---
layout: default
sources: [research/foundations.md, research/materials.md]
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
<div class="text-5xl font-bold">~80–100+</div>
<div class="opacity-70 mt-2">unique mask patterns · process-dependent</div>
<div class="text-lg mt-4">~<b>$5–15M</b> per design</div>
</div>
</div>

<div class="mt-7 text-center">
<div class="text-sm tracking-widest opacity-50">BEFORE THE FAB</div>
<div class="text-lg mt-2"><b>Spruce Pine Mining District, North Carolina</b></div>
<div class="opacity-70 mt-1">high-purity quartz → fused-quartz crucible → holds the silicon melt while one crystal is pulled</div>
</div>

<!--
- The fab starts with a polished 300 millimetre silicon wafer at eleven-nines purity.
- A leading-edge design typically needs roughly eighty to one hundred-plus unique mask patterns; exact counts vary by process.
- Those masks mix DUV and EUV, and the full set can cost millions of dollars.
- Spruce Pine quartz becomes the crucible around the silicon melt, not the wafer itself.
-->

---

# Each new pattern triggers another process loop

![flow strip: deposit → coat → expose → develop → etch → strip and clean → implant → polish → measure](/diagrams/rendered/flow-strip.svg)

<div class="text-center text-2xl mt-12">
The <b>wafer</b> stays in the fab; the tools, materials, and masks change around it.
</div>

<!--
- The fab coats the wafer, exposes one reticle, and then etches or implants the revealed pattern.
- After etch or implant, the temporary resist mask is stripped and residues are cleaned away; cleaning also recurs between other critical steps.
- This is a map of recurring operations, not one fixed recipe: a developed pattern may guide etch or implant, and CMP appears only when the process calls for it.
- Each pass transfers one pattern into the wafer, then metrology aligns the next pattern to what already exists.
- The wafer stays in the fab while masks and process conditions change around it.

[Sources]
- Lam Research, “Strip & Clean” — https://www.lamresearch.com/products/our-processes/strip-clean/
[/Sources]
-->

---

# Doping controls which charge carrier dominates

<div class="grid grid-cols-[1fr_auto_1.15fr_auto_1fr] gap-7 mt-14 items-center text-center">
<div>
  <div class="text-sm tracking-[0.22em] opacity-55">PATTERN</div>
  <div class="text-3xl font-bold mt-4">Choose the region</div>
  <div class="text-lg opacity-65 mt-3">a mask shields the rest</div>
</div>
<div class="text-5xl opacity-35">→</div>
<div>
  <div class="text-sm tracking-[0.22em] opacity-55">IMPLANT</div>
  <div class="text-3xl font-bold mt-4">Set dose + depth</div>
  <div class="text-base mt-3 leading-relaxed"><div class="text-rose-300">boron → p-type</div><div class="text-cyan-300">phosphorus / arsenic → n-type</div></div>
</div>
<div class="text-5xl opacity-35">→</div>
<div>
  <div class="text-sm tracking-[0.22em] opacity-55">ANNEAL</div>
  <div class="text-3xl font-bold mt-4">Repair + activate</div>
  <div class="text-lg opacity-65 mt-3">a short heat treatment</div>
</div>
</div>

<div class="border-t border-slate-600 mt-14 pt-8 text-center">
  <div class="text-3xl font-bold"><span class="text-rose-300">p-type: holes dominate</span><span class="opacity-35 mx-6">·</span><span class="text-cyan-300">n-type: electrons dominate</span></div>
  <div class="text-xl opacity-70 mt-4">Species, location, dose, and depth help define a transistor's electrical behavior.</div>
</div>

<!--
- Doping adds a precisely controlled concentration of other atoms so selected silicon regions carry charge differently.
- Boron creates p-type material with more holes; phosphorus or arsenic creates n-type material with more electrons.
- The mask sets location, the beam sets dose and depth, and annealing repairs lattice damage and electrically activates the dopants.
- Implantation is one doping method; three-dimensional devices may also use plasma doping or doped epitaxial growth.
-->

---

# One pass through the loop: deposit, pattern, etch

<div class="grid grid-cols-[1fr_auto_1fr_auto_1fr] gap-5 mt-10 items-center text-center">
<div>
  <div class="text-sm tracking-[0.22em] opacity-60 mb-4">DEPOSIT</div>
  <div class="mx-auto w-52 h-28 relative">
    <div class="absolute bottom-0 left-0 right-0 h-12 bg-slate-600"></div>
    <div class="absolute bottom-12 left-0 right-0 h-10 bg-amber-400"></div>
  </div>
  <div class="text-lg mt-4">add a blanket film</div>
</div>
<div class="text-5xl opacity-35">→</div>
<div>
  <div class="text-sm tracking-[0.22em] opacity-60 mb-4">PATTERN</div>
  <div class="mx-auto w-52 h-28 relative">
    <div class="absolute bottom-0 left-0 right-0 h-12 bg-slate-600"></div>
    <div class="absolute bottom-12 left-0 right-0 h-10 bg-amber-400"></div>
    <div class="absolute bottom-[5.5rem] left-0 w-16 h-6 bg-cyan-300"></div>
    <div class="absolute bottom-[5.5rem] right-0 w-16 h-6 bg-cyan-300"></div>
  </div>
  <div class="text-lg mt-4">open selected regions</div>
</div>
<div class="text-5xl opacity-35">→</div>
<div>
  <div class="text-sm tracking-[0.22em] opacity-60 mb-4">ETCH</div>
  <div class="mx-auto w-52 h-28 relative">
    <div class="absolute bottom-0 left-0 right-0 h-12 bg-slate-600"></div>
    <div class="absolute bottom-12 left-0 w-16 h-10 bg-amber-400"></div>
    <div class="absolute bottom-12 right-0 w-16 h-10 bg-amber-400"></div>
  </div>
  <div class="text-lg mt-4">remove exposed material</div>
</div>
</div>

<div class="text-center text-xl mt-10 opacity-75">The pattern decides where the deposited film remains.</div>

<!--
- Deposition first covers the surface with a film; lithography then defines where that film should remain.
- Etching removes the unprotected regions, turning a flat coating into one patterned feature layer.
- Variations of this add, pattern, and remove sequence recur throughout the full fabrication loop.
-->

---

# Why one wafer spends months in the fab

<div class="grid grid-cols-[1fr_auto_0.8fr_auto_1fr] gap-8 mt-16 items-center text-center">
  <div>
    <div class="text-5xl font-bold">~1–1.5 days</div>
    <div class="text-lg opacity-65 mt-3">average cycle time<br>per mask level</div>
  </div>
  <div class="text-5xl opacity-40">×</div>
  <div>
    <div class="text-4xl font-bold">the full<br>mask set</div>
  </div>
  <div class="text-5xl opacity-40">≈</div>
  <div>
    <div class="text-5xl font-bold text-amber-400">~3–4 months</div>
    <div class="text-lg opacity-65 mt-3">typical leading-edge<br>fab cycle</div>
  </div>
</div>

<div class="text-center text-xl opacity-70 mt-16">
Most elapsed time is queueing, transport, and rework between tools—not the exposure itself.
</div>

<!--
- 100km travelled!
- Most elapsed time is queueing, transport, holds, and rework between tools rather than the exposure itself.
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
<div class="visual-sequence__source">Conceptual cross-section · transistors + multilayer interconnect</div>

<!--
- Transistors occupy a thin device layer at the bottom, while more than fifteen interconnect layers above them route signals and power.
- Dozens of distinct patterns build contacts, vias, cuts, and wiring into the three-dimensional structure above them.
- Exact mask counts are process-specific and typically proprietary; advanced logic is roughly an eighty-to-one-hundred-plus-mask undertaking.
-->

---
class: mask-level-stack
title: "A mask level is one patterning operation"
---

<img class="mask-level-stack__art" src="/assets/mask-level-stack.png" alt="Conceptual exploded stack of distinct photomask patterns aligned above one semiconductor chip" />
<div class="mask-level-stack__scrim"></div>

<div class="mask-level-stack__copy">
  <div class="mask-level-stack__kicker">MASKS, LEVELS, SETS</div>
  <h1>A mask level is one patterning operation</h1>
  <div class="mask-level-stack__terms">
    <div><strong>MASK / RETICLE</strong><span>The physical master pattern.</span></div>
    <div><strong>MASK LEVEL</strong><span>One distinct lithography pattern.</span></div>
    <div><strong>MASK SET</strong><span>Every reticle needed for one design.</span></div>
  </div>
  <div class="mask-level-stack__takeaway">Not one-to-one with physical layers.</div>
</div>

<div class="mask-level-stack__source">SEMI terminology · TSMC mask services · ZEISS</div>

<!--
- A mask or reticle is the physical master pattern loaded into the lithography scanner.
- A mask level is one distinct patterning operation, not one completed wiring or material layer.
- Cuts, vias, implants, and dense features can each require separate mask levels.
- The mask set is the complete collection needed to manufacture one design.
-->

---
class: mask-patterning-compare
title: "One design layer can require several masks"
---

<img class="mask-patterning-compare__art" src="/assets/duv-euv-mask-patterning.png" alt="Four separate DUV mask patterns and one EUV mask pattern producing the same dense line layer" />
<div class="mask-patterning-compare__shade"></div>

<h1>One design layer can require several masks</h1>

<div class="mask-patterning-compare__label mask-patterning-compare__label--duv">
  <strong>UP TO 4</strong>
  <span>193 nm DUV masks</span>
</div>

<div class="mask-patterning-compare__label mask-patterning-compare__label--euv">
  <strong>1</strong>
  <span>13.5 nm EUV mask</span>
</div>

<div class="mask-patterning-compare__takeaway"><strong>EUV can collapse several exposures into one.</strong><span>It does not replace every DUV mask.</span></div>
<div class="mask-patterning-compare__source">Samsung 7LPP example · ASML · ZEISS</div>

<!--
- Dense patterns can be split across multiple masks, exposed separately, and aligned on the same intended layer.
- Samsung says its 7LPP flow could use one EUV mask where ArF DUV required up to four.
- That is one process example, not a universal rule; sufficiently tight EUV patterns can also require multi-patterning.
- Leading-edge sets still mix many DUV masks with selected EUV masks.
-->

---
class: visual-sequence paper-visual
title: "Contamination"
---

<div class="visual-sequence__kicker">CONTAMINATION</div>

<div class="visual-sequence__frame">
  <img src="/diagrams/rendered/wafer-particle-defect.png" alt="A nearly invisible particle on a wafer, magnified to show it shorting two metal lines on one die" />
</div>

<div class="visual-sequence__caption"><strong>ISO 5 ≤ 100,000 particles/m³</strong><span>ISO 1 ≤ 10 particles/m³.</span></div>
<div class="visual-sequence__source">At ≥0.1 µm · clean-zone classification · lower is cleaner</div>

<!--
- A particle about 100 nanometres wide can bridge nearby wires and kill a die.
- ISO class applies to a measured cleanroom or zone, not the whole fab; lower numbers mean cleaner air.
- ISO Class 5 is common in semiconductor production; critical zones can reach Class 1, with only ten qualifying particles in 1,000 litres.
- Sealed wafer carriers add a cleaner mini-environment around the product because one late defect wastes months of accumulated process value.
-->
