---
layout: ../../layouts/UnitLayout.astro
title: "Leocampus"
slug: "leganavyantiswarm"
shortRole: "Anti-Swarm Ship"
type: "Sea"
image: "/images/units/leganavyantiswarm.png"
description: |
  The **Leocampus** is a Tier 2 high-speed patrol ship built to punish swarms—fast boats, clustered ships, and coastal clumps—using a heavy **riot blast cannon**.

  It trades durability for **speed and disruption**, smashing light formations at close range while carrying a secondary AA missile launcher to deter opportunistic aircraft.

  **Best used for:** Chasing down light fleets, breaking tight formations, coastal raids, screening your main navy  
  **Avoid:** Extended frontline brawls, long-range duels, or diving into heavy torpedo/sub threats alone
metalCost: 500
energyCost: 8500
buildTime: 8500
health: 2300
sightRange: 500
radarRange: 750
speed: 105
weapons: "Medium Riot Cannon + AA Missile Launcher"
dps: 191
weaponRange: 760
techLevel: 2
---

# **Naval Anti-Swarm Patrol Ship**

**Unit Name:** `leganavyantiswarm`  
**Role:** Fast Riot / Anti-Swarm Patrol  
**Model Author:** EnderRobo  
**Subfolder:** `Legion/Ships/T2`  
**Build Picture:** `leganavyantiswarm.DDS`  

---

## 🧱 **Build Information**

| Attribute | Value |
|----------|-------|
| **Metal Cost** | 500 |
| **Energy Cost** | 8500 |
| **Build Time** | 8500 |
| **Footprint** | 4×4 |
| **Movement Class** | BOAT4 |
| **Min. Water Depth** | 6 |
| **Floater** | Yes |
| **Speed** | 105 |
| **Acceleration / Deceleration** | 0.07 / 0.07 |
| **Turn Rate** | 500 |
| **Turn In Place** | Yes (limit 90°) |

---

## ⚙️ **General Stats**

| Attribute | Value |
|----------|-------|
| **Health** | 2300 |
| **Sight Distance** | 500 |
| **Radar Distance** | 750 |
| **Idle Auto-Heal** | 2 HP/s after 900s |
| **Explosion Type** | `mediumExplosionGeneric` |
| **Self-Destruct** | `mediumExplosionGenericSelfd` |
| **Corpse** | Wreck + Heap (reclaimable) |
| **Seismic Signature** | 0 |
| **No-Chase Category** | VTOL / UNDERWATER |

---

## ⚔️ **Weapons**

### **Medium Blast Riot Cannon** (`legion_riot_cannon_t2`)

Close-range riot cannon designed to delete clustered light units and disrupt tight naval formations.

- **Type:** Cannon (riot blast)  
- **Range:** 350  
- **Reload Time:** 1.1s  
- **Area of Effect:** 144  
- **Edge Effectiveness:** 0.9  
- **Impulse Factor:** 2.5 (strong knock/disruption)  
- **Weapon Velocity:** 700  
- **Damage:**  
  - Default: 210  
  - Subs: 90  
  - VTOL: 35  
- **Explosion Effect:** `genericshellexplosion-large`  
- **Sound Start:** `largegun`  
- **Sound Hit:** `corlevlrhit`  

> Designed for **SURFACE** targets; best at close range where enemies cluster.

### **Advanced AA Salvo Missile Launcher** (`light_antiair_missile`)

Secondary AA tool to punish aircraft that try to hover or dive your patrol line.

- **Type:** Missile Launcher  
- **Range:** 760  
- **Reload Time:** 1.2s  
- **Burst:** 3  
- **Tracking:** Yes (turn rate 68,000)  
- **Start Velocity:** 800  
- **Weapon Velocity:** 2500  
- **Damage:** VTOL 24  
- **Explosion Effect:** `genericshellexplosion-tiny-aa`  
- **Sound Start:** `packolau`  
- **Sound Hit:** `packohit`  

---

## 🛠️ **Wreckage**

### **Dead Wreck**
- **Metal:** 390  
- **Damage Threshold:** 500  
- **Footprint:** 3×3  
- **Object:** `leganavyantiswarm_dead.s3o`  
- **Reclaimable:** Yes  

### **Heap**
- **Metal:** 195  
- **Damage Threshold:** 1032  
- **Footprint:** 3×3  
- **Object:** `arm3X3A.s3o`  
- **Reclaimable:** Yes  

---

## 💥 **Effects**

- **Explosion Generators:**  
  - `custom:barrelshot-small-impulse`  
  - `custom:barrelshot-tiny-aa`  
  - `custom:waterwake-small`  
  - `custom:bowsplash-small`  

- **Piece Explosion Generators:**  
  - `deathceg2`, `deathceg3`, `deathceg3-lightning`

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

A **Tier 2** fast patrol ship built to crush swarms and punish clustered naval lines. The *Skadi* thrives in hit-and-run fights: sprint in, blast dense formations with the riot cannon, and disengage before heavier ships or subs can punish it—while the AA missile launcher keeps opportunistic aircraft honest.
