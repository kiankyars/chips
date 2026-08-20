# Research — Nvidia

As-of: 2026-08-18

## What they are
- **Fabless** chip designer (Santa Clara, CA). Designs GPUs and AI systems; owns
  **zero fabs** — every data-center chip is manufactured by TSMC, memory comes
  from SK Hynix/Micron/Samsung, packaging by TSMC. Nvidia's product is the
  *design* plus the software that makes it usable. [13][46]
- The company at the center of the AI buildout: ~**90%** of the AI-accelerator
  market by revenue (estimates range ~75–90% for 2026 as custom chips scale). [5]
- World's most valuable company: first ever to **$4T** (Jul 9, 2025), first to
  **$5T** (Oct 29, 2025 — three months later); **~$5.1T** as of 2026-07-10. [5][6][49]
- Sells three things stacked together: the GPU, the **networking** that lashes
  thousands of GPUs into one computer (NVLink/InfiniBand/Spectrum-X), and the
  **CUDA software** layer everything runs on.

## History in 4 bullets (the GPU→AI accident)
- **1993** — founded by Jensen Huang (then 30, ex-LSI/AMD), Chris Malachowsky and
  Curtis Priem, famously sketched out at a Denny's in San Jose, to make 3D-graphics
  chips for video games. Near-death in 1996–97; saved by RIVA 128; IPO Jan 1999;
  GeForce 256 (1999) marketed as the world's "first GPU." [46]
- **2006** — the CUDA bet: Huang spends billions over years making every gaming
  GPU double as a general-purpose parallel computer, betting scientists would
  find uses. Wall Street saw wasted die area; the stock went nowhere for years. [45]
- **2012** — the accident pays off: AlexNet, trained on **two consumer GeForce
  GTX 580s** by Hinton's Toronto lab, blows away the ImageNet vision benchmark.
  Deep learning = matrix math = exactly what GPUs do. Nvidia pivots hard; Huang
  hand-delivers the first DGX-1 supercomputer to OpenAI in 2016. [45]
- **2022→now** — ChatGPT detonates demand. Data-center revenue goes from ~$15B
  (FY2023) <!-- VERIFY: FY23 DC $15.0B, from memory --> to **$193.7B** (FY2026);
  gaming — once the whole company — is now ~7% of revenue. [2]

## The 2025–26 case study — GB300 / Blackwell Ultra
- **Package**: B300 "Blackwell Ultra" GPU = **two reticle-sized dies** stitched
  together. A standard 26 × 33 mm exposure field is ~858mm², but Nvidia does not
  publish the exact die area (predecessor Hopper was 814mm² single-die). Joined by
  NV-HBI die-to-die link at
  **10 TB/s** so software sees one GPU. [7][13]
- **Transistors**: **208 billion** across the two dies (104B each) — roughly one
  transistor for every star in the Milky Way, on a slab the size of a coaster. [7][13]
- **Process**: TSMC **4NP** — a custom 5nm-class node. Not TSMC's newest; Nvidia
  trades density for yield on giant dies. [7]
- **Memory**: **288 GB of HBM3E** in **8 stacks (12-high)** flanking the dies,
  **8 TB/s** of bandwidth, all assembled on TSMC **CoWoS-L** advanced packaging. [7][8]
- **Compute**: 160 SMs / **20,480 CUDA cores**; ~15 PFLOPS dense FP4 per GPU. [7]
  A CUDA core is an FP32 execution lane, not a CPU-equivalent independently
  scheduled core; the 160 streaming multiprocessors are the more useful
  architectural unit for this comparison. [7]
- **Power**: **1,400W per GPU** — a space heater and a half, liquid-cooled. [8]
- **The rack (GB300 NVL72)**: 72 B300 GPUs + 36 Grace CPUs wired by NVLink into
  one giant GPU; ~**1.1 exaFLOPS** FP4 per rack; draws ~**132–140kW**
  (≈ average draw of ~110 US homes); no air-cooled option exists. [9][10]
- **Price (all third-party estimates — Nvidia publishes no list price)**:
  - GB300 NVL72 rack: ~**$3.7–4.0M** (Loop Capital, from Apple's ~$1B/250-rack
    order); other industry sources put it at **$6–6.5M** configured. [11][12]
  - Next-gen Vera Rubin NVL72 racks reportedly up to **$8.8M**. [11]
- **Scope warning:** Nvidia reports companywide revenue, gross margin, and cost
  of revenue, not product-level economics for one GB300. Applying the FY2026
  gross margin to a third-party full-rack price estimate does not produce a valid
  product bill of materials. [2]
- Timeline: unveiled GTC Mar 2025; ramped H2 2025; GB300 systems are commercially
  available in 2026. Nvidia now calls Grace Blackwell the previous generation
  relative to Vera Rubin, so the deck labels Blackwell Ultra as its stable tracer
  case rather than the latest architecture. [7][9][52]

## Financials (freshest reported quarter as of 2026-08-18)
- **FY2026** (ended Jan 25, 2026): revenue **$215.9B** (+65% YoY); data center
  **$193.7B** (+68%, = **90%** of revenue); gaming $16.0B; GAAP net income
  **$120.1B** (a ~56% net margin); GAAP gross margin **71.1%** (depressed by
  China charges). [2]
- **Q1 FY2027** (ended Apr 26, 2026, reported May 2026): revenue **$81.6B**
  (+85% YoY) — more than Nvidia's *entire fiscal-2024 year* <!-- VERIFY: FY24 total $60.9B, from memory -->;
  data center **$75.2B** (+92%, = **92%** of revenue); GAAP gross margin
  **74.9%**; Q2 guidance **$91.0B** — which *excludes* any China data-center
  compute revenue. [1]
- GAAP net income Q1 FY27: $58.3B (GAAP EPS $2.39 vs non-GAAP $1.87 — GAAP
  inflated by mark-to-market gains on its AI investment portfolio). [1]
  <!-- VERIFY: exact driver of GAAP>non-GAAP gap before using on screen -->
- Networking alone: **$14.8B in Q1 FY27** (+199% YoY) — a Cisco-sized business
  hiding inside Nvidia. [4] <!-- VERIFY: Cisco quarterly rev ~$14B comparison, from memory -->
- Shareholder returns: dividend raised 25× ($0.01→$0.25/qtr), new **$80B**
  buyback authorization (May 2026). [1]
- Order book: Huang at GTC March 2026 — **~$1 trillion** in cumulative
  Blackwell + Rubin orders through 2027 (up from "$500B through 2026" announced
  Oct 2025). [14][48]
- **Customer concentration**: three direct customers = **21% + 17% + 16% = 54%**
  of Q1 FY27 revenue (direct customers are ODMs/OEMs building systems for
  hyperscalers, so end-demand is even more concentrated); one unnamed "AI
  research and deployment company" (read: OpenAI) drives a "meaningful amount"
  of revenue indirectly through cloud providers. [3]
- Supply commitments: **$119B** of manufacturing/capacity obligations booked. [3]

## Roadmap — the annual cadence
- Nvidia moved from a ~2-year architecture cycle to a **one-year cadence**:
  Hopper (H100, 2022) → H200 (2024) → Blackwell GB200 (2024–25) → **Blackwell
  Ultra GB300 (2025–26)** → **Vera Rubin VR200 (H2 2026)** → Rubin Ultra +
  "Kyber" NVL576 rack (planned 2027) → "Feynman" (2028). [14][16]
  <!-- VERIFY: Feynman name/date, announced GTC 2025, from memory -->
- **Vera Rubin status (2026-08-18)**: Nvidia said on May 31 that the platform was
  ramping into full production, with system builders in full-scale production and
  production shipments scheduled to begin in fall 2026. The Rubin GPU has **336B
  transistors**, uses TSMC **3nm**, and carries up to **288GB HBM4** at **22 TB/s**;
  the broader platform introduces Spectrum-X Ethernet Photonics in production.
  [52][53]
- The cadence *is* strategy: each generation cuts cost-per-token (Rubin claimed
  up to ~10× vs Blackwell), so waiting is expensive and rivals chase a moving
  target. [2]
- Crack in the cadence: SemiAnalysis (Jul 2026) reports the 2027 **Kyber**
  rack (Rubin Ultra, NVL576) slipping to **2028** on a hard-to-manufacture
  78-layer PCB midplane; Nvidia's response: "our roadmap is intact." [18]

## The moat
- **CUDA** (2006): Nvidia's dominant compute platform, supported by major AI
  frameworks. Nvidia says
  **more than 6M developers** use its developer ecosystem, built over roughly
  20 years of libraries, tooling, and accumulated knowledge; competitors must
  clone an ecosystem, not only a chip. [45][50]
- **Networking**: bought Mellanox for **$6.9B** (closed 2020)
  <!-- VERIFY: price/date from memory --> — now looks like the decade's best
  acquisition: NVLink (rack-scale, 130 TB/s across an NVL72), InfiniBand
  (cluster-scale), Spectrum-X Ethernet (>$10B annualized run-rate by mid-2025).
  Nvidia sells the *whole AI factory*, not a chip. [4][9][47]
- **Installed base + compounding software**: every CUDA optimization ships to
  all past GPUs, raising the value of the installed fleet.
- **Scale as moat**: ~60% of world CoWoS packaging capacity and years of HBM
  supply pre-booked — even a rival with a great chip can't get it built at
  volume. [34][36]
- Market share: ~**90%** of AI accelerators (2025 est.); most forecasts see
  75–85% by end-2026 as TPUs/ASICs ramp — falling share of an exploding pie. [5]

## The tech — CPU vs GPU (the teachable)
- **CPU core**: a complete, independently controlled processor optimized for
  low-latency and irregular work, with substantial cache, branch prediction,
  and out-of-order machinery. CPUs are also parallel and vectorized; "CPU =
  serial" is not an honest distinction.
- **GPU hierarchy**: Blackwell Ultra is one CUDA-programmed GPU built from two
  reticle-sized dies joined by NV-HBI. It contains up to **160 physical
  streaming multiprocessors** in total, with the enabled count varying by SKU.
  Each SM contains **128 CUDA arithmetic lanes** and **four fifth-generation
  Tensor Cores**: 20,480 lanes and 640 Tensor Cores across the GPU. These are
  nested hardware units, not virtualized or CPU-equivalent core counts. [7]
- **SIMT execution**: CUDA organizes threads into 32-thread warps. A warp
  advances through a common instruction stream across different data values,
  amortizing instruction and control work across many lanes. Divergent branches
  reduce utilization, so GPUs do not accelerate arbitrary code equally. [54]
- **Why that fits AI**: large neural-network matrix multiplications divide into
  many output tiles that can be computed concurrently. The work is highly
  data-parallel, though reductions, data movement, dependencies between layers,
  and communication still constrain realized throughput.
- **Tensor Cores** operate directly on small matrix tiles, performing matrix
  multiply-accumulate in one instruction. Modern Nvidia data-center GPUs are
  specialized matrix-throughput engines with GPU heritage, not merely graphics
  cards. [7]
- **Memory is the feed system**: up to 8 TB/s of HBM3E bandwidth and on-chip
  data reuse help keep the wide execution engine occupied; they enable the
  throughput but are not the source of the workload's parallelism. [7]

## One inference request — load path versus hot path
- **Model load is not the request path.** During service startup, model weights
  are loaded from checkpoint files into GPU memory; the same GPU-memory budget
  also holds activations, KV cache, communication buffers, and runtime state.
  GB300 compute trays include local NVMe devices used as OS storage and fast
  cache, but an ordinary request does not traverse that SSD. [55][56]
- **Teaching-path request flow:** client/network → NIC or DPU → Grace host
  runtime and LPDDR5X → NVLink-C2C → GPU HBM. The runtime tokenizes, queues,
  batches, and launches work; exact data movement can vary, including
  GPUDirect paths that avoid a CPU-memory bounce buffer. [55][57]
- **Inside the GPU:** HBM is CUDA global memory; a larger L2 cache is shared by
  all SMs, while each SM has its own register file and unified L1/shared-memory
  cache. GPCs and TPCs organize SMs; they are physical groupings, not serial
  cache levels. Blackwell Ultra adds 256 KB of TMEM and four Tensor Cores per
  SM. [7][58]
- **One answer requires repeated execution.** Prefill processes the input tokens
  once and populates KV state; decode then generates one token at a time while
  reading prior keys and values from the GPU-resident KV cache. [59]

## Supply chain (why Nvidia's supply = everyone's bottleneck)
- **TSMC, logic**: Blackwell on custom **4NP** (5nm-class); Rubin moves to
  **3nm**. Single-source. [7][17]
- **TSMC, packaging (CoWoS)**: two reticle-sized dies + 8 HBM stacks must be
  bonded on an RDL-based interposer with local silicon interconnects —
  **CoWoS-L**. Packaging capacity was a major shipment constraint alongside HBM;
  front-end wafer output alone did not determine accelerator volume. Industry
  estimates put CoWoS at ~35k wafers/mo (end-2024), ~75k (end-2025), and a
  ~125–130k target (end-2026), with Nvidia booking a large share. TSMC does not
  publish this exact monthly series or customer allocation. [34][35][36]
- **HBM**: SK hynix was the lead supplier of 12-high HBM3E at GB300 launch;
  Micron shipped in volume, and Samsung cleared Nvidia's 12-high HBM3E
  qualification in **Sept 2025**. Q2 2025 share estimates were ~**62% SK hynix /
  21% Micron / 17% Samsung**. Rubin moves to **HBM4**; Nvidia publicly named all
  three as sources by mid-2026. [30][31][32][33][51]
- Chain in one breath: Nvidia designs → TSMC prints two reticle-sized dies →
  memory suppliers ship HBM stacks → TSMC CoWoS joins the package → ODMs build
  full racks → operators supply roughly 130kW per NVL72.
- Nvidia's large CoWoS and HBM bookings can tighten capacity available to other
  accelerators, but supplier allocations are not publicly disclosed. [34][36]

## Customers & the circular-money debate
- Buyers: hyperscalers (Microsoft, Meta, Amazon, Google, Oracle) + AI labs +
  neoclouds (CoreWeave, Lambda, Nebius…) + sovereigns. Three direct customers =
  54% of revenue (see Financials). [3]
- **OpenAI deal** (Sept 22, 2025): LOI to deploy **≥10 GW** of Nvidia systems;
  Nvidia to invest **up to $100B** progressively per gigawatt; first GW lands
  H2 2026 on Vera Rubin. Still an LOI as of Dec 2025 ("we still haven't
  completed a definitive agreement" — CFO Kress). [25][26][27]
  <!-- VERIFY: whether a definitive agreement was signed H1 2026 -->
- **Anthropic deal** (Nov 18, 2025): Anthropic commits to **$30B** of Azure
  compute and up to **1 GW** of Grace Blackwell/Vera Rubin capacity; Nvidia
  invests **up to $10B**, Microsoft up to $5B; Anthropic valued ~$350B. [28][29]
- The debate: bears call it **vendor financing** — Nvidia invests in customers
  who spend it on Nvidia chips, inflating demand (cf. Cisco 2000). Bulls: the
  investments are small vs. $200B+ revenue, are equity not loans, and end-demand
  (tokens served) is real and growing. Honest framing: both can be true —
  real demand, with financial engineering at the margin.

## China & geopolitics (the saga, in order)
- **Apr 9, 2025**: US requires licenses for **H20** (the China-spec Hopper chip)
  → effectively a ban; Nvidia takes a **$4.5B** write-down on H20 inventory
  (initially warned up to $5.5B) and forgoes billions in orders. H20 sales were
  $4.6B in Q1 FY26 before the door shut. [3][19][20]
- **Jul 2025**: reversal — after Huang's lobbying blitz (and a rare-earths
  détente), Washington assures Nvidia H20 licenses will be granted. [21]
- **Aug 2025**: the unprecedented deal — Nvidia (and AMD) agree to pay the US
  government **15% of China chip revenue** for licenses. [22]
- **Sept–Nov 2025**: Beijing retaliates — regulators discourage/block Chinese
  firms from buying Nvidia; China revenue stays ≈ zero anyway.
- **Dec 8, 2025**: Trump approves **H200** sales to China at a **25% cut** to
  the US government; Commerce clears ~10 firms (Alibaba, Tencent, ByteDance…)
  with ~75k-unit caps each. [22][23]
- **Mid-2026 status**: deliveries reportedly still in limbo — Beijing pushes
  domestic chips (Huawei Ascend) and new import rules; Nvidia guides to **zero
  China data-center compute revenue** and no Hopper DC shipments to China in
  Q1 FY27. A China-spec Blackwell (**B30A/B30**, ~single-die, reportedly ~80% of
  standard Blackwell performance) has been shown to the US government; approval
  still pending. [1][3][23][24]
  <!-- VERIFY: B30A approval/shipment status may have moved since Jun 2026 -->
- Net: the world's hottest product is banned-then-taxed-then-stalled in its
  second-biggest potential market — a market Huang has sized at ~$50B/yr.
  <!-- VERIFY: Huang's $50B China TAM quote, from memory -->

## Competition (honestly assessed)
- **AMD** — the only merchant-silicon rival: MI350X/MI355X shipped 2025; MI400 +
  full **Helios** rack (their NVL72 answer) on track for **H2 2026**. Landmark
  wins: **OpenAI 6 GW** deal (Oct 2025, with warrants up to ~10% of AMD) and
  **Meta 6 GW** (Feb 2026). Instinct revenue est. ~$7–8B in 2025 — real, but
  ~1/25th of Nvidia's DC business. Weakness: software (ROCm) and rack-scale
  maturity. [37][38][39]
- **Google TPU** (with Broadcom) — the most credible technical alternative:
  7th-gen **Ironwood** (Nov 2025) scales to 9,216-chip pods; Anthropic contracted
  up to ~1M TPUs; Apr 2026: 8th-gen split into training + inference lines at
  TSMC 2nm. Only rents inside Google Cloud — it caps Nvidia's pricing more than
  it takes Nvidia's customers. [40][41]
- **Amazon Trainium** — Trainium2 powers Anthropic's Project Rainier
  (~500k–1M chips) <!-- VERIFY: Rainier chip count, from memory -->; Trainium3
  (3nm, ~4× perf) announced Dec 2025. Cheap per FLOP, AWS-only, still a
  fraction of workloads. [44]
- **Broadcom custom ASICs** — designs the XPUs for Google, Meta, and now
  **OpenAI (10 GW co-designed chips; first chip "Jalapeño" unveiled Jun 2026,
  deploying late 2026)**. The structural threat: biggest customers becoming
  competitors for *inference* workloads. [42][43]
- Scoreboard framing: nobody is close on merchant market share (~90% vs AMD's
  single digits), but the *mix* is shifting — hyperscaler silicon could take a
  large slice of inference by 2027 while Nvidia keeps the frontier-training
  crown.

## Risks
- **Concentration**: 3 direct customers = 54% of revenue; a capex pause by two
  hyperscalers is a revenue event. [3]
- **Circularity optics**: $100B+ of announced investments into its own customers
  invites the Cisco-2000 comparison if token demand disappoints. [26]
- **Custom-silicon shift**: every major customer is building an in-house
  alternative for inference (TPU, Trainium, MTIA, OpenAI/Broadcom). [42]
- **Supply single-points**: TSMC (logic + CoWoS, largely in Taiwan) is an
  earthquake/blockade away; HBM is a three-supplier oligopoly. [34]
- **Execution at cadence**: Kyber/Rubin-Ultra slip to 2028 (reported) shows the
  annual cadence straining physics — 78-layer PCBs, 1,400W chips, 130kW+ racks. [18]
- **Geopolitics**: China revenue ≈ zero and hostage to two governments'
  bargaining; the 15–25% license fees set a precedent of taxing exports. [22][23]
- **Valuation**: at ~$5T, Nvidia alone is ~7% of the S&P 500 <!-- VERIFY: current index weight -->;
  the market prices flawless execution.

## Sources
1. Nvidia, "Financial Results for Q1 Fiscal 2027" (quarter ended 2026-04-26) — https://nvidianews.nvidia.com/news/nvidia-announces-financial-results-for-first-quarter-fiscal-2027
2. Nvidia 8-K, Q4 & FY2026 results press release (SEC) — https://www.sec.gov/Archives/edgar/data/1045810/000104581026000019/q4fy26pr.htm
3. Nvidia 10-Q for quarter ended 2026-04-26 (SEC) — https://www.sec.gov/Archives/edgar/data/0001045810/000104581026000052/nvda-20260426.htm
4. Nvidia Q1 FY2027 CFO commentary (SEC) — https://www.sec.gov/Archives/edgar/data/0001045810/000104581026000051/q1fy27cfocommentary.htm
5. CNBC, "Nvidia becomes first company to reach $5 trillion valuation" (2025-10-29; incl. ~90% AI-chip share est.) — https://www.cnbc.com/2025/10/29/nvidia-on-track-to-hit-historic-5-trillion-valuation-amid-ai-rally.html
6. StockAnalysis, NVDA market cap (accessed 2026-07-10) — https://stockanalysis.com/stocks/nvda/market-cap/
7. Nvidia Technical Blog, "Inside NVIDIA Blackwell Ultra" — https://developer.nvidia.com/blog/inside-nvidia-blackwell-ultra-the-chip-powering-the-ai-factory-era/
8. TechPowerUp, "GB300 Blackwell Ultra: 288GB HBM3E, 1400W TDP" — https://www.techpowerup.com/330154/nvidia-gb300-blackwell-ultra-will-feature-288-gb-hbm3e-memory-1400-w-tdp
9. Nvidia, GB300 NVL72 product page — https://www.nvidia.com/en-us/data-center/gb300-nvl72/
10. Sunbird DCIM, "How much power does a GB300 NVL72 need?" — https://www.sunbirddcim.com/blog/how-much-power-does-nvidia-gb300-nvl72-need
11. Tom's Hardware, "Vera Rubin NVL72 racks up to $8.8M" (with GB200/GB300 rack price comparisons) — https://www.tomshardware.com/tech-industry/artificial-intelligence/price-of-nvidias-vera-rubin-nvl72-racks-skyrockets-to-as-much-as-usd8-8-million-apiece-but-server-makers-margins-will-be-tight-nvidia-is-moving-closer-to-shipping-entire-full-scale-systems
12. AI Tool Discovery, "GB300 NVL72 price vs H100/H200" (Loop Capital $3.7–4.0M/rack est.) — https://www.aitooldiscovery.com/ai-infra/nvidia-gb300-explained
13. Wikipedia, Blackwell (microarchitecture) — https://en.wikipedia.org/wiki/Blackwell_(microarchitecture)
14. CNBC, "GTC 2026: Huang sees $1 trillion in orders for Blackwell and Vera Rubin through '27" (2026-03-16) — https://www.cnbc.com/2026/03/16/nvidia-gtc-2026-ceo-jensen-huang-keynote-blackwell-vera-rubin.html
15. Wccftech, "Nvidia confirms Vera Rubin launch in Q3, volume ramp Q4" — https://wccftech.com/nvidia-confirms-vera-rubin-launch-in-q3-volume-ramp-q4-blackwell-continues-to-see-massive-demand/
16. ServeTheHome, "Nvidia launches Rubin platform at CES 2026" — https://www.servethehome.com/nvidia-launches-next-generation-rubin-ai-compute-platform-at-ces-2026/
17. Tom's Hardware, "Nvidia's Vera Rubin platform in depth" — https://www.tomshardware.com/pc-components/gpus/nvidias-vera-rubin-platform-in-depth-inside-nvidias-most-complex-ai-and-hpc-platform-to-date
18. Tom's Hardware, "Kyber rack for Rubin Ultra reportedly delayed to 2028" (SemiAnalysis, 2026-07) — https://www.tomshardware.com/pc-components/gpus/nvidias-kyber-rack-for-rubin-ultra-slips-to-2028
19. Nvidia 8-K, H20 export license requirement (2025-04-09, SEC) — https://www.sec.gov/Archives/edgar/data/1045810/000104581025000082/nvda-20250409.htm
20. CNBC, "Nvidia says it will record $5.5 billion charge tied to H20" (2025-04-15) — https://www.cnbc.com/2025/04/15/nvidia-says-it-will-record-5point5-billion-quarterly-charge-tied-to-h20-processors-exported-to-china.html
21. Built In, "Trump lifted the AI chip ban on China" (July 2025 H20 reversal) — https://builtin.com/articles/trump-lifts-ai-chip-ban-china-nvidia
22. CNBC, "Trump greenlights Nvidia H200 sales to China at 25% cut" (2025-12-08; also recaps Aug 2025 15% H20 deal) — https://www.cnbc.com/2025/12/08/trump-nvidia-h200-sales-china.html
23. Introl, "BIS H200 China export policy shift" (cleared firms, 75k caps, delivery limbo) — https://introl.com/blog/bis-h200-china-export-policy-ai-overwatch-act-2026
24. Tom's Hardware, "Nvidia shows China-specific B30 chips to US government" — https://www.tomshardware.com/pc-components/gpus/nvidia-reportedly-shows-china-specific-b30-chips-with-80-percent-of-the-performance-of-the-standard-blackwell-gpu-to-the-u-s-government-nvidia-ceo-says-approval-is-still-up-in-the-air
25. Nvidia Newsroom, "OpenAI and NVIDIA announce strategic partnership to deploy 10GW" (2025-09-22) — https://nvidianews.nvidia.com/news/openai-and-nvidia-announce-strategic-partnership-to-deploy-10gw-of-nvidia-systems
26. Data Center Dynamics, "OpenAI signs LOI for ≥10GW; Nvidia to invest up to $100bn" — https://www.datacenterdynamics.com/en/news/openai-signs-loi-to-deploy-at-least-10gw-of-ai-data-centers-with-nvidia-hardware-nvidia-to-invest-up-to-100bn-in-openai/
27. Introl, "OpenAI–NVIDIA 10GW partnership status" (Kress: no definitive agreement, Dec 2025) — https://introl.com/blog/openai-nvidia-10gw-partnership
28. Nvidia Blog, "Microsoft, NVIDIA and Anthropic announce strategic partnerships" (2025-11-18) — https://blogs.nvidia.com/blog/microsoft-nvidia-anthropic-announce-partnership/
29. CNBC, "Anthropic valued ~$350B after Microsoft/Nvidia deal" (2025-11-18) — https://www.cnbc.com/2025/11/18/anthropic-ai-azure-microsoft-nvidia.html
30. TrendForce, "SK hynix reportedly locks exclusive 12-Hi HBM3E deal for GB300" — https://www.trendforce.com/news/2025/03/18/news-sk-hynix-reportedly-locks-in-exclusive-12h-hbm3e-deal-for-nvidias-gb300/
31. KED Global, "Samsung clears Nvidia hurdle for 12-layer HBM3E supply" (2025-09) — https://www.kedglobal.com/korean-chipmakers/newsView/ked202509190008
32. Astute Group, "SK hynix holds 62% of HBM, Micron overtakes Samsung" — https://www.astutegroup.com/news/general/sk-hynix-holds-62-of-hbm-micron-overtakes-samsung-2026-battle-pivots-to-hbm4/
33. CNBC, "SK Hynix readies production of HBM4 for Nvidia" (2025-09-12) — https://www.cnbc.com/2025/09/12/sk-hynix-hbm4-chips-nvidia-samsung-micron.html
34. Astute Group, "Nvidia secures ~60% of CoWoS capacity" — https://www.astutegroup.com/news/industrial/advanced-packaging-demand-soars-nvidia-secures-60-of-cowos-capacity/
35. CNBC, "Nvidia snaps up AI chip packaging capacity as TSMC expands in U.S." (2026-04-08) — https://www.cnbc.com/2026/04/08/tsmc-nvidia-advanced-packaging-intel.html
36. Wccftech, "Nvidia has TSMC's advanced packaging lines booked years ahead" — https://wccftech.com/nvidia-alone-has-tsmc-advanced-packaging-lines-booked-for-several-years-ahead/
37. AMD, "AMD and Meta expanded partnership: 6 gigawatts of AMD GPUs" (2026-02-24) — https://ir.amd.com/news-events/press-releases/detail/1279/amd-and-meta-announce-expanded-strategic-partnership-to-deploy-6-gigawatts-of-amd-gpus
38. HyperFRAME Research, "AMD and OpenAI ink multi-year 6GW GPU deal" (2025-10-07) — https://hyperframeresearch.com/2025/10/07/amd-and-openai-ink-multi-year-6gw-gpu-deployment-deal/
39. The Next Platform, "AMD says Helios racks and MI400 GPUs on track for 2H 2026" — https://www.nextplatform.com/compute/2026/02/23/amd-says-helios-racks-and-mi400-series-gpus-on-track-for-2h-2026/4092199
40. TrendForce, "Google unveils 7th-gen TPU Ironwood with 9,216-chip superpod" (2025-11) — https://www.trendforce.com/news/2025/11/07/news-google-unveils-7th-gen-tpu-ironwood-with-9216-chip-superpod-taking-aim-at-nvidia/
41. CNBC, "Google unveils chips for AI training and inference in latest shot at Nvidia" (2026-04-22) — https://www.cnbc.com/2026/04/22/google-launches-training-and-inference-tpus-in-latest-shot-at-nvidia.html
42. CNBC, "OpenAI and Broadcom reveal Jalapeño, first AI chip in partnership" (2026-06-24) — https://www.cnbc.com/2026/06/24/openai-and-broadcom-reveal-jalapeno-first-ai-chip-in-partnership.html
43. NBC News, "OpenAI taps Broadcom to build its first AI processor" (10GW, Oct 2025) — https://www.nbcnews.com/business/business-news/openai-taps-broadcom-build-first-ai-processor-latest-chip-deal-rcna237300
44. Spheron, "Hyperscaler custom AI chips in 2026: Trainium 3, TPU, Maia 200, MTIA" — https://www.spheron.network/blog/hyperscaler-custom-ai-chips-2026-trainium-tpu-maia-mtia-vs-nvidia-gpu/
45. Computer Weekly, "CUDA at 20: from billion-dollar gamble to agentic AI" — https://www.computerweekly.com/news/366640614/CUDA-at-20-From-billion-dollar-gamble-to-agentic-AI
46. Wikipedia, Nvidia (founding, IPO, GeForce 256, Mellanox) — https://en.wikipedia.org/wiki/Nvidia
47. Futurum, "Nvidia Q2 FY2026: networking steals the spotlight" (Spectrum-X >$10B annualized) — https://futurumgroup.com/insights/nvidia-q2-fy-2026-earnings-networking-steals-the-spotlight/
48. Tom's Hardware, "Nvidia on track for $500B in GPU sales by late 2026 despite losing China" — https://www.tomshardware.com/pc-components/gpus/nvidia-hints-at-early-vera-rubin-launch-on-track-for-usd500-billion-in-gpu-sales-by-late-2026-despite-losing-china
49. Fortune, "Nvidia is officially the world's first $5 trillion company" (2025-10-29) — https://fortune.com/2025/10/29/nvidia-first-5-trillion-company-ceo-jensen-huang-500-billion-revenue-blackwell-rubin-gpus-china/
50. NVIDIA, "GTC 2026 News and Announcements" (more than 6 million developers) — https://blogs.nvidia.com/blog/gtc-2026-news/
51. NVIDIA, GTC Taipei 2026 session (Micron, SK hynix, and Samsung named as Rubin HBM4 sources) — https://www.nvidia.com/en-us/on-demand/session/gtctaipei26-stw61044/
52. NVIDIA, "Vera Rubin Ramps Into Full Production" (2026-05-31; shipments scheduled for fall 2026; Grace Blackwell described as previous generation) — https://investor.nvidia.com/news/press-release-details/2026/NVIDIA-Vera-Rubin-Ramps-Into-Full-Production-to-Power-Agentic-AI-Factories-Worldwide/default.aspx
53. NVIDIA Technical Blog, "Inside NVIDIA Rubin GPU Architecture" (2026-07; 336B transistors, TSMC 3nm, 288 GB HBM4, 22 TB/s) — https://developer.nvidia.com/blog/inside-nvidia-rubin-gpu-architecture-powering-the-era-of-agentic-ai/
54. NVIDIA CUDA Programming Guide, "Advanced Kernel Programming — SIMT Execution Model" (accessed 2026-08-18; 32-thread warps, common instruction execution, and branch divergence) — https://docs.nvidia.com/cuda/cuda-programming-guide/03-advanced/advanced-kernel-programming.html
55. NVIDIA, "NVL72 AI Factory — System Hardware & Components" (GB300 tray: Grace, ConnectX-8, BlueField-3, M.2 NVMe, E1.S NVMe cache) — https://docs.nvidia.com/enterprise-reference-architectures/nvl72-ai-factory/latest/components.html
56. NVIDIA NIM for LLMs, "Troubleshooting GPU Memory Out-of-Memory Errors" (startup weight loading; weights, activations, KV cache, and runtime allocations in GPU memory) — https://docs.nvidia.com/nim/large-language-models/latest/troubleshooting/memory.html
57. NVIDIA, "GPUDirect Storage Design Guide" (ordinary CPU bounce buffer versus direct DMA path into GPU memory) — https://docs.nvidia.com/gpudirect-storage/design-guide/index.html
58. NVIDIA CUDA Programming Guide, "Programming Model" (GPC/SM hierarchy; GPU global memory; shared L2; per-SM registers and L1/shared memory) — https://docs.nvidia.com/cuda/cuda-programming-guide/01-introduction/programming-model.html
59. NVIDIA Technical Blog, "Mastering LLM Techniques: Inference Optimization" (prefill, autoregressive decode, and GPU-resident KV cache) — https://developer.nvidia.com/blog/mastering-llm-techniques-inference-optimization/
