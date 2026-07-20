# Research — Materials & inputs (the hidden monopolies)

As-of: 2026-07

Fact pack. Ammunition only, no prose. `[n]` → source list at bottom.
`<!-- VERIFY -->` = not fully confident, check before recording.

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
- Japan's individual strongholds: ~**53%** of silicon wafers, ~**50–90%** of
  photoresist (higher at the leading edge), near-total control of EUV mask
  blanks and ABF film (below). [2][3]
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
- Japan holds ~**90%** of the global photoresist market (US Dept. of Commerce
  figure); at the leading edge, Japanese firms control ~**95% of EUV
  photoresists**. [14] Players: **JSR, Tokyo Ohka Kogyo (TOK), Shin-Etsu,
  Sumitomo Chemical, Fujifilm**. [2][14]
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
  transparency, because nothing transmits EUV. [21]
- EUV mask blanks: **Hoya + AGC (both Japanese) ≈ 93% of the market** — a
  two-company gate on every EUV chip. [21] Whole EUV blank market was only
  ~**$194M in 2024** — a sub-$200M market that all of AI silicon stands on. [21]
  <!-- VERIFY: Hoya/AGC split disputed — one source AGC >59%, another Hoya >75% by volume [21][22] -->
- Finished masks: captive shops (TSMC, Samsung, Intel internal) hold ~**63%**
  of the market's value; the merchant "big three" are **Photronics (~18%,
  US), Toppan (now Tekscend Photomask) and DNP (together ~30%)**. [24][25]
- Cost: a single EUV mask runs **$500k–$1M**; a full leading-edge mask set is
  **60–100 masks, ~$5–15M per design at 5/3nm**, with 20–30 EUV layers at 3nm
  pushing sets toward the high end and beyond at 2nm. [23]
  <!-- VERIFY: some estimates put 2nm-era sets at $20–30M+; sourced range is $5–15M -->

## Ultra-pure gases & chemicals
- **Neon — the Ukraine story.** Neon is the buffer gas in DUV excimer lasers
  (the light source for every non-EUV litho layer). It's a byproduct of
  Soviet-era steel-plant air separation, so pre-2022 roughly **half (45–54%)
  of the world's semiconductor-grade neon** came from two Ukrainian firms:
  **Ingas (Mariupol)** and **Cryoin (Odesa)**. [26][28] Both halted in the
  first weeks of the 2022 invasion — Ingas had shipped 15,000–20,000 m³/month,
  ~75% to chipmakers. [26] China spot prices ran **400 → 1,600 RMB/m³**
  (Oct 2021 → Feb 2022), ~4×; the 2014 Crimea annexation had already spiked
  neon ~**600%**. [27][28] Chipmakers survived on stockpiles, then built
  non-Ukrainian capacity — another leverage-that-leaks story.
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
- **Spruce Pine, North Carolina** hosts both U.S. producers of high-purity
  quartz. USGS estimates that the United States leads global HPQ production but
  does not publish country shares; it also lists sources in Australia, Brazil,
  Canada, China, India, and Russia. [48]
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
  processing facility in Spruce Pine "indefinitely"** (~20–30 jobs), explicitly
  *not* Helene-related — blamed on the weak solar/renewables market. [36][37]
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
- **Concentration below the concentration**: one town (Spruce Pine HPQ), one
  company (Ajinomoto ~95% ABF; DuPont >50% pads), two companies (Hoya+AGC ~93%
  EUV blanks; Ingas+Cryoin ~50% neon pre-2022), one country (Japan ~half of all
  materials). Each is a tiny market gating a trillion-dollar industry.
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
- **Demand whiplash on niche mines/plants**: TQC's 2026 Spruce Pine closure
  shows solar-driven demand swings can shutter "strategic" assets no one
  individually protects. [36]

## Fact ammo — lines that land
- **The MSG company**: every advanced CPU and AI GPU on Earth sits on an
  insulating film made by Ajinomoto — the Japanese seasoning company — which
  holds ~95% of the market. Your chip is packaged by the people who invented
  MSG. [38][39]
- **One town**: Spruce Pine, NC hosts both U.S. high-purity-quartz producers,
  and USGS estimates that the United States leads global production. HPQ has no
  economic substitute for most uses, including fused-quartz crucibles. [48]
- **Eleven nines**: wafer-grade silicon is 99.999999999% pure — about one
  foreign atom per hundred billion. It is routinely called the purest material
  humans mass-produce. [8][9]
- **The pen in the tin**: the crystal-pulling method every wafer starts with
  was discovered in 1916 when Jan Czochralski absent-mindedly dipped his pen
  into molten tin instead of his inkwell — and pulled out a single crystal.
  A trillion-dollar industry runs on a fixed act of clumsiness. [10][11]
- **Two companies in a war zone**: about half the world's chip-laser neon came
  from two Ukrainian firms — in Mariupol and Odesa. Prices quadrupled within
  weeks of the 2022 invasion. [26][27][28]
- **$150 → $20,000 → $500,000**: a blank wafer costs about as much as a pair of
  sneakers; processed at 3nm it's a ~$20k object; diced into AI chips it can be
  worth more than a house. [12][13] <!-- VERIFY: retail end-value math -->

---

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
48. USGS, *Mineral Commodity Summaries 2024: Quartz (High-Purity and Industrial Cultured Crystal)* (Spruce Pine production, crucible use, global sources, and substitutes) — https://pubs.usgs.gov/periodicals/mcs2024/mcs2024-quartz.pdf
49. Sibelco, "High Purity Quartz" (Spruce Pine IOTA ore bodies and fused-quartz crucibles for the CZ process) — https://www.sibelco.com/en/materials/high-purity-quartz
