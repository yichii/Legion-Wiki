---
layout: ../../layouts/UnitLayout.astro
title: "Dionysus"
slug: "legnavyrezsub"
shortRole: "Resurrection Submarine"
type: "Sea"
image: "/images/units/legnavyrezsub.png"
description: |
  The **Resurrection Submarine** is a stealthy utility unit that revives fallen Legion ships and reclaimable wrecks from beneath the waves.

  With strong reclaim and resurrection power plus solid mobility, it excels at turning naval battles into long-term value — quietly rebuilding your fleet from enemy losses.

  **Best used for:** Recovering wrecks after engagements, underwater reclamation, value snowball  
  **Avoid:** Direct combat and operating without escort or vision

metalCost: 200
energyCost: 3200
buildTime: 5960
health: 420
sightRange: 300
sonarRange: 150
speed: 66.9
buildPower: 150
techLevel: 1
---

# **Resurrection Submarine**

**Unit Name:** `legnavyrezsub`  
**Role:** Underwater Resurrection & Reclaim Support  
**Model Authors:** ZephyrSkies (Model), JjackVII (Concept Art)  
**Subfolder:** `Legion/Ships`  
**Build Picture:** `legnavyrezsub.DDS`  

---

## 🧱 **Build Information**

| Attribute | Value |
|----------|-------|
| **Metal Cost** | 200 |
| **Energy Cost** | 3200 |
| **Build Time** | 5960 |
| **Footprint** | 3×3 |
| **Movement Class** | UBOAT4 |
| **Min. Water Depth** | 15 |
| **Speed** | 66.9 |
| **Acceleration / Deceleration** | 0.05333 / 0.05333 |
| **Turn Rate** | 525 |
| **Turn In Place** | Yes (limit 90°) |
| **Waterline** | 80 |

---

## ⚙️ **General Stats**

| Attribute | Value |
|----------|-------|
| **Health** | 420 |
| **Sight Distance** | 300 |
| **Sonar Distance** | 150 |
| **Auto-Heal** | 2 HP/s |
| **Idle Auto-Heal** | 3 HP/s after 300s |
| **Build Distance** | 140 |
| **Workertime** | 150 |
| **Terraform Speed** | 2250 |
| **Reclaim Speed** | 100 |
| **Can Resurrect** | Yes |
| **Can Assist** | No |
| **Explosion Type** | `smallexplosiongeneric-uw` |
| **Self-Destruct** | `smallexplosiongenericSelfd-uw` |
| **Seismic Signature** | 0 |

---

## 🏗️ **Function**

- Underwater builder-type unit focused on:
  - **Resurrecting** destroyed units (especially ships and subs).
  - **Reclaiming** wrecks and features for efficient resource conversion.
- Does **not** assist live build queues, keeping its role specialized.
- Best paired with combat vessels to safely operate around contested wreck fields.

---

## 💥 **Effects**

- **Piece Explosion Generators:**  
  - `deathceg2-builder`  
  - `deathceg3-builder`  
  - `deathceg4-builder`

---

## 🔊 **Sounds**

| Event | Sound |
|-------|------|
| Build | `nanlath1` |
| Capture | `capture1` |
| Repair | `repair1` |
| Working | `reclaim1` |
| Under Attack | `warning1` |
| Cancel Destruct | `cancel2` |
| Cannot Do | `cantdo4` |
| Movement | `suarmmov` |
| Selection | `suarmsel` |

---

### **Summary**

A fragile but highly impactful **Tech 1** underwater support unit. The **Resurrection Submarine** shines in drawn-out naval wars, quietly reclaiming and reviving wrecks to turn previous battles into a long-term Legion advantage — as long as you keep it protected.
