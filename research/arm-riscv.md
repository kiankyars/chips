# Research — Semiconductor IP: Arm & RISC-V
As-of: 2026-07

Fact pack. Ammunition only, no prose. `[n]` → source list at bottom.
`<!-- VERIFY -->` = not fully confident, check before recording.

## What IP / an ISA is (teachable)
- An **ISA** (instruction set architecture) = the *vocabulary* a chip speaks — the
  fixed list of instructions (add, load, branch, …) software is compiled into.
  Any CPU that implements the vocabulary runs the software; the ISA is the
  contract between hardware and every program ever written for it.
- Arm doesn't make chips. It sells **blueprints**: you don't buy a chip from Arm,
  you buy the right to *design or use* one. Two tiers:
  - **Core license** (a.k.a. TLA / IP license): you buy a finished, verified CPU
    design (Cortex-A/M/R, Neoverse) and drop it into your chip. Most licensees. [4]
  - **Architecture license** (ALA): you buy the right to the *vocabulary only* and
    design your own CPU from scratch that speaks Arm. Rare, expensive, elite club:
    Apple, Qualcomm, Nvidia, Ampere, Fujitsu… [4][21]
- Third axis (new-ish): **CSS** — Compute Subsystems, near-complete assembled chip
  designs; more Arm content per chip → higher royalty per chip. 21 CSS licenses
  signed across 12 companies for datacenter alone. [18]
- The ISA moat is **software**: decades of compilers, OSes, apps target the
  vocabulary. Switching ISAs = rebuilding/re-validating the software world.

## Arm: model & numbers
- Business model = **licensing (upfront) + per-chip royalties (forever)**.
  License fees roughly **$1M–$10M**; royalty typically **~1–2% of the chip's
  selling price**, per chip shipped. [4][5]
- **Armv9** (current gen) royalty rates are **at least double** equivalent Armv8
  products — the quiet engine of Arm's post-IPO growth. [6]
- **FY2026** (Arm's fiscal year ends March; FY26 = year ended 31 Mar 2026):
  revenue **$4.92B** (+23%), of which royalty **$2.613B** (+21%) and licensing
  **$2.307B** (+25%) — roughly a 53/47 royalty/licensing split. Q4 alone: $1.49B.
  Third straight fiscal year of 20%+ growth since IPO. [1][2]
- **FY2025**: revenue **$4.007B** — Arm's first $4B year (licensing $1.84B). [3]
- **>99% of the world's smartphones** sold contain Arm CPUs (Arm's own annual
  report). [3]
- Cumulative Arm-based chips shipped: **>350 billion** — ~40+ chips for every
  human alive. **22M+ developers** build on Arm. [1]
- Recent run-rate ~**30B chips/yr** → blended royalty ≈ **~9¢ per chip**.
  <!-- VERIFY: Arm stopped reporting quarterly chip counts; last hard figure was 28.6B in FY23 F-1. Per-chip figure is derived. -->
- **Ownership**: SoftBank bought Arm outright in 2016 for **~$32B** [9]; still
  holds **~87–90%** post-IPO. [8]
- **IPO**: 14 Sept 2023 on Nasdaq at **$51/ADS**, ~**$54.5B** valuation, raised
  ~$4.9B — the largest IPO of 2023. [7]
- **Market cap now (July 2026): ~$320–346B** — ~6x the IPO price in under 3 years,
  ~65× revenue. [8][10]

## Arm: history (3 beats)
- **1985, Acorn**: the ARM1 ("Acorn RISC Machine") designed at Acorn Computers
  (Cambridge, UK — the BBC Micro company) by **Sophie Wilson and Steve Furber**;
  famously simple RISC design because the team was tiny and couldn't afford
  complexity. [11][12] Legend: first test chip drew so little power it ran off
  leakage from the test rig with its power line unconnected.
  <!-- VERIFY: leakage anecdote — widely told incl. by Wilson/Furber, confirm framing -->
- **Nov 1990, the JV**: Advanced RISC Machines Ltd founded as a joint venture —
  **Acorn (12 engineers) + Apple ($3M cash) + VLSI Technology (tools)** — because
  **Apple needed a low-power CPU for the Newton MessagePad**. First office: a
  converted 17th-century barn outside Cambridge. [11][12]
- **The low-power bet won mobile**: constraint became strategy — designed for
  battery devices when everyone else chased desktop performance; Nokia GSM phones
  (late '90s) then the iPhone (2007) made Arm the default ISA of the handheld
  world → >99% of smartphones today. [3][11] Apple later sold down its Arm stake
  in the late '90s, raising cash (~$800M over time) that helped bridge the
  near-death years. <!-- VERIFY: ~$800M figure and timing from memory -->

## Arm: data center & expansion
- The hyperscaler custom-CPU wave — all Arm (Neoverse):
  - **AWS Graviton** (2018→; Graviton4 = 96 Neoverse-V2 cores; Graviton5 in the
    works). AWS custom silicon (Graviton + Trainium + Nitro) now a **>$20B annual
    run rate**, growing triple-digit YoY. [1][18]
  - **Nvidia Grace** (paired with Hopper/Blackwell in GB200/GB300 racks; Vera next). [18]
  - **Google Axion**, **Microsoft Cobalt**. [18]
- Share: Arm claims **~50% of CPU compute among top hyperscalers** (stated at
  FY26 earnings, May 2026; repeated at Computex June 2026). [1][13]
- IDC: Arm-based servers = **>45% of data-center server *revenue*** in Q1 2026 —
  caveat: revenue-weighted, inflated by Grace CPUs riding inside million-dollar
  NVL AI racks; x86 still ships more standalone server CPUs. [14]
- **>1 billion Neoverse cores** deployed across datacenter CPUs/DPUs. [18]
- Arm data-center **royalty more than doubled YoY** in FY26. [1]
- **The rubicon — Arm now sells chips (2026)**: on 24 Mar 2026 Arm announced the
  **Arm AGI CPU** — the first Arm-*designed production silicon* in its 35-year
  history. Up to **136 Neoverse V3 cores**, TSMC **3nm**, chiplet-based, 300W,
  aimed at AI-inference/agentic workloads. Lead customer **Meta**; OpenAI,
  Cerebras, Cloudflare, SAP, SK Telecom signed on; broad availability H2 2026;
  Arm cites **>$2B customer demand** across FY27–28. [1][15][16][17]
  - The tension: Arm now **competes with its own licensees** (Ampere, Graviton,
    Grace…) — the channel-conflict story writes itself. [16][17]
- **Ampere Computing**: acquired not by Arm but by parent **SoftBank** — $6.5B
  all-cash, announced 20 Mar 2025, **closed 25 Nov 2025**; Carlyle and Oracle
  sold out; Ampere now a wholly-owned SoftBank subsidiary. SoftBank is assembling
  an Arm-centric AI-compute stack (Arm + Ampere + Graphcore + Stargate). [19][20]

## The lawsuits
- **Arm v. Qualcomm (the Nuvia case)** — the defining IP fight:
  - 2021: Qualcomm buys CPU-design startup Nuvia ($1.4B). Arm claims Nuvia's
    architecture license didn't transfer; demands renegotiation, sues Aug 2022,
    at one point threatens to cancel Qualcomm's license entirely. [21]
  - **Dec 2024, Delaware jury**: Qualcomm did *not* breach its own ALA and its
    Nuvia-derived Oryon cores are licensed; hung on one Nuvia question. [21][22]
  - **30 Sept 2025, final judgment**: judge affirms verdict + rules as a matter
    of law that Nuvia didn't breach either → **complete victory for Qualcomm**.
    Arm appealed to the Third Circuit (pending as of mid-2026). [22][23]
  - Still live: **Qualcomm's countersuit** vs Arm (breach of contract,
    interference, favoring its own chip ambitions) — amended complaint filed
    30 Mar 2026, trial expected ~Q4 2026. [21][24]
  - Why it matters: Arm's biggest customers watched Arm sue its #1 royalty payer —
    the single best marketing RISC-V ever got.
- **Nvidia–Arm (2020–22)**: Nvidia's **$40B** bid for Arm (announced Sept 2020)
  collapsed 8 Feb 2022 under global regulatory assault (FTC suit Dec 2021; UK/EU
  probes) — the industry's customers (Qualcomm, Google, Microsoft) objected to the
  neutral "Switzerland of semiconductors" being owned by a chipmaker. Nvidia wrote
  off a **$1.36B** prepayment; SoftBank pivoted to the IPO. [25][26]

## RISC-V
- **What "open ISA" means**: the RISC-V instruction-set *spec* is free — anyone
  can implement it, no license, no royalty, no permission. (You still pay if you
  license someone's finished RISC-V *core*, e.g. SiFive/Andes — open ISA ≠ free
  cores.) Born at UC Berkeley, 2010 (Krste Asanović, David Patterson et al.). [27]
- **RISC-V International**: the nonprofit steward; moved from Delaware to
  **Switzerland** (announced late 2019) explicitly so US export politics couldn't
  gate access to the standard. [27]
- **Where it's real today (embedded, not visible)**:
  - **Nvidia is arguably the world's biggest RISC-V shipper**: ~**1 billion
    RISC-V cores in 2024 alone** as management/controller cores inside its GPUs
    (GSP etc.). [28] And July 2025: Nvidia announced **CUDA support for RISC-V
    host CPUs** — RISC-V joins x86 and Arm as a CUDA host platform. [29]
  - **Western Digital**: designed its own RISC-V cores (SweRV, open-sourced) and
    committed to moving its ~2B-controllers/yr storage portfolio to RISC-V. [30]
  - MCUs, SSD/HDD controllers, power management, IoT — anywhere the ISA is
    invisible and the software stack is private, RISC-V is already normal.
- **Where it's aspirational**: phones and servers. RVA23 profile (the baseline
  for app-class software compatibility) only ratified Oct 2024
  <!-- VERIFY: RVA23 ratification date -->; Android support has been on-again
  off-again <!-- VERIFY: Google pulled RISC-V from Android common kernel 2024, status since -->;
  no RISC-V phone or volume server CPU ships in the West as of mid-2026.
- **China's sanctions hedge** — the geopolitical story:
  - You can't sanction an open standard: RISC-V is China's ISA of last resort if
    Arm/x86 access is ever cut. [27][31]
  - **XiangShan**: Chinese Academy of Sciences' open-source high-performance
    RISC-V core project — explicitly aimed at matching Arm-class IP. [31]
  - **Alibaba T-Head**: XuanTie line (C910/C920 open-sourced; server-grade
    **C930** shipping 2025). [31]
  - **2025: Beijing formally backed RISC-V** — first national-level policy
    guidance encouraging RISC-V adoption across industries. [31]
  - ~70 Chinese companies in RISC-V International — 3rd-largest national bloc
    (EU ~87, US ~77); PRC firms sit on the board, incl. Entity-Listed ones. [27]
- **US export-control debate**: lawmakers have pushed BIS since 2023 to restrict
  US firms' RISC-V collaboration (latest: Sept 2025 Senate letter to BIS) [32];
  think-tank counterargument (CSIS): restrictions would mostly hurt US influence —
  the spec is global, published, and Switzerland-based; disengaging just hands
  the steering wheel to China. [33] No RISC-V-specific rule enacted as of 2026-07.
  <!-- VERIFY: confirm no BIS RISC-V rule issued by recording date -->

## Does RISC-V threaten Arm? (honest read)
- **Forecasts**: Omdia — RISC-V shipments growing ~50%/yr to **17B chips in
  2030 ≈ ~25% of the processor market** [34]; SHD Group — 21B+ by 2031, but
  RISC-V *IP revenue* only ~$2B by 2031 (vs Arm's $2.3B licensing today) [35];
  RISC-V International claimed the 25%-penetration mark was hit **early, in Jan
  2026** — treat as advocacy; it counts cheap deeply-embedded cores. [36]
- **By segment**:
  - Embedded/MCU/controllers: **already lost/losing for Arm** — this is where
    royalty-free wins, but it's penny-royalty territory; volume ≠ revenue.
  - Automotive/industrial: contested next; Arm's own customers hedge openly
    (Quintauris JV: Qualcomm, NXP, Bosch, Infineon, Nordic, ST — pooled RISC-V
    for automotive). <!-- VERIFY: Quintauris membership/status 2026 -->
  - Datacenter: real projects (Tenstorrent, Ventana, XiangShan, C930) but no
    volume share as of 2026; software + validation gap ~5 years behind Neoverse.
  - Mobile: no credible threat this decade — Android/iOS ecosystems are the moat.
- **Structural asymmetry**: RISC-V attacks Arm's *unit share* long before its
  *revenue* — Arm's money is in v9 smartphone SoCs and datacenter CSS, exactly
  where RISC-V is weakest. Meanwhile Arm is moving up-stack (CSS → own AGI
  silicon) partly because the low end is commoditizing beneath it. [1][15]
- **Fair one-liner**: RISC-V is eating the parts of the market Arm barely
  monetized; the war for the profitable core (mobile, datacenter) hasn't
  started yet — and China is the wildcard that could force it.

## Risks (Arm)
- **Qualcomm**: lost the first case; countersuit trial late 2026; worst case =
  damaged relationship with its largest-royalty customer + accelerated customer
  hedging (RISC-V, internal cores). [22][24]
- **Channel conflict**: selling its own AGI CPU puts Arm in competition with the
  licensees who are 100% of its revenue. [16][17]
- **China exposure**: Arm China is a quasi-independent entity and a mid-teens %
  of revenue; RISC-V is state policy there. <!-- VERIFY: current Arm China revenue share (was ~17% around IPO) --> [31]
- **Valuation**: ~$320B+ market cap on ~$4.9B revenue (~65× sales) prices in
  flawless datacenter + own-silicon execution. [8][10]
- **SoftBank overhang**: ~87–90% owner; float is thin; SoftBank's AI ambitions
  (Ampere, Stargate) may steer Arm's roadmap. [8][19]

## Fact ammo — lines that land
- **350+ billion** Arm chips shipped — 40+ for every human alive; and Arm has
  never fabbed a single one. [1]
- Over **99% of smartphones** run on Arm — whoever won the phone war, Arm won. [3]
- Arm's royalty is **pennies per chip (~1–2% of price)** — the entire company's
  revenue is $4.9B, yet it's valued at ~$320B+: the market pricing a *tax on
  computing itself*. [1][4][8]
- Founded 1990: **12 engineers in a Cambridge barn**, seeded with $3M from Apple
  to power the Newton — the flop that accidentally created the mobile era's
  most important company. [11][12]
- The biggest shipper of Arm's would-be killer? **Nvidia — ~1 billion RISC-V
  cores a year**, hidden inside its GPUs. [28]
- June 2026, Computex: Arm crosses **~50% of hyperscaler CPU compute** — the
  x86 server monopoly ended not with a bang but with a cloud invoice. [1][13]
- March 2026: after 35 years of "we don't make chips," Arm started making chips
  (AGI CPU, Meta as lead customer) — the blueprint company crossed its own
  rubicon. [15][16]

---

## Sources
1. Arm Newsroom, "Arm delivers record-breaking quarter and full-year results" (Q4 FYE26, May 2026) — https://newsroom.arm.com/news/arm-q4-fye26-results
2. Arm Holdings Form 20-F FY2026 (SEC) — https://www.sec.gov/Archives/edgar/data/0001973239/000197323926000097/arm-20260331.htm
3. Arm Holdings Form 20-F FY2025 (SEC; >99% smartphones, FY25 revenue) — https://www.sec.gov/Archives/edgar/data/1973239/000197323925000016/arm-20250331.htm
4. Screenwich, "ARM Licensing vs Royalties Business Model Deep Dive" — https://screenwich.com/blog/arm-arm-licensing-vs-royalties-business-model-deep-dive/
5. TIKR, "How to Value ARM: A Royalty Business Trading Like a Growth Stock" — https://www.tikr.com/blog/how-to-value-arm-a-royalty-business-trading-like-a-growth-stock
6. The Next Platform, "Armv9 Architecture Helps Lift Arm To New Financial Heights" — https://www.nextplatform.com/compute/2025/05/13/armv9-architecture-helps-lift-arm-to-new-financial-heights/1652498
7. CNBC, "Arm prices IPO at $51 per share, valuing company at over $54 billion" — https://www.cnbc.com/2023/09/13/arm-prices-ipo-at-51-per-share.html
8. TradingKey, "Arm Market Value Surpasses $300 Billion, SoftBank's 87% Stake" — https://www.tradingkey.com/analysis/stocks/us-stocks/261921505-arm-300b-softbank-87-stake-wins-cpu-fuels-wall-street-tradingkey
9. Financier Worldwide, "SoftBank to acquire ARM Holdings in $32bn deal" — https://www.financierworldwide.com/softbank-to-acquire-arm-holdings-in-32bn-deal
10. StockAnalysis.com, ARM market cap — https://stockanalysis.com/stocks/arm/market-cap/
11. Arm Newsroom, "The official history of Arm" — https://newsroom.arm.com/blog/arm-official-history
12. Arm Developer blog, "A Brief History of Arm: Part 1" — https://developer.arm.com/community/arm-community-blogs/b/architectures-and-processors-blog/posts/a-brief-history-of-arm-part-1
13. TechTimes, "x86 Data Center Dominance Ends: Arm Crosses 50% Hyperscaler CPU Share at Computex" (June 2026) — https://www.techtimes.com/articles/317622/20260602/x86-data-center-dominance-ends-arm-crosses-50-hyperscaler-cpu-share-computex.htm
14. Tom's Hardware, "Arm servers capture over 45% of data center market revenue" (IDC, Q1 2026) — https://www.tomshardware.com/desktops/servers/arm-servers-capture-over-45-percent-of-data-center-market-revenue-gpu-clusters-and-high-end-ai-infrastructure-fuel-a-tectonic-shift-away-from-x86
15. Arm Newsroom, "Arm expands compute platform to silicon products in historic company first" (AGI CPU, 24 Mar 2026) — https://newsroom.arm.com/news/arm-agi-cpu-launch
16. The Next Platform, "Arm Comes Full Circle With Homegrown, AI-Tuned Server CPU" — https://www.nextplatform.com/compute/2026/03/25/arm-comes-full-circle-with-homegrown-ai-tuned-server-cpu/5211524
17. HPCwire, "Arm Flexes with New Data Center CPU for AI Inference" — https://www.hpcwire.com/2026/03/26/arm-flexes-with-new-data-center-cpu-for-ai-inference/
18. SemiAnalysis, "CPUs are Back: The Datacenter CPU Landscape in 2026" — https://newsletter.semianalysis.com/p/cpus-are-back-the-datacenter-cpu
19. SoftBank Group, "Completion of Acquisition of Ampere Computing Holdings LLC" (25 Nov 2025) — https://group.softbank/en/news/press/20251126
20. Forbes, "SoftBank Completes $6.5 Billion Purchase Of Ampere Computing" — https://www.forbes.com/sites/ywang/2025/11/26/softbank-completes-65-billion-purchase-of-ampere-computing/
21. Futurum Group, "Litigation SITREP: the Ongoing Dispute Between Qualcomm and Arm" — https://futurumgroup.com/insights/litigation-sitrep-ongoing-dispute-between-qualcomm-and-arm/
22. Qualcomm IR, "Qualcomm Achieves Complete Victory Over Arm in Litigation" (30 Sept 2025) — https://investor.qualcomm.com/news-events/press-releases/news-details/2025/Qualcomm-Achieves-Complete-Victory-Over-Arm-in-Litigation-Challenging-Licensing-Agreements/default.aspx
23. RCR Wireless, "'Full and final judgment' reached in Qualcomm vs. Arm case" — https://www.rcrwireless.com/20251001/business/qualcomm-arm-2
24. EE Times, "Twists and Turns as Qualcomm Wins Arm Legal Case" — https://www.eetimes.com/twists-and-turns-as-qualcomm-wins-arm-legal-case-arm-shares-rise/
25. FTC, "Statement Regarding Termination of Nvidia Corp.'s Attempted Acquisition of Arm Ltd." (Feb 2022) — https://www.ftc.gov/news-events/news/press-releases/2022/02/statement-regarding-termination-nvidia-corps-attempted-acquisition-arm-ltd
26. Nvidia Q4 FY22 press release (SEC 8-K; $1.36B Arm write-off) — https://www.sec.gov/Archives/edgar/data/1045810/000104581022000008/q4fy22pr.htm
27. CSET (Georgetown), "RISC-V: What it is and Why it Matters" — https://cset.georgetown.edu/article/risc-v-what-it-is-and-why-it-matters/
28. FinancialContent, "RISC-V Claims the High Ground as NVIDIA Ships One Billion Cores" — https://markets.financialcontent.com/stocks/article/tokenring-2026-2-5-the-open-architecture-revolution-risc-v-claims-the-high-ground-as-nvidia-ships-one-billion-cores
29. Tom's Hardware, "Nvidia's CUDA platform now supports RISC-V" (July 2025) — https://www.tomshardware.com/pc-components/gpus/nvidias-cuda-platform-now-supports-risc-v-support-brings-open-source-instruction-set-to-ai-platforms-joining-x86-and-arm
30. TechTarget, "Seagate, Western Digital outline progress on RISC-V designs" — https://www.techtarget.com/searchstorage/news/252493477/Seagate-Western-Digital-outline-progress-on-RISC-V-designs
31. SCMP, "Alibaba's chip unit T-Head steps up RISC-V development as China pushes the open-source architecture in face of US sanctions" — https://www.scmp.com/tech/big-tech/article/3212122/alibabas-chip-unit-t-head-steps-risc-v-development-china-pushes-open-source-architecture-face-us
32. Sen. Warner et al., letter to BIS on RISC-V (30 Sept 2025) — https://www.warner.senate.gov/wp-content/uploads/media/doc/9.30.25%20RISC-V%20Letter%20to%20BIS.pdf
33. CSIS, "Sustaining Standards Leadership: The United States Cannot Disengage from RISC-V" — https://www.csis.org/analysis/sustaining-standards-leadership-united-states-cannot-disengage-risc-v
34. Omdia, "RISC-V adoption will be accelerated by AI" (17B chips / ~25% share by 2030) — https://omdia.tech.informa.com/pr/2024/may/risc-v-adoption-will-be-accelerated-by-ai-according-to-new-omdia-research
35. The SHD Group, "RISC-V Market Report: Application Forecasts in a Heterogeneous World" — https://theshdgroup.com/wp-content/uploads/2024/01/RISC-V-Market-Analysis-2024-Abridged-Report-2.pdf
36. Tom's Hardware, "RISC-V set to announce 25% market penetration" — https://www.tomshardware.com/tech-industry/semiconductors/risc-v-set-to-announce-25-percent-market-penetration-open-standard-isa-is-ahead-of-schedule-securing-fast-growing-silicon-footprint
