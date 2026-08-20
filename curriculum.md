# CHIPS course outline

This is the deck's current narrative outline, not a production specification.
The course follows one 2025–26 Blackwell Ultra accelerator from design to data
center, meeting each part of the semiconductor industry when it becomes relevant.
The planned runtime is about 110 minutes; `slides.md` is authoritative for the
actual deck order.

## The object

| segment | min | current focus |
|---|---:|---|
| `cold-open` | 6 | Introduce the GB300-class accelerator, trace one inference request, and preview the production route. |

## Part 1: Inside the accelerator

| segment | min | current focus |
|---|---:|---|
| `foundations` | 9 | Transistors, logic and memory, process nodes, power, and the rising cost of fabrication. |
| `great-unbundling` | 3 | How fab economics separated chip design from manufacturing. |

## Part 2: Chip design

| segment | min | current focus |
|---|---:|---|
| `nvidia` | 5 | GPU parallelism, CUDA, and the parts of an accelerator Nvidia does not manufacture. |
| `eda` | 5 | The design flow and the roles of Synopsys, Cadence, and Siemens EDA. |
| `arm-riscv` | 3 | Arm's licensing model and RISC-V as an open alternative. |
| `fabless-field` | 2 | Merchant, in-house, and custom silicon businesses that all rely on outside fabs. |

## Part 3: Foundries

| segment | min | current focus |
|---|---:|---|
| `tsmc` | 10 | The pure-play foundry model, yield learning, advanced nodes, and geographic concentration. |
| `intel` | 6 | Intel's loss of process leadership and its foundry recovery attempt. |
| `foundries-field` | 2 | Samsung, GlobalFoundries, Rapidus, and SMIC in the wider manufacturing field. |

## Part 4: Fabrication

| segment | min | current focus |
|---|---:|---|
| `life-of-a-wafer` | 5 | Materials, masks, repeated process steps, contamination, and yield. |
| `asml` | 8 | EUV lithography, ASML's supplier network, and export controls. |
| `equipment-dep-etch` | 5 | Deposition and etch through Applied Materials, Lam Research, TEL, and ASM. |
| `kla` | 3 | Inspection, metrology, and process control. |
| `materials` | 3 | Wafers, photoresist, mask blanks, gases, slurries, and supplier concentration. |

## Interlude: The other 90%

| segment | min | current focus |
|---|---:|---|
| `other-90` | 3 | Mature-node analog and embedded chips in cars, factories, and infrastructure. |

## Part 5: Memory, packaging, and networking

| segment | min | current focus |
|---|---:|---|
| `memory-hbm` | 8 | DRAM, NAND, the memory wall, HBM, and the three major suppliers. |
| `packaging` | 6 | Chiplets, HBM integration, CoWoS, substrates, assembly, and test. |
| `networking` | 4 | Scale-up and scale-out fabrics from the accelerator to the cluster. |

## Part 6: Chokepoints become policy

| segment | min | current focus |
|---|---:|---|
| `geopolitics` | 11 | Export controls, China's responses, supply-chain concentration, and Taiwan risk. |
| `synthesis` | 4 | Where value pools, what is difficult to replace, and how the full system fits together. |
