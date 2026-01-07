---
layout: ../../layouts/UnitLayout.astro
title: "Ultor"
slug: "leganavymissileship"
shortRole: "Missile Cruiser"
type: "Sea"
image: "/images/units/leganavymissileship.png"
description: |
  The **Ultor** is a Tier 2 missile support ship that pressures surface targets from extreme range with **vertical salvo rockets**, while carrying a dedicated **AA missile launcher** to deter air raids.

  It’s a specialist: keep it behind your frontline and let it rain clustered salvos into chokepoints, shorelines, and slow ships—then reposition before counter-fire arrives.

  **Best used for:** Long-range bombardment, area denial, cracking static positions, supporting pushes from behind the line  
  **Avoid:** Frontline brawls, getting caught by fast raiders, or operating without screens/spotters
metalCost: 2000
energyCost: 10000
buildTime: 15000
health: 3350
sightRange: 318.5
radarRange: 1000
speed: 61.44
weapons: "Vertical Salvo Rocket Launcher + AA Salvo Missiles"
dps: 300
weaponRange: 1550
techLevel: 2
---

# **Tier 2 Missile Support Ship**

**Unit Name:** `leganavymissileship`  
**Role:** Long-Range Bombardment / AA Support  
**Model Author:** ZephyrSkies  
**Subfolder:** `CorShips/T2`  
**Build Picture:** `leganavymissileship.DDS`  

---

## 🧱 **Build Information**

| Attribute | Value |
|----------|-------|
| **Metal Cost** | 2000 |
| **Energy Cost** | 10000 |
| **Build Time** | 15000 |
| **Footprint** | 6×6 |
| **Movement Class** | BOAT5 |
| **Min. Water Depth** | 12 |
| **Floater** | Yes |
| **Speed** | 61.44 |
| **Acceleration / Deceleration** | 0.02799 / 0.03799 |
| **Turn Rate** | 350 |
| **Turn In Place** | Yes (limit 90°) |

---

## ⚙️ **General Stats**

| Attribute | Value |
|----------|-------|
| **Health** | 3350 |
| **Sight Distance** | 318.5 |
| **Radar Distance** | 1000 |
| **Idle Auto-Heal** | 5 HP/s after 1800s |
| **Explosion Type** | `largeexplosiongeneric` |
| **Self-Destruct** | `largeexplosiongenericSelfd` |
| **Corpse** | Wreck + Heap (reclaimable) |
| **Seismic Signature** | 0 |
| **No-Chase Category** | VTOL |
| **Max Range (custom)** | 1650 |

---

## ⚔️ **Weapons**

### **Heavy Long-Range Vertical Salvo Rocket Launcher** (`leg_salvo_vertical_rocket`)

Primary siege weapon that fires upward and descends onto targets, ideal for bombardment and area denial.

- **Type:** Cannon (vertical rocket salvo)  
- **Range:** 1550  
- **Reload Time:** 9s  
- **Burst:** 6  
- **Burst Rate:** 0.12  
- **Spray Angle:** 450  
- **Area of Effect:** 80  
- **Flight Time:** 15  
- **High Trajectory:** Yes  
- **Weapon Velocity:** 450  
- **Weapon Acceleration:** 80  
- **My Gravity:** 0.08  
- **Explosion Effect:** `genericshellexplosion-large-bomb`  
- **Sound Start:** `Rockhvy1`  
- **Sound Hit:** `xplomed4`  
- **Damage:**  
  - Default: 450  
  - Commanders: 300  
- **Custom:**  
  - `noattackrangearc = 1`  
  - `projectile_destruction_method = descend`  
  - `overrange_distance = 3000`

> Equipped as `weapons[1]` and restricted to **SURFACE** targets. Best with spotters and radar intel.

### **Anti-Air Salvo Missile Launcher** (`leg_light_aa_missile`)

Secondary AA launcher that throws burst-tracking missiles to punish aircraft.

- **Type:** Missile Launcher  
- **Range:** 760  
- **Reload Time:** 2.0s  
- **Burst:** 3  
- **Burst Rate:** 0.005  
- **Tracking:** Yes (turn rate 68,000)  
- **Start Velocity:** 800  
- **Weapon Velocity:** 2500  
- **Damage:** VTOL 20  
- **Explosion Effect:** `genericshellexplosion-tiny-aa`  
- **Sound Start:** `packolau`  
- **Sound Hit:** `packohit`  

> Equipped as `weapons[2]` and restricted to **VTOL** targets.

---

## 🛠️ **Wreckage**

### **Dead Wreck**
- **Metal:** 1000  
- **Damage Threshold:** 2700  
- **Footprint:** 6×6  
- **Object:** `leganavymissileship_dead.s3o`  
- **Reclaimable:** Yes  

### **Heap**
- **Metal:** 500  
- **Damage Threshold:** 4032  
- **Object:** `cor6X6B.s3o`  
- **Reclaimable:** Yes  

---

## 💥 **Effects**

- **Explosion Generators:**  
  - `custom:waterwake-medium`  
  - `custom:bowsplash-medium`  

- **Piece Explosion Generators:**  
  - `deathceg2`, `deathceg3`, `deathceg4`

---

## 🔊 **Sounds**

| Event | Sound |
|-------|------|
| Under Attack | `warning1` |
| Cancel Destruct | `cancel2` |
| Cannot Do | `cantdo4` |
| Movement | `shcormov` |
| Selection | `shcorsel` |

---

### **Summary**

A Tier 2 backline specialist that projects pressure far beyond typical naval ranges. The *Valkyrie* wins games by **forcing movement**: saturate shorelines and slow fleets with vertical salvos, stay screened, and let your frontline capitalize while enemies scramble under rocket rain.
