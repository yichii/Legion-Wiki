---
layout: ../../layouts/UnitLayout.astro
title: "Iapetus"
slug: "legnavyaaship"
shortRole: "Anti-Air & Radar Support Ship"
type: "Sea"
image: "/images/units/legnavyaaship.png"
description: |
  The **Iapetus** is a light anti-air frigate designed to escort Legion fleets and deny airspace to enemy bombers and gunships.

  Equipped with rapid-fire missile launchers and a built-in radar array, it provides strong short-range air defense while remaining fast and affordable.

  **Best used for:** Protecting naval fleets from air threats  
  **Avoid:** Engaging direct ship-to-ship combat
metalCost: 330
energyCost: 4800
buildTime: 5500
health: 1500
sightRange: 750
radarRange: 1200
airSightDistance: 850
speed: 60
weapons: "Light Anti-Air Missile Launcher"
dps: 120
weaponRange: 760
techLevel: 1
---

# **Legion Naval AA Ship**

**Unit Name:** `legnavyaaship`  
**Category:** Anti-Air / Naval Frigate  
**Model Author:** ZephyrSkies  
**Subfolder:** `Legion/Ships`  
**Build Picture:** `legnavyaaship.DDS`  

---

## 🧱 **Build Information**

| Attribute | Value |
|------------|--------|
| **Metal Cost** | 330 |
| **Energy Cost** | 4800 |
| **Build Time** | 5500 |
| **Footprint** | 4×4 |
| **Movement Class** | BOAT4 |
| **Min. Water Depth** | 30 |
| **Floater** | Yes |
| **Speed** | 60 |
| **Acceleration / Deceleration** | 0.04 / 0.06 |
| **Turn Rate** | 450 |
| **Turn In Place** | Yes (limit 90°) |

---

## ⚙️ **General Stats**

| Attribute | Value |
|------------|--------|
| **Health** | 1500 |
| **Sight Distance** | 750 |
| **Radar Distance** | 1200 |
| **Air Sight Distance** | 850 |
| **Idle Auto-Heal** | 5 HP/s after 1800s |
| **Explosion Type** | `mediumexplosiongeneric` |
| **Self-Destruct** | `mediumexplosiongenericSelfd` |
| **Corpse** | Dead + Heap (reclaimable) |
| **Seismic Signature** | 0 |

---

## ⚔️ **Weapons**

### **Light Anti-Air Missile Launcher**
- **Type:** Missile Launcher  
- **Range:** 760  
- **Reload Time:** 0.6s  
- **Burst:** 3  
- **Tracking:** Yes (turn rate 68,000)  
- **Start Velocity:** 800  
- **Weapon Velocity:** 2500  
- **Damage:** VTOL 24  
- **Explosion Effect:** `genericshellexplosion-tiny-aa`  
- **Sound Start:** `packolau`  
- **Sound Hit:** `packohit`  

### *(Unused / Backup)* **Burst AA Missile**
- **Range:** 900  
- **Reload:** 1.8s  
- **Burst:** 1  
- **Damage:** VTOL 300  

---

## 🛠️ **Wreckage**

### **Dead**
- **Metal:** 500  
- **Damage:** 2940  
- **Object:** `legnavyaaship_dead.s3o`  
- **Reclaimable:** Yes  

### **Heap**
- **Metal:** 250  
- **Damage:** 4032  
- **Object:** `cor4X4A.s3o`  
- **Reclaimable:** Yes  

---

## 💥 **Effects**

- **Explosion Generators:**  
  - `custom:barrelshot-flak`  
  - `custom:waterwake-medium-splash`  
  - `custom:radarpulse_t1_slow`  

- **Piece Explosion Generators:**  
  - `deathceg2`, `deathceg3`, `deathceg4`

---

## 🔊 **Sounds**

| Event | Sound |
|--------|--------|
| Under Attack | `warning1` |
| Cancel Destruct | `cancel2` |
| Cannot Do | `cantdo4` |
| Movement | `shcormov` |
| Selection | `shcorsel` |

---

### **Summary**
A fast-moving **anti-air frigate** designed for fleet escort and air denial.  
The *Legion Naval AA Ship* provides strong short-range missile coverage against aircraft, featuring burst-fire tracking missiles and radar support for mid-range detection.  
Its light armor and low cost make it an efficient AA screen for naval operations.
