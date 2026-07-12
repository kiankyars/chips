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

---
layout: section
---

# The Printing Press

<div class="text-xl opacity-70 mt-2">Act IV · the fab tour reaches the EXPOSE step</div>

![the wafer reaches lithography](/diagrams/rendered/flow-expose.svg)

<!--
BEATS:
- We're mid-tour, following one wafer. It has been coated in resist. Now it reaches the one step everything else exists to serve: EXPOSE — printing the pattern.
- The machine that does it comes from one company. Not "mostly." One.
LINE THAT LANDS:
- "The wafer has arrived at the most expensive room in the building."
-->

---

# You've probably seen the machine

<div class="grid grid-cols-2 gap-8 mt-6 items-center">
<div>

![how EUV light is made](/diagrams/rendered/euv-light-path.svg)

</div>
<div class="text-lg opacity-80 leading-relaxed">

A droplet of molten tin, fired **~50,000×/sec**, hit twice by a laser, flashed into plasma that glows at **13.5 nm** — bounced off the flattest mirrors ever made onto the wafer.

<div class="text-sm opacity-60 mt-4">
Veritasium's video on this has tens of millions of views. So we'll do the machine in 60 seconds — because the machine is not the interesting part. The <i>business</i> is.
</div>

</div>
</div>

<!--
BEATS:
- Do the light path fast (the diagram carries it): tin droplet → laser → plasma → 13.5nm light → Zeiss mirrors → wafer.
- Then pivot hard: the machine is a marvel, but everyone's already made that video. The reason ASML matters is economic, not mechanical.
FACT AMMO:
- ~50,000 tin droplets/sec, 13.5nm light [research/asml.md §the machine]. <!-- VERIFY: droplet rate -->
LINE THAT LANDS:
- "Everyone shows you the fireworks. Nobody explains why one company owns the match."
-->

---

# The monopoly

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
Canon and Nikon still sell older DUV. At the leading edge — EUV — there is no second supplier. There is no plan B.
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

# Why nobody can build a second one

<div class="grid grid-cols-2 gap-6 mt-6">
<div class="flex flex-col justify-center gap-3 text-lg">

- **>100,000 parts**, sourced across **~17 countries**
- ASML builds only **~15%** in-house — it's an *orchestrator*
- **Zeiss** optics — the chokepoint *inside* the chokepoint
- **Trumpf** laser · **Cymer** (ASML-owned) light source

</div>
<div class="flex flex-col justify-center">
<div class="border-l-4 border-amber-500 pl-4 text-lg leading-relaxed">
To copy ASML you don't copy a machine.<br>
You copy <b>an entire supply web</b> that took 30+ years and a dozen countries to assemble.
</div>
</div>
</div>

<!--
BEATS:
- The real product isn't the scanner — it's the only supply chain on Earth that can assemble it. 85% is sourced; ASML integrates.
- Zeiss is the sharpest sub-chokepoint: the mirrors are effectively single-source. If ASML is the world's chokepoint, Zeiss is ASML's.
FACT AMMO:
- >100,000 parts, ~17 countries, ~15% in-house [research/asml.md §the machine]. <!-- VERIFY: part-count figures vary 5k–100k+ depending on what's counted -->
- Zeiss mirror analogy: scaled to the size of Germany, the largest bump would be under 1mm [research/asml.md §the machine].
LINE THAT LANDS:
- "ASML's real product isn't a machine. It's the only supply chain on Earth that can build this machine."
-->

---

# Two chokepoints, one step

![chokepoint board — 5 of 7](/diagrams/rendered/board-5.svg)

<div class="text-sm opacity-60 mt-6 text-center">
ASML gates who can print advanced chips. Zeiss gates ASML. One process step just put <b>two</b> stamps on the board.
</div>

<!--
BEATS:
- Land the stamps: #4 ASML (EUV), #5 Zeiss (the optics inside it). This is the densest chokepoint moment in the whole episode — two single points of failure in one machine.
- Note the pattern for later: chokepoints nest. The board is starting to look less like a list and more like a map of leverage.
FACT AMMO:
- EUV optics are effectively single-sourced from Carl Zeiss SMT [research/asml.md §the machine].
-->

---

# The business a monopoly builds — FY2025

<div class="grid grid-cols-2 gap-x-12 gap-y-6 mt-8 text-lg">

<div><b>€32.7B</b> — total net sales <span class="opacity-50">(+16% YoY)</span></div>
<div><b>€9.6B</b> — net income</div>
<div><b>52.8%</b> — gross margin</div>
<div><b>~€28B</b> — net bookings (backlog)</div>
<div><b>48</b> — EUV systems shipped</div>
<div><b>€11.6B</b> — EUV sales <span class="opacity-50">(+39%)</span></div>

</div>

<div class="text-xs opacity-40 text-right mt-4">as of FY2025 · refresh before recording</div>

<!--
BEATS:
- What a leading-edge monopoly looks like on a P&L: ~53% gross margin, a backlog measured in years, EUV growing ~40% on the AI buildout.
- The backlog is the tell — customers pre-commit billions because there's no alternative and no shelf. And the machines never really leave: installed-base service is a recurring annuity on top.
FACT AMMO:
- All figures: research/asml.md §FY2025 [1][2][3]. <!-- VERIFY: refresh to latest 2026 quarter before recording — Q2 2026 due ~mid-July -->
LINE THAT LANDS:
- "A monopoly on the leading edge looks like a 53% margin and a waiting list."
-->

---

# The frontier: High-NA EUV

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
Higher NA → smaller features in a single exposure. Without it, you split one layer into multiple masks — <b>multi-patterning</b>: slower, costlier, lower yield. Hold that word.
</div>

<!--
BEATS:
- The next generation is the most expensive production tool ever sold — how we push below 2nm. Whoever installs these first leads the next node.
- SEED multi-patterning: when you can't get (or can't buy) EUV, you fake finer features by exposing a layer several times. It works — but it's the expensive, low-yield workaround. This word comes back when we get to China and SMIC.
FACT AMMO:
- EXE:5200-class, ~$400M, NA 0.55 vs 0.33, <12 installed [research/asml.md §High-NA]. <!-- VERIFY: throughput (~175–220 wph) and exact install count -->
LINE THAT LANDS:
- "There's a way to make advanced chips without EUV. It's called doing it the hard way, and it's the story of China's whole chip program."
-->

---

# The chokepoint

<div class="text-3xl mt-12 leading-relaxed">
One company.<br>
One country.<br>
Decides which nations get to make advanced chips at all.
</div>

<div class="text-sm opacity-60 mt-10">
Barred from selling EUV to China by Dutch/US export rules — which is exactly why ASML sits at the center of the chip war. That export license is a lever. We'll pull it in the final act.
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
