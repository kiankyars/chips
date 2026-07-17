---
layout: section
---

<!-- SEGMENT
id: foundations
act: I — The Impossible Object
tier: —                                            # concept segment, no player profiled
angle: "The chip I just held up shouldn't exist — and the fastest way to understand a $600-billion-a-year industry is to take that one impossible object apart until you hit the two exponentials that built it."   # YOU OWN THIS LINE — rewrite it in your voice
runtime: ~8 min
status: draft
seeds: [yield]                                     # one particle, one dead die → cashed in life-of-a-wafer, kla, intel, packaging
pays_off: []                                       # opener of the course; nothing cashes here
stamps: []                                         # no chokepoint proven yet
diagrams: [journey-1]                              # structural only; teardown visuals + cost curve are inline HTML
sources: research/foundations.md
-->


# The Impossible Object

<div class="text-xl opacity-70 mt-2">Everything you need to know about this industry is hiding inside the thing I just held up.</div>

![journey](/diagrams/rendered/journey-1.svg)

<!--
BEATS:
- Callback to the cold open: you just watched me hold one of these — a GB300-class AI accelerator. Now we take it apart.
- This is a forensic teardown, not a physics lecture. Every strange fact we pull out of this object is a company, a monopoly, or a war we'll meet later.
- Tee up the angle in your own words: the object is impossible, and "impossible" is the whole story.
- You are here (point at the journey bar): still at DESIGN — we haven't even left the object yet.
FACT AMMO:
- The object: ~200B+ transistors on two reticle-limit dies fused with a 10 TB/s link (Blackwell B200 class) [research/foundations §transistor].
- Optional impossibility hook: it's carved out of the purest solid humans make — 11N silicon, one wrong atom per 100 billion, refined from ordinary quartz [research/foundations §sand to wafer].
- Stakes (light touch — cold-open owns these): the AI buildout behind this chip is a >$600B/yr hyperscaler capex line for 2026 [research/foundations §industry aggregates] [VERIFY: hyperscaler 2026 capex >$600B, est. $690–725B post-Q1].
LINE THAT LANDS:
- "By the end of these eight minutes, this chip is going to look less like a product and more like a crime scene — and every clue points at the same seven companies."
-->

---

# Zoom in far enough and it's just switches

<div class="grid grid-cols-2 gap-10 mt-6">

<div class="flex flex-col justify-center gap-4">

- A transistor is a **voltage-controlled switch** — three terminals
- **Source** → water main · **drain** → spout · **gate** → the handle
- The handle **never touches the water**: the gate is insulated by an oxide **~1–2 atoms-worth thick**
- Wire switches together → **AND, OR, every logic gate**
- A NAND gate = **4 transistors**. A computer is just billions of them.

</div>

<div class="flex flex-col justify-center items-center">
<div class="text-7xl font-bold leading-none">1</div>
<div class="opacity-70 mt-2 text-center">idea, repeated<br>~200 billion times</div>
</div>

</div>

<!--
BEATS:
- Strip away the marketing and every chip is one idea repeated: a tiny switch.
- Walk the faucet analogy — a small twist of the gate controls a big flow between source and drain. Off means off: no gate voltage, no current.
- The magic detail: the handle is insulated from the water by a layer a couple of atoms thick. That's the first "how is this even possible" moment.
- Series = AND, parallel = OR; CMOS pairs an n- and p-type so one always blocks — near-zero power except when it flips. That's why chips sip power until you make them think.
FACT AMMO:
- MOSFET = source/drain/gate; gate field opens a channel [research/foundations §transistor].
- Gate oxide ~1–2 nm at modern nodes [research/foundations §transistor] [VERIFY: effective gate-dielectric thickness; high-k stacks complicate the "atoms" count].
- NAND = 4 transistors; CMOS = near-zero static current [research/foundations §transistor].
- Handle: the insulating oxide is only a few atoms thick — thinner than the thing it's insulating is wide.
SIMPLIFICATION HEDGE:
- Direction of the lie: "switch" hides quantum tunnelling and leakage — at these sizes electrons cheat through the barrier, which is exactly why the switch has to keep changing shape (slide 6).
-->

---

# Now zoom out: the count that broke reality

<div class="grid grid-cols-3 gap-6 mt-10 text-center">
<div>
<div class="text-5xl font-bold">2,300</div>
<div class="opacity-70 mt-2">Intel 4004 · 1971</div>
</div>
<div>
<div class="text-5xl font-bold">80B</div>
<div class="opacity-70 mt-2">Nvidia H100 · 2022</div>
</div>
<div>
<div class="text-5xl font-bold">~336B</div>
<div class="opacity-70 mt-2">Nvidia Rubin · 2026</div>
</div>
</div>

<div class="text-center text-2xl mt-12">4004 → Rubin = <b>~146,000,000×</b> in one lifetime</div>

<div class="text-sm opacity-50 mt-6 text-center">Cerebras WSE-3 (2024): 4 trillion transistors on one wafer-sized chip — ~50× an H100.</div>

<!--
BEATS:
- Same switch, more of them. Here's the whole zoom-out shot in three numbers.
- 1971: 2,300 switches you could almost count. 2026: 336 billion. That's ~146 million times more in a single human lifetime.
- Land the scale: nothing else humans make has improved by 100-million-fold in 55 years. Not engines, not planes, not medicine.
- Aside: Cerebras builds one chip the size of the whole wafer — 4 trillion transistors — because if you don't cut the wafer up, you don't lose the ones with defects (plant this; it comes back at yield).
FACT AMMO:
- Intel 4004 (1971): 2,300 transistors, 10µm [research/foundations §transistor].
- H100 (2022): 80B, TSMC 4N, ~814mm² [research/foundations §transistor].
- Blackwell B200 (2024): 208B across two reticle-limit dies [research/foundations §transistor].
- Rubin (GTC 2026): ~336B across two dies, TSMC 3nm-class [research/foundations §transistor] [VERIFY: 336B from early GTC-2026 coverage; confirm vs Nvidia official spec sheet].
- 4004→Rubin ≈ 146M× (computed) [research/foundations §transistor].
- Cerebras WSE-3 (2024): 4T transistors, 46,225mm², 900k cores [research/foundations §transistor].
- Apple A17 Pro (2023): ~19B, first 3nm phone chip [research/foundations §transistor] [VERIFY: Apple keynote figure].
LINE THAT LANDS:
- "If cars had improved like this since 1971, your Toyota would do a hundred million miles an hour."
-->

---

# Two kinds of silicon

<div class="grid grid-cols-2 gap-8 mt-8">

<div class="border-2 border-gray-400 rounded-lg p-6">
<div class="text-3xl font-bold">LOGIC</div>
<div class="opacity-70 mt-1">the thinking</div>
<div class="mt-4 text-sm leading-relaxed">
Billions of custom switches doing math. Irregular, bespoke, leading-edge. This is the GPU die itself.
</div>
</div>

<div class="border-2 border-gray-400 rounded-lg p-6">
<div class="text-3xl font-bold">MEMORY</div>
<div class="opacity-70 mt-1">the remembering</div>
<div class="mt-4 text-sm leading-relaxed">
A vast, regular grid of identical cells. A commodity — priced like oil, not like software. Made by different companies, welded on beside the logic.
</div>
</div>

</div>

<div class="text-sm opacity-60 mt-8 text-center">Same element. Opposite businesses. We'll spend an entire act on the memory bolted to this chip.</div>

<!--
BEATS:
- The object isn't one thing — it's two kinds of silicon with opposite personalities.
- Logic is the compute: the sea of custom switches from the last slide, made at the bleeding edge. Memory is storage: a huge repeating grid of identical cells.
- The tell is the business, not the physics. Logic is a margin game. Memory is a commodity that booms and busts like a barrel of oil — right now it's in a violent up-cycle.
- Plant lightly: the object is mostly logic, but it's useless without memory strapped next to it. Hold that thought — a whole act pays it off later.
FACT AMMO:
- Logic = billions of CMOS switches [research/foundations §transistor].
- Memory is behaving like a commodity right now: 2026 memory forecast >$800B, roughly +250% YoY on an AI/HBM supercycle [research/foundations §industry aggregates] [VERIFY: WSTS Spring 2026 memory >$800B, price-led].
SIMPLIFICATION HEDGE:
- Direction of the lie: "memory" here squashes SRAM, DRAM and NAND — three different cell designs and three different industries — into one box. True enough for now; the memory act splits them.
LINE THAT LANDS:
- "Logic is sold like a Ferrari. Memory is sold like gasoline. Somehow they end up soldered together an inch apart."
-->

---

# What "2nm" actually is

<div class="text-center text-2xl mt-6">Nothing on a "3nm" chip measures <b>3 nanometers.</b></div>

<div class="grid grid-cols-3 gap-6 mt-10 text-center">
<div>
<div class="text-5xl font-bold">~45 nm</div>
<div class="opacity-70 mt-2">real gate pitch (N3)</div>
</div>
<div>
<div class="text-5xl font-bold">~23 nm</div>
<div class="opacity-70 mt-2">tightest metal pitch — still ~42 atoms wide</div>
</div>
<div>
<div class="text-5xl font-bold">PPA</div>
<div class="opacity-70 mt-2">power · performance · area — what actually improves</div>
</div>
</div>

<div class="text-sm opacity-60 mt-10 text-center">The node name stopped being a measurement in the late 1990s. Today it's a brand — like a perfume called "Midnight."</div>

<!--
BEATS:
- The single most misunderstood number in tech. "2nm," "3nm" are product names, not dimensions.
- Show the real numbers: the tightest wire pitch on a "3nm" chip is ~23nm — still about 42 silicon atoms across. Nothing measures three.
- History in one line: node names tracked real gate length until the late '90s, then features stopped shrinking in lockstep and marketing kept multiplying by 0.7× per generation as if they had.
- What genuinely improves is PPA — more performance, less power, smaller area per node. Give the concrete deltas.
- We're now going sub-nanometer as the "angstrom era" (Intel 18A, TSMC A16) — same branding game, new unit.
FACT AMMO:
- N3: contacted gate pitch ~45nm, min metal pitch ~23nm [research/foundations §what a node really is].
- 23nm ≈ 42 lattice units (lattice const 0.543nm, computed) [research/foundations §what a node really is].
- Density: N5 ~138 MTr/mm²; N3E up to ~215 MTr/mm² (densest library) [research/foundations §what a node really is].
- N2 vs N3E: +15% density, 10–15% faster at same power, or 25–30% less power at same speed [research/foundations §what a node really is].
- Naming decoupled from gate length ~late 1990s [research/foundations §what a node really is] [VERIFY: exact decoupling era, ~0.35µm vs ~45nm depending on metric].
SIMPLIFICATION HEDGE:
- Direction of the lie: those density numbers are the densest possible library; a real chip averages far lower — the H100 works out to ~98 MTr/mm² on a 5nm-class node (computed) [research/foundations §what a node really is].
LINE THAT LANDS:
- "'2nm' is to nanometers what 'quarter-pounder' is to your bathroom scale."
-->

---

# The switch keeps changing shape

<div class="grid grid-cols-4 gap-4 mt-10 text-center">
<div>
<div class="text-4xl font-bold">1</div>
<div class="text-sm opacity-70 mt-1">PLANAR</div>
<div class="text-xs opacity-50 mt-1">gate on top<br>1960s–2011</div>
</div>
<div>
<div class="text-4xl font-bold">3</div>
<div class="text-sm opacity-70 mt-1">FinFET</div>
<div class="text-xs opacity-50 mt-1">stand it up<br>Intel 2011 · 22nm</div>
</div>
<div>
<div class="text-4xl font-bold">4</div>
<div class="text-sm opacity-70 mt-1">GAA / nanosheet</div>
<div class="text-xs opacity-50 mt-1">wrap all sides<br>2022–2025</div>
</div>
<div>
<div class="text-4xl font-bold opacity-50">stack</div>
<div class="text-sm opacity-70 mt-1">CFET</div>
<div class="text-xs opacity-50 mt-1">n on top of p<br>~2032</div>
</div>
</div>

<div class="text-center text-lg mt-10 opacity-80">sides of the channel the gate controls: <b>1 → 3 → 4 → stacked</b></div>

<div class="text-sm opacity-60 mt-4 text-center">Because at these sizes, electrons leak through anything the gate isn't actively policing.</div>

<!--
BEATS:
- FinFET-to-GAA in ninety seconds — this is the fastest tour in the show, so keep the pace up.
- One thread ties it all together: every generation wraps the gate around MORE of the channel, because leakage. Planar controls the switch from one side; below ~30nm the gate loses grip and current leaks even when it's "off."
- FinFET (Intel, 2011): stand the channel up as a fin, gate wraps three sides — roughly half the power at the same speed.
- GAA / nanosheet (2022–25): slice the fin into stacked sheets, gate wraps all four sides. Samsung first, but TSMC's N2 is the one that matters, in volume from Q4 2025. Intel's 18A adds backside power.
- CFET is the 2030s move: stack the two transistors of a pair on top of each other. Don't dwell — just show the trajectory continues.
FACT AMMO:
- Planar 1960s–2011; loses grip below ~30nm-class (short-channel leakage) [research/foundations §device ladder].
- FinFET: Intel, announced May 2011 at 22nm, shipped Ivy Bridge 2012; ~half the power vs 32nm planar [research/foundations §device ladder].
- GAA first to production: Samsung 3nm "MBCFET," June 2022 [research/foundations §device ladder].
- TSMC N2, first TSMC GAA node, volume production Q4 2025 [research/foundations §device ladder].
- Intel 18A "RibbonFET" + PowerVia backside power, high-volume late 2025 / 2026 [research/foundations §device ladder].
- CFET: imec roadmap, production candidate ~A7 node, ~2032–2033 [research/foundations §device ladder].
- Handle: 1 side → 3 → 4 → stacked; it's the same reflex as tightening your grip on something slippery.
LINE THAT LANDS:
- "We ran out of ways to make the switch smaller, so we started making it three-dimensional. The transistor stopped being a drawing and became a sculpture."
-->

---

# One speck of dust. One dead die.

<div class="grid grid-cols-2 gap-10 mt-6">

<div class="flex flex-col justify-center gap-4">

- Yield falls **exponentially** with die size: **e^(−A·D₀)**
- Big AI dies are the most exposed things on the wafer
- A killer particle only needs to be **~1/1000th the width of a hair**
- So the air around the wafer is **millions of times cleaner than city air** — cleaner than any operating room on Earth

</div>

<div class="flex flex-col justify-center items-center text-center">
<div class="text-6xl font-bold leading-none">≤10</div>
<div class="opacity-70 mt-1">particles/m³ around the wafer (ISO 1)</div>
<div class="text-3xl font-bold mt-6 opacity-40">vs</div>
<div class="text-6xl font-bold leading-none mt-4">~35,000,000</div>
<div class="opacity-70 mt-1">particles/m³ in city air</div>
</div>

</div>

<!--
BEATS:
- This is the seed for half the rest of the course, so plant it hard: yield is the industry's central economic fact.
- The model: yield drops exponentially as the die gets bigger. A phone-sized die shrugs off a stray defect; a reticle-limit AI die does not. Every extra mm² is more surface for one fatal speck to land on.
- Make it visceral: a killer particle is a fraction of the feature size — a hundred-nanometer mote, a thousandth of a hair's width, lands on a $30k wafer and shorts a wire, and that die is scrap.
- That's why fabs are the cleanest places humans have ever built: the air around the wafer is millions of times cleaner than the street, cleaner than a surgical theater.
- TSMC's whole moat, reduced to one number: they hit lower defect density at the same stage than the node before. Every wafer teaches the process; the fastest learner wins.
- Say the callback out loud: "hold onto yield — it comes back every single time we walk into a factory."
FACT AMMO:
- Die yield ≈ e^(−A·D₀); D₀ ≈ 0.1/cm² ≈ ~90% on a mobile-sized die [research/foundations §yield & cleanrooms].
- Killer particle ~100nm ≈ 1/1000th a hair's width, on ~20nm pitches [research/foundations §yield & cleanrooms].
- Cleanroom ISO 1 = ≤10 particles ≥0.1µm/m³; urban air ≈ 35,000,000 ≥0.5µm/m³ (≈ISO 9); wafers sit in ISO 1–2 mini-environments [research/foundations §yield & cleanrooms] [VERIFY: OR ISO class range + fab bay class before quoting a specific "cleaner than an OR" multiplier].
- TSMC N2 defect density lower than N3/N5/N7 at the same stage of development [research/foundations §yield & cleanrooms].
- Context (forward-ref to life-of-a-wafer): a leading-edge wafer runs ~500–1,000+ steps over ~3 months, and every die is printed simultaneously [research/foundations §process flow]. A leading-edge wafer ≈ $30,000 (N2, analyst est.) [research/foundations §wafer prices] [VERIFY: N2 ~$30k/wafer; NOTE per-die dollar figure not in pack].
SIMPLIFICATION HEDGE:
- Direction of the lie: real yield math adds clustering and redundancy; Poisson is the honest first-order picture, and it already tells you why huge dies terrify a CFO.
SEED: yield — planted here, cashed in life-of-a-wafer → kla → intel → chiplets in packaging.
LINE THAT LANDS:
- "Somewhere on this wafer is a single mote of dust you will never see, and it just cost someone the price of a car."
-->

---

# Exponential #1: computing got absurdly cheap

<div class="grid grid-cols-2 gap-10 mt-8">

<div class="flex flex-col justify-center gap-4">

- **Moore's Law (1965):** transistors per chip double ~every 2 years — and it was always an *economic* claim, not a physics one
- Density is **still climbing** (N5 → N3 → N2), just slower and via new tricks
- But **Dennard scaling died ~2005**: shrinking stopped making chips cooler
- So clocks **froze** — and the industry's escape hatch was **parallelism**

</div>

<div class="flex flex-col justify-center items-center text-center">
<div class="text-6xl font-bold leading-none">~3.8<span class="text-3xl">GHz</span></div>
<div class="opacity-70 mt-1">Pentium 4, 2004</div>
<div class="text-lg opacity-60 mt-4">…20 years later, still ~4–6 GHz.</div>
<div class="text-lg opacity-60 mt-1">Not 400.</div>
</div>

</div>

<div class="text-sm opacity-60 mt-8 text-center">This is why the object in your hand is a GPU with tens of thousands of slow-ish cores — not one impossibly fast one.</div>

<!--
BEATS:
- Now the payoff of the whole teardown: two exponentials brought us here, and they point in opposite directions. Here's the first.
- Moore's Law is real but constantly misquoted — it was an economic observation about the transistor count at minimum cost, doubling every two years. Density is still improving, just slower and by cheating (GAA, backside power, stacking chiplets).
- The quieter, more important death: Dennard scaling. Until ~2005, shrinking a transistor made it faster AND cooler, for free. Then leakage stopped scaling and that free lunch ended.
- Consequence you can feel: clock speeds flatlined two decades ago. We didn't get 400 GHz chips; we got MORE cores.
- Land the connection to the object: the entire AI-hardware era — thousands of parallel cores instead of one fast one — is downstream of Dennard's death. The chip is shaped like this because physics forced it.
- On cost-per-transistor, be honest that it's contested — present both sides (see hedge).
FACT AMMO:
- Moore 1965: doubling every year → 1975 revision: every 2 years; always the count at minimum cost per transistor [research/foundations §Moore's Law & the two exponentials].
- Dennard scaling (1974); broke down ~2005–2007 as leakage stopped scaling [research/foundations §Moore's Law & the two exponentials].
- Clocks: ~3.8 GHz Pentium 4 (2004) → ~4–6 GHz sustained 20 years later, not 400 GHz [research/foundations §Moore's Law & the two exponentials].
- Density still rising: N5 ~138 → N3E ~215 MTr/mm² [research/foundations §what a node really is].
- Answer = parallelism → multicore → GPUs → the AI era [research/foundations §Moore's Law & the two exponentials].
SIMPLIFICATION HEDGE:
- Direction of the lie / present both sides: cost-per-transistor is contested. Bear case (IBS/Handel Jones): it stopped falling at 28nm ~2012. Bull case (TSMC/Intel): system-level perf/watt/$ keeps improving and designers keep migrating — revealed preference [research/foundations §Moore's Law & the two exponentials] [VERIFY: pin a current 2025–26 authoritative pro-scaling cost source before recording this side].
LINE THAT LANDS:
- "The reason AI runs on a graphics card is that in 2005, single chips stopped getting faster — so we stopped building one genius and started building an army."
-->

---

# Exponential #2: the factory that prints them

<div class="mt-4 mb-2 text-sm opacity-60">Cost of one leading-edge fab &nbsp;·&nbsp; <span class="opacity-80">log scale — each step ≈ 10×</span></div>

<div class="flex flex-col gap-3 mt-3">

<div class="flex items-center gap-4">
  <div class="w-28 text-right text-sm opacity-70">early 1970s</div>
  <div class="flex-1 h-7 rounded" style="background: rgba(127,127,127,0.15)"><div class="h-7 rounded" style="width:13%; background:#4b93e6"></div></div>
  <div class="w-28 text-lg font-bold">~$4M</div>
</div>

<div class="flex items-center gap-4">
  <div class="w-28 text-right text-sm opacity-70">mid-1980s</div>
  <div class="flex-1 h-7 rounded" style="background: rgba(127,127,127,0.15)"><div class="h-7 rounded" style="width:44%; background:#4b93e6"></div></div>
  <div class="w-28 text-lg font-bold">~$100M</div>
</div>

<div class="flex items-center gap-4">
  <div class="w-28 text-right text-sm opacity-70">mid-1990s</div>
  <div class="flex-1 h-7 rounded" style="background: rgba(127,127,127,0.15)"><div class="h-7 rounded" style="width:67%; background:#4b93e6"></div></div>
  <div class="w-28 text-lg font-bold">~$1B</div>
</div>

<div class="flex items-center gap-4">
  <div class="w-28 text-right text-sm opacity-70">~2015</div>
  <div class="flex-1 h-7 rounded" style="background: rgba(127,127,127,0.15)"><div class="h-7 rounded" style="width:92%; background:#4b93e6"></div></div>
  <div class="w-28 text-lg font-bold">~$14B</div>
</div>

<div class="flex items-center gap-4">
  <div class="w-28 text-right text-sm opacity-70">2020s</div>
  <div class="flex-1 h-7 rounded" style="background: rgba(127,127,127,0.15)"><div class="h-7 rounded" style="width:96%; background:#4b93e6"></div></div>
  <div class="w-28 text-lg font-bold">$20B+</div>
</div>

</div>

<div class="grid grid-cols-2 gap-8 mt-8 text-center">
<div><div class="text-3xl font-bold">~5,000×</div><div class="text-sm opacity-60">fab cost, since the early 1970s</div></div>
<div><div class="text-3xl font-bold">~25 → 3</div><div class="text-sm opacity-60">companies at the leading edge (130nm → 2nm)</div></div>
</div>

<div class="text-sm opacity-60 mt-6 text-center">One exponential spread computing to everyone. This one collapsed the number of companies that can make it to three.</div>

<!--
BEATS:
- Here's the second exponential — the evil twin of Moore's Law, and the single most important graph in the whole episode.
- While computing got cheaper, the factory got catastrophically more expensive. Rock's Law: the cost of a leading-edge fab doubles roughly every four years. Walk the bars: $4M in the early '70s to $20B+ today — about 5,000×. Samsung's Texas fab is ~$25B; TSMC's Arizona build is ~$65B for the first three fabs.
- Say the punchline: the machine that makes the cheapest objects ever manufactured is now the most expensive factory ever built. One extreme tool inside it — a High-NA EUV scanner — is ~$400M by itself.
- Now connect the two exponentials into the thesis: cheap-to-design, ruinous-to-build. That gap is the entire shape of this industry.
- Land the consequence with the funnel: ~25 companies could make a leading-edge chip in 2001. Today, three. The cost curve, inverted, IS the consolidation — nobody who can't amortize a $20B bill over enormous volume survives.
- Cliffhanger into great-unbundling: one man looked at this exact curve in the 1980s and drew the only possible conclusion — split the industry in two. That's the next segment.
FACT AMMO:
- Rock's law: leading-edge fab cost doubles ~every 4 years [research/foundations §Moore's Law & the two exponentials].
- Curve: early 1970s ~$4M (~$31M in 2024$) → mid-1980s ~$100M → mid-1990s ~$1B → ~2015 ~$14B → 2020s $10–20B+ [research/foundations §Moore's Law & the two exponentials] [VERIFY: $100M mid-80s and $1B mid-90s are order-of-magnitude, pin sources].
- Samsung Taylor, TX ~$25B; TSMC Arizona ~$65B for first three fabs (of a stated ~$165B US total) [research/foundations §Moore's Law & the two exponentials] [VERIFY: TSMC AZ figures vs March 2025 announcement + updates].
- One High-NA EUV scanner ≈ $400M [research/foundations §Moore's Law & the two exponentials (see asml.md)].
- ~5,000× fab-cost increase since the early 1970s [research/foundations §Moore's Law & the two exponentials].
- Consolidation funnel: 130nm (~2001) ~25 players → 3 at 3/2nm (TSMC, Samsung, Intel) [research/foundations §consolidation funnel] [VERIFY: exact counts vary by IBS/BCG/McKinsey chart; lock one chart].
- Handle: cheapest objects ever made, most expensive factory ever built.
SIMPLIFICATION HEDGE:
- Direction of the lie: the bars are on a log scale on purpose — a straight-ish climb here means an EXPONENTIAL in dollars. And "$20B+" is a single fab; whole campuses run much higher.
LINE THAT LANDS:
- "Two curves went exponential at the same time. One made computers cheap enough to put in a lightbulb. The other made the factory so expensive that only three companies on Earth can still afford to build one."
-->
