---
layout: ../../layouts/UnitLayout.astro
title: "Advanced Shipyard"
slug: "legadvshipyard"
shortRole: "Produces Tech 2 Legion Ships"
type: "Factories"
image: "/images/units/legadvshipyard.png"
description: |
  The **Advanced Shipyard** is Legion’s primary **Tech 2 naval factory**, enabling production of advanced warships, submarines, and specialized support vessels.

  It must be placed in deep water and serves as the backbone of a late-game navy—unlocking everything from heavy submarines and cruisers to missile ships, anti-nuke carriers, and even the flagship.

  **Best used for:** Scaling a T2 navy, teching into advanced sea control  
  **Avoid:** Forward placement without defenses (large footprint, high value target)
metalCost: 3100
energyCost: 10000
buildTime: 15700
health: 5900
sightRange: 301.6
workertime: 300
energyStorage: 200
metalStorage: 200
minWaterDepth: 30
waterline: 19
techLevel: 2
buildPower: 300
---

# **Legion Advanced Shipyard**

**Unit Name:** `legadvshipyard`  
**Role:** Tech 2 Naval Factory / Ship Production  
**Model Author:** Tharsis  
**Subfolder:** `Legion/Labs`  
**Build Picture:** `legadvshipyard.DDS`  

---

## 🧱 **Build Information**

| Attribute | Value |
|----------|-------|
| **Metal Cost** | 3100 |
| **Energy Cost** | 10000 |
| **Build Time** | 15700 |
| **Footprint** | 12×12 |
| **Min. Water Depth** | 30 |
| **Waterline** | 19 |
| **Builder** | Yes |
| **Worker Time** | 300 |
| **Terraform Speed** | 1000 |
| **Energy Storage** | 200 |
| **Metal Storage** | 200 |
| **Can Move** | Yes (factory hull type) |

---

## ⚙️ **General Stats**

| Attribute | Value |
|----------|-------|
| **Health** | 5900 |
| **Sight Distance** | 301.6 |
| **Idle Auto-Heal** | 5 HP/s after 1800s |
| **Explosion Type** | `largeBuildingexplosiongeneric` |
| **Self-Destruct** | `largeBuildingExplosionGenericSelfd` |
| **Seismic Signature** | 0 |
| **Corpse** | Dead wreck (reclaimable) |

---

## 🏭 **Build Options (Produces)**

This shipyard can construct the following Tech 2 naval units:

- `leganavyconsub`
- `leganavyengineer`
- `leganavycruiser`
- `leganavyheavysub`
- `leganavybattlesub`
- `leganavyaaship`
- `leganavyradjamship`
- `leganavyantinukecarrier`
- `leganavybattleship`
- `leganavyartyship`
- `leganavymissileship`
- `leganavyflagship`
- `leganavyantiswarm`

---

## 🛠️ **Wreckage**

### **Dead Wreck**
- **Metal:** 2174  
- **Damage Threshold:** 2650  
- **Footprint:** 12×12  
- **Object:** `legadvshipyard_dead.s3o`  
- **Reclaimable:** Yes  

---

## 💥 **Effects**

- **Explosion Generators:**  
  - `custom:WhiteLight`

- **Piece Explosion Generators:**  
  - `deathceg3`, `deathceg4`

---

## 🔊 **Sounds**

| Event | Sound |
|------|------|
| Under Attack | `warning1` |
| Unit Complete | `untdone` |
| Selection | `pshpactv` |
| Cancel Destruct | `cancel2` |

---

### **Summary**

A large, high-value Tech 2 naval factory that unlocks Legion’s advanced fleet roster. Protect it with shoreline defenses and AA—once online, it’s your gateway to **dominance at sea**.
