---
layout: section
---

<!-- SEGMENT
id: nvidia
act: II — The Blueprint
tier: P
angle: "Nvidia's product isn't a chip — it's a file plus a twenty-year software moat. The most valuable company on Earth owns no factories, and that one fact is the reason the rest of this journey exists."   # YOU OWN THIS LINE — rewrite it in your voice
runtime: ~7 min
status: draft
seeds: [memory-wall, reticle-limit, owns-no-factories]
pays_off: []
stamps: []
diagrams: [map-design, journey-2]
sources: research/nvidia.md
-->


# Nvidia designs the accelerator

<div class="text-xl opacity-70 mt-2">Chip architecture and software · Santa Clara, California</div>

<div class="grid grid-cols-2 gap-8 mt-8 items-center">
<div>

![industry map — DESIGN region lit](/diagrams/rendered/map-design.svg)

</div>
<div class="text-lg opacity-80 leading-relaxed">
Nvidia produces the chip design and software.<br>
Manufacturing comes later.
</div>
</div>

![journey bar — DESIGN active](/diagrams/rendered/journey-2.svg)

<!--
BEATS:
- Pick up the cliffhanger from the last segment: "our chip starts as a file — in Santa Clara." Light the DESIGN region on the map; point at the journey bar — we are at step 2 of 6.
- Frame the segment: this is NOT a company profile. It's the first gate on the chip's journey — what it takes to design THE chip. The company happens to be the most valuable on Earth.
- Drop the scale hook fast, then move on — the story here is the design, not the stock.
FACT AMMO:
- ~$5.1T market cap as of July 2026 — first company ever to $4T (Jul 2025), first to $5T three months later (Oct 2025). Handle: it took 30 years to reach $1T, then three MONTHS to add the fourth-to-fifth trillion. [research/nvidia §what-they-are]
- Q1 FY27 revenue: $81.6B in a single quarter — more than Nvidia's entire fiscal-2024 YEAR. [research/nvidia §financials] [VERIFY: FY24 total $60.9B, from memory]
LINE THAT LANDS:
- "Everything you're about to see — the island, the machines, the memory war — exists because of a file written in Santa Clara."
-->

---

# CPU vs GPU

<div class="grid grid-cols-2 gap-8 mt-8">
<div class="border-2 border-gray-400 rounded-lg p-6 text-center">
<div class="text-6xl font-bold">~64–128</div>
<div class="opacity-70 mt-2">powerful cores</div>
<div class="text-sm opacity-60 mt-4">optimized for low-latency serial and branch-heavy work</div>
</div>
<div class="border-2 border-green-500 rounded-lg p-6 text-center">
<div class="text-6xl font-bold">20,480</div>
<div class="opacity-70 mt-2">simple cores</div>
<div class="text-sm opacity-60 mt-4">optimized for high-throughput parallel operations</div>
</div>
</div>

<div class="text-center text-lg opacity-70 mt-8">
Neural-network workloads rely heavily on matrix multiplication, which GPUs divide across many cores.
</div>

<!--
BEATS:
- Teach it plainly, once, and it serves the whole course. CPU: a few dozen powerful cores doing one thing after another — great at branching logic, running the OS. GPU: thousands of simple cores doing the SAME operation on different data simultaneously.
- The analogy: a CPU is a few Nobel laureates; a GPU is 20,000 schoolkids each doing one multiplication. For painting 8 million pixels — or multiplying giant matrices — the schoolkids win every time.
- Close the loop to AI: every layer of a neural network is a grid of numbers multiplied by a grid of weights. Graphics was matrix math on pixels; AI is matrix math on everything. The gaming chip was accidentally the AI chip.
FACT AMMO:
- Server CPUs: ~64–128 cores. The B300 GPU: 20,480 CUDA cores. [research/nvidia §the-tech]
- Since 2017 Nvidia packs dedicated Tensor Cores (matrix-multiply units) — modern data-center "GPUs" are really matrix engines with a GPU heritage. [research/nvidia §the-tech]
- Simplification hedge: a "CUDA core" is far simpler than a CPU core — compare chips by throughput, not core count. Direction of the lie: the core-count contrast overstates the gap. [research/nvidia §the-tech]
LINE THAT LANDS:
- "Graphics was matrix math on pixels. AI is matrix math on everything."
-->

---

# GB300 Blackwell Ultra by the numbers

<div class="grid grid-cols-3 gap-6 mt-8 text-center">
<div>
<div class="text-5xl font-bold">208 B</div>
<div class="opacity-70 mt-2">transistors, two dies</div>
</div>
<div>
<div class="text-5xl font-bold">~858 mm²</div>
<div class="opacity-70 mt-2">per die — the reticle limit</div>
</div>
<div>
<div class="text-5xl font-bold">1,400 W</div>
<div class="opacity-70 mt-2">per GPU, liquid-cooled</div>
</div>
</div>

<div class="grid grid-cols-2 gap-6 mt-10">
<div class="border-2 border-amber-500 rounded-lg p-4 text-center">
<div class="font-bold">Each compute die approaches the reticle limit.</div>
<div class="text-sm opacity-60 mt-1">The package joins two compute dies.</div>
</div>
<div class="border-2 border-amber-500 rounded-lg p-4 text-center">
<div class="font-bold">288 GB of memory at 8 TB/s.</div>
<div class="text-sm opacity-60 mt-1">Eight HBM3E stacks keep the cores supplied with data.</div>
</div>
</div>

<!--
BEATS:
- This is the object from the cold open, now as a design spec. Walk the anatomy: two giant dies stitched into one package, flanked by memory stacks.
- SEED — reticle limit (pays off in `packaging`): each die is built at ~858mm² — the physical maximum a lithography scanner can print in ONE exposure. The die is as big as physics allows. When the design needs more, you can't draw a bigger die — you have to stitch two together and make software see one GPU. Say "hold that thought" — we come back to this.
- SEED — memory wall (pays off in `memory-hbm`): 20,480 cores are useless if they're starved of data. 288GB of special stacked memory at 8 TB/s sits welded next to the dies. Feeding tens of thousands of cores is a BANDWIDTH problem, not a compute problem. Say "hold that thought" — this one starts a war later.
FACT AMMO:
- 208 billion transistors across two dies (104B each) — roughly one transistor for every star in the Milky Way, on a slab the size of a coaster. [research/nvidia §the-one-chip]
- Dies joined by a 10 TB/s die-to-die link (NV-HBI) so software sees one GPU; predecessor Hopper was 814mm² single-die; Nvidia doesn't publish exact B300 die size. [research/nvidia §the-one-chip]
- 288 GB HBM3E in 8 stacks, 8 TB/s bandwidth. Handle: a stadium of 20,480 schoolkids all needing new worksheets handed out every second. [research/nvidia §the-one-chip]
- 1,400W per GPU — a hairdryer running flat out; a full 72-GPU rack draws ~132–140kW ≈ the average power draw of ~110 US homes. [research/nvidia §the-one-chip]
- Process: TSMC 4NP, a custom 5nm-class node — NOT TSMC's newest. Nvidia trades density for yield on giant dies (callback to the yield seed from foundations). [research/nvidia §the-one-chip]
LINE THAT LANDS:
- "When your chip hits the edge of what physics can print, your problems stop being design problems."
-->

---

# CUDA's 20-year software ecosystem

<div class="grid grid-cols-4 gap-4 mt-10 text-center">
<div>
<div class="text-3xl font-bold">2006</div>
<div class="text-sm opacity-60 mt-1">CUDA launches for general-purpose GPU computing</div>
</div>
<div>
<div class="text-3xl font-bold">2012</div>
<div class="text-sm opacity-60 mt-1">AlexNet — trained on two consumer gaming cards</div>
</div>
<div>
<div class="text-3xl font-bold">2016</div>
<div class="text-sm opacity-60 mt-1">Huang hand-delivers the first DGX-1 to OpenAI</div>
</div>
<div>
<div class="text-3xl font-bold">2022</div>
<div class="text-sm opacity-60 mt-1">ChatGPT drives a surge in AI-compute demand</div>
</div>
</div>

<div class="text-center mt-12">
<div class="text-6xl font-bold">4M+</div>
<div class="opacity-70 mt-2">registered CUDA developers · ~20 years of libraries</div>
</div>

<!--
BEATS:
- Pose it: AMD can design a huge matrix-math chip too. So why does everyone buy Nvidia?
- Tell the bet: in 2006 Huang started spending billions making every gaming GPU double as a general-purpose computer — CUDA — betting scientists would find uses. Wall Street saw wasted die area; the stock went nowhere for years.
- The accident pays off: 2012, Hinton's Toronto lab trains AlexNet on two consumer GeForce GTX 580s and blows away the ImageNet benchmark. Deep learning = matrix math = exactly what GPUs do. Nvidia pivots hard — Huang hand-delivers the first DGX-1 supercomputer to OpenAI in 2016. Then ChatGPT.
- Land the moat: twenty years later, ~every AI framework targets CUDA. Competitors don't have to clone a chip — they have to clone an ECOSYSTEM: 4M+ developers, two decades of libraries, tooling, StackOverflow answers.
FACT AMMO:
- CUDA launched 2006; 4M+ registered developers. [research/nvidia §the-moat] [VERIFY: some Nvidia materials say "6M developers" — pick one figure]
- AlexNet trained on two consumer GeForce GTX 580s — gaming cards. [research/nvidia §history]
- Handle for the ecosystem: the chip is clonable in years; the 20-year pile of software on top is the part with no shortcut.
- Data center went from ~$15B (FY2023) to $193.7B (FY2026) — gaming, once the whole company, is now ~7% of revenue. [research/nvidia §history, §financials] [VERIFY: FY23 DC $15.0B, from memory]
LINE THAT LANDS:
- "Nvidia's competitors are trying to clone a chip. The moat is that they'd have to clone twenty years of software."
-->

---

# Nvidia's gross margin is about 75%

<div class="text-center mt-10">
<div class="text-8xl font-bold">~75%</div>
<div class="opacity-70 mt-3">gross margin</div>
</div>

<div class="text-center text-lg opacity-70 mt-10">
Typical chipmakers report roughly 40–50%.<br>
CUDA switching costs, market share, and high-value systems support Nvidia's margin.
</div>

<!--
BEATS:
- Pose the mystery like a puzzle, and let it hang: for every $100 of AI chips sold, ~$75 is gross profit. Hardware companies do not get margins like this. Software companies do.
- Answer it in three stacked reasons: (1) no real competitor at the frontier — ~90% of the AI-accelerator market; (2) CUDA switching costs — the customer isn't buying a chip, they're buying into the only mature ecosystem; (3) they don't sell a chip at all — they sell the whole AI factory: GPU + the networking that lashes thousands of GPUs into one computer + the software. You can't comparison-shop a factory.
- Punchline: Nvidia has hardware-company revenue with software-company margins — because the thing being sold IS mostly software and scarcity.
FACT AMMO:
- GAAP gross margin 74.9% (Q1 FY27); FY2026 GAAP net income $120.1B on $215.9B revenue — a ~56% NET margin. [research/nvidia §financials]
- Simplification hedge: FY2026 full-year GAAP gross margin was 71.1%, depressed by China write-down charges — "~75%" is the current run rate, not the trough. [research/nvidia §financials]
- ~90% of AI accelerators by revenue (2025 est.); forecasts see 75–85% by end-2026 as custom chips ramp — a falling share of an exploding pie. [research/nvidia §what-they-are, §the-moat]
- Networking alone: $14.8B in Q1 FY27, +199% YoY — a Cisco-sized business hiding inside Nvidia. [research/nvidia §financials] [VERIFY: Cisco quarterly rev ~$14B comparison, from memory]
- Handle: the ~75% margin is the "AI tax" — every company in the boom pays it on the way in. [research/nvidia §fact-ammo]
LINE THAT LANDS:
- "Hardware revenue, software margins. That's the whole magic trick."
-->

---

# Nvidia owns no semiconductor fabs

<div class="text-center mt-10 text-3xl leading-relaxed">
Nvidia designs chips and software,<br>
<span class="text-5xl font-bold">then contracts out manufacturing.</span>
</div>

<div class="grid grid-cols-3 gap-6 mt-10 text-center text-sm opacity-70">
<div>GPU dies<br><b>TSMC</b></div>
<div>HBM<br><b>SK Hynix / Micron / Samsung</b></div>
<div>advanced packaging<br><b>TSMC</b></div>
</div>

<!--
BEATS:
- Drop it flat, no wind-up: the most valuable company on Earth cannot build its own product. No fabs. No memory plants. No packaging lines. Nvidia's product is the design — the file — plus the software.
- The chain in one breath: Nvidia designs → TSMC prints two reticle-limit dies → Korea ships the memory stacks → TSMC glues it all onto an interposer → contract manufacturers build the racks → hyperscalers plug in 130+ kilowatts each.
- SEED — owns no factories (pays off at every act-end Money-Bar toll): every step in that chain is a company Nvidia must pay, and most of them have no substitute. That's the rest of this course: we follow the file through every toll booth.
- Note the dependency cuts both ways: Nvidia pre-books so much capacity ($119B in supply commitments, ~60% of the world's advanced packaging) that everyone ELSE's chip queues for the leftovers.
FACT AMMO:
- Fabless: zero fabs; every data-center chip manufactured by TSMC; memory from SK Hynix/Micron/Samsung; packaging by TSMC. [research/nvidia §what-they-are, §supply-chain]
- $119B of manufacturing/capacity obligations booked; ~60% of global CoWoS advanced-packaging demand. [research/nvidia §financials, §supply-chain]
- Handle: Nvidia's supply chain is the industry's rate limiter — a rival with a great chip still can't get it BUILT at volume. [research/nvidia §the-moat]
LINE THAT LANDS:
- "The most valuable company on Earth is, in a literal sense, a design bureau with the world's best supply contracts."
-->

---

# Nvidia: financials and market position

<div class="border-2 border-gray-400 rounded-lg p-4 mt-6">
  <div class="grid grid-cols-5 gap-4 text-center">
    <div><div class="text-3xl font-bold">$215.9 B</div><div class="text-sm opacity-60">revenue FY26</div></div>
    <div><div class="text-3xl font-bold">~75%</div><div class="text-sm opacity-60">gross margin</div></div>
    <div><div class="text-3xl font-bold">~90%</div><div class="text-sm opacity-60">AI-accelerator share</div></div>
<div><div class="text-xl font-bold leading-tight mt-2">CUDA: 20 years of libraries, tools, and developer adoption</div></div>
    <div><div class="text-3xl font-bold">~10 yrs</div><div class="text-sm opacity-60">to replace</div></div>
  </div>
  <div class="text-xs opacity-40 text-right mt-2">as of Q2 2026</div>
</div>

<!--
BEATS:
- First Scoreboard of the course — establish the ritual: every major player gets this exact block, same five boxes, so by the end you can compare the whole board at a glance.
- Walk the boxes left to right, briefly — the segment already proved each one.
- Explain years-to-replace once, carefully (it's the course's original metric): if a state with unlimited money set out to replicate this player, how long? For Nvidia: a competitive chip is a ~3–5 year problem — AMD proves that. The ~20 years of CUDA software and the pre-booked supply chain are the part with no shortcut. Call it ~10 years, and invite the viewer to argue.
FACT AMMO:
- Revenue FY2026 (ended Jan 25, 2026): $215.9B, +65% YoY; data center $193.7B = 90% of it. [research/nvidia §financials]
- Gross margin: 74.9% GAAP in Q1 FY27 (FY26 full-year 71.1%, depressed by China charges). [research/nvidia §financials]
- Share: ~90% of AI accelerators by revenue, 2025 est.; range 75–90% for 2026. [research/nvidia §what-they-are]
- Years-to-replace ~10: proposed from the moat section — chip clonable in years (AMD MI-series exists today), but CUDA = ~20 years of accumulated libraries/tools/developers, plus years of HBM + packaging capacity pre-booked. Defensible, debatable — that's the point. [research/nvidia §the-moat, §competition]
- Honesty note if asked: nobody is close on merchant share, but the MIX is shifting — hyperscaler in-house chips (TPU, Trainium, OpenAI/Broadcom) could take a big slice of inference by 2027 while Nvidia keeps the frontier-training crown. [research/nvidia §competition]
-->

---

# Estimated economics of a GB300-class GPU

<div class="mt-10">
  <div class="flex w-full h-16 rounded overflow-hidden text-sm font-bold text-center">
    <div class="bg-green-600 flex items-center justify-center" style="width:75%">Nvidia gross margin ~75%</div>
<div class="bg-gray-500 flex items-center justify-center" style="width:25%">estimated cost of revenue ~25%</div>
  </div>
  <div class="text-xs opacity-50 mt-2">illustrative only · companywide margin applied to an analyst-estimated ~$50k GPU price</div>
</div>

<div class="text-2xl text-center mt-12 opacity-80">
The next sections trace foundry, memory, packaging, and equipment costs.
</div>

<!--
BEATS:
- Open the Money Bar — the device that runs to the finale: one GB300-class GPU changes hands for roughly $50k on the street. This bar is that price. Today we can only label one slice: Nvidia keeps ~75 cents of every dollar.
- The rest of the bar is the question of the course: the ~25% that Nvidia pays out — to the island that prints the dies, the Koreans who stack the memory, the packager who welds it together, the toolmakers behind all of them. Every act from here ends by labeling another slice.
- Closer — what you now know (15–30s): a GPU is a throughput machine and AI is matrix math, which is why the gaming chip won; the moat is CUDA, not silicon; the margin is software economics on hardware revenue; and Nvidia owns no factories — the design is finished, but the chip does not exist yet.
- Cliffhanger into `eda`: before this file can become 208 billion transistors, someone has to draw them. No human hand can. Two companies — and only two — own the software that designs the designs.
FACT AMMO:
- Rack price: GB300 NVL72 ~$3.7–4.0M (Loop Capital, from Apple's ~$1B/250-rack order); other industry sources $6–6.5M configured. Implied per-GPU street price ~$50k+. [research/nvidia §the-one-chip] [VERIFY: wide estimate range; pick one framing and flag as estimate on screen]
- ~75% gross margin (Q1 FY27 GAAP 74.9%) — the labeled slice. [research/nvidia §financials]
- Honesty flag to voice: all price figures are third-party estimates — Nvidia publishes no list price; the bar is a map, not an invoice.
- Order-book stakes for what's downstream: ~$1 trillion in cumulative Blackwell + Rubin orders through 2027 (Huang, GTC Mar 2026). [research/nvidia §financials]
LINE THAT LANDS:
- "Nvidia keeps 75 cents of every dollar. The next ninety minutes is the fight over the other 25."
-->
