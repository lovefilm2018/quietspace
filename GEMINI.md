# GEMINI.md — Quiet Space Website & Business Specification

## 1. Project Overview & Business Identity
- **Business Name:** Quiet Space (Home Organising & Decluttering)
- **Tagline:** *"Creating calm, functional, and aesthetically pleasing homes."*
- **Founder & Specialist:** Magdalena ("Magda")
- **Client Contact Email:** `mada_7017@yahoo.com`
- **Location & Reach:** Based in Worthing, West Sussex — serving Worthing, Brighton, Chichester, and across East & West Sussex.
- **Primary Domain:** `QuietSpace.org.uk` (Alternative local domains: `QuietSpaceWorthing.co.uk`, `QuietSpaceSussex.co.uk`)
- **Core Value Proposition:** Helping busy individuals, families, and property owners transform cluttered, overwhelming spaces into serene, orderly, and sustainable environments. High aesthetic standard, zero judgement, empathetic and hands-on approach.

---

## 2. Core Service Offerings
1. **Full-Room Decluttering & Reorganisation:**
   - Kitchens, pantries, wardrobes, playrooms, living rooms, and home offices.
   - Categorisation, sorting, donation coordination, and tailored storage solutions.
2. **Move-In Organisation & Unpacking:**
   - Setting up intuitive systems and organized spaces immediately upon moving into a new home.
3. **Downsizing & Lifestyle Transitions:**
   - Gentle, structured decluttering for house moves, renovations, or life stage changes.
4. **Maintenance & Seasonal Refreshes:**
   - Scheduled tune-ups to keep systems functioning seamlessly.

---

## 3. Brand Identity & UI/UX Aesthetic
- **Tone & Persona:** Calming, warm, minimalist, professional, welcoming, non-judgemental, and refined.
- **Visual Design Philosophy:** Japandi / Scandinavian warmth — airy layouts, generous whitespace, organic curves, and visual tranquility reflecting an organised home.
- **Colour Palette:**
  - **Soft Neutral / Off-White:** `#FDFBF7` / `#F8F6F0` (Warm linen background)
  - **Earthy Sand / Warm Taupe:** `#D8CAB8` / `#C4B5A5` (Subtle card borders and secondary accents)
  - **Muted Sage Green:** `#7D8C7A` / `#627260` (Primary interactive & nature accent)
  - **Deep Charcoal / Slate:** `#2C332D` / `#1E2420` (High-contrast typography)
  - **Muted Earth / Warm Grey:** `#6B7269` (Secondary text and metadata)
- **Typography:**
  - **Headings:** Modern elegant serif (e.g. *Playfair Display*, *Cormorant Garamond*, or *Fraunces*).
  - **Body & UI:** Clean, legible geometric sans-serif (e.g. *Plus Jakarta Sans*, *Inter*, or *Poppins*).
- **Key Visual Elements:**
  - Before & After transformation comparison sliders / interactive cards.
  - High-res photo gallery with category filter (Wardrobes, Kitchens, Living, Storage).
  - Founder story and portrait badge.
  - Transparent pricing packages and simple step-by-step process.

---

## 4. Technical Architecture & Tech Stack
- **Framework & Build:** React 19 + TypeScript + Vite + Tailwind CSS (Single-Page Application / SPA).
- **Routing:** `wouter` lightweight client-side router.
- **UI Components & Icons:** Lucide React, Radix UI primitives, and Framer Motion micro-interactions.
- **Forms & Lead Routing:** Formspree / Resend / Mailto direct enquiry routing to `mada_7017@yahoo.com` + WhatsApp floating contact trigger.
- **Hosting & CI/CD:** GitHub Pages / Cloudflare Pages with automated build workflows (`.github/workflows/deploy.yml`).

---

## 5. Website Page Structure & Blueprint
- **Home (`/`):**
  - **Hero Section:** High-impact serene room visual, warm headline (*"Transform your home into a calm sanctuary"*), clear booking/enquiry CTA.
  - **Transformation Proof (Before & After):** Real visual results showcasing decluttering impact.
  - **Core Services Preview:** 3–4 visual cards highlighting Wardrobes, Kitchens, Whole-Home & Moving.
  - **About Magda Snippet:** Warm introduction, professional philosophy, and photo.
  - **How It Works (3 Steps):** 1. Free Consultation -> 2. Hands-on Declutter -> 3. Bespoke System Setup.
  - **Testimonials & Social Proof:** Client quotes, 5-star ratings, and trust badges.
  - **Enquiry / Consultation Form:** Simple date & room selection contact module.
- **Services & Packages (`/services`):**
  - Detailed breakdown of room services, package rates (half-day, full-day, multi-room packages), and FAQs.
- **About Magda (`/about`):**
  - Personal background, passion for home organisation, methodology, and values.
- **Gallery (`/gallery`):**
  - Filterable before/after photo grid and linked Instagram feed (`@QuietSpace...`).
- **Contact (`/contact`):**
  - Consultation booking form, direct WhatsApp button, email links, and Sussex service area coverage map.

---

## 6. Digital Marketing & Local SEO Strategy
1. **Google Business Profile (GBP):** Setup and optimize "Quiet Space — Home Organising & Decluttering" in Worthing & West Sussex.
2. **Local SEO Targets:** *home organiser worthing*, *decluttering service sussex*, *professional organiser brighton*, *wardrobe declutter sussex*.
3. **Social Media Ecosystem:** Link official Instagram account for visual before/after showcase and reels.
4. **Client Asset Ingestion:** Shared Google Drive / cloud asset repository for Magda's project photography.

---

## 7. Operational Status & Roadmap (August 2026)
- [x] **Project Inception & Domain Selection:** Agreed on `QuietSpace.org.uk`, initial client briefing completed with Magda.
- [x] **Phase 1: Project Scaffolding & Cleanup:** Processed Manus starter package into a clean root Vite + React 19 + TypeScript + Tailwind workspace with zero proprietary dependencies.
- [x] **Phase 2: Asset Ingestion:** Ingested all 10 photography and branding assets into `public/images/` with flexible `assetUrl` base resolution.
- [x] **Phase 3: Core UI Development & Routing:** Built responsive Home, About, Services, Gallery, and dedicated Contact pages with Magda's canonical contact (`mada_7017@yahoo.com`), Worthing/Sussex regional coverage, and GitHub Pages SPA 404 redirection.
- [x] **Phase 4: GitHub Repository & Automated CI/CD:** Initialized repo at `https://github.com/lovefilm2018/quietspace.git` and configured GitHub Actions `.github/workflows/deploy.yml` for automated GitHub Pages builds on push to `main`.
- [ ] **Phase 5: Google Business Profile & Domain Linking:** Register domain `QuietSpace.org.uk`, link DNS, and verify GBP.
