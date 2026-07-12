<!-- SEGMENT
id: cold-open
act: 0 — The Object
tier: —
angle: "Hold up the single most fought-over object on Earth right now, and admit you don't fully understand how it gets made. Neither does almost anyone. By the end, we both will."   # YOU OWN THIS LINE — rewrite it in your voice
runtime: ~4 min
status: draft
seeds: [the-object, the-seven, the-money-bar]
pays_off: []
stamps: []
diagrams: [map-dark, board-0, journey-0]
sources: research/nvidia.md, research/foundations.md
note: BUILD AND RECORD LAST — this front-loads four promises (map, board, money bar, "seven"). Only lock it once every device has survived the build.
-->

---
layout: center
---

# One object

<div class="text-2xl opacity-80 mt-6 leading-relaxed">
A slab of silicon the size of a coaster.<br>
Right now it is the most fought-over object on Earth.
</div>

<!--
BEATS:
- Open on the object, not a thesis. Hold a GB300-class AI accelerator on screen. Let it sit.
- One sentence of stakes: nations, trillion-dollar companies, and every AI lab are fighting over this specific thing.
LINE THAT LANDS:
- "Governments are rewriting trade law over this. Let me show you what it actually is."
-->

---

# Three things that shouldn't be possible

<div class="grid grid-cols-3 gap-8 mt-12 text-center">
<div>
<div class="text-6xl font-bold">208 B</div>
<div class="opacity-70 mt-3">transistors on one package — about one for every star in the Milky Way</div>
</div>
<div>
<div class="text-6xl font-bold">~$4 M</div>
<div class="opacity-70 mt-3">for one rack of 72 — pulling the power of ~110 homes</div>
</div>
<div>
<div class="text-6xl font-bold">~$600 B</div>
<div class="opacity-70 mt-3">hyperscaler capex in 2026, chasing this one part</div>
</div>
</div>

<!--
BEATS:
- Three impossibility facts, fast, each with a physical handle. Don't explain them yet — let them feel absurd.
- Transistor count vs stars; the price/power of a single rack; the scale of money pointed at it.
FACT AMMO:
- 208B transistors on the B300 package [research/nvidia §the one chip]. Rack ~$4M, ~135kW ≈ 110 US homes [research/nvidia §the one chip]. ~$600B hyperscaler 2026 capex [research/foundations §industry aggregates]. <!-- VERIFY: capex figure — refresh before recording -->
LINE THAT LANDS:
- "One transistor for every star in our galaxy — on a chip the size of a coaster."
-->

---

# And almost nobody can make it

![the industry map — dark](/diagrams/rendered/map-dark.svg)

<div class="text-lg opacity-70 mt-6 text-center">
Every company that touches this chip lives somewhere on this map. Tonight it's dark. We're going to light up every single box.
</div>

<!--
BEATS:
- Reveal the master map — fully dark. This is the spine. The viewer will be able to locate themselves on it at any minute for the next two hours.
- Promise #1: by the end, every light is on. Promise #2: every company that touches the chip gets named.
LINE THAT LANDS:
- "By the end of this, you'll understand this map better than most people paid to invest in it."
-->

---

# I count seven

![the chokepoint board — empty](/diagrams/rendered/board-0.svg)

<div class="text-lg opacity-70 mt-6 text-center">
Seven companies that are single points of failure for the modern economy. Remove any one and the leading edge stops within months. We'll find them one at a time.
</div>

<!--
BEATS:
- Promise #3, the mystery engine: name the number — seven — and show the empty board. Every time we prove a single point of failure, it earns a stamp.
- Tease the twist without spoiling it: "one company is going to show up on this board twice."
FACT AMMO:
- The seven, with criteria, are fixed in curriculum.md §The Seven Chokepoints — lock the count before recording this.
LINE THAT LANDS:
- "Seven companies. Not seven countries. Seven companies. Let's go find them."
-->

---
layout: center
---

# The journey

![journey bar — start](/diagrams/rendered/journey-0.svg)

<div class="text-lg opacity-70 mt-8">
SAND → DESIGN → FAB → MEMORY → PACKAGE → DATA CENTER.<br>
We follow this one chip the whole way. Let's start where it starts: as an idea.
</div>

<!--
BEATS:
- Promise #4 (implicit): the money bar — we'll tally who charges what for this chip, and only add it all up at the very end.
- Introduce the journey bar as the "you are here" strip. Then hand off to Part 1 — the physics teardown of the object we just held.
LINE THAT LANDS:
- "This is the most important supply chain in the world. Here's the whole thing, one link at a time."
-->
