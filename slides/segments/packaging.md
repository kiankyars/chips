---
layout: section
---

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
diagrams: [map-backend, journey-5, package-01-substrate, package-02-interposer, package-03-dies-and-hbm, package-04-complete]
sources: research/packaging.md
-->


# The bottleneck moved into the package

<div class="text-xl opacity-70 mt-2">Part 5 · Memory and packaging · back-end assembly</div>

<div class="grid grid-cols-2 gap-8 mt-8 items-center">
<div>

![industry map — backend region lit](/diagrams/rendered/map-backend.svg)

</div>
<div class="text-2xl leading-relaxed">
During the 2023–25 shortage, TSMC had GPU wafers<br>
but too little CoWoS capacity to assemble them.
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

# TSMC ran out of CoWoS capacity

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
<div class="text-4xl font-bold">conventional packaging</div>
<div class="text-sm opacity-60 mt-2">die attach, wire bonding, and epoxy encapsulation; historically treated as low-value assembly</div>
</div>
<div>
<div class="text-4xl font-bold">near 7nm</div>
<div class="text-sm opacity-60 mt-2">reported CoWoS packaging-wafer price, comparable with a 7nm logic wafer</div>
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

# Reticle limits forced Nvidia to use multiple dies

<div class="grid grid-cols-3 gap-6 mt-8 text-center">
<div>
<div class="text-5xl font-bold">858 mm²</div>
<div class="text-sm opacity-60 mt-2">maximum field for one standard EUV exposure</div>
</div>
<div>
<div class="text-5xl font-bold">814 mm²</div>
<div class="text-sm opacity-60 mt-2">H100 die, 95% of the reticle field</div>
</div>
<div>
<div class="text-5xl font-bold">2 dies</div>
<div class="text-sm opacity-60 mt-2">Blackwell uses two dies linked at 10 TB/s; 208B transistors total</div>
</div>
</div>

<div class="border-2 border-amber-500 rounded-lg p-4 mt-10 text-center">
<div class="font-bold">H100 nearly filled a standard reticle field. Blackwell crossed the limit by using two dies.</div>
<div class="text-sm opacity-60 mt-1">High-NA EUV halves the field to 429 mm², increasing the need for multi-die designs.</div>
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

# Smaller dies also improve yield and cost

<div class="grid grid-cols-3 gap-6 mt-8">
<div class="border-2 border-gray-400 rounded-lg p-5">
<div class="text-sm opacity-60">YIELD</div>
<div class="text-2xl font-bold mt-1">Four smaller dies can cost less</div>
<div class="text-sm opacity-70 mt-3">AMD estimated four small dies at <b>&lt;60%</b> of one monolith; a bad die no longer scraps the whole device.</div>
</div>
<div class="border-2 border-gray-400 rounded-lg p-5">
<div class="text-sm opacity-60">MEMORY</div>
<div class="text-2xl font-bold mt-1">HBM has to sit millimeters away</div>
<div class="text-sm opacity-70 mt-3"><b>~1,700</b> signal lines per stack. A conventional PCB cannot route that interface; this package uses a silicon interposer.</div>
</div>
<div class="border-2 border-gray-400 rounded-lg p-5">
<div class="text-sm opacity-60">COST</div>
<div class="text-2xl font-bold mt-1">Use advanced nodes only for compute</div>
<div class="text-sm opacity-70 mt-3">Compute on the newest node; I/O and cache on mature ones. Mix nodes in one package.</div>
</div>
</div>

<div class="text-center text-lg opacity-80 mt-8">
Packaging now carries more of each generation's density and performance gains.
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

# CoWoS capacity grew about 10×

<div class="grid grid-cols-4 gap-3 mt-8 text-center">
<div><div class="text-3xl font-bold">~13–15k</div><div class="text-xs opacity-60 mt-1">wafers/mo · end-2023</div></div>
<div><div class="text-3xl font-bold">~35–40k</div><div class="text-xs opacity-60 mt-1">end-2024 · doubled</div></div>
<div><div class="text-3xl font-bold">~75–80k</div><div class="text-xs opacity-60 mt-1">end-2025 · doubled again</div></div>
<div><div class="text-3xl font-bold">~120–140k</div><div class="text-xs opacity-60 mt-1">end-2026 target</div></div>
</div>

<div class="text-center mt-8">
<div class="text-6xl font-bold">≈ 10×</div>
<div class="opacity-70 mt-2">in three years; capacity remained sold out</div>
</div>

<div class="text-sm opacity-60 mt-8 text-center">
<b>C</b>hip <b>o</b>n <b>W</b>afer <b>o</b>n <b>S</b>ubstrate: dies and HBM on a silicon interposer mounted to an organic substrate. In production since 2013; demand accelerated with AI.
</div>

<!--
BEATS:
- Say what the acronym is, plainly: Chip-on-Wafer-on-Substrate. The dies and HBM stacks sit on a silicon interposer, which sits on an organic substrate. TSMC first shipped CoWoS in volume with Xilinx FPGAs in 2013; AI demand turned it from a niche process into constrained capacity.
- Walk the capacity ramp as the tell of the whole boom: ~13–15k wafers/month end-2023, doubling to ~35–40k, doubling again to ~75–80k, targeting ~120–140k by end-2026 — roughly 10× in three years. TSMC threw everything at it.
- The gut-punch: even a 10× build was still sold out. Demand ran ahead the whole time — the supply-demand gap only narrowed from ~20% toward ~10% by end-2026. This one line of capacity is why the boom felt supply-starved for two straight years.
- Honesty hedge (voice it): "CoWoS gated ALL AI supply" is directionally right for 2023–25, but HBM supply and later substrates were co-bottlenecks at various moments. Safer: CoWoS was the binding constraint most of the time.
FACT AMMO:
- CoWoS = Chip-on-Wafer-on-Substrate, 2.5D; first volume with Xilinx FPGAs by 2013 — a decade as a niche. [research/packaging §CoWoS]
- Capacity (wafers/month, year-end): ~13–15k (2023) → ~35–40k (2024) → ~75–80k (2025) → ~120–140k target (2026) ≈ 10× in three years. [research/packaging §CoWoS]
- Total CoWoS demand ≈ 370k wafers (2024) → ~670k (2025) → ~1M (2026); supply-demand gap narrowing from ~20% to ~10% by end-2026. [research/packaging §CoWoS] [VERIFY: annual demand figures are Silicon Analysts estimates, partly paywalled]
- Handle: a 10× capacity build in three years that never once caught up with its own order book. [research/packaging §fact-ammo]
- Simplification hedge: CoWoS was "the binding constraint most of the time," not the only one — HBM and substrates co-bottlenecked at moments. [research/packaging §risks]
LINE THAT LANDS:
- "They grew the gluing line tenfold in three years and still couldn't glue fast enough."
-->

---
class: visual-sequence
transition: fade
---

<div class="visual-sequence__kicker">Package assembly · 1 / 4</div>

<div class="visual-sequence__frame">

![Locked top view of an organic accelerator substrate](/diagrams/rendered/package-01-substrate.svg)

</div>

<div class="visual-sequence__caption">The package begins with an organic substrate that carries power and signals.</div>
<div class="visual-sequence__source">Illustrative locked top view · not to scale</div>

<!--
BEATS:
- Start at the bottom. The substrate is the circuit board beneath the circuit board: it fans power and signals from the package into the server motherboard.
- Its insulating layers use Ajinomoto Build-up Film. Substrate manufacturers laminate that film into the package; assembly houses later attach and test the finished device.
- Keep the camera fixed. Every following layer lands on this same footprint.
FACT AMMO:
- Ajinomoto Build-up Film is used in more than 95% of advanced package substrates; Ibiden, Shinko, Unimicron, Nan Ya, and AT&S are major substrate makers. [research/packaging §substrates]
- ASE, Amkor, and JCET lead outsourced assembly and test, while TSMC retains the highest-value CoWoS and SoIC work. [research/packaging §OSATs]
-->

---
class: visual-sequence
transition: fade
---

<div class="visual-sequence__kicker">Package assembly · 2 / 4</div>

<div class="visual-sequence__frame">

![The same package view with a silicon interposer added](/diagrams/rendered/package-02-interposer.svg)

</div>

<div class="visual-sequence__caption">CoWoS adds a silicon wiring layer between the substrate and the dies.</div>
<div class="visual-sequence__source">CoWoS: Chip on Wafer on Substrate · geometry simplified</div>

<!--
BEATS:
- The silicon interposer is the dense wiring plane. It can route the thousands of short connections that an organic circuit board cannot.
- CoWoS means Chip on Wafer on Substrate: active dies sit on the interposer, and the interposer sits on the organic substrate shown in the first frame.
- Blackwell uses CoWoS-L, which replaces one very large silicon slab with local silicon bridges embedded in a larger redistribution layer. The drawing keeps a single plane so the routing job remains legible.
FACT AMMO:
- CoWoS entered volume production with Xilinx FPGAs in 2013; AI accelerators turned it into constrained high-volume capacity. [research/packaging §CoWoS]
- CoWoS-L uses embedded local silicon interconnects and can scale toward roughly six reticle fields. [research/packaging §CoWoS]
- TSMC expanded CoWoS capacity roughly tenfold from the end of 2023 to its end-2026 target. [research/packaging §CoWoS]
SIMPLIFICATION HEDGE:
- This top view represents CoWoS-L as one continuous wiring plane. Production packages use redistribution layers and embedded local silicon bridges rather than one full silicon interposer.
-->

---
class: visual-sequence
transition: fade
---

<div class="visual-sequence__kicker">Package assembly · 3 / 4</div>

<div class="visual-sequence__frame">

![Two GPU dies and eight HBM stacks added to the same package view](/diagrams/rendered/package-03-dies-and-hbm.svg)

</div>

<div class="visual-sequence__caption">Two GPU dies and eight HBM stacks share the same high-density wiring plane.</div>
<div class="visual-sequence__source">GB300-class component count · arrangement simplified</div>

<!--
BEATS:
- Now place the active silicon. Blackwell crosses the reticle limit with two compute dies linked inside one package; eight HBM stacks sit millimeters away.
- Each HBM stack needs a very wide interface. The interposer makes those thousands of connections short enough and dense enough to feed the GPU.
- This is why the package is no longer a protective shell. It is part of the computer architecture.
FACT AMMO:
- Blackwell uses two reticle-limited compute dies with a 10 TB/s die-to-die link and 208 billion transistors in total. [research/packaging §why packaging became the frontier (a)]
- A B200-class package carries eight HBM stacks; an HBM3-generation stack uses a 1,024-bit interface and roughly 1,700 signal lines. [research/packaging §why packaging became the frontier (c)]
- Smaller known-good dies can improve yield and cost relative to one monolithic die. [research/packaging §why packaging became the frontier (b)]
SIMPLIFICATION HEDGE:
- Component positions and relative sizes are illustrative; the count and layer relationships are the teaching point.
-->

---
class: visual-sequence
transition: fade
---

<div class="visual-sequence__kicker">Package assembly · 4 / 4</div>

<div class="visual-sequence__frame">

![The completed accelerator package with its thermal lid](/diagrams/rendered/package-04-complete.svg)

</div>

<div class="visual-sequence__caption">The lid closes over one accelerator built from separate logic and memory dies.</div>
<div class="visual-sequence__source">Illustrative cutaway · TSMC CoWoS</div>

<!--
BEATS:
- The thermal lid completes the cutaway. The object now leaves advanced packaging as one accelerator even though it contains many separately fabricated pieces of silicon.
- Known-good dies are tested before assembly, and the complete package is tested again. A Blackwell-class package can remain on automated test equipment for more than 20 minutes.
- TSMC appears on the chokepoint board twice: it fabricates the leading-edge logic dies and separately controls the CoWoS capacity that assembles them with HBM. This package earns chokepoint number seven.
- The journey is complete: sand became separate logic and memory dies, and packaging made them one usable device.
FACT AMMO:
- Advantest and Teradyne together supply more than 80% of automated test equipment; a Blackwell-class package can require more than 20 minutes of test time. [research/packaging §test]
- Chokepoint #7 is TSMC advanced packaging, distinct from TSMC leading-edge wafer fabrication. [curriculum §The Seven Chokepoints]
- CoWoS and SoIC capacity remains concentrated in Taiwan; major new US back-end capacity is not expected before Amkor's Arizona campus begins production around 2028. [research/packaging §risks]
SIMPLIFICATION HEDGE:
- The lid is rendered as a cutaway frame so the active components remain visible; a finished product would obscure most of the assembly.
-->
