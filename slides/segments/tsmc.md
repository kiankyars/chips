---
layout: section
---

<!-- SEGMENT
id: tsmc
act: III — The Island
tier: P            # protagonist — the crown jewel of the episode
angle: "TSMC's real invention wasn't a chip — it was a promise: manufacture for everyone, compete with no one. Forty years of compounded trust and yield learning turned that promise into the deepest moat in capitalism, and parked it on one island."   # YOU OWN THIS LINE — rewrite it in your voice
runtime: ~10 min
status: draft
seeds: [taiwan-flag]          # planted here — DETONATES in geopolitics, not here
pays_off: [apple-iou]         # planted in fabless-field
stamps: [tsmc-wafers]         # chokepoint #2 — leading-edge logic
diagrams: [map-manufacture, journey-3, board-2]
sources: research/tsmc.md
-->


# TSMC

<div class="text-xl opacity-70 mt-2">The world's largest contract chip manufacturer</div>

<div class="grid grid-cols-2 gap-8 mt-8 items-center">
<div>

![journey — FAB](/diagrams/rendered/journey-3.svg)

</div>
<div>

![map — manufacture lit](/diagrams/rendered/map-manufacture.svg)

</div>
</div>

<!--
TSMC is the world's first and largest pure-play foundry. It turns customer designs into physical chips without selling processors under its own name, letting customers share its fabs without competing with their manufacturer and creating the trust on which the business depends.
-->

---

# 1987: Taiwan backs a pure-play foundry

<div class="grid grid-cols-2 gap-10 mt-8">
<div>
<div class="text-7xl font-bold">56</div>
<div class="opacity-70 mt-2">Morris Chang's age when he founded<br>what became the world's largest foundry</div>
</div>
<div class="flex flex-col justify-center gap-3 text-lg">

- **25 years at Texas Instruments** — ran the global chip business
- Passed over for CEO. Recruited by **Taiwan's government**
- Startup money: state fund **48.3%**, Philips **27.5%** — <b>US chipmakers declined to invest</b>
- Process tech: licensed, **2–3 generations behind**

</div>
</div>

<!--
Morris Chang founded TSMC in 1987 after 25 years at Texas Instruments. Taiwan's state fund supplied 48.3 percent of the startup capital and Philips supplied 27.5 percent, giving the company patient backing when American chipmakers declined to invest. TSMC used that capital to build a customer-neutral foundry that manufactured designs without selling competing chips.
-->

---

# TSMC manufactures without competing with its customers

<div class="grid grid-cols-2 gap-10 mt-8">
<div class="text-lg leading-relaxed">
<div class="font-bold text-2xl mb-4">What a foundry sells</div>

- a **process recipe** (the node)
- a **PDK** — process rules and device models used by EDA tools
- **qualified IP** libraries
- **yield** — the percentage of dies that pass test

</div>
<div class="text-lg leading-relaxed">
<div class="font-bold text-2xl mb-4">How TSMC avoids customer conflict</div>

- no branded processors of its own
- customer designs remain confidential even when rival firms share the same fabs

</div>
</div>

<div class="text-sm opacity-60 mt-8">TSMC manufactures customer designs without selling competing chips.</div>

<!--
TSMC sells a manufacturing process, a process design kit, qualified IP, and reliable yield. It does not sell branded processors, so rival customers can use the same fabs without competing against their manufacturer. Its process rules also connect to major EDA tools and IP libraries, making a finished design expensive to move to another foundry.
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
More wafer volume gives TSMC more defect data. That improves yield and lowers cost. Better yield attracts the next customer design and adds more volume. The resulting revenue funds new capacity: TSMC spent $40.9 billion on capital equipment in 2025 and plans $52 to $56 billion in 2026.
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

<div class="text-sm opacity-60 mt-10">
<b>3nm = 24%</b> of FY2025 wafer revenue. Apple has historically led TSMC's first large-volume ramps on new nodes.
</div>

<!--
Apple committed enough iPhone volume to make new-node ramps economically viable. Those early wafers gave TSMC defect data, helped yields mature, and spread fixed costs across large production runs. Once a process stabilized, TSMC could offer it to more customers.
-->

---

# The roadmap, as of 2026

<div class="mt-8 text-lg">
<div class="grid grid-cols-4 gap-4 text-center">
<div><div class="text-3xl font-bold">N3</div><div class="text-sm opacity-70 mt-1">ramped 2023–25<br>24% of FY2025 wafer revenue</div></div>
<div><div class="text-3xl font-bold">N2</div><div class="text-sm opacity-70 mt-1">HVM since Q4 2025<br><b>first gate-all-around</b></div></div>
<div><div class="text-3xl font-bold">A16</div><div class="text-sm opacity-70 mt-1">late 2026 → volume 2027<br><b>backside power</b></div></div>
<div><div class="text-3xl font-bold">A14</div><div class="text-sm opacity-70 mt-1">2028<br>2nd-gen GAA</div></div>
</div>
</div>

<div class="text-sm opacity-60 mt-10 text-center">
"2nm" is a product generation, not a measured feature size.<br>
TSMC plans no <b>High-NA EUV</b> in production through 2029; it is extending existing EUV tools.
</div>

<!--
Node names such as N2 identify process generations rather than a measured feature size. N2 introduced TSMC's first gate-all-around transistor and entered high-volume manufacturing in late 2025. A16 adds backside power, moving power wiring below the transistors, and A14 follows in 2028. TSMC plans to extend current EUV systems without production High-NA EUV through 2029.
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

<div class="grid grid-cols-2 gap-8 mt-10 text-center">
<div><div class="text-5xl font-bold">59.9% → 66.2%</div><div class="opacity-70 mt-2">gross margin, FY25 → Q1 2026</div></div>
<div><div class="text-5xl font-bold">50.5¢</div><div class="opacity-70 mt-2">of every Q1 2026 revenue dollar retained as net profit</div></div>
</div>

<!--
The figures shown are estimates for a processed wafer, not the cost of a finished chip. Per-chip cost depends on die area, usable dies per wafer, yield, packaging, and memory. TSMC's margin expansion shows strong pricing power, although product mix and currency also affect the reported margin.
-->

---

# Chokepoint #2: leading-edge foundry capacity

![chokepoint board — 2 stamps](/diagrams/rendered/board-2.svg)

<div class="text-xl mt-6 text-center">
<b>TSMC — leading-edge merchant logic.</b> An estimated ~90% of ≤7nm-class merchant output.
</div>

<!--
TSMC supplies an estimated 90 percent of merchant logic at 7nm-class nodes and below. Intel and Samsung also make leading-edge chips, but much of their capacity serves their own products. The exact share depends on whether analysts count internal production, yet merchant customers have few alternatives at the leading edge.
-->

---

# TSMC financials and market share

<div class="border-2 border-gray-400 rounded-lg p-4 mt-6">
  <div class="grid grid-cols-5 gap-4 text-center">
    <div><div class="text-3xl font-bold">$122 B</div><div class="text-sm opacity-60">revenue FY25 (+36%)</div></div>
    <div><div class="text-3xl font-bold">59.9%</div><div class="text-sm opacity-60">gross margin FY25 (66.2% Q1'26)</div></div>
    <div><div class="text-3xl font-bold">72.3%</div><div class="text-sm opacity-60">global foundry share (Q1'26)</div></div>
    <div><div class="text-xl font-bold leading-tight mt-2">pure-play model + 30 years of yield data</div></div>
    <div><div class="text-3xl font-bold">~10+ yrs</div><div class="text-sm opacity-60">to replace</div></div>
  </div>
  <div class="text-xs opacity-40 text-right mt-2">as of Q2 2026</div>
</div>

<div class="text-sm opacity-60 mt-8 text-center">
72.3% of the global foundry market — <b>11× the size of #2</b> (Samsung, 6.5%).
</div>

<!--
TSMC reported $122 billion in FY2025 revenue, a 59.9 percent gross margin, and 72.3 percent of foundry revenue in Q1 2026, about eleven times Samsung's share. Replacing this capacity would require new fabs, scarce equipment, a full design ecosystem, and years of yield learning, so the estimate exceeds ten years.
-->

---
class: visual-sequence paper-visual
title: "TSMC's footprint"
---

<div class="visual-sequence__kicker">TSMC'S FOOTPRINT</div>

<div class="visual-sequence__frame">
  <img src="/diagrams/rendered/tsmc-geography.svg" alt="TSMC fabs in Arizona, Kumamoto, and Dresden compared with its leading-edge production center in Taiwan" />
</div>

<div class="visual-sequence__caption"><strong>Overseas fabs diversify capacity.</strong><span>The leading edge remains centered in Taiwan.</span></div>
<div class="visual-sequence__source">Arizona · N4 · Kumamoto / Dresden · mature nodes · Taiwan · N2</div>

<!--
TSMC's Arizona fab produces N4, while its sites in Japan and Germany focus on mature and specialty nodes. N2 volume production remains in Hsinchu and Kaohsiung, and A14 will start in Taiwan, so overseas fabs add diversity while the newest processes, research base, and largest concentration of engineers stay in Taiwan.
-->

---

# Leading-edge production remains concentrated in Taiwan

<div class="text-3xl mt-14 leading-relaxed text-center">
TSMC fabricates an estimated ~90% of ≤7 nm-class merchant logic,<br>
with its most advanced production concentrated in <b>Taiwan</b>.
</div>

<div class="text-sm opacity-60 mt-12 text-center">
This geographic concentration is central to the policy discussion in Part 6.
</div>

<!--
TSMC's newest processes remain concentrated in Taiwan, about 130 kilometres from China's coast. Overseas fabs add geographic diversity, but Arizona, Japan, and Germany trail Taiwan in process generation; N2 and future A14 capacity begin on the island, so a disruption there would affect the leading edge first.
-->

---

# TSMC leads advanced foundry manufacturing

<div class="text-xl mt-10 leading-relaxed">

- TSMC manufactures customer designs without selling chips of its own
- High production volume generates defect data, which improves yield and attracts the next design
- TSMC holds 72.3% of foundry revenue and an estimated ~90% of ≤7nm-class merchant output

</div>

<div class="text-lg opacity-70 mt-12">
TSMC overtook Intel in process technology around 2020.<br>
<b>Intel had led the industry for roughly five decades.</b>
</div>

<!--
TSMC's customer-neutral model attracts designs. Running more wafers produces more defect data, improves yield, lowers cost, and wins more volume. This feedback loop helped TSMC overtake Intel in process technology around 2020 after Intel had led the industry for about five decades.
-->
