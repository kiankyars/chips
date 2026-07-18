---
layout: section
---

<!-- SEGMENT
id: equipment-dep-etch
act: IV — The Fab Tour
tier: E            # ensemble sweep — two ⭐ players + two cards, one continuous story
angle: "ASML gets the fame for printing the pattern — but a chip is actually BUILT by adding material and carving it away, a thousand times over; and when shrinking sideways got too hard, the whole industry started building UPWARD, quietly moving the money from the printer to the sculptors."   # YOU OWN THIS LINE — rewrite it in your voice
runtime: ~5 min
status: draft
seeds: []
pays_off: []
stamps: []          # NO new stamp — board stays at board-5 (from asml); these players are dominant but not on the locked seven
diagrams: [map-equipment, flow-deposit, flow-etch, flow-coat]
sources: research/equipment-dep-etch.md
-->


# Deposition and etch

<div class="text-xl opacity-70 mt-2">Part 4 · Fabrication · deposition and etch</div>

<div class="grid grid-cols-2 gap-8 mt-6 items-center">
<div>

![industry map — equipment region lit](/diagrams/rendered/map-equipment.svg)

</div>
<div class="text-2xl leading-relaxed">
Lithography defines a pattern.<br>
<b>Deposition</b> adds material.<br>
<span class="opacity-70"><b>Etching</b> removes selected material.</span>
</div>
</div>

<!--
BEATS:
- Catch the handoff from asml: ASML printed the pattern — now something has to build it up and something has to carve it away. Litho only draws where things go; it doesn't add or remove a single atom.
- The map doesn't move: we're still in the equipment region, just going deeper into it. Same layer under the foundries, two steps further along the loop from life-of-a-wafer.
- Frame the whole segment as one idea before naming anyone: a chip is not machined out of a block — it is built up and carved down, layer by layer, on the order of a thousand times. Litho is one step in that loop; deposition and etch are the two that actually move material.
FACT AMMO:
- A chip is built up layer by layer like a skyscraper — deposit a film → pattern it with litho → etch away what the pattern exposes → repeat [research/equipment-dep-etch §Teachable: what deposition & etch DO].
- On the order of 1,000+ process steps, ~3 months of fab time, looping dep → litho → etch hundreds of times [research/equipment-dep-etch §Teachable: what deposition & etch DO]. [VERIFY: step counts cited anywhere ~600 to 2,000+ by node; "well over a thousand at the leading edge" is the safe phrasing]
- Deposition = putting material ON the wafer (CVD, PVD/sputtering, epi, electroplating, ALD). Etch = removing it with atomic precision — plasma that only cuts where litho opened the mask [research/equipment-dep-etch §Teachable: what deposition & etch DO].
LINE THAT LANDS:
- "Lithography is the pencil. But nobody builds a house with a pencil — you need something that pours concrete and something that cuts."
-->

---

# 3D NAND scales by adding layers

<div class="grid grid-cols-2 gap-10 mt-2">
<div>
<div class="text-sm opacity-60 mb-2">ONE LAYER</div>

- **DEPOSIT** — lay down a film, sometimes atoms thick
- *(litho prints the pattern)*
- **ETCH** — plasma removes material the pattern did not protect

<div class="mt-3 opacity-70">Repeated across roughly 1,000 process steps.</div>
</div>
<div>
<div class="text-sm opacity-60 mb-2">3D NAND LAYER COUNT</div>
<div class="text-5xl font-bold">24 → 200+ → ~1,000</div>
<div class="opacity-70 mt-1">layers · 2013 → today → 2030 roadmap</div>
<div class="mt-4 text-lg">More layers increase deposition and etch work.<br><span class="opacity-60">Current NAND production does not use EUV.</span></div>
</div>
</div>

<div class="text-center text-xl mt-8 opacity-80">
As 3D structures grow taller, deposition and etch account for more process steps and equipment spending.
</div>

<!--
BEATS:
- Teach the two-beat dance: DEPOSIT adds a film, litho prints where it should stay, ETCH removes the rest. That trio is one layer. Run it ~80 times and a chip exists — but for the tall structures, dep and etch run far more than litho does.
- The big idea of the whole segment: when you can't make features smaller sideways, you build UPWARD. Memory did it most literally — 3D NAND stopped shrinking the pattern and started stacking layers: 24 in 2013, 200-plus today, roadmap pointing at ~1,000 by 2030.
- The payoff of that shift: stacking makes litho matter LESS and dep/etch matter MORE. You deposit hundreds of alternating films, then etch a hole straight down through the entire stack in one shot. A 3D NAND fab doesn't own a single EUV machine.
- Same move in logic, quieter: FinFET → GAA transistors and backside power are won with deposition, etch and materials tricks — not just finer printing. So the center of gravity in the fab has been sliding away from ASML toward the companies that add and subtract atoms.
FACT AMMO:
- When 2D shrink stalled the industry went vertical: FinFET → GAA in logic, planar → 3D NAND in memory. "If you can't shrink sideways, build upward." [research/equipment-dep-etch §Teachable: what deposition & etch DO].
- 3D NAND: 24 layers (2013) → 200+ state-of-the-art today → roadmap ~1,000 by 2030 [research/equipment-dep-etch §Teachable: what deposition & etch DO].
- Stacking = deposit hundreds of alternating films, then etch the memory-channel holes through the whole stack in one pass; 3D NAND fabs need no EUV [research/equipment-dep-etch §Teachable: what deposition & etch DO]. [VERIFY: "no EUV in NAND" true today — check no NAND maker has announced EUV insertion]
- GAA + backside power delivery are won by dep/etch/materials innovation, not finer litho [research/equipment-dep-etch §Teachable: what deposition & etch DO].
- Directionally: deposition + etch together ≈ 40%+ of wafer-fab equipment — bigger than litho [research/equipment-dep-etch §The WFE market]. [VERIFY: no single authoritative public WFE split; TechInsights/Yole paywalled — safe as "together bigger than litho"]
LINE THAT LANDS:
- "Moore's Law didn't die. It rotated ninety degrees — and stopped being ASML's story."
-->

---

# Applied Materials spans most process steps

![deposit step glowing](/diagrams/rendered/flow-deposit.svg)

<div class="grid grid-cols-2 gap-10 mt-1">
<div class="text-base leading-relaxed">

Applied sells deposition, etch, implant, polish, thermal, and e-beam metrology systems.

<div class="opacity-70 text-sm mt-1">Its portfolio covers nearly every step except lithography and track; it ranks #2 in wafer-fab equipment.</div>

</div>
<div>
<div class="text-sm opacity-60 mb-1">INCREMENTAL TOOL SPEND AT 100K WAFER STARTS/MONTH</div>
<div class="text-base">Applied's estimate per architecture change:</div>
<div class="mt-2 text-2xl font-bold">GAA: +~$1B</div>
<div class="text-2xl font-bold">backside power: +~$1B</div>
</div>
</div>

<div class="border-2 border-gray-400 rounded-lg p-2 mt-2">
  <div class="grid grid-cols-4 gap-4 text-center">
    <div><div class="text-2xl font-bold">$28.4B</div><div class="text-sm opacity-60">revenue FY25</div></div>
    <div><div class="text-2xl font-bold">~49%</div><div class="text-sm opacity-60">gross margin</div></div>
    <div><div class="text-2xl font-bold">#2</div><div class="text-sm opacity-60">in WFE (after ASML)</div></div>
    <div><div class="text-2xl font-bold">~10 yrs</div><div class="text-sm opacity-60">to replace</div></div>
  </div>
</div>

<!--
BEATS:
- Applied enters on DEPOSIT — but the real point is breadth. It's the one company that does almost everything: deposition, etch, ion implant, CMP, thermal, e-beam inspection. Everything except printing (ASML) and coating (TEL).
- Why breadth is the moat: as structures went 3D, chipmakers stopped buying single tools and started buying whole SEQUENCES — deposit, etch and treat under one vacuum, no air in between. Applied argues it sells the recipe, not just the machine. (Say "Applied argues" — it's their frame.)
- The toll-booth number is the one to land: every time the transistor changes SHAPE, Applied collects more. The FinFET→GAA flip is worth about an extra billion dollars per 100,000 wafer-starts a month; backside power adds the next billion on top. Applied even claims backside power buys as much density as two generations of litho scaling — i.e. this is Applied doing ASML's job.
- Scoreboard beat: sixth straight record year, gross margin the highest in a quarter-century — a monopoly-adjacent margin without an actual monopoly, because breadth + installed base is its own moat. Years-to-replace is my proposal for the synthesis league table, not a sourced figure.
FACT AMMO:
- Broadest WFE portfolio: deposition (CVD/PVD/epi/ALD), etch, implant, CMP, thermal, e-beam metrology — nearly every step except litho and track; #2 worldwide after ASML [research/equipment-dep-etch §Applied Materials].
- FY2025: record revenue $28.37B (+4%, sixth consecutive record year); non-GAAP gross margin 48.8% — highest in 25 years; non-GAAP EPS $9.42 [research/equipment-dep-etch §Applied Materials]. Segments: Semi Systems $20.8B, Services $6.4B, Display $1.1B.
- Q2 FY2026: record revenue $7.91B (+11% YoY) — AI demand pulled it out of the FY25 flat patch [research/equipment-dep-etch §Applied Materials].
- Architecture toll-booth: 7nm→3nm tripled interconnect wiring steps (wiring opportunity ~$6B per 100K WSPM); GAA ≈ +$1B incremental per 100K WSPM vs FinFET; backside power ≈ another +$1B (→ ~$7B); Applied pegs backside power's density benefit at up to two generations of litho scaling [research/equipment-dep-etch §Applied Materials]. [VERIFY: "integrated materials solutions / co-optimize sequences" is Applied's own marketing frame — attribute as "Applied argues"]
- China = 30% of FY2025 revenue ($8.5B); warned of a ~$600M FY2026 revenue hit from the Sept-2025 export-curb expansion [research/equipment-dep-etch §Applied Materials]. [VERIFY: some coverage says up to $710M]
- Years-to-replace ~10 yrs is MY proposed number (breadth + integration + installed base), for the synthesis league table — not from the pack.
- Handle: every time the transistor changes shape, Applied collects a toll — GAA is one extra billion dollars per 100,000 wafers a month, before backside power adds the next.
LINE THAT LANDS:
- "ASML sells you one machine. Applied sells you the other forty — and a new bill every time the transistor changes shape."
-->

---

# Lam Research leads dry etch

![etch step glowing](/diagrams/rendered/flow-etch.svg)

<div class="grid grid-cols-2 gap-10 mt-1 items-center">
<div>
<div class="text-sm opacity-60 mb-1">ONE 3D-NAND MEMORY HOLE</div>
<div class="text-xl leading-snug">
<b>1/1000th</b> the width of a human hair.<br>
<b>50×</b> deeper than it is wide.<br>
<b>Billions</b> of channels per wafer, each with the same target profile.
</div>
<div class="opacity-60 text-sm mt-2">Etched through 100+ stacked layers in one pass.</div>
</div>
<div>
<div class="text-sm opacity-60 mb-1">DRY-ETCH POSITION</div>
<div class="text-base leading-snug">
Dry-etch leader for 20+ years; led seven NAND channel-etch generations; <b>&gt;100M</b> NAND wafers channel-etched.
</div>
</div>
</div>

<div class="border-2 border-gray-400 rounded-lg p-2 mt-2">
  <div class="grid grid-cols-4 gap-4 text-center">
    <div><div class="text-2xl font-bold">$18.4B</div><div class="text-sm opacity-60">revenue FY25</div></div>
    <div><div class="text-2xl font-bold">~50%</div><div class="text-sm opacity-60">gross margin</div></div>
    <div><div class="text-2xl font-bold">~½</div><div class="text-sm opacity-60">of dry etch (est.)</div></div>
    <div><div class="text-2xl font-bold">~10 yrs</div><div class="text-sm opacity-60">to replace</div></div>
  </div>
</div>

<!--
BEATS:
- Lam enters on ETCH — the remove step — and its franchise is the single hardest cut in manufacturing: the 3D NAND memory hole. Sell the analogy hard because it's the whole slide: a hole one-thousandth the width of a hair, fifty times deeper than it is wide, drilled dead-straight through a hundred-plus stacked films in a single pass — and you make billions of them per wafer, all identical. Get one wrong and the bit is dead.
- That is the physical face of "build upward": the taller the NAND stack goes, the more impossible the etch, the more indispensable Lam. It has etched that channel into over a hundred million wafers.
- The neat trick worth naming: cryogenic etch — chill the wafer to sixty below and the plasma cuts faster and straighter. Lam put it into volume in 2019; the 2024 version etches 2.5× faster. This is how they keep the hole straight as the stack keeps growing.
- Scoreboard beat, plus the catch: Lam is the most memory-levered of the big five — it got crushed in the 2023 NAND downturn and is snapping back hard on the 2025–26 AI-memory upgrade cycle. High margin, but a more cyclical ride than Applied. Years-to-replace ~10 is again my proposal, not sourced.
FACT AMMO:
- Etch king: >20 years dry-plasma-etch leader; >10 years and 7 device generations leading NAND high-aspect-ratio etch [research/equipment-dep-etch §Lam Research].
- The hole: ~1/1000th the width of a human hair, ~50× deeper than wide, billions per wafer all identical, etched through 100+ layers in one pass [research/equipment-dep-etch §Lam Research]. [VERIFY: "billions per wafer" scale — Lam blog phrasing varies (holes per die vs per wafer); pin the count before camera]
- Footprint: >100 million NAND wafers channel-etched by Lam; >7,500 HAR etch chambers in production [research/equipment-dep-etch §Lam Research].
- Cryo etch: first in volume 2019; Lam Cryo 3.0 (2024) etches 2.5× faster at angstrom precision; >5M wafers on ~1,000 cryo chambers [research/equipment-dep-etch §Lam Research].
- FY2025 revenue $18.44B (+~24% YoY); Mar-2026 quarter $5.84B (+24%, third consecutive record), gross margin 49.8%, June-2026 guide $6.6B, FY26 tracking ~$23B [research/equipment-dep-etch §Lam Research].
- Roughly ~half of dry etch (TEL ~25%, AMAT the rest) [research/equipment-dep-etch §Lam Research]. [VERIFY: public share numbers conflict 35–50%; soften to "the clear #1 in etch" if no checkable source]
- Most memory-levered of the big five — crushed in the 2023 NAND downturn, snapping back on the 2025–26 upgrade cycle [research/equipment-dep-etch §Lam Research]. [VERIFY: exact memory % of systems revenue latest quarter]
- Years-to-replace ~10 yrs is MY proposed number (HAR/cryo etch singularity + installed base), for synthesis — not from the pack.
- Handle: it's like drilling a perfectly straight hole a thousand times thinner than a hair and fifty times deeper than it is wide — several billion of them at once, on one wafer.
LINE THAT LANDS:
- "The place your phone stores its photos is a few billion holes so deep and so thin that only one company on Earth can drill them without them wandering."
-->

---

# Tokyo Electron and ASM dominate adjacent steps

<div class="grid grid-cols-2 gap-8 mt-4">

<div class="border-2 border-gray-400 rounded-lg p-5">
<div class="flex items-center gap-3">

![coat step](/diagrams/rendered/flow-coat.svg)

<div class="text-2xl font-bold">Tokyo Electron</div>
</div>
<div class="text-lg mt-3 leading-relaxed">
The <b>track</b> — coats resist before litho, develops it after. <b>&gt;90%</b> global share.
</div>
<div class="opacity-70 text-base mt-2">TEL tracks are paired with most EUV scanners; SCREEN holds a small remaining share.</div>
</div>

<div class="border-2 border-gray-400 rounded-lg p-5">
<div class="text-2xl font-bold">ASM International</div>
<div class="text-lg mt-3 leading-relaxed">
<b>ALD</b> — atomic layer deposition. Film built <b>one atomic layer per cycle</b>, coating every hidden surface.
</div>
<div class="opacity-70 text-base mt-2">Gate-all-around structures contain recessed surfaces that require conformal coating. ALD serves those surfaces, and GAA demand helped ASM report record 2025 revenue.</div>
</div>

</div>

<div class="text-sm opacity-60 mt-5 text-center">
The five largest equipment suppliers account for about <b>70%</b> of the ~$116B market, with each company leading specific process categories.
</div>

<!--
BEATS:
- Two cards, quick, because you've now met the shape. TEL first: the track — the machine that coats the wafer with resist before exposure and develops it after. TEL owns more than 90% of it, and here's the kicker — the track is literally bolted to the ASML scanner, wafers shuttling inline between the two. Every EUV cell on Earth is an ASML machine plus, almost always, a TEL track. ASML gets the fame; TEL quietly sells the other half of the room, with a grip on its step that's actually tighter than ASML's on litho.
- Honesty beat (do this one out loud): by our own chokepoint rule, TEL's 90%-plus track looks like a single point of failure — and it's NOT on our board of seven. That's deliberate. The board is a judgment call, and TEL is the best argument that seven is a floor, not a ceiling. No new stamp tonight.
- ASM second: it does one thing — ALD, depositing a film one atomic layer at a time, self-limiting chemistry that coats every hidden surface of a 3D structure. Niche, until GAA. Because a gate-all-around transistor wraps the gate ALL the way around the channel, into cavities litho and line-of-sight deposition simply can't reach — only ALD can. The moment 2nm GAA went into volume, this quiet ~€3B company posted a record year at a record margin.
- Close the frame: you've now met four of the big five equipment makers (KLA is next). Together they're ~70% of a ~$116B market — but the real structure is that each one owns a DIFFERENT step. It's not five firms fighting over one market. It's five monopolies standing in a line.
FACT AMMO:
- TEL track (coater/developer) >90% global share (TEL's figure; third parties ~87–90%); bolted inline to the ASML scanner — every EUV litho cell = ASML scanner + (almost always) TEL track; tighter grip than ASML's ~83% of litho [research/equipment-dep-etch §Tokyo Electron]. [VERIFY: SCREEN holds small track share — "almost always" is right, "always" is not]
- TEL FY2026 record net sales ¥2,443.5B (~$16–17B); Japan's #1 tool maker, #3–4 globally; also #2 in etch (~25%) [research/equipment-dep-etch §Tokyo Electron]. [VERIFY: yen/dollar conversion at recording; TEL etch ~25% is analyst consensus, not TEL-disclosed]
- ASM = ALD leader: films one atomic layer per cycle, self-limiting, angstrom control on every surface; >55% of the ALD segments where it competes; ALD invented by Finland's Tuomo Suntola, 1974 [research/equipment-dep-etch §ASM International]. [VERIFY: Suntola 1974 date + ASM commercialization path]
- ASM 2025: record revenue €3.24B (+12% cc); record gross margin 51.8% — driven above all by customers building 2nm GAA capacity; Mo ALD + area-selective deposition already in volume at 2nm [research/equipment-dep-etch §ASM International].
- Why GAA needs ALD: the gate wraps entirely around stacked nanosheets — the gate stack must coat nm-scale cavities litho and line-of-sight deposition can't reach; only self-limiting layer-by-layer ALD conformally coats every hidden surface [research/equipment-dep-etch §ASM International].
- The oligopoly: big five (ASML, Applied, Lam, TEL, KLA) ≈ 70% of the ~$115.7B WFE market in 2024/25 — each dominates a different step [research/equipment-dep-etch §The WFE market].
- Simplification hedge: "each owns a different step" is the clean version — Applied, Lam and TEL genuinely overlap in etch and deposition; the monopolies are per-niche (Lam=HAR etch, TEL=track, ASM=ALD), not per-company across all of dep/etch.
LINE THAT LANDS:
- "TEL owns more of its step than ASML owns of litho — and you have never heard its name. That's not an accident; that's the whole business model of this layer."
-->

---

# 3D scaling increased deposition and etch demand

<div class="grid grid-cols-2 gap-10 mt-6 items-center">
<div class="text-2xl leading-relaxed">
Fabs build chips by repeatedly depositing material<br>
and etching selected regions across<br>
<b>roughly 1,000 process steps</b>.
</div>
<div>
<div class="text-sm opacity-60 mb-2">INSTALLED-BASE REVENUE</div>
<div class="text-lg leading-relaxed">
Lam has roughly <b>100,000</b> process chambers in the field. Vendors earn service revenue over tools' 20–25-year operating lives.
</div>
<div class="opacity-60 text-base mt-2">Lam: ~36% of revenue recurring · Applied's services arm now entirely recurring.</div>
</div>
</div>

<div class="text-2xl mt-8 text-center leading-relaxed">
KLA's inspection tools check whether each process step met its target.
</div>

<!--
BEATS:
- 15-second recap on the idea, not the roster: a chip is built up and carved down — deposit, etch, deposit, etch — about a thousand times. Litho draws; dep and etch build. And when the industry ran out of room sideways, going vertical moved the money toward exactly these companies.
- The economics kicker before we leave: these tools never really leave the fab. There are around a hundred thousand chambers in the field, running for decades — every one an annuity of spares, service and upgrades. The business is sell the machine once, service it for twenty-five years. That's why the margins survive the cycles.
- No new stamp — the board is unchanged. Say it plainly if useful: these four are dominant, but the chokepoint of this act was ASML, one segment back.
- Hand off to KLA as a question: you have now deposited and etched a thousand times, on a wafer the air itself is trying to kill. Nobody has checked a single layer. How do you know — after three months and a thousand steps — that any of it actually worked? Somebody's whole business is answering that.
FACT AMMO:
- Razor-and-blades installed base: tools run 20+ years; ~100,000 process chambers in Lam's field alone [research/equipment-dep-etch §Shared economics]. [VERIFY: exact AMAT/Lam "majority of tools ever shipped still running" quote before camera]
- Recurring revenue: Lam customer-support ~36% of revenue (Mar-2026 qtr); Applied's ~$6.4B services arm restructured to be entirely recurring from Q1 FY2026 [research/equipment-dep-etch §Shared economics].
- No new chokepoint stamp — board stays at 5 of 7 from asml; these players are dominant per-niche but not on the locked seven [research/equipment-dep-etch §The WFE market].
- Callback, no new numbers: ~1,000 steps, ~3 months, a wafer the cleanroom exists to protect (from life-of-a-wafer) — and not one layer has been inspected yet.
LINE THAT LANDS:
- "Three months, a thousand steps, and nobody has looked. The next machine is the one that finally opens its eyes."
-->
