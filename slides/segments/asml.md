---
layout: section
---

<!-- SEGMENT
id: asml
act: IV — The Fab Tour
tier: P
angle: "ASML isn't a chip company — it's the single most concentrated chokepoint in the world economy. One company in one Dutch town decides which nations get to make advanced chips at all."   # YOU OWN THIS LINE — rewrite it in your voice
runtime: ~8 min
status: draft
seeds: [multi-patterning, euv-export-license]
pays_off: []
stamps: [asml, zeiss]
diagrams: [flow-expose, euv-light-path, board-5]
sources: research/asml.md
-->


# EUV lithography

<div class="text-xl opacity-70 mt-2">Part 4 · Fabrication · lithography</div>

![the wafer reaches lithography](/diagrams/rendered/flow-expose.svg)

<!--
BEATS:
- We're mid-tour, following one wafer. It has been coated in resist. Now it reaches the one step everything else exists to serve: EXPOSE — printing the pattern.
- The machine that does it comes from one company. Not "mostly." One.
LINE THAT LANDS:
- "The wafer has arrived at the most expensive room in the building."
-->

---

# How an EUV scanner makes 13.5 nm light

<div class="grid grid-cols-2 gap-8 mt-6 items-center">
<div>

![how EUV light is made](/diagrams/rendered/euv-light-path.svg)

</div>
<div class="text-lg opacity-80 leading-relaxed">

A laser hits each molten-tin droplet twice. Roughly **50,000 droplets per second** produce **13.5 nm** plasma light, which Zeiss mirrors direct onto the wafer.

<div class="text-sm opacity-60 mt-4">
ASML is the only company that can supply this system at production scale.
</div>

</div>
</div>

<!--
BEATS:
- Do the light path fast (the diagram carries it): tin droplet → laser → plasma → 13.5nm light → Zeiss mirrors → wafer.
- Then pivot hard: the machine is a marvel, but everyone's already made that video. The reason ASML matters is economic, not mechanical.
FACT AMMO:
- ~50,000 tin droplets/sec, 13.5nm light [research/asml.md §the machine]. [VERIFY: droplet rate]
LINE THAT LANDS:
- "Everyone shows you the fireworks. Nobody explains why one company owns the match."
-->

---

# ASML is the sole EUV supplier

<div class="grid grid-cols-2 gap-8 mt-8">
<div class="text-center">
<div class="text-8xl font-bold">100%</div>
<div class="opacity-70 mt-2">of the world's EUV machines</div>
</div>
<div class="text-center">
<div class="text-8xl font-bold">~83%</div>
<div class="opacity-70 mt-2">of <i>all</i> lithography sales</div>
</div>
</div>

<div class="text-sm opacity-60 mt-10 text-center">
Canon and Nikon sell DUV systems. ASML is the only supplier of EUV lithography tools.
</div>

<!--
BEATS:
- EUV is required for every cutting-edge logic chip. ASML is the ONLY maker. This is not "market leader" — it's a literal monopoly on the leading edge.
- Set the hook for the stamp: this is chokepoint #4.
FACT AMMO:
- 100% EUV share; ~83% of all litho incl. DUV [research/asml.md §monopoly].
LINE THAT LANDS:
- "There is ASML, or there is no advanced chip. That's the whole sentence."
-->

---

# ASML integrates a specialized supplier network

<div class="grid grid-cols-2 gap-6 mt-6">
<div class="flex flex-col justify-center gap-3 text-lg">

- **>100,000 parts**, sourced across **~17 countries**
- ASML builds about **15%** in-house and integrates the rest
- **Zeiss** is the sole supplier of EUV optics
- **Trumpf** laser · **Cymer** (ASML-owned) light source

</div>
<div class="flex flex-col justify-center">
<div class="border-l-4 border-amber-500 pl-4 text-lg leading-relaxed">
A competitor would need to reproduce the supplier network and system-integration knowledge that ASML developed over 30+ years.
</div>
</div>
</div>

<!--
BEATS:
- The real product isn't the scanner — it's the only supply chain on Earth that can assemble it. 85% is sourced; ASML integrates.
- Zeiss is the sharpest sub-chokepoint: the mirrors are effectively single-source. If ASML is the world's chokepoint, Zeiss is ASML's.
FACT AMMO:
- >100,000 parts, ~17 countries, ~15% in-house [research/asml.md §the machine]. [VERIFY: part-count figures vary 5k–100k+ depending on what's counted]
- Zeiss mirror analogy: scaled to the size of Germany, the largest bump would be under 1mm [research/asml.md §the machine].
LINE THAT LANDS:
- "ASML's real product isn't a machine. It's the only supply chain on Earth that can build this machine."
-->

---

# ASML and Zeiss are single-source dependencies

![chokepoint board — 5 of 7](/diagrams/rendered/board-5.svg)

<div class="text-sm opacity-60 mt-6 text-center">
ASML is the sole EUV scanner supplier; Zeiss is the sole supplier of its optics. Both enter the dependency map.
</div>

<!--
BEATS:
- Land the stamps: #4 ASML (EUV), #5 Zeiss (the optics inside it). This is the densest chokepoint moment in the whole episode — two single points of failure in one machine.
- Note the pattern for later: chokepoints nest. The board is starting to look less like a list and more like a map of leverage.
FACT AMMO:
- EUV optics are effectively single-sourced from Carl Zeiss SMT [research/asml.md §the machine].
-->

---

# ASML financials — FY2025

<div class="grid grid-cols-2 gap-x-12 gap-y-6 mt-8 text-lg">

<div><b>€32.7B</b> — total net sales <span class="opacity-50">(+16% YoY)</span></div>
<div><b>€9.6B</b> — net income</div>
<div><b>52.8%</b> — gross margin</div>
<div><b>€28.0B</b> — FY2025 net bookings</div>
<div><b>48</b> — EUV systems shipped</div>
<div><b>€11.6B</b> — EUV sales <span class="opacity-50">(+39%)</span></div>

</div>

<div class="text-xs opacity-40 text-right mt-4">FY2025 results</div>

<!--
BEATS:
- What a leading-edge monopoly looks like on a P&L: ~53% gross margin, a backlog measured in years, EUV growing ~40% on the AI buildout.
- The backlog is the tell — customers pre-commit billions because there's no alternative and no shelf. And the machines never really leave: installed-base service is a recurring annuity on top.
FACT AMMO:
- All figures: research/asml.md §FY2025 [1][2][3]. [VERIFY: refresh to latest 2026 quarter before recording — Q2 2026 due ~mid-July]
LINE THAT LANDS:
- "A monopoly on the leading edge looks like a 53% margin and a waiting list."
-->

---

# High-NA EUV raises numerical aperture to 0.55

<div class="grid grid-cols-3 gap-6 mt-10 text-center">
<div>
<div class="text-6xl font-bold">$400M</div>
<div class="opacity-70 mt-2">per EXE:5200-class tool</div>
</div>
<div>
<div class="text-6xl font-bold">0.55</div>
<div class="opacity-70 mt-2">numerical aperture (vs 0.33)</div>
</div>
<div>
<div class="text-6xl font-bold">&lt;12</div>
<div class="opacity-70 mt-2">installed worldwide</div>
</div>
</div>

<div class="text-sm opacity-60 mt-10 text-center">
Higher NA prints smaller features in one exposure. <b>Multi-patterning</b> uses several masks for one layer, adding process time, cost, and yield risk.
</div>

<!--
BEATS:
- The next generation is the most expensive production tool ever sold — how we push below 2nm. Whoever installs these first leads the next node.
- SEED multi-patterning: when you can't get (or can't buy) EUV, you fake finer features by exposing a layer several times. It works — but it's the expensive, low-yield workaround. This word comes back when we get to China and SMIC.
FACT AMMO:
- EXE:5200-class, ~$400M, NA 0.55 vs 0.33, <12 installed [research/asml.md §High-NA]. [VERIFY: throughput (~175–220 wph) and exact install count]
LINE THAT LANDS:
- "There's a way to make advanced chips without EUV. It's called doing it the hard way, and it's the story of China's whole chip program."
-->

---

# Export licenses restrict where ASML can ship EUV tools

<div class="text-3xl mt-12 leading-relaxed">
Dutch export licenses determine which customers can buy ASML's EUV systems.
</div>

<div class="text-sm opacity-60 mt-10">
ASML cannot sell EUV systems to China under Dutch export controls coordinated with the United States. Those rules are central to current chip policy.
</div>

<!--
BEATS:
- Tie back to the angle — the cleanest chokepoint in the whole episode, now stamped twice.
- SEED the export license: don't go deep, just plant that this monopoly is also a weapon, and the geopolitics act will fire it.
- Closer / handoff: the wafer moves on down the tour — "ASML printed the pattern. Now something has to carve it."
FACT AMMO:
- EUV export ban to China; ASML is the West's single biggest point of leverage [research/asml.md §geopolitics].
LINE THAT LANDS:
- "Every chip-war headline you've ever read traces back to one company's export license."
-->
