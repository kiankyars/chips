---
layout: default
class: map-only-focus
sources: [research/tsmc.md, research/foundations.md]
---

# TSMC

<div class="map-only-focus__map">
  <img src="/diagrams/rendered/map-manufacture.svg" alt="Industry map with TSMC and the manufacturing stage highlighted" />
</div>

<!--
- TSMC is the world's first and largest pure-play foundry.
- Its current advantage combines advanced-node scale, yield learning, and a co-qualified design ecosystem.
-->

---

# 1987: Taiwan backs a pure-play foundry

<div class="grid grid-cols-2 gap-10 mt-8">
<div>
<div class="text-7xl font-bold">56</div>
<div class="opacity-70 mt-2">Morris Chang's age<br>when he founded TSMC</div>
</div>
<div class="flex flex-col justify-center gap-3 text-lg">

- **25 years at Texas Instruments** — ran the global chip business
- Passed over for CEO. Recruited by **Taiwan's government**
- Startup money: state fund **48.3%**, Philips **27.5%** — <b>US chipmakers declined to invest</b>
- Process tech: licensed, **2–3 generations behind**

</div>
</div>

<!--
- Morris Chang founded TSMC in 1987 after 25 years at Texas Instruments.
- Taiwan's state fund supplied 48.3 percent of the startup capital and Philips supplied 27.5 percent, giving the company patient backing when American chipmakers declined to invest.
-->

---
class: visual-sequence paper-visual
title: "Yield"
---

<div class="visual-sequence__kicker">YIELD</div>

<div class="visual-sequence__frame">
  <img src="/diagrams/rendered/yield-defects.svg" alt="The same six defects distributed across grids of small and large dies, showing that larger dies lose more yield" />
</div>

<div class="visual-sequence__caption"><strong>At the same defect density,</strong><span>larger dies lose more yield.</span></div>

<!--
- A stray particle or process defect can ruin the die beneath it.
- Larger dies cover more wafer area, so they encounter defects more often and produce fewer working chips per wafer.
- The next slide turns that size penalty into a first-order model; packaging later shows how designers work around it.
-->

---
class: yield-model
title: "The first-order yield model"
---

# One equation explains the size penalty

<div class="yield-model__equation"><var>Y</var> = e<sup>−<var>A</var>·<var>D</var>₀</sup></div>

<div class="yield-model__terms">
  <div><strong>Y</strong><span>working dies ÷ total dies</span></div>
  <div><strong>A</strong><span>area of one die</span></div>
  <div><strong>D₀</strong><span>killer defects per unit area</span></div>
</div>

<div class="yield-model__takeaway">Larger die or more defects → exponentially fewer working dies.</div>
<div class="yield-model__limit">Poisson Model assumes defects land randomly and independently.</div>

<!--
- Y is the probability that a die contains zero killer defects; e is Euler's number.
- A·D₀ is the expected number of killer defects per die. Larger area or higher defect density lowers yield exponentially.
- Poisson assumes random, independent defects. Real fabs may use clustered-defect models such as the negative binomial.
- With the model in hand, the next slide shows why more defect data can create a foundry scale flywheel.
-->

---

# Scale improves yield and funds the next node

<div class="flex justify-center mt-10">
<div class="text-2xl font-bold leading-loose text-center">
HIGHER VOLUME → MORE DEFECT DATA → HIGHER YIELD<br>
↑ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ↓<br>
MORE CAPACITY ← REINVESTED REVENUE ← NEW CUSTOMER DESIGNS
</div>
</div>

<div class="grid grid-cols-2 gap-8 mt-10 text-center">
<div>
<div class="text-5xl font-bold">$40.9B</div>
<div class="opacity-70 mt-2">capex 2025</div>
</div>
<div>
<div class="text-5xl font-bold">$52–56B</div>
<div class="opacity-70 mt-2">capex 2026 — ~$150M <i>a day</i></div>
</div>
</div>

<!--
- More wafer volume gives TSMC more defect data.
- More defect data improves yield and lowers cost.
- Better yield attracts the next customer design and adds more volume.
- The resulting revenue funds new capacity: TSMC spent $40.9 billion on capital equipment in 2025 and plans $52 to $56 billion in 2026.
-->

---

# Apple led TSMC's advanced-node ramps

<div class="grid grid-cols-2 gap-10 mt-8">
<div>
<div class="text-6xl font-bold">~17%</div>
<div class="opacity-70 mt-2">estimated FY2025 revenue from Apple<br><span class="text-sm">exclusive foundry supplier since the mid-2010s</span></div>
</div>
<div>
<div class="text-6xl font-bold">~19%</div>
<div class="opacity-70 mt-2">estimated FY2025 revenue from Nvidia<br><span class="text-sm">the largest customer by this estimate</span></div>
</div>
</div>

<!--
- Apple committed enough iPhone volume to make new-node ramps economically viable.
- Those early wafers gave TSMC defect data, helped yields mature, and spread fixed costs across large production runs.
- Once a process stabilized, TSMC could offer it to more customers.
-->

---

# Foundry leadership requires more than being first

<div class="grid grid-cols-2 gap-16 mt-12 text-center">
<div class="border-t-4 border-violet-400 pt-7">
<div class="text-sm tracking-[0.2em] opacity-55">GATE-ALL-AROUND FIRST</div>
<div class="text-4xl font-bold mt-4">Samsung · 2022</div>
<div class="text-lg opacity-65 mt-2">initial 3 nm production</div>
</div>
<div class="border-t-4 border-blue-400 pt-7">
<div class="text-sm tracking-[0.2em] opacity-55">GAA + BACKSIDE POWER FIRST</div>
<div class="text-4xl font-bold mt-4">Intel 18A · 2025</div>
<div class="text-lg opacity-65 mt-2">production introduction</div>
</div>
</div>

<div class="text-center text-2xl mt-16">TSMC led production by qualifying the whole platform, not one feature.</div>

<!--
- Samsung began initial 3 nm GAA production in 2022; Intel 18A combined GAA and backside power in 2025.
- TSMC remained the production leader by qualifying each change with IP, reliability, yield, and capacity.
- Feature-first dates are not the same as high-volume platform readiness.
-->

---

# A dependable foundry platform needs all five

<div class="grid grid-cols-[1fr_auto_1.25fr_auto_1fr_auto_1fr_auto_1fr] gap-4 items-center mt-20 text-center">
  <div class="text-2xl font-bold leading-tight text-cyan-300">PROCESS<br>TECHNOLOGY</div>
  <div class="text-4xl opacity-45">+</div>
  <div class="text-2xl font-bold leading-tight text-violet-300">QUALIFIED<br>PDK + IP</div>
  <div class="text-4xl opacity-45">+</div>
  <div class="text-2xl font-bold leading-tight text-amber-300">RELIABILITY</div>
  <div class="text-4xl opacity-45">+</div>
  <div class="text-2xl font-bold leading-tight text-emerald-300">YIELD</div>
  <div class="text-4xl opacity-45">+</div>
  <div class="text-2xl font-bold leading-tight text-blue-300">CAPACITY</div>
</div>

<div class="flex items-center justify-center gap-7 mt-16">
  <div class="text-5xl opacity-45">=</div>
  <div class="text-4xl font-bold tracking-wide">DEPENDABLE FOUNDRY PLATFORM</div>
</div>

<!--
- A new transistor structure is only the process technology; customers also need qualified design rules, reusable IP, reliability data, economic yield, and enough production capacity.
- All five must mature together before customers can commit a high-volume product to the node.
- That is why being first to announce a feature can differ from sustained production leadership.
-->

---

# N2 is shipping; A16 adds backside power

<div class="mt-8 text-lg">
<div class="grid grid-cols-4 gap-5 text-center">
<div><div class="text-3xl font-bold">N3</div><div class="text-sm opacity-70 mt-1">ramped 2023–25<br>24% of FY2025 wafer revenue</div></div>
<div><div class="text-3xl font-bold">N2</div><div class="text-sm opacity-70 mt-1">HVM since<br>Q4 2025<br><b>first gate-all-around</b></div></div>
<div><div class="text-3xl font-bold">A16</div><div class="text-sm opacity-70 mt-1">planned H2 2026<br><b>backside power</b></div></div>
<div><div class="text-3xl font-bold">A14</div><div class="text-sm opacity-70 mt-1">2028<br>2nd-gen GAA</div></div>
</div>
</div>

<div class="text-sm opacity-60 mt-10 text-center">
TSMC plans no <b>High-NA EUV</b> in production through 2029; it is extending existing EUV tools.
</div>

<!--
- N2 introduced TSMC's first gate-all-around transistor and entered high-volume manufacturing in late 2025.
- A16 is planned to add backside power in the second half of 2026, moving power wiring below the transistors; A14 follows in 2028.
- TSMC plans to extend current EUV systems without production High-NA EUV through 2029.
-->

---

# Reported wafer prices rise with each new node

<div class="grid grid-cols-4 gap-4 mt-10 text-center">
<div><div class="text-4xl font-bold">~$18k</div><div class="text-sm opacity-70 mt-1">N5/N4 wafer</div></div>
<div><div class="text-4xl font-bold">~$20k</div><div class="text-sm opacity-70 mt-1">N3 wafer</div></div>
<div><div class="text-4xl font-bold">~$30k</div><div class="text-sm opacity-70 mt-1">N2 wafer</div></div>
<div><div class="text-4xl font-bold">~$45k</div><div class="text-sm opacity-70 mt-1">A16 wafer</div></div>
</div>

<div class="text-sm opacity-50 mt-3 text-center">reported figures — TSMC never publishes wafer prices</div>

<div class="mt-10 text-center">
<div class="text-3xl font-bold">A wafer quote is not a finished-chip cost.</div>
<div class="opacity-70 mt-3">Die area, usable dies, yield, memory, and packaging determine the cost per accelerator.</div>
</div>

<!--
- The figures shown are estimates for a processed wafer, not the cost of a finished chip.
- Per-chip cost depends on die area, usable dies per wafer, yield, packaging, and memory.
- TSMC's margin expansion shows strong pricing power, although product mix and currency also affect the reported margin.
-->

---

# Chokepoint #2: leading-edge foundry capacity

![chokepoint board — 2 stamps](/diagrams/rendered/board-2.svg)

<div class="text-xl mt-6 text-center">
<b>TSMC — leading-edge merchant logic.</b> An estimated ~90% of ≤7nm-class merchant output.
</div>

<!--
- TSMC supplies an estimated 90 percent of merchant logic at 7nm-class nodes and below.
- Intel and Samsung also make leading-edge chips, but much of their capacity serves their own products.
- The exact share depends on whether analysts count internal production, yet merchant customers have few alternatives at the leading edge.
-->

---

# TSMC is 11× larger than Samsung Foundry

<div class="border-2 border-gray-400 rounded-lg p-4 mt-6">
  <div class="grid grid-cols-3 gap-8 text-center">
    <div><div class="text-3xl font-bold">$122 B</div><div class="text-sm opacity-60">revenue FY25 (+36%)</div></div>
    <div><div class="text-3xl font-bold">67.7%</div><div class="text-sm opacity-60">gross margin Q2'26</div></div>
    <div><div class="text-3xl font-bold">72.3%</div><div class="text-sm opacity-60">global foundry share (Q1'26)</div></div>
  </div>
  <div class="text-xs opacity-40 text-right mt-2">company results: Q2'26 · foundry share: Q1'26 estimate</div>
</div>

<div class="text-sm opacity-60 mt-8 text-center">
Samsung held 6.5% in the same Q1'26 estimate.
</div>

<!--
- TSMC reported $122 billion in FY2025 revenue and a 67.7 percent gross margin in Q2 2026.
- TrendForce estimated TSMC at 72.3 percent of foundry revenue in Q1 2026, about eleven times Samsung's share.
- Replacing this capability would require new fabs, scarce equipment, a full design ecosystem, and accumulated yield learning; no single countdown captures that task.
-->

---
class: full-slide-visual
title: "TSMC's global footprint"
---

<img src="/diagrams/rendered/tsmc-footprint.png" alt="World map showing TSMC's overseas fabs in Arizona, Dresden, and Kumamoto while its N2, A16, and A14 leading-edge roadmap remains concentrated in Taiwan" />

<!--
- TSMC's Arizona fab produces N4, while its sites in Japan and Germany focus on mature and specialty nodes.
- N2 volume starts in Hsinchu and Kaohsiung and A14 in Taiwan, so overseas fabs add diversity while the newest processes, research base, and largest engineering concentration stay there.
- This concentration is the Taiwan-risk seed that returns in Part 6.
-->
