---
layout: ../../layouts/UnitLayout.astro
title: "Offshore Geothermal Powerplant"
slug: "leguwgeo"
shortRole: "Produces 300 Energy"
type: "Buildings"
image: "/images/units/leguwgeo.png"
description: |
  The **Offshore Geothermal Powerplant** is a powerful Legion sea-based energy structure that taps geothermal vents beneath the ocean to provide massive, steady energy output.

  **Best used for:** Long-term naval economies, tech-heavy play, and supporting energy-intensive weapons  
  **Avoid:** Building without securing the geothermal spot or leaving it undefended against underwater raids.
metalCost: 540
energyCost: 13000
buildTime: 12900
health: 2050
energyProduction: 300
energyStorage: 1000
sightRange: 273
techLevel: 1
---

# **Offshore Geothermal Powerplant**

**Unit Name:** `leguwgeo`  
**Role:** Sea Energy Production (Geothermal)  
**Model Authors:** Tharsis, ZephyrSkies  
**Subfolder:** `Legion/SeaEconomy`  
**Build Picture:** `leguwgeo.DDS`

---

## 🌋 **Energy Production**

| Attribute | Value |
|----------|-------|
| **Energy Output** | +300 |
| **Energy Storage** | 1000 |
| **Geothermal Required** | Yes |

> Must be built on a valid **underwater geothermal vent**. Cannot be freely placed like tidal generators.

---

## 🧱 **Build Information**

| Attribute | Value |
|----------|-------|
| **Metal Cost** | 540 |
| **Energy Cost** | 13000 |
| **Build Time** | 12900 |
| **Footprint** | 5×5 |
| **Min. Water Depth** | 6 |
| **Max Water Depth** | Unlimited |
| **Max Slope** | 15 |
| **Yardmap** | Custom geothermal footprint |

---

## ⚙️ **General Stats**

| Attribute | Value |
|----------|-------|
| **Health** | 2050 |
| **Sight Distance** | 273 |
| **Idle Auto-Heal** | 5 HP/s after 1800s |
| **Explosion Type** | `geo` |
| **Self-Destruct** | `geo` |
| **Seismic Signature** | 0 |

---

## 🎨 **Ground Decal**

- **Enabled:** Yes  
- **Type:** `decals/corgeo_aoplane.dds`  
- **Size:** 6×6  
- **Decay Speed:** 30  

---

## ♻️ **Wreckage**

### Dead (Wreck)
- **Blocking:** Yes  
- **Metal Reclaim:** 328  
- **Footprint:** 4×4  
- **Reclaimable:** Yes  

### Heap
- **Blocking:** No  
- **Metal Reclaim:** 131  
- **Footprint:** 4×4  
- **Reclaimable:** Yes  
- **Resurrectable:** No  

---

## 💥 **Effects**

- **Explosion Generator:** `custom:geobubbles`  
- **Piece Explosion Generators:**  
  `deathceg2`, `deathceg3`, `deathceg4`

---

## 🔊 **Sounds**

| Event | Sound |
|------|------|
| Under Attack | `warning1` |
| Cancel Destruct | `cancel2` |
| Select | `geothrm2` |

---

### **Summary**

The **Underwater Geothermal Plant** is the backbone of a late-game naval economy. While expensive and location-dependent, its **+300 constant energy output** makes it indispensable for sustaining fleets, shields, and advanced weaponry in prolonged sea engagements.
