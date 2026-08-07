---
layout: default
class: visual-sequence paper-visual
title: "The object"
---

<!-- SEGMENT
id: cold-open
act: 0 — The Object
tier: —
angle: "Use one GB300-class accelerator as the physical object whose supply chain the course will trace."
runtime: ~4 min
status: draft
seeds: [the-object, the-seven, the-economics-ledger]
pays_off: []
stamps: []
diagrams: [map-dark, board-0, journey-0]
sources: research/nvidia.md, research/foundations.md
note: BUILD AND RECORD LAST — this front-loads four promises (map, board, economics ledger, "seven"). Only lock it once every device has survived the build.
-->


<div class="visual-sequence__kicker">THE OBJECT</div>

<div class="visual-sequence__frame">
  <img src="/assets/nvidia-grace-blackwell-ultra-superchip.webp" alt="Official NVIDIA image of a Grace Blackwell Ultra board with two Blackwell Ultra GPUs, one Grace CPU, and two ConnectX-8 SuperNICs" />
</div>

<div class="visual-sequence__caption"><strong>Grace Blackwell Ultra</strong><span>Two GPUs · one Grace CPU · two ConnectX-8 SuperNICs</span></div>
<div class="visual-sequence__source">Official NVIDIA image</div>

<!--
- This GB300 compute board carries two Blackwell Ultra GPUs, one Grace CPU, and two ConnectX-8 SuperNICs.
- The course follows one GPU package: two compute dies beside HBM, assembled through advanced packaging.
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
- These numbers trace the scaling chain.
- One package has 208 billion transistors; 72 packages become a $4 million rack with a facility-scale power load.
- Hyperscaler spending shows how demand for that hardware propagates through the semiconductor industry.
-->

---

# The companies behind one accelerator

![the industry map — dark](/diagrams/rendered/map-dark.svg)

<div class="text-lg opacity-70 mt-6 text-center">
This map follows the accelerator from design software to the finished package. Each section adds the suppliers responsible for one stage.
</div>

<!--
- No company owns the whole route.
- Nvidia designs the accelerator, TSMC fabricates its logic, memory suppliers build HBM, and packaging firms assemble the final module.
- The finished device records all of those dependencies.
-->

---

# Seven supply-chain control points

![the chokepoint board — empty](/diagrams/rendered/board-0.svg)

<div class="text-lg opacity-70 mt-6 text-center">
Each concentrates a technology or qualified capacity that leading-edge production cannot replace quickly. Later sections test the severity against share, qualification, and time to scale.
</div>

<!--
- A high market share alone does not make a chokepoint.
- The stronger test is whether a disruption constrains production before another supplier, qualified set, or region can scale.
-->

---
layout: center
---

# From design file to data center

![journey bar — start](/diagrams/rendered/journey-0.svg)

<div class="text-lg opacity-70 mt-8">
PHYSICS → DESIGN → FAB → MEMORY → PACKAGE → DATA CENTER.<br>
The course starts with the device's physical constraints, then follows one accelerator through design, production, and deployment.
</div>

<div class="border border-cyan-400 rounded-lg px-5 py-3 mt-6 text-base text-center">
Beginning in Act II, each act closes with an <b>Economics Ledger</b> that separates company financials, product estimates, and supplier relationships.
</div>

<!--
- The production chain starts with silicon, passes through chip design and wafer fabrication, then adds memory and packaging before deployment in a data center.
- Following one accelerator in this order connects each physical step to the companies that perform it.
- The Economics Ledger keeps unlike financial scopes separate as the supply chain fills in.
-->
