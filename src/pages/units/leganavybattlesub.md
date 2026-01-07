---
layout: ../../layouts/UnitLayout.astro
title: "Architeuthis"
slug: "leganavybattlesub"
shortRole: "Fast Assault Submarine"
type: "Sea"
image: "/images/units/leganavybattlesub.png"
description: |
  The **Architeuthis** is a Tier 2 Legion attack submarine that overwhelms surface targets with **burst-fired torpedo salvos**.

  Fast and agile for its class, it excels at ambushing ships, finishing wounded hulls, and forcing enemy fleets to invest in sonar and ASW coverage.

  **Best used for:** Flanking and ambushes, punishing surface fleets without sonar, hit-and-run torpedo pressure  
  **Avoid:** Fighting dedicated ASW forces head-on or lingering in revealed waters
metalCost: 1100
energyCost: 16000
buildTime: 19000
health: 2350
sightRange: 450
sonarRange: 500
speed: 72
weapons: "Packhound Torpedo System"
dps: 180
weaponRange: 600
techLevel: 2
---

# **Tier 2 Attack Submarine**

**Unit Name:** `leganavybattlesub`  
**Role:** Torpedo Assault / Ambush Sub  
**Model Authors:** Model by Tharsis, Concept by Chris/Airnac  
**Subfolder:** `legion/Navy/T2`  
**Build Picture:** `leganavybattlesub.DDS`  

---

## 🧱 **Build Information**

| Attribute | Value |
|----------|-------|
| **Metal Cost** | 1100 |
| **Energy Cost** | 16000 |
| **Build Time** | 19000 |
| **Footprint** | 3×3 |
| **Movement Class** | UBOAT4 |
| **Min. Water Depth** | 15 |
| **Speed** | 72 |
| **Acceleration / Deceleration** | 0.0425 / 0.0425 |
| **Turn Rate** | 360 |
| **Turn In Place** | Yes (limit 90°) |
| **Upright** | Yes |

---

## ⚙️ **General Stats**

| Attribute | Value |
|----------|-------|
| **Health** | 2350 |
| **Sight Distance** | 450 |
| **Sonar Distance** | 500 |
| **Idle Auto-Heal** | 10 HP/s after 900s |
| **Explosion Type** | `mediumExplosionGeneric-uw` |
| **Self-Destruct** | `mediumExplosionGenericSelfd-uw` |
| **Corpse** | Wreck + Heap (reclaimable) |
| **Seismic Signature** | 0 |
| **No-Chase Category** | VTOL |
| **Waterline** | 40 |

---

## ⚔️ **Weapons**

### **Packhound Torpedo System** (`torpedo_swarm`)

Burst-fired torpedo launcher designed to overwhelm ships with rapid volleys.

- **Type:** Torpedo Launcher  
- **Range:** 600  
- **Reload Time:** 2.5s  
- **Burst:** 3  
- **Burst Rate:** 0.33  
- **Start Velocity:** 200  
- **Weapon Velocity:** 250  
- **Water Weapon:** Yes  
- **Turret:** No  
- **Damage:** 150 (default)  
- **Explosion Effect:** `genericshellexplosion-medium-uw`  
- **Sound Start:** `torpedo1`  
- **Sound Hit:** `xplodep1`  

> Equipped as `weapons[1]`. Targets **NOTHOVER** (ships/subs) and avoids hover/not-ship categories.

---

## 🛠️ **Wreckage**

### **Dead Wreck**
- **Metal:** 375  
- **Damage Threshold:** 1362  
- **Footprint:** 6×6  
- **Object:** `leganavybattlesub_dead.s3o`  
- **Reclaimable:** Yes  

### **Heap**
- **Metal:** 187  
- **Damage Threshold:** 4032  
- **Object:** `cor2X2A.s3o`  
- **Reclaimable:** Yes  

---

## 💥 **Effects**

- **Explosion Generators:**  
  - `custom:subbubbles`  
  - `custom:subwake`  
  - `custom:subtorpfire`  

- **Piece Explosion Generators:**  
  - `deathceg2`, `deathceg3`, `deathceg4`

---

## 🔊 **Sounds**

| Event | Sound |
|-------|------|
| Under Attack | `warning1` |
| Cancel Destruct | `cancel2` |
| Cannot Do | `cantdo4` |
| Movement | `sucormov` |
| Selection | `sucorsel` |

---

### **Summary**

A fast **Tier 2** ambush submarine that wins fights through **burst torpedo pressure**. The *Packhound* is deadly against fleets lacking sonar—strike from angles, dump volleys, relocate, and force the enemy into expensive ASW coverage before you commit your surface ships.
