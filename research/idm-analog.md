# Research — IDM / Analog / Power / MCU ("boring chips run the world")

As-of: 2026-07

Fact pack. Ammunition only, no prose. `[n]` → source list at bottom.
`<!-- VERIFY -->` = not fully confident, check before recording.

Covers: TI, ADI, Infineon, STMicro, NXP, Renesas, onsemi, Microchip — the layer
that needs **no leading edge**: analog, power, microcontrollers. Chips that cost
cents, built on process nodes 15–40 years old, that stop car production lines
when missing.

## The layer in numbers
- Whole semiconductor market 2025: **~$772B** (+22%), forecast **~$975B** in 2026 —
  but almost all of that growth is AI/memory/logic. This layer grows single digits:
  analog +7% (2025) / +10% (2026e), discretes -слightly/+8%. [26][27]
- **Analog market: ~$85–95B** (2025). WSTS has analog growing 7% in 2025 off a
  ~$80B 2024 base; research houses put global analog at ~$94B for 2025. [26][27][28]
  <!-- VERIFY: exact WSTS analog dollar figure for 2025; ~$80B 2024 base is from memory -->
- **MCU market: ~$30B** (2025); research-firm estimates cluster $27–40B depending
  on scope (WSTS lumps MCUs+MPUs into one "Micro" category, so no clean official
  split). [30] <!-- VERIFY: tighter Omdia/Yole MCU-only figure, likely low-20s $B -->
- **Power semiconductors: ~$55B** (2025) incl. power ICs; power discretes+modules
  alone ≈ 55% of that ≈ **~$30B**. [29]
- **Automotive semiconductors: ~$69B** (TechInsights; 2023 figure, roughly flat
  through 2024–25 downturn). [11] <!-- VERIFY: year labeling; Yole uses a broader
  definition and talks of a "$132B automotive semiconductor race" — definitions vary wildly -->
- **A car contains ~1,000–3,500 chips**: "more than a thousand" is the safe floor
  (Willy Shih/Forbes); typical modern car ~1,400–1,500; loaded EVs up to ~3,500. [37][38]
- **EV semiconductor content ≈ 2–3× ICE**: ~$500–600 per combustion car vs
  ~$1,500+ per EV (power electronics alone $600–800 in a BEV). [39]
  <!-- VERIFY: secondary source; McKinsey/Infineon decks give similar 2–3x, worth pulling one -->
- The 2021 lesson: chip shortage cost automakers **$210B in lost revenue** and
  **7.7M vehicles** of lost production in 2021 alone (AlixPartners). Cents-priced
  chips idled $40k-vehicle assembly lines. [25]
- Fragmentation is the structural point: even the #1 in automotive (Infineon) has
  only **13.5%** share. [10] No ASML-style chokepoint company — the chokepoint is
  the *category* (old fabs, long qualification cycles), not one firm.

## Teachable: analog vs digital
- **The real world is analog.** Temperature, pressure, sound, light, radio waves,
  battery voltage — all continuous signals. Analog chips sense it, amplify it,
  convert it to digital (ADCs) and back (DACs), regulate the power, and move the
  RF. Every digital system is wrapped in analog: no power management chip, no
  processor.
- **Moore's Law doesn't help analog.** Digital chips get better by shrinking;
  precision analog gets *worse* — smaller transistors mean lower voltage headroom,
  more noise, worse matching. Optimal analog nodes are 180nm–45nm class,
  introduced 15–40 years ago (180nm debuted ~1999). No EUV, no $20B fab required.
- **Old fabs = money printers.** Equipment long since depreciated → a chip that
  sells for $0.30 can carry 60%+ gross margins. TI's whole strategy is built on
  this (below).
- **Analog design is craft knowledge.** Digital design is largely automated
  (synthesis from code); analog is still transistor-by-transistor art — layout,
  noise, parasitics — learned by ~decade-long apprenticeship under senior
  designers. Scarce talent is a real moat. <!-- VERIFY: qualitative but standard
  industry view; if you want a citable stat, look for IEEE/EE Times pieces on the
  analog-engineer shortage -->
- **Product lifecycles are measured in decades.** ST formally guarantees
  **20-year availability** on popular automotive MCUs [15]; TI's stated product
  life is "typically 10 to 15 years and often longer" [43]; NXP's longevity
  program commits 10–15 years minimum [17→nxp.com]; Microchip's practice is
  effectively never-obsolete while demand exists. [22] Same part number, sold for
  20+ years — the anti-smartphone business.
- **Catalog economics:** TI alone sells ~**80,000 different products** to
  ~100,000 customers — no single product or customer matters, wins compound
  design-by-design ("designed in, stays in" for the life of the car/factory
  machine). [4] <!-- VERIFY: customer count -->

## Texas Instruments — the analog king
- FY2025 (calendar): revenue **$17.68B**, +13% YoY; analog segment **$14.0B**,
  +15%. Q4-2025 revenue $4.42B (+10% YoY). [1]
- World #1 analog, roughly **~18–20%** of the analog market — about 2× the #2. [28]
  <!-- VERIFY: share; GMInsights says >17.8% for 2025, older IC Insights had ~19% -->
- **The 300mm-on-trailing-node moat:** TI builds cents-priced analog chips on
  300mm wafers while most rivals are on 200mm. 300mm gives ~2.3× more chips per
  wafer → **~40% lower cost per unpackaged chip**. Leading-edge logic economics
  applied to 30-year-old process technology. [5][6]
- **June 18, 2025: announced >$60B across seven US fabs** (Sherman TX ×4,
  Richardson TX, Lehi UT ×2) — billed as the largest investment in foundational
  semiconductor manufacturing in US history; ~60k jobs. [2]
- Apple signed on to have iPhone chips made at TI's Sherman megasite. [3]
- Goal: >95% of wafers manufactured internally — own fabs, no foundry dependence,
  in Texas/Utah, on fully-depreciated-class nodes. [4][2]
- Catalog model: ~80,000 SKUs, direct sales via TI.com, industrial + automotive
  ≈ 70% of revenue. [4] <!-- VERIFY: current industrial+auto revenue split -->

## Analog Devices — high-performance analog #2
- FY2025 (ended Nov 1, 2025): revenue **$11.0B**, +17% YoY; free cash flow $4.3B
  (39% of revenue); returned 96% of FCF to shareholders. [7]
- The #2 in analog; owns the *high-performance* end — precision data converters,
  amplifiers, mixed-signal — where parts sell for dollars not cents and gross
  margins run ~68–70% (non-GAAP). <!-- VERIFY: current ADI gross margin & #2 share (~12-13%) -->
- Built by acquisition: Linear Technology ($14.8B, 2017), Maxim Integrated
  ($21B, 2021) — consolidated the US high-end analog talent pool under one roof.
  <!-- VERIFY: deal values, from memory -->
- Q4-2025 showed record orders / growth across all end markets — one of the
  clearest "the analog winter is over" signals. [7]

## Infineon — power #1, automotive #1
- FY2025 (ended Sept 30, 2025): revenue **~€14.7B**, roughly flat; profit
  rebounded; guidance FY2026 moderate growth. [8]
- **World #1 in power semiconductors** (Omdia power semi market share database —
  a position it has held for ~20 years). [9]
- **World #1 in automotive semiconductors: 13.5% share (2024)** — ahead of NXP
  (~10.8%) and ST (~10%). [10][11]
- Wide-bandgap both ways: major SiC player + bought **GaN Systems for $830M**
  (closed Oct 2023) to lead GaN power. [35]
- New growth leg: AI data center power delivery — targets **~€1.5B revenue in
  FY2026** from AI server power. The "boring power chips" company is now an AI
  play. [8]
- German champion (Munich; ex-Siemens semiconductor division, spun off 1999).
  <!-- VERIFY: spin-off year -->

## STMicroelectronics — the SiC pioneer having a rough patch
- FY2025: revenue **$11.8B**, **-11.1%** YoY (worst of the group); gross margin
  33.9% (vs 39.3% in 2024); operating income just $175M. Still mid-downcycle in
  2025 while US peers recovered. [12]
- **The SiC-in-EVs origin story: Tesla Model 3 (2018) was the first mass-market
  EV with a silicon-carbide inverter — 24 power modules / 48 SiC MOSFET dies,
  all from ST, fabbed in Catania, Sicily.** That design win created the
  automotive SiC market. [14]
- Long the **#1 SiC device maker by revenue** (~30%+ share at peak), now under
  attack from Chinese entrants and onsemi/Infineon. <!-- VERIFY: current SiC share ranking -->
- Also a top general-purpose MCU house (STM32 franchise — the default hobbyist-to-
  industrial 32-bit MCU).
- **State-anchored ownership:** 27.5% held by ST Holding, a 50/50
  French–Italian government vehicle (Bpifrance / Italian Ministry of Economy) —
  legacy of the 1987 SGS (Italy) + Thomson Semiconducteurs (France) merger.
  Paris–Rome governance friction is chronic. [13]
- Commits to **20-year availability** on popular automotive MCUs. [15]

## NXP — the car's nervous system
- FY2025: revenue **$12.27B**, -3% YoY; Q4 revenue $3.34B with sequential
  improvement across all end markets. GAAP gross margin 54.7%. [16]
- Ex-Philips Semiconductors (spun off 2006, Eindhoven, NL). [17]
- Automotive ≈ **~55–60% of revenue** — vehicle networking, the S32 automotive
  compute platform, battery management. <!-- VERIFY: exact 2025 auto share, ≈57% -->
- **#1 in automotive radar chips** (Yole) — the 77GHz radar in most ADAS bundles. [17]
- **Co-invented NFC** (as Philips, with Sony, 2002); owns MIFARE — the contactless
  chip in metro cards worldwide — and supplies secure chips for e-passports. Tap
  your card, tap your phone, cross a border: NXP. [17]
- Was the epicenter company of the 2021 auto chip shortage narratives (its MCUs
  were the ones GM/Ford couldn't get). <!-- VERIFY: anecdote framing -->

## Renesas — Japan's auto-MCU champion
- FY2025 (calendar): revenue **¥1,321B (≈$8.8B)**, -2% YoY; automotive segment
  ¥639.7B (~48% of revenue), -9% — still soft through 2025. [18]
- Japan's chip-consolidation vehicle: formed from **Hitachi + Mitsubishi**
  semiconductor units (2003), merged with **NEC Electronics** (2010). [19]
- One of the top-3 automotive MCU vendors globally (with Infineon and NXP);
  historically cited near ~30% of auto MCUs at peak. <!-- VERIFY: current auto-MCU
  share; 2024 rankings put Infineon #1, sources disagree on splits -->
- The fragility lesson: the **March 2021 Naka fab fire** knocked out a single
  Renesas line and measurably deepened the global car-production crisis — one
  building in Ibaraki prefecture, felt in Detroit. <!-- VERIFY: recovery timeline
  (~100 days to full capacity) before using specifics -->
- Runs its own product-longevity program for long-lifecycle customers. [19→renesas PR]

## onsemi & Microchip — one-liners
- **onsemi** (ex-Motorola spin-off, 1999): power + image sensors for cars;
  FY2025 revenue **$6.0B**, FCF margin a record 24%; bet the company on SiC —
  China SiC revenue doubled in 2025 even as prices cratered. [20][44]
- **Microchip**: the MCU catalog house (PIC/AVR) + Microsemi defense/FPGA;
  FY2026 (ended March 2026) revenue **$4.71B**, +7.1%, with Q4 +35% YoY — the
  sharpest rebound print in the group [21]; also the poster child of the
  downturn: revenue nearly halved from ~$8.4B (FY2023) to $4.4B (FY2025).
  <!-- VERIFY: FY2023 peak figure ~$8.44B, from memory --> Famous for its
  effectively-never-obsolete product policy. [22]

## SiC & GaN — the wide-bandgap story (3 beats)
1. **What it is:** silicon carbide (SiC) and gallium nitride (GaN) are
   wide-bandgap materials — they switch faster, at higher voltage and
   temperature, with lower losses than silicon. SiC → high power (EV drivetrains,
   solar, charging); GaN → high frequency/compact (phone chargers, data-center
   power, EV on-board chargers). GaN power market projected ~$2B by 2027 (~56%
   CAGR). [36]
2. **Why EVs want it:** a SiC inverter wastes less energy as heat → ~5%+ more
   range from the same battery, or a smaller battery for the same range —
   at 800V it also charges faster. Tesla proved it in 2018 with ST's parts [14];
   nearly every 800V EV platform since is SiC.
   <!-- VERIFY: range-gain % claim, commonly cited 5-10%, pin a source -->
3. **The bust:** everyone extrapolated EV growth, China built colossal substrate
   capacity (SiC wafer capacity ~460k/yr in 2022 → ~3.9M/yr planned 2025), and
   6-inch SiC substrate prices collapsed from ~$1,500 to ~$400–500. [31][32][33][34]
   **Wolfspeed — the US SiC pure-play — filed prepackaged Chapter 11 on
   June 30, 2025 and emerged 91 days later (Sept 29, 2025): debt cut ~70%
   (~$4.6B, from ~$6.7B to ~$2B), annual cash interest -60%, old shareholders
   left with ~3–5%.** [23][24] Rohm posted consecutive losses; consolidation
   ongoing. [32]

## Cycle status (as of mid-2026)
- 2023–25 was the deepest analog/auto/industrial downturn in over a decade:
  post-COVID double-ordering → massive customer inventory glut → ~9 quarters of
  decline from the Q3-2023 peak. [41]
- **Recovery is now real but two-speed.** Industrial: broad restocking under way
  from very low inventory levels. [41] Automotive: Bernstein called the upcycle
  "official" — auto semi revenue +11% YoY in Q1-2026 — though some (BNP) argue
  full auto recovery lands 2027 because carmakers still lack confidence to
  restock. [40][41]
- Company evidence: TI guided Q1-2026 aggressively ("analog awakening") [42];
  ADI printed record orders [7]; Microchip's +35% YoY quarter [21]; NXP
  sequential improvement across all markets [16]. Laggards: ST (still -11% in
  2025) [12] and Renesas autos (-9%). [18]
- Analog price increases are back on the table after two years of cuts. [40]
  <!-- VERIFY: breadth of 2026 price-increase wave before asserting -->

## Risks
- **China mature-node shock:** China is adding huge legacy-node (28nm+) and SiC
  capacity; the price war that broke SiC substrates could spread to commodity
  analog/discretes/MCUs. [31]
- **Trade retaliation:** China opened anti-dumping/anti-subsidy probes aimed at
  US analog/legacy chips (TI, ADI exposure) in 2025. <!-- VERIFY: status of
  MOFCOM analog anti-dumping investigation as of mid-2026 — from memory -->
- **EV-growth dependency:** the whole SiC buildout assumed steep EV curves;
  Wolfspeed shows what happens when the curve flattens. [23]
- **Inventory whiplash is structural:** long lead times + auto qualification
  cycles guarantee the next double-order/glut cycle.
- **Talent pipeline:** analog craft knowledge concentrated in an aging engineer
  cohort; not quickly replaceable. <!-- VERIFY: if used as a hard claim, find a source -->
- Counter-risk to the "boring is safe" thesis: this layer has no ASML-style
  pricing power — fragmented share, and its moat (old cheap fabs) is exactly
  what China can replicate first.

## Fact ammo — lines that land
- **"A chip that costs less than a cup of coffee shut down factories building
  $40,000 trucks — $210B of cars never got built in 2021."** [25]
- **"Your car has more chips than your laptop — somewhere between 1,000 and
  3,500 of them — and almost none are made by the companies you've heard of."** [37][38]
- **"Texas Instruments' trick: take the giant 300mm wafers designed for cutting-
  edge chips and run 30-year-old designs on them — 40% cheaper per chip, forever.
  Then do it $60B bigger: seven new US fabs, the largest foundational-chip
  investment in American history."** [2][5]
- **"The first mass-market EV inverter breakthrough wasn't Silicon Valley — it
  was 48 silicon-carbide dies from a fab in Catania, Sicily, inside the 2018
  Tesla Model 3."** [14]
- **"SiC wafers went from $1,500 to $400 in three years of Chinese capacity —
  and America's silicon-carbide champion, Wolfspeed, went through bankruptcy in
  91 days."** [23][31][32]
- **"ST will promise you the same microcontroller for 20 years. Try getting that
  from a smartphone chip."** [15]

---

## Sources
1. TI, "Q4 2025 and 2025 financial results" (PR Newswire) — https://www.prnewswire.com/news-releases/ti-reports-q4-2025-and-2025-financial-results-and-shareholder-returns-302671690.html
2. TI newsroom, ">$60 billion / seven fabs / 60k jobs" (Jun 18, 2025) — https://www.ti.com/about-ti/newsroom/news-releases/2025/texas-instruments-plans-to-invest-more-than--60-billion-to-manufacture-billions-of-foundational-semiconductors-in-the-us.html
3. CNBC, "Inside TI's $60B megaproject, where Apple will make iPhone chips" — https://www.cnbc.com/2025/08/22/apple-will-make-chips-at-texas-instruments-60-billion-us-project.html
4. TI 2024 Annual Report (SEC ARS; ~80,000 products, >95% internal wafers) — https://www.sec.gov/Archives/edgar/data/97476/000009747625000019/tiars2024v2.pdf
5. SemiEngineering, "Foundries Eye 300mm Analog Fabs" (TI 40% cost advantage) — https://semiengineering.com/foundries-eye-300mm-analog-fabs/
6. TI newsroom, 300mm fab construction (2.3× chips/wafer) — https://www.ti.com/about-ti/newsroom/news-releases/2021/2021-11-17-texas-instruments-to-begin-construction-next-year-on-new-300-mm-semiconductor-wafer-fabrication-plants.html
7. ADI, "Strong Q4 and Fiscal 2025 results" — https://www.analog.com/en/newsroom/press-releases/2025/11-25-2025-adi-reports-4th-qtr-fiscal-2025-financial-results.html
8. Infineon, FY2025 results press release (Nov 2025) — https://www.infineon.com/press-release/2025/infxx202511-021
9. Infineon Q4 FY2025 investor presentation (Omdia: #1 power semiconductors) — https://www.infineon.com/assets/row/public/documents/corporate/fy2025-q4-web-en.pdf
10. Infineon, "bolsters global lead in automotive" (13.5% share 2024, TechInsights) — https://www.infineon.com/press-release/2025/INFATV202504-085
11. TechInsights, Automotive Semiconductor Market blog — https://www.techinsights.com/blog/automotive-semiconductor-market
12. StockTitan / SEC 6-K, "STMicroelectronics 2025 results: revenue, margins and cash" — https://www.stocktitan.net/sec-filings/STM/6-k-st-microelectronics-n-v-current-report-foreign-issuer-a34e96dc54a1.html
13. MarketScreener, "STMicroelectronics shakes up its chips in Italy" (ST Holding 27.5%, 50/50 FR/IT) — https://www.marketscreener.com/quote/stock/STMICROELECTRONICS-N-V-4710/news/STMicroelectronics-shakes-up-its-chips-in-Italy-49587693/
14. PNT Power, "Tesla Model 3 powered by ST Microelectronics SiC MOSFETs" — https://www.pntpower.com/tesla-model-3-powered-by-st-microelectronics-sic-mosfets/
15. ST newsroom, "20-year availability for popular automotive microcontrollers" — https://newsroom.st.com/media-center/press-item.html/n4718.html
16. NXP, "Fourth Quarter and Full-Year 2025 Results" (GlobeNewswire) — https://www.globenewswire.com/news-release/2026/02/02/3230614/0/en/NXP-Semiconductors-Reports-Fourth-Quarter-and-Full-Year-2025-Results.html
17. Wikipedia, NXP Semiconductors (NFC co-invention, MIFARE, e-passports, radar #1 per Yole) — https://en.wikipedia.org/wiki/NXP_Semiconductors
18. Renesas, "Consolidated Financial Results for the Year Ended December 31, 2025" — https://www.renesas.com/en/document/rep/earnings-report-year-ended-december-31-2025
19. Wikipedia, Renesas Electronics (Hitachi/Mitsubishi/NEC lineage) — https://en.wikipedia.org/wiki/Renesas_Electronics
20. onsemi, "Fourth Quarter and Full Year 2025 Results" — https://www.onsemi.com/company/news-media/press-announcements/en/onsemi-reports-fourth-quarter-and-full-year-2025-results
21. Microchip, "Financial Results for Fourth Quarter and Fiscal Year 2026" — https://ir.microchip.com/news-events/press-releases/detail/1387/microchip-technology-announces-financial-results-for-fourth-quarter-and-fiscal-year-2026
22. Microchip, "Our Practice on Product Longevity" — https://www.microchip.com/en-us/support/quality/product-longevity
23. Wolfspeed, "Successfully Completes Financial Restructuring, Emerges…" (Sept 2025) — https://www.wolfspeed.com/company/news-events/news/wolfspeed-successfully-completes-financial-restructuring-emerges-as-financially-stronger-company-well-positioned-in-silicon-carbide-market/
24. Semiconductor Today, "Wolfspeed completes financial restructuring and emerges from Chapter 11" — https://www.semiconductor-today.com/news_items/2025/sep/wolfspeed-300925.shtml
25. AlixPartners, "Shortages related to semiconductors to cost the auto industry $210 billion in revenues" (Sept 2021) — https://www.alixpartners.com/newsroom/press-release-shortages-related-to-semiconductors-to-cost-the-auto-industry-210-billion-in-revenues-this-year-says-new-alixpartners-forecast/
26. WSTS, "Global Semiconductor Market Approaches $1T in 2026" (Autumn 2025 forecast) — https://www.wsts.org/76/103/Global-Semiconductor-Market-Approaches-1T-in-2026
27. ESIA/WSTS Autumn 2025 forecast PDF (category growth rates) — https://www.eusemiconductors.eu/sites/default/files/ESIA_WSTS_PR_AuFc2025.pdf
28. Global Market Insights, Analog Semiconductors Market (TI >17.8% share; ~$93.8B 2025) — https://www.gminsights.com/industry-analysis/analog-semiconductors-market
29. Precedence Research, Power Semiconductor Market (~$54.9B 2025; component split) — https://www.precedenceresearch.com/power-semiconductor-market
30. Precedence Research, Microcontroller (MCU) Market (~$36B 2025 est.) — https://www.precedenceresearch.com/microcontroller-mcu-market
31. TrendForce, "China's low-cost SiC and mature chips ignite global semiconductor price war" — https://www.trendforce.com/news/2025/02/27/news-chinas-low-cost-sic-and-mature-chips-ignite-global-semiconductor-price-war/
32. eeNews Europe, "SiC raw materials rise as 6-inch substrates face price war" — https://www.eenewseurope.com/en/sic-raw-materials-rise-as-6-inch-substrates-face-price-war/
33. DigiTimes, "China's aggressive SiC price war set to halve cost by 2025" — https://www.digitimes.com/news/a20250407PD218/sic-war-market-2025-competition.html
34. PR Newswire/TrendForce, "SiC prices plunge as Chinese capacity soars" (capacity 460k→3.9M wafers) — https://www.prnewswire.com/news-releases/sic-prices-plunge-as-chinese-capacity-soars-reshaping-semiconductor-landscape-302288377.html
35. Infineon, "completes acquisition of GaN Systems" ($830M, Oct 2023) — https://www.infineon.com/press-release/2023/infxx202310-014
36. Signal Integrity Journal, Infineon/GaN Systems close (GaN ~$2B by 2027, 56% CAGR) — https://www.signalintegrityjournal.com/articles/3319-infineon-completes-acquisition-of-gan-systems-becoming-a-leading-gan-power-house
37. Forbes (Willy Shih), "Why Are Automotive Chips Still In Short Supply?" (>1,000 chips/car) — https://www.forbes.com/sites/willyshih/2022/11/20/why-are-automotive-chips-still-in-short-supply/
38. DRex Electronics, "How Many Semiconductor Chips in a Modern Car?" (1,000–3,500; EVs ~3,500) — https://www.icdrex.com/how-many-semiconductor-chips-in-a-modern-car/
39. Statifacts, EV semiconductor demand (ICE ~$500–600 vs EV ~$1,500+) — https://www.statifacts.com/chart-detail/semiconductor-demand
40. Bernstein via Futu, "Automotive semiconductors have officially entered an upcycle" (Q1-2026 +11% YoY) — https://news.futunn.com/en/post/73783636/bernstein-automotive-semiconductors-have-officially-entered-an-upcycle
41. BNP Paribas CIB, "Semiconductor market 2026: it is not solely about AI" (restocking; auto recovery 2027) — https://cib.bnpparibas/semiconductor-market-2026-it-is-not-solely-about-ai/
42. FinancialContent/MarketMinute, "Analog Awakening: TI signals sector rebound with bold Q1 guidance" (Feb 2026) — https://markets.financialcontent.com/stocks/article/marketminute-2026-2-25-analog-awakening-texas-instruments-signals-sector-rebound-with-bold-q1-guidance
43. TI, Product life cycle policy (10–15 years, often longer) — https://www.ti.com/support-quality/quality-policies-procedures/product-life-cycle.html
44. Investing.com, "onsemi Q2 2025: China SiC sales double" — https://www.investing.com/news/company-news/onsemi-q2-2025-presentation-revenue-grows-2-as-china-sic-sales-double-93CH-4167787
