---
layout: default
class: visual-sequence paper-visual
title: "Scale-up and scale-out"
sources: [research/networking.md]
---

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
class: visual-sequence paper-visual
title: "Line rate is a ceiling"
---

<div class="visual-sequence__frame">
  <img src="/diagrams/rendered/networking-throughput.svg" alt="An 800 gigabit per second line rate converts to a 100 gigabyte per second raw ceiling, then narrows qualitatively through protocol overhead, contention, and topology plus software; a separate timeline shows the slowest participant delaying the next step" />
</div>

<!--
- An 800-gigabit-per-second adapter has a raw ceiling of 100 gigabytes per second before protocol overhead.
- Contention, topology, and collective mapping reduce useful throughput; the last participant determines when synchronized work resumes.
- The installed system is complete. Next: where do its dependencies become economic and geopolitical leverage?
-->
