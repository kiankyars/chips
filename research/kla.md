# Research — KLA ⭐

As-of: 2026-08-18

Note: KLA's fiscal year ends June 30. FY2026 results were released July 28, 2026.

## What KLA is
- Milpitas, California — a Silicon Valley original. Its core **Semiconductor
  Process Control** franchise makes inspection (find defects) and metrology
  (measure dimensions/alignment) equipment: those tools measure rather than
  deposit, etch, or print. KLA's smaller SPTS-led Specialty Semiconductor
  Process business does sell deposition and etch tools. [3][7]
- History one-liner: **KLA Instruments** (founded 1975, Ken Levy & Bob Anderson,
  photomask defect detection) + **Tencor Instruments** (founded 1976, Karel Urbanek)
  merged in **1997** as KLA-Tencor (combined revenue already >$1B); renamed
  **KLA Corporation** in 2019. [7]
- Customer set = everyone who runs a fab: TSMC, Samsung, Intel, SK Hynix, Micron,
  plus mask shops and packaging houses.

## Teachable: why measurement is the fab's immune system
- A leading-edge chip takes **600–1,000+ process steps** per wafer [8], and a wafer
  spends **~3–4 months** traversing the fab from bare silicon to finished circuits. [9]
- The horror scenario: a process drifts at step 400 and nobody notices until
  wafers fail test at step 1,000 — every wafer started in between is suspect.
  With a ~3-month cycle time, a fab has months of work-in-progress in the line
  at all times; an undetected excursion can poison weeks of it. (Framing; the
  step/cycle numbers are sourced above.)
- So fabs measure constantly, in-line, between steps: catch the drift at step 401,
  quarantine one lot instead of scrapping a quarter's output. That's why process
  control is the fab's **immune system** — and why "if you can't measure it, you
  can't build it" is literally true at nm scale.
- Yield economics: "a 1 percent improvement in product yield can amount to
  **millions of dollars per week** for a high-volume device." [10] McKinsey found one
  manufacturer losing **~$68M** to yield losses; a systematic yield program delivered
  a 10% yield improvement in six months. [11]
- The dollar value of one yield point is not universal: it depends on die mix,
  wafer value, the yield mechanism, and customer contracts. KLA's economic case
  is the avoided work-in-process exposed after a process excursion, not one
  course-wide dollar conversion.
- New fabs start at **30–50% yield** and take **18–24 months** of hunting defect
  sources across hundreds of steps to get above 80%. [12] Ramping yield faster =
  the whole game; KLA sells the tools that make the ramp possible.
- Why process control intensity RISES every node: smaller features → smaller
  killer defects → more inspection points; EUV + multi-patterning → more layers
  that must align; larger AI die + HBM stacks → less redundancy, higher cost per
  defect. KLA's own framing: leading-edge design starts, HBM/DRAM complexity,
  bigger die, and advanced packaging all structurally raise process-control
  intensity. [2][13]

## Market position
- **~56–58%** of the semiconductor process control market (CY2025) — sources
  cluster at 56% [4] with KLA's own investor-day material citing ~58% [5].
- **~7× the nearest competitor**, and share is still growing: **+360 bps since
  2021** (KLA's own claim, citing published industry research). [2]
- Nearest competitor Applied Materials at only **~10%** of metrology/inspection [4];
  other rivals: **Onto Innovation** (packaging/macro inspection), **Hitachi
  High-Tech** (CD-SEM), **ASML/HMI** (e-beam inspection), **Nova**, **Camtek**.
- Near-monopoly corners: **reticle/photomask inspection ~80%+ share**; patterned
  wafer inspection **~75–80%**. [6]
- CY2025: took the **#1 position in advanced wafer-level packaging** process
  control — share up **14 percentage points**, revenue up **~70% YoY**. [2]
- Process control ≈ **~10%+ of total WFE spend** and rising with node complexity.
  <!-- VERIFY: exact intensity %, analyst figures vary ~9–11% -->

## The tech (teachable, briefly)
- **Broadband plasma (BBP) optical inspection** (39xx/29xx series): a laser-driven
  plasma light source spanning deep-UV to visible sweeps entire wafers for
  nm-scale defects at production speed — the workhorse, a 40-year product legacy. [14]
- The scale problem, as arithmetic: a ~20nm defect on a 300mm wafer, scaled up so
  the defect is a golf ball, means finding that golf ball somewhere on a disc
  **~600 km across**. Inspection time varies with recipe, sensitivity, coverage,
  and sampling.
- **E-beam review & inspection** (eSL10): optical casts the wide net fast; the
  electron microscope then revisits selected flagged sites at high resolution
  to classify them. Optical = radar, e-beam = microscope. [14][16]
- **Overlay metrology** (Archer series): measures whether each new layer landed
  on the previous one; leading-edge overlay error budgets are down to a few nm
  <!-- VERIFY: exact overlay budget at 2nm-class nodes -->. EUV + multipatterning
  multiply the layers that must align → more overlay measurement per wafer.
- **Reticle/mask inspection** (Teron): a defect on the mask prints onto *every
  die of every wafer* — catch it once at the mask shop or scrap everything
  downstream. This is the near-monopoly franchise. [6]

## Financials
FY2026 (ended June 30, 2026) [17]:
- Revenue: **$13.579B**. GAAP net income: **$4.831B**.
- GAAP gross margin: **61.30%**, derived from $13.579B revenue less $5.255B
  cost of revenue in KLA's full-year GAAP statement.
- Free cash flow: **$3.77B**. Semiconductor Process Control revenue: **$12.245B**.

FY2025 (ended June 30, 2025) [1]:
- Revenue: **$12.16B**. GAAP net income **$4.06B** (split-adjusted EPS $3.04);
  non-GAAP net income **$4.45B** (split-adjusted EPS $3.33).
- GAAP gross margin: **60.9%** (derived from 8-K: $12.156B revenue, $4.752B COGS).
- Free cash flow: **$3.75B**.
- Segments: Semi Process Control **$10.95B**, Specialty Semiconductor **$587M**,
  PCB & Component Inspection **$622M**. Services **$2.68B** (~22% of revenue).

Q3 FY2026 operating snapshot (March 2026 quarter) [2]:
- Revenue **$3.415B** (+11% YoY). Split-adjusted non-GAAP EPS **$0.94** / GAAP
  **$0.91**.
- **Non-GAAP gross margin 62.2%; non-GAAP operating margin 42.6%** — the highest
  margins of the big-5 WFE makers (vs ASML's 52.8% gross margin in 2025; AMAT/Lam
  high-40s, TEL mid-40s <!-- VERIFY: exact AMAT/Lam/TEL current GMs -->). [2][15]
- Services **$775M** = **23% of revenue**, +16% YoY — the annuity under the
  cyclical tool business.
- FCF $622M in the quarter; trailing-12-month FCF **$4B** = **31% FCF margin**.
- Systems mix: foundry/logic 62% / memory 38% (DRAM = 86% of memory — the HBM effect).
- March 2026 Investor Day: **13–17% revenue CAGR target through CY2030**; sees WFE
  market at **$215B ± $20B by 2030**; dividend +21% to $0.23/quarter on the
  split-adjusted basis (17th consecutive increase); new $7B buyback; >90% of
  FCF returned. [2]

## Geopolitics — China & export controls
- China revenue share: **43% (FY2024) → 33% (FY2025)** [3] → **24%** (March 2026
  quarter; Taiwan 26%, Korea 20%, N. America 12%). [2]
- KLA's own 10-K attributes the decline to post-boom normalization of Chinese
  spending **plus** "more stringent U.S. export controls and regulations." [3]
- US BIS rules (Oct 2022, Oct 2023, Dec 2024) bar advanced-node process-control
  tools and service to Chinese fabs; KLA guided that the December 2024 rules
  would cut CY2025 revenue by roughly **~$500M** <!-- VERIFY: exact guidance
  figure and its breakdown from Jan-2025 earnings call -->.
- Framing: process control is a chokepoint like litho, softer but real — yield
  learning is exactly what China's leading-edge effort lacks, and KLA's tools are
  the yield-learning machine.

## Risks
- WFE cyclicality — process control is somewhat countercyclical (R&D/ramp-driven,
  fabs measure more when yields are bad) but not immune.
- China cliff: from 43% to 24% of revenue in ~2 years [2][3]; further controls or
  Chinese domestic substitution (e.g. Shanghai Precision/RSIC-class efforts)
  <!-- VERIFY: current state of Chinese domestic inspection-tool vendors --> would bite.
- Customer concentration: a handful of leading-edge manufacturers (TSMC, Samsung,
  Intel, Hynix, Micron) dominate orders.
- Technology transition risk: if e-beam/multi-beam inspection (ASML-HMI, AMAT)
  ever matches optical throughput, KLA's BBP moat narrows.
- Valuation/expectations: priced as the quality compounder of the group; a WFE
  digestion year hits the multiple.

## Sources
1. KLA, "Fiscal 2025 Fourth Quarter and Full Year Results" (8-K exhibit, July 31, 2025) — https://www.sec.gov/Archives/edgar/data/319201/000031920125000020/exhibit991earningsrelease7.htm (also: https://ir.kla.com/news-events/press-releases/detail/500/kla-corporation-reports-fiscal-2025-fourth-quarter-and-full)
2. KLA, "Letter to Shareholders — Q3 Fiscal 2026" (March 2026 quarter, reported April 29, 2026) — https://d1io3yog0oux5.cloudfront.net/_a357bfc9113388e37f3bfcb2ea2f0b64/klatencor/db/1117/10655/letter_to_shareholders/KLA+Shareholder+Letter+-+Q3+FY26.pdf
3. KLA, Form 10-K FY2025 (China 33% of revenue vs 43% FY2024) — https://www.sec.gov/Archives/edgar/data/319201/000031920125000024/klac-20250630.htm
4. Maximize Market Research, "KLA controls over 56% of the market that makes AI chips possible" — https://www.maximizemarketresearch.com/news/kla-corporation-semiconductor-wafer-inspection/
5. Investing.com, "KLA Q3 FY2026 slides: market share hits 58%, ambitious 2030 targets" — https://www.investing.com/news/company-news/kla-q3-fy2026-slides-market-share-hits-58-ambitious-2030-targets-93CH-4671214
6. GuruFocus/TradingView, "KLA: Semiconductor Inspection Market Leader" (reticle ~80%+, patterned wafer 75–80%) — https://www.gurufocus.com/news/2957719/kla-semiconductor-inspection-market-leader
7. Wikipedia, "KLA Corporation" (founding, 1997 merger, 2019 rename) — https://en.wikipedia.org/wiki/KLA_Corporation
8. SemiconductorX, "Semiconductor Front-End Fabrication: The Layer-Build Loop" (600–1,000+ steps) — https://semiconductorx.com/front-end-fabrication-overview.html
9. SemiAnalysis, "Embracing Chaos: The Imperfect Art of Semiconductor Manufacturing" (wafer exits 3–4 months later) — https://newsletter.semianalysis.com/p/embracing-chaos-the-imperfect-art
10. eInnoSys, "Taking the next leap forward in semiconductor yield improvement" (1% yield = millions of $/week for high-volume device; mirrors McKinsey) — https://www.einnosys.com/taking-the-next-leap-forward-in-semiconductor-yield-improvement/
11. McKinsey, "Taking the next leap forward in semiconductor yield improvement" (~$68M yield losses example) — https://www.mckinsey.com/industries/semiconductors/our-insights/taking-the-next-leap-forward-in-semiconductor-yield-improvement
12. Supply Chain Management Review, "Lead time economics: what semiconductor supply chains reveal" (new fabs 30–50% starting yield; 18–24 months to >80%) — https://www.scmr.com/article/lead-time-economics-what-semiconductor-supply-chains-reveal-about-strategic-planning
13. Zacks via Yahoo Finance, "Can Rising Process Control Intensity Drive KLA's Next Growth Phase?" — https://finance.yahoo.com/markets/stocks/articles/rising-process-control-intensity-drive-130000496.html
14. KLA, "BBP 40th Anniversary" / "KLA's Broadband Plasma Products Legacy" — https://bbp.kla.com/ and https://www.kla.com/advance/innovation/klas-legacy-of-broadband-plasma-products-lights-the-way-for-future-innovations
15. ASML 2025 gross margin 52.8% for comparison — see research/asml.md source [1] (ASML Q4-2025 results press release).
16. KLA-Tencor, "New eS805 Electron-Beam Inspection System" (optical inspection plus targeted e-beam review workflow) — https://ir.kla.com/news-events/press-releases/detail/199/kla-tencor-announces-new-es805-electron-beam-inspection
17. KLA, "Fiscal 2026 Fourth Quarter and Full Year Results" (July 28, 2026; $13.579B revenue, $5.255B GAAP cost of revenue, $4.831B net income) — https://ir.kla.com/sec-filings/all-sec-filings/content/0000319201-26-000024/exhibit991earningsrelease7.htm
