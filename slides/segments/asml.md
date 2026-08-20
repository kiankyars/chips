---
class: visual-sequence
transition: fade
title: "EUV · physical scale"
sources: [research/asml.md]
---

<div class="visual-sequence__kicker">HIGH-NA EUV IS INDUSTRIAL-SCALE PRECISION EQUIPMENT</div>

<div class="visual-sequence__frame">
  <img src="/diagrams/rendered/asml-scanner-scale.svg" alt="A High-NA EUV scanner drawn beside a person, with its dimensions marked" />
</div>

<div class="visual-sequence__caption">Intel's first EXE installation arrived in 43 freight containers.</div>
<div class="visual-sequence__source">ASML · Intel High-NA EUV press kit</div>

<!--
- The installed High-NA system weighs more than 150 metric tons; Intel received its first one in 43 freight containers.
- Inside are the light source, vacuum chambers, mirror train, and precision stages needed to keep a moving wafer aligned at nanometre scale.
-->

---
class: visual-sequence
transition: fade
title: "Reticle → field → wafer"
---

<div class="visual-sequence__kicker">THE OPTICS SHRINK EACH RETICLE IMAGE 4:1, THEN STEP IT ACROSS THE WAFER</div>

<div class="visual-sequence__frame">
  <img src="/diagrams/rendered/asml-reticle-field-wafer.svg" alt="A reticle pattern reduced four times to one exposure field that is stepped across a 300 millimetre wafer" />
</div>

<div class="visual-sequence__caption">The reticle pattern and wafer are drawn at the same physical scale.</div>
<div class="visual-sequence__source">ASML · NXE:3400C / 3600D</div>

<!--
- A reticle holds the pattern for one exposure field, and projection optics shrink the image to one quarter of its linear size.
- Four-to-one reduction turns a 104 by 132 millimetre reticle pattern into a field up to 26 by 33 millimetres, repeated across the wafer.
-->

---
class: euv-optics-photo
transition: fade
title: "EUV optical column"
---

<img class="euv-optics-photo__image" src="/assets/asml-nxe-optical-column.jpg" alt="Official ASML illustration of EUV light reflecting through the mirror train inside an NXE optical column" />

<div class="euv-optics-photo__copy">
  <div class="euv-optics-photo__kicker">INSIDE THE EUV OPTICAL COLUMN</div>
  <h1>EUV travels through vacuum and mirrors</h1>
  <p>Air and glass absorb 13.5 nm light.<br><strong>ZEISS precision:</strong> Germany-sized mirror → ≈0.1 mm maximum unevenness.</p>
</div>

<div class="euv-optics-photo__source">ILLUSTRATION · ©ASML · PRECISION ANALOGY · ZEISS SMT</div>

<!--
- ASML generates 13.5 nanometre EUV from laser-produced tin plasma before sending it into this optical column.
- Air and transmissive glass absorb EUV, so the machine encloses the path in high vacuum and uses multilayer mirrors.
- The rendered beam is illustrative; the mirrors steer and reduce the reflected reticle pattern onto the wafer.
- ZEISS says a Germany-sized EUV mirror would have no surface unevenness taller than about 0.1 millimetres.
-->

---
class: visual-sequence
transition: fade
title: "One calibrated scanner"
---

<div class="visual-sequence__kicker">ASML INTEGRATES SPECIALIST MODULES INTO ONE CALIBRATED SCANNER</div>

<div class="visual-sequence__frame">
  <img src="/diagrams/rendered/asml-supplier-modules.svg" alt="Critical EUV modules supplied by TRUMPF, Cymer, ZEISS and ASML inside one integrated system" />
</div>

<div class="visual-sequence__source">ASML · Making EUV: from lab to fab</div>

<!--
- ASML integrates the scanner rather than building every critical module itself.
- TRUMPF supplies the high-power laser, ASML's Cymer unit the EUV source, and ZEISS the optics; ASML integrates them with stages, sensors, software, and a calibrated vacuum.
-->

---

# One EUV monopoly contains another

<div class="grid grid-cols-[1fr_auto_1fr_auto_1fr] gap-5 mt-14 items-center text-center">
<div><div class="text-3xl font-bold">LEADING-EDGE FAB</div><div class="opacity-55 mt-2">needs EUV capacity</div></div>
<div><div class="text-sm opacity-55 mb-2">DEPENDS ON</div><div class="text-5xl opacity-35">→</div></div>
<div class="border-y-4 border-cyan-400 py-8"><div class="text-4xl font-bold">ASML</div><div class="opacity-65 mt-2">sole production EUV supplier</div></div>
<div><div class="text-sm opacity-55 mb-2">DEPENDS ON</div><div class="text-5xl opacity-35">→</div></div>
<div class="border-y-4 border-violet-400 py-8"><div class="text-4xl font-bold">ZEISS SMT</div><div class="opacity-65 mt-2">sole critical-optics supplier</div></div>
</div>

<div class="text-center text-sm tracking-[0.22em] opacity-60 mt-12">5 / 7 CONTROL POINTS MAPPED</div>

<!--
- ASML is the world's only production EUV scanner manufacturer, and its annual report identifies ZEISS as its sole supplier of critical lithography optics.
- A leading-edge fab therefore depends on one single-source relationship nested inside another; losing either would stop new EUV capacity.
-->

---

# ASML expects €43–45B of 2026 sales while expanding EUV capacity

<div class="grid grid-cols-2 gap-x-16 gap-y-10 mt-10 text-center">

<div><div class="text-5xl font-bold">€9.3B</div><div class="opacity-60 mt-2">Q2 sales</div></div>
<div><div class="text-5xl font-bold">54.0%</div><div class="opacity-60 mt-2">Q2 gross margin</div></div>
<div><div class="text-5xl font-bold">€43–45B</div><div class="opacity-60 mt-2">FY2026 outlook</div></div>
<div><div class="text-5xl font-bold">≈65</div><div class="opacity-60 mt-2">planned low-NA EUV capacity</div></div>

</div>

<div class="text-xs opacity-40 text-right mt-4">Q2 actuals · FY2026 company outlook · July 15, 2026</div>

<!--
- Q2 sales were 9.3 billion euros at a 54 percent gross margin; the 86 systems sold span ASML's full lithography portfolio, not EUV alone.
- ASML raised its full-year outlook to 43 to 45 billion euros and described first-half order intake as extremely strong.
- Management says 2027 low-NA EUV capacity is nearly covered by orders. That is order coverage, not a newly disclosed backlog figure.
-->

---
class: na-explainer
title: "High-NA resolution"
---

# 0.55 NA lets the same EUV light resolve finer detail

<div class="na-explainer__definition">
  <span>NUMERICAL APERTURE</span>
  <strong>A unitless measure of the light angles the mirrors can collect and focus.</strong>
</div>

<div class="na-explainer__comparison">
  <div class="na-explainer__system na-explainer__system--low">
    <div class="na-explainer__value">0.33 <span>NA</span></div>
    <div class="na-explainer__platform">NXE · CURRENT EUV</div>
    <div class="na-explainer__resolution">≈13 nm <span>resolution</span></div>
  </div>

  <div class="na-explainer__relationship">
    <span>SAME 13.5 nm LIGHT</span>
    <strong>feature size ∝ 1 / NA</strong>
    <span>NA INCREASES 1.67×</span>
  </div>

  <div class="na-explainer__system na-explainer__system--high">
    <div class="na-explainer__value">0.55 <span>NA</span></div>
    <div class="na-explainer__platform">EXE · HIGH-NA EUV</div>
    <div class="na-explainer__resolution">≈8 nm <span>resolution</span></div>
  </div>
</div>

<div class="na-explainer__pitch"><strong>8 nm half-pitch</strong> means an 8 nm line beside an 8 nm space: a 16 nm repeat.</div>
<div class="na-explainer__scope">Production use remains selective: Intel has qualified specific 18A layers, not every layer.</div>

<!--
- Numerical aperture is dimensionless: in vacuum, it is approximately the sine of the half-angle of light the mirrors collect and focus.
- At the same 13.5-nanometre wavelength, increasing NA from 0.33 to 0.55 lowers comparable ideal feature size by about 40 percent.
- Eight-nanometre half-pitch means an eight-nanometre line beside an eight-nanometre space, repeating every 16 nanometres.
- Intel has qualified selected 18A layers, not every layer, on High-NA.
-->
