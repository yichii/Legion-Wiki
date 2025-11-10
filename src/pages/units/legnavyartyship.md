---
layout: ../../layouts/UnitLayout.astro
title: "Octeres"
slug: "legnavyartyship"
shortRole: "Long-Range Cluster Artillery Vessel"
type: "Sea"
image: "/images/units/legnavyartyship.png"
description: |
  The **Octeres** is a dedicated long-range bombardment platform for Legion fleets, saturating coastal and naval targets with cluster shells.

  Its twin heavy artillery cannons unleash clustered munitions that punish static defenses, slow ships, and chokepoints, making it ideal for softening up positions before your main navy commits.

  **Best used for:** Long-range shoreline bombardment & area denial  
  **Avoid:** Sailing alone, direct brawls with frontline warships, or submarine-heavy waters
metalCost: 1450
energyCost: 15000
buildTime: 20000
health: 4500
sightRange: 500
sonarRange: 400
speed: 45
weapons: "Dual Cluster Artillery Cannons"
dps: 49
weaponRange: 930
techLevel: 1
---


# **Naval Cluster Artillery Ship**

**Unit Name:** `legnavyartyship`  
**Role:** Long-Range Naval Artillery  
**Model Authors:** Johnathan Crimson (Concept/Model), ZephyrSkies (Model)  
**Subfolder:** `Legion/Ships`  
**Build Picture:** `legnavyartyship.DDS`  

---

## 🧱 **Build Information**

| Attribute | Value |
|----------|-------|
| **Metal Cost** | 1450 |
| **Energy Cost** | 15000 |
| **Build Time** | 20000 |
| **Footprint** | 4×4 |
| **Movement Class** | BOAT4 |
| **Min. Water Depth** | 12 |
| **Floater** | Yes |
| **Speed** | 45 |
| **Acceleration / Deceleration** | 0.015 / 0.015 |
| **Turn Rate** | 150 |
| **Turn In Place** | Yes (limit 90°) |

---

## ⚙️ **General Stats**

| Attribute | Value |
|----------|-------|
| **Health** | 4500 |
| **Sight Distance** | 500 |
| **Sonar Distance** | 400 |
| **Idle Auto-Heal** | 5 HP/s after 1800s |
| **Explosion Type** | `mediumexplosiongeneric` |
| **Self-Destruct** | `mediumexplosiongenericSelfd` |
| **Corpse** | Wreck + Heap (reclaimable) |
| **Seismic Signature** | 0 |
| **No-Chase Category** | VTOL |

---

## ⚔️ **Weapons**

### **Long-Range Naval Cluster Artillery Cannons** (`leg_cluster_artillery_cannon`)

Mounted in dual batteries (`weapons[1]` and `weapons[2]` use the same definition).

- **Type:** Cannon (cluster artillery)  
- **Range:** 930  
- **Reload Time:** 9s  
- **Area of Effect:** 130  
- **Accuracy:** 400  
- **Edge Effectiveness:** 0.4  
- **Gravity Affected:** Yes  
- **Turret:** Yes  
- **Weapon Velocity:** 345  
- **Cluster Payload:** Spawns 6× `cluster_munition` submunitions  
- **Damage:**  
  - Default: 220  
  - Subs: 50  
  - VTOL: 50  
- **Special:** Designed for **SURFACE** targets; ineffective vs fast air; excellent for saturating an area.

### **Cluster Munitions** (`cluster_munition`)

Triggered as secondary bomblets from the main cannon.

- **Type:** Cannon (short-range bomblets)  
- **Area of Effect:** 115  
- **Edge Effectiveness:** 0.3  
- **Range:** 80 (local around impact)  
- **Damage:**  
  - Default: 70  
  - Light Boats: 70  
  - Subs: 25  
  - VTOL: 25  

---

## 🛠️ **Wreckage**

### **Dead Wreck**

- **Metal:** 480  
- **Damage Threshold:** 3360  
- **Footprint:** 5×5  
- **Object:** `legnavyartyship_dead.s3o`  
- **Reclaimable:** Yes  

### **Heap**

- **Metal:** 240  
- **Damage Threshold:** 4032  
- **Footprint:** 2×2  
- **Object:** `cor5X5D.s3o`  
- **Reclaimable:** Yes  

---

## 💥 **Effects**

- **Explosion Generators:**  
  - `custom:barrelshot-medium`  
  - `custom:waterwake-small`  
  - `custom:bowsplash-small`  
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

A specialized **Tier 2** long-range artillery ship that projects clustered firepower deep inland and across the sea. Use it behind your main battle line to dismantle defenses, control choke points, and force the enemy navy and shore positions to move—or be deleted.
