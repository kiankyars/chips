---
layout: default
class: visual-sequence
title: "The object"
---

<!-- SEGMENT
id: cold-open
act: 0 — The Object
tier: —
angle: "Use one GB300-class accelerator as the physical object whose supply chain the course will trace."
runtime: ~4 min
status: draft
seeds: [the-object, the-seven, the-money-bar]
pays_off: []
stamps: []
diagrams: [map-dark, board-0, journey-0]
sources: research/nvidia.md, research/foundations.md
note: BUILD AND RECORD LAST — this front-loads four promises (map, board, money bar, "seven"). Only lock it once every device has survived the build.
-->


<div class="visual-sequence__kicker">THE OBJECT</div>

<div class="visual-sequence__frame">
  <img src="/diagrams/rendered/package-04-complete.svg" alt="An accelerator package containing two compute dies and eight HBM stacks" />
</div>

<div class="visual-sequence__caption"><strong>One accelerator</strong><span>Two compute dies · eight HBM stacks · one package</span></div>
<div class="visual-sequence__source">GB300-class package · schematic</div>

<!--
A GB300-class accelerator combines two compute dies with eight HBM stacks inside one package. The finished object depends on separate logic, memory, interconnect, and packaging technologies, so no single company can build the whole device.
-->

---

# From one accelerator to industry spending

<div class="grid grid-cols-3 gap-8 mt-12 text-center">
<div>
<div class="text-6xl font-bold">208 B</div>
<div class="opacity-70 mt-3">transistors across two compute dies</div>
</div>
<div>
<div class="text-6xl font-bold">~$4 M</div>
<div class="opacity-70 mt-3">estimated price for a 72-GPU rack drawing about 135 kW</div>
</div>
<div>
<div class="text-6xl font-bold">~$600 B</div>
<div class="opacity-70 mt-3">estimated 2026 hyperscaler capital spending, including AI infrastructure</div>
</div>
</div>

<!--
These numbers trace the scaling chain. One package has 208 billion transistors; 72 packages become a $4 million rack with a facility-scale power load. Hyperscaler spending shows how demand for that hardware propagates through the semiconductor industry.
-->

---

# The companies behind one accelerator

![the industry map — dark](/diagrams/rendered/map-dark.svg)

<div class="text-lg opacity-70 mt-6 text-center">
This map follows the accelerator from design software to the finished package. Each section adds the suppliers responsible for one stage.
</div>

<!--
No company owns the whole route. Nvidia designs the accelerator, TSMC fabricates its logic, memory suppliers build HBM, and packaging firms assemble the final module. The finished device records all of those dependencies.
-->

---

# Seven suppliers with limited substitutes

![the chokepoint board — empty](/diagrams/rendered/board-0.svg)

<div class="text-lg opacity-70 mt-6 text-center">
Each controls a technology that leading-edge production cannot replace quickly. Later sections test that claim against market share and replacement time.
</div>

<!--
A high market share alone does not make a chokepoint. The stronger test is whether production stops without that supplier and how long a credible substitute would take to qualify.
-->

---
layout: center
---

# From design file to data center

![journey bar — start](/diagrams/rendered/journey-0.svg)

<div class="text-lg opacity-70 mt-8">
SAND → DESIGN → FAB → MEMORY → PACKAGE → DATA CENTER.<br>
The course follows one accelerator through each production stage, beginning with design.
</div>

<!--
The production chain starts with silicon, passes through chip design and wafer fabrication, then adds memory and packaging before deployment in a data center. Following one accelerator in this order connects each physical step to the companies that perform it.
-->
