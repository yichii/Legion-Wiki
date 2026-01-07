---
layout: ../../layouts/UnitLayout.astro
title: "Advanced Underwater Geothermal Powerplant"
slug: "leganavaladvgeo"
shortRole: "Produces 1250 Energy (Hazardous)"
type: "Buildings"
image: "/images/units/leganavaladvgeo.png"
description: |
  The **Advanced Underwater Geothermal Powerplant** is a Tier 2 Legion sea-economy structure that provides **massive, stable energy output** from geothermal vents. Designed for late-game naval bases, it supports high-energy demands such as advanced shipyards, experimental units, and heavy weapons.

  **Best used for:** Late-game naval economies, high-energy production chains, fortified sea bases  
  **Avoid:** Building without secure control of the geothermal vent or sufficient defenses
metalCost: 1500
energyCost: 27000
buildTime: 32000
health: 4150
energyProduction: 1250
energyStorage: 12000
sightRange: 273
techLevel: 2
---

# **Advanced Underwater Geothermal Powerplant**

**Unit Name:** `leganavaladvgeo`  
**Role:** Advanced Energy Generator (Naval)  
**Model Authors:** Tharsis, ZephyrSkies  
**Subfolder:** `Legion/SeaEconomy/T2`  
**Build Picture:** `leganavaladvgeo.DDS`

---

## ⚡ **Energy Output**

| Attribute | Value |
|----------|-------|
| **Energy Production** | +1250 |
| **Energy Storage** | +12000 |

---

## 🧱 **Build Information**

| Attribute | Value |
|----------|-------|
| **Metal Cost** | 1500 |
| **Energy Cost** | 27000 |
| **Build Time** | 32000 |
| **Footprint** | 5×5 |
| **Min. Water Depth** | 6 |
| **Max Water Depth** | Unlimited |
| **Max Slope** | 20 |
| **Yardmap** | Geothermal-only |

---

## ⚙️ **General Stats**

| Attribute | Value |
|----------|-------|
| **Health** | 4150 |
| **Sight Distance** | 273 |
| **Idle Auto-Heal** | 5 HP/s after 1800s |
| **Explosion Type** | `customfusionexplo` |
| **Self-Destruct** | `advgeo` |
| **Seismic Signature** | 0 |

---

## 🌋 **Placement Requirements**

- **Geothermal Vent Required**
- **CV-Buildable:** Yes
- **Naval Placement:** Supported (underwater-compatible)

---

## 🎨 **Ground Decal**

- **Enabled:** Yes  
- **Type:** `decals/corageo_aoplane.dds`  
- **Size:** 8×8  
- **Decay Speed:** 30  

---

## 💥 **Effects**

- **Explosion Generators:**  
  - `custom:geobubbles`
- **Piece Explosion Generators:**  
  - `deathceg2`, `deathceg3`, `deathceg4`

---

## 🔊 **Sounds**

| Event | Sound |
|------|------|
| Under Attack | `warning1` |
| Cancel Destruct | `cancel2` |
| Select | `geothrm2` |

---

### **Summary**

The **Advanced Naval Geothermal Plant** is the backbone of a Tier 2 Legion sea economy, delivering enormous, reliable energy output. Protect it well—losing one can cripple late-game production, but securing it enables overwhelming naval and experimental dominance.
