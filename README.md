## 📘 Legion Wiki

A fan-made wiki for the **Legion** faction in [Beyond All Reason (BAR)](https://www.beyondallreason.info/), built with [Astro](https://astro.build/) and designed for clean visuals, mobile responsiveness, and contributor-friendly content management.

---

### 🚀 Features

* ✅ Astro-powered static site
* ✅ Tiered unit categorization (T1, T2, T3)
* ✅ Visual unit stats with dynamic bars
* ✅ Markdown-based unit definitions (`.md`)
* ✅ Responsive UI with hover/tap adaptations
* ✅ Auto-grouped units by type (e.g., Bots, Vehicles, Air)

---

### 📁 Project Structure

```
src/
  ├── components/        # Reusable UI components (UnitCard, Navbar, etc.)
  ├── layouts/           # Page and unit layouts
  ├── pages/
  │   ├── units/         # Unit pages (auto-generated from .md files)
  │   └── type/[type].astro  # Dynamic page per unit type
  └── styles/            # Global styles
public/
  └── images/units/      # Unit images
```

---

### 🧱 Tech Stack

* [Astro](https://astro.build/) — static site generator
* [Markdown](https://www.markdownguide.org/) — content source
* TypeScript + Astro Islands — interactivity
* Custom components for stat bars, badges, responsive UI

---

### 👨‍💻 Contributing

1. **Fork** the repo

2. **Clone** locally

   ```bash
   git clone https://github.com/yichii/Legion-Wiki.git
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Start the dev server**

   ```bash
   npm run dev
   ```

5. **Create or edit a unit** in `/src/pages/units/` as a `.md` file
   Follow the format used in other units (see `legkeres.md`, `legfusionadv.md`, etc.)

6. **Submit a pull request** 🎉

---

### 📄 Markdown Format Example

```yaml
---
title: "Keres"
slug: "legkeres"
unitType: "Vehicles"
tier: "T3"
shortRole: "Heavy Assault and Anti-Swarm Tank"
image: "/images/units/legkeres.png"
description: |
  **The Keres** is a powerful frontline tank...
metalCost: 2600
energyCost: 57000
buildTime: 60000
health: 23000
sightRange: 650
speed: 48
weapons: |
  Heavy Riot Cannon
  Twin Heavy Rotary Cannons
dps: 535
weaponRange: 450
techLevel: 3
---
```

---

### 🙌 Acknowledgements

* Inspired by the *Beyond All Reason* community
* Special thanks to the BAR devs for their incredible open RTS platform

---

### 📬 Contact

Have questions or want to help with layout, design, or content? Open an issue or reach out via Discord or GitHub discussions.

