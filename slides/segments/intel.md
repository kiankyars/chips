---
layout: section
---

<!-- SEGMENT
id: intel
act: III — The Island
tier: T            # tragedy — deliberate register shift, the emotional midpoint of the episode
angle: "Intel didn't lose to a rival — it lost to yield; and the rescue that followed (the state, its own tormentors, one Arizona fab) is the receipt for what a leading edge is actually worth to a superpower."   # YOU OWN THIS LINE — rewrite it in your voice
runtime: ~6 min
status: draft
seeds: [euv-pass, state-equity]    # euv-pass → asml (next act: the machine Intel said no to) · state-equity → geopolitics (CHIPS Act → equity era)
pays_off: [yield]                  # planted in foundations, felt in life-of-a-wafer/kla — here it kills a king
stamps: []                         # no chokepoint stamp — that absence is part of the story
diagrams: [map-manufacture]
sources: research/intel.md
-->


# INTEL

<div class="text-xl opacity-70 mt-2">The Fallen King</div>

<img src="/diagrams/rendered/map-manufacture.svg" class="h-44 mx-auto mt-8 opacity-80" alt="master map — manufacturing region lit" />

<!--
BEATS:
- REGISTER SHIFT. Everything until now has been monopolies at their peak — TSMC's cathedral is still on screen behind you. This segment is the other thing: what it looks like when a monopoly dies. Slow down. Play it straight. No gloating — the room should feel the weight.
- Locate it on the map: same manufacturing region TSMC just lit. Same act, same business. Different fate.
- Frame the shape before you start: this is not a company profile. It's a tragedy in three movements — a fifty-year reign, a fall you can explain mechanically, and a rescue that tells you what this industry is worth to a nation.
- Set the angle (above) in your own words.
FACT AMMO:
- The only American-owned company still developing AND manufacturing leading-edge logic on US soil [research/intel §what].
- FY2025 revenue $52.9B — weakest full year since 2010 [research/intel §what].
LINE THAT LANDS:
- "Every company in this episode so far is a story about winning. This one is about what losing costs — and who ends up paying."
-->

---

# Fifty years of the crown

<div class="grid grid-cols-5 gap-4 mt-10 text-center">
<div><div class="text-4xl font-bold">1968</div><div class="text-sm opacity-60 mt-2">Noyce & Moore found it; Grove is hire #1</div></div>
<div><div class="text-4xl font-bold">1985</div><div class="text-sm opacity-60 mt-2">invents DRAM, then walks out of memory</div></div>
<div><div class="text-4xl font-bold">1981</div><div class="text-sm opacity-60 mt-2">wins the IBM PC → three decades of Wintel</div></div>
<div><div class="text-4xl font-bold">2007–16</div><div class="text-sm opacity-60 mt-2">tick-tock: the industry's metronome</div></div>
<div><div class="text-4xl font-bold">~99%</div><div class="text-sm opacity-60 mt-2">of data-center CPUs at peak</div></div>
</div>

<div class="text-sm opacity-60 mt-12 text-center">
Market cap topped $500B in August 2000 — a ceiling that stood for 26 years.
</div>

<!--
BEATS:
- This company IS the industry's origin story: founded 1968 by Robert Noyce and Gordon Moore — the Moore of Moore's Law — Andy Grove the first hire.
- First legend: Intel invented the commercial DRAM business (the 1103, 1970 — best-selling memory chip in the world by ~1972)… and then walked away from it. 1985: Japanese DRAM makers crush margins. Grove asks Moore: if the board fired us and brought in a new CEO, what would he do? Moore: "He would get us out of memories." So they walked out the door, walked back in, and did it themselves. Hold this story — it rhymes at the end of the segment.
- The bet on microprocessors pays off historically: the 8088 wins the IBM PC in 1981, x86 + Windows becomes the Wintel duopoly for three decades, "Intel Inside" (1991) turns a component into a household brand.
- Tick-tock, 2007–2016: new process one year, new architecture the next. The whole industry set its clocks by Intel's two-year metronome.
- The empire at noon (~2011–2015): first to FinFET (22nm, 2011–12), years ahead of TSMC and Samsung; 14nm (2014) still clearly the world's best process; ~99% of data-center CPUs, >80% of PCs.
FACT AMMO:
- 1103 (1970): first commercially available DRAM; world's best-selling memory by ~1972 [research/intel §dominance].
- Memory exit 1985; the Grove–Moore revolving-door exchange [research/intel §dominance]. (VERIFY: exact quote wording against "Only the Paranoid Survive" before recording.)
- Wintel: 8088 → IBM PC 1981; "Intel Inside" 1991 [research/intel §dominance].
- Tick-tock 2007–2016, retired 2016 "when the clock broke" [research/intel §dominance].
- ~99% data-center CPU share at peak, >80% of PCs — handle: effectively every server on Earth booted on Intel [research/intel §dominance]. (VERIFY: ~99% is the commonly cited Mercury-derived figure for ~2015–16; pin a citable primary before recording.)
- Market cap >$500B Aug 2000; the ceiling stood 26 years — it outlived five CEOs [research/intel §dominance, §financials].
LINE THAT LANDS:
- "Intel didn't lead this industry. Intel was the clock this industry ran on."
-->

---

# 10nm — how a king actually falls

<div class="grid grid-cols-3 gap-8 mt-10 text-center">
<div><div class="text-6xl font-bold">2.7×</div><div class="opacity-70 mt-2">density leap attempted<br><span class="text-sm opacity-60">industry norm per node: 1.5–2×</span></div></div>
<div><div class="text-6xl font-bold">0</div><div class="opacity-70 mt-2">EUV machines in the plan<br><span class="text-sm opacity-60">quadruple patterning instead</span></div></div>
<div><div class="text-6xl font-bold">7 yrs</div><div class="opacity-70 mt-2">desktop stuck on 14nm<br><span class="text-sm opacity-60">2016 target → shipped late 2019</span></div></div>
</div>

<div class="text-sm opacity-60 mt-12 text-center">
Meanwhile: TSMC ships N7 (2018) → N7+ with EUV (2019) → N5 (2020).<br>
July 24, 2020 — Intel admits 7nm is late too. Stock −16% in a day. The crown had already moved.
</div>

<!--
BEATS:
- This is where the yield seed pays off. Remember: one particle, one dead die. Now watch defect density kill a king.
- Tell the fall mechanically, not morally. Intel bet 10nm on a ~2.7× density jump — the industry norm is 1.5–2× — and chose to do it WITHOUT the new EUV machines: quadruple patterning with older light (many extra process passes per critical layer where EUV needs one) plus first-use cobalt wiring. Each choice multiplies defect density. Together they broke the node.
- Walk the slip: due ~2016 under tick-tock → 2017 → April 2018, out loud: "10nm is broken, delayed until 2019." Real volume only late 2019. Desktops wore 14nm-plus-plus-plus for ~7 years.
- While Intel stalled, TSMC shipped N7, then N7+ with EUV, then N5. The process crown changed heads around 2018–2020 — the first time since the 1980s.
- The bottom of this movement: July 24, 2020 — Intel admits 7nm is ~12 months late too; stock drops 16% in a day; the CEO floats outsourcing to "third-party foundries." The unthinkable, said aloud.
- Plant the seed forward: the machine Intel decided it could out-engineer — the EUV scanner — is the star of the next act. Remember that Intel said no to it.
FACT AMMO:
- ~2.7× density target vs 1.5–2× norm — handle: trying to clear two hurdles in one stride [research/intel §fall-10nm].
- 36nm metal pitch via SAQP (self-aligned quadruple patterning) + first-use cobalt interconnects; each multiplied defect density [research/intel §fall-10nm].
- April 2018: "10nm is broken, delayed until 2019"; real volume with Ice Lake late 2019 [research/intel §fall-10nm].
- ~7 years of desktop 14nm — handle: a desktop bought in 2014 and one bought in 2021 were printed on the same process [research/intel §fall-10nm].
- TSMC N7 2018 · N7+ (EUV) 2019 · N5 2020; crown changed 2018–2020, first time since the 1980s [research/intel §fall-10nm].
- July 24, 2020: 7nm ~12 months behind; −16%, worst day since March 2020; Swan floats third-party foundries [research/intel §fall-10nm].
- Simplification hedge (voice it): "quadruple patterning" here is the loose teach — SAQP is spacer trickery, not literally four exposures; the honest version is "many more process steps per critical layer, each a fresh chance for a killer defect."
- Simplification hedge #2 (bigger one, voice here or next slide): "Intel lost the crown because of 10nm" is the compressed story — the honest version is 10nm plus a decade of missed platform shifts stacked on top [research/intel §risks]. That's the next slide.
LINE THAT LANDS:
- "In this industry, kings don't die of treason. They die of defect density."
-->

---

# The doors it didn't walk through

<div class="text-xl leading-relaxed mt-8 px-8 opacity-90">
"We ended up not winning it, or passing on it, depending on how you want to view it. And the world would have been a lot different if we'd done it."
<div class="text-sm opacity-60 mt-3">— Paul Otellini, Intel CEO 2005–2013, on the chip for the first iPhone. The volume was 100× the forecast.</div>
</div>

<div class="grid grid-cols-3 gap-6 mt-10 text-center">
<div><div class="text-3xl font-bold">2020</div><div class="text-sm opacity-60 mt-1">Apple leaves x86 — M1</div></div>
<div><div class="text-3xl font-bold">&gt;50%</div><div class="text-sm opacity-60 mt-1">of new AWS CPU capacity is Arm — 3 years running</div></div>
<div><div class="text-3xl font-bold">$5.8B vs $5.1B</div><div class="text-sm opacity-60 mt-1">AMD out-earns Intel in the data center, Q1 2026 — first time ever</div></div>
</div>

<!--
BEATS:
- Second movement of the fall: while the fab stumbled, the market moved three times — mobile, cloud, AI — and Intel missed every door. Tone check: each pass was a defensible decision on the numbers they had at the time. That's what makes it tragedy, not farce.
- Mobile: Otellini turned down the chip for the original iPhone — Apple's price was below Intel's forecast cost. The forecast was wrong, and the volume was 100× what anyone thought. Read the quote off the slide, or let it sit.
- Twist of the knife, briefly: Intel had even sold its own Arm chip line (XScale) the year before the iPhone shipped.
- AI: reportedly passed on buying Nvidia for ~$20B (~2005, board balked). Today Nvidia's data-center business alone makes $75.2B in a single quarter — Intel's entire company makes $13.6B.
- The siege on x86 itself: Apple announces M1 in Nov 2020 and is fully off Intel by 2023 — a phone-derived Arm chip beating x86 laptops on performance AND battery. AWS's own Graviton has been more than half of ALL new CPU capacity Amazon deploys, three years straight. And AMD — ~0% of servers in 2017 — hits 46% of x86 server revenue and, in Q1 2026, out-earns Intel's data-center business for the first time in history.
- Land the arc in one breath: from ~99% of data-center CPUs to out-earned in the data center, in about a decade.
FACT AMMO:
- Otellini, The Atlantic, May 2013; price below forecast cost; "the volume was 100× what anyone thought" [research/intel §fall-mobile]. (VERIFY: the companion line "my gut told me to say yes" is in the Atlantic piece — confirm exact wording before quoting on screen.)
- XScale (Intel's Arm line) sold to Marvell 2006, ~$600M — the year before the iPhone shipped [research/intel §fall-mobile]. (VERIFY: price from memory, per pack.)
- Nvidia pass: ~$20B, ~2005, board balked [research/intel §fall-ai]. (VERIFY: from memory per pack — NYT reported it; confirm before recording. Same for the ~$1B OpenAI stake pass, 2017–18, if you want it.)
- Nvidia data center: $75.2B in one quarter (+92% YoY, early 2026) vs $13.6B for all of Intel — handle: Nvidia's data-center arm earns Intel's entire quarter roughly every two weeks [research/intel §fall-ai, §financials].
- Apple: M1 Nov 2020; last Intel Mac replaced by June 2023 [research/intel §fall-x86].
- AWS Graviton >50% of new CPU capacity three straight years; 98% of top-1,000 EC2 customers use it [research/intel §fall-x86].
- AMD: ~0% server share 2017 → 27.4% unit / 46.2% revenue share of x86 servers, Q1 2026; DC revenue $5.8B vs Intel DCAI $5.1B — first-ever overtake [research/intel §fall-x86].
- Intel overall server share ~67% incl. Arm; consumer PC holds ~70% [research/intel §fall-x86]. (VERIFY: exact period of the 67% figure.)
LINE THAT LANDS:
- "From ninety-nine percent to out-earned — and nobody at Intel made a decision that looked stupid on the day they made it."
-->

---

# 2024 — the year it all landed

<div class="grid grid-cols-3 gap-x-8 gap-y-10 mt-10 text-center">
<div><div class="text-5xl font-bold">−$18.8B</div><div class="text-sm opacity-60 mt-2">2024 net loss — first annual loss since <b>1986</b></div></div>
<div><div class="text-5xl font-bold">−26%</div><div class="text-sm opacity-60 mt-2">in one day (Aug 2024) — worst since 1974; dividend paid since 1992, suspended</div></div>
<div><div class="text-5xl font-bold">15,000</div><div class="text-sm opacity-60 mt-2">layoffs announced that same day</div></div>
<div><div class="text-5xl font-bold">4</div><div class="text-sm opacity-60 mt-2">CEOs since 2018</div></div>
<div><div class="text-5xl font-bold">108,900 → ~75,000</div><div class="text-sm opacity-60 mt-2">employees, end-2024 → end-2025 plan</div></div>
<div><div class="text-5xl font-bold">1986</div><div class="text-sm opacity-60 mt-2">the rhyme: the year after Grove walked out of memory</div></div>
</div>

<!--
BEATS:
- Rock bottom. Read the numbers flat — they don't need help.
- 2024: first annual loss in 38 years — $18.8 billion.
- August 1, 2024, one day: disaster quarter, ~15,000 layoffs, the dividend — paid since 1992 — suspended, stock down 26%, its worst day since 1974.
- December 2024: Gelsinger "retires," gone the same day. March 2025: Lip-Bu Tan — ex-Cadence CEO (the EDA duopoly from Act II), an Intel board member who had quit the board in frustration months earlier. Fourth CEO since 2018.
- Under Tan, the shrink continues: toward ~75,000 core employees from 108,900 at end-2024 — roughly one badge in three from the 2024 peak, gone. Germany and Poland projects killed; the Ohio mega-site slowed to ~2030.
- Now cash the rhyme you planted on the reign slide: Intel's last annual loss was 1986 — the year after Grove walked Intel out of the memory business to save it. The 2024 loss landed while Intel was debating, in an SEC filing, walking out of leading-edge logic. Same door. This time as the exit of last resort. Leave a beat of silence here.
FACT AMMO:
- Net loss $18.8B in 2024 (impairments + restructuring) — first since 1986 [research/intel §financials]; 2025 loss trimmed to $267M [research/intel §financials].
- Aug 1, 2024: ~15,000 layoffs; dividend (paid since 1992) suspended; −26% in a day, worst since 1974 [research/intel §rescue-idm2].
- Dec 1–2, 2024: Gelsinger out same day [research/intel §rescue-idm2]. (VERIFY: "retire-or-be-removed board ultimatum" is Reuters/Bloomberg reporting, not Intel's language — attribute if used.)
- March 2025: Lip-Bu Tan, ex-Cadence CEO, ex-board member who quit Aug 2024 [research/intel §rescue-idm2].
- Headcount: 108,900 end-2024 → ~75,000 "core" plan for end-2025 (~35k from the 2024 peak — roughly one in three); $1.9B Q2'25 restructuring charge; Germany + Poland killed, Ohio first fab ~2030–31 [research/intel §rescue-idm2]. (VERIFY: actual end-2025 core headcount vs the ~75k plan — check FY2025 10-K.)
- Revenue slide for context: $79.0B (2021) → $52.9B (2025), weakest since 2010 [research/intel §financials].
- CEO churn: Krzanich → Swan → Gelsinger → Tan since 2018 [research/intel §risks].
LINE THAT LANDS:
- "The last time Intel lost money, Andy Grove had just walked it out of one business to save the company. Thirty-eight years later, the loss came with a filing that contemplated walking out of the other one."
-->

---

# The last stand — 18A

<div class="grid grid-cols-2 gap-10 mt-8">

<div class="flex flex-col gap-3 text-lg">
<div><b>Fab 52</b> — Chandler, Arizona</div>
<div><b>RibbonFET</b> — Intel's first gate-all-around transistor</div>
<div><b>PowerVia</b> — backside power, industry first — <i>before TSMC</i></div>
<div><b>Panther Lake</b> — laptops on shelves Jan 2026</div>
<div><b>Clearwater Forest</b> — 288-core Xeon, June 2026</div>
</div>

<div class="flex flex-col gap-6 text-center justify-center">
<div><div class="text-5xl font-bold">~20–25%</div><div class="text-sm opacity-60 mt-1">good-die yield when the ramp began — target "industry-standard" only in early 2027</div></div>
<div><div class="text-5xl font-bold">$174M</div><div class="text-sm opacity-60 mt-1">external foundry revenue, Q1 2026 — ~3% of foundry revenue</div></div>
<div><div class="text-5xl font-bold">−$33B</div><div class="text-sm opacity-60 mt-1">cumulative foundry losses since 2023</div></div>
</div>

</div>

<!--
BEATS:
- Third movement: the bet. Gelsinger's 2021 plan — "IDM 2.0" — keep the fabs, open them to outside customers, and retake the process lead with "five nodes in four years," ending at 18A. The 20A node was sacrificed in Sept 2024 to pour everything into 18A.
- And 18A is real. It ships. RibbonFET — Intel's first gate-all-around transistor (callback to foundations) — plus PowerVia, backside power delivery, an industry first Intel reached BEFORE TSMC. Fab 52 in Chandler, Arizona. Panther Lake laptops on shelves January 2026; Clearwater Forest, a 288-core server chip, June 2026. Intel calls it the most advanced process ever developed and manufactured in the United States — and that claim is true.
- Then hit the number this course trained the viewer to look for: yield. Good die were ~20–25% when the Panther Lake ramp began. Target: >50% by mid-2026, "industry-standard" only in early 2027. Until then Intel is capping output and leaving part of Fab 52 idle.
- Early July 2026 — days ago, in course time: a report that PROFITABLE yields slip to late 2026/2027 knocked the stock down 21% in one week. The market now prices this company die by die, wafer by wafer.
- The other sore spot: customers. Microsoft, AWS, the Department of Defense have committed chips to 18A — but external foundry revenue was $174M last quarter. About 3%. Intel Foundry's biggest customer, by a mile, is Intel. Cumulative foundry losses since 2023: ~$33 billion.
FACT AMMO:
- IDM 2.0, March 2021; $20B for two Arizona fabs; "five nodes in four years" (Intel 7→4→3→20A→18A); 20A cancelled Sept 2024 [research/intel §rescue-idm2].
- RibbonFET + PowerVia; ~15% perf/watt, ~30% density vs Intel 3; "most advanced semiconductor process ever developed and manufactured in the United States" [research/intel §18a].
- Fab 52 fully operational fall 2025; HVM late 2025/early 2026 [research/intel §18a].
- Panther Lake = Core Ultra Series 3: CES Jan 5, 2026; shelves Jan 27, 2026 [research/intel §18a]. Clearwater Forest = Xeon 6+: June 2026, 288 E-cores, 12 compute tiles, 576MB L3; Intel claims +30% perf/thread vs AMD's 192-core EPYC 9965 [research/intel §18a].
- Yield: ~20–25% good die at ramp start — handle: three of every four dies went in the bin; >50% target mid-2026; industry-standard early 2027; output capped, Fab 52 partly idle [research/intel §18a].
- July 2026: −21% in a week (~$140 → ~$110) on the profitable-yield slip + AMD's overtake + a BofA "AI bubble" note [research/intel §18a, §financials].
- Simplification hedge (voice it): 18A yield figures vary wildly by source and by what's measured — defect density vs good-die on a specific product. One 2026 analysis pegs 18A defect-limited yields at ~60–75% vs TSMC N2 >90%. (VERIFY: per pack — figures vary wildly; hedge on air.)
- External: Microsoft (Feb 2024), Amazon/AWS AI fabric chip (Sept 2024), US DoD RAMP-C/Secure Enclave; mature-node deals MediaTek/Tower/UMC; external foundry revenue $174M in Q1 2026, ~3% [research/intel §18a]. (VERIFY: do NOT state the Apple 18A-P PDK evaluation reports as fact — rumor-tier per pack.)
- Foundry losses: −$7.0B ('23) → −$13.4B ('24) → −$10.3B ('25) → −$2.4B (Q1'26) ≈ ~$33B cumulative; break-even target ~2027 — handle: the entire rescue capital raised in 2025, burned twice over [research/intel §financials].
LINE THAT LANDS:
- "The comeback is real. It ships. And it all still comes down to the number this course keeps forcing on you: what fraction of the dies on the wafer actually work."
-->

---

# Too strategic to fail

<div class="text-lg leading-relaxed mt-6 px-6 opacity-90 border-l-4 border-gray-400 pl-6">
Intel may "pause or discontinue our pursuit of Intel 14A and successor leading-edge nodes"
<div class="text-sm opacity-60 mt-2">— Intel 10-Q, July 2025: quitting the leading edge, contemplated in an SEC filing for the first time</div>
</div>

<div class="grid grid-cols-3 gap-6 mt-10 text-center">
<div><div class="text-4xl font-bold">$8.9B</div><div class="text-sm opacity-60 mt-2"><b>US government</b> — 9.9% at $20.47 + a warrant chaining the fabs to Intel</div></div>
<div><div class="text-4xl font-bold">$2B</div><div class="text-sm opacity-60 mt-2"><b>SoftBank</b> — at $23</div></div>
<div><div class="text-4xl font-bold">$5B</div><div class="text-sm opacity-60 mt-2"><b>Nvidia</b> — at $23.28, plus joint x86 products</div></div>
</div>

<div class="text-sm opacity-60 mt-10 text-center">
~$15.9B of equity in ~6 weeks — from the Treasury, SoftBank, and Intel's chief tormentor.<br>
None of it bought a single foundry order.
</div>

<!--
BEATS:
- July 2025: Intel writes the unthinkable into a securities filing — if 14A (its first High-NA EUV node, the $400M machines from the next act) doesn't land a significant external customer, Intel may quit leading-edge manufacturing entirely. Read the filing language off the slide.
- Sit on what that would mean: the entire global leading edge becomes TSMC (Taiwan) plus Samsung (Korea) — 100% of frontier logic development inside China's missile envelope. THAT is what this segment has been about.
- Six weeks later, the answer arrives — not as a subsidy, as a purchase. Aug 22, 2025: the US government converts CHIPS grants into stock. $8.9B, 433.3 million shares at $20.47, a 9.9% stake — the government becomes Intel's largest shareholder. Passive, no board seat. Plus a five-year warrant for 5% more that triggers only if Intel lets go of its foundry — a poison pill against ever spinning off the fabs.
- Then the pile-on: SoftBank, $2B. And Nvidia — the company whose rise is the mirror of Intel's fall — $5B, plus joint products (Intel builds Nvidia-custom x86 CPUs; x86 SoCs with RTX chiplets). ~$15.9B of equity in six weeks, from the state, a conglomerate, and its chief tormentor.
- The honest coda: none of that money bought foundry ORDERS. Capital solves cash; only a customer solves 14A. Tan says Intel is "going big time into 14A" — but as of July 2026, no anchor customer has a name.
- Plant forward: a government converting industrial policy into an equity position — hold that; the geopolitics act is built on it.
FACT AMMO:
- 10-Q language, July 2025: fail to "secure a significant external customer… for Intel 14A" → "may pause or discontinue our pursuit of Intel 14A and successor leading-edge nodes"; future nodes beyond 18A could be outsourced to TSMC [research/intel §14a].
- 14A = Intel's first High-NA EUV node; risk production ~2027 [research/intel §14a]. (VERIFY: current 14A production-ready date.)
- Aug 22, 2025: 433.3M shares @ $20.47 = $8.9B = 9.9% (funded by $5.7B undisbursed CHIPS + $3.2B Secure Enclave); passive, no board seat; 5-yr warrant for another 5% at $20, exercisable only if Intel ceases to own ≥51% of its foundry [research/intel §nationalization].
- SoftBank: $2B @ $23 (Aug 18, 2025, ~2%) [research/intel §nationalization]. Nvidia: $5B @ $23.28 (Sept 18, 2025, ~4%) + Nvidia-custom x86 DC CPUs + x86 SoCs with RTX GPU chiplets; closed Dec 2025, already up ~$2.5B on paper [research/intel §nationalization]. (VERIFY: Nvidia's exact % post-issuance.)
- ~$15.9B total in ~6 weeks; none of it bought foundry orders [research/intel §nationalization].
- Handle: Nvidia's "seismic" $5B ≈ six days of Nvidia's own data-center revenue [research/intel §lines].
- Stakes: the only American-owned, America-based leading-edge manufacturer; DoD already treats Intel as critical infrastructure (Secure Enclave $3.2B, RAMP-C) [research/intel §stakes].
- Jan 9, 2026: Tan — "We are going big time into 14A… to serve the customer well"; read as implying an anchor customer; none named as of 2026-07 [research/intel §14a].
LINE THAT LANDS:
- "The company that taught the world Moore's Law now needs the state, its rivals, and one Arizona fab's yield curve to stay in the game it invented."
-->

---

# Scoreboard — the fallen king

<div class="border-2 border-gray-400 rounded-lg p-4 mt-6">
  <div class="grid grid-cols-5 gap-4 text-center">
    <div><div class="text-3xl font-bold">$52.9B</div><div class="text-sm opacity-60">revenue FY25</div></div>
    <div><div class="text-3xl font-bold">41%</div><div class="text-sm opacity-60">gross margin (non-GAAP, Q1'26)</div></div>
    <div><div class="text-3xl font-bold">~70%</div><div class="text-sm opacity-60">PC CPU share</div></div>
    <div><div class="text-xl font-bold leading-tight mt-2">the only leading edge on American soil</div></div>
    <div><div class="text-3xl font-bold">~10 yrs</div><div class="text-sm opacity-60">to replace</div></div>
  </div>
  <div class="text-xs opacity-40 text-right mt-2">as of Q2 2026</div>
</div>

<div class="text-center text-lg mt-10 opacity-80">
TSMC. Samsung. Intel. That is the entire leading edge of human civilization.
</div>

<!--
BEATS:
- The same stat block every major player gets — hold it against TSMC's from ten minutes ago; the tragedy is legible in the shape of the numbers.
- What you now know, in 20 seconds: yield is not an engineering footnote — it dethroned the company that invented the industry; the crown moved to Taiwan around 2018–2020; and Intel's survival is now a national project — the US government literally owns a tenth of it.
- The whiplash coda if you want it: government in at $20.47; the stock cleared its dot-com ceiling in June 2026 after 26 years — then fell 21% in a week. A ~$550B valuation, priced at ~100× forward earnings, resting on one fab's yield curve.
- CLIFFHANGER (hands into foundries-field): Intel is one of exactly three names still developing leading-edge logic on Earth. Once, there were dozens on that starting grid. Where did everybody go — and why was quitting, for almost all of them, the sane move? That's next.
FACT AMMO:
- Revenue FY25 $52.9B — weakest since 2010 [research/intel §what, §financials].
- Gross margin 41% non-GAAP, Q1'26 — 18A yields helping; Q1'26 revenue $13.6B, 6th straight beat [research/intel §financials].
- ~70% consumer PC CPU share; server ~67% incl. Arm [research/intel §fall-x86]. (VERIFY: exact period of the 67% figure.)
- Years-to-replace ~10 yrs is a PROPOSED judgment call, not a pack number: derived from §stakes — replacing a US-soil leading-edge developer-and-manufacturer is precisely what national policy is attempting with billions and a decade of runway; synthesis segment ranks it against the others. Overwrite freely.
- Market cap ~$550B (July 2026, ~$110) vs Nvidia ~$5.1T, TSMC ~$2.25T, AMD ~$780B [research/intel §what].
- Stock whiplash: gov't in at $20.47 (Aug '25) → ~$37 New Year 2026 → ~$140 June 30 (+~270% YTD, first close above the Aug-2000 ceiling in 26 years) → −21% in the first week of July to ~$110; ~100× forward earnings vs TSMC ~27.5× [research/intel §financials].
- Government stake scoreboard: 433.3M × ~$110 ≈ $47B — a ~5× paper gain for taxpayers in under a year [research/intel §financials, §lines].
- "Three names": if the 14A warning executes, the leading edge is TSMC + Samsung only [research/intel §stakes] — today Intel is the third.
LINE THAT LANDS:
- "Twenty-six years to climb back to its dot-com high. One week to drop 21%. The entire $550 billion is a bet on one fab in Arizona — and the American taxpayer is holding it."
-->
