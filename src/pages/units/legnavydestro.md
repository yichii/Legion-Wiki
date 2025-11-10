---
layout: ../../layouts/UnitLayout.astro
title: "Syracusia"
slug: "legnavydestro"
shortRole: "Hybrid Heatray-Drone Carrier Destroyer"
type: "Sea"
image: "/images/units/legnavydestro.png"
description: |
  The **Syracusia** is a versatile Legion warship combining a brutal mid-range heatray with autonomous strike drones.

  Its beam weapon shreds surface targets at destroyer range, while the onboard Drone Control Matrix deploys armed drones to extend its threat radius and sustain pressure on enemy fleets.

  **Best used for:** Mid-range naval brawls, screening, and sustained pressure with drones  
  **Avoid:** Focus fire from heavy battleships or massed submarines
metalCost: 860
energyCost: 9000
buildTime: 11500
health: 4000
sightRange: 500
sonarRange: 400
speed: 58
weapons: "Medium Sweepfire Heatray, Drone Control Matrix"
dps: 170
weaponRange: 700
techLevel: 1
---


# **Naval Drone Destroyer**

**Unit Name:** `legnavydestro`  
**Role:** Heatray Destroyer & Drone Carrier  
**Custom Range:** 700  
**Model Authors:** Phill-Art (Concept Art), ZephyrSkies (Model)  
**Subfolder:** `Legion/Ships`  
**Build Picture:** `legnavydestro.DDS`  

---

## 🧱 **Build Information**

| Attribute | Value |
|----------|-------|
| **Metal Cost** | 860 |
| **Energy Cost** | 9000 |
| **Build Time** | 11500 |
| **Footprint** | 4×4 |
| **Movement Class** | BOAT4 |
| **Min. Water Depth** | 12 |
| **Floater** | Yes |
| **Speed** | 58 |
| **Acceleration / Deceleration** | 0.02757 / 0.02757 |
| **Turn Rate** | 280 |
| **Turn In Place** | Yes (limit 90°) |

---

## ⚙️ **General Stats**

| Attribute | Value |
|----------|-------|
| **Health** | 4000 |
| **Sight Distance** | 500 |
| **Sonar Distance** | 400 |
| **Idle Auto-Heal** | 5 HP/s after 1800s |
| **Explosion Type** | `mediumexplosiongeneric` |
| **Self-Destruct** | `mediumexplosiongenericSelfd` |
| **Seismic Signature** | 0 |
| **No-Chase Category** | VTOL |

---

## ⚔️ **Weapons**

### **1. Medium Sweepfire Heatray** (`leg_medium_heatray`)

Primary hull-mounted beam weapon.

- **Type:** BeamLaser  
- **Range:** 700  
- **Reload Time:** 2.4s  
- **Beam Time:** 0.8s  
- **Area of Effect:** 72  
- **Energy per Shot:** 17  
- **Edge Effectiveness:** 0.15  
- **Weapon Velocity:** 1200  
- **Thickness:** 3.5  
- **Firestarter:** 90  
- **Damage:**  
  - Default: 410  
  - VTOL: 110  
- **Notes:**  
  - Designed for **SURFACE** targets (destroyer-range duelist)  
  - Exclude pre-aim: true (custom behavior for smooth sweepfire)

### **2. Drone Control Matrix** (`drone_control_matrix`)

Specialized weapon logic for spawning and managing autonomous drones.

- **Type:** Stockpiling Cannon (utility)  
- **Range:** 1000 (engagement radius)  
- **Reload / Spawn Cycle:** ~20s (via `spawnrate` and `stockpile`)  
- **Damage:** 0 (control only)  
- **Key Custom Params:**
  - Spawns: `legdrone`
  - Max Drones: 2
  - Engagement Range: 1000
  - Spawn Surface: SEA
  - Control Radius: 1100
  - Docking Enabled: Yes (docking armor, heal, snap radius, etc.)
  - Uses stockpile for drone deployment (metal & energy requirements)

This system turns the destroyer into a **micro-carrier**, extending DPS, scouting, and harassment via its drones.

---

## 🛠️ **Wreckage**

### **Dead Wreck**

- **Metal:** 480  
- **Damage Thresho**
