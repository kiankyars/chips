---
layout: section
---

<!-- SEGMENT
id: geopolitics
act: VI — The Board Is the World
tier: —            # climax; no cast tier — this is the payoff of the whole board
angle: "The chip war has no new characters. It's the map you've spent two hours lighting up — re-read as a weapons diagram. Once you can see the seven chokepoints, you can read every headline yourself."   # YOU OWN THIS LINE — rewrite it in your voice
runtime: ~12 min
status: draft
seeds: []                                                    # climax plants nothing forward
pays_off: [multi-patterning, taiwan-flag, euv-export-license, smic-iou]
stamps: []                                                   # board already complete (board-7) — this segment re-reads it, earns none
diagrams: [map-full, board-7, journey-6]
sources: research/geopolitics.md
swappable: true    # export rules move monthly — ONE topic per slide, NO cross-slide dependencies; any single slide can be re-recorded without touching its neighbors
-->


# The semiconductor supply chain is geopolitical leverage

<div class="text-xl opacity-70 mt-3">The same chokepoints constrain national policy and corporate supply.</div>

![the full map](/diagrams/rendered/map-full.svg)

<div class="mt-4">

![journey complete](/diagrams/rendered/journey-6.svg)

</div>

<!--
- Governments can use the semiconductor supply chain as leverage because critical technologies and production sit in a few countries and companies.
- Export licenses, investment rules, and industrial subsidies now shape which firms can buy design tools, equipment, memory, and advanced logic.
-->

---
layout: center
---

# Seven chokepoints in leading-edge AI chips

![the completed board](/diagrams/rendered/board-7.svg)

<div class="text-sm opacity-60 mt-6 text-center">
Seven supplier dependencies take an estimated five years or more to replace.
</div>

<!--
- Seven dependencies in leading-edge AI chips may take five years or more to replace.
- The seven dependencies span design software, fabrication, lithography, materials, memory, and packaging.
- A restriction at any one of these points can slow production across the rest of the chain.
-->

---
class: visual-sequence paper-visual
title: "Policy control points"
---

<div class="visual-sequence__kicker">POLICY CONTROL POINTS</div>

<div class="visual-sequence__frame">
  <img src="/diagrams/rendered/policy-control-points.svg" alt="Four control points mark design software, foundry production, EUV equipment, and advanced chip imports" />
</div>

<div class="visual-sequence__caption"><strong>Governments can block</strong><span>design tools, fab access, equipment shipments, or imports.</span></div>
<div class="visual-sequence__source">EDA controls · FDPR · EUV licenses · Section 232</div>

<!--
- The United States can restrict EDA software and use the foreign direct product rule to reach chips made abroad with US technology.
- The Netherlands can license EUV shipments, foundries can deny fabrication, and customs authorities can block finished-chip imports.
-->

---
class: visual-sequence paper-visual
title: "Control scope · 2019–2024"
---

<div class="visual-sequence__kicker">CONTROL SCOPE · 2019–2024</div>

<div class="visual-sequence__frame">
  <img src="/diagrams/rendered/export-control-expansion.svg" alt="Growing circles show US controls expanding from Huawei to foreign fabs, advanced chips, equipment, HBM, and more entities" />
</div>

<div class="visual-sequence__caption"><strong>US controls expanded</strong><span>from Huawei to chips, equipment, HBM, and 140 entities.</span></div>
<div class="visual-sequence__source">May 2019 → December 2024</div>

<!--
- US controls widened between 2019 and 2024.
- Measures that began with Huawei expanded to advanced chips, semiconductor equipment, HBM, and more than 140 additional entities.
- Each step reached farther upstream, from finished products toward the tools and components needed to make them.
-->

---
class: visual-sequence paper-visual
title: "The H20 policy cycle"
---

<div class="visual-sequence__kicker">THE H20 POLICY CYCLE</div>

<div class="visual-sequence__frame">
  <img src="/diagrams/rendered/h20-policy-cycle.svg" alt="Five policy gates track H20 and H200 access to China from October 2023 through January 2026" />
</div>

<div class="visual-sequence__caption"><strong>Policy created the H20</strong><span>then restricted and partially reopened its sale.</span></div>
<div class="visual-sequence__source">October 2023 → January 2026</div>

<!--
- The H20 shows how product design responds to policy.
- Nvidia created the chip to fit the October 2023 export limits, then faced new restrictions in 2025 and a partial reopening by January 2026.
- Each policy change altered which accelerator Nvidia could sell into China.
-->

---

# China retaliated with mineral export controls

<div class="grid grid-cols-2 gap-8 mt-8">
<div>
<div class="text-6xl font-bold text-amber-500">24 hrs</div>
<div class="opacity-70 mt-2">Dec 2, 2024: US bans HBM to China.<br>Dec 3, 2024: China bans gallium & germanium to the US.</div>
</div>
<div class="flex flex-col justify-center">
<div class="text-lg space-y-2">
<div><b>Oct 2025</b> · China applies FDPR-style rare-earth rules to foreign goods with Chinese content.</div>
<div class="opacity-70">Current pauses expire <b>Nov 10, 2026</b> and <b>Nov 27, 2026</b>.</div>
</div>
</div>
</div>

<!--
- China answered US semiconductor controls with restrictions on gallium, germanium, and rare-earth inputs.
- Some rules extend to foreign goods containing Chinese material, mirroring the reach of US foreign-product controls.
- The current pauses expire in November 2026, so buyers still face a defined policy deadline.
-->

---

# Nexperia showed the leverage of mature-node chips

<div class="grid grid-cols-3 gap-6 mt-10 text-center">
<div>
<div class="text-5xl font-bold">Sep 2025</div>
<div class="opacity-70 mt-2">Dutch government takes control of Nexperia over technology-transfer concerns</div>
</div>
<div>
<div class="text-5xl font-bold text-red-500">Oct 2025</div>
<div class="opacity-70 mt-2">China blocks exports from Nexperia's Dongguan plant: <b>50+ billion chips/yr</b></div>
</div>
<div>
<div class="text-5xl font-bold">days</div>
<div class="opacity-70 mt-2">between the export block and warnings of auto-production stoppages</div>
</div>
</div>

<!--
- The Nexperia dispute showed that mature-node chips can create immediate leverage.
- After the Dutch government took control over technology-transfer concerns, China blocked exports from the company's Dongguan plant.
- Automakers warned of production stoppages within days because the plant ships more than 50 billion simple chips a year.
-->

---
class: visual-sequence paper-visual
title: "Advanced chips · at higher cost"
---

<div class="visual-sequence__kicker">ADVANCED CHIPS · AT HIGHER COST</div>

<div class="visual-sequence__frame">
  <img src="/diagrams/rendered/china-capability-cost.svg" alt="SMIC uses repeated DUV patterning while Huawei uses more chips, racks, and power to close system-level compute gaps" />
</div>

<div class="visual-sequence__caption"><strong>SMIC accepts lower yields;</strong><span>Huawei uses more chips and power.</span></div>
<div class="visual-sequence__source">SMIC and Huawei · 2026 estimates</div>

<!--
- SMIC can produce advanced chips without EUV by using more process steps and accepting lower yield.
- Huawei can compensate with more chips, area, and power at the system level.
- The result narrows the capability gap while raising manufacturing cost and energy use.
-->

---
class: visual-sequence paper-visual
title: "China's technology gaps"
---

<div class="visual-sequence__kicker">CHINA'S TECHNOLOGY GAPS</div>

<div class="visual-sequence__frame">
  <img src="/diagrams/rendered/china-technology-gap.svg" alt="Four rows compare China's reported EUV, DUV, HBM, and EDA capabilities with external reference points" />
</div>

<div class="visual-sequence__caption"><strong>The largest gaps remain</strong><span>EUV, HBM, and advanced EDA.</span></div>
<div class="visual-sequence__source">Estimates vary by technology · roughly five-year leading-edge gap</div>

<!--
- China has made progress in chip design and mature-node manufacturing, but its largest gaps remain EUV lithography, HBM, and advanced EDA.
- Estimates vary by technology and product.
- A five-year leading-edge gap gives a useful scale, not a fixed schedule.
-->

---
class: visual-sequence paper-visual
title: "US industrial policy"
---

<div class="visual-sequence__kicker">US INDUSTRIAL POLICY</div>

<div class="visual-sequence__frame">
  <img src="/diagrams/rendered/us-fab-investment.svg" alt="A US map marks announced TSMC, Micron, Samsung, and Intel investments beside federal incentives and equity" />
</div>

<div class="visual-sequence__caption"><strong>Federal incentives and equity</strong><span>are funding new US fab capacity.</span></div>
<div class="visual-sequence__source">Announced investment · 2032 capacity projection</div>

<!--
- US industrial policy combines grants, tax credits, loans, and equity to fund domestic fabs.
- Announced projects could raise the US share of advanced logic capacity by 2032, but construction and yield ramping determine how much becomes usable output.
-->

---

# Taiwan's concentration is the central risk

<div class="grid grid-cols-3 gap-6 mt-10 text-center">
<div>
<div class="text-6xl font-bold">92%</div>
<div class="opacity-70 mt-2">of global sub-10 nm capacity was located in Taiwan in 2022</div>
</div>
<div>
<div class="text-6xl font-bold">~90%</div>
<div class="opacity-70 mt-2">estimated share of ≤7 nm-class merchant logic</div>
</div>
<div>
<div class="text-6xl font-bold">2027</div>
<div class="opacity-70 mt-2">N2 capacity committed through Q2 2027</div>
</div>
</div>

<div class="text-center text-lg opacity-70 mt-10">
The same concentration may deter conflict or make control of Taiwan more valuable.
</div>

<!--
- Taiwan held 92 percent of global sub-10nm capacity in 2022.
- Taiwan also supplied about 90 percent of merchant logic at 7nm class and below.
- Strong demand has committed much of TSMC's N2 capacity through mid-2027.
- This concentration makes continuity across the Taiwan Strait central to the world's supply of advanced processors.
-->

---

# A modeled Taiwan conflict costs $10.6T in year one

<div class="text-center mt-6">
<div class="text-8xl font-bold text-red-500">$10.6T</div>
<div class="text-2xl opacity-80 mt-3">~9.6% of global GDP</div>
<div class="opacity-60 mt-2">Bloomberg's estimate exceeds the economic losses from COVID or the 2008 crisis.</div>
</div>

<div class="text-sm opacity-50 mt-10 text-center">
Source: Bloomberg Economics model, Feb 2026. The result depends on scenario assumptions.
</div>

<!--
- A Bloomberg Economics model estimated that a Taiwan conflict could cost $10.6 trillion in its first year, about 9.6 percent of global GDP.
- The estimate exceeds modeled losses from COVID or the 2008 crisis, but it depends on assumptions about blockades, trade disruption, and military escalation.
-->

---
class: visual-sequence paper-visual
title: "Two AI stacks"
---

<div class="visual-sequence__kicker">TWO AI STACKS</div>

<div class="visual-sequence__frame">
  <img src="/diagrams/rendered/split-ai-stacks.svg" alt="Two separated stacks compare US-led and China-led accelerators, software, foundries, and equipment" />
</div>

<div class="visual-sequence__caption"><strong>The two stacks now use</strong><span>different accelerators, software, foundries, and tools.</span></div>
<div class="visual-sequence__source">Mineral-control pauses expire · November 2026</div>

<!--
- The United States and China are developing different AI stacks across accelerators, software, foundries, and production tools.
- Neither stack is self-contained, since both still depend on foreign suppliers and shared material flows.
- Mineral-control pauses ending in November 2026 create the next scheduled test of that separation.
-->
