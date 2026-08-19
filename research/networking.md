# Research — AI accelerator networking

As-of: 2026-08-18

Fact pack for the networking segment. The teaching goal is to distinguish the
communication scopes inside an AI system, explain why collective operations
make the network part of the workload, and identify the hardware in the data
path without turning the course into a protocol survey.

## The hierarchy

- **Inside one GPU:** HBM feeds the compute dies. This is memory bandwidth, not
  a data-center network.
- **Scale-up:** a tightly coupled accelerator fabric joins GPUs inside a system
  or rack. In GB300 NVL72, fifth-generation NVLink and nine NVSwitch trays join
  72 GPUs into one non-blocking domain with **1.8 TB/s bidirectional bandwidth
  per GPU** and **130 TB/s aggregate bandwidth**. [1][2]
- **Scale-out:** NICs and packet switches connect multiple servers or racks.
  Current GB300 reference designs use ConnectX-8 adapters with Spectrum-X
  Ethernet; NVIDIA also supports Quantum-X800 InfiniBand. ConnectX-8 is rated
  for **up to 800 Gb/s total network bandwidth**. [2][3]
- Do not compare 1.8 TB/s NVLink and 800 Gb/s ConnectX-8 as if they were the
  same measurement. They cover different scopes and use different units.
  **800 Gb/s = 100 GB/s** before protocol overhead.
- The open-standard alternatives follow the same conceptual split: UALink is a
  scale-up accelerator interconnect; Ultra Ethernet is an Ethernet-based
  scale-out communication stack for AI and HPC. [7][8]

## Why the network is part of the algorithm

- Distributed training alternates between computation and communication.
  GPUs exchange parameters, gradients, activations, or tokens depending on the
  parallelization strategy.
- **All-reduce** takes one array from every participating GPU, applies a
  reduction such as sum, and leaves an identical result on every GPU. [4]
- Other common collectives include all-gather, reduce-scatter, broadcast, and
  all-to-all. NCCL selects algorithms and routes across NVLink, PCIe, and the
  scale-out network. [4]
- The next compute phase may wait for the collective to finish. The slowest
  message therefore affects job completion time, making tail latency,
  congestion, and topology important alongside headline link bandwidth. [8]

## The physical path

- A **NIC / SuperNIC** is the server endpoint on the compute network. It moves
  data between the host or GPU and the network and implements transports such
  as InfiniBand or RDMA over Ethernet. ConnectX-8 supports both Ethernet and
  InfiniBand products at up to 800 Gb/s. [3][9]
- **GPUDirect RDMA** lets a compatible NIC access GPU memory directly instead
  of staging the payload through CPU host memory. This reduces CPU work and
  avoids the host-memory bounce buffer. [5]
- A **switch** forwards traffic between endpoints. Large AI fabrics commonly
  use leaf-spine or fat-tree topologies to provide multiple short paths and
  high bisection bandwidth. NVIDIA's GB300 reference architecture uses a
  non-blocking, rail-optimized leaf-spine compute fabric. [6]
- **SerDes, electrical cables, optical transceivers, and fiber** carry bits
  between the NICs and switches. Copper dominates short reaches; optics becomes
  necessary as distance and bandwidth rise.
- A **DPU** is not simply a faster NIC. It runs infrastructure services such as
  storage, security, virtualization, and management so those tasks do not
  consume the host CPU. The GB300 reference design uses ConnectX-8 for GPU
  east-west compute traffic and BlueField-3 DPUs for storage and north-south
  infrastructure traffic. [1][6]

## Four performance questions

1. **Bandwidth:** how many bits or bytes can move each second?
2. **Latency:** how long before a transfer or collective makes progress?
3. **Contention and tail latency:** what happens when many GPUs use the same
   links simultaneously, and how late is the last message?
4. **Topology and software:** how many hops and alternative paths exist, and
   does the collective library map traffic efficiently onto them?

## Sources

1. NVIDIA Enterprise Reference Architecture, "System Hardware & Components —
   NVIDIA NVL72 AI Factory" — https://docs.nvidia.com/enterprise-reference-architectures/nvl72-ai-factory/latest/components.html
2. NVIDIA Technical Blog, "Setting a World Record for MoE Pre-Training on
   NVIDIA GB300 NVL72" (2026-07-21) — https://developer.nvidia.com/blog/setting-a-world-record-for-moe-pre-training-on-nvidia-gb300-nvl72/
3. NVIDIA, "High-Performance AI Networking — Ethernet SuperNICs" —
   https://www.nvidia.com/en-us/networking/products/ethernet/supernic/
4. NVIDIA NCCL Documentation, "Collective Communication Functions" —
   https://docs.nvidia.com/deeplearning/nccl/archives/nccl_278/user-guide/docs/api/colls.html
5. NVIDIA CUDA Documentation, "GPUDirect RDMA" —
   https://docs.nvidia.com/cuda/gpudirect-rdma/
6. NVIDIA Enterprise Reference Architecture, "Networking Physical Topologies" —
   https://docs.nvidia.com/enterprise-reference-architectures/nvl72-ai-factory/latest/networking-physical-topologies.html
7. UALink Consortium, "UALink Specifications" —
   https://ualinkconsortium.org/specification/
8. Ultra Ethernet Consortium, "Overview of and Motivation for the Ultra
   Ethernet Consortium Specification" —
   https://ultraethernet.org/wp-content/uploads/sites/20/2023/10/23.07.12-UEC-1.0-Overview-FINAL-WITH-LOGO.pdf
9. NVIDIA, "InfiniBand Adapters — ConnectX-8" —
   https://www.nvidia.com/en-us/networking/infiniband-adapters/
