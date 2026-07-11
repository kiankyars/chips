# CHIPS — full curriculum

The episode is a lecture. We open on a single hero diagram of the entire
industry, then walk the value chain layer by layer, spending ~5 min on each major
player. Total runtime target: 90–120 min (long-form is the point).

Reading order follows the **flow of value**: nobody can understand ASML until
they know what a transistor is and why a 2nm node is hard. So we build foundations
first, then walk design → manufacturing → equipment → materials → memory →
packaging → geopolitics → synthesis.

Legend: ⭐ = crown-jewel deep dive (gets more than 5 min) · ✅ = built

---

## Part 0 — Cold open (~3 min)
- The thesis: every AI model, app, and data center ultimately bottoms out in a
  chip, and that chip bottoms out in a handful of companies most people can't name.
- The hook diagram: **the whole industry web** (`diagrams/prompts/industry-map.md`).

## Part 1 — The product & the physics (~12 min)
*Why this industry exists and why it's the hardest manufacturing on Earth.*
- What a chip is: transistors as switches; logic vs memory.
- Moore's Law and what a "node" (7nm/3nm/2nm) actually means today.
- The scaling ladder: planar → FinFET → GAA / nanosheet.
- Why smaller = exponentially harder = exponentially more expensive (the cost curve).

## Part 2 — The map: four archetypes (~6 min)
- **Fabless** (designs, doesn't build) · **IDM** (does both) · **Foundry**
  (builds others' designs) · **Equipment/materials** (sells to all of them).
- Where the money and the margins actually pool.

## Part 3 — The design layer (~25 min)
*Turning an idea into a blueprint.*
- **EDA** — the software no chip exists without:
  - Synopsys ⭐ · Cadence ⭐ · Siemens EDA (Mentor)
- **IP** — the building blocks you license:
  - Arm ⭐ · RISC-V (the open insurgent)
- **Fabless designers** — who designs the chips that matter:
  - Nvidia ⭐ · AMD · Apple Silicon · Qualcomm · Broadcom · Marvell · MediaTek

## Part 4 — The manufacturing layer (~25 min)
*Turning the blueprint into silicon.*
- **Foundries:**
  - TSMC ⭐⭐ (the crown jewel of the whole episode) · Samsung Foundry ·
    Intel Foundry · GlobalFoundries · SMIC (China)
- **IDMs:**
  - Intel ⭐ · Samsung Semi · Texas Instruments · Infineon · STMicro ·
    Analog Devices · NXP · Renesas

## Part 5 — The equipment layer (~25 min)
*The picks-and-shovels — where the deepest moats actually live.*
- ASML ⭐⭐ ✅ — lithography / the EUV monopoly
- Applied Materials ⭐ — deposition + broadest toolset
- Lam Research ⭐ — etch & deposition
- Tokyo Electron (TEL) — coat/develop, etch
- KLA ⭐ — process control: metrology & inspection

## Part 6 — Materials & inputs (~10 min)
- Silicon wafers: Shin-Etsu · SUMCO
- Photoresist & specialty chemicals: JSR · Tokyo Ohka (TOK) · Shin-Etsu
- Ultra-pure gases, CMP slurries, photomasks/blanks (Hoya).

## Part 7 — Memory (~12 min)
*Its own world, and the current AI bottleneck.*
- DRAM & NAND: Samsung · SK Hynix ⭐ · Micron ⭐
- **HBM** ⭐ — why high-bandwidth memory is the choke point for AI accelerators.

## Part 8 — Back-end: assembly, test & advanced packaging (~12 min)
- OSAT: ASE · Amkor · JCET
- **Advanced packaging** ⭐ — CoWoS, chiplets, 2.5D/3D; why packaging became the
  new frontier when transistor scaling slowed.

## Part 9 — The geopolitics layer (~15 min)
*The reason this is on the news.*
- The chokepoints recap: ASML/EUV, TSMC/Taiwan, EDA, advanced packaging.
- US export controls & the entity list; the CHIPS Act; Taiwan concentration risk;
  China's domestic push (SMIC, SMEE, domestic EDA).

## Part 10 — Synthesis (~6 min)
- The moats-and-margins map: where value concentrates and why.
- What AI demand changes about all of the above.
- Teaser for Layer 4 of the series.

---

### Build order recommendation
ASML is done as the reference slice. Suggested next: **TSMC** (the other crown
jewel, anchors Part 4), then the rest of Part 5 equipment (AMAT, Lam, KLA) since
they share structure with ASML, then work outward. Order is flexible — segments
are independent files.
