---
layout: ../../layouts/UnitLayout.astro
title: "Notus"
slug: "leganavyaaship"
shortRole: "Advanced Anti-Air Gatling Flak Ship"
type: "Sea"
image: "/images/units/leganavyaaship.png"
description: |
  The **Notus** is a Tier 2 Legion anti-air escort ship built to keep your fleet safe from bombers, gunships, and mass VTOL pushes.

  It combines **rapid-fire microflak** with **dual salvo missile launchers**, creating layered air denial at both medium and long range—ideal for protecting heavier ships and coastal positions.

  **Best used for:** Escorting T2 fleets, holding air lanes, defending shoreline staging areas  
  **Avoid:** Direct ship-to-ship brawls or overextending without frontline cover
metalCost: 1000
energyCost: 12000
buildTime: 15000
health: 3900
sightRange: 465
airSightDistance: 900
speed: 57
weapons: "Microflak Cannons + Dual AA Missile Launchers"
dps: 482
weaponRange: 860
techLevel: 2
---

# **Tier 2 Naval AA Escort Ship**

**Unit Name:** `leganavyaaship`  
**Role:** Anti-Air Fleet Escort / Air Denial  
**Model Authors:** ZephyrSkies, Tharsis (AA Guns)  
**Subfolder:** `Legion/Ships/T2`  
**Build Picture:** `leganavyaaship.DDS`  

---

## 🧱 **Build Information**

| Attribute | Value |
|----------|-------|
| **Metal Cost** | 1000 |
| **Energy Cost** | 12000 |
| **Build Time** | 15000 |
| **Footprint** | 4×4 |
| **Movement Class** | BOAT4 |
| **Min. Water Depth** | 30 |
| **Floater** | Yes |
| **Speed** | 57 |
| **Acceleration / Deceleration** | 0.03 / 0.03 |
| **Turn Rate** | 320 |
| **Turn In Place** | Yes (limit 90°) |

---

## ⚙️ **General Stats**

| Attribute | Value |
|----------|-------|
| **Health** | 3900 |
| **Sight Distance** | 465 |
| **Air Sight Distance** | 900 |
| **Idle Auto-Heal** | 5 HP/s after 1800s |
| **Explosion Type** | `mediumexplosiongeneric` |
| **Self-Destruct** | `mediumexplosiongenericSelfd` |
| **Corpse** | Wreck + Heap (reclaimable) |
| **Seismic Signature** | 0 |
| **No-Chase Category** | NOTAIR |

---

## ⚔️ **Weapons**

### **Dual Rotary Microflak Cannons** (`leg_t2_microflak_mobile`)

Primary AA battery providing extremely high hit density against VTOL swarms.

- **Type:** Cannon (microflak)  
- **Range:** 800  
- **Reload Time:** 0.166s  
- **Burst:** 3  
- **Burst Rate:** 0.02  
- **Area of Effect:** 35  
- **Accuracy:** 1000  
- **Gravity Affected:** Yes  
- **Turret:** Yes  
- **Weapon Velocity:** 1900  
- **Damage:** VTOL 40  
- **Effects:** `custom:flakshard`  
- **Sound Start:** `flakfire`  
- **Sound Hit:** `flakhit`  

### **Advanced Anti-Air Salvo Missile Launchers** ×2 (`light_antiair_missile`)

Two missile mounts provide longer-range tracking coverage to finish targets outside flak range.

- **Type:** Missile Launcher (fixed launcher)  
- **Range:** 860  
- **Reload Time:** 1.0s  
- **Burst:** 3  
- **Tracking:** Yes (turn rate 68,000)  
- **Start Velocity:** 800  
- **Weapon Velocity:** 2500  
- **Damage:** VTOL 20  
- **Explosion Effect:** `genericshellexplosion-tiny-aa`  
- **Sound Start:** `packolau`  
- **Sound Hit:** `packohit`  

> Equipped weapons: `weapons[1]` = microflak, `weapons[2]` and `weapons[3]` = missile launcher (dual mount).

---

## 🛠️ **Wreckage**

### **Dead Wreck**
- **Metal:** 500  
- **Damage Threshold:** 2940  
- **Object:** `leganavyaaship_dead.s3o`  
- **Reclaimable:** Yes  

### **Heap**
- **Metal:** 250  
- **Damage Threshold:** 4032  
- **Object:** `cor4X4A.s3o`  
- **Reclaimable:** Yes  

---

## 💥 **Effects**

- **Explosion Generators:**  
  - `custom:barrelshot-flak`  
  - `custom:waterwake-medium`  
  - `custom:bowsplash-medium`  
  - `custom:barrelshot-tiny-aa`  

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

A tough **Tier 2** Legion AA escort ship that layers **dense microflak coverage** with **dual tracking missile salvos**. Keep it near your high-value ships to deny airspace, shred VTOL blobs, and force enemy aircraft to disengage before they can land meaningful damage.
