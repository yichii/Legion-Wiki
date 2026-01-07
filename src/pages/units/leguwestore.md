---
layout: ../../layouts/UnitLayout.astro
title: "Naval Energy Storage"
slug: "leguwestore"
shortRole: "Increases Energy Storage (6000)"
type: "Buildings"
image: "/images/units/leguwestore.png"
description: |
  The **Naval Energy Storage** is a high-capacity submerged battery for Legion, letting you bank large amounts of energy safely beneath the waves.

  **Best used for:** Stabilizing sea economies, supporting energy-hungry tech, and buffering burst consumption  
  **Avoid:** Placing in contested water where sonar/scouting can lead to easy pick-offs.
metalCost: 175
energyCost: 1800
buildTime: 4260
health: 2000
energyStorage: 6000
sightRange: 169
techLevel: 1
---

# **Underwater Energy Storage**

**Unit Name:** `leguwestore`  
**Role:** Underwater Energy Storage  
**Model Authors:** Protar, ZephyrSkies  
**Subfolder:** `Legion/SeaEconomy`  
**Build Picture:** `leguwestore.DDS`

---

## ⚡ **Storage**

| Attribute | Value |
|----------|-------|
| **Energy Storage** | 6000 |

---

## 🧱 **Build Information**

| Attribute | Value |
|----------|-------|
| **Metal Cost** | 175 |
| **Energy Cost** | 1800 |
| **Build Time** | 4260 |
| **Footprint** | 4×4 |
| **Min. Water Depth** | 31 |
| **Max Slope** | 20 |
| **Yardmap** | `oooooooooooooooo` |

---

## ⚙️ **General Stats**

| Attribute | Value |
|----------|-------|
| **Health** | 2000 |
| **Sight Distance** | 169 |
| **Idle Auto-Heal** | 5 HP/s after 1800s |
| **Explosion Type** | `largeBuildingExplosionGeneric-uw` |
| **Self-Destruct** | `largeBuildingExplosionGenericSelfd-uw` |
| **Seismic Signature** | 0 |

---

## 🎨 **Ground Decal**

- **Enabled:** Yes (`usebuildinggrounddecal = true`)
- **Type:** `decals/leguwestore_aoplane.dds`
- **Size:** 6×6
- **Decay Speed:** 30

---

## ♻️ **Wreckage**

### Dead (Wreck)
- **Blocking:** Yes  
- **Damage Threshold:** 1825  
- **Metal Reclaim:** 182  
- **Footprint:** 4×4  
- **Object:** `Units/leguwestore_dead.s3o`  
- **Reclaimable:** Yes  

### Heap
- **Blocking:** No  
- **Damage Threshold:** 913  
- **Metal Reclaim:** 73  
- **Footprint:** 4×4  
- **Object:** `Units/cor4X4D.s3o`  
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
| Select | `storngy2` |

---

### **Summary**

`leguwestore` is a durable underwater **energy bank** with **6000 storage**, ideal for smoothing out your naval economy and enabling big energy spikes (advanced production, weapons, or tech). Keep it protected with scouting and sea control—losing stored energy at the wrong moment can be brutal.
