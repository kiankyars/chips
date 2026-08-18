---
layout: section
---

<!-- SEGMENT
id: foundries-field
act: III — The Island
tier: C            # cards — a montage on the Map, not four equal profiles
angle: "There is no real market at the leading edge — only a winner and the three runners-up a government or a memory business pays to keep losing to it. The grid shrank from ~25 to 3 because whoever runs the most wafers wins by default."   # YOU OWN THIS LINE — rewrite it in your voice
runtime: ~3 min
status: draft
seeds: [smic-iou]              # planted here → cashed in geopolitics
pays_off: []                   # this segment cashes no earlier seed; it reuses Act I's cost curve
stamps: []                     # no chokepoint earned here (TSMC already stamped #2)
diagrams: [map-manufacture, foundry-frontier-race]
sources: research/foundries-field.md, research/foundations.md
-->


# Other leading-edge foundries

<div class="text-xl opacity-70 mt-2">The frontier shrank from roughly 25 manufacturers to TSMC, Samsung, and Intel.</div>

![map manufacture](/diagrams/rendered/map-manufacture.svg){class="absolute bottom-4 right-4 w-40 opacity-80"}

<!--
- The fab-cost curve has already narrowed commercial leading-edge logic from roughly 25 manufacturers in 2001 to three today.
- TSMC, Samsung, and Intel now ship leading-edge logic at scale, with state-backed Rapidus trying to join them.
- High wafer volume improves yield and lowers unit cost, so the largest producer learns faster and wins more customers.
- Samsung and Intel remain despite weak foundry economics because each new process generation demands more capital, volume, and learning.
-->

---
class: visual-sequence paper-visual
title: "The rest of the frontier"
---

<div class="visual-sequence__kicker">THE REST OF THE FRONTIER</div>

<div class="visual-sequence__frame">
  <img src="/diagrams/rendered/foundry-frontier-race.svg" alt="Four foundry paths: Samsung continues with yield pressure, GlobalFoundries exits, Rapidus enters with state backing, and SMIC reaches 7 nanometers without EUV" />
</div>

<div class="visual-sequence__caption"><strong>Samsung stayed in the race.</strong><span>The other paths are exit, subsidy, or a sanctions workaround.</span></div>
<div class="visual-sequence__source">Samsung · GlobalFoundries · Rapidus · SMIC</div>

<!--
- Samsung remains at the frontier but has struggled with yield and foundry losses.
- GlobalFoundries left the leading edge in 2018 and focused on profitable specialty nodes.
- Rapidus depends on Japanese state support to attempt 2nm production, while SMIC has produced 7nm-class chips without EUV under export controls.
-->

---

# Economics Ledger: foundry cost is not a disclosed GPU line item

<div class="grid grid-cols-2 gap-10 mt-10 text-center">
<div class="border-2 border-gray-400 rounded-lg p-6">
<div class="text-5xl font-bold">~$18k–$30k</div>
<div class="text-sm opacity-60 mt-2">industry estimate per leading-edge 300 mm wafer</div>
</div>
<div class="border-2 border-gray-400 rounded-lg p-6">
<div class="text-5xl font-bold">59.9%</div>
<div class="text-sm opacity-60 mt-2">TSMC gross margin in FY2025</div>
</div>
</div>

<div class="text-lg opacity-80 mt-10 text-center">
Nvidia does not disclose its foundry cost per GPU. Only three firms currently produce leading-edge logic at commercial scale.
</div>

<!--
- Industry estimates put a leading-edge 300mm wafer at $18k to $30k.
- TSMC reported a 59.9% gross margin in FY2025.
- A wafer price cannot reveal foundry cost per GPU without the die area, dies per wafer, and manufacturing yield.
- Nvidia does not disclose those inputs, so no public source can allocate the foundry cost to one accelerator.
-->

---
layout: center
---

# The fabs depend on a separate equipment industry

<div class="text-2xl mt-8 leading-relaxed max-w-3xl">
TSMC runs the fabs.<br>
ASML, Applied Materials, Lam Research, and KLA<br>
<span class="opacity-60">build the key equipment inside them.</span>
</div>

<!--
- TSMC operates the fabs, but equipment suppliers build the machines that make each process step work.
- ASML supplies lithography, Applied Materials and Lam Research cover deposition and etch, and KLA supplies inspection and process control.
-->
