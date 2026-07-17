---
layout: section
---

<!-- SEGMENT
id: tsmc
act: III — The Island
tier: P            # protagonist — the crown jewel of the episode
angle: "TSMC's real invention wasn't a chip — it was a promise: manufacture for everyone, compete with no one. Forty years of compounded trust and yield learning turned that promise into the deepest moat in capitalism, and parked it on one island."   # YOU OWN THIS LINE — rewrite it in your voice
runtime: ~10 min
status: draft
seeds: [taiwan-flag]          # planted here — DETONATES in geopolitics, not here
pays_off: [apple-iou]         # planted in fabless-field
stamps: [tsmc-wafers]         # chokepoint #2 — leading-edge logic
diagrams: [map-manufacture, journey-3, board-2]
sources: research/tsmc.md
-->


# TSMC

<div class="text-xl opacity-70 mt-2">The Island Foundry</div>

<div class="grid grid-cols-2 gap-8 mt-8 items-center">
<div>

![journey — FAB](/diagrams/rendered/journey-3.svg)

</div>
<div>

![map — manufacture lit](/diagrams/rendered/map-manufacture.svg)

</div>
</div>

<!--
BEATS:
- The Journey Bar advances: SAND → DESIGN → **FAB**. The file from Act II lands here — and stays here for the next forty minutes of the episode.
- Light the island on the Map. Everything Act II designed is, right now, a file. It becomes a physical object in exactly one place.
- Tee up the angle (above) in your own words: this segment is about a company that wins by refusing to compete.
FACT AMMO:
- TSMC = Taiwan Semiconductor Manufacturing Company, Hsinchu, Taiwan — the world's first and largest pure-play foundry; it never sells a chip under its own name [research/tsmc §what-they-are].
- ~90% of the world's most advanced chips (≤7nm-class) come from this one company [research/tsmc §what-they-are]. [VERIFY: contested on definitions — for merchant-market chips at ≤7nm, ~90% is fair; counting Intel/Samsung internal capacity it's lower. Voice the hedge if you use it here; the full hedge lands on the stamp slide.]
LINE THAT LANDS:
- "Every company in the last act had a secret in common: none of them can build anything. This is the company that builds it all."
-->

---

# 1987: the bet nobody else would make

<div class="grid grid-cols-2 gap-10 mt-8">
<div>
<div class="text-7xl font-bold">56</div>
<div class="opacity-70 mt-2">Morris Chang's age, founding what becomes<br>the world's most important company</div>
</div>
<div class="flex flex-col justify-center gap-3 text-lg">

- **25 years at Texas Instruments** — ran the global chip business
- Passed over for CEO. Recruited by **Taiwan's government**
- Startup money: state fund **48.3%**, Philips **27.5%** — <b>no US chip company would invest</b>
- Process tech: licensed, **2–3 generations behind**

</div>
</div>

<!--
BEATS:
- 1985: Taiwan's minister K.T. Li recruits Morris Chang — MIT/Stanford-trained, 25 years at Texas Instruments where he ran the worldwide semiconductor business — to build Taiwan a chip industry from nothing.
- 21 Feb 1987: TSMC incorporated in Hsinchu. This is a man in his mid-fifties — the age executives retire — starting over on an island with no chip industry, with borrowed money and borrowed technology.
- Land the absurdity: the American chip industry looked at this and laughed. "Real men have fabs" — Jerry Sanders, AMD. In 1987, every serious chip company designed AND manufactured. Chang's heresy: fabrication itself could be the whole product.
FACT AMMO:
- Recruited 1985, age 54; TSMC incorporated 21 Feb 1987 [research/tsmc §history]. [VERIFY: exact age at founding — pack gives 54 at 1985 recruitment, making him 55–56 in Feb 1987; curriculum says "founding at 56". Pin down before recording.]
- Startup capital ~NT$1.4B (~US$50M-class): Executive Yuan Development Fund 48.3%, Philips 27.5%, rest arm-twisted from Taiwanese industrial families [research/tsmc §history]. [VERIFY: exact initial capital varies NT$1.3–1.4B across sources; ownership splits well attested.]
- First fab leased from ITRI; Philips process 2–3 generations behind the leaders [research/tsmc §history].
- Handle: the seed money was ~$50M-class — TSMC now spends that roughly every eight hours on capex ($52–56B/yr ≈ ~$150M/day) [research/tsmc §financials].
LINE THAT LANDS:
- "The most valuable manufacturing company on Earth was founded with money no American would invest, by a man American industry passed over, at an age when American executives retire."
-->

---

# "We compete with no one"

<div class="grid grid-cols-2 gap-10 mt-8">
<div class="text-lg leading-relaxed">
<div class="font-bold text-2xl mb-4">What a foundry sells</div>

- a **process recipe** (the node)
- a **PDK** — the rulebook your tools design against
- **qualified IP** libraries
- **yield** — the % of dies that live

</div>
<div class="text-lg leading-relaxed">
<div class="font-bold text-2xl mb-4">What it never sells</div>

- a chip with its own name on it
- your secrets to your rival —<br><span class="opacity-70">Apple, Nvidia, AMD, Qualcomm silicon<br>runs through the same fabs</span>

</div>
</div>

<div class="text-sm opacity-60 mt-8">The customer owns the design. TSMC owns the recipe. Trust IS the business model.</div>

<!--
BEATS:
- Explain the machine's actual product: customers send designs, TSMC returns processed wafers. What it really sells is a process + PDK + qualified IP + yield. The customer owns the design; TSMC owns the recipe.
- The structural trick: pure-play means Apple's and Qualcomm's and Nvidia's secrets sit in the same buildings without conflict. Samsung — which competes with its own customers in phones and memory — structurally cannot offer that. This is why "we compete with no one" is a moat, not a slogan.
- The lock-in layer: Open Innovation Platform (since 2008) — PDKs, Synopsys/Cadence flows, validated Arm IP. The whole industry's toolchain assumes TSMC first; porting a taped-out design elsewhere is expensive. Callback to the EDA segment: the duopoly's software ships TSMC-ready.
- And the fabless industry exists BECAUSE this exists: Nvidia (1993), Qualcomm, Broadcom, Apple silicon — none ever needed a fab. Jensen Huang's startup got capacity because Morris Chang personally answered his letter. [VERIFY: the Jensen letter / Chang phone-call anecdote is oft-told by both men — check exact wording before using.]
FACT AMMO:
- Pure-play definition, PDK/IP/yield as the product, customer-owns-design [research/tsmc §what-they-are].
- OIP since 2008; ecosystem lock-in; trust vs Samsung's conflict [research/tsmc §moat].
LINE THAT LANDS:
- "TSMC holds the crown jewels of a dozen rivals in one building — and the reason they all trust it is the reason it can never betray them: the moment it competes, the business model dies."
-->

---

# The flywheel

<div class="flex justify-center mt-10">
<div class="text-2xl font-bold leading-loose text-center">
MORE WAFERS → MORE DEFECT DATA → BETTER YIELD<br>
↑ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ↓<br>
MORE CAPEX ← MORE REVENUE ← WIN THE NEXT DESIGN
</div>
</div>

<div class="grid grid-cols-2 gap-8 mt-10 text-center">
<div>
<div class="text-5xl font-bold">$40.9B</div>
<div class="opacity-70 mt-2">capex 2025</div>
</div>
<div>
<div class="text-5xl font-bold">$52–56B</div>
<div class="opacity-70 mt-2">capex 2026 — ~$150M <i>a day</i></div>
</div>
</div>

<!--
BEATS:
- This is the segment's core teach — the yield-learning flywheel. Recall yield from Act I: the % of dies on a wafer that actually work. Yield isn't fixed; it's LEARNED, defect by defect, wafer by wafer.
- Walk the loop: TSMC runs more leading-edge wafers than everyone else combined → more defect data per week → faster yield ramp → better economics at the same price → wins the next flagship design → more volume. Scale is self-reinforcing.
- Then the capex turn of the same loop: the profits fund $40B+ a year of new fabs, which no challenger can match without losing money for a decade. That's why the starting grid collapsed (next segment plants this) — you don't out-engineer this flywheel, you'd have to out-SPEND it while losing money the whole time.
- Concept placement note: this is where the course teaches the learning curve — inside the company where it's most vivid. Chang mastered learning-curve pricing at TI decades before he built a company that IS the learning curve.
FACT AMMO:
- Flywheel mechanics: more wafers → defect data → yield ramp → wins design [research/tsmc §moat].
- Capex: $40.9B (2025); $52–56B budget (2026), 70–80% leading edge [research/tsmc §financials]. Handle: ~$150M every single day — more than most competitors' TOTAL annual revenue, spent yearly [research/tsmc §fact-ammo].
- R&D ~US$8B/yr [research/tsmc §moat]. [VERIFY: 2025 R&D ≈ NT$250B (~US$8B) — check annual report.]
- Chang's TI background in learning-curve pricing [research/tsmc §history].
- Simplification hedge: yield learning isn't the ONLY moat (trust + ecosystem lock-in do real work) — the flywheel is the engine, those are the transmission.
LINE THAT LANDS:
- "Every wafer TSMC runs makes the next wafer better. Every rival's wafer NOT run at TSMC makes the gap wider. It's compound interest, and TSMC has been compounding since 1987."
-->

---

# The IOU comes due: Apple

<div class="grid grid-cols-2 gap-10 mt-8">
<div>
<div class="text-6xl font-bold">~17%</div>
<div class="opacity-70 mt-2">of TSMC revenue = Apple<br><span class="text-sm">sole-source since the mid-2010s</span></div>
</div>
<div>
<div class="text-6xl font-bold">~19%</div>
<div class="opacity-70 mt-2">= Nvidia — <b>the new #1</b><br><span class="text-sm">first change of the guard in over a decade</span></div>
</div>
</div>

<div class="text-sm opacity-60 mt-10">
Newest-node wafer revenue, FY2025: <b>3nm = 24%</b> — the newest node is where flagship silicon lives, and one customer historically claims it first.
</div>

<!--
BEATS:
- Cash the IOU from the fabless montage: we said Apple's real chip story lives here. This is it.
- Apple went sole-source on iPhone processors at TSMC in the mid-2010s and never left; the entire Apple-silicon line — every iPhone, every Mac — is fabbed by TSMC.
- The mechanism that matters: Apple pays to be FIRST onto each new node — effectively reserving the leading edge at launch. That's not a purchase order, it's an alliance: Apple funds the ramp, TSMC delivers a node nobody else has yet, and both get a moat. [VERIFY: the "Apple buys out the first year of each new node" mechanism is standard industry telling but NOT in the pack — confirm and source before recording, or soften to "Apple has led the ramp of recent nodes."]
- Then the 2025 twist — the guard change: Nvidia overtook Apple as customer #1 (~19% vs ~17% of revenue, ~$23.4B) for the first time in over a decade. Inside TSMC's own ledger you can watch the phone era hand power to the AI era: HPC was 58% of 2025 revenue; smartphone, 29%.
FACT AMMO:
- Apple ~17% of FY2025 revenue (NT$645B); Nvidia ~19% (~US$23.4B), overtook Apple for the first time in over a decade [research/tsmc §moat]. [VERIFY: analyst estimates from supply-chain data — TSMC only discloses anonymized >10% customers.]
- Sole-source on iPhone processors, mid-2010s [research/tsmc §history].
- Node mix FY2025: 3nm 24%, 5nm 36%, 7nm 14% → advanced ≤7nm = 74% of wafer revenue [research/tsmc §financials].
- Platform mix FY2025: HPC 58% (+48% YoY), smartphone 29% [research/tsmc §financials].
LINE THAT LANDS:
- "For ten years the iPhone decided what the leading edge was for. In 2025, inside TSMC's ledger, the AI era quietly dethroned it."
-->

---

# The roadmap, as of 2026

<div class="mt-8 text-lg">
<div class="grid grid-cols-4 gap-4 text-center">
<div><div class="text-3xl font-bold">N3</div><div class="text-sm opacity-70 mt-1">ramped 2023–25<br>fastest-monetizing node ever</div></div>
<div><div class="text-3xl font-bold">N2</div><div class="text-sm opacity-70 mt-1">HVM since Q4 2025<br><b>first gate-all-around</b></div></div>
<div><div class="text-3xl font-bold">A16</div><div class="text-sm opacity-70 mt-1">late 2026 → volume 2027<br><b>backside power</b></div></div>
<div><div class="text-3xl font-bold">A14</div><div class="text-sm opacity-70 mt-1">2028<br>2nd-gen GAA</div></div>
</div>
</div>

<div class="text-sm opacity-60 mt-10 text-center">
"2nm" measures nothing on the chip. The names lie about geometry — but they honestly rank generations.<br>
Notably absent through 2029: <b>High-NA EUV</b>. TSMC keeps squeezing the older machines.
</div>

<!--
BEATS:
- Voice the node-name hedge FIRST (it's the honesty beat): nothing on an "N2" chip is 2 nanometers; since the late '90s node names track density/power generations, not measurements. Marketing labels that honestly rank generations.
- N2 is the milestone: TSMC's first gate-all-around transistor node (callback to foundations' FinFET→GAA teach) — high-volume manufacturing since Q4 2025 in Hsinchu + Kaohsiung, "with good yield," ramping hard through 2026 on phone + AI demand.
- A16 adds Super Power Rail — backside power: the power wiring moves UNDER the transistors, freeing the top for signal routing. Built for exactly the AI silicon this course follows.
- The quiet strategic tell: A14 in 2028, A12/A13 ~2029 — all WITHOUT High-NA EUV. Intel bet on the $400M next-gen scanners (you saw them in the ASML segment — or will, Act IV); TSMC is betting it can multi-pattern the old machines cheaper. Capex discipline vs technology leap — flag it, don't resolve it; Intel's segment is next.
FACT AMMO:
- N3: 6% of wafer revenue Q3 2023 → ~24–28% through 2025–26; fastest-monetizing node ever; N3 GM crosses corporate average during 2026 [research/tsmc §tech].
- N2: first GAA nanosheet node, HVM Q4 2025, Fab 20 Hsinchu + Fab 22 Kaohsiung, "good yield"; vs N3E ~10–15% faster iso-power or ~25–30% lower power [research/tsmc §tech].
- N2 ramp: ~50k wafers/month exiting 2025 → ~120–130k wpm by end-2026 [research/tsmc §tech]. [VERIFY: capacity figures are supply-chain estimates, not TSMC-official.]
- N2P volume H2 2026; A16 = Super Power Rail / backside power, "volume production on track H2 2026" per Jan 2026 call, but Apr 2026 symposium coverage frames real volume as 2027 [research/tsmc §tech]. [VERIFY: treat A16 as "late 2026 start, real volume 2027."]
- A14 2028 (~10–15% perf or ~25–30% power vs N2), no backside power until A14P 2029; A12/A13 ~2029, still no High-NA [research/tsmc §tech].
- Cost physics: capex per 1k wpm "substantially higher" N3→N2→A14 (CFO, Jan 2026) [research/tsmc §tech].
LINE THAT LANDS:
- "The company with the most money in the industry is the one refusing to buy the fancy new machine. That's what a yield lead buys you: the luxury of being cheap."
-->

---

# Pricing power

<div class="grid grid-cols-4 gap-4 mt-10 text-center">
<div><div class="text-4xl font-bold">~$18k</div><div class="text-sm opacity-70 mt-1">N5/N4 wafer</div></div>
<div><div class="text-4xl font-bold">~$20k</div><div class="text-sm opacity-70 mt-1">N3 wafer</div></div>
<div><div class="text-4xl font-bold">~$30k</div><div class="text-sm opacity-70 mt-1">N2 wafer</div></div>
<div><div class="text-4xl font-bold">~$45k</div><div class="text-sm opacity-70 mt-1">A16 wafer</div></div>
</div>

<div class="text-sm opacity-50 mt-3 text-center">reported figures — TSMC never publishes wafer prices</div>

<div class="grid grid-cols-2 gap-8 mt-10 text-center">
<div><div class="text-5xl font-bold">59.9% → 66.2%</div><div class="opacity-70 mt-2">gross margin, FY25 → Q1 2026</div></div>
<div><div class="text-5xl font-bold">50.5¢</div><div class="opacity-70 mt-2">of every revenue dollar kept as net profit</div></div>
</div>

<!--
BEATS:
- What does a monopoly charge? Walk the reported wafer-price ladder — and say "reportedly," because TSMC never discloses prices; these are supply-chain figures.
- The handle: a single 30cm A16 wafer reportedly sells for ~$45,000 — the price of a car for a dinner-plate-sized disc. And customers queue for it.
- The hikes: reported ~5–10% increases across ALL advanced nodes in 2026 — the nodes that are 74% of wafer revenue — plus reported plans to raise 2nm pricing four years running. Framed as paying for overseas fabs, tariffs, currency.
- Then the proof that beats every rumor — the P&L: gross margin 59.9% in 2025 → 66.2% in Q1 2026, net margin 50.5%, WHILE spending $40B+/yr on fabs. If customers had anywhere else to go, those numbers could not both be true. The margins are the confession.
FACT AMMO:
- Reported wafer prices: N2 ~$30k, A16 ~$45k [research/tsmc §pricing]. [VERIFY: never officially disclosed — widely-reported supply-chain figures; always say "reportedly."] N3 ~$20k and N4/N5 ~$18k-class also from §pricing. [VERIFY: the pack's source attribution for the N3/N5 figures is weaker than for N2/A16 (the cited article headline covers only N2/A16) — double-check the $18k/$20k numbers specifically before recording.]
- ~5–10% hikes across all advanced nodes (74% of wafer revenue); 2nm increases planned four consecutive years [research/tsmc §pricing].
- GM 59.9% FY25 → 66.2% Q1 2026; net margin 50.5% (net income NT$572.5B, +58% YoY); Q1 revenue $35.90B, +40.6% YoY [research/tsmc §financials].
- Handle: 50.5 cents kept of every dollar — software-company margins earned in the most capital-intensive factories ever built [research/tsmc §fact-ammo].
- Simplification hedge: part of the margin jump is mix and currency, not pure price — direction of the lie is small, the trend is real.
LINE THAT LANDS:
- "You don't need TSMC's price list. The price list is written in the gross margin."
-->

---

# Chokepoint #2: earned

![chokepoint board — 2 stamps](/diagrams/rendered/board-2.svg)

<div class="text-xl mt-6 text-center">
<b>TSMC — leading-edge logic.</b> ~90% of the world's most advanced chips, one company.
</div>

<!--
BEATS:
- Assemble the proof in one breath: only three companies on Earth still attempt leading-edge logic — TSMC, Samsung, Intel. Samsung's 3nm yields cost it flagship customers; Intel's capacity is mostly for Intel. What remains is ~90% of advanced merchant silicon in one company's fabs — and margins only a company with no real alternative could charge.
- Stamp it. Board goes to 2 of 7. Chokepoint #2: no substitute inside five years — the scoreboard will say ten.
- Voice the honesty hedge on the 90%: it's contested on definitions — count Intel's and Samsung's internal capacity and "advanced" gets murkier. For chips SOLD on the open market at ≤7nm-class, ~90% is fair.
FACT AMMO:
- Only three attempt leading edge; Samsung 3nm GAA yield issues cost flagship customers [VERIFY: Samsung 3nm yield reporting is all unofficial.]; Intel capacity mostly internal [research/tsmc §moat].
- ~90% of ≤7nm-class merchant output; higher still at ≤5nm/3nm — Apple, Nvidia, AMD, Qualcomm, MediaTek, Broadcom all fab flagships at TSMC [research/tsmc §moat]. [VERIFY: precise ≤5nm % — analysts put TSMC at ~90–95% of advanced-node production; no single audited number exists.]
- Hedge source: the definitional dissent is real and useful — cite it if challenged [research/tsmc §what-they-are, source 35].
LINE THAT LANDS (optional — mild tease of stamp #7):
- "Remember this name on the board. It's the only company in this episode that will appear on it twice."
-->

---

# Scoreboard

<div class="border-2 border-gray-400 rounded-lg p-4 mt-6">
  <div class="grid grid-cols-5 gap-4 text-center">
    <div><div class="text-3xl font-bold">$122 B</div><div class="text-sm opacity-60">revenue FY25 (+36%)</div></div>
    <div><div class="text-3xl font-bold">59.9%</div><div class="text-sm opacity-60">gross margin FY25 (66.2% Q1'26)</div></div>
    <div><div class="text-3xl font-bold">72.3%</div><div class="text-sm opacity-60">global foundry share (Q1'26)</div></div>
    <div><div class="text-xl font-bold leading-tight mt-2">everyone's trust + 30 years of yield learning</div></div>
    <div><div class="text-3xl font-bold">~10+ yrs</div><div class="text-sm opacity-60">to replace</div></div>
  </div>
  <div class="text-xs opacity-40 text-right mt-2">as of Q2 2026</div>
</div>

<div class="text-sm opacity-60 mt-8 text-center">
72.3% of the global foundry market — <b>11× the size of #2</b> (Samsung, 6.5%).
</div>

<!--
BEATS:
- Run the standard block — same layout as every major player, so the comparison lands as rhythm.
- Dwell on years-to-replace: a state with unlimited money would need Intel-scale fabs, ASML allocation, the whole PDK/IP ecosystem, AND ~30 years of accumulated yield learning that exists nowhere else. Call it a decade-plus, and that's generous to the state.
- The share handle: 72.3% of all foundry revenue — eleven times Samsung. In most industries the #2 player is a competitor; here it's a rounding concern.
FACT AMMO:
- Revenue US$122.0B FY25, +35.9% YoY; GM 59.9% FY25, 66.2% Q1 2026 [research/tsmc §financials].
- Foundry share 72.3% of top-10 revenue Q1 2026 (record industry quarter, $47.95B), up from 70.4% Q4'25; Samsung 6.5%, SMIC 5.1%; ~11× #2 [research/tsmc §moat, §what-they-are].
- Years-to-replace: "realistically a decade+" — fabs + ASML allocation + ecosystem + 30 years of yield learning [research/tsmc §moat].
- Growth context: long-term guidance raised Jan 2026 — AI-accelerator revenue CAGR "mid-to-high-fifties %" 2024–29; overall CAGR approaching 25% [research/tsmc §financials].
LINE THAT LANDS:
- "Ten years, unlimited money, and a great-power state — and you still probably don't replicate this company. That's what the stamp means."
-->

---

# Going global — sort of

<div class="grid grid-cols-3 gap-6 mt-8 text-center">
<div>
<div class="text-3xl font-bold">Arizona</div>
<div class="text-sm opacity-70 mt-2"><b>$165B</b> · six fabs planned<br>Fab 1 running N4 — <b>Taiwan-grade yields</b><br>profitable: $514M in Q1'26 alone</div>
</div>
<div>
<div class="text-3xl font-bold">Kumamoto</div>
<div class="text-sm opacity-70 mt-2">specialty nodes (12–28nm)<br>with Sony, Denso, Toyota<br>Fab 2 ~end-2027</div>
</div>
<div>
<div class="text-3xl font-bold">Dresden</div>
<div class="text-sm opacity-70 mt-2">€10B+ · automotive/industrial<br>with Bosch, Infineon, NXP<br>production ~late 2027</div>
</div>
</div>

<div class="text-lg mt-10 text-center">
And the leading edge? <b>N2 exists only in Taiwan.</b> Up to <b>10 new fabs</b> under construction there in 2026 alone.
</div>

<!--
BEATS:
- The world demanded TSMC de-risk from Taiwan; here's what that actually looks like. Arizona is real and enormous — $165B committed, the largest foreign direct investment in US history by TSMC's claim; Fab 1 is in volume production on N4 with yields comparable to Taiwan fabs, and the subsidiary just turned profitable.
- Japan and Germany are real too — but read the fine print: specialty and automotive nodes, not the leading edge.
- Then the reveal that reframes the whole slide: N2 high-volume manufacturing exists ONLY in Hsinchu and Kaohsiung. A14 is Taiwan-first. Arizona gets each node YEARS after Taiwan ramps — and while the world watches Phoenix, Taiwan is starting up to ten new fabs in 2026 alone.
- The honest frame: this isn't de-risking, it's satellite capacity. The crown jewels — and the R&D and the engineers and the flywheel — stay home.
FACT AMMO:
- Arizona: US$165B — six fabs + two advanced-packaging plants + R&D center; Fab 1 HVM since Q4 2024 on N4, yields comparable to Taiwan; Fab 2 HVM pulled forward to H2 2027 (N3); Fab 3 = N2/A16 end-of-decade; >2,000-acre "GIGAFAB cluster" [research/tsmc §footprint].
- Arizona subsidiary: US$514M profit in Q1 2026 — more than all of 2025 [research/tsmc §footprint].
- Eventually ~30% of ≤2nm capacity planned for Arizona (C.C. Wei) [research/tsmc §footprint]. [VERIFY: March 2025 statement; re-check exact wording.]
- Kumamoto (JASM, + Sony/Denso/Toyota): Fab 1 in volume since late 2024, 12/16/22/28nm; Fab 2 started Oct 2025 (~$13.9B), possible re-scope to 6nm/4nm, production ~end-2027 at earliest [research/tsmc §footprint].
- Dresden (ESMC: TSMC 70% + Bosch/Infineon/NXP 10% each): €10B+, 12–28nm auto/industrial, ~40k wpm target, equipment move-in H2 2026, production ~late 2027 [research/tsmc §footprint].
- Taiwan: N2 HVM only in Hsinchu + Kaohsiung; A14 Taiwan-first; up to 10 fabs under construction/starting in Taiwan in 2026 [research/tsmc §footprint].
- Margin cost of going global: overseas fabs dilute gross margin 2–3pp/yr in 2026 [research/tsmc §risks]. [VERIFY: later-years 3–4pp figure is from earlier calls; 2026's 2–3pp is confirmed.]
LINE THAT LANDS:
- "Arizona is a $165 billion insurance policy. But you don't put the crown jewels in the safety-deposit box — you keep them where you live."
-->

---

# One island

<div class="text-3xl mt-14 leading-relaxed text-center">
~90% of the world's most advanced chips<br>
are made on one island<br>
<b>130 km off the coast of China.</b>
</div>

<div class="text-sm opacity-60 mt-12 text-center">
Hold that thought. We return to it at the end — when the whole board is lit.
</div>

<!--
BEATS:
- Plant the flag — ONE beat, then move. Everything this segment proved now has an address, and the address is the story: one island, 130 km off the Chinese coast.
- One line on the physical risk being handled: after Taiwan's strongest earthquake in 25 years (M7.4, April 2024), 70% of TSMC's tools were back online within TEN HOURS; the quarter's damage was a ~0.1%-of-revenue rounding error. You can engineer for earthquakes.
- The one thing you can't engineer for — say it in one sentence, both edges: they call it the "silicon shield" — the island is too valuable to attack; and the same indispensability is exactly why Washington AND Beijing both want this capability moved. Then STOP.
- Do NOT detonate: no wargame, no scenarios, no invasion talk. Explicitly promise the return: "we come back to this at the end, when you can see the whole board."
FACT AMMO:
- ~90% of ≤7nm-class chips from one island 130km off the Chinese coast [research/tsmc §footprint]. [VERIFY: 90% definitional hedge as before.]
- 3 Apr 2024 M7.4 Hualien quake: >70% of tools recovered within 10 hours, full operation ~3 days, loss NT$3B (~US$92M); Jan 2025 M6.4 cost NT$5.3B net of insurance; base isolation + automatic tool shutdown [research/tsmc §footprint].
- Silicon-shield logic and its dark twin, one line each [research/tsmc §footprint].
LINE THAT LANDS:
- "TSMC engineered its fabs to survive the strongest earthquake in 25 years with ten hours of downtime. There is one risk on this island that no damper can absorb — and it's the last thing this course will show you."
-->

---

# TSMC turned yield into a monopoly

<div class="text-xl mt-10 leading-relaxed">

- A file becomes silicon in **one place**, run by a company that **competes with no one**
- Its moat is a **flywheel**: volume → yield → customers → capex → volume, compounding since 1987
- It prices like a monopoly because it **is** one — stamp #2 of 7

</div>

<div class="text-lg opacity-70 mt-12">
But wait — TSMC only took the technology lead in ~2020.<br>
<b>Who wore the crown for the fifty years before that?</b>
</div>

<!--
BEATS:
- 20–30 second recap, then the handoff. Recap in three moves: the pure-play trust model, the yield flywheel, the stamp.
- Then open the door to Intel: TSMC wasn't always king. For most of this industry's history there was one undisputed emperor — the company that DEFINED "real men have fabs," that Chang's Taiwan startup wasn't even allowed to dream of challenging. TSMC only took the outright lead around 2018–2020, when that emperor stumbled at 10nm.
- Cliffhanger question the next segment answers: how does the greatest manufacturing company of the 20th century lose a lead it held for fifty years?
FACT AMMO:
- TSMC took the outright technology lead at 7nm/5nm when Intel stalled at 10nm/7nm ~2018–2020, and has held it since; Chang retired 2018 [research/tsmc §history].
- "Real men have fabs" — Jerry Sanders — the IDM creed TSMC's model overthrew [research/tsmc §history].
LINE THAT LANDS:
- "Every king in this story dethroned somebody. Next: the king TSMC dethroned — and what losing the crown does to a company that was the crown."
-->
