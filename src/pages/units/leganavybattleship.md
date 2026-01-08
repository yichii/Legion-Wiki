---
layout: ../../layouts/UnitLayout.astro
title: "Scylla"
slug: "leganavybattleship"
shortRole: "Hybrid Cross-Terrain Battleship"
type: "Sea"
image: "/images/units/leganavybattleship.png"
description: |
  The **Scylla** is a Tier 2 hybrid battleship designed for both naval combat and limited land operations.

  It can **move onto land at reduced speed**, but trades durability for this versatility, making it **more fragile than most battleships**. Its primary weapon is a **single burst-fire plasma cannon**, delivering powerful area control rather than sustained long-range fire. Earlier prototype designs experimented with alternate weapon modes on land, but these were removed before finalization.


  **Best used for:** Frontline fleet fights, pushing into defended waters, holding mid-map sea lanes  
  **Avoid:** Sub-heavy waters without escort, getting kited by longer-range artillery ships, or diving into air dominance alone
metalCost: 2900
energyCost: 21000
buildTime: 36000
health: 9000
sightRange: 600
speed: 25
weapons: "Burst-fire Plasma Cannon"
dps: 822
weaponRange: 750
techLevel: 2
---

# **Tier 2 Naval Battleship**

**Unit Name:** `leganavybattleship`  
**Role:** Heavy Surface Combat / Fleet Breaker  
**Model Author:** ZephyrSkies  
**Subfolder:** `Legion/Ships/T2`  
**Build Picture:** `leganavybattleship.DDS`  

---

## 🧱 **Build Information**

| Attribute | Value |
|----------|-------|
| **Metal Cost** | 2900 |
| **Energy Cost** | 21000 |
| **Build Time** | 36000 |
| **Footprint** | 7×7 |
| **Movement Class** | HOVER7 |
| **Min. Water Depth** | 15 |
| **Floater** | Yes |
| **Speed** | 25 |
| **Acceleration / Deceleration** | 0.005 / 0.005 |
| **Turn Rate** | 90 |
| **Turn In Place** | Yes (limit 90°) |

---

## ⚙️ **General Stats**

| Attribute | Value |
|----------|-------|
| **Health** | 9000 |
| **Sight Distance** | 600 |
| **Idle Auto-Heal** | 5 HP/s after 1800s |
| **Explosion Type** | `hugeexplosiongeneric` |
| **Self-Destruct** | `hugeexplosiongenericSelfD` |
| **Corpse** | Wreck + Heap (reclaimable) |
| **Seismic Signature** | 0 |
| **No-Chase Category** | VTOL |

---

## ⚔️ **Weapons**

### **Heavy Burst Plasma Cannons** ×2 (`burst_plasma_t2`)

Primary batteries that fire burst salvos for reliable mid-long range damage against surface targets.

Mounted as `weapons[1]` and `weapons[2]`.

- **Type:** Cannon (burst plasma)  
- **Range:** 750  
- **Reload Time:** 2.7s  
- **Burst:** 3  
- **Burst Rate:** 0.066  
- **Area of Effect:** 200  
- **Spray Angle:** 750  
- **Gravity Affected:** Yes  
- **Turret:** Yes  
- **Weapon Velocity:** 440  
- **Damage:**  
  - Default: 270  
  - VTOL: 65  
- **Explosion Effect:** `genericshellexplosion-medium`  
- **Sound Start:** `cannhvy1`  
- **Sound Hit:** `xplomed2`  

> These guns are restricted to **SURFACE** targets and use burst control to avoid wasting shots when out of arc.

### **Medium Shotguns** ×2 (`legion_shotgun`)

Close-range “get off me” weapons that punish anything trying to brawl inside the battleship’s minimum turning/firing space.

Mounted as `weapons[3]` and `weapons[4]`.

- **Type:** Laser Cannon (shotgun pattern)  
- **Range:** 500  
- **Reload Time:** 2s  
- **Projectiles:** 10  
- **Area of Effect:** 16  
- **Spray Angle:** 950  
- **Edge Effectiveness:** 0.85  
- **Impulse Factor:** 2.9 (strong shove/disruption)  
- **Weapon Velocity:** 800  
- **Damage:**  
  - Default: 20 (per projectile)  
  - VTOL: 6  
- **Explosion Effect:** `plasmahit-sparkonly`  
- **Sound Start:** `kroggie2xs`  
- **Sound Hit:** `bimpact3`  

---

## 🛠️ **Wreckage**

### **Dead Wreck**
- **Metal:** 1650  
- **Damage Threshold:** 13662  
- **Footprint:** 6×6  
- **Object:** `leganavybattleship_dead.s3o`  
- **Reclaimable:** Yes  

### **Heap**
- **Metal:** 825  
- **Damage Threshold:** 4032  
- **Object:** `cor6X6C.s3o`  
- **Reclaimable:** Yes  

---

## 💥 **Effects**

- **Explosion Generators:**  
  - `custom:barrelshot-large`  
  - `custom:waterwake-large`  
  - `custom:bowsplash-large`  

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

A durable **Tier 2** surface bruiser that thrives in fleet brawls. The *Leviathan* pressures from medium range with twin burst plasma cannons, then finishes close fights with brutal shotgun volleys. Keep AA and sonar nearby, push as a formation, and it becomes a nasty anchor for sea control.
