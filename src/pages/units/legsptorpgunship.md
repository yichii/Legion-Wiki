---
layout: ../../layouts/UnitLayout.astro
title: "Ladon"
slug: "legsptorpgunship"
shortRole: "Torpedo Seaplane Gunship"
type: "Air"
image: "/images/units/legsptorpgunship.png"
description: |
  The **Ladon** is a fast Legion torpedo sea-plane built to hunt **ships and submarines** with burst-fired tracking torpedoes.

  With built-in sonar and hover attack capability, it can quickly reposition over water, punish isolated naval units, and help screen for subs—especially when paired with radar coverage.

  **Best used for:** Ambushing ships, finishing damaged vessels, anti-sub support, rapid response over oceans  
  **Avoid:** Flying into concentrated AA, fighting land-based defenses, or attacking fast-hover targets
metalCost: 190
energyCost: 5000
buildTime: 9000
health: 900
sightRange: 535
sonarRange: 535
speed: 273
weapons: "VTOL Torpedo Launcher"
dps: 62
weaponRange: 460
techLevel: 1
---

# **Legion Torpedo Sea-Plane Gunship**

**Unit Name:** `legsptorpgunship`  
**Role:** Anti-Ship / Anti-Sub VTOL  
**Model Author:** ZephyrSkies  
**Subfolder:** `Legion/Seaplanes`  
**Build Picture:** `legsptorpgunship.DDS`  

---

## 🧱 **Build Information**

| Attribute | Value |
|----------|-------|
| **Metal Cost** | 190 |
| **Energy Cost** | 5000 |
| **Build Time** | 9000 |
| **Footprint** | 3×3 |
| **Movement Type** | VTOL / Sea-Plane (hover attack) |
| **Cruise Altitude** | 100 |
| **Hover Attack** | Yes |
| **Speed** | 273 |
| **Acceleration / Deceleration** | 0.24 / 0.4 |
| **Turn Rate** | 720 |
| **Blocking** | No |
| **Water Capable** | Yes (can skim & submerge) |

---

## ⚙️ **General Stats**

| Attribute | Value |
|----------|-------|
| **Health** | 900 |
| **Sight Distance** | 535 |
| **Sonar Distance** | 535 |
| **Idle Auto-Heal** | 5 HP/s after 1800s |
| **Explosion Type** | `mediumexplosiongeneric` |
| **Self-Destruct** | `mediumExplosionGenericSelfd` |
| **Seismic Signature** | 0 |
| **No-Chase Category** | VTOL |

---

## ⚔️ **Weapons**

### **VTOL Torpedo Launcher** (`leg_torpedo_launcher`)

- **Type:** TorpedoLauncher (water weapon)  
- **Range:** 460  
- **Reload Time:** 4.5s  
- **Burst:** 2  
- **Burst Rate:** 0.3s  
- **Tracking:** Yes (turn rate 8000)  
- **Start Velocity / Weapon Velocity:** 200 / 250  
- **Flight Time:** 3s  
- **Edge Effectiveness:** 0.25  
- **Explosion Effect:** `genericshellexplosion-medium`  
- **Damage:**  
  - Default: 140  
  - Commanders: 70  
  - VTOL: 15  
- **Special Effect:** `torpwaterpen` (water penetration effect)

> Equipped as `weapons[1]`, restricted to **NOTHOVER** targets (ships/subs), with a forward firing arc (max angle diff 120°).

---

## 💥 **Effects**

- **Explosion Generators:**  
  - `custom:barrelshot-tiny`

- **Crash Explosion Generators:**  
  - `crashing-small`, `crashing-small2`, `crashing-small3`

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

A speedy torpedo VTOL that brings **mobile anti-ship pressure** and **sonar-backed sub hunting**. The *Tidefang* is best when it can strike and disengage—use it to punish exposed naval units, but keep it away from heavy AA.
