# ✈️ BIM Tour Dubai 2026 — Travel Companion App

Mobile-first web app for the **Dubai Trip · Big 5 Global 2026 & Strategic BIM Meetings** (ACCA Software), built from Travel Plan v2.

## Features
- 🏠 **Trip** — overview, week-at-a-glance strip (tap a day → schedule), readiness progress bar
- ✈️ **Travel** — flight cards (EK 098 / EK 097), tickets, hotel, V1 → V2 change log
- 📅 **Schedule** — BIM tour & daily meetings in their own tab, colour-coded by category, with ⭐ TOP EVENT / 🔑 IMPORTANT highlights and logistics warnings
- 🏛️ **Big 5** — opening hours, show-floor game plan, exhibitor targets by tier (collapsible), talks agenda, zones
- ✅ **Reminders** — special reminders + packing checklist, tap to confirm on completion (saved in the phone via localStorage), urgent items in red, badge on the tab
- ℹ️ **Info** — Dubai essentials, transport, etiquette, tap-to-call emergency numbers, quick reference

## Run locally
```bash
npm install
npm run dev
```

## Deploy
Push to GitHub, then on [vercel.com](https://vercel.com) → **Add New Project** → import `jonlewuk-ship-it/BIM-TOUR-Dubai`. Vercel auto-detects Vite — no settings needed. Every `git push` redeploys.

```bash
git init
git add .
git commit -m "BIM Tour Dubai 2026 travel app"
git branch -M main
git remote add origin https://github.com/jonlewuk-ship-it/BIM-TOUR-Dubai.git
git push -u origin main
```

## Edit the trip data
All content lives in **`src/data.js`** — one place for flights, schedule, exhibitors, reminders. No UI code to touch.
