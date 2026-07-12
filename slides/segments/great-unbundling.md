<!-- SEGMENT
id: great-unbundling
act: I — The Impossible Object
tier: —
angle: "The industry didn't grow into four kinds of company — one graph shattered it into them. In 1987 Morris Chang read the fab-cost curve and turned manufacturing itself into a product; every company in this course is just a different survival strategy for a cost that doubles every four years."   # PROPOSED — YOU OWN THIS LINE
runtime: ~5 min
status: draft
seeds: [margin-ladder]    # the ladder is teased here, ranked in `synthesis`. Soft plant — not a formal ledger pair, but the payoff lives in another segment, so redline per that rule.
pays_off: []              # cashes no prior ledger seed; it consumes foundations' cost-curve concept, which is a dependency, not a seed
stamps: []                # no chokepoint proven here — first stamp (EDA) is earned in `eda`
diagrams: [map-full]      # FIRST full reveal of the master map — archetypes ARE the legend
sources: research/foundations.md, research/tsmc.md
-->

---
layout: section
---

# Why the Industry Shattered

<div class="text-xl opacity-70 mt-2">Act I — The Impossible Object · the one graph that explains everything</div>

<div class="text-lg opacity-80 mt-8 leading-relaxed">
We ended the last segment on a graph going the wrong way.<br>
This segment is what that graph <i>did</i> to the industry.
</div>

<!--
BEATS:
- Callback: foundations closed on the two exponentials — density up (Moore), fab cost up (Rock). Reopen on the second one.
- Frame the mystery this segment answers: why isn't there one giant company that designs AND builds the world's chips, the way there was for the first 40 years? Why did it break into pieces?
- Tee up the angle in your own words: the shape of the whole industry is downstream of ONE cost curve.
LINE THAT LANDS:
- "Every logo you're about to meet is an answer to the same question: how do you survive a factory that gets twice as expensive every four years?"
-->

---

# The graph that breaks companies

<div class="grid grid-cols-3 gap-6 mt-10 text-center">
<div>
<div class="text-6xl font-bold">~$4M</div>
<div class="opacity-70 mt-2">a leading-edge fab, early 1970s</div>
</div>
<div>
<div class="text-6xl font-bold">$20B+</div>
<div class="opacity-70 mt-2">a leading-edge fab today</div>
</div>
<div>
<div class="text-6xl font-bold">~4 yrs</div>
<div class="opacity-70 mt-2">to double (Rock's law)</div>
</div>
</div>

<div class="text-center mt-12 text-2xl">
25 companies could build the leading edge in 2001.<br>
<span class="opacity-60 text-xl">Today: <b>3.</b></span>
</div>

<!--
BEATS:
- One number: the cost of the most advanced fab has risen ~5,000× in fifty years, and it doubles roughly every four (Rock's law / Moore's second law).
- Meanwhile Moore's law is DEMOCRATIC — more transistors for everyone. Rock's law is ARISTOCRATIC — fewer and fewer players can pay the entry fee. Two exponentials pulling in opposite directions.
- Show the consequence: the "consolidation funnel." At 130nm (~2001) ~25 companies ran leading-edge logic; every node since has eliminated whoever couldn't amortize the bill over enough volume. Now three.
FACT AMMO:
- Fab cost ~$4M early 1970s → $20B+ today; up ~5,000× [research/foundations §Moore's Law & the two exponentials].
- Rock's law: leading-edge fab cost doubles ~every 4 years [research/foundations §Moore's Law & the two exponentials].
- Funnel: 130nm ~25-26 players (2001) → 90nm ~17 → 45nm ~12 → 22nm ~6 → 14nm ~4 → 3nm/2nm just 3 (TSMC, Samsung, Intel) [research/foundations §the consolidation funnel]. <!-- VERIFY: exact counts differ by source (IBS/BCG/McKinsey); lock one chart before recording -->
- Handle: "the machine that makes the cheapest objects ever manufactured is the most expensive factory ever built." [research/foundations §fact ammo]
LINE THAT LANDS:
- "The funnel isn't a mystery. It's the cost curve flipped upside down."
-->

---

# The bind (mid-1980s)

<div class="grid grid-cols-2 gap-10 mt-10">
<div class="border-2 border-gray-400 rounded-lg p-6">
<div class="text-xl font-bold mb-2">A designer with a great idea</div>
<div class="opacity-70">...but no way to raise a fab's worth of capital. Locked out.</div>
</div>
<div class="border-2 border-gray-400 rounded-lg p-6">
<div class="text-xl font-bold mb-2">A fab that must run flat-out</div>
<div class="opacity-70">...but can't stay full on one company's designs alone. Starved.</div>
</div>
</div>

<div class="text-center mt-12 text-2xl opacity-80">
Every serious chip company did both under one roof.<br>
<span class="opacity-60 text-lg">"Real men have fabs." — Jerry Sanders, AMD</span>
</div>

<!--
BEATS:
- Set up the contradiction the cost curve creates. Two things are now simultaneously true and incompatible.
- One: fab capital has become prohibitive, so a brilliant designer with no billions is shut out of ever making their chip.
- Two: a fab only pays for itself if it runs flat-out — but no single company generates enough design volume to keep a modern fab full.
- The orthodoxy in 1987: you did both. The Integrated Device Manufacturer — design AND fab under one roof. Intel, TI, Motorola, everyone. The macho slogan of the era was Jerry Sanders' "real men have fabs."
- Hold the tension: the old model is exactly what the cost curve is about to make impossible for all but a handful.
FACT AMMO:
- The default was the IDM — design and fab integrated; "real men have fabs" (Jerry Sanders, AMD) [research/tsmc §History].
- By the mid-1980s a competitive fab already cost hundreds of millions and was doubling every ~4 years [research/foundations §the great unbundling].
SIMPLIFICATION HEDGE (direction of the lie):
- Pure-play foundry work existed before 1987 in small ways (UMC, gate-array shops); Chang's move was making it the WHOLE business model at scale, not inventing the concept from zero. Say "he made it the business model," not "he invented outsourcing."
-->

---

# Morris Chang's move (1987)

<div class="text-2xl mt-8 leading-relaxed text-center">
Stop treating the fab as overhead.<br>
<b>Sell the manufacturing itself — to everyone.</b>
</div>

<div class="grid grid-cols-3 gap-6 mt-12 text-center">
<div>
<div class="text-5xl font-bold">56</div>
<div class="opacity-70 mt-2">Chang's age at founding</div>
</div>
<div>
<div class="text-5xl font-bold">~48%</div>
<div class="opacity-70 mt-2">Taiwan gov't stake · Philips ~28%</div>
</div>
<div>
<div class="text-5xl font-bold">0</div>
<div class="opacity-70 mt-2">chips TSMC would ever sell of its own</div>
</div>
</div>

<!--
BEATS:
- Meet the man: Morris Chang, 25 years at Texas Instruments where he ran the worldwide semiconductor business and mastered learning-curve pricing, recruited by Taiwan's government to build the island a chip industry. He founds TSMC in Hsinchu, Feb 1987.
- The insight: if the fab is the expensive part, and design talent is plentiful, split them. Let designers design; let one specialist manufacture for all of them. Turn the factory from a cost center into the product.
- The counterintuitive core — the TRUST mechanic: TSMC would never design or sell a chip of its own. That refusal to compete with its customers wasn't a sacrifice — it WAS the product. Now any designer can hand over their crown jewels without fear.
- This is the pivot of the whole segment: one decision converts an industry's biggest liability (the fab) into a service business.
FACT AMMO:
- Chang: ~25 years at TI, learning-curve pricing; recruited by Taiwan (minister K.T. Li); TSMC incorporated 21 Feb 1987, Hsinchu [research/tsmc §History].
- Startup capital ~NT$1.4B (~US$50M-class): Taiwan's Development Fund 48.3%, Philips 27.5%, rest from Taiwanese industrial families (no US chip firm would invest); first fab leased from ITRI, process licensed from Philips 2-3 generations behind [research/tsmc §History].
- The product = "manufacture for everyone, compete with no one" — the customer's trust IS the business model [research/tsmc §History].
- Chang's age: foundations pack says 56 at founding; tsmc pack says 54 at 1985 recruitment. <!-- VERIFY: Chang b. July 1931 → ~55 at Feb-1987 incorporation; reconcile the "54/56" figures before recording -->
LINE THAT LANDS:
- "He didn't build a better chip company. He deleted a step from everyone else's — and charged them for it."
-->

---

# So four kinds of company fall out

<div class="grid grid-cols-2 gap-5 mt-6">
<div class="border-2 rounded-lg p-4" style="border-color:#3b82f6">
<div class="text-lg font-bold" style="color:#3b82f6">FABLESS — own the design, rent the fab</div>
<div class="opacity-70 text-sm mt-1">Answer to "I can't afford a fab." → Nvidia, Qualcomm, AMD, Apple silicon</div>
</div>
<div class="border-2 rounded-lg p-4" style="border-color:#10b981">
<div class="text-lg font-bold" style="color:#10b981">FOUNDRY — own the fab, sell nothing of your own</div>
<div class="opacity-70 text-sm mt-1">Answer to "keep the fab full." → TSMC (and the model itself)</div>
</div>
<div class="border-2 rounded-lg p-4" style="border-color:#8b5cf6">
<div class="text-lg font-bold" style="color:#8b5cf6">IDM — refuse to split, do both</div>
<div class="opacity-70 text-sm mt-1">Survivable only at huge scale + capital. → Intel, Samsung, the analog world</div>
</div>
<div class="border-2 rounded-lg p-4" style="border-color:#f59e0b">
<div class="text-lg font-bold" style="color:#f59e0b">EQUIPMENT — sell the machines to all of them</div>
<div class="opacity-70 text-sm mt-1">Answer to "sell shovels, not gold." → ASML, Applied Materials</div>
</div>
</div>

<div class="text-center mt-6 text-sm opacity-60">
Not a taxonomy someone drew up — four survival strategies for the same cost curve.
</div>

<!--
BEATS:
- The payoff of the derivation — and say this explicitly: these four aren't a chart from a textbook. They're what the cost curve FORCES. Each is a different answer to "how do I survive Rock's law?"
- FABLESS: can't afford the fab, so own only the design and rent capacity. The moment Chang made this possible, the fabless explosion followed — Nvidia (1993), Qualcomm, Broadcom, Marvell, Apple silicon. None of them ever built a fab because TSMC existed.
- FOUNDRY: the mirror image — own the fab, keep it full with everyone's designs, sell no chip of your own. Chang's own creation.
- IDM: refuse to unbundle, keep design and fab together. Still viable — but only if you have BOTH enormous volume AND the capital to keep paying the curve. The club shrinks to Intel, Samsung, and the mature/analog world.
- EQUIPMENT: the "sell shovels in a gold rush" role — you don't care who wins the design or foundry war, because all of them must buy your machines. ASML, Applied Materials.
- Tease the margin ladder (DO NOT resolve it): each role skims a different slice of the chip's final price. Pose the question — where does the money actually pool? That's the thread we pull for the rest of the episode; we rank the ladder at the very end.
FACT AMMO:
- The unbundling created the fabless industry: Nvidia (1993), Qualcomm, Broadcom, Marvell, Apple silicon — none needed a fab [research/tsmc §History; research/foundations §the great unbundling].
- Margin-ladder taste (tease only): a leading-edge foundry sells a 2nm wafer for ~$30,000 [research/foundations §wafer prices] <!-- VERIFY: analyst estimate, TSMC never publishes prices --> — and the "commodity" manufacturer runs ~60% gross margin (TSMC FY2025 59.9%, Q1 2026 66.2%) [research/tsmc §financials]. Where the margin actually pools is the question `synthesis` answers.
SIMPLIFICATION HEDGE (direction of the lie):
- The four overlap at the edges — Samsung is an IDM that ALSO runs a foundry; Intel is becoming one too. Present them as archetypes/roles a company plays, not walls between companies. "A company can wear more than one of these hats."
LINE THAT LANDS:
- "Fabless, foundry, IDM, equipment. Nobody designed this structure. A cost curve did."
-->

---
layout: center
---

# The whole board

![the master industry map, fully lit — regions colored by archetype](/diagrams/rendered/map-full.svg)

<div class="text-center mt-4 text-lg opacity-80">
The colors aren't decoration. They're the four roles we just derived.
</div>

<!--
BEATS:
- THE REVEAL — first time the full map is on screen. Let it land. This is the map that was fully dark in the cold open; here it lights up completely for the first and only time this early.
- Read it as a legend, not a company list: every box is one of the four colors. Design (fabless + the EDA/IP that serve them), Manufacture (foundries + IDMs), Equipment, and the specialist branches — memory, materials, packaging — that are still, underneath, one of the four archetypes.
- The promise: for the rest of the episode we visit these regions one at a time, lighting our own path. You now have the map legend before you've met a single company in depth.
- Re-tease the margin ladder against the map: money does NOT pool evenly across these colors — hold that thought for the finale.
- THEN the closer / handoff (write it as the question nvidia answers): our chip is going to walk this whole board. And it starts in exactly one place.
FACT AMMO:
- Map regions = the archetypes: DESIGN (fabless/EDA/IP), MANUFACTURE (foundries + IDM/analog), EQUIPMENT, MATERIALS, MEMORY, PACKAGE & TEST — all resolving to the four roles [derived this segment; map-full.svg].
LINE THAT LANDS / CLIFFHANGER (hand off to `nvidia`):
- "Our chip starts as a file. In Santa Clara."
-->
