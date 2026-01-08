---
layout: ../../layouts/UnitLayout.astro
title: "Neptune"
slug: "leganavyflagship"
shortRole: "Naval Combat Flagship"
type: "Sea"
image: "/images/units/leganavyflagship.png"
description: |
  The **Neptune** is the Legion’s Tier 2 experimental flagship—an endgame capital ship built to dominate surface combat through **experimental heatrays** and **naval-series rail accelerators**.

  It pairs sustained thermal damage for shredding heavy hulls with brutal railgun alpha for deleting priority targets at long range. If it reaches the battlefield with escort support, it becomes a floating win condition.

  **Best used for:** Breaking stalemates, deleting high-value surface targets, leading decisive fleet pushes  
  **Avoid:** Sub-heavy waters without sonar screen, getting isolated from escorts, or trading into mass torpedoes unsupported
metalCost: 16000
energyCost: 240000
buildTime: 190000
health: 48000
sightRange: 650
radarRange: 1000
speed: 63
weapons: "Experimental Heatrays + Quad Rail Accelerators"
dps: 3067 
weaponRange: 1000
techLevel: 2
---

# **Experimental Naval Flagship**

**Unit Name:** `leganavyflagship`  
**Role:** Endgame Capital Ship / Fleet Breaker  
**Model Author:** ZephyrSkies  
**Subfolder:** `Legion/Ships/T2`  
**Build Picture:** `leganavyflagship.DDS`  

---

## 🧱 **Build Information**

| Attribute | Value |
|----------|-------|
| **Metal Cost** | 16000 |
| **Energy Cost** | 240000 |
| **Build Time** | 190000 |
| **Footprint** | 8×8 |
| **Movement Class** | BOAT9 |
| **Min. Water Depth** | 15 |
| **Floater** | Yes |
| **Speed** | 63 |
| **Acceleration / Deceleration** | 0.012 / 0.012 |
| **Turn Rate** | 150 |
| **Turn In Place** | Yes (limit 90°) |
| **Energy Make** | 500 |

---

## ⚙️ **General Stats**

| Attribute | Value |
|----------|-------|
| **Health** | 48000 |
| **Sight Distance** | 650 |
| **Radar Distance** | 1000 |
| **Idle Auto-Heal** | 25 HP/s after 1800s |
| **Explosion Type** | `FlagshipExplosion` |
| **Self-Destruct** | `FlagshipExplosionSelfd` |
| **Corpse** | Wreck + Heap (reclaimable) |
| **Seismic Signature** | 0 |
| **Paralyze Multiplier** | 0 (immune) |

---

## ⚔️ **Weapons**

### **Targeting System** (`targeting_system`)

Aiming/coordination system used to slave the heatray turrets for consistent target acquisition.

- **Type:** Cannon (utility / no damage)  
- **Range:** 700  
- **Reload Time:** 2.5s  
- **Damage:** 0  
- **Special:** `norangering = 1`

> Equipped as `weapons[1]` and used as the **slave anchor** for heatray turrets.

### **Dual Experimental Thermal Ordnance Generators** ×2 (`leg_experimental_heatray`)

Sustained beam damage that melts heavy surface targets at close-medium range.

Mounted as `weapons[2]` and `weapons[3]`, slaved to the targeting system.

- **Type:** Beam Laser (heatray)  
- **Range:** 700  
- **Reload Time:** 0.033s (continuous beam)  
- **Area of Effect:** 90  
- **Beam Time / TTL:** 0.033  
- **Energy per Shot:** 17  
- **Fire Tolerance:** 50  
- **Explosion Effect:** `custom:heatray-large`  
- **Sound Start:** `heatray4burn`  
- **Damage (per tick):**  
  - Default: 33  
  - Commanders: 17  
  - VTOL: 14  
- **Special:** Excludes pre-aim (snappy tracking)

> Best for **sustained DPS** into large ships and static targets once you’ve forced engagement range.

### **Dual Naval-Series Rail Accelerators** ×4 (`leg_experimental_railgun`)

Heavy deck-mounted rail weapons for long-range, high-impact surface deletion.

Mounted as `weapons[4]`–`weapons[7]` with wide firing arcs.

- **Type:** Laser Cannon (rail accelerator / impact-only)  
- **Range:** 1000  
- **Reload Time:** 3s  
- **Area of Effect:** 80  
- **Energy per Shot:** 600  
- **Weapon Velocity:** 2850  
- **Edge Effectiveness:** 0.90  
- **Impact Only:** Yes (no explode)  
- **Hard Stop:** Yes  
- **Sound Start:** `railgunxl`  
- **Sound Hit:** `mavgun3`  
- **Damage:**  
  - Default: 800  
  - Commanders: 300  
- **Special:** Overpenetrate enabled (`overpenetrate = true`)

> These are your **alpha strike** tools—use them to delete priority targets before they can disengage.

---

## 🛠️ **Wreckage**

### **Dead Wreck**
- **Metal:** 9450  
- **Damage Threshold:** 93000  
- **Footprint:** 6×18  
- **Object:** `leganavyflagship_dead.s3o`  
- **Reclaimable:** Yes  

### **Heap**
- **Metal:** 4725  
- **Damage Threshold:** 40032  
- **Object:** `cor6X6A.s3o`  
- **Reclaimable:** Yes  

---

## 💥 **Effects**

- **Explosion Generators:**  
  - `custom:barrelshot-medium-impulse`  
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

The Legion’s endgame **Tier 2 flagship**: a fast-moving capital hull that combines **continuous heatray burn** with **devastating railgun alpha**. Screen it with sonar and AA, keep torpedoes off it, and it will break surface fleets and fortified positions by sheer force—turning any naval fight into a one-sided execution.
