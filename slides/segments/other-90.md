---
layout: section
---

<!-- SEGMENT
id: other-90
act: INTERLUDE — The Other 90%
tier: E            # ensemble sweep · 🔧 pressure valve (cut here first if over runtime)
angle: "The leading edge is the smallest part of the story: most chips by volume are cheap, decades-old, and invisible — and it was a thirty-cent one, not a $40,000 GPU, that halted the world's car factories."   # YOU OWN THIS LINE — rewrite it in your voice
runtime: ~5 min
status: draft
seeds: []
pays_off: []
stamps: []         # deliberately none — the honesty beat is that this layer has NO single-company chokepoint
diagrams: [map-manufacture]
sources: research/idm-analog.md
-->


# Most chips use mature process nodes

<div class="text-xl opacity-70 mt-2">Analog chips, microcontrollers, and power semiconductors</div>

![](/diagrams/rendered/map-manufacture.svg)

<!--
BEATS:
- Register shift — this is the breather. Slow down, warm up, get concrete. We just spent 24 minutes in the deepest, most extreme technology humans build. Take a breath here.
- The honesty beat: everything we just toured — EUV, 2nm, the cathedral fabs — makes a sliver of the chips that actually run the world. Most chips never go anywhere near the leading edge.
- We're still in MANUFACTURE on the map, but a different column lights up now: the IDM / analog world. Same continent, completely different economics.
- Tee up the angle above in your own words.
LINE THAT LANDS:
- "We just watched the hardest technology on Earth. Now let's talk about the chips that actually run the world — and almost none of them needed any of it."
-->

---

# Analog and microcontrollers use mature nodes

<div class="grid grid-cols-3 gap-8 mt-10 text-center">
<div>
<div class="text-6xl font-bold">~$772B</div>
<div class="opacity-70 mt-2">whole chip market, 2025 <span class="opacity-50">(+22%)</span></div>
</div>
<div>
<div class="text-6xl font-bold">~$90B</div>
<div class="opacity-70 mt-2">analog <span class="opacity-50">(+7%)</span></div>
</div>
<div>
<div class="text-6xl font-bold">~$30B</div>
<div class="opacity-70 mt-2">microcontrollers</div>
</div>
</div>

<div class="text-base opacity-70 mt-12 text-center leading-relaxed">
These products use nodes introduced <b>15–40 years ago</b> and do not require EUV or leading-edge fab equipment.<br>
AI accelerators and memory drove most 2025 growth; analog grew 7%.
</div>

<!--
BEATS:
- Set the scale honestly. The whole market is ~$772B and roaring +22% in 2025 — but almost all of that growth is AI, memory, and leading-edge logic. The layer we're about to meet grows single digits.
- The point isn't that it's small — it's that it's enormous AND boring. Analog is ~$90B. Microcontrollers ~$30B. Power semis ~$55B. None of it needs a 2nm node.
- These chips are built on process nodes introduced 15 to 40 years ago. The technology we just spent half an hour on is irrelevant to them.
FACT AMMO:
- Whole semi market 2025 ~$772B (+22%), forecast ~$975B in 2026 — but growth is almost all AI/memory/logic; this layer grows single digits: analog +7% (2025), +10% (2026e) [research/idm-analog §The layer in numbers].
- Analog market ~$85–95B (2025); I'm rounding to ~$90B [research/idm-analog §The layer in numbers]. [VERIFY: exact WSTS analog dollar figure for 2025]
- MCU market ~$30B (2025); estimates cluster $27–40B, no clean official split [research/idm-analog §The layer in numbers]. [VERIFY: tighter Omdia/Yole MCU-only figure]
- Power semiconductors ~$55B incl. power ICs (2025) [research/idm-analog §The layer in numbers].
SIMPLIFICATION HEDGE:
- "The other 90%" is a slogan about VOLUME and ubiquity, not dollars — by revenue the leading edge is now a big share because AI chips are so expensive. The honest claim: by unit count and by where-they-show-up-in-your-life, mature chips dominate.
LINE THAT LANDS:
- "The chips in this segment will never be on a spec sheet you read. They're in everything you own and you'll never think about them once."
-->

---
class: visual-sequence paper-visual
---

<div class="visual-sequence__kicker">THE 2021 SHORTAGE</div>

<div class="visual-sequence__frame">
  <img src="/diagrams/rendered/auto-chip-shortage.png" alt="A stopped automobile assembly line with one tiny missing microcontroller enlarged in the foreground" />
</div>

<div class="visual-sequence__caption"><strong>A controller that costs cents</strong><span>can stop a $40,000 vehicle.</span></div>
<div class="visual-sequence__source">2021 · 7.7M fewer vehicles · ~$210B lost auto revenue</div>

<!--
BEATS:
- Make it physical. Your car has more chips than your laptop — somewhere between a thousand and thirty-five hundred of them. Almost none from a company you've heard of.
- 2021 is the story that taught the world this layer existed. Cars sat unfinished in fields. $210B of revenue gone, 7.7 million vehicles never built — and the missing part was a cents-priced microcontroller idling a $40,000 assembly line.
- These aren't just cars. It's factories, power grids, appliances, medical gear — anything that senses the real world or moves power. Boring, everywhere, load-bearing.
- Plant the fragmentation point for later: there was no single villain to call. Even the #1 automotive chipmaker has only ~13.5% share. The chokepoint here isn't a company — it's the whole category of old, slow, hard-to-add capacity.
FACT AMMO:
- A car contains ~1,000–3,500 chips: "more than a thousand" is the safe floor; typical modern car ~1,400–1,500; loaded EVs up to ~3,500 [research/idm-analog §The layer in numbers].
- 2021 shortage: $210B lost auto revenue + 7.7M vehicles of lost production, in 2021 alone (AlixPartners) [research/idm-analog §The layer in numbers].
- Cents-priced chips idled $40k-vehicle assembly lines [research/idm-analog §Fact ammo].
- EV semiconductor content ≈ 2–3× ICE: ~$500–600/combustion car vs ~$1,500+/EV [research/idm-analog §The layer in numbers]. [VERIFY: secondary source, worth pulling McKinsey/Infineon]
- Even #1-in-automotive Infineon holds only 13.5% share (2024) — the chokepoint is the category (old fabs, long qualification cycles), not one firm [research/idm-analog §The layer in numbers].
LINE THAT LANDS:
- "A chip that costs less than a cup of coffee shut down factories building $40,000 trucks."
- "Your car has more chips than your laptop — and almost none are made by anyone you've heard of."
-->

---
class: visual-sequence paper-visual
---

<div class="visual-sequence__kicker">MATURE ANALOG ECONOMICS</div>

<div class="visual-sequence__frame">
  <img src="/diagrams/rendered/slide-111-analog-300mm-economics-v2.png" alt="Equal-size analog dies shown on 200 and 300 millimeter wafers, with the larger wafer reducing unit cost" />
</div>

<div class="visual-sequence__caption"><strong>A 300 mm wafer cuts TI's unpackaged-chip cost by roughly 40%.</strong></div>
<div class="visual-sequence__source">Texas Instruments · mature analog · 180–45 nm</div>

<!--
BEATS:
- This is the intellectual core of the breather — why "boring" is actually a fortress. Four reasons, then one company that expresses all of them.
- 1) Moore's Law is upside-down here. Shrinking makes precision analog worse. So there's no treadmill, no node race — the optimal process was perfected decades ago and just... keeps working.
- 2) Because the fabs are old, the equipment is fully depreciated. A chip that sells for thirty cents still carries a 60%+ margin. That's leading-edge economics applied to 30-year-old technology.
- 3) The design itself is a moat. Digital logic gets synthesized from code; analog is still hand-drawn art, learned over a ~decade apprenticeship. Scarce human craft, not scarce machines.
- 4) And the products live for decades — ST will contractually promise you the same microcontroller for 20 years. The anti-smartphone business.
- Now the one deep-point: TI's trick. Take the 300mm wafers the industry built for cutting-edge chips, and run ancient analog designs on them. 300mm gives ~2.3× the chips of a 200mm wafer → ~40% cheaper per chip, structurally, forever. Then they're pouring >$60B into seven US fabs to do it at scale — Apple even signed on to make iPhone power chips there.
FACT AMMO:
- Precision analog gets worse when shrunk; optimal nodes 180nm–45nm, introduced 15–40 years ago (180nm debuted ~1999); no EUV, no $20B fab [research/idm-analog §Teachable: analog vs digital].
- Old fabs depreciated → $0.30 chip can carry 60%+ gross margin [research/idm-analog §Teachable: analog vs digital].
- Analog design is transistor-by-transistor craft, ~decade-long apprenticeship [research/idm-analog §Teachable]. [VERIFY: qualitative, standard industry view]
- 20-year availability: ST guarantees it on popular auto MCUs [research/idm-analog §Teachable]; TI product life "10–15 years and often longer"; NXP 10–15 yr; Microchip effectively never-obsolete [research/idm-analog §Teachable].
- TI 300mm-on-trailing-node: 300mm = ~2.3× chips/wafer → ~40% lower cost per unpackaged chip vs 200mm rivals [research/idm-analog §Texas Instruments].
- TI announced >$60B / seven US fabs (Jun 2025) — largest foundational-semiconductor investment in US history, ~60k jobs; goal >95% wafers internal; ~80,000 products; Apple signed for the Sherman site [research/idm-analog §Texas Instruments].
- TI FY2025 revenue $17.68B (+13%); analog segment $14.0B (+15%); world #1 analog at ~18–20%, about 2× #2 [research/idm-analog §Texas Instruments]. [VERIFY: analog share figure]
SIMPLIFICATION HEDGE:
- Direction of the lie on the moat: TI's is real but it's a scale/capex/catalog moat, not a physics one. Unlike ASML, this is exactly the moat China is racing to replicate first — cheap mature fabs are the easiest thing on the whole map to copy.
LINE THAT LANDS:
- "Take the giant wafers built for 2nm, run 30-year-old designs on them, sell the chips for cents at 60% margin — forever."
-->

---
class: visual-sequence paper-visual
---

<div class="visual-sequence__kicker">THE CHIPS INSIDE EVERYTHING ELSE</div>

<div class="visual-sequence__frame">
  <img src="/diagrams/rendered/analog-embedded-objects.png" alt="An EV inverter, radar sensor, contactless card, motor controller, server power supply, and precision instrument, each revealing a semiconductor module" />
</div>

<div class="visual-sequence__caption"><strong>These products use separate chips.</strong><span>They handle power, sensing, control, and conversion.</span></div>
<div class="visual-sequence__source">TI · Infineon · STMicro · NXP · Renesas · Analog Devices</div>

<!--
BEATS:
- Don't profile six companies. Sweep them. One breath each, then the point about the shape of the whole layer.
- TI — the catalog king, already covered: cheap analog at scale, going massively bigger in the US.
- Infineon — the German power champion. Runs the world's power electronics, #1 in cars, big in silicon carbide and gallium nitride — and now selling power delivery INTO the AI data center, so even the boring-power company caught an AI updraft.
- ST — the SiC pioneer. Their parts were in the first mass-market EV inverter, the 2018 Model 3, fabbed in Sicily. Having the roughest year of the group, and it's part-owned by the French and Italian governments.
- NXP — if a car has a nervous system, NXP built it. #1 in automotive radar, and they invented NFC — the reason your phone and metro card tap.
- Renesas — Japan's auto-MCU champion, itself a merger of three legacy Japanese chipmakers. The 2021 fire at one of their fabs near Tokyo was felt in Detroit — the fragility lesson in one building.
- ADI — the aristocrat. Doesn't do cents chips; does dollar chips, precision analog for the high end. #2, assembled by buying up the US high-end analog talent pool.
- Land the shape: there is no ASML on this slide. It's fragmented on purpose — even the automotive leader is at 13.5%. That's why 2021 had no single fix. And (optional) the cycle turned: after the deepest downturn in a decade, 2025–26 is a real but two-speed recovery.
FACT AMMO:
- Infineon FY2025 ~€14.7B (roughly flat); world #1 power semis (~20 years); #1 automotive at 13.5% (2024); bought GaN Systems for $830M; targets ~€1.5B AI-server-power revenue in FY2026 [research/idm-analog §Infineon].
- STMicro FY2025 $11.8B, −11.1% YoY (worst of the group), gross margin 33.9%; first mass-market EV SiC inverter = 2018 Tesla Model 3, 48 SiC dies from Catania, Sicily; 27.5% held by a 50/50 French–Italian government vehicle [research/idm-analog §STMicroelectronics].
- NXP FY2025 $12.27B, −3%; GAAP gross margin 54.7%; ex-Philips; automotive ~55–60% of revenue; #1 automotive radar (Yole); co-invented NFC, owns MIFARE, supplies e-passport chips [research/idm-analog §NXP]. [VERIFY: exact 2025 auto share ≈57%]
- Renesas FY2025 ¥1,321B (≈$8.8B), −2%; automotive ~48% of revenue, −9%; formed from Hitachi+Mitsubishi (2003) + NEC Electronics (2010); March 2021 Naka fab fire deepened the global car-production crisis [research/idm-analog §Renesas]. [VERIFY: Naka fire recovery timeline (~100 days) before citing specifics]
- ADI FY2025 $11.0B, +17%; #2 analog, high-performance end (converters/amps at dollars, GM ~68–70% non-GAAP); built by acquisition — Linear ($14.8B, 2017), Maxim ($21B, 2021) [research/idm-analog §Analog Devices]. [VERIFY: ADI GM, #2 share ~12–13%, deal values]
- Fragmentation: no ASML-style chokepoint; #1-in-auto Infineon only 13.5% [research/idm-analog §The layer in numbers].
- (Optional cycle beat) 2023–25 was the deepest analog/auto downturn in a decade; recovery is now real but two-speed — auto semi +11% YoY Q1-2026 (Bernstein), TI's "analog awakening" guidance; ST and Renesas autos still lagging [research/idm-analog §Cycle status].
SIMPLIFICATION HEDGE:
- These are IDMs — they design AND make their own chips, unlike the fabless/foundry split we just spent an act on. That's the "I" in the IDM column now lit on the map.
LINE THAT LANDS:
- "Six companies you've barely heard of, and between them they run every car, factory, and power grid on Earth."
-->

---

# A processor still needs memory

<div class="text-3xl mt-16 leading-relaxed">
The fabricated GPU die needs nearby memory<br>
to keep its cores supplied with data.
</div>

<!--
BEATS:
- Re-accelerate. The breather is over. Snap the pace back up and return to the spine.
- What you now know (15s): most chips never touch the leading edge; they're old, cheap, everywhere, and their moat is decades of craft and depreciated fabs — not nanometers. A thirty-cent one stopped the world in 2021.
- Now hard pivot back to our GB300 accelerator. It's just come off the wafer, through all thousand steps. And it is completely useless. A processor with 20,000 cores and nothing to feed them, nothing to hold their work.
- Cliffhanger into Act V: a chip that can compute but cannot remember. How do you move data to those cores fast enough to keep them busy? (This is the memory-wall question planted back in the Nvidia segment — now it comes due.)
FACT AMMO:
- No numbers here — this is a pure transition beat. Keep it fast and clean.
LINE THAT LANDS:
- "Our chip is out of the fab. It can do a quadrillion operations a second — and it has nowhere to put a single one of them. Next: the memory war."
-->
