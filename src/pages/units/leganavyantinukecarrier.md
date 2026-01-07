---
layout: ../../layouts/UnitLayout.astro
title: "Hecate"
slug: "leganavyantinukecarrier"
shortRole: "Anti-nuke Drone Carrier Support Ship"
type: "Sea"
image: "/images/units/leganavyantinukecarrier.png"
description: |
  The **Hecate** is a Tier 2 naval strategic-defense platform that combines **anti-nuke interception** with a **self-sustaining drone screen**.

  It stockpiles powerful interceptor missiles to swat incoming strategic warheads while its onboard control matrix continuously deploys drones to patrol and pressure threats within a wide radius.

  **Best used for:** Fleet-wide anti-nuke coverage, anchoring a forward naval staging area, drone-based screening  
  **Avoid:** Overextending into torpedo/sub-heavy waters or taking direct frontline brawls without escorts
metalCost: 1400
energyCost: 12000
buildTime: 20000
health: 5000
sightRange: 1000
radarRange: 1500
sonarRange: 760
speed: 63
weapons: "Anti-Nuke Interceptor + Drone Control Matrix"
weaponRange: 1600
techLevel: 2
---

# **Naval Anti-Nuke Drone Carrier**

**Unit Name:** `leganavyantinukecarrier`  
**Role:** Strategic Defense / Drone Support Carrier  
**Model Author:** ZephyrSkies  
**Subfolder:** `Legion/Ships/T2`  
**Build Picture:** `leganavyantinukecarrier.DDS`  

---

## 🧱 **Build Information**

| Attribute | Value |
|----------|-------|
| **Metal Cost** | 1400 |
| **Energy Cost** | 12000 |
| **Build Time** | 20000 |
| **Footprint** | 7×7 |
| **Movement Class** | BOAT5 |
| **Min. Water Depth** | 15 |
| **Floater** | Yes |
| **Speed** | 63 |
| **Acceleration / Deceleration** | 0.01722 / 0.01722 |
| **Turn Rate** | 180 |
| **Turn In Place** | Yes (limit 90°) |
| **Energy Storage** | 1500 |
| **Energy Make** | 300 |

---

## ⚙️ **General Stats**

| Attribute | Value |
|----------|-------|
| **Health** | 5000 |
| **Sight Distance** | 1000 |
| **Radar Distance** | 1500 |
| **Sonar Distance** | 760 |
| **Idle Auto-Heal** | 15 HP/s after 600s |
| **Explosion Type** | `minifusionExplosion` |
| **Self-Destruct** | `minifusionExplosion` |
| **Corpse** | Wreck + Heap (reclaimable) |
| **Seismic Signature** | 0 |
| **No-Chase Category** | VTOL |

---

## ⚔️ **Weapons**

### **Anti-Nuke Interceptor Launcher** (`amd_rocket`)

A stockpiling strategic interceptor designed to destroy incoming nuclear missiles within its coverage umbrella.

- **Type:** Starburst Launcher (Interceptor)  
- **Coverage Radius:** 1600  
- **Stockpile:** Yes  
- **Stockpile Time:** 90s (per missile)  
- **Stockpile Limit:** 20  
- **Energy per Shot:** 7500  
- **Metal per Shot:** 150  
- **Reload Time:** 2s  
- **Flight Time:** 20s  
- **Weapon Velocity:** 6000  
- **Tracking:** Yes (turn rate 10,000)  
- **Explosion Effect:** `custom:antinuke`  
- **Damage:** 1500 (interception payload)

> This weapon is not for surface combat—it exists to provide **anti-nuke coverage** and protect your fleet/economy from strategic strikes.

### **Multi-Drone Control Matrix** (`leg_drone_controller`)

Continuously deploys and manages drones to patrol around the carrier and engage targets within a broad control radius.

- **Type:** Control Cannon (spawner/controller)  
- **Range:** 1300  
- **Reload Time:** 2.5s  
- **Engagement Range:** 1400  
- **Carried Unit:** `legdrone`  
- **Spawn Rate:** ~7s  
- **Max Drones:** 6  
- **Control Radius:** 1500  
- **Spawn Cost (per drone):** 15 metal / 500 energy  
- **Docking:** Enabled (repairs and re-arms behavior)  
  - Docking Heal Rate: 24  
  - Docking Armor: 0.2  
  - Carrier death behavior: release

> Equipped weapons: `weapons[2]` = anti-nuke interceptor, `weapons[1]` = drone controller.

---

## 🛠️ **Wreckage**

### **Dead Wreck**
- **Metal:** 700  
- **Damage Threshold:** 9168  
- **Footprint:** 6×6  
- **Object:** `leganavyantinukecarrier_dead.s3o`  
- **Reclaimable:** Yes  

### **Heap**
- **Metal:** 350  
- **Damage Threshold:** 4032  
- **Object:** `arm6X6C.s3o`  
- **Reclaimable:** Yes  

---

## 💥 **Effects**

- **Explosion Generators:**  
  - `custom:radarpulse_t2`  
  - `custom:waterwake-large`  
  - `custom:bowsplash-huge`  

- **Piece Explosion Generators:**  
  - `deathceg2`, `deathceg3`, `deathceg4`

---

## 🔊 **Sounds**

| Event | Sound |
|-------|------|
| Under Attack | `warning1` |
| Cancel Destruct | `cancel2` |
| Cannot Do | `cantdo4` |
| Movement | `sharmmov` |
| Selection | `sharmsel` |

---

### **Summary**

A powerful **Tier 2** naval support ship that combines **strategic anti-nuke protection** with a **persistent drone screen**. Keep it behind your battle line to extend radar/sonar vision, intercept nuclear threats, and maintain constant pressure with drones—while escorts handle frontline combat and submarines.
