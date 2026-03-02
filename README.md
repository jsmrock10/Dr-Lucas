# VERI — AI Wedding Operating System (Build v1)

This repository now contains a working full-stack MVP shell for **VERI**, the couple-first wedding planning operating system described in the Product Design Requirements v1.0.

## What is implemented

- **Express API backend** with structured MVP endpoints:
  - `/api/overview`
  - `/api/personas`
  - `/api/budget`
  - `/api/timeline`
  - `/api/marketplace/matches`
- **Static web frontend** (served by Express) that renders:
  - Product vision + north stars
  - Feature module readiness view (FM-01 through FM-12)
  - Persona cards (Maya, Marcus, Sofia)
  - Budget Guardian snapshot
  - Smart Planning Timeline tasks
  - Marketplace style-match table

## Run locally

```bash
npm install
npm run dev
```

- App + API: `http://localhost:5000`

## Build

```bash
npm run build
```

## Project structure

```text
server/
  data/veriData.js
  routes/veriRoutes.js
  index.js
web/
  index.html
  app.js
  styles.css
```

## Next suggested implementation steps

1. Add persistent storage (PostgreSQL) and auth (Supabase OAuth).
2. Implement FM-01 onboarding flow with partner invite.
3. Add AI pipelines for FM-02/03/06 using Claude + Textract.
4. Add real-time timeline & day-of events with WebSockets.
