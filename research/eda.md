# Research — EDA (Synopsys · Cadence · Siemens EDA)

As-of: 2026-07

Fact pack. Ammunition only, no prose. `[n]` → source list at bottom.
`<!-- VERIFY -->` = not fully confident, check before recording.
Fiscal calendars: **Synopsys FY ends Oct 31** (FY2025 = Nov'24–Oct'25); **Cadence FY = calendar year**. Quote dates accordingly.

## What EDA is (teachable)
- EDA = Electronic Design Automation: the software used to design chips. You
  cannot hand-draw a modern chip — NVIDIA's Blackwell GPU has **208 billion
  transistors** [1]. At one transistor per second, placing them by hand would
  take **~6,600 years**; EDA software does it in months. (Handle for the
  headline number.)
- The flow, in plain language:
  1. **RTL** — engineers describe the chip's *behavior* in code (Verilog/VHDL),
     like writing the recipe, not drawing the cake.
  2. **Synthesis** — software compiles that code into millions of logic gates.
  3. **Place & route** — software decides where every gate sits and draws all
     the wiring between them, under physics constraints (timing, power, heat).
  4. **Verification** — simulate/emulate the whole design to prove it works
     *before* manufacturing, because a mask-set mistake costs millions.
  5. **GDSII / sign-off** — the final geometric file shipped to the foundry;
     literally the blueprint TSMC prints.
- So the honest one-liner: **chips are not drawn, they are compiled.** Humans
  write intent; software produces the 200-billion-transistor artifact.
- Verification eats the budget: **~50%+ of total project time** goes to
  verification, stable for a decade (Wilson Research Group / Siemens studies);
  even *design* engineers spend **~40–47%** of their own time on verification;
  demand for verification engineers grew **6.2%/yr** vs 2.7%/yr for designers
  (2007–2022). [2][3]
- Design cost per chip at the edge (IBS estimates): 28nm **~$40M** → 7nm
  **~$217M** → 5nm **~$416–449M** → 3nm **~$581–590M** → 2nm **~$724M** —
  before a single wafer is bought. [4] <!-- VERIFY: IBS figures vary by vintage/source; use as order-of-magnitude -->

## The triopoly & market shares
- Electronic System Design industry revenue (EDA + design IP + services, per
  SEMI ESD Alliance): **~$21.2B in 2025** (Q1 $5.10B, Q2 $5.09B, Q3 $5.57B,
  Q4 $5.47B; four-quarter growth ~10%). [5]
- That ~$21B software layer gates a chip industry that sold **$791.7B in 2025**
  (+25.6% YoY, per SIA) — EDA is **~2.7%** of the value of the industry that
  cannot exist without it. [6]
- (WSTS's spring-2026 forecast even projects ~$1.5T for 2026 on a memory/AI
  surge — use cautiously, it's a forecast.) [7] <!-- VERIFY: extreme forecast; re-check before quoting -->
- Market shares: **Synopsys ~31%, Cadence ~30%, Siemens EDA ~13%** — three
  companies ≈ **~74%** of the market. [8] Sanity check vs revenue: SNPS $7.05B
  and CDNS $5.30B against ~$21.2B ESD total ≈ 33% + 25%. <!-- VERIFY: share cuts differ by analyst (EDA-only vs EDA+IP); some sources claim big-3 >90% of *advanced-node digital flow* seats — plausible but verify before using the 90% line -->
- In China specifically, the big three held **~80%** of the EDA market. [9]
- Only meaningful #4 worldwide: China's Empyrean. [10]

## Synopsys (the biggest)
- Founded 1986 by Aart de Geus; its Design Compiler made logic *synthesis* an
  industry — the original "chips compiled from code" company. CEO today:
  Sassine Ghazi. <!-- VERIFY: light-check founding details before recording -->
- **FY2025 (ended Oct 31, 2025): revenue $7.054B**, +15% YoY; backlog
  **$11.4B**. [11]
- GAAP gross margin FY2025: **~77%** ($5.43B gross profit on $7.05B). [12]
- **Ansys acquisition: closed July 17, 2025; ~$34.9B** total consideration
  ($17.6B cash + $17.1B stock) — the biggest deal in EDA history; adds
  simulation of *everything around the chip* (thermal, mechanical, fluids —
  "silicon to systems"). Ansys contributed $756.6M to FY2025. [11][13]
- China's SAMR cleared the deal **July 14, 2025 — one day before the deal
  deadline** — with conditions: divest Synopsys' optics/photonics simulation
  and Ansys' power-analysis unit, plus **10 years** of behavioral remedies (no
  bundling, keep interoperability with third-party/Chinese EDA). [14]
- Post-merger: restructuring plan to cut **~10% of workforce (~2,000 people)**
  announced after a Q3 FY2025 revenue miss; $300–350M charges. [15]
- Latest: **Q2 FY2026 (ended Apr 30, 2026): revenue $2.276B, +42% YoY**
  (Ansys segment $652.4M); FY2026 guidance raised to **$9.625–9.705B**. [16]
- IP business: **#2 semiconductor IP vendor in the world after Arm** — Arm +
  Synopsys together = **66%** of the $8.5B design-IP market (2024, IPnest);
  Synopsys dominates *wired interface* IP (the PCIe/USB/HBM PHY blocks nearly
  every SoC licenses rather than reinvents). [17]
- China: **$814M = ~11.5% of FY2025 revenue**, down ~18% YoY (export-control
  whiplash). [18]

## Cadence (the profitable one)
- Formed 1988 (SDA Systems + ECAD merger). CEO: Anirudh Devgan. Historic
  stronghold: analog/custom design (Virtuoso) + digital implementation +
  hardware. <!-- VERIFY: light-check founding details -->
- **FY2025 (calendar): revenue $5.297B**, +14% YoY; non-GAAP operating margin
  **44.6%**; year-end backlog **$7.8B**. [19]
- GAAP gross margin: **~84–87%** by quarter (e.g. 86.5% in Q1 2025) — software
  economics on infrastructure the world can't skip. [20]
- Latest: **Q1 2026: revenue $1.474B** (vs $1.242B), record backlog **$8.0B**;
  2026 guidance raised to **$6.125–6.225B** (+16–18%); launched "AgentStack"
  agentic-AI design platform. [21]
- **Hardware emulation — Palladium**: room-sized custom machines that *pretend
  to be your chip* before it exists, so you can boot the OS on silicon that
  hasn't been made. Palladium Z3 (April 2024): handles designs up to **48
  billion gates**, >2× prior capacity — and runs on NVIDIA BlueField DPUs, so
  NVIDIA hardware helps verify future NVIDIA designs. [22]
- **Computational software strategy** — Devgan's thesis: chip-solver math
  generalizes to all physics. OpenEye Scientific (molecular simulation for
  pharma, **$500M**, 2022) [23]; BETA CAE (mechanical/auto simulation,
  **$1.24B**, 2024) [24]; Millennium M1 CFD supercomputer (2024); reported
  **$3.16B** deal for Hexagon's Design & Engineering business (Feb 2026).
  <!-- VERIFY: Hexagon D&E deal size/close status — seen only in secondary commentary [25] -->
- China: **$680M = 13% of 2025 revenue**. [26]

## Siemens EDA (the quiet third)
- Was **Mentor Graphics** (founded 1981, Oregon) — acquired by Siemens for
  **$4.5B** ($37.25/share, announced Nov 2016, closed March 2017); renamed
  Siemens EDA in 2021. Mentor's last full year standalone: $1.28B revenue. [27][28]
- Today: estimated **~$2.2–2.5B revenue (2025)**, ~13% share — but opaque:
  buried inside Siemens Digital Industries Software, <5% of Siemens AG. [8]
- Crown jewel: **Calibre** — the de-facto physical-verification/sign-off
  standard; ~**85%+ installed base**; essentially every advanced chip at every
  foundry passes through Calibre checks before manufacture, whoever's tools
  designed it. [8] <!-- VERIFY: 85% figure is analyst/SemiAnalysis framing, not audited -->
- Also strong in: test (Tessent), PCB design, Veloce emulation. Strategic
  point: Siemens bought EDA to fuse chip design with industrial digital-twin
  software — the German giant's bet that chips and machines get co-designed.

## The moat
- **Time**: 30–40 years of accumulated tool code, file formats, and foundry
  calibration. A startup can't shortcut the decades of silicon learning baked
  into sign-off engines.
- **Training lock-in**: every chip-design curriculum and every engineer's
  muscle memory is Synopsys/Cadence keystrokes; switching tools means
  retraining an entire workforce mid-product-cycle.
- **PDK certification loop**: foundries (TSMC/Samsung/Intel) certify EDA tools
  for each new process node; tools and process are co-developed years before
  a node ships. New entrants aren't in the room. (Qualitative — no single
  citation; it's how node enablement works.)
- **Switching costs**: multi-year subscriptions; SNPS backlog **$11.4B** [11],
  CDNS backlog **$8.0B** [21] — customers pre-commit years of spend.
- **Margins as evidence**: GAAP gross margins **~77% (SNPS) to ~86% (CDNS)**
  [12][20]; Cadence non-GAAP operating margin ~45% [19].
- Direction-of-the-lie hedge: moat is strongest at the leading edge; at mature
  nodes (28nm+) Chinese and niche tools genuinely compete.

## Geopolitics — EDA as an export-control weapon
- **Aug 2022 (the precision strike)**: BIS controls ECAD software "specially
  designed" for **GAAFET** transistor development (ECCN 3D006, effective Oct
  14, 2022) — banning the *software for a transistor China couldn't build yet*;
  a pre-emptive lock on 3nm-class design. [29]
- **May 2025 (the sledgehammer)**: BIS letters (May 23/29) to Synopsys,
  Cadence, Siemens imposed license requirements on essentially **all EDA
  software/tech to China** (ECCNs 3D991/3E991). Synopsys suspended guidance
  and halted China sales. [30][31]
- **July 2, 2025 (the reversal)**: restrictions **rescinded** — part of the
  US–China framework deal trading export-control relief for Chinese **rare
  earth** exports. Total episode: ~6 weeks. EDA became a literal bargaining
  chip. [32][33]
- China's domestic EDA push:
  - **Empyrean** — world #4 EDA vendor; FY2024 revenue RMB 1.22B (**~$168M**,
    +21%); ~**10–12% of China's** EDA market; US Entity List Dec 2024, then
    ceded board control to state-owned China Electronics Corp; acquired
    Xpeedic (2025); claims China's first full-flow memory-chip EDA platform
    (Aug 2025). [9][10][34]
  - **Primarius** — ~5–6% of China market; strongest in SPICE/device modeling. [9]
  - China EDA self-sufficiency passed **~10%** in 2024 (from near zero); big-3
    still ~80% of China's market. [9]
  - **Huawei** claimed (March 2023) a localized EDA toolchain for **14nm and
    above** — mature nodes only, never externally verified. [35]
- Scale check for the segment: cutting China off cost the big three roughly
  **$1.5B/yr of revenue** (SNPS $814M + CDNS $680M + Siemens' share) but
  denies China the tools for a $792B industry's leading edge. [18][26]

## AI in EDA (AI designing the chips that run AI)
- **Synopsys DSO.ai** (2020) — billed as the industry's first autonomous AI
  application for chip design; reinforcement learning explores design-space
  configurations humans never could. **First 100 commercial AI-driven
  tape-outs by Feb 2023**; STMicroelectronics: >3× PPA-exploration
  productivity; SK hynix: 15% cell-area reduction / 5% die shrink. [36]
- **Cadence Cerebrus** (2021) — RL-driven implementation: customer-reported
  results include 10% better performance / 15% lower power (Renesas), 5% die
  shrink (MediaTek), **up to 10× engineering productivity**; Cerebrus AI
  Studio claims up to 20% PPA gains and 5–10× faster delivery. [37][38]
- 2026 frontier is **agentic**: Cadence AgentStack / "Super Agent" (Q1 2026)
  [21]; Synopsys pushing AgentEngineer-style autonomous flows.
  <!-- VERIFY: Synopsys agent product naming/status as of mid-2026 -->
- The loop that lands: NVIDIA designs GPUs with Cadence/Synopsys tools → those
  tools now embed AI that runs on NVIDIA GPUs (Palladium Z3 even ships with
  NVIDIA BlueField inside) → better GPUs → better design AI. Recursive
  self-improvement, industrialized. [1][22]
- Google precedent: DeepMind's RL floorplanning ("AlphaChip", Nature 2021)
  used in TPU layouts — even chip *buyers* proved the concept.
  <!-- VERIFY: AlphaChip naming/deployment details from memory -->

## Risks
- **China**: 11–13% of big-3 revenue can be switched off by one letter — in
  either direction (May→July 2025 proved both). [18][26][30][32]
- **Displacement from below**: Chinese EDA now credible at mature nodes; every
  export-control cycle accelerates it (self-sufficiency ~0%→10%+ in a few
  years). [9]
- **Integration risk**: Synopsys is digesting a $35B merger + 10% workforce
  cut simultaneously; Q3 FY2025 miss showed the IP business can wobble. [15]
- **Regulatory**: SAMR's 10-year behavioral remedies constrain Synopsys-Ansys
  bundling — China regulates the merger it couldn't block. [14]
- **Compliance**: Cadence pleaded guilty / paid a ~$140M penalty (2025) over
  historical China export violations. <!-- VERIFY: from memory — confirm case details (NUDT sales, DOJ settlement July 2025) before recording -->
- **AI disruption**: if LLMs commoditize RTL/verification, the seat-license
  model could erode — though incumbents currently monetize AI as premium
  add-ons, and margins say they're winning so far.

## Fact ammo — lines that land
- "Nobody draws chips. NVIDIA's Blackwell has **208 billion transistors** —
  at one per second, that's 6,600 years of drawing. Chips aren't drawn,
  they're **compiled**." [1]
- "The entire EDA industry is about **$21B** — under 3% of the $792B chip
  industry. Delete these three companies and the other 97% stops." [5][6]
- "**Half** of chip design isn't designing — it's *verifying*. A 2nm design
  costs ~$724M before you've manufactured anything, and proving it works is
  the biggest line item." [2][4]
- "In May 2025 one letter from the Commerce Department switched off China's
  access to chip-design software. Six weeks later, a rare-earths deal
  switched it back on. Chip software is now literally traded against
  minerals." [30][32]
- "China approved the biggest EDA merger ever with **one day** to spare — and
  attached 10 years of conditions. The US controls the software; China
  discovered it controls the *permission slip*." [13][14]
- "Cadence's emulator runs on NVIDIA chips, and NVIDIA's chips are designed on
  Cadence software. AI is now designing the chips that AI runs on." [1][22]

---

## Sources
1. NVIDIA press release, "NVIDIA Blackwell Platform Arrives…" (208B transistors) — https://nvidianews.nvidia.com/news/nvidia-blackwell-platform-arrives-to-power-a-new-era-of-computing
2. Siemens Verification Horizons, 2022 Wilson Research Group Functional Verification Study (Part 4: project time / engineer time) — https://blogs.sw.siemens.com/verificationhorizons/2022/11/06/part-4-the-2022-wilson-research-group-functional-verification-study/
3. Siemens Verification Horizons, 2022 Wilson study (Part 3: demand CAGR design vs verification engineers) — https://blogs.sw.siemens.com/verificationhorizons/2022/10/30/part-3-the-2022-wilson-research-group-functional-verification-study/
4. SemiEngineering, "Facing Off Against Growing Chip Design Complexity" (IBS design-cost-by-node estimates) — https://semiengineering.com/facing-off-against-growing-chip-design-complexity/
5. SEMI ESD Alliance, Q4 2025 ESD industry revenue release (plus Q1–Q3 2025 releases) — https://www.semi.org/en/semi-press-release/esd-alliance-reports-electronic-system-design-industry-posts-5.5-billion-dollars-in-revenue-in-q4-2025
6. SIA, "Global Annual Semiconductor Sales Increase 25.6% to $791.7 Billion in 2025" — https://www.semiconductors.org/global-annual-semiconductor-sales-increase-25-6-to-791-7-billion-in-2025/
7. WSTS, Spring 2026 forecast ($1.5T 2026, memory-driven) — https://www.wsts.org/76/Recent-News-Release
8. SemiAnalysis, "EDA Market Primer" (share splits; Siemens EDA revenue estimate; Calibre installed base) — https://newsletter.semianalysis.com/p/eda-market-primer
9. TrendForce, "China's EDA Self-Sufficiency Tops 10% in 2024" (big-3 ~80% of China; Empyrean/Primarius/Xpeedic shares) — https://www.trendforce.com/news/2025/06/05/insights-chinas-eda-self-sufficiency-tops-10-in-2024-will-u-s-crackdown-boost-or-block-its-chip-push/
10. SCMP, "China's top player Empyrean eyes opportunities from US chip curbs" (world #4; revenue) — https://www.scmp.com/tech/article/3315237/chinas-top-player-empyrean-eyes-opportunities-us-chip-curbs-design-software
11. Synopsys, Q4/FY2025 results press release ($7.054B; $11.4B backlog; Ansys contribution) — https://news.synopsys.com/2025-12-10-Synopsys-Posts-Financial-Results-for-Fourth-Quarter-and-Fiscal-Year-2025
12. Synopsys FY2025 Form 10-K (gross profit / margin; segment detail) — https://www.sec.gov/Archives/edgar/data/883241/000088324125000028/snps-20251031.htm
13. Stocktitan/SEC 8-K summary, Ansys close July 17 2025, ~$34.9B consideration — https://www.sec.gov/Archives/edgar/data/883241/000119312525314200/d29055dex991.htm
14. US News/Reuters + MLex, China SAMR conditional approval July 14 2025 (divestitures; 10-yr remedies) — https://money.usnews.com/investing/news/articles/2025-07-14/china-grants-conditional-approval-for-synopsys-to-acquire-ansys
15. Reuters via Yahoo Finance, "Synopsys to cut about 10% of workforce" (~2,000 roles; $300–350M charges) — https://finance.yahoo.com/news/synopsys-cut-10-workforce-major-143726076.html
16. Synopsys, Q2 FY2026 results press release ($2.276B; raised FY26 guidance) — https://investor.synopsys.com/news/news-details/2026/Synopsys-Posts-Financial-Results-for-Second-Quarter-Fiscal-Year-2026/default.aspx
17. eeNews Europe (IPnest data), "Arm grows market share in buoyant IP market" (Arm+Synopsys 66%; $8.5B design-IP market 2024) — https://www.eenewseurope.com/en/arm-grows-market-share-in-bouyant-ip-market/
18. Bullfincher/Synopsys 10-K geography data, Synopsys China revenue FY2025 ($814M, ~11.5%) — https://bullfincher.io/companies/synopsys/revenue-by-geography
19. Cadence, Q4/FY2025 results press release ($5.297B; 44.6% non-GAAP op margin; $7.8B backlog) — https://investor.cadence.com/news/news-details/2026/Cadence-Reports-Fourth-Quarter-and-Fiscal-Year-2025-Financial-Results/default.aspx
20. Cadence Q1 2025 CFO commentary (GAAP gross margin 86.5%; 83.8–87.6% range) — https://s206.q4cdn.com/597110084/files/doc_financials/2025/q1/1q25-cfo-commentary.pdf
21. Cadence, Q1 2026 results press release ($1.474B; $8.0B backlog; raised guidance; AgentStack) — https://www.cadence.com/en_US/home/company/newsroom/press-releases/pr-ir/2026/cadence-reports-first-quarter-2026-financial-results.html
22. Cadence, Palladium Z3 / Protium X3 launch release (48B gates; >2× capacity; NVIDIA BlueField) — https://www.cadence.com/en_US/home/company/newsroom/press-releases/pr/2024/cadence-unveils-palladium-z3-and-protium-x3-systems-to-usher-in.html
23. Cadence, OpenEye Scientific acquisition ($500M, 2022) — https://www.cadence.com/en_US/home/company/newsroom/press-releases/pr/2022/cadence-completes-acquisition-of-openeye-scientific.html
24. Cadence SEC filing note, BETA CAE acquisition ($1.24B, 2024) — https://www.sec.gov/Archives/edgar/data/813672/000081367225000024/R14.htm
25. The Index Times, Cadence/Hexagon D&E commentary ($3.16B, Feb 2026) — weak source, verify — https://www.theindextimes.com/post/cdns-cadence-design-systems-the-agentic-ai-chip-factory
26. Cadence FY2025 Form 10-K (China $680M / 13% of revenue) — https://www.sec.gov/Archives/edgar/data/813672/000081367226000016/cdns-20251231.htm
27. Siemens press release, "Siemens closes Mentor Graphics acquisition" (March 2017) — https://press.siemens.com/global/en/pressrelease/siemens-closes-mentor-graphics-acquisition
28. Mentor Graphics 8-K, FY2017 results ($1.282B) + Machine Design, "$4.5 Billion" deal terms — https://www.machinedesign.com/news/article/21834976/siemens-acquires-mentor-graphics-for-45-billion
29. Arnold & Porter advisory, Aug 2022 BIS ECAD/GAAFET controls (ECCN 3D006) — https://www.arnoldporter.com/en/perspectives/advisories/2022/08/bis-implements-additional-controls
30. Kirkland & Ellis alert, May 2025 BIS letters to EDA firms (3D991/3E991 license requirement) — https://www.kirkland.com/publications/kirkland-alert/2025/06/bis-takes-aim-at-chinese-semiconductor
31. DataCenterDynamics, "Synopsys suspends financial forecasts, halts Chinese business" (May 2025) — https://www.datacenterdynamics.com/en/news/synopsys-suspends-financial-forecasts-halts-chinese-business-following-updated-us-export-restrictions/
32. CNBC, "U.S. lifts chip software curbs on China in sign of trade truce" (July 2/3, 2025) — https://www.cnbc.com/2025/07/03/us-lifts-chip-software-curbs-on-china-amid-trade-truce-synopsys-says-.html
33. Tom's Hardware, "White House lifts chip design export ban on China in exchange for rare earth materials compromise" — https://www.tomshardware.com/tech-industry/semiconductors/white-house-lifts-chip-design-export-ban-on-china-in-exchange-for-rare-earth-materials-compromise-export-licences-for-eda-software-sales-no-longer-required
34. Tom's Hardware, "Empyrean gives control to CEC after U.S. blacklisting" (Dec 2024 Entity List; CEC board control) + TrendForce memory-EDA platform (Aug 2025) — https://www.tomshardware.com/tech-industry/empyrean-technology-gives-control-to-cec-after-u-s-blacklisting-chinas-top-developer-of-chip-design-systems-hands-reins-to-state-owned-firm
35. Tom's Hardware / CNBC, Huawei 14nm EDA toolchain claim (March 2023) — https://www.tomshardware.com/news/huawei-develops-tools-for-14nm-chips
36. Synopsys press release, "AI-designed Chips Reach Scale with First 100 Commercial Tape-outs" (Feb 2023; STMicro 3×; 15% cell area) — https://news.synopsys.com/2023-02-07-AI-designed-Chips-Reach-Scale-with-First-100-Commercial-Tape-outs-Using-Synopsys-Technology
37. Cadence press release, "Cadence Cerebrus AI-Based Solution Delivers Transformative Results" (MediaTek 5% die / 6% power; Renesas TNS; 10× productivity) — https://www.cadence.com/en_US/home/company/newsroom/press-releases/pr/2022/cadence-cerebrus-ai-based-solution-delivers-transformative.html
38. Cadence, Cerebrus AI Studio product page / launch coverage (20% PPA; 5–10× delivery) — https://www.cadence.com/en_US/home/tools/digital-design-and-signoff/soc-implementation-and-floorplanning/cerebrus-intelligent-chip-explorer.html
