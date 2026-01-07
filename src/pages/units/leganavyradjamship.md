---
layout: ../../layouts/UnitLayout.astro
title: "Dolus"
slug: "leganavyradjamship"
shortRole: "Hybrid Radar & Jammer Ship"
type: "Sea"
image: "/images/units/leganavyradjamship.png"
description: |
  The **Dolus** is a Tier 2 naval utility ship that provides **massive radar coverage** while projecting a **radar jamming field** to obscure your fleet’s movements.

  Cheap and fragile, it’s not meant to fight—keep it behind your battle line and toggle jamming as needed to disrupt enemy intel and protect high-value ships during pushes.

  **Best used for:** Fleet scouting and intel, masking approaches with jamming, supporting long-range bombardment  
  **Avoid:** Frontline contact, getting picked by raiders, or sailing without escort
metalCost: 450
energyCost: 6000
buildTime: 16500
health: 1700
sightRange: 600
radarRange: 1850
radarJamRange: 650
speed: 36
energyUpkeep: 120
techLevel: 2
---

# **Tier 2 Radar Jam Ship**

**Unit Name:** `leganavyradjamship`  
**Role:** Radar Coverage / Radar Jamming Utility  
**Model Author:** Beherith  
**Subfolder:** `Legion/Ships/T2`  
**Build Picture:** `leganavyradjamship.DDS`  

---

## 🧱 **Build Information**

| Attribute | Value |
|----------|-------|
| **Metal Cost** | 450 |
| **Energy Cost** | 6000 |
| **Build Time** | 16500 |
| **Footprint** | 3×3 |
| **Movement Class** | BOAT3 |
| **Min. Water Depth** | 6 |
| **Floater** | Yes |
| **Speed** | 36 |
| **Acceleration / Deceleration** | 0.03574 / 0.03574 |
| **Turn Rate** | 350 |
| **Turn In Place** | Yes (limit 90°) |
| **On/Off Toggle** | Yes (`onoffable`) |
| **Energy Upkeep (active)** | 120 |

---

## ⚙️ **General Stats**

| Attribute | Value |
|----------|-------|
| **Health** | 1700 |
| **Sight Distance** | 600 |
| **Radar Distance** | 1850 |
| **Radar Jam Distance** | 650 |
| **Idle Auto-Heal** | 5 HP/s after 1800s |
| **Explosion Type** | `mediumexplosiongeneric` |
| **Self-Destruct** | `mediumexplosiongenericSelfd` |
| **Seismic Signature** | 0 |
| **No-Chase Category** | MOBILE |
| **Special** | `off_on_stun = true` (turns off when stunned) |

---

## 🛰️ **Radar & Jamming**

- **Radar:** Extremely long-range detection for spotting fleets, artillery targets, and incoming threats.
- **Jammer:** A mid-radius field that disrupts enemy radar intel, helping your ships approach or reposition unseen.
- **Toggle:** Use `onoffable` to disable jamming when conserving energy or when stealth isn’t needed.

---

## 🛠️ **Wreckage**

### **Dead Wreck**
- **Metal:** 60  
- **Damage Threshold:** 684  
- **Footprint:** 4×4  
- **Object:** `leganavyradjamship_dead.s3o`  
- **Reclaimable:** Yes  

### **Heap**
- **Metal:** 30  
- **Damage Threshold:** 4032  
- **Object:** `cor4X4A.s3o`  
- **Reclaimable:** Yes  

---

## 💥 **Effects**

- **Explosion Generators:**  
  - `custom:bowsplash-small`  
  - `custom:waterwake-small`  
  - `custom:radarpulse_t2`  

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
| Selection | `radjam2` |

---

### **Summary**

A low-cost Tier 2 utility hull that wins wars through **information control**. The *Aegis Wraith* gives you huge radar vision and a jamming bubble to hide your fleet’s real position—perfect for enabling missile ships, artillery platforms, and decisive naval pushes.
