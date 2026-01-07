---
layout: ../../layouts/UnitLayout.astro
title: "Advanced Underwater Metal Extractor"
slug: "leganavalmex"
shortRole: "Advanced Underwater Metal Extractor / Storage"
type: "Buildings"
image: "/images/units/leganavalmex.png"
description: |
  The **Advanced Underwater Metal Extractor** is a Tier 2 Legion underwater resource structure that extracts large amounts of metal from seabed metal spots. It is significantly tougher than T1 extractors and includes internal storage, but consumes energy to operate.

  **Best used for:** Securing high-value underwater metal spots, late-game naval economies  
  **Watch out:** Energy upkeep and large wreck—protect it or reclaim it quickly if destroyed.
metalCost: 640
energyCost: 8100
buildTime: 14100
health: 3900
metalIncome: 4
energyUpkeep: 20
metalStorage: 600
sightRange: 169
techLevel: 2
---

# **Advanced Underwater Metal Extractor**

**Unit Name:** `leganavalmex`  
**Role:** Tier 2 Metal Extractor (Sea)  
**Model Author:** Protar  
**Subfolder:** `Legion/SeaEconomy/T2`  
**Build Picture:** `leganavalmex.DDS`

---

## ⛏️ **Metal Extraction**

| Attribute | Value |
|----------|-------|
| **Metal Extraction Rate** | 4 |
| **Metal Storage** | 600 |
| **Energy Upkeep** | 20 |
| **On/Off Toggle** | Yes |

> Uses `extractsmetal = 0.004` internally (scaled to **4 metal** via `metal_extractor`).

---

## 🧱 **Build Information**

| Attribute | Value |
|----------|-------|
| **Metal Cost** | 640 |
| **Energy Cost** | 8100 |
| **Build Time** | 14100 |
| **Footprint** | 4×4 |
| **Min. Water Depth** | 15 |
| **Max Slope** | 30 |
| **Yardmap** | Custom seabed pattern |

---

## ⚙️ **General Stats**

| Attribute | Value |
|----------|-------|
| **Health** | 3900 |
| **Damage Modifier** | 0.5 (takes reduced damage) |
| **Idle Auto-Heal** | 5 HP/s after 1800s |
| **Sight Distance** | 169 |
| **Explosion Type** | `mediumBuildingexplosiongeneric-uw` |
| **Self-Destruct** | `largeBuildingExplosionGenericSelfd-uw` |
| **Seismic Signature** | 0 |

---

## 🧩 **Visual / Decal**

- **Ground Decal:** `decals/leganavalmex_aoplane.dds`
- **Decal Size:** 7.7 × 7.7
- **Decay Speed:** 30
- **Underwater CV-buildable:** Yes

---

## 📦 **Wreckage**

### **Dead (Wreck)**
- **Blocking:** true  
- **Metal:** 550  
- **Reclaimable:** true  
- **Object:** `Units/leganavalmex_dead.s3o`

### **Heap**
- **Blocking:** false  
- **Metal:** 220  
- **Reclaimable:** true  
- **Object:** `Units/cor5X5C.s3o`

---

## 💥 **Effects**
- **Piece Explosion Generators:** `deathceg2`, `deathceg3`, `deathceg4`

---

## 🔊 **Sounds**
- **Activate / Working / Select:** `waterex2`
- **Deactivate:** `waterex2`
- **Under Attack:** `warning1`
- **Cancel Destruct:** `cancel2`
- **Countdown:** `count6` → `count1`

---

### **Summary**

The **Advanced Naval Metal Extractor** is a cornerstone of late-game sea economy. With high durability, reduced damage taken, and solid storage, it’s ideal for contested underwater metal spots—just make sure your **energy grid can sustain it**.
