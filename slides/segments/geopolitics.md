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
BEATS:
- Slow down. Zero new facts in the next 60 seconds — that's the point.
- The same map we lit region by region — Santa Clara, the island, Veldhoven, the Japanese basement, Korea, the packaging houses. Read it once more, but ask a different question of each light: not "who makes this?" but "who can turn this off?"
- Tee up the angle in your own words: the chip war isn't a new story bolted onto the end. It IS the map. Every headline is a move on a board the viewer now owns.
FACT AMMO:
- The one-line punch (from the pack): no nation controls the whole chain — a leading-edge chip needs US design software + US/JP/NL equipment + Japanese chemicals + Taiwanese fabrication + Korean memory. Everyone has a hand on someone else's windpipe. [research/geopolitics §chokepoints]
- Map state: full. Journey: step 6 (DATA CENTER) — the chip is installed; the story now zooms back out to the planet.
LINE THAT LANDS:
- "For two hours I showed you a supply chain. Same picture — I just changed the verb. It's not who supplies whom. It's who can strangle whom."
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
BEATS:
- Callback to the cold-open promise: "I count seven companies that are single points of failure for the modern world." There they all are — no assertion, you derived each one.
- Walk the board as leverage: ASML (100% EUV) → the West's single biggest lever. TSMC (~90% leading-edge logic; on this board TWICE — wafers AND CoWoS). Synopsys+Cadence (no chip exists without the software). Japan's materials cluster (photoresist). SK hynix (HBM). Each stamp = a hand on a windpipe.
- The realization to leave the viewer with: you can now predict the news. If you wanted to hurt China's chips, you'd reach for the levers on this board. That's literally what happened. Let's watch.
FACT AMMO:
- ASML = 100% of EUV [research/geopolitics §chokepoints]. TSMC = 72.3% of ALL foundry revenue Q1 2026, ~90% of most advanced chips [research/geopolitics §chokepoints]. EDA: Synopsys 31% + Cadence 30% + Siemens 13% = >90% [research/geopolitics §chokepoints]. Japan >90% high-end photoresist [research/geopolitics §chokepoints]. SK hynix 56.4% HBM Q1 2026 [research/geopolitics §chokepoints].
- "TSMC appears on this board twice" — the line that lands, per curriculum.
SIMPLIFICATION HEDGE:
- The board is a judgment call, and say so: alternates (Ajinomoto ABF substrate, Shin-Etsu wafers, Advantest test) are honorable mentions — we rank them honestly in the finale. Direction of the lie: seven is a curated headline, not a law of nature.
LINE THAT LANDS:
- "I didn't need to tell you there'd be a chip war. You could have drawn it yourself from this board."
-->

---
class: visual-sequence paper-visual
---

<div class="visual-sequence__kicker">POLICY CONTROL POINTS</div>

<div class="visual-sequence__frame">
  <img src="/diagrams/rendered/policy-control-points.svg" alt="Four control points mark design software, foundry production, EUV equipment, and advanced chip imports" />
</div>

<div class="visual-sequence__caption"><strong>Governments can block</strong><span>design tools, fab access, equipment shipments, or imports.</span></div>
<div class="visual-sequence__source">EDA controls · FDPR · EUV licenses · Section 232</div>

<!--
BEATS:
- Frame the whole act: export policy looks like alphabet soup (BIS, FDPR, VEU, Entity List, Section 232). It's actually four levers, and the viewer already owns three of them from earlier segments.
- The EUV license PAYS OFF the seed planted in the ASML segment — "we'll come back to this." This is the coming back. [seed: euv-export-license]
- The EDA switch is real, not hypothetical: the US imposed EDA export controls on China in May 2025, then lifted them weeks later — but the message landed: every Chinese chip designer now races to de-risk.
- Emphasize the FDPR's reach as the scary one: it's how a US rule shut a Taiwanese fab's door (next slide).
FACT AMMO:
- EDA duopoly >90% share [research/geopolitics §chokepoints]; the May–Jul 2025 US EDA export-control episode, imposed then lifted [research/geopolitics §China's domestic push].
- Section 232: 25% tariff on advanced semiconductors above defined performance thresholds (H200/MI325X class), Jan 15 2026, with carve-outs for US data centers/startups/R&D [research/geopolitics §export-control timeline].
- FDPR = Foreign Direct Product Rule: any chip made anywhere with US tools is covered [research/geopolitics §export-control timeline].
SIMPLIFICATION HEDGE:
- Direction of the lie: the real rules are hundreds of pages of performance-density thresholds and license carve-outs. Four levers is the mental model, not the statute.
LINE THAT LANDS:
- "Everything in the news is one of these four moves. That's the whole game."
-->

---
class: visual-sequence paper-visual
---

<div class="visual-sequence__kicker">CONTROL SCOPE · 2019–2024</div>

<div class="visual-sequence__frame">
  <img src="/diagrams/rendered/export-control-expansion.svg" alt="Growing circles show US controls expanding from Huawei to foreign fabs, advanced chips, equipment, HBM, and more entities" />
</div>

<div class="visual-sequence__caption"><strong>US controls expanded</strong><span>from Huawei to chips, equipment, HBM, and 140 entities.</span></div>
<div class="visual-sequence__source">May 2019 → December 2024</div>

<!--
BEATS:
- Tell it as escalation. 2019: America aims a single lever (Entity List) at a single company. 2020: the FDPR proves the terrifying part — a US rule reaches inside a Taiwanese fab and slams the door. Huawei's HiSilicon Kirin line, world-class, dies at its peak.
- 2022 is the doctrine change everyone underrates: stop targeting a company, start denying a whole country a capability. Even US persons barred from supporting Chinese advanced fabs.
- 2024: the levers multiply — HBM added, 140 entities, tool + software categories. The screws, tightening annually.
FACT AMMO:
- May 2019 Entity List; May 2020 FDPR → TSMC cutoff (final Sept 2020), kills HiSilicon Kirin at its peak [research/geopolitics §export-control timeline].
- Oct 7 2022 sweeping controls; even US persons barred from Chinese advanced fabs [research/geopolitics §export-control timeline].
- Dec 2 2024: HBM controlled, 140 entities, 24 equipment + 3 software categories [research/geopolitics §export-control timeline].
LINE THAT LANDS:
- "In 2020, a rule written in Washington closed a door in Taiwan. That's when the whole world learned what the FDPR could do."
-->

---
class: visual-sequence paper-visual
---

<div class="visual-sequence__kicker">THE H20 POLICY CYCLE</div>

<div class="visual-sequence__frame">
  <img src="/diagrams/rendered/h20-policy-cycle.svg" alt="Five policy gates track H20 and H200 access to China from October 2023 through January 2026" />
</div>

<div class="visual-sequence__caption"><strong>Policy created the H20</strong><span>then restricted and partially reopened its sale.</span></div>
<div class="visual-sequence__source">October 2023 → January 2026</div>

<!--
BEATS:
- This is the full arc — tell it as one whiplash story. Nvidia builds a chip specifically to obey the rules (H20). The rules move; it's banned anyway; $4.5B gone in a single quarter.
- The twist that matters most: four months later the ban is traded away — not for security, for money. Nvidia and AMD agree to hand the US government 15% of their China revenue for the licenses. An export control stopped being a wall and became a toll booth.
- Then the counter-twist: Beijing sabotages it from the other side — security reviews, "not safe" state-media campaign — and Nvidia halts H20 production. Neither government actually wants this chip sold on the other's terms.
- Land 2026: the H200, a chip BANNED in 2023, is now conditionally exportable — case-by-case, behind a 25% tariff. As of early 2026 Nvidia had booked essentially zero revenue on approved sales; Chinese buyers hesitant. The B30A awaits a green light.
FACT AMMO:
- Oct 17 2023 kills A800/H800; H20 designed as compliant chip [research/geopolitics §export-control timeline]. Apr 9 2025 H20 ban, up-to-$5.5B charge, $4.5B booked Q1 [research/geopolitics §export-control timeline]. Jul–Aug 2025 reversal for 15% of China revenue (down from a 20% opening ask), never codified as a regulation [research/geopolitics §export-control timeline]. Aug 2025 Beijing discourages purchases; Nvidia halts H20 [research/geopolitics §export-control timeline]. Jan 15 2026 H200 case-by-case + 25% Section 232 tariff [research/geopolitics §export-control timeline]. Feb 2026 zero revenue booked on approved sales [research/geopolitics §export-control timeline].
- B30A made-for-China chip awaiting US green light. [VERIFY: B30A approval status at record date]
- Handle for $4.5B: a single quarter's write-off larger than most chip companies' entire annual revenue.
LINE THAT LANDS:
- "Nvidia built a chip to obey the rules, got it banned, then paid 15% of the take to un-ban it. That's not a sanction. That's a tariff with extra steps."
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
BEATS:
- The board cuts both ways. China doesn't own EUV or EDA — but it owns the dirt. Gallium, germanium, antimony, and the rare earths the whole electronics world runs on.
- The 24-hour clock is the story: the day after the US controlled HBM, China banned gallium and germanium to the US. Retaliation now measured in hours, not months.
- The escalation that scared everyone: Oct 2025, China copies America's own trick — an extraterritorial FDPR-style rule on rare earths. Anything, anywhere, containing enough Chinese rare-earth content needs a Beijing license. That's mutual chokepoint deterrence.
- The de-escalation: the Busan truce parked it on a one-year timer. Parked, not dismantled — those expiry dates are live ammunition on the calendar.
FACT AMMO:
- Jul/Aug 2023 Ga/Ge licensing (China ~98%/91% of global supply) [VERIFY: exact supply shares] [research/geopolitics §China's counters]. Dec 3 2024 outright ban on Ga/Ge/antimony/superhard to US, ~24h after US HBM rules [research/geopolitics §China's counters]. Oct 9 2025 extraterritorial rare-earth controls mirroring US FDPR [VERIFY: 0.1% de-minimis threshold detail] [research/geopolitics §China's counters]. Busan truce: rare-earth pause to Nov 10 2026, mineral ban to US suspended to Nov 27 2026 [research/geopolitics §China's counters].
- June 2026 twist worth a beat: China added US rare-earth miners MP Materials and USA Rare Earth to its own control list — targeting the very companies meant to fix US dependence [research/geopolitics §China's counters].
- Handle: China refines the inputs; the US and Netherlands own the machines. Two ends of the same chain, each holding the other's throat.
LINE THAT LANDS:
- "America controls the machines that make chips. China controls the minerals that make the machines. The truce is just a date on a calendar."
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
BEATS:
- Plot twist on the whole act: the chip war had been about the leading edge — 2nm, EUV, HBM. Nexperia proved you can hold the world hostage with the dumbest, cheapest chips there are.
- The sequence: a Dutch chipmaker owned by China's Wingtech; the Netherlands seizes control under an emergency law; China retaliates by blocking exports from the plant that packages the finished chips. The world's cars run on those cents-priced transistors, and the auto industry was days from stopping lines.
- The honest status: partial de-escalation (China exempted civilian exports; Nexperia China declared independence and sourced domestic wafers), but 2026 = unresolved. Wingtech is suing for over $8B. This is a live wound, which is exactly why it's a swappable slide — expect the facts to move.
- The bigger point for the viewer: this is the flip side of every "China is behind" story. On mature nodes, China's share is climbing toward a third of the world — and mature chips are 90% of all chips.
FACT AMMO:
- Late Sep 2025 Dutch seizure under Goods Availability Act; Chinese CEO removed [research/geopolitics §China's counters]. Oct 4 2025 China blocks Dongguan packaging plant exports, >50 billion chips/yr [research/geopolitics §China's counters]. Auto industry weeks-to-days from stoppage [VERIFY: which automakers actually cut output (Honda NA widely reported)] [research/geopolitics §China's counters]. Civilian exemption Nov 2025; Dutch order suspended [VERIFY: exact Dutch suspension date ~Nov 19 2025] [research/geopolitics §China's counters]. Wingtech arbitration >$8B (May 2026) [research/geopolitics §China's counters].
- Handle: 50 billion chips a year is roughly a chip a week for every human on Earth — from one building.
- Mature-node context: China's share of mature-node capacity climbing toward ~1/3 globally. [VERIFY: mature-node share projection (TrendForce ~30%+ by 2027)] [research/geopolitics §China's domestic push]
LINE THAT LANDS:
- "Everyone was guarding the 2-nanometer door. The hostage crisis came through the loading dock — with a chip that costs less than a stick of gum."
-->

---
class: visual-sequence paper-visual
---

<div class="visual-sequence__kicker">ADVANCED CHIPS · AT HIGHER COST</div>

<div class="visual-sequence__frame">
  <img src="/diagrams/rendered/china-capability-cost.svg" alt="SMIC uses repeated DUV patterning while Huawei uses more chips, racks, and power to close system-level compute gaps" />
</div>

<div class="visual-sequence__caption"><strong>SMIC accepts lower yields;</strong><span>Huawei uses more chips and power.</span></div>
<div class="visual-sequence__source">SMIC and Huawei · 2026 estimates</div>

<!--
BEATS:
- Answer the honest question the viewer is now asking: fine, so why doesn't China just make its own? Answer: it can — with an asterisk the size of a fab.
- PAY OFF the multi-patterning seed from the ASML segment. [seed: multi-patterning] Remember the workaround: without EUV, you print the pattern in multiple passes with older DUV machines. SMIC does exactly that to hit 7nm — and shocked everyone with the Huawei Mate 60 in 2023, proving controls slow China but don't stop it. This ALSO pays off the SMIC IOU from the foundries segment. [seed: smic-iou]
- But make them feel the physics tax: every node without EUV multiplies patterning steps → more cost, more defect chances, lower yield. SMIC's 7/5nm sells at a 40–50% premium over TSMC's equivalent. Export controls work like a tax, and China is paying it in silicon.
- Huawei's play is instructive: can't match Nvidia per-chip, so throw more chips at it. CloudMatrix 384 beats a GB200 NVL72 on aggregate compute — with more silicon and ~4× the electricity. Brute force is a strategy when your grid is cheap.
FACT AMMO:
- SMIC 7nm since 2023 (Mate 60 Kirin 9000S); 5nm pilot via DUV multi-patterning/SAQP; yields ~20–40%; 40–50% price premium to TSMC [research/geopolitics §China's domestic push]. Huawei 910C ~600k units 2026, up to 1.6M dies across the Ascend line; CloudMatrix 384 = 384×910C in 16 racks, beats GB200 NVL72 on aggregate compute at ~4× power [research/geopolitics §China's domestic push].
- Handle for the physics tax: no EUV means printing the same layer four times to get one sharp image — four chances to ruin the wafer instead of one.
SIMPLIFICATION HEDGE:
- Direction of the lie: "SMIC makes 5nm" is doing a lot of work. It's low-yield, pilot-scale, and uneconomic at volume — a demonstration, not a business. Say so.
LINE THAT LANDS:
- "China can build the chip. It just can't build it cheaply, and it can't build the machine that builds it. Yet."
-->

---
class: visual-sequence paper-visual
---

<div class="visual-sequence__kicker">CHINA'S TECHNOLOGY GAPS</div>

<div class="visual-sequence__frame">
  <img src="/diagrams/rendered/china-technology-gap.svg" alt="Four rows compare China's reported EUV, DUV, HBM, and EDA capabilities with external reference points" />
</div>

<div class="visual-sequence__caption"><strong>The largest gaps remain</strong><span>EUV, HBM, and advanced EDA.</span></div>
<div class="visual-sequence__source">Estimates vary by technology · roughly five-year leading-edge gap</div>

<!--
BEATS:
- The honest ledger. China can design world-class AI chips and print 7nm in volume. What it can't yet do: print economically (no EUV), stack the memory (HBM years behind), or replace the tool/EDA/materials stack end to end.
- EUV is the headline wall. A crash program — 3,000+ researchers across Huawei, SiCarrier, state institutes — has, after years, produced a PROTOTYPE whose light source hits 100–150W. That's the power level ASML passed in 2017. The moat here is measured in years, not decades — but it's real.
- The SMEE reality check keeps you honest the OTHER way: a headline "breakthrough" litho tool turned out to be a 110nm dry scanner. Not everything China announces is what it claims.
- The real bottleneck isn't logic — it's memory. Even if you have the dies, CXMT is 3–4 years behind on HBM. Dies aren't the constraint; the memory stacked next to them is.
- The uncomfortable truth to voice: controls raised China's costs AND handed it a protected home market with unlimited state capital. Every wall bought years, not permanence — Mate 60, CloudMatrix, the EUV prototype each arrived faster than consensus predicted.
FACT AMMO:
- EUV prototype in Shenzhen; Huawei + SiCarrier coordinating 3,000+ researchers; light source 100–150W vs 250W ASML reached in 2017; Beijing targets 2028, 2030 more realistic [VERIFY: wattage range + 3,000-researcher figure against original Reuters piece] [research/geopolitics §China's domestic push]. SMEE Dec 2025 tool = KrF 248nm dry, 110nm resolution, not 28nm immersion [research/geopolitics §China's domestic push]. CXMT ~8% global DRAM Q1 2026, HBM3 end-2026, 3–4 years behind Korea [research/geopolitics §China's domestic push]. Empyrean ~10–12% of Chinese EDA market; big-three still ~80% of China market but falling [research/geopolitics §China's domestic push]. Consensus leading-edge gap ~5± years, closing [research/geopolitics §China's domestic push].
- Huawei reportedly building own fab network targeting 7nm commercial scale. [VERIFY: independent confirmation of Huawei-fab 7nm timeline] [research/geopolitics §China's domestic push]
SIMPLIFICATION HEDGE:
- Direction of the lie: "5 years behind" is a single number over a very lumpy front. China is ~months behind on chip design, a decade behind on EUV. One average hides both.
LINE THAT LANDS:
- "China's EUV prototype hits the light power ASML shipped in 2017. That's not hopeless — that's the scariest sentence in this whole episode. The gap is years, and years get closed."
-->

---
class: visual-sequence paper-visual
---

<div class="visual-sequence__kicker">US INDUSTRIAL POLICY</div>

<div class="visual-sequence__frame">
  <img src="/diagrams/rendered/us-fab-investment.svg" alt="A US map marks announced TSMC, Micron, Samsung, and Intel investments beside federal incentives and equity" />
</div>

<div class="visual-sequence__caption"><strong>Federal incentives and equity</strong><span>are funding new US fab capacity.</span></div>
<div class="visual-sequence__source">Announced investment · 2032 capacity projection</div>

<!--
BEATS:
- The mirror image of China's state capitalism: America is doing the same thing and calling it something else. CHIPS started as $52.7B of grants. Then in Aug 2025 the doctrine flipped — the government converted Intel's grants into a 9.9% equity stake. The state didn't subsidize its champion; it bought it.
- Say the sharp version: the US government is now Intel's largest shareholder, paid for with money Congress passed to GRANT, not to invest. Officials frame these stakes as the seed of a sovereign wealth fund.
- The reshoring is real and enormous: TSMC's $165B Arizona build is the largest foreign investment in US history; Micron up to $250B; Samsung's Taylor fab unlocked by a Tesla deal. From 0% of advanced logic on US soil in 2022 to a projected 28% by 2032.
- The honesty beat: it partly fights itself. The same administration's 25% tariff taxes the AI data-center buildout the reshoring is meant to serve. Critics argue the tariff undermines the thing it's protecting.
FACT AMMO:
- CHIPS & Science Act Aug 2022: $52.7B ($39B manufacturing, $13.2B R&D, $500M supply-chain) + 25% ITC [research/geopolitics §CHIPS Act]. Aug 22 2025: 433.3M shares at $20.47 = $8.9B ≈ 9.9%, largest shareholder, + warrant [research/geopolitics §CHIPS Act]. TSMC Arizona $165B, largest US FDI ever [VERIFY: ">92% yield" claim weak source, avoid stating yield] [research/geopolitics §CHIPS Act]. Micron up to $250B [research/geopolitics §CHIPS Act]. Samsung Taylor ~$37B, unlocked by Tesla's $16.5B deal [VERIFY: current Taylor total and ramp date] [research/geopolitics §CHIPS Act]. US advanced-logic capacity 0% 2022 → 28% projected 2032; capacity to triple [research/geopolitics §CHIPS Act].
- Sovereign-wealth-fund framing; DoD preferred stake in MP Materials Jul 2025. [VERIFY: SWF framing quotes (Bessent), MP Materials stake ~15%] [research/geopolitics §CHIPS Act]
- Counterweight: ITIF and others argue the Section 232 tariff undermines the buildout it's meant to protect [research/geopolitics §CHIPS Act].
LINE THAT LANDS:
- "China's critics call it state capitalism. Then Washington bought 10% of Intel. Turns out everyone runs an industrial policy — they just argue about the name."
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
BEATS:
- PAY OFF the Taiwan flag planted in the TSMC segment. [seed: taiwan-flag] We planted the flag; we said we wouldn't detonate it yet. Now we do.
- The concentration is the whole story: 92% of the world's sub-10nm capacity sits on one island the size of Maryland. TSMC makes ~90% of the most advanced chips; N2 is sold out through 2027 before it ships in volume.
- Argue the silicon shield BOTH ways, honestly — this is a genuine debate, not a settled fact:
  - Shield: the world can't afford to let Taiwan burn, so everyone is invested in the status quo; US defense posture is underwritten by TSMC dependence.
  - Target/erosion: the fabs are exactly what makes the island worth seizing or strangling — AND every fab TSMC opens in Arizona thins the shield. If America makes its own chips, what does Taipei still hold?
- The live fight: Washington wants to move 40% of Taiwan's chip supply chain to the US (the "50-50" proposal). Taipei calls it "impossible" and "exploitation" — most advanced nodes stay home. The Jan 2026 deal: $250B of Taiwanese investment for a 15% tariff cap.
FACT AMMO:
- 92% of sub-10nm capacity [research/geopolitics §Taiwan]; TSMC ~90% of most advanced chips; N2 sold out through Q2 2027 [research/geopolitics §Taiwan]. Lutnick 50-50 proposal (Oct 2025), Taiwan rejects [research/geopolitics §Taiwan]. Jan 15 2026 deal: ≥$250B Taiwanese investment + $250B credit guarantee, US caps tariff at 15%, goal to move 40% of the chain to US; Taipei: 40% relocation "impossible" [research/geopolitics §Taiwan].
- Handle: an island the size of Maryland makes the chips the entire planet's economy now runs on.
SIMPLIFICATION HEDGE:
- Direction of the lie: "silicon shield" is a theory, not a mechanism — smart people argue it deters an invasion and that it invites one. Present both; don't pick for the viewer.
LINE THAT LANDS:
- "Every fab TSMC opens in Arizona makes the world a little safer — and Taiwan a little more expendable. Those are the same sentence."
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
BEATS:
- The climax. Don't narrate an invasion — walk the light going OUT on the viewer's own board. Taiwan goes dark → 92% of leading-edge logic stops → but also: CoWoS packaging stops (TSMC twice), the chips already designed can't be built, the whole right half of the map goes dark in a chain reaction the viewer can now trace without help.
- Give the number its weight: Bloomberg Economics models a Taiwan war at $10.6 trillion in year one — ~9.6% of global GDP, bigger than COVID or the 2008 crisis. A blockade-only scenario is still around $5T.
- HEDGE hard and out loud — this is mandatory here. It's a model with enormous error bars, built on assumptions about blockade vs invasion, duration, and response. The honest headline isn't the exact figure; it's that in every scenario, nobody wins. There's no version where someone comes out ahead.
- Tie the bow: this is why seven companies are a national-security question. Not because chips are fragile — because we let the whole world's supply pool onto one island, into a handful of firms. The board isn't a metaphor. The board is the world.
FACT AMMO:
- Bloomberg Economics: Taiwan war ~$10.6T / 9.6% of global GDP in year one (Feb 2026 update); earlier 2024 estimate ~$10T / 10% [research/geopolitics §Taiwan]. Blockade-only ~$5T [VERIFY: blockade $5T figure from original 2024 report] [research/geopolitics §Taiwan].
- Handle: $10.6T is roughly the entire annual output of Germany and Japan combined — gone in twelve months.
SIMPLIFICATION HEDGE:
- Direction of the lie: this is ONE bank's model of an event that hasn't happened. Cite it as such. The robust claim is directional (catastrophic, no winners), not the decimal.
LINE THAT LANDS:
- "I'm not going to war-game an invasion for you. I'm just going to switch off one light on the board you built — and watch the other six die."
-->

---
class: visual-sequence paper-visual
---

<div class="visual-sequence__kicker">TWO AI STACKS</div>

<div class="visual-sequence__frame">
  <img src="/diagrams/rendered/split-ai-stacks.svg" alt="Two separated stacks compare US-led and China-led accelerators, software, foundries, and equipment" />
</div>

<div class="visual-sequence__caption"><strong>The two stacks now use</strong><span>different accelerators, software, foundries, and tools.</span></div>
<div class="visual-sequence__source">Mineral-control pauses expire · November 2026</div>

<!--
BEATS:
- Closer — "what you now know" in 20 seconds: you can now read any chip-war headline as a move on the board. Export controls = four levers. China's counters = minerals and legacy chips. The domestic push = real but taxed. Reshoring = the state buying shares. Taiwan = the prize nobody can afford to lose.
- Leave them with the live stakes, not a bow: bifurcation isn't pending, it's happening — two incompatible stacks (CUDA/Nvidia vs Ascend/CANN), two toolchains. The truce is a set of dates: rare earths Nov 10, minerals Nov 27, 2026. And every control has a half-life — each round buys years, not permanence.
- HANDOFF to synthesis, phrased as the question it answers: we've mapped who can choke whom. But we started this whole episode with a mystery — a 75% gross margin, a $600B buildout. After everything, where does the value actually pool? That's the last thing left to count.
FACT AMMO:
- Bifurcation happening now: two stacks (CUDA/Nvidia vs Ascend/CANN), two toolchains, incompatible standards [research/geopolitics §Risks & scenarios]. Truce timers: rare-earth pause Nov 10 2026, mineral-ban suspension Nov 27 2026 [research/geopolitics §Risks & scenarios]. Controls' half-life: Mate 60, CloudMatrix, EUV prototype each arrived faster than consensus [research/geopolitics §Risks & scenarios].
LINE THAT LANDS:
- "For two hours this was a map. For the last twelve minutes it was a battlefield. It was always the same picture — the world just can't agree on the verb. Now: where does the money go?"
-->
