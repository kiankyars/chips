# CHIPS

A long-form, diagram-heavy course on how an AI accelerator moves from design to
data center, and which companies control each step.

View the published course at <https://kiankyars.github.io/chips/>.

The course follows a 2025–26 Blackwell Ultra accelerator from design file to
finished system. The current sequence is summarized in `curriculum.md`.

## Repository

- `slides.md` sets the deck order and imports the segments.
- `slides/segments/` contains the slides and speaker notes.
- `research/` contains the evidence and source lists behind each segment.
- `diagrams/src/` generates reusable SVG diagrams into `diagrams/rendered/`.
- `public/assets/` contains photographs and other static assets.
- `styles.css` contains course-wide Slidev styles.
- `ATTRIBUTIONS.md` records third-party visual sources and licenses.

## Work on the course

Edit the layer that owns the thing you want to change. There is no required
agent workflow, segment lifecycle, slide template, or visual formula. Existing
slides are examples, not constraints.

Each segment lists the research files it uses in its first-slide frontmatter:

```yaml
---
layout: default
sources: [research/nvidia.md]
---
```

Put evidence and links in the relevant research file. Speaker notes are ordinary
trailing HTML comments in each slide. Unresolved claims can stay marked with a
`VERIFY` comment in research, but should not move into the published deck. For
generated SVGs, edit the JavaScript in `diagrams/src/` and run `npm run diagrams`;
other images can be placed directly in `diagrams/rendered/` or `public/assets/`.

## Commands

```bash
npm install              # install dependencies
npm run dev              # open the deck at localhost:3030
npm run dev -- --presenter
npm run diagrams         # regenerate code-built SVGs
npm run check            # validate links and citations, then build
npm run export           # export the deck to PDF
npm run build:pages      # production build with the GitHub Pages base path
```

Pushes to `main` deploy through `.github/workflows/deploy-pages.yml`.
