# Research — ASML

Fact pack. Ammunition only, no prose. `[n]` → source list at bottom.
`<!-- VERIFY -->` = not fully confident, check before recording.

## What they are
- Dutch company (Veldhoven, NL). Makes the photolithography machines that print
  circuit patterns onto silicon wafers. Does **not** make chips — sells the
  machines to everyone who does (TSMC, Samsung, Intel, SK Hynix, Micron…). [6]
- The only company on Earth that makes **EUV** (extreme ultraviolet) lithography,
  the technology required for every leading-edge logic chip. [3][6]

## The monopoly
- **100%** of the global EUV lithography market — sole supplier. [3]
- **~83%** of *all* lithography machine sales (incl. older DUV). [6]
- DUV competitors exist (Canon, Nikon); at the EUV leading edge, none. [6]

## FY2025 financials [1][2]
- Total net sales: **€32.7B** (up 16% YoY).
- Net income: **€9.6B**.
- Gross margin: **52.8%**.
- Net bookings: **€28.0B** for the year (Q4 alone €13.2B, of which €7.4B EUV).
- EUV system sales: **€11.6B**, up 39% YoY.
- Recognized revenue on **48 EUV systems** in 2025.
- 2030 revenue model target: **~€44–60B** range / company has pointed at up to
  ~$71B in bullish AI-demand scenarios. <!-- VERIFY: exact 2030 framing, ranges differ by source [7] -->

## The machine (why it's the most complex object made)
- A leading EUV scanner = **>100,000 parts**; ASML builds only ~**15%** in-house,
  ~**85%** sourced from suppliers across **~17 countries**. (Often cited as
  "~5,000 suppliers / ~5,000+ critical components.") [5][8] <!-- VERIFY: part-count figures vary 5k–100k depending on what's counted -->
- Ships in ~**40 freight containers** / multiple 747 loads. <!-- VERIFY -->
- Key irreplaceable suppliers:
  - **Carl Zeiss SMT** — the optics: mirrors so flat that scaled to the size of
    Germany the largest bump would be <1mm. Effectively a single-source partner. [4][5]
  - **Trumpf** — the high-power CO₂ laser system for the light source. [5][8]
  - **Cymer** (ASML-owned, San Diego) — the EUV light source. [4][8]
- How EUV light is made: tin droplets fired ~**50,000×/sec**, each hit twice by a
  laser, vaporized into plasma emitting 13.5nm light, collected by Zeiss mirrors.
  <!-- VERIFY: 50k/sec droplet rate -->

## High-NA EUV (the frontier)
- Next gen: higher numerical aperture (0.55 vs 0.33) → smaller features in one pass.
- Model: **TWINSCAN EXE:5200B**. Price ~**$350–400M** installed (vs ~$150–200M for
  standard EUV). [The $400M machine] [9]
- Throughput: ~**175 wafers/hour** under production conditions (~60% better than
  predecessor). <!-- VERIFY -->
- Adoption: first EXE:5200 shipped 2025; fewer than ~12 High-NA systems worldwide;
  Intel (14A), Samsung, imec among early sites. [9][10][11]

## Why nobody can replicate it (the moat)
- Decades of accumulated EUV know-how + the Zeiss optics partnership + Cymer/Trumpf
  light source + a supply web no one else can assemble. Recreating it ≈ recreating
  the whole ecosystem. [4]
- This is the textbook chokepoint: one Dutch company gates whether any nation can
  make leading-edge chips at all.

## Geopolitics
- Under Dutch/US export rules, ASML is **barred from selling EUV to China**, and
  more recently restricted on some advanced DUV. China is ASML's revenue swing
  factor (large in 2023–24, expected to normalize down). [7] <!-- VERIFY: current China revenue share -->
- Makes ASML the single clearest example of the West's leverage over China's chip
  ambitions — and a reason Taiwan/Netherlands sit in geopolitical crosshairs.

---

## Sources
1. ASML, "€32.7B net sales / €9.6B net income 2025" press release — https://www.asml.com/en/news/press-releases/2026/q4-2025-financial-results
2. TechPowerUp summary of ASML FY2025 — https://www.techpowerup.com/345731/
3. Counterpoint Research, ASML 2025 revenue / EUV shipments — https://counterpointresearch.com/en/insights/asml-2025-revenue-up-16-yoy-as-strong-euv-shipments-boost-systems-and-service-performance
4. The Generalist, "ASML: A Monopoly on Magic" — https://www.generalist.com/p/asml
5. Entropy Capital, ASML supply chain / BOM — https://entropycapital.substack.com/p/asmls-supply-chain-bill-of-materials
6. Wikipedia, ASML Holding — https://en.wikipedia.org/wiki/ASML_Holding
7. Tom's Hardware, ASML 2030 revenue projection — https://www.tomshardware.com/tech-industry/semiconductors/asml-projects-usd71-billion-in-revenue-by-2030
8. SemiconductorX, ASML spotlight (Zeiss/Cymer/Trumpf) — https://semiconductorx.com/spotlight-asml.html
9. Medium / Josephine Monica, "The $400M Machine" — https://medium.com/@josephinemonica/the-400m-machine-behind-the-next-era-of-chips-c218b1545dd3
10. TrendForce, EXE:5200 first shipment / Intel 14A — https://www.trendforce.com/news/2025/07/17/news-asml-confirms-first-high-na-euv-exe5200-shipment-reportedly-prepping-for-intels-14a-in-2027/
11. NineScrolls, imec EXE:5200 install — https://ninescrolls.com/news/imec-installs-400m-asml-exe-5200-high-na-euv-one-of-fewer-than-12-worldwide-targ
