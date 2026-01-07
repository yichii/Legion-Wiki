---
layout: ../../layouts/UnitLayout.astro
title: "Okeanos"
slug: "legspradarsonarplane"
shortRole: "Radar/Sonar Seaplane"
type: "Air"
image: "/images/units/legspradarsonarplane.png"
description: |
  The **Okeanos** is a high-speed Legion reconnaissance sea-plane that provides **deep radar coverage** and **strong sonar detection** for fleets and coastal operations.

  With massive vision range, long radar reach, and underwater detection, it excels at spotting incoming air raids, locating submarines, and maintaining map control—without needing to commit expensive ships.

  **Best used for:** Radar scouting, submarine detection, early warning for fleets, maintaining vision over oceans  
  **Avoid:** Flying into anti-air nets, loitering near enemy airfields, or using it as a combat unit
metalCost: 125
energyCost: 7000
buildTime: 9050
health: 580
sightRange: 1100
radarRange: 2250
sonarRange: 900
speed: 338.1
weapons: "None (Recon Utility)"
dps: 0
weaponRange: 0
techLevel: 1
---

# **Legion Radar / Sonar Sea-Plane**

**Unit Name:** `legspradarsonarplane`  
**Role:** Recon / Detection Utility  
**Model Author:** ZephyrSkies  
**Subfolder:** `Legion/SeaPlanes`  
**Build Picture:** `legspradarsonarplane.DDS`  

---

## 🧱 **Build Information**

| Attribute | Value |
|----------|-------|
| **Metal Cost** | 125 |
| **Energy Cost** | 7000 |
| **Build Time** | 9050 |
| **Footprint** | 3×3 |
| **Movement Type** | VTOL / Sea-Plane |
| **Cruise Altitude** | 220 |
| **Speed** | 338.1 |
| **Acceleration / Deceleration** | 0.1325 / 0.05 |
| **Turn Radius** | 64 |
| **Blocking** | No |
| **Water Capable** | Yes (can skim & submerge) |

---

## ⚙️ **General Stats**

| Attribute | Value |
|----------|-------|
| **Health** | 580 |
| **Sight Distance** | 1100 |
| **Radar Distance** | 2250 |
| **Sonar Distance** | 900 |
| **Idle Auto-Heal** | 5 HP/s after 1800s |
| **Explosion Type** | `mediumexplosiongeneric` |
| **Self-Destruct** | `mediumExplosionGenericSelfd` |
| **Seismic Signature** | 0 |

---

## 🛰️ **Detection Role**

- **Radar (2250):** Early warning against air raids and ship movements  
- **Sonar (900):** Reliable submarine detection for naval pushes  
- **Vision (1100):** Excellent spotting for long-range artillery, missiles, and fleet positioning  

This unit is best used as an **information tool**, not a fighter.

---

## 💥 **Effects**

- **Explosion Generators:**  
  - `custom:radarpulse_t2`

- **Crash Explosion Generators:**  
  - `crashing-small`, `crashing-small2`, `crashing-small3`

- **Piece Explosion Generators:**  
  - `airdeathceg2`, `airdeathceg3`, `airdeathceg4`

---

## 🔊 **Sounds**

| Event | Sound |
|------|------|
| Under Attack | `warning1` |
| Selection | `seasonr2` |
| Movement | `vtolarmv` |
| Cancel Destruct | `cancel2` |

---

### **Summary**

A fast, fragile **radar + sonar recon sea-plane** that wins games through information. Keep it moving, keep it safe, and let it provide the vision your navy needs to strike first—especially versus submarines.
