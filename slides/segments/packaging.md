---
layout: default
---

<!-- SEGMENT
id: packaging
act: V — Memory & The Assembly
tier: P-lite
angle: "In 2023–25, AI accelerators remained supply-constrained even as front-end output ramped: CoWoS capacity, HBM, and later substrates limited shipments. A packaging stage offshored to cut costs in 1963 had become a gate for AI compute."   # YOU OWN THIS LINE — rewrite it in your voice
runtime: ~6 min
status: draft
seeds: []                                   # no new forward seed; hands the completed Board into geopolitics
pays_off: [reticle-limit, yield]            # reticle-limit (from nvidia) cashed; yield chain returns as chiplets (foundations→life-of-a-wafer→kla→intel→HERE)
stamps: [tsmc-cowos]                        # stamp #7 — the Board completes; TSMC's second constrained capability
diagrams: [map-backend, journey-5, chiplet-yield-v2, package-01-substrate, package-02-interposer, package-03-dies-and-hbm, package-04-complete, board-7]
sources: research/packaging.md, research/nvidia.md
-->


# The bottleneck moved into the package

<div class="grid grid-cols-2 gap-8 mt-8 items-center">
<div>

![industry map — backend region lit](/diagrams/rendered/map-backend.svg)

</div>
<div>
<div class="text-2xl italic leading-relaxed">
"It's not the shortage of AI chips.<br>
It's the shortage of our <b>CoWoS</b> capacity."
</div>
<div class="opacity-60 mt-3">— TSMC Chairman Mark Liu, Sept 2023</div>
<div class="text-base opacity-70 mt-7 leading-relaxed">
Packaging had moved from offshored assembly to the gate on finished AI accelerators.
</div>
</div>
</div>

![journey bar — PACKAGE active](/diagrams/rendered/journey-5.svg)

<!--
- Fabricated GPU dies and HBM stacks still need a package that connects them at high bandwidth.
- During the 2023 to 2025 shortage, TSMC identified CoWoS, rather than front-end logic wafers, as the constraint on complete accelerators.
- The reversal is the point: a stage offshored as low-value assembly in the 1960s had become a control point for AI compute.
-->

---
class: visual-sequence paper-visual
title: "Why chiplets win"
---

<div class="visual-sequence__kicker">WHY CHIPLETS WIN</div>

<div class="visual-sequence__frame">
  <img src="/diagrams/rendered/chiplet-yield-v2.png" alt="One defect scraps a monolithic die but only one of four chiplets, while an interposer combines compute, mature-node input-output, and nearby HBM" />
</div>

<div class="visual-sequence__caption"><strong>The earlier reticle limit cashes out here.</strong><span>Split the die, lose less silicon, mix nodes, and place HBM nearby.</span></div>
<div class="visual-sequence__source">NVIDIA Blackwell · AMD chiplet cost estimate</div>

<!--
- Earlier, H100 nearly filled one standard exposure field. Blackwell answers the same size constraint by packaging two compute dies as one accelerator.
- Smaller dies also improve yield because one defect destroys less silicon; designers can mix process nodes and place HBM close to compute.
- AMD estimated that four small dies can cost less than 60 percent of an equivalent monolithic design. The package turns those separate dies back into one usable system.
-->

---

# Economics Ledger: CoWoS capacity figures are estimates

<div class="text-xs opacity-50 mt-2">INDUSTRY ESTIMATES · WAFERS PER MONTH · NOT TSMC DISCLOSURE</div>

<div class="grid grid-cols-4 gap-3 mt-8 text-center">
<div><div class="text-3xl font-bold">~13–15k</div><div class="text-xs opacity-60 mt-1">wafers/mo · end-2023</div></div>
<div><div class="text-3xl font-bold">~35–40k</div><div class="text-xs opacity-60 mt-1">end-2024 · doubled</div></div>
<div><div class="text-3xl font-bold">~75–80k</div><div class="text-xs opacity-60 mt-1">end-2025 · doubled again</div></div>
<div><div class="text-3xl font-bold">~120–140k</div><div class="text-xs opacity-60 mt-1">end-2026 target</div></div>
</div>

<div class="text-center mt-8">
<div class="text-6xl font-bold">up to ≈ 10×</div>
<div class="opacity-70 mt-2">end-2023 estimate → end-2026 analyst target</div>
</div>

<div class="text-sm opacity-60 mt-8 text-center">
<b>C</b>hip <b>o</b>n <b>W</b>afer <b>o</b>n <b>S</b>ubstrate: dies and HBM on an interposer mounted to an organic substrate. Blackwell uses an RDL interposer with embedded local silicon links.
</div>

<!--
- Industry estimates put CoWoS near 13,000 to 15,000 wafers per month at the end of 2023.
- The 120,000 to 140,000 figure is an analyst target for the end of 2026, not achieved capacity at the time of this course.
- Industry reporting describes repeated capacity expansions and continued tightness; TSMC does not publish this monthly series.
-->

---

# Packaging is a layered supply chain

<div class="text-center text-base opacity-70 mt-4">
GB300 uses CoWoS-L. The broader advanced-packaging ecosystem also includes:
</div>

<div class="grid grid-cols-3 gap-6 mt-6 text-center">
<div class="border-2 border-purple-400 rounded-lg p-5">
<div class="text-xl font-bold">ADJACENT 3D STACKING</div>
<div class="text-2xl mt-4">TSMC SoIC</div>
<div class="text-sm opacity-60 mt-2">hybrid bonding joins stacked dies copper-to-copper</div>
</div>
<div class="border-2 border-amber-400 rounded-lg p-5">
<div class="text-xl font-bold">SUBSTRATE MATERIALS</div>
<div class="text-2xl mt-4">Ajinomoto ABF</div>
<div class="text-sm opacity-60 mt-2">insulating build-up film enables fine package wiring</div>
</div>
<div class="border-2 border-blue-400 rounded-lg p-5">
<div class="text-xl font-bold">ASSEMBLY + TEST</div>
<div class="text-2xl mt-4">ASE · Amkor · JCET</div>
<div class="text-sm opacity-60 mt-2">Advantest and Teradyne supply automated test systems</div>
</div>
</div>

<!--
- GB300 uses CoWoS-L, not SoIC; SoIC is TSMC's adjacent copper-to-copper hybrid-bonding platform for denser three-dimensional stacking.
- Organic substrates use Ajinomoto build-up film as an insulating layer around fine copper wiring.
- OSATs assemble and test many packages, while Advantest and Teradyne supply the automated test equipment.
-->

---
class: visual-sequence
transition: fade
title: "Package assembly · 1 / 4"
---

<div class="visual-sequence__kicker">Package assembly · 1 / 4</div>

<div class="visual-sequence__frame">

![Locked top view of an organic accelerator substrate](/diagrams/rendered/package-01-substrate.svg)

</div>

<div class="visual-sequence__caption">The package begins with an organic substrate that carries power and signals.</div>
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

<div class="visual-sequence__kicker">Package assembly · 2 / 4</div>

<div class="visual-sequence__frame">

![The same package view with an RDL interposer and embedded local silicon interconnects added](/diagrams/rendered/package-02-interposer.svg)

</div>

<div class="visual-sequence__caption">CoWoS-L combines an RDL wiring plane with embedded local silicon interconnects.</div>
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

<div class="visual-sequence__kicker">Package assembly · 3 / 4</div>

<div class="visual-sequence__frame">

![Two GPU dies and eight 12-high HBM3E stacks added to the same package view](/diagrams/rendered/package-03-dies-and-hbm.svg)

</div>

<div class="visual-sequence__caption">Two GPU dies and eight 12-high HBM3E stacks share the same wiring plane.</div>
<div class="visual-sequence__source">GB300-class component count · arrangement simplified</div>

<!--
- Two GPU dies and eight 12-high HBM3E stacks mount on the same interposer.
- The shared wiring plane links the compute dies to each other and gives both access to nearby memory, avoiding the narrower paths used by conventional memory modules.
-->

---
class: visual-sequence
transition: fade
title: "Package assembly · 4 / 4"
---

<div class="visual-sequence__kicker">Package assembly · 4 / 4</div>

<div class="visual-sequence__frame">

![The completed accelerator package with its thermal lid](/diagrams/rendered/package-04-complete.svg)

</div>

<div class="visual-sequence__caption">The lid closes over one accelerator built from separate logic and memory dies.</div>
<div class="visual-sequence__source">Illustrative cutaway · TSMC CoWoS</div>

<!--
- A thermal lid closes over the assembled logic and memory dies.
- The lid protects the package and transfers heat into the cooling system.
- The result is one accelerator assembled from separate components rather than one monolithic chip.
-->

---

# Chokepoint #7: TSMC CoWoS capacity

<div class="mt-5">

![completed chokepoint board](/diagrams/rendered/board-7.svg)

</div>

<div class="mt-4">

![accelerator journey — package complete](/diagrams/rendered/journey-5.svg)

</div>

<div class="text-center text-base opacity-80 mt-3">
TSMC appears twice because leading-edge wafer fabrication and advanced packaging are separate constrained capabilities.
</div>

<!--
- CoWoS capacity earns the seventh and final supply-chain control point.
- TSMC appears twice because leading-edge logic fabrication and advanced packaging require different assets, processes, and qualified capacity.
- With logic, HBM, interconnect, substrate, assembly, and test joined, the package is ready to enter rack integration.
- The next question is when these dependencies become geopolitical leverage.
-->
