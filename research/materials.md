# Research — Materials & inputs (the hidden monopolies)

As-of: 2026-07


Framing: the deeper you go down the supply chain, the *more* concentrated it
gets. Fabs → dozens. Equipment → a handful. Materials → often two companies,
one company, or one town. And unlike machines, materials are **consumables** —
bought again every single day a fab runs — and locked in by brutal
requalification cycles. Japan quietly owns most of this layer.

## The layer in numbers
- Global semiconductor materials market: **$73.2B in 2025**, +6.8% YoY, a record
  (SEMI). Split: wafer fab materials **$45.8B** (+5.4%), packaging materials
  **$27.4B** (+9.3%). [1]
- Japanese companies hold roughly **half** of the global semiconductor materials
  market (~48–56% depending on count). [2][3] <!-- VERIFY: exact % varies by source/year -->
- Japan's individual strongholds include silicon wafers, advanced photoresists,
  EUV mask blanks, and ABF film. Public share estimates use inconsistent years
  and market definitions, so the course treats the concentration qualitatively
  unless a source defines both. [2][3]
- The kicker: Japan's share of chip *making* collapsed from ~50% (late 1980s) to
  ~9% — but it kept the materials layer underneath everyone else's fabs. [3]

## Silicon wafers
- ~**$11–12B** market (2025). [5] Five companies control ~**85%+** of 300mm
  capacity: **Shin-Etsu** (JP), **SUMCO** (JP), **GlobalWafers** (TW),
  **Siltronic** (DE), **SK Siltron** (KR). [4]
- **Shin-Etsu + SUMCO together supply more than half of world volume** —
  two Japanese companies under nearly every chip on Earth. [4]
  <!-- VERIFY: precise combined share, commonly cited ~50–60%; one source claims ~90% which looks wrong -->
- US onshoring: GlobalWafers opened its **Sherman, Texas** 300mm plant in
  **May 2025** — the **first new US 300mm wafer fab for advanced chips in over
  20 years** — with up to **$400M** in CHIPS Act funding and a further **$4B**
  US expansion announced. [6][7]
- Purity teachable: electronic-grade polysilicon is **99.999999999% pure —
  "eleven nines," the industry standard** (Tokuyama claims the world's highest
  purity at this level). [8][9] That's roughly **one foreign atom per hundred
  billion** silicon atoms.
- CZ crystal growth teachable: the **Czochralski method** — dip a seed crystal
  into ~1,400°C molten silicon, pull it out slowly while rotating, and a
  perfect single crystal follows it up out of the melt. Soft-serve in reverse:
  one flawless atomic lattice, ~300mm wide, 1–2m long. Discovered **by
  accident in 1916** when Polish chemist Jan Czochralski dipped his pen into a
  crucible of molten tin instead of his inkwell and pulled out a single-crystal
  metal thread. [10][11] Bell Labs adapted it for semiconductors in 1950. [10]
- Price ladder: a blank polished 300mm wafer costs ~**$100–200**. [12] The same
  disc leaves TSMC's 3nm line priced ~**$19,500** as a processed wafer [13] —
  and the finished chips diced from it can be worth **$50k to several hundred
  thousand dollars** at retail. <!-- VERIFY: end-product math; depends on die/product mix -->
  A ~**100–1,000×** value multiplication standing on a $150 disc.

## Photoresist (the light-sensitive paint)
- What it is: the light-sensitive chemical film spin-coated onto the wafer;
  the lithography machine's image is *developed* in it like photographic film.
  ASML's $200M scanner is useless without it.
- Japanese suppliers dominate advanced photoresists. Published 90% and 95%
  estimates combine different product scopes and dates, so do not quote them
  without a dated market definition. Players include **JSR, Tokyo Ohka Kogyo
  (TOK), Shin-Etsu, Sumitomo Chemical, and Fujifilm**. [2][14]
- Why EUV resist is brutally hard: an EUV photon carries ~**14×** the energy of
  a DUV (ArF) photon, so the same exposure dose delivers ~14× *fewer* photons —
  you're printing with statistical noise ("stochastics"), and a handful of
  misplaced photon events ruins a feature. Chemistry, sensitivity and roughness
  all fight each other. <!-- VERIFY: framing is standard litho physics; exact 14x = 91.8eV/6.4eV -->
- JSR — the world's largest photoresist maker (~**27%** share) — was **taken
  private in 2024 by the government-backed Japan Investment Corporation (JIC)
  for ~$6.4B**; tender completed April 2024, delisted June 25, 2024. [15][16]
  The strategic signal: Tokyo treats resist like a sovereign asset and wants to
  consolidate Japan's materials champions around it. [16]
  (JSR had already bought Inpria, the US metal-oxide EUV resist startup, in
  2021. <!-- VERIFY: ~$514M, Oct 2021 -->)
- **The 2019 Japan–Korea spat — the case study in materials leverage.** July
  2019: Japan restricted exports to South Korea of three chemicals —
  photoresist, hydrogen fluoride, fluorinated polyimide. At the time Korea
  imported **92%** of its photoresist, **94%** of its fluorinated polyimide and
  **44%** of its HF (etching gas) from Japan. [17] Japanese HF exports to Korea
  collapsed **~97%**; Samsung/SK Hynix (then ~72% of world DRAM) scrambled;
  Korea spent billions localizing. [17][18] Twist: the leverage *leaked* —
  Korea requalified domestic and third-country suppliers, and Japanese
  suppliers permanently lost share. Materials power is real but decays when
  used. [18]
- Still live in 2026: Japan reportedly weighing photoresist export curbs on
  China as Beijing targets **40% resist self-sufficiency by end-2026**; TOK and
  JSR are meanwhile racing capacity for 2nm-generation resists. [19][20]

## Photomasks & blanks
- The photomask = the master stencil; the blank = the blank stencil plate.
  Every EUV mask blank is ultra-low-expansion glass coated with **40+
  alternating silicon/molybdenum layers**, defect-free — a mirror, not a
  transparency, because EUV optics are reflective. [21][50][51]
- **Hoya and AGC are leading commercial EUV mask-blank suppliers.** Public
  share estimates conflict materially, so the course does not quote the 93%
  estimate or a supplier split. [21][22]
- Finished masks: captive shops (TSMC, Samsung, Intel internal) hold ~**63%**
  of the market's value; the merchant "big three" are **Photronics (~18%,
  US), Toppan (now Tekscend Photomask) and DNP (together ~30%)**. [24][25]
- Cost: a single EUV mask runs **$500k–$1M**; industry estimates place a full
  leading-edge mask set around **$5–15M per design at 5/3nm**. [23]
  <!-- VERIFY: some estimates put 2nm-era sets at $20–30M+; sourced range is $5–15M -->
- Four counts are easy to confuse. A **design or GDS layer** is an EDA data
  category; TSMC converts incoming design data through optical-proximity
  correction before masks are written. A **mask level** is one distinct
  lithography patterning operation, while the **reticle** is the physical plate
  carrying that pattern. A physical material layer therefore does not map
  one-to-one to a mask level. [54][55]
- In conventional multi-patterning, one intended design layer is decomposed
  into two or more masks that are exposed separately and aligned on the wafer.
  Self-aligned schemes are a further caveat: spacer deposition and etch can
  multiply features from one lithography mask. [55][56][59]
- Samsung's 7LPP example used **one EUV mask where ArF DUV required up to four**
  for the same layer, reducing the process's total mask count by about 20%.
  This is a concrete process example, not a universal rule; sufficiently tight
  EUV patterns can also require multi-patterning. [57][59]
- High-end mask sets mix multiple DUV masks with selected EUV masks. “Critical”
  means the tightest feature-size, pattern-fidelity, and overlay requirements,
  not greater functional importance. [58]
- Teach the leading-edge total as **roughly 80–100+ mask levels**, with the
  exact count dependent on process options and often proprietary. Do not call
  that an EUV-mask count or equate it with the number of physical films.

## Ultra-pure gases & chemicals
- **Neon — the Ukraine story.** Neon is used in DUV excimer-laser gas mixtures
  (the light source for every non-EUV litho layer). It's a byproduct of
  Soviet-era steel-plant air separation, so pre-2022 roughly **half (45–54%)
  of the world's semiconductor-grade neon** came from two Ukrainian firms:
  **Ingas (Mariupol)** and **Cryoin (Odesa)**. [26][28] Both halted in the
  first weeks of the 2022 invasion — Ingas had shipped 15,000–20,000 m³/month,
  ~75% to chipmakers. [26] China spot prices ran **400 → 1,600 RMB/m³**
  (Oct 2021 → Feb 2022), ~4×; the 2014 Crimea annexation had already spiked
  neon ~**600%**. [27][28] Chipmakers survived on stockpiles, then built
  non-Ukrainian capacity — another leverage-that-leaks story. ASML describes
  KrF and ArF DUV sources as excimer lasers using gas mixtures. [50]
- **Hydrogen fluoride**: the etch/clean workhorse — semiconductor grade means
  parts-per-*trillion* impurity control. Japanese specialists **Stella Chemifa**
  (~15–25%+ of ultra-high-purity HF) and **Morita** lead; exactly the chemical
  Japan squeezed Korea with in 2019. [17][44]
- **Helium**: essential for wafer cooling and leak testing; supply concentrated
  in a few gas fields (US, Qatar, Algeria). <!-- VERIFY: chip industry's helium share and current supply split -->
- Bulk & specialty gas majors: **Air Liquide, Linde, Air Products, Nippon Sanso
  (Taiyo Nippon Sanso), Messer** — top five ≈ **55–70%** of the high-purity gas
  market; electronic specialty gases ≈ **$16B** (2024). [45][46]

## CMP — slurries & pads
- Teachable, one line: CMP (chemical mechanical planarization) = pressing the
  wafer face-down onto a rotating pad flooded with a slurry of nano-abrasives
  and chemicals, polishing each finished layer to near-atomic flatness so the
  next layer can be printed in focus. A modern chip is polished dozens of times
  — flatten, build, flatten, build.
- Market ~**$2.9B** (slurry + pads, 2024). [32]
- Slurry: **Entegris** (US) became a leader by buying **CMC Materials for
  $6.5B** (announced Dec 2021; closed **July 6, 2022** at ~$6.0B cash+stock).
  [29][30] Top five slurry suppliers (Entegris/CMC, Fujifilm EM, Fujimi,
  DuPont, Resonac/AGC) ≈ **65–70%** of revenue. [31][32]
- Pads: **DuPont holds >50%** of the CMP pad market (IKONIC line). [31]

## Quartz & crucibles — Spruce Pine
- The CZ crucible that holds molten silicon must itself be ultra-pure fused
  quartz — impurities leach straight into the melt. The feedstock:
  **high-purity quartz (HPQ)**.
- The **Spruce Pine Mining District** spans roughly 25 by 10 miles across parts
  of Mitchell, Avery, and Yancey counties in North Carolina and hosts both U.S.
  producers of high-purity quartz. USGS estimates that the United States leads
  global HPQ production but does not publish country shares; it also lists
  sources in Australia, Brazil, Canada, China, India, and Russia. USGS reports
  no economic substitute for HPQ in most uses, including fused-quartz crucibles.
  [48][52]
- Sibelco mines its IOTA quartz from two Spruce Pine ore bodies and identifies
  fused-quartz crucibles for Czochralski silicon growth as a semiconductor use.
  [49]
- **Hurricane Helene, Sept 26–27, 2024**: the town was devastated and both
  operations shut down — global headlines about chipmaking grinding to a halt.
  [33] Reality: recovery was fast. Sibelco restarted production ~2 weeks later
  (Oct 10–11) and ramped back to full capacity; The Quartz Corp began a phased
  restart from late Oct 2024. Semiconductor impact ended up minimal —
  inventories plus fast restart. [34][35]
- Fresh twist (this month): **July 2026 — The Quartz Corp closed its Altapass
  processing facility in Spruce Pine "indefinitely"** (~20–30 jobs), while its
  other U.S. locations were unaffected. The restructuring cited weakness in
  renewable-energy markets rather than Hurricane Helene. [53]
  The same town can be both irreplaceable (semis) and demand-whipsawed (solar).
- Cross-ref (equipment layer, same pattern): **Carl Zeiss SMT** is the
  effectively sole source for ASML's EUV optics — see `research/asml.md`.

## Advanced packaging materials
- **ABF — Ajinomoto Build-up Film.** The insulating film laminated between the
  wiring layers of every high-end chip substrate (CPUs, GPUs, AI accelerators).
  Made by **Ajinomoto Fine-Techno — yes, the MSG company** (founded 1909 on
  monosodium glutamate; the film grew out of its amino-acid chemistry) — with
  **~95% of the global market**. [38][39][40]
- AI multiplies the exposure: a high-end AI GPU substrate consumes **15–20×
  more ABF** than a laptop CPU substrate; Ajinomoto announced a **30% price
  increase effective Q3 2026**. [39][40] <!-- VERIFY: 30% hike — single secondary source -->
- Substrates themselves: Japan again — **Ibiden** (major Intel/Nvidia substrate
  supplier <!-- VERIFY: Ibiden as Nvidia's lead substrate source -->) and
  **Shinko Electric**, plus Unimicron/Nan Ya (TW), AT&S (AT), Samsung/LG (KR).
- The JIC pattern repeats: government-backed **JIC took Shinko Electric private
  too** — ~¥685B tender completed March 2025, delisted June 6, 2025 (JIC 80% /
  DNP 15% / Mitsui Chemicals 5%). [41][42][43][47] Tokyo now owns both the top
  photoresist maker (JSR) and a top substrate maker outright.
- Packaging materials overall: **$27.4B in 2025**, fastest-growing materials
  segment (+9.3%), led by substrates. [1]

## Risks
- **Concentration below the concentration**: one mining district (Spruce Pine
  HPQ), one company (Ajinomoto in ABF; DuPont in pads), a small supplier set (EUV mask
  blanks), one geography (Ukraine neon before 2022), and one country (Japan
  across advanced materials). Each can gate a much larger downstream market.
- **Geography risk**: Japan = earthquakes. The 2011 Tōhoku quake knocked out
  Shin-Etsu's Shirakawa plant, then ~20% of global 300mm wafer supply.
  <!-- VERIFY: 2011 Shirakawa ~20% figure — from memory, widely reported at the time -->
- **Weaponization cuts both ways**: 2019 Japan–Korea showed export controls on
  materials bite fast but leak — victims localize, suppliers lose share
  permanently. [18] Same dynamic now looming with China (resist
  self-sufficiency push, 40% target by 2026). [19]
- **Requalification lock-in**: switching a qualified fab chemical takes ~1–2
  years of testing — shares are sticky in peacetime, but it also means *any*
  disruption has no quick substitute. <!-- VERIFY: typical qual duration -->
- **Demand whiplash on niche mines/plants**: TQC's 2026 closure of one Spruce
  Pine processing facility shows solar-driven demand swings can shutter
  "strategic" assets no one individually protects. Its other U.S. locations
  were unaffected. [53]

## Sources
1. SEMI, "Global Semiconductor Materials Market Revenue Reaches Record $73.2 Billion in 2025" — https://www.semi.org/en/semi-press-release/global-semiconductor-materials-market-revenue-reaches-record-73.2-billion-dollars-in-2025-semi-reports
2. US ITA, Japan Country Commercial Guide — Semiconductors — https://www.trade.gov/country-commercial-guides/japan-semiconductors
3. AMRO, "Japan's Strategic Comeback in the Global Chip Race" (2025) — https://amro-asia.org/wp-content/uploads/2025/03/SI5.-Japans-Strategic-Comeback-in-the-Global-Chip-Race.pdf
4. Mordor Intelligence, Semiconductor Silicon Wafer Market — https://www.mordorintelligence.com/industry-reports/semiconductor-silicon-wafer-market
5. Fortune Business Insights, Silicon Wafers Market — https://www.fortunebusinessinsights.com/silicon-wafers-market-116434
6. US Dept. of Commerce/NIST, GlobalWafers CHIPS preliminary terms (Jul 2024) — https://www.nist.gov/news-events/news/2024/07/biden-harris-administration-announces-preliminary-terms-globalwafers
7. DCD, "GlobalWafers opens Texas wafer fab in Sherman, plans $4bn additional US investment" (May 2025) — https://www.datacenterdynamics.com/en/news/globalwafers-opens-texas-wafer-fab-in-sherman-plans-4bn-additional-us-investment/
8. Tokuyama, High-purity Polycrystalline Silicon (11N) — https://www.tokuyama.co.jp/eng/products/electronic_materials/polysilicon.html
9. Rapidus, "What Are the Raw Materials of Semiconductors?" (11N industry standard) — https://www.rapidus.inc/en/tech/te0015/
10. ETHW, "Milestones: Czochralski Process, 1916" — https://ethw.org/Milestones:Czochralski_Process,_1916
11. IEEE Spectrum, "Rediscovering the Legacy of Chemist Jan Czochralski" — https://spectrum.ieee.org/legacy-chemist-jan-czochralski
12. Silicon Masters, "Why a 300mm Silicon Wafer Costs $25,000" (blank wafer $100–200) — https://siliconmasters.co/blogs/our-blog/why-a-12-inch-wafer-can-cost-as-mauch-as-17-000
13. Silicon Analysts, "Wafer Pricing by Process Node (2026)" — https://siliconanalysts.com/data/wafer-pricing
14. Vision Times, "China's Chip Production Faces Risk Amid Japan's Photoresist Dominance" (Commerce Dept ~90% figure; 95% EUV) — https://www.visiontimes.com/2025/11/30/chinas-chip-production-faces-risk-amid-japans-photoresist-dominance.html
15. JIC Capital press release, JSR tender offer result (Apr 17, 2024) — https://www.jiccapital.co.jp/en/news/.assets/E_20240417_JIC_JICC_PressRelease.pdf
16. Evertiq, "State-backed fund takes over photoresist specialist JSR" — https://evertiq.com/news/55596
17. USITC working paper, "The South Korea–Japan Trade Dispute in Context" — https://www.usitc.gov/publications/332/working_papers/the_south_korea-japan_trade_dispute_in_context_semiconductor_manufacturing_chemicals_and_concentrated_supply_chains.pdf
18. CEPR/VoxEU, "The impact of export controls… Japan–Korea trade dispute" — https://cepr.org/voxeu/columns/impact-export-controls-international-trade-evidence-japan-korea-trade-dispute
19. TrendForce, "Japan Rumored to Curb Photoresist Exports as China Targets 40% Self-Sufficiency by 2026" (Dec 2025) — https://www.trendforce.com/news/2025/12/03/news-japan-rumored-to-curb-photoresist-exports-as-china-targets-40-self-sufficiency-by-2026/
20. TrendForce, "Japan Ramps Up Photoresist Investment for 2nm Chips — TOK, JSR Lead" (Nov 2025) — https://www.trendforce.com/news/2025/11/06/news-japan-ramps-up-photoresist-investment-for-2nm-chips-tokyo-ohka-kogyo-jsr-lead-the-charge/
21. IntelMarketResearch, EUV Mask Blanks Market (AGC+Hoya ~93%; $194M 2024) — https://www.intelmarketresearch.com/euv-mask-blanks-market-11463
22. SemiconductorX, "EUV Mask Blanks & Pellicles" (Hoya >75% by volume claim) — https://semiconductorx.com/semiconductor-euv-mask-blanks.html
23. Silicon Masters, "How Photomasks for IC Production Are Made" (mask set 60–100 masks, $5–15M; EUV mask $500k–1M) — https://siliconmasters.co/blogs/our-blog/how-photomasks-for-ic-production-are-made
24. SemiEngineering, "Merchant Photomask Makers Remain Relevant" (captive 63% / merchant 37%) — https://semiengineering.com/merchant-photomask-makers-remain-relevant/
25. IntelMarketResearch, Semiconductor IC Photomask Market (Photronics ~18%; Toppan+DNP ~30%) — https://www.intelmarketresearch.com/semiconductor-ic-photomask-2025-2032-114-1147
26. CNBC/Reuters, "Russia's attack on Ukraine halts half of world's neon output for chips" (Mar 2022) — https://www.cnbc.com/2022/03/12/russias-attack-on-ukraine-halts-half-of-worlds-neon-output-for-chips.html
27. CSIS, "Russia's Invasion of Ukraine Impacts Gas Markets Critical to Chip Production" — https://www.csis.org/blogs/perspectives-innovation/russias-invasion-ukraine-impacts-gas-markets-critical-chip-production
28. USITC executive briefing, "Ukraine, Neon, and Semiconductors" (price data) — https://www.usitc.gov/publications/332/executive_briefings/ebot_decarlo_goodman_ukraine_neon_and_semiconductors.pdf
29. Entegris 10-K FY2022 (CMC Materials acquisition closed Jul 6, 2022, ~$6.0B) — https://www.sec.gov/Archives/edgar/data/1101302/000110130223000021/entg-20221231.htm
30. Chemical Engineering, "Entegris to acquire CMC Materials for $6.5 billion" — https://www.chemengonline.com/entegris-to-acquire-cmc-materials-for-6-5-billion/
31. Techcet, "Semiconductor CMP Pad & Slurry Forecast" (DuPont >50% of pads; slurry shares) — https://techcet.com/semiconductor-cmp-pad-slurry-forecast/
32. Market Growth Reports, CMP Slurry and Pads Market ($2,905M 2024; top-5 slurry 65–70%) — https://www.marketgrowthreports.com/market-reports/cmp-slurry-and-pads-market-116426
33. CNN, "Devastation from Hurricane Helene could bring semiconductor chipmaking to a halt" (Oct 2024; 70–90% HPQ figure) — https://www.cnn.com/2024/10/02/tech/semiconductor-supply-chain-north-carolina-helene/index.html
34. Forbes, "North Carolina's Spruce Pine Quartz Mine Reopens After Hurricane Helene" (Oct 11, 2024) — https://www.forbes.com/sites/maryroeloffs/2024/10/11/quartz-mining-resumes-in-north-carolina-after-hurricane-helene-heres-how-storm-impacts-the-worlds-semiconductor-industry/
35. The Quartz Corp, "The Quartz Corp start phased return to operations" (Oct 2024) — https://www.thequartzcorp.com/articles/the-quartz-corp-start-phased-return-to-operations
36. Fox Carolina, "Quartz Corp. announces Spruce Pine plant shutdown as part of restructuring" (Jul 2, 2026) — https://www.foxcarolina.com/2026/07/02/quartz-producer-announces-shutdown-western-nc-facility-amid-restructuring/
37. WLOS, "As many as 30 jobs cut as The Quartz Corp closes its Spruce Pine location 'indefinitely'" — https://wlos.com/news/local/20-to-30-jobs-lost-as-the-quartz-companys-closes-its-spruce-pine-location-indefinitely-altapass-highway-production-stabilizing-operations
38. MarketsandMarkets, Ajinomoto Build-up Film Market — https://www.marketsandmarkets.com/Market-Reports/ajinomoto-build-up-film-market-234361012.html
39. BigGo Finance, "Ajinomoto, Controlling 95% of ABF Film Market, Hikes Prices 30%" (2026) — https://finance.biggo.com/news/ZU2KJZ4BpwxG186NIOsE
40. TradingKey, "How an MSG Factory Holds Nvidia by the Throat? What Is ABF Material?" — https://www.tradingkey.com/analysis/stocks/us-stocks/261783966-abf-ajinomoto-nvidia-ai-supply-chain-tradingkey
41. JIC Capital press release, Shinko Electric tender offer completion (Mar 19, 2025) — https://www.jiccapital.co.jp/en/news/.assets/E_20250319_JIC_JICC_PressRelease.pdf
42. Japan Exchange Group, Shinko Electric delisting decision — https://www.jpx.co.jp/english/news/1023/20250520-11.html
43. Mitsui Chemicals, notice on completion of Shinko acquisition SPC investment (JIC 80/DNP 15/Mitsui 5) — https://jp.mitsuichemicals.com/en/release/2025/2025_0319/index.htm
44. Business Research Insights, Ultra High Purity Hydrofluoric Acid Market (Stella Chemifa share) — https://www.businessresearchinsights.com/market-reports/ultra-high-purity-hydrofluoric-acid-market-107517
45. Mordor Intelligence, Specialty Gas Market (top-5 ~55–70% of high-purity gas) — https://www.mordorintelligence.com/industry-reports/specialty-gas-market
46. Market Research Future, Electronic Specialty Gases Market ($15.98B 2024) — https://www.marketresearchfuture.com/reports/electronic-specialty-gases-market-39391
47. Digitimes, "Shinko Electric to delist in June…" (Mar 2025) — https://www.digitimes.com/news/a20250321PD206/shinko-electric-mitsui-chemicals-materials-partnership-fujitsu.html
48. USGS, *Mineral Commodity Summaries 2026: Quartz (High-Purity and Industrial Cultured Crystal)* (two U.S. HPQ producers around Spruce Pine, crucible use, global sources, and substitutes) — https://pubs.usgs.gov/periodicals/mcs2026/mcs2026-quartz.pdf
49. Sibelco, "High Purity Quartz" (Spruce Pine IOTA ore bodies and fused-quartz crucibles for the CZ process) — https://www.sibelco.com/en/materials/high-purity-quartz
50. ASML, "Light & lasers" (DUV excimer-laser gas mixtures; KrF and ArF sources) — https://www.asml.com/en/technology/lithography-principles/light-and-lasers
51. ASML, "Indistinguishable from magic: the EUV pellicle" (the patterned reticle or mask carries the pattern printed on the wafer) — https://www.asml.com/en/company/stories/2022/the-euv-pellicle-indistinguishable-from-magic
52. North Carolina Department of Natural and Cultural Resources, "Spruce Pine Mining District (N-45)" (25 by 10 miles across Mitchell, Avery, and Yancey counties) — https://www.dncr.nc.gov/blog/2024/01/18/spruce-pine-mining-district-n-45
53. The Quartz Corp, "Restructuring U.S." (2026-06-30; one Spruce Pine production facility closed indefinitely, other U.S. locations unaffected) — https://www.thequartzcorp.com/articles/restructuring-us
54. TSMC, "Mask Services" (GDS conversion, OPC, mask-data preparation, and mask fabrication) — https://www.tsmc.com/english/dedicatedFoundry/services/mask_services
55. ZEISS, "Mask Metrology" (mask-set alignment and decomposition of difficult layers into multiple layouts) — https://www.zeiss.com/semiconductor-manufacturing-technology/products/photomask-solutions/mask-metrology.html
56. ASML, "TWINSCAN: 20 years of lithography innovation" (multiple patterning splits one complex layer into separately exposed patterns) — https://www.asml.com/en/company/stories/2021/twinscan-20-years-innovation
57. Samsung Semiconductor, "Samsung Electronics Starts Production of EUV-Based 7nm LPP Process" (one EUV mask versus up to four ArF masks in its 7LPP example) — https://semiconductor.samsung.com/news-events/news/samsung-electronics-starts-production-of-euv-based-7nm-lpp-process/
58. ZEISS, "Mask Tuning" (high-end mask sets contain multiple DUV masks and some EUV masks) — https://www.zeiss.com/semiconductor-manufacturing-technology/products/photomask-solutions/mask-tuning.html
59. imec, "EUV lithography: weighing the options" (self-aligned feature multiplication and EUV multi-patterning caveats) — https://www.imec-int.com/en/imec-magazine/imec-magazine-june-2019/euv-lithography-weighing-the-options-for-future-logic-and-memory-applications
