---
layout: section
---

<!-- SEGMENT
id: eda
act: II — The Blueprint
tier: D            # duel — Synopsys vs Cadence told as one 40-year contest; Siemens EDA is a card
angle: "The $792B chip industry runs on $21B of software from two companies — the cheapest chokepoint on the board, and the first one Washington learned to fire as a weapon."   # PROPOSED — YOU OWN THIS LINE
runtime: ~5 min
status: draft
seeds: [eda-export-lever]     # EDA as an export-control weapon → pays off in geopolitics
pays_off: []
stamps: [eda-duopoly]         # Chokepoint #1: Synopsys + Cadence
diagrams: [map-design, board-1]
sources: research/eda.md
-->


# The software behind chip design

<div class="text-xl opacity-70 mt-2">Engineers design modern chips through EDA software</div>

![industry map — design region lit](/diagrams/rendered/map-design.svg)

<!--
BEATS:
- Callback: our chip just left Nvidia as a FILE. Pose the question — who actually drew 208 billion transistors?
- Answer: nobody. No human has ever drawn a modern chip. Software did.
- Map check: we're still in the design region — lit since Nvidia. Two more companies light up before the file leaves Santa Clara, and you've probably never heard of either.
- Set the angle in your own words: this is the cheapest chokepoint on the whole board.
FACT AMMO:
- Blackwell: 208 billion transistors [research/eda §What EDA is]. Handle: at one transistor per second, hand-placing them takes ~6,600 years — EDA software does it in months [research/eda §What EDA is].
LINE THAT LANDS:
- "Nobody draws chips. Chips are compiled."
-->

---

# EDA converts hardware descriptions into chip layouts

<div class="flex items-stretch gap-2 mt-10 text-center">
  <div class="flex-1 border-2 border-gray-400 rounded-lg p-3 flex flex-col justify-center">
    <div class="font-bold text-lg">RTL</div>
    <div class="text-xs opacity-60 mt-1">describe the behavior in code</div>
  </div>
  <div class="text-2xl opacity-40 self-center">→</div>
  <div class="flex-1 border-2 border-gray-400 rounded-lg p-3 flex flex-col justify-center">
    <div class="font-bold text-lg">SYNTHESIS</div>
    <div class="text-xs opacity-60 mt-1">compile code into logic gates</div>
  </div>
  <div class="text-2xl opacity-40 self-center">→</div>
  <div class="flex-1 border-2 border-gray-400 rounded-lg p-3 flex flex-col justify-center">
    <div class="font-bold text-lg">PLACE & ROUTE</div>
<div class="text-xs opacity-60 mt-1">position gates and route interconnects</div>
  </div>
  <div class="text-2xl opacity-40 self-center">→</div>
  <div class="flex-1 border-2 border-amber-400 rounded-lg p-3 flex flex-col justify-center">
    <div class="font-bold text-lg">VERIFICATION</div>
<div class="text-xs opacity-60 mt-1">simulate and verify before tape-out</div>
    <div class="text-xs font-bold mt-1">~50% of the project</div>
  </div>
  <div class="text-2xl opacity-40 self-center">→</div>
  <div class="flex-1 border-2 border-gray-400 rounded-lg p-3 flex flex-col justify-center">
    <div class="font-bold text-lg">TAPE-OUT</div>
<div class="text-xs opacity-60 mt-1">deliver layout data to the foundry</div>
  </div>
</div>

<div class="text-center mt-10">
  <span class="text-4xl font-bold">~$724M</span>
<span class="opacity-60 ml-3">estimated design cost for one 2 nm-class chip, excluding manufacturing</span>
</div>

<!--
BEATS:
- Walk the five boxes left to right, plain-language: engineers write the recipe (RTL, like code), software compiles it into gates, software decides where every gate sits and wires them under physics constraints, then you simulate the whole thing to death, then you ship one file to the foundry.
- Dwell on the highlighted box: HALF the project isn't designing — it's proving the design works. Why? Because a mask-set mistake costs millions; there is no patch after tape-out.
- Land the cost ladder: this is why design got expensive — and why the software that does it is unskippable.
FACT AMMO:
- Verification ≈ 50%+ of total project time, stable for a decade; even design engineers spend ~40–47% of their own time verifying (Wilson Research / Siemens) [research/eda §What EDA is].
- Design cost by node (IBS): 28nm ~$40M → 7nm ~$217M → 5nm ~$416–449M → 3nm ~$581–590M → 2nm ~$724M [research/eda §What EDA is] [VERIFY: IBS figures vary by vintage/source; use as order-of-magnitude]. Handle: the 2nm design bill alone rivals a Hollywood blockbuster slate — spent before any manufacturing.
- GDSII = literally the blueprint file the foundry prints [research/eda §What EDA is].
- Simplification hedge: the real flow is dozens of loops and hundreds of tools — five boxes is the honest cartoon; the lie's direction is "it's far messier and more iterative than this."
LINE THAT LANDS:
- "Humans write intent. Software produces the 200-billion-transistor artifact."
-->

---

# Synopsys, Cadence, and Siemens EDA

<div class="grid grid-cols-2 gap-8 mt-6">
  <div class="border-2 border-gray-400 rounded-lg p-4">
    <div class="text-2xl font-bold">SYNOPSYS</div>
<div class="text-sm opacity-60 mb-3">founded 1986 · early leader in logic synthesis</div>
    <div class="text-sm leading-relaxed">
        Strengths: logic synthesis, digital design, and semiconductor IP<br>
        Acquired Ansys for <b>$34.9B</b> in 2025
    </div>
  </div>
  <div class="border-2 border-gray-400 rounded-lg p-4">
    <div class="text-2xl font-bold">CADENCE</div>
<div class="text-sm opacity-60 mb-3">founded 1988 · strong in analog and custom design</div>
    <div class="text-sm leading-relaxed">
        Strengths: Virtuoso and hardware emulation<br>
        Palladium emulators run pre-silicon designs at up to <b>48B gates</b>
    </div>
  </div>
</div>

<div class="border border-gray-400 rounded-lg p-3 mt-6 text-sm opacity-80">
    <b>SIEMENS EDA</b> has roughly 13% market share. Its Calibre product is widely used for physical verification and sign-off.
</div>

<!--
BEATS:
- Frame as a duel, not two profiles: two companies, founded two years apart, fighting over every socket for four decades — and the fight settled into a stable split of the spoils.
- Synopsys character: the compiler company — De Geus's Design Compiler made "chips from code" an industry. Now betting $35B (Ansys) that the game expands from silicon to simulating everything AROUND the chip.
- Cadence character: the analog/custom stronghold, plus the hardware flex — emulators that boot your OS on a chip that doesn't exist yet.
- Siemens EDA is the card, not a third profile: one sentence on Calibre — even chips designed on Synopsys or Cadence tools clear Siemens' checker before a fab will print them.
- The kicker beat: both companies' AI now designs chips — and the duel's newest front is agentic AI flows.
FACT AMMO:
- Shares: Synopsys ~31%, Cadence ~30%, Siemens EDA ~13% — three companies ≈ ~74% of the market [research/eda §The triopoly & market shares] [VERIFY: share cuts differ by analyst (EDA-only vs EDA+IP); some sources claim big-3 >90% of advanced-node digital flow seats — verify before using the 90% line].
- Synopsys: founded 1986, Aart de Geus, Design Compiler; CEO today Sassine Ghazi [research/eda §Synopsys] [VERIFY: light-check founding details before recording]. Cadence: formed 1988 (SDA + ECAD merger); CEO Anirudh Devgan [research/eda §Cadence] [VERIFY: light-check founding details].
- Ansys: closed July 17, 2025, ~$34.9B ($17.6B cash + $17.1B stock) [research/eda §Synopsys].
- Arm + Synopsys = 66% of the $8.5B design-IP market (2024, IPnest); Synopsys dominates wired-interface IP [research/eda §Synopsys].
- Palladium Z3: up to 48B gates, >2× prior capacity, runs on NVIDIA BlueField DPUs [research/eda §Cadence]. Handle: NVIDIA hardware helps verify future NVIDIA designs — AI designing the chips AI runs on.
- Mentor Graphics: founded 1981, acquired by Siemens for $4.5B (closed March 2017); Calibre ~85%+ installed base in physical sign-off [research/eda §Siemens EDA] [VERIFY: 85% figure is analyst/SemiAnalysis framing, not audited].
- AI flows: Synopsys DSO.ai — first 100 commercial AI-driven tape-outs by Feb 2023; Cadence Cerebrus — up to 10× engineering productivity; 2026 frontier is agentic (Cadence AgentStack) [research/eda §AI in EDA].
LINE THAT LANDS:
- "Cadence's emulator runs on NVIDIA chips, and NVIDIA's chips are designed on Cadence software. AI is now designing the chips that AI runs on."
-->

---

# A $21B software market supports $792B in chip sales

<div class="text-center mt-2 text-lg">
  EDA revenue was about <b>$21B</b> in 2025, versus <b>$792B</b> in semiconductor sales.
</div>

<div class="border-2 border-gray-400 rounded-lg p-3 mt-4">
  <div class="text-sm font-bold mb-1">SYNOPSYS</div>
  <div class="grid grid-cols-5 gap-4 text-center">
    <div><div class="text-2xl font-bold">$7.1 B</div><div class="text-sm opacity-60">revenue FY25</div></div>
    <div><div class="text-2xl font-bold">~77%</div><div class="text-sm opacity-60">gross margin</div></div>
    <div><div class="text-2xl font-bold">~31%</div><div class="text-sm opacity-60">market share</div></div>
<div><div class="text-lg font-bold leading-tight mt-1">synthesis, digital design, and IP</div></div>
    <div><div class="text-2xl font-bold">~15 yrs</div><div class="text-sm opacity-60">to replace</div></div>
  </div>
  <div class="text-xs opacity-40 text-right mt-1">as of Q2 2026</div>
</div>

<div class="border-2 border-gray-400 rounded-lg p-3 mt-3">
  <div class="text-sm font-bold mb-1">CADENCE</div>
  <div class="grid grid-cols-5 gap-4 text-center">
    <div><div class="text-2xl font-bold">$5.3 B</div><div class="text-sm opacity-60">revenue FY25</div></div>
    <div><div class="text-2xl font-bold">~86%</div><div class="text-sm opacity-60">gross margin</div></div>
    <div><div class="text-2xl font-bold">~30%</div><div class="text-sm opacity-60">market share</div></div>
<div><div class="text-lg font-bold leading-tight mt-1">analog/custom design and emulation</div></div>
    <div><div class="text-2xl font-bold">~15 yrs</div><div class="text-sm opacity-60">to replace</div></div>
  </div>
  <div class="text-xs opacity-40 text-right mt-1">as of Q2 2026</div>
</div>

<!--
BEATS:
- Read the top line first: the entire EDA industry is a rounding error next to the chips it enables — that mismatch IS the tollbooth.
- Scoreboard rhythm: same five boxes as every major player. Note the margins — these are software margins on infrastructure the world cannot skip.
- Why nobody leaves: 30–40 years of tool code and foundry calibration; every engineer's muscle memory is Synopsys/Cadence keystrokes; foundries certify tools per node years in advance — new entrants aren't in the room; and customers pre-commit years of spend.
- Years-to-replace beat: China, with state money and maximum motivation, got to ~10% self-sufficiency — at mature nodes only. That's the empirical case for ~15 years.
FACT AMMO:
- ESD industry revenue ~$21.2B in 2025 (SEMI ESD Alliance) vs $791.7B 2025 chip sales (SIA, +25.6%) — EDA ≈ 2.7% of the industry it gates [research/eda §The triopoly & market shares]. Handle: delete these three companies and the other 97% stops.
- Synopsys FY2025 (ended Oct 31): revenue $7.054B, +15% YoY; GAAP gross margin ~77%; backlog $11.4B [research/eda §Synopsys]. Note fiscal calendars differ: SNPS FY ends Oct 31; Cadence = calendar year [research/eda §header].
- Cadence FY2025: revenue $5.297B, +14% YoY; GAAP gross margin ~84–87% by quarter (86.5% in Q1'25); non-GAAP op margin 44.6%; backlog $8.0B record as of Q1'26 [research/eda §Cadence].
- Backlogs handle: $11.4B + $8.0B of pre-committed spend ≈ customers locking in years of tolls in advance — that's what a moat looks like on a balance sheet [research/eda §The moat].
- Years-to-replace (~15 yrs) is a PROPOSAL from §The moat: 30–40 years of accumulated tool code; PDK certification loop with foundries; China ~0%→10% self-sufficiency in a few years, mature nodes only [research/eda §The moat] — sharpen or overrule.
- Simplification hedge: the moat is strongest at the leading edge; at mature nodes (28nm+) Chinese and niche tools genuinely compete [research/eda §The moat].
LINE THAT LANDS:
- "The entire EDA industry is about $21B — under 3% of the $792B chip industry. Delete these companies and the other 97% stops."
-->

---
layout: center
---

# Limited substitutes: leading-edge EDA

![chokepoint board — first stamp earned](/diagrams/rendered/board-1.svg)

<div class="text-xl mt-6 text-center"><b>Synopsys and Cadence</b> dominate the certified toolchains used for leading-edge chip design.</div>

<!--
BEATS:
- Ceremony beat — slow down. The cold open promised seven single points of failure; this is the first one proven, and it's the one nobody outside the industry can name.
- Recap the proof in three moves: chips are compiled, not drawn → two companies own the compiler → the margins and backlogs prove nobody can leave.
- Stamp it: Chokepoint #1 of 7. Six to go.
FACT AMMO:
- Board criterion (curriculum): a single company or cluster whose removal halts leading-edge AI-chip production within months, no substitute inside five years — the duopoly qualifies via the leading-edge design flow [research/eda §The moat, §The triopoly & market shares].
LINE THAT LANDS:
- "Every chip in every device you own started life inside these two companies' software. That's not a market. That's a tollbooth on the modern world."
-->

---

# EDA export controls

<div class="mt-8 flex flex-col gap-4 text-lg">
<div class="flex gap-4 items-baseline"><div class="w-40 font-bold shrink-0">Aug 2022</div><div>US restricts EDA software designed for GAAFET development</div></div>
<div class="flex gap-4 items-baseline"><div class="w-40 font-bold shrink-0">May 2025</div><div>Commerce imposes license requirements on most EDA sales to China</div></div>
<div class="flex gap-4 items-baseline"><div class="w-40 font-bold shrink-0">July 2, 2025</div><div>Restrictions end under a framework covering rare-earth exports; duration about six weeks</div></div>
</div>

<div class="text-sm opacity-60 mt-10">
The final section returns to EDA controls as part of US-China semiconductor policy.
</div>

<!--
BEATS:
- SEED (eda-export-lever → pays off in geopolitics): because two US companies own the design layer, chip-design software is now a foreign-policy instrument — walk the three dates as escalation, sledgehammer, reversal.
- The 2022 move is the chess one: banning software for GAAFET transistors China couldn't manufacture yet — locking the door before China reached it.
- The 2025 whiplash is the proof both ways: one letter turns it off, one deal turns it back on. Don't resolve it here — plant it: "hold that thought until the final act."
- CLOSER (15–30s, what you now know): chips are compiled, not drawn; two companies own the compiler; that's Chokepoint #1 of 7; and Washington has already fired it as a weapon — twice.
- CLIFFHANGER into arm-riscv: the tools are settled — a duopoly. But before the first line of RTL, every chip must choose a LANGUAGE. Next: the empire that collects a royalty on ~99% of smartphones, and the open-source insurgents trying to burn its tollbooth down.
FACT AMMO:
- Aug 2022: BIS controls ECAD software "specially designed" for GAAFET development (ECCN 3D006, effective Oct 14, 2022) [research/eda §Geopolitics].
- May 2025: BIS letters (May 23/29) to Synopsys, Cadence, Siemens — license requirement on essentially all EDA to China; Synopsys suspended guidance and halted China sales [research/eda §Geopolitics].
- July 2, 2025: restrictions rescinded as part of the US–China framework deal trading export relief for Chinese rare-earth exports [research/eda §Geopolitics]. Handle: chip software literally traded against minerals.
- The stakes: China ≈ $814M / 11.5% of Synopsys FY25 revenue + $680M / 13% of Cadence — cutting China off costs the big three roughly $1.5B/yr, but denies China the design layer of a $792B industry [research/eda §Geopolitics].
- Counter-lever: China's SAMR cleared Synopsys–Ansys July 14, 2025 — one day before the deal deadline — with divestitures + 10 years of behavioral remedies [research/eda §Synopsys]. Line: "The US controls the software; China discovered it controls the permission slip."
- China's build-out: self-sufficiency passed ~10% in 2024; Empyrean is world #4 (~$168M revenue); Huawei claims a 14nm-class toolchain — mature nodes, never externally verified [research/eda §Geopolitics] [VERIFY: Huawei claim never externally verified — keep the hedge if voiced].
- Arm handoff number (for the cliffhanger only): royalty on ~99% of smartphones — cite from the arm-riscv pack when that segment is built; curriculum row carries it.
LINE THAT LANDS:
- "In May 2025 one letter switched off China's access to chip-design software. Six weeks later, a rare-earths deal switched it back on. Software is now traded against minerals."
-->
