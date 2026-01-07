---
layout: ../../layouts/UnitLayout.astro
title: "Naval Fusion Reactor"
slug: "leganavalfusion"
shortRole: "Produces 1200 Energy"
type: "Buildings"
image: "/images/units/leganavalfusion.png"
description: |
  The **Naval Fusion Reactor** is a Tier 2 Legion sea-economy power plant that provides massive energy income and storage for advanced naval bases. It’s the backbone of late-game sea production and supports energy-hungry systems like shields, heavy weapons, and metal conversion.

  **Best used for:** Late-game naval eco, powering high-tech fleets, running converters/shields  
  **Watch out:** Huge explosion on death—protect it well and avoid stacking them too tightly.
metalCost: 5400
energyCost: 34000
buildTime: 105000
energyIncome: 1220
energyStorage: 2500
health: 5900
sightRange: 143
techLevel: 2
---

# **Naval Fusion Reactor**

**Unit Name:** `leganavalfusion`  
**Role:** Tier 2 Energy Generator (Sea)  
**Model Author:** Protar  
**Subfolder:** `Legion/SeaEconomy/T2`  
**Build Picture:** `leganavalfusion.DDS`

---

## ⚡ **Energy Stats**

| Attribute | Value |
|----------|-------|
| **Energy Production** | 1220 |
| **Energy Storage** | 2500 |

---

## 🧱 **Build Information**

| Attribute | Value |
|----------|-------|
| **Metal Cost** | 5400 |
| **Energy Cost** | 34000 |
| **Build Time** | 105000 |
| **Footprint** | 6×5 |
| **Min. Water Depth** | 25 |
| **Max Slope** | 16 |
| **Yardmap** | `oooooo / oooooo / oooooo / oooooo / oooooo` |

---

## ⚙️ **General Stats**

| Attribute | Value |
|----------|-------|
| **Health** | 5900 |
| **Sight Distance** | 143 |
| **Hide Damage** | Yes (`hidedamage = true`) |
| **Idle Auto-Heal** | 5 HP/s after 1800s |
| **Explosion Type** | `fusionExplosion-uw` |
| **Self-Destruct** | `fusionExplosionSelfd-uw` |
| **Seismic Signature** | 0 |

---

## 🧩 **Visual / Decal**

- Uses a ground decal underwater:
  - **Decal Type:** `decals/leganavalfusion_aoplane.dds`
  - **Decal Size:** 8×8
  - **Decay Speed:** 30
  - **usebuildinggrounddecal:** true

---

## 📦 **Wreckage**

### **Dead (Wreck)**
- **Blocking:** true  
- **Damage (wreck HP):** 3210  
- **Metal:** 3099  
- **Reclaimable:** true  
- **Object:** `Units/leganavalfusion_dead.s3o`

### **Heap**
- **Blocking:** false  
- **Damage (heap HP):** 1605  
- **Metal:** 1240  
- **Reclaimable:** true  
- **Object:** `Units/cor5X5A.s3o`

---

## 💥 **Effects**
- **Explosion Generators:** `custom:subbubbles`
- **Piece Explosion Generators:** `deathceg2`, `deathceg3`, `deathceg4`

---

## 🔊 **Sounds**
- **Select:** `watfusn2`
- **Under Attack:** `warning1`
- **Cancel Destruct:** `cancel2`
- **Countdown:** `count6` → `count1`

---

### **Summary**

The **Naval Fusion Reactor** is your Tier 2 sea “big power” structure—high output, good storage, and essential for late-game naval tech. Just treat it like a bomb: **guard it, spread them out, and don’t let subs slip in.**
