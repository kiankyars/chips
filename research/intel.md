# Research — Intel

As-of: 2026-07

Fact pack. Ammunition only, no prose. `[n]` → source list at bottom.
`<!-- VERIFY -->` = not fully confident, check before recording.
Tier: **T (tragedy)** — the fallen king arc.

## What Intel is
- American company (Santa Clara, CA; founded 1968 by Robert Noyce & Gordon
  Moore, Andy Grove first hire). The archetypal **IDM** — designs *and*
  manufactures its own x86 CPUs, unlike fabless (Nvidia/AMD/Apple) or
  pure foundry (TSMC). [1]
- FY2025 revenue **$52.9B** — its weakest full year since 2010. [2]
- Market cap ~**$550B** (July 2026, ~$110/share) after a violent 2026 rally +
  July crash — vs Nvidia ~$5.1T, TSMC ~$2.25T, AMD ~$780B. [3][52]
- The only American-owned company still developing **and** manufacturing
  leading-edge logic on US soil (18A in Arizona/Oregon). [4]

## The dominance era
- **Memory first, then the famous exit.** Intel's 1103 (1970) was the first
  commercially available DRAM chip; by ~1972 the best-selling semiconductor
  memory in the world. [5] By 1984-85 Japanese DRAM makers crushed margins;
  Grove to Moore: "If we got kicked out and the board brought in a new CEO,
  what do you think he would do?" Moore: "He would get us out of memories."
  So they walked out the door, walked back in, and did it themselves — Intel
  exited memory 1985 and bet everything on microprocessors. [6]
  <!-- VERIFY: exact quote wording against "Only the Paranoid Survive" (1996) before recording -->
- **Wintel.** Intel's 8088 won the IBM PC (1981) → x86 + Microsoft Windows
  became the personal-computing duopoly for three decades; "Intel Inside"
  (1991) made a component into a consumer brand. [1][7]
- **Tick-tock (2007–2016).** New process node one year ("tick"), new
  architecture the next ("tock") — a two-year metronome the whole industry set
  its clocks by, retired 2016 when the clock broke. [8]
- **Peak (~2011–2015).** First to FinFET/tri-gate transistors (22nm,
  2011–12), years ahead of TSMC/Samsung; 14nm (2014) still clearly the
  world's best process. ~**99%** of data-center CPU share at peak (Intel "did
  not have any real competitors"), >80% of PC CPUs. [9]
  <!-- VERIFY: "~99%" server share is the commonly cited Mercury-derived figure for ~2015-16; pin a citable primary before recording -->
  Market cap peaked >**$500B** in Aug 2000 — a ceiling that stood for 26 years. [10]

## The fall (mechanistic)
### 1. The 10nm yield catastrophe (2015–2019) — the original sin
- Intel targeted a **~2.7×** density jump for 10nm (industry norm per node:
  1.5–2×) — *without EUV*: 36nm metal pitch via **SAQP** (self-aligned
  quadruple patterning), plus first-use **cobalt** interconnects. Each choice
  multiplied defect density; together they broke the node. [11][12]
- Slated for ~2016 under tick-tock → slipped to 2017 → April 2018: "10nm is
  broken, delayed until 2019." [11] Real volume only arrived with Ice Lake
  (late 2019). Desktop stayed on 14nm-plus-plus-plus for ~7 years.
- While Intel stalled, TSMC shipped N7 (2018), N7+ with EUV (2019), N5 (2020)
  — the process crown changed heads roughly 2018–2020, first time since the
  1980s. [12][13]
- July 24, 2020: Intel admits **7nm is also ~12 months behind**; stock drops
  **16%** in a day (worst since March 2020); CEO Bob Swan floats outsourcing
  to "third-party foundries" — the unthinkable, said aloud. [13]

### 2. Missed mobile — the iPhone pass
- Otellini to The Atlantic (May 2013), on turning down the chip for the
  original iPhone: "We ended up not winning it or passing on it, depending on
  how you want to view it. And the world would have been a lot different if
  we'd done it." Apple's price was below Intel's forecasted cost; "it wasn't
  one of these things you can make up on volume. And in hindsight, the
  forecasted cost was wrong and the volume was 100x what anyone thought." [14][15]
  <!-- VERIFY: the companion line "my gut told me to say yes" is in the Atlantic piece; confirm exact wording before quoting on screen [14] -->
- Compounding: sold XScale (its Arm chip line) to Marvell in 2006 for ~$600M —
  the year before the iPhone shipped; burned ~$4B+ in Atom "contra-revenue"
  trying to buy its way back into tablets/phones (2013–14); exited smartphone
  modems 2019, selling the unit to Apple for ~$1B.
  <!-- VERIFY: all three from memory — XScale price, contra-revenue total, modem sale terms -->

### 3. Missed AI
- Reportedly passed on buying Nvidia for ~$20B (~2005, board balked) and on a
  ~15% stake in OpenAI for ~$1B (2017–18).
  <!-- VERIFY: both from memory — NYT reported the Nvidia episode, Reuters (Sept 2024) the OpenAI one; confirm before recording -->
- Larrabee GPU cancelled (2009–10); Gaudi accelerators (Habana, $2B acq. 2019)
  missed even a modest **$500M** 2024 revenue target.
  <!-- VERIFY: Gaudi target miss — Gelsinger admitted on Q3 2024 call -->
- Scale of the miss: Nvidia's data-center business alone did **$75.2B in one
  quarter** (up 92% YoY) in early 2026 — vs $13.6B for all of Intel. [3]

### 4. x86 erosion — attacked from every side
- **Apple leaves:** M1 announced Nov 2020; last Intel Mac replaced by June
  2023. Apple proved a phone-derived Arm chip could beat x86 laptops on
  performance *and* battery. [16]
- **Arm eats the cloud:** AWS Graviton has been >**50% of all new CPU capacity
  AWS deployed for three straight years**; 98% of AWS's top-1,000 EC2 customers
  use it; Graviton5 (192 cores) launched Dec 2025. [17]
- **AMD executes:** from ~0% server share in 2017 to **27.4% unit / 46.2%
  revenue share** of x86 server CPUs (Q1 2026, Mercury Research). [18][19]
  Q1 2026: AMD's data-center revenue (**$5.8B**, +57% YoY) out-earned Intel's
  DCAI (**$5.1B**) **for the first time ever**. [18]
- Intel's overall server CPU share (incl. Arm) slipped to ~**67%**; consumer
  PC share holds ~70%. [19][20] <!-- VERIFY: 67% figure's exact period -->

## The rescue
### IDM 2.0 (the Gelsinger era, 2021–2024)
- Feb 2021: Pat Gelsinger (ex-CTO, employee-era Grove protégé) returns as CEO.
  March 2021: **"IDM 2.0"** — keep manufacturing, open it to outside customers
  (Intel Foundry Services), $20B for two new Arizona fabs. [21]
- **"Five nodes in four years"** (Intel 7 → 4 → 3 → 20A → 18A, 2021–2025) to
  retake process leadership; 20A cancelled Sept 2024 to pour everything into
  18A. [21]
- Ohio "Silicon Heartland" mega-site (announced 2022, up to $100B vision)
  repeatedly delayed — first fab now ~2030–31. [27]
- Aug 1, 2024: disaster quarter → **~15,000 layoffs**, dividend suspended
  (paid since 1992), stock -26% in a day, worst since 1974. [22]
- Dec 1–2, 2024: Gelsinger "retires," out same day; board had lost confidence
  (reportedly retire-or-be-removed). Interim co-CEOs Zinsner + Holthaus. [23]
  <!-- VERIFY: "board ultimatum" detail is Reuters/Bloomberg reporting, not Intel's language -->
- March 2025: **Lip-Bu Tan** named CEO (announced Mar 12, effective Mar 18) —
  ex-Cadence CEO, ex-Intel board member who had quit the board Aug 2024. [24]
- 2025 restructuring under Tan: another ~15% cut announced July 2025; plan to
  end 2025 at ~**75,000 "core" employees** — down from **108,900** at end-2024
  (~25k gone in 2025 alone, ~35k from the 2024 peak); $1.9B Q2'25
  restructuring charge; Germany + Poland projects killed; Ohio slowed. [25][26]
  <!-- VERIFY: actual end-2025 core headcount vs the ~75k plan — check FY2025 10-K -->

### The nationalization-ish turn (H2 2025) — "too strategic to fail"
- **Aug 22, 2025 — the US government becomes Intel's largest shareholder:**
  CHIPS grants converted to equity. Government bought **433.3M shares at
  $20.47** = **$8.9B** for a **9.9%** stake (funded by $5.7B undisbursed CHIPS
  money + $3.2B Secure Enclave program; $11.1B total federal support incl.
  grants already paid). Passive stake: no board seat, votes with the board.
  Plus a 5-year **warrant for another 5% at $20/share** — exercisable only if
  Intel ceases to own ≥51% of its foundry. A poison pill against spinning off
  or selling the fabs. [28][29][30]
- **Aug 18, 2025 — SoftBank:** $2B at $23/share (~87M shares, ~2%), closed
  Sept 26, 2025 — instantly a top-10 holder. [31]
- **Sept 18, 2025 — Nvidia:** **$5B** of Intel common stock at $23.28/share
  (~4% <!-- VERIFY: exact % post-issuance -->) + joint products: Intel builds
  Nvidia-custom x86 CPUs for Nvidia's AI platforms (NVLink-connected), and
  x86 SoCs with **Nvidia RTX GPU chiplets** for PCs. Closed Dec 2025 — by
  which point Nvidia was already up ~$2.5B on paper. [32][33]
- Net: ~**$15.9B** of equity capital injected in ~6 weeks, from the US
  Treasury, SoftBank, and Intel's chief tormentor. None of it bought foundry
  *orders* — that's the open question (see 14A).

## 18A & 14A — the last stand
### 18A (2nm-class) — status as of 2026-07
- The tech: **RibbonFET** (Intel's first gate-all-around transistor) +
  **PowerVia** (industry-first backside power delivery) — Intel got to
  backside power *before* TSMC. ~15% perf/watt and ~30% density gain vs
  Intel 3. [34] Intel's line: "the most advanced semiconductor process ever
  developed and manufactured in the United States." [4]
- **Fab 52, Chandler, Arizona** — the 18A flagship — fully operational fall
  2025 (Tan on site Oct 6, 2025); high-volume 18A production from late
  2025/early 2026. [34][35][37]
- **Panther Lake = Core Ultra Series 3**: first 18A product. First SKU shipped
  before end-2025; full launch CES Jan 5, 2026; laptops on shelves Jan 27,
  2026; hundreds of designs through H1 2026. [4][36]
- **Clearwater Forest = Xeon 6+**: first 18A server CPU, launched
  June 1–2, 2026 (Computex). Up to **288 E-cores**, 12 compute tiles on EMIB
  2.5D packaging, 576MB L3; Intel claims +30% perf/thread vs AMD's 192-core
  EPYC 9965; shipping day-one via Dell/HPE/Lenovo/Supermicro. [40][41]
- **The yield debate (the whole ballgame):** good-die yields were ~20–25% when
  the Panther Lake compute-tile ramp began (early 2026) [37]; Intel targets
  >50% by mid-2026 and "industry-standard" yields only in **early 2027** —
  until then it is capping output and leaving part of Fab 52 idle. [38]
  Early July 2026: reports that *profitable* 18A yields slip to late 2026/2027
  (+ AMD's data-center overtake + a BofA "AI bubble" note) cratered the stock
  **-21% in a week** (~$140 → ~$110). [39][3]
  <!-- VERIFY: one 2026 analysis pegs 18A defect-limited yields at ~60-75% vs TSMC N2 >90% — figures vary wildly by source and by what's measured (defect density vs good-die on a specific product); hedge on air -->
- **External customers (still the sore spot):** committed — **Microsoft**
  (chip on 18A, announced Feb 2024), **Amazon/AWS** (AI fabric chip on 18A,
  multi-year framework, Sept 2024), **US DoD** (RAMP-C / Secure Enclave);
  mature-node deals with MediaTek, Tower, UMC. But only Intel itself consumes
  18A in volume: external foundry revenue was **$174M in Q1 2026** (~3% of
  foundry revenue) — Intel Foundry is still overwhelmingly Intel's own
  customer. [21][42][43][44]
  <!-- VERIFY: press reports since late 2025 say Apple took the 18A-P PDK and began evaluation/qualification — rumor-tier, do not state as fact [42] -->

### 14A — the explicit existential wager
- 14A: Intel's first **High-NA EUV** node; early PDKs with customers; risk
  production ~2027. [47] <!-- VERIFY: current 14A production-ready date -->
- **The 10-Q/10-K warning (July 2025), in Intel's own words:** if it fails "to
  secure a significant external customer and meet important customer
  milestones for Intel 14A," Intel "may pause or discontinue our pursuit of
  Intel 14A and successor leading-edge nodes" — i.e., the first time Intel put
  *exiting leading-edge manufacturing* in an SEC filing. It also said future
  nodes beyond 18A could be outsourced to TSMC. [45][46]
- Jan 9, 2026 (post-CES): Tan reverses tone — "We are going big time into
  14A… to serve the customer well" — read by press as implying at least one
  external anchor customer; **none publicly named as of 2026-07**. [47]

## Financials
- Revenue slide: **$79.0B (2021) → $63.1B (2022) → $54.2B (2023) → $53.1B
  (2024) → $52.9B (2025)** — 2025 the weakest since 2010. [48][49][2]
- **2024: net loss $18.8B — first annual loss since 1986** (impairments +
  restructuring). [50]
- 2025: net loss trimmed to **$267M**; Q4'25 still soft. [2]
- **Intel Foundry losses**: **-$7.0B** (2023) → **-$13.4B** (2024, the trough)
  → **-$10.3B** (2025, on $17.8B segment revenue) → **-$2.4B** (Q1'26) ≈
  **~$33B cumulative** since 2023 reporting began. Break-even target: ~2027. [49][2][44]
- **Q1 2026** (reported Apr 2026): revenue **$13.6B** (+7% YoY, ~$1.4B above
  guidance midpoint, 6th straight beat); CCG $7.7B (+1%), DCAI $5.1B (+22%),
  Foundry $5.4B (+16%, external only $174M); non-GAAP GM **41%** (18A yields
  helping); EPS $0.29. [44][51]
- Stock, the whiplash year: government bought at **$20.47** (Aug 2025), Nvidia
  at **$23.28** (Sept 2025); ~$37 at New Year 2026; ~**$140** June 30, 2026
  (+~270% YTD — cleared the Aug-2000 dot-com ceiling for the first time in 26
  years [10]); **-21% in the first week of July** to ~$110. [3][39]
- Valuation stretch: ~**100× forward earnings** vs TSMC's ~27.5× — priced for
  a flawless turnaround. [3] Next catalyst: Q2'26 earnings late July 2026.
- Government stake scoreboard: 433.3M shares × ~$110 ≈ **$47B** — a ~5×
  paper gain for taxpayers in under a year. [28][3]

## Why Intel's fate matters
- It is the **only American-owned, America-based leading-edge logic
  manufacturer**. 18A is the first 2nm-class node developed *and* made in the
  US. [4] TSMC Arizona fabs are a hedge, but the frontier R&D stays in Taiwan.
- If the 14A warning executes, the entire global leading edge is **TSMC
  (Taiwan) + Samsung (Korea)** — 100% of frontier logic development inside
  China's missile envelope. That's what the segment's stakes are. [45][46]
- The DoD already treats Intel as critical infrastructure: Secure Enclave
  ($3.2B) + RAMP-C put defense silicon on 18A. [28][21]
- The US government owning 9.9% (+ a warrant chaining the fabs to Intel) is
  the closest thing America has to nationalizing a chipmaker — industrial
  policy became an equity position. The Nvidia/SoftBank stakes complete the
  frame: **"too strategic to fail."** [28][32]
- The tragedy framing writes itself: the company that taught the world Moore's
  Law now needs the state, its rivals, and one Arizona fab's yield curve to
  stay in the game it invented.

## Risks (to the narrative and to Intel)
- **Yield slip = everything slip:** 18A profitable-yield timing already moved
  once (July 2026); "industry-standard in early 2027" is a promise, not a
  result. [38][39]
- **14A anchor customer still unnamed** — Tan's optimism ≠ a signed logo; the
  10-K exit language stays live until one lands. [45][47]
- **x86 is structurally shrinking:** AMD at 46% of server-CPU dollars, Arm
  >50% of new AWS capacity, Apple gone — even a perfect foundry doesn't fix
  the product franchise. [18][19][17]
- **No real AI accelerator business** — the entire industry's growth engine is
  the one market where Intel has ~no share; the Nvidia deal makes Intel a
  component supplier to the winner, not a rival.
- **Valuation risk:** at ~100× forward earnings, the stock (and the political
  narrative around the government's paper gain) can crash on any datapoint —
  it just did, -21% in a week. [3][39]
- **Government entanglement:** warrant restricts strategic options (no foundry
  spin-off below 51%); politicization may spook foreign customers; terms can
  change with administrations. [28][29]
- **Talent bleed:** ~35k fewer employees than 2024; five years of layoffs and
  four CEOs since 2018 (Krzanich → Swan → Gelsinger → Tan). [25][26]
- Simplification hedge for air: "Intel lost the crown because of 10nm" is the
  compressed teach — the honest version is 10nm *and* a decade of missed
  platform shifts (mobile → cloud Arm → AI) stacked on top.

## Fact ammo — lines that land
- **The iPhone pass:** Otellini, on turning down the chip for the first
  iPhone: "We ended up not winning it or passing on it… and the world would
  have been a lot different if we'd done it." The volume turned out to be
  **100× the forecast**. [14][15]
- **The 1986 rhyme:** Intel's last annual loss before 2024 was **1986** — the
  year after Grove walked Intel out of the memory business. The **$18.8B**
  2024 loss landed while Intel debated, in an SEC filing, walking out of
  leading-edge logic. [50][45]
- **The taxpayer trade of the decade (so far):** Washington converted grants
  into shares at $20.47 in Aug 2025; eleven months later the 9.9% stake was
  worth ~**$47B** — a ~5× paper gain on money originally meant to be a
  subsidy. [28][3]
- **From ~99% to out-earned:** mid-2010s Intel had ~99% of data-center CPUs;
  in Q1 2026 AMD's data-center business out-earned Intel's for the first time
  in history ($5.8B vs $5.1B). [9][18]
- **$5B is six days:** Nvidia's "seismic" $5B stake in Intel equals roughly
  six days of Nvidia's data-center revenue ($75.2B/quarter). [32][3]
- **26 years to get home, one week to stumble:** Intel only re-cleared its
  Aug-2000 dot-com market-cap ceiling in 2026 — on 18A hope — then dropped
  21% in a week on a single yield report. The entire ~$550B valuation is a
  bet on one fab in Arizona. [10][39][3]

---

## Sources
1. Wikipedia, Intel — https://en.wikipedia.org/wiki/Intel
2. Tom's Hardware, Intel Q4/FY2025 earnings (weakest FY revenue since 2010; foundry losses) — https://www.tomshardware.com/pc-components/cpus/intel-q4-earnings-reveal-rocky-path-to-recovery-following-weakest-full-year-revenue-since-2010-intel-foundry-losses-continue-as-18a-begins-ramp-but-supply-challenges-set-to-ease-in-q2-2026
3. The Motley Fool (2026-07-11), Intel/AMD plunge; market caps & valuations — https://www.fool.com/investing/2026/07/11/intel-and-amds-stock-have-plummeted-in-the-last-fe/
4. Intel Newsroom, "CES 2026: Intel Core Ultra Series 3 Debut as First Built on Intel 18A" — https://newsroom.intel.com/client-computing/ces-2026-intel-core-ultra-series-3-debut-first-built-on-intel-18a
5. Wikipedia, Intel 1103 — https://en.wikipedia.org/wiki/Intel_1103
6. Wikipedia, Andrew Grove (memory exit; "Only the Paranoid Survive") — https://en.wikipedia.org/wiki/Andrew_Grove
7. Wikipedia, Wintel — https://en.wikipedia.org/wiki/Wintel
8. Wikipedia, Tick–tock model — https://en.wikipedia.org/wiki/Tick%E2%80%93tock_model
9. Tom's Hardware, "Intel data center CPU sales hit the lowest point in 13 years" — https://www.tomshardware.com/pc-components/cpus/intel-data-center-cpu-sales-hit-the-lowest-point-in-13-years
10. Yahoo Finance, "Intel just cleared its dot-com-era ceiling" — https://finance.yahoo.com/markets/article/intel-just-cleared-its-dot-com-era-ceiling-after-earnings-chart-of-the-day-110711546.html
11. Tom's Hardware (2018), "Intel's 10nm Is Broken, Delayed Until 2019" — https://www.tomshardware.com/news/intel-cpu-10nm-earnings-amd,36967.html
12. EE Times, "Intel's 10nm Node: Past, Present, and Future" (2.7× density, SAQP, cobalt) — https://www.eetimes.com/intels-10nm-node-past-present-and-future/
13. CNN Business (2020-07-24), Intel 7nm delay stock selloff — https://www.cnn.com/2020/07/24/investing/intel-earnings-stock-selloff
14. The Atlantic (Alexis Madrigal, May 2013), Otellini exit interview — https://www.theatlantic.com/technology/archive/2013/05/paul-otellinis-intel-can-the-company-that-built-the-future-survive-it/275825/
15. Stratechery (2013), "Paul Otellini's Intel" — https://stratechery.com/2013/paul-otellinis-intel/
16. Wikipedia, Mac transition to Apple silicon — https://en.wikipedia.org/wiki/Mac_transition_to_Apple_silicon
17. The Register (2025-12-04), Graviton5; >50% of new AWS CPU capacity — https://www.theregister.com/2025/12/04/amazon_graviton_5/
18. TweakTown, "For the first time, AMD has overtaken Intel in data center revenue for Q1" — https://www.tweaktown.com/news/111523/for-the-first-time-amd-has-overtaken-intel-in-data-center-revenue-for-q1/index.html
19. Tom's Hardware, "AMD reaches 46% of server x86 CPU revenue — Intel still controls 70% of the consumer PC market" — https://www.tomshardware.com/pc-components/cpus/amd-reaches-46-percent-of-server-x86-cpu-revenue-intel-still-controls-70-percent-of-the-consumer-pc-market-share
20. TechPowerUp, "Intel's Server Share Slips to 67%" — https://www.techpowerup.com/338409/intels-server-share-slips-to-67-as-amd-and-arm-widen-the-gap
21. Wikipedia, Intel Foundry (IDM 2.0, five-nodes-in-four-years, 20A, customers) — https://en.wikipedia.org/wiki/Intel_Foundry
22. Forbes (2024-08-02), Intel worst day ever; 15% layoffs; dividend suspended — https://www.forbes.com/sites/roberthart/2024/08/02/intel-shares-freefall-as-american-chipmaking-giant-careens-toward-worst-day-ever/
23. Intel Newsroom (2024-12-02), "Intel Announces Retirement of CEO Pat Gelsinger" — https://newsroom.intel.com/corporate/intel-ceo-news-dec-2024
24. Intel 8-K (2025-03-10/12), Lip-Bu Tan appointed CEO effective 2025-03-18 — https://www.sec.gov/Archives/edgar/data/50863/000005086325000036/a03102025form8-kex991.htm
25. CNN Business (2025-07-24), Intel cuts 15% of staff; ~75k core target — https://www.cnn.com/2025/07/24/tech/intel-layoffs-15-percent-q2-earnings
26. Intel 8-K, Q2 2025 earnings release ($1.9B restructuring; 75k core plan; Germany/Poland cancelled) — https://www.sec.gov/Archives/edgar/data/50863/000005086325000107/q225_earningsrelease.htm
27. Tom's Hardware, "Intel's fab roadmap examined — Arizona, Ohio, Ireland, and the two deadlines deciding 14A" — https://www.tomshardware.com/tech-industry/semiconductors/intels-fab-roadmap-examined
28. Intel 8-K exhibit (2025-08-22), US government $8.9B / 433.3M shares @ $20.47 / warrant terms — https://www.sec.gov/Archives/edgar/data/50863/000005086325000129/a08222025form8-kex991.htm
29. Manufacturing Dive, "US government to take 10% stake in Intel with CHIPS funding" — https://www.manufacturingdive.com/news/us-government-10-percent-stake-intel-chips-funding-8-9-billion/758518/
30. CNN Business (2025-08-22), "The US takes a 10% stake in Intel" — https://www.cnn.com/2025/08/22/tech/trump-intel-10-percent-stake
31. Intel Newsroom (2025-08-18), "SoftBank Group and Intel Corporation Sign $2B Investment Agreement" — https://newsroom.intel.com/corporate/softbank-group-and-intel-corporation-sign-2b-investment-agreement
32. Tom's Hardware (2025-09-18), Nvidia–Intel x86 RTX SoCs + custom DC CPUs + $5B stake — https://www.tomshardware.com/pc-components/cpus/nvidia-and-intel-announce-jointly-developed-intel-x86-rtx-socs-for-pcs-with-nvidia-graphics-also-custom-nvidia-data-center-x86-processors-nvidia-buys-usd5-billion-in-intel-stock-in-seismic-deal
33. The Register (2025-12-29), "Nvidia invests $5B on Intel bailout, gains $2.5B" — https://www.theregister.com/2025/12/29/nvidia_intel_5_billion/
34. Intel Newsroom (Oct 2025), "Intel Unveils Panther Lake Architecture: First AI PC Platform Built on 18A" (RibbonFET, PowerVia, Fab 52) — https://newsroom.intel.com/client-computing/intel-unveils-panther-lake-architecture-first-ai-pc-platform-built-on-18a
35. CNBC (2025-12-19), "Intel aims to find clients and catch TSMC with new chip fab in Arizona" — https://www.cnbc.com/2025/12/19/intel-aims-to-find-clients-and-catch-tsmc-with-new-chip-fab-in-arizona.html
36. Wikipedia, Panther Lake (microprocessor) — https://en.wikipedia.org/wiki/Panther_Lake_(microprocessor)
37. FinancialContent/TokenRing (2025-12-26), "Intel's 18A Node Hits Volume Production at Fab 52 as Yields Stabilize" — https://markets.financialcontent.com/wral/article/tokenring-2025-12-26-intels-18a-node-hits-volume-production-at-fab-52-as-yields-stabilize-for-panther-lake-ramp
38. Tom's Hardware, "Intel's pivotal 18A process… yields only set to reach industry standard levels in 2027" — https://www.tomshardware.com/pc-components/cpus/intels-pivotal-18a-process-is-making-steady-progress-but-still-lags-behind-yields-only-set-to-reach-industry-standard-levels-in-2027
39. The Motley Fool (2026-07-09), "Intel Stock Has Crashed 21% in a Week. Here's What Actually Broke the Rally." — https://www.fool.com/investing/2026/07/09/intel-stock-has-crashed-21-in-a-week-heres-what-ac/
40. Tom's Hardware (2026-06), Xeon 6+ "Clearwater Forest" launch, 288 cores on 18A — https://www.tomshardware.com/pc-components/cpus/intel-xeon-6-clearwater-forest-puts-18a-in-the-data-center-with-up-to-288-cores-576-mb-of-l3-cache-new-xeon-6990e-is-30-percent-faster-per-thread-than-192-core-amd-epyc-9965-says-intel
41. The Register (2026-06-01), "Intel launches 288-core Clearwater Forest Xeon 6 on 18A" — https://www.theregister.com/systems/2026/06/01/intel-launches-288-core-clearwater-forest-xeon-6-on-18a-process/5248150
42. SemiconductorX, Intel Foundry spotlight (18A/IFS customers) — https://semiconductorx.com/spotlight-intel-foundry.html
43. Electronics Weekly (2026-05), "Intel Foundry: The Last Chance" — https://www.electronicsweekly.com/foundry/intel-foundry-the-last-chance-2026-05/
44. Futurum Group, "Intel Q1 FY 2026 Earnings" (segments, $174M external foundry, GM, EPS) — https://futurumgroup.com/insights/intel-q1-fy-2026-earnings-point-to-agentic-cpu-demand-and-foundry-upside/
45. SemiWiki forum thread quoting Intel Q2 2025 10-Q 14A risk language — https://semiwiki.com/forum/threads/intel-10q-filing-we-may-cancel-14a-if-we-do-not-win-a-large-external-customer.23236/
46. TrendForce (2025-07-25), "Intel Earnings Call Bombshell: Could Exit Advanced Nodes if 14A Fails" — https://www.trendforce.com/news/2025/07/25/news-intel-earnings-call-bombshell-could-exit-advanced-nodes-if-14a-fails-eyes-tsmc-outsourcing-beyond-18a/
47. Tom's Hardware (2026-01), "Intel is 'going big time into 14A,' says CEO Lip-Bu Tan" — https://www.tomshardware.com/tech-industry/semiconductors/intel-is-going-big-time-into-14a-says-ceo-lip-bu-tan-serve-the-customer-well-remark-hints-at-external-client
48. Macrotrends, Intel revenue history 2010–2025 — https://www.macrotrends.net/stocks/charts/INTC/intel/revenue
49. Intel press release, Q4/FY2024 results (revenue $53.1B; foundry FY24 loss) — https://www.intc.com/news-events/press-releases/detail/1726/intel-reports-fourth-quarter-and-full-year-2024-financial
50. Electronics Weekly (2025-01), "Intel makes 2024 loss of $18.8bn" (first since 1986) — https://www.electronicsweekly.com/news/business/intel-makes-2024-loss-of-18-8bn-2025-01/
51. Intel Form 10-Q, Q1 FY2026 (SEC) — https://www.sec.gov/Archives/edgar/data/0000050863/000005086326000079/intc-20260328.htm
52. CompaniesMarketCap, Nvidia / TSMC market caps (July 2026) — https://companiesmarketcap.com/nvidia/marketcap/ and https://companiesmarketcap.com/tsmc/marketcap/
