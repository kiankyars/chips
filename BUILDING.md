# BUILDING.md — how a segment gets built

The concrete spec for turning `curriculum.md` rows + `research/` packs into
`slides/segments/<id>.md`. AUTHORING.md is the contract; this is the toolbox.
Read order for a builder: `AUTHORING.md` → `STRATEGY.md` §3 → your row in
`curriculum.md` → your research pack(s) → this file.

## Slidev conventions

- Slides are separated by `---` on its own line. Optional per-slide frontmatter
  sits between the separators (e.g. `layout: section`, `layout: center`).
- Speaker notes = one HTML comment at the END of each slide, in the
  BEATS / FACT AMMO / LINE THAT LANDS shape from AUTHORING.md.
- UnoCSS utility classes work in HTML (`<div class="grid grid-cols-2 gap-8">`).
- Images: `![desc](/diagrams/rendered/<file>.svg)` — the `public/diagrams`
  symlink serves them.
- Keep slides visual: big numbers, few words. ~1 slide per 45–60 s of runtime
  (an 8-min segment ≈ 8–11 slides).

## Available structural SVGs (never hand-roll these)

| asset | states |
|---|---|
| `map-<state>.svg` | `dark, design, manufacture, equipment, memory, backend, full` (cumulative lighting) |
| `journey-<k>.svg` | `0`(none) … `6`(DATA CENTER active) |
| `flow-strip.svg` / `flow-<step>.svg` | steps: `deposit, coat, expose, etch, implant, polish, measure` |
| `board-<n>.svg` | `0`…`7` chokepoint stamps, fills in earn order |
| `euv-light-path.svg` | one state |

**Map state per segment**: cold-open `dark` · great-unbundling `full` (first
reveal) · Act II segments `design` · Act III + other-90 `manufacture` ·
Act IV `equipment` · memory-hbm `memory` · packaging `backend` ·
geopolitics/synthesis `full`. foundations uses no map (it's inside the object).

**Journey state per act opener**: cold-open `0` · foundations `1` · nvidia `2` ·
tsmc `3` (stays through Act IV) · memory-hbm `4` · packaging `5` (fills to `6`
on the "chip is done" slide) · geopolitics `6`.

**Board state after stamps**: eda → `board-1` · tsmc → `board-2` ·
life-of-a-wafer → `board-3` · asml → `board-5` (earns #4 ASML and #5 Zeiss) ·
memory-hbm → `board-6` · packaging → `board-7` (complete). geopolitics opens on
`board-7` as the callback.

## Recurring slide patterns

**1. Opener/navigator (every segment's first slide).** Section title + the
segment's map state + one-line angle setup. The region lighting IS the "you are
here."

**2. Scoreboard (every major player).** Identical layout so comparison becomes
rhythm — copy this structure exactly:

```html
<div class="border-2 border-gray-400 rounded-lg p-4 mt-6">
  <div class="grid grid-cols-5 gap-4 text-center">
    <div><div class="text-3xl font-bold">$XX B</div><div class="text-sm opacity-60">revenue FY25</div></div>
    <div><div class="text-3xl font-bold">XX%</div><div class="text-sm opacity-60">gross margin</div></div>
    <div><div class="text-3xl font-bold">XX%</div><div class="text-sm opacity-60">market share</div></div>
    <div><div class="text-xl font-bold leading-tight mt-2">moat in one line</div></div>
    <div><div class="text-3xl font-bold">~XX yrs</div><div class="text-sm opacity-60">to replace</div></div>
  </div>
  <div class="text-xs opacity-40 text-right mt-2">as of Q2 2026</div>
</div>
```

Years-to-replace = "a state with unlimited money needs ~N years to replicate
this player." Propose a defensible number from the pack's moat section; the
synthesis segment ranks them all.

**3. Stamp slide (when a chokepoint is proven).** The proof beat, then
`board-<n>.svg` + one line naming what was just stamped.

**4. Money-Bar toll (act-end segments only:** fabless-field, foundries-field,
materials, packaging, synthesis**).** Simple HTML stacked bar showing the
running decomposition of one GB300-class accelerator's price; label each toll
with $-range and margin, mark analyst estimates with `~`. Values come from the
packs (nvidia/packaging/memory-hbm carry the BOM-class numbers). EDA/equipment
enter as "amortized toll" with an honesty flag.

**5. Closer.** Last slide beat = 15–30 s "what you now know" + the cliffhanger
handoff into the next segment (write it as a question the next segment answers).

## Hard rules

1. **Every number comes from a research pack**, cited in FACT AMMO as
   `[research/<pack> §section]`. No invented numbers. If the pack entry carries
   a VERIFY tag, carry it forward next to the number — but inside a beat block
   write it as `[VERIFY: ... ]` (square brackets), NEVER `<!-- VERIFY -->`.
   HTML comments cannot nest: a `<!-- VERIFY -->` inside the `<!-- ... -->` note
   block closes the note early and spills your beats onto the visible slide.
2. **Beats are skeleton, never script** (AUTHORING.md). Lines-that-land are
   offers, not requirements.
3. **Numbers with handles**: every headline number in FACT AMMO gets a physical
   analogy.
4. **Simplification hedges**: compressed teaches get a one-line "direction of
   the lie" hedge in FACT AMMO.
5. **Seeds/pays_off from your curriculum row are load-bearing** — plant and cash
   them explicitly in beats, and list them in the segment header.
6. **Angle is proposed, status is `draft`** — the creator owns the angle line.
7. A builder writes ONLY its own `slides/segments/<id>.md`.
