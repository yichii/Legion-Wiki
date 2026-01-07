---
layout: ../../layouts/UnitLayout.astro
title: "Naval Metal Storage"
slug: "leguwmstore"
shortRole: "Increases Metal Storage (3000)"
type: "Sea Structure"
image: "/images/units/leguwmstore.png"
description: |
  The **Naval Metal Storage** is a Legion sea-economy structure that provides a large **metal storage buffer** underwater. Useful for stabilizing income during reclaim spikes, preventing overflow, and supporting high-throughput production.

  **Best used for:** Naval eco scaling, underwater bases, long games where storage matters  
  **Avoid:** Building too early if you need immediate production instead of storage.
metalCost: 340
energyCost: 590
buildTime: 2920
health: 2100
metalStorage: 3000
sightRange: 169
techLevel: 1
---

# **Naval Metal Storage**

**Unit Name:** `leguwmstore`  
**Role:** Metal Storage (Underwater)  
**Model Authors:** Protar, ZephyrSkies  
**Subfolder:** `Legion/SeaEconomy`  
**Build Picture:** `leguwmstore.DDS`

---

## 🪙 **Storage**

| Attribute | Value |
|----------|-------|
| **Metal Storage** | +3000 |

---

## 🧱 **Build Information**

| Attribute | Value |
|----------|-------|
| **Metal Cost** | 340 |
| **Energy Cost** | 590 |
| **Build Time** | 2920 |
| **Footprint** | 4×4 |
| **Min. Water Depth** | 40 |
| **Max Slope** | 20 |
| **Yardmap** | `oooooooooooooooo` |

---

## ⚙️ **General Stats**

| Attribute | Value |
|----------|-------|
| **Health** | 2100 |
| **Sight Distance** | 169 |
| **Idle Auto-Heal** | 5 HP/s after 1800s |
| **Explosion Type** | `largeBuildingexplosiongeneric-uw` |
| **Self-Destruct** | `largeBuildingExplosionGenericSelfd-uw` |
| **Seismic Signature** | 0 |

---

## 🎨 **Ground Decal**

- **Enabled:** Yes  
- **Type:** `decals/leguwmstore_aoplane.dds`  
- **Size:** 6×6  
- **Decay Speed:** 30  

---

## ♻️ **Wreckage**

### Dead (Wreck)
- **Blocking:** Yes  
- **Metal Reclaim:** 228  
- **Footprint:** 4×4  
- **Reclaimable:** Yes  

### Heap
- **Blocking:** No  
- **Metal Reclaim:** 91  
- **Footprint:** 4×4  
- **Reclaimable:** Yes  
- **Resurrectable:** No  

---

## 💥 **Effects**

- **Piece Explosion Generators:**  
  `deathceg2`, `deathceg3`, `deathceg4`

---

## 🔊 **Sounds**

| Event | Sound |
|------|------|
| Under Attack | `warning1` |
| Cancel Destruct | `cancel2` |
| Select | `stormtl2` |

---

### **Summary**

The **Underwater Metal Storage** gives your naval economy a huge **+3000 metal capacity**, helping you avoid overflow and smooth out production during reclaim/assist spikes—especially valuable for underwater-heavy play where protecting eco structures is easier.
