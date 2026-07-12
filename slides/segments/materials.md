<!-- SEGMENT
id: materials
act: IV — The Fab Tour
tier: E            # ensemble sweep · 🔧 pressure valve (cut here before protagonists)
angle: "Everyone's afraid of the machines. But the machine you buy once; the resist, the gas, the slurry you pour in every single day — and the deeper down that supply you go, the more it belongs to Japan."   # YOU OWN THIS LINE — rewrite it in your voice
runtime: ~3 min
status: draft
seeds: []                                         # no ledger seed planted here
pays_off: []                                      # Japan-materials stamp was earned at life-of-a-wafer; DEEPENED here, not re-earned
stamps: []                                        # no NEW stamp — this segment thickens Stamp #3 (Japan cluster, board-3)
diagrams: [map-equipment, flow-strip]
sources: research/materials.md
-->

---
layout: section
---

# The Japanese Basement

<div class="text-xl opacity-70 mt-3">Fourth trip down the flow strip — this time, what it eats</div>

![map: equipment lit](/diagrams/rendered/map-equipment.svg)

<!--
BEATS:
- You-are-here: still in the fab, still on the equipment layer of the map. But we're going one floor deeper than the machines.
- Set the frame in your own words: we've met the machines (ASML, Lam, AMAT, KLA). Those you buy once. Now meet what those machines CONSUME — bought again every day the fab runs.
- Tee up the angle: the deeper down the supply chain you go, the more concentrated it gets — fabs are dozens, equipment is a handful, materials is often two companies, one company, or one town. And most of that floor is Japanese.
FACT AMMO:
- Global semiconductor materials market: $73.2B in 2025, a record, +6.8% YoY [research/materials §the layer in numbers]. Split: wafer-fab materials $45.8B, packaging materials $27.4B [research/materials §the layer in numbers].
- Japanese companies hold roughly HALF of the whole materials market (~48–56% by count) [research/materials §the layer in numbers] <!-- VERIFY: exact % varies by source/year -->.
- The kicker to open on: Japan's share of chip *making* fell from ~50% in the late 1980s to ~9% today — but it kept the materials layer underneath everyone else's fabs [research/materials §the layer in numbers].
LINE THAT LANDS:
- "Japan lost the chip war above the floorboards. Then it quietly kept the basement."
-->

---

# What each step consumes

![flow strip](/diagrams/rendered/flow-strip.svg)

<div class="grid grid-cols-4 gap-4 mt-6 text-sm">
<div class="border-l-4 border-gray-400 pl-3">
<div class="font-bold">COAT → photoresist</div>
<div class="opacity-60">JSR, TOK — Japan ~90% (~95% at EUV)</div>
</div>
<div class="border-l-4 border-gray-400 pl-3">
<div class="font-bold">EXPOSE → mask blanks</div>
<div class="opacity-60">Hoya + AGC ~93% of every EUV blank</div>
</div>
<div class="border-l-4 border-gray-400 pl-3">
<div class="font-bold">everywhere → gases</div>
<div class="opacity-60">neon in the laser, HF to etch & clean</div>
</div>
<div class="border-l-4 border-gray-400 pl-3">
<div class="font-bold">POLISH → slurry + pad</div>
<div class="opacity-60">Entegris slurry, DuPont pads</div>
</div>
</div>

<div class="text-sm opacity-70 mt-6 text-center">
Upstream of the whole loop: the wafer itself — Shin-Etsu / SUMCO silicon, pulled from a quartz crucible that traces back to <b>one town in North Carolina</b>.
</div>

<!--
BEATS:
- Fourth pass over the same strip. First time (life-of-a-wafer) we walked the steps; now we ask what gets *used up* at each one.
- The mental model that unlocks the whole segment: equipment is CapEx — you buy the ASML scanner once. Materials are consumables — you buy resist, gas, slurry again every single shift. That's the layer nobody sees and everybody depends on.
- Walk the strip: at COAT, photoresist — the light-sensitive paint; ASML's $200M scanner is useless without it. Behind EXPOSE stands the mask blank — the master stencil the scanner prints from. Gases run through everything (neon buffers the DUV laser; HF etches and cleans). At POLISH, the CMP slurry — nano-abrasive mud that flattens each layer.
- Then the lock-in punchline: swapping a qualified fab chemical is ~1–2 years of testing. So shares are sticky in peacetime — and there is no quick substitute when something breaks.
FACT AMMO:
- Photoresist: Japan ~90% of the market (US Commerce figure), ~95% of EUV resist; players JSR, Tokyo Ohka Kogyo (TOK), Shin-Etsu, Sumitomo, Fujifilm [research/materials §photoresist].
- EUV mask blank = ultra-low-expansion glass + 40+ alternating Si/Mo layers (a mirror, not a transparency — nothing transmits EUV); Hoya + AGC (both Japanese) ≈ 93% of the market [research/materials §photomasks & blanks] <!-- VERIFY: Hoya/AGC split disputed -->. The entire EUV blank market was ~$194M in 2024 — all of AI silicon stands on a sub-$200M market [research/materials §photomasks & blanks].
- CMP slurry+pad market ~$2.9B (2024); Entegris became slurry leader by buying CMC Materials for $6.5B (closed ~$6.0B, Jul 2022); DuPont holds >50% of CMP pads [research/materials §CMP].
- Wafer purity handle: electronic-grade silicon is "eleven nines" — 99.999999999% pure, ~one foreign atom per hundred billion; routinely called the purest material humans mass-produce [research/materials §silicon wafers].
- Requalification lock-in ~1–2 years [research/materials §risks] <!-- VERIFY: typical qual duration -->.
- Numbers-with-handles: the whole EUV mask-blank market is smaller than a single mid-size office tower's price — yet nothing gets printed without it.
- Simplification hedge (direction of the lie): I'm listing one or two names per step; each of these has a tail of smaller suppliers — but at the *leading edge* the concentration really is this brutal, not less.
LINE THAT LANDS:
- "The scanner is the thing everyone photographs. The resist is the thing that actually runs out."
-->

---

# The weapon that leaks

<div class="grid grid-cols-3 gap-6 mt-8">

<div class="border-2 border-gray-400 rounded-lg p-4">
<div class="text-lg font-bold">2019 · Japan → Korea</div>
<div class="text-sm opacity-70 mt-2">Japan restricts 3 chemicals: photoresist, HF, fluorinated polyimide. Korea was importing <b>92%</b> of its resist and <b>94%</b> of its polyimide from Japan. HF exports collapse <b>~97%</b>.</div>
</div>

<div class="border-2 border-gray-400 rounded-lg p-4">
<div class="text-lg font-bold">2022 · Neon / Ukraine</div>
<div class="text-sm opacity-70 mt-2">~half the world's chip-laser neon came from two firms — in <b>Mariupol</b> and <b>Odesa</b>. Both stop in weeks. China spot price runs <b>~4×</b>.</div>
</div>

<div class="border-2 border-gray-400 rounded-lg p-4">
<div class="text-lg font-bold">2024 · Spruce Pine, NC</div>
<div class="text-sm opacity-70 mt-2">One Appalachian town (pop. a few thousand) supplies <b>~70–90%</b> of the world's high-purity quartz. A hurricane shut it down — and TSMC checked its inventory.</div>
</div>

</div>

<div class="text-center text-xl opacity-80 mt-8">The deeper you go, the more Japanese it gets — and the tinier the market gating the trillion-dollar one.</div>

<!--
BEATS:
- One story to prove the whole thesis: 2019. Japan wakes up one morning and throttles three boring chemicals to Korea. This is the cleanest real-world demo of materials leverage there is — no bombs, no tariffs on chips, just paperwork on paint and gas.
- Then the twist that makes it honest: the leverage LEAKED. Korea requalified domestic and third-country suppliers, and the Japanese incumbents permanently lost share. Materials power is real but decays the moment you use it — hold that thought for the chip-war act.
- Second exhibit, same shape: neon. It's a byproduct of Soviet-era steel-plant air separation, so half the world's supply sat in two Ukrainian cities. 2022 froze it overnight — and again, chipmakers survived on stockpiles and then built capacity elsewhere. Leverage that leaks.
- Third exhibit, and the "one town" beat: Spruce Pine quartz — the crucible that holds molten silicon has to be made of it. Hurricane Helene took the town out; the headlines said chipmaking would halt. Reality: back in ~2 weeks, minimal impact. But note the fresh twist that keeps it human — THIS month, July 2026, one of the two miners just shut its Spruce Pine plant "indefinitely," not from the storm, but from a weak solar market. Same town: irreplaceable for chips, whipsawed by solar demand.
- Land the theme: fabs are dozens, equipment a handful, materials often one town or two companies. Each is a rounding error of a market gating everything above it.
- Soft forward-plant (not a ledger seed): Japan is now weighing resist curbs on China as Beijing targets 40% resist self-sufficiency by end-2026 — the same weapon, aimed at a new target. We come back to this in the chip-war act.
FACT AMMO:
- 2019: Japan restricted photoresist, hydrogen fluoride, fluorinated polyimide (Jul 2019). Korea then imported 92% of its resist, 94% of its fluorinated polyimide, 44% of its HF from Japan; Japanese HF exports to Korea fell ~97%; Samsung/SK Hynix were then ~72% of world DRAM [research/materials §photoresist]. The leverage leaked — suppliers permanently lost share [research/materials §photoresist].
- Neon: Ingas (Mariupol) + Cryoin (Odesa) = ~45–54% of the world's semiconductor-grade neon pre-2022; Ingas shipped 15,000–20,000 m³/month, ~75% to chipmakers; China spot ran 400→1,600 RMB/m³ (Oct 2021→Feb 2022), ~4×; the 2014 Crimea annexation had already spiked neon ~600% [research/materials §ultra-pure gases]. Neon is the buffer gas in DUV excimer lasers — the light source for every non-EUV litho layer.
- Spruce Pine: ~70–90% of world high-purity quartz from a freak 380-million-year-old pegmatite; two miners — Sibelco (BE) and The Quartz Corp (Imerys/Norsk JV) [research/materials §quartz & crucibles]. Hurricane Helene, Sep 26–27 2024, shut both down; Sibelco restarted ~2 weeks later (Oct 10–11); semiconductor impact ended up minimal [research/materials §quartz & crucibles]. Fresh twist: The Quartz Corp closed its Altapass (Spruce Pine) plant "indefinitely" in July 2026, ~20–30 jobs, NOT Helene-related — blamed on the weak solar/renewables market [research/materials §quartz & crucibles].
- China resist self-sufficiency target: 40% by end-2026; Japan reportedly weighing resist export curbs [research/materials §photoresist].
- Concentration-below-concentration roster to gesture at: Ajinomoto ~95% of ABF packaging film (the MSG company); Hoya+AGC ~93% EUV blanks; DuPont >50% CMP pads [research/materials §advanced packaging materials, §photomasks & blanks, §CMP].
- Simplification hedge (direction of the lie): "half the world's neon" and "Japan's ~90% resist" are point-in-time peaks — post-2019 and post-2022 both diversified somewhat. The concentration is real; the exact share is always drifting down after each shock.
LINE THAT LANDS:
- "The 2019 lesson: materials are a gun that fires once. It hurts — and then your victim spends two years making sure you can never fire it again."
-->

---

# The toll: equipment + materials

<div class="mt-6">
<div class="text-sm opacity-60 mb-2">Running price of one GB300-class accelerator — Act IV's slice</div>

<div class="flex h-16 w-full rounded overflow-hidden border-2 border-gray-400 text-white text-sm font-bold">
  <div class="bg-gray-700 flex items-center justify-center" style="width:22%">design + IP</div>
  <div class="bg-gray-500 flex items-center justify-center" style="width:14%">EDA / Arm</div>
  <div class="bg-blue-700 flex items-center justify-center" style="width:20%">equipment + materials <span class="opacity-80 ml-1">~est.</span></div>
  <div class="bg-gray-300 flex items-center justify-center text-gray-700" style="width:44%">TSMC · memory · packaging → later acts</div>
</div>
<div class="text-xs opacity-40 mt-2">bar shape illustrative — equipment/materials enter as an amortized toll, not a line item · as of Q2 2026</div>
</div>

<div class="grid grid-cols-3 gap-6 mt-8 text-center">
<div><div class="text-4xl font-bold">~$150</div><div class="text-sm opacity-60 mt-1">blank 300mm wafer</div></div>
<div><div class="text-4xl font-bold">~$19,500</div><div class="text-sm opacity-60 mt-1">same disc, processed at 3nm</div></div>
<div><div class="text-4xl font-bold">$73.2B</div><div class="text-sm opacity-60 mt-1">materials layer, per year</div></div>
</div>

<!--
BEATS:
- Act-end toll, but with a big honesty flag up front: you cannot cleanly carve "materials cost" out of one chip. Equipment and materials show up on the Money Bar as an AMORTIZED toll folded into the wafer's processing price — I'm flagging this slice as an estimate, not a line on an invoice.
- The one clean, real number that captures it: a blank polished 300mm wafer costs ~$150 — about a pair of sneakers. It leaves TSMC's 3nm line priced ~$19,500. Almost all of that ~130× jump is equipment depreciation + consumed materials + TSMC's margin baked together. That's the toll — embedded, not itemized.
- Zoom out to the layer: the entire consumed-materials layer is a $73.2B/yr global business — and yet, as the bar shows, most of a finished accelerator's price still gets captured DOWNSTREAM: TSMC's wafer margin, HBM, and packaging, which we haven't tolled yet. Materials is the layer everything depends on and almost nobody's margin lives in.
- Keep the bar honest: the big gray block on the right is "to be filled in later acts" — don't imply we've priced the chip yet.
FACT AMMO:
- Blank polished 300mm wafer ~$100–200; processed 3nm wafer priced ~$19,500; diced chips can be worth $50k–several hundred thousand — a ~100–1,000× value multiplication on a ~$150 disc [research/materials §silicon wafers] <!-- VERIFY: end-product retail math depends on die/product mix -->.
- Materials market $73.2B in 2025 (wafer-fab $45.8B + packaging $27.4B) [research/materials §the layer in numbers, §advanced packaging materials].
- Context anchor for the eventual total: a GB300 NVL72 rack runs ~$3.7–4.0M [research/nvidia §the one chip] — the downstream acts (TSMC, HBM, packaging) carry the big line items; materials + equipment is the thin, load-bearing slice near the bottom.
- Simplification hedge (direction of the lie): splitting the ~$19,500 into "equipment vs materials vs TSMC margin" is genuinely fuzzy — treat the 20% slice as a defensible estimate, not a quote. If anything the materials-only share is smaller than people guess; the leverage is in concentration, not dollars.
LINE THAT LANDS:
- "The scariest number here isn't a price. It's that a $73 billion layer — spread across a hundred tiny monopolies — sits under a chip whose real money gets made three acts from now."
-->

---
layout: center
---

# Most chips never see any of this

<div class="text-xl opacity-70 mt-4">Eleven-nines silicon. EUV blanks. Neon from a war zone. Quartz from one town.</div>

<div class="text-2xl mt-10 leading-relaxed">
And almost none of the chips in your life<br>
needed a single gram of it.
</div>

<!--
BEATS:
- The deliberate exhale. We've just spent the whole act at the absolute bleeding edge — 1,000 steps, three months, machines and materials that only exist for the leading node.
- Let the breath out: this is the exception, not the rule. The overwhelming majority of chips on Earth — the ones in your car, your fridge, your thermostat, the power grid — never touch EUV, never touch an eleven-nines wafer, never see a Hoya blank.
- Hand off into the interlude as a genuine question, not a segue: if THIS is what it takes to make a leading-edge chip... how is it that almost every chip actually running the physical world skips all of it — and who makes those?
FACT AMMO:
- Callback anchors (all already on screen this act): eleven-nines silicon [research/materials §silicon wafers]; EUV mask blanks Hoya+AGC ~93% [research/materials §photomasks & blanks]; neon from Mariupol/Odesa [research/materials §ultra-pure gases]; Spruce Pine ~70–90% HPQ [research/materials §quartz & crucibles].
- Setup for the interlude ("The Other 90%"): most chips are mature-node/analog — cars use ~1,000+ chips each; a $0.30 part halted global auto production in 2021 (that segment carries the numbers).
LINE THAT LANDS:
- "We just built the most expensive object humans make. Now let's meet the 90% of chips that are proud of being cheap."
-->
