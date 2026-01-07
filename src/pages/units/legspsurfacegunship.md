---
layout: ../../layouts/UnitLayout.astro
title: "Enyo"
slug: "legspsurfacegunship"
shortRole: "Riot Cannon Seaplane Gunship"
type: "Air"
image: "/images/units/legspsurfacegunship.png"
description: |
  The **Enyo** is a Legion hover-capable sea-plane gunship designed for **surface suppression** and **area control**.

  Its riot cannon delivers large splash blasts that punish clusters of units, defend beaches, and disrupt pushes—especially around chokepoints and shorelines.

  **Best used for:** Shoreline defense, breaking infantry/bot clumps, supporting naval landings, area denial  
  **Avoid:** Fighting dedicated AA, chasing fast VTOLs, or trading into heavy long-range anti-air
metalCost: 270
energyCost: 6700
buildTime: 10000
health: 1200
sightRange: 595
speed: 148
weapons: "Area Control Riot Cannon"
dps: 57
weaponRange: 400
techLevel: 1
---

# **Legion Surface Gunship (Sea-Plane)**

**Unit Name:** `legspsurfacegunship`  
**Role:** Surface Suppression / Area Control  
**Model Author:** ZephyrSkies  
**Subfolder:** `Legion/SeaPlanes`  
**Build Picture:** `legspsurfacegunship.DDS`  

---

## 🧱 **Build Information**

| Attribute | Value |
|----------|-------|
| **Metal Cost** | 270 |
| **Energy Cost** | 6700 |
| **Build Time** | 10000 |
| **Footprint** | 3×3 |
| **Movement Type** | VTOL / Sea-Plane (hover attack) |
| **Cruise Altitude** | 85 |
| **Hover Attack** | Yes |
| **Speed** | 148 |
| **Acceleration / Deceleration** | 0.17 / 0.38 |
| **Turn Rate** | 720 |
| **Turn In Place** | Yes (360° limit) |
| **Blocking** | No |
| **Water Capable** | Yes (can skim & submerge) |

---

## ⚙️ **General Stats**

| Attribute | Value |
|----------|-------|
| **Health** | 1200 |
| **Sight Distance** | 595 |
| **Idle Auto-Heal** | 5 HP/s after 1800s |
| **Explosion Type** | `mediumexplosiongeneric` |
| **Self-Destruct** | `mediumExplosionGenericSelfd` |
| **Seismic Signature** | 0 |
| **No-Chase Category** | VTOL |

---

## ⚔️ **Weapons**

### **Area Control Riot Cannon** (`leg_riot_cannon`)

- **Type:** Cannon  
- **Range:** 400  
- **Reload Time:** 3.5s  
- **Area of Effect:** 140  
- **Edge Effectiveness:** 0.9  
- **Weapon Velocity:** 600  
- **Impulse Factor:** 2.0  
- **Damage:**  
  - Default: 200  
  - Subs: 45  
  - VTOL: 10  
- **Explosion Effect:** `genericshellexplosion-large`  
- **Sound Start:** `largegun`  
- **Sound Hit:** `corlevlrhit`

> Equipped as `weapons[1]`, restricted to **SURFACE** targets.

---

## 💥 **Effects**

- **Explosion Generators:**  
  - `custom:barrelshot-small`

- **Crash Explosion Generators:**  
  - `crashing-small`, `crashing-small2`, `crashing-small3`

- **Piece Explosion Generators:**  
  - `airdeathceg2`, `airdeathceg3`, `airdeathceg4`

---

## 🔊 **Sounds**

| Event | Sound |
|------|------|
| Under Attack | `warning1` |
| Selection | `seapsel1` |
| Movement | `vtolcrmv` |
| Cancel Destruct | `cancel2` |

---

### **Summary**

A mid-cost hover gunship that wins fights by **denying space**. The *Whitecap* punishes clumps with heavy splash blasts and supports naval landings—but needs AA cover to survive near enemy air defenses.
