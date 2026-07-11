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

Speaker notes (the trailing `<!-- ... -->` block on each slide) follow a fixed shape:

```
<!--
BEATS:
- the logical steps you walk through, in order — what you SAY, in your words
FACT AMMO:
- the exact numbers/names to drop, so you don't have to memorize them
LINE THAT LANDS: (optional)
- one punchy framing you can use or toss
-->
```

Rule: **I never write the sentence you say.** Beats are skeleton; the muscle is yours.

## Segment file header

Every `slides/segments/<player>.md` starts with this metadata comment so we can
track state at a glance:

```
<!-- SEGMENT
id: asml
part: 5 — Equipment
angle: "ASML isn't a chip company — it's the single most concentrated chokepoint in the world economy."   # YOU OWN THIS LINE
runtime: ~5 min
status: draft | angle-locked | redlined | recorded
diagrams: [litho-chain, euv-light-path]
sources: research/asml.md
-->
```

`status` values: `draft` (I built it) → `angle-locked` (you approved the angle) →
`redlined` (you edited beats) → `recorded` (in the can).

## Diagram convention

One file per diagram in `diagrams/prompts/<id>.md`:

```
# <id>
USED IN: slides/segments/asml.md
RENDER TO: diagrams/rendered/<id>.png
STYLE: <e.g. clean Excalidraw-style hand-drawn, muted palette, lots of whitespace>

PROMPT:
<the full text you paste into GPT-image>
```

You generate, save the PNG to `diagrams/rendered/<id>.png`, and the slide
(`![](/diagrams/rendered/<id>.png)`) picks it up. Regenerating a diagram never
touches the script.

## Fact-checking convention

Anything I'm not fully confident on is tagged inline as `<!-- VERIFY: ... -->` in
the fact pack so we never ship a number on vibes. Sourced facts carry a `[n]`
footnote pointing at the source list at the bottom of each `research/` file.
