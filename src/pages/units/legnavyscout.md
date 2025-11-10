---
layout: ../../layouts/UnitLayout.astro
title: "Hippocampus"
slug: "legnavyscout"
shortRole: "Light Assault Corvette"
type: "Sea"
image: "/images/units/legnavyscout.png"
description: |
  **The Hippocampus** is a fast, lightly armed patrol craft built for early-game sea control, vision, and harassment.

  With high speed, good sight range, and twin rapid-fire machine guns, it excels at chasing down light targets, scouting coastlines, and screening heavier Legion ships.

  **Best used for:** Scouting, raiding exposed builders, and screening the coastline  
  **Avoid:** Brawling with dedicated combat ships or concentrated defenses
metalCost: 120
energyCost: 1600
buildTime: 1800
health: 700
sightRange: 600
speed: 93
weapons: "Twin Rapid-Fire Machine Guns"
dps: 60
weaponRange: 351
techLevel: 1
---

# **Naval Scout**

**Unit Name:** `legnavyscout`  
**Role:** Fast Recon & Harassment Boat  
**Model Authors:** ZephyrSkies (Model), Phill-Art (Concept Art)  
**Subfolder:** `Legion/Ships`  
**Build Picture:** `legnavyscout.DDS`  

---

## 🧱 **Build Information**

| Attribute | Value |
|----------|-------|
| **Metal Cost** | 120 |
| **Energy Cost** | 1600 |
| **Build Time** | 1800 |
| **Footprint** | 3×3 |
| **Movement Class** | BOAT3 |
| **Min. Water Depth** | 12 |
| **Floater** | Yes |
| **Speed** | 93 |
| **Acceleration / Deceleration** | 0.08 / 0.08 |
| **Turn Rate** | 430 |
| **Turn In Place** | Yes (limit 90°) |

---

## ⚙️ **General Stats**

| Attribute | Value |
|----------|-------|
| **Health** | 700 |
| **Sight Distance** | 600 |
| **Idle Auto-Heal** | 5 HP/s after 1800s |
| **Explosion Type** | `mediumexplosiongeneric` |
| **Self-Destruct** | `mediumexplosiongenericSelfd` |
| **No-Chase Category** | UNDERWATER, VTOL |
| **Seismic Signature** | 0 |

---

## ⚔️ **Weapons**

### **Twin Rapid-Fire Machine Guns** (`mg_guns`)

- **Type:** LaserCannon-style ballistic MG  
- **Range:** 351  
- **Reload Time:** 0.4s  
- **Burst:** 2 (rapid)  
- **Area of Effect:** 16  
- **Spray Angle:** 800  
- **Weapon Velocity:** 1050  
- **Damage:**  
  - Default: 12  
  - VTOL: 6  
- **Notes:**  
  - Good vs light ships & raiders  
  - Mounted on a turret for flexible firing arcs  
  - Prioritizes close harassment over high alpha damage

---

## 🛠️ **Wreckage**

### **Dead Wreck**

- **Metal:** 82.5  
- **Damage Threshold:** 300  
- **Footprint:** 3×3  
- **Object:** `legnavyscout_dead.s3o`  
- **Reclaimable:** Yes  

### **Heap**

- **Metal:** 41.25  
- **Damage Threshold:** 500  
- **Footprint:** 2×2  
- **Object:** `arm4X4B.s3o`  
- **Reclaimable:** Yes  

---

## 💥 **Effects**

- **Explosion Generators:**  
  - `custom:barrelshot-tiny`  
  - `custom:waterwake-small-long`  
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

A nimble **Tech 1** scout boat that leverages speed and vision to control the early sea. Perfect for spotting, poking expansions, and escorting higher-value Legion vessels—just don’t treat it like a frontline warship.
