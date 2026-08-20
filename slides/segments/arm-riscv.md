---
layout: default
class: map-only-focus
sources: [research/arm-riscv.md]
---

# Arm and RISC-V

<div class="map-only-focus__map">
  <img src="/diagrams/rendered/map-design.svg" alt="Industry map with chip-design companies and the design stage highlighted" />
</div>

<!--
- An instruction set architecture defines the commands that software can give a processor, such as load, add, and branch.
- Arm licenses its instruction set and CPU designs, while RISC-V publishes an open instruction set that anyone can implement.
-->

---

# Arm earns royalties on each chip shipped

<div class="grid grid-cols-3 gap-8 mt-10 text-center">
<div>
<div class="text-6xl font-bold">&gt;99%</div>
<div class="opacity-70 mt-2">of smartphones run Arm</div>
</div>
<div>
<div class="text-6xl font-bold">350B+</div>
<div class="opacity-70 mt-2">Arm chips ever shipped</div>
</div>
<div>
<div class="text-6xl font-bold">~1–2%</div>
<div class="opacity-70 mt-2">typical royalty rate on the chip's selling price</div>
</div>
</div>

<div class="text-sm opacity-60 mt-12 text-center">
Arm licenses CPU designs and architecture. Most contracts include an upfront fee and a per-chip royalty.
</div>

<!--
- Arm earns a license fee when a company adopts its technology and a royalty when each chip ships.
- A one-to-two-percent royalty across billions of units from Apple, Qualcomm, MediaTek, and other licensees turns broad adoption into recurring revenue.
-->

---

# Arm now spans IP, subsystems, and silicon

<div class="grid grid-cols-3 gap-5 mt-8">
<div class="border-2 border-gray-400 rounded-lg p-5">
<div class="text-2xl font-bold">Core / architecture IP</div>
<div class="opacity-70 mt-3 leading-relaxed">License a finished CPU core, or the instruction set for a custom compatible core.</div>
</div>
<div class="border-2 border-gray-400 rounded-lg p-5">
<div class="text-2xl font-bold">Compute Subsystem</div>
<div class="opacity-70 mt-3 leading-relaxed">Adopt a more complete, integrated platform instead of assembling every block from IP.</div>
</div>
<div class="border-2 border-amber-500 rounded-lg p-5">
<div class="text-2xl font-bold">Arm silicon</div>
<div class="opacity-70 mt-3 leading-relaxed">Deploy Arm's AGI data-center CPU, its first production silicon product, announced in March 2026.</div>
</div>
</div>

<div class="text-sm opacity-60 mt-8 text-center">
Reported AGI CPU demand exceeds <b>$2B across FY27–28</b>; selling silicon also brings Arm closer to its licensees.
</div>

<!--
- Arm still licenses finished cores and architecture rights, but CSS bundles more of the system into a near-complete platform.
- In March 2026 Arm added its own AGI data-center CPU, the first production silicon product in company history.
- Arm reported more than $2 billion of AGI CPU demand across FY2027 and FY2028.
- That expands customer choice while creating potential channel conflict with companies that license Arm technology to build competing CPUs.
-->

---

# Where RISC-V is used today

<div class="grid grid-cols-2 gap-10 mt-8">
<div>
<div class="text-lg font-bold mb-3">Deployed at scale</div>
<ul class="opacity-80 leading-relaxed">
<li>About 1B cores a year shipped by <b>Nvidia</b> inside its GPUs</li>
<li>Storage controllers, microcontrollers, and IoT products</li>
<li>Embedded systems with controlled software stacks</li>
</ul>
</div>
<div>
<div class="text-lg font-bold mb-3">Limited commercial adoption</div>
<ul class="opacity-80 leading-relaxed">
<li>No meaningful commercial smartphone share</li>
<li>Limited server shipments</li>
<li>Software compatibility remains the main barrier</li>
</ul>
</div>
</div>

<div class="text-sm opacity-60 mt-10 text-center">
RISC-V makes the instruction set free; you must still design and verify a core, or license one from a vendor.
</div>

<!--
- RISC-V removes the ISA license and royalty, not the engineering required to build a production CPU core.
- RISC-V has strong adoption in controllers, microcontrollers, storage, and embedded systems; Nvidia ships about one billion RISC-V control cores a year.
- Smartphones and servers remain limited because their software ecosystems favor established architectures.
-->
