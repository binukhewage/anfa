# Anfa Training - Premium Next.js Website

This is a modern, high-performance website for **Anfa Training**, built using **Next.js 16 (App Router)**, **TypeScript**, and **Vanilla CSS**. The website's content was fully compiled and styled from a WordPress Divi Builder XML export (`anfatraining.WordPress.2026-07-01.xml`).

---

## ⚡ Key Features

1. **Vanilla CSS Design System**: Custom styling tokens, layout configurations, HSL color palettes, responsive grid systems, and glassmorphism.
2. **WordPress Data Extraction**: Divi-builder pages (Home, About Me, Services, Prices, Camps, and legal agreements) converted to clean JSX pages.
3. **Asset Migration**: Downloaded all original high-quality site images (logos, training icons, coach pictures) and bundled them under the `/public/images` directory.
4. **Interactive Forms**: Fully functional Contact/Application form simulating high-speed asynchronous checks and bookings.
5. **SEO Optimized**: Pre-configured page titles, meta descriptions, semantic HTML5 tags, and modern web fonts (Outfit and Inter).

---

## 📂 Project Structure

- `src/app/` — Router directories and pages:
  - `page.tsx` — Hero section, philosophy, core program teasers, and performance columns.
  - `about-me/` — Biography, credentials (EuropeActive licensed PT, nutritionist, combat coach).
  - `services/` — Details on online coaching, 1:1 gym, combat conditioning, EBT bodyweight, and recovery.
  - `prices/` — Complete pricing tables and feature checkboxes grouped by program category.
  - `camps/` — Specialized Bouznika retreat description, daily itinerary, luxury stay features.
  - `contact/` — Split contact card layout wrapping the interactive form.
  - `general-conditions/` & `return-policy/` — Compliance agreements.
- `src/components/` — Reusable components (`Header`, `Footer`, `ContactForm`) with scoping CSS modules.
- `public/images/` — Bundled image assets migrated from the live WordPress media library.

---

## 🚀 Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To verify production readiness, run:

```bash
npm run build
```
# anfa
