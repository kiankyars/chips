<!-- SEGMENT
id: synthesis
act: VI — The Board Is the World
tier: —            # finale synthesis — no new player, re-reads the whole board
angle: "Follow the money and it pools in exactly one place: wherever a single company would take a decade or more to replace. Margin isn't a reward for making chips — it's the market pricing the depth of a moat in real time. And every dollar of it you just traced sits inside one layer of a five-layer cake."   # PROPOSED — YOU OWN THIS LINE
runtime: ~5 min
status: draft
seeds: [energy-layer]              # teases Episode 2 (Energy) — the next binding constraint
pays_off: [owns-no-factories]      # the Money Bar completes: every toll Nvidia pays is now labeled
stamps: []                         # no new stamps — board-7 is a callback, complete
diagrams: [map-full, journey-6, board-7]
sources: research/nvidia.md, research/memory-hbm.md, research/packaging.md, research/tsmc.md, research/eda.md, research/asml.md, research/kla.md, research/equipment-dep-etch.md, research/materials.md
-->

---
layout: section
---

# Where the Value Pools

<div class="text-xl opacity-70 mt-2">Act VI — the map, read one last time. As a money map.</div>

<div class="grid grid-cols-2 gap-8 mt-8 items-center">
<div>

![industry map — fully lit](/diagrams/rendered/map-full.svg)

</div>
<div class="text-lg opacity-80 leading-relaxed">
Every light is on.<br>
Every company is named.<br>
The board has seven stamps.<br><br>
One question left: <b>where did the money actually go?</b>
</div>
</div>

![journey bar — complete](/diagrams/rendered/journey-6.svg)

<!--
BEATS:
- This is the victory lap and the thesis at once. The whole map is lit for the first and last time; the journey bar is full — SAND to DATA CENTER, done. Point at it: we followed one file from Santa Clara to an installed rack.
- Now re-read the same map as a MONEY map. The lights don't glow equally. Money doesn't pool evenly across the chain — it collects in a few specific places and runs thin everywhere else. Tonight's last job is to show you exactly where, and why.
- State the thesis (the angle, in your words): value pools wherever replacement is slowest. Margin is the market pricing a moat's depth in real time. That's the single sentence this whole episode was built to earn.
- This is the payoff every free competitor skips — Asianometry profiles the players, Chip War tells the history, nobody quantifies where the margin actually pools across ALL of them in one sitting. That's this segment.
FACT AMMO:
- The stakes, restated from the cold open: ~$600B/yr of AI capex flowing down this exact chain. [research/nvidia §financials — $1T cumulative Blackwell+Rubin orders through 2027]
- Recap handle: seven chokepoints, one board — and one company (TSMC) is on it twice. [curriculum §The Seven Chokepoints]
LINE THAT LANDS:
- "We spent ninety minutes lighting this map up. Now watch what happens when you shade it by dollars instead of by function."
-->

---

# The Money Bar, complete

<div class="text-sm opacity-60 mt-4">One GB300-class GPU · street price ~$50,000 (analyst estimate — Nvidia publishes no list price)</div>

<div class="mt-4">
  <div class="text-xs opacity-50 mb-1">THE PRICE — who keeps it</div>
  <div class="flex w-full h-14 rounded overflow-hidden text-sm font-bold text-center">
    <div class="bg-green-600 flex items-center justify-center" style="width:75%">Nvidia gross margin ~75% — design · CUDA · networking · scarcity</div>
    <div class="bg-gray-500 flex items-center justify-center" style="width:25%">~25% build cost</div>
  </div>
</div>

<div class="mt-6">
  <div class="text-xs opacity-50 mb-1">THAT ~25%, EXPLODED — the physical bill (illustrative split; only HBM's &gt;50% share is firmly sourced)</div>
  <div class="flex w-full h-14 rounded overflow-hidden text-xs font-bold text-center">
    <div class="bg-purple-600 flex items-center justify-center" style="width:52%">HBM memory &gt;50%<br>SK Hynix / Micron / Samsung</div>
    <div class="bg-blue-600 flex items-center justify-center" style="width:20%">TSMC logic dies</div>
    <div class="bg-blue-400 flex items-center justify-center text-black" style="width:13%">TSMC CoWoS</div>
    <div class="bg-amber-500 flex items-center justify-center text-black" style="width:8%">substrate</div>
    <div class="bg-gray-400 flex items-center justify-center text-black" style="width:7%">OSAT + test</div>
  </div>
</div>

<div class="text-xs opacity-60 mt-6 leading-relaxed">
<b>Amortized tolls</b> — baked into the prices above, never a line item: EDA design (~$0.5–0.7B per leading-edge chip, spread over the run) · ASML/equipment (the $350–400M scanner, priced into every TSMC wafer) · the <b>$150 blank wafer</b> the whole thing stands on.
</div>

<!--
BEATS:
- The device that ran the whole episode closes here. Every act ended by labeling one slice; now the bar is whole. Walk it top to bottom.
- Top bar — the split that shocks people: of a ~$50k GPU, Nvidia keeps roughly 75 cents on the dollar. Only ~25% is the physical thing. Cash the "owns no factories" seed from Nvidia: Nvidia builds none of it, yet keeps three-quarters of the price — because it sells the design, the CUDA lock-in, the networking, and the scarcity, not the hardware.
- Second bar — explode that 25% and the surprise inside the surprise: the single biggest PHYSICAL cost isn't the logic die Nvidia designed. It's the MEMORY — HBM is over half the build cost. Nvidia sells compute; it buys memory, and the memory costs more than the brain it feeds. That's the memory-wall seed, cashed in dollars.
- Then the rest: TSMC takes two slices (the logic dies AND the CoWoS packaging — the company on the board twice, paid twice), a sliver to the Japanese substrate, a sliver to assembly and test.
- The honesty beat — voice it: these are analyst estimates and an illustrative split; Nvidia publishes no price, and only HBM's >50% BOM share is firmly sourced. The bar is a map, not an invoice. And the amortized tolls — EDA, ASML, the blank wafer — don't show up as line items but are hiding inside every number above.
FACT AMMO:
- Street price ~$50k+/GPU; rack ~$3.7–4.0M (Loop Capital) to $6–6.5M configured — all third-party estimates, Nvidia publishes no list price. [research/nvidia §the-one-chip] <!-- VERIFY: wide estimate range; flag as estimate on screen -->
- Nvidia gross margin ~75% (74.9% GAAP Q1 FY27; FY26 full-year 71.1%, depressed by China charges). [research/nvidia §financials]
- HBM = >50% of a B300's build cost (H100 ~41% / ~$1,350 of ~$3,320; B200 ~45% / ~$2.9k of ~$6.4k; B300 >50%). Handle: the memory costs more than the GPU die it feeds. [research/memory-hbm §HBM economics]
- TSMC appears twice: logic wafer (custom 4NP, 5nm-class) ~$18k/wafer-class, and CoWoS packaging wafers now price NEAR a 7nm logic wafer. [research/tsmc §pricing; research/packaging §what-it-became]
- Substrate = Ajinomoto ABF film + Ibiden/Shinko laminate; OSAT overflow + Advantest/Teradyne test round out the bill. [research/packaging §Substrates, §OSATs, §Test]
- Amortized tolls: 2nm design cost ~$724M before a wafer is bought [research/eda §What EDA is]; High-NA scanner ~$350–400M [research/asml §High-NA]; blank 300mm wafer ~$100–200 [research/materials §silicon wafers].
- Simplification hedge: "HBM is >50% of the bill" is a build-cost share, not a share of the $50k street price — direction of the lie: on street price every physical slice shrinks and Nvidia's grows. Say it.
LINE THAT LANDS:
- "The most expensive physical part of an Nvidia GPU is the one part Nvidia doesn't design, doesn't make, and can't get enough of — the memory."
-->

---

# The margin ladder

<div class="grid grid-cols-2 gap-6 mt-4 text-sm">
<div class="flex flex-col gap-2">
<div class="flex justify-between bg-green-700 text-white rounded px-3 py-2"><span><b>EDA</b> — Cadence ~86% / Synopsys ~77%</span><span class="opacity-80">software, no factory</span></div>
<div class="flex justify-between bg-green-600 text-white rounded px-3 py-2"><span><b>Memory*</b> — Micron ~85% GM</span><span class="opacity-80">*supercycle peak</span></div>
<div class="flex justify-between bg-green-600 text-white rounded px-3 py-2"><span><b>Nvidia</b> — ~75%</span><span class="opacity-80">CUDA + scarcity</span></div>
<div class="flex justify-between bg-lime-600 text-white rounded px-3 py-2"><span><b>KLA</b> — ~62%</span><span class="opacity-80">process-control near-monopoly</span></div>
<div class="flex justify-between bg-lime-600 text-white rounded px-3 py-2"><span><b>TSMC</b> — ~60% (66% Q1'26)</span><span class="opacity-80">yield flywheel</span></div>
</div>
<div class="flex flex-col gap-2">
<div class="flex justify-between bg-yellow-600 text-white rounded px-3 py-2"><span><b>ASML</b> — ~53%</span><span class="opacity-80">EUV monopoly</span></div>
<div class="flex justify-between bg-yellow-600 text-white rounded px-3 py-2"><span><b>Equipment</b> — AMAT ~49% / Lam ~50%</span><span class="opacity-80">step monopolies</span></div>
<div class="flex justify-between bg-orange-600 text-white rounded px-3 py-2"><span><b>Test</b> — Advantest ~44% op</span><span class="opacity-80">ATE duopoly</span></div>
<div class="flex justify-between bg-red-700 text-white rounded px-3 py-2"><span><b>OSAT</b> — ASE ~18% / Amkor ~14%</span><span class="opacity-80">labor + capex, no moat</span></div>
</div>
</div>

<div class="text-xs opacity-60 mt-5">Gross margins unless marked; as of Q2 2026. The ladder's rungs are moats, not products — the same silicon, wildly different economics.</div>

<!--
BEATS:
- Here is the one chart no free competitor draws: every player you met, ranked by the fraction of each dollar they keep. Read it top to bottom.
- The top is SOFTWARE and SCARCITY — EDA keeps ~80–86 cents, Nvidia ~75. No factory, or a factory nobody can substitute. The bottom is COMMODITY MUSCLE — OSATs keep ~15 cents doing exactly what anyone with capex and labor can do. Same industry, same silicon flowing through, 6× the margin at the top.
- The asterisk is the most important thing on the slide — voice it carefully: memory is sitting at the TOP right now (Micron ~85%, SK Hynix ~72% operating) because we're in the biggest memory supercycle in history. But in 2023 these same companies posted record LOSSES. Memory's margin is rented, not owned — it's the one rung that swings from the top of this ladder to the bottom and back every few years. Everyone else's margin is structural. That's the tell.
- Land the lesson: the ladder isn't ranking how hard the work is. ASML builds the most complex object humans make and keeps ~53 cents; Cadence ships software and keeps ~86. The ladder ranks how REPLACEABLE you are. Which is the next slide.
FACT AMMO:
- EDA: Cadence GAAP GM ~84–87% (86.5% Q1'25), Synopsys ~77% FY25. [research/eda §Cadence, §Synopsys]
- Memory (supercycle peak): Micron GAAP GM 84.6% FQ3-26, guiding ~86%; SK Hynix operating margin 72% (1Q26), but FY2023 was record operating LOSSES. [research/memory-hbm §financials, §the-2025-26-supercycle]
- Nvidia ~75% GM. [research/nvidia §financials]
- KLA non-GAAP GM 62.2% (Q3 FY26) — highest of the big-5 WFE makers, ~10pts above ASML. [research/kla §financials]
- TSMC 59.9% FY25 → 66.2% Q1'26, while spending $40B+/yr on fabs. [research/tsmc §financials]
- ASML 52.8% (2025). [research/asml §FY2025 financials]
- AMAT non-GAAP GM 48.8% (FY25, highest in 25 yrs); Lam GM 49.8% (Mar-2026 qtr). [research/equipment-dep-etch §AMAT, §Lam]
- Advantest FY25 operating-income margin ~44% (¥499.1B op income on ¥1,128.6B sales). [research/packaging §Test]
- OSAT: ASE GM 17.7%, Amkor ~14% (2025). [research/packaging §OSATs]
- Simplification hedge: I'm mixing gross margin (most) with operating margin (memory/test) for comparability where gross isn't the cited figure — direction of the lie: operating margins understate the gross gap, so the spread top-to-bottom is if anything WIDER than shown.
LINE THAT LANDS:
- "This ladder doesn't measure how hard your job is. ASML makes the most complicated machine on Earth and sits in the middle. It measures how badly the world needs you and how few others can do it."
-->

---

# Years to replace — the league table

<div class="text-sm opacity-70 mt-2">If a state with unlimited money set out to replicate this player from scratch — how many years?</div>

<div class="grid grid-cols-2 gap-x-10 gap-y-2 mt-5 text-sm">
<div class="flex justify-between border-b border-gray-500 pb-1"><span><b>ASML + Zeiss</b> — EUV lithography</span><span class="font-bold">~15–20 yrs</span></div>
<div class="flex justify-between border-b border-gray-500 pb-1"><span><b>TSMC</b> — leading-edge logic + CoWoS</span><span class="font-bold">~10+ yrs</span></div>
<div class="flex justify-between border-b border-gray-500 pb-1"><span><b>Synopsys + Cadence</b> — EDA</span><span class="font-bold">~10 yrs</span></div>
<div class="flex justify-between border-b border-gray-500 pb-1"><span><b>Nvidia</b> — CUDA ecosystem</span><span class="font-bold">~10 yrs</span></div>
<div class="flex justify-between border-b border-gray-500 pb-1"><span><b>Japan materials</b> — resist + mask blanks</span><span class="font-bold">~5–10 yrs</span></div>
<div class="flex justify-between border-b border-gray-500 pb-1"><span><b>KLA</b> — process control</span><span class="font-bold">~7 yrs</span></div>
<div class="flex justify-between border-b border-gray-500 pb-1"><span><b>SK Hynix</b> — HBM</span><span class="font-bold">~5 yrs</span></div>
<div class="flex justify-between border-b border-gray-500 pb-1"><span><b>OSAT</b> — ASE / Amkor assembly</span><span class="font-bold">~2 yrs</span></div>
</div>

<div class="text-xs opacity-60 mt-5">The course's original metric. Every number is a judgment call — argue with them. That's the point.</div>

<!--
BEATS:
- This is the metric this course invented, and the one worth stealing. Lay the two slides side by side in your head: this table is the margin ladder, re-sorted — and it's almost the same order. That's not a coincidence, it IS the thesis. Margin is just years-to-replace, priced.
- Walk the top: ASML is the deepest moat in the world economy — to replace it you rebuild Zeiss optics, the Cymer light source, Trumpf's lasers, 100,000+ parts from ~5,000 suppliers across 17 countries, and decades of tacit know-how. Call it 15–20 years, and that's optimistic. TSMC, EDA, Nvidia cluster around a decade — for different reasons: 30 years of yield learning, 40 years of tool code, 20 years of CUDA.
- Walk the bottom, and note the contrast that makes the point: HBM is only ~5 years — not because it's easy, but because three companies already do it (SK Hynix, Micron, Samsung all qualified for Rubin). A monopoly's replacement clock is long; an oligopoly's is short. And OSAT is ~2 years — anyone with capex and labor, which is exactly why China starts there.
- Tie it to the money: the players at the top of THIS table are the players at the top of the margin ladder. The market has already run this calculation for you. Margin is the world telling you, in dollars, how long you'd be stuck without each of these companies.
FACT AMMO:
- ASML/Zeiss ~15–20: 100% of EUV, Zeiss the only EUV optics on Earth, >100,000 parts, ~85% outsourced across ~17 countries — recreating it ≈ recreating the whole ecosystem. [research/asml §the moat, §the machine] <!-- VERIFY: 15–20 is a proposed figure; pack calls it "the textbook chokepoint" but assigns no number -->
- TSMC ~10+: Intel-scale fabs + ASML allocation + PDK/IP ecosystem + ~30 yrs yield learning. [research/tsmc §the moat & market share]
- EDA ~10: 30–40 yrs of tool code + per-node foundry co-certification + workforce training lock-in; new entrants "aren't in the room." [research/eda §the moat]
- Nvidia ~10: a competitive chip is a ~3–5 yr problem (AMD exists), but CUDA is ~20 yrs of software + years of HBM/CoWoS pre-booked. [research/nvidia §the moat]
- Japan materials ~5–10: ~90% of photoresist (~95% at EUV), near-total EUV mask blanks — chemistry moats measured in decades. [research/materials §photoresist, §what-it-is] <!-- VERIFY: proposed range; chokepoint #5 on the board -->
- KLA ~7: ~7× nearest competitor, reticle inspection ~80%+, 40-yr BBP legacy — a soft chokepoint, not on the seven board. [research/kla §market position]
- SK Hynix / HBM ~5: MR-MUF yield edge + qual cycles of quarters (Samsung needed ~18 months) — but a 3-supplier oligopoly, not a monopoly, which SHORTENS the clock. [research/memory-hbm §HBM economics, §Samsung saga]
- OSAT ~2: labor + capex, low barriers; Chinese OSATs (JCET +19% YoY, state-backed) climbing fast. [research/packaging §OSATs]
- Hedge to voice: every number here is defensible, none is precise — the ranking is the product, not the digits.
LINE THAT LANDS:
- "Margin and years-to-replace are the same number wearing different clothes. The market already did this math. All we did was write it down."
-->

---

# The board is a judgment call

![chokepoint board — complete, 7 stamps](/diagrams/rendered/board-7.svg)

<div class="grid grid-cols-3 gap-4 mt-6 text-sm text-center">
<div class="border border-gray-400 rounded p-3">
<div class="font-bold">Ajinomoto</div>
<div class="opacity-70 text-xs mt-1">ABF substrate film · <b>&gt;95%</b> share · &gt;50% margins. The MSG company is a chip chokepoint.</div>
</div>
<div class="border border-gray-400 rounded p-3">
<div class="font-bold">Shin-Etsu + SUMCO</div>
<div class="opacity-70 text-xs mt-1"><b>&gt;50%</b> of world silicon wafers · eleven-nines purity. Two firms under nearly every chip.</div>
</div>
<div class="border border-gray-400 rounded p-3">
<div class="font-bold">Advantest + Teradyne</div>
<div class="opacity-70 text-xs mt-1"><b>~80%+</b> of chip test. You can't sell what you can't prove works.</div>
</div>
</div>

<!--
BEATS:
- Show the completed board one last time — seven stamps, earned live across the episode, TSMC on it twice. Then do the honest thing and admit it's a curated list, not a law of physics.
- The criterion was strict: one company (or one-country cluster) whose removal halts leading-edge AI-chip production within months, with no substitute inside five years. Seven cleared that bar cleanly. Others were on the bubble — and here they are, the honorable mentions.
- Walk the three: Ajinomoto — the company founded to sell MSG seasoning makes the insulating film in >95% of advanced packages, at >50% margins. Shin-Etsu and SUMCO — two Japanese firms supply over half the blank silicon on Earth at eleven-nines purity. Advantest and Teradyne — a two-company lock on the machines that prove a chip works, and a Blackwell package sits on the tester 20+ minutes.
- The takeaway that matters more than the count: the deeper you dig, the more the chokepoints turn out to be Japanese materials houses and single-product specialists nobody's heard of. Seven is a headline. The real number of places this system could break is larger — and that fragility is the story the geopolitics act just told.
FACT AMMO:
- Seven-chokepoint criterion + "TSMC appears twice" + alternates flagged as honorable mentions. [curriculum §The Seven Chokepoints]
- Ajinomoto ABF: >95% global share, reported >50% margins; the film grew out of its amino-acid/MSG chemistry. [research/packaging §Substrates]
- Shin-Etsu + SUMCO: together >50% of world silicon-wafer volume; electronic-grade polysilicon 99.999999999% ("eleven nines") pure ≈ one foreign atom per 100 billion. [research/materials §silicon wafers]
- Advantest + Teradyne: ~80%+ two-company ATE market; a phone SoC tests in ~30–60s, a Blackwell-class package 20+ minutes. [research/packaging §Test]
- Simplification hedge: "seven" is a defensible editorial call, not an audit — say so on screen; the count was locked before recording precisely because it's contestable.
LINE THAT LANDS:
- "The board says seven. The truth is the more carefully you look, the more the whole modern world turns out to balance on a few Japanese chemical companies you'll never see in a headline."
-->

---

# What AI changed — and the layer above

<div class="grid grid-cols-2 gap-8 mt-6">
<div>
<div class="text-sm font-bold opacity-70 mb-2">WHAT THE AI BOOM REWROTE</div>
<div class="text-sm leading-relaxed">

- **Memory** stopped being a commodity — HBM is now sold-out, qualified, negotiated like logic; DRAM revenue **+144%** forecast for 2026
- **Packaging** — the offshored "worthless" back-end — became the frontier that gated all GPU supply
- **Every margin rose**: TSMC 60→66%, KLA & Advantest & ASML at records
- But moats decide who **keeps** it when demand normalizes

</div>
</div>
<div class="border-l-2 border-amber-500 pl-6">
<div class="text-sm font-bold opacity-70 mb-2">THIS WAS ONE LAYER</div>
<div class="text-base leading-relaxed">
Applications<br>
Data Centers<br>
<b class="text-amber-500">Energy</b> &nbsp;<span class="opacity-60 text-sm">← next</span><br>
<b>Chips</b> &nbsp;<span class="opacity-60 text-sm">← you are here</span><br>
Models
</div>
</div>
</div>

<div class="text-lg text-center mt-8 opacity-90">
Every chip we followed drinks <b>1,400 watts</b>. Every rack, <b>~135 kW</b> — a hundred homes.<br>
The next bottleneck isn't making them. It's <b>powering them.</b>
</div>

<!--
BEATS:
- Two-part landing. First, 20 seconds on what the AI boom actually rewrote, because it's the frame for everything: memory got yanked out of the commodity bin and now sells like logic; packaging went from the industry's low-status outsourcing to THE binding constraint; and demand was so violent it lifted every margin on the ladder at once. But — and this is the whole point of the last three slides — a rising tide lifts all margins; only moats decide who keeps theirs when the tide goes out.
- Then pull all the way back to where we started. This entire episode — every chokepoint, every stamp, the whole lit map — was ONE layer of a five-layer cake: Applications, Data Centers, Energy, Chips, Models. We just did Chips.
- Point at the layer directly above: Energy. Every object we followed is a space heater — 1,400 watts a GPU, ~135 kilowatts a rack, the draw of a hundred homes, multiplied by the millions. The industry's next chokepoint isn't lithography or HBM. It's electrons. That's Episode 2.
- SEED — energy-layer (Episode 2 teaser): plant it as a question, don't answer it. We solved how to BUILD the machine. Nobody's solved how to POWER a world of them.
FACT AMMO:
- Memory de-commoditized: HBM presold 12–24 months out, qualified per-customer; DRAM industry forecast $165.7B (2025) → $404.3B (2026, +144%). [research/memory-hbm §the-2025-26-supercycle, §HBM economics]
- Packaging inversion: the step offshored in 1963 as "worthless" now decides who gets AI compute; CoWoS was the binding constraint 2023–25. [research/packaging §what-it-was-vs-what-it-is, §CoWoS]
- Margins rose chain-wide: TSMC 59.9→66.2%, KLA record 62.2%, Advantest record, ASML €28B+ backlog. [research/tsmc §financials; research/kla §financials; research/packaging §Test; research/asml §FY2025]
- Falling share of an exploding pie: Nvidia ~90% AI-accelerator share drifting to 75–85% by end-2026 as TPU/Trainium/Broadcom ramp. [research/nvidia §the moat]
- Power: 1,400W/GPU, ~132–140kW/rack ≈ average draw of ~110 US homes; ~$600B/yr AI capex behind it. [research/nvidia §the-one-chip]
- The five layers (Jensen Huang): Applications · Data Centers · Energy · Chips · Models — this episode is Chips. [README]
LINE THAT LANDS:
- "We just spent two hours on the hardest layer to build. The next episode is about the layer that turns out to be the hardest to feed."
-->

---
layout: center
---

# The whole board, in one sentence

<div class="text-2xl leading-relaxed mt-8 max-w-4xl">
The money pooled exactly where <b>replacement is slowest</b> —<br>
in a Dutch optics partnership, an island foundry,<br>
two design-software companies, and twenty years of CUDA.<br><br>
<span class="opacity-70 text-xl">Not where the work was hardest. Where the world had no one else to call.</span>
</div>

<div class="text-lg opacity-60 mt-12">
And all of it — the whole impossible chain — is one layer of the cake.
</div>

<!--
BEATS:
- The final beat of the entire course. Slow down. Everything before this earned these ten seconds.
- Deliver the thesis as a closed loop: we asked where the value pools, and the answer turned out to be identical to the years-to-replace table. Money collects at the chokepoints — the Dutch optics, the island, the two EDA houses, the CUDA moat — not because that work is the hardest, but because when those companies stop, the world has no one else to call.
- Then the last move: zoom out one final time to the five-layer cake. This entire episode — the map, the seven stamps, the money bar, the most concentrated industrial structure on Earth — was a single layer. Above it sits energy; around it, data centers and models. Leave them there. That's the series.
- Optional final callback to the cold open promise: we said we'd name every company, light every region, complete the board, and finish the money bar. Done. Roll credits.
FACT AMMO:
- Closing recap anchors (no new numbers): margin ladder ≈ years-to-replace table ≈ the seven-chokepoint board — three views of one fact. [research/* — synthesized across all packs]
- Callback to cold-open four promises: map fully lit, every company named, board at 7, Money Bar totaled. [curriculum §cold-open]
LINE THAT LANDS:
- "Value doesn't pool where the work is hardest. It pools where you have no one else to call. Remember that, and you understand not just this industry — you understand power."
- (alt, softer sign-off): "That's the chips layer. Next time, we go up a floor — to the one thing all of this runs on, and can't get enough of: power."
-->
