---
layout: ../../layouts/UnitLayout.astro
title: "Hecatoncheir"
slug: "legspcarrier"
shortRole: "Airborne Drone Carrier"
type: "Air"
image: "/images/units/legspcarrier.png"
description: |
  The **Hecatoncheir** is a Tier 2 flying carrier that deploys and controls **Legion drones** over the sea, acting as a mobile airbase and forward control node.

  It’s fast, durable for an aircraft, and carries onboard radar—making it excellent for scouting and projecting pressure while its drones harass, screen, or finish targets.

  **Best used for:** Mobile drone pressure, scouting with radar, supporting naval pushes, harassment and cleanup  
  **Avoid:** Flying into dedicated anti-air, staying stationary over enemy territory, or relying on it as a frontline brawler
metalCost: 250
energyCost: 5000
buildTime: 7500
health: 1500
sightRange: 600
radarRange: 1000
speed: 93
weapons: "Drone Targeting System (spawns LegDrones)"
dps: 0
weaponRange: 1000
techLevel: 2
---

# **Legion Sea-Plane Drone Carrier**

**Unit Name:** `legspcarrier`  
**Role:** Flying Drone Carrier / Mobile Utility  
**Model Author:** ZephyrSkies  
**Subfolder:** `Legion/SeaPlanes`  
**Build Picture:** `legspcarrier.DDS`  

---

## 🧱 **Build Information**

| Attribute | Value |
|----------|-------|
| **Metal Cost** | 250 |
| **Energy Cost** | 5000 |
| **Build Time** | 7500 |
| **Footprint** | 4×4 |
| **Movement Type** | VTOL / Sea-Plane (Flying Carrier) |
| **Cruise Altitude** | 100 |
| **Floater** | Yes |
| **Speed** | 93 |
| **Acceleration / Deceleration** | 0.09 / 0.09 |
| **Turn Rate** | 540 |
| **Hover Attack** | Yes |
| **Banking Allowed** | No |
| **Air Strafe** | No |

---

## ⚙️ **General Stats**

| Attribute | Value |
|----------|-------|
| **Health** | 1500 |
| **Sight Distance** | 600 |
| **Radar Distance** | 1000 |
| **Idle Auto-Heal** | 15 HP/s after 1200s |
| **Explosion Type** | `largeexplosiongeneric` |
| **Self-Destruct** | `largeExplosionGenericSelfd` |
| **Seismic Signature** | 0 |
| **No-Chase Category** | VTOL |
| **Upright** | Yes |

---

## 🛰️ **Carrier Mechanics**

This unit functions as a **flying carrier**:
- Spawns and controls `legdrone` units via a dedicated controller weapon.
- Drones operate within a **control radius** and can dock for healing/armor benefits.
- Uses a **stockpile system** (limited drones available at once).

---

## ⚔️ **Weapons / Systems**

### **Drone Targeting System** (`leg_drone_controller`)

A control “weapon” that manages drone production and command—does not deal direct damage.

- **Type:** Cannon (controller system)  
- **Range:** 1000  
- **Reload Time:** 2.5s  
- **Stockpile:** Yes  
- **Stockpile Time:** 10s  
- **Fires:** Spawns drones (no direct damage)

**Drone Settings (custom):**
- **Carried Unit:** `legdrone`  
- **Max Active Drones:** 2  
- **Spawn Rate:** 15s  
- **Engagement Range:** 1100  
- **Control Radius:** 1200  
- **Per Drone Cost:** 15 metal / 500 energy  
- **Docking Enabled:** Yes  
  - Docking Armor: 0.2  
  - Docking Heal Rate: 24  
  - Dock to Health Threshold: 66%  
  - Docking Radius: 80  
  - Docking Pieces: `11 13`  
- **On Death:** `release` (drones are released)

> Equipped as `weapons[1]`, restricted to **NOTSUB** targets for engagement logic.

### *(Optional / Commented Out)* **AA Salvo Missiles**
The unit contains an AA missile definition, but it’s **not currently equipped** (commented out in `weapons`).

---

## 💥 **Effects**

- **Explosion Generators:**  
  - `custom:barrelshot-small`

- **Crash Explosion Generators:**  
  - `crashing-large`, `crashing-large2`, `crashing-large3`

- **Piece Explosion Generators:**  
  - `airdeathceg2`, `airdeathceg3`, `airdeathceg4`

---

## 🔊 **Sounds**

| Event | Sound |
|------|------|
| Under Attack | `warning1` |
| Cancel Destruct | `cancel2` |
| Cannot Do | `cantdo4` |
| Movement | `vtolcrmv` |
| Selection | `vtolcrac` |

---

### **Summary**

A cheap, fast Tier 2 flying utility carrier that projects power through **drones**, not direct weapons. Use the *Sky-Dock* to scout with radar, harass from unexpected angles, and keep pressure up while staying out of heavy AA arcs.
