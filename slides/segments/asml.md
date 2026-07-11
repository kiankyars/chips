<!-- SEGMENT
id: asml
part: 5 — Equipment
angle: "ASML isn't a chip company — it's the single most concentrated chokepoint in the world economy. One company in one Dutch town decides which nations get to make advanced chips at all."   # YOU OWN THIS LINE — rewrite it in your voice
runtime: ~5–6 min
status: draft
diagrams: [litho-chain, euv-light-path]
sources: research/asml.md
-->

---
layout: section
---

# ASML

<div class="text-xl opacity-70 mt-2">The most important company you've never used</div>

<!--
BEATS:
- Set up the surprise: the most critical company in tech makes zero chips.
- Tee up the angle (above) in your own words.
LINE THAT LANDS:
- "If you wanted to stop the modern world, you wouldn't bomb a chip fab. You'd stop one factory in Veldhoven, Netherlands."
-->

---

# Where ASML sits

![litho chain](/diagrams/rendered/litho-chain.png)

<div class="text-sm opacity-60 mt-4">
ASML sells the printing presses. Everyone else — TSMC, Samsung, Intel — buys them.
</div>

<!--
BEATS:
- Locate ASML in the chain we drew at the start: it's equipment, upstream of every fab.
- Lithography = printing the circuit pattern onto the wafer. The single hardest step.
FACT AMMO:
- Customers: TSMC, Samsung, Intel, SK Hynix, Micron — i.e. literally everyone making leading-edge chips.
-->

---

# The monopoly

<div class="grid grid-cols-2 gap-8 mt-8">
<div class="text-center">
<div class="text-7xl font-bold">100%</div>
<div class="opacity-70 mt-2">of the world's EUV machines</div>
</div>
<div class="text-center">
<div class="text-7xl font-bold">~83%</div>
<div class="opacity-70 mt-2">of <i>all</i> lithography sales</div>
</div>
</div>

<div class="text-sm opacity-60 mt-10 text-center">
Canon and Nikon still make older DUV machines. At the leading edge — EUV — ASML has no competitor at all.
</div>

<!--
BEATS:
- EUV (extreme ultraviolet) is required for every cutting-edge logic chip. ASML is the ONLY maker.
- This isn't "market leader." It's a literal monopoly on the leading edge.
FACT AMMO:
- 100% EUV share; ~83% of all litho incl. DUV [research §monopoly].
LINE THAT LANDS:
- "There is no plan B. There is no second supplier. There is ASML or there is no advanced chip."
-->

---

# The machine

<div class="grid grid-cols-2 gap-6 mt-6">

<div>

![euv light path](/diagrams/rendered/euv-light-path.png)

</div>

<div class="flex flex-col justify-center gap-4">

- **>100,000 parts**, ~17 countries
- ASML builds only **~15%** in-house
- **Zeiss** optics — mirrors flat to the atom
- **Trumpf** laser · **Cymer** light source
- Ships in **~40 freight containers**

</div>
</div>

<!--
BEATS:
- This is arguably the most complex machine humans build. Walk the light path: tin droplet fired ~50,000×/sec, hit twice by a laser, vaporized to plasma, emits 13.5nm light, bounced off Zeiss mirrors onto the wafer.
- The point: ASML is really an ORCHESTRATOR of a supply web nobody else can assemble. 85% is sourced.
FACT AMMO:
- Zeiss mirror analogy: scaled to the size of Germany, largest bump < 1mm.
- Trumpf = laser, Cymer (ASML-owned, San Diego) = source [research §the machine].
LINE THAT LANDS:
- "ASML's real product isn't a machine. It's the only supply chain on Earth that can build this machine."
-->

---

# The frontier: High-NA EUV

<div class="grid grid-cols-3 gap-6 mt-10 text-center">
<div>
<div class="text-5xl font-bold">$400M</div>
<div class="opacity-70 mt-2">per EXE:5200B</div>
</div>
<div>
<div class="text-5xl font-bold">175</div>
<div class="opacity-70 mt-2">wafers / hour</div>
</div>
<div>
<div class="text-5xl font-bold">&lt;12</div>
<div class="opacity-70 mt-2">installed worldwide</div>
</div>
</div>

<div class="text-sm opacity-60 mt-10 text-center">
Higher numerical aperture (0.55 vs 0.33) → smaller features in a single exposure. Early sites: Intel 14A, Samsung, imec.
</div>

<!--
BEATS:
- The next generation costs ~$400M each — the most expensive production tool ever sold.
- It's how we push below 2nm. Whoever gets these first leads the next node.
FACT AMMO:
- EXE:5200B, ~$400M installed, ~175 wph, NA 0.55 vs 0.33 [research §High-NA].
-->

---

# By the numbers — FY2025

<div class="grid grid-cols-2 gap-x-12 gap-y-6 mt-8 text-lg">

<div><b>€32.7B</b> — total net sales <span class="opacity-50">(+16% YoY)</span></div>
<div><b>€9.6B</b> — net income</div>
<div><b>52.8%</b> — gross margin</div>
<div><b>€28.0B</b> — net bookings</div>
<div><b>48</b> — EUV systems shipped</div>
<div><b>€11.6B</b> — EUV sales <span class="opacity-50">(+39%)</span></div>

</div>

<!--
BEATS:
- A monopoly on the leading edge looks like a 53% gross margin selling $200M machines.
- Bookings are the tell — €28B backlog = years of demand, driven by the AI buildout.
FACT AMMO:
- All figures: research/asml.md §FY2025 [1][2][3].
-->

---

# The chokepoint

<div class="text-2xl mt-12 leading-relaxed">
One company.<br>
One country.<br>
Gates whether any nation can make advanced chips at all.
</div>

<div class="text-sm opacity-60 mt-10">
Barred from selling EUV to China by Dutch/US export rules — which is exactly why ASML is at the center of the chip war. We'll come back to this in Part 9.
</div>

<!--
BEATS:
- Tie it back to the angle. This is the cleanest example of a chokepoint in the whole episode.
- Forward-reference the geopolitics section — don't go deep here, just plant the flag.
FACT AMMO:
- EUV export ban to China; ASML is the West's single biggest point of leverage [research §geopolitics].
LINE THAT LANDS:
- "Every chip war headline you've ever read traces back to this one company's export license."
-->
