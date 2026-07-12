# Research — The Foundry Field (everyone who isn't TSMC or Intel)

As-of: 2026-07

Fact pack. Ammunition only, no prose. `[n]` → source list at bottom.
`<!-- VERIFY -->` = not fully confident, check before recording.
Covers: Samsung Foundry, GlobalFoundries, SMIC, UMC, Rapidus. TSMC and Intel
Foundry have their own packs.

## The market share picture

- TrendForce, **1Q26** top-10 foundry ranking (revenue share) [1]:

  | # | Foundry | 1Q26 share | 4Q25 revenue [2] |
  |---|---------|-----------|------------------|
  | 1 | TSMC | **72.3%** | $33.7B |
  | 2 | Samsung Foundry | **6.5%** | $3.4B |
  | 3 | SMIC | 5.1% | $2.49B |
  | 4 | UMC | 3.9% | $2.0B |
  | 5 | GlobalFoundries | 3.3% | $1.8B |
  | 6 | HuaHong Group (CN) | 2.5% | $1.22B |
  | 7–10 | Tower / Nexchip / VIS / PSMC | ~0.8% each | $370–440M each |

- **The gap in one number: TSMC 72.3% vs #2 Samsung 6.5% — an ~11-to-1 gap.** [1]
- Top-10 combined revenue 1Q26: **$47.95B**, +3.7% QoQ, a record; TSMC alone
  ~$35.9B of it. Growth driver: AI server GPUs/xPUs. [1]
- Trend is *concentration, not catch-up*: TSMC's share rose 70.4% → 72.3% in a
  single quarter. [1][2]
- Everyone from #3 down is essentially a **mature/specialty-node** player; only
  TSMC, Samsung (and Intel) ship leading-edge logic today, with Rapidus trying
  to become the fourth.

## Samsung Foundry

- #2 forever. Latest share **6.5%** (1Q26) / **7.1%** (4Q25) — the often-quoted
  "~8%" is 2024-era data; it has drifted *down*. [1][2]
- **GAA-first bet:** world's first gate-all-around transistors in production at
  3nm, June 2022 — beat TSMC to the architecture by ~3 years. Then lost the
  node anyway: reported yields stuck around **~20%** (some reports single-digit
  early), vs the ~60%+ customers demand; Qualcomm walked, gave Snapdragon
  flagships exclusively to TSMC's *FinFET* N3. [3][4] <!-- VERIFY: all Samsung yield numbers are leaks/analyst estimates, never official -->
- **2nm (SF2) status 2026:** Exynos 2600 unveiled Dec 2025 — industry-first 2nm
  GAA smartphone AP, mass production started Q4 2025, ships in Galaxy S26/S26+
  in most regions. [5] Reported SF2 yields crossed **~50%** by Jan 2026 (vs 37%
  Nov 2025) — real progress, still short of TSMC-class. [6] Second-gen SF2P is
  the node pitched for Tesla AI6 and Exynos 2700. [6]
- **Tesla deal (the lifeline):** **$16.5B** wafer agreement signed **July 2025**
  (effective 2025-07-24 → end-2033) to fab Tesla's **AI6** at Taylor, TX. Musk:
  the $16.5B is "just the bare minimum"; actual output "likely several times
  higher." [7][8] Note precision for narration: AI5 was originally
  TSMC-only; Musk later confirmed **both AI5 and AI6 will be dual-fabbed at
  TSMC (Arizona) and Samsung (Taylor)** — slightly different physical versions
  of the same design. AI5 volume ~2027, AI6 ~mid-2028. [9]
- **Taylor, TX fab:** investment grown to **>$37B** (from $17B announced 2021);
  timeline slipped 2024 → 2025 → 2H 2026 → now **production 2027**, partly
  because Samsung skipped the planned 4nm and retooled straight to 2nm GAA for
  Tesla. [10][11]
- **Why #2 loses money while #1 prints it:** analyst-estimated operating losses
  for Samsung Foundry + System LSI: **~KRW 2.5T (2023) → ~KRW 5.3T (2024) →
  ~KRW 6T (2025)** — roughly **$10B+ burned over three years** — while TSMC ran a
  **59.9% gross margin** on $122.4B revenue in 2025. [12][13][20]
- Turn hints: quarterly loss narrowed to ~KRW 0.8T by 4Q25; reports of first
  monthly operating profit in ~3 years (late 2025), 4nm yields recovered to
  ~80%; Samsung targets foundry profitability **2027** on Tesla + 2nm ramp.
  [12][14] <!-- VERIFY: "first monthly profit" and 4nm 80% yield are Korean-press reports -->
- **Same company, different fortunes:** the memory side (HBM/DRAM supercycle)
  drove Samsung Electronics to a **record ~KRW 20T quarterly operating profit
  in 4Q25 (+208% YoY)** — memory prints money upstairs while foundry loses it
  downstairs. Memory profits are what let Samsung keep paying leading-edge
  tuition indefinitely. [13]

## GlobalFoundries

- The company that **quit the leading edge on purpose** — and became the field's
  control group.
- **Origin:** spun out of **AMD in March 2009** (AMD's fabs + Abu Dhabi
  sovereign money — ATIC/Mubadala); absorbed Chartered Semiconductor (2010) and
  IBM Microelectronics (2015 — **IBM paid GF ~$1.5B to take its chip
  manufacturing off its hands**). IPO on Nasdaq Oct 2021; Mubadala still
  majority owner. [15] <!-- VERIFY: current Mubadala ownership % -->
- **Aug 27, 2018:** halted its 7nm program (7LP) and all sub-7nm development
  indefinitely. Stated math: ramping 7nm to a viable 40–50k wafers/month would
  cost **$2–4B** with too few customers to earn it back — not a technical
  failure, a business decision. Pivoted to 12nm-and-above + specialty
  (22FDX FD-SOI, RF, embedded memory). [16][17]
- Why it was rational: at 7nm the customer list collapses to a handful of giants
  who all fab at TSMC; being the #3 leading-edge source meant paying
  first-class R&D for economy-class volume. GF chose profitable
  differentiation over prestigious losses.
- **Today's focus:** RF front-ends (smartphone radio content), **silicon
  photonics** (AI datacenter interconnect), automotive, aerospace/defense
  (US Trusted Foundry), power/GaN. Named customers for US reshoring: Apple,
  SpaceX, AMD, Qualcomm, NXP, GM. [18]
- **FY2025:** revenue **$6.79B** (+1% YoY), net income **$888M**, gross margin
  24.9% — small, steady, *profitable*, the thing Samsung Foundry isn't. [19]
- **Malta, NY (Fab 8):** flagship US fab; June 2025 announced **$16B** US
  expansion — >$13B for NY + Vermont fabs, $3B R&D (advanced packaging, silicon
  photonics, GaN); first US silicon-photonics advanced packaging center. [18]
- **MIPS acquisition:** announced July 8, 2025, closed **Aug 13, 2025**, total
  consideration **$226M** ($215M cash) — buys processor/AI IP so GF can sell
  "silicon + IP" bundles for edge/physical-AI; MIPS keeps licensing standalone.
  [21][22]

## SMIC

- China's national-champion foundry; #3 worldwide at **5.1%** share (1Q26). [1]
- **On the US Entity List since Dec 18, 2020** — license required for US tech,
  with **presumption of denial for anything "uniquely required" for ≤10nm** →
  no EUV, ever (ASML already blocked from shipping EUV to China since 2019). [23]
- **The Kirin 9000S shock (Aug 2023):** Huawei Mate 60 Pro launched with a
  HiSilicon Kirin 9000S that TechInsights' teardown showed was fabbed on
  **SMIC 7nm (N+2)** — advanced-node silicon made *without EUV*, using DUV
  immersion multi-patterning. Landed during the US export-control era; became
  the "sanctions failed?" headline worldwide. [24]
- **How, and at what cost:** multi-patterning (double/quadruple exposure) on
  ASML NXT:1980-class DUV tools — each extra patterning pass adds steps, cost,
  and defect opportunities. Estimated SMIC advanced-node yields far below
  TSMC's; 2025 reporting: 7nm yields actively **weigh on SMIC's margins**. [25][26]
  <!-- VERIFY: specific yield %s for SMIC 7nm are analyst guesses (commonly cited ~30-50%); no official figure -->
- **5nm status (as of mid-2026):** in pilot, not proven at scale. Reports:
  SAQP (self-aligned quadruple patterning) DUV flow; yields reported ~20–40%;
  mass-production push targeted 2026, driven by Huawei Ascend AI accelerators;
  Chinese fabs stockpiled ~90+ ArF-immersion tools in 2024 before DUV
  restrictions tightened. 7nm capacity reportedly **doubling in 2026**. [25][26][27]
  <!-- VERIFY: 5nm yield range and 2026 mass-production claim rest on Korean/Chinese press + analyst notes, not disclosures -->
- **Where the money actually is:** mature nodes. FY2025: record revenue
  **$9.33B** (+16.2%), net profit ~**$729M** (+36.3%), gross margin ~21–22%,
  utilization **93.5%**, wafer shipments 9.7M (8-inch equiv). Capex **$8.1B —
  nearly 90% of revenue** — state-backed expansion almost entirely at
  28nm-and-older for consumer, smartphone, auto, power. [25]
  <!-- VERIFY: exact revenue split by node/geography (China ~80%+ of revenue) before quoting specifics -->
- Frame: SMIC's whole year of revenue ($9.33B) ≈ **~4 weeks of TSMC** ($122.4B/yr). [20][25]

## UMC

- Taiwan's *other* foundry (founded 1980, Taiwan's first semiconductor company);
  #4 at **3.9%** share. [1] Gave up the leading-edge race years before GF —
  stopped independent sub-14nm development (announced 2018) to focus on
  mature-node returns. <!-- VERIFY: exact wording/date of UMC's 2017-18 decision to cap node development -->
- **FY2025:** revenue **NT$237.5B (~$7.6B)**, +2.3% YoY; net income NT$41.7B
  (EPS NT$3.34, down from 3.80 — mature-node pricing pressure). [28]
- Sweet spot: **22/28nm** — 36% of 4Q25 revenue, 22nm up 31% QoQ (display
  drivers, PMICs, MCUs, RF, auto). Mature-node supply structurally tightening
  as everyone's capex goes to leading edge. [28]
- **GF–UMC merger talk:** early 2025 reports (Nikkei/DigiTimes) of a GF
  takeover study — internally dubbed **"Project Ultron"** — to build a US-led
  mature-node giant vs China. UMC publicly denied active talks (Apr 1, 2025);
  DigiTimes reported talks stalled. **No deal as of 2026-07.** [29][30][31]
  <!-- VERIFY: any revival of talks after April 2025 before recording -->
- Also has a tie-up with **Intel** (announced Jan 2024): co-developing a 12nm
  platform on Intel's Arizona fabs, production targeted ~2027 — UMC's cheap way
  to get below 22nm without building the fab. <!-- VERIFY: current status of UMC-Intel 12nm program -->

## Rapidus

- Japan's 2nm moonshot: founded **Aug 2022**, backed by eight Japanese giants
  (Toyota, Sony, NTT, NEC, SoftBank, Denso, Kioxia, MUFG) who put in a symbolic
  **~¥7.3B (~$50M)** — the real money is government. [32]
- **IBM partnership (Dec 2022):** licenses IBM's 2nm nanosheet GAA research
  (the 2021 Albany breakthrough); ~150 Rapidus engineers trained at Albany.
  Rapidus industrializes what IBM invented. [32][33]
- **IIM-1 fab, Chitose, Hokkaido:** Japan's **first EUV tool** (NXE:3800E)
  installed from Dec 2024; **pilot line launched April 1, 2025**; first 2nm GAA
  prototype transistors confirmed working mid-2025, hitting planned electrical
  characteristics; first 2nm PDK released to early customers early 2026. [32][34][35]
- **Target: mass production 2H fiscal 2027**, starting ~6,000 wafers/month,
  ramping toward 20–25k. One fab, one node, first-generation team. [36]
- **Government funding scale:** cumulative state support **~¥2.35T (~$16B)** by
  early 2026, plus ~**¥1T more pledged through FY2027**; Feb 2026 ¥267.6B
  public-private round; June 2026 ¥150B IPA injection. Government targets:
  profitability FY2030, IPO FY2031. Total project cost estimated **~¥5–7T**.
  [34][35][37][38] <!-- VERIFY: cumulative totals differ by source (¥2.35T vs ¥2.9T) depending on subsidies-vs-equity counting -->
- **Honest odds:** working pilot transistors ≠ economic yield at volume. No
  anchor customer signed as of mid-2026 (company cites "~60 potential
  customers"); TSMC's 2nm was already ramping in 2025 with Apple-class volume;
  Rapidus must land yield, cost, *and* customers simultaneously — a thing no
  new entrant has done at the leading edge since the 1990s. Strategy: niche
  low-volume/fast-turnaround AI chips ("rapid" single-wafer processing), not
  head-on TSMC competition. [36] <!-- VERIFY: customer-signing status just before recording; this moves fast -->

## Why #2 keeps failing (the learning-curve trap)

- Leading-edge economics are **winner-compounds**: yield improves with
  cumulative wafer volume (Wright's-law learning). Whoever runs the most wafers
  learns fastest → lowest cost → wins the next big customer → runs even more
  wafers. The gap *widens* every quarter by default.
- Node economics: a leading-edge node costs on the order of **$20–30B+**
  (R&D + fab) per generation. <!-- VERIFY: per-node cost range framing --> Amortizable
  only at flagship volume. TSMC has Apple + Nvidia underwriting every ramp; #2
  gets whatever's left, runs half-empty, and books losses — which then starve
  the *next* node's R&D. That's the spiral.
- The scoreboard says it plainly: TSMC 2025 gross margin **59.9%** [20];
  Samsung Foundry ~**KRW 14T** cumulative losses 2023–25 [12]; GF *quit* in
  2018 and now reliably earns ~25% gross margin [19]. Exiting the race was the
  profitable move; staying required a memory business or a government to pay
  for it.
- The field has consolidated exactly as this logic predicts: from **dozens of
  leading-edge manufacturers in 2001 to 2–3 today**. <!-- VERIFY: exact count for the classic "~25 at 130nm → 3 at 3nm" funnel chart before using specific numbers -->
- Today's second sources survive only on **strategic subsidy, not economics**:
  Samsung is carried by memory profits + a Tesla anchor deal; SMIC by Beijing;
  Rapidus by Tokyo; Intel Foundry by Washington (own pack). Customers *say*
  they want a second source; they buy TSMC.
- The one honest exception: at **mature nodes** competition works fine (UMC,
  GF, HuaHong all profitable) — because the learning curve there flattened out
  years ago. The monopoly problem is specifically a *frontier* problem.

## Risks (for narration honesty)

- All market-share figures are **revenue** share — TSMC's premium pricing
  inflates its share vs a wafer-count view; the physical gap is smaller than 11×.
- Samsung/SMIC/Rapidus yield numbers are leaks, teardowns, and analyst
  estimates — none are official; treat every yield % as "reported."
- Samsung's 2026 recovery narrative (50%+ SF2 yields, Tesla ramp) could age
  fast in either direction before recording — re-check latest quarter.
- SMIC's 5nm story is the most contested territory in the whole episode:
  claims serve political narratives on both sides.
- GF–UMC consolidation, if revived, reshuffles the whole "everyone else" tier;
  likewise Chinese mature-node overcapacity is compressing UMC/GF pricing.
- Rapidus status changes quarterly; verify pilot-line/customer news within a
  month of recording.

## Fact ammo — lines that land

- **TSMC holds 72.3% of the foundry market. Number two — Samsung, one of the
  biggest companies on Earth — has 6.5%. That's an 11-to-1 gap.** [1]
- **Being #1 in foundry earned TSMC a 59.9% gross margin in 2025. Being #2
  cost Samsung roughly $10B in losses over three years. Same industry, same
  years.** [12][20]
- **Samsung beat TSMC to the GAA transistor by three years — and lost the node
  anyway.** First 3nm GAA in June 2022; yields reportedly ~20%; Qualcomm took
  its flagships to TSMC's older-architecture FinFET instead. [3][4]
- **SMIC's entire record year — $9.3 billion — is about four weeks of TSMC.** [20][25]
- **In 2015 IBM paid GlobalFoundries $1.5B to take its chip factories. Chip
  manufacturing was such a bad business you had to pay someone to take it —
  ten years before it became the most strategic industry on Earth.** [15]
- **Japan has put roughly ¥2.35 trillion (~$16B) of public money behind
  Rapidus — a company that has never sold a chip.** [34][37]
- **The Huawei Mate 60 Pro (Aug 2023): a 7nm Chinese chip, made with machines
  the export controls allowed — the single most famous headline against the
  sanctions regime.** [24]

---

## Sources

1. TrendForce press release, "Top 10 Foundries 3.7% QoQ Revenue Growth in 1Q26" (2026-06-12) — https://www.trendforce.com/presscenter/news/20260612-13095.html
2. TrendForce press release, "AI Demand Drives 4Q25 Global Top 10 Foundries Revenue Up 2.6% QoQ" (2026-03-12) — https://www.trendforce.com/presscenter/news/20260312-12965.html
3. TechPowerUp, "Samsung's Second-Gen 3nm GAA Process Shows 20% Yields" — https://www.techpowerup.com/328680/samsungs-second-gen-3-nm-gaa-process-shows-20-yields-missing-production-goals
4. Wccftech, "Samsung 3nm GAA unstable yields driving customers away" — https://wccftech.com/samsung-3nm-gaa-unstable-yields-driving-customers-away-resulting-in-millions-lost/
5. TrendForce, "Samsung Unveils Exynos 2600: Industry-First 2nm GAA AP" (2025-12-19) — https://www.trendforce.com/news/2025/12/19/news-samsung-officially-unveils-exynos-2600-industry-first-2nm-gaa-ap-with-113-ai-performance-uplift
6. SamMobile, "Samsung has improved the yield of 2nm chips like Exynos 2600" (2026-01-15) — https://www.sammobile.com/2026/01/15/samsung-improves-2nm-chip-yield-exynos-2600/
7. CNN Business, "Tesla and Samsung sign $16.5 billion chip deal" (2025-07-28) — https://www.cnn.com/2025/07/28/business/tesla-samsung-chip-deal
8. KED Global, "Samsung clinches $16.5 billion chipmaking deal from Tesla" (2025-07-28) — https://www.kedglobal.com/korean-chipmakers/newsView/ked202507280001
9. Tom's Hardware, "Musk confirms Tesla AI5 and AI6 will be made at both Samsung and TSMC" — https://www.tomshardware.com/tech-industry/semiconductors/musk-confirms-tesla-ai5-and-ai6-will-be-made-at-samsung-and-tsmc
10. TrendForce, "Samsung Accelerates U.S. Expansion as Taylor Fab Targets 2027 Start" (2026-06-02) — https://www.trendforce.com/news/2026/06/02/news-samsung-accelerates-u-s-expansion-as-taylor-fab-targets-2027-start-hq-reportedly-moves-to-texas-in-2026/
11. Samsung Semiconductor, Taylor US fab page (">$37B investment") — https://semiconductor.samsung.com/sas/company/taylor/
12. TrendForce, "Samsung Reportedly Eyes Foundry Profitability by 2027" (2025-11-13, incl. 2023–25 loss estimates) — https://www.trendforce.com/news/2025/11/13/news-samsung-reportedly-eyes-foundry-profitability-by-2027-with-20-market-share/
13. TrendForce, "Samsung's Q4 Profit Soars 208% to Record 20 Trillion Won on Memory Rally and Foundry Turnaround" (2026-01-08) — https://www.trendforce.com/news/2026/01/08/news-samsungs-q4-profit-soars-208-to-record-20-trillion-won-on-memory-rally-and-foundry-turnaround/
14. SamMobile, "Samsung's chipmaking division posts first monthly profit in three years" — https://www.sammobile.com/news/samsung-foundry-posts-first-profit-three-years/
15. Wikipedia, GlobalFoundries (AMD spin-off 2009, Chartered 2010, IBM Micro 2015, IPO 2021) — https://en.wikipedia.org/wiki/GlobalFoundries
16. EE Times, "GlobalFoundries Halts 7nm Work" (2018-08-27) — https://www.eetimes.com/globalfoundries-halts-7nm-work/
17. IEEE Spectrum, "GlobalFoundries Halts 7nm Chip Development" ($2–4B ramp math) — https://spectrum.ieee.org/globalfoundries-halts-7nm-chip-development
18. GlobalFoundries press release, "$16B U.S. Investment to Reshore Essential Chip Manufacturing" (2025-06-04) — https://gf.com/gf-press-release/globalfoundries-announces-16b-u-s-investment-to-reshore-essential-chip-manufacturing-and-accelerate-ai-growth/
19. GlobalFoundries, "Fourth Quarter and Fiscal Year 2025 Financial Results" — https://www.nasdaq.com/press-release/globalfoundries-reports-fourth-quarter-2025-and-fiscal-year-2025-financial-results
20. TSMC 4Q25/FY2025 results (Form 6-K: FY25 revenue $122.42B, GM 59.9%) — https://www.sec.gov/Archives/edgar/data/1046179/000104617926000008/a4q25e_withguidancexfinal.htm
21. GlobeNewswire, "GlobalFoundries Completes Acquisition of MIPS" (2025-08-14) — https://www.globenewswire.com/news-release/2025/08/14/3133393/0/en/GlobalFoundries-Completes-Acquisition-of-MIPS.html
22. GlobalFoundries Form 6-K Q3 2025 (MIPS consideration $226M) — https://www.sec.gov/Archives/edgar/data/1709048/000170904825000071/gfs-20250930.htm
23. US Dept. of Commerce, "Commerce Adds China's SMIC to the Entity List" (2020-12-18) — https://2017-2021.commerce.gov/news/press-releases/2020/12/commerce-adds-chinas-smic-entity-list-restricting-access-key-enabling.html
24. TechInsights, "TechInsights Finds SMIC 7nm (N+2) in Huawei Mate 60 Pro" (2023-09) — https://www.techinsights.com/blog/techinsights-finds-smic-7nm-n2-huawei-mate-60-pro
25. TrendForce, "SMIC Posts Record $9.3B in 2025 Sales; 7nm Yields Reportedly Weigh on Margins" (2026-02-11) — https://www.trendforce.com/news/2026/02/11/news-smic-posts-record-9-3b-in-2025-sales-7nm-yields-reportedly-weigh-on-margins/
26. Tom's Hardware, "SMIC and Huawei could use quadruple patterning for China-made 5nm chips" — https://www.tomshardware.com/tech-industry/semiconductors/smic-and-huawei-could-use-quadruple-patterning-for-chinese-5nm-chips-report
27. TrendForce, "SMIC 1H25 Net Profit Rises 35.6%, 7nm Capacity Reportedly to Double in 2026" (2025-08-29) — https://www.trendforce.com/news/2025/08/29/news-smic-1h25-net-profit-rises-35-6-7nm-capacity-reportedly-to-double-in-2026/
28. Investing.com, "UMC Q4 2025 slides: Revenue grows 4.5%, profit drops 33%" — https://www.investing.com/news/company-news/umc-q4-2025-slides-revenue-grows-45-profit-drops-33-as-stock-tumbles-93CH-4469548
29. Tom's Hardware, "GlobalFoundries mulls UMC takeover in effort dubbed 'Project Ultron'" — https://www.tomshardware.com/tech-industry/globalfoundries-mulls-umc-takeover-in-effort-dubbed-project-ultron
30. TrendForce, "UMC Denies GlobalFoundries Merger Rumors" (2025-04-01) — https://www.trendforce.com/news/2025/04/01/news-umc-denies-globalfoundries-merger-rumors-amid-u-s-manufacturing-push-china-competition/
31. DigiTimes, "UMC-GlobalFoundries merger unlikely: talks stall" (2025-04-02) — https://www.digitimes.com/news/a20250402PD200/merger-asia-umc-nikkei-globalfoundries.html
32. Wikipedia, Rapidus (founding, eight backers, EUV install, pilot line April 2025) — https://en.wikipedia.org/wiki/Rapidus
33. IBM Newsroom, "IBM and Rapidus Form Strategic Partnership" (2022-12-12) — https://newsroom.ibm.com/2022-12-12-IBM-and-Rapidus-Form-Strategic-Partnership-to-Build-Advanced-Semiconductor-Technology-and-Ecosystem-in-Japan
34. TrendForce, "Japan Reportedly Adding ¥1 Trillion in Rapidus Support; FY2030 Profitability, FY2031 IPO" (2025-11-24) — https://www.trendforce.com/news/2025/11/24/news-japan-reportedly-adding-%C2%A51-trillion-in-rapidus-support-as-it-targets-fy2030-profitability-fy2031-ipo/
35. Rapidus, "Secures 267.6 Billion Yen in Funding from Japan Government and Private Sector" (2026-02) — https://www.rapidus.inc/en/news_topics/information/rapidus-secures-267-6-billion-yen-in-funding-from-japan-government-and-private-sector-companies/
36. Tom's Hardware, "Rapidus fab roadmap examined — one Hokkaido fab, a 2027 deadline, 60 potential customers" — https://www.tomshardware.com/tech-industry/semiconductors/rapidus-fab-roadmap-examined
37. Nikkei Asia, "Japan pledges additional $6.4bn in support for chipmaker Rapidus" — https://asia.nikkei.com/business/tech/semiconductors/japan-pledges-additional-6.4bn-in-support-for-chipmaker-rapidus
38. Rapidus, "Completes 150 Billion Yen Funding Round from Japan Government (IPA)" (2026-06-05) — https://www.rapidus.inc/en/news_topics/information/20260605-2/
