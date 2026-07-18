---
layout: section
---

<!-- SEGMENT
id: life-of-a-wafer
act: IV — The Fab Tour
tier: —            # keystone teach — concept segment, no company tier
angle: "Nobody builds a chip — a chip survives. One seven-step loop, run ~80 times over three months, where a single invisible particle kills a die worth more than gold; every company you're about to meet exists because it owns exactly one of those steps."   # YOU OWN THIS LINE — rewrite in your voice
runtime: ~5 min
status: draft
seeds: [japan-under-everything]     # stamp #3 opens the Japan cluster; `materials` cashes the full basement tour
pays_off: [yield]                   # stage 2 of the yield chain: foundations → HERE → kla → intel → packaging (chiplets)
stamps: [japan-materials]           # stamp #3 — Japan's materials cluster
diagrams: [map-equipment, journey-3, flow-strip, flow-coat, board-3, flow-expose]
sources: research/foundations.md, research/materials.md
-->


# Inside a leading-edge fab

<div class="text-2xl opacity-80 mt-2">Three to four months and roughly 1,000 process steps</div>

<div class="grid grid-cols-2 gap-8 mt-8 items-center">
<div>

![industry map — equipment region lit](/diagrams/rendered/map-equipment.svg)

</div>
<div class="text-2xl leading-relaxed">
A leading-edge wafer passes through<br>
<b>roughly 1,000 process steps</b><br>
over <b>three to four months</b>.<br>
<span class="opacity-60 text-lg">The next sections follow its equipment and materials.</span>
</div>
</div>

![journey bar — FAB](/diagrams/rendered/journey-3.svg)

<!--
BEATS:
- Catch the handoff from foundries-field: TSMC's fabs are cathedrals — but TSMC doesn't build the machines inside them, and nobody you've heard of does. Time to go inside.
- New rules for this act: no more company profiles in sequence. One continuous story — we follow a single wafer through the fab for three months, and every company enters at the exact step where the wafer can't proceed without them.
- Map beat: the equipment region lights up. This is the layer under the foundries — the people the foundries themselves depend on.
- Set the scale promise: roughly a thousand steps (500–1,000+ depending on the node), ~3–4 months door to door.
FACT AMMO:
- ~500–1,000+ process steps over ~3–4 months for a leading-edge logic wafer [research/foundations §process flow].
- Handle: most of that time the wafer isn't being worked on — it's queueing; fabs average 1–1.5 days per mask layer [research/foundations §process flow].
LINE THAT LANDS:
- "This isn't a factory tour. It's a survival story."
-->

---

# A wafer and a mask set enter the fab

<div class="grid grid-cols-2 gap-10 mt-8">
<div class="border-2 border-gray-400 rounded-lg p-6 text-center">
<div class="text-sm opacity-60 mb-2">THE WAFER</div>
<div class="text-5xl font-bold">99.999999999%</div>
<div class="opacity-70 mt-2">pure silicon — "eleven nines"</div>
<div class="text-lg mt-4">300 mm disc · ~<b>$100–200</b> blank</div>
<div class="text-sm opacity-60 mt-2">Shin-Etsu · SUMCO (Japan)</div>
</div>
<div class="border-2 border-gray-400 rounded-lg p-6 text-center">
<div class="text-sm opacity-60 mb-2">THE MASKS</div>
<div class="text-5xl font-bold">60–100</div>
<div class="opacity-70 mt-2">patterned reticles — roughly one per mask level</div>
<div class="text-lg mt-4">~<b>$5–15M</b> per design</div>
<div class="text-sm opacity-60 mt-2">one EUV mask: $500k–1M</div>
</div>
</div>

<!--
BEATS:
- Delivery one: the design. The file from Act II is now physical — a set of master stencils (photomasks), one per layer of the chip. The blueprint, frozen into quartz.
- Delivery two: the canvas. A polished disc of the purest material humans mass-produce — and it costs about as much as a pair of sneakers.
- Name the wafer makers: Shin-Etsu and SUMCO, two Japanese companies under nearly every chip on Earth. (Hold that thought — it pays off in two slides.)
- Frame the act's magic trick: everything that happens for the next three months is turning a $150 disc into something worth more than gold.
FACT AMMO:
- Blank polished 300mm wafer ≈ $100–200 [research/materials §wafers]. Handle: sneaker money.
- Eleven nines = 99.999999999% pure ≈ one wrong atom per hundred billion — roughly one typo in a library of ~200,000 novels [research/foundations §sand to wafer].
- Wafer supply oligopoly: ~5 companies (Shin-Etsu, SUMCO, GlobalWafers, Siltronic, SK Siltron) control ~85–90% of the market [VERIFY: current share split] ; Shin-Etsu + SUMCO alone supply more than half of world volume [VERIFY: precise combined share, commonly cited ~50–60%] [research/materials §wafers].
- Mask set: 60–100 masks, ~$5–15M per design at 5/3nm; a single EUV mask runs $500k–1M [VERIFY: some estimates put 2nm-era sets at $20–30M+] [research/materials §photomasks].
- Spare (optional origin story): the crystal-pulling method every wafer starts with — Czochralski, 1916 — was discovered when a chemist dipped his pen into molten tin instead of his inkwell and pulled out a single crystal [research/materials §wafers].
LINE THAT LANDS:
- "The purest object in the building arrives for the price of sneakers. The stencils to print on it cost more than the truck that delivered them."
-->

---

# The fabrication cycle repeats for each layer

![flow strip: deposit → coat → expose → etch → implant → polish → measure](/diagrams/rendered/flow-strip.svg)

<div class="grid grid-cols-3 gap-6 mt-10 text-center">
<div><div class="text-4xl font-bold">1 mask level</div><div class="text-sm opacity-60">one lithography pattern</div></div>
<div><div class="text-4xl font-bold">~80–120</div><div class="text-sm opacity-60">mask levels per design</div></div>
<div><div class="text-4xl font-bold">billions</div><div class="text-sm opacity-60">features patterned across each wafer</div></div>
</div>

<!--
BEATS:
- Teach the ribbon left to right, once, slowly: DEPOSIT a film → COAT it with light-sensitive resist → EXPOSE (the lithography machine prints this layer's pattern) → ETCH the pattern into the film → IMPLANT dopants (on transistor layers) → POLISH the whole thing flat → MEASURE that it worked. Then do it again.
- One pass through the loop = one finished layer. Run it ~80–120 times and a chip exists.
- The anti-intuition beat: nobody assembles a chip. There are no tweezers, no placing of parts. All of the billions of transistors on every die are printed simultaneously, layer by layer — a 3D screen-print at atomic resolution.
- Device intro (say it explicitly): this ribbon is the map of the entire act. Every company coming up — the litho maker, the deposit/etch people, the inspector, the chemical suppliers — enters with their step glowing on this strip. Memorize the ribbon and Act IV can't lose you.
FACT AMMO:
- The loop: deposit → coat → expose → etch → implant → polish (CMP) → measure; ~80–120 iterations = ~500–1,000+ total steps [research/foundations §process flow].
- Simplification hedge (direction of the lie): the seven-step strip folds develop, resist strip, clean, and anneal into their neighbors, and implant only runs on transistor layers — reality has MORE sub-steps than the ribbon, never fewer.
LINE THAT LANDS:
- "Nobody assembles a chip. You print one — the same loop, eighty times over."
- "This ribbon is the org chart of the next twenty minutes."
-->

---

# Japan supplies the wafer, resist, and EUV mask blanks

![coat step glowing](/diagrams/rendered/flow-coat.svg)

<div class="grid grid-cols-3 gap-6 mt-6 text-center text-lg">
<div><b>The wafer</b><div class="opacity-70 text-sm mt-1">Shin-Etsu + SUMCO<br>&gt;half of world silicon</div></div>
<div><b>The resist</b><div class="opacity-70 text-sm mt-1">JSR · TOK — Japan ~90%<br>(~95% of EUV resist)</div></div>
<div><b>The mask blanks</b><div class="opacity-70 text-sm mt-1">Hoya + AGC<br>≈93% of EUV blanks</div></div>
</div>

<div class="mt-8 text-center">

![chokepoint board — third stamp](/diagrams/rendered/board-3.svg)

<div class="text-lg mt-2"><b>CHOKEPOINT #3 · Japan's materials cluster</b></div>
</div>

<!--
BEATS:
- Pause the loop at COAT. The "paint" being spun onto the wafer is photoresist — the light-sensitive film the whole exposure prints into. A $200M scanner is useless without it.
- Add it up: the wafer is Japanese. The resist is Japanese. The blank plates the masks were made from — Japanese. We're two steps into the loop and three of its consumables come from one country.
- The history beat: Japan lost the chip-making war — its share of chip production collapsed from ~50% to ~9% — but it kept the materials layer underneath everyone else's fabs.
- Run the chokepoint criterion out loud (single country cluster, removal halts leading-edge production, no substitute within five years) → the Board gets its third stamp.
- Forward-plant: this is just the top of the Japanese basement — the full tour comes at the end of this act (materials segment).
FACT AMMO:
- Japan holds ~90% of global photoresist (US Dept. of Commerce figure); ~95% of EUV photoresists at the leading edge. Players: JSR, Tokyo Ohka Kogyo (TOK), Shin-Etsu, Sumitomo, Fujifilm [research/materials §photoresist].
- JSR — world's largest resist maker (~27% share) — was taken private in 2024 by Japan's government-backed JIC for ~$6.4B: Tokyo treats photoresist as a sovereign asset [research/materials §photoresist].
- EUV mask blanks: Hoya + AGC (both Japanese) ≈ 93% of the market [VERIFY: Hoya/AGC split disputed between sources; combined ~93% is the sourced figure] — and the whole EUV blank market was only ~$194M in 2024: a sub-$200M market all of AI silicon stands on [research/materials §photomasks].
- Japanese companies hold roughly half of the entire semiconductor materials market (~48–56% depending on count) [VERIFY: exact % varies by source/year] ; chip-making share fell ~50% (late 1980s) → ~9% [research/materials §layer in numbers].
- Handle: materials are consumables — unlike a machine, bought again every single day a fab runs, and locked in by ~1–2-year requalification cycles [VERIFY: typical qual duration] [research/materials §risks].
LINE THAT LANDS:
- "Japan lost the chip war of the 1990s — and kept the ground everyone else fights on."
-->

---

# Transistors first, then 15+ layers of wiring

<div class="grid grid-cols-2 gap-10 mt-8">
<div class="border-2 border-gray-400 rounded-lg p-6">
<div class="text-sm opacity-60">FEOL — front end of line</div>
<div class="text-2xl font-bold mt-2">Transistors</div>
<div class="opacity-70 mt-2">the transistors themselves, built in the silicon</div>
</div>
<div class="border-2 border-gray-400 rounded-lg p-6">
<div class="text-sm opacity-60">BEOL — back end of line</div>
<div class="text-2xl font-bold mt-2">Interconnect</div>
<div class="opacity-70 mt-2">15+ metal layers, from local signal wiring to wide power rails</div>
</div>
</div>

<div class="grid grid-cols-3 gap-6 mt-8 text-center">
<div><div class="text-3xl font-bold">81</div><div class="text-sm opacity-60">mask layers at N5</div></div>
<div><div class="text-3xl font-bold">~115</div><div class="text-sm opacity-60">what it would take without EUV</div></div>
<div><div class="text-3xl font-bold">1–1.5 days</div><div class="text-sm opacity-60">per layer → ~3 months</div></div>
</div>

<!--
BEATS:
- The loop runs ~80 times, but it isn't building the same thing all the way up. The first stretch builds the transistors themselves, down in the silicon — FEOL, the buildings of the city.
- Everything after that is wiring — BEOL: fifteen-plus layers of copper interconnect stacked overhead. City streets built above the buildings, from nanometer alleys near the transistors up to fat power-rail highways on top.
- The point of the metaphor: nothing moves between any two transistors except through those streets. A modern chip carries tens of kilometers of wire.
- Now cash the "three months" from the opener: fabs average 1–1.5 days per mask layer. ~80 layers × ~a day and a half = your quarter of a year. Most of a wafer's life is spent standing in line.
- Quiet plant for the next segment: notice EUV's job in that middle number — one exposure doing what used to take several. Hold it.
FACT AMMO:
- FEOL = transistors in silicon; BEOL = 15+ layers of copper interconnect above [VERIFY: exact metal-layer count per node; N5-class ~15 commonly cited] [research/foundations §process flow].
- A modern chip has tens of km of wire [VERIFY: km-of-wire figure] [research/foundations §process flow].
- TSMC N5 ≈ 81 mask layers (N7 ≈ 87); without EUV, N5 would have needed ~115 — EUV's single exposure replaces multi-patterning [research/foundations §process flow].
- Cycle time: 1–1.5 days per mask layer — that's where ~3 months comes from; most of it is queueing [research/foundations §process flow].
- Simplification hedge: mask counts vary by node and design; the FEOL-then-BEOL split is cleaner in the telling than on the line (some steps interleave).
LINE THAT LANDS:
- "First you build the buildings. Then you spend two months building the streets in the sky above them."
-->

---

# A single particle can destroy a die

<div class="grid grid-cols-2 gap-10 mt-6">
<div>
<div class="text-sm opacity-60 mb-2">THE AIR AROUND THE WAFER</div>
<div class="text-5xl font-bold">≤10</div>
<div class="opacity-70">particles per m³ (ISO 1)</div>
<div class="text-3xl font-bold mt-4 opacity-60">35,000,000</div>
<div class="opacity-70">particles per m³ — city air</div>
<div class="text-sm opacity-50 mt-2">the wafer environment is ISO 1; operating rooms are typically ISO 6–7</div>
</div>
<div>
<div class="text-sm opacity-60 mb-2">THE MATH</div>
<div class="text-4xl font-bold">yield ≈ e<sup>−A·D₀</sup></div>
<div class="opacity-70 mt-2">yield falls with die area<br>at a fixed defect density</div>
<div class="text-2xl font-bold mt-4">~90%</div>
<div class="opacity-70">phone-sized die at D₀ = 0.1/cm²</div>
</div>
</div>

<div class="text-center text-lg mt-8 opacity-80">
Processing raises a blank wafer's value from roughly <b>$150</b> to about <b>$30,000</b>.
</div>

<!--
BEATS:
- Cash the seed from foundations. An hour ago, "one dust particle kills a $40k die" was a claim. Now they've watched the thousand steps — a particle landing at step 900, month three, doesn't kill a die, it kills three months of survived history.
- Why the air is like this: a killer particle only needs to be ~100 nm — a thousandth of a hair — to short two wires at these pitches. So the space around the wafer is kept to ten particles per cubic meter, against thirty-five million outside. The bunny suits aren't protecting the workers from the chips; they're protecting the wafer from the humans.
- The math beat, felt not derived: yield falls EXPONENTIALLY with die size. Double the die area and you more than double the death rate — which is why the giant AI dies of Act 0 are the most exposed objects in the building. (Hold the escape hatch — chiplets — for the packaging segment.)
- Yield learning is the whole business model: every wafer teaches the process, D₀ falls, and more of a $20B fab turns into sellable dies. TSMC's N2 defect density was already lower than N3/N5/N7 at the same stage — the moat, in numbers form.
- Forward-plant: somebody has to FIND a 100nm particle on a 300mm wafer. There's a company whose entire business is that. Two segments away.
FACT AMMO:
- Cleanroom classes: ISO 1 = ≤10 particles ≥0.1µm per m³; urban outdoor air ≈ 35,000,000 particles ≥0.5µm per m³ (≈ ISO 9). Fab bays run ~ISO 3–5 with ISO 1–2 mini-environments (FOUPs) around the wafers; hospital operating rooms are typically only ~ISO 6–7 [VERIFY: OR ISO class range + fab bay class ranges before quoting a specific multiplier] [research/foundations §yield & cleanrooms].
- Die yield ≈ e^(−A·D₀) (Poisson); D₀ ≈ 0.1 defects/cm² ≈ ~90% yield on a typical mobile-sized die = "mature node" [research/foundations §yield & cleanrooms].
- Killer particle: ~100 nm ≈ 1/1000th a hair's width at ~20nm pitches [research/foundations §yield & cleanrooms].
- TSMC disclosed N2 defect density lower than N3/N5/N7 at the same stage of development [research/foundations §yield & cleanrooms].
- N2 wafer ≈ $30,000 — analyst estimate, TSMC never publishes prices (hedge every use); ≈ $240/gram ≈ roughly double gold by weight [VERIFY: gold ~$110–160/g range in 2026 before using] [research/foundations §wafer prices].
- Simplification hedge: e^(−A·D₀) is the textbook Poisson model — real foundry yield models are proprietary and more nuanced; the robust part is the shape: exponential in area.
LINE THAT LANDS:
- "Three months ago it was melted sand. Now it's worth twice its weight in gold — and a speck a thousandth of a hair wide turns part of it back into sand."
-->

---

# Exposure requires the fab's most expensive tool

![expose step glowing](/diagrams/rendered/flow-expose.svg)

<div class="text-2xl mt-10 text-center leading-relaxed">
EUV scanners perform the exposure step and cost more than any other fab tool.
</div>

<!--
BEATS:
- 20-second recap, on the ribbon: they now own the loop (deposit → coat → expose → etch → implant → polish → measure), ~80 layers, buildings-then-streets, and yield — the number every company for the rest of this act is paid to defend.
- Then narrow to one step. EXPOSE is where the pattern actually gets printed — and remember the 81-vs-115 number: printing at these sizes broke optics hard enough that the workaround-vs-breakthrough fight consumed the industry for a decade.
- Hand off as a question: every other step on this strip has several suppliers. The machine that does THIS one — who makes it?
FACT AMMO:
- Callback, no new numbers: without EUV, N5 needs ~115 mask layers instead of 81 [research/foundations §process flow] — the expose step is why that machine gets its own segment.
LINE THAT LANDS:
- "The most expensive room in the building is next."
-->
