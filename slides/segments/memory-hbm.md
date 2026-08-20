---
class: visual-sequence paper-visual
title: "Memory cells"
sources: [research/memory-hbm.md]
---

<div class="visual-sequence__kicker">DRAM REFRESHES; NAND RETAINS</div>

<div class="visual-sequence__frame">
  <img src="/diagrams/rendered/memory-types.svg" alt="A DRAM capacitor cell that must refresh beside a vertical NAND charge-storage structure" />
</div>

<!--
- DRAM stores each bit as charge in a tiny capacitor and refreshes it on a cycle of about 64 milliseconds.
- NAND traps charge for years without power and gains density by stacking more than 200 layers.
- Those designs serve different jobs: DRAM feeds active computation, while NAND provides persistent storage.
-->

---

# A two-year fab lag turns shortages into memory cycles

<div class="grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr] gap-3 items-center mt-12 text-center">
<div><div class="text-xl font-bold">SHORTAGE</div><div class="text-sm opacity-60 mt-2">prices rise</div></div>
<div class="text-3xl opacity-40">→</div>
<div><div class="text-xl font-bold">BUILD</div><div class="text-sm opacity-60 mt-2">&gt;$15B per fab</div></div>
<div class="text-3xl opacity-40">→</div>
<div><div class="text-xl font-bold">WAIT</div><div class="text-sm opacity-60 mt-2">~2 years</div></div>
<div class="text-3xl opacity-40">→</div>
<div><div class="text-xl font-bold">CAPACITY ARRIVES</div><div class="text-sm opacity-60 mt-2">projects overlap</div></div>
<div class="text-3xl opacity-40">→</div>
<div><div class="text-xl font-bold">BUST</div><div class="text-sm opacity-60 mt-2">prices fall</div></div>
</div>

<div class="grid grid-cols-2 gap-12 mt-12">
<div class="border-t-2 border-red-400 pt-4">
<div class="text-xl font-bold">2022–23</div>
<div class="opacity-65 mt-1">prices roughly halved · inventories ~31 weeks</div>
</div>
<div class="border-t-2 border-green-500 pt-4">
<div class="text-xl font-bold">2025–26</div>
<div class="opacity-65 mt-1">DRAM contracts +93–98% in one quarter</div>
</div>
</div>

<div class="text-center text-base opacity-60 mt-9">Repeated cycles left three companies with ≈90% of DRAM.</div>

<!--
- Memory suppliers add capacity during shortages, but a new fab takes about two years and more than $15 billion.
- Several projects can reach production together and push prices down.
- Dozens of DRAM makers once competed.
- Repeated cycles of shortage and oversupply left three companies controlling about 90 percent of the market.
-->

---

# DRAM leadership followed the firms that kept investing

<div class="grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1.2fr] gap-3 items-center mt-12 text-center">
<div><div class="text-2xl font-bold">1970</div><div class="mt-2">U.S. creates the market</div><div class="text-sm opacity-55 mt-1">Intel 1103</div></div>
<div class="text-3xl opacity-35">→</div>
<div><div class="text-2xl font-bold">1980s</div><div class="mt-2">Japan reaches 75–80%</div><div class="text-sm opacity-55 mt-1">global DRAM share</div></div>
<div class="text-3xl opacity-35">→</div>
<div><div class="text-2xl font-bold text-red-300">1985</div><div class="mt-2">the crash pushes Intel out</div></div>
<div class="text-3xl opacity-35">→</div>
<div><div class="text-2xl font-bold">1992</div><div class="mt-2">Samsung becomes #1</div><div class="text-sm opacity-55 mt-1">holds the lead for 33 years</div></div>
<div class="text-3xl opacity-35">→</div>
<div><div class="text-2xl font-bold text-amber-300">2025</div><div class="mt-2">SK hynix leads Q1–Q3</div><div class="text-sm opacity-65 mt-1">Samsung retakes Q4</div></div>
</div>

<div class="text-center text-xl mt-14">The leaders kept investing through downturns.</div>

<!--
- US companies created the commercial DRAM market, Japanese suppliers held about three quarters of it in the 1980s, and Korean firms then took the lead.
- Samsung became number one in 1992; SK hynix led quarterly DRAM revenue from Q1 through Q3 2025 before Samsung retook the lead in Q4.
- SK hynix remained the HBM-share leader entering 2026, so DRAM scale and HBM leadership are different scoreboards.
-->

---

# Compute grew ~60,000×; the memory feed grew ~100×

<div class="text-sm opacity-45 tracking-widest mt-7 text-center">20-YEAR SERVER COMPARISON</div>

<div class="grid grid-cols-[1fr_auto_1fr_auto_1fr] gap-6 items-center mt-10 text-center">
<div>
<div class="text-sm opacity-50 tracking-widest">MEMORY</div>
<div class="text-3xl font-bold mt-3">WEIGHTS</div>
</div>
<div class="text-4xl opacity-40">→</div>
<div class="border-y-2 border-amber-400 py-7">
<div class="text-5xl font-bold">~100×</div>
<div class="opacity-65 mt-2">bandwidth growth</div>
</div>
<div class="text-4xl opacity-40">→</div>
<div>
<div class="text-5xl font-bold">~60,000×</div>
<div class="opacity-65 mt-2">compute growth</div>
<div class="text-sm opacity-50 mt-2">GPU cores</div>
</div>
</div>

<div class="text-center text-2xl mt-12">The narrow feed leaves arithmetic units waiting for weights.</div>

<!--
- Server compute grew about 60,000-fold over two decades, while memory bandwidth improved about 100-fold.
- The bandwidth gap leaves accelerator cores waiting for model weights and intermediate results.
- More arithmetic units provide little benefit when the memory system cannot keep them supplied.
-->

---
class: visual-sequence paper-visual
title: "HBM mechanism"
---

<div class="visual-sequence__kicker">STACK DRAM; CONNECT IT THROUGH TSVS AND A THOUSANDS-BIT BUS</div>

<div class="visual-sequence__frame">
  <img src="/diagrams/rendered/hbm-package.svg" alt="An HBM stack with DRAM dies, through-silicon vias, microbumps, a logic base die, and a wide interface to a nearby GPU on an interposer" />
</div>

<!--
- HBM places stacks of DRAM beside the processor and connects them through an interface thousands of bits wide.
- Each stack contains 8, 12, or 16 memory dies.
- The short, wide connection delivers far more bandwidth than conventional memory modules can provide.
-->

---
class: visual-sequence paper-visual
title: "HBM3E"
---

<div class="visual-sequence__kicker">HBM3E</div>

<div class="visual-sequence__frame">
  <img src="/assets/sk-hynix-hbm3e-blackwell-display.png" alt="SK hynix display showing a 36 GB 12-layer HBM3E package beside an NVIDIA GB300 Grace Blackwell Ultra module" />
</div>

<div class="visual-sequence__caption"><strong>Eight stacks provide up to 288 GB.</strong><span>The full subsystem reaches up to 8 TB/s.</span></div>
<div class="visual-sequence__source">Blackwell Ultra · HBM3E</div>

<!--
- HBM3E is the fifth HBM generation and the memory used by Blackwell Ultra.
- An eight-high stack holds 24 GB; a twelve-high stack holds 36 GB.
- Its 1,024-bit interface moves about 1.2 TB each second from one stack.
- SK hynix, Micron, and Samsung manufacture it; Blackwell Ultra reaches 288 GB and up to 8 TB/s across its HBM subsystem.
-->

---

# Qualified capacity, booked 12–24 months ahead, determines HBM supply

<div class="grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] gap-4 items-center mt-12 text-center">
<div><div class="text-5xl font-bold">~3×</div><div class="opacity-65 mt-2">wafer capacity / GB<br>vs DDR5</div></div>
<div class="text-3xl opacity-40">→</div>
<div><div class="text-2xl font-bold">QUALIFY</div><div class="opacity-65 mt-2">customer + accelerator</div></div>
<div class="text-3xl opacity-40">→</div>
<div><div class="text-2xl font-bold">CONTRACT</div><div class="opacity-65 mt-2">12–24 months ahead</div></div>
<div class="text-3xl opacity-40">→</div>
<div><div class="text-5xl font-bold text-amber-300">2026</div><div class="opacity-65 mt-2">supply sold out</div></div>
</div>

<div class="text-center text-xl mt-14">HBM4 custom logic base dies deepen product-specific qualification.</div>

<!--
- HBM uses about three times as much wafer capacity per gigabyte as DDR5; third-party estimates put it above half of B300 physical package cost.
- Suppliers sell capacity through customer qualification and contracts arranged 12 to 24 months ahead.
- Custom base dies in HBM4 deepen that product-specific relationship.
-->

---

# Samsung leads DRAM; SK hynix leads HBM

<div class="grid grid-cols-2 gap-16 mt-8">
<div>
<div class="text-sm opacity-50 tracking-widest mb-3">DRAM SHARE · 1Q26</div>
<div class="flex justify-between border-b border-gray-600 py-3"><span class="text-xl font-bold">Samsung</span><span class="text-2xl font-bold">38.5%</span></div>
<div class="flex justify-between border-b border-gray-600 py-3"><span class="text-xl font-bold">SK hynix</span><span class="text-2xl font-bold">28.8%</span></div>
<div class="flex justify-between py-3"><span class="text-xl font-bold">Micron</span><span class="text-2xl font-bold">22.4%</span></div>
</div>
<div class="border-l border-gray-600 pl-12">
<div class="text-sm opacity-50 tracking-widest mb-3">HBM POSITION · SEPARATE ESTIMATES</div>
<div class="flex justify-between border-b border-gray-600 py-3"><span class="text-xl font-bold">SK hynix</span><span><b>~56%</b> · share leader</span></div>
<div class="flex justify-between border-b border-gray-600 py-3"><span class="text-xl font-bold">Micron</span><span><b>~20%</b> · U.S. supplier</span></div>
<div class="flex justify-between py-3"><span class="text-xl font-bold">Samsung</span><span>HBM3E qualified · Sep '25</span></div>
</div>
</div>

<div class="text-xs opacity-40 text-right mt-6">DRAM share: TrendForce 1Q26 · HBM figures: separate estimates</div>

<!--
- The DRAM scoreboard uses one 1Q26 market-share basis; the HBM scoreboard combines separately sourced share estimates with Samsung's qualification milestone.
- SK hynix leads estimated HBM share; Samsung combines memory with its own logic manufacturing.
- Micron is the only US-based company among the three leading DRAM and HBM suppliers.
- Product qualification, packaging expertise, and booked capacity make large allocation shifts slow even with three named sources.
-->

---
class: visual-sequence paper-visual
title: "The memory supercycle"
---

<div class="visual-sequence__kicker">HBM'S WAFER INTENSITY AMPLIFIES A FORECAST DRAM BOOM</div>

<div class="visual-sequence__frame">
  <img src="/diagrams/rendered/dram-revenue-surge.svg" alt="Bars compare 2025 DRAM revenue with the 2026 forecast while three wafers show HBM's higher capacity use" />
</div>

<div class="visual-sequence__source">TrendForce forecast · 2026E</div>

<!--
- Industry forecasts put DRAM revenue at $404.3 billion in 2026, up from $165.7 billion in 2025.
- HBM demand and higher contract prices drive much of that increase.
- The number is a forecast and memory pricing has a long record of sharp reversals after capacity catches up.
-->

---

# Three suppliers do not make qualified HBM capacity interchangeable

<div class="text-xs opacity-45 text-right -mt-2">CHOKEPOINTS MAPPED · 6 / 7</div>

<div class="text-center text-base opacity-60 mt-5">Rubin HBM4 sources · SK hynix · Samsung · Micron</div>

<div class="grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] gap-4 items-center mt-11 text-center">
<div><div class="text-2xl font-bold">QUALIFICATION</div><div class="opacity-60 mt-2">product-specific</div></div>
<div class="text-3xl opacity-40">→</div>
<div><div class="text-2xl font-bold">VOLUME</div><div class="opacity-60 mt-2">capacity at yield</div></div>
<div class="text-3xl opacity-40">→</div>
<div><div class="text-2xl font-bold">PACKAGING YIELD</div><div class="opacity-60 mt-2">stack + package</div></div>
<div class="text-3xl opacity-40">→</div>
<div class="border-y-2 border-amber-400 py-6"><div class="text-2xl font-bold">USABLE ALLOCATION</div><div class="opacity-60 mt-2">shippable GPUs</div></div>
</div>

<!--
- Nvidia publicly named Samsung, SK hynix, and Micron as Rubin HBM4 sources, so the Board is not making a single-supplier claim.
- Shifting a large allocation still requires product-specific qualification, volume, and package yield, even with three named sources.
-->
