# CHIPS — curriculum v2

One course, 110 min nominal after consolidation (target 105–115). The spine: **follow one chip** —
a 2025–26 Blackwell Ultra/GB300 Nvidia accelerator — from idea to installed cluster, with
a short Rubin bridge to the 2026 frontier. Every player
is encountered at the moment the chip cannot proceed without them. See `STRATEGY.md`
for why this architecture; this file is the operational map.

Legend: tier **P** = protagonist deep-dive · **T** = tragedy · **D** = duel ·
**E** = ensemble sweep · **C** = cards · ✅ = built · 🔧 = pressure valve (cut here
first if over runtime, never from protagonists)

Persistent devices in every segment: the Map corner-navigator (+ region lit on entry),
Journey Bar at act breaks, Chokepoint stamps when earned, Economics Ledger at act ends,
Comparable Scoreboard blocks for selected players, with every metric explicitly dated.

---

## ACT 0 — THE OBJECT (6 min)

| id | title | min | tier | covers |
|---|---|---|---|---|
| `cold-open` | The Object | 6 | — | One 2025–26 GB300-class accelerator held on screen; zoom into one dual-die Blackwell Ultra GPU; walk one inference request through network ingress, Grace, HBM, shared L2, and an SM while separating the occasional SSD model-load path; scale from 208B transistors to ~$800B of 2026 hyperscaler capex and the near-$1T 2027 forecast; bridge to Rubin without changing the dependency map; introduce the six-stage production route. Journey Bar introduced. Title card. **Build and record LAST.** |

## ACT I — THE IMPOSSIBLE OBJECT (12 min)

| id | title | min | tier | covers |
|---|---|---|---|---|
| `foundations` | The Impossible Object | 9 | — | Foundations as forensic teardown of the cold-open chip: zoom ladder die→transistor-as-switch; logic vs memory; what "2nm" really is; PPA taught as a three-way implementation trade-off; FinFET→GAA in 90 seconds; **yield seeded** with the defect visual and first-order Poisson model; Dennard scaling breaks into the power wall; ends on the two exponentials — density up, fab cost up. The cost curve is the last slide. |
| `great-unbundling` | Why the Industry Shattered | 3 | — | The hand-laid-out Intel 4004 anchors how far design complexity traveled. The Foundations cost curve becomes the cause rather than another chart: foundries pool demand, designers shed factories, and fabless/foundry/IDM/equipment emerge as distinct survival models. |

## ACT II — THE BLUEPRINT (15 min)

| id | title | min | tier | covers |
|---|---|---|---|---|
| `nvidia` | The Designer | 5 | P | Designing THE chip: what a GPU does (parallel matrix math), CUDA as the real moat, one scope-safe FY26 scoreboard, and what Nvidia does NOT own (fab, memory, packaging). **Seeds: memory wall · reticle limit.** |
| `eda` | The Invisible Duopoly | 5 | D | You cannot hand-draw 200B transistors: the design-flow diagram (RTL→synthesis→P&R→verification→tape-out); Synopsys vs Cadence 40-year duel, Siemens EDA card; high-70s to mid-80s gross margins. **Stamp #1 (EDA duopoly). Seed: export lever.** |
| `arm-riscv` | Empire vs Insurgent | 3 | D | Arm's licensing economics, its expansion through Compute Subsystems into AGI production silicon, the resulting licensee tension, and RISC-V as an open alternative. |
| `fabless-field` 🔧 | The Crowd Design Freed | 2 | C | Three businesses share one manufacturing model: Nvidia/AMD/Qualcomm/MediaTek sell standard chips, Apple consumes its own silicon, and Broadcom/Marvell co-design custom chips. All depend on outside foundries, handing the story to TSMC. |

## ACT III — THE ISLAND (18 min)

| id | title | min | tier | covers |
|---|---|---|---|---|
| `tsmc` | The Island Foundry | 10 | P | Crown jewel of the episode. Morris Chang founding at 56; trust and neutrality; the yield-learning flywheel; **Apple IOU lands**; feature-first versus production leadership through a five-part platform scorecard; N2/A16 as of 2026; Q2 2026 economics; Arizona/Kumamoto/Dresden versus what stays home. **Stamp #2. Seed: Taiwan flag.** |
| `intel` | The Fallen King | 6 | T | Mode shift to human tragedy: 50-year reign, missed mobile, the 10nm yield and multipatterning catastrophe, 18A production, and a 14A commitment whose fab expansion remains demand-gated. Q2 2026 foundry economics keep the stakes current. |
| `foundries-field` 🔧 | The Rest of the Grid | 2 | C | Samsung Foundry, GlobalFoundries stepping off the treadmill, Rapidus, and SMIC (**IOU → geopolitics act**), followed by the handoff into fab equipment. |

## ACT IV — THE FAB TOUR (24 min)

*The anti-listicle centerpiece: equipment AND materials fused into one continuous
narrative — three months, ~1,000 steps, one wafer. The Flow Strip
(deposit→litho→etch→implant→CMP→measure) is taught once, then every company enters
with their step glowing.*

| id | title | min | tier | covers |
|---|---|---|---|---|
| `life-of-a-wafer` | Three Months, a Thousand Steps | 5 | — | The keystone teach: before the fab, Spruce Pine high-purity quartz becomes the crucible around the silicon melt, not the wafer; then the mask set arrives, the process loop gets concrete deposit-pattern-etch and doping zooms, mask level is separated from physical layer, multi-patterning explains why one design layer can need several masks, and contamination makes yield visceral. Wafer start: Shin-Etsu/SUMCO eleven-nines silicon. The dedicated Materials segment proves the supplier cluster. |
| `asml` | The Printing Press | 8 | P | EUV mechanism and integrated supply chain; Q2 2026 economics; bookings kept distinct from backlog; ZEISS as the chokepoint inside the chokepoint; selected-layer High-NA production at Intel; targeted export licensing. **Stamps #4 + #5. Seed: multi-patterning.** |
| `equipment-dep-etch` | The Sculptors | 5 | E | 3D stacking turns the earlier add/remove loop into equipment demand: Applied Materials (broadest arsenal), Lam (etch depth — 100+-layer NAND holes), TEL card (coat/develop near-monopoly bolted to every scanner), ASM International card (ALD). |
| `kla` | The Inspector | 3 | P-lite | Lands on the yield concept: process control as the fab's immune system; finding a virus-sized defect on a football field; why inspection intensity rises every node; FY2026 margin proof. |
| `materials` 🔧 | The Japanese Basement | 3 | E | Fourth Flow-Strip pass — what each step consumes: photoresist (JSR/TOK — the 2019 Japan–Korea export spat as the one-story proof), Hoya mask blanks, gases (the neon/Ukraine story), CMP slurries, and the Spruce Pine/Helene supply shock. The concentration and qualification evidence earns **Stamp #3 (Japan materials cluster)**. |

## INTERLUDE — THE OTHER 90% (3 min)

| id | title | min | tier | covers |
|---|---|---|---|---|
| `other-90` 🔧 | The Other 90% | 3 | E | Deliberate breather after the deepest stretch + the honesty beat: most chips never touch the leading edge. TI, Infineon, STMicro, NXP, Renesas, ADI as one themed sweep — cars (~1,000+ chips each), factories, grids; the $0.30 chip that halted global auto production in 2021; analog moats measured in decades, not nanometers. |

## ACT V — MEMORY, ASSEMBLY & NETWORKING (18 min)

| id | title | min | tier | covers |
|---|---|---|---|---|
| `memory-hbm` | The Memory War | 8 | D | Logic vs memory callback; commodity cyclicality; then **the memory-wall seed pays off**. DRAM scale is kept distinct from HBM leadership, and the consolidated supplier race focuses on qualification and capacity rather than repeating share tables. **Stamp #6.** |
| `packaging` | The Twist | 6 | P-lite | One CoWoS shortage opener; then **the reticle-limit and yield seeds return** inside the progressive package build as separate compute dies, HBM, and interconnect become one accelerator. Substrates, OSAT, and test complete the chain. **Stamp #7 completes the Board.** |
| `networking` | The Fabric | 4 | P-lite | Packaging creates one accelerator; NVLink/NVSwitch scales up inside the rack, Ethernet or InfiniBand scales out across racks, all-reduce makes communication part of the computation, and NICs, switches, and optics complete the data path. |

## ACT VI — THE BOARD IS THE WORLD (15 min)

| id | title | min | tier | covers |
|---|---|---|---|---|
| `geopolitics` | The Board Is the World | 11 | — | The completed Board hands into a full-map policy reread. Export controls as chess told through the levers the viewer now owns (EUV license, EDA, entity list, the H20/China saga); China's counter-moves (rare earths, Nexperia) and full-stack push (SMIC — **multi-patterning seed pays off**, Huawei, SMEE, CXMT, domestic EDA) honestly assessed; then the Taiwan wargame — sourced to published wargames and hedged. **Build last; slides swappable.** |
| `synthesis` | Where the Value Pools | 4 | — | One like-for-like company-margin comparison; replacement difficulty ranked qualitatively; the rack/infrastructure endpoint; and one final full-map reread. |

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

On-screen honesty: the Board is a judgment call; adjacent concentrations remain documented
in the research packs without expanding the locked seven-point list on screen.

## The Seed → Payoff Ledger (redline with care — pairs must not be severed)

| seed | planted in | pays off in |
|---|---|---|
| Memory wall ("keeping the GPU's arithmetic units supplied is a bandwidth problem — hold that thought") | `nvidia` | `memory-hbm` |
| Reticle limit (the die is as big as physics allows) | `nvidia` | `packaging` |
| Yield (one particle, one dead die) | `foundations` | wafer/KLA elaboration → Intel's historical consequence → callback in the package assembly |
| Multi-patterning (EUV's workaround era) | `asml` | SMIC in `geopolitics` |
| Taiwan flag | `tsmc` | wargame in `geopolitics` |
| EUV export license | `asml` | `geopolitics` |
| Apple IOU | `fabless-field` | `tsmc` |
| SMIC IOU | `foundries-field` | `geopolitics` |
| "Owns no factories" | `nvidia` | the design/foundry split in `fabless-field` |

## Runtime budget

5 + 12 + 15 + 18 + 24 + 3 + 18 + 15 = **110 min nominal** after the duplicate-content
pass. Pressure valves 🔧 (`fabless-field`, `foundries-field`, `materials`, `other-90`)
can still absorb a few minutes if the recorded delivery runs long.

## Build order

1. `foundations` + `great-unbundling` (everything depends on their concepts/diagrams)
2. `tsmc`, `nvidia` (protagonists; anchor the spine)
3. `life-of-a-wafer` + `asml` + rest of Act IV (share the Flow Strip)
4. `memory-hbm`, `packaging`, `networking`, `intel`
5. Ensembles/cards (Acts II–III remainder, interlude)
6. `geopolitics`, `synthesis` (volatile — build last)
7. `cold-open` (only once every device has survived)

Research packs live in `research/`; each segment declares one or more packs in its
header (`foundations.md` serves Act 0–I; `geopolitics.md` serves Act VI). Every segment header carries `seeds:` / `pays_off:`
per AUTHORING.md.
