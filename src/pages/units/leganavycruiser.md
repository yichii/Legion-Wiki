---
layout: ../../layouts/UnitLayout.astro
title: "Thalassa"
slug: "leganavycruiser"
shortRole: "Gatling Gun Cruiser"
type: "Sea"
image: "/images/units/leganavycruiser.png"
description: |
  The **Thalassa** is a Tier 2 Legion cruiser built to dominate contested waters by combining **surface fire support** with reliable **anti-submarine warfare**.

  Its rapid-fire deck guns pressure ships and shoreline targets while a dedicated depthcharge launcher hunts submarines within its sonar envelope—making it an excellent escort for artillery ships and capital hulls.

  **Best used for:** Escorting valuable ships, clearing subs, holding sonar-controlled sea lanes  
  **Avoid:** Solo pushes into heavy surface firepower or getting kited by long-range siege ships
metalCost: 900
energyCost: 10800
buildTime: 15500
health: 5600
sightRange: 600
sonarRange: 375
speed: 57
weapons: "Rapid-Fire Deck Guns + Depthcharge Launcher"
dps: 60
weaponRange: 600
techLevel: 2
---

# **Tier 2 Naval Cruiser**

**Unit Name:** `leganavycruiser`  
**Role:** Anti-Sub Escort / Surface Support  
**Model Author:** ZephyrSkies  
**Subfolder:** `Legion/Ships/T2`  
**Build Picture:** `leganavycruiser.DDS`  

---

## 🧱 **Build Information**

| Attribute | Value |
|----------|-------|
| **Metal Cost** | 900 |
| **Energy Cost** | 10800 |
| **Build Time** | 15500 |
| **Footprint** | 5×5 |
| **Movement Class** | BOAT5 |
| **Min. Water Depth** | 30 |
| **Floater** | Yes |
| **Speed** | 57 |
| **Acceleration / Deceleration** | 0.028 / 0.028 |
| **Turn Rate** | 270 |
| **Turn In Place** | Yes (limit 90°) |

---

## ⚙️ **General Stats**

| Attribute | Value |
|----------|-------|
| **Health** | 5600 |
| **Sight Distance** | 600 |
| **Sonar Distance** | 375 |
| **Idle Auto-Heal** | 5 HP/s after 1800s |
| **Explosion Type** | `largeexplosiongeneric` |
| **Self-Destruct** | `largeexplosiongenericSelfd` |
| **Corpse** | Wreck + Heap (reclaimable) |
| **Seismic Signature** | 0 |
| **No-Chase Category** | VTOL |

---

## ⚔️ **Weapons**

### **Twin Rapid-fire Machine Guns** (`mg_guns`)

Primary surface weapon providing steady pressure and excellent consistency at mid range.

- **Type:** Laser Cannon (rapid-fire)  
- **Range:** 450  
- **Reload Time:** 0.4s  
- **Burst:** 6  
- **Burst Rate:** 0.066  
- **Area of Effect:** 32  
- **Spray Angle:** 1024  
- **Turret:** Yes  
- **Weapon Velocity:** 958  
- **Damage:** Default 24  
- **Explosion Effect:** `plasmahit-sparkonly`  
- **Sound Start:** `mgun12`  
- **Sound Hit:** `bimpact3`  

> Equipped as `weapons[1]` and restricted to **SURFACE** targets.

### **Medium Depthcharge Launcher** (`advdepthcharge`)

Dedicated anti-sub system that tracks underwater targets and punishes subs within the cruiser’s escort zone.

- **Type:** Torpedo Launcher (depthcharge)  
- **Range:** 450  
- **Reload Time:** 1.8s  
- **Water Weapon:** Yes  
- **Tracking:** Yes (turn rate 9800)  
- **Start Velocity:** 150  
- **Weapon Velocity:** 225  
- **Damage:** 225 (default)  
- **Explosion Effect:** `genericshellexplosion-medium-uw`  
- **Sound Start:** `torpedo1`  
- **Sound Hit:** `xplodep2`  

> Equipped as `weapons[2]`, targets `CANBEUW / UNDERWATER`, and avoids wasting shots on non-sub targets.

---

## 🛠️ **Wreckage**

### **Dead Wreck**
- **Metal:** 500  
- **Damage Threshold:** 5578  
- **Footprint:** 5×5  
- **Object:** `leganavycruiser_dead.s3o`  
- **Reclaimable:** Yes  

### **Heap**
- **Metal:** 250  
- **Damage Threshold:** 4032  
- **Footprint:** 2×2  
- **Object:** `cor2X2A.s3o`  
- **Reclaimable:** Yes  

---

## 💥 **Effects**

- **Explosion Generators:**  
  - `custom:waterwake-medium`  
  - `custom:bowsplash-medium`  
  - `custom:barrelshot-small`  

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

A reliable **Tier 2** escort cruiser that keeps your navy safe from submarines while still contributing meaningful surface damage. The *Charybdis* shines in mixed fleets: hold sonar-controlled lanes, punish subs with tracking depthcharges, and let your heavier ships focus on winning the surface fight.
