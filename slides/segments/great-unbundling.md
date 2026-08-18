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
runtime: ~3 min
status: draft
seeds: [margin-ladder]    # the ladder is teased here, ranked in `synthesis`. Soft plant — not a formal ledger pair, but the payoff lives in another segment, so redline per that rule.
pays_off: []              # cashes no prior ledger seed; it consumes foundations' cost-curve concept, which is a dependency, not a seed
stamps: []                # no chokepoint proven here — first stamp (EDA) is earned in `eda`
diagrams: [unbundling-design-fab]
sources: research/foundations.md, research/tsmc.md
-->


<div class="visual-sequence__kicker">THE GREAT UNBUNDLING</div>

<div class="visual-sequence__frame">
  <img src="/diagrams/rendered/unbundling-design-fab.png" alt="A compact chip-design studio hands a physical layout to a much larger semiconductor fabrication plant" />
</div>

<div class="visual-sequence__caption"><strong>Design split from manufacturing</strong><span>when the factory became too expensive for one product line.</span></div>
<div class="visual-sequence__source">Intel 4004 · laid out by hand · 1971</div>

<!--
- In 1971, Federico Faggin could still lay out Intel’s 2,300-transistor 4004 by hand with a straightedge and colored pencils.
- As complexity and fab cost exploded, design and manufacturing became distinct businesses.
- The foundry model lets designers hire capacity while fabs pool demand from many customers.
-->

---

# TSMC pooled demand without competing with customers

<div class="grid grid-cols-3 gap-6 mt-10 text-center">
<div class="border-2 border-gray-400 rounded-lg p-6">
<div class="text-xl font-bold mb-2">Chip designer</div>
<div class="opacity-70">Avoids financing a leading-edge fab.</div>
</div>
<div class="border-2 border-green-500 rounded-lg p-6">
<div class="text-xl font-bold mb-2">Pure-play foundry</div>
<div class="opacity-70">Pools wafer orders across many customers.</div>
</div>
<div class="border-2 border-blue-500 rounded-lg p-6">
<div class="text-xl font-bold mb-2">Neutrality</div>
<div class="opacity-70">Sells no competing chip of its own.</div>
</div>
</div>

<div class="text-center mt-12 text-2xl opacity-80">
Manufacturing became the product.
</div>

<!--
- A $20 billion fab needs a steady stream of wafers to keep its tools busy.
- High utilization spreads the fixed costs across enough output.
- TSMC pooled orders from many designers and promised not to sell a competing chip of its own.
- That neutrality made manufacturing capacity a product independent designers could buy.
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
