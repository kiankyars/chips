---
layout: section
---

<!-- SEGMENT
id: arm-riscv
act: II — The Blueprint
tier: D            # duel — one contest, not two profiles
angle: "Arm collects a private tax on computing itself — and RISC-V is the tax revolt. But so far the insurgents have only captured the land the empire never bothered to tax."   # PROPOSED — YOU OWN THIS LINE
runtime: ~4 min
status: draft
seeds: [risc-v-china-hedge]     # light plant — pays off in geopolitics (SMIC/full-stack China push)
pays_off: []
stamps: []                      # no chokepoint stamp — an ISA with an open rival is leverage, not a single point of failure; beats say so out loud
diagrams: [map-design]
sources: research/arm-riscv.md
-->


# Arm and RISC-V

<div class="text-xl opacity-70 mt-2">Two instruction-set models: licensed and open</div>

<img src="/diagrams/rendered/map-design.svg" class="absolute bottom-4 right-4 w-56 opacity-90" alt="map — design region lit" />

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
More integration can raise Arm's value per system, but selling silicon also puts it closer to its licensees.
</div>

<!--
- Arm still licenses finished cores and architecture rights, but CSS bundles more of the system into a near-complete platform.
- In March 2026 Arm added its own AGI data-center CPU, the first production silicon product in company history.
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
Anyone may implement the RISC-V ISA without a license or royalty. Finished commercial core designs still cost money.
</div>

<!--
- RISC-V removes the ISA license and royalty, though companies still pay to design or license finished cores.
- RISC-V has strong adoption in controllers, microcontrollers, storage, and embedded systems; Nvidia ships about one billion RISC-V control cores a year.
- Smartphones and servers remain limited because their software ecosystems favor established architectures.
-->

---

# RISC-V and export controls

<div class="text-3xl mt-14 leading-relaxed text-center">
The RISC-V specification is public and available worldwide.
</div>

<div class="text-sm opacity-60 mt-12 text-center">
RISC-V International moved from the United States to Switzerland in 2019, citing concerns about access restrictions.
</div>

<!--
- The RISC-V specification is public and can be implemented worldwide without a license from one company.
- RISC-V International moved its legal base from the United States to Switzerland in 2019, citing concern that export restrictions could limit collaboration.
- The open specification makes access harder for any government to restrict.
-->

---

# Arm's model is expanding

<div class="border-2 border-gray-400 rounded-lg p-4 mt-6">
  <div class="grid grid-cols-5 gap-4 text-center">
    <div><div class="text-3xl font-bold">$4.92B</div><div class="text-sm opacity-60">revenue FY26 (ended Mar '26)</div></div>
    <div><div class="text-3xl font-bold">$1.29B</div><div class="text-sm opacity-60">revenue Q1 FY27</div></div>
    <div><div class="text-3xl font-bold">&gt;$2B</div><div class="text-sm opacity-60">reported AGI CPU demand, FY27–28</div></div>
    <div><div class="text-xs opacity-50 tracking-widest">ARM MOAT</div><div class="text-xl font-bold leading-tight mt-2">mature mobile software ecosystem</div></div>
    <div><div class="text-xs opacity-50 tracking-widest">RISC-V TRADEOFF</div><div class="text-xl font-bold leading-tight mt-2">open ISA; ecosystem varies by market</div></div>
  </div>
  <div class="text-xs opacity-40 text-right mt-2">as of July 29, 2026</div>
</div>

<div class="text-sm opacity-60 mt-8 text-center">
Customers can now adopt Arm through IP, CSS, or Arm-designed silicon; RISC-V remains strongest in embedded and control roles.
</div>

<!--
- Arm reported $1.29 billion of Q1 FY2027 revenue, up 22 percent year over year.
- Arm said AGI CPU demand exceeded $2 billion across FY2027 and FY2028, with initial products delivered to multiple customers.
- RISC-V offers an open alternative, but its commercial adoption remains concentrated in embedded and control applications.
-->
