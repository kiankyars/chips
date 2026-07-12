# Research — Equipment: Deposition, Etch & the Rest of the Fab (AMAT ⭐, Lam ⭐, TEL, ASM)

As-of: 2026-07

Fact pack. Ammunition only, no prose. `[n]` → source list at bottom.
`<!-- VERIFY -->` = not fully confident, check before recording.
Covers wafer-fab equipment beyond litho (→ research/asml.md) and process
control (→ KLA's own pack).

## The WFE market
- SEMI year-end forecast (Dec 2025): **total** semiconductor equipment sales hit a
  record **$133B in 2025** (+13.7% YoY), forecast **$145B in 2026** and
  **$156B in 2027**. [1]
- The **WFE segment** (wafer processing — the front-end core): **$115.7B in 2025**
  (+11.0%), projected +9.0% in 2026 (→ ~**$126B**) and +7.3% in 2027, reaching
  **$135.2B**. [1] (SEMI's July-2025 mid-year forecast had been lower — $125.5B
  total for 2025, $139B for 2026 — revised up on AI/HBM memory spend. [2])
- Definitions vary: Yole counts WFE at ~$104B in 2025 and sees **$184B by 2030
  including equipment *and* services**. [3] <!-- VERIFY: Yole vs SEMI scope difference before quoting both in one breath -->
- Rough split of WFE by segment (rule of thumb, sources disagree on exact cuts):
  litho ~**25–30%**, deposition ~**20–25%**, etch ~**20%**, process
  control/metrology ~**11–13%**, clean ~**5–10%**, remainder = CMP, implant,
  track, thermal. <!-- VERIFY: no single authoritative public split; TechInsights/Yole paywalled. Directionally safe: dep+etch together ≈ 40%+, i.e. bigger than litho -->
- The **big-5 oligopoly**: ASML, Applied Materials, Lam Research, Tokyo Electron,
  KLA together held **almost 70% of WFE in 2024**. [4]
- Structure of the oligopoly: it's not five firms fighting over one market — each
  dominates a *different* step. ASML owns litho, AMAT owns materials
  engineering breadth, Lam owns etch, TEL owns track (+ strong etch/dep), KLA
  owns inspection. An oligopoly of near-monopolies.
- Revenue league table, latest full years: ASML **€32.7B** (2025, see
  research/asml.md) > AMAT **$28.4B** (FY2025) [5] > Lam **$18.4B** (FY2025) [8]
  > TEL **¥2,443.5B** ≈ $16–17B (FY ending Mar-2026) [11] > ASM **€3.2B**
  (2025). [15] <!-- VERIFY: yen/dollar conversion at recording time -->

## Teachable: what deposition & etch DO
- A chip is not carved from a block — it's **built up layer by layer**, like a
  skyscraper: **deposit** a film (sometimes atoms thick) → **pattern** it with
  litho → **etch** away what the pattern exposes → repeat, layer after layer.
- A leading-edge chip takes on the order of **1,000+ process steps** and roughly
  **~3 months** of fab time, wafer looping through dep → litho → etch hundreds
  of times. <!-- VERIFY: step counts cited anywhere from ~600 to 2,000+ depending on node; "well over a thousand at the leading edge" is the safe phrasing -->
- Deposition = putting material ON the wafer (CVD, PVD/sputtering, epitaxy,
  electroplating, and ALD — atomic layer deposition, one atomic layer per cycle).
- Etch = removing material with atomic precision — plasma "sandblasting" that
  only cuts where litho opened the mask.
- **Why value shifted from litho to etch/dep**: when 2D shrink got too hard/
  expensive, the industry went vertical — FinFET → GAA transistors in logic,
  planar → 3D NAND in memory. **"If you can't shrink sideways, build upward."**
  - 3D NAND is the extreme case: scaling by *stacking layers* (24 layers in 2013
    → 200+ state-of-the-art today → industry roadmap targets ~1,000 by 2030),
    not by shrinking the pattern. [9]
  - Stacking means litho matters less and dep/etch matter more: you deposit
    hundreds of alternating films, then etch memory-channel holes through the
    whole stack in one shot. 3D NAND fabs don't need EUV at all. <!-- VERIFY: "no EUV in NAND" is true today; check no NAND maker has announced EUV insertion -->
  - Same logic in logic: GAA transistors and backside power are won with
    deposition/etch/materials innovation, not just finer printing (→ AMAT, ASM
    sections).

## Applied Materials ⭐ (AMAT — Santa Clara, USA)
- The **broadest portfolio in WFE**: deposition (CVD, PVD, epi, ALD), etch, ion
  implant, CMP (polishing), thermal/anneal, e-beam metrology — nearly every
  step except litho and track. Largest US equipment maker; #2 worldwide by
  revenue after ASML.
- **FY2025** (ended Oct-2025): record revenue **$28.37B** (+4%, sixth consecutive
  record year); record GAAP EPS $8.66 / non-GAAP **$9.42**; non-GAAP gross margin
  **48.8% — highest in 25 years**; $6.3B returned to shareholders. [5]
- Segments FY2025: Semiconductor Systems **$20.8B**; Applied Global Services
  **$6.4B**; Display **$1.1B**. [5]
- Latest: **Q2 FY2026** (ended Apr-2026): record revenue **$7.91B** (+11% YoY,
  +13% QoQ); record non-GAAP EPS $2.86 (+20%). AI demand pulled it out of the
  FY2025 flat patch. [6]
- **Why breadth = moat**: AMAT can co-optimize *sequences* of steps ("integrated
  materials solutions" — dep + etch + treatment under one vacuum, no air
  exposure between steps). As structures went 3D, chipmakers increasingly buy
  the recipe, not just the tool. <!-- VERIFY: phrasing is AMAT's own marketing frame; fair but attribute as "Applied argues" -->
- **The inflection numbers** (AMAT's own math — each architecture change grows
  its served market):
  - 7nm → 3nm tripled interconnect wiring steps → wiring opportunity grew >$1B
    to ~**$6B per 100K wafer-starts/month** of new capacity. [7]
  - **GAA transition: ~$1B incremental AMAT revenue per 100K wafer-starts/month**
    vs FinFET. [7]
  - **Backside power delivery: another ~$1B per 100K WSPM** (wiring opportunity
    → ~$7B); AMAT pegs its density benefit as equivalent to up to **two
    generations of litho scaling**. [7]
- China: **30% of FY2025 revenue ($8.5B)**. [5] Warned of a **~$600M revenue hit
  in FY2026** (some coverage: up to $710M) from the late-Sept-2025 expansion of
  US export curbs; expects weaker China spend in 2026. [10]
- Vivid stat: every time the transistor changes shape, AMAT collects a toll — the
  GAA flip alone is worth **an extra billion dollars per 100,000 wafer starts a
  month**, before backside power adds the next billion. [7]

## Lam Research ⭐ (LRCX — Fremont, USA)
- **The etch king**: **>20 years as dry plasma etch market leader; >10 years and
  7 device generations as NAND high-aspect-ratio etch leader**. [12] Third-party
  share estimates put Lam at roughly **~half of dry etch** (TEL ~25%, AMAT the
  rest). <!-- VERIFY: public share numbers conflict wildly (35–50%); TechInsights/Gartner paywalled. "Roughly half" needs a checkable source or soften to "the clear #1" -->
- **FY2025** (ended Jun-2025): revenue **$18.44B**, up ~24% YoY. [8]
- Latest: **March-2026 quarter** revenue **$5.84B** (+24% YoY) — third
  consecutive record quarter; GM 49.8%; June-2026 quarter guided to **$6.6B**
  midpoint. FY2026 tracking toward ~$23B. [13]
- Mix (Mar-2026 qtr): systems 64% / **customer-support-related 36%**; China 34%,
  Korea 23%, Taiwan 23% of revenue. [13]
- **The 3D NAND story** (Lam's franchise):
  - Memory-channel holes are etched through 100+ layers of film in one pass:
    holes **~1/1000th the width of a human hair**, **50× deeper than they are
    wide** — and you etch **billions of them per wafer, all identical**. [9]
    <!-- VERIFY: "billions per chip/wafer" scale — Lam blog says trillions of holes across a wafer's dies in some materials; pin the count before using -->
  - **>100 million NAND wafers** have had their memory channel created by Lam
    dielectric etchers; **>7,500** Lam HAR etch chambers in production. [12]
  - **Cryogenic etch** (wafer chilled to ~-60°C and below): Lam first put cryo
    HAR etch into volume production in **2019**; **Lam Cryo 3.0** (2024) etches
    **2.5× faster** with angstrom-level precision; **>5M wafers** etched on an
    installed base of ~**1,000 cryo chambers**. [12][9]
- NAND exposure cuts both ways: Lam is the most memory-levered of the big five —
  crushed in the 2023 NAND downturn, snapping back hard in the 2025–26 NAND
  upgrade cycle. <!-- VERIFY: exact memory % of systems revenue latest quarter (Lam discloses in earnings deck) -->
- Installed base: nearly **100,000 process chambers** in the field — each one an
  annuity for spares/service/upgrades. [14]
- Vivid stat: a 3D NAND etch is like **drilling a perfectly straight hole 1000×
  thinner than a hair, 50× deeper than it is wide — several billion times per
  wafer, simultaneously**. [9]

## Tokyo Electron (TEL — Tokyo, Japan)
- **Japan's equipment champion** — by far its largest chip-tool maker, #3–4
  globally. Portfolio: coater/developer (track), etch, deposition, clean,
  probers.
- **FY2026** (Apr-2025→Mar-2026): record net sales **¥2,443.5B** (~$16–17B,
  +0.5% YoY — flat because China digestion offset AI demand); net income
  **¥574.4B** (+5.6%); record FCF ¥433.2B. [11]
- Momentum returning: Q4 FY2026 revenue ¥711.8B (+28.9% QoQ); **H1 FY2027 guided
  +33% YoY** (¥1,570B). Long-term model: **≥¥3T sales, ≥35% ROE**. [11]
- **The track near-monopoly**: coater/developers — the machines that coat the
  wafer with photoresist before exposure and develop it after — **"more than
  90%" global share** (TEL's own figure; third parties say ~87–90%). [11][16]
  - Teachable: the track is **physically bolted to the ASML scanner**, wafers
    shuttling between them inline. Every EUV litho cell on Earth = an ASML
    scanner + (almost always) a TEL track. ASML gets the fame; TEL sells the
    other half of the litho cell. <!-- VERIFY: SCREEN has small track share; "almost always" is right, "always" is not -->
  - TEL guides coater/developer revenue **+>50% in FY2027** (EUV layer count
    keeps rising). [11]
- Also #2 in etch (~25% share) — guided **+>25% in FY2027**; advanced packaging
  tools +>60% off a ¥200B base. [11] <!-- VERIFY: TEL etch share ~25% figure is analyst consensus, not TEL-disclosed -->
- China: **34.1% of FY2026 sales**, down from **~42–44% peak in FY2024–25**
  (single quarters hit 47%+). Japan's July-2023 export rules apply to TEL in
  parallel with US rules. [11][17][18]
- Vivid stat: TEL's grip on track (**>90%**) is *tighter* than ASML's grip on
  total litho (~83%) — it's arguably the second-most-concentrated chokepoint in
  the fab, and almost nobody outside the industry has heard of it. [11][16]

## ASM International (ASMI — Almere, Netherlands)
- **The ALD leader** — atomic layer deposition: films built **one atomic layer
  per cycle**, self-limiting chemistry, angstrom-level thickness control on
  every surface of a 3D structure. ALD's roots: invented by Finland's Tuomo
  Suntola in **1974**; ASM turned it into the semiconductor workhorse. [19]
  <!-- VERIFY: Suntola 1974 date + ASM commercialization path (bought Microchemistry in 1999) -->
- Share: **>55% of the ALD segments where it competes** — the largest
  single-wafer ALD portfolio; also growing in epitaxy, vertical furnaces,
  PECVD, SiC epi. [19][15]
- **2025**: record revenue **€3.24B** (+12% at constant currency); record gross
  margin **51.8%** — driven above all by customers building **2nm GAA**
  capacity. [15]
- 2030 targets (Sept-2025 Investor Day): revenue **>€5.7B** (≥12% CAGR),
  operating margin >30%, FCF >€1B; sees single-wafer ALD market at **$5.1–6.1B
  by 2030**, outgrowing WFE overall. [20]
- **Why GAA made ALD critical**: in a gate-all-around transistor the gate wraps
  *entirely around* stacked nanosheets — the gate stack must be deposited
  uniformly inside nm-scale cavities that litho and line-of-sight deposition
  can't reach. Only self-limiting, layer-by-layer ALD conformally coats every
  hidden surface. New ASM chemistries (Mo ALD, area-selective deposition) are
  already in volume production at 2nm. [15]
- China: around the **high-20s%** of 2025 revenue (top of guided range),
  normalizing down. [21]
- Vivid stat: ASM's tools paint films **one atomic layer at a time** — and the
  moment the transistor's gate had to wrap around the channel, that party trick
  became mandatory, handing a ~€25B company a record year. [15][19]

## Shared economics (service, longevity, China)
- **Razor-and-blades installed base**: tools run for decades, and every tool in
  the field buys spares, service contracts, upgrades forever.
  - AMAT AGS: **$6.4B** (~23% of revenue); **>2/3 of it subscription-like**;
    from Q1 FY2026 AGS is restructured to be **entirely recurring**. [5][22]
  - Lam: customer-support-related = **36% of revenue** (Mar-2026 qtr); installed
    base ~**100,000 chambers**. [13][14]
  - TEL/ASM: service typically ~20–30% of sales. <!-- VERIFY: TEL field solutions % and ASM spares/service % — both disclose in annual reports -->
- **Tools last 20+ years**: fabs still run 200mm tools bought in the 1990s;
  equipment makers say most systems they've ever shipped remain in service.
  <!-- VERIFY: find the exact AMAT/Lam "majority of tools ever shipped still running" quote before using on camera -->
  - Narration frame: sell the machine once, sell the service for 25 years.
- **China exposure** (share of revenue, latest):
  - AMAT **30%** (FY2025) [5] · Lam **34%** (Mar-2026 qtr) [13] · TEL **34.1%**
    (FY2026, down from ~42–44%) [11][17] · ASM **high-20s%** (2025). [21]
  - 2023–24 China stockpiling made it 40%+ for several of them; everyone is now
    guiding it *down*. <!-- VERIFY: peak-quarter China % per company if quoting -->
- **Export-control state of play (mid-2026)**: US Oct-2022 rules (+ Dec-2024
  expansion) cut off advanced-node China sales; the **Sept-2025 "affiliates
  rule" expansion** further blocked sales to subsidiaries of listed Chinese
  chipmakers → AMAT's ~$600M FY2026 hit [10]; Japan's parallel controls bind
  TEL. Chinese fabs responded by bulk-buying legacy-node tools *before* rules
  landed — hence the 2023–25 China bulge, now deflating.
- Consequence inside China: accelerating domestic substitution — Naura and AMEC
  (etch/dep) are the fastest-growing equipment makers in the world off a small
  base, aimed squarely at Lam/AMAT/TEL sockets in legacy fabs. <!-- VERIFY: Naura 2025 revenue (~$4–5B?) and top-10 entry before citing numbers -->

## Risks
- **China cliff**: 30%+ of everyone's revenue is simultaneously (a) capped by
  export rules and (b) being competed away by subsidized domestic rivals.
- **Memory cyclicality**: NAND/DRAM capex swings ±50%; Lam most exposed, TEL
  heavily too. The 2025–26 AI-memory boom (HBM, NAND upgrades) is the current
  updraft — it can reverse.
- **AI concentration**: SEMI's record 2026–27 forecasts lean on AI capex from a
  handful of customers (TSMC, the memory trio, Intel/Samsung foundry). [1]
- **Architecture pendulum**: High-NA EUV could eventually cut multi-patterning
  (fewer dep/etch steps per layer) — the same force that shifted value *to*
  dep/etch could partially reverse. <!-- VERIFY: counterargument — High-NA adoption is slow and layer counts keep rising; net effect still favors dep/etch through 2028 per most analysts -->
- **Customer concentration**: five-ish buyers (TSMC, Samsung, Intel, SK Hynix,
  Micron + Kioxia/YMTC-era China) set the entire demand curve.

## Fact ammo — lines that land
- **An oligopoly of monopolies**: five companies — ASML, Applied, Lam, TEL,
  KLA — control ~**70%** of the ~$116B wafer-fab-equipment market, and each one
  dominates a *different* step of the same production line. [1][4]
- **The hole that stores your data**: a 3D NAND memory channel is **1/1000th
  the width of a human hair and 50× deeper than it is wide** — Lam has etched
  those channels into **over 100 million wafers**. [9][12]
- **The monopoly nobody's heard of**: TEL's coater/developer — the machine
  bolted to every ASML scanner — has **>90% global share**, a tighter grip than
  ASML's own share of litho. [11][16]
- **The architecture toll-booth**: Applied Materials makes **~$1B more per
  100,000 wafer-starts/month** every time the transistor changes shape — GAA is
  one extra billion, backside power the next. [7]
- **One atomic layer at a time**: ASM's ALD tools deposit films a single layer
  of atoms per cycle; when 2nm gate-all-around made that indispensable, ASM
  posted a record **€3.2B** year at a record **51.8%** gross margin. [15]
- **Sell it once, service it for 25 years**: Lam's ~**100,000** installed
  chambers make **36%** of its revenue recurring; Applied's $6.4B services arm
  is now structured to be entirely recurring. [13][14][5][22]

---

## Sources
1. SEMI, "Global Semiconductor Equipment Sales Projected to Reach a Record of $156 Billion in 2027" (Dec 2025 year-end forecast; 2025 = $133B, WFE $115.7B) — https://www.semi.org/en/semi-press-release/global-semiconductor-equipment-sales-projected-to-reach-a-record-of-156-billion-dollars-in-2027-semi-reports (mirror: https://www.prnewswire.com/news-releases/global-semiconductor-equipment-sales-projected-to-reach-a-record-of-156-billion-in-2027-semi-reports-302640433.html)
2. SEMI, mid-2025 forecasts ($125.5B in 2025 / $139B in 2026) — https://www.semi.org/en/semi-press-release/semi-reports-global-total-semiconductor-equipment-sales-forecast-to-reach-125.5-billion-dollars-in-2025 and https://www.semi.org/en/semi-press-release/global-total-semiconductor-equipment-sales-forecast-to-reach-a-record-of-dollar-139-billion-in-2026-semi-reports
3. Yole Group, "Wafer Fab Equipment market to hit $184 billion by 2030 for equipment and services" — https://www.yolegroup.com/press-release/wafer-fab-equipment-wfe-market-to-hit-184-billion-by-2030-for-equipment-and-services-driven-by-specialized-segment-growth-and-global-manufacturing-shifts/
4. TechInsights, "Analysis: WFE Market Share Summary" (big five ≈70% of WFE, 2024) — https://www.techinsights.com/blog/analysis-wfe-market-share-summary
5. Applied Materials, Q4 & FY2025 results (Nov 13, 2025) — https://www.globenewswire.com/news-release/2025/11/13/3187810/0/en/Applied-Materials-Announces-Fourth-Quarter-and-Fiscal-Year-2025-Results.html
6. Applied Materials, Q2 FY2026 results (May 14, 2026) — https://ir.appliedmaterials.com/news-releases/news-release-details/applied-materials-announces-second-quarter-2026-results/
7. Applied Materials blog, "Materials Engineering is Key to Enabling Continued Logic Scaling" (GAA +$1B/100K WSPM; wiring ~$6B; BSPD +$1B → ~$7B) — https://www.appliedmaterials.com/us/en/blog/blog-posts/materials-engineering-is-key-to-enabling-continued-logic-scaling.html
8. Lam Research FY2025 revenue ($18.44B, FY ended 2025-06-29) — https://stockanalysis.com/stocks/lrcx/revenue/ and Q4 FY2025 release: https://investor.lamresearch.com/2025-07-30-Lam-Research-Corporation-Reports-Financial-Results-for-the-Quarter-Ended-June-29,-2025
9. Lam Research blog, "The Road to 1,000 Layer 3D NAND" (24→200+→1,000 layers; hole = 1/1000 hair width, 50× deeper than wide; cryo stats) — https://newsroom.lamresearch.com/road-1000-layer-3D-NAND
10. Reuters via Yahoo Finance, "Applied Materials sees weaker China spending in 2026 on tighter US curbs" (~$600M FY2026 hit) — https://finance.yahoo.com/news/applied-materials-forecasts-strong-quarterly-210625673.html ; TrendForce follow-up — https://www.trendforce.com/news/2025/11/14/news-applied-materials-flags-a-2026-china-fab-spending-drop-amid-tougher-u-s-export-rules/
11. NineScrolls, "Tokyo Electron Posts Record JPY 2.44 Trillion FY2026, Guides First Half FY2027 Up 33% — Etch and Coater/Developer Lead the Charge" — https://ninescrolls.com/news/tokyo-electron-posts-record-jpy-2-44-trillion-fy2026-guides-first-half-fy2027
12. Lam Research press release, "Lam Cryo 3.0 Cryogenic Etch Technology" (Jul 2024; >20yr etch leader, >100M NAND wafers, 7,500 HAR chambers, 2.5× etch rate) — https://investor.lamresearch.com/2024-07-31-Lam-Research-Introduces-Lam-Cryo-TM-3-0-Cryogenic-Etch-Technology-to-Accelerate-Scaling-of-3D-NAND-for-the-AI-Era
13. Lam Research, results for quarter ended March 29, 2026 (rev $5.84B; China 34%; support revenue 36%; June-qtr guide $6.6B) — https://newsroom.lamresearch.com/2026-04-22-Lam-Research-Corporation-Reports-Financial-Results-for-the-Quarter-Ended-March-29,-2026
14. Lam Research FY2025 Form 10-K (installed base ≈100,000 process chambers) — https://www.sec.gov/Archives/edgar/data/707549/000070754925000075/lrcx-20250629.htm
15. ASM International, Q4 and full-year 2025 results (record €3.2B, +12% cc; record GM 51.8%; 2nm GAA driver; Mo ALD/ASD in HVM) — https://www.asm.com/media/yvxbavwe/20260303-asm-reports-q4-and-full-year-2025-results.pdf
16. Investing.com, Tokyo Electron Q4 FY2026 earnings call coverage (coater/developer share ">90%"; China 26.8% of Q4 sales vs 47.4% in Q4 FY2024) — https://www.investing.com/news/transcripts/earnings-call-transcript-tokyo-electron-q4-2026-beats-estimates-stock-surges-93CH-4654441
17. Tokyo Electron, FY2026 Q4 financial announcement transcript (China 34.1% of FY2026 sales) — https://www.tel.com/ir/library/report/pjuomj00000000tf-att/fy26q4transcript-e.pdf
18. TrendForce, "Tokyo Electron Reportedly Sees China Sales Dropping to 30% in 2025 Amid Tightening U.S. Export Curbs" (FY2024 China ≈42%) — https://www.trendforce.com/news/2025/06/30/news-tokyo-electron-reportedly-sees-china-sales-dropping-to-30-in-2025-amid-tightening-u-s-export-curbs/
19. BALD Engineering, "ASM International Strengthens ALD Market Leadership" (>55% share where it competes; Suntola 1974) — https://www.blog.baldengineering.com/2025/05/asm-international-strengthens-ald.html
20. ASM International, Investor Day Sept 2025 (2030 targets >€5.7B, OM >30%, FCF >€1B; single-wafer ALD $5.1–6.1B by 2030) — https://www.globenewswire.com/news-release/2025/09/23/3154400/0/en/ASM-hosts-Investor-Day-provides-new-2030-targets-revises-H2-2025-outlook.html
21. ASM International, Q2 2025 results (China ≈ top of low-to-high-20s% range for 2025) — https://live.euronext.com/en/products/equities/company-news/2025-07-22-asm-reports-second-quarter-2025-results
22. Futurum Group, "Applied Materials Q4 FY2025 Results" (AGS >2/3 subscriptions; AGS fully recurring from Q1 FY2026) — https://futurumgroup.com/insights/applied-materials-q4-fy-2025-results-emphasize-ai-focused-mix/
