# CHIPS

A long-form, diagram-heavy course on how an AI accelerator moves from design to
data center, and which companies control each step.

View the published course at <https://kiankyars.github.io/chips/>.

## The premise

**Follow one chip.** A 2025–26 Blackwell Ultra accelerator is the case study, followed
from idea → design file → the island → the fab → memory → package → data center.

## Tree

```
chips/
  README.md            ← you are here
  STRATEGY.md          ← the design system: why v2 looks like this
  AUTHORING.md         ← the co-design workflow + every file convention
  curriculum.md        ← the course map: acts, segments, minutes, devices
  slides.md            ← Slidev entry deck; imports each segment
  slides/segments/     ← one markdown file per segment
  research/            ← source-linked fact packs declared by each segment
  diagrams/
    rendered/          ← SVGs (structural, hand-authored) + PNGs (generated)
    prompts/           ← GPT-image prompts for decorative one-offs
```

## Running the deck

```bash
npm install          # one time
npm run dev          # live presentation at localhost:3030 (press F for fullscreen)
npm run dev -- --presenter   # presenter view: slide + your beats side-by-side
npm run export       # render slides.md -> dist PDF
npm run diagrams     # regenerate every structural SVG
npm run check        # regenerate diagrams, validate sources/assets, and build the deck
npm run build:pages  # production build for https://kiankyars.github.io/chips/
```

Pushes to `main` deploy the production build to GitHub Pages. The workflow can
also be run manually from the repository's Actions tab.
