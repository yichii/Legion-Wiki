---
layout: ../../layouts/UnitLayout.astro
title: "Offshore Seaplane Platform"
slug: "legsplab"
shortRole: "Constructs Seaplanes"
type: "Factories"
image: "/images/units/legsplab.png"
description: |
  The **Offshore Seaplane Platform** is Legion’s dedicated **seaplane factory**, producing amphibious aircraft that can operate over water and threaten both fleets and coastal positions.

  It requires deep water to deploy and provides strong scouting/utility options (radar + sonar plane) alongside offensive seaplanes like torpedo gunships, bombers, and fighters.

  **Best used for:** Water control support, scouting, anti-sub coverage, and coastal pressure  
  **Avoid:** Building without protection—it's a key tech structure and an easy target if exposed
metalCost: 1400
energyCost: 5500
buildTime: 11800
health: 2200
sightRange: 169
sonarRange: 800
workertime: 200
energyStorage: 200
minWaterDepth: 30
waterline: 0
techLevel: 1
buildPower: 200
---

# **Legion Seaplane Lab**

**Unit Name:** `legsplab`  
**Role:** Seaplane Factory / Air Production (Sea-Based)  
**Model Author:** ZephyrSkies  
**Subfolder:** `Legion/Labs`  
**Build Picture:** `legsplab.DDS`  

---

## 🧱 **Build Information**

| Attribute | Value |
|----------|-------|
| **Metal Cost** | 1400 |
| **Energy Cost** | 5500 |
| **Build Time** | 11800 |
| **Footprint** | 6×6 |
| **Min. Water Depth** | 30 |
| **Waterline** | 0 |
| **Builder** | Yes |
| **Worker Time** | 200 |
| **Terraform Speed** | 1000 |
| **Energy Storage** | 200 |
| **Category** | SURFACE, UNDERWATER |
| **Air Factory** | Yes |

---

## ⚙️ **General Stats**

| Attribute | Value |
|----------|-------|
| **Health** | 2200 |
| **Sight Distance** | 169 |
| **Sonar Distance** | 800 |
| **Idle Auto-Heal** | 5 HP/s after 1800s |
| **Explosion Type** | `largeBuildingexplosiongeneric` |
| **Self-Destruct** | `largeBuildingExplosionGenericSelfd` |
| **Seismic Signature** | 0 |
| **Corpse** | Dead wreck (reclaimable) |

---

## 🏭 **Build Options (Produces)**

This lab can construct the following seaplane units:

- `legspcon`
- `legspsurfacegunship`
- `legspcarrier`
- `legspbomber`
- `legsptorpgunship`
- `legspfighter`
- `legspradarsonarplane`

---

## 🛠️ **Wreckage**

### **Dead Wreck**
- **Metal:** 930  
- **Damage Threshold:** 1200  
- **Footprint:** 7×7  
- **Object:** `legsplab_dead.s3o`  
- **Reclaimable:** Yes  

---

## 💥 **Effects**

- **Piece Explosion Generators:**  
  - `deathceg2`, `deathceg3`, `deathceg4`

---

## 🔊 **Sounds**

| Event | Sound |
|------|------|
| Build | `seaplok2` |
| Under Attack | `warning1` |
| Unit Complete | `untdone` |
| Selection | `seaplsl2` |
| Cancel Destruct | `cancel2` |

---

### **Summary**

A sea-based air factory that unlocks Legion’s seaplane roster—perfect for scouting, harassment, and anti-sub/anti-ship pressure across large water maps.
