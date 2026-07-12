# STRATEGY — how CHIPS becomes the best semiconductor course of all time

*Written 2026-07. This document is the verdict on the v1 approach and the design
system for v2. It was produced by three independent course-architecture studies
(narrative/retention, pedagogy/concept-sequencing, competitive differentiation)
that converged on the same core moves — the convergence is the confidence.*

---

## 1. Verdict on v1

**The motivation is right and survives untouched.** A comprehensive, player-by-player,
diagram-heavy, long-form breakdown of the semiconductor industry — built course-as-code,
narrated from beat sheets — is exactly the artifact the world is missing. Keep:
the repo-as-source-of-truth model, the AUTHORING.md contract (Claude researches/builds,
you own angles and speak in your own words), the fact-pack + VERIFY discipline, and
the ASML segment's instincts (angle-driven, lines-that-land, forward-plants).

**The v1 curriculum does not survive.** It is a syllabus, not a show — and its own text
contains the failure mode it fears:

1. **"~5 min on each major player" IS the listicle.** Parts 3–8 are taxonomy buckets
   holding company lists. Twenty-five sequential profiles at similar depth is an
   Asianometry playlist compressed — and Asianometry already made each one, better,
   individually.
2. **Nothing carries across part boundaries.** No device makes minute 70 depend on
   minute 20. Independent segment *files* are good engineering; independent segment
   *experiences* are fatal to a 2-hour watch.
3. **Dependency violations.** Part 5 sells KLA and Lam without ever teaching what a
   process step is; *yield — the industry's central economic fact — is taught nowhere.*
4. **18 minutes of unmotivated setup.** Physics-first works in a university; on YouTube,
   foundations are tolerated only when a mystery already requires them.
5. **Geopolitics as appendix.** The most dramatic material in the industry is parked at
   Part 9 as a "recap." It should be the *payoff* of everything planted before it.
6. **Intel is wasted** — split across two roster bullets when it's the best human arc
   in the industry (the fallen king betting the company on 18A).
7. **The money thesis arrives 105 minutes late.** "Where margins pool" is the one thing
   no free competitor quantifies across all players — it's a 6-min afterthought in v1.
8. **The ASML segment's centerpiece is outflanked.** Veritasium's late-2025 EUV video
   (10M+ views) now owns machine-wonder. We concede the *how* and own the *who/why/how-much*.

## 2. The market gap (why this wins)

Every competitor owns a fragment; nobody owns the intersection:

| Who | Owns | Lacks |
|---|---|---|
| Asianometry | Episodic depth, hundreds of videos | One sitting, one map, one architecture |
| Chip War (Miller) | History | The AI era, diagrams, quantification; ends before export controls matured |
| Branch Education / Veritasium | Process physics with 1,000-hour animation budgets | Industry structure, money, moats |
| SemiAnalysis / Fabricated Knowledge | Quantified supply chain | Free, visual, generalist-legible |
| Acquired | Single-company 3-hour histories | The whole board, cross-comparison, visuals |

**The empty space:** the free, visual, July-2026-current, single-sitting answer to
*"show me the WHOLE system and where the money pools."* That is the course.

## 3. The design system (v2)

The spine: **follow one chip.** A Blackwell/GB300-class Nvidia accelerator is followed
from idea → file → island → fab → memory → package → data center. Every company is
*encountered at the moment the chip cannot proceed without it* — never profiled in
taxonomic sequence. The industry's real structure (a linear value chain gated by
absolute monopolies) is the oldest retention machine in storytelling: a journey with
gates, and a gatekeeper at each gate.

### The seven persistent devices

1. **The Map.** One master industry map, shown fully dark in the cold open, lit region
   by region, fully lit at minute ~100 — then re-read twice: as a *money map*, then as
   a *weapons map*. Present in every segment as a corner "you are here" navigator.
   Ships in the repo as a poster (the shareable artifact).
2. **The Journey Bar.** SAND → DESIGN → FAB → MEMORY → PACKAGE → DATA CENTER progress
   strip at every act break. The viewer can always locate themselves at minute 9 or 99.
3. **The Chokepoint Board.** The cold open promises: *"I count seven companies that are
   single points of failure for the modern world."* A stamp is earned on screen each
   time one is proven; the completed board opens the geopolitics act. (The seven, with
   criteria, are fixed in curriculum.md — the count is locked before recording.)
4. **The Money Bar.** A price waterfall of the one chip — every act ends with its toll:
   "TSMC charged ~$X at ~Y% margin." Completes only in the finale. (Equipment/EDA enter
   as honest "amortized tolls.")
5. **The Scoreboard.** An identical stat block for every major player — revenue, gross
   margin, share, moat-in-one-line, **years-to-replace** — dated "as of Q2 2026."
   Years-to-replace (how long would a state with unlimited money need to replicate this
   player?) is the course's original, most quotable metric.
6. **The Flow Strip.** One deposition→litho→etch→implant→CMP→metrology ribbon, taught
   once in "Life of a Wafer," then reused for every equipment and materials player —
   each enters with their step glowing. This is the structural cure for five
   same-shaped vendor profiles.
7. **The Seed→Payoff Ledger.** Explicitly engineered pairs, documented in curriculum.md
   so redlining never severs them: memory wall (Nvidia→HBM), reticle limit
   (Nvidia→packaging), multi-patterning (ASML→SMIC), yield (foundations→KLA→Intel→chiplets),
   Taiwan flag (TSMC→wargame), EUV export license (ASML→chip war).

### The depth rules (how comprehensiveness stops being a listicle)

- **Cast tiers, not equal profiles.** Protagonists (Nvidia, TSMC, ASML) get 7–10 min
  deep dives. A tragedy (Intel) gets its own register. Duels get told as one contest
  (Synopsys/Cadence; Arm/RISC-V; SK Hynix/Samsung/Micron). Ensembles get themed sweeps
  (fabless crowd, analog world, materials, OSATs). Cameos get a Scoreboard card (60–90s).
  A rivalry is a story; two adjacent profiles are a list.
- **Concept placement rule.** Teach a concept abstractly only if ≥3 players depend on it
  (transistor, node, archetypes, process flow, yield). Otherwise teach it inside the
  company where it's most vivid (licensing→Arm, commodity cycles→DRAM, learning curve→TSMC).
- **Physics just-in-time.** One ruthless 8-minute primer ending on the fab-cost curve —
  the ONE graph that explains all consolidation — then physics only when a moat demands it.
- **Derive, don't assert.** The four archetypes fall out of the cost curve via Morris
  Chang's unbundling; the viewer should *derive* the chip war from the completed board
  before the narrator says it.
- **Comprehensiveness as artifact.** Every named player links to a full dossier in this
  repo; the map poster carries the long tail. The player-by-player promise is kept in
  full without spending runtime on flat profiles.
- **Numbers with handles.** No headline number without a physical analogy (Zeiss mirror
  scaled to Germany → largest bump under 1mm; a defect = finding a marble from a jet).

### Mode rotation (retention mechanics)

No two adjacent segments in the same register: physics → business → human tragedy →
process tour → war story. Recap machinery: 20–30s "what you now know" closers, two
45s act-break map rebuilds, and a 60s callback montage immediately before the
geopolitics climax. The deliberate breather ("The Other 90%" — analog/mature) sits
right after the deepest technical stretch (the fab tour), where the retention graph
would otherwise die.

## 4. What changes in production

- **Structural diagrams become code.** The Map's N lighting states, the journey bar,
  the flow strip, the boards — consistency across states is impossible with GPT-image.
  These are hand-built SVGs living in `diagrams/` and versioned like everything else.
  GPT-image prompts remain for decorative one-offs.
- **Record act-by-act, never in one sitting.** Narrator energy is the unmodeled variable.
- **Build and record the cold open LAST.** It front-loads four promises (map, board,
  money bar, "seven"); it can only be cut once every device has survived the build.
- **Geopolitics slides built swappable.** Export rules move monthly; single slides must
  be replaceable without re-recording neighbors.
- **Pre-record refresh pass.** Every dated number re-verified within 30 days of recording;
  the fact packs' VERIFY discipline plus `As-of:` stamps make this a diff, not a rewrite.
- **Part-transition beats are highest-redline-priority.** Cliffhanger handoffs live or
  die on your delivery; own those lines first.

## 5. Known risks (accepted, with mitigations)

- **Runtime creep** (nominal ~112 min records long): ensemble/montage segments are the
  designated pressure valves — cut there first, never from protagonists.
- **The "seven" is contestable** (is Zeiss inside ASML? does TSMC count twice?):
  the criteria and count are fixed in curriculum.md before the cold open is recorded;
  "TSMC appears on this board twice" is itself a line that lands.
- **Fact rot** (HBM share, Intel status, export rules move monthly): course-as-code is
  the mitigation — regenerate slides from refreshed packs.
- **The chip device dates the course:** the chip's identity lives in one intro slide and
  the money-bar labels; swappable for the 2028 refresh.
- **Nitpick risk from expert viewers:** beat sheets carry "this is simplified — here's
  the direction of the lie" hedges for the narrator to voice.

## 6. Execution status

- v2 curriculum: `curriculum.md` (rewritten — segment list, minutes, tiers, devices,
  seed→payoff ledger, the seven chokepoints with criteria).
- Research: one fact pack per segment in `research/`, web-verified to July 2026,
  primary-source-first, every number footnoted.
- Segments: built per AUTHORING.md as `status: draft` with proposed angles — your
  angle pass and redline remain the two human steps, per the contract.
- Structural SVGs: `diagrams/` (map states, journey bar, flow strip, boards).
