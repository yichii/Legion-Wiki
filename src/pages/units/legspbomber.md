---
layout: ../../layouts/UnitLayout.astro
title: "Pyrphoros"
slug: "legspbomber"
shortRole: "Seaplane Bomber"
type: "Air"
image: "/images/units/legspbomber.png"
description: |
  The **Pyrphoros** is a fast Legion sea-plane bomber designed to **saturate surface targets** with bouncing, scatterfire warheads.

  Capable of skimming over water and re-engaging rapidly, it excels at punishing clustered ships, harbors, and shoreline positions before retreating at high speed.

  **Best used for:** Harassing fleets, breaking tight formations, coastal bombardment  
  **Avoid:** Heavy anti-air coverage, prolonged engagements, or isolated bombing runs without support
metalCost: 240
energyCost: 7500
buildTime: 8000
health: 1170
sightRange: 455
speed: 267.3
weapons: "Scatterfire Sea-Plane Bombs"
dps: 150
weaponRange: 1280
techLevel: 1
---

# **Legion Sea-Plane Bomber**

**Unit Name:** `legspbomber`  
**Role:** Fast Bomber / Area Saturation  
**Model Author:** ZephyrSkies  
**Subfolder:** `Legion/SeaPlanes`  
**Build Picture:** `legspbomber.DDS`  

---

## 🧱 **Build Information**

| Attribute | Value |
|----------|-------|
| **Metal Cost** | 240 |
| **Energy Cost** | 7500 |
| **Build Time** | 8000 |
| **Footprint** | 3×3 |
| **Movement Type** | VTOL / Sea-Plane |
| **Cruise Altitude** | 210 |
| **Speed** | 267.3 |
| **Acceleration / Deceleration** | 0.06 / 0.045 |
| **Turn Radius** | 64 |
| **Water Capable** | Yes (can skim & submerge) |

---

## ⚙️ **General Stats**

| Attribute | Value |
|----------|-------|
| **Health** | 1170 |
| **Sight Distance** | 455 |
| **Idle Auto-Heal** | 5 HP/s after 1800s |
| **Explosion Type** | `mediumexplosiongeneric` |
| **Self-Destruct** | `mediumExplosionGenericSelfd` |
| **Seismic Signature** | 0 |
| **No-Chase Category** | VTOL |

---

## ✈️ **Flight Characteristics**

- **High Speed Strike Craft**
- Designed for **hit-and-run bombing**
- Uses smooth mesh aerodynamics
- Optimized for water interaction (bouncing munitions)

---

## ⚔️ **Weapons**

### **Advanced Scatterfire Warheads** (`leg_seaplane_bomb`)

A cluster of bouncing bombs that spread across the impact zone, ideal for breaking up formations and saturating decks.

- **Type:** Aircraft Bomb  
- **Range:** 1280  
- **Reload Time:** 8s  
- **Burst:** 3  
- **Projectiles:** 8 per release  
- **Area of Effect:** 100  
- **Bounce Count:** 3  
- **Water Bounce:** Yes  
- **Gravity Affected:** Yes  
- **Damage:**  
  - Default: 50 per projectile  
- **Explosion Effect:** `genericshellexplosion-small-bomb`  
- **Sound Start:** `bombrel`  
- **Sound Hit:** `bombsmed2`  

> Equipped as `weapons[1]`. Restricted to **NOTSUB** targets and ineffective against aircraft.

---

## 💥 **Effects**

- **Crash Explosion Generators:**  
  - `crashing-small`  
  - `crashing-small2`  
  - `crashing-small3`  

- **Piece Explosion Generators:**  
  - `airdeathceg2`, `airdeathceg3`, `airdeathceg4`

---

## 🔊 **Sounds**

| Event | Sound |
|------|------|
| Under Attack | `warning1` |
| Movement | `vtolcrmv` |
| Selection | `seapsel1` |
| Bomb Release | `bombrel` |
| Cancel Destruct | `cancel2` |

---

### **Summary**

A fast, disposable **sea-plane bomber** built to punish tightly packed naval targets. The *Skimmer* thrives on speed and chaos—strike quickly, scatter the enemy formation with bouncing warheads, and disengage before anti-air can respond.
