# Research — The fabless field (AMD · Apple · Qualcomm · Broadcom · Marvell · MediaTek)

As-of: 2026-07

Fact pack. Ammunition only, no prose. `[n]` → source list at bottom.
`<!-- VERIFY -->` = not fully confident, check before recording.
Nvidia is deliberately excluded — it has its own pack (`research/nvidia.md`).
Fiscal years differ: AMD/MediaTek = calendar; Qualcomm FY ends Sept; Broadcom FY
ends Nov; Marvell FY ends Jan/Feb (so "FY2026" = calendar 2025); Apple FY ends Sept.

## The fabless model in numbers
- Top-10 fabless IC designers' combined 2025 revenue: **$359.4B, up 44% YoY**.
  Nvidia alone = **$205.7B = 57%** of the top-10 total; the other nine split ~$154B. [1]
- Ranking 2025: Nvidia $205.7B → Broadcom $39.7B (semis only) → Qualcomm $38.9B →
  AMD $34.6B → MediaTek $19.1B → Marvell $8B+ → Realtek → OmniVision → Novatek → MPS. [1]
- The five chip-sellers in this pack (AMD, Qualcomm, Broadcom incl. software,
  MediaTek, Marvell) ≈ **$170B combined latest-FY revenue** (arithmetic from [4][24][30][40][43]; mixed fiscal years).
- Fabless share of worldwide IC sales: record **34.8%** in 2021, trending toward
  high-30s per IC Insights. [2] <!-- VERIFY: most current % — IC Insights ceased publishing; no fresher authoritative figure found -->
- Margin ladder, mid-2026: TSMC (foundry) gross margin **66.2%** in Q1 2026 [3] —
  the foundry now *out-margins most of its fabless customers*: AMD 55% non-GAAP [5],
  Marvell 58.9% non-GAAP [41], MediaTek ~48% <!-- VERIFY: MTK GM -->, Qualcomm ~56%
  GAAP <!-- VERIFY: QCOM FY25 GM -->. Broadcom is the outlier: adjusted EBITDA =
  **69% of revenue**. [31] Equipment (ASML) GM ~53% (see `research/asml.md`).
  Only Nvidia and Broadcom clearly out-earn their foundry per dollar of sales.
- The model in one line: fabless companies keep the design, the software, and the
  customer; TSMC keeps the fab, the capex, and — lately — the pricing power.

## AMD
- **FY2025 (calendar):** record revenue **$34.6B** (+~14%); GAAP gross margin 50%;
  net income $4.3B (non-GAAP $6.8B). Data Center segment record **$16.6B, +32%**;
  Client+Gaming record $14.6B, +51%. [4]
- **Latest quarter (Q1 2026, reported May 5, 2026):** revenue **$10.3B, +38% YoY**;
  Data Center **$5.8B, +57%**; non-GAAP GM 55%; record FCF $2.6B (~3× YoY);
  Q2 guide $11.2B. Stock +14–16% after hours. [5]
- **Niche:** the only company fielding both a full x86 CPU line (EPYC/Ryzen) and a
  credible Nvidia-class AI GPU line (Instinct) — the industry's designated second
  source for AI compute.
- **AI accelerator arc:** MI300X (launched Dec 2023, 192GB HBM3, ~153B transistors
  across 12 chiplets <!-- VERIFY: transistor/chiplet count -->) → MI325X (Oct 2024,
  256GB HBM3E <!-- VERIFY -->) → MI350/MI355X (June 2025, CDNA 4, 288GB HBM3E
  <!-- VERIFY: MI355X specs -->) → **MI400 series unveiled at CES 2026**
  (MI430X/MI440X/MI455X). "Helios" rack: 72× MI455X + 18 EPYC "Venice" CPUs, 31TB
  HBM4, ~2.9 FP4 exaflops/rack; volume ramp guided for 2H 2026. [11]
- **OpenAI deal (Oct 6, 2025) — verified, active:** 6 GW of Instinct GPUs across
  multiple generations; first 1 GW of MI450s deploys 2H 2026; AMD expects "tens of
  billions" in revenue. OpenAI received a warrant for up to **160M AMD shares
  (~10% of the company)** vesting on deployment + share-price milestones ($600
  target for the final tranche); as of mid-2026 the first tranche has not yet
  vested (1 GW not yet deployed). [6][7]
- **EPYC vs Intel (Q1 2026, Mercury Research):** record **46.2% of x86 server CPU
  *revenue*** and **~33% of server unit shipments** (up from 28.8% in Q4 2025) —
  i.e., AMD sells a third of the units and takes nearly half the money, because
  EPYC dominates the high-core-count, high-ASP tiers. [8][9] AMD now models the
  server CPU TAM at **>$120B by 2030**. [5]
- **Xilinx:** all-stock acquisition closed **Feb 14, 2022 at ~$49B** ($35B when
  struck in Oct 2020) — at the time the largest semiconductor deal ever; brought
  FPGAs/adaptive SoCs (now AMD's Embedded segment). [10]
- **Chiplet pioneering:** first mainstream chiplet server CPU (EPYC "Naples" 2017,
  multi-die; Zen 2 "Rome" 2019 split I/O die from compute dies) — the packaging
  playbook Intel later copied and the reason AMD could ship huge core counts on
  better yields. <!-- VERIFY: characterization is standard but pick exact claim before recording -->
- **Lisa Su era, bullet 1 (the hole):** took over Oct 2014 — market cap ~**$2B**,
  stock under ~$2, ~$2.5B of debt, losing to Intel in CPUs and Nvidia in GPUs;
  widely seen as a bankruptcy candidate. [12]
- **Lisa Su era, bullet 2 (the exit):** bet everything on the Zen architecture
  (Ryzen 2017, EPYC 2017) and chiplets; stock up **>14,000%** under her tenure,
  record ~$577/share in July 2026, market cap ~**$675B** — roughly a 300×. [13]

## Apple Silicon
- **The oddity:** the biggest chip-design force in this story sells zero chips.
  Every A/M/C/S-series die is consumed internally — Apple appears in no fabless
  ranking, yet out-buys everyone at TSMC.
- **Scale of the company around it:** FY2025 revenue **$416B** (record) [16];
  latest quarter (Q2 FY2026, March qtr) **$111.2B, +17% YoY**, best March quarter
  ever, iPhone 17 demand called "extraordinary." [17]
- **TSMC relationship:** Apple ≈ **25% of TSMC's entire revenue** in 2024 (~24–25%),
  TSMC's largest customer for over a decade [14]; in 2025 **Nvidia finally overtook
  Apple** (~19% of TSMC revenue) on AI volume — Apple's share stayed roughly
  ~20%+ <!-- VERIFY: Apple's exact 2025 share of TSMC -->. [15]
- **First to every node:** Apple has been the anchor tenant of each new TSMC node
  (first at N5 with A14, first at N3 with A17 Pro); for **N2 (2nm)** the first-wave
  customers are Apple, AMD, Nvidia, MediaTek — with Apple reported to have booked
  ~half of initial 2nm capacity for the **A20** (iPhone 18 Pro, fall 2026), **M6**,
  and Vision Pro **R2**. [21][22][23]
- **The lineup:** A-series (iPhone, since A4 in 2010), M-series (Mac/iPad, since
  M1 Nov 2020 — completed the Intel-to-Arm Mac transition in ~3 years), C-series
  (modem), plus S/H/U/N-series (Watch, AirPods, UWB, networking). M5 shipped
  fall 2025 on N3E. [22] <!-- VERIFY: M5 node N3E vs N3P -->
- **C1 modem (2025):** Apple's own 5G modem debuted in **iPhone 16e, Feb 2025** —
  six years after buying Intel's smartphone-modem division (2019, ~$1B
  <!-- VERIFY: price -->) precisely to build it. [18][19] **C1X** followed in
  iPhone Air (Sept 2025): ~2× faster than C1, ~30% less energy; still no mmWave —
  Pro iPhones kept Qualcomm. [20]
- **Vertical integration logic:** perf-per-watt tuned to Apple's own OS and use
  cases; unified memory; silicon roadmap synced to product roadmap instead of a
  vendor's; margin captured in-house; and supply secured by pre-buying TSMC nodes.
- **Why it reshaped the industry:** M1 (2020) proved a *systems* company could
  out-design the incumbents (embarrassing Intel in its own market), triggered the
  hyperscaler custom-silicon wave (Google Tensor/Axion, Amazon Graviton/Trainium,
  Microsoft, Tesla…), and turned first-access-to-TSMC into a strategic weapon —
  the template Broadcom now monetizes for everyone else. Also: PA Semi acquisition
  (2008, ~$278M <!-- VERIFY: price -->) is the canonical "smallest acquisition with
  the biggest consequences" story.

## Qualcomm
- **FY2025 (ended Sept 28, 2025):** revenue **$44.3B, +14%**; record FCF $12.8B.
  QCT (chips) +16%; QTL (licensing) ~flat (~$5.6B <!-- VERIFY: exact FY25 QTL -->).
  Q4 FY25: $11.3B (+10%); handsets $7.0B; one-time $5.7B tax-law charge → headline
  quarterly net loss (non-cash). [24]
- **Latest quarter (Q2 FY2026, reported Apr 29, 2026):** revenue **$10.6B, −3% YoY**
  (Apple wind-down bites); QCT $9.1B; **record automotive $1.3B, +38%**; IoT $1.7B,
  +9%; new $20B buyback. [25]
- **Niche:** the merchant king of premium Android — Snapdragon 8-series SoCs power
  most flagship Androids (Samsung Galaxy S line included), built on the deepest
  modem/RF portfolio in the industry.
- **QTL, the toll booth:** Qualcomm licenses its cellular patent portfolio to
  essentially every handset maker — it collects a royalty on nearly **every 3G/4G/5G
  phone sold on Earth, including iPhones and phones with rivals' chips**. ~$5.6B/yr
  at very high margin (EBT margin ~70%+ <!-- VERIFY: QTL margin -->). [24]
- **Apple loss timeline:** 2023 deal extended modem supply "through 2026" [26];
  Apple shipped C1 Feb 2025; management now assumes Qualcomm modems in only **~20%
  of 2026 iPhones and ~0% by 2027** — walking away from an estimated **$5.7–5.9B/yr**
  of revenue, telegraphed years in advance. [27]
- **Diversification math:** target of **$22B/yr from auto + IoT by 2030** (vs $8.3B
  in FY2024); auto design-win pipeline anchors it; Snapdragon X / X2 series pushes
  into Windows-on-Arm PCs. [27] <!-- VERIFY: current Snapdragon X PC share — still single-digit % of Windows PCs -->
- **New front — data center (Oct 27, 2025):** AI200 (2026) / AI250 (2027) rack-scale
  *inference* accelerators built on Hexagon NPU heritage, 768GB LPDDR per card,
  liquid-cooled 160kW racks; first customer Saudi-backed **Humain, 200 MW** from
  2026. Stock jumped ~11% on the announcement. [28][29]
- **Vivid fact:** Qualcomm is the only company that gets paid twice on a phone —
  once for the chip, once for the patents — and it still gets the patent check
  when Apple ships its own modem.

## Broadcom
- **FY2025 (ended Nov 2, 2025):** revenue **$63.9B, +24%**; AI semiconductor
  revenue **$20B, +65% YoY** (from ~$12.2B FY2024 <!-- VERIFY: FY24 AI base -->). [30]
- **Latest quarter (Q2 FY2026, reported June 3, 2026):** revenue **$22.2B, +48%**;
  **AI semi revenue $10.8B, +143% YoY**; adjusted EBITDA $15.2B = **69% of revenue**;
  record FCF $10.3B. Guidance: Q3 AI revenue **~$16B (+200%+ YoY)**; **FY2026 AI
  revenue ~$56B (+~180%)**; reiterated **>$100B AI revenue in FY2027**. [31][32]
- **Trajectory in one line:** AI revenue $20B (FY25) → ~$56B (FY26 guided) →
  >$100B (FY27 guided). [30][31][32]
- **Niche — THE custom-ASIC story:** Broadcom co-designs and supplies the compute
  chips hyperscalers build to escape Nvidia: **Google TPUs** (partner since the
  first TPU, mid-2010s <!-- VERIFY: since v1 ~2015-16 -->), **Meta MTIA**,
  reportedly ByteDance, and since **Oct 13, 2025, OpenAI**: a strategic
  collaboration to deploy **10 GW of OpenAI-designed accelerators**, racks scaled
  entirely on Broadcom Ethernet, deploying 2H 2026 through end-2029 — after 18
  months of secret joint work. [33][34][35]
- **Networking leg:** merchant switch silicon that carries AI clusters —
  **Tomahawk 6, the world's first 102.4 Tb/s switch chip** (first shipped June
  2025; production volume + co-packaged-optics "Davisson" variant by Mar 2026),
  designed for million-XPU clusters. Plus Jericho routers, NICs, optical DSPs. [36][37]
- **Software leg:** Hock Tan's serial-acquisition machine (Avago→Broadcom→CA→
  Symantec Enterprise→**VMware, closed Nov 2023 at ~$69B** <!-- VERIFY: value at
  close -->) makes roughly a third of revenue infrastructure software at fat
  margins <!-- VERIFY: exact split --> — the cash flow that funds the silicon bets.
- **Market cap:** crossed **$2 trillion in April 2026 — sixth company in history**;
  ~$1.9T as of early July 2026 (world's ~8th most valuable company). [38][39]
- **Why Broadcom is Nvidia's most credible systemic threat:** it doesn't fight
  Nvidia chip-vs-chip; it arms every customer who wants out — custom XPUs replace
  the GPU, Tomahawk/Ethernet replaces NVLink/InfiniBand, and the customers doing
  it (Google, Meta, OpenAI) are Nvidia's biggest buyers. If the AI market
  standardizes on open Ethernet + owned silicon, the toll shifts from Nvidia to
  Broadcom. FY27 guidance of >$100B AI revenue is, in effect, a bet on exactly that. [32]

## Marvell
- **FY2026 (ended Jan 31, 2026):** record revenue **$8.195B, +42%**. [40]
- **Latest quarter (Q1 FY2027, reported May 27, 2026):** record **$2.418B, +28% YoY**;
  **data center $1.833B = 76% of total revenue**; non-GAAP GM 58.9%; Q2 guide $2.7B
  (+35%); FY2027 outlook ~**$11B, +~30%**. [40][41]
- **Niche #1 — custom silicon:** the #2 custom-ASIC house behind Broadcom.
  Flagship engagement: **AWS** — five-year, multi-generational agreement (Dec 2024)
  covering custom AI compute (the **Trainium** program: Trainium 2 shipped,
  Trainium 3 in flight) plus optical DSPs, AECs, PCIe retimers, DCI modules,
  switching. [42] Also reported programs with Microsoft (next-gen Maia) —
  never officially confirmed. <!-- VERIFY: Microsoft/Maia status; also reports that part of Trainium 3+ volume shifted to Alchip — check before quoting -->
- **Niche #2 — electro-optics/interconnect:** the dominant vendor of PAM4 optical
  DSPs (800G/1.6T) — the chips at each end of the optical cables stitching AI
  clusters together. Rule of thumb: whoever's accelerator wins, the links between
  them are disproportionately Marvell. <!-- VERIFY: current PAM4 DSP share ~60%+ -->
- **Moat:** one of the few companies with leading-edge SerDes + packaging +
  silicon-photonics IP and the balance sheet to co-develop multi-year hyperscaler
  programs — the same ingredients as Broadcom, one tier smaller.
- **Vivid fact:** three-quarters of Marvell's revenue is now data center [41] — a
  company that a decade ago made disk-drive controllers has effectively re-founded
  itself as an AI-plumbing house.
- **Risk note:** custom-ASIC wins are binary — a single lost socket (e.g. a
  Trainium generation moving to a rival) swings billions; the stock trades on
  design-win rumors. <!-- VERIFY: fold in latest Trainium sourcing reports -->

## MediaTek
- **FY2025 (calendar):** record revenue **NT$595.97B (+12.3% YoY) ≈ US$19.1B
  (+16% in USD)** — #5 fabless worldwide. [1][43]
- **Latest quarter (Q1 2026, reported Apr 30, 2026):** revenue **NT$149.2B, −2.7%
  YoY** (top of guidance); non-TIFRS net income NT$25.0B, −16.9%; mobile = 49% of
  revenue (−15% YoY), Smart Edge = 46% (+13%); Q2 guide NT$140.2–149.2B. [44]
- **Niche — the volume king:** ships more smartphone SoCs than anyone — **~38% of
  global smartphone AP shipments (Q3 2025)**, roughly one in three phones on
  Earth; strongest in the low/mid tiers and emerging markets. [47] <!-- VERIFY: Counterpoint puts Q1 2026 share nearer ~32% as share normalizes -->
- **Premium is the weak flank:** in premium-tier SoCs 2025: Apple ~46%, Qualcomm
  ~35%, **MediaTek ~12%**. [48]
- **Moving up-market:** Dimensity 9400/9500 flagships — flagship SoC revenue
  passed **$3B in 2025, +40% YoY**; Dimensity 9500 (Sept 2025) on leading TSMC
  3nm <!-- VERIFY: N3P -->; MediaTek completed **TSMC's first announced 2nm
  tape-out (Sept 2025)**, flagship mass production late 2026 — same node wave as
  Apple/Nvidia/AMD. [22][46]
- **The sleeper story — AI ASICs:** MediaTek won co-design work on **Google's
  TPU program** (inference-optimized variants; its SerDes IP inside), with
  reported follow-on TPU v9 orders in June 2026; management expects **~$2B of AI
  ASIC revenue in Q4 2026 alone**, scaling to multiple billions in 2027. Shares
  jumped 8.7% in a day on the Google news — biggest move in two years. [45][49][50]
- **Moat:** cost-engineering at volume + integrated modem/connectivity stack +
  first-tier TSMC access — the only company that profitably serves the $150 phone
  *and* now tapes out on 2nm.
- **Vivid fact:** the chipmaker long dismissed as the "cheap phone" supplier now
  shares Google's TPU program with Broadcom and beat most of the industry to
  TSMC's 2nm. [22][49]

## Risks
- **Customer concentration / binary sockets:** Broadcom, Marvell, and now
  MediaTek's ASIC businesses hang on a handful of hyperscaler programs; one
  re-compete loss = billions. [35]
- **Circular AI financing:** OpenAI signed ~26–33 GW of compute deals in three
  weeks of Oct 2025 (Nvidia 10 GW + AMD 6 GW + Broadcom 10 GW + Stargate) while
  still burning cash — much of the field's 2026–27 guidance assumes those
  gigawatts actually get built and paid for. [34]
- **Nvidia's counter-moves:** NVLink Fusion opens Nvidia's interconnect to
  third-party/custom silicon <!-- VERIFY: NVLink Fusion status/adoption -->, and
  aggressive roadmap cadence (Rubin) pressures MI400/Helios and every ASIC's
  time-to-relevance window.
- **Smartphone stagnation + memory squeeze:** handset TAM is flat; the 2026
  DRAM/NAND price spike (AI demand hoarding memory) is inflating phone BOMs and
  pressuring SoC demand — flagged around both Qualcomm's and MediaTek's early-2026
  earnings. [51]
- **Qualcomm-specific:** Apple modem revenue → ~0 by 2027 [27]; QTL's Apple
  license itself runs to ~2027 with extension options <!-- VERIFY: QTL-Apple
  renewal terms -->; diversification must outrun the loss.
- **The shared single point of failure:** all six depend on TSMC's leading edge —
  the fabless field's collective moat sits on one island (ties into the
  TSMC/geopolitics segments), and TSMC's 66% gross margin shows who holds pricing
  power in the relationship. [3]
- **Valuation reflexivity:** Broadcom ~$1.9T, AMD ~$675B — both price in flawless
  multi-year AI execution. [13][38]

## Fact ammo — lines that land
- Lisa Su took AMD from a ~$2B near-bankruptcy in 2014 to ~$675B in 2026 — the
  stock is up more than 14,000%, a ~300× — arguably the greatest turnaround in
  tech history. [12][13]
- The top ten fabless companies grew 44% in 2025 to $359B — and Nvidia alone was
  57% of that. Everyone else in this segment is fighting over the other $154B. [1]
- TSMC's gross margin hit 66% in early 2026 — the factory now earns fatter margins
  than most of the "asset-light" designers who hire it. The fabless model's core
  arbitrage has quietly inverted. [3][5]
- In three weeks of October 2025, OpenAI signed ~26 gigawatts of chip deals across
  Nvidia (10), AMD (6), and Broadcom (10) — the AMD deal alone could hand OpenAI
  ~10% of the company via warrants. [6][7][34]
- Broadcom's AI revenue: $20B in FY2025, ~$56B guided for FY2026, over $100B
  guided for FY2027 — a 5× in two years, built almost entirely on other companies'
  chips (Google's, Meta's, OpenAI's) that Broadcom co-designs. [30][31][32]
- Apple spent six years and bought Intel's whole modem division to replace one
  Qualcomm part — and Qualcomm still collects a patent royalty on every iPhone
  sold. [18][19][24]
- MediaTek quietly powers roughly one in three smartphones on Earth — and in 2026
  it's co-designing Google TPUs. [47][49]

---

## Sources
1. TrendForce, "AI Compute Demand Drives 44% YoY Growth for Top 10 Global Fabless IC Firms in 2025" — https://www.trendforce.com/presscenter/news/20260401-12996.html
2. Design&Reuse / IC Insights, "Fabless Suppliers Hold Record 34.8% Share of Global IC Sales" — https://www.design-reuse.com/news/52302/fables-system-versus-idm-company-ic-sales.html
3. Investing.com, "TSMC Q1 2026 slides: margins soar past guidance on HPC demand" (rev $35.9B, GM 66.2%) — https://www.investing.com/news/company-news/tsmc-q1-2026-slides-margins-soar-past-guidance-on-hpc-demand-93CH-4617201
4. AMD press release, "AMD Reports Fourth Quarter and Full Year 2025 Financial Results" — https://www.amd.com/en/newsroom/press-releases/2026-2-3-amd-reports-fourth-quarter-and-full-year-2025-fina.html
5. Data Center Dynamics, "AMD posts Q1 2026 data center revenue of $5.8bn, forecasts $120bn server CPU income by 2030" — https://www.datacenterdynamics.com/en/news/amd-posts-q1-2026-data-center-revenue-of-58bn-forecasts-120bn-server-cpu-income-by-2030/
6. AMD IR, "AMD and OpenAI Announce Strategic Partnership to Deploy 6 Gigawatts of AMD GPUs" (Oct 6, 2025) — https://ir.amd.com/news-events/press-releases/detail/1260/amd-and-openai-announce-strategic-partnership-to-deploy-6-gigawatts-of-amd-gpus
7. CNBC, "OpenAI looks to take 10% stake in AMD through AI chip deal" — https://www.cnbc.com/2025/10/06/openai-amd-chip-deal-ai.html
8. Tom's Hardware, "AMD reaches 46% of server x86 CPU revenue" (Q1 2026 Mercury data) — https://www.tomshardware.com/pc-components/cpus/amd-reaches-46-percent-of-server-x86-cpu-revenue-intel-still-controls-70-percent-of-the-consumer-pc-market-share
9. The Register, "AMD takes a third of server CPU market as shipments grow" (June 2026) — https://www.theregister.com/systems/2026/06/04/amd-takes-a-third-of-server-cpu-market-as-shipments-grow/5251283
10. Electronic Design, "AMD Closes $49 Billion Acquisition of Xilinx — Largest Chip Deal Ever" — https://www.electronicdesign.com/technologies/embedded/article/21216849/electronic-design-amd-closes-49-billion-acquisition-of-xilinxlargest-chip-deal-ever
11. Tom's Hardware, "AMD touts Instinct MI430X, MI440X, and MI455X AI accelerators and Helios rack-scale AI architecture at CES" — https://www.tomshardware.com/tech-industry/artificial-intelligence/amd-touts-instinct-mi430x-mi440x-and-mi455x-ai-accelerators-and-helios-rack-scale-ai-architecture-at-ces-full-mi400-series-family-fulfills-a-broad-range-of-infrastructure-and-customer-requirements
12. CNBC, "How AMD CEO Lisa Su rebuilt struggling chipmaker, became a billionaire" — https://www.cnbc.com/2024/12/14/how-amd-ceo-lisa-su-rebuilt-struggling-chipmaker-became-billionaire.html
13. VnExpress International, "How MIT Ph.D. Lisa Su turned AMD from near collapse into a $675B AI chip powerhouse" (July 2026; +14,000%, ~$577 record) — https://e.vnexpress.net/news/tech/personalities/how-mit-ph-d-lisa-su-turned-amd-from-near-collapse-into-a-675b-ai-chip-powerhouse-5076201.html
14. Wccftech, "Apple… contributes 25.2 percent to [TSMC's] annual revenue" — https://wccftech.com/apple-might-no-longer-be-biggest-customer-of-tsmc-for-2025/
15. CNBC, "Nvidia set to supplant Apple as TSMC's largest customer" (Jan 2026; Nvidia ~19% of TSMC 2025 revenue) — https://www.cnbc.com/2026/01/26/nvidia-set-to-supplant-apple-as-tsmcs-largest-customer.html
16. Apple 8-K, Q4 FY2025 results (FY2025 revenue $416B) — https://www.sec.gov/Archives/edgar/data/320193/000032019325000077/a8-kex991q4202509272025.htm
17. Apple / Business Wire, "Apple reports second quarter results" (Q2 FY2026, $111.2B, +17%) — https://www.businesswire.com/news/home/20260430987304/en/Apple-reports-second-quarter-results
18. AppleInsider, "Apple ends its Qualcomm dependency with the new C1 modem chip" (Feb 2025) — https://appleinsider.com/articles/25/02/21/apple-ends-its-qualcomm-dependency-with-the-new-c1-modem-chip
19. Tom's Hardware, "Apple rolls out its C1 modem six years after buying in the technology from Intel" — https://www.tomshardware.com/tech-industry/apple-rolls-out-its-c1-modem-six-years-after-buying-in-the-technology-from-intel
20. MacRumors, "iPhone Air Gets Faster and More Efficient C1X 5G Modem" (Sept 2025) — https://www.macrumors.com/2025/09/09/iphone-air-c1x-modem/
21. TechPowerUp, "TSMC's first 2nm Node Customers are Apple, AMD, NVIDIA, and MediaTek" — https://www.techpowerup.com/341044/tsmcs-first-2-nm-node-customers-are-apple-amd-nvidia-and-mediatek-intel-missing
22. TrendForce, "TSMC 2nm Gains Steam: MediaTek Completes First 2nm Tape-Out as Apple Preps A20, M6, R2" — https://www.trendforce.com/news/2025/09/16/news-tsmc-2nm-gains-steam-mediatek-completes-first-2nm-tape-out-as-apple-preps-a20-m6-r2/
23. 9to5Mac, "Here's when you can expect 2nm chips to come to iPhone, iPad, and Mac" (Apple ~50% of early 2nm capacity) — https://9to5mac.com/2024/12/01/apple-tsmc-2nm-chips-iphone/
24. Qualcomm, "Fourth Quarter and Fiscal 2025 Earnings Release" (FY25 rev $44.3B) — https://s204.q4cdn.com/645488518/files/doc_financials/2025/q4/FY2025-4th-Quarter-Earnings-Release.pdf
25. Qualcomm, "Second Quarter Fiscal 2026 Earnings Release" ($10.6B; auto record $1.3B) — https://s204.q4cdn.com/645488518/files/doc_financials/2026/q2/FY2026-2nd-Quarter-Earnings-Release.pdf
26. CNBC, "Qualcomm says it will supply Apple with 5G modems for iPhones through 2026" (Sept 2023) — https://www.cnbc.com/2023/09/11/qualcomm-to-supply-apple-with-5g-modems-for-iphones-through-2026.html
27. TIKR, "Qualcomm Stock Is Down 20% in 2026…" (Apple ~20% of 2026 iPhones → 0 by 2027; $5.7–5.9B/yr; $22B auto+IoT by 2030 vs $8.3B FY24) — https://www.tikr.com/blog/qualcomm-stock-is-down-20-in-2026-is-the-market-missing-the-bigger-story
28. Qualcomm press release, "Qualcomm Unveils AI200 and AI250 — Redefining Rack-Scale Data Center Inference" (Oct 2025) — https://www.qualcomm.com/news/releases/2025/10/qualcomm-unveils-ai200-and-ai250-redefining-rack-scale-data-cent
29. CNBC, "Qualcomm announces AI chips to compete with AMD and Nvidia — stock soars 11%" (Humain 200 MW) — https://www.cnbc.com/2025/10/27/qualcomm-ai200-ai250-ai-chips-nvidia-amd.html
30. Broadcom IR, "Broadcom Announces Fourth Quarter and Fiscal Year 2025 Financial Results" (rev $63.9B; AI $20B, +65%) — https://investors.broadcom.com/news-releases/news-release-details/broadcom-inc-announces-fourth-quarter-and-fiscal-year-2025
31. Broadcom IR, "Broadcom Announces Second Quarter Fiscal Year 2026 Financial Results" ($22.2B; AI $10.8B, +143%) — https://investors.broadcom.com/news-releases/news-release-details/broadcom-inc-announces-second-quarter-fiscal-year-2026-financial
32. CNBC, "Broadcom (AVGO) earnings report Q2 2026" (Q3 AI guide ~$16B; FY26 AI ~$56B; FY27 >$100B) — https://www.cnbc.com/2026/06/03/broadcom-avgo-earnings-report-q2-2026.html
33. OpenAI, "OpenAI and Broadcom announce strategic collaboration to deploy 10 gigawatts of OpenAI-designed AI accelerators" (Oct 13, 2025) — https://openai.com/index/openai-and-broadcom-announce-strategic-collaboration/
34. CNBC, "OpenAI partners with Broadcom custom AI chips alongside Nvidia, AMD" (~33 GW in three weeks; 18 months of joint work) — https://www.cnbc.com/2025/10/13/openai-partners-with-broadcom-custom-ai-chips-alongside-nvidia-amd.html
35. Tom's Hardware, "The custom AI ASIC state of play (May 2026) — Broadcom deals, Google TPUs, Meta MTIA & beyond" — https://www.tomshardware.com/tech-industry/semiconductors/custom-ai-asics-examined-from-broadcom-to-mtia
36. Broadcom IR, "Broadcom Ships Tomahawk 6: World's First 102.4 Tbps Switch" (June 2025) — https://investors.broadcom.com/news-releases/news-release-details/broadcom-ships-tomahawk-6-worlds-first-1024-tbps-switch
37. Broadcom IR, "Broadcom Now Shipping World's First 102.4 Tbps Switch in Production Volume" (Mar 2026, incl. Davisson CPO) — https://investors.broadcom.com/news-releases/news-release-details/broadcom-now-shipping-worlds-first-1024-tbps-switch-production
38. CompaniesMarketCap, Broadcom market capitalization (~$1.9T, July 2026) — https://companiesmarketcap.com/broadcom/marketcap/
39. The Motley Fool, "Broadcom Is Less Than 5% From the $2 Trillion Club…" (crossed $2T April 2026, sixth ever) — https://www.fool.com/investing/2026/07/09/broadcom-is-less-than-5-from-the-2-trillion-club-a/
40. Marvell FY2026 Annual Report (Form ARS; FY26 revenue $8.195B, +42%) — https://www.sec.gov/Archives/edgar/data/0001835632/000110465926060265/tm261486d6_ars.pdf
41. Marvell IR, "Marvell Technology Reports First Quarter of Fiscal Year 2027 Financial Results" ($2.418B; DC $1.833B = 76%) — https://investor.marvell.com/news-events/press-releases/detail/1023/marvell-technology-inc-reports-first-quarter-of-fiscal-year-2027-financial-results
42. Marvell newsroom, "Marvell Expands Strategic Collaboration with AWS" (Dec 2024, five-year multi-generational agreement) — https://www.marvell.com/company/newsroom/marvell-expands-strategic-collaboration-aws-enable-accelerated-infrastructure-ai-cloud.html
43. MediaTek, 4Q25 earnings press release (FY2025 NT$595,966M, +12.3%) — https://www.mediatek.com/hubfs/MediaTek%20Assets/Pdfs/Quarterly%20Earnings%20Release/2025/Quarterly%20Earnings%20Release-2025Q4/Press%20Release.pdf
44. MediaTek, 1Q26 earnings press release (NT$149.2B, −2.7% YoY; segment mix; Q2 guide) — https://www.mediatek.com/hubfs/MediaTek%20Assets/Pdfs/Quarterly%20Earnings%20Release/2026/Quarterly%20Earnings%20Release-2026Q1/Press%20Release.pdf
45. Futurum, "MediaTek Q1 FY 2026 Earnings Driven by AI ASIC Ramp Visibility" (~$2B AI ASIC revenue in Q4 2026) — https://futurumgroup.com/insights/mediatek-q1-fy-2026-earnings-driven-by-ai-asic-ramp-visibility/
46. Wccftech, "MediaTek's Flagship Chipset Revenue Reaches $3 Billion… Projected 40% YoY Increase" — https://wccftech.com/mediatek-q2-2025-earnings-3-billion-flagship-chipset-revenue-and-more-details/
47. Counterpoint Research, "Global Smartphone AP-SoC Market Share: Quarterly" (MediaTek ~38% Q3 2025) — https://counterpointresearch.com/en/insights/global-smartphone-apsoc-market-share-quarterly
48. EE Times Asia / Counterpoint, "Premium Smartphone SoC Shipments to Surge in 2025" (premium: Apple 46% / Qualcomm 35% / MediaTek 12%) — https://www.eetasia.com/premium-smartphone-soc-shipments-to-surge-in-2025/
49. CommonWealth Magazine (English), "How MediaTek Quietly Became a Core Player in Google's AI Infrastructure" (Apr 2026) — https://english.cw.com.tw/article/article.action?id=4707
50. TrendForce, "MediaTek Seen Raising Prices 10–20%, Reportedly Wins TPU v9 Orders on SerDes Shift" (June 2026) — https://www.trendforce.com/news/2026/06/23/news-mediatek-seen-raising-prices-10-20-reportedly-wins-tpu-v9-orders-on-serdes-shift/
51. Android Central, "Qualcomm FY Q2 2026 earnings highlight a mobile industry under pressure from the memory shortage" — https://www.androidcentral.com/phones/qualcomm/qualcomm-fy-q2-2026-earnings
