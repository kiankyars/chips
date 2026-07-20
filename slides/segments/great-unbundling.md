---
layout: default
class: visual-sequence paper-visual
title: "The great unbundling"
---

<!-- SEGMENT
id: great-unbundling
act: I — The Impossible Object
tier: —
angle: "The industry didn't grow into four kinds of company — one graph shattered it into them. In 1987 Morris Chang read the fab-cost curve and turned manufacturing itself into a product; every company in this course is just a different survival strategy for a cost that doubles every four years."   # PROPOSED — YOU OWN THIS LINE
runtime: ~5 min
status: draft
seeds: [margin-ladder]    # the ladder is teased here, ranked in `synthesis`. Soft plant — not a formal ledger pair, but the payoff lives in another segment, so redline per that rule.
pays_off: []              # cashes no prior ledger seed; it consumes foundations' cost-curve concept, which is a dependency, not a seed
stamps: []                # no chokepoint proven here — first stamp (EDA) is earned in `eda`
diagrams: [map-full]      # FIRST full reveal of the master map — archetypes ARE the legend
sources: research/foundations.md, research/tsmc.md
-->


<div class="visual-sequence__kicker">THE GREAT UNBUNDLING</div>

<div class="visual-sequence__frame">
  <img src="/diagrams/rendered/unbundling-design-fab.png" alt="A compact chip-design studio hands a physical layout to a much larger semiconductor fabrication plant" />
</div>

<div class="visual-sequence__caption"><strong>Design split from manufacturing</strong><span>when the factory became too expensive for one product line.</span></div>
<div class="visual-sequence__source">Leading-edge fab cost · ~$4M → $20B+</div>

<!--
- For decades, one company designed a chip, owned the fab, and sold the finished product.
- The foundry model separated those jobs: designers could hire manufacturing capacity, while the fab pooled demand from many customers.
- That split created modern fabless designers and pure-play foundries.
-->

---

# Leading-edge fab cost rose roughly 5,000-fold

<div class="grid grid-cols-3 gap-6 mt-10 text-center">
<div>
<div class="text-6xl font-bold">~$4M</div>
<div class="opacity-70 mt-2">a leading-edge fab, early 1970s</div>
</div>
<div>
<div class="text-6xl font-bold">$20B+</div>
<div class="opacity-70 mt-2">a leading-edge fab today</div>
</div>
<div>
<div class="text-6xl font-bold">~4 yrs</div>
<div class="opacity-70 mt-2">to double (Rock's law)</div>
</div>
</div>

<div class="text-center mt-12 text-2xl">
25 companies could build the leading edge in 2001.<br>
<span class="opacity-60 text-xl">Today: <b>3.</b></span>
</div>

<!--
- Each process generation requires new buildings, tools, and process development before a sellable chip appears.
- As that upfront risk grew, many firms left leading-edge manufacturing and became fabless or stayed on older nodes.
- Three companies still finance the newest logic processes.
-->

---

# Leading-edge fabs need volume from many customers

<div class="grid grid-cols-2 gap-10 mt-10">
<div class="border-2 border-gray-400 rounded-lg p-6">
<div class="text-xl font-bold mb-2">Chip designer</div>
<div class="opacity-70">Cannot finance a leading-edge fab.</div>
</div>
<div class="border-2 border-gray-400 rounded-lg p-6">
<div class="text-xl font-bold mb-2">Fab operator</div>
<div class="opacity-70">Needs enough customer volume to keep costly equipment utilized.</div>
</div>
</div>

<div class="text-center mt-12 text-2xl opacity-80">
In the 1980s, major chip companies usually designed and manufactured under one roof.<br>
<span class="opacity-60 text-lg">"Real men have fabs." — Jerry Sanders, AMD</span>
</div>

<!--
- A $20 billion fab needs a steady stream of wafers to keep its tools busy.
- High utilization spreads the fixed costs across enough output.
- Few product lines supply that volume on their own.
- A foundry makes the investment economic by pooling orders from many chip designers.
-->

---

# TSMC made manufacturing the product

<div class="text-2xl mt-8 leading-relaxed text-center">
TSMC offered dedicated foundry capacity<br>
<b>to outside chip designers.</b>
</div>

<div class="grid grid-cols-3 gap-6 mt-12 text-center">
<div>
<div class="text-5xl font-bold">56</div>
<div class="opacity-70 mt-2">Chang's age at founding</div>
</div>
<div>
<div class="text-5xl font-bold">~48%</div>
<div class="opacity-70 mt-2">Taiwan gov't stake · Philips ~28%</div>
</div>
<div>
<div class="text-5xl font-bold">0</div>
<div class="opacity-70 mt-2">chips TSMC would ever sell of its own</div>
</div>
</div>

<!--
- Morris Chang founded TSMC in 1987 at age 56, with Taiwan’s government and Philips supplying most initial capital.
- TSMC manufactured designs for outside customers and promised not to sell competing chips of its own.
- That neutrality gave customers confidence to share their layouts and supplied the fab with demand from many designers.
-->

---

# Four semiconductor business models

<div class="grid grid-cols-2 gap-5 mt-6">
<div class="border-2 rounded-lg p-4" style="border-color:#3b82f6">
<div class="text-lg font-bold" style="color:#3b82f6">FABLESS</div>
<div class="opacity-70 text-sm mt-1">Design chips and contract with foundries. Nvidia, Qualcomm, AMD, Apple silicon.</div>
</div>
<div class="border-2 rounded-lg p-4" style="border-color:#10b981">
<div class="text-lg font-bold" style="color:#10b981">FOUNDRY</div>
<div class="opacity-70 text-sm mt-1">Manufacture chips designed by customers. TSMC.</div>
</div>
<div class="border-2 rounded-lg p-4" style="border-color:#8b5cf6">
<div class="text-lg font-bold" style="color:#8b5cf6">IDM</div>
<div class="opacity-70 text-sm mt-1">Design and manufacture chips. Intel, Samsung, and analog suppliers.</div>
</div>
<div class="border-2 rounded-lg p-4" style="border-color:#f59e0b">
<div class="text-lg font-bold" style="color:#f59e0b">EQUIPMENT</div>
<div class="opacity-70 text-sm mt-1">Supply the tools used by fabs. ASML and Applied Materials.</div>
</div>
</div>

<div class="text-center mt-6 text-sm opacity-60">
These models separate chip design, manufacturing, and equipment supply.
</div>

<!--
- Rising fab costs produced four models: fabless firms avoid factories, foundries pool customers, and integrated device manufacturers, or IDMs, keep design and production together.
- Equipment companies sell the specialized tools that manufacturers need, regardless of which chip design wins.
-->

---
layout: center
---

# The semiconductor supply chain

![the master industry map, fully lit — regions colored by archetype](/diagrams/rendered/map-full.svg)

<div class="text-center mt-4 text-lg opacity-80">
The colors identify the four business models.
</div>

<!--
- The accelerator begins with Nvidia’s design and EDA tools, then TSMC fabricates the logic dies.
- SK hynix, Micron, or Samsung supplies the HBM; TSMC packages the logic and memory together; system builders install the package in a rack.
- Equipment and materials companies support each manufacturing step behind that path.
-->
