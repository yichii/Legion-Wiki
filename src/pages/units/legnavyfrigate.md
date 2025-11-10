---
layout: ../../layouts/UnitLayout.astro
title: "Argonaut"
slug: "legnavyfrigate"
shortRole: "Torpedo Launcher Frigate"
type: "Sea"
image: "/images/units/legnavyfrigate.png"
description: |
  The **Argonaut** is a fast, lightly armored torpedo ship designed for early-game naval control and anti-submarine warfare.

  Its torpedo launchers can engage both surface and underwater threats, making it an excellent multipurpose escort for your fleet.

  **Best used for:** Early naval skirmishes and anti-sub defense  
  **Avoid:** Sustained fights against heavier destroyers or coastal artillery
metalCost: 370
energyCost: 3700
buildTime: 4800
health: 2600
sightRange: 500
sonarRange: 400
speed: 72
weapons: "Torpedo Launcher"
dps: 215
weaponRange: 460
techLevel: 1
---

# **Naval Frigate**

**Unit Name:** `legnavyfrigate`  
**Role:** Light Torpedo Frigate  
**Model Authors:** EnderRobo (Model), Phill-Arts (Concept Art)  
**Subfolder:** `Legion/Ships`  
**Build Picture:** `legnavyfrigate.DDS`  

---

## 🧱 **Build Information**

| Attribute | Value |
|----------|-------|
| **Metal Cost** | 370 |
| **Energy Cost** | 3700 |
| **Build Time** | 4800 |
| **Footprint** | 4×4 |
| **Movement Class** | BOAT4 |
| **Min. Water Depth** | 6 |
| **Floater** | Yes |
| **Speed** | 72 |
| **Acceleration / Deceleration** | 0.03 / 0.03 |
| **Turn Rate** | 300 |
| **Turn In Place** | Yes (limit 90°) |

---

## ⚙️ **General Stats**

| Attribute | Value |
|----------|-------|
| **Health** | 2600 |
| **Sight Distance** | 500 |
| **Sonar Distance** | 400 |
| **Air Sight Distance** | 800 |
| **Idle Auto-Heal** | 5 HP/s after 900s |
| **Auto-Heal Rate** | 1.5 HP/s |
| **Explosion Type** | `smallExplosionGeneric` |
| **Self-Destruct** | `smallExplosionGenericSelfd` |
| **No-Chase Category** | VTOL, UNDERWATER |
| **Seismic Signature** | 0 |

---

## ⚔️ **Weapons**

### **Deck Torpedo Launcher** (`leg_torpedo_launcher`)

- **Type:** Torpedo Launcher  
- **Range:** 460  
- **Reload Time:** 1.3s  
- **Tracking:** Yes (turn rate 5200)  
- **Flight Time:** 3s  
- **Start Velocity:** 200  
- **Weapon Velocity:** 250  
- **Damage:**  
  - Default: 140  
  - Commanders: 70  
  - VTOL: 15  
- **Special:** Water-only weapon, homing torpedoes with splash effects  

### **Alternate Deck Torpedo Launcher** (`leg_alt_torpedo_launcher`)

Mounted opposite for full underwater coverage.

- **Type:** MissileLauncher (UW variant)  
- **Range:** 460  
- **Reload Time:** 1.3s  
- **Tracking:** Yes  
- **Damage:**  
  - Default: 140  
  - Commanders: 70  
  - VTOL: 15  

---

## 🛠️ **Wreckage**

### **Dead Wreck**

- **Metal:** 97.5  
- **Damage Threshold:** 500  
- **Footprint:** 2×2  
- **Object:** `legnavyfrigate_dead.s3o`  
- **Reclaimable:** Yes  

### **Heap**

- **Metal:** 48.75  
- **Damage Threshold:** 1432  
- **Footprint:** 2×2  
- **Object:** `cor3X3A.s3o`  
- **Reclaimable:** Yes  

---

## 💥 **Effects**

- **Explosion Generators:**  
  - `custom:waterwake-small`  
  - `custom:barrelshot-small`  
- **Piece Explosion Generators:**  
  - `deathceg2`, `deathceg3`

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

The **Legion Frigate** provides flexible early naval dominance with dual torpedo systems for both surface and submerged threats. While fragile against heavier ships, its speed and versatility make it an essential **Tech 1** escor
