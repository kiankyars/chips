---
layout: default
sources: [research/packaging.md, research/nvidia.md]
---

# By 2023, CoWoS—not front-end wafers—limited accelerator output

<div class="grid grid-cols-[1fr_auto_1.15fr_auto_1fr] gap-5 mt-12 items-center text-center">
<div><div class="text-3xl font-bold">LOGIC DIES + HBM</div><div class="opacity-60 mt-2">available components</div></div>
<div class="text-5xl opacity-35">→</div>
<div class="border-4 border-rose-400 py-8 px-5"><div class="text-4xl font-bold">CoWoS CAPACITY</div><div class="text-rose-300 mt-2">constrained gate</div></div>
<div class="text-5xl opacity-35">→</div>
<div><div class="text-3xl font-bold">FINISHED ACCELERATOR</div><div class="opacity-60 mt-2">ship-ready package</div></div>
</div>

<div class="mt-12 text-center text-xl italic opacity-80">“It's the shortage of our CoWoS capacity.” <span class="text-base not-italic opacity-55">— TSMC Chairman Mark Liu · Sept 2023</span></div>

<!--
- Fabricated GPU dies and HBM stacks still need a package that connects them at high bandwidth.
- During the 2023 to 2025 shortage, TSMC identified CoWoS, rather than front-end logic wafers, as the constraint on complete accelerators.
- The reversal is the point: a stage offshored as low-value assembly in the 1960s had become a control point for AI compute.
-->

---

# Analyst estimates put CoWoS capacity up to ~10× 2023 levels

<div class="text-xs opacity-50 mt-2">WAFERS PER MONTH · RANGE ESTIMATES · NOT TSMC DISCLOSURE</div>

<div class="grid grid-cols-4 gap-8 mt-8 h-72 items-end text-center">
<div><div class="text-2xl font-bold mb-2">13–15k</div><div class="h-12 bg-cyan-400/55"></div><div class="mt-3 opacity-60">2023</div></div>
<div><div class="text-2xl font-bold mb-2">35–40k</div><div class="h-24 bg-cyan-400/65"></div><div class="mt-3 opacity-60">2024</div></div>
<div><div class="text-2xl font-bold mb-2">75–80k</div><div class="h-44 bg-cyan-400/75"></div><div class="mt-3 opacity-60">2025</div></div>
<div><div class="text-2xl font-bold mb-2">120–140k</div><div class="h-64 bg-cyan-400"></div><div class="mt-3 opacity-60">2026 target</div></div>
</div>

<!--
- Industry estimates put CoWoS near 13,000 to 15,000 wafers per month at the end of 2023.
- The 120,000 to 140,000 figure is an analyst target for the end of 2026, not achieved capacity at the time of this course.
- Industry reporting describes repeated capacity expansions and continued tightness; TSMC does not publish this monthly series.
-->

---
class: visual-sequence
title: "Advanced packaging ecosystem"
---

<div class="visual-sequence__frame">
  <img src="/diagrams/rendered/package-ecosystem.svg" alt="Substrate materials, advanced integration, assembly and test capacity, and automated test equipment converge on a qualified accelerator package" />
</div>

<!--
- GB300 uses CoWoS-L, not SoIC; SoIC is TSMC's adjacent copper-to-copper hybrid-bonding platform for denser three-dimensional stacking.
- Organic substrates use Ajinomoto build-up film as an insulating layer around fine copper wiring.
- OSATs provide qualified assembly and test capacity; Advantest and Teradyne supply the automated test equipment rather than performing the terminal process step.
- The exact division of work varies by product and qualified route, so these are capability lanes—not one universal vendor handoff.
-->

---
class: visual-sequence
transition: fade
title: "Package assembly · 1 / 4"
---

<div class="visual-sequence__kicker">1 / 4 · ORGANIC SUBSTRATE</div>

<div class="visual-sequence__frame">

![Locked top view of an organic accelerator substrate](/diagrams/rendered/package-01-substrate.svg)

</div>

<div class="visual-sequence__source">Illustrative locked top view · not to scale</div>

<!--
- The organic substrate forms the base of the accelerator package.
- The organic substrate carries power and signals to the circuit board while supporting the compute dies, memory stacks, and wiring layer above it.
-->

---
class: visual-sequence
transition: fade
title: "Package assembly · 2 / 4"
---

<div class="visual-sequence__kicker">2 / 4 · RDL + LOCAL SILICON</div>

<div class="visual-sequence__frame">

![The same package view with an RDL interposer and embedded local silicon interconnects added](/diagrams/rendered/package-02-interposer.svg)

</div>

<div class="visual-sequence__source">TSMC CoWoS-L · geometry simplified</div>

<!--
- CoWoS-L places an RDL-based interposer with embedded local silicon interconnects on the organic substrate.
- The local silicon provides dense links where dies meet, while the larger RDL wiring plane carries signals and power across the package.
-->

---
class: visual-sequence
transition: fade
title: "Package assembly · 3 / 4"
---

<div class="visual-sequence__kicker">3 / 4 · LOGIC AND HBM ON ONE INTERPOSER</div>

<div class="visual-sequence__frame">

![Two GPU dies and eight 12-high HBM3E stacks added to the same package view](/diagrams/rendered/package-03-dies-and-hbm.svg)

</div>

<div class="visual-sequence__source">GB300-class · simplified layout</div>

<!--
- Two GPU dies and eight 12-high HBM3E stacks share one interposer.
- The split answers the reticle limit: one exposure cannot print the full Blackwell compute surface.
- Smaller dies discard less silicon when a defect lands, recalling the earlier area-yield trade-off.
- The wiring plane links both dies to nearby HBM without conventional memory-module bottlenecks.
-->

---
class: visual-sequence
transition: fade
title: "Package assembly · 4 / 4"
---

<div class="visual-sequence__kicker">4 / 4 · CROSS-SECTION: HEAT PATH</div>

<div class="visual-sequence__frame">

![A side cross-section traces heat from compute dies and HBM through the thermal interface material, lid, and cooler](/diagrams/rendered/package-04-complete.svg)

</div>

<div class="visual-sequence__source">Illustrative cross-section · not to scale</div>

<!--
- A thermal lid closes over the assembled logic and memory dies.
- The lid protects the package and transfers heat into the cooling system.
- The result is one accelerator assembled from separate components rather than one monolithic chip.
-->

---

# TSMC is a bottleneck twice

<div class="text-center text-sm tracking-[0.2em] opacity-55 mt-10">TWO SEPARATE CAPACITY GATES</div>

<div class="grid grid-cols-[0.55fr_auto_1.5fr_auto_1.5fr_auto_0.65fr] gap-4 mt-8 items-center text-center">
  <div><div class="text-xl font-bold">GPU DESIGN</div><div class="opacity-55 mt-2">tape-out</div></div>
  <div class="text-5xl opacity-35">→</div>
  <div class="border-2 border-emerald-400 rounded-xl px-5 py-6 h-52">
    <div class="text-sm tracking-[0.13em] text-emerald-300">TSMC · WAFER FAB</div>
    <div class="text-2xl font-bold mt-4">Leading-edge logic</div>
    <div class="text-base opacity-60 mt-3">process capacity · yield ramp</div>
  </div>
  <div class="text-5xl opacity-35">→</div>
  <div class="border-2 border-rose-400 rounded-xl px-5 py-6 h-52">
    <div class="text-sm tracking-[0.13em] text-rose-300">TSMC · COWOS</div>
    <div class="text-2xl font-bold mt-4">Advanced packaging</div>
    <div class="text-base opacity-60 mt-3">logic + HBM integration</div>
  </div>
  <div class="text-5xl opacity-35">→</div>
  <div><div class="text-xl font-bold">ACCELERATOR</div><div class="opacity-55 mt-2">ship-ready</div></div>
</div>

<div class="text-center mt-8"><span class="border border-slate-600 rounded-full px-6 py-2 text-sm tracking-[0.16em]">7 / 7 CONTROL POINTS MAPPED</span></div>

<!--
- CoWoS capacity earns the seventh and final supply-chain control point.
- TSMC appears twice because leading-edge logic fabrication and advanced packaging require different assets, processes, and qualified capacity.
- With logic, HBM, interconnect, substrate, assembly, and test joined, the package is ready to enter rack integration.
- The package is one accelerator. Next, networking turns racks of them into one computer.
-->
