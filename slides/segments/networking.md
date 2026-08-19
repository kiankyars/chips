---
layout: default
class: visual-sequence paper-visual
title: "Scale-up and scale-out"
---

<!-- SEGMENT
id: networking
act: V — Memory, Packaging & Networking
tier: P-lite
angle: "Packaging creates one accelerator. The network turns many accelerators into one computer."
runtime: ~4 min
status: draft
seeds: []
pays_off: []
stamps: []
diagrams: [networking-scale, networking-allreduce, networking-path]
sources: research/networking.md
-->

<div class="visual-sequence__frame">
  <img src="/diagrams/rendered/networking-scale.svg" alt="NVLink and NVSwitch connect GPUs inside one rack while SuperNICs and a leaf-spine fabric connect complete racks" />
</div>

<!--
- A GB300 NVL72 rack joins 72 GPUs through NVLink and nine NVSwitch trays: 1.8 terabytes per second bidirectional per GPU and 130 terabytes per second aggregate.
- Scale-out starts at the server network adapter and crosses a packet-switched fabric to other racks.
- UALink targets the open scale-up layer; Ultra Ethernet targets the open Ethernet-based scale-out layer.
-->

---
class: visual-sequence paper-visual
title: "All-reduce"
---

<div class="visual-sequence__frame">
  <img src="/diagrams/rendered/networking-allreduce.svg" alt="Reduce-scatter leaves one summed gradient shard on each GPU before all-gather gives every GPU the same complete sum" />
</div>

<!--
- In data-parallel training, each GPU computes gradients from a different batch of examples.
- Reduce-scatter first leaves one summed shard on each participant; all-gather then gives every GPU the complete summed array.
- NCCL maps those phases onto rings, trees, and topology-aware routes, and slow communication can stall the next compute phase.
-->

---
class: visual-sequence paper-visual
title: "The networking data path"
---

<div class="visual-sequence__frame">
  <img src="/diagrams/rendered/networking-path.svg" alt="A payload moves symmetrically from source GPU memory through SuperNICs and a leaf-spine fabric to destination GPU memory while optical links carry the long reach and GPUDirect RDMA avoids host-memory copies" />
</div>

<!--
- Each NIC or SuperNIC is a server endpoint; GPUDirect RDMA lets both endpoints access GPU memory without copying the payload through host memory.
- Leaf and spine switches forward packets across the fabric, while optics are links that carry the bits over longer reaches.
- A DPU is different: it offloads infrastructure services such as storage, security, virtualization, and management.
-->

---

# Line rate is a ceiling, not training throughput

<div class="flex items-center gap-4 mt-5 text-center">
  <div class="flex-1 rounded-xl border-2 border-emerald-400/60 bg-emerald-400/10 px-5 py-4">
    <div class="text-sm tracking-widest opacity-60">ADAPTER LINE RATE</div>
    <div class="text-3xl font-bold mt-1">800 Gb/s</div>
  </div>
  <div class="text-3xl opacity-50">÷ 8</div>
  <div class="flex-1 rounded-xl border-2 border-blue-400/60 bg-blue-400/10 px-5 py-4">
    <div class="text-sm tracking-widest opacity-60">RAW BYTE RATE</div>
    <div class="text-3xl font-bold mt-1">100 GB/s</div>
    <div class="text-sm opacity-55 mt-1">before overhead</div>
  </div>
</div>

<div class="flex items-stretch gap-4 mt-5">
  <div class="w-[21%] rounded-xl bg-white/8 px-5 py-4 flex flex-col justify-center">
    <div class="text-sm tracking-widest opacity-60">RAW CEILING</div>
    <div class="text-2xl font-bold mt-2">100 GB/s</div>
  </div>
  <div class="flex items-center text-3xl opacity-50">→</div>
  <div class="flex-1 rounded-xl border border-white/15 bg-white/5 p-4 text-center">
    <div class="text-sm tracking-widest opacity-60">WHAT REDUCES USEFUL RATE</div>
    <div class="grid grid-cols-3 gap-3 mt-3">
      <div class="min-w-0 rounded-lg bg-rose-400/8 px-2 py-3"><div class="text-base leading-tight font-bold text-rose-300">Protocol overhead</div><div class="text-xs opacity-55 mt-1">headers + encoding</div></div>
      <div class="min-w-0 rounded-lg bg-amber-400/8 px-2 py-3"><div class="text-base leading-tight font-bold text-amber-300">Contention</div><div class="text-xs opacity-55 mt-1">shared paths</div></div>
      <div class="min-w-0 rounded-lg bg-violet-400/8 px-2 py-3"><div class="text-base leading-tight font-bold text-violet-300">Topology + software</div><div class="text-xs opacity-55 mt-1">hops + collective mapping</div></div>
    </div>
  </div>
  <div class="flex items-center text-3xl opacity-50">→</div>
  <div class="w-[24%] rounded-xl border-2 border-rose-400/60 bg-rose-400/10 px-5 py-4 flex flex-col justify-center">
    <div class="text-sm tracking-widest opacity-60">USEFUL COLLECTIVE THROUGHPUT</div>
    <div class="text-xl font-bold mt-2">less than line rate</div>
  </div>
</div>

<div class="mt-5 border-t border-white/15 pt-4 text-center text-lg">
  <span class="font-bold text-blue-300">Latency:</span>
  <span class="opacity-75 ml-2">a synchronized step resumes only after the last participant finishes.</span>
</div>

<!--
- An 800-gigabit-per-second adapter has a raw ceiling of 100 gigabytes per second before protocol overhead.
- Contention, topology, and collective mapping reduce useful throughput; the last participant determines when synchronized work resumes.
- The installed system is complete. Next: where do its dependencies become economic and geopolitical leverage?
-->
