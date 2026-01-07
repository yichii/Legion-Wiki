---
layout: ../../layouts/UnitLayout.astro
title: "Corinth"
slug: "leganavyartyship"
shortRole: "Long Range Cluster Plasma Bombardment Vessel"
type: "Sea"
image: "/images/units/leganavyartyship.png"
description: |
  The **Corinth** is a Tier 2 Legion flagship artillery battleship built to break coastlines and delete surface fleets from extreme range.

  Its main battery fires **quad-burst cluster plasma salvos** that saturate wide areas, while multiple deck cannons maintain constant bombardment pressure. If you can keep it screened and supplied, it will dismantle fortified shorelines and force enemy navies to scatter.

  **Best used for:** Long-range coastal siege, cracking defensive lines, forcing repositioning with area saturation  
  **Avoid:** Sub-heavy waters without escort, close-range brawls, or exposing it to concentrated torpedo fire
metalCost: 13000
energyCost: 125000
buildTime: 145000
health: 22000
sightRange: 689
radarRange: 1530
speed: 48
weapons: "Cluster LRPC Main Battery + Deck Cluster Plasma Cannons"
dps: 784
weaponRange: 2100
techLevel: 2
---

# **Flagship Naval Artillery Battleship**

**Unit Name:** `leganavyartyship`  
**Role:** Long-Range Siege / Fleet Bombardment  
**Model Author:** ZephyrSkies  
**Subfolder:** `Legion/Ships/T2`  
**Build Picture:** `leganavyartyship.DDS`  

---

## 🧱 **Build Information**

| Attribute | Value |
|----------|-------|
| **Metal Cost** | 13000 |
| **Energy Cost** | 125000 |
| **Build Time** | 145000 |
| **Footprint** | 8×8 |
| **Movement Class** | BOAT9 |
| **Min. Water Depth** | 15 |
| **Floater** | Yes |
| **Speed** | 48 |
| **Acceleration / Deceleration** | 0.01 / 0.01 |
| **Turn Rate** | 125 |
| **Turn In Place** | Yes (limit 90°) |

---

## ⚙️ **General Stats**

| Attribute | Value |
|----------|-------|
| **Health** | 22000 |
| **Sight Distance** | 689 |
| **Radar Distance** | 1530 |
| **Idle Auto-Heal** | 25 HP/s after 1800s |
| **Explosion Type** | `flagshipExplosion` |
| **Self-Destruct** | `flagshipExplosionSelfd` |
| **Corpse** | Wreck + Heap (reclaimable) |
| **Seismic Signature** | 0 |

---

## ⚔️ **Weapons**

### **Dual Quad-Barrelled Long-Range Cluster Plasma Cannon** (`leg_mobile_cluster_lrpc_cannon`)

Main battery built for long-range saturation and siege. Fires a burst salvo and splits into cluster submunitions on impact.

- **Type:** Cannon (cluster LRPC)  
- **Range:** 2100  
- **Reload Time:** 6s  
- **Burst:** 4  
- **Burst Rate:** 0.2  
- **Area of Effect:** 150  
- **Accuracy:** 300  
- **Spray Angle:** 600  
- **Gravity Affected:** Yes  
- **Energy per Shot:** 2500  
- **Weapon Velocity:** 600  
- **Cluster Payload:** Spawns 6× `cluster_munition_main`  
- **Damage:**  
  - Default: 250  
  - Subs: 50  
- **Explosion Effect:** `custom:starfire-explosion`  
- **Sound Start:** `lrpcshot3`  
- **Sound Hit:** `lrpcexplo`  

> Equipped as `weapons[1]` and restricted to **SURFACE** targets.

### **Heavy Artillery Cluster Plasma Cannons** ×3 (`leg_mobile_cluster_plasma`)

Secondary deck guns that keep constant pressure on fleets and shorelines with faster reloads and clustered impacts.

Mounted as `weapons[2]`, `weapons[3]`, and `weapons[4]` with directional firing arcs.

- **Type:** Cannon (cluster plasma)  
- **Range:** 1600  
- **Reload Time:** 1.8s  
- **Area of Effect:** 120  
- **Accuracy:** 50  
- **Edge Effectiveness:** 0.4  
- **Gravity Affected:** Yes  
- **Weapon Velocity:** 500  
- **Cluster Payload:** Spawns 4× `cluster_munition_secondary`  
- **Damage:**  
  - Default: 175  
  - Light Boats: 175  
  - Subs: 55  
  - VTOL: 55  
- **Explosion Effect:** `custom:ministarfire-explosion`  
- **Sound Start:** `cannhvy5`  
- **Sound Hit:** `xplomed2`  

---

### **Cluster Submunitions**

These are spawned on impact by the ship’s cluster artillery.

#### **Plasma Cluster Burst (Main)** (`cluster_munition_main`)
- **Type:** Cannon (bomblet)  
- **Range:** 110 (local spread)  
- **Area of Effect:** 115  
- **Edge Effectiveness:** 0.3  
- **Max Velocity:** 720  
- **Reload Time:** 11s  
- **Damage:**  
  - Default: 62  
  - Subs: 25  
  - VTOL: 25  
- **Effects:** `custom:ministarfire-explosion`

#### **Plasma Cluster Burst (Secondary)** (`cluster_munition_secondary`)
- **Type:** Cannon (bomblet)  
- **Range:** 100 (local spread)  
- **Area of Effect:** 115  
- **Edge Effectiveness:** 0.3  
- **Damage:**  
  - Default: 65  
  - Light Boats: 65  
  - Subs: 15  
  - VTOL: 15  
- **Effects:** `custom:ministarfire-explosion`

---

## 🛠️ **Wreckage**

### **Dead Wreck**
- **Metal:** 8500  
- **Damage Threshold:** 85500  
- **Footprint:** 6×18  
- **Object:** `leganavyartyship_dead.s3o`  
- **Reclaimable:** Yes  

### **Heap**
- **Metal:** 4250  
- **Damage Threshold:** 40032  
- **Object:** `arm6X6A.s3o`  
- **Reclaimable:** Yes  

---

## 💥 **Effects**

- **Explosion Generators:**  
  - `custom:barrelshot-medium`  
  - `custom:barrelshot-larger`  
  - `custom:waterwake-huge`  
  - `custom:bowsplash-huge`  
  - `custom:enginespurt-huge`  

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

A terrifying **Tier 2 flagship** designed for long-range naval siege. The *Hyperion* can erase surface formations and dismantle shoreline defenses through sustained cluster bombardment—but it is a massive investment. Protect it with screens, sonar/sub coverage, and AA, and let it win the map by forcing everything in its range to relocate or die.
