---
layout: section
---

<!-- SEGMENT
id: intel
act: III — The Island
tier: T            # tragedy — deliberate register shift, the emotional midpoint of the episode
angle: "Intel didn't lose to a rival — it lost to yield; and the rescue that followed (the state, its own tormentors, one Arizona fab) is the receipt for what a leading edge is actually worth to a superpower."   # YOU OWN THIS LINE — rewrite it in your voice
runtime: ~6 min
status: draft
seeds: [euv-pass, state-equity]    # euv-pass → asml (next act: the machine Intel said no to) · state-equity → geopolitics (CHIPS Act → equity era)
pays_off: [yield]                  # planted in foundations, felt in life-of-a-wafer/kla — here it kills a king
stamps: []                         # no chokepoint stamp — that absence is part of the story
diagrams: [map-manufacture]
sources: research/intel.md
-->


# Intel lost the process lead

<div class="text-xl opacity-70 mt-2">10nm delays, missed markets, and the 18A recovery attempt</div>

<img src="/diagrams/rendered/map-manufacture.svg" class="h-44 mx-auto mt-8 opacity-80" alt="master map — manufacturing region lit" />

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

# 10nm delays cost Intel the process lead

<div class="grid grid-cols-3 gap-8 mt-10 text-center">
<div><div class="text-6xl font-bold">2.7×</div><div class="opacity-70 mt-2">targeted density increase<br><span class="text-sm opacity-60">typical per node: 1.5–2×</span></div></div>
<div><div class="text-6xl font-bold">0</div><div class="opacity-70 mt-2">EUV tools in the process plan<br><span class="text-sm opacity-60">quadruple patterning instead</span></div></div>
<div><div class="text-6xl font-bold">7 yrs</div><div class="opacity-70 mt-2">desktop process remained on 14 nm<br><span class="text-sm opacity-60">2016 target → shipped late 2019</span></div></div>
</div>

<div class="text-sm opacity-60 mt-12 text-center">
TSMC shipped N7 in 2018, N7+ with EUV in 2019, and N5 in 2020.<br>
On July 24, 2020, Intel announced another 7 nm delay; its shares fell 16% that day.
</div>

<!--
- Intel targeted a 2.7-fold density gain at 10nm without EUV, using a complex multi-patterning process instead.
- The node reached volume years late and kept desktop processors on 14nm for about seven years.
- During that delay, TSMC shipped N7, N7+ with EUV, and N5.
-->

---
class: visual-sequence paper-visual
title: "Intel's missed shifts"
---

<div class="visual-sequence__kicker">INTEL'S MISSED SHIFTS</div>

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

<div class="grid grid-cols-3 gap-x-8 gap-y-10 mt-10 text-center">
<div><div class="text-5xl font-bold">−$18.8B</div><div class="text-sm opacity-60 mt-2">2024 net loss, the first annual loss since <b>1986</b></div></div>
<div><div class="text-5xl font-bold">−26%</div><div class="text-sm opacity-60 mt-2">one-day share decline in Aug 2024; dividend suspended</div></div>
<div><div class="text-5xl font-bold">15,000</div><div class="text-sm opacity-60 mt-2">layoffs announced in August 2024</div></div>
<div><div class="text-5xl font-bold">4</div><div class="text-sm opacity-60 mt-2">CEOs since 2018</div></div>
<div><div class="text-5xl font-bold">108,900 → ~75,000</div><div class="text-sm opacity-60 mt-2">employees, end-2024 → end-2025 plan</div></div>
<div><div class="text-5xl font-bold">1986</div><div class="text-sm opacity-60 mt-2">Intel's previous annual loss</div></div>
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
<div><div class="text-5xl font-bold">~20–25%</div><div class="text-sm opacity-60 mt-1">good-die yield when the ramp began; "industry-standard" yield targeted for early 2027</div></div>
<div><div class="text-5xl font-bold">$174M</div><div class="text-sm opacity-60 mt-1">external foundry revenue, Q1 2026 — ~3% of foundry revenue</div></div>
<div><div class="text-5xl font-bold">−$33B</div><div class="text-sm opacity-60 mt-1">cumulative foundry losses since 2023</div></div>
</div>

</div>

<!--
- Intel's 18A process combines RibbonFET transistors with backside power delivery and now ships Panther Lake and Clearwater Forest products.
- Good-die yield began near 20 to 25 percent, so economics depend on the ramp toward industry-standard yield.
- External foundry revenue remained $174 million in Q1 2026.
- Cumulative foundry losses since 2023 reached about $33 billion.
-->

---
class: visual-sequence paper-visual
title: "Intel 14A"
---

<div class="visual-sequence__kicker">INTEL 14A</div>

<div class="visual-sequence__frame">
  <img src="/diagrams/rendered/slide-069-intel-investment-lifeline.svg" alt="The US government, SoftBank, and Nvidia investing in Intel while the external 14A customer order remains blank" />
</div>

<div class="visual-sequence__caption"><strong>Three investors supplied $15.9B, but no external 14A anchor order.</strong></div>
<div class="visual-sequence__source">US government · $8.9B · SoftBank · $2B · Nvidia · $5B</div>

<!--
- The US government, SoftBank, and Nvidia invested a combined $15.9 billion in Intel.
- That capital supports the manufacturing program, but Intel still lacks a named external anchor order for 14A.
- A foundry needs customer volume as well as financing to sustain a new leading-edge node.
-->

---

# Intel in 2026

<div class="border-2 border-gray-400 rounded-lg p-4 mt-6">
  <div class="grid grid-cols-5 gap-4 text-center">
    <div><div class="text-3xl font-bold">$52.9B</div><div class="text-sm opacity-60">revenue FY25</div></div>
    <div><div class="text-3xl font-bold">41%</div><div class="text-sm opacity-60">gross margin (non-GAAP, Q1'26)</div></div>
    <div><div class="text-3xl font-bold">~70%</div><div class="text-sm opacity-60">PC CPU share</div></div>
    <div><div class="text-xl font-bold leading-tight mt-2">only US-owned leading-edge logic manufacturer</div></div>
    <div><div class="text-3xl font-bold">~10 yrs</div><div class="text-sm opacity-60">to replace</div></div>
  </div>
  <div class="text-xs opacity-40 text-right mt-2">as of Q2 2026</div>
</div>

<div class="text-center text-lg mt-10 opacity-80">
TSMC, Samsung, and Intel are the only companies currently producing leading-edge logic at commercial scale.
</div>

<!--
- Intel remains the sole US-owned company manufacturing leading-edge logic at home, with $52.9 billion in 2025 revenue and about 70 percent of the PC CPU market.
- TSMC, Samsung, and Intel are the three companies producing leading-edge logic at commercial scale.
- Intel's position now depends on 18A yield and foundry demand.
-->
