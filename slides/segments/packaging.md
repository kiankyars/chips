---
layout: section
---

<!-- SEGMENT
id: packaging
act: V — Memory & The Assembly
tier: P-lite
angle: "For two years the world's most valuable chip existed and still couldn't be bought — and the bottleneck wasn't the wafer, it was the glue. The step the industry offshored in 1963 because it was worthless is now the single gate that decides who gets AI compute."   # YOU OWN THIS LINE — rewrite it in your voice
runtime: ~7 min
status: draft
seeds: []                                   # no new forward seed; hands the completed Board into geopolitics
pays_off: [reticle-limit, yield]            # reticle-limit (from nvidia) cashed; yield chain returns as chiplets (foundations→life-of-a-wafer→kla→intel→HERE)
stamps: [tsmc-cowos]                        # stamp #7 — the Board completes; TSMC's second, different monopoly
diagrams: [map-backend, journey-5, package-01-substrate, package-02-interposer, package-03-dies-and-hbm, package-04-complete]
sources: research/packaging.md
-->


# The bottleneck moved into the package

<div class="text-xl opacity-70 mt-2">Part 5 · Memory and packaging · back-end assembly</div>

<div class="grid grid-cols-2 gap-8 mt-8 items-center">
<div>

![industry map — backend region lit](/diagrams/rendered/map-backend.svg)

</div>
<div class="text-2xl leading-relaxed">
During the 2023–25 shortage, TSMC had GPU wafers<br>
but too little CoWoS capacity to assemble them.
</div>
</div>

![journey bar — PACKAGE active](/diagrams/rendered/journey-5.svg)

<!--
Fabricated GPU dies and HBM stacks still need a package that connects them at high bandwidth. During the 2023 to 2025 shortage, TSMC had logic wafers available but lacked enough CoWoS capacity to assemble complete accelerators.
-->

---

# TSMC ran out of CoWoS capacity

<div class="text-2xl italic leading-relaxed mt-6 text-center">
"It's not the shortage of AI chips.<br>
It's the shortage of our <b>CoWoS</b> capacity."
</div>

<div class="text-center opacity-60 mt-3">— TSMC Chairman Mark Liu, Sept 2023</div>

<div class="grid grid-cols-3 gap-6 mt-10 text-center">
<div>
<div class="text-4xl font-bold">1963</div>
<div class="text-sm opacity-60 mt-2">packaging offshored first — a converted rubber-shoe factory in Kowloon</div>
</div>
<div>
<div class="text-4xl font-bold">conventional packaging</div>
<div class="text-sm opacity-60 mt-2">die attach, wire bonding, and epoxy encapsulation; historically treated as low-value assembly</div>
</div>
<div>
<div class="text-4xl font-bold">near 7nm</div>
<div class="text-sm opacity-60 mt-2">reported CoWoS packaging-wafer price, comparable with a 7nm logic wafer</div>
</div>
</div>

<!--
Chip packaging began as labor-intensive assembly. It entered the first wave of offshoring through facilities such as Fairchild's 1963 plant in a converted Hong Kong shoe factory. Advanced packaging now adds dense silicon wiring and can command prices near those of a 7nm logic wafer. TSMC identified CoWoS capacity as the main AI-chip shortage in 2023.
-->

---

# Reticle limits forced Nvidia to use multiple dies

<div class="grid grid-cols-3 gap-6 mt-8 text-center">
<div>
<div class="text-5xl font-bold">858 mm²</div>
<div class="text-sm opacity-60 mt-2">maximum field for one standard EUV exposure</div>
</div>
<div>
<div class="text-5xl font-bold">814 mm²</div>
<div class="text-sm opacity-60 mt-2">H100 die, 95% of the reticle field</div>
</div>
<div>
<div class="text-5xl font-bold">2 dies</div>
<div class="text-sm opacity-60 mt-2">Blackwell uses two dies linked at 10 TB/s; 208B transistors total</div>
</div>
</div>

<div class="border-2 border-amber-500 rounded-lg p-4 mt-10 text-center">
<div class="font-bold">H100 nearly filled a standard reticle field. Blackwell crossed the limit by using two dies.</div>
<div class="text-sm opacity-60 mt-1">High-NA EUV halves the field to 429 mm², increasing the need for multi-die designs.</div>
</div>

<!--
A standard EUV exposure covers at most about 858 square millimeters, and the H100 die used 814. Blackwell crossed that limit by joining two compute dies with a 10-terabyte-per-second link. High-NA EUV halves the exposure field, which gives designers another reason to divide large processors into chiplets.
-->

---
class: visual-sequence paper-visual
title: "Why chiplets win"
---

<div class="visual-sequence__kicker">WHY CHIPLETS WIN</div>

<div class="visual-sequence__frame">
  <img src="/diagrams/rendered/chiplet-yield-v2.png" alt="One defect scraps a monolithic die but only one of four chiplets, while an interposer combines compute, mature-node input-output, and nearby HBM" />
</div>

<div class="visual-sequence__caption"><strong>Split the die.</strong><span>Lose less silicon, mix process nodes, and place HBM nearby.</span></div>
<div class="visual-sequence__source">AMD estimate · four small dies cost &lt;60% of one monolith</div>

<!--
Chiplets split one large design into smaller dies, improving yield because a defect destroys less silicon. Designers can also mix process nodes and place memory close to compute. AMD estimated that four small dies can cost less than 60 percent of an equivalent monolithic design.
-->

---

# CoWoS capacity grew about 10×

<div class="grid grid-cols-4 gap-3 mt-8 text-center">
<div><div class="text-3xl font-bold">~13–15k</div><div class="text-xs opacity-60 mt-1">wafers/mo · end-2023</div></div>
<div><div class="text-3xl font-bold">~35–40k</div><div class="text-xs opacity-60 mt-1">end-2024 · doubled</div></div>
<div><div class="text-3xl font-bold">~75–80k</div><div class="text-xs opacity-60 mt-1">end-2025 · doubled again</div></div>
<div><div class="text-3xl font-bold">~120–140k</div><div class="text-xs opacity-60 mt-1">end-2026 target</div></div>
</div>

<div class="text-center mt-8">
<div class="text-6xl font-bold">≈ 10×</div>
<div class="opacity-70 mt-2">in three years; capacity remained sold out</div>
</div>

<div class="text-sm opacity-60 mt-8 text-center">
<b>C</b>hip <b>o</b>n <b>W</b>afer <b>o</b>n <b>S</b>ubstrate: dies and HBM on a silicon interposer mounted to an organic substrate. In production since 2013; demand accelerated with AI.
</div>

<!--
TSMC expanded CoWoS from about 13,000 to 15,000 wafers per month at the end of 2023 toward a 120,000 to 140,000 target for 2026. That increase approaches tenfold in three years. Demand still kept the capacity sold out as accelerator production grew.
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
The organic substrate forms the base of the accelerator package. It carries power and signals between the package and the circuit board, while its large footprint supports the compute dies, memory stacks, and the wiring layer added above it.
-->

---
class: visual-sequence
transition: fade
title: "Package assembly · 2 / 4"
---

<div class="visual-sequence__kicker">Package assembly · 2 / 4</div>

<div class="visual-sequence__frame">

![The same package view with a silicon interposer added](/diagrams/rendered/package-02-interposer.svg)

</div>

<div class="visual-sequence__caption">CoWoS adds a silicon wiring layer between the substrate and the dies.</div>
<div class="visual-sequence__source">CoWoS: Chip on Wafer on Substrate · geometry simplified</div>

<!--
CoWoS places a silicon interposer on the organic substrate. The interposer provides far denser wiring than the substrate can support, allowing logic dies and HBM stacks to exchange data across thousands of short electrical connections.
-->

---
class: visual-sequence
transition: fade
title: "Package assembly · 3 / 4"
---

<div class="visual-sequence__kicker">Package assembly · 3 / 4</div>

<div class="visual-sequence__frame">

![Two GPU dies and eight HBM stacks added to the same package view](/diagrams/rendered/package-03-dies-and-hbm.svg)

</div>

<div class="visual-sequence__caption">Two GPU dies and eight HBM stacks share the same high-density wiring plane.</div>
<div class="visual-sequence__source">GB300-class component count · arrangement simplified</div>

<!--
Two GPU dies and eight HBM stacks mount on the same interposer. The shared wiring plane links the compute dies to each other and gives both access to nearby memory, avoiding the narrower paths used by conventional memory modules.
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
A thermal lid closes over the assembled logic and memory dies. It protects the package and transfers heat into the cooling system. The result is one accelerator assembled from separate components rather than one monolithic chip.
-->
