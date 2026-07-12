<!-- SEGMENT
id: memory-hbm
act: V — Memory & The Assembly
tier: D            # duel — a three-way contest told as one story (SK hynix · Samsung · Micron)
angle: "Logic sells genius; memory sells nerve. For fifty years memory was the industry's commodity purgatory — until HBM welded it to the GPU and turned the boldest capex bet in silicon into the single biggest line on an AI chip's bill."   # YOU OWN THIS LINE — rewrite it in your voice
runtime: ~9 min
status: draft
seeds: []                          # nothing new planted for a later segment; the closer hands off to `packaging`
pays_off: [memory-wall]            # the bandwidth problem seeded in `nvidia` gets its bill here
stamps: [hbm]                      # chokepoint #6 — SK hynix / HBM qualified-supply bottleneck
diagrams: [map-memory, journey-4, board-6]
sources: research/memory-hbm.md
-->

---
layout: section
---

# The Memory War

<div class="text-xl opacity-70 mt-2">Act V — Memory & The Assembly · Icheon, Suwon, Boise</div>

<div class="grid grid-cols-2 gap-8 mt-8 items-center">
<div>

![industry map — MEMORY region lit](/diagrams/rendered/map-memory.svg)

</div>
<div class="text-lg opacity-80 leading-relaxed">
The chip has a design, an island, and a thousand steps behind it.<br>
Now it needs something to remember with.
</div>
</div>

![journey bar — MEMORY active](/diagrams/rendered/journey-4.svg)

<!--
BEATS:
- Move the journey bar to step 4 of 6 — MEMORY. Light the memory region on the map. We leave the fab and cross into a completely different country, and a completely different kind of business.
- Callback to `foundations` and `nvidia`: we split the chip into logic and memory back at the start. We've spent an hour on logic — TSMC, ASML, the whole leading edge. This is the other half. And it plays by opposite rules.
- Tee up the angle in your own words: logic is a genius business, memory is a nerve business. Same silicon, opposite economics.
LINE THAT LANDS:
- "Everything you've seen so far rewards being the smartest. This next part rewards being the bravest with a checkbook."
-->

---

# Two kinds of memory

<div class="grid grid-cols-2 gap-8 mt-8">
<div class="border-2 border-blue-400 rounded-lg p-6">
<div class="text-3xl font-bold">DRAM</div>
<div class="text-sm opacity-60 mb-3">the desk you work at</div>

- 1 transistor + 1 capacitor per bit
- leaks — every bit refreshed **~every 64 ms**
- nanosecond access · **vanishes at power-off**

</div>
<div class="border-2 border-amber-400 rounded-lg p-6">
<div class="text-3xl font-bold">NAND</div>
<div class="text-sm opacity-60 mb-3">the filing cabinet</div>

- charge trapped in an insulated cell
- keeps data for years, unpowered
- ~**1000× slower** · 3D towers **200–400+ layers**

</div>
</div>

<div class="text-center text-lg mt-8">
A DDR5 chip from Samsung, SK hynix or Micron is <b>interchangeable</b>.<br>
An H100 has no substitute. <b>Bits are fungible. Designs aren't.</b>
</div>

<!--
BEATS:
- The teach, fast: DRAM is working memory — the desk you spread your work across; fast, volatile, gone when the power dies. NAND is storage — the filing cabinet; slow, permanent, wears out. This segment is mostly a DRAM story, because HBM is DRAM.
- The "dynamic" in DRAM: the capacitor physically leaks charge, so the chip rewrites every bit ~15 times a second just to hold still. That's why it forgets the instant you unplug it.
- The economic hinge — say it slowly, it's the whole segment: a bit is a bit. One company's DDR5 drops into the same socket as another's. So memory is sold like oil — on spot and contract markets, price set purely by supply and demand. Logic sells a design nobody else has; memory sells identical bits nobody can tell apart.
FACT AMMO:
- DRAM: 1T + 1C per bit; refresh ~every 64 ms; nanosecond access; volatile. NAND: trapped charge, non-volatile, ~1000× slower than DRAM, finite write cycles, 3D towers now 200–400+ layers. [research/memory-hbm §memory-vs-logic]
- Fungibility is the point: interchangeable DDR5 across the big-3 vs an H100 with no substitute. [research/memory-hbm §memory-vs-logic]
- Handle: DRAM = your desk (fast, wiped nightly); NAND = the filing cabinet (slow, keeps everything).
LINE THAT LANDS:
- "Logic is a monopoly on being clever. Memory is a commodity — and commodities have cycles."
-->

---

# The hog cycle

<div class="grid grid-cols-2 gap-8 mt-6 items-center">
<div>

<div class="text-lg leading-relaxed">
Fabs take <b>~2 years</b> and <b>&gt;$15B</b> to build.<br>
Everyone adds capacity in the boom.<br>
The gluts arrive <b>together</b>. Prices crash.<br>
The weakest player dies. Repeat.
</div>

<div class="text-sm opacity-60 mt-6">
Dozens of DRAM makers in the '80s–'90s → <b>3 companies ≈ 90% of DRAM</b> today.
</div>

</div>
<div class="flex flex-col gap-4">
<div class="border-2 border-red-400 rounded-lg p-4 text-center">
<div class="text-2xl font-bold">2022–23 bust</div>
<div class="text-sm opacity-70 mt-1">DRAM/NAND prices roughly <b>halved</b> · inventories ~31 weeks</div>
</div>
<div class="border-2 border-green-500 rounded-lg p-4 text-center">
<div class="text-2xl font-bold">2025–26 boom</div>
<div class="text-sm opacity-70 mt-1">conventional DRAM contracts <b>+93–98%</b> in a single quarter</div>
</div>
</div>
</div>

<!--
BEATS:
- Name the microeconomics honestly, because it's genuinely different from everything else in this course: memory is a hog cycle (a cobweb cycle). It takes ~2 years and $15B+ to bring a fab online, so nobody can add capacity fast enough in a shortage — and everyone adds it at once. By the time the new fabs open, the shortage is a glut, price collapses, and the balance-sheet-weakest maker gets carried out.
- Give the swings scale: this isn't the ±5% you see in most industries. In 2022–23 prices roughly HALVED and inventories bloated to ~31 weeks. Then in a single quarter of 2025–26, conventional DRAM contract prices rose 93–98%. Same product, doubling and halving inside three years.
- Where the arc points: every bust kills the marginal player, so the industry has consolidated from dozens of DRAM makers to three that hold ~90%. Consolidation isn't a strategy here — it's the body count of the cycle.
FACT AMMO:
- Fab economics: ~2 yrs, >$15B; swings routinely exceed ±50%. [research/memory-hbm §memory-vs-logic]
- 2022–23 bust: DRAM/NAND ≈ halved; supplier inventories ~31 weeks [1][2]. 2025–26 boom: conventional DRAM contracts +93–98% QoQ (1Q26) [3][4]. [research/memory-hbm §memory-vs-logic]
- Consolidation: dozens (1980s–90s) → 3 makers ≈ 90% of DRAM. Handle: the survivors aren't the smartest — they're the ones who kept spending when it hurt. [research/memory-hbm §memory-vs-logic] <!-- VERIFY: exact combined big-3 share; ~89.8% in 1Q26 per Counterpoint [5] -->
LINE THAT LANDS:
- "In logic, the moat is knowing something nobody else knows. In memory, the moat is surviving the winter that kills everybody else."
-->

---

# The crown keeps migrating

<div class="grid grid-cols-4 gap-3 mt-8 text-center text-sm">
<div class="border rounded-lg p-3">
<div class="text-lg font-bold">America</div>
<div class="opacity-60">invented it</div>
<div class="mt-2">Intel 1103, 1970 —<br>best-selling chip in the world by '72</div>
</div>
<div class="border rounded-lg p-3">
<div class="text-lg font-bold">Japan</div>
<div class="opacity-60">won the '80s</div>
<div class="mt-2">~75–80% of world DRAM;<br>the '85 crash drove <b>Intel out of memory</b></div>
</div>
<div class="border rounded-lg p-3">
<div class="text-lg font-bold">Korea</div>
<div class="opacity-60">won the '90s</div>
<div class="mt-2">Samsung #1 in 1992 —<br>held it <b>33 years</b></div>
</div>
<div class="border-2 border-amber-500 rounded-lg p-3">
<div class="text-lg font-bold">2025</div>
<div class="opacity-60">the crown moves again</div>
<div class="mt-2">SK hynix takes it —<br>within Korea, on <b>HBM</b></div>
</div>
</div>

<div class="text-center text-lg mt-8">
Leadership belongs to <b>whoever keeps writing capex checks at the bottom of the cycle.</b>
</div>

<!--
BEATS:
- Tell the migration as a four-beat story, because it's the whole thesis in one arc. America invented DRAM — Intel's 1103 was the best-selling chip in the world by 1972, and DRAM revenue literally built Intel.
- Japan took it in the '80s — NEC, Hitachi, Toshiba out-invested and out-yielded the US to ~75–80% of the world. The 1985 crash was so brutal it drove Intel out of memory entirely (Grove's line: a new CEO "would get us out of memories" — so they fired themselves and did it) and produced the 1986 US–Japan Semiconductor Agreement.
- Korea took it in the '90s — Samsung entered in 1983 and invested straight THROUGH the busts that bankrupted everyone else. #1 in 1992, held for 33 years.
- Then the twist that opens the war: in Q1 2025 the crown moved again — but for the first time it stayed inside Korea. Not a foreign rival — Samsung's neighbor, SK hynix, on the strength of one bet: HBM. The lesson is identical every time: the crown goes to whoever keeps spending when incumbents flinch. Which is exactly the playbook China is running from below right now.
FACT AMMO:
- Intel 1103 (1970), best-selling chip by 1972; DRAM built Intel. Hedge: Intel's literal first product was the 3101 SRAM (1969) — "Intel's first product was DRAM" slightly overstates; the 1103 was its first hit. [64] [research/memory-hbm §history]
- Japan ~75–80% of world DRAM late '80s; 1985 crash drove Intel out of DRAM; 1986 US–Japan Semiconductor Agreement. [research/memory-hbm §history] <!-- VERIFY: exact Japan peak share; DRAM patent Dennard IBM 1966–68 -->
- Samsung #1 in DRAM 1992 ("Tokyo Declaration," entered 1983), held 33 years until SK hynix took it Q1 2025 [7]. Elpida bankrupt 2012 (→ Micron); Qimonda dead 2009. [research/memory-hbm §history] <!-- VERIFY: Elpida/Qimonda dates -->
LINE THAT LANDS:
- "Four times now the memory crown has changed hands. Every single time, it moved during a crash — to the one company brave or crazy enough to keep building while the price was falling."
-->

---

# Remember the bandwidth problem?

<div class="grid grid-cols-2 gap-10 mt-10 text-center items-center">
<div>
<div class="text-6xl font-bold">~60,000×</div>
<div class="opacity-70 mt-2">server compute growth, 20 yrs</div>
</div>
<div>
<div class="text-6xl font-bold">~100×</div>
<div class="opacity-70 mt-2">memory bandwidth growth, same 20 yrs</div>
</div>
</div>

<div class="text-center text-2xl mt-10 leading-relaxed">
The GPU can do the math <b>thousands of times faster</b><br>
than it can be fed. <span class="opacity-70">Here's the bill.</span>
</div>

<!--
BEATS:
- PAYOFF — memory wall (seeded in `nvidia`). Cash it explicitly: "Back at the design, I said feeding 20,480 cores is a bandwidth problem, not a compute problem — and told you to hold that thought. This is the bill."
- The one number that explains HBM's existence: over 20 years, peak compute grew ~60,000×; memory bandwidth grew ~100×. That ~600-fold gap IS the memory wall. Compute got fast; the pipe feeding it barely moved.
- Make it concrete with inference: generating each token of an LLM means streaming the model's weights out of memory. So the math units sit idle, waiting for data. Modern accelerators are bandwidth-bound, not compute-bound. Memory, not FLOPS, is the bottleneck for serving AI.
- The physical why: normal RAM lives on the motherboard, centimeters away, down a skinny 64-bit channel. You cannot feed 20,000 cores through a garden hose. The only fix is to stop commuting — move the memory ONTO the package and make the bus absurdly wide. That's HBM. Hand to the next slide.
FACT AMMO:
- 20 yrs: compute ~60,000×, DRAM bandwidth ~100×, interconnect ~30×. Rates: compute ~3.0×/2yrs vs bandwidth ~1.6×/2yrs — the gap compounds every generation. [19] [research/memory-hbm §memory-wall]
- Consequence: accelerators are bandwidth-bound; LLM inference streams weights from memory, math units idle waiting. [19] [research/memory-hbm §memory-wall]
- The fix: memory onto the package, bus widened to 1024–2048 bits per stack vs 64 per DDR channel. [research/memory-hbm §memory-wall]
- Handle: 60,000× vs 100× — you built a Ferrari and fed it through a straw.
LINE THAT LANDS:
- "For twenty years we made the engine 60,000 times more powerful and the fuel line 100 times wider. HBM is the whole industry admitting it built the wrong pipe."
-->

---

# HBM: memory, stacked into a tower

<div class="grid grid-cols-2 gap-8 mt-6">
<div class="text-lg leading-relaxed">

- **8 / 12 / 16 DRAM dies**, thinned to tens of microns, stacked vertically
- wired by **through-silicon vias** — thousands of copper elevator shafts drilled straight through each die
- the tower sits **millimeters from the GPU** on a silicon interposer (TSMC CoWoS)
- bus width: **1024–2048 bits** per stack vs 64 for a DDR channel

</div>
<div class="flex flex-col gap-4">
<div class="border-2 border-blue-400 rounded-lg p-4">
<div class="font-bold">DDR on the motherboard</div>
<div class="text-sm opacity-70">a suburb — cheap land, long commute down a narrow road</div>
</div>
<div class="border-2 border-green-500 rounded-lg p-4">
<div class="font-bold">HBM on the package</div>
<div class="text-sm opacity-70">an apartment tower downtown — costly per m², but 2,048 lanes wide and a one-minute walk to work</div>
</div>
</div>
</div>

<!--
BEATS:
- Describe the object physically — this is the "wonder" beat, keep it vivid but quick. HBM is 8, 12, now 16 DRAM dies shaved to a few tens of microns — thinner than a sheet of paper — stacked in a tower and wired top-to-bottom by through-silicon vias: thousands of copper shafts drilled clean through the silicon, like elevator shafts in a skyscraper. The tower sits on a base die, millimeters from the GPU, both mounted on a silicon interposer (that's TSMC's CoWoS — hold it, it's the next segment).
- The apartment-tower analogy IS the teach: DDR memory on the motherboard is a suburb — land is cheap, but it's a long commute down a skinny 64-bit road. HBM is an apartment tower built downtown, right next to the office: brutally expensive per square meter, but 1024–2048 lanes wide and a one-minute walk. You don't widen the road; you move in next door and build up.
- One line of lineage so it doesn't feel new: HBM isn't new tech — JEDEC standardized it in 2013, SK hynix built the first with AMD, first product was a 2015 gaming GPU. It was a niche for a decade. Nvidia's AI boom turned that niche into the profit engine of the entire industry.
FACT AMMO:
- 8/12/16 dies thinned to tens of microns, stacked, TSV-connected on a base die; on a silicon interposer (TSMC CoWoS) mm from the GPU. [20] [research/memory-hbm §HBM-deep-dive]
- Bus: 1024–2048 bits/stack vs 64/DDR channel. Handle: TSVs = elevator shafts drilled through every floor of the tower. [research/memory-hbm §memory-wall, §HBM-deep-dive]
- History: JEDEC 2013; first chips SK hynix 2013 (with AMD); first product AMD Fiji / Radeon Fury X, 2015. [20] [research/memory-hbm §HBM-deep-dive]
- Assembly is the differentiator: SK hynix MR-MUF molding vs Samsung TC-NCF film — SK hynix's yield edge here is a core reason it leads. [research/memory-hbm §HBM-deep-dive] <!-- VERIFY: current-gen process details; well-documented for HBM3/3E era -->
LINE THAT LANDS:
- "You can't widen the road, so you move memory into the apartment upstairs — and run two thousand cables to its front door."
-->

---

# Why HBM sells like logic, not memory

<div class="grid grid-cols-3 gap-6 mt-8 text-center">
<div>
<div class="text-5xl font-bold">~3×</div>
<div class="opacity-70 mt-2">wafer capacity per GB<br>vs DDR5</div>
</div>
<div>
<div class="text-5xl font-bold">&gt;50%</div>
<div class="opacity-70 mt-2">of a B300's build cost<br>is the memory</div>
</div>
<div>
<div class="text-5xl font-bold">2026</div>
<div class="opacity-70 mt-2">supply <b>sold out</b><br>12–24 months ahead</div>
</div>
</div>

<div class="text-center text-lg mt-10 leading-relaxed">
Customer-<b>qualified</b>. Yearly contracts <b>negotiated</b>. <b>Presold</b> years out.<br>
With HBM4's custom base die, it's becoming <b>semi-custom per customer</b>.<br>
<span class="opacity-70">The commodity spot market simply doesn't exist here.</span>
</div>

<!--
BEATS:
- Here's the flip that breaks the commodity model — and it starts with an arithmetic fact. An HBM stack eats roughly 3× the wafer capacity per gigabyte of plain DDR5 (stacking overhead, TSV area, yield loss). TrendForce frames 1GB of HBM as ~4GB of conventional DRAM in wafer area. So every HBM wafer started is ~3 wafers of PC and phone memory that never get made. That single trade ratio is the fuse on the whole 2025–26 shortage — remember it, we light it next slide.
- The Money-Bar beat — this is HBM's line on the running price waterfall, and it's the biggest one: on a Blackwell B200 the HBM is ~45% of build cost (~$2.9k of ~$6.4k); on the B300, over half. The memory now costs more than the GPU die it feeds. Nvidia sells compute — but it BUYS memory, and memory is the largest single toll on the object we've been following.
- Why it "sells like logic": because it's scarce and custom, HBM broke every commodity rule. It's customer-qualified (Nvidia quals take quarters — see Samsung next), sold on negotiated annual contracts, and presold 12–24 months out — SK hynix and Micron sold out through calendar 2026; Samsung sold its entire 2026 supply back in October 2025. And with HBM4 putting a custom logic base die under each stack, it's edging toward a semi-custom part per customer. There is no spot market. That's a logic business wearing a memory badge.
- Hedge to voice: the "3–5× premium per bit" over DDR5 is real historically, but the supercycle actually COMPRESSED it — commodity DDR5 rose so fast that TrendForce expects plain DDR5 profitability to pass HBM3E in 2026. So "HBM is where the money is" is directionally true but 2026 is weird: the commodity got hot too.
FACT AMMO:
- Trade ratio ~3× wafer capacity/GB vs DDR5; 1GB HBM ≈ ~4GB conventional DRAM in wafer area [32][33]. [research/memory-hbm §HBM-deep-dive]
- BOM share: H100 SXM ~41% (~$1,350 of ~$3,320); B200 ~45% (~$2.9k of ~$6.4k); B300 >50% [37][38]. Handle: the memory costs more than the processor it serves. [research/memory-hbm §HBM-deep-dive]
- Sells like logic: qualified, negotiated, presold 12–24 mo; SK hynix + Micron sold out through cal-2026; Samsung sold out 2026 by Oct 2025 [34][35][36]. HBM4 custom base die → semi-custom. [research/memory-hbm §HBM-deep-dive]
- Price: historically ~3–5× per bit over DDR5; HBM3E ≈ $13–17/GB early 2026 [29][30]. Hedge: DDR5 profitability expected to surpass HBM3E in 2026 [31]. [research/memory-hbm §HBM-deep-dive]
- HBM ~a fifth of all DRAM wafer capacity in 2026. [research/memory-hbm §HBM-deep-dive] <!-- VERIFY: ~20–23% circulating; find TrendForce primary -->
LINE THAT LANDS:
- "Memory used to be the thing you bought last and cheapest. On an AI chip it's now the single most expensive part — and you have to book it two years out."
-->

---

# The war: an ambush, a stumble, a charge

<div class="grid grid-cols-3 gap-5 mt-8 text-sm">
<div class="border-2 border-green-500 rounded-lg p-4">
<div class="text-xl font-bold">SK hynix</div>
<div class="opacity-60 mb-2">the ambush</div>
Bet early on HBM. Took the <b>DRAM crown in Q1 2025</b> — Samsung's first loss of #1 since 1992. Nvidia's main HBM supplier since the H100. <b>~56% of HBM.</b>
</div>
<div class="border-2 border-red-400 rounded-lg p-4">
<div class="text-xl font-bold">Samsung</div>
<div class="opacity-60 mb-2">the stumble</div>
Failed Nvidia's HBM3E qual for <b>~18 months</b> — the giant that couldn't ship. Passed 12-layer HBM3E <b>Sept 2025</b>; regained DRAM #1 in 4Q25 on legacy prices.
</div>
<div class="border-2 border-blue-400 rounded-lg p-4">
<div class="text-xl font-bold">Micron</div>
<div class="opacity-60 mb-2">the charge</div>
From <b>2% (2023) → ~19–21%</b> of HBM. The lone US maker. HBM4 in high-volume for Nvidia; sold out through 2026.
</div>
</div>

<div class="text-center text-lg mt-8">
Mid-2026: <b>all three</b> certified by Nvidia for Vera Rubin's HBM4.
</div>

<!--
BEATS:
- Tell the rivalry as one story with three moves — that's the whole point of a duel-tier segment, not three profiles.
- The ambush: SK hynix was the perennial #2 that made one contrarian bet — go all-in on HBM before it obviously mattered. When AI hit, it was the only company with qualified stacks, and in Q1 2025 it took the DRAM revenue crown from Samsung — ending 33 years of Samsung dominance. It's been Nvidia's primary HBM supplier since the H100, and it still holds ~56% of the market.
- The stumble: the humiliation of the cycle. Samsung — the biggest memory maker on Earth — could not pass Nvidia's HBM3E qualification for ~18 months (thermal and power issues). It watched its smaller neighbor and an American rival ship the most profitable product in memory while it couldn't. It fixed it — redesigned the DRAM core, passed 12-layer HBM3E in September 2025 — and note the irony: it clawed back the DRAM revenue crown in Q4 2025 not on HBM but because conventional prices exploded and its huge legacy capacity became a money-printer.
- The charge: Micron, the lone American, went from a rounding error (2% in 2023) to ~19–21% of HBM, passing Samsung by some trackers during 2025, and is now shipping HBM4 in volume for Nvidia. The scrappy third is suddenly a real second.
- The truce that resets the race: at GTC Taipei in June 2026 Jensen confirmed all three are certified for Vera Rubin's HBM4. The war doesn't end — it just moves up to HBM4, where the prize is bigger.
FACT AMMO:
- SK hynix: DRAM crown Q1 2025 (Samsung's 1st loss since 1992) [7]; Nvidia's main HBM supplier since H100; HBM ~56.4% 1Q26 (own F-1), ~62% mid-2025 [11][12]. [research/memory-hbm §players-shares]
- Samsung: failed Nvidia HBM3E qual ~18 months (thermal/power) [39]; passed 12-layer HBM3E Sept 2025 [39][40]; regained DRAM #1 in 4Q25 as legacy prices spiked [9]. [research/memory-hbm §players-shares, §Samsung-saga]
- Micron: HBM 2% (2023) → ~19–21%, passed Samsung by some trackers in 2025 [12]; HBM4 high-volume for Nvidia [58]. [research/memory-hbm §players-shares] <!-- VERIFY: trackers disagree on Samsung-vs-Micron #2 ordering in 1H26 -->
- All three certified for Vera Rubin HBM4 — Jensen at GTC Taipei, June 1 2026; Rubin ships from summer 2026 [13][24]. Nvidia HBM4 allocation est.: SK hynix ~60–70%, Samsung ~25–30%, Micron the rest [13]. [research/memory-hbm §HBM-deep-dive]
- Architectural break for HBM4: base die moves to LOGIC nodes — SK hynix's base die fabbed by TSMC (12nm-class); Samsung fabs its own on 4nm (only turnkey supplier) [22][23]. [research/memory-hbm §HBM-deep-dive]
LINE THAT LANDS:
- "The biggest memory company in the world spent eighteen months unable to sell the one product that mattered — while the company next door printed money. In memory, one late bet can cost you a 33-year crown."
-->

---

# Scoreboard — the memory triopoly

<div class="grid grid-cols-3 gap-4 mt-4">

<div class="border-2 border-green-500 rounded-lg p-3">
<div class="text-lg font-bold text-center">SK hynix</div>
<div class="grid grid-cols-2 gap-2 text-center mt-2 text-sm">
<div><div class="text-xl font-bold">₩97.2T</div><div class="opacity-60">revenue FY25</div></div>
<div><div class="text-xl font-bold">49%</div><div class="opacity-60">op. margin FY25</div></div>
<div><div class="text-xl font-bold">28.8%</div><div class="opacity-60">DRAM · <b>56% HBM</b></div></div>
<div><div class="text-xl font-bold">~5+ yrs</div><div class="opacity-60">to replace</div></div>
</div>
<div class="text-xs opacity-70 text-center mt-2">HBM yield lead + Nvidia's first call</div>
</div>

<div class="border-2 border-red-400 rounded-lg p-3">
<div class="text-lg font-bold text-center">Samsung</div>
<div class="grid grid-cols-2 gap-2 text-center mt-2 text-sm">
<div><div class="text-xl font-bold">₩74.8T</div><div class="opacity-60">memory rev 1Q26</div></div>
<div><div class="text-xl font-bold">~66%</div><div class="opacity-60">DS op. margin 1Q26</div></div>
<div><div class="text-xl font-bold">38.6%</div><div class="opacity-60">DRAM #1</div></div>
<div><div class="text-xl font-bold">~5+ yrs</div><div class="opacity-60">to replace</div></div>
</div>
<div class="text-xs opacity-70 text-center mt-2">only turnkey — own 4nm base die + scale</div>
</div>

<div class="border-2 border-blue-400 rounded-lg p-3">
<div class="text-lg font-bold text-center">Micron</div>
<div class="grid grid-cols-2 gap-2 text-center mt-2 text-sm">
<div><div class="text-xl font-bold">$41.5B</div><div class="opacity-60">revenue FQ3'26</div></div>
<div><div class="text-xl font-bold">84.6%</div><div class="opacity-60">gross margin</div></div>
<div><div class="text-xl font-bold">22.4%</div><div class="opacity-60">DRAM · ~20% HBM</div></div>
<div><div class="text-xl font-bold">~5+ yrs</div><div class="opacity-60">to replace</div></div>
</div>
<div class="text-xs opacity-70 text-center mt-2">the West's only big-3 memory maker</div>
</div>

</div>

<div class="text-xs opacity-40 text-right mt-3">as of Q2 2026 · shares 1Q26</div>

<!--
BEATS:
- Run the standard Scoreboard block, compacted three-up so the triopoly reads as one rhythm. Same fields as every major player: revenue, margin, share, moat-in-a-line, years-to-replace.
- The margin line is the headline — read all three: SK hynix at 49% OPERATING margin for the full year (that alone beat Samsung's entire company); Samsung's DS division at ~66% operating margin in Q1; Micron at an 84.6% GROSS margin. These are software numbers, earned by companies selling the most commodity product in silicon. That's what a shortage does.
- Years-to-replace — voice the nuance, it's the interesting part: to replicate any one of these as a COMMODITY maker, China is close (CXMT is credible by ~2027). But to replicate the HBM crown — the yield, the packaging, the Nvidia relationship — is years away this decade even for China, and Samsung's own 18-month stumble proves even a peer can't just decide to do it. So "~5+ years" is the HBM-leadership figure; the commodity floor is far shorter. The synthesis segment ranks all players on one board.
FACT AMMO:
- SK hynix FY25: revenue ₩97.15T, OP ₩47.21T (49% margin — beat Samsung's whole company), net ₩42.95T [54]. 1Q26: revenue ₩52.58T, OP ₩37.61T (72% margin) [55]. DRAM 28.8%, HBM ~56.4% [5][11]. [research/memory-hbm §financials, §players-shares]
- Samsung 1Q26: memory revenue ₩74.8T (~$51B, all-time high); DS revenue ₩81.7T, OP ₩53.7T (~66% margin, ~48× YoY) [41][61][62]. DRAM 38.6% (#1) [6]. [research/memory-hbm §financials, §players-shares]
- Micron FQ3-26 (Mar–May 2026): revenue $41.46B (>entire FY25; 4.5× year-ago), GAAP GM 84.6%, net $28.24B; guides FQ4 ~$50B ±1B at ~86% GM [58]. DRAM 22.4%, HBM ~19–21% [5][12]. [research/memory-hbm §financials, §players-shares]
- Years-to-replace: proposed ~5+ yrs for HBM leadership; China credible on commodity DRAM by ~2027, "not an AI-memory threat this decade" [49]. [research/memory-hbm §China] <!-- VERIFY: years-to-replace is a proposed editorial figure for synthesis to finalize; margin labels differ by company (SK hynix/Samsung = operating, Micron = gross) — keep the labels honest on screen -->
LINE THAT LANDS:
- "An 85% gross margin, from the company that sells the most commodity product in the industry. When memory prints software margins, you are not looking at a healthy market — you're looking at a shortage."
-->

---

# The 2025–26 supercycle

<div class="grid grid-cols-2 gap-8 mt-6">
<div>
<div class="text-sm opacity-60 mb-2">DRAM industry revenue</div>
<div class="text-lg">2025: <b>$165.7B</b> <span class="opacity-60">(+73%)</span></div>
<div class="text-3xl font-bold text-green-500 mt-1">2026E: $404.3B <span class="text-lg">(+144%)</span></div>
<div class="text-sm opacity-60 mt-4">total memory <b>$551.6B</b> in 2026E · data centers ~<b>70%</b> of all memory output</div>
</div>
<div class="flex flex-col gap-3">
<div class="border rounded-lg p-3 text-sm"><b>Micron:</b> one quarter ($41.5B) beat its whole prior fiscal year · 84.6% GM</div>
<div class="border rounded-lg p-3 text-sm"><b>Samsung Q2'26:</b> ~₩1 trillion profit <b>per day</b> — and the stock <i>fell 7%</i></div>
<div class="border rounded-lg p-3 text-sm"><b>SK hynix:</b> ~$28B+ Nasdaq ADR — <b>largest in history</b> (Jul 10, 2026)</div>
</div>
</div>

<div class="text-center text-sm opacity-60 mt-6">
The fuse: one HBM wafer ≈ 3 PC-DRAM wafers that never got made. Your laptop is bidding against a data center for the same silicon.
</div>

<!--
BEATS:
- Give the boom its scale in one breath: TrendForce has the DRAM industry going from $165.7B in 2025 to a forecast $404.3B in 2026 — up 144%. Total memory ~$551.6B in 2026. Data centers, ~20–30% of memory demand in 2022, take ~70% in 2026. This is the biggest up-cycle the industry has ever had.
- The three proof points, rapid-fire: Micron booked more in one quarter ($41.5B) than in its entire previous fiscal year, at an 84.6% gross margin. Samsung earned roughly a trillion won a day in Q2 2026 — up ~19× year-on-year — and its stock FELL 7%. And five days before this recording, SK hynix pulled off the largest ADR listing in history — ~$28B+ on Nasdaq, bigger than Alibaba's 2014 debut — to fund more fabs and more EUV. Capex courage, 2026 edition.
- Why it happened — connect it to the trade ratio you flagged two slides ago: HBM and AI-server DRAM ate the wafers at 3:1, the big-3 had cut legacy capacity in the 2023 bust, then hyperscalers panic-prebought on multi-year lock-ins. That's why a laptop's RAM roughly quadrupled in six months — your PC is bidding against Microsoft for the same wafer.
- Now the hedge that's the emotional core — voice it, don't bury it: why did Samsung's stock fall on a record? Because in memory, record profits are how every crash begins. Record prices → record capex → the 2027–28 glut candidate. Every prior supercycle ended in oversupply; TrendForce's own curve peaks in 2027. The bulls say presold multi-year AI contracts make this one different. That claim has never been tested through a downturn.
FACT AMMO:
- TrendForce: DRAM $165.7B 2025 (+73%) → $404.3B 2026E (+144%); NAND +112% to $147.3B; total memory $551.6B 2026E, peaking ~$842.7B 2027 [48]. [research/memory-hbm §supercycle] <!-- VERIFY: 2026–27 are forecasts; treat as scenario, not fact -->
- Data centers ~70% of memory output 2026 vs ~20–30% in 2022 [4][45]. [research/memory-hbm §supercycle] <!-- VERIFY: secondary sources; find primary -->
- Micron FQ3-26 $41.5B > entire FY25; 84.6% GM [58]. Samsung Q2'26 prelim: OP ₩89.4T (~$59B), ~19× YoY, ~₩1T/day; stock −7% on capex fears [63]. SK hynix Nasdaq ADR Jul 10 2026, ~$28–29.4B, largest ever (tops Alibaba $21.8B) [56][11]. [research/memory-hbm §financials]
- Fuse: 1 HBM wafer ≈ 3 PC-DRAM wafers not made [32][43]; laptop RAM ~quadrupled in six months. [research/memory-hbm §HBM-deep-dive, §fact-ammo]
- Hedge: record price → record capex (DRAM capex ~$53.7B 2025 → ~$61.3B 2026) → 2027–28 glut candidate; every prior cycle ended in glut; presold LTAs untested [65][48]. [research/memory-hbm §risks]
LINE THAT LANDS:
- "Samsung made a trillion won a day and the market sold it off — because everyone in this industry knows the same grim lesson: the top of a memory cycle looks exactly like the best quarter you've ever had."
-->

---

# Chokepoint #6: earned

![chokepoint board — 6 stamps](/diagrams/rendered/board-6.svg)

<div class="text-xl mt-6 text-center">
<b>SK hynix — HBM.</b> The qualified-supply bottleneck of the entire AI buildout.
</div>

<div class="text-sm opacity-60 mt-10 text-center">
The tower is built. Now someone has to weld twelve layers of DRAM onto a GPU die without cracking a single one.
</div>

<!--
BEATS:
- Prove the chokepoint, then stamp it. The proof: HBM is qualified-supply. Nvidia can't just buy more from a spot market — there isn't one. The one supplier that's been qualified longest, at the highest yield, on the tightest schedule, is SK hynix — Nvidia's first call for every generation since the H100, still ~56% of the market, with the estimated majority of Vera Rubin's HBM4. Remove SK hynix's qualified HBM and the AI buildout stalls in months, with no substitute inside years. Stamp it — board goes to 6 of 7.
- Honesty hedge to voice: this is the most contestable stamp on the board, because Micron and (now) Samsung are also qualified — it's a triopoly, not a monopoly. The defense: SK hynix is the load-bearing supplier and the swing that everyone's roadmap is built around; the qualification MOAT (18 months even for Samsung) is what makes it a chokepoint, even shared three ways. Flag it as the judgment call it is; synthesis lists the honorable mentions.
- CLOSER — "what you now know" in one breath: memory is a commodity that boom-busts on nerve; HBM broke that model by welding DRAM to the GPU and selling it like logic; and that made the memory the single most expensive part of an AI chip. Six of seven chokepoints are now stamped.
- The cliffhanger — hand to `packaging`. Land the exact turn: we keep saying the memory sits "millimeters from the GPU on an interposer" and gets "welded on." But HOW? How do you bond twelve wafer-thin layers of DRAM onto a logic die, thousands of connections each, without cracking one — and then join that to a reticle-limit GPU? Set up the reveal: that word — PACKAGING — the thing nobody used to think about, quietly became the most important word in this industry. For two years you couldn't buy a GPU, and it wasn't the wafers.
FACT AMMO:
- Chokepoint #6 = SK hynix / HBM, the qualified-supply bottleneck of the AI buildout (locked in curriculum). [research/memory-hbm §players-shares]
- Proof: SK hynix ~56.4% HBM 1Q26 [11]; Nvidia's main supplier since H100; est. ~60–70% of Vera Rubin HBM4 [13]. [research/memory-hbm §players-shares, §HBM-deep-dive]
- Hedge: contestable — triopoly, all three now Nvidia-qualified [13][24]; the qualification moat (Samsung's 18-month failure [39]) is the chokepoint logic. Alternates → synthesis honorable mentions. [research/memory-hbm §Samsung-saga]
- Handoff fact for `packaging`: the stack sits on a TSMC CoWoS interposer; HBM4 base die fabbed on logic nodes (TSMC 12nm / Samsung 4nm) [22][23] — the bridge into advanced packaging. [research/memory-hbm §HBM-deep-dive]
LINE THAT LANDS:
- "How do you weld twelve layers of DRAM onto a GPU die? That word — packaging — quietly became the most important word in this industry."
-->
