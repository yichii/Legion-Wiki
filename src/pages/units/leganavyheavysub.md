---
layout: ../../layouts/UnitLayout.astro
title: "Sphyrna"
slug: "leganavyheavysub"
shortRole: "Long-Range Battle Submarine"
type: "Sea"
image: "/images/units/leganavyheavysub.png"
description: |
  The **Sphyrna** is a Tier 2 heavy submarine built for decisive underwater strikes—launching **long-range heavy torpedoes** that can cripple or outright delete capital ships.

  With built-in **stealth** and strong endurance, it excels at stalking sea lanes, ambushing high-value targets, and forcing the enemy to commit to sonar nets and ASW escorts.

  **Best used for:** Assassinating battleships/flagships, long-range underwater pressure, punishing unsupported fleets  
  **Avoid:** Surfacing into detection, lingering near sonar coverage, or fighting dedicated ASW forces without support
metalCost: 1900
energyCost: 29000
buildTime: 24750
health: 3900
sightRange: 570
sonarRange: 400
speed: 39
weapons: "Long-Range Heavy Torpedo"
dps: 206
weaponRange: 850
techLevel: 2
---

# **Tier 2 Heavy Stealth Submarine**

**Unit Name:** `leganavyheavysub`  
**Role:** Heavy Torpedo Assassin / Stealth Pressure  
**Model Authors:** Model by Tharsis, Concept by Chris/Airnac  
**Subfolder:** `legion/Navy/T2`  
**Build Picture:** `leganavyheavysub.DDS`  

---

## 🧱 **Build Information**

| Attribute | Value |
|----------|-------|
| **Metal Cost** | 1900 |
| **Energy Cost** | 29000 |
| **Build Time** | 24750 |
| **Footprint** | 4×4 |
| **Movement Class** | UBOAT4 |
| **Min. Water Depth** | 20 |
| **Speed** | 39 |
| **Acceleration / Deceleration** | 0.018 / 0.018 |
| **Turn Rate** | 320 |
| **Turn In Place** | Yes (limit 90°) |
| **Upright** | Yes |
| **Stealth** | Yes |

---

## ⚙️ **General Stats**

| Attribute | Value |
|----------|-------|
| **Health** | 3900 |
| **Sight Distance** | 570 |
| **Sonar Distance** | 400 |
| **Idle Auto-Heal** | 15 HP/s after 900s |
| **Explosion Type** | `largeexplosiongeneric-uw` |
| **Self-Destruct** | `largeexplosiongenericSelfd-uw` |
| **Corpse** | Wreck + Heap (reclaimable) |
| **Seismic Signature** | 0 |
| **No-Chase Category** | VTOL |
| **Waterline** | 80 |

---

## ⚔️ **Weapons**

### **Long-Range Heavy Torpedo** (`torpedo_large`)

A high-damage, tracking torpedo designed to delete big surface hulls and win submarine duels with single-hit threat.

- **Type:** Torpedo Launcher  
- **Range:** 850  
- **Reload Time:** 8s  
- **Area of Effect:** 160  
- **Tracking:** Yes (turn rate 1500)  
- **Start Velocity:** 150  
- **Weapon Velocity:** 220  
- **Water Weapon:** Yes  
- **Turret:** Yes  
- **Damage:**  
  - Default: 1650  
  - Subs: 1110  
  - Commanders: 750  
- **Explosion Effect:** `genericshellexplosion-large-uw`  
- **Sound Start:** `torpedo1`  
- **Sound Hit:** `xplodep1`  

> Equipped as `weapons[1]`. Targets **NOTHOVER** (ships/subs) and avoids hover-not-ship categories.

---

## 🛠️ **Wreckage**

### **Dead Wreck**
- **Metal:** 1050  
- **Damage Threshold:** 2200  
- **Footprint:** 3×3  
- **Object:** `leganavyheavysub_dead.s3o`  
- **Reclaimable:** Yes  

### **Heap**
- **Metal:** 525  
- **Damage Threshold:** 4400  
- **Footprint:** 2×2  
- **Object:** `cor2X2A.s3o`  
- **Reclaimable:** Yes  

---

## 💥 **Effects**

- **Explosion Generators:**  
  - `custom:subbubbles`  
  - `custom:subwake`  
  - `custom:subtorpfire-medium`  

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

A stealthy **Tier 2** underwater executioner. The *Megalodon* threatens massive damage from outside many ships’ comfort zones, making it perfect for ambushing expensive hulls and controlling sea lanes. Keep it hidden, strike high-value targets, and relocate before sonar and ASW can collapse on you.
