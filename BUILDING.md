# BUILDING.md — how a segment gets built

The concrete spec for turning `curriculum.md` rows + `research/` packs into
`slides/segments/<id>.md`. AUTHORING.md is the contract; this is the toolbox.
Read order for a builder: `AUTHORING.md` → `STRATEGY.md` §3 → your row in
`curriculum.md` → your research pack(s) → this file.

## Slidev conventions

- Slides are separated by `---` on its own line. Optional per-slide frontmatter
  sits between the separators (e.g. `layout: section`, `layout: center`).
- Speaker notes = one HTML comment at the END of each slide, containing two to
  four concise bullet prompts as specified in AUTHORING.md.
- UnoCSS utility classes work in HTML (`<div class="grid grid-cols-2 gap-8">`).
- Images: `![desc](/diagrams/rendered/<file>.svg)` — Slidev resolves referenced
  diagram assets from the repository and fingerprints them into the build.
- Keep slides visual: one object, mechanism, comparison, or piece of evidence per
  frame. Narration carries the explanation. ~1 slide per 45–60 s of runtime
  (an 8-min segment ≈ 8–11 slides).

### Artifact-first visual sequences

Use a locked-camera sequence when the teaching point is a physical change or
assembly. Keep the object in the same position and change only the state being
explained. The current reference sequences are:

- planar → FinFET → gate-all-around
- scanner scale → reticle/field/wafer → EUV path → supplier modules
- substrate → interposer → logic/HBM → completed package

Each frame uses `class: visual-sequence` and `transition: fade`. It has one
short kicker, one factual caption, and an optional source tag. Do not add a
second explanatory panel, cards, or a conventional title. Put the remaining
argument in the speaker-note bullets.

Scene source belongs in `diagrams/src/scenes/` and must be called from
`diagrams/src/generate.mjs`, so `npm run diagrams` reproduces every frame.

## Available structural SVGs (never hand-roll these)

| asset | states |
|---|---|
| `map-<state>.svg` | `dark, design, manufacture, equipment, memory, backend, full` (cumulative lighting) |
| `journey-<k>.svg` | `0`(none) … `6`(DATA CENTER active) |
| `flow-strip.svg` / `flow-<step>.svg` | steps: `deposit, coat, expose, etch, implant, polish, measure` |
| `board-<n>.svg` | `0`…`7` chokepoint stamps, fills in earn order |
| `euv-light-path.svg` | one state |
| `transistor-*.svg` | planar, FinFET, and gate-all-around locked-camera states |
| `asml-*.svg` | scanner scale, reticle field, EUV path, and supplier modules |
| `package-*.svg` | substrate, interposer, dies/HBM, and completed package |

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

**2. Evidence frame (every major player).** Lead with the artifact, process,
factory, machine, or measured comparison that proves the point. A scoreboard is
allowed only when the audience is actively comparing several companies on the
same dimensions; it is not the default company-introduction slide. When a
scoreboard is necessary, use this structure:

```html
<div class="border-2 border-gray-400 rounded-lg p-4 mt-6">
  <div class="grid grid-cols-5 gap-4 text-center">
    <div><div class="text-3xl font-bold">$XX B</div><div class="text-sm opacity-60">revenue FY25</div></div>
    <div><div class="text-3xl font-bold">XX%</div><div class="text-sm opacity-60">gross margin</div></div>
    <div><div class="text-3xl font-bold">XX%</div><div class="text-sm opacity-60">market share</div></div>
    <div><div class="text-xl font-bold leading-tight mt-2">moat in one line</div></div>
    <div><div class="text-xl font-bold leading-tight mt-2">ecosystem</div><div class="text-sm opacity-60">replacement difficulty</div></div>
  </div>
  <div class="text-xs opacity-40 text-right mt-2">as of Q2 2026</div>
</div>
```

Replacement difficulty uses one of three evidence-bounded categories: capacity can
shift, capability must scale, or an ecosystem must be rebuilt. The synthesis segment
compares those categories without inventing a countdown.

**3. Stamp slide (when a chokepoint is proven).** The proof beat, then
`board-<n>.svg` + one line naming what was just stamped.

**4. Economics Ledger (act-end segments only: `fabless-field`, `foundries-field`,
`materials`, `packaging`, `synthesis`).** Record a compact, scope-labeled snapshot
of what public data supports. Every financial number names its entity, metric,
period, and estimate status. Keep companywide margins, market-price estimates,
and supplier relationships separate; never derive per-GPU cost or margin by
combining them.

**5. Closer.** Last slide beat = 15–30 s "what you now know" + the cliffhanger
handoff into the next segment (write it as a question the next segment answers).

## Hard rules

1. **Every number comes from a research pack.** The pack carries its citation
   and any `VERIFY` marker. Only verified claims reach slides or speaker notes;
   notes stay plain and never expose bracketed source notation or verification
   markers.
2. **Beats are skeleton, never script** (AUTHORING.md). Lines-that-land are
   offers, not requirements.
3. **Numbers with handles**: every headline number gets a physical analogy in
   the slide or its speaker notes.
4. **Simplification hedges**: a compressed explanation gets a short plain-language
   caveat wherever omitting it would make the spoken claim false.
5. **Seeds/pays_off from your curriculum row are load-bearing** — plant and cash
   them explicitly in beats, and list them in the segment header.
6. **Angle is proposed, status is `draft`** — the creator owns the angle line.
7. A builder writes ONLY its own `slides/segments/<id>.md`.
8. **No unsupported grandeur or synthetic lists.** If a line cannot be shown,
   measured, or sourced, keep it off the slide. Replace broad superlatives and
   rhetorical three-item lists with the object or causal sequence that earns the
   claim.
