# DevOps Site (Jekyll on GitHub Pages)

**How to deploy**
1. Upload this folder to your GitHub repo (branch `main`).  
2. Settings → Pages → Source: `Deploy from a branch` → `main` → `/ (root)`.  
3. Wait 1–2 minutes until Pages finishes building.

**Customize**
- Replace `assets/img/logo.svg` with your logo (same filename). It will be used in the header and as mask-icon.
- Replace `assets/img/favicon.svg` with your favicon (or add .png/.ico and uncomment links in `_layouts/default.html`).
- Update links in `contacts.md`.
- Colors and spacing: edit `assets/css/style.css` variables.
- Dark/Light: click the moon/sun button; preference is saved in `localStorage`.

**Add pages**
Create `page.md` with front matter:
```
---
title: "Page"
layout: default
---

# Title
Content here
```
