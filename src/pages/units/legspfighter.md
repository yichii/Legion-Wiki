---
layout: ../../layouts/UnitLayout.astro
title: "Astrapios"
slug: "legspfighter"
shortRole: "Seaplane Fighter"
type: "Air"
image: "/images/units/legspfighter.png"
description: |
  The **Astrapios** is a light Legion sea-plane interceptor built to **hunt down enemy aircraft** and keep your coastline and fleets safe.

  Extremely fast and responsive, it carries a rapid-fire salvo missile launcher that excels at deleting scouts, bombers, and gunships—especially when massed.

  **Best used for:** Intercepting bombers and gunships, escorting sea-plane groups, screening naval pushes  
  **Avoid:** Prolonged exposure to heavy flak, diving into stacked AA, or trying to fight ground targets
metalCost: 90
energyCost: 4500
buildTime: 5500
health: 220
sightRange: 430
airSightDistance: 950
speed: 310.8
weapons: "Light Salvo Missile Launcher"
dps: 138
weaponRange: 760
techLevel: 1
---

# **Legion Sea-Plane Fighter**

**Unit Name:** `legspfighter`  
**Role:** Interceptor / Anti-Air Fighter  
**Model Author:** ZephyrSkies  
**Subfolder:** `Legion/SeaPlanes`  
**Build Picture:** `legspfighter.DDS`  

---

## 🧱 **Build Information**

| Attribute | Value |
|----------|-------|
| **Metal Cost** | 90 |
| **Energy Cost** | 4500 |
| **Build Time** | 5500 |
| **Footprint** | 2×2 |
| **Movement Type** | VTOL / Sea-Plane |
| **Cruise Altitude** | 140 |
| **Speed** | 310.8 |
| **Acceleration / Deceleration** | 0.2075 / 0.1 |
| **Turn Radius** | 64 |
| **Blocking** | No |
| **Water Capable** | Yes (can skim & submerge) |

---

## ⚙️ **General Stats**

| Attribute | Value |
|----------|-------|
| **Health** | 220 |
| **Sight Distance** | 430 |
| **Air Sight Distance** | 950 |
| **Explosion Type** | `smallExplosionGenericAir` |
| **Self-Destruct** | `smallExplosionGenericAir` |
| **Seismic Signature** | 0 |
| **No-Chase Category** | NOTAIR |
| **Safety Distance** | 300 (`attacksafetydistance`) |

---

## ✈️ **Flight Characteristics**

- High-speed interceptor profile
- Smooth-mesh flight model for tight handling
- Optimized for rapid target reacquisition and repeated passes

---

## ⚔️ **Weapons**

### **Light Salvo Missile Launcher** (`leg_light_antiair_missile`)

- **Type:** Missile Launcher  
- **Range:** 760  
- **Reload Time:** 0.8s  
- **Burst:** 3  
- **Tracking:** Yes (turn rate 68,000)  
- **Start Velocity:** 800  
- **Weapon Velocity:** 2500  
- **Damage:**  
  - VTOL: 37  
- **Explosion Effect:** `genericshellexplosion-tiny-aa`  
- **Sound Start:** `packolau`  
- **Sound Hit:** `packohit`

> Equipped as `weapons[1]`, restricted to **VTOL** targets only.

---

## 💥 **Effects**

- **Explosion Generators:**  
  - `custom:barrelshot-tiny-aa`

- **Crash Explosion Generators:**  
  - `crashing-tiny`, `crashing-tiny2`

- **Piece Explosion Generators:**  
  - `airdeathceg2`, `airdeathceg3`, `airdeathceg4`

---

## 🔊 **Sounds**

| Event | Sound |
|------|------|
| Under Attack | `warning1` |
| Selection | `seapsel1` |
| Movement | `vtolcrmv` |
| Cancel Destruct | `cancel2` |

---

### **Summary**

A cheap, lightning-fast **sea-plane interceptor** that dominates the skies through speed and tracking salvo missiles. Mass *Ripcurrents* to shred enemy air wings before they ever reach your fleet.
