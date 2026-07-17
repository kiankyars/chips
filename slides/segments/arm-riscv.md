---
layout: section
---

<!-- SEGMENT
id: arm-riscv
act: II — The Blueprint
tier: D            # duel — one contest, not two profiles
angle: "Arm collects a private tax on computing itself — and RISC-V is the tax revolt. But so far the insurgents have only captured the land the empire never bothered to tax."   # PROPOSED — YOU OWN THIS LINE
runtime: ~4 min
status: draft
seeds: [risc-v-china-hedge]     # light plant — pays off in geopolitics (SMIC/full-stack China push)
pays_off: []
stamps: []                      # no chokepoint stamp — an ISA with an open rival is leverage, not a single point of failure; beats say so out loud
diagrams: [map-design]
sources: research/arm-riscv.md
-->


# Empire vs Insurgent

<div class="text-xl opacity-70 mt-2">Arm · RISC-V — the war over the words every chip speaks</div>

<img src="/diagrams/rendered/map-design.svg" class="absolute bottom-4 right-4 w-56 opacity-90" alt="map — design region lit" />

<!--
BEATS:
- Still in the design region of the map. Our chip already has a designer (Nvidia) and rented tools (EDA). One more thing is rented: the LANGUAGE the chip speaks.
- Frame it as one war from the first breath, not two company bios: an empire that taxes nearly every processor on Earth, and an insurgency whose weapon is giving the language away for free.
- Tee up the angle (above) in your own words.
FACT AMMO:
- An ISA (instruction set architecture) = the fixed vocabulary a chip speaks — add, load, branch; the contract between hardware and every program ever compiled for it [research/arm-riscv §What IP / an ISA is].
- Handle: an ISA is to a chip what English is to a book — you can print the book anywhere, but it only sells if readers already speak the language.
LINE THAT LANDS:
- "This isn't a fight between two chipmakers. Neither side makes chips. It's a fight over who owns a language."
-->

---

# The toll booth

<div class="grid grid-cols-3 gap-8 mt-10 text-center">
<div>
<div class="text-6xl font-bold">&gt;99%</div>
<div class="opacity-70 mt-2">of smartphones run Arm</div>
</div>
<div>
<div class="text-6xl font-bold">350B+</div>
<div class="opacity-70 mt-2">Arm chips ever shipped</div>
</div>
<div>
<div class="text-6xl font-bold">~1–2%</div>
<div class="opacity-70 mt-2">royalty per chip, forever</div>
</div>
</div>

<div class="text-sm opacity-60 mt-12 text-center">
Arm has never fabbed a chip. It sells blueprints — and collects at the gate on every unit shipped.
</div>

<!--
BEATS:
- The model in one breath: pay once for the license, then pay again on EVERY chip shipped, forever. Upfront fee + perpetual per-unit royalty.
- Scale of the empire: whoever won the phone war — Apple, Samsung, Qualcomm, MediaTek — Arm won.
- The punchline of toll-booth economics: tiny toll × everything = one of the most valuable companies alive on under $5B of revenue.
FACT AMMO:
- >99% of smartphones sold contain Arm CPUs (Arm's own 20-F) [research/arm-riscv §Arm: model & numbers].
- 350B+ cumulative chips — handle: 40+ chips for every human alive; 22M+ developers build on Arm — roughly the population of Taiwan [research/arm-riscv §Arm: model & numbers].
- License fee ~$1M–$10M upfront; royalty typically ~1–2% of chip selling price [research/arm-riscv §Arm: model & numbers].
- Run-rate ~30B chips/yr → blended royalty ≈ ~9¢ per chip [VERIFY: derived figure; Arm stopped reporting quarterly chip counts (last hard: 28.6B FY23)] — handle: less than a postage stamp, on nearly every processor on Earth [research/arm-riscv §Arm: model & numbers].
- FY26 (ended Mar 2026): revenue $4.92B (+23%) — royalty $2.61B + licensing $2.31B; third straight 20%+ year since IPO [research/arm-riscv §Arm: model & numbers].
- Market cap July 2026: ~$320–346B ≈ 65× revenue — the market is pricing a tax on computing itself [research/arm-riscv §Arm: model & numbers].
- Origin color (optional 10s): founded Nov 1990 — 12 Acorn engineers + $3M from Apple (for the Newton) + VLSI, in a converted 17th-century barn outside Cambridge [research/arm-riscv §Arm: history].
- Hedge: "~1–2%" is a blend — rates vary by product and generation; Armv9 royalties run at least double Armv8, which is the real engine of the growth [research/arm-riscv §Arm: model & numbers].
LINE THAT LANDS:
- "Arm's toll is pennies. But it's pennies on everything — $4.9B of revenue priced at a third of a trillion dollars."
-->

---

# Two ways to pay the empire

<div class="grid grid-cols-2 gap-8 mt-8">
<div class="border-2 border-gray-400 rounded-lg p-5">
<div class="text-2xl font-bold">Core license</div>
<div class="opacity-70 mt-3 leading-relaxed">Buy a finished CPU design (Cortex, Neoverse). Drop it in. Most licensees.</div>
</div>
<div class="border-2 border-gray-400 rounded-lg p-5">
<div class="text-2xl font-bold">Architecture license</div>
<div class="opacity-70 mt-3 leading-relaxed">Buy the <i>vocabulary only</i> — design your own CPU that speaks Arm. Elite club: Apple, Qualcomm, Nvidia…</div>
</div>
</div>

<div class="text-sm opacity-60 mt-8 text-center">
2022–2025: Arm sued Qualcomm — its biggest royalty payer — over exactly this line. And lost.
</div>

<!--
BEATS:
- The two-tier distinction matters because it defines the duel: core license = buy the engine; architecture license = buy the right to build your own engine that runs on Arm's fuel.
- Then the crack in the empire: the Nuvia war. Qualcomm bought a CPU startup; Arm said the license didn't transfer, sued, threatened to cancel Qualcomm's license outright.
- Arm lost — completely. And every licensee watched the landlord try to evict his best tenant.
- Second strain, same year the case closed: Arm started selling its own chips, competing with the customers who ARE its revenue.
FACT AMMO:
- Core license (TLA) vs architecture license (ALA); ALA holders: Apple, Qualcomm, Nvidia, Ampere, Fujitsu [research/arm-riscv §What IP / an ISA is].
- Third tier now: CSS compute subsystems — near-complete chip designs, more Arm content → higher royalty per chip; 21 CSS licenses across 12 companies in datacenter [research/arm-riscv §What IP / an ISA is].
- Timeline: Qualcomm buys Nuvia $1.4B (2021) → Arm sues Aug 2022 → Dec 2024 Delaware jury: no breach → 30 Sept 2025 final judgment: complete victory for Qualcomm; Arm appealing; Qualcomm's countersuit trial ~Q4 2026 [research/arm-riscv §The lawsuits].
- 24 Mar 2026: the Arm AGI CPU — first Arm-designed production silicon in 35 years; 136 Neoverse V3 cores, TSMC 3nm; Meta lead customer; >$2B demand cited — now competing with Graviton, Grace, Ampere… its own licensees [research/arm-riscv §Arm: data center & expansion].
- Also in the empire's scar tissue: Nvidia's $40B bid for Arm collapsed Feb 2022 under global regulatory assault — customers refused to let the "Switzerland of semiconductors" be owned by a chipmaker; Nvidia wrote off $1.36B [research/arm-riscv §The lawsuits].
LINE THAT LANDS:
- "Arm suing its single biggest royalty payer was the best marketing RISC-V ever got."
-->

---

# The insurgent

<div class="grid grid-cols-2 gap-10 mt-8">
<div>
<div class="text-lg font-bold mb-3">Where RISC-V is real</div>
<ul class="opacity-80 leading-relaxed">
<li>~1B cores/yr shipped by <b>Nvidia</b> — inside its GPUs</li>
<li>Storage controllers, MCUs, IoT — the invisible cores</li>
<li>Anywhere no app store has to care</li>
</ul>
</div>
<div>
<div class="text-lg font-bold mb-3">Where it's aspirational</div>
<ul class="opacity-80 leading-relaxed">
<li>Phones: no credible threat this decade</li>
<li>Servers: real projects, no volume share</li>
<li>The moat isn't silicon — it's software</li>
</ul>
</div>
</div>

<div class="text-sm opacity-60 mt-10 text-center">
The RISC-V spec is free: no license, no royalty, no permission. Open ISA ≠ free cores — you still pay for a finished design.
</div>

<!--
BEATS:
- Define the weapon precisely: RISC-V (Berkeley, 2010) is an ISA whose SPEC is free — anyone may implement it. That kills the royalty, not the engineering.
- Honest map of the war so far: the insurgency has already won the territory where the ISA is invisible — controllers, MCUs, embedded — because royalty-free wins when no software ecosystem has to move.
- The delicious irony beat: the single biggest shipper of Arm's would-be killer is Nvidia.
- Then the honest other half: where the money is — phones, datacenter — RISC-V is years behind, because the real moat is decades of compilers, OSes and apps targeting the incumbent's vocabulary.
- Structural asymmetry = the duel's actual score: RISC-V attacks Arm's UNIT share long before its REVENUE. Arm's money is v9 phone SoCs and datacenter CSS — exactly where RISC-V is weakest.
FACT AMMO:
- Born UC Berkeley 2010 (Asanović, Patterson); spec free to implement — but licensing a finished SiFive/Andes core still costs money [research/arm-riscv §RISC-V].
- Nvidia ships ~1 billion RISC-V cores/yr (2024) as management/controller cores inside GPUs; July 2025: CUDA supports RISC-V host CPUs [research/arm-riscv §RISC-V]. Handle: Arm's would-be killer already outships most ISAs in history — and you've never knowingly used one.
- Western Digital: own RISC-V cores (SweRV, open-sourced), moving its ~2B-controllers/yr portfolio over [research/arm-riscv §RISC-V].
- RVA23 profile (baseline for app-class software compat) only ratified Oct 2024 [VERIFY: RVA23 ratification date]; Android support on-again off-again [VERIFY: Google pulled RISC-V from Android common kernel 2024, status since]; no RISC-V phone or volume server CPU ships in the West as of mid-2026 [research/arm-riscv §RISC-V].
- Forecasts, honestly framed: Omdia ~17B chips ≈ 25% of processors by 2030; SHD: RISC-V IP revenue only ~$2B by 2031 — vs Arm's $2.3B licensing TODAY; RISC-V Intl's "25% already" claim (Jan 2026) counts penny embedded cores — advocacy [research/arm-riscv §Does RISC-V threaten Arm?].
- Even Arm's customers hedge: Quintauris JV (Qualcomm, NXP, Bosch, Infineon, Nordic, ST) pooling RISC-V for automotive [VERIFY: Quintauris membership/status 2026] [research/arm-riscv §Does RISC-V threaten Arm?].
- Hedge (direction of the lie): "RISC-V is winning embedded" compresses a messy picture — volume ≠ revenue; it's penny-royalty territory Arm barely monetized anyway [research/arm-riscv §Does RISC-V threaten Arm?].
LINE THAT LANDS:
- "RISC-V is eating the part of the market Arm never got rich on. The war for the profitable core — the phone in your pocket — hasn't started yet."
-->

---

# The wildcard

<div class="text-3xl mt-14 leading-relaxed text-center">
You can't sanction a language.
</div>

<div class="text-sm opacity-60 mt-12 text-center">
RISC-V International moved to Switzerland in 2019 — explicitly so no government could gate access to the standard.
</div>

<!--
BEATS:
- The reason this duel matters beyond business: instruction sets are political territory. Arm and x86 can be export-controlled; an open published standard cannot.
- China's read is rational: if Arm/x86 access can be cut by a memo from Washington, RISC-V is the ISA of last resort — so Beijing made it policy.
- LIGHT plant only — one beat, then move on: "hold that thought until the last act, when we walk the whole board as a weapons map."
FACT AMMO:
- RISC-V International relocated Delaware → Switzerland (announced late 2019) so US export politics couldn't gate the spec [research/arm-riscv §RISC-V].
- China's build-out: XiangShan (Chinese Academy of Sciences' open high-perf core, aimed at Arm-class IP); Alibaba T-Head XuanTie — server-grade C930 shipping 2025; 2025: first national-level Beijing policy backing RISC-V adoption [research/arm-riscv §RISC-V].
- ~70 Chinese companies in RISC-V International — 3rd-largest national bloc (EU ~87, US ~77); PRC firms incl. Entity-Listed ones sit on the board [research/arm-riscv §RISC-V].
- US lawmakers have pushed BIS since 2023 to restrict RISC-V collaboration (latest: Sept 2025 Senate letter); CSIS counter: restricting a global published spec just hands China the steering wheel. No RISC-V-specific rule enacted as of 2026-07 [VERIFY: confirm no BIS RISC-V rule issued by recording date] [research/arm-riscv §RISC-V].
- Arm's own exposure: Arm China is quasi-independent, a mid-teens % of revenue [VERIFY: current Arm China revenue share (was ~17% around IPO)] [research/arm-riscv §Risks (Arm)].
LINE THAT LANDS:
- "Export controls can stop a machine at a border. They cannot stop a PDF. That's why Beijing's chip plan has a Swiss address."
-->

---

# Scoreboard: the empire holds

<div class="border-2 border-gray-400 rounded-lg p-4 mt-6">
  <div class="grid grid-cols-5 gap-4 text-center">
    <div><div class="text-3xl font-bold">$4.9 B</div><div class="text-sm opacity-60">revenue FY26 (ended Mar '26)</div></div>
    <div><div class="text-3xl font-bold">—</div><div class="text-sm opacity-60">gross margin</div></div><!-- TODO: Arm gross margin not in research pack — add before recording -->
    <div><div class="text-3xl font-bold">&gt;99%</div><div class="text-sm opacity-60">of smartphones</div></div>
    <div><div class="text-xl font-bold leading-tight mt-2">the world's software compiles to Arm</div></div>
    <div><div class="text-3xl font-bold">~15 yrs</div><div class="text-sm opacity-60">to replace</div></div>
  </div>
  <div class="text-xs opacity-40 text-right mt-2">as of Q2 2026</div>
</div>

<div class="text-sm opacity-60 mt-8 text-center">
RISC-V doesn't get a scoreboard. You can't buy stock in a language — which is exactly the point.
</div>

<!--
BEATS:
- Verdict, scored honestly: the empire holds everywhere money pools. It even opened a second front upward — half of hyperscaler CPU compute is now Arm.
- Years-to-replace argument out loud: RISC-V is the live experiment — sixteen years in, spec free, superpower backing, and it still hasn't cracked a phone or a volume server. That's what an ISA moat costs to cross.
- No chokepoint stamp here — say why: an empire with a free rival at the gates is leverage, not a single point of failure. The board stays at one.
- 15s "what you now know": a chip's language is rented like its tools; the rent is pennies but it's on everything; the free alternative wins only where software doesn't care — so far.
- Cliffhanger handoff: the language is for rent, the tools are for rent — so who are the hundreds of companies actually writing blueprints with them? And why does not one of them own a factory?
FACT AMMO:
- Revenue $4.92B FY26; market cap ~$320–346B ≈ 65× sales — priced for flawless datacenter + own-silicon execution [research/arm-riscv §Arm: model & numbers, §Risks (Arm)].
- Datacenter front: Arm claims ~50% of hyperscaler CPU compute (May/June 2026); >1B Neoverse cores deployed; datacenter royalty doubled YoY [research/arm-riscv §Arm: data center & expansion]. Handle: the x86 server monopoly ended not with a bang but with a cloud invoice.
- Hedge on that 50%: IDC's ">45% of server revenue" is revenue-weighted — inflated by Grace CPUs riding inside million-dollar NVL racks; x86 still ships more standalone server CPUs [research/arm-riscv §Arm: data center & expansion].
- Years-to-replace ≈ 15: defended by the insurgent's own clock — RISC-V born 2010, still no Western phone or volume server by mid-2026; datacenter software/validation gap ~5 yrs behind Neoverse even now [research/arm-riscv §RISC-V, §Does RISC-V threaten Arm?].
- Gross margin: NOT in the fact pack — flagged; fill from 20-F before recording.
- SoftBank overhang for honesty if asked: ~87–90% owner since $32B buyout (2016); IPO Sept 2023 at $54.5B [research/arm-riscv §Arm: model & numbers].
LINE THAT LANDS:
- "The insurgents hold the countryside. The empire holds every city where money is made. And both are waiting for China to pick the battlefield."
-->
