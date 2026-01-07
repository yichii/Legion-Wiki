---
layout: ../../layouts/UnitLayout.astro
title: "Naval Energy Converter"
slug: "legfeconv"
shortRole: "Converts 70 energy into 1 metal per second"
type: "Sea"
image: "/images/units/legfeconv.png"
description: |
  The **Naval Energy Converter** is a small Legion sea economy structure that converts excess energy into metal.

  **Best used for:** Turning surplus energy into steady metal income (especially on water-heavy maps)  
  **Avoid:** Building it too early without strong energy production, or leaving it exposed near the front line.
metalCost: 1
energyCost: 1250
buildTime: 2680
health: 167
sightRange: 273
techLevel: 1
---

# **Floating Energy Converter**

**Unit Name:** `legfeconv`  
**Role:** Sea Economy (Energy → Metal)  
**Model Authors:** Protar, ZephyrSkies  
**Subfolder:** `Legion/SeaEconomy`  
**Build Picture:** `legfeconv.DDS`

---

## 🧱 **Build Information**

| Attribute | Value |
|----------|-------|
| **Metal Cost** | 1 |
| **Energy Cost** | 1250 |
| **Build Time** | 2680 |
| **Footprint** | 3×3 |
| **Min. Water Depth** | 11 |
| **Yardmap** | `wwwwwwwww` |
| **Max Slope** | 10 |

---

## ⚙️ **General Stats**

| Attribute | Value |
|----------|-------|
| **Health** | 167 |
| **Sight Distance** | 273 |
| **Idle Auto-Heal** | 5 HP/s after 1800s |
| **Explosion Type** | `largeBuildingExplosionGeneric` |
| **Self-Destruct** | `largeBuildingExplosionGenericSelfd` |
| **Seismic Signature** | 0 |

---

## 💱 **Energy Conversion**

| Attribute | Value |
|----------|-------|
| **Conversion Capacity** | 70 |
| **Conversion Efficiency** | 0.01429 |

> These values come from `customparams` and define how much energy the converter can process and its conversion rate.

---

## 💥 **Effects**

- **Piece Explosion Generators:** `deathceg2`, `deathceg3`, `deathceg4`

---

## 🔊 **Sounds**

| Event | Sound |
|------|------|
| Activate | `arm-bld-mm-activate` |
| Deactivate | `arm-bld-mm-deactivate` |
| Working | `arm-bld-metalmaker` |
| Under Attack | `warning1` |
| Cancel Destruct | `cancel2` |
| Select | `metlon2` |

---

### **Summary**

A compact **floating metal maker** for Legion that helps stabilize your economy by converting extra energy into metal. Best placed behind defenses on water maps once your energy income is strong enough to sustain conversion.
