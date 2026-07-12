<!-- SEGMENT
id: packaging
act: V — Memory & The Assembly
tier: P-lite
angle: "For two years the world's most valuable chip existed and still couldn't be bought — and the bottleneck wasn't the wafer, it was the glue. The step the industry offshored in 1963 because it was worthless is now the single gate that decides who gets AI compute."   # YOU OWN THIS LINE — rewrite it in your voice
runtime: ~7 min
status: draft
seeds: []                                   # no new forward seed; hands the completed Board into geopolitics
pays_off: [reticle-limit, yield]            # reticle-limit (from nvidia) cashed; yield chain returns as chiplets (foundations→life-of-a-wafer→kla→intel→HERE)
stamps: [tsmc-cowos]                        # stamp #7 — the Board completes; TSMC's second, different monopoly
diagrams: [map-backend, journey-5, journey-6, board-7]
sources: research/packaging.md
-->

---
layout: section
---

# The Twist

<div class="text-xl opacity-70 mt-2">Act V — Memory & The Assembly · the back end</div>

<div class="grid grid-cols-2 gap-8 mt-8 items-center">
<div>

![industry map — backend region lit](/diagrams/rendered/map-backend.svg)

</div>
<div class="text-2xl leading-relaxed">
For two years<br>
you could not buy a GPU.<br>
<span class="opacity-60 text-lg">And it wasn't for lack of wafers.</span>
</div>
</div>

![journey bar — PACKAGE active](/diagrams/rendered/journey-5.svg)

<!--
BEATS:
- Catch the handoff from memory-hbm: the dies are printed, the memory is stacked and qualified. We are at step 5 of 6 — PACKAGE. Light the backend region on the map.
- Open on the mystery, don't resolve it: through the worst of the AI crunch, TSMC had wafer capacity to spare. The dies existed. So why couldn't anyone get a chip? Say it as a whodunit and let it hang.
- Frame the register: this is the twist of the whole episode. The step everyone assumed was the boring last one — gluing the chip into its case — turned out to be the gate.
FACT AMMO:
- Journey state: PACKAGE (5 of 6) — one step from a finished chip. [research/packaging §what packaging was vs what it is]
LINE THAT LANDS:
- "The wafers were sitting there. The thing you couldn't get was the glue."
-->

---

# The confession

<div class="text-2xl italic leading-relaxed mt-6 text-center">
"It's not the shortage of AI chips.<br>
It's the shortage of our <b>CoWoS</b> capacity."
</div>

<div class="text-center opacity-60 mt-3">— TSMC Chairman Mark Liu, Sept 2023</div>

<div class="grid grid-cols-3 gap-6 mt-10 text-center">
<div>
<div class="text-4xl font-bold">1963</div>
<div class="text-sm opacity-60 mt-2">packaging offshored first — a converted rubber-shoe factory in Kowloon</div>
</div>
<div>
<div class="text-4xl font-bold">the "dumb" step</div>
<div class="text-sm opacity-60 mt-2">glue the die down, wire-bond, encase in epoxy — the industry's low-status bin</div>
</div>
<div>
<div class="text-4xl font-bold">near 7nm</div>
<div class="text-sm opacity-60 mt-2">what a CoWoS packaging wafer reportedly prices at today — like a leading-edge logic wafer</div>
</div>
</div>

<!--
BEATS:
- Resolve the mystery with the quote. The head of the world's most important foundry stood up in Sept 2023 and said the quiet part: the shortage wasn't the chip, it was the packaging slot. Every H100 needed a CoWoS slot; TSMC had wafers to spare and no way to assemble them fast enough. Street version: up to a year's wait, Musk calling GPUs harder to get than drugs — all gated by an acronym nobody outside the industry had heard.
- Now the reframe, in one arc: this was supposed to be the boring last step. Packaging was the "dumb" job — glue the die down, wire-bond gold threads, encase in black epoxy — so the industry shipped it offshore FIRST, chasing cheap labor. Fairchild's 1963 plant was literally a converted rubber-shoe factory in Hong Kong. It created a caste system: front-end fabs = high-tech, high-margin; back-end assembly = labor arbitrage. The OSAT industry was born as the throwaway bin.
- Land the inversion: value climbed back. A CoWoS packaging wafer now reportedly prices near a 7nm logic wafer, and TSMC took the most valuable packaging in-house. The worthless step is now ~8% of TSMC revenue and rising — and it's the gate that decides who gets AI compute.
FACT AMMO:
- Mark Liu, Sept 2023 (SEMICON Taiwan, to Nikkei): "It's not the shortage of AI chips. It's the shortage of our CoWoS capacity." [research/packaging §CoWoS, §fact-ammo]
- Musk, WSJ CEO Council May 2023: GPUs "considerably harder to get than drugs"; H100 lead times ~36–52 weeks through 2023. [research/packaging §CoWoS]
- Fairchild's first SE Asian assembly plant, 1963: a converted rubber-shoe factory in Kowloon, Hong Kong; shipped 120M devices in year one; Penang followed 1971. [research/packaging §what packaging was vs what it is]
- Advanced packaging market ≈ $45B (2024) → $79.4B (2030), Yole, 9.4% CAGR. [research/packaging §what packaging was vs what it is]
- A CoWoS packaging wafer reportedly prices near a 7nm logic wafer; advanced packaging ≈ 8% of TSMC revenue 2025, >10% expected 2026. [research/packaging §what packaging was vs what it is]
LINE THAT LANDS:
- "The most important sentence in the AI boom was a foundry chairman admitting the bottleneck was his gluing line."
- "It started in a shoe factory. It ends up costing as much as the chip."
-->

---

# Why the die had to break apart — reason one: the wall

<div class="grid grid-cols-3 gap-6 mt-8 text-center">
<div>
<div class="text-5xl font-bold">858 mm²</div>
<div class="text-sm opacity-60 mt-2">26 × 33 mm — the biggest die any scanner can print in one shot</div>
</div>
<div>
<div class="text-5xl font-bold">814 mm²</div>
<div class="text-sm opacity-60 mt-2">Nvidia H100 — 95% of the way to the glass</div>
</div>
<div>
<div class="text-5xl font-bold">2 dies</div>
<div class="text-sm opacity-60 mt-2">Blackwell's answer — welded at 10 TB/s, 208B transistors</div>
</div>
</div>

<div class="border-2 border-amber-500 rounded-lg p-4 mt-10 text-center">
<div class="font-bold">Remember "the die is as big as physics allows"? This is where it pays off.</div>
<div class="text-sm opacity-60 mt-1">High-NA EUV cuts the field in half again — 429 mm². Multi-die isn't a choice. It's geometry.</div>
</div>

<!--
BEATS:
- SEED PAYOFF — reticle limit (planted in nvidia). Back in Santa Clara we said the die was as big as physics allows and to hold that thought. Here's the cash: every lithography scanner exposes one maximum field — 26×33mm, 858mm². You physically cannot print a bigger die in one shot.
- Show how close we already were: the H100 was 814mm² — 95% of the theoretical max. The biggest chips were already pressed flat against the glass. There was no "make the die bigger" left.
- So Nvidia's answer to needing more chip wasn't a bigger die — it was TWO reticle-limited dies stitched into one package, joined at 10 TB/s so software sees a single GPU. The "chip" became an assembly. That is a packaging problem, not a design problem.
- Twist the knife: High-NA EUV makes the field SMALLER — anamorphic optics halve it to 429mm². On the next tools even a mid-size die must be stitched. Packaging isn't catching up to litho; litho is handing packaging more work every node.
FACT AMMO:
- Reticle field: 26×33mm = 858mm² max single-exposure die (DUV and standard EUV). [research/packaging §why packaging became the frontier (a)]
- H100 = 814mm² ≈ 95% of the max. Handle: the biggest chips were already pressed against the glass. [research/packaging §why packaging became the frontier (a)]
- Blackwell B200: two reticle-limited dies, 10 TB/s die-to-die link (NV-HBI), 208B transistors across ~1,600mm². [research/packaging §why packaging became the frontier (a)]
- High-NA EUV halves the field to 26×16.5mm = 429mm². [research/packaging §why packaging became the frontier (a)]
LINE THAT LANDS:
- "You can't print a bigger chip. Physics won't let you. So you print two and glue them into one."
-->

---

# Three more reasons the monolith died

<div class="grid grid-cols-3 gap-6 mt-8">
<div class="border-2 border-gray-400 rounded-lg p-5">
<div class="text-sm opacity-60">YIELD</div>
<div class="text-2xl font-bold mt-1">Don't bet on one big die</div>
<div class="text-sm opacity-70 mt-3">4 small dies cost <b>&lt;60%</b> of one big one — AMD's 41% cost cut. Throw away the bad brick, not the whole block.</div>
</div>
<div class="border-2 border-gray-400 rounded-lg p-5">
<div class="text-sm opacity-60">MEMORY</div>
<div class="text-2xl font-bold mt-1">HBM has to sit millimeters away</div>
<div class="text-sm opacity-70 mt-3"><b>~1,700</b> signal lines per stack. A PCB can't route it — only a silicon interposer can.</div>
</div>
<div class="border-2 border-gray-400 rounded-lg p-5">
<div class="text-sm opacity-60">COST</div>
<div class="text-2xl font-bold mt-1">Only put on N2 what needs N2</div>
<div class="text-sm opacity-70 mt-3">Compute on the newest node; I/O and cache on mature ones. Mix nodes in one package.</div>
</div>
</div>

<div class="text-center text-lg opacity-80 mt-8">
"Moore's Law didn't die — it moved into the package."
</div>

<!--
BEATS:
- Reason two — YIELD RETURNS (callback to foundations/life-of-a-wafer/kla). We felt it viscerally already: yield falls exponentially with die area. So printing one giant die is betting the whole package on zero defects across 800+ mm². AMD's canonical math: four 213mm² dies vs one 777mm² monolith — ~10% more silicon area, but the four small dies cost under 60% of the big one, a 41% cost cut. Chiplets turn chip design from sculpture into Lego: snap together known-good bricks, discard only the bad ones.
- Reason three — MEMORY (callback to the memory-wall / HBM segment). HBM speaks a 1,024-bit-wide bus, ~1,700 signal lines per stack with a B200 carrying eight of them. A circuit board physically cannot route that — traces too fat, too long, too few. Only a silicon interposer has µm-scale wiring fine enough. The memory wall wasn't solved by faster memory; it was solved by moving the memory INTO the package.
- Reason four — COST. SRAM and analog/I/O stopped shrinking. Paying leading-edge prices for them is waste. Chiplets let you split by economics: compute chiplet on the newest node, I/O die on a mature node (EPYC "Rome": 7nm compute + 14nm I/O), cache as a stacked die.
- Land the frame: put the four together and the monolithic chip was doomed on four independent axes at once. Our framing (echoing TSMC's own "system-level scaling" pitch): Moore's Law didn't die, it moved into the package.
FACT AMMO:
- AMD Hot Chips 2017: four 213mm² dies (852mm² total) vs a 777mm² monolith — ~10% area overhead, the four dies cost <60% of the big one; AMD claimed 41% cost reduction. [research/packaging §why packaging became the frontier (b)]
- HBM: 1,024-bit interface per stack (HBM4: 2,048-bit), ~1,700 signal lines/stack; only a silicon interposer can route it; HBM3E >1.2 TB/s per stack, B200 carries 8. [research/packaging §why packaging became the frontier (c)]
- Node mixing: EPYC "Rome" = 7nm compute + 14nm I/O; 3D V-Cache = stacked cache die on N7. [research/packaging §why packaging became the frontier (d)]
- Simplification hedge: "Moore's Law moved into the package" is our framing (echoes TSMC's system-level-scaling pitch), not a law of physics. [research/packaging §why packaging became the frontier (d)]
LINE THAT LANDS:
- "The reticle wall said you HAVE to split the chip. Yield, memory, and cost said you'd WANT to anyway."
-->

---

# CoWoS — the acronym that gated the boom

<div class="grid grid-cols-4 gap-3 mt-8 text-center">
<div><div class="text-3xl font-bold">~13–15k</div><div class="text-xs opacity-60 mt-1">wafers/mo · end-2023</div></div>
<div><div class="text-3xl font-bold">~35–40k</div><div class="text-xs opacity-60 mt-1">end-2024 · doubled</div></div>
<div><div class="text-3xl font-bold">~75–80k</div><div class="text-xs opacity-60 mt-1">end-2025 · doubled again</div></div>
<div><div class="text-3xl font-bold">~120–140k</div><div class="text-xs opacity-60 mt-1">end-2026 target</div></div>
</div>

<div class="text-center mt-8">
<div class="text-6xl font-bold">≈ 10×</div>
<div class="opacity-70 mt-2">in three years — and it was <i>still</i> sold out</div>
</div>

<div class="text-sm opacity-60 mt-8 text-center">
<b>C</b>hip <b>o</b>n <b>W</b>afer <b>o</b>n <b>S</b>ubstrate: dies on a silicon interposer, on an organic substrate. Niche since 2013 — until AI.
</div>

<!--
BEATS:
- Say what the acronym is, plainly: Chip-on-Wafer-on-Substrate. The dies and the HBM stacks are mounted on a silicon interposer (the fine-wiring layer from the last slide), which sits on an organic substrate. It's 2.5D packaging. TSMC first shipped it with Xilinx FPGAs, volume in 2013 — it sat as an expensive niche for a DECADE before AI made it the most fought-over capacity on Earth.
- Walk the capacity ramp as the tell of the whole boom: ~13–15k wafers/month end-2023, doubling to ~35–40k, doubling again to ~75–80k, targeting ~120–140k by end-2026 — roughly 10× in three years. TSMC threw everything at it.
- The gut-punch: even a 10× build was still sold out. Demand ran ahead the whole time — the supply-demand gap only narrowed from ~20% toward ~10% by end-2026. This one line of capacity is why the boom felt supply-starved for two straight years.
- Honesty hedge (voice it): "CoWoS gated ALL AI supply" is directionally right for 2023–25, but HBM supply and later substrates were co-bottlenecks at various moments. Safer: CoWoS was the binding constraint most of the time.
FACT AMMO:
- CoWoS = Chip-on-Wafer-on-Substrate, 2.5D; first volume with Xilinx FPGAs by 2013 — a decade as a niche. [research/packaging §CoWoS]
- Capacity (wafers/month, year-end): ~13–15k (2023) → ~35–40k (2024) → ~75–80k (2025) → ~120–140k target (2026) ≈ 10× in three years. [research/packaging §CoWoS]
- Total CoWoS demand ≈ 370k wafers (2024) → ~670k (2025) → ~1M (2026); supply-demand gap narrowing from ~20% to ~10% by end-2026. [research/packaging §CoWoS] <!-- VERIFY: annual demand figures are Silicon Analysts estimates, partly paywalled -->
- Handle: a 10× capacity build in three years that never once caught up with its own order book. [research/packaging §fact-ammo]
- Simplification hedge: CoWoS was "the binding constraint most of the time," not the only one — HBM and substrates co-bottlenecked at moments. [research/packaging §risks]
LINE THAT LANDS:
- "They grew the gluing line tenfold in three years and still couldn't glue fast enough."
-->

---

# Chiplets & the copper handshake

<div class="grid grid-cols-2 gap-8 mt-6">
<div>
<div class="text-sm opacity-60">CoWoS-L → ~6× reticle</div>
<div class="text-lg mt-1">Blackwell = CoWoS-L. Nvidia locked up <b>&gt;70%</b> of 2025 CoWoS-L capacity — and its 2024 slip was a <i>packaging</i> problem, not a die problem.</div>
</div>
<div>
<div class="text-sm opacity-60">HYBRID BONDING — TSMC SoIC</div>
<div class="text-lg mt-1">Copper fused to copper, no solder. <b>9µm → 6µm</b> pitch today, 4.5µm by ~2029. AMD's MI300 stacks compute on I/O, <i>then</i> mounts it on CoWoS — "3.5D."</div>
</div>
</div>

<div class="grid grid-cols-3 gap-4 mt-8 text-center text-sm">
<div class="border rounded p-3"><b>UCIe, 2022</b><div class="opacity-60 mt-1">Intel, AMD, Arm, TSMC, Samsung + more — the "PCIe of the package"</div></div>
<div class="border rounded p-3"><b>3D V-Cache, 2022</b><div class="opacity-60 mt-1">first hybrid-bonded chip normal people could buy</div></div>
<div class="border rounded p-3"><b>HBM4 base die</b><div class="opacity-60 mt-1">now made by TSMC on 12nm logic — memory/foundry line dissolving</div></div>
</div>

<!--
BEATS:
- Chiplets went from AMD's cost hack to the industry's default. In 2022 Intel, AMD, Arm, TSMC, Samsung and the hyperscalers founded UCIe — a die-to-die interconnect standard, the "PCIe of the package," meant to make chiplets mix-and-match. The monolith is officially over.
- The scaling axis inside packaging is the interposer: CoWoS-S is one big silicon slab (caps ~2.5–3× reticle); CoWoS-L uses small silicon bridges embedded in organic, scaling toward ~6× reticle. Blackwell is CoWoS-L — and here's the twist inside the twist: Blackwell's 2024 delay was a PACKAGING-level respin (interposer/bridge redesign). First time a flagship chip's schedule slipped on the package, not the silicon. Packaging now carries tape-out-level risk.
- Then the frontier of stacking: hybrid bonding. Instead of solder micro-bumps, you polish copper pads and fuse them copper-to-copper directly — TSMC's SoIC. Pitch has gone 9µm → 6µm in production, heading to 4.5µm. Orders of magnitude more connections, shorter and lower-power. AMD's MI300 does BOTH — stacks compute on I/O via SoIC, then mounts the stack on CoWoS. They call it 3.5D.
- Two proofs it's real and here: the first hybrid-bonded chip anyone could buy was AMD's 3D V-Cache gaming CPU in 2022. And HBM4's base die is now made by TSMC on a 12nm LOGIC process — the bottom of a memory stack coming from a logic foundry. The memory/foundry boundary is dissolving inside the package.
FACT AMMO:
- UCIe founded March 2022 by Intel, AMD, Arm, TSMC, Samsung, ASE, Google, Meta, Microsoft, Qualcomm; Nvidia/Alibaba joined within months; 100+ members since. [research/packaging §chiplets] <!-- VERIFY: current 2026 member count -->
- CoWoS-S ≈ 2,500mm² interposer (~2.5–3× reticle); CoWoS-L uses embedded silicon bridges (LSI), scaling toward ~6× reticle. [research/packaging §CoWoS]
- Blackwell = CoWoS-L; Nvidia secured >70% of 2025 CoWoS-L capacity; 2024 delay was a packaging-level (interposer/bridge) respin. [research/packaging §CoWoS]
- TSMC SoIC hybrid bonding: 9µm (N7 era) → 6µm in HVM today → 4.5µm by ~2029; AMD MI300 = SoIC stack on CoWoS ("3.5D"). [research/packaging §3D stacking & hybrid bonding]
- AMD 3D V-Cache (Ryzen 7 5800X3D, April 2022): 64MB SRAM die (41mm², N7) hybrid-bonded at 9µm pitch, ~2 TB/s — first hybrid-bonded chip consumers could buy. [research/packaging §3D stacking & hybrid bonding]
- HBM4 base die made by TSMC on 12nm logic (SK hynix, mass production Feb 2026); Samsung counters on its own 4nm. [research/packaging §3D stacking & hybrid bonding]
- Handle: chiplets turn chip design from sculpture (one perfect block) into Lego (snap together known-good bricks). [research/packaging §chiplets]
LINE THAT LANDS:
- "The chip stopped being carved and started being assembled — and TSMC owns the assembly line too."
-->

---

# The back end you never see

<div class="grid grid-cols-3 gap-5 mt-6">
<div class="border-2 border-gray-400 rounded-lg p-4">
<div class="text-sm opacity-60">OSATs — the assembly bin</div>
<div class="text-lg font-bold mt-1">ASE · Amkor · JCET</div>
<div class="text-sm opacity-70 mt-2">Gross margins <b>~14–18%</b>. Against TSMC's <b>59.9%</b>. The value stayed at the foundry.</div>
</div>
<div class="border-2 border-gray-400 rounded-lg p-4">
<div class="text-sm opacity-60">TEST — the duopoly nobody noticed</div>
<div class="text-lg font-bold mt-1">Advantest · Teradyne</div>
<div class="text-sm opacity-70 mt-2"><b>~80%+</b> of the market. A phone chip tests in &lt;1 min; a Blackwell package sits on the tester <b>20+ min</b>.</div>
</div>
<div class="border-2 border-gray-400 rounded-lg p-4">
<div class="text-sm opacity-60">SUBSTRATE — the MSG company</div>
<div class="text-lg font-bold mt-1">Ajinomoto ABF</div>
<div class="text-sm opacity-70 mt-2"><b>&gt;95%</b> of advanced packages insulated by film from the company that invented MSG — at <b>&gt;50%</b> margins.</div>
</div>
</div>

<!--
BEATS:
- Three cards, quick, to fill in the ecosystem — and to make the value-migration argument stick.
- OSATs (Outsourced Semiconductor Assembly & Test): the old back-end world. ASE (Taiwan, #1, ~$18.5B), Amkor (US, ~$6.3B), JCET (China, ~$5.0B, growing double-digit with state backing). But look at the margins: ~14% at Amkor, ~18% at ASE — versus TSMC's 59.9%. The high-value packaging (CoWoS, SoIC) stayed at the foundry; OSATs get the overflow and the mid-range. That IS the value-migration story in three numbers.
- Onshoring note worth landing: Amkor is building a $7B campus in Arizona (production ~2028) — because "onshoring fabs" without onshoring packaging doesn't move Taiwan risk. Until it ramps, wafers fabbed in Arizona still fly to Taiwan to get packaged. The die isn't a product until it's packaged and tested.
- TEST: you can't sell what you can't prove works. Automated test is an ~80%+ duopoly — Advantest (Japan) + Teradyne (US). Multi-die packaging exploded test demand: a phone SoC clears the tester in under a minute; a Blackwell-class package can sit there 20+ minutes — because one dead chiplet scraps a five-figure assembly, so you test every die before assembly and the whole thing after. Advantest just had a record year on the back of it.
- SUBSTRATE: the best card in the deck. The package substrate — the "motherboard inside the package" — is built from ABF: Ajinomoto Build-up Film. Made by Ajinomoto, the Japanese company founded to sell MSG seasoning; the film grew out of its amino-acid chemistry. >95% market share, >50% margins. The seasoning company is a chip chokepoint.
FACT AMMO:
- OSAT top-10 2024 combined ≈ $41.6B (+3%). #1 ASE (Taiwan) $18.5B; #2 Amkor (US, HQ Tempe AZ) $6.3B; #3 JCET (China) $5.0B (+19.3%). [research/packaging §OSATs]
- Gross margins 2025: Amkor ~14%, ASE ~17.7%, TSMC 59.9% — and TSMC packaging wafers price near 7nm logic wafers. [research/packaging §OSATs]
- Amkor Arizona (Peoria): groundbreaking Oct 2025, investment expanded to $7B, ~3,000 jobs, production early 2028; anchors Apple + Nvidia. TSMC–Amkor 10-year US packaging agreement, June 2026. [research/packaging §OSATs]
- Test = ~80%+ two-company market: Advantest (Japan) + Teradyne (US). [research/packaging §test]
- Test time: phone SoC ~30–60s vs Blackwell-class >20 min; global tester market CY2025 ~$9B (+~50%); Advantest FY2025 sales ¥1,128.6B (+44.7%), op income ¥499.1B (+118.8%). [research/packaging §test]
- ABF = Ajinomoto Build-up Film, launched ~1999, >95% global share, margins >50%; substrate makers who laminate it: Ibiden, Shinko, Unimicron, Nan Ya, AT&S. [research/packaging §substrates]
- Handle (test tax): every extra minute on the tester at AI volumes = entire fleets of multi-million-dollar machines. [research/packaging §test]
- Handle (substrate): the company that seasons your soup insulates >95% of the world's advanced chips. [research/packaging §fact-ammo]
LINE THAT LANDS:
- "The company that invented MSG is a single point of failure for artificial intelligence. That is not a joke."
-->

---

# Stamp #7 — the Board completes

<div class="text-center mt-4">

![chokepoint board — seventh and final stamp](/diagrams/rendered/board-7.svg)

</div>

<div class="text-center mt-6">
<div class="text-3xl font-bold">TSMC is on this board <i>twice</i>.</div>
<div class="text-lg opacity-70 mt-3">Once for the wafers. Once for the package. Two different monopolies, one company.</div>
</div>

<!--
BEATS:
- Run the chokepoint criterion one last time, out loud: a single company or single-country cluster whose removal halts leading-edge AI-chip production within months, with no substitute inside five years. CoWoS/SoIC capacity is overwhelmingly TSMC, overwhelmingly in Taiwan, sold out for years, with OSATs only able to take the overflow. It qualifies. Stamp #7 — the Board is complete.
- Land the line the whole course was built toward: TSMC appears on this board TWICE. Chokepoint #3 was TSMC the wafer foundry (~90% of leading-edge logic). Chokepoint #7 is TSMC the packager — a completely separate, second monopoly, in the same buildings. Onshoring one doesn't touch the other.
- Note the honesty flag we owe the viewer: the Board is a judgment call. Alternates — Ajinomoto ABF, Advantest test, Shin-Etsu wafers — are real candidates and show up as honorable mentions later. The count of seven was locked before recording; that's the discipline, not a coincidence.
- China plant for geopolitics: advanced packaging is far LESS export-controlled than EUV. Chinese OSATs (JCET, Tongfu) can climb this ladder even while locked out of leading-edge litho — chiplets partially substitute for nodes they can't build. Hold that.
FACT AMMO:
- Chokepoint criterion: single company/cluster whose removal halts leading-edge AI-chip production within months, no substitute in five years. [curriculum §The Seven Chokepoints]
- #7 = TSMC (CoWoS packaging) — the same company as #3 (TSMC wafers), a second, different monopoly. [curriculum §The Seven Chokepoints]
- CoWoS/SoIC capacity overwhelmingly in Taiwan; US back-end (Amkor Peoria) doesn't produce until ~2028. [research/packaging §risks]
- Honorable-mention alternates (surface in synthesis): Ajinomoto ABF, Shin-Etsu wafers, Advantest test. [curriculum §The Seven Chokepoints]
- China end-run: packaging far less export-controlled than EUV; JCET/Tongfu can climb the packaging ladder while locked out of litho. [research/packaging §risks]
LINE THAT LANDS:
- "Seven single points of failure. We promised you the number in minute one. Here it is complete — and one company got named twice."
-->

---

# The chip is done

<div class="grid grid-cols-2 gap-8 mt-4 items-center">
<div>

![journey bar — package complete, chip finished](/diagrams/rendered/journey-6.svg)

<div class="text-lg mt-4 opacity-80">
The object we held up in minute one — two dies, eight memory stacks, an interposer, a substrate — is, at last, <b>real</b>.
</div>

</div>
<div>

<div class="text-sm opacity-60 mb-2">THE MONEY BAR SO FAR · one GB300-class GPU</div>
<div class="flex flex-col gap-1 text-xs font-bold text-center">
  <div class="flex w-full h-10 rounded overflow-hidden">
    <div class="bg-green-600 flex items-center justify-center" style="width:75%">Nvidia ~75%</div>
    <div class="bg-gray-500 flex items-center justify-center" style="width:25%">the ~25%, now named</div>
  </div>
  <div class="flex w-full h-8 rounded overflow-hidden mt-1 opacity-90">
    <div class="bg-blue-700 flex items-center justify-center" style="width:26%">TSMC dies</div>
    <div class="bg-purple-700 flex items-center justify-center" style="width:30%">HBM memory</div>
    <div class="bg-amber-600 flex items-center justify-center" style="width:22%">CoWoS + SoIC</div>
    <div class="bg-rose-700 flex items-center justify-center" style="width:12%">substrate</div>
    <div class="bg-teal-700 flex items-center justify-center" style="width:10%">OSAT + test</div>
  </div>
</div>
<div class="text-xs opacity-50 mt-3">Shape, not scale — analyst estimates, no list prices exist. The exact waterfall totals in the finale.</div>

</div>
</div>

<!--
BEATS:
- Fill the journey bar to 6. Every gate is behind us: SAND → DESIGN → FAB → MEMORY → PACKAGE. The chip is a chip. Return to the cold-open shot — the object we held up and called impossible in minute one now physically exists, and the viewer has met every company that touched it.
- Run the Money Bar as a TEASER, not a verdict (be honest about this): back in the Nvidia segment we could only label one slice — Nvidia keeps ~75 cents of every dollar. Now the other ~25 has names on it: TSMC prints the dies, Korea/US stack the memory (the biggest single supplier line), TSMC packages it via CoWoS + SoIC (twice on the bar, like the board), the substrate makers laminate the Ajinomoto film, the OSATs and testers finish it.
- CRITICAL honesty flag to voice: these widths are shape, not scale. Nobody publishes a GB300 bill of materials; every figure is a third-party estimate. The exact waterfall — who really keeps what — is the finale's job. This is a teaser of the argument, not the argument.
- Closer — 20s "what you now know": packaging fell from a shoe factory to a caste system and climbed back to the frontier; four forces (reticle wall, yield, memory, cost) killed the monolith; CoWoS gated the boom and grew 10× and still sold out; the chip is now an assembly, and TSMC owns that too — twice on the board.
- Cliffhanger into geopolitics: we now have a completed board — seven lights, every one proven. Hand it off as a loaded gun. Every light is a pressure point, and everyone — Washington, Beijing, Taipei, Tokyo, Amsterdam — knows exactly where they are.
FACT AMMO:
- Journey complete: SAND → DESIGN → FAB → MEMORY → PACKAGE all lit (state 6). [curriculum, BUILDING §journey state]
- Money Bar teaser: Nvidia keeps ~75% gross margin (labeled in the nvidia segment); the ~25% cost-of-goods is split across TSMC dies, HBM (the biggest single supplier line), CoWoS+SoIC packaging, substrate, OSAT+test. [research/nvidia §financials; research/packaging §OSATs, §substrates]
- Honesty flag: all price splits are third-party estimates; Nvidia publishes no list price; bar widths are illustrative shape, final totals resolve in synthesis. [research/nvidia §the-one-chip; research/packaging §what packaging was vs what it is]
LINE THAT LANDS:
- "Every light on this board is a pressure point — and everyone knows exactly where they are."
- "The impossible object from minute one is finished. Now watch what the world does when it realizes only one island can build it."
-->
