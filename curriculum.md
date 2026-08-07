# CHIPS — curriculum v2

One course, 118 min nominal before pressure-valve cuts (target 105–120). The spine: **follow one chip** —
a Blackwell/GB300-class Nvidia accelerator — from idea to installed rack. Every player
is encountered at the moment the chip cannot proceed without them. See `STRATEGY.md`
for why this architecture; this file is the operational map.

Legend: tier **P** = protagonist deep-dive · **T** = tragedy · **D** = duel ·
**E** = ensemble sweep · **C** = cards · ✅ = built · 🔧 = pressure valve (cut here
first if over runtime, never from protagonists)

Persistent devices in every segment: the Map corner-navigator (+ region lit on entry),
Journey Bar at act breaks, Chokepoint stamps when earned, Economics Ledger at act ends,
Comparable Scoreboard blocks for selected players, with every metric explicitly dated.

---

## ACT 0 — THE OBJECT (4 min)

| id | title | min | tier | covers |
|---|---|---|---|---|
| `cold-open` | The Object | 4 | — | One GB300-class accelerator held on screen; three impossibility facts; ~$600B/yr hyperscaler capex, including AI infrastructure, as stakes; the Map fully dark; the promises: every light lit, every company named, **"I count seven hard-to-replace control points"** (empty Chokepoint Board), and a scope-safe Economics Ledger. Journey Bar introduced. Title card. **Build and record LAST.** |

## ACT I — THE IMPOSSIBLE OBJECT (13 min)

| id | title | min | tier | covers |
|---|---|---|---|---|
| `foundations` | The Impossible Object | 8 | — | Foundations as forensic teardown of the cold-open chip: zoom ladder die→transistor-as-switch; logic vs memory; what "2nm" really is (marketing vs gate/metal pitch); FinFET→GAA in 90 seconds; **yield seeded** (one dust particle, one dead $40k die); ends on the two exponentials — density up, fab cost up. The cost curve is the last slide. |
| `great-unbundling` | Why the Industry Shattered | 5 | — | Cost curve → Morris Chang's insight → **derive** fabless/foundry/IDM/equipment as economic consequences; archetypes become the Map legend; margin ladder teased. Cliffhanger: "Our chip starts as a file. In Santa Clara." |

## ACT II — THE BLUEPRINT (19 min)

| id | title | min | tier | covers |
|---|---|---|---|---|
| `nvidia` | The Designer | 7 | P | Designing THE chip: what a GPU does (parallel matrix math), CUDA as the real moat, FY26's 71.1% companywide GAAP gross margin, and what Nvidia does NOT own (fab, memory, packaging). Product economics remain undisclosed. **Seeds: memory wall · reticle limit.** Establishes the scope rules used by the first act-end Economics Ledger. |
| `eda` | The Invisible Duopoly | 5 | D | You cannot hand-draw 200B transistors: the design-flow diagram (RTL→synthesis→P&R→verification→tape-out); Synopsys vs Cadence 40-year duel, Siemens EDA card; high-70s to mid-80s gross margins. **Stamp #1 (EDA duopoly). Seed: export lever.** |
| `arm-riscv` | Empire vs Insurgent | 4 | D | Arm's toll-booth economics (royalty on ~99% of smartphones); architecture vs core licenses; RISC-V as open insurgent; instruction sets as political territory. |
| `fabless-field` 🔧 | The Crowd Design Freed | 3 | C | Card montage on the Map: AMD, Apple (**IOU → TSMC segment**), Qualcomm, Broadcom + Marvell as the hyperscaler custom-silicon counterweight (TPU/Trainium), MediaTek. Thesis: design is crowded precisely because manufacturing is not. Cliffhanger: a perfect blueprint, zero factories — the file flies 8,000 miles to an island. |

## ACT III — THE ISLAND (19 min)

| id | title | min | tier | covers |
|---|---|---|---|---|
| `tsmc` | The Island Foundry | 10 | P | Crown jewel of the episode. Morris Chang founding at 56; how a foundry actually works (trust, "we compete with no one"); the yield-learning flywheel (volume→yield→customers→capex→volume); **Apple IOU lands** (node buyouts); N2/A16 as of 2026; Arizona/Kumamoto/Dresden vs what stays home. **Stamp #2 (leading-edge logic). Seed: Taiwan flag — planted, not detonated.** |
| `intel` | The Fallen King | 6 | T | Mode shift to human tragedy, the emotional midpoint: 50-year reign, memory exit 1985, missed mobile, the 10nm yield catastrophe (reinforces yield), the passed-on-EUV decision (reinforces ASML), the 18A/14A bet-the-company foundry pivot, the US government stake — too strategic to fail. |
| `foundries-field` 🔧 | The Rest of the Grid | 3 | C | The starting grid shrank ~25 (2001) → 3, animated on the Act I cost curve: Samsung Foundry (why #2 is brutal), GlobalFoundries (stepped OFF the treadmill, rationally), Rapidus card, SMIC (**IOU → geopolitics act**). Cliffhanger: "TSMC's fabs are cathedrals. But TSMC doesn't build the machines inside them. Nobody you've heard of does." |

## ACT IV — THE FAB TOUR (24 min)

*The anti-listicle centerpiece: equipment AND materials fused into one continuous
narrative — three months, ~1,000 steps, one wafer. The Flow Strip
(deposit→litho→etch→implant→CMP→measure) is taught once, then every company enters
with their step glowing.*

| id | title | min | tier | covers |
|---|---|---|---|---|
| `life-of-a-wafer` | Three Months, a Thousand Steps | 5 | — | The keystone teach: masks arrive; the loop across ~80 layers; FEOL vs BEOL ("city streets above the buildings"); cleanroom class; yield now felt viscerally. Wafer start: Shin-Etsu/SUMCO eleven-nines silicon. **Stamp #3 (Japan materials cluster opens).** |
| `asml` ✅→rebuild | The Printing Press | 8 | P | Existing segment retrofit: top-and-tail into the tour; compress machine-wonder to 90s (post-Veritasium), spend the time on monopoly economics, €28B-class backlog, Zeiss as the chokepoint-inside-the-chokepoint, High-NA, the export-license weapon. **Stamps #4 (ASML) + #5 (Zeiss). Seed: multi-patterning (→ SMIC payoff).** |
| `equipment-dep-etch` | The Sculptors | 5 | E | The add/remove dance on the Flow Strip: Applied Materials (broadest arsenal), Lam (etch depth — 100+-layer NAND holes), TEL card (coat/develop near-monopoly bolted to every scanner), ASM International card (ALD). |
| `kla` | The Inspector | 3 | P-lite | Lands on the yield concept: process control as the fab's immune system; finding a virus-sized defect on a football field; why inspection intensity rises every node; the margin proof. |
| `materials` 🔧 | The Japanese Basement | 3 | E | Fourth Flow-Strip pass — what each step consumes: photoresist (JSR/TOK — the 2019 Japan–Korea export spat as the one-story proof), Hoya mask blanks, gases (the neon/Ukraine story), CMP slurries, Spruce Pine quartz. "The deeper you go, the more Japanese it gets." |

## INTERLUDE — THE OTHER 90% (5 min)

| id | title | min | tier | covers |
|---|---|---|---|---|
| `other-90` 🔧 | The Other 90% | 5 | E | Deliberate breather after the deepest stretch + the honesty beat: most chips never touch the leading edge. TI, Infineon, STMicro, NXP, Renesas, ADI as one themed sweep — cars (~1,000+ chips each), factories, grids; the $0.30 chip that halted global auto production in 2021; analog moats measured in decades, not nanometers. |

## ACT V — MEMORY & THE ASSEMBLY (17 min)

| id | title | min | tier | covers |
|---|---|---|---|---|
| `memory-hbm` | The Memory War | 9 | D | Logic vs memory callback; DRAM/NAND commodity boom-bust purgatory (a genuinely different microeconomics); then **the memory-wall seed pays off**: HBM flips the script — stacked DRAM beside the GPU, sold through qualification and long-term capacity agreements; SK Hynix's ambush of Samsung, Micron's charge; the 2025–26 supercycle; third-party estimates put HBM above half of the physical package cost. **Stamp #6 (qualified HBM capacity).** |
| `packaging` | The Twist | 8 | P-lite | Mystery framing: as front-end output ramped, CoWoS capacity, HBM, and later substrates constrained AI-accelerator shipments. **Reticle-limit seed pays off**: CoWoS explained; chiplets (yield logic returns); hybrid bonding/SoIC; ABF substrate card; OSAT + automated-test sweep. **Stamp #7 — the Board completes: "TSMC is on this board twice."** This is a second constrained capability, not a claim that advanced packaging has no alternatives. The completed package leaves for system integration and hands off to geopolitics. |

## ACT VI — THE BOARD IS THE WORLD (17 min)

| id | title | min | tier | covers |
|---|---|---|---|---|
| `geopolitics` | The Board Is the World | 12 | — | 60s callback montage re-anchoring the full Board. Export controls as chess told through the levers the viewer now owns (EUV license, EDA, entity list, the H20/China saga); China's counter-moves (rare earths, Nexperia) and full-stack push (SMIC — **multi-patterning seed pays off**, Huawei, SMEE, CXMT, domestic EDA) honestly assessed; CHIPS Act → equity era; then the Taiwan wargame walked light-by-light across the viewer's own Board — sourced to published wargames, hedged, silicon-shield logic argued both ways. **Build last; slides swappable.** |
| `synthesis` | Where the Value Pools | 5 | — | The Economics Ledger closes with scope-safe product evidence and comparable company gross margins; replacement difficulty is ranked qualitatively; the fully lit Map is re-read as an economics map; AI demand then extends the constraint into infrastructure. |

---

## The Seven Chokepoints (locked before recording)

Criterion: *a technology or supply stage concentrated in one supplier, a small
qualified set, or one geography, where disruption would materially constrain
leading-edge AI-chip output before substitutes could qualify or scale.*

1. **Synopsys + Cadence** — the two largest EDA vendors anchor many certified
   leading-edge flows; Siemens is the important third supplier.
2. **TSMC (wafers)** — about 90% of ≤7nm-class merchant foundry logic.
3. **Japan's materials cluster** — concentrated advanced resists, wafers, and EUV mask blanks.
4. **ASML** — the sole commercial supplier of EUV lithography systems.
5. **Carl Zeiss SMT** — the sole supplier of projection optics for ASML's EUV systems.
6. **HBM capacity** — NVIDIA named three Rubin HBM4 sources, but available volume
   remains concentrated; SK hynix entered 2026 with the largest share.
7. **TSMC (CoWoS packaging)** — the same company, a second constrained capability for products qualified on its proprietary flow.

On-screen honesty: the Board is a judgment call; alternates (Ajinomoto ABF, Shin-Etsu
wafers, Advantest test) appear as "honorable mentions" in synthesis.

## The Seed → Payoff Ledger (redline with care — pairs must not be severed)

| seed | planted in | pays off in |
|---|---|---|
| Memory wall ("keeping the GPU's arithmetic units supplied is a bandwidth problem — hold that thought") | `nvidia` | `memory-hbm` |
| Reticle limit (the die is as big as physics allows) | `nvidia` | `packaging` |
| Yield (one particle, one dead die) | `foundations` | `life-of-a-wafer` → `kla` → `intel` → chiplets in `packaging` |
| Multi-patterning (EUV's workaround era) | `asml` | SMIC in `geopolitics` |
| Taiwan flag | `tsmc` | wargame in `geopolitics` |
| EUV export license | `asml` | `geopolitics` |
| Apple IOU | `fabless-field` | `tsmc` |
| SMIC IOU | `foundries-field` | `geopolitics` |
| "Owns no factories" | `nvidia` | all later-act Economics Ledger entries |

## Runtime budget

4 + 13 + 19 + 19 + 24 + 5 + 17 + 17 = **118 min nominal** → records long; pressure
valves 🔧 (`fabless-field`, `foundries-field`, `materials`, `other-90`) absorb up to
~13 min of cuts while preserving the 105-minute floor. Protagonists are never cut.

## Build order

1. `foundations` + `great-unbundling` (everything depends on their concepts/diagrams)
2. `tsmc`, `nvidia` (protagonists; anchor the spine)
3. `life-of-a-wafer` + `asml` rebuild + rest of Act IV (share the Flow Strip)
4. `memory-hbm`, `packaging`, `intel`
5. Ensembles/cards (Acts II–III remainder, interlude)
6. `geopolitics`, `synthesis` (volatile — build last)
7. `cold-open` (only once every device has survived)

Research packs: one per segment in `research/` (`foundations.md` serves Act 0–I;
`geopolitics.md` serves Act VI). Every segment header carries `seeds:` / `pays_off:`
per AUTHORING.md.
