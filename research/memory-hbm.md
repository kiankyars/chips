# Research — Memory & HBM
As-of: 2026-07

Fact pack. Ammunition only, no prose. `[n]` → source list at bottom.
`<!-- VERIFY -->` = not fully confident, check before recording.

## Memory vs logic (teachable)
- **DRAM** = working memory. 1 transistor + 1 capacitor per bit; the capacitor
  leaks, so every bit is refreshed ~every 64 ms ("Dynamic"); nanosecond access;
  everything vanishes at power-off. It's the desk you work at.
- **NAND** = storage. Charge trapped in an insulated cell; keeps data for years
  unpowered; ~1000× slower access than DRAM; wears out (finite write cycles);
  built as 3D towers now 200–400+ layers tall. It's the filing cabinet.
- **Why memory is a commodity and logic isn't:** a DDR5 chip from Samsung, SK
  hynix or Micron is interchangeable — bits are fungible, sold on spot + contract
  markets, price set purely by supply/demand. Logic sells differentiated designs
  (an H100 has no substitute); memory sells identical bits.
- Result: the **hog cycle**. Fabs take ~2 years and >$15B to build; everyone adds
  capacity in booms, gluts arrive together, prices crash, weakest player dies,
  repeat. Price swings routinely exceed ±50%:
  - 2022–23 bust: DRAM/NAND prices roughly **halved**; supplier inventories hit
    ~31 weeks. [1][2]
  - 2025–26 boom: conventional DRAM contract prices **+93–98% in a single
    quarter** (1Q26). [3][4]
- Consolidation is the long arc: dozens of DRAM makers in the 1980s–90s → **3
  companies ≈90% of DRAM** today. <!-- VERIFY: exact combined big-3 share; ~89.8% in 1Q26 per Counterpoint [5] -->
- Teach: logic economics reward design genius; memory economics reward **capex
  courage and cost per bit**. Same silicon, opposite business.

## The players & shares
### DRAM big-3 (revenue share, 1Q26) [5][6]
- **Samsung 38.6%** · **SK hynix 28.8%** · **Micron 22.4%** (rest ≈10% — mostly
  CXMT + Nanya). Total 1Q26 DRAM industry revenue: record **$97.1B**, +85% QoQ. [5]
- **The 2025 dethroning:** SK hynix took the DRAM revenue crown from Samsung in
  1Q25 — **Samsung's first loss of the top spot since 1992** — and held it
  through 3Q25 on HBM strength. [7][8]
- Samsung **regained #1 in 4Q25** as conventional DRAM prices exploded (its
  legacy capacity became a money-printer), and widened the gap in 1Q26 (DRAM
  sales +95% QoQ to $37.4B vs SK hynix $28.0B). [6][9]
- Full-year 2025 DRAM revenue: SK hynix ~$49.6B vs Samsung ~$46.4B — SK hynix
  likely edged the full year. [10] <!-- VERIFY: these were S&P forecasts; check final-year actuals -->
- SK hynix: higher **profitability** per bit than Samsung (HBM-heavy mix) even
  where revenue trails. [6]

### HBM (the crown jewels)
- **SK hynix ~56.4%** HBM share 1Q26 (its own SEC F-1 filing); was ~62% mid-2025. [11][12]
- #2 is contested: **Micron grew 2% (2023) → ~19–21%**, and by some trackers
  passed Samsung during 2025; Samsung recovering fast post-qualification. [12]
  <!-- VERIFY: trackers disagree on Samsung-vs-Micron #2 ordering in 1H26 -->
- Nvidia **Vera Rubin HBM4 allocation** (analyst est.): SK hynix ~60–70%,
  Samsung ~25–30%, Micron the remainder — SK hynix is still Nvidia's main
  supplier, as it has been since HBM3/H100. [13]
- HBM market size: ~**$35B (2025) → ~$60B (2026E)**, ~+70% YoY (Yole est.). [14]
  <!-- VERIFY: secondary source; Gartner has $33B 2025 → $86B 2027 -->

### NAND (1Q26 revenue share) [15][16]
- **Samsung ~29%** · **SK hynix group (incl. Solidigm) ~18%** · **Kioxia ~14%** ·
  **Micron ~13%** · **SanDisk ~13%** · **YMTC ~13%** — record $46B quarter;
  top-5 revenue +83.7% QoQ on shortage pricing.
- SanDisk = spun off from Western Digital (Feb 2025). <!-- VERIFY: exact split date -->
  Kioxia + SanDisk still share fabs: Yokkaichi/Kitakami JV extended to **2034**;
  jointly sampling **332-layer** BiCS10 NAND (vs Samsung's 400-layer class). [17][18]
- YMTC now ties Micron and SanDisk by share — see China section.

## The memory wall (teachable — why HBM exists)
- Over 20 years, peak server **compute grew ~60,000×**; DRAM bandwidth grew
  **~100×**; interconnect **~30×**. (Gholami et al., "AI and Memory Wall.") [19]
- Rates: compute ~3.0×/2yrs vs memory bandwidth ~1.6×/2yrs — the gap compounds
  every generation. [19]
- Consequence: modern accelerators are **bandwidth-bound, not compute-bound** —
  especially LLM *inference*: generating each token requires streaming the
  model's weights out of memory, so the GPU's math units sit idle **waiting for
  data**. Memory, not FLOPS, is the bottleneck for serving. [19]
- Teach: a GPU can do the math thousands of times faster than it can be fed.
  Feeding it is the memory industry's job — and the DIMM-on-a-motherboard
  architecture (a 64-bit channel, centimeters of wire away) physically can't.
- The fix: stop commuting. Move the memory **onto the package**, next to the
  GPU, and make the bus absurdly wide (1024–2048 bits per stack vs 64 per DDR
  channel). That's HBM.

## HBM deep dive
### Mechanically what it is
- **High Bandwidth Memory**: 8/12/16 DRAM dies thinned to tens of microns,
  stacked vertically, connected by **through-silicon vias (TSVs)** — thousands
  of copper elevator shafts drilled through each die — on top of a base die,
  the whole tower sitting **millimeters from the GPU on a silicon interposer**
  (TSMC CoWoS). [20]
- Analogy: DDR on the motherboard = a **suburb** — cheap land, long commute on
  a narrow road (64-bit channel). HBM = an **apartment tower downtown** —
  expensive per square meter, but 1024–2048 lanes wide and a one-minute walk
  to work.
- Invented: JEDEC standard 2013; first chips SK hynix 2013 (co-developed with
  AMD); first product AMD's Fiji GPU (Radeon Fury X, 2015). Nvidia's AI boom
  turned a niche into the industry's profit engine. [20]
- Assembly is the differentiator: SK hynix's **MR-MUF** molding process vs
  Samsung's TC-NCF film — SK hynix's yield edge here is a core reason it leads.
  <!-- VERIFY: current-gen process details; well-documented for HBM3/3E era -->

### HBM3E in production
- HBM3E is the **fifth HBM generation**, extending HBM3 rather than defining a
  separately named fifth-generation standard. SK hynix began volume production
  in March 2024. [66]
- Commercial configurations include **24 GB with eight DRAM dies** and **36 GB
  with twelve dies**. The stack connects through a **1,024-bit interface** and
  delivers about **1.2 TB/s**; exact rates vary by supplier and product. [66][67][68]
- SK hynix, Micron, and Samsung all manufacture HBM3E. That does not mean every
  supplier is qualified for every accelerator. [66][67][68]
- NVIDIA lists Blackwell Ultra at **288 GB of HBM3E** and up to **8 TB/s** per
  GPU. NVIDIA's correction note says the proper package has **12 HBM stacks**,
  replacing an earlier eight-stack diagram. [69]
- Power comparisons are vendor-specific. Micron claims 30% less power than
  competing HBM3E products and 2.5 times HBM2E performance per watt; those are
  not general HBM3E specifications. [67]

### HBM3E → HBM4 transition (status mid-2026)
- **HBM4 (JEDEC JESD270-4, Apr 2025):** interface doubles to **2048-bit**, up
  to 8 Gb/s/pin → **≥2 TB/s per stack**, stacks to 16-high, 24/32Gb dies. [21]
- **The big architectural break: the base die moves to LOGIC nodes.** SK hynix's
  HBM4 base die is fabbed by **TSMC** (12nm-class logic) — a memory company
  shipping a product with a TSMC die inside. Samsung fabs its own base die on
  its **4nm** foundry node (only vertically-integrated turnkey supplier). [22][23]
- Mass production: **Samsung announced first HBM4 mass production Feb 12, 2026**
  (11.7 Gbps, 3.3 TB/s/stack claimed — fastest announced); SK hynix began
  full-scale HBM4 production at M16 in Feb 2026 too. [23][22]
  <!-- VERIFY: "who was first" is contested marketing; both started ~Feb 2026 -->
- **All three (Samsung, SK hynix, Micron) certified by Nvidia for Vera Rubin
  HBM4** — confirmed by Jensen Huang at GTC Taipei, June 1, 2026; Rubin
  shipments from summer 2026. [13][24]
- Next lap already started: SK hynix shipped **12-layer HBM4E samples June
  2026**, ahead of schedule; SK hynix showed **16-high 48GB HBM4** at CES 2026;
  Samsung unveiled HBM4E at GTC 2026. [25][26][27]
- TrendForce: HBM4 overtakes HBM3E as the mainstream HBM in **2H26**; 2026 HBM
  shipments >30B Gb. [28] <!-- VERIFY: shipment figure from press summary -->

### HBM economics (why it broke the commodity model)
- **Price premium:** historically ~**3–5× per bit** over DDR5 (some estimates
  5–6×); HBM3E contract ≈ **$13–17/GB** in early 2026. Caveat to voice: the
  supercycle *compressed* the ratio — commodity DDR5 rose so fast TrendForce
  expects plain DDR5 **profitability to surpass HBM3E in 2026**. [29][30][31]
- **The trade ratio:** ~**3× the wafer capacity per GB** vs DDR5 (stacking
  overhead + TSV area + yield loss); TrendForce frames it as 1GB HBM ≈ wafer
  area of ~4GB conventional DRAM. Every HBM wafer started is ~3 wafers of
  PC/phone DRAM that never get made — that arithmetic is what set the whole
  2025–26 shortage off. [32][33]
- HBM consumes roughly **a fifth of all DRAM wafer capacity in 2026**.
  <!-- VERIFY: ~20–23% figures circulating; find TrendForce primary -->
- **HBM sells like logic, not memory:** customer-qualified (Nvidia quals take
  quarters — see Samsung saga), negotiated yearly contracts, presold 12–24
  months ahead (SK hynix and Micron sold out through calendar 2026; Samsung
  sold out 2026 supply back in Oct 2025), and with HBM4's custom base dies it's
  becoming a semi-custom product per customer. The commodity spot market simply
  doesn't exist here. [34][35][36]
- **HBM as % of an AI accelerator's BOM:** H100 SXM ~**41%** (~$1,350 of
  ~$3,320 build cost); B200 ~**45%** (~$2.9k of ~$6.4k); Blackwell Ultra B300
  **>50%**. The memory now costs more than the GPU die it feeds. [37][38]

### Samsung's Nvidia qualification saga (resolved)
- Samsung failed Nvidia's HBM3E quals for ~**18 months** (thermal/power issues)
  while SK hynix and Micron shipped — the defining humiliation of the AI cycle
  for the world's biggest memory maker. [39]
- Fix required redesigning the HBM3E DRAM core (chip chief Jun Young-hyun);
  **passed Nvidia's 12-layer HBM3E qualification Sept 2025**; began Nvidia
  shipments in Q3 2025, sold out 2026 supply by Oct 2025. [39][40][35]
- By mid-2026: Samsung mass-producing HBM4 + SOCAMM2 for Vera Rubin, fully back
  in the race. [23][41]

## The 2025–26 supercycle
- **4Q25 ignition:** PC DRAM contract +38–43% QoQ; server DRAM +43–48%;
  TrendForce had to revise its own forecast up twice. [42][3]
  16Gb DDR5 spot ~$6.84 → ~$27.20 during the quarter (~4×). [43] <!-- VERIFY: spot datapoint -->
- **1Q26:** conventional DRAM contracts +93–98% QoQ; DRAM industry revenue +81%
  QoQ (TrendForce) to a record ~$97.1B (Counterpoint); Samsung flagged a 146%
  blended ASP jump, SK hynix mid-60% DRAM ASP gains. **2Q26:** a further
  +58–63%. [3][4][5][44]
- **Cause:** HBM + AI server DRAM ate the wafers (the 3× trade ratio), big-3
  had cut legacy capacity in the 2023 bust, then hyperscalers panic-prebought:
  multi-year lock-in deals from Meta/Google/Microsoft/Amazon; SK hynix's 2026
  output presold; Kioxia's entire 2026 NAND committed, with requests reaching
  into 2027–28. [45][36]
- Data centers forecast to consume ~**70% of all memory output in 2026** vs
  ~20–30% in 2022. [4][45] <!-- VERIFY: secondary sources; find primary -->
- **Consumer fallout:** PC OEMs (Dell/HP/Lenovo/Asus) warned of 15–20% retail
  price hikes; Raspberry Pi raised prices after ~120% YoY memory cost inflation;
  TrendForce cut 2026 smartphone + notebook shipment outlooks as brands raise
  prices and quietly downgrade RAM specs. [46][47]
- **Scale of the boom (TrendForce):** DRAM industry $165.7B in 2025 (+73%) →
  forecast **$404.3B in 2026 (+144%)**; NAND +112% to $147.3B; total memory
  **$551.6B in 2026**, peaking ~$842.7B in 2027. [48] <!-- VERIFY: 2026-27 are forecasts; treat as scenario, not fact -->
- HBM contract prices expected to surge "multiples higher" again in 2027
  (TrendForce, Jun 2026). [30]
- Hedge to voice: every memory cycle in history ended in a glut; the bulls'
  case is that presold multi-year AI contracts make this one different. That
  claim is untested.

## China memory (honest threat assessment)
### CXMT (DRAM)
- China's DRAM champion; capacity ~**265k wafer-starts/month** end-2025 —
  already big-league scale. [49]
- **DDR5: real but behind.** Cost per bit >30% above the big-3; sells at only
  ~5–10% below big-3 ASPs (shortage pricing lifted everyone); densest die
  (24Gb) ~one generation behind big-3 32Gb-class. [49][50]
- **HBM: barely exists.** ~5k wspm of HBM capacity end-2025 (~2% of its own
  fab space), plans ~30k by end-2026 — years from Nvidia-class HBM. [49]
- Beachhead dynamics: big-3 abandoned DDR4/legacy to chase HBM → CXMT inherits
  the low end; Chinese module makers and even Corsair/HP/Dell adopting CXMT
  DDR5. [51]
- Verdict: credible commodity supplier by 2027, not an AI-memory threat this
  decade unless HBM packaging leapfrogs. <!-- VERIFY: editorial judgment, not a sourced fact -->

### YMTC (NAND)
- Despite Entity List sanctions: shipping 5th-gen **294-layer** TLC NAND
  (two bonded decks, 150+144, Xtacking 4.0 hybrid bonding). [52]
- ~**13% NAND share 1Q26 — tied with Micron and SanDisk**. [15][53]
- Building a production line on **domestic (non-US) tools**, targeting ~15% of
  NAND output by end-2026; third Wuhan fab underway; >300-layer mass production
  planned. [53]
- Verdict: NAND is the more commoditized market (no HBM-equivalent moat), so
  China bites here first and hardest. Sanctions slowed, did not stop.
- Teach: memory is China's most credible semiconductor beachhead — exactly
  because it's the segment where capex courage matters more than design genius.
  It's the Korea playbook, re-run.

## Financials (latest as of 2026-07)
### SK hynix
- **FY2025 (record):** revenue **₩97.15T**, operating profit **₩47.21T** (49%
  margin — beat Samsung's whole company), net **₩42.95T**. HBM revenue more
  than doubled YoY. [54]
- **1Q26 (record, all-time highs):** revenue **₩52.58T** (+60% QoQ, +198% YoY —
  first ₩50T quarter), operating profit **₩37.61T** (**72% margin**), net
  ₩40.35T. Capex up in 2026: M16 ramp, Yongin cluster, EUV purchases. [55]
- **Nasdaq ADR listing July 10, 2026** (ticker SKHY): ~**$28–29.4B** raise —
  the **largest ADR listing in history** (tops Alibaba's $21.8B, 2014);
  proceeds → fabs + EUV. [56][11]
### Micron (fiscal year ends Aug)
- **FY2025:** revenue **$37.38B** (vs $25.11B), GAAP net income **$8.54B**,
  capex $13.8B — record year. [57]
- **FQ3-26 (Mar–May 2026, reported Jun 24):** revenue **$41.46B** — more than
  its entire FY2025, 4.5× the year-ago quarter ($9.30B); GAAP gross margin
  **84.6%**; GAAP net income **$28.24B**; EPS $24.67. Guides FQ4 to **$50B ±1B
  at ~86% GM**. HBM4 in high-volume shipment for lead customer (Nvidia). [58]
- 16 strategic capacity agreements signed, >**$100B** committed contract value;
  HBM sold out through calendar 2026. [59] <!-- VERIFY: from earnings-call summaries, not the press release -->
### Samsung (memory division inside DS)
- **4Q25:** company record — revenue ₩93.8T, operating profit ₩20.1T. [60]
- **1Q26:** company OP **₩57.2T** — more than all of FY2025 combined. DS
  division: revenue ₩81.7T, **OP ₩53.7T** (vs ~₩1T a year earlier — ~48×);
  memory alone **₩74.8T revenue (~$51B)**, all-time high. [41][61][62]
- **2Q26 preliminary (July 7, 2026):** revenue ~₩171T, operating profit
  **₩89.4T (~$59B) — up ~19× YoY**, ~₩1T of profit per day; stock still fell
  ~7% on capex-expansion fears. Analysts est. DS OP >₩100T before ~₩15–20T
  employee-bonus provisions. [63]

## History pattern (the 4-beat arc)
1. **America invented it.** DRAM concept: Robert Dennard, IBM, 1966–68
  <!-- VERIFY: patent date -->; first commercial DRAM: **Intel's 1103 (1970)** —
  by 1972 the world's best-selling semiconductor chip. DRAM revenue built
  Intel. (Hedge: Intel's literal first product was the 3101 SRAM, 1969 — the
  1103 was its first hit. Direction of the lie: "Intel's first product" slightly
  overstates.) [64]
2. **Japan won it in the '80s.** NEC, Hitachi, Toshiba, Fujitsu, Mitsubishi out-
  invested and out-yielded the US; Japan reached roughly **~75–80% of world
  DRAM by the late '80s** <!-- VERIFY: exact peak share -->; the 1985 crash
  drove **Intel out of DRAM entirely** (Grove to Moore: a new CEO "would get
  us out of memories" — so they fired themselves and did it), and produced the
  1986 US–Japan Semiconductor Agreement.
3. **Korea won it in the '90s.** Samsung entered in 1983 (Lee Byung-chul's
  "Tokyo Declaration"), invested straight through the busts that bankrupted
  rivals, and took **#1 in DRAM in 1992 — a crown it then held for 33 years,
  until SK hynix took it in Q1 2025**. [7] Japan consolidated and exited:
  Elpida bankrupt 2012 (bought by Micron); Germany's Qimonda dead 2009.
  <!-- VERIFY: Elpida/Qimonda dates -->
4. **The lesson:** memory leadership migrates — it belongs to whoever keeps
  writing capex checks at the bottom of the cycle when incumbents flinch.
  US → Japan → Korea, each handoff via a downturn. The 2025 twist: the crown
  moved *within* Korea, to the company that bet on HBM early. China is now
  running the identical playbook from below.

## Risks
- **Cycle risk, the eternal one:** record prices → record capex (DRAM capex
  ~$53.7B 2025 → ~$61.3B 2026) → the 2027–28 glut candidate. Every prior
  supercycle ended in oversupply; TrendForce's own curve peaks in 2027. [65][48]
- **AI-demand concentration:** HBM demand is essentially Nvidia + a few
  hyperscalers; an AI-capex pause hits memory harder than logic (commodity DRAM
  can't absorb the wafers coming back).
- **Untested contracts:** the multi-year "presold" LTAs have never been through
  a downturn; take-or-pay enforcement vs hyperscalers is an open question.
- **Samsung capex overshoot:** market already punishing expansion signals
  (−7% on a record quarter). [63]
- **China at the low end:** CXMT + YMTC undercut commodity DRAM/NAND from
  below, compressing the cushion the big-3 fall back on in a bust. [49][53]
- **Geographic concentration:** the world's working memory is overwhelmingly
  fabbed in Korea (Icheon, Cheongju, Pyeongtaek, Hwaseong) — a Taiwan-style
  single-region exposure nobody talks about; plus SK hynix legacy fab exposure
  in Wuxi, China. <!-- VERIFY: current Wuxi share of SK hynix DRAM output -->
- **Demand destruction below:** memory-driven PC/phone price hikes are already
  shrinking the consumer TAM that pays for half the industry. [47]

## Fact ammo — lines that land
- **In 20 years, GPU compute grew ~60,000×. Memory bandwidth grew ~100×.**
  That 600-fold gap is the memory wall — and the entire reason HBM exists. [19]
- **On a Blackwell B200, the memory costs more than the GPU die** — HBM is
  ~45% of build cost (~$2.9k of ~$6.4k); on B300, over half. Nvidia sells
  compute; it *buys* memory. [37][38]
- **Micron just posted an 84.9% gross margin** — guiding to 86% — numbers
  usually reserved for software companies, from a company that sells the most
  commodity product in silicon. Its quarter ($41.5B) beat its entire previous
  fiscal year. [58]
- **Samsung earned ~₩1 trillion per day in Q2 2026** (₩89.4T ≈ $59B operating
  profit, up ~19× YoY) — and its stock *fell 7%*, because in memory, record
  profits are how every crash begins. [63]
- **One HBM wafer kills ~3 PC-DRAM wafers.** That trade ratio is why your
  laptop's RAM roughly quadrupled in price in six months: your PC is bidding
  against Microsoft's data centers for the same wafer. [32][43]
- **Samsung lost the DRAM crown in Q1 2025 for the first time since 1992** —
  33 years of dominance ended not by a foreign rival but by its neighbor
  SK hynix betting earlier on HBM. [7]
- **Five days ago SK hynix pulled off the largest ADR listing in history**
  (~$28B+ on Nasdaq, July 10, 2026 — bigger than Alibaba's 2014 debut), to
  fund more fabs and more EUV. Capex courage, the 2026 edition. [56]

---

## Sources
1. The Register, "SK hynix sees first loss in 10 years as memory prices fall" — https://www.theregister.com/2023/02/01/sk_hynix_q4_22/
2. CNBC, "SK Hynix reports record quarterly operating loss" (Apr 2023) — https://www.cnbc.com/2023/04/26/sk-hynix-reports-record-quarterly-operating-loss-forecasts-better-outlook.html
3. TrendForce, "Rapid Contract Price Surge Drives 1Q26 DRAM Industry Up 81% QoQ" — https://www.trendforce.com/presscenter/news/20260601-13070.html
4. Investing.com, "The End of Cheap Memory: Why 2026 Marks a Structural Shift" — https://www.investing.com/analysis/the-end-of-cheap-memory-why-2026-marks-a-structural-shift-in-tech-economics-200675634
5. Counterpoint Research, "Global DRAM and HBM Market Share: Quarterly" — https://counterpointresearch.com/en/insights/global-dram-and-hbm-market-share
6. Tech Times, "Samsung Leads DRAM Market Share at 38.6%; SK hynix Trails on Revenue but Tops Profit Margins" — https://www.techtimes.com/articles/318052/20260609/samsung-leads-dram-market-share-386-sk-hynix-trails-revenue-tops-profit-margins.htm
7. TrendForce, "DRAM Revenue Drops 5.5% in 1Q25; SK hynix Overtakes Samsung for Top Spot" — https://www.trendforce.com/presscenter/news/20250603-12603.html
8. TrendForce, "Global DRAM Revenue Jumps 30.9% in 3Q25" — https://www.trendforce.com/presscenter/news/20251126-12802.html
9. TrendForce, "Price Rally Drives 4Q25 DRAM Revenue Up 29.4%; Samsung Regains No. 1" — https://www.trendforce.com/presscenter/news/20260226-12937.html
10. S&P Global Market Intelligence, "SK Hynix set to overtake Samsung as DRAM leader" — https://www.spglobal.com/market-intelligence/en/news-insights/research/2025/05/sk-hynix-set-to-overtake-samsung-as-dram-leader-amid-ai-driven-memory-boom
11. SK hynix Inc., Form F-1 (SEC; HBM 56.4% / DRAM 29.1% share 1Q26) — https://www.sec.gov/Archives/edgar/data/0002120882/000119312526280172/d32785df1.htm
12. Astute Group, "SK hynix holds 62% of HBM, Micron overtakes Samsung, 2026 battle pivots to HBM4" — https://www.astutegroup.com/news/general/sk-hynix-holds-62-of-hbm-micron-overtakes-samsung-2026-battle-pivots-to-hbm4/
13. Tech Times, "Nvidia Vera Rubin Enters Full Production: Samsung, SK Hynix, Micron Named HBM4 Suppliers" — https://www.techtimes.com/articles/317539/20260602/nvidia-vera-rubin-enters-full-production-samsung-sk-hynix-micron-named-hbm4-suppliers.htm
14. Ampheo, "Memory Chip Market Forecast 2026" (Yole/Gartner HBM revenue) — https://www.ampheo.com/blog/memory-chip-market-forecast-2026-dram-nand-hbm-and-nor-flash
15. Counterpoint Research, "Global NAND Memory Market Surges to a Record $46B in Q1 2026" — https://counterpointresearch.com/en/insights/nand-revenues-record-high-q1-2026-from-ai-demand
16. TrendForce, "Combined Revenue of Top Five NAND Suppliers Rose 83.7% QoQ in 1Q26" — https://www.trendforce.com/presscenter/news/20260525-13058.html
17. Kioxia, "Kioxia and Sandisk Extend Yokkaichi JV Agreement Through 2034" — https://www.kioxia.com/en-jp/about/news/2026/20260130-1.html
18. Tom's Hardware, "Kioxia and Sandisk sample world's densest 3D NAND — 332-layer" — https://www.tomshardware.com/pc-components/ssds/kioxia-and-sandisk-sample-worlds-densest-3d-nand-new-332-layer-beats-samsungs-400-layer-nand
19. Gholami et al., "AI and Memory Wall" (arXiv:2403.14123) — https://arxiv.org/abs/2403.14123
20. Wikipedia, "High Bandwidth Memory" — https://en.wikipedia.org/wiki/High_Bandwidth_Memory
21. JEDEC, "JESD270-4 HBM4 Standard" press release — https://www.jedec.org/news/pressreleases/jedec%C2%AE-and-industry-leaders-collaborate-release-jesd270-4-hbm4-standard-advancing
22. BigGo Finance, "SK Hynix to Begin World's First Mass Production of HBM4 in February 2026… via TSMC Partnership" — https://finance.biggo.com/news/Tui5V5sBU6SAbxhZ0Sjf
23. Fintool, "Samsung Begins World's First HBM4 Mass Production for Nvidia's Vera Rubin" — https://fintool.com/news/samsung-hbm4-nvidia-vera-rubin
24. Tech Times, "Nvidia Vera Rubin HBM4: Jensen Huang Confirms All Three Suppliers in Production" — https://www.techtimes.com/articles/317855/20260605/nvidia-vera-rubin-hbm4-jensen-huang-confirms-all-three-suppliers-production-q3-ship.htm
25. Tech Times, "SK hynix Ships 12-Layer HBM4E Samples Ahead of Schedule" — https://www.techtimes.com/articles/318633/20260619/sk-hynix-ships-12-layer-hbm4e-samples-ahead-schedule-tightening-race-samsung.htm
26. StorageNewsletter, "SK hynix Fiscal 1Q26 Financial Results" (16-layer 48GB HBM4 at CES 2026) — https://www.storagenewsletter.com/2026/04/29/sk-hynix-fiscal-1q26-financial-results/
27. Samsung Semiconductor, "Samsung Unveils HBM4E… at NVIDIA GTC 2026" — https://semiconductor.samsung.com/news-events/news/samsung-unveils-hbm4e-showcasing-comprehensive-ai-solutions-nvidia-partnership-and-vision-at-nvidia-gtc-2026/
28. TrendForce, "AI Architecture Evolution Set to Drive Memory Market Revenue to a New Peak in 2027" — https://www.trendforce.com/presscenter/news/20260122-12893.html
29. Silicon Analysts, "HBM Memory Pricing and Specifications (2026)" — https://siliconanalysts.com/data/hbm-pricing
30. TrendForce, "HBM Contract Prices Expected to Surge Multiples Higher in 2027" — https://www.trendforce.com/presscenter/news/20260602-13074.html
31. TrendForce, "Tight DRAM Supply to Boost DDR5 Contract Prices — Profitability in 2026 Expected to Surpass HBM3e" — https://www.trendforce.com/presscenter/news/20251029-12758.html
32. Tom's Hardware, "HBM is coming for your PC's RAM — HBM consumes ~3× the wafer capacity of DDR5 per GB" — https://www.tomshardware.com/pc-components/ram/hbm-is-eating-your-ram
33. Tech Times, "DDR5 RAM Hits $375 Floor: HBM Takes Three Times More Wafers" — https://www.techtimes.com/articles/317789/20260604/ddr5-ram-hits-375-floor-pc-builders-hbm-takes-three-times-more-wafers.htm
34. MLQ Research, "Micron Q3 FY2026 Earnings: HBM Drives a 346% Revenue Surge" (HBM sold out cal-2026) — https://mlq.ai/research/micron-q3-fy2026-earnings-hbm-drives-a-346-revenue-surge-and-a-50b-q4-outlook/
35. KED Global, "Samsung sells out 2026 HBM supply after starting Nvidia shipments in Q3" — https://www.kedglobal.com/earnings/newsView/ked202510300005
36. VersaLogic, "Supply Chain Brief: Memory Market Conditions in 2026" (hyperscaler LTAs; Kioxia committed through 2026+) — https://www.versalogic.com/blog/supply-chain-brief-memory-market-conditions-in-2026/
37. Silicon Analysts, "AI Accelerator Manufacturing Cost Estimates (2026)" (H100 ~41%, B200 ~45% HBM BOM share) — https://siliconanalysts.com/data/ai-chip-costs
38. Wing Venture Capital, "The Memory Triopoly" (HBM >50% of B300 BOM) — https://www.wing.vc/content/the-memory-triopoly
39. KED Global, "Samsung clears Nvidia hurdle for 12-layer HBM3E supply" — https://www.kedglobal.com/korean-chipmakers/newsView/ked202509190008
40. TrendForce, "Samsung 12H HBM3e Reportedly Clears NVIDIA Tests After 18-Month Setback" — https://www.trendforce.com/news/2025/09/22/news-samsung-12h-hbm3e-reportedly-clears-nvidia-tests-after-18-month-setback-hbm4-reaches-final-phase/
41. Samsung Newsroom, "Samsung Electronics Announces First Quarter 2026 Results" — https://news.samsung.com/global/samsung-electronics-announces-first-quarter-2026-results
42. TrendForce, "DRAM Prices to Continue Rising in 4Q25, Server Demand Surges Ahead" — https://www.trendforce.com/presscenter/news/20250924-12733.html
43. HWCooling, "Memory prices to double in Q1 2026 compared to year-end" — https://www.hwcooling.net/en/memory-prices-to-double-in-q1-2026-compared-to-year-end/
44. TrendForce, "Memory 1Q26 Price Surge: Samsung Flags 146% ASP Jump, SK hynix Sees Mid-60% DRAM Gains" — https://www.trendforce.com/news/2026/05/18/news-memory-supercycle-drives-1q26-price-surge-samsung-flags-146-asp-jump-sk-hynix-sees-mid-60-dram-gains/
45. Wikipedia, "2025–present global memory supply shortage" — https://en.wikipedia.org/wiki/2025%E2%80%93present_global_memory_supply_shortage
46. TrendForce, "Rising Memory Prices Weigh on Consumer Markets; 2026 Smartphone and Notebook Outlook Revised Downward" — https://www.trendforce.com/presscenter/news/20251117-12784.html
47. TrendForce, "Memory Price Surge to Persist in 1Q26; Smartphone and Notebook Brands Begin Raising Prices and Downgrading Specs" — https://www.trendforce.com/presscenter/news/20251211-12831.html
48. TrendForce (via press), 2026 memory market $551.6B / DRAM $404.3B forecast — https://www.trendforce.com/presscenter/news/20260122-12893.html
49. SemiAnalysis, "China's CXMT Is Set to Challenge DRAM Incumbents" — https://newsletter.semianalysis.com/p/chinas-cxmt-is-set-to-challenge-dram
50. Wccftech, "CXMT's 'Cheap' DDR5 Is a Myth — Prices Match Samsung, SK Hynix & Micron" — https://wccftech.com/cxmt-cheap-ddr5-is-a-myth-memory-vendors-tell-us-prices-match-samsung-sk-hynix-micron/
51. Tom's Hardware, "Chinese memory brands ditch Samsung and Micron for homegrown CXMT and YMTC silicon" — https://www.tomshardware.com/pc-components/ram/chinese-memory-vendors-snub-industry-giants-in-favor-of-homegrown-ram-chips-samsung-micron-and-sk-hynix-face-a-chinese-supply-chain-revolt
52. Tom's Hardware, "YMTC quietly begins shipping 5th Gen 3D TLC NAND (294 layers)" — https://www.tomshardware.com/pc-components/ssds/chinese-chipmaker-ships-record-breaking-chips-ymtc-quietly-begins-shipping-5th-gen-3d-tlc-nand
53. Tom's Hardware, "China's YMTC moves to break free of U.S. sanctions — aims for 15% of NAND by late 2026" — https://www.tomshardware.com/pc-components/ssds/chinas-ymtc-moves-to-break-free-of-u-s-sanctions-by-building-production-line-with-homegrown-tools-aims-to-capture-15-percent-of-nand-market-by-late-2026
54. SK hynix / PR Newswire, "SK hynix Announces FY25 Financial Results — Record-High" — https://www.prnewswire.com/news-releases/sk-hynix-announces-fy25-financial-results-posts-record-high-results-and-delivers-highest-shareholder-returns-302672384.html
55. StorageNewsletter, "SK hynix Fiscal 1Q26 Financial Results" — https://www.storagenewsletter.com/2026/04/29/sk-hynix-fiscal-1q26-financial-results/
56. CNBC, "SK Hynix plans to raise $29 billion via Nasdaq listing as soon as July 10" — https://www.cnbc.com/2026/06/24/sk-hynix-nasdaq-adr-listing-south-korea.html
57. Micron 8-K, "Results for the Fourth Quarter and Full Year of Fiscal 2025" — https://www.sec.gov/Archives/edgar/data/723125/000072312525000024/a2025q4ex991-pressrelease.htm
58. Micron IR, "Micron Reports Record Results for the Third Quarter of Fiscal 2026" — https://investors.micron.com/news-releases/news-release-details/micron-technology-inc-reports-record-results-third-quarter
59. Money Morning / MLQ summaries of Micron FQ3-26 call ($100B strategic capacity agreements) — https://mlq.ai/research/micron-q3-fy2026-earnings-hbm-drives-a-346-revenue-surge-and-a-50b-q4-outlook/
60. Samsung Newsroom, "Samsung Electronics Announces Fourth Quarter and FY 2025 Results" — https://news.samsung.com/global/samsung-electronics-announces-fourth-quarter-and-fy-2025-results
61. The Elec, "Samsung Posts Record 57.2 Trillion Won Operating Profit in Q1" — https://www.thelec.net/news/articleView.html?idxno=10127
62. Data Center Dynamics, "Samsung Q1 '26 operating profit exceeds company's FY25 full-year total" — https://www.datacenterdynamics.com/en/news/samsung-electronics-q1-26-operating-profit-exceeds-companys-fy25-full-year-total/
63. CNBC, "Samsung Electronics shares fall as capex concerns outweigh strong Q2" (Q2-26 prelim, Jul 7, 2026) — https://www.cnbc.com/2026/07/07/samsung-electronics-preliminary-second-quarter-profit-hits-fresh-high.html
64. Wikipedia, "Intel 1103" — https://en.wikipedia.org/wiki/Intel_1103
65. TrendForce, "Memory Industry to Maintain Cautious CapEx in 2026" (DRAM capex $53.7B → $61.3B) — https://www.trendforce.com/presscenter/news/20251113-12780.html
66. SK hynix, "SK hynix Begins Volume Production of Industry's First HBM3E" (fifth generation, 1.18 TB/s, production) — https://news.skhynix.com/sk-hynix-begins-volume-production-of-industry-first-hbm3e/
67. Micron, "HBM3E" and product brief (24/36 GB, eight/twelve-high, 1,024 I/O pins, >9.2 Gb/s, >1.2 TB/s) — https://www.micron.com/products/memory/hbm/hbm3e
68. Samsung Semiconductor, "HBM" (24/36 GB, eight/twelve-high, up to 9.2 Gb/s and 1.18 TB/s) — https://semiconductor.samsung.com/dram/hbm/
69. NVIDIA, "Inside NVIDIA Blackwell Ultra" (288 GB HBM3E, 8 TB/s, correction to 12 HBM stacks) — https://developer.nvidia.com/blog/inside-nvidia-blackwell-ultra-the-chip-powering-the-ai-factory-era/
