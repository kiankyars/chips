# Research — TSMC

As-of: 2026-07

Fact pack. Ammunition only, no prose. `[n]` → source list at bottom.
`<!-- VERIFY -->` = not fully confident, check before recording.

## What they are
- Taiwan Semiconductor Manufacturing Company (Hsinchu, Taiwan). The world's
  first and largest **pure-play foundry**: it manufactures chips designed by
  other companies and **never sells a chip under its own name**. [28][29]
- Customers send in designs; TSMC returns processed wafers. What it actually
  sells: a process technology + PDK (process design kit) + qualified IP
  libraries + yield. The customer owns the design; TSMC owns the recipe.
- Makes the silicon inside ~every flagship phone, every Nvidia AI GPU, every
  AMD CPU/GPU, Apple's entire silicon line. Roughly **90% of the world's most
  advanced chips (≤7nm-class)** are fabbed by this one company. [34]
  <!-- VERIFY: the "90%" figure is ubiquitous in press/officials but contested on definitions — see [35] for the dissent (if you count by capacity incl. Intel/Samsung internal, TSMC's share of "advanced" is lower). Direction of the lie: for chips sold on the merchant market at ≤7nm, ~90% is fair. -->
- Scale, Q1 2026: **72.3%** of global top-10 foundry revenue — ~11× the #2
  (Samsung, 6.5%). [7][37]

## History in 5 bullets (the radical idea, 1987)
- **1985:** Taiwan's government (minister K.T. Li) recruits Morris Chang — 54,
  Chinese-born, MIT/Stanford-trained, **25 years at Texas Instruments** where he
  ran the worldwide semiconductor business and mastered learning-curve pricing —
  to head the ITRI research institute and build Taiwan a chip industry. [27][28]
- **21 Feb 1987:** TSMC incorporated in Hsinchu. Startup capital ~NT$1.4B
  (~US$50M-class): Taiwan's Executive Yuan Development Fund **48.3%**, Philips
  **27.5%**, the rest arm-twisted from Taiwanese industrial families (no US chip
  company would invest). First fab leased from ITRI; process tech licensed from
  Philips, 2–3 generations behind the leaders. [28][29] <!-- VERIFY: exact initial capital figure varies by source (NT$1.3–1.4B); ownership splits are well attested. -->
- **The radical part:** in 1987 every serious chip company was an IDM — design
  *and* fab under one roof ("real men have fabs" — Jerry Sanders, AMD). Chang's
  insight: fabs were becoming so expensive that fabrication itself could be the
  product. Manufacture for everyone, compete with no one — the customer's trust
  IS the business model. [28][29]
- **The foundry created the fabless industry:** Nvidia (founded 1993), Qualcomm,
  Broadcom, Marvell, later Apple silicon — none of them ever needed to build a
  fab because TSMC existed. Jensen Huang's startup got its start when Morris
  Chang personally answered his letter asking for capacity. <!-- VERIFY: the Jensen letter / Chang phone-call anecdote is oft-told (by both men) but check wording before using. -->
- **The flip to leadership:** listed on TWSE 1994, first Taiwanese firm on NYSE
  1997; won sole-source on iPhone processors (mid-2010s); when Intel stalled at
  10nm/7nm (~2018–2020), TSMC took the outright technology lead at 7nm/5nm and
  has held it since. Chang retired 2018; Nvidia's AI boom made his machine the
  most important company in the world economy. [9][28]

## The moat & market share
- **Total foundry share: 72.3%** of top-10 foundry revenue in Q1 2026 (record
  industry quarter, US$47.95B), up from 70.4% in Q4 2025. Samsung 6.5%, SMIC
  5.1%. [7][8]
- **Leading edge: ~90%+ of ≤7nm-class merchant output**; at ≤5nm and at 3nm the
  practical share of the market is higher still — Apple, Nvidia, AMD, Qualcomm,
  MediaTek, Broadcom all fab their flagship silicon at TSMC. [34][9]
  <!-- VERIFY: precise ≤5nm % — analysts put TSMC at ~90–95% of advanced-node (AI-capable) production; no single audited number exists. -->
- Why it approaches 90%+ at the edge:
  - Only three companies on Earth still attempt leading-edge logic (TSMC,
    Samsung, Intel). Samsung's yields at 3nm GAA cost it flagship customers;
    Intel's capacity is mostly for Intel. <!-- VERIFY: Samsung 3nm yield reporting is all unofficial. -->
  - **Yield learning curve compounds:** TSMC runs more leading-edge wafers than
    everyone else combined → more defect data per week → faster yield ramp →
    better economics at the same price → wins the next design → more wafers.
    Scale is self-reinforcing.
  - **Ecosystem lock-in:** Open Innovation Platform (since 2008) — PDKs, EDA
    flows (Synopsys/Cadence), validated IP (Arm etc.). A design taped out to a
    TSMC process is expensive to port; the whole industry's toolchains assume
    TSMC first.
  - **Trust:** pure-play means Apple's and Qualcomm's and Nvidia's secrets sit
    in the same fabs without conflict — Samsung (competes in phones/memory)
    structurally can't offer that.
  - **Scale of spend:** 2025 capex **US$40.9B** [2]; 2026 budget **US$52–56B**
    [2]; R&D ~US$8B/yr <!-- VERIFY: 2025 R&D ≈ NT$250B (~US$8B) — check annual report -->.
    Nobody loses money to catch a competitor spending that.
- Customer concentration (analyst estimates from supply-chain data, FY2025):
  **Nvidia ~19%** of revenue (~US$23.4B — overtook Apple for the first time in
  over a decade), **Apple ~17%** (NT$645B). [9][10] Next tier: MediaTek,
  Qualcomm, Broadcom, AMD roughly ~5–9% each. <!-- VERIFY: next-tier splits are pre-2025 analyst projections (MediaTek ~9%, Qualcomm ~8%, AMD ~7%); TSMC only discloses anonymized >10% customers. -->
- Years-to-replace (scoreboard line): realistically **a decade+** — you'd need
  Intel-scale fabs, ASML allocation, the PDK/IP ecosystem, and ~30 years of
  accumulated yield learning.

## Financials
### FY2025 (record, AI supercycle) [1][2]
- Revenue: **US$122.0B**, **+35.9% YoY** (NT$3.8T, +31.6%).
- Gross margin: **59.9%** (+3.8pp); operating margin **50.8%**; ROE **35.4%**.
- EPS NT$66.25, **+46.4% YoY**.
- Capex: **US$40.9B** (NT$1.3T). Free cash flow NT$1.0T. Operating cash flow NT$2.3T.
- Cash & marketable securities: **US$98B** (NT$3.1T).
- Dividend: NT$18/share paid in 2025 → "at least NT$23" in 2026. [2]
- Node mix FY2025 (wafer revenue): **3nm 24%, 5nm 36%, 7nm 14%** → advanced
  (≤7nm) = **74%** (69% in 2024). [2]
- Platform mix FY2025: **HPC 58%** (+48% YoY), smartphone 29%, IoT 5%,
  automotive 5%, DCE 1%. [2]
- **AI accelerator revenue = high-teens % of 2025 revenue** (roughly doubled in
  2025). [2]
- Q4 2025 detail: rev US$33.73B, GM **62.3%**, net income NT$505.7B (+35% YoY),
  net margin 48.3%. [1]

### 2026 so far (freshest numbers)
- **Q1 2026:** revenue **US$35.90B** (+40.6% YoY), gross margin **66.2%**,
  operating margin 58.1%, **net margin 50.5%** — net income NT$572.5B, +58% YoY.
  Node mix: 3nm 25%, 5nm 36%, 7nm 13% (advanced 74%). **HPC hit 61% of
  revenue.** [3][6][36]
- **Q2 2026 guidance:** revenue **US$39.0–40.2B**, GM 65.5–67.5%, OM 56.5–58.5%. [3]
- Monthly revenue (TSMC reports monthly; unaudited) [4][5]: Jan NT$401.3B
  (+36.8% YoY) · Feb NT$317.7B (+22.2%) · Mar NT$415.2B (+45.2%) · Apr NT$410.7B
  (+17.5%) · May NT$417.0B (+30.1%). **Jan–May cumulative NT$1,961.8B, +30.0%
  YoY.** June report due 13 Jul 2026 (pushed from 10 Jul by a typhoon day-off). [4]
- **FY2026 guidance:** revenue **+close to 30%** in USD; capex **US$52–56B**
  (70–80% leading edge, ~10% specialty, 10–20% advanced packaging/mask);
  depreciation +high-teens %; overseas-fab gross-margin dilution 2–3pp; foundry
  2.0 industry +14%. [2]
- **Long-term guidance (raised Jan 2026):** AI-accelerator revenue CAGR
  2024–2029 **"mid-to-high-fifties %"** (was mid-40s); overall revenue CAGR
  **approaching 25%** in USD 2024–2029. [2]

## The tech (what a foundry actually sells; node roadmap)
- Node names are **marketing labels, not measurements** — nothing on an "N2"
  chip is 2nm. Since ~the late 1990s node names track density/power/perf
  generations, not gate length. "A16" = angstrom-era branding (1.6nm-class).
  Hedge to voice: the names lie about geometry but honestly rank generations.
- **N3** (3nm, FinFET): ramped from 6% of wafer revenue (Q3 2023) to ~24–28% of
  wafer revenue through 2025–26 — TSMC's fastest-monetizing node ever; N3 gross
  margin crosses corporate average during 2026. [2][3]
- **N2** (2nm): TSMC's **first gate-all-around (GAA) nanosheet** node. Entered
  **high-volume manufacturing Q4 2025** at Hsinchu (Fab 20) + Kaohsiung (Fab 22)
  "with good yield"; faster ramp through 2026 on smartphone + HPC/AI demand.
  vs N3E: ~10–15% faster iso-power or ~25–30% lower power. [2][11][12]
- N2 capacity ramp: ~50k wafers/month exiting 2025 → **~120–130k wpm by end-2026**
  (some estimates 140k) across Fab 20 (Baoshan P1/P2) + Fab 22 (Nanzih P1–P3). [13]
  <!-- VERIFY: capacity figures are supply-chain estimates, not TSMC-official. -->
- **N2P** (perf/power enhancement): volume production **H2 2026**. [2]
- **A16** (1.6nm-class): adds **Super Power Rail = backside power delivery**
  (power wiring moved under the transistors — frees routing, feeds dense HPC).
  Jan 2026 call: "volume production on track for H2 2026" [2]; April 2026
  symposium coverage now frames meaningful volume as **2027** (Fab 22 P3). [14]
  <!-- VERIFY: treat A16 as "late 2026 start, real volume 2027". -->
- **A14** (1.4nm-class): 2nd-gen GAA, **production 2028**; ~10–15% perf or
  ~25–30% power vs N2; A14 launches *without* backside power — **A14P** adds it
  in 2029. **A12/A13 announced for ~2029**, still **without High-NA EUV**
  (TSMC keeps squeezing 0.33-NA EUV multi-patterning — capex discipline vs
  Intel's High-NA bet). [14][15]
- Cost physics: capex to build 1k wpm of N2 is "substantially higher" than N3,
  and A14 higher still (CFO, Jan 2026). [2]

## Packaging (the second product line — and the AI bottleneck)
- **Why packaging gates AI supply:** every Nvidia/AMD AI accelerator = big logic
  die(s) + HBM memory stacks bonded on a silicon interposer — TSMC's **CoWoS**
  (Chip-on-Wafer-on-Substrate). 2023–25, CoWoS capacity — not wafer capacity —
  was the binding constraint on world GPU output. Nvidia's allocation of CoWoS
  ≈ Nvidia's shippable revenue.
- Capacity: ~**75k wpm CoWoS exiting 2025** → est. **~115–140k wpm by end-2026**;
  supply-demand gap seen narrowing from ~20% to ~10% during 2026 — still short. [16][17]
  <!-- VERIFY: all CoWoS capacity numbers are TrendForce/supply-chain estimates; TSMC doesn't publish them. -->
- **SoIC** (3D die stacking, used in AMD MI300/MI350-class parts) ramping next;
  CoPoS (panel-level, bigger-than-reticle packages) in development; new **AP7
  Chiayi** complex slated to become the world's largest advanced-packaging hub. [16][17]
- Business size: advanced packaging & testing = **slightly over 10% of 2025
  revenue** (8% in 2024), heading to low-teens % in 2026; 10–20% of the
  2026 capex budget. [2]

## Global footprint & Taiwan risk
### Arizona (the big bet)
- Committed investment: **US$165B** — six fabs, two advanced-packaging plants,
  an R&D center; TSMC's original $65B plan + $100B added March 2025. Largest
  foreign direct investment in US history (TSMC's claim). [18][19]
- Status: **Fab 1 in HVM since Q4 2024 on N4 — yields comparable to Taiwan
  fabs** [2][18]; Fab 2 construction complete, tool move-in 2026, HVM pulled
  forward to **H2 2027** (N3) [2][20]; Fab 3 (N2/A16) under construction,
  targeting end of decade; permits filed for Fab 4 + first US advanced-packaging
  fab; bought 902 more acres (US$197M) → >2,000-acre "independent **GIGAFAB
  cluster**". [2][19]
- Arizona subsidiary turned profitable: **US$514M profit in Q1 2026 alone**,
  more than all of 2025. [21]
- Reported (unconfirmed) long-term framework of up to **~$465B** US expansion
  tied to tariff negotiations. <!-- VERIFY: press reports only; TSMC has not confirmed a $465B figure. -->
- Eventually ~**30% of ≤2nm capacity** planned to sit in Arizona (C.C. Wei).
  <!-- VERIFY: statement from March 2025 announcement; re-check exact wording. -->
### Japan & Germany (specialty, not leading edge)
- **Kumamoto (JASM, majority TSMC + Sony/Denso/Toyota):** Fab 1 in volume
  production since late 2024, "very good yield" (12/16/22/28nm specialty). Fab 2
  construction started Oct 2025 (~US$13.9B project total); reports of re-scoping
  toward 6nm/4nm and schedule slip — production ~end-2027 at earliest. [2][22][23]
- **Dresden (ESMC, TSMC 70% + Bosch/Infineon/NXP 10% each):** €10B+ fab for
  automotive/industrial (12/16/22/28nm), ~40k wpm target; structure topped out
  late 2025, equipment move-in **H2 2026**, production ~late 2027. [24][39]
### What stays in Taiwan
- **The leading edge.** N2 HVM exists only in Hsinchu + Kaohsiung; multiple
  further 2nm phases plus A14 are Taiwan-first; up to **10 fabs under
  construction or starting in Taiwan in 2026 alone**. Arizona gets N2/A16 only
  years after Taiwan ramps. [2][13][38]
### Taiwan concentration risk & resilience
- Single-point-of-failure: ~90% of ≤7nm-class chips from one island 130km off
  the Chinese coast [34] — the deepest chokepoint in the whole course except EUV.
- **Earthquake track record:** 3 Apr 2024 M7.4 Hualien quake (strongest in 25
  years) — >70% of fab tools recovered within **10 hours**, full operation in
  ~3 days, quarter's loss only **NT$3B** (~US$92M). Jan 2025 M6.4 quake cost
  NT$5.3B net of insurance. Fabs use base isolation/dampers + automatic tool
  shutdown; quakes so far = rounding errors, not catastrophes. [31][32][33]
- **Silicon shield, one bullet:** the theory that Taiwan's chip indispensability
  deters invasion (attack = destroying what you want + global depression) — and
  its dark twin: the same indispensability is why Washington *and* Beijing both
  want the capability moved off the island. [34]

## Pricing power
- 2026: reported price hikes of **~5–10% across all advanced nodes** (N5/N4/N3
  and up) — the nodes that are 74% of wafer revenue; framed as paying for
  overseas fabs, tariff exposure, and NT$ appreciation. Reports of planned
  increases in 2nm pricing for **four consecutive years** on AI-driven tightness. [25][26][27]
- Reported leading-edge wafer prices: **N3 ~US$20k**, **N2 ~US$30k**,
  **A16 ~US$45k** per 300mm wafer (vs ~$18k-class for N4/N5). [27]
  <!-- VERIFY: wafer prices are never officially disclosed; these are widely-reported supply-chain figures — use "reportedly". -->
- The tell in the P&L: gross margin 59.9% (2025) → **66.2% (Q1 2026)** while
  spending $40B+/yr on capex — customers are absorbing the increases. [1][3]

## Risks
- **AI concentration:** HPC = 61% of Q1 2026 revenue; top two customers ≈ 36%
  of revenue; an AI-capex digestion year hits TSMC's growth model directly
  (C.C. Wei publicly acknowledges the "AI bubble" question, argues demand is
  real and capacity-constrained). [2][6][9]
- **Geopolitics:** China–Taiwan is the existential tail risk; US tariffs/export
  rules are the chronic one (2026 guidance explicitly flags tariff uncertainty). [2]
- **Margin drag from going global:** overseas fabs dilute gross margin 2–3pp
  per year for 2026, trending to 3–4pp later in the decade as Arizona scales. [2]
  <!-- VERIFY: the 3–4pp later-years figure is from earlier calls; 2026's 2–3pp is confirmed. -->
- **Cost curve:** N2/A14 capex-per-wafer-capacity "substantially higher" each
  node; depreciation +high-teens % in 2026 — pricing power must keep outrunning it. [2]
- **Competition (real but behind):** Intel 18A ramping with US-government
  backing; Samsung 2nm ramping with marquee win(s) (Tesla). Neither threatens
  the ecosystem moat this decade — the risk is subsidy-distorted competition,
  not technical leapfrog. <!-- VERIFY: Intel/Samsung 2026 ramp status + Tesla-Samsung deal terms from memory; check before use. -->
- Taiwan physical constraints: power, water, land, engineers — 10 simultaneous
  fab projects strain all four. [38]

## Fact ammo — lines that land
- **One company, one island, ~90% of the world's most advanced chips** — and
  72.3% of the entire global foundry market, 11× the size of #2 Samsung. [7][34][37]
- **In Q1 2026 TSMC kept 50.5 cents of every revenue dollar as net profit** —
  66.2% gross margin — margins software companies envy, earned in the most
  capital-intensive factories ever built. [3]
- **Nvidia dethroned Apple as customer #1 in 2025** (~19% vs ~17% of revenue)
  — the AI era changing the guard inside TSMC's ledger after more than a decade
  of iPhone primacy. [9][10]
- **A single 30cm wafer of A16 silicon reportedly sells for ~$45,000** — the
  price of a car for a dinner-plate-sized disc, and customers queue for it. [27]
- **Capex 2026: $52–56B — roughly $150M every single day** — more than most
  competitors' total annual revenue, spent every year, mostly on machines that
  live in Taiwan. [2]
- **After Taiwan's strongest earthquake in 25 years, 70% of TSMC's tools were
  back online within 10 hours**; the quarter's damage: NT$3B, a ~0.1%-of-revenue
  rounding error. The fabs are engineered like the national asset they are. [31][33]

---

## Sources
1. TSMC 4Q25 earnings release (Form 6-K, 15 Jan 2026) — https://www.sec.gov/Archives/edgar/data/1046179/000104617926000008/a4q25e_withguidancexfinal.htm
2. TSMC Q4 2025 earnings call transcript, 15 Jan 2026 (CFO Wendell Huang / CEO C.C. Wei; incl. FY2025 recap, 2026 guidance, AI CAGR, Arizona/N2/A16 status) — https://investor.tsmc.com/english/encrypt/files/encrypt_file/reports/2026-01/51d09df96cd89ac19d65af39032b038dc2896a24/TSMC%204Q25%20Transcript.pdf
3. TSMC 1Q26 earnings release (Form 6-K, Apr 2026) — https://www.sec.gov/Archives/edgar/data/1046179/000104617926000199/a1q26e_withguidancexfinal.htm
4. TSMC IR, 2026 monthly revenue — https://investor.tsmc.com/english/monthly-revenue/2026
5. TSMC PR, May 2026 revenue report — https://pr.tsmc.com/english/news/3320
6. Investing.com, "TSMC Q1 2026 slides: margins soar past guidance on HPC demand" (HPC 61%) — https://www.investing.com/news/company-news/tsmc-q1-2026-slides-margins-soar-past-guidance-on-hpc-demand-93CH-4617201
7. Mark Lapedus / Semiecosystem, "TSMC Gains Foundry Share in Q1 '26" (TrendForce data: TSMC 72.3%, Samsung 6.5%, SMIC 5.1%, top-10 $47.95B) — https://marklapedus.substack.com/p/tsmc-gains-foundry-share-in-q1-26
8. TrendForce press release, 4Q25 global top-10 foundries — https://www.trendforce.com/presscenter/news/20260312-12965.html
9. CNBC, "Nvidia set to supplant Apple as TSMC's largest customer" (26 Jan 2026) — https://www.cnbc.com/2026/01/26/nvidia-set-to-supplant-apple-as-tsmcs-largest-customer.html
10. NotebookCheck, "Nvidia reportedly overtook Apple to become TSMC's biggest customer in 2025" (19% vs 17%; $23.4B) — https://www.notebookcheck.net/Nvidia-reportedly-overtook-Apple-to-become-TSMC-s-biggest-customer-in-2025-due-to-exceptional-Data-Center-revenue-growth.1208840.0.html
11. Tom's Hardware, "TSMC begins quietly volume production of 2nm-class chips" (first GAA; +15% iso-power) — https://www.tomshardware.com/tech-industry/semiconductors/tsmc-begins-quietly-volume-production-of-2nm-class-chips-first-gaa-transistor-for-tsmc-claims-up-to-15-percent-improvement-at-iso-power
12. TechSpot, "TSMC's 2nm N2 process officially enters volume production" (Fab 22 Kaohsiung) — https://www.techspot.com/news/110755-tsmc-2nm-n2-process-officially-enters-volume-production.html
13. TrendForce, "TSMC sets up 2nm pilot line, aims for 130,000 wafers monthly by 2026" — https://www.trendforce.com/news/2025/01/01/news-tsmc-sets-up-2nm-pilot-line-aims-for-130000-wafers-monthly-by-2026/
14. Tom's Hardware, "TSMC unveils process technology roadmap through 2029 — A12, A13, N2U announced, A16 slips to 2027" (Apr 2026 symposium) — https://www.tomshardware.com/tech-industry/semiconductors/tsmc-unveils-process-technology-roadmap-through-2029-a12-a13-n2u-announced-a16-slips-to-2027
15. Tom's Hardware, "TSMC unveils 1.4nm technology (A14): 2nd-gen GAA, coming in 2028" — https://www.tomshardware.com/tech-industry/tsmc-unveils-1-4nm-technology-2nd-gen-gaa-transistors-full-node-advantages-coming-in-2028
16. TrendForce, "TSMC CoWoS supply-demand gap reportedly seen narrowing from 20% to 10% by end-2026" — https://www.trendforce.com/news/2026/06/15/news-tsmc-cowos-supply-demand-gap-reportedly-seen-narrowing-from-20-to-10-by-end-2026-as-capacity-expands/
17. FinancialContent/TokenRing, "TSMC to quadruple advanced packaging capacity: 130,000 CoWoS wafers monthly by late 2026" (75k end-2025) — https://markets.financialcontent.com/stocks/article/tokenring-2026-2-5-tsmc-to-quadruple-advanced-packaging-capacity-reaching-130000-cowos-wafers-monthly-by-late-2026
18. TSMC Arizona official page — https://www.tsmc.com/static/abouttsmcaz/index.htm
19. Blackridge Research, TSMC Arizona fab project profile ($165B; land purchase; fab statuses) — https://www.blackridgeresearch.com/project-profiles/tsmc-arizona-fab-united-states-us-details-cost-expansion-latest-update
20. TrendForce, "TSMC reportedly accelerates Arizona 2nd fab, eyes 3Q26 tool install, 2027 3nm production" — https://www.trendforce.com/news/2025/12/18/news-tsmc-reportedly-accelerates-arizona-2nd-fab-eyes-3q26-tool-install-2027-3nm-production/
21. TechTimes, "TSMC Arizona fab posts $514M year-one profit: Q1 2026 earnings surpass full 2025 figure" — https://www.techtimes.com/articles/316921/20260520/tsmc-arizona-fab-posts-514m-year-one-profit-q1-2026-earnings-surpass-full-2025-figure.htm
22. TechNode, "TSMC begins construction of Kumamoto second fab with $13.9 billion investment" — https://technode.com/2025/10/28/tsmc-begins-construction-of-kumamoto-second-fab-with-13-9-billion-investment/
23. TrendForce, "TSMC reportedly weighs shifting Kumamoto 2nd plant from 6nm/7nm to 4nm amid AI demand" — https://www.trendforce.com/news/2025/12/11/news-tsmc-reportedly-weighs-shifting-kumamoto-2nd-plant-from-6nm7nm-to-4nm-amid-ai-demand/
24. TrendForce, "TSMC Dresden fab reportedly wraps structural build, eyes equipment move-in in 2H26" — https://www.trendforce.com/news/2025/11/20/news-tsmc-dresden-fab-reportedly-wraps-structural-build-eyes-equipment-move-in-in-2h26/
25. Tom's Hardware, "TSMC to reportedly raise quotes on advanced process nodes by up to 10% next year" — https://www.tomshardware.com/tech-industry/semiconductors/tsmc-to-reportedly-raise-quotes-on-advanced-process-nodes-by-up-to-10-percent-next-year-to-pay-for-new-fabs
26. Tom's Hardware, "TSMC is reportedly hiking prices for 'all advanced nodes' (74% of wafer business)" — https://www.tomshardware.com/tech-industry/semiconductors/tsmc-is-reportedly-hiking-prices-for-all-advanced-nodes-accounting-for-74-percent-of-the-companys-wafer-business-nvidia-amd-apple-qualcomm-and-others-will-face-higher-wafer-costs
27. Wccftech, "TSMC will reportedly raise prices of its advanced nodes for four consecutive years" ($30k N2 / $45k A16 wafer reports) — https://wccftech.com/tsmc-increase-2nm-prices-for-four-consecutive-years-due-to-tight-supply/
28. IEEE Spectrum, "Morris Chang: Foundry Father" — https://spectrum.ieee.org/morris-chang-foundry-father
29. Chip History Center, "TSMC Founded — The First Pure-Play Foundry" — https://www.chiphistory.org/527-tsmc-founded-the-first-pure-play-foundry
30. Wikipedia, "Morris Chang" — https://en.wikipedia.org/wiki/Morris_Chang
31. TrendForce, "TSMC to recognize NT$3 billion earthquake loss" (April 2024 M7.4) — https://www.trendforce.com/news/2024/04/19/news-tsmc-to-recognize-ntd-3-billion-earthquake-loss/
32. TSMC PR, "January 2025 revenue report and statement on the impact of earthquake" (NT$5.3B net loss) — https://pr.tsmc.com/english/news/3204
33. Tom's Hardware, "TSMC factories rocked by strongest earthquake in 27 years, facilities escaped unharmed — earthquake protection measures pay off" — https://www.tomshardware.com/tech-industry/semiconductors/tsmc-chipmaking-factories-rocked-by-magnitude-7-0-earthquake-that-was-the-strongest-in-27-years-but-facilities-escaped-unharmed-companys-earthquake-protection-measures-pay-off
34. The Conversation, "How Taiwan came to dominate the global chip industry" (silicon shield; >90% of most advanced chips) — https://theconversation.com/how-taiwan-came-to-dominate-the-global-chip-industry-276939
35. SemiWiki, "No! TSMC does not make 90% of advanced silicon" (the definitional dissent — useful hedge) — https://semiwiki.com/semiconductor-manufacturers/tsmc/342934-no-tsmc-does-not-make-90-of-advanced-silicon/
36. Manufacturing Dive, "TSMC posts Q1 revenue surge of 40.6% YoY" — https://www.manufacturingdive.com/news/tsmc-q1-2026-revenue-q2-guidance-ai-arizona/817728/
37. Sammy Fans, "TSMC is now 11x bigger than Samsung chip foundry business" (TrendForce Q1 2026) — https://www.sammyfans.com/2026/06/12/samsung-tsmc-chip-foundry-business-trendforce-q1-2026/amp/
38. TrendForce, "TSMC speeds up expansion in Taiwan: up to 10 fabs reportedly under construction or starting in 2026" — https://www.trendforce.com/news/2026/02/23/news-tsmc-speeds-up-expansion-in-taiwan-up-to-10-fabs-reportedly-under-construction-or-starting-in-2026/
39. TSMC PR, "ESMC breaks ground on Dresden fab" (JV structure: TSMC 70%, Bosch/Infineon/NXP 10% each) — https://pr.tsmc.com/english/news/3169
