# Research — Packaging (Back-end: Assembly, Test & Advanced Packaging)

As-of: 2026-07

Fact pack. Ammunition only, no prose. `[n]` → source list at bottom.
`<!-- VERIFY -->` = not fully confident, check before recording.
Segment frame ("The Twist"): for two years you couldn't buy a GPU — and it
wasn't for lack of wafers.

## What packaging was vs what it is

- Traditional packaging = the last, "dumb" step: glue the die to a leadframe,
  wire-bond gold threads from die pads to pins, encase in black epoxy. Purpose:
  protect the chip, fan its microscopic pads out to solderable pins.
- Offshored before almost anything else in electronics: Fairchild opened the
  first Asian assembly plant in **1963** — a converted **rubber-shoe factory in
  Kowloon, Hong Kong** — and shipped **120 million devices in its first year**. [1]
- Then a plant-a-year march to cheaper labor: Singapore, then **Penang, Malaysia
  (1971)** — the origin story of Asia's entire electronics-assembly belt. [1][2]
- Result: a caste system. Front-end (fabs) = high-tech, high-margin; back-end
  (assembly & test) = labor arbitrage. The OSAT industry was born as the
  industry's low-status outsourcing bin.
- What it became: the new scaling axis. Advanced packaging (2.5D interposers,
  3D stacking, fan-out, chiplets) ≈ **$45B market in 2024 → $79.4B by 2030**
  (Yole, 9.4% CAGR). [3]
- Value migrated up: TSMC — the foundry — took the most valuable packaging
  in-house. A CoWoS packaging wafer now reportedly prices **near a 7nm logic
  wafer**. [4] Advanced packaging ≈ **8% of TSMC revenue in 2025, >10%
  expected 2026**. [5]
- Course line: the step that was offshored because it was worthless is now the
  step that decides who gets AI compute.

## Why packaging became the frontier — 4 mechanisms

### (a) The reticle limit — you literally can't print a bigger die
- Every lithography scanner (DUV and standard EUV) exposes a maximum field of
  **26 × 33 mm = 858 mm²**. No die can be printed larger in one shot. [6][7]
- Nvidia H100: **814 mm²** — ~95% of the theoretical maximum. The biggest chips
  were already pressed against the glass. [8]
- Blackwell B200: Nvidia's answer — **two reticle-limited dies** in one package,
  joined by a **10 TB/s** die-to-die link (NV-HBI), **208B transistors** across
  ~1,600 mm². The "chip" is now an assembly. [8][9]
- High-NA EUV makes it worse: anamorphic optics **halve the field to
  26 × 16.5 mm = 429 mm²**. On the next tools, even a mid-size GPU die must be
  stitched or split. Multi-die isn't a choice anymore; it's geometry. [6][7]

### (b) Yield economics — one big die vs chiplets
- Defects fall randomly per wafer; the bigger the die, the more likely one lands
  on it. Die cost rises super-linearly with area.
- AMD's canonical math (Hot Chips 2017, first EPYC): four 213 mm² "Zeppelin"
  dies (852 mm² total silicon) vs a hypothetical 777 mm² monolithic die —
  ~10% area overhead, but the four small dies cost **<60% of the one big die**;
  AMD claimed a **41% cost reduction**. [10][11]
- Handle: printing one huge die is betting the whole package on zero defects in
  814 mm²; printing eight small ones lets you throw away only the bad ones.

### (c) Memory bandwidth — HBM has to sit millimeters from the GPU
- HBM speaks a **1,024-bit-wide interface per stack** (HBM4: 2,048-bit); with
  command/address/clock, roughly **~1,700 signal lines per stack**. A PCB
  physically cannot route that — traces are too fat, too long, too few. [12][13]
- Only a **silicon interposer** (or silicon bridge) has wiring fine enough:
  µm-scale traces, tens of thousands of micro-bumps, die-to-memory distance
  measured in **millimeters**. [12]
- Payoff: HBM3E delivers **>1.2 TB/s per stack**; a B200 carries 8 stacks. That
  bandwidth exists *only inside the package*. [13]
- Course line: the memory wall wasn't solved by faster memory — it was solved
  by moving memory into the package.

### (d) Cost — only put on N2 what needs N2
- SRAM and analog/I/O circuits have essentially stopped shrinking with new
  nodes; paying leading-edge wafer prices for them is waste.
- Chiplets let you split by economics: compute chiplets on the newest node,
  I/O die on a mature node (EPYC "Rome": 7nm compute + 14nm I/O), cache as a
  stacked die on N7 (3D V-Cache). [11][36]
- Course line: "Moore's Law didn't die; it moved into the package." (Framing —
  ours, echoes TSMC's own "system-level scaling" pitch.)

## CoWoS — the acronym that gated the AI boom

- **C**hip **o**n **W**afer **o**n **S**ubstrate: dies are mounted on a silicon
  interposer (with through-silicon vias), which sits on an organic substrate.
  2.5D packaging. First commercialized with Xilinx Virtex-7 FPGAs, volume
  production by 2013 — a decade as a niche, expensive oddity. [14]
- **The quote**: "It's not the shortage of AI chips. It's the shortage of our
  CoWoS capacity." — TSMC Chairman **Mark Liu, Sept 2023** (to Nikkei, at
  SEMICON Taiwan). Every H100 needed a CoWoS slot; TSMC had wafer capacity to
  spare. [15]
- Same year, Musk (WSJ CEO Council, May 2023): GPUs "at this point are
  considerably harder to get than drugs." [16] H100 lead times ran
  **~36–52 weeks** through 2023. [17]
- Capacity trajectory (wafers/month, end of year):
  - end-2023: **~13–15k** [18][19]
  - end-2024: **~35–40k** (doubled) [19][20]
  - end-2025: **~75–80k** (doubled again) [19][20]
  - end-2026 target: **~120–140k** — ≈**10× in three years** [19][21][22]
- Demand still ahead of it: total CoWoS demand ≈ 370k wafers (2024) → ~670k
  (2025) → ~1M (2026); supply-demand gap narrowing from ~20% to ~10% by
  end-2026. [19][22] <!-- VERIFY: annual demand figures are Silicon Analysts estimates, partly paywalled -->
- Variants:
  - **CoWoS-S**: one monolithic silicon interposer (H100). Limit ≈ 2,500 mm²
    (~2.5–3× reticle); big interposers themselves become a yield problem. [23][24]
  - **CoWoS-R**: organic RDL interposer, no silicon (cheaper, lower density). [23]
  - **CoWoS-L**: small **local silicon interconnect (LSI) bridges** embedded in
    an RDL interposer — silicon only where dies meet, scaling toward **~6×
    reticle** packages. [23][24]
- Blackwell = CoWoS-L, and Nvidia was initially its only customer, locking up
  **>70% of 2025 CoWoS-L capacity**. [25][26] Blackwell's 2024 delay/re-spin was
  a *packaging-level* problem (interposer/bridge redesign) — the first time a
  flagship chip's schedule slipped on the package, not the die. [27][28]
- Who uses CoWoS: Nvidia (dominant), AMD (MI300/MI350), Broadcom (Google TPUs),
  plus Marvell/AWS-class custom accelerators. Fully booked through 2026;
  overflow work now farmed to OSATs (Amkor, SPIL; ASE pushing "CoWoP"
  wafer-on-PCB variants). [26][29] <!-- VERIFY: exact outsourced volumes (reports: ~180–190k wafers/yr to Amkor, 60–80k to SPIL in 2026) -->

## Chiplets — AMD's yield hack becomes the industry standard

- AMD pioneered at scale: EPYC "Naples" (2017) shipped as 4 chiplets when Intel
  was still monolithic — see the 41% cost math above. [10][11] By Rome (2019),
  chiplets split across *nodes* (7nm cores, 14nm I/O). [11]
- **UCIe** (Universal Chiplet Interconnect Express): die-to-die interconnect
  standard, founded **March 2022** by Intel, AMD, Arm, TSMC, Samsung, ASE,
  Google Cloud, Meta, Microsoft, Qualcomm — the "PCIe of the package," meant to
  enable a mix-and-match chiplet marketplace. [30] Nvidia and Alibaba joined the
  board within six months; 60+ member companies by Aug 2022, 100+ since. [31]
  <!-- VERIFY: current 2026 member count -->
- **Intel's stack**:
  - **EMIB** (2.5D): a small silicon bridge *embedded in the organic substrate*
    — silicon density only where dies meet, no giant interposer. First shipped
    in Stratix 10 FPGAs (~2017); bump pitch scaling 55µm → 45µm → 40µm. [32][33]
    <!-- VERIFY: exact first-production year for EMIB -->
  - **Foveros** (3D): logic-on-logic die stacking; first product Lakefield
    (2020), then Meteor Lake (2023); ~50–25µm bump pitches. [32][33]
  - **Foveros Direct**: Intel's hybrid bonding, ~10µm pitch. Ponte Vecchio GPU:
    **47 tiles** across 5 process nodes, EMIB + Foveros in one product. [32]
    <!-- VERIFY: 47-tile count -->
- Handle: chiplets turn chip design from sculpture (one perfect block) into
  Lego (snap together known-good bricks).

## 3D stacking & hybrid bonding — wiring chips face-to-face

- Two ways to stack dies:
  - **Micro-bumps**: solder balls, ~36–50µm pitch → hundreds of connections/mm². [34][35]
  - **Hybrid bonding**: polished copper pads fused **directly copper-to-copper**,
    no solder at all. TSMC SoIC pitch: 9µm (N7 era) → **6µm in HVM today** →
    4.5µm by ~2029. Orders of magnitude more connections, shorter, lower power. [34]
- **TSMC SoIC** = its hybrid-bonding platform (SoIC-X); the 3D complement to
  CoWoS — AMD MI300 stacks compute on I/O dies via SoIC *and then* mounts the
  result on CoWoS ("3.5D"). SoIC capacity ~10k wpm end-2025, scaling with
  Fab 6/AP campuses. [34][5]
- **Consumer proof: AMD 3D V-Cache** (Ryzen 7 5800X3D, April 2022): a 64MB
  SRAM die (41 mm², N7) hybrid-bonded on top of the CPU chiplet at **9µm pitch,
  ~2 TB/s** between dies — 96MB total L3, instant gaming champion. First
  hybrid-bonded chip normal people could buy. [36]
- **HBM itself is the oldest 3D story**: 8–12 stacked DRAM dies on a base die,
  today joined with micro-bump-class bonding (TC-NCF / MR-MUF).
  - **HBM4**: SK hynix world-first mass production **Feb 2026**; its base die is
    made **by TSMC on a 12nm logic process** — first time the bottom of a memory
    stack comes from a logic foundry. Samsung counters with base die on its own
    4nm. Memory/foundry boundary dissolving. [37][38]
  - **Hybrid bonding for HBM**: SK hynix completed validation of 12-high
    hybrid-bonded stacks (Apr 2026), but volume adoption has slipped toward
    HBM4E/HBM5-era products (roughly 2027+), as 16-high stacks force the issue. [39][40]

## OSATs — the old back-end world (and its margin problem)

- OSAT = Outsourced Semiconductor Assembly and Test. Top-10 combined revenue
  2024: **$41.6B**, +3% YoY. [41]
- Rankings (2024, TrendForce): **#1 ASE** (Taiwan) — **$18.5B**, ~45% of top-10
  revenue (holding-level figure incl. its EMS arm USI); **#2 Amkor** (US, HQ
  Tempe AZ) — **$6.3B** (~15% of top-10); **#3 JCET** (China) — **$5.0B**,
  +19.3% YoY, Chinese players growing double-digit with state backing. [41][42]
  JCET bought #4-ranked STATS ChipPAC in 2015 to get there. <!-- VERIFY: acquisition details -->
- The margin story (the whole value-migration argument in three numbers, 2025):
  - Amkor gross margin: **~14%** [44]
  - ASE gross margin: **~17.7%** [43]
  - TSMC gross margin: **59.9%** [45]
  - …and TSMC's *packaging* wafers now price near 7nm logic wafers. [4] The
    high-value work (CoWoS, SoIC) stayed at the foundry; OSATs get the overflow
    and the mid-range.
- **Amkor Arizona** (the US back-end gap-filler): Peoria, AZ campus — ground
  broken **Oct 2025**, investment expanded to **$7B**, ~3,000 jobs, >750k sq ft
  cleanroom across two phases; first facility built mid-2027, **production
  early 2028**; anchor customers Apple and Nvidia. [46]
- TSMC ↔ Amkor: 2024 agreement to collaborate on InFO/CoWoS near TSMC's Phoenix
  fabs; upgraded to a **10-year procurement agreement (June 2026)** — TSMC will
  buy US packaging/test from Amkor. Until this ramps, wafers fabbed in Arizona
  still fly to Taiwan to be packaged. [47][48]
- Chokepoint note: "onshoring fabs" without onshoring packaging didn't move
  Taiwan risk — the die isn't a product until it's packaged and tested.

## Test — the duopoly nobody noticed

- You can't sell what you can't prove works. Automated test equipment (ATE) is
  a **~80%+ two-company market: Advantest (Japan) + Teradyne (US)**. [49]
- Multi-die packaging exploded test demand two ways:
  1. **Known-good-die**: one dead chiplet scraps a package carrying two
     reticle-limited dies + 8 HBM stacks — a five-figure product. So every die
     gets tested *before* assembly, then the assembly gets tested again
     (system-level test).
  2. **Test time per unit**: a phone SoC clears the tester in **~30–60
     seconds**; a Blackwell-class accelerator can take **>20 minutes** —
     order-of-magnitude more tester-hours per shipped unit. [53]
- The numbers of the boom:
  - Global tester market CY2025: **~$9B, +~50% YoY**. [51]
  - **Advantest FY2025** (ended Mar 2026): sales **¥1,128.6B (+44.7%)**,
    operating income **¥499.1B (+118.8%)** — record everything, driven by AI
    SoC + HBM test. [50] Ramping toward ~10,000 SoC test systems/yr. [53]
  - **Teradyne 2025**: semi test +19% YoY; compute test revenue **+90% YoY**;
    >50% of SoC test revenue now compute/AI. [52]
- Handle: every extra minute on the tester at AI volumes = entire fleets of
  multi-million-dollar machines.

## Substrates — the MSG company inside every advanced package

- The package substrate is the "motherboard inside the package": it translates
  the die's µm world down to the PCB's mm world, layer by layer.
- **ABF = Ajinomoto Build-up Film** — the insulating resin film laminated
  between copper wiring layers in essentially every CPU/GPU substrate on Earth.
  Made by **Ajinomoto**, the Japanese company founded to sell MSG; the film grew
  out of its amino-acid/epoxy chemistry; launched ~1999, became the de facto
  standard. **>95% global market share.** [54][55]
- Ajinomoto's ABF margins reportedly **top 50%** in the AI boom; expanding with
  ¥25B by 2030 plus land for a new plant targeting 2032. [55][56] Best ammo:
  the seasoning company is a chip chokepoint.
- The substrate *makers* (who buy ABF and build the laminate): **Ibiden** and
  **Shinko** (Japan), **Unimicron** and **Nan Ya** (Taiwan), **AT&S** (Austria)
  — top five ≈ ~74% of the ABF-substrate market. <!-- VERIFY: 74% figure, single mid-tier source -->
- **Ibiden** (Nvidia's key substrate supplier): **~¥500B (~$3.2B)** expansion
  across FY2026–28 — its largest ever — as AI substrates get huge (layer counts
  climbing from ~3+3 toward 11+11) and utilization runs ~90%. [57]
  <!-- VERIFY: layer-count claim; Shinko's take-private by JIC-led consortium -->
- ABF substrates were the *previous* famous shortage (2021–22 PC/console
  crunch); AI package sizes are pushing them back toward shortage again in
  2026–27. [57]

## What's next — panels, glass, wafers-as-computers

- **Panel-level packaging (PLP)**: build packages on big rectangular panels
  instead of round 300mm wafers — less wasted edge, more giant packages per
  run. TSMC "CoPoS" (Chip-on-Panel-on-Substrate) on **310×310mm panels**: pilot
  line ~mid-2026, trial 2027, volume ~2028–29. Samsung and PTI pushing PLP too. [61][62]
- **Glass substrates/cores**: replace the organic core with glass — flatter,
  stiffer, finer wiring, better at huge package sizes and heat. Status 2026 =
  first year out of the lab into pilot/qualification: [60]
  - **Intel**: on its roadmap since 2023; showed EMIB + glass-core samples
    (Jan 2026); "3DGS" glass push incl. a $3.3B India assembly plant. [60][64]
  - **Samsung** (SEMCO): pilot line 2025, mass production target ~2027. [60]
  - **Absolics** (SKC, Covington GA): equipment in, mass-production samples to
    AMD (Jan 2026); SKC injecting >half of a ₩1T raise. [60][63]
  - **TSMC**: evaluating glass within its panel roadmap (per equipment maker
    SCHMID). [61]
  - Market: FO-PLP + glass ≈ **$650M (2024) → $8.1B (2030)** (Counterpoint). [65]
- **System-on-Wafer**: TSMC SoW — the package *is* a whole 300mm wafer
  (Cerebras-style scale for mainstream AI); CoWoS-based SoW-X targeted for
  ~2027 mass production. [66]
- **The case study that started it**: TSMC's **InFO fan-out** won Apple's A10
  (iPhone 7, 2016) — thinner, cooler package-on-package; it's a key reason TSMC
  took **100% of Apple SoC orders from Samsung** and never gave them back.
  Packaging as a competitive weapon, ten years before CoWoS made it obvious. [58][59]

## Risks / counterweights

- **Concentration**: CoWoS/SoIC capacity is overwhelmingly in Taiwan; US
  onshoring of back-end (Amkor Peoria) doesn't produce chips until ~2028. [46]
- **Boom-bust risk**: a 10× capacity build meets any AI digestion hard; one
  Aug 2025 report claimed CoWoS utilization dipped to ~60% amid mix shifts
  (contested — TrendForce still shows demand > supply into 2026). [67][22]
- **Transition risk**: CoWoS-S → CoWoS-L retooling made Blackwell's package the
  schedule-critical path; packaging now carries tape-out-level risk. [27][28]
- **China's end-run**: advanced packaging is far less export-controlled than
  EUV; JCET/Tongfu (+SMIC/Huawei orbit) can climb the packaging ladder even
  while locked out of leading-edge litho — chiplets partially substitute for
  nodes they can't build. (Framing; Chinese OSAT growth is the sourced signal. [41][42])
- **Simplification hedge**: "CoWoS gated ALL AI supply" is directionally right
  for 2023–25 but HBM supply and (later) substrates were co-bottlenecks at
  various moments; say "the binding constraint most of the time."

## Fact ammo — lines that land

- **The confession**: "It's not the shortage of AI chips. It's the shortage of
  our CoWoS capacity." — TSMC Chairman Mark Liu, Sept 2023. The wafers existed;
  the packaging slots didn't. [15]
- **The street price**: Musk, May 2023: GPUs are "considerably harder to get
  than drugs" — while H100 lead times ran up to a year. [16][17]
- **The wall**: an H100 die is 814 mm² against a hard physical print limit of
  858 mm² — 95% of the biggest chip physics allows. Nvidia's answer wasn't a
  bigger die (impossible); it was two dies welded at 10 TB/s inside the
  package. [8][9]
- **The MSG company**: >95% of the world's advanced CPU/GPU packages are
  insulated with film from Ajinomoto — the company that invented MSG seasoning
  — at reported >50% margins. [54][55][56]
- **The 10×**: TSMC's CoWoS capacity: ~13–15k wafers/month end-2023 → ~120–140k
  targeted end-2026. Ten-x in three years, and it's *still* sold out. [18][19][21]
- **The tester tax**: a phone chip passes test in under a minute; a
  Blackwell-class AI package can sit on the tester for 20+ minutes — which is
  why the test duopoly (Advantest + Teradyne) is having the best years in its
  history. [53][50]

---

## Sources

1. Electronics Weekly, "The First SE Asian Semiconductor Plant" (Fairchild Hong Kong 1963) — https://www.electronicsweekly.com/blogs/mannerisms/yarns/the-first-se-asian-semiconductor-plant-2016-08/
2. SEMI Oral History, Ed Pausa (offshore assembly expansion, Penang 1971) — https://www.semi.org/en/Oral-History-Interview-Ed-Pausa
3. Yole Group, "Advanced packaging market set to reach $79.4 billion by 2030" — https://www.yolegroup.com/press-release/advanced-packaging-market-set-to-reach-79-4-billion-by-2030/
4. TrendForce, "TSMC CoWoS Wafer ASP Reportedly Nears 7nm" — https://www.trendforce.com/news/2026/04/28/news-tsmc-cowos-wafer-asp-reportedly-nears-7nm-levels-advanced-packaging-poised-to-become-a-key-profit-driver/
5. Yahoo Finance, "Will TSM's Advanced Packaging Push Unlock a New Growth Phase?" — https://finance.yahoo.com/sectors/technology/articles/tsms-advanced-packaging-push-unlock-133200784.html
6. WikiChip, "Mask / Reticle" (26×33mm field; High-NA 26×16.5mm) — https://en.wikichip.org/wiki/mask
7. SemiEngineering, "Are Larger Reticle Sizes On The Horizon?" — https://semiengineering.com/are-larger-reticle-sizes-on-the-horizon/
8. Wikipedia, "Blackwell (microarchitecture)" (H100 814mm², B200 dual-die) — https://en.wikipedia.org/wiki/Blackwell_(microarchitecture)
9. Tom's Hardware, "Nvidia's next-gen AI GPU… Blackwell B200" (208B transistors, 10TB/s NV-HBI) — https://www.tomshardware.com/pc-components/gpus/nvidias-next-gen-ai-gpu-revealed-blackwell-b200-gpu-delivers-up-to-20-petaflops-of-compute-and-massive-improvements-over-hopper-h100
10. Tom's Hardware, "AMD Outlines Threadripper and EPYC's MCM Advantage, Claims 41% Cost Reduction" (Hot Chips 2017) — https://www.tomshardware.com/news/amd-threadripper-epyc-mcm-cost,35306.html
11. ServeTheHome, "AMD EPYC Infinity Fabric Update and MCM Cost Savings" — https://www.servethehome.com/amd-epyc-infinity-fabric-update-mcm-cost-savings/
12. HilPCB, "HBM3 interposer PCB quality" (~1,700 signal lines/stack, why PCB can't route it) — https://hilpcb.com/en/blog/hbm3-interposer-quality/
13. Rambus, "HBM3: Everything You Need to Know" (1024-bit interface, >1.2TB/s HBM3E) — https://www.rambus.com/blogs/hbm3-everything-you-need-to-know/
14. TSMC press release, "Xilinx and TSMC Reach Volume Production on all 28nm CoWoS" — https://pr.tsmc.com/english/news/1792
15. Tom's Hardware, "TSMC: Shortage of Nvidia's AI GPUs to Persist for 1.5 Years" (Mark Liu quote, Sept 2023) — https://www.tomshardware.com/news/tsmc-shortage-of-nvidias-ai-gpus-to-persist-for-15-years
16. WSJ, "The AI Boom Runs on Chips, but It Can't Get Enough" (Musk quote, May 2023; reprint) — https://worldtradescanner.com/The%20AI%20Boom%20Runs%20on%20Chips,%20but%20It%20Can%E2%80%99t%20Get%20Enough.htm
17. GPU Utils, "Nvidia H100 GPUs: Supply and Demand" (lead times) — https://gpus.llm-utils.org/nvidia-h100-gpus-supply-and-demand/
18. Wccftech, "TSMC Boosts AI Packaging Capacity to 15,000 Wafers Per Month" — https://wccftech.com/tsmc-boosts-ai-packaging-capacity-to-15000-wafers-per-month-says-report/
19. Silicon Analysts, "CoWoS Packaging Capacity (TSMC) — Historical Data" (13k end-2023 → ~125k end-2026; demand estimates) — https://siliconanalysts.com/market-data/cowos-capacity
20. TrendForce, "TSMC Set to Expand CoWoS Capacity to Record 75,000 Wafers in 2025, Doubling 2024 Output" — https://www.trendforce.com/news/2025/01/02/news-tsmc-set-to-expand-cowos-capacity-to-record-75000-wafers-in-2025-doubling-2024-output/
21. TrendForce, "TSMC Ramps up CoWoS Capacity across Taiwan, Projected to Nearly Triple by 2026" — https://www.trendforce.com/news/2024/12/13/news-tsmc-ramps-up-cowos-capacity-across-taiwan-projected-to-nearly-triple-by-2026/
22. TrendForce, "TSMC CoWoS Supply-Demand Gap Reportedly Seen Narrowing from 20% to 10% by End-2026" — https://www.trendforce.com/news/2026/06/15/news-tsmc-cowos-supply-demand-gap-reportedly-seen-narrowing-from-20-to-10-by-end-2026-as-capacity-expands/
23. Aminext, "CoWoS-S, R, L Explained" — https://www.aminext.blog/en/post/tsmc-cowos-s-r-l-differences
24. TrendForce, "Blackwell Enters the Scene – A Closer Look at TSMC's CoWoS Branch" — https://www.trendforce.com/news/2024/03/21/news-blackwell-enters-the-scene-a-closer-look-at-tsmcs-cowos-branch/
25. Tom's Hardware, "Nvidia shifts to CoWoS-L packaging for Blackwell GPU production ramp-up" — https://www.tomshardware.com/tech-industry/nvidia-shifts-to-cowos-l-packaging-for-blackwell-gpu-production-ramp-up
26. TrendForce, "NVIDIA Securing 70% of 2025 CoWoS-L Capacity" — https://www.trendforce.com/news/2025/02/24/news-tsmc-reportedly-sees-cowos-order-surge-with-nvidia-securing-70-of-2025-cowos-l-capacity/
27. 3D InCites (IFTLE 607), "Why Nvidia's Blackwell is Having Issues with TSMC CoWoS-L" — https://www.3dincites.com/2024/10/iftle-607-why-nvidias-blackwell-is-having-issues-with-tsmc-cowos-l-technology/
28. SemiAnalysis, "Nvidia's Blackwell Reworked — Shipment Delays & GB200A" — https://newsletter.semianalysis.com/p/nvidias-blackwell-reworked-shipment
29. TrendForce, "TSMC's CoWoS-L/S Reportedly Fully Booked, OSAT Partners Step Up" — https://www.trendforce.com/news/2025/12/08/news-tsmcs-cowos-l-s-reportedly-fully-booked-osat-partners-step-up-with-ases-cowop-in-focus/
30. HPCwire, "Industry Consortium Forms to Drive UCIe Chiplet Interconnect Standard" — https://www.hpcwire.com/2022/03/02/universal-chiplet-interconnect-express-industry-consortium-forms-to-drive-chiplet-ecosystem/
31. BusinessWire, "UCIe Consortium Announces Incorporation and New Board Members" (Nvidia, Alibaba; 60+ members) — https://www.businesswire.com/news/home/20220802005203/en/UCIe-Universal-Chiplet-Interconnect-Express-Consortium-Announces-Incorporation-and-New-Board-Members-Open-for-Membership
32. WikiChip Fuse, "Intel Unveils Foveros Omni and Foveros Direct" — https://fuse.wikichip.org/news/5949/intel-unveils-foveros-omni-and-foveros-direct-leveraging-hybrid-bonding/
33. SemiconductorX, "EMIB Advanced Packaging" (bump pitch roadmap; Stratix 10) — https://semiconductorx.com/packaging-emib.html
34. Tom's Hardware, "TSMC SoIC 3D stacking roadmap… 6-micron pitches today to 4.5-micron in 2029" — https://www.tomshardware.com/tech-industry/semiconductors/tsmc-soic-3d-stacking-roadmap-outlines-path-from-6-micron-pitches-today-to-4-5-micron-in-2029-fujitsus-monaka-cpu-to-benefit-from-face-to-face-chiplet-stacking
35. SemiEngineering, "Bumps Vs. Hybrid Bonding For Advanced Packaging" — https://semiengineering.com/bumps-vs-hybrid-bonding-for-advanced-packaging/
36. TechPowerUp, "AMD Ryzen 7 5800X3D Review — Architecture" (SoIC, 9µm pitch, 2TB/s, 64MB/41mm²) — https://www.techpowerup.com/review/amd-ryzen-7-5800x3d/2.html
37. EE Times, "The State of HBM4 Chronicled at CES 2026" — https://www.eetimes.com/the-state-of-hbm4-chronicled-at-ces-2026/
38. BigGo Finance, "SK Hynix to Begin World's First Mass Production of HBM4 in February 2026… TSMC Partnership" — https://finance.biggo.com/news/Tui5V5sBU6SAbxhZ0Sjf
39. TrendForce, "SK hynix Reportedly Completes 12-High Hybrid Bonding HBM Validation" — https://www.trendforce.com/news/2026/04/29/news-sk-hynix-reportedly-completes-12-high-hybrid-bonding-hbm-validation-works-to-raise-yields-for-mass-production/
40. KAD, "Samsung and SK hynix Delay Hybrid Bonding for HBM4" — https://www.kad8.com/hardware/samsung-and-sk-hynix-delay-hybrid-bonding-for-hbm4-as-memory-roadmaps-shift/
41. TrendForce, "Top 10 OSAT Companies of 2024 Revealed" — https://www.trendforce.com/presscenter/news/20250513-12577.html
42. Evertiq, "Chinese firms gain ground in 2024 top 10 OSAT ranking" (Amkor 15.2%, JCET 12% of top-10) — https://evertiq.com/news/2025-05-23-chinese-firms-gain-ground-in-2024-top-10-osat-ranking
43. PR Newswire, ASE Technology Holding Q4/FY2025 results (GM 17.7%) — https://www.prnewswire.com/news-releases/ase-technology-holding-co-ltd-reports-its-unaudited-consolidated-financial-results-for-the-fourth-quarter-and-the-full-year-of-2025-302679779.html
44. Amkor Technology, 2025 earnings releases (FY2025 gross margin ~14%) — https://www.sec.gov/Archives/edgar/data/1047127/000104712725000187/amkr9302025erex-991.htm
45. TSMC, 4Q25/FY2025 results (FY2025 gross margin 59.9%) — https://www.sec.gov/Archives/edgar/data/1046179/000104617926000008/a4q25e_withguidancexfinal.htm
46. Amkor Technology, "Amkor Breaks Ground on New Advanced Packaging and Test Campus in Arizona; Expands Investment to $7 Billion" — https://ir.amkor.com/news-releases/news-release-details/amkor-technology-breaks-ground-new-semiconductor-advanced
47. TSMC press release, "Amkor and TSMC to Expand Partnership and Collaborate on Advanced Packaging in Arizona" — https://pr.tsmc.com/english/news/3174
48. AnySilicon, "TSMC and Amkor Technology Sign 10-Year U.S. Advanced Packaging Agreement" (June 2026) — https://anysilicon.com/news/tsmc-and-amkor-technology-sign-10-year-u-s-advanced-packaging-agreement/
49. Seeking Alpha, "Advantest/Teradyne: Market Share Shifts In This Duopoly" — https://seekingalpha.com/article/4837312-advantest-teradyne-market-share-shifts-in-this-duopoly
50. Advantest, FY2025 Consolidated Financial Results (¥1,128.6B sales, ¥499.1B op income) — https://www.advantest.com/en/news/2026/a81o6o0000000hgw-att/E_FR_FY2025_FN.pdf
51. Investing.com, "Advantest FY25 slides: record margins as AI testing demand surges" (tester market ~$9B, +50% CY2025) — https://www.investing.com/news/company-news/advantest-fy25-slides-record-margins-as-ai-testing-demand-surges-93CH-4639589
52. Teradyne, Form 10-K FY2025 (semi test +19%, compute +90%) — https://www.sec.gov/Archives/edgar/data/97210/000119312526059002/ter-20251231.htm
53. Wing VC, "The Chip Testing Bottleneck" (30–60s phone SoC vs 20+ min Blackwell-class; Advantest ~10k testers/yr) — https://www.wing.vc/content/the-chip-testing-bottleneck
54. Ajinomoto Fine-Techno, "Insulation film — Ajinomoto Build-up Film (ABF)" (launched 1999, de facto standard) — https://www.aft-website.com/en/products/insulating_film-abf/
55. TrendForce, "Ajinomoto to Invest JPY 25 Billion by 2030 to Expand ABF Production" (>95% share) — https://www.trendforce.com/news/2025/04/01/news-japanese-firm-ajinomoto-to-invest-jpy-25-billion-by-2030-to-expand-abf-production-for-advanced-packaging/
56. TrendForce, "Ajinomoto… ¥1.2B Land Buy for 2032 Plant; ABF Margins Top 50% on AI Boom" — https://www.trendforce.com/news/2026/05/08/news-ajinomoto-ramps-chip-packaging-push-with-%C2%A51-2b-land-buy-for-new-plant-in-2032-abf-margins-top-50-on-ai-boom/
57. Nikkei Asia, "Nvidia supplier Ibiden to expand IC substrate output amid AI boom" (~¥500B capex) — https://asia.nikkei.com/business/technology/artificial-intelligence/nvidia-supplier-ibiden-to-expand-ic-substrate-output-amid-ai-boom
58. Yole / System Plus, "Apple A10 processor uses Integrated FanOut (InFO) technology from TSMC" — https://www.yolegroup.com/strategy-insights/system-plus-consulting-confirms-that-the-apple-a10-processor-uses-integrated-fanout-info-technology-from-tsmc/
59. MacRumors, "How TSMC Won Back Exclusivity With Apple for the A10 Chip" — https://www.macrumors.com/2016/08/10/tsmc-info-wlp-apple-exclusivity/
60. TrendForce Insights, "Glass Substrates Are Breaking Through the AI Chip Packaging Bottleneck" — https://insights.trendforce.com/p/glass-substrate-development
61. TrendForce, "SCHMID Flags TSMC Panel-Level Packaging Push: 310×310mm Progress, Glass Integration Under Review" — https://www.trendforce.com/news/2026/05/19/news-equipment-maker-schmid-flags-tsmc-panel-level-packaging-push-310x310mm-progress-glass-integration-under-review/
62. TrendForce, "TSMC Advances Panel-Level Packaging, CoPoS Pilot Line Reportedly Set for June Completion, 2028–29 Ramp Eyed" — https://www.trendforce.com/news/2026/04/13/news-tsmc-advances-panel-level-packaging-copos-pilot-line-reportedly-set-for-june-completion-2028-29-ramp-eyed/
63. TrendForce, "SKC Reportedly Channels Over Half of ₩1T Capital Increase Into Absolics" — https://www.trendforce.com/news/2026/03/03/news-skc-reportedly-channels-over-half-of-%E2%82%A91t-capital-increase-into-absolics-to-fast-track-glass-substrates/
64. TrendForce, "Intel Advances Glass Substrate Push with 3DGS, US$3.3 Billion India Plant" — https://www.trendforce.com/news/2026/06/01/news-intel-advances-glass-substrate-push-with-3dgs-us3-3-billion-india-plant-set-for-five-to-six-year-buildout/
65. TechTimes, "Intel and TSMC Pile In as Glass Substrates and Panel Packaging Head for 10x Growth" (Counterpoint: $650M→$8.1B) — https://www.techtimes.com/articles/319529/20260702/intel-tsmc-pile-glass-substrates-panel-packaging-head-10x-growth.htm
66. TrendForce, "TSMC Targets its System-on-Wafer… Mass Production in 2027" — https://www.trendforce.com/news/2024/06/04/news-fueled-by-ai-demand-tsmc-targets-its-system-on-wafer-manufactured-with-cowos-to-enter-mass-production-in-2027/
67. DigiTimes, "CoWoS capacity utilization reportedly only 60% amid AI boom" — https://www.digitimes.com/news/a20250805PD205/cowos-capacity-tsmc-packaging-equipment.html
