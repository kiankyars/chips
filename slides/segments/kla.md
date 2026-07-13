<!-- SEGMENT
id: kla
act: IV — The Fab Tour
tier: P-lite
angle: "The most profitable machine in the fab is the one that builds nothing. KLA doesn't deposit, etch, or print a single atom — it only measures — and it earns the fattest margin in the industry doing it, because if you can't measure it, you can't build it."   # YOU OWN THIS LINE — rewrite it in your voice
runtime: ~3 min
status: draft
seeds: []                       # plants nothing new — closes out the fab-tour equipment leg
pays_off: [yield]               # stage 3 of the yield chain: foundations → life-of-a-wafer → HERE → intel → chiplets in packaging (do NOT close it — intel & packaging still cash it)
stamps: []                      # NO new stamp — board stays at board-5 (ASML + Zeiss)
diagrams: [flow-measure, map-equipment]
sources: research/kla.md
-->

---
layout: section
---

# The Inspector

<div class="text-xl opacity-70 mt-2">Act IV · the fab tour reaches its last step — MEASURE</div>

<div class="grid grid-cols-[3fr_1fr] gap-6 mt-6 items-center">
<div>

![the loop ends on the measure step](/diagrams/rendered/flow-measure.svg)

</div>
<div class="opacity-70">

![industry map — equipment region lit](/diagrams/rendered/map-equipment.svg)

</div>
</div>

<div class="text-lg opacity-80 mt-4 text-center">
The last machine on the strip deposits nothing, etches nothing, prints nothing. <b>It only looks.</b>
</div>

<!--
BEATS:
- Catch the handoff off the sculptors: we've watched films get grown and carved away, the loop running dozens of times. Every single pass ends on the same step — the one we've skipped until now: MEASURE.
- This machine changes nothing about the wafer. It deposits nothing, etches nothing, prints nothing. It only looks at what the other tools just did — and it's built by a company most people have never heard of, the highest-margin name in the entire fab.
- The thesis of the whole segment, said plainly: at nanometer scale, "if you can't measure it, you can't build it" isn't a slogan. It's the literal precondition for everything upstream.
FACT AMMO:
- KLA = process control: inspection (find defects) + metrology (measure dimensions/alignment). It deposits/etches/prints nothing — it measures everything the other tools do [research/kla §what KLA is].
- Milpitas, CA — a Silicon Valley original: KLA Instruments (1975, photomask defect detection) + Tencor (1976) merged 1997, renamed KLA Corp in 2019 [research/kla §what KLA is].
- Customers = everyone who runs a fab: TSMC, Samsung, Intel, SK Hynix, Micron, plus mask shops and packaging houses [research/kla §what KLA is].
LINE THAT LANDS:
- "Every other machine in this building changes the wafer. This one only watches it — and it's the most profitable machine in the room."
-->

---

# The immune system

<div class="grid grid-cols-2 gap-10 mt-6">
<div class="border-2 border-red-400/60 rounded-lg p-6">
<div class="text-sm opacity-60 mb-2">THE HORROR</div>
<div class="text-lg leading-relaxed">
A process drifts at <b>step 400</b>.<br>
Nobody notices until wafers fail test at <b>step 1,000</b>.
</div>
<div class="opacity-70 mt-3 text-sm">600–1,000+ steps · 3–4 months in the line — every wafer started in between is suspect.</div>
</div>
<div class="border-2 border-emerald-400/60 rounded-lg p-6">
<div class="text-sm opacity-60 mb-2">THE FIX</div>
<div class="text-lg leading-relaxed">
Measure <b>between every step</b>.<br>
Catch the drift at <b>step 401</b>.
</div>
<div class="opacity-70 mt-3 text-sm">Quarantine one lot — instead of scrapping a quarter's output.</div>
</div>
</div>

<div class="text-center text-2xl mt-8">
One point of yield at a leading-edge fab ≈ <b>$100M / year</b>.
</div>

<!--
BEATS:
- Cash the seed, third and biggest time. Foundations PLANTED it ("one particle, one dead $40k die"); life-of-a-wafer made you FEEL it (a speck at step 900 kills three months of survived history). This is the machine — and the business — built to hunt it.
- Run the horror scenario concretely: a process drifts at step 400. Without in-line measurement, nobody finds out until the finished wafers fail electrical test at step 1,000. With a 3–4 month cycle time, that's weeks of work-in-progress already poisoned — every wafer that started in between is suspect.
- The fix is why fabs measure constantly, in-line, between steps: catch the drift at step 401 and you quarantine a single lot instead of scrapping a quarter's output. That's the immune-system framing — process control doesn't build the body, it catches the infection before it spreads.
- Now the stakes in dollars: one point of yield at a leading-edge fab is on the order of $100M a year. That is why nobody on Earth haggles with KLA.
- Bridge to the next slide: and the hunt only gets harder every node — which is the whole reason this is a growth business, not a mature one.
FACT AMMO:
- 600–1,000+ process steps per wafer; ~3–4 months from bare silicon to finished circuits [research/kla §teachable].
- The excursion story: drift undetected at step 400 → failure at step 1,000 → months of WIP suspect (framing; the step/cycle numbers are sourced) [research/kla §teachable].
- 1% yield improvement ≈ "millions of dollars per week" for a high-volume device (eInnoSys, mirroring McKinsey); McKinsey example — one maker losing ~$68M to yield loss, a program delivered +10% yield in six months [research/kla §teachable].
- $100M handle (arithmetic, each input checkable): a ~$18,500 3nm wafer <!-- VERIFY: widely reported TSMC N3 figure, not officially confirmed --> × ~50k wafer-starts/month × 12 × 1% ≈ ~$100M+/yr per yield point [research/kla §teachable].
- New fabs start at 30–50% yield and take 18–24 months of hunting defect sources to climb above 80% — ramping yield faster is the whole game [research/kla §teachable].
- Simplification hedge (direction of the lie): "step 400 / step 1,000" is illustrative — real excursions are flagged by statistical process control across many tools, not one dramatic miss; but the structural point (long cycle time = enormous exposed WIP) is exactly right.
LINE THAT LANDS:
- "It doesn't build the body. It catches the infection before it spreads."
- "One yield point is worth a hundred million dollars a year — that's why nobody haggles with the inspector."
-->

---

# Find the golf ball — and it keeps getting harder

<div class="grid grid-cols-2 gap-10 mt-6 items-center">
<div>
<div class="text-sm opacity-60 mb-2">THE SEARCH</div>
<div class="text-lg leading-relaxed">
Scale a <b>20 nm defect</b> up to a <b>golf ball</b>, and the wafer becomes a disc <b>~600 km across</b>.
</div>
<div class="opacity-70 mt-3">Find that one golf ball anywhere on it — <b>in about an hour, per wafer.</b></div>
</div>
<div class="flex flex-col gap-2 text-lg">
<div class="text-sm opacity-60 mb-1">AND EVERY NODE GETS WORSE</div>
<div>Smaller features → <b>smaller killer defects</b></div>
<div>EUV + multipatterning → <b>more layers that must align</b></div>
<div>Bigger AI die + HBM stacks → <b>less redundancy per defect</b></div>
</div>
</div>

<div class="grid grid-cols-3 gap-6 mt-8 text-center">
<div><div class="text-5xl font-bold">56–58%</div><div class="text-sm opacity-60">of process control (KLA)</div></div>
<div><div class="text-5xl font-bold">~7×</div><div class="text-sm opacity-60">the nearest rival</div></div>
<div><div class="text-5xl font-bold">80%+</div><div class="text-sm opacity-60">of reticle inspection</div></div>
</div>

<!--
BEATS:
- Make the search physical. A killer defect at the leading edge is ~20 nm. Scale it up until it's a golf ball and the 300mm wafer becomes a disc roughly 600 km across — Ohio-sized. KLA's job is to find that one golf ball, anywhere on it, in about an hour — for every wafer, at production speed. (This is the "virus-sized defect on a football field" idea, done as arithmetic.)
- Then the growth thesis: process-control intensity RISES every single node. Smaller features mean smaller defects can kill you; EUV and multipatterning stack more layers that all have to line up; the giant AI dies and HBM stacks from Act 0 have less redundancy, so every defect costs more. More to inspect, more to measure, every generation.
- That's what turns a measuring company into a near-monopoly. KLA is ~56–58% of the entire process-control market — about 7× its nearest competitor, and still gaining share. On the sharpest corners it's effectively alone: 80%+ of reticle/photomask inspection, ~75–80% of patterned-wafer inspection.
- Optional aside (only if it doesn't blow the clock): this is a chokepoint like litho — softer, but real. Yield learning is exactly what China's leading-edge effort lacks, and KLA's tools ARE the yield-learning machine — which is why China went from 43% of KLA's revenue to 24% in about two years under export controls.
FACT AMMO:
- The search, as arithmetic: a ~20nm defect scaled to a golf ball → the 300mm wafer scales to a disc ~600 km across; found in ~an hour per wafer (own arithmetic; same idea as "a marble on a highway seen from a jet") [research/kla §the tech].
- How it's actually done (one line if asked): broadband-plasma optical inspection casts the wide net fast (the radar); an e-beam microscope revisits each flagged site to classify it (the microscope) [research/kla §the tech].
- Reticle/mask inspection is the crown franchise — a defect on the mask prints onto every die of every wafer, so you catch it once at the mask shop or scrap everything downstream [research/kla §the tech].
- Intensity rises: smaller features → smaller killer defects; EUV + multipatterning → more layers that must align; bigger die + HBM → less redundancy, higher cost per defect (KLA's own framing) [research/kla §teachable, §market position].
- Share: ~56–58% of process control (56% third-party [4], ~58% KLA investor day [5]); ~7× nearest competitor, +360 bps since 2021; nearest rival AMAT only ~10%; reticle inspection 80%+, patterned-wafer 75–80% [research/kla §market position].
- Growth proof point: in CY2025 KLA took #1 in advanced wafer-level-packaging process control — share up 14 points, revenue up ~70% YoY [research/kla §market position].
- China aside: 43% of revenue (FY2024) → 33% (FY2025) → 24% (March 2026 qtr), partly post-boom, partly "more stringent U.S. export controls" [research/kla §geopolitics]. Dec-2024 BIS rules guided to cut ~$500M of CY2025 revenue <!-- VERIFY: exact guidance figure/breakdown -->.
- Process control ≈ 10%+ of total WFE spend and rising <!-- VERIFY: analyst figures vary ~9–11% --> [research/kla §market position].
- Simplification hedge: "20nm defect" is a stand-in — the killer-defect size tracks the node and the layer; the robust claim is the ratio (defect-to-wafer), not the exact nanometers.
LINE THAT LANDS:
- "Find one golf ball on a field 600 kilometers wide — in an hour, for every wafer that walks in."
- "The harder chips get to inspect, the more this one company owns the inspecting."
-->

---

# The company that only measures

<div class="border-2 border-gray-400 rounded-lg p-4 mt-6">
  <div class="grid grid-cols-5 gap-4 text-center">
    <div><div class="text-3xl font-bold">$12.2B</div><div class="text-sm opacity-60">revenue FY25</div></div>
    <div><div class="text-3xl font-bold">~62%</div><div class="text-sm opacity-60">gross margin</div></div>
    <div><div class="text-3xl font-bold">56–58%</div><div class="text-sm opacity-60">market share</div></div>
    <div><div class="text-lg font-bold leading-tight mt-1">owns yield learning — ~7× the nearest rival</div></div>
    <div><div class="text-3xl font-bold">~10 yrs</div><div class="text-sm opacity-60">to replace</div></div>
  </div>
  <div class="text-xs opacity-40 text-right mt-2">as of Q2 2026</div>
</div>

<div class="text-center text-xl mt-8 leading-relaxed">
<b>62%</b> gross margin — <b>ten points higher than ASML</b>, the machine monopoly everyone talks about.<br>
<span class="opacity-60 text-lg">The company that only <i>measures</i> is the most profitable of them all.</span>
</div>

<!--
BEATS:
- Land the scoreboard as the punchline of the whole segment. ~$12B in revenue, ~56–58% share, ~7× the nearest rival — and the number that should stop you: a ~62% gross margin.
- Drive the margin proof: KLA's non-GAAP gross margin (62.2%) is the HIGHEST of the big-five equipment makers — about ten points above ASML's ~53%, the monopoly everyone talks about. The company that touches the wafer least earns the most on it, because measurement is where the yield knowledge lives, and yield knowledge is priceless.
- The annuity under it: process control is somewhat countercyclical (fabs measure MORE when yields are bad), and services are ~23% of revenue on a 17-year growth streak — a steady stream beneath the cyclical tool sales.
- Years-to-replace is my editorial call, not a pack number: I put it at ~10 years — real rivals exist (AMAT, Onto, Hitachi, ASML's e-beam), so it's not the 20-plus of ASML/Zeiss, but a 40-year optical-inspection lead plus a mountain of proprietary yield data is why nobody has closed the gap. Overwrite this number if you disagree — synthesis ranks them all.
- CLOSER — 15s recap, then the handoff. What you now know: process control is the fab's immune system; the search is a golf ball on a 600km disc that gets harder every node; and that's why the company that builds nothing owns the fattest margin in the industry. NO new stamp — the board still reads five.
- Hand off into materials: the wafer's last measurement passes. We've now met every MACHINE in the fab — deposit, litho, etch, implant, polish, measure. But machines are only half a fab. Every one of those steps ATE something — resist, gases, slurries, blank plates, ultrapure everything. So: what was all this made FROM? Down one more floor, into the Japanese basement.
FACT AMMO:
- FY2025: revenue $12.16B; GAAP net income $4.06B; GAAP gross margin ≈ 61%; FCF $3.75B; services $2.68B (~22%) [research/kla §financials].
- Q3 FY2026 (latest reported): non-GAAP gross margin 62.2%, non-GAAP operating margin 42.6% — highest margins of the big-5 WFE makers, vs ASML 52.8% gross margin in 2025 (AMAT/Lam high-40s, TEL mid-40s <!-- VERIFY: exact AMAT/Lam/TEL current GMs -->) [research/kla §financials].
- Services $775M = 23% of revenue, +16% YoY; 2026 tracks to the 17th consecutive year of services growth — the annuity under the cyclical tool business [research/kla §financials].
- Process control is somewhat countercyclical — fabs measure more when yields are bad — but not immune to the WFE cycle [research/kla §risks].
- Investor-day trajectory: 13–17% revenue CAGR through CY2030; WFE market seen at $215B ± $20B by 2030; >90% of FCF returned [research/kla §financials].
- Scoreboard values: revenue $12.16B FY25, GM ~62% (non-GAAP Q3 FY26 62.2%; GAAP FY25 ~61%), share 56–58% [research/kla §financials, §market position]. Years-to-replace ~10 yrs is an editorial estimate (NOT from the pack) — proposed from the moat: 40-yr BBP optical-inspection legacy + proprietary yield data + near-monopoly reticle/patterned-wafer franchises, offset by live rivals; synthesis ranks the full league table.
- Board note: no stamp earned here — process control is the "softer, real" chokepoint, but the locked seven are ASML, Zeiss, TSMC-wafers, Synopsys+Cadence, Japan materials, SK Hynix HBM, TSMC-CoWoS; the board stays at five going into materials.
LINE THAT LANDS:
- "The company that only measures chips has a 62% gross margin — ten points fatter than ASML, the monopoly everyone talks about."
- "We've met every machine in the fab. Now — what was all of this made out of?"
-->
