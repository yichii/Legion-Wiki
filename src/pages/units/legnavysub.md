---
layout: ../../layouts/UnitLayout.astro
title: "Ketea"
slug: "legnavysub"
shortRole: "Combat Submarine"
type: "Sea"
image: "/images/units/legnavysub.png"
description: |
  **The Ketea** is Legion's stealth torpedo platform for early-game underwater dominance.

  With solid mobility, self-repair, and a forward-firing torpedo launcher, it excels at ambushing enemy ships and controlling contested waters from below the surface.

  **Best used for:** Hunting surface ships, denying naval passages, and ambushes  
  **Avoid:** Detection without support, massed sonar coverage, and aircraft
metalCost: 340
energyCost: 2600
buildTime: 4800
health: 640
sightRange: 400
sonarRange: 400
speed: 54
weapons: "Submerged Torpedo Launcher"
dps: 93
weaponRange: 400
techLevel: 1
---


# **Attack Submarine**

**Unit Name:** `legnavysub`  
**Role:** Stealth Torpedo Submarine  
**Model Authors:** Tharsis (Model), Phill-Arts (Concept Art)  
**Subfolder:** `Legion/Ships`  
**Build Picture:** `legnavysub.DDS`  

---

## 🧱 **Build Information**

| Attribute | Value |
|----------|-------|
| **Metal Cost** | 340 |
| **Energy Cost** | 2600 |
| **Build Time** | 4800 |
| **Footprint** | 3×3 |
| **Movement Class** | UBOAT4 |
| **Min. Water Depth** | 15 |
| **Speed** | 54 |
| **Acceleration / Deceleration** | 0.0451 / 0.0451 |
| **Turn Rate** | 520 |
| **Turn In Place** | Yes (limit 90°) |
| **Waterline** | 45 |
| **Upright** | Yes |

---

## ⚙️ **General Stats**

| Attribute | Value |
|----------|-------|
| **Health** | 640 |
| **Sight Distance** | 400 |
| **Sonar Distance** | 400 |
| **Auto-Heal** | 2 HP/s |
| **Idle Auto-Heal** | 8 HP/s after 900s |
| **Explosion Type** | `smallExplosionGeneric-uw` |
| **Self-Destruct** | `smallExplosionGenericSelfd-uw` |
| **No-Chase Category** | VTOL |
| **Seismic Signature** | 0 |

---

## ⚔️ **Weapons**

### **Submerged Torpedo Launcher** (`leg_torpedo_launcher`)

- **Type:** TorpedoLauncher  
- **Range:** 400  
- **Reload Time:** 1.5s  
- **Area of Effect:** 32  
- **Waterweapon:** Yes  
- **Forward Firing:** `maindir = 0 0 1`, `maxangledif = 90`  
- **Flight Time:** 3s  
- **Start Velocity:** 130  
- **Weapon Velocity:** 200  
- **Weapon Acceleration:** 15  
- **Turn Rate:** 12000 (high tracking)  
- **Damage:**  
  - Default: 140  
- **Notes:**  
  - Optimized for striking ships and heavier naval targets
  - Burnblow + tracking make it reliable in close-to-mid range underwater engagements

---

## 🛠️ **Wreckage**

### **Dead Wreck**

- **Metal:** 265  
- **Damage Threshold:** 1002  
- **Footprint:** 3×3  
- **Object:** `legnavysub_dead.s3o`  
- **Reclaimable:** Yes  

### **Heap**

- **Metal:** 132.5  
- **Damage Threshold:** 4032  
- **Footprint:** 2×2  
- **Object:** `cor4X4B.s3o`  
- **Reclaimable:** Yes  

---

## 💥 **Effects**

- **Explosion Generators:**  
  - `custom:subbubbles`  
  - `custom:subwake`  
  - `custom:subtorpfire`  
- **Piece Explosion Generators:**  
  - `deathceg2`, `deathceg3`, `deathceg4`

---

## 🔊 **Sounds**

| Event | Sound |
|-------|------|
| Under Attack | `warning1` |
| Cancel Destruct | `cancel2` |
| Cannot Do | `cantdo4` |
| Movement | `sucormov` |
| Selection | `sucorsel` |

---

### **Summary**

A dedicated **Tech 1** attack sub that punishes exposed ships and poorly screened navies. Use it to secure underwater control and threaten key naval routes, but avoid letting it operate alone against well-detected, well-defended fleets.
