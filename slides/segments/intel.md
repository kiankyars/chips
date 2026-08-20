---
layout: default
class: map-only-focus
sources: [research/intel.md]
---

# Intel lost the process lead

<div class="map-only-focus__map">
  <img src="/diagrams/rendered/map-manufacture.svg" alt="Industry map with Intel and the manufacturing stage highlighted" />
</div>

<!--
- Intel once led both processor design and leading-edge manufacturing.
- Delays at 10nm, missed shifts toward mobile and AI, and weak foundry economics cost the company that position.
- Its recovery now depends on 18A yield and outside customers.
-->

---

# Intel led processors and manufacturing for decades

<div class="grid grid-cols-5 gap-4 mt-10 text-center">
<div><div class="text-4xl font-bold">1968</div><div class="text-sm opacity-60 mt-2">Noyce and Moore found Intel; Grove joins as its third employee</div></div>
<div><div class="text-4xl font-bold">1970 / 1985</div><div class="text-sm opacity-60 mt-2">commercializes the Intel 1103 DRAM; exits memory in 1985</div></div>
<div><div class="text-4xl font-bold">1981</div><div class="text-sm opacity-60 mt-2">Intel 8088 selected for the IBM PC; Wintel dominates for three decades</div></div>
<div><div class="text-4xl font-bold">2007–16</div><div class="text-sm opacity-60 mt-2">new process and architecture on alternating years</div></div>
<div><div class="text-4xl font-bold">~99%</div><div class="text-sm opacity-60 mt-2">of data-center CPUs at peak</div></div>
</div>

<div class="text-sm opacity-60 mt-12 text-center">
Intel reached a $500B market cap in August 2000 and did not surpass it for 26 years.
</div>

<!--
- Noyce and Moore founded Intel in 1968, and the company built early success in DRAM before leaving memory in 1985.
- The IBM PC made x86 dominant, while Intel's alternating process and architecture releases set the industry's pace.
- At its peak, Intel supplied about 99 percent of data-center CPUs.
-->

---

# A 2.7× density bet without EUV broke Intel's cadence

<div class="grid grid-cols-3 gap-8 mt-10 text-center">
<div><div class="text-6xl font-bold">2.7×</div><div class="opacity-70 mt-2">targeted density increase<br><span class="text-sm opacity-60">typical per node: 1.5–2×</span></div></div>
<div><div class="text-6xl font-bold">0</div><div class="opacity-70 mt-2">EUV tools in the process plan<br><span class="text-sm opacity-60">quadruple patterning instead</span></div></div>
<div><div class="text-6xl font-bold">2019 / 2021</div><div class="opacity-70 mt-2">10nm mobile / 10nm-class desktop<br><span class="text-sm opacity-60">mainstream desktop stayed on 14 nm until Alder Lake</span></div></div>
</div>

<div class="text-sm opacity-60 mt-12 text-center">
TSMC shipped N7 in 2018, N7+ with EUV in 2019, and N5 in 2020.<br>
On July 24, 2020, Intel announced another 7 nm delay; its shares fell 16% that day.
</div>

<div class="text-xs opacity-50 mt-4 text-center">
EUV uses shorter-wavelength light to reduce multipatterning; without it, Intel split critical layers across more masks and alignment steps.
</div>

<!--
- Intel targeted a 2.7-fold density gain at 10nm without EUV, using a complex multi-patterning process instead.
- EUV prints finer patterns in fewer passes; Intel instead split critical layers across more masks, exposures, and alignment steps.
- Intel reached volume 10nm first in mobile Ice Lake in 2019; mainstream desktop remained on 14nm until 10nm-class Alder Lake arrived in 2021.
- During that delay, TSMC shipped N7, N7+ with EUV, and N5.
-->

---
class: visual-sequence paper-visual
title: "Demand moved beyond x86"
---

<div class="visual-sequence__frame">
  <img src="/diagrams/rendered/slide-066-intel-missed-shifts.svg" alt="Mobile, Arm processors, and AI accelerators redirecting demand away from Intel" />
</div>

<div class="visual-sequence__caption"><strong>Mobile, Arm, and AI shifted demand away from Intel.</strong></div>
<div class="visual-sequence__source">iPhone · Apple M1 · AWS Graviton · Nvidia data center</div>

<!--
- Demand shifted toward phones, Arm processors, cloud chips, and AI accelerators while Intel defended its x86 franchise.
- Apple moved Macs to its own Arm designs, AWS expanded Graviton, AMD recovered server share, and Nvidia captured the fastest-growing data-center workload.
-->

---

# 2024 was Intel's first annual loss since 1986

<div class="grid grid-cols-2 gap-x-10 gap-y-12 mt-10 text-center">
<div><div class="text-5xl font-bold">−$18.8B</div><div class="text-sm opacity-60 mt-2">2024 net loss</div></div>
<div><div class="text-5xl font-bold">−26%</div><div class="text-sm opacity-60 mt-2">one-day share decline in Aug 2024; dividend suspended</div></div>
<div><div class="text-5xl font-bold">15,000</div><div class="text-sm opacity-60 mt-2">layoffs announced in August 2024</div></div>
<div><div class="text-5xl font-bold">108,900 → ~75,000</div><div class="text-sm opacity-60 mt-2">employees, end-2024 → end-2025 plan</div></div>
</div>

<!--
- The loss forced Intel to suspend its dividend and redirect cash toward manufacturing recovery.
- Large workforce cuts and repeated leadership changes showed that investors no longer viewed the problem as a normal semiconductor downturn.
-->

---

# 18A is Intel's manufacturing recovery plan

<div class="grid grid-cols-2 gap-10 mt-8">

<div class="flex flex-col gap-3 text-lg">
<div><b>Fab 52</b> — Chandler, Arizona</div>
<div><b>RibbonFET</b> — Intel's first gate-all-around transistor</div>
<div><b>PowerVia</b> — backside power introduced ahead of TSMC</div>
<div><b>Panther Lake</b> — laptop processors shipped in Jan 2026</div>
<div><b>Clearwater Forest</b> — 288-core Xeon, June 2026</div>
</div>

<div class="flex flex-col gap-6 text-center justify-center">
<div><div class="text-5xl font-bold">2025</div><div class="text-sm opacity-60 mt-1">18A high-volume manufacturing began; no comparable product-level yield disclosed</div></div>
<div><div class="text-5xl font-bold">$293M</div><div class="text-sm opacity-60 mt-1">external foundry revenue, Q2 2026 — mostly Altera after deconsolidation</div></div>
<div><div class="text-5xl font-bold">&gt;$35B</div><div class="text-sm opacity-60 mt-1">cumulative foundry operating losses since 2023</div></div>
</div>

</div>

<!--
- Intel's 18A process combines RibbonFET transistors with backside power delivery and now ships Panther Lake and Clearwater Forest products.
- Intel says 18A entered high-volume manufacturing in 2025; no numeric yield is shown because public estimates use incompatible product and yield definitions.
- External foundry revenue reached $293 million in Q2 2026, primarily because Altera became an external customer after deconsolidation.
- Cumulative foundry operating losses since 2023 exceeded $35 billion by mid-2026.
-->

---
class: visual-sequence paper-visual
title: "Intel 14A"
---

<div class="visual-sequence__frame">
  <img src="/diagrams/rendered/slide-069-intel-investment-lifeline.svg" alt="The US government, SoftBank, and Nvidia investing in Intel while no external 14A anchor customer is publicly named" />
</div>

<!--
- The US government, SoftBank, and Nvidia bought a combined $15.9 billion of Intel equity.
- In Q2 2026 Intel committed to completing 14A, with future Intel products designed for it.
- Fab expansion still depends on committed internal demand and significant external design wins; no external anchor was publicly named.
-->

---

# Intel in 2026

<div class="border-2 border-gray-400 rounded-lg p-4 mt-6">
  <div class="grid grid-cols-4 gap-4 text-center">
    <div><div class="text-3xl font-bold">$16.1B</div><div class="text-sm opacity-60">revenue Q2'26</div></div>
    <div><div class="text-3xl font-bold">41.8%</div><div class="text-sm opacity-60">non-GAAP gross margin Q2'26</div></div>
    <div><div class="text-3xl font-bold">~70%</div><div class="text-sm opacity-60">PC CPU share</div></div>
    <div><div class="text-xl font-bold leading-tight mt-2">only US-owned leading-edge logic manufacturer</div></div>
  </div>
  <div class="text-xs opacity-40 text-right mt-2">as of Q2 2026</div>
</div>

<!--
- Intel remains the sole US-owned company manufacturing leading-edge logic at home; it reported $16.1 billion of Q2 2026 revenue and about 70 percent of the PC CPU market.
- Intel's position now depends on 18A yield and foundry demand.
-->
