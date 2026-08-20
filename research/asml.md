# Research — ASML


**As-of: 2026-08-18**

## What they are
- Dutch company headquartered in Veldhoven. Makes lithography systems, software,
  and services used to print circuit patterns on wafers; it does **not** make
  chips. Customers include Intel, Samsung, and TSMC. [2][5]
- ASML is the world's only manufacturer of EUV lithography systems. Nikon and
  Canon compete in older DUV categories, not production EUV. [2][5]
- EUV uses 13.5 nm light for the most intricate layers of leading-edge logic and
  DRAM. It reduces the need for complex multi-patterning compared with DUV. [2]

## Q2 2026 current snapshot [1][3]
- Total net sales: **€9.326B**.
- Net income: **€2.918B**.
- Gross margin: **54.0%**.
- New lithography systems sold: **86** across the portfolio; this is **not** an
  EUV-only unit count.
- FY2026 company outlook: **€43–45B** total net sales and **54–56%** gross margin.
- ASML described first-half order intake as "extremely strong." Management said
  2027 low-NA EUV capacity was close to fully covered by orders. [1][3]
- Planned 2026 low-NA EUV capacity: around **65 systems**. ASML plans roughly 30%
  more capacity in 2027 and is investigating another roughly 30% for 2028. [1]

## Bookings are not backlog [4]
- **Net bookings** = system orders and inflation-related adjustments for which
  ASML has accepted written authorization during the stated period.
- **Backlog** = the accumulated accepted order value that has not yet been
  recognized as revenue.
- FY2025 net bookings were **€28.035B**; year-end backlog was **€38.797B**. The
  figures describe different stocks and flows and must not be interchanged.
- The Q2 2026 headline release did not publish a numeric bookings or backlog
  figure. Use its qualitative statement about order intake; do not relabel it as
  backlog. [1]

## The machine and its supply chain
- One EUV system contains around **100,000 parts**. Shipping one can require
  **40 freight containers, three cargo planes, and 20 trucks**. [5]
- ASML is the system architect and integrator. Critical modules include:
  - **ZEISS SMT** projection and illumination optics. [6][7]
  - **TRUMPF** high-power CO₂ lasers for the EUV source. [6]
  - **Cymer**, acquired by ASML in 2013, for EUV source technology. [6]
- EUV light path: laser pulses flatten and then vaporize tin droplets into plasma;
  the plasma emits 13.5 nm light, which mirrors carry through a vacuum to the
  reticle and wafer. ASML's official NXE optical-column illustration shows the
  reflective path inside the scanner. ASML's latest commercial sources repeat
  the process about **60,000 times per second**. [2][7][15]
- ZEISS EUV mirrors use more than 100 engineered layers and are polished to less
  than an atom's thickness. [7]
- ZEISS says that if one of its EUV mirrors were scaled to the size of Germany,
  its largest surface unevenness would be about **0.1 mm**. ASML separately uses
  **1 mm** for a comparable analogy, so keep the figure tied to its source. [7][14]
- Intel reported its first EXE:5000 installation at **more than 150 metric tons**,
  transported in 43 freight containers. [8]

## High-NA EUV — current production status
- Numerical aperture is a **dimensionless** optical quantity: it describes the
  angular range of light the projection optics can collect and focus, not a
  length in nanometres. The Rayleigh relationship is `CD = k1 · λ / NA`, so at
  the same wavelength and comparable process factor, resolution improves as NA
  increases. [16]
- High-NA raises numerical aperture from **0.33 to 0.55**. The EXE platform has
  **8 nm** resolution and can print features **1.7× smaller** than NXE systems,
  supporting fewer exposures on suitable critical layers. [2][9]
- ASML's public product pages describe **8 nm resolution**; ASML and ZEISS
  technical literature specifies this as approximately **8 nm half-pitch** for
  dense lines. For an equal line-and-space pattern, that is a **16 nm full
  pitch**, not an 8 nm full pitch. [9][16]
- The TWINSCAN EXE:5200B is the second-generation High-NA system. ASML reports
  **175 wafers/hour at 50 mJ/cm²**, 60% higher productivity than EXE:5000. [2]
- By end-2025 ASML had shipped **eight** High-NA systems; six were operating,
  including the first EXE:5200B. [10]
- July 2026 production milestone: Intel dual-qualified **specific Intel 18A
  layers** on High-NA in Oregon and began shipping a **subset** of Panther Lake
  products made with those layers, with yields matched to the NXE process. Intel
  also installed and passed acceptance testing on the first EXE:5200B. [11]
- Scope guard: this is evidence of production readiness on selected layers, not
  wholesale replacement of low-NA EUV across Intel 18A or the industry. [11]

## Why replication is difficult
- ASML's moat is a co-specialized system: EUV source, ZEISS optics, precision
  stages, sensors, software, vacuum, and a global supplier base must work as one
  calibrated machine. ASML had **5,100 suppliers** at the end of 2025. [2][6]
- Losing ASML stops access to new EUV scanners; losing an irreplaceable optical or
  source module can constrain ASML itself. The chokepoint is nested, not purely a
  single-company monopoly.

## Export controls
- Dutch rules require export authorization for covered advanced semiconductor
  manufacturing equipment shipped outside the EU. The government evaluates
  applications case by case; the rule is **not a blanket ban on every ASML sale**. [12]
- ASML's 2025 Annual Report says EUV systems, specific DUV immersion systems, and
  some other products require export licenses under Dutch, US, or other rules;
  US controls also restrict dealings with certain Chinese entities and fabs. [13]
- Slide-safe phrasing: **licenses gate where controlled ASML systems can ship**.
  Avoid collapsing the policy into "ASML cannot sell anything to China."

---

## Sources
1. ASML, Q2 2026 financial results, July 15 2026 — https://www.asml.com/en/news/press-releases/2026/q2-2026-financial-results
2. ASML, 2025 Annual Report (US GAAP) — https://www.sec.gov/Archives/edgar/data/937966/000162828026011377/asml-2025xannualxreportx.htm
3. ASML, Q2 2026 investor-call transcript — https://ourbrand.asml.com/asset/1fd3908a-0381-47b5-9b69-a3094f656651/2026_07_15-ASML-Transcript-investor-call-Q2-2026.pdf
4. ASML, Q4 and FY2025 financial results — https://www.asml.com/en/news/press-releases/2026/q4-2025-financial-results
5. ASML, "Busting ASML myths" — https://www.asml.com/en/company/stories/2022/busting-asml-myths
6. ASML, "Making EUV: from lab to fab" — https://www.asml.com/en/company/stories/2022/making-euv-lab-to-fab
7. ASML, "Lenses & mirrors" and EUV-source principles — https://www.asml.com/en/technology/lithography-principles/lenses-and-mirrors
8. Intel, High-NA EUV press kit — https://newsroom.intel.com/press-kit/intel-high-na-euv
9. ASML, TWINSCAN EXE:5200B product page — https://www.asml.com/en/products/euv-lithography-systems/twinscan-exe-5200b
10. ASML, 2026 AGM presentation, p. 15 — https://ourbrand.asml.com/asset/d5e933d7-78d0-406c-aed7-a46626e63381/2026_-AGM-_presentation.pdf
11. ASML, High-NA readiness milestone with first high-volume logic product, July 15 2026 — https://www.asml.com/en/news/press-releases/2026/high-na-euv-reaches-new-readiness-milestone
12. Government of the Netherlands, advanced-equipment export-control update, January 15 2025 — https://www.government.nl/latest/news/2025/01/15/klever-export-controls-on-advanced-semiconductor-manufacturing-equipment-to-be-tightened
13. ASML, 2025 Annual Report, risk and security section — https://ourbrand.asml.com/m/71076aaad607de4d/original/Exhibit%252015.2.pdf
14. ZEISS SMT, "EUV lithography and technology" — https://www.zeiss.com/semiconductor-manufacturing-technology/inspiring-technology/euv-lithography.html
15. ASML, "EUV lithography systems," NXE optical-column illustration — https://www.asml.com/en/products/euv-lithography-systems
16. ASML, "The Rayleigh criterion for resolution" — https://www.asml.com/en/technology/lithography-principles/rayleigh-criterion
