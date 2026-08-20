---
layout: default
class: stage-map-focus
sources: [research/nvidia.md]
---

# Nvidia designs the accelerator

<div class="stage-map-focus__map">
  <img src="/diagrams/rendered/map-design.svg" alt="Industry map with Nvidia and the design stage highlighted" />
</div>

<img class="stage-map-focus__journey" src="/diagrams/rendered/journey-2.svg" alt="Chip journey with design active" />

<!--
- Nvidia defines the accelerator architecture and software in Santa Clara, then sends the completed design into a manufacturing chain of foundries, memory suppliers, and packaging companies.
- Those partners turn Nvidia’s file into the silicon and package shown on this journey.
-->

---

# Blackwell Ultra GPU: 160 SMs

<div class="h-[350px] mt-2">
  <img class="w-full h-full object-contain" src="/diagrams/rendered/nvidia-core-hierarchy.svg" alt="Blackwell Ultra hierarchy showing two physical dies acting as one GPU and a zoom into one streaming multiprocessor" />
</div>

<!--
- Streaming multiprocessors are physical compute blocks, not virtualized CPU-like cores. Nvidia says the enabled count varies by SKU; MIG partitioning is separate.
- Two reticle-sized dies are linked by NV-HBI and exposed to CUDA as one coherent GPU.
- The right side zooms into one SM; the bottom row gives the two chip-wide totals without introducing another unit name.
-->

---

# Why GPUs fit AI: the same math repeats across many outputs

<div class="h-[390px] mt-2">
  <img class="w-full h-full object-contain" src="/diagrams/rendered/nvidia-matrix-parallelism.svg" alt="One activation block-row and one weight block-column form an output tile; many such tile jobs can be assigned across a pool of streaming multiprocessors" />
</div>

<!--
- This is the causal bridge: one output tile comes from multiplying and accumulating an activation block-row against a weight block-column.
- A full layer contains many tile jobs. Once inputs are available, the scheduler distributes them across the SM pool.
- Parallelism is not unlimited: reductions within a tile, dependencies between layers, branches, memory bandwidth, and communication constrain utilization.
-->

---

# CUDA turns the GPU into a software platform

<div class="grid grid-cols-[0.8fr_1.4fr] gap-12 mt-10 items-center">
<div class="text-center">
<div class="text-7xl font-bold">CUDA</div>
<div class="text-5xl font-bold mt-8">6M+</div>
<div class="text-lg opacity-70 mt-2">developers</div>
</div>

<div class="space-y-7">
<div>
<div class="text-2xl font-bold">Programming model</div>
<div class="text-lg opacity-70 mt-1">Exposes the GPU's parallel hardware to software.</div>
</div>
<div>
<div class="text-2xl font-bold">Optimized libraries</div>
<div class="text-lg opacity-70 mt-1">Supply tuned routines for AI math and communication.</div>
</div>
<div>
<div class="text-2xl font-bold">Development tools</div>
<div class="text-lg opacity-70 mt-1">Compile, debug, profile, and deploy GPU workloads.</div>
</div>
</div>
</div>

<div class="text-center text-xl mt-10">
A competing accelerator must support the <b>code and workflows</b> teams already use.
</div>

<!--
- CUDA is the programming model, libraries, and toolchain that let developers use Nvidia GPUs for general-purpose parallel computing.
- Nvidia has accumulated about twenty years of optimized software and more than six million developers around the platform.
- The point is compatibility: a competing chip must support existing code and workflows, not merely match hardware speed.
-->

---
class: visual-sequence paper-visual
title: "Fabless"
---

<div class="visual-sequence__kicker">FABLESS</div>

<div class="visual-sequence__frame">
  <img src="/diagrams/rendered/fabless-physical-chain.png" alt="A chip layout becomes compute dies, HBM stacks, and a completed accelerator package" />
</div>

<div class="visual-sequence__caption"><strong>Nvidia supplies the design.</strong><span>TSMC and the memory makers supply the physical chip.</span></div>
<div class="visual-sequence__source">GPU dies + packaging · TSMC · HBM · SK hynix / Micron / Samsung</div>

<!--
- Nvidia supplies the design and software; TSMC fabricates the compute dies and assembles the package; SK hynix, Micron, or Samsung supplies the HBM.
- A completed accelerator depends on several manufacturers even though Nvidia controls the product.
-->

---

# Nvidia's scale and economics

<div class="border-2 border-gray-400 rounded-lg p-4 mt-6">
  <div class="grid grid-cols-3 gap-8 text-center">
    <div><div class="text-3xl font-bold">$215.9 B</div><div class="text-sm opacity-60">revenue FY26</div></div>
    <div><div class="text-3xl font-bold">71.1%</div><div class="text-sm opacity-60">reported gross margin</div><div class="text-xs opacity-50 mt-1">GAAP · generally accepted accounting principles</div></div>
    <div><div class="text-3xl font-bold">~90%</div><div class="text-sm opacity-60">AI-accelerator share</div></div>
  </div>
  <div class="text-xs opacity-40 text-right mt-2">as of Q2 2026</div>
</div>

<!--
- Nvidia reported $215.9 billion of FY2026 revenue and a 71.1 percent GAAP gross margin.
- GAAP means generally accepted accounting principles: the standardized reported figure rather than a company-adjusted non-GAAP measure.
- Nvidia holds about 90 percent of AI accelerator revenue; that share is an industry estimate, not a company-reported metric.
-->
