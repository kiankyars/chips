# CHIPS

Episode 1 of **The Five Layers of the Cake of AI** — a long-form, diagram-heavy
YouTube lecture giving the most comprehensive breakdown of the semiconductor
industry, player by player.

The five layers (per Jensen Huang): Applications · Data Centers · Energy ·
**Chips** · Models. This repo is *Chips* — the others come later and are not a
priority.

## The premise

**Follow one chip.** A Blackwell-class AI accelerator is followed from idea → design
file → the island → the fab → memory → package → data center. Every company in the
industry is encountered at the exact moment the chip cannot proceed without it —
never as an entry in a list. One master map lights up region by region; a Chokepoint
Board fills toward a number promised in the cold open; a Money Bar decomposes the
chip's price toll by toll. See `STRATEGY.md` for the full design system and
`curriculum.md` for the episode map.

## The core idea: course-as-code

This repository is the **single source of truth**. Everything — the slides, your
narration beats, the research, the diagrams — lives here as plain text you can
diff, regenerate, and version. From this one source we render a real presentation
you screen-record.

```
chips/
  README.md            ← you are here
  STRATEGY.md          ← the design system: why v2 looks like this
  AUTHORING.md         ← the co-design workflow + every file convention
  curriculum.md        ← the episode map: acts, segments, minutes, devices
  slides.md            ← Slidev entry deck; imports each segment
  slides/segments/     ← one markdown file per segment
  research/            ← fact packs w/ sources, one per segment (Claude's job)
  diagrams/
    rendered/          ← SVGs (structural, hand-authored) + PNGs (generated)
    prompts/           ← GPT-image prompts for decorative one-offs
```

## How the labor splits (so you're never just a narrator)

| Layer | Owner |
|---|---|
| Research, facts, sourcing | **Claude** |
| Editorial **angle** per segment | **You** (Claude proposes, you redline) |
| Structure, slides, diagram prompts | **Claude** |
| The actual words spoken | **You**, live, from the beat sheet |

Speaker-notes in every slide are a **beat sheet + fact ammo**, never a verbatim
script. You speak in your own words over strong visuals — the way good explainer
channels actually work. See `AUTHORING.md` for the full loop.

## Running the deck

```bash
npm install          # one time
npm run dev          # live presentation at localhost:3030 (press F for fullscreen)
npm run dev -- --presenter   # presenter view: slide + your beats side-by-side
npm run export       # render slides.md -> dist PDF
npm run diagrams     # regenerate every structural SVG
npm run check        # regenerate diagrams, validate sources/assets, and build the deck
```

## Status

- ✅ Design system + curriculum v2 (`STRATEGY.md`, `curriculum.md`)
- ✅ Research fact packs, web-verified to July 2026 (`research/`)
- ✅ All segments drafted with proposed angles (`slides/segments/`), awaiting your
  angle pass + redline (the two human steps in `AUTHORING.md`)
- Recording order & production rules: end of `STRATEGY.md`
