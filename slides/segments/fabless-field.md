---
layout: section
---

<!-- SEGMENT
id: fabless-field
act: II — The Blueprint
tier: C            # C cards (ensemble card montage; pressure valve 🔧)
angle: "Design is a crowd sport now — dozens of companies draw world-changing chips — precisely because manufacturing collapsed to almost nobody. Every blueprint in this segment ends the same way: on a flight to one island."   # YOU OWN THIS LINE — rewrite it in your voice
runtime: ~3 min
status: draft
seeds: [apple-iou]                    # Apple's node buyouts planted here → cashed in tsmc
pays_off: [owns-no-factories]         # nvidia's "owns no factories" cashed at this act-end Money Bar
stamps: []                            # cards earn no chokepoint stamps
diagrams: [map-design]                # Money Bar is inline HTML per BUILDING §4
sources: research/fabless-field.md, research/nvidia.md
-->


# Major fabless chip designers

<div class="text-xl opacity-70 mt-2">AMD, Apple, Qualcomm, Broadcom, Marvell, and MediaTek also design chips without owning leading-edge fabs.</div>

![map — design lit](/diagrams/rendered/map-design.svg)

<div class="text-sm opacity-60 mt-4">
Design is distributed across many firms; leading-edge manufacturing is concentrated among three.
</div>

<!--
BEATS:
- We just spent Act II on Nvidia, EDA, and Arm. Now widen the lens: Nvidia is the biggest designer, not the only one.
- Set up the thesis in your own words (angle above): design became a crowd sport BECAUSE manufacturing collapsed to a handful. The great unbundling (Act I) freed anyone with EDA tools + an Arm/RISC-V license + a TSMC slot to design a chip. So the design side is a crowd — and the fab side is a monopoly-in-waiting.
- This is a fast montage: five quick cards, then where the money actually sits, then the handoff.
FACT AMMO:
- Framing number: top-10 fabless designers grew 44% in 2025 to $359.4B — but Nvidia alone was $205.7B = 57% of it. Everyone else here is fighting over the other ~$154B [research/fabless-field §the fabless model in numbers].
- Fabless = you keep the design, the software, the customer; you rent the factory. Record 34.8% of all IC sales by 2021, trending higher [research/fabless-field §the fabless model in numbers]. [VERIFY: IC Insights ceased publishing; no fresher authoritative %]
LINE THAT LANDS:
- "Anyone can design a chip now. Almost nobody can build one. This segment is the 'anyone.' The next one is the 'almost nobody.'"
-->

---
class: visual-sequence paper-visual
---

<div class="visual-sequence__kicker">FABLESS DESIGNERS</div>

<div class="visual-sequence__frame">
  <img src="/diagrams/rendered/slide-047-fabless-designers.svg" alt="Six fabless design companies sending completed layout files to one outside foundry" />
</div>

<div class="visual-sequence__caption"><strong>Six fabless designers send layout files to outside foundries.</strong></div>
<div class="visual-sequence__source">AMD · Apple · Qualcomm · Broadcom · Marvell · MediaTek</div>

<!--
BEATS (montage — walk each card fast, ~20–30s each; this is a pressure-valve segment, keep the tempo up):

AMD — the second source.
- Only company with both a full x86 CPU stack (EPYC/Ryzen) and a real AI-GPU line (Instinct); the designated #2 the whole industry wants to exist so Nvidia isn't the only door.
- The turnaround is the story: Lisa Su took AMD from a near-bankruptcy to a giant.
FACT AMMO:
- FY2025 record revenue $34.6B (+~14%); Data Center record $16.6B, +32%; Q1 2026 revenue $10.3B, +38% [research/fabless-field §AMD].
- Lisa Su: took over Oct 2014 at ~$2B market cap, stock <$2, a bankruptcy candidate → ~$675B and +14,000% by mid-2026, a ~300× [research/fabless-field §AMD, §fact ammo].
- OpenAI deal (Oct 6, 2025): 6 GW of Instinct GPUs; OpenAI got a warrant for up to 160M shares (~10% of AMD) [research/fabless-field §AMD].
- EPYC = 46.2% of x86 server CPU *revenue* but ~33% of *units* (Q1 2026) — sells a third of the boxes, takes half the money [research/fabless-field §AMD]. [VERIFY: MI300/chiplet transistor counts; keep to revenue/share figures on screen]
- Handle: a 300× is roughly turning a $10k stake in 2014 into $3M today.

Apple — the designer that sells nothing (the IOU card).
- The twist: the single most influential chip designer here appears in NO fabless ranking, because it never sells a chip — every A/M/C-series die goes into an Apple product.
- Plant the IOU explicitly: how Apple bends TSMC to its will — buying out whole nodes — is the TSMC segment. Don't spend it here.
FACT AMMO:
- FY2025 revenue $416B; ~25% of ALL of TSMC's revenue in 2024, its top customer for over a decade — until Nvidia overtook it in 2025 (~19%) [research/fabless-field §Apple]. [VERIFY: Apple's exact 2025 share of TSMC]
- Anchor tenant of every node: first at N5, first at N3; reportedly booked ~half of initial 2nm capacity for A20 / M6 / Vision Pro R2 [research/fabless-field §Apple].
- Spent six years and bought Intel's whole modem division just to replace ONE Qualcomm part — the C1 modem shipped Feb 2025 [research/fabless-field §Apple].
LINE THAT LANDS:
- "Apple is the biggest chip designer in this segment and it hasn't sold a single chip. Remember that when we get to the island — that's where the IOU comes due."

Qualcomm — paid twice.
- The merchant king of premium Android; but the real machine is the patent portfolio.
FACT AMMO:
- FY2025 (ended Sept 2025) revenue $44.3B, +14%; record FCF $12.8B [research/fabless-field §Qualcomm].
- QTL toll booth: a royalty on nearly every 3G/4G/5G phone on Earth — including iPhones and phones running rivals' chips — ~$5.6B/yr at ~70%+ margin [research/fabless-field §Qualcomm]. [VERIFY: exact FY25 QTL revenue and QTL margin]
- Losing Apple's modem: telegraphed for years — ~20% of 2026 iPhones, ~0% by 2027, ~$5.7–5.9B/yr walking out the door [research/fabless-field §Qualcomm].
- New front: AI200 / AI250 rack-scale *inference* chips; first customer Saudi-backed Humain, 200 MW from 2026 [research/fabless-field §Qualcomm].
LINE THAT LANDS:
- "Apple builds its own modem to escape Qualcomm — and Qualcomm still gets a check on every iPhone sold. That's what a patent moat looks like."

Broadcom + Marvell — the counterweight (spend a beat longer here; this is the systemic story).
- These two don't fight Nvidia chip-vs-chip. They arm the customers who want out. Every hyperscaler that would rather own its silicon than pay Nvidia's margin hires Broadcom or Marvell to co-design it.
- If AI standardizes on custom XPUs + open Ethernet instead of Nvidia GPUs + NVLink, the toll shifts from Nvidia to Broadcom.
FACT AMMO:
- Broadcom AI-semi revenue trajectory: $20B (FY25) → ~$56B (FY26 guided) → >$100B (FY27 guided) — a 5× in two years, built almost entirely on OTHER companies' chips [research/fabless-field §Broadcom].
- Customers: Google TPU (since v1), Meta MTIA, and OpenAI — a 10 GW custom-accelerator collaboration announced Oct 13, 2025 [research/fabless-field §Broadcom].
- Broadcom adjusted EBITDA = 69% of revenue; crossed $2 trillion market cap in April 2026, sixth company ever [research/fabless-field §Broadcom]. [VERIFY: VMware close value; FY24 AI base]
- Marvell = the #2 ASIC house: AWS Trainium (five-year deal, Dec 2024) + dominant PAM4 optical DSPs; FY2026 revenue $8.195B (+42%), data center now 76% of revenue [research/fabless-field §Marvell]. [VERIFY: Microsoft/Maia status; Trainium 3+ sourcing reports]
- Networking leg: Broadcom's Tomahawk 6 — world's first 102.4 Tb/s switch [research/fabless-field §Broadcom].
LINE THAT LANDS:
- "Nvidia's scariest competitor isn't a chip. It's a business model — Broadcom and Marvell selling every one of Nvidia's biggest customers a way out."

MediaTek — the sleeper.
- The volume king everyone underestimates, quietly moving up-market and into AI.
FACT AMMO:
- FY2025 revenue ~US$19.1B (+16% in USD), #5 fabless worldwide [research/fabless-field §MediaTek].
- ~38% of global smartphone AP shipments (Q3 2025) — about one in three phones [research/fabless-field §MediaTek]. [VERIFY: Counterpoint puts Q1 2026 nearer ~32% as share normalizes]
- The sleeper story: co-designs Google TPU (its SerDes IP inside), reportedly won TPU v9 orders (June 2026); management guides ~$2B of AI-ASIC revenue in Q4 2026 ALONE [research/fabless-field §MediaTek].
- Completed TSMC's first announced 2nm tape-out (Sept 2025) — same node wave as Apple, Nvidia, AMD [research/fabless-field §MediaTek].
LINE THAT LANDS:
- "The company you'd find in a $150 phone just tied Broadcom for a seat on Google's TPU — and beat Intel to 2nm."

CLOSER OF THE MONTAGE — snap back to the thesis:
- Six names (plus Nvidia). All fabless. All armed by the same EDA tools, the same Arm/RISC-V IP. The design layer is a CROWD.
- Simplification hedge: yes, I'm compressing — these firms have very different businesses (Apple sells no chips, Qualcomm lives off patents, Broadcom off custom ASICs). The unifying fact isn't what they sell; it's what they DON'T own.
-->

---

# Illustrative economics of a GB300-class GPU

<div class="text-sm opacity-70 mb-3">One GB300-class accelerator · ~$50k street price per GPU <span class="opacity-50">(analyst estimate — Nvidia publishes no list price)</span></div>

<div class="w-full border-2 border-gray-400 rounded-lg overflow-hidden mt-2">
  <div class="flex h-16 text-white text-sm font-bold">
<div class="bg-green-700 flex items-center justify-center" style="width:75%">Nvidia gross profit at current company margin: ~$37k</div>
<div class="bg-gray-500 flex items-center justify-center" style="width:25%">estimated cost of revenue: ~$13k</div>
  </div>
</div>

<div class="grid grid-cols-2 gap-8 mt-6 text-sm">
<div>

**Reported economics**
- Nvidia company gross margin: **~75%**

</div>
<div>

**Major downstream suppliers**
- TSMC manufacturing · HBM memory · CoWoS packaging

</div>
</div>

<div class="text-xs opacity-40 mt-6">This is not a bill of materials. Nvidia does not disclose per-GPU supplier costs, and EDA and Arm costs are not public per-unit line items.</div>

<!--
BEATS:
- This is the act-end Money Bar — the running toll on our one chip. At the end of "The Blueprint," only the DESIGN layer has taken its cut, and it's a fat one.
- Cash the "owns no factories" seed from the Nvidia segment: the design layer captures ~75 cents on the dollar of gross margin — and ZERO of it required owning a factory. That is the entire promise of fabless, and it looks like a miracle from here.
- Then the twist that sets up the whole back half: hold that thought, because the factory is about to take a bigger cut than most of these designers do.
FACT AMMO:
- Per-GPU street price ~$50k+ (estimate); GB300 NVL72 rack ~$3.7–4.0M (Loop Capital) up to $6–6.5M configured [research/nvidia §the one chip]. [VERIFY: wide estimate range — pick one framing, flag on screen]
- Nvidia gross margin ~74.9% GAAP (Q1 FY27); "for every $100 of AI chips, ~$75 is gross profit" [research/nvidia §financials, §fact ammo].
- The great inversion (the hinge fact): TSMC's foundry gross margin hit 66.2% in Q1 2026 — the FACTORY now out-margins most of its fabless customers: AMD 55%, MediaTek ~48%, Qualcomm ~56%. Only Nvidia (~75%) and Broadcom (69% EBITDA) clearly out-earn their foundry per dollar [research/fabless-field §the fabless model in numbers]. [VERIFY: MTK/QCOM gross margins]
- Honesty flag to voice: these are estimates and ranges, EDA/Arm are amortized tolls not per-chip line items, and the design/downstream split is illustrative — the point is the shape, not the decimal.
LINE THAT LANDS:
- "The asset-light designers kept the margin, the software, the customer. But the 'asset-heavy' factory they hired now earns a fatter margin than most of them. The arbitrage quietly inverted."
-->

---
layout: center
---

# Fabless designers depend on outside manufacturing

<div class="text-lg opacity-80 mt-6 leading-relaxed max-w-2xl">
These companies send completed chip layouts to foundries for manufacturing.
</div>

<div class="text-base opacity-60 mt-8">
For leading-edge production, many of these designs<br>
go to TSMC in Taiwan.
</div>

<!--
BEATS:
- 15–20s "what you now know": design is a crowd — AMD, Apple, Qualcomm, Broadcom, Marvell, MediaTek, and Nvidia — freed by the great unbundling, armed by EDA + Arm, and every one of them fabless.
- Land the angle: design is crowded PRECISELY because manufacturing is not. All that crowd funnels into the same tiny bottleneck.
- The cliffhanger: a finished design is worthless until someone builds it. So the file leaves. It flies across the Pacific to one island — and the Apple IOU we just wrote comes due there.
FACT AMMO:
- The shared single point of failure: all of them depend on TSMC's leading edge — the fabless field's collective moat sits on one island [research/fabless-field §risks].
- The ~8,000-mile figure is a rhetorical handle (Silicon Valley → Taiwan), not a pack number — use it as color, not a cited stat. [VERIFY: don't put an exact mileage on screen as sourced]
- Forward-plant: this is the setup for the TSMC segment (and the Apple node-buyout payoff).
LINE THAT LANDS:
- "You've now met the people who draw the chips. Next, the one place on Earth that can actually make them — and why the whole crowd is hostage to it."
-->
