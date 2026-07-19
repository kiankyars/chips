# Reference-quality image upgrade

Generated with the built-in OpenAI image model on 2026-07-19. These images
replace flat SVG infographics on eleven slides. The three local files below were
style references only:

- `diagrams/style-references/euv-light-path.png`
- `diagrams/style-references/litho-chain.png`
- `diagrams/style-references/industry-map.png` (style only; connector semantics
  are not course-safe)

## Shared direction

> Use case: scientific-educational. Asset type: full-bleed 16:9 lecture-slide
> illustration. Work on tactile warm-white drawing paper with confident,
> irregular black technical ink, graphite construction marks, fine
> cross-hatching, and sparse watercolor accents. The result should feel like an
> expert engineer drew it by hand: physically specific, presentation-scale,
> authored, and easy to understand without reading. Use the supplied images only
> for this visual language, never for their content. No text, letters, numbers,
> logos, watermarks, glossy 3D, fake UI, generic corporate cards, neon color, or
> decorative science fiction. Leave generous margins and keep every object
> inside the 16:9 frame. Slidev supplies the exact claim and quantitative labels.

## transistor-switch-v2

- Used in: slide 9, `foundations.md`
- Render to: `diagrams/rendered/transistor-switch-v2.png`

> Draw two matched cutaway cross-sections of one n-channel MOSFET. Both show the
> same silicon body, separated source and drain regions, thin gate oxide, and
> metal gate. On the left the gate is inactive and no channel exists. On the
> right a small downward voltage cue energizes the gate and a thin teal inversion
> channel bridges source and drain, with a sparse stream of carriers. Keep the
> geometry identical between states. Use muted silicon ochre, blue source/drain,
> and teal only for the active channel.

## density-clock-v2

- Used in: slide 17, `foundations.md`
- Render to: `diagrams/rendered/density-clock-v2.png`

> Across a left-to-right timeline, show transistor density continuing to rise
> dramatically while clock speed rises early and then physically hits a hard
> wall around the mid-2000s. Beyond the wall, show one large CPU core becoming
> many parallel CPU/GPU cores. Use one cobalt rising path for density and one
> muted-red path that becomes unmistakably flat after the wall.

## eda-flow-v2

- Used in: slide 35, `eda.md`
- Render to: `diagrams/rendered/eda-flow-v2.png`

> Show four large stages left to right: a slightly curled RTL source page made
> only of abstract code-like strokes; a plausible connected logic-gate network;
> a rectangular die floorplan with placed standard-cell rows; and the same die as
> a dense Manhattan-routed layout. Connect the stages with bold hand-drawn
> arrows. A restrained red-orange verification path with a magnifying glass loops
> from the routed layout back to the source page.

## equipment-lam-deep-etch-v2

- Used in: slide 95, `equipment-dep-etch.md`
- Render to: `diagrams/rendered/equipment-lam-deep-etch-v2.png`

> At left, draw an oblique wafer covered in a dense, precise field of tiny memory
> holes. Magnify one hole into a tall cutaway at right: more than one hundred
> visually dense alternating oxide and nitride layers pierced by one extremely
> narrow, nearly vertical empty channel. Show a small dry-plasma glow and a few
> downward ions entering the opening. Add an unlabeled depth bracket and a tiny
> human-hair cross-section as scale cues. Use amber for selected layers and cool
> blue for the etched void.

## equipment-tel-asm-v2

- Used in: slide 96, `equipment-dep-etch.md`
- Render to: `diagrams/rendered/equipment-tel-asm-v2.png`

> On the left, show one wafer moving through coat, expose, and develop as three
> physical vignettes: resist spreads on a spinning wafer; a narrow blue beam
> passes through a patterned mask; developer leaves a crisp resist profile. On
> the right, enlarge a deeply recessed gate trench. A hair-thin amber film follows
> every top surface, vertical sidewall, underside, and bottom contour at nearly
> uniform thickness. Add a sparse orbital trail of precursor molecules and one
> magnified inset showing atom-sized dots attaching one layer at a time.

## process-drift-v2

- Used in: slide 99, `kla.md`
- Render to: `diagrams/rendered/process-drift-v2.png`

> Draw two long wafer-processing conveyors. In the upper lane, process drift
> begins early but no inspection occurs, so a long train of red wafer lots passes
> many expensive stations and reaches a scrap bin only at final test. In the
> lower lane, an in-line microscope/metrology gate immediately after the same
> disturbance ejects the first bad lot while later green lots continue. Make the
> contrast legible without labels.

## defect-scale-v2

- Used in: slide 100, `kla.md`
- Render to: `diagrams/rendered/defect-scale-v2.png`

> Create four progressively enlarged magnifier windows sweeping left to right: a
> full silicon wafer with one selected die; that die with one selected region; a
> microscopic view of parallel copper interconnect lines; and an extreme close-up
> of one irregular dark particle bridging or deforming two lines. Use clean
> callout geometry, a restrained amber selection highlight, and a tiny unlabeled
> ruler-like row of ticks only in the final window.

## slide-111-analog-300mm-economics-v2

- Used in: slide 111, `other-90.md`
- Render to: `diagrams/rendered/slide-111-analog-300mm-economics-v2.png`

> Draw 200 mm and 300 mm wafers side by side at the correct 1:1.5 diameter ratio.
> Fill both with the same-size rectangular analog dies in a realistic grid, with
> partial dies clipped at the edges. The larger wafer should visibly yield about
> 2.25 times as many complete dies. Lead from the larger wafer to a small tray of
> inexpensive packaged analog chips. Use pale green for the die field and cobalt
> only for the path to packaged parts.

## memory-types-v2

- Used in: slide 116, `memory-hbm.md`
- Render to: `diagrams/rendered/memory-types-v2.png`

> Compare two physical storage structures. Left: a plausible one-transistor,
> one-capacitor DRAM cutaway with bitline contact, access transistor, perpendicular
> gate/word-line, and tall storage capacitor. Blue charge dots leak from the
> capacitor and a curved refresh arrow returns them. Right: a tall vertical 3D
> NAND string with many horizontal word-line layers and one continuous vertical
> channel. Amber charge remains trapped in dielectric rings around the channel.
> Include a small top-down inset of the concentric NAND structure.

## hbm-package-v2

- Used in: slide 120, `memory-hbm.md`
- Render to: `diagrams/rendered/hbm-package-v2.png`

> Draw an oblique exploded package. At left, one compact HBM tower contains eight
> visibly separate thin DRAM dies above a distinct logic base die. Straight
> copper TSVs pierce the memory stack and dense microbumps join the layers. At
> right, one broad GPU die shares the same thin sage silicon interposer. Between
> them, fan many short parallel traces across the interposer. Add a dark package
> substrate and sparse solder balls below. TSVs must not pass through the GPU.

## chiplet-yield-v2

- Used in: slide 129, `packaging.md`
- Render to: `diagrams/rendered/chiplet-yield-v2.png`

> In the upper half, compare one large monolithic die containing one red defect
> with the same total silicon area divided into four chiplets containing the same
> defect. Reject the whole monolith, but reject exactly one of the four chiplets
> and leave three usable. Below a light divider, show one mixed-node package on a
> sage interposer: two blue compute chiplets, one amber I/O die with visibly
> coarser circuitry, and two violet HBM stacks connected by fine traces.

## Scientific simplifications

- Device dimensions, TSVs, microbumps, atomic films, defect sizes, and die
  separation are exaggerated for classroom visibility.
- The transistor, DRAM, NAND, and ALD scenes are explanatory cross-sections, not
  fabrication-accurate mask layouts.
- The chiplet yield comparison assumes comparable defect density and known-good
  die testing; real economics also include package cost and package yield.
- The process-control scene compresses roughly one thousand fab steps into a
  short visible conveyor.
