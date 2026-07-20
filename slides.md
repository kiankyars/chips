---
theme: default
title: "Chips — From Design to Data Center"
titleTemplate: "%s"
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
transition: slide-left
mdc: true
colorSchema: dark
layout: cover
class: title-slide
fonts:
  sans: Inter
  mono: JetBrains Mono
---

<div class="title-visual" aria-hidden="true">
  <img src="/assets/oxidized-silicon-wafer.jpg" alt="">
</div>

<div class="title-kicker">THE SEMICONDUCTOR SUPPLY CHAIN</div>

# CHIPS

<div class="title-subtitle">How one AI accelerator moves from design to data center.</div>

<div class="title-journey">
  <span>SAND</span><span>DESIGN</span><span>FAB</span><span>MEMORY</span><span>PACKAGE</span>
</div>

<!--
- This course follows one GB300-class AI accelerator from design file to installed rack.
- Each step reveals the companies, tools, and materials required to build it.
-->

---
src: ./slides/segments/cold-open.md
---

---
layout: section
class: act-divider act-one
---

# Part 1: Inside the Accelerator
## How transistors work and why leading-edge fabs cost more than $20B

---
src: ./slides/segments/foundations.md
---

---
src: ./slides/segments/great-unbundling.md
---

---
layout: section
class: act-divider act-two
---

# Part 2: Chip Design
## From architecture and EDA software to a manufacturable design file

---
src: ./slides/segments/nvidia.md
---

---
src: ./slides/segments/eda.md
---

---
src: ./slides/segments/arm-riscv.md
---

---
src: ./slides/segments/fabless-field.md
---

---
layout: section
class: act-divider act-three
---

# Part 3: Foundries
## Most leading-edge fabless designs are manufactured by TSMC

---
src: ./slides/segments/tsmc.md
---

---
src: ./slides/segments/intel.md
---

---
src: ./slides/segments/foundries-field.md
---

---
layout: section
class: act-divider act-four
---

# Part 4: Fabrication
## How deposition, lithography, etch, and inspection build a chip

---
src: ./slides/segments/life-of-a-wafer.md
---

---
src: ./slides/segments/asml.md
---

---
src: ./slides/segments/equipment-dep-etch.md
---

---
src: ./slides/segments/kla.md
---

---
src: ./slides/segments/materials.md
---

---
layout: section
class: act-divider act-interlude
---

# Interlude: Mature-Node Chips
## Most chips use older manufacturing processes

---
src: ./slides/segments/other-90.md
---

---
layout: section
class: act-divider act-five
---

# Part 5: Memory and Packaging
## HBM and advanced packaging complete the accelerator

---
src: ./slides/segments/memory-hbm.md
---

---
src: ./slides/segments/packaging.md
---

---
layout: section
class: act-divider act-six
---

# Part 6: Supply-Chain Leverage
## Where supplier concentration shapes margins and state policy

---
src: ./slides/segments/geopolitics.md
---

---
src: ./slides/segments/synthesis.md
---
