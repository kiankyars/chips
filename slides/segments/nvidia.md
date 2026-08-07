---
layout: section
---

<!-- SEGMENT
id: nvidia
act: II — The Blueprint
tier: P
angle: "Nvidia's product isn't a chip — it's a file plus a twenty-year software moat. The most valuable company on Earth owns no factories, and that one fact is the reason the rest of this journey exists."   # YOU OWN THIS LINE — rewrite it in your voice
runtime: ~7 min
status: draft
seeds: [memory-wall, reticle-limit, owns-no-factories]
pays_off: []
stamps: []
diagrams: [map-design, journey-2, fabless-physical-chain]
sources: research/nvidia.md
-->


# Nvidia designs the accelerator

<div class="text-xl opacity-70 mt-2">Chip architecture and software · Santa Clara, California</div>

<div class="grid grid-cols-2 gap-8 mt-8 items-center">
<div>

![industry map — DESIGN region lit](/diagrams/rendered/map-design.svg)

</div>
<div class="text-lg opacity-80 leading-relaxed">
Nvidia produces the chip design and software.<br>
Manufacturing comes later.
</div>
</div>

![journey bar — DESIGN active](/diagrams/rendered/journey-2.svg)

<!--
- Nvidia defines the accelerator architecture and software in Santa Clara, then sends the completed design into a manufacturing chain of foundries, memory suppliers, and packaging companies.
- Those partners turn Nvidia’s file into the silicon and package shown on this journey.
-->

---

# CPU vs GPU

<div class="grid grid-cols-2 gap-8 mt-8">
<div class="border-2 border-gray-400 rounded-lg p-6 text-center">
<div class="text-5xl font-bold">dozens → hundreds</div>
<div class="opacity-70 mt-2">independently scheduled cores</div>
<div class="text-sm opacity-60 mt-4">optimized for low-latency serial and branch-heavy work</div>
</div>
<div class="border-2 border-green-500 rounded-lg p-6 text-center">
<div class="text-5xl font-bold">160 SMs</div>
<div class="opacity-70 mt-2">640 Tensor Cores</div>
<div class="text-sm opacity-60 mt-4">schedule thousands of arithmetic lanes for parallel throughput</div>
</div>
</div>

<div class="text-center text-lg opacity-70 mt-8">
Neural-network workloads rely heavily on matrix multiplication, which maps efficiently onto SIMT execution and dedicated Tensor Cores.
</div>

<!--
- A server CPU exposes dozens to hundreds of independently scheduled cores optimized for serial work, branches, and low latency.
- Blackwell Ultra groups arithmetic lanes into 160 streaming multiprocessors and adds 640 Tensor Cores for matrix operations.
- A marketed CUDA core is an execution lane, not a CPU-equivalent core; SIMT scheduling turns many lanes into throughput.
-->

---

# GB300 Blackwell Ultra by the numbers

<div class="grid grid-cols-3 gap-6 mt-8 text-center">
<div>
<div class="text-5xl font-bold">208 B</div>
<div class="opacity-70 mt-2">transistors, two dies</div>
</div>
<div>
<div class="text-5xl font-bold">≈858 mm²</div>
<div class="opacity-70 mt-2">standard exposure field; exact die area not disclosed</div>
</div>
<div>
<div class="text-5xl font-bold">1,400 W</div>
<div class="opacity-70 mt-2">per GPU, liquid-cooled</div>
</div>
</div>

<div class="grid grid-cols-2 gap-6 mt-10">
<div class="border-2 border-amber-500 rounded-lg p-4 text-center">
<div class="font-bold">Each compute die approaches the reticle limit.</div>
<div class="text-sm opacity-60 mt-1">The package joins two compute dies.</div>
</div>
<div class="border-2 border-amber-500 rounded-lg p-4 text-center">
<div class="font-bold">288 GB of memory at 8 TB/s.</div>
<div class="text-sm opacity-60 mt-1">Eight 12-high HBM3E stacks keep the cores supplied with data.</div>
</div>
</div>

<!--
- GB300 joins two near-reticle-limit compute dies because one exposure cannot print a larger die.
- Eight 12-high stacks of high-bandwidth memory, or HBM, sit beside them and deliver 8 terabytes per second.
- HBM's bandwidth keeps 160 streaming multiprocessors and their Tensor Cores supplied with operands instead of leaving arithmetic units idle.
-->

---

# CUDA's 20-year software ecosystem

<div class="grid grid-cols-4 gap-4 mt-10 text-center">
<div>
<div class="text-3xl font-bold">2006</div>
<div class="text-sm opacity-60 mt-1">CUDA launches for general-purpose GPU computing</div>
</div>
<div>
<div class="text-3xl font-bold">2012</div>
<div class="text-sm opacity-60 mt-1">AlexNet — trained on two consumer gaming cards</div>
</div>
<div>
<div class="text-3xl font-bold">2016</div>
<div class="text-sm opacity-60 mt-1">Huang hand-delivers the first DGX-1 to OpenAI</div>
</div>
<div>
<div class="text-3xl font-bold">2022</div>
<div class="text-sm opacity-60 mt-1">ChatGPT drives a surge in AI-compute demand</div>
</div>
</div>

<div class="text-center mt-12">
<div class="text-6xl font-bold">6M+</div>
<div class="opacity-70 mt-2">CUDA developers · ~20 years of libraries</div>
</div>

<!--
- CUDA let developers use Nvidia GPUs for general-purpose computing in 2006.
- AlexNet demonstrated their value for deep learning in 2012.
- Nvidia expanded the platform through libraries, tools, and DGX systems.
- More than six million developers contribute to a CUDA ecosystem built over about twenty years.
-->

---

# Nvidia's FY26 GAAP gross margin was 71.1%

<div class="text-center mt-10">
<div class="text-8xl font-bold">71.1%</div>
<div class="opacity-70 mt-3">FY2026 GAAP gross margin</div>
</div>

<div class="text-center text-lg opacity-70 mt-10">
Companywide across accelerators, networking, and systems.<br>
It is not a product-level margin for one GB300.
</div>

<!--
- Nvidia reported a 71.1 percent GAAP gross margin for fiscal 2026.
- CUDA switching costs, accelerator share, networking, and integrated systems support companywide pricing.
- Nvidia does not disclose a gross margin for one GB300 product.
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

# Nvidia: financials and market position

<div class="border-2 border-gray-400 rounded-lg p-4 mt-6">
  <div class="grid grid-cols-5 gap-4 text-center">
    <div><div class="text-3xl font-bold">$215.9 B</div><div class="text-sm opacity-60">revenue FY26</div></div>
    <div><div class="text-3xl font-bold">71.1%</div><div class="text-sm opacity-60">FY26 GAAP gross margin</div></div>
    <div><div class="text-3xl font-bold">~90%</div><div class="text-sm opacity-60">AI-accelerator share</div></div>
<div><div class="text-xl font-bold leading-tight mt-2">CUDA: 20 years of libraries, tools, and developer adoption</div></div>
    <div><div class="text-xl font-bold leading-tight mt-2">ecosystem</div><div class="text-sm opacity-60">must be rebuilt</div></div>
  </div>
  <div class="text-xs opacity-40 text-right mt-2">as of Q2 2026</div>
</div>

<!--
- Nvidia reported $215.9 billion of FY2026 revenue and a 71.1 percent GAAP gross margin.
- Nvidia holds about 90 percent of AI accelerator revenue, supported by twenty years of CUDA libraries and developer adoption.
- Replacing the hardware is easier than rebuilding the software ecosystem and supply relationships.
-->

---

# Company margin is not a GB300 bill of materials

<div class="grid grid-cols-2 gap-8 mt-10 text-center">
<div class="border-2 border-green-500 rounded-lg p-6">
<div class="text-5xl font-bold">71.1%</div>
<div class="opacity-70 mt-2">Nvidia FY26 GAAP gross margin</div>
<div class="text-sm opacity-50 mt-3">companywide · all products and systems</div>
</div>
<div class="border-2 border-gray-400 rounded-lg p-6">
<div class="text-5xl font-bold">$3.7–4.0M</div>
<div class="opacity-70 mt-2">third-party GB300 NVL72 full-rack estimate</div>
<div class="text-sm opacity-50 mt-3">72 GPUs · 36 CPUs · fabric, cooling, and power delivery</div>
</div>
</div>

<div class="text-xl text-center mt-10 opacity-80 leading-relaxed">
Nvidia does not disclose product-level revenue, gross margin, or cost for one GB300.<br>
The next sections trace physical suppliers without claiming a complete product cost.
</div>

<!--
- Nvidia's 71.1 percent FY2026 gross margin covers the whole company, not one GPU.
- The $3.7 million to $4.0 million figure is a third-party estimate for a complete GB300 NVL72 rack, not Nvidia's disclosed list price or recognized revenue.
- Applying one to the other would mix incompatible scopes, so the course traces suppliers without inventing a complete bill of materials.
-->
