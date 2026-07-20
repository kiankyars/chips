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
diagrams: [map-design, journey-2]
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
<div class="text-6xl font-bold">~64–128</div>
<div class="opacity-70 mt-2">powerful cores</div>
<div class="text-sm opacity-60 mt-4">optimized for low-latency serial and branch-heavy work</div>
</div>
<div class="border-2 border-green-500 rounded-lg p-6 text-center">
<div class="text-6xl font-bold">20,480</div>
<div class="opacity-70 mt-2">simple cores</div>
<div class="text-sm opacity-60 mt-4">optimized for high-throughput parallel operations</div>
</div>
</div>

<div class="text-center text-lg opacity-70 mt-8">
Neural-network workloads rely heavily on matrix multiplication, which GPUs divide across many cores.
</div>

<!--
- A server CPU uses dozens of complex cores to handle serial work and branches with low latency.
- A GPU uses thousands of smaller cores to apply the same operation across many data elements.
- Neural networks rely on matrix multiplication, so GPUs can divide that work across their cores.
-->

---

# GB300 Blackwell Ultra by the numbers

<div class="grid grid-cols-3 gap-6 mt-8 text-center">
<div>
<div class="text-5xl font-bold">208 B</div>
<div class="opacity-70 mt-2">transistors, two dies</div>
</div>
<div>
<div class="text-5xl font-bold">~858 mm²</div>
<div class="opacity-70 mt-2">per die — the reticle limit</div>
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
<div class="text-sm opacity-60 mt-1">Twelve HBM3E stacks keep the cores supplied with data.</div>
</div>
</div>

<!--
- GB300 joins two near-reticle-limit compute dies because one exposure cannot print a larger die.
- Twelve stacks of high-bandwidth memory, or HBM, sit beside them and deliver 8 terabytes per second.
- HBM's bandwidth keeps 20,480 compute cores supplied with operands instead of leaving the arithmetic units idle.
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
<div class="text-6xl font-bold">4M+</div>
<div class="opacity-70 mt-2">registered CUDA developers · ~20 years of libraries</div>
</div>

<!--
- CUDA let developers use Nvidia GPUs for general-purpose computing in 2006.
- AlexNet demonstrated their value for deep learning in 2012.
- Nvidia expanded the platform through libraries, tools, and DGX systems.
- More than four million registered developers rely on about twenty years of accumulated software.
-->

---

# Nvidia's gross margin is about 75%

<div class="text-center mt-10">
<div class="text-8xl font-bold">~75%</div>
<div class="opacity-70 mt-3">gross margin</div>
</div>

<div class="text-center text-lg opacity-70 mt-10">
Typical chipmakers report roughly 40–50%.<br>
CUDA switching costs, market share, and high-value systems support Nvidia's margin.
</div>

<!--
- Nvidia’s gross margin is about 75 percent, above the 40 to 50 percent range common among chipmakers.
- CUDA raises switching costs, while Nvidia’s accelerator share and integrated networking systems support pricing.
- The margin applies across the company, so it does not describe the economics of every product.
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
    <div><div class="text-3xl font-bold">~75%</div><div class="text-sm opacity-60">gross margin</div></div>
    <div><div class="text-3xl font-bold">~90%</div><div class="text-sm opacity-60">AI-accelerator share</div></div>
<div><div class="text-xl font-bold leading-tight mt-2">CUDA: 20 years of libraries, tools, and developer adoption</div></div>
    <div><div class="text-3xl font-bold">~10 yrs</div><div class="text-sm opacity-60">to replace</div></div>
  </div>
  <div class="text-xs opacity-40 text-right mt-2">as of Q2 2026</div>
</div>

<!--
- Nvidia reported $215.9 billion of FY2026 revenue and a gross margin near 75 percent.
- Nvidia holds about 90 percent of AI accelerator revenue, supported by twenty years of CUDA libraries and developer adoption.
- Replacing the hardware is easier than rebuilding the software ecosystem and supply relationships.
-->

---

# Estimated economics of a GB300-class GPU

<div class="mt-10">
  <div class="flex w-full h-16 rounded overflow-hidden text-sm font-bold text-center">
    <div class="bg-green-600 flex items-center justify-center" style="width:75%">Nvidia gross margin ~75%</div>
<div class="bg-gray-500 flex items-center justify-center" style="width:25%">estimated cost of revenue ~25%</div>
  </div>
  <div class="text-xs opacity-50 mt-2">illustrative only · companywide margin applied to an analyst-estimated ~$50k GPU price</div>
</div>

<div class="text-2xl text-center mt-12 opacity-80">
The next sections trace foundry, memory, packaging, and equipment costs.
</div>

<!--
- The gray portion combines several kinds of cost rather than one supplier invoice.
- TSMC fabricates the logic dies and performs advanced packaging; memory makers supply HBM; equipment and materials costs are embedded in those manufacturing prices.
- Nvidia also includes networking, boards, cooling, and system assembly in cost of revenue.
-->
