---
layout: default
class: map-only-focus
---

<!-- SEGMENT
id: eda
act: II — The Blueprint
tier: D            # duel — Synopsys vs Cadence told as one 40-year contest; Siemens EDA is a card
angle: "The $792B chip industry depends on a roughly $21B electronic-system-design market — tools, IP, and services anchored by Synopsys and Cadence, with Siemens a consequential third — and export controls turn access to that toolchain into leverage."   # PROPOSED — YOU OWN THIS LINE
runtime: ~5 min
status: draft
seeds: [eda-export-lever]     # EDA as an export-control weapon → pays off in geopolitics
pays_off: []
stamps: [eda-duopoly]         # Chokepoint #1: Synopsys + Cadence
diagrams: [map-design, eda-flow-v2, board-1]
sources: research/eda.md
-->


# The software behind chip design

<div class="map-only-focus__map">
  <img src="/diagrams/rendered/map-design.svg" alt="Industry map with EDA and the design stage highlighted" />
</div>

<!--
- Electronic design automation, or EDA, is the software engineers use to turn a chip specification into a manufacturable layout.
- A modern accelerator contains hundreds of billions of transistors and many layers of wiring, far beyond what a team could place and check by hand.
- The design reaches the foundry as a file.
-->

---
class: visual-sequence paper-visual
title: "Electronic design automation"
---

<div class="visual-sequence__kicker">ELECTRONIC DESIGN AUTOMATION</div>

<div class="visual-sequence__frame">
  <img src="/diagrams/rendered/eda-flow-v2.png" alt="EDA software transforms RTL into logic gates, placed cells, and a routed physical layout, with verification looping through the process" />
</div>

<div class="visual-sequence__caption"><strong>Describe behavior.</strong><span>Software builds and verifies the physical layout.</span></div>
<div class="visual-sequence__source">2 nm-class design estimate · ~$724M before manufacturing</div>

<!--
- Engineers start with register-transfer-level code, or RTL, which describes data movement and chip operations.
- EDA tools translate that behavior into logic gates.
- EDA tools choose physical locations, connect the wiring, and check the layout against electrical and foundry rules.
- Engineers repeat verification throughout the flow.
-->

---

# Synopsys, Cadence, and Siemens EDA

<div class="grid grid-cols-2 gap-8 mt-6">
  <div class="border-2 border-gray-400 rounded-lg p-4">
    <div class="text-2xl font-bold">SYNOPSYS</div>
<div class="text-sm opacity-60 mb-3">founded 1986 · early leader in logic synthesis</div>
    <div class="text-sm leading-relaxed">
        Strengths: logic synthesis, digital design, and semiconductor IP<br>
        Acquired Ansys for <b>$34.9B</b> in 2025
    </div>
  </div>
  <div class="border-2 border-gray-400 rounded-lg p-4">
    <div class="text-2xl font-bold">CADENCE</div>
<div class="text-sm opacity-60 mb-3">founded 1988 · strong in analog and custom design</div>
    <div class="text-sm leading-relaxed">
        Strengths: Virtuoso and hardware emulation<br>
        Palladium emulators run pre-silicon designs at up to <b>48B gates</b>
    </div>
  </div>
</div>

<div class="border border-gray-400 rounded-lg p-3 mt-6 text-sm opacity-80">
    <b>SIEMENS EDA</b> has roughly 13% market share. Its Calibre product is widely used for physical verification and sign-off.
</div>

<!--
- Synopsys specializes in digital synthesis and implementation, while Cadence is strong in analog design and hardware emulation.
- Siemens EDA’s Calibre checks the finished layout against the foundry’s geometric and manufacturing rules before tape-out.
- A chip designed in one vendor’s tools may still pass through another vendor’s final check.
-->

---

# A $21B ESD market supports $792B in chip sales

<div class="text-center mt-2 text-lg">
  Electronic System Design revenue — tools, semiconductor IP, and services — was about <b>$21B</b> in 2025, versus <b>$792B</b> in semiconductor sales.
</div>

<div class="border-2 border-gray-400 rounded-lg p-3 mt-4">
  <div class="text-sm font-bold mb-1">SYNOPSYS</div>
  <div class="grid grid-cols-5 gap-4 text-center">
    <div><div class="text-2xl font-bold">$7.1 B</div><div class="text-sm opacity-60">revenue FY25</div></div>
    <div><div class="text-2xl font-bold">~77%</div><div class="text-sm opacity-60">gross margin</div></div>
    <div><div class="text-2xl font-bold">~31%</div><div class="text-sm opacity-60">market share</div></div>
<div><div class="text-lg font-bold leading-tight mt-1">synthesis, digital design, and IP</div></div>
    <div><div class="text-lg font-bold leading-tight mt-1">ecosystem</div><div class="text-sm opacity-60">must be rebuilt</div></div>
  </div>
  <div class="text-xs opacity-40 text-right mt-1">as of Q2 2026</div>
</div>

<div class="border-2 border-gray-400 rounded-lg p-3 mt-3">
  <div class="text-sm font-bold mb-1">CADENCE</div>
  <div class="grid grid-cols-5 gap-4 text-center">
    <div><div class="text-2xl font-bold">$5.3 B</div><div class="text-sm opacity-60">revenue FY25</div></div>
    <div><div class="text-2xl font-bold">~86%</div><div class="text-sm opacity-60">gross margin</div></div>
    <div><div class="text-2xl font-bold">~30%</div><div class="text-sm opacity-60">market share</div></div>
<div><div class="text-lg font-bold leading-tight mt-1">analog/custom design and emulation</div></div>
    <div><div class="text-lg font-bold leading-tight mt-1">ecosystem</div><div class="text-sm opacity-60">must be rebuilt</div></div>
  </div>
  <div class="text-xs opacity-40 text-right mt-1">as of Q2 2026</div>
</div>

<!--
- The broader Electronic System Design market generated about $21 billion in 2025 across tools, semiconductor IP, and services while supporting $792 billion in semiconductor sales.
- Foundry certification, interoperable toolchains, and accumulated IP make replacement an ecosystem-rebuilding task, not a defensible countdown.
-->

---
layout: center
---

# Chokepoint #1: leading-edge EDA

![chokepoint board — first stamp earned](/diagrams/rendered/board-1.svg)

<div class="text-xl mt-6 text-center"><b>Synopsys and Cadence</b> dominate the certified toolchains used for leading-edge chip design.</div>

<!--
- Synopsys and Cadence dominate the certified toolchains used to design leading-edge chips, and foundries and chip designers build their processes around those tools.
- Losing access would delay advanced designs because engineers have few substitutes for critical steps and qualification takes years.
-->

---

# EDA export controls

<div class="mt-8 flex flex-col gap-4 text-lg">
<div class="flex gap-4 items-baseline"><div class="w-40 font-bold shrink-0">Aug 2022</div><div>US restricts EDA software designed for GAAFET development</div></div>
<div class="flex gap-4 items-baseline"><div class="w-40 font-bold shrink-0">May 2025</div><div>Commerce imposes license requirements on most EDA sales to China</div></div>
<div class="flex gap-4 items-baseline"><div class="w-40 font-bold shrink-0">July 2, 2025</div><div>Restrictions end under a framework covering rare-earth exports; duration about six weeks</div></div>
</div>

<div class="text-sm opacity-60 mt-10">
The final section returns to EDA controls as part of US-China semiconductor policy.
</div>

<!--
- Advanced chip designs depend on EDA tools throughout implementation and verification.
- If export controls cut off those tools, engineers can lose the ability to finish or validate a layout before it reaches a fab.
- The 2025 restrictions on sales to China demonstrated that leverage, even though the United States lifted them six weeks later.
-->
