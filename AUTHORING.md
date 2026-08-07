# Authoring & co-design workflow

This file is the contract for how we build the course together without you
becoming a bottleneck and without you becoming a narrator reading my words.

## The per-segment loop

Each player/topic is one segment. We move through four steps; you only ever
*react* in two of them, which is far faster than authoring.

1. **Research (Claude).** I produce `research/<player>.md` — a fact pack: hard
   numbers, market share, who-supplies-whom, the moat, the risks, all sourced.
   No prose, just ammunition. This is the part that should never block you.

2. **Angle (You).** Every segment opens with an `angle:` line — a one-sentence
   editorial thesis that is *yours*. I draft a proposed angle; you overwrite it
   in ten seconds or tell me it's right. This is the steering wheel of the whole
   segment — slides and beats are built to serve it.

3. **Build (Claude).** I assemble `slides/segments/<player>.md` from your angle +
   the fact pack: the slide sequence, the diagram prompts, and the beat sheet.

4. **Redline (You).** You read the beats, cut/reorder/sharpen, flag anything that
   feels not-you. Reacting is ~10× cheaper than writing.

Then you record: speak the beats in your own words over the slides.

## Beat sheet, not script

Speaker notes (the trailing `<!-- ... -->` block on each slide) are short bullet
prompts you can scan while speaking:

```
<!--
- Amber is the channel; blue is the gate; cyan marks the interface.
- A planar gate controls the channel from the top, so leakage rises as the channel shrinks.
- FinFETs and gate-all-around transistors give the gate control over more surfaces.
-->
```

Keep each note to two to four bullets and roughly 25–75 words. Each bullet should
carry one speaking beat and normally fit on one or two lines. Include only the facts
needed to explain the slide. Put citations, verification tags, production directions,
optional lines, and full caveats in the research or authoring files. If a caveat
prevents a false claim, state it once in plain English.

## Segment file header

Every `slides/segments/<id>.md` begins with the first slide's Slidev frontmatter.
Put the metadata comment immediately after that frontmatter and before visible
content; making the comment the file's first content creates a blank slide.

```
---
class: visual-sequence
transition: fade
title: "EUV · physical scale"
---

<!-- SEGMENT
id: asml
act: IV — The Fab Tour
tier: P            # P protagonist · T tragedy · D duel · E ensemble · C cards (see curriculum.md)
angle: "ASML isn't a chip company — it's the single most concentrated chokepoint in the world economy."   # YOU OWN THIS LINE
runtime: ~8 min
status: draft | angle-locked | redlined | recorded
seeds: [multi-patterning, euv-export-license]     # planted here, pays off later
pays_off: []                                      # seeds from earlier segments cashed here
stamps: [asml, zeiss]                             # chokepoint stamps earned on screen
diagrams: [flow-strip, euv-light-path]
sources: research/asml.md
-->
```

`status` values: `draft` (I built it) → `angle-locked` (you approved the angle) →
`redlined` (you edited beats) → `recorded` (in the can).

`seeds` / `pays_off` mirror the Seed→Payoff Ledger in `curriculum.md`. **Redline rule:
never cut a beat that carries a seed whose payoff lives in another segment** — move it,
don't delete it.

## The persistent devices (course-wide conventions)

Defined in `STRATEGY.md`; implemented as recurring slide patterns:

- **Map navigator**: every segment's first slide shows the master map with this
  segment's region lit (`diagrams/rendered/map-*.svg` states). No company is introduced without
  its location lighting up.
- **Scoreboard**: protagonists and selected comparison sets may use a consistent
  stat block when entity scope, period, and metric definitions are genuinely
  comparable. Date every metric; do not force ensemble players into false symmetry.
- **Chokepoint stamps**: when a segment proves a hard-to-replace control point, the
  slide shows the Board gaining that stamp (`diagrams/rendered/board-*.svg`).
- **Economics Ledger**: act-end entries keep company financials, product estimates,
  and supplier relationships in separate, explicit scopes. Never infer a product
  cost or margin by multiplying unrelated figures.
- **Flow Strip**: all Act IV players enter on the deposit→litho→etch→implant→CMP→measure
  ribbon with their step glowing.
- **Numbers with handles**: no headline number without a physical comparison the
  speaker can remember.
- **Simplification hedges**: keep a short plain-language caveat only when omitting it
  would make the spoken claim false.

## Diagram convention

Two kinds of diagrams:

Each segment's `diagrams` metadata is an exact inventory of the rendered diagram IDs
referenced by that segment. `npm run check` rejects missing, duplicate, or stale entries.

**1. Structural diagrams are code.** The master map (and its lighting states), the
journey bar, the flow strip, and the chokepoint board — anything that must
stay pixel-consistent across many slides — is encoded in SVG/JavaScript, rendered
to a committed `diagrams/rendered/<id>.svg` by `diagrams/src/generate.mjs`, and
referenced directly (`![](/diagrams/rendered/<id>.svg)`). The result is diffable
and regenerable, with no image model in the loop.

**2. Decorative one-offs may stay GPT-image.** One file per prompt in
`diagrams/prompts/<id>.md`:

```
# <id>
USED IN: slides/segments/asml.md
RENDER TO: diagrams/rendered/<id>.png
STYLE: <e.g. clean Excalidraw-style hand-drawn, muted palette, lots of whitespace>

PROMPT:
<the full text you paste into GPT-image>
```

You generate and save the PNG to `diagrams/rendered/<id>.png`, and the slide picks it
up. Regenerating a diagram never touches the script. Missing rendered assets fail
`npm run check`; commit a labeled placeholder when final artwork is not ready.

## Fact-checking convention

Anything I'm not fully confident on stays in `research/` until it is verified.
Sourced facts carry a `[n]` footnote pointing at the source list at the bottom of
each research file, and unresolved claims use an HTML `<!-- VERIFY: ... -->` tag
there. Speaker notes contain only facts ready to say aloud; they never contain
citations or verification tags.
