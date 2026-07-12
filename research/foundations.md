# Research — Foundations (physics + economics of the whole industry)

As-of: 2026-07

Fact pack. Ammunition only, no prose. `[n]` → source list at bottom.
`<!-- VERIFY -->` = not fully confident, check before recording.
Feeds: cold open, foundations, great-unbundling, life-of-a-wafer segments.

## The transistor

- **MOSFET = a voltage-controlled switch.** Three terminals: **source** (where
  electrons come from), **drain** (where they go), **gate** (the control knob).
  Voltage on the gate creates an electric field that opens/closes a conductive
  channel between source and drain. No gate voltage → no current.
- **Faucet analogy**: source = water main, drain = spout, gate = the handle. A
  tiny twist of the handle (gate voltage) controls a big flow (channel current).
  Crucially: the handle doesn't touch the water — the gate is insulated from the
  channel by an oxide layer a few atoms thick (~1–2 nm at modern nodes).
  <!-- VERIFY: modern gate-dielectric effective thickness; high-k stacks complicate the "atoms" count -->
- **Logic from switches**: wire switches in series → AND-like behavior (all must
  be on); in parallel → OR-like (any one suffices); CMOS pairs an n-type and
  p-type transistor so one always blocks — near-zero current except when
  switching. NAND gate = 4 transistors; every computer is just billions of these.
- **Transistor-count ladder** (the course's zoom-out shot):
  - Intel **4004** (1971): **2,300** transistors, 10 µm process, first commercial
    microprocessor. [1]
  - Intel Pentium (1993): **3.1M**. <!-- VERIFY: 3.1M widely cited, confirm against Intel museum page -->
  - Apple A17 Pro (2023): **~19B** (first 3nm phone chip). <!-- VERIFY: Apple keynote figure -->
  - Nvidia **H100** (2022): **80B**, TSMC 4N, ~814 mm². [2]
  - Nvidia **Blackwell B200** (2024): **208B** across two reticle-limit dies
    fused with a 10 TB/s die-to-die link. [3]
  - Nvidia **Rubin** (unveiled GTC 2026, shipping late 2026): reported **336B**
    across two dies on TSMC 3nm-class. [4] <!-- VERIFY: 336B is from early GTC-2026 coverage; confirm against Nvidia's official spec sheet before recording -->
  - Cerebras **WSE-3** (2024): **4 trillion** — one chip the size of an entire
    wafer (46,225 mm², 900,000 cores), ~50× an H100. [5]
  - 4004 → Rubin: ~**146-million-×** more transistors in 55 years. (computed)

## Sand to wafer

- Silicon = ~28% of Earth's crust, second most abundant element after oxygen —
  the raw material is literally everywhere; the *purity* is the product.
  <!-- VERIFY: exact crust percentage (27.7% commonly cited) -->
- **Step 1 — metallurgical-grade silicon**: quartz (SiO₂) + carbon in an electric
  arc furnace (~2,000°C) → ~98–99% pure silicon. Cheap, commodity. [6]
  <!-- VERIFY: furnace temperature figure -->
- **Step 2 — polysilicon (Siemens process)**: convert to trichlorosilane gas,
  distill, re-deposit → **electronic-grade polysilicon at 9N–11N purity**
  (99.9999999–99.999999999%). **11N is the real-world standard** for
  semiconductor poly; "12N" exists only in marketing — measured Wacker data
  bottoms out around a few parts per *trillion* of dopant atoms. [6][7]
  - Handle: 11N ≈ one wrong atom per 100 billion — roughly one typo in a
    library of ~200,000 novels. (computed illustration)
- **Step 3 — Czochralski (CZ) single crystal**: melt the poly (~1,414°C, silicon's
  melting point), dip a pencil-sized seed crystal, pull upward while rotating —
  atoms freeze onto the seed in perfect lattice order. Result: a **monocrystalline
  ingot up to ~2 m long, 300 mm across, weighing ~265+ kg** (modern pulls up to
  several hundred kg). [8]
- **Step 4 — wafers**: diamond-wire saw slices the ingot into **300 mm (12-inch)
  wafers ~775 µm thick**, then grind + etch + polish to atomic-level flatness. [8]
- 300 mm has been the standard leading-edge wafer since ~2001; 2.25× the area of
  the old 200 mm (450 mm was attempted and abandoned). <!-- VERIFY: 300mm intro year -->
- Wafer supply is its own oligopoly: ~5 companies (Shin-Etsu, SUMCO, GlobalWafers,
  Siltronic, SK Siltron) control ~90% of the market. <!-- VERIFY: current share split -->

## What a node really is

- **"3nm" and "2nm" are product names, not measurements.** No feature on a
  "3nm" chip measures 3 nm.
- Actual dimensions at TSMC N3: **contacted gate pitch ~45 nm** (tightest ever
  reported by a foundry at intro), **minimum metal pitch ~23 nm**. [9][10]
- For scale: a silicon lattice constant is 0.543 nm — the "3nm" node's smallest
  real pitch (~23 nm) is still ~42 atomic lattice units wide. (computed)
- **How the naming broke**: node names tracked real gate length until roughly the
  late 1990s (~350–180 nm era). After that, features stopped shrinking in lockstep,
  but marketing kept multiplying by ~0.7× per generation as if they had —
  "equivalent scaling." By FinFET era the number was pure branding.
  <!-- VERIFY: exact era when gate length decoupled from node name; often quoted as ~0.35µm or ~45nm depending on the metric -->
- **What actually improves: PPA** — power, performance, area:
  - Peak logic density: TSMC N5 ~**138 MTr/mm²**; N3E up to ~**215 MTr/mm²**
    (densest library). [11][9]
  - N2 vs N3E: **+15% density** (mixed logic/SRAM designs) to **+20%** (pure
    logic); **10–15% faster at same power** or **25–30% less power at same
    speed**. [12]
  - Hedge (direction of the lie): peak density numbers are the *densest possible
    library*; real chips average far lower — H100 works out to ~98 MTr/mm² on a
    5nm-class node. (computed from [2])
- Next names go sub-nm as "angstrom era": Intel 18A (≈1.8nm-class), TSMC A16/A14
  — same marketing convention, new unit.

## Moore's Law & the two exponentials

- **1965**: Gordon Moore ("Cramming more components onto integrated circuits,"
  Electronics): components per chip doubling **every year**, predicted through
  1975. **1975 revision**: doubling **every two years**. Note for honesty: it was
  always an *economic* observation — the number of transistors at the *minimum
  cost per transistor*. [13]
- **Density: still improving** (N5→N3→N2 above), but slower and via new tricks
  (GAA, backside power, chiplets/3D packaging) rather than pure shrink.
- **Cost per transistor: contested — present both sides.**
  - Bear case: analyses (Handel Jones/IBS; widely echoed) say cost per transistor
    **stopped falling at 28nm (~2012)** and is flat-to-rising at leading edge as
    wafer costs outrun density gains. [14]
  - Bull case: TSMC and (historically) Intel claimed cost per transistor kept
    falling at FinFET nodes; designers keep migrating, which is revealed-preference
    evidence the *system-level* economics still work (more perf/watt/$ even if
    $/transistor is flat). [14] <!-- VERIFY: find a current (2025–26) authoritative pro-scaling cost source before recording this side -->
- **Dennard scaling** (1974, Robert Dennard): shrink a transistor and its power
  density stays constant — smaller = faster *and* cooler, for free. **Broke down
  ~2005–2007** when leakage current stopped scaling; power density began rising
  with shrink. [15][16]
  - Consequence: **clock speeds froze** — consumer CPUs hit ~3.8 GHz (Pentium 4,
    2004) and 20 years later sustained clocks sit ~4–6 GHz, not 400 GHz. [16]
  - The industry's answer: **parallelism** — multicore CPUs, then GPUs (thousands
    of slow-ish cores). The entire AI-hardware era is downstream of Dennard's
    death. [16]
- **Moore's second law / Rock's law**: the cost of a leading-edge **fab doubles
  roughly every four years**. [17]
- **THE central graph — cost of a leading-edge fab**:
  - Early 1970s: ~**$4M** (~$31M in 2024 dollars). [18]
  - Mid-1980s: ~**$100M**. <!-- VERIFY: order-of-magnitude widely cited; pin a source -->
  - Mid-1990s: ~**$1B** — the first "billion-dollar fab" headlines. <!-- VERIFY: e.g. Fujitsu/Intel fabs ~1995–97 -->
  - ~2015: ~**$14B** for the most advanced fabs. [19]
  - 2020s: **$10–20B+ per fab** [18]; Samsung Taylor, TX projected ~**$25B** [18];
    TSMC Arizona: ~**$65B for the first three fabs**, part of a stated
    **$165B total US investment**. <!-- VERIFY: TSMC AZ figures per March 2025 announcement + later updates -->
  - Single tool at the extreme: one High-NA EUV scanner ≈ **$400M** (see asml.md).
  - Punchline: fab cost up ~**5,000×** since the early 1970s — the exponential
    that *consolidates* the industry while Moore's exponential *spreads* computing.

## Device ladder (planar → FinFET → GAA → CFET)

- **Planar (1960s–2011)**: gate sits flat on top of the channel — controls it
  from **one side**. Below ~30nm-class, the gate loses grip: current leaks
  underneath even when "off" (short-channel effects).
- **FinFET (Intel, announced May 2011 at 22nm; shipped in Ivy Bridge 2012)**:
  stand the channel up as a **fin**; the gate wraps **three sides**. Better grip
  → less leakage, lower voltage. Intel claimed ~half the power at the same
  performance vs 32nm planar. [20]
- **GAA / nanosheet (2022–2025)**: slice the fin into stacked horizontal
  **nanosheets**; the gate wraps **all four sides** — maximum electrostatic
  control, and you can tune drive strength by sheet width.
  - First to production: **Samsung 3nm "MBCFET", June 2022**. [21]
  - **TSMC N2**: first TSMC GAA node, **volume production Q4 2025**. [12][22]
  - **Intel 18A "RibbonFET" + PowerVia** (backside power delivery): first
    high-volume product Panther Lake, launched late 2025 / broad availability
    2026. [23]
- **CFET (2030s)**: stack the n-type transistor *on top of* the p-type — a full
  CMOS pair in the footprint of one device (~doubles density again). imec
  roadmap: production candidate around the **A7 node, ~2032–2033**. [24][25]
- One-line why for the whole ladder: every step wraps the gate around more of the
  channel (1 side → 3 → 4 → stacked) because at these sizes electrons leak
  through anything the gate doesn't police.

## The process flow — the core mental model

- A leading-edge logic wafer goes through **~500–1,000+ process steps over ~3–4
  months**, built as **~80–120 iterations of the same loop**. [26]
- **The loop** (Flow Strip): *deposit* a film → *coat* with photoresist →
  *expose* (lithography prints the layer's pattern) → *develop* → *etch* the
  pattern into the film → *strip* resist → (front-end layers:) *implant* dopants
  + *anneal* → *polish flat* (CMP) → *measure/inspect* → repeat.
- **Mask layers**: TSMC N7 ≈ **87 masks**; N5 ≈ **81 masks** — and without EUV,
  N5 would have needed ~**115** (EUV's single-exposure replacing multi-patterning
  is the whole point). N5 uses EUV on up to ~14 layers. [27]
- Cycle-time rule of thumb: fabs average **1–1.5 days per mask layer** — that's
  where the ~3 months comes from; most of a wafer's life is spent queueing. [28]
- **FEOL vs BEOL**:
  - **FEOL** (front end of line): build the transistors themselves in the
    silicon — the "buildings."
  - **BEOL** (back end of line): **15+ layers of copper interconnect** stacked
    above — "city streets above the buildings," from nm-scale local wires up to
    fat power rails. <!-- VERIFY: exact metal-layer count per node; N5-class ~15 commonly cited -->
  - Teachable: nothing moves between any two transistors except via this wiring
    stack; a modern chip has tens of km of wire. <!-- VERIFY: km-of-wire figure -->
- Nobody "assembles" a chip — all billions of transistors are printed
  *simultaneously*, layer by layer, like a 3D screen-print at atomic resolution.

## Yield & cleanrooms

- **Yield model**: die yield ≈ e^(−A·D₀) (Poisson) — A = die area, **D₀ = defect
  density** (killer defects/cm²). Yield falls *exponentially* with die size:
  big AI dies are brutally exposed. [29]
- **D₀ ≈ 0.1/cm² ≈ ~90% yield** on a typical mobile-sized die = "mature node."
  [29]
- TSMC disclosed **N2 defect density lower than N3/N5/N7 at the same stage of
  development** — pre-production D₀ discipline is the moat in numbers form. [30]
- **Why dust kills**: a killer particle only needs to be a fraction of the
  feature size — at ~20nm pitches, a 100nm particle (1/1000th a hair's width)
  shorts wires or blocks an exposure → that die is dead.
- **Cleanroom classes**: ISO 1 = **≤10 particles ≥0.1µm per m³**. Urban outdoor
  air ≈ **35,000,000 particles ≥0.5µm per m³** (≈ ISO 9). Fab production bays run
  ~ISO 3–5 with ISO 1–2 mini-environments around the wafers (FOUPs). Hospital
  operating rooms are typically only ~ISO 6–7 — the air around a wafer is
  thousands of times cleaner than a surgical theater. [31]
  <!-- VERIFY: OR ISO class range + fab bay class ranges before quoting a specific multiplier -->
- **Yield learning = profit**: a new node launches at low yield and climbs; the
  faster the D₀ ramp, the more of the fixed $20B+ fab cost turns into sellable
  dies. TSMC's advantage compounds because every wafer teaches the process.

## The consolidation funnel — the graph that animates the course

- Companies with leading-edge logic manufacturing, by node (counts vary by
  source; direction is undisputed): <!-- VERIFY: exact counts differ between IBS/BCG/McKinsey charts; lock one chart for the slide -->
  - 130nm (~2001–02): ~**25–26** players (Motorola, Fujitsu, Sony, IBM, TI…). [32]
  - 90nm (~2003): ~**17**. [33]
  - 65nm (~2005): ~**14**. [33]
  - 45nm (~2007): ~**12**. [33]
  - 32nm (~2009): ~**9**. [33]
  - 22nm (~2012): ~**6**. [33]
  - 14nm (~2015): ~**4** (TSMC, Samsung, Intel, GlobalFoundries). [33]
  - 10nm (~2017): **3** — GlobalFoundries quits 7nm in 2018. [33]
  - 7nm/5nm (2018–2020): **3** (TSMC, Samsung, Intel — Intel late). [33][34]
  - 3nm/2nm (2022–2026): still **3**, with TSMC holding the overwhelming share
    of leading-edge foundry volume. [34]
  - Asterisk: **SMIC** ships 7nm-class chips without EUV (multi-patterned DUV) —
    capability under sanctions, but at yield/cost penalties. <!-- VERIFY: current SMIC node status 2026 -->
- Cause = Rock's law: each node's fab + R&D bill eliminates everyone who can't
  amortize it over massive volume. The funnel is the fab-cost graph inverted.

## The great unbundling (Morris Chang, 1987)

- **The cost logic**: by the mid-1980s a competitive fab already cost hundreds of
  millions and was doubling every ~4 years (Rock's law) — chip *design* talent
  was plentiful, but fab *capital* was becoming prohibitive. Chang's insight:
  split them. Let designers design ("fabless") and one specialist manufacture
  for everyone (the "pure-play foundry"). [35][36]
- **The trust mechanic**: TSMC would **never design or sell its own chips** —
  refusing to compete with customers wasn't a sacrifice, it was the product.
  Every fabless company could hand TSMC its crown jewels. [35][36]
- **The founding deal (1987)**: Chang, 56, recruited by Taiwan's government after
  a career at Texas Instruments; capitalized by Taiwan's National Development
  Fund (**~48%**) + Philips (**~28%**, plus technology licenses) + private
  investors. The fabless explosion it enabled (Nvidia 1993, Qualcomm's rise,
  Apple silicon…) is the modern industry's org chart. [35][36]

## Industry aggregates (the scoreboard backdrop)

- **2025 actual: $791.7B global semiconductor sales, +25.6% YoY** (2024:
  $630.5B). [37]
- **2026 forecast (WSTS Spring 2026, May 2026): ~$1.51T, +90%** — driven by a
  **memory supercycle**: memory forecast >**$800B in 2026 (+~250% YoY)** on
  AI/HBM demand and extreme DRAM/NAND pricing. WSTS's November 2025 forecast had
  said $975B; the Spring revision is price-led. [38][39]
  - Hedge for narration: the 2026 dollar figure is mostly memory *price*
    inflation, not unit growth — quote it with that caveat.
- **2027 (WSTS): ~$1.9T, +27%.** [38]
- The old "**$1T by 2030**" milestone (SIA/McKinsey, ~2022 vintage) was blown
  through ~4 years early — on prices, not just volume. <!-- VERIFY: framing; McKinsey 2022 "$1T by 2030" report is the canonical cite -->
- Momentum check: Q1 2026 sales up **25% QoQ** — unprecedented for a
  seasonally-weak quarter. [40]
- **Equipment/capex**: total semi equipment sales forecast **record $139B in
  2026**; 300mm fab equipment spending **$133B in 2026 → $151B in 2027**;
  industry-wide capex (equipment + construction) runs roughly **$160–200B+/yr**.
  [41][42] <!-- VERIFY: total-capex figure; SEMI numbers cover equipment only -->
- **Units: >1 trillion chips/year** — record 1.15 trillion units shipped in 2021;
  unit volumes have stayed around the ~1T/yr mark since. [43]
  <!-- VERIFY: latest 2025 unit count -->
- **Transistor production**: 2014 output ≈ 250 quintillion (250×10¹⁸) transistors
  — **~8 trillion per second**, ~25× the stars in the Milky Way *every second*;
  estimates now exceed ~20 trillion/second. [44]
  <!-- VERIFY: the >20T/sec updated figure — weaker sourcing than the 2014 IEEE number -->
- **AI capex backdrop**: big-five hyperscalers (Amazon, Microsoft, Google, Meta,
  Oracle) 2026 capex forecast **>$600B, +~36% YoY**; post-Q1-2026-earnings
  estimates run **~$690–725B**. Semiconductors are the single biggest line item.
  [45][46]

## Wafer prices

- All figures are analyst estimates — TSMC never publishes prices. Hedge every use.
- **Leading edge**: N3 (3nm-class) ≈ **$18,000–20,000** per 300mm wafer [47];
  N2 (2nm-class) reportedly ≈ **$30,000** [48]; A16 (1.6nm-class) rumored up to
  **$45,000**. [49]
- **Mature**: 28nm ≈ **$2,500–3,000** per wafer — same sand, ~10× price gap to
  the leading edge. [50]
- Trend: ~**3× increase in leading-edge wafer price in 10 years** ($5k-class 16nm
  → $18k 3nm). [47]
- Handle: a 300mm wafer weighs ~125 g → a $30k N2 wafer ≈ **$240/gram — roughly
  double the price of gold by weight**. (computed) <!-- VERIFY: gold ~$110–160/g range in 2026 before using -->

## Fact ammo — lines that land

- Humanity manufactures ~**8+ trillion transistors every second** — more than
  25× the number of stars in the Milky Way, per second; more transistors are now
  made *each second* than in the entire year of 1980. [44] <!-- VERIFY: the 1980 comparison line's source (Qualman) -->
- The Intel 4004 had **2,300 transistors**; Nvidia's 2026 Rubin has a reported
  **336 billion** — a ~146-million-fold increase in one human lifetime. [1][4]
- **Nothing on a "3nm" chip measures 3 nanometers** — the smallest real wire
  pitch is ~23 nm. The node name is a brand, like a perfume called "Midnight."
  [9][10]
- Semiconductor-grade silicon is **99.999999999% pure (11N)** — one wrong atom
  per hundred billion, refined from ordinary quartz. [7]
- A leading-edge fab cost **~$4M in the early 1970s; today $20B+** — the machine
  that makes the cheapest objects ever manufactured is the most expensive
  factory ever built. [18]
- The air in a fab's wafer environment (ISO 1–3) is **millions of times cleaner
  than city air** (≤10 vs ~35,000,000 particles/m³) — cleaner than any operating
  room on Earth. [31]
- One 2nm wafer sells for ~**$30,000 — about twice its weight in gold** — and
  three months earlier it was melted sand. [48] (gold comparison computed —
  verify spot price)

---

## Sources

1. Intel, "The Story of the Intel 4004" — https://www.intel.com/content/www/us/en/history/museum-story-of-intel-4004.html
2. Nvidia, H100 Tensor Core GPU (80B transistors, TSMC 4N) — https://www.nvidia.com/en-us/data-center/h100/
3. Nvidia newsroom, Blackwell platform launch (208B transistors) — https://nvidianews.nvidia.com/news/nvidia-blackwell-platform-arrives-to-power-a-new-era-of-computing
4. Tech-Insider, "NVIDIA Rubin GPU: 336B transistors" (GTC 2026 coverage) — https://tech-insider.org/nvidia-gtc-2026-rubin-gpu-analysis/
5. Tom's Hardware, Cerebras WSE-3 launch (4T transistors, 46,225 mm²) — https://www.tomshardware.com/tech-industry/artificial-intelligence/cerebras-launches-900000-core-125-petaflops-wafer-scale-processor-for-ai-theoretically-equivalent-to-about-62-nvidia-h100-gpus
6. Rapidus, "What Are the Raw Materials of Semiconductors?" (11N standard) — https://www.rapidus.inc/en/tech/te0015/
7. Bernreuter Research, "A silicon purity of 12N only exists in the world of marketers" — https://www.bernreuter.com/newsroom/polysilicon-news/article/a-silicon-purity-of-12n-only-exists-in-the-world-of-marketers/
8. Wikipedia, Monocrystalline silicon (CZ process, ingot dimensions, wafer thickness) — https://en.wikipedia.org/wiki/Monocrystalline_silicon
9. WikiChip Fuse, "TSMC N3, And Challenges Ahead" (45nm CPP / 23nm MMP) — https://fuse.wikichip.org/news/7375/tsmc-n3-and-challenges-ahead/
10. TechInsights, "TSMC Reveals 3nm Process Details" — https://www.techinsights.com/blog/tsmc-reveals-3nm-process-details
11. Angstronomics, "The TRUTH of TSMC 5nm" (N5 138 MTr/mm², library densities) — https://www.angstronomics.com/p/the-truth-of-tsmc-5nm
12. TSMC, 2nm Technology page (Q4-2025 production, N2 vs N3E PPA) — https://www.tsmc.com/english/dedicatedFoundry/technology/logic/l_2nm
13. Wikipedia, Moore's law (1965 paper, 1975 revision) — https://en.wikipedia.org/wiki/Moore%27s_law
14. Tom's Hardware, "Chips aren't getting cheaper — cost per transistor stopped dropping a decade ago at 28nm" — https://www.tomshardware.com/tech-industry/manufacturing/chips-arent-getting-cheaper-the-cost-per-transistor-stopped-dropping-a-decade-ago-at-28nm
15. Wikipedia, Dennard scaling (1974 paper, ~2005–07 breakdown) — https://en.wikipedia.org/wiki/Dennard_scaling
16. The Next Platform, "Dennard Scaling Demise Puts Permanent Dent in Supercomputing" — https://www.nextplatform.com/2019/06/18/dennard-scaling-demise-puts-permanent-dent-in-supercomputing/
17. Wikipedia, Moore's second law / Rock's law — https://en.wikipedia.org/wiki/Moore%27s_second_law
18. Construction Physics, "How to Build a $20 Billion Semiconductor Fab" ($4M 1970s fab, modern $10–20B, Samsung Taylor $25B) — https://www.construction-physics.com/p/how-to-build-a-20-billion-semiconductor
19. ICLE, "From Moore's Law to Market Rivalry" (~$14B by 2015; capex 30–50% of revenue) — https://laweconcenter.org/resources/from-moores-law-to-market-rivalry-the-economic-forces-that-shape-the-semiconductor-manufacturing-industry/
20. Intel press release, "Intel Reinvents Transistors Using New 3-D Structure" (May 2011 tri-gate, 22nm, Ivy Bridge) — https://www.intc.com/news-events/press-releases/detail/655/intel-reinvents-transistors-using-new-3-d-structure
21. Samsung newsroom, "Samsung Begins Chip Production Using 3nm Process With GAA Architecture" (June 2022) — https://news.samsung.com/global/samsung-begins-chip-production-using-3nm-process-technology-with-gaa-architecture
22. TechSpot, "TSMC's 2nm N2 process officially enters volume production" — https://www.techspot.com/news/110755-tsmc-2nm-n2-process-officially-enters-volume-production.html
23. Intel newsroom, "Intel Unveils Panther Lake Architecture: First AI PC Platform Built on 18A" (RibbonFET + PowerVia) — https://newsroom.intel.com/client-computing/intel-unveils-panther-lake-architecture-first-ai-pc-platform-built-on-18a
24. IEEE Spectrum, "Imec Semiconductor Technology Roadmap: CFETs in 2033" — https://spectrum.ieee.org/semiconductor-technology-roadmap
25. Tom's Hardware, "Imec's 2026 roadmap… CFET transistors become viable at 0.7nm" — https://www.tomshardware.com/tech-industry/semiconductors/imecs-2026-roadmap-details-0-3nm-nodes-by-2038-cfet-transistors-become-viable-at-0-7nm-company-redefines-moores-law-as-cell-sizes-gain-importance-for-density
26. SemiconductorX, "Semiconductor Manufacturing Flow Steps: Layer-Build Loop" (500–1,000 steps, ~90 mask layers, 80–120 loop passes, 3–4 months) — https://semiconductorx.com/semiconductor-manufacturing-steps.php
27. WikiChip Fuse, "TSMC Details 5 nm" (N7 ~87 masks; N5 ~81 vs 115 without EUV; ~14 EUV layers) — https://fuse.wikichip.org/news/3398/tsmc-details-5-nm/
28. Semiconductor Engineering, "Battling Fab Cycle Times" (1–1.5 days per mask layer) — https://semiengineering.com/battling-fab-cycle-times/
29. Vik's Newsletter, "How Foundries Calculate Die Yield" (Poisson model, D₀ 0.1 ≈ 90%) — https://www.viksnewsletter.com/p/how-foundries-calculate-die-yield
30. Tom's Hardware, "TSMC discloses N2 defect density — lower than N3 at the same stage" — https://www.tomshardware.com/tech-industry/tsmc-discloses-n2-defect-density-lower-than-n3-at-the-same-stage-of-development
31. Wikipedia, Cleanroom (ISO 14644-1 particle counts; urban air ~35M/m³) — https://en.wikipedia.org/wiki/Cleanroom
32. Semiconductor Engineering, "Foundry Wars Begin" (~26 players at 130nm) — https://semiengineering.com/foundry-wars-begin/
33. Jason Sachs / Embedded Related, "Supply Chain Games, Part 3" (leading-edge player counts 90nm→7nm) — https://www.embeddedrelated.com/showarticle/1489.php
34. Semiconductor Engineering, "5nm Vs. 3nm" (only TSMC/Samsung foundries at 7/5nm) — https://semiengineering.com/5nm-vs-3nm/
35. IEEE Spectrum, "Morris Chang: Foundry Father" — https://spectrum.ieee.org/morris-chang-foundry-father
36. Quartr, "The Silicon Empire: TSMC's Revolution and Morris Chang's Legacy" (NDF 48%, Philips ~28%) — https://quartr.com/insights/edge/the-silicon-empire-tsmcs-revolution-and-morris-changs-legacy
37. SIA, "Global Annual Semiconductor Sales Increase 25.6% to $791.7 Billion in 2025" — https://www.semiconductors.org/global-annual-semiconductor-sales-increase-25-6-to-791-7-billion-in-2025/
38. WSTS, Spring 2026 forecast release ("$1.51T in 2026; memory >$800B; 2027 ~$1.9T") — https://www.wsts.org/76/Recent-News-Release
39. WSTS, November 2025 forecast (2026 at $975B, pre-revision) — https://www.wsts.org/esraCMS/extension/media/f/WST/7310/WSTS_FC-Release-2025_11.pdf
40. SIA, "Global Semiconductor Sales Increase 25% from Q4 2025 to Q1 2026" — https://www.semiconductors.org/global-semiconductor-sales-increase-25-from-q4-2025-to-q1-2026/
41. SEMI, "Global Total Semiconductor Equipment Sales Forecast to Reach a Record $139 Billion in 2026" — https://www.semi.org/en/semi-press-release/global-total-semiconductor-equipment-sales-forecast-to-reach-a-record-of-dollar-139-billion-in-2026-semi-reports
42. SEMI, "SEMI Projects Double-Digit Growth in Global 300mm Fab Equipment Spending for 2026 and 2027" ($133B/$151B) — https://www.semi.org/en/semi-press-release/semi-projects-double-digit-growth-in-global-300mm-fab-equipment-spending-for-2026-and-2027
43. SIA, "Global Semiconductor Sales, Units Shipped Reach All-Time Highs in 2021" (1.15T units) — https://www.semiconductors.org/global-semiconductor-sales-units-shipped-reach-all-time-highs-in-2021-as-industry-ramps-up-production-amid-shortage/
44. IEEE Spectrum, "Transistor Production Has Reached Astronomical Scales" (Hutcheson, 2015: 250×10¹⁸/yr, 8T/sec) — https://spectrum.ieee.org/transistor-production-has-reached-astronomical-scales
45. IEEE ComSoc Technology Blog, "Hyperscaler capex > $600 bn in 2026, a 36% increase over 2025" — https://techblog.comsoc.org/2025/12/22/hyperscaler-capex-600-bn-in-2026-a-36-increase-over-2025-while-global-spending-on-cloud-infrastructure-services-skyrockets/
46. Futurum, "AI Capex 2026: The $690B Infrastructure Sprint" — https://futurumgroup.com/insights/ai-capex-2026-the-690b-infrastructure-sprint/
47. Tom's Hardware, "TSMC's wafer pricing now $18,000 for a 3nm wafer, increased over 3X in 10 years" — https://www.tomshardware.com/tech-industry/tsmcs-wafer-pricing-now-usd18-000-for-a-3nm-wafer-increased-by-over-3x-in-10-years-analyst
48. Tom's Hardware, "TSMC's 2nm process will reportedly get another price hike — $30,000 per wafer" — https://www.tomshardware.com/tech-industry/tsmcs-2nm-will-reportedly-receive-a-price-hike-once-again-usd30-000-per-wafer
49. Tom's Hardware, "TSMC could charge up to $45,000 for 1.6nm wafers" — https://www.tomshardware.com/tech-industry/semiconductors/tsmc-could-charge-up-to-usd45-000-for-1-6nm-wafers-rumors-allege-a-50-percent-increase-in-pricing-over-prior-gen-wafers
50. Silicon Analysts, "Wafer Pricing by Process Node (2026)" ($3,000 at 28nm to $20,000+ at 3nm) — https://siliconanalysts.com/data/wafer-pricing
