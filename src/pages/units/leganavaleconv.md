---
layout: ../../layouts/UnitLayout.astro
title: "Naval Advanced Energy Converter"
slug: "leganavaleconv"
shortRole: "Converts 600 energy into 10.3 metal per sec"
type: "Buildings"
image: "/images/units/leganavaleconv.png"
description: |
  The **Naval Advanced Energy Converter** is a Tier 2 Legion sea-economy structure that converts energy into metal at a high capacity and efficiency. It’s meant for late-game naval economies where your energy income can sustain continuous conversion without stalling production.

  **Best used for:** Late-game eco scaling, excess energy conversion, naval bases  
  **Avoid:** Running it when your energy income is unstable (it can stall your economy hard).
metalCost: 370
energyCost: 21000
buildTime: 31300
health: 560
sightRange: 143
techLevel: 2
---

# **Naval Advanced Energy Converter**

**Unit Name:** `leganavaleconv`  
**Role:** Tier 2 Energy → Metal Converter (Sea)  
**Model Authors:** Protar, ZephyrSkies  
**Subfolder:** `Legion/SeaEconomy/T2`  
**Build Picture:** `leganavaleconv.DDS`

---

## ♻️ **Conversion Stats**

| Attribute | Value |
|----------|-------|
| **Conversion Capacity** | 600 |
| **Conversion Efficiency** | 0.01724 |

> These values live in `customparams` and define how much energy it can process and how efficiently it converts into metal.

---

## 🧱 **Build Information**

| Attribute | Value |
|----------|-------|
| **Metal Cost** | 370 |
| **Energy Cost** | 21000 |
| **Build Time** | 31300 |
| **Footprint** | 5×5 |
| **Min. Water Depth** | 15 |
| **Max Slope** | 16 |
| **Floater** | Yes |
| **Yardmap** | `ooooooooooooooooooooooooo` |

---

## ⚙️ **General Stats**

| Attribute | Value |
|----------|-------|
| **Health** | 560 |
| **Sight Distance** | 143 |
| **Idle Auto-Heal** | 5 HP/s after 1800s |
| **Explosion Type** | `hugeBuildingExplosionGeneric` |
| **Self-Destruct** | `hugeBuildingExplosionGenericSelfd` |
| **Seismic Signature** | 0 |

---

## 📦 **Wreckage**

### **Dead (Wreck)**
- **Blocking:** true  
- **Metal:** 242  
- **Reclaimable:** true  
- **Object:** `Units/leganavaleconv_dead.s3o`

### **Heap**
- **Blocking:** false  
- **Metal:** 97  
- **Reclaimable:** true  
- **Object:** `Units/cor5X5A.s3o`

---

## 💥 **Effects**
- **Piece Explosion Generators:** `deathceg2`, `deathceg3`, `deathceg4`

---

## 🔊 **Sounds**

| Event | Sound |
|------|------|
| Activate | `metlon2` |
| Deactivate | `metloff2` |
| Working | `metlrun2` |
| Under Attack | `warning1` |
| Cancel Destruct | `cancel2` |
| Select | `metlon2` |

---

### **Summary**

The **Advanced Naval Energy Converter** is a late-game sea economy tool for turning excess energy into metal. Keep it **toggle-managed** (or only run it when you’re floating energy) so it doesn’t stall your production.
