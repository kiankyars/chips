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
diagrams: [cost-curve]         # reuses foundations' Act I cost curve as the funnel backdrop; funnel drawn inline for now
sources: research/foundries-field.md, research/foundations.md
-->


# Other leading-edge foundries

<div class="text-xl opacity-70 mt-2">Samsung, Intel, and state-backed challengers</div>

![map manufacture](/diagrams/rendered/map-manufacture.svg){class="absolute bottom-4 right-4 w-40 opacity-80"}

<!--
- TSMC, Samsung, and Intel now ship leading-edge logic at scale, with state-backed Rapidus trying to join them.
- Samsung and Intel remain despite weak foundry economics because each new process generation demands more capital, volume, and learning.
-->

---

# Leading-edge manufacturers: about 25 in 2001, three today

<div class="grid grid-cols-9 gap-1 items-end mt-8 h-56 text-center text-xs">
  <div class="flex flex-col justify-end"><div class="bg-gray-400 rounded-t" style="height:100%"></div><div class="mt-2 font-bold">~25</div><div class="opacity-60">130nm<br>2001</div></div>
  <div class="flex flex-col justify-end"><div class="bg-gray-400 rounded-t" style="height:68%"></div><div class="mt-2 font-bold">~17</div><div class="opacity-60">90nm<br>2003</div></div>
  <div class="flex flex-col justify-end"><div class="bg-gray-400 rounded-t" style="height:56%"></div><div class="mt-2 font-bold">~14</div><div class="opacity-60">65nm<br>2005</div></div>
  <div class="flex flex-col justify-end"><div class="bg-gray-400 rounded-t" style="height:48%"></div><div class="mt-2 font-bold">~12</div><div class="opacity-60">45nm<br>2007</div></div>
  <div class="flex flex-col justify-end"><div class="bg-gray-400 rounded-t" style="height:36%"></div><div class="mt-2 font-bold">~9</div><div class="opacity-60">32nm<br>2009</div></div>
  <div class="flex flex-col justify-end"><div class="bg-gray-400 rounded-t" style="height:24%"></div><div class="mt-2 font-bold">~6</div><div class="opacity-60">22nm<br>2012</div></div>
  <div class="flex flex-col justify-end"><div class="bg-gray-500 rounded-t" style="height:16%"></div><div class="mt-2 font-bold">4</div><div class="opacity-60">14nm<br>2015</div></div>
  <div class="flex flex-col justify-end"><div class="bg-gray-600 rounded-t" style="height:12%"></div><div class="mt-2 font-bold">3</div><div class="opacity-60">7/5nm<br>2018–20</div></div>
  <div class="flex flex-col justify-end"><div class="bg-black dark:bg-white rounded-t" style="height:12%"></div><div class="mt-2 font-bold">3</div><div class="opacity-60">3/2nm<br>2022–26</div></div>
</div>

<div class="text-sm opacity-60 mt-6 text-center">
As leading-edge fab costs rose, the number of manufacturers fell from about 25 to three.
</div>

<!--
- The number of leading-edge manufacturers fell from about 25 in 2001 to three by the late 2010s as fab costs climbed.
- High wafer volume improves yield and lowers unit cost, so the largest producer learns faster and wins more customers.
- TSMC now has a foundry revenue share many times Samsung's, reinforcing this cycle.
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

# Foundry cost is embedded in Nvidia's cost of revenue

<div class="grid grid-cols-2 gap-10 mt-10 text-center">
<div class="border-2 border-gray-400 rounded-lg p-6">
<div class="text-5xl font-bold">~$18k–$30k</div>
<div class="text-sm opacity-60 mt-2">reported price per leading-edge 300 mm wafer</div>
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
