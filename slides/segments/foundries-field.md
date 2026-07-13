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

---
layout: section
---

# The Rest of the Grid

<div class="text-xl opacity-70 mt-2">Everyone who tried to be TSMC — and why almost nobody is</div>

![map manufacture](/diagrams/rendered/map-manufacture.svg){class="absolute bottom-4 right-4 w-40 opacity-80"}

<!--
BEATS:
- We just spent 16 minutes on TSMC and Intel. Natural question: who else is even in this race?
- Set the frame in your own words (angle above): this is ONE story, not four company profiles. The story is that leading-edge manufacturing stopped being a market.
- "You are here" — Map still lit on manufacture; we're finishing Act III before the fab tour.
FACT AMMO:
- Only TSMC, Samsung, and Intel ship leading-edge logic today; Rapidus is trying to become a fourth [research/foundries-field §market share picture].
LINE THAT LANDS:
- "Every industry has a number two. This one has a number two that loses money for the privilege."
-->

---

# The starting grid shrank to three

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
Same curve as Act I — inverted. Every time the fab-cost exponential doubled, the grid halved.
</div>

<!--
BEATS:
- Callback to the Act I cost curve — this is that same graph, flipped. As fab cost per node doubled (Rock's law), the number of companies who could pay the entry fee collapsed.
- Walk the funnel: ~25 leading-edge manufacturers in 2001, down to 3 by the late 2010s and still 3 today. This is the single most important slide in the segment — the whole "field" is a story about subtraction.
- Then the punchline gap: it isn't even a real 3. TSMC has 72.3% of the foundry market; number two, Samsung — one of the largest companies on Earth — has 6.5%. That's an 11-to-1 gap, and it's still WIDENING (TSMC 70.4% → 72.3% in one quarter).
- Why it widens by default (the learning-curve trap): yield improves with cumulative wafer volume — Wright's law. Whoever runs the most wafers learns fastest, gets the lowest cost, wins the next big customer, runs even more wafers. The leader compounds; the followers starve.
FACT AMMO:
- Funnel counts: 130nm ~25–26 (2001) → 90nm ~17 → 65nm ~14 → 45nm ~12 → 32nm ~9 → 22nm ~6 → 14nm ~4 → 7/5nm 3 → 3/2nm still 3 [research/foundations §consolidation funnel]. [VERIFY: exact counts differ by source (IBS/BCG); lock one chart before recording]
- The gap: TSMC 72.3% vs Samsung 6.5% = ~11:1; TSMC share rose 70.4→72.3% in one quarter — concentration, not catch-up [research/foundries-field §market share picture].
- A leading-edge node costs ~$20–30B+ (R&D + fab) per generation [research/foundries-field §why #2 keeps failing]. [VERIFY: per-node cost framing] Fab cost is up ~5,000× since the early 1970s [research/foundations §two exponentials].
HANDLE:
- ~25 → 3 = the field lost a company for roughly every node shrink. The graph that made your phone faster is the same graph that killed the competition.
SIMPLIFICATION HEDGE:
- Direction of the lie: exact counts are contested (different analysts draw ~26 or ~22 at 130nm) and market share is REVENUE share — TSMC's premium pricing inflates the gap vs a wafer-count view. The direction is not contested: it only ever goes down.
LINE THAT LANDS:
- "This isn't a race where number two is catching up. It's a race where number two falls further behind every quarter — on purpose, because that's how the math works."
-->

---

# The three who stayed (and one who walked)

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="border-2 border-gray-400 rounded-lg p-4">
<div class="text-lg font-bold">Samsung Foundry — #2, and bleeding for it</div>
<div class="mt-2 opacity-80">Beat TSMC to the GAA transistor by ~3 years (first 3nm GAA, 2022) — and lost the node anyway (~20% yield; Qualcomm walked). ~$10B+ of losses over three years while TSMC ran a 59.9% margin. Kept alive by memory profits upstairs + a $16.5B Tesla anchor deal.</div>
</div>

<div class="border-2 border-gray-400 rounded-lg p-4">
<div class="text-lg font-bold">GlobalFoundries — the one who quit</div>
<div class="mt-2 opacity-80">Stopped 7nm cold in 2018 — a business call, not a failure. Retreated to mature/specialty nodes. Result: small, steady, <i>profitable</i> (~$6.8B rev, ~25% margin). In 2015, IBM <b>paid GF ~$1.5B</b> to take its chip factories away.</div>
</div>

<div class="border-2 border-gray-400 rounded-lg p-4">
<div class="text-lg font-bold">Rapidus — the government moonshot</div>
<div class="mt-2 opacity-80">Japan's 2nm bet. Private backers put in a symbolic ~$50M; Tokyo has put in ~¥2.35T (~$16B). Pilot line live 2025, mass production targeted 2027. Has never sold a chip.</div>
</div>

<div class="border-2 border-dashed border-gray-500 rounded-lg p-4 opacity-90">
<div class="text-lg font-bold">SMIC — IOU 📌</div>
<div class="mt-2 opacity-80">China's champion, #3 at 5.1%. Built a 7nm phone chip with <i>no EUV</i> (2023 Huawei Mate 60). Entire record year ≈ four weeks of TSMC. <b>China gets its own act</b> — we come back to SMIC in the chip war.</div>
</div>

</div>

<!--
BEATS:
- Don't profile four companies — tell one thesis four ways: nobody stays at the frontier on economics anymore. Each survivor is propped by something OTHER than a profitable foundry business.
- SAMSUNG (why #2 is brutal): they were AHEAD — first to gate-all-around by three years — and it didn't matter, because yield, not architecture, wins. ~20% yield, Qualcomm took its flagships back to TSMC's older FinFET. The tell: same industry, same years — TSMC prints a 59.9% margin, Samsung burns ~$10B. What keeps Samsung in? The memory division prints record profit upstairs and pays the foundry's tuition; plus the Tesla AI6 deal ($16.5B) finally gives it an anchor.
- GLOBALFOUNDRIES (the rational exit — the control group): the only one who did the math and QUIT the leading edge in 2018. Ramping 7nm to viable volume would cost $2–4B with too few customers. So they walked, went to specialty nodes, and now earn ~25% gross margin every year. The killer line: in 2015 IBM PAID GlobalFoundries $1.5B to take chip manufacturing off its hands — ten years before it became the most strategic industry on Earth. Exiting the race was the profitable move.
- RAPIDUS (subsidy as a business model): Japan wants back in at 2nm. Private money is symbolic (~$50M); the ~$16B is government. Working pilot transistors, no customer, no revenue ever. The honest odds: land yield AND cost AND customers simultaneously — something no new entrant has done at the leading edge since the 1990s.
- SMIC (plant the IOU, don't detonate): #3 in the world, and the most politically loaded name in the episode. Made a 7nm chip with no EUV. But its whole record year is four weeks of TSMC. Say the seed out loud and move on: "China gets its own act."
FACT AMMO:
- Samsung: #2 at 6.5% (1Q26), drifted down from ~8% [1]; first 3nm GAA June 2022, beat TSMC ~3 yrs; ~20% yield, Qualcomm to TSMC N3 FinFET [3][4] [VERIFY: all Samsung yield numbers are leaks/analyst estimates, never official]; op losses ~KRW 2.5T/5.3T/6T for 2023/24/25 ≈ $10B+ [12]; TSMC 59.9% GM 2025 [20]; Tesla $16.5B AI6 deal July 2025 [7][8]; memory record ~KRW 20T op profit 4Q25 pays the tuition [13]. [research/foundries-field §Samsung Foundry]
- GF: halted 7nm Aug 27 2018, $2–4B ramp math, business decision [16][17]; FY2025 rev $6.79B, net income $888M, GM 24.9% [19]; IBM paid GF ~$1.5B in 2015 [15]. [research/foundries-field §GlobalFoundries]
- Rapidus: founded Aug 2022, 8 backers ~¥7.3B (~$50M) symbolic [32]; state support ~¥2.35T (~$16B) by early 2026 [34][37] [VERIFY: totals vary ¥2.35T vs ¥2.9T by counting method]; pilot line Apr 1 2025, mass production target 2H FY2027; no anchor customer as of mid-2026 [36] [VERIFY: customer status moves fast, re-check before recording]. [research/foundries-field §Rapidus]
- SMIC: #3 at 5.1% [1]; Entity List since Dec 18 2020, no EUV [23]; Huawei Mate 60 Pro SMIC 7nm N+2 without EUV, Aug 2023 [24]; record year $9.33B ≈ ~4 weeks of TSMC ($122.4B/yr) [20][25]. [research/foundries-field §SMIC]
HANDLE:
- IBM's $1.5B: someone paid you to take their factory — the reverse of a bidding war — and a decade later that same capability is a national-security asset.
SIMPLIFICATION HEDGE:
- Direction of the lie: yield %s for Samsung/SMIC/Rapidus are leaks, teardowns and analyst estimates — none official. Say "reportedly" on every one.
LINE THAT LANDS:
- "Four companies, four ways of surviving number-two — memory profits, a government, a quiet retreat, or a sanctions workaround. Not one of them survives on the foundry business itself."
-->

---

# The toll: the manufacturing slice

<div class="mt-6">
<div class="text-sm opacity-60 mb-2">One GB300-class accelerator — where the money goes so far <span class="opacity-70">(all figures analyst estimates, ~)</span></div>

<div class="flex w-full h-16 rounded-lg overflow-hidden text-xs font-bold text-white">
  <div class="bg-emerald-700 flex items-center justify-center" style="width:60%">Nvidia design + margin</div>
  <div class="bg-sky-700 flex items-center justify-center" style="width:4%">EDA</div>
  <div class="bg-amber-600 flex items-center justify-center" style="width:14%">Manufacturing</div>
  <div class="bg-gray-400 flex items-center justify-center" style="width:22%">memory + packaging →</div>
</div>
<div class="flex w-full text-xs mt-2 opacity-70">
  <div style="width:60%">Act II · ~75% gross margin</div>
  <div style="width:4%"></div>
  <div style="width:14%" class="font-bold opacity-100">◆ this act</div>
  <div style="width:22%">Acts V–VI, still ahead</div>
</div>
</div>

<div class="text-sm opacity-70 mt-8">
The <b>foundry's cut</b>: a leading-edge 300mm wafer reportedly runs <b>~$18k–$30k</b> (5nm → 2nm) — and TSMC keeps <b>~60 cents of every dollar</b> as gross margin. The smallest slice of the bill. Made by the fewest hands on Earth.
</div>

<!--
BEATS:
- Add this act's toll to the running Money Bar. Act II gave us Nvidia's design margin (the giant slice) and the EDA tollbooth (a sliver at ~90% margin). Now Act III adds MANUFACTURING — what the foundry actually captures.
- The reveal that flips intuition: manufacturing is one of the SMALLER slices of a GPU's price. A leading-edge wafer is ~$18–30k reportedly, TSMC keeps ~60% of it as gross margin — real money, but small next to Nvidia's cut and the memory bill still coming.
- So why did we just spend 25 minutes on it? Because it's the slice only THREE companies on Earth can produce at all — and only one of them profitably. Scarcity, not size, is why the foundry is a chokepoint. Memory and packaging (the gray remainder) land in Act V.
FACT AMMO:
- Per-GPU street price ~$50k+ (rack ~$3.7–6.5M) — all third-party estimates, Nvidia lists no price [research/nvidia §the rack / price] [VERIFY: wide estimate range; flag on screen].
- Leading-edge wafer reportedly N5 ~$18k, N3 ~$20k, N2 ~$30k, A16 ~$45k per 300mm wafer [research/tsmc §pricing; research/foundations §wafer pricing] [VERIFY: wafer prices never officially disclosed — say "reportedly"].
- TSMC gross margin 59.9% (FY2025) → 66.2% (Q1 2026) [research/tsmc §financials].
SIMPLIFICATION HEDGE:
- Direction of the lie: the bar's proportions are illustrative — no one publishes a clean per-chip BOM. The order (Nvidia's margin biggest, manufacturing modest, memory large and rising) is what's solid; treat the widths as estimates.
LINE THAT LANDS:
- "The part of the chip that only three companies on Earth can make? It's the cheap part of the bill."
-->

---
layout: center
---

# One thing left

<div class="text-2xl mt-8 leading-relaxed max-w-3xl">
TSMC's fabs are cathedrals.<br>
But TSMC doesn't build the machines inside them.<br>
<span class="opacity-60">Nobody you've heard of does.</span>
</div>

<!--
BEATS:
- 15–20s "what you now know": the leading-edge grid is three companies, and it's really one plus three subsidized runners-up — because the cost curve rewards whoever runs the most wafers.
- Then the handoff into Act IV, the fab tour. The whole segment has been about who OWNS the fabs. The next question is who builds what goes INSIDE them — and the answer is a set of companies almost no one can name.
- Deliver the cliffhanger clean; it's a highest-priority redline line (act transition).
FACT AMMO:
- Plant, don't explain: the fab is full of machines from a supply chain even more concentrated than the foundries — that's Act IV (ASML, Applied, Lam, KLA, and the Japanese materials basement).
LINE THAT LANDS (verbatim-spirit — the mandated closer):
- "TSMC's fabs are cathedrals. But TSMC doesn't build the machines inside them. Nobody you've heard of does."
-->
