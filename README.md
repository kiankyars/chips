# CHIPS

Episode 1 of **The Five Layers of the Cake of AI** — a long-form, diagram-heavy
YouTube lecture giving the most comprehensive breakdown of the semiconductor
industry, player by player.

The five layers (per Jensen Huang): Applications · Data Centers · Energy ·
**Chips** · Models. This repo is *Chips* — the others come later and are not a
priority.

## The core idea: course-as-code

This repository is the **single source of truth**. Everything — the slides, your
narration beats, the research, the diagram prompts — lives here as plain text you
can diff, regenerate, and version. From this one source we render a real
presentation you screen-record.

```
chips/
  README.md            ← you are here
  AUTHORING.md         ← the co-design workflow + every file convention
  curriculum.md        ← the full episode map: every player, in order
  slides.md            ← Slidev entry deck; imports each segment
  slides/segments/     ← one markdown file per segment (e.g. asml.md)
  research/            ← fact packs w/ sources, one per player (my job)
  diagrams/
    prompts/           ← GPT-image prompts, one file per diagram
    rendered/          ← drop the generated PNGs here; slides reference them
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
```

Diagrams: each prompt in `diagrams/prompts/` is pasted into GPT-image; save the
output to `diagrams/rendered/<id>.png` and it appears in the slide automatically.

## Status

Pipeline proven end-to-end on one vertical slice: **ASML** (`slides/segments/asml.md`).
Everything else is outlined in `curriculum.md` and built segment-by-segment from there.
