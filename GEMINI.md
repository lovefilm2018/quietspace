# GEMINI.md — Quiet Space Website & Business Specification
> **Operational Partnership Rules:** All AI agents operating in this workspace (Antigravity CLI or Gemini CLI) must strictly adhere to the operational rules, pre-deployment summaries, and instant audit logging defined in [AGENTS.md](AGENTS.md).


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
- [x] **Phase 5: Logo Enhancement & Brand Typography:** Isolated high-res transparent logo artwork (zero speckles), created horizontal lockup with 100% full-width bold tagline (*"HOME ORGANISING & DECLUTTERING"*), and deployed responsive header sizing across desktop, tablet, and mobile.
- [x] **Phase 6: Mobile Web & Portrait Navigation Optimization:** Deployed sticky header with persistent horizontal mobile page tab bar (`Home`, `About`, `Services`, `Gallery`, `Contact`), active route highlighting, and touch-optimized navigation across portrait/landscape orientations.
- [x] **Phase 7: Authentic Client Media & Video Reel Ingestion:**
  - Ingested Magda's bio portrait (`magda-bio.webp`), styled with facial-focus framing (`object-position: center 20%`), and integrated into the About page (`/about`) and Home page story section (`/`).
  - Automated color-grading pipeline (`tools/process_media.py`) applying the Quiet Space Japandi palette (`#f8f6f0` linen highlight, `#244d4f` slate shadow, muted saturation) to Sussex kitchen photos (`quiet-space-real-crockery.webp`, `quiet-space-real-glassware.webp`).
  - Encoded 3 vertical kitchen transformation videos and a unified 12s highlight reel (`public/videos/quiet-space-reel.mp4`).
  - Built and deployed interactive [`VideoReelShowcase.tsx`](file:///C:/Users/TotalBiz/Documents/QuietSpace/src/components/VideoReelShowcase.tsx) component to the Gallery page (`/gallery`) with seamless looping and tabbed scene navigation.
- [ ] **Phase 8: Google Business Profile & Domain Linking:** Register domain `QuietSpace.org.uk`, link custom DNS to GitHub Pages, and verify GBP.
- [ ] **Phase 9: Client Review with Magda:** Walkthrough of live staging site, collect additional client project photography, and calibrate copy packages.

---

## Dual Launcher & Workspace Script Architecture
- **In-Workspace Storage:** All .bat launcher scripts are stored directly within this repository root folder (AGY_QuietSpace.bat, CLI_QuietSpace.bat).
- **Desktop Shortcut Model:** Desktop icons are Windows Shortcuts (.lnk) pointing directly to these in-workspace .bat files. This safeguards scripts against accidental desktop deletion and automatically includes them in daily Google Drive workspace backups.
- **Dual Launcher Suites:**
  - **AGY_QuietSpace.bat (Antigravity CLI):** Launches the full agentic AI coding assistant with --effort medium and multi-dir audit access.
  - **CLI_QuietSpace.bat (Gemini CLI):** Launches Gemini CLI (gemini-3.5-flash-lite) using project-isolated Google AI Studio API keys (GEMINI_API_KEY) for unlimited free-tier daily turns when AGY quota is on cooldown.
- **Standardized Pre-Launch Protocol:**
  1. UTF-8 code page enforcement (chcp 65001 > nul).
  2. Automatic upstream git synchronization (git pull --rebase --autostash).
  3. Operational audit logging to C:\Users\TotalBiz\Documents\AI_Usage_Audit\global_usage_audit.csv.
- **Launcher Modification Protocol:** When modifying launcher parameters, edit the .bat files located in the project's root folder; desktop shortcuts will immediately reflect the changes.

---

## 🛰️ GigaRapid Dedicated Seedbox & High-Compute Cluster Specification

### 1. Hardware & Network Profile (Enterprise Compute Node)
* **Compute Power:** 6+ dedicated vCores (3.35GHz base / up to 4.9GHz Turbo).
* **Network Throughput:** Shared **25 Gbps pipe** with **14TB monthly egress** (currently using <10%).
* **Storage Capacity:** ~3.9TB high-speed personal NVMe/SSD pool mounted on `/storage`.
* **Cost / Allocation:** Zero marginal cost (£0.00). Use as the primary compute offload destination.

### 2. Architectural Offload & Design Suggestion Rule
> **Rule for AI Agents:** When architecting, proposing, or implementing new features that require:
> 1. Continuous 24/7 background execution or high-frequency cron daemons
> 2. Heavy parallel web scraping (e.g. MealMind supermarket pricing, competitor analysis)
> 3. Large data processing, video/image transcoding, or bulk file ingestion
> 4. Multi-terabyte automated backups (`rclone` to Google Drive)
> 
> **Always proactively suggest utilizing the GigaRapid Seedbox Compute Cluster** rather than burning billable GCP Cloud Run / Lambda quotas or running heavy loads on Alex's local PC.

### 3. SSH Connectivity & Remote Execution
* **SSH Command:** `ssh -i ~/.ssh/gigarapid_key -p 34004 lovefilm2018@openssh-ubuntu-lovefilm2018.elektra.mygiga.cloud`
* **SSH Host Alias (Windows/PowerShell):** `ssh lovefilm-seedbox`
* **Authentication:** ED25519 Private Key (`~/.ssh/gigarapid_key` on local Windows machine).

### 4. Standard Seedbox Directory Schema
```text
/storage/
├── services/
│   └── telegram_gateway/               # 24/7 Telegram Operations Hub Daemon (@TotalBizAgyBot)
│       ├── bot.py                      # Main polling supervisor daemon
│       ├── topic_mappings.json         # Thread-to-project persistent mappings
│       ├── service_account.json        # Google Cloud IAM credentials (all projects)
│       ├── context/                    # Project context engines (*.md)
│       └── tools/                      # Project live tool scripts (*.py)
├── workspaces/                         # Mirrored Git repositories across all 7 projects
│   ├── DogField/
│   ├── TotalBizSupport/
│   ├── MealMind/
│   └── ...
└── .appdata/                           # Persistent app configurations & SQLite databases
    ├── homarr/
    ├── sonarr/
    └── radarr/
```

### 5. Telegram Daemon Supervisor & Reload Protocol
Whenever updating project tools (`tools/<project>.py`) or context (`context/<project>.md`):
```bash
ssh -i ~/.ssh/gigarapid_key -p 34004 lovefilm2018@openssh-ubuntu-lovefilm2018.elektra.mygiga.cloud "pkill -f '[b]ot.py'; nohup python3 /storage/services/telegram_gateway/bot.py >/storage/services/telegram_gateway/bot.log 2>&1 </dev/null & disown"
```
Verify running PID with: `ssh lovefilm-seedbox "pgrep -a -f 'bot.py'"`

---

## 7. Central Google Drive & Google Docs API Ecosystem Integration

### 1. Service Account & IAM Identity
* **Service Account Email:** `agy-search-console-agent@totalbiz-marketing-automation.iam.gserviceaccount.com`
* **GCP Project:** `totalbiz-marketing-automation` (Project ID: `682815206557`)
* **Credential Paths:**
  * Windows Local: `C:\Users\TotalBiz\Downloads\totalbiz-marketing-automation-2b864bf28d36.json`
  * Workspace Mirror: `C:\Users\TotalBiz\Documents\totalbizsupport\gsc-key.json`
  * Seedbox Linux: `/storage/services/telegram_gateway/service_account.json`

### 2. Enabled Google Cloud APIs
* Google Drive API (`drive.googleapis.com`)
* Google Docs API (`docs.googleapis.com`)
* Google Search Console & GA4 Data APIs

### 3. Google Drive Scope & Permissions
* **Root Shared Folder:** The entire parent `TotalBiz` folder in Google Drive (owned by `totalbizsupport@gmail.com`) is shared directly with the Service Account with full **Editor** permissions.
* **Inherited Access:** The `QuietSpace` subfolder inherits full Editor access.
* **Operational Capabilities:** Any project agent can programmatically inspect Drive folders, read client intake forms/consultation notes, and create/populate/format clean Google Docs and Google Sheets directly in Google Drive using `googleapiclient.discovery.build` in Python.

