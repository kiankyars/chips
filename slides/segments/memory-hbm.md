---
layout: section
---

<!-- SEGMENT
id: memory-hbm
act: V — Memory & The Assembly
tier: D            # duel — a three-way contest told as one story (SK hynix · Samsung · Micron)
angle: "Logic sells genius; memory sells nerve. For fifty years memory was the industry's commodity purgatory — until HBM welded it to the GPU and turned the boldest capex bet in silicon into the single biggest line on an AI chip's bill."   # YOU OWN THIS LINE — rewrite it in your voice
runtime: ~9 min
status: draft
seeds: []                          # nothing new planted for a later segment; the closer hands off to `packaging`
pays_off: [memory-wall]            # the bandwidth problem seeded in `nvidia` gets its bill here
stamps: [hbm]                      # chokepoint #6 — SK hynix / HBM qualified-supply bottleneck
diagrams: [map-memory, journey-4, board-6]
sources: research/memory-hbm.md
-->


# High-bandwidth memory

<div class="text-xl opacity-70 mt-2">Part 5 · Memory and packaging · Icheon, Suwon, and Boise</div>

<div class="grid grid-cols-2 gap-8 mt-8 items-center">
<div>

![industry map — MEMORY region lit](/diagrams/rendered/map-memory.svg)

</div>
<div class="text-lg opacity-80 leading-relaxed">
The GPU dies are fabricated.<br>
The next constraint is memory bandwidth.
</div>
</div>

![journey bar — MEMORY active](/diagrams/rendered/journey-4.svg)

<!--
The logic dies are finished, but their compute units need data at much higher bandwidth than conventional memory can deliver. The accelerator now adds HBM dies beside the GPU and joins them through advanced packaging.
-->

---
class: visual-sequence paper-visual
title: "Memory cells"
---

<div class="visual-sequence__kicker">MEMORY CELLS</div>

<div class="visual-sequence__frame">
  <img src="/diagrams/rendered/memory-types-v2.png" alt="A leaking DRAM capacitor cell that must refresh beside a vertical 3D NAND charge-storage structure" />
</div>

<div class="visual-sequence__caption"><strong>DRAM needs refresh.</strong><span>NAND retains data without power.</span></div>
<div class="visual-sequence__source">DRAM · ~64 ms refresh · NAND · 200–400+ layers</div>

<!--
DRAM stores each bit as charge in a tiny capacitor and refreshes it on a cycle of about 64 milliseconds. NAND traps charge for years without power and gains density by stacking more than 200 layers. Those designs serve different jobs: DRAM feeds active computation, while NAND provides persistent storage.
-->

---

# Capacity additions drive DRAM price cycles

<div class="grid grid-cols-2 gap-8 mt-6 items-center">
<div>

<div class="text-lg leading-relaxed">
New fabs take <b>~2 years</b> and <b>&gt;$15B</b> to build.<br>
Suppliers expand during shortages; the new capacity arrives together and drives prices down.
</div>

<div class="text-sm opacity-60 mt-6">
Dozens of DRAM makers in the '80s–'90s → <b>3 companies ≈ 90% of DRAM</b> today.
</div>

</div>
<div class="flex flex-col gap-4">
<div class="border-2 border-red-400 rounded-lg p-4 text-center">
<div class="text-2xl font-bold">2022–23 bust</div>
<div class="text-sm opacity-70 mt-1">DRAM/NAND prices roughly <b>halved</b> · inventories ~31 weeks</div>
</div>
<div class="border-2 border-green-500 rounded-lg p-4 text-center">
<div class="text-2xl font-bold">2025–26 boom</div>
<div class="text-sm opacity-70 mt-1">conventional DRAM contracts <b>+93–98%</b> in a single quarter</div>
</div>
</div>
</div>

<!--
Memory suppliers add capacity during shortages, but a new fab takes about two years and more than $15 billion. Several projects can reach production together and push prices down. Dozens of DRAM makers once competed. Repeated cycles of shortage and oversupply left three companies controlling about 90 percent of the market.
-->

---

# DRAM leadership moved from the US to Japan to Korea

<div class="grid grid-cols-4 gap-3 mt-8 text-center text-sm">
<div class="border rounded-lg p-3">
<div class="text-lg font-bold">America</div>
<div class="opacity-60">first commercial success</div>
<div class="mt-2">Intel 1103, 1970 —<br>best-selling chip in the world by '72</div>
</div>
<div class="border rounded-lg p-3">
<div class="text-lg font-bold">Japan</div>
<div class="opacity-60">~75–80% share in the 1980s</div>
<div class="mt-2">~75–80% of world DRAM;<br>the '85 crash drove <b>Intel out of memory</b></div>
</div>
<div class="border rounded-lg p-3">
<div class="text-lg font-bold">Korea</div>
<div class="opacity-60">Samsung took #1 in 1992</div>
<div class="mt-2">Samsung #1 in 1992 —<br>held it <b>33 years</b></div>
</div>
<div class="border-2 border-amber-500 rounded-lg p-3">
<div class="text-lg font-bold">2025</div>
<div class="opacity-60">SK hynix takes #1</div>
<div class="mt-2">The lead stays in Korea,<br>driven by <b>HBM</b></div>
</div>
</div>

<div class="text-center text-lg mt-8">
DRAM leaders kept investing during downturns.
</div>

<!--
US companies created the commercial DRAM market, Japanese suppliers held about three quarters of it in the 1980s, and Korean firms then took the lead. Samsung became number one in 1992, while SK hynix moved ahead in 2025 as HBM demand rewarded its manufacturing investment.
-->

---

# Compute grew much faster than memory bandwidth

<div class="grid grid-cols-2 gap-10 mt-10 text-center items-center">
<div>
<div class="text-6xl font-bold">~60,000×</div>
<div class="opacity-70 mt-2">server compute growth, 20 yrs</div>
</div>
<div>
<div class="text-6xl font-bold">~100×</div>
<div class="opacity-70 mt-2">memory bandwidth growth, same 20 yrs</div>
</div>
</div>

<div class="text-center text-2xl mt-10 leading-relaxed">
GPU cores spend much of their time waiting<br>
for weights to arrive from memory.
</div>

<!--
Server compute grew about 60,000-fold over two decades, while memory bandwidth improved about 100-fold. That gap leaves accelerator cores waiting for model weights and intermediate results. More arithmetic units provide little benefit when the memory system cannot keep them supplied.
-->

---
class: visual-sequence paper-visual
title: "High-bandwidth memory"
---

<div class="visual-sequence__kicker">HIGH-BANDWIDTH MEMORY</div>

<div class="visual-sequence__frame">
  <img src="/diagrams/rendered/hbm-package-v2.png" alt="An exploded HBM stack with DRAM dies, through-silicon vias, microbumps, a logic base die, and a wide interface to a nearby GPU on an interposer" />
</div>

<div class="visual-sequence__caption"><strong>Move memory onto the package.</strong><span>Then make the connection thousands of bits wide.</span></div>
<div class="visual-sequence__source">8 / 12 / 16 dies · 1,024–2,048-bit interface</div>

<!--
HBM places stacks of DRAM beside the processor and connects them through an interface thousands of bits wide. Each stack contains 8, 12, or 16 memory dies. The short, wide connection delivers far more bandwidth than conventional memory modules can provide.
-->

---

# HBM is sold through qualification and long-term contracts

<div class="grid grid-cols-3 gap-6 mt-8 text-center">
<div>
<div class="text-5xl font-bold">~3×</div>
<div class="opacity-70 mt-2">wafer capacity per GB<br>vs DDR5</div>
</div>
<div>
<div class="text-5xl font-bold">&gt;50%</div>
<div class="opacity-70 mt-2">of a B300's build cost<br>is the memory</div>
</div>
<div>
<div class="text-5xl font-bold">2026</div>
<div class="opacity-70 mt-2">supply <b>sold out</b><br>12–24 months ahead</div>
</div>
</div>

<div class="text-center text-lg mt-10 leading-relaxed">
Customers qualify suppliers and negotiate contracts <b>12–24 months ahead</b>.<br>
HBM4 allows <b>customer-specific logic base dies</b>.<br>
<span class="opacity-70">HBM is sold mainly through qualified contracts rather than a commodity spot market.</span>
</div>

<!--
HBM uses about three times as much wafer capacity per gigabyte as DDR5 and accounts for more than half of a B300's build cost. Suppliers sell capacity through customer qualification and contracts arranged 12 to 24 months ahead. Custom base dies in HBM4 deepen that product-specific relationship.
-->

---
class: visual-sequence paper-visual
title: "HBM supplier race"
---

<div class="visual-sequence__kicker">HBM SUPPLIER RACE</div>

<div class="visual-sequence__frame">
  <img src="/diagrams/rendered/hbm-supplier-race.svg" alt="Three supplier lanes show SK hynix, Samsung, and Micron reaching Nvidia qualification for Rubin HBM4" />
</div>

<div class="visual-sequence__caption"><strong>All three suppliers</strong><span>reached Rubin HBM4 qualification by mid-2026.</span></div>
<div class="visual-sequence__source">Q1 2026 · SK hynix ~56% HBM · Micron ~19–21%</div>

<!--
SK hynix entered 2026 with about 56 percent of the HBM market, while Micron held about one fifth. Samsung, SK hynix, and Micron had all qualified HBM4 for Nvidia's Rubin platform by mid-2026, giving customers three approved suppliers with different volume and yield positions.
-->

---

# HBM supplier comparison

<div class="grid grid-cols-3 gap-4 mt-4">

<div class="border-2 border-green-500 rounded-lg p-3">
<div class="text-lg font-bold text-center">SK hynix</div>
<div class="grid grid-cols-2 gap-2 text-center mt-2 text-sm">
<div><div class="text-xl font-bold">₩97.2T</div><div class="opacity-60">revenue FY25</div></div>
<div><div class="text-xl font-bold">49%</div><div class="opacity-60">op. margin FY25</div></div>
<div><div class="text-xl font-bold">28.8%</div><div class="opacity-60">DRAM · <b>56% HBM</b></div></div>
<div><div class="text-xl font-bold">~5+ yrs</div><div class="opacity-60">to replace</div></div>
</div>
<div class="text-xs opacity-70 text-center mt-2">HBM yield lead and ~56% share</div>
</div>

<div class="border-2 border-red-400 rounded-lg p-3">
<div class="text-lg font-bold text-center">Samsung</div>
<div class="grid grid-cols-2 gap-2 text-center mt-2 text-sm">
<div><div class="text-xl font-bold">₩74.8T</div><div class="opacity-60">memory rev 1Q26</div></div>
<div><div class="text-xl font-bold">~66%</div><div class="opacity-60">DS op. margin 1Q26</div></div>
<div><div class="text-xl font-bold">38.6%</div><div class="opacity-60">DRAM #1</div></div>
<div><div class="text-xl font-bold">~5+ yrs</div><div class="opacity-60">to replace</div></div>
</div>
<div class="text-xs opacity-70 text-center mt-2">integrates memory and 4 nm base-die production</div>
</div>

<div class="border-2 border-blue-400 rounded-lg p-3">
<div class="text-lg font-bold text-center">Micron</div>
<div class="grid grid-cols-2 gap-2 text-center mt-2 text-sm">
<div><div class="text-xl font-bold">$41.5B</div><div class="opacity-60">revenue FQ3'26</div></div>
<div><div class="text-xl font-bold">84.6%</div><div class="opacity-60">gross margin</div></div>
<div><div class="text-xl font-bold">22.4%</div><div class="opacity-60">DRAM · ~20% HBM</div></div>
<div><div class="text-xl font-bold">~5+ yrs</div><div class="opacity-60">to replace</div></div>
</div>
<div class="text-xs opacity-70 text-center mt-2">only US supplier among the three largest</div>
</div>

</div>

<div class="text-xs opacity-40 text-right mt-3">as of Q2 2026 · shares 1Q26</div>

<!--
SK hynix leads HBM share and yield; Samsung combines memory with its own logic manufacturing. Micron is the only US-based company among the three leading DRAM and HBM suppliers. Qualification, packaging expertise, and booked capacity make substitution slow even with three approved sources.
-->

---
class: visual-sequence paper-visual
title: "The memory supercycle"
---

<div class="visual-sequence__kicker">THE MEMORY SUPERCYCLE</div>

<div class="visual-sequence__frame">
  <img src="/diagrams/rendered/dram-revenue-surge.svg" alt="Bars compare 2025 DRAM revenue with the 2026 forecast while three wafers show HBM's higher capacity use" />
</div>

<div class="visual-sequence__caption"><strong>Forecast DRAM revenue</strong><span>rises from $165.7B in 2025 to $404.3B in 2026.</span></div>
<div class="visual-sequence__source">TrendForce forecast · 2026E +144%</div>

<!--
Industry forecasts put DRAM revenue at $404.3 billion in 2026, up from $165.7 billion in 2025. HBM demand and higher contract prices drive much of that increase. The number is a forecast and memory pricing has a long record of sharp reversals after capacity catches up.
-->

---

# Chokepoint #6: SK hynix HBM supply

![chokepoint board — 6 stamps](/diagrams/rendered/board-6.svg)

<div class="text-xl mt-6 text-center">
SK hynix supplies about <b>56% of HBM</b> and has been Nvidia's primary supplier since H100.
</div>

<div class="text-sm opacity-60 mt-10 text-center">
HBM stacks and GPU dies still have to be joined in one package.
</div>

<!--
SK hynix supplies about 56 percent of HBM and has served as Nvidia's main supplier since H100. Its yield lead and booked capacity make replacement slow even though Samsung and Micron also produce qualified HBM. The dependency concerns available volume and execution rather than a single-source monopoly.
-->
