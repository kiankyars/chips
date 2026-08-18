---
layout: default
class: visual-sequence paper-visual
title: "The object"
---

<!-- SEGMENT
id: cold-open
act: 0 — The Object
tier: —
angle: "Use one 2025–26 GB300-class accelerator as the stable tracer case, then bridge once to the Rubin frontier."
runtime: ~6 min
status: draft
seeds: [the-object]
pays_off: []
stamps: []
diagrams: [inference-forward-pass, journey-0]
sources: research/nvidia.md, research/foundations.md
note: BUILD AND RECORD LAST — this opening establishes the object, its scale, and the course route.
-->


<div class="visual-sequence__kicker">THE OBJECT</div>

<div class="visual-sequence__frame">
  <img src="/assets/nvidia-grace-blackwell-ultra-superchip.webp" alt="Official NVIDIA image of a Grace Blackwell Ultra board with two Blackwell Ultra GPUs, one Grace CPU, and two ConnectX-8 SuperNICs" />
</div>

<div class="visual-sequence__caption"><strong>Grace Blackwell Ultra</strong><span>Two GPUs · one Grace CPU · two ConnectX-8 SuperNICs</span></div>
<div class="visual-sequence__source">Official NVIDIA image · 2025–26 tracer case</div>

<!--
- This GB300 compute board carries two Blackwell Ultra GPUs, one Grace CPU, and two ConnectX-8 SuperNICs.
- The course follows one GPU package: two compute dies beside HBM, assembled through advanced packaging.
-->

---
class: visual-sequence paper-visual
title: "Inside one Blackwell Ultra GPU"
---

<div class="visual-sequence__kicker">INSIDE ONE OF THE TWO GPUS</div>

<div class="visual-sequence__frame">
  <img src="/assets/nvidia-blackwell-ultra-gpu-architecture.webp" alt="Official NVIDIA diagram of one Blackwell Ultra GPU, showing two reticle-sized dies joined by NV-HBI, HBM controllers, graphics processing clusters, L2 cache, and PCIe, NVLink, and NVLink-C2C interfaces" />
</div>

<div class="visual-sequence__caption"><strong>One GPU, two reticle-sized dies.</strong><span>NV-HBI bridges them at 10 TB/s.</span></div>
<div class="visual-sequence__source">NVIDIA Technical Blog · Figure 1</div>

<!--
- The board on the previous slide carries two of these GPUs; this diagram zooms into one Blackwell Ultra GPU, not the full GB300 superchip.
- Two reticle-sized dies connect at 10 TB/s through NV-HBI and appear to CUDA as one GPU with up to 160 streaming multiprocessors and 640 Tensor Cores.
- The edge interfaces cross scales: HBM feeds the package, NVLink reaches the rack fabric, NVLink-C2C reaches Grace, and PCIe reaches a host.
-->

---
class: full-slide-visual
title: "One inference forward pass"
---

<img src="/diagrams/rendered/inference-forward-pass.png" alt="A two-lane schematic separates the occasional model-load path through remote storage, local NVMe, Grace memory, and HBM from the per-request path through networking, the Grace CPU, HBM, shared L2, and a streaming multiprocessor inside the GPU compute hierarchy" />

<!--
- SSD is for model loading, not every request: checkpoints may be cached locally, staged through Grace memory, then kept resident in HBM.
- Each request enters through networking; Grace tokenizes, batches, and launches work against resident HBM weights and KV cache.
- Shared L2 feeds SM-local memory and Tensor Cores; GPCs and TPCs are containers. Decode repeats the pass per generated token.
-->

---

# One GPU sits inside an $800B buildout

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
<div class="text-6xl font-bold">~$800 B</div>
<div class="opacity-70 mt-3">estimated 2026 capex across six U.S. hyperscalers; near $1T projected for 2027</div>
</div>
</div>

<div class="text-sm opacity-50 mt-10 text-center">Capex estimate: Moody's · July 2026</div>

<!--
- The scale jumps from 208 billion transistors in one GPU to 72 GPUs in a rack and about $800 billion of annual infrastructure spending.
- Moody's estimates six U.S. hyperscalers could approach $785 billion in 2026, with spending projected to near $1 trillion in 2027.
- These totals include buildings, power, networking, servers, and other infrastructure; they are not Nvidia revenue or chip spending alone.
-->

---

# Blackwell is the case study; Rubin is the frontier

<div class="grid grid-cols-2 gap-10 mt-9">
<div class="border-2 border-gray-400 rounded-lg p-6">
<div class="text-sm opacity-60 tracking-widest">2025–26 TRACER CASE</div>
<div class="text-3xl font-bold mt-2">Blackwell Ultra</div>
<div class="mt-5 leading-relaxed">TSMC 4NP · HBM3E · CoWoS-L<br>GB300 systems available now</div>
</div>
<div class="border-2 border-cyan-500 rounded-lg p-6">
<div class="text-sm opacity-60 tracking-widest">2026 FRONTIER</div>
<div class="text-3xl font-bold mt-2">Vera Rubin</div>
<div class="mt-5 leading-relaxed">TSMC 3 nm · HBM4 · production photonics<br>shipments scheduled to begin in fall 2026</div>
</div>
</div>

<div class="text-xl mt-9 text-center"><b>The parts advance.</b> The dependency map survives.</div>
<div class="text-sm opacity-50 mt-5 text-center">NVIDIA · May and July 2026</div>

<!--
- Nvidia now describes Grace Blackwell as the previous generation relative to Vera Rubin, so this course does not pretend the tracer is the newest architecture.
- Blackwell remains the cleaner case study because its logic, HBM3E, and CoWoS-L supply chain is already visible in shipping systems.
- Rubin changes the node, memory generation, and system networking, but it still depends on design software, TSMC logic, qualified HBM, advanced packaging, and rack integration.
-->

---
layout: default
class: journey-overview
title: "One accelerator, six stages"
---

# One accelerator, six stages

<div class="journey-overview__graphic">
  <img src="/diagrams/rendered/journey-0.svg" alt="The course route from physics through design, fabrication, memory, packaging, and deployment in a data center" />
</div>

<!--
- The course follows one accelerator from the physics of a transistor to an operating compute system installed in a powered and cooled data center.
- Each stage introduces a different set of companies, physical constraints, and supply-chain control points.
-->
