# CHIPS

A long-form, diagram-heavy course on how an AI accelerator moves from design to
data center, and which companies control each step.

## Watch the course

[**Inside the AI Hardware Engine — Full Semiconductor Supply Chain Course**](https://www.youtube.com/watch?v=FGT7LZbZe-g)
is available free on the freeCodeCamp.org YouTube channel.

You can also [browse the interactive slide deck](https://kiankyars.github.io/chips/).

The course follows a 2025–26 Blackwell Ultra accelerator from design file to
finished system. The full sequence is summarized in [`curriculum.md`](curriculum.md).

## Course status

The course is published and this repository is now maintained as its source and
companion archive. Corrections and accessibility improvements are welcome. Some
market figures and product roadmaps are time-sensitive; consult the dated source
linked in the relevant research file before reusing them as current facts.

## Explore the course materials

- [`slides.md`](slides.md) sets the deck order and imports the segments from
  [`slides/segments/`](slides/segments/).
- [`research/`](research/) contains the evidence and source lists behind each
  segment.
- [`diagrams/src/`](diagrams/src/) generates reusable SVG diagrams into
  [`diagrams/rendered/`](diagrams/rendered/).
- [`public/assets/`](public/assets/) contains photographs and other static assets.
- [`styles.css`](styles.css) contains course-wide Slidev styles.
- [`ATTRIBUTIONS.md`](ATTRIBUTIONS.md) records third-party visual sources and
  licenses.

## Contributing

Edit the layer that owns the thing you want to change. Existing slides are
examples rather than required templates.

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

## Local development

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

## License

Original course content and visuals are available under CC BY 4.0, and the
supporting source code is available under the MIT License. Third-party assets
retain their original terms. See [`LICENSE.md`](LICENSE.md) for the boundaries
and [`ATTRIBUTIONS.md`](ATTRIBUTIONS.md) for asset-specific details.
