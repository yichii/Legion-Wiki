---
layout: ../../layouts/UnitLayout.astro
title: "Tidal Generator"
slug: "legtide"
shortRole: "Produces Energy (depends on map)"
type: "Sea Structure"
image: "/images/units/legtide.png"
description: |
  The **Tidal Generator** is a Legion sea-based energy structure that produces energy when placed in sufficiently deep water.

  **Best used for:** Early-game sea energy production on water maps  
  **Avoid:** Shallow water or forward positions where it can be easily destroyed.
metalCost: 85
energyCost: 250
buildTime: 2100
health: 395
sightRange: 130
techLevel: 1
---

# **Tidal Generator**

**Unit Name:** `legtide`  
**Role:** Sea Energy Production  
**Model Author:** Mr Bob  
**Subfolder:** `Legion/SeaEconomy`  
**Build Picture:** `LEGTIDE.DDS`

---

## ⚡ **Energy Production**

- **Tidal Generator:** Yes  
- Produces energy automatically when placed in water  
- Requires **minimum water depth of 20**

---

## 🧱 **Build Information**

| Attribute | Value |
|----------|-------|
| **Metal Cost** | 85 |
| **Energy Cost** | 250 |
| **Build Time** | 2100 |
| **Footprint** | 3×3 |
| **Min. Water Depth** | 20 |
| **Max Slope** | 10 |
| **Energy Storage** | 50 |
| **Yardmap** | `wwwwwwwww` |

---

## ⚙️ **General Stats**

| Attribute | Value |
|----------|-------|
| **Health** | 395 |
| **Sight Distance** | 130 |
| **Idle Auto-Heal** | 5 HP/s after 1800s |
| **Explosion Type** | `tidal` |
| **Self-Destruct** | `tidalSelfd` |
| **Seismic Signature** | 0 |
| **Waterline** | 7 |

---

## ♻️ **Wreckage**

### Dead
- **Metal Reclaim:** 53  
- **Footprint:** 4×4  
- **Reclaimable:** Yes  

### Heap
- **Metal Reclaim:** 17  
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
| Select | `tidegen2` |

---

### **Summary**

The **Tidal Generator** is a cheap and reliable source of early-game energy for Legion on naval maps. While fragile, its low cost and simple requirements make it an essential first-step economy structure in water-based expansions.
