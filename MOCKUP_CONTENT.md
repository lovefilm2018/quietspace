# Quiet Space — Client Redesign Blueprint & Asset Specifications

This document contains the exact transcribed copy, brand tokens, and web-ready asset paths extracted from Magda's design mockups (`QS Pics/`). 
AI Agents (including Claude or Gemini) should use this specification to build native, responsive React + Tailwind components without needing to re-parse or guess from heavy images.

---

## 🎨 Visual Identity & Design Tokens

### Color Palette
* **Linen Canvas (Page Background):** `#FDFBF7` / `#FAF8F3` (Tailwind: `bg-[#FDFBF7]`)
* **Warm Sand Card Background:** `#F5F2EB` (Tailwind: `bg-[#F5F2EB]`)
* **Sage Section Accent (e.g. "How it works" arch):** `#E7ECE4` / `#DFE6DC`
* **Deep Charcoal (Headings & Primary Text):** `#1E2420` / `#222823`
* **Muted Slate/Grey (Body Copy):** `#4A534B` / `#555F56`
* **Olive Green (Buttons, Badges, Number Badges):** `#445431` / `#3B4929`
* **Hover Olive:** `#2E3A1F`
* **Hairline Rules & Card Borders:** `#E3DDD3`

### Typography Hierarchy
* **Display / Headings (H1, H2, H3):** Modern Elegant Serif (`Playfair Display` or `Cormorant Garamond`, serif).
* **Body, Subheads & UI Labels:** Clean legible Geometric Sans-Serif (`Inter`, `Plus Jakarta Sans`, or `sans-serif`).
* **Magda Signature:** Use the isolated transparent SVG/PNG asset `assetUrl("images/redesign/magda-signature.webp")` or a CSS cursive accent.

---

## 📁 Web-Ready Assets Directory (`public/images/redesign/`)

All assets have been color-calibrated and converted into optimized WebP and transparent RGBA formats:

| Asset Name | Format | Usage | Path (`assetUrl`) |
| :--- | :--- | :--- | :--- |
| **`quiet-space-logo-wide`** | WebP / PNG (alpha) | Header logo banner | `images/redesign/quiet-space-logo-wide.webp` |
| **`hero-wardrobe-woman`** | WebP | Home / Page 1 Hero | `images/redesign/hero-wardrobe-woman.webp` |
| **`card-yale-clutter-callout`** | WebP | Clutter research callout | `images/redesign/card-yale-clutter-callout.webp` |
| **`magda-kitchen-portrait`** | WebP | About / Bio photo | `images/redesign/magda-kitchen-portrait.webp` |
| **`magda-signature`** | WebP / PNG (alpha) | About / Bio sign-off | `images/redesign/magda-signature.webp` |
| **`leaf-sprig-watercolor`** | WebP / PNG (alpha) | Foliage bullet/divider | `images/redesign/leaf-sprig-watercolor.webp` |
| **`leaf-corner-olives`** | WebP / PNG (alpha) | Corner decorative branch | `images/redesign/leaf-corner-olives.webp` |
| **`ill-moving-boxes`** | WebP | Organising: Moving home | `images/redesign/ill-moving-boxes.webp` |
| **`ill-renovation-plan`** | WebP | Organising: Renovation | `images/redesign/ill-renovation-plan.webp` |
| **`ill-children-toys`** | WebP | Organising: Outgrown toys | `images/redesign/ill-children-toys.webp` |
| **`ill-nursery-cot`** | WebP | Organising: Growing family | `images/redesign/ill-nursery-cot.webp` |
| **`ill-pantry-jars`** | WebP | Organising: Kitchen systems | `images/redesign/ill-pantry-jars.webp` |
| **`hero-folding-laundry`** | WebP | Organising: Bottom hero | `images/redesign/hero-folding-laundry.webp` |
| **`hero-declutter-bedroom`**| WebP | Decluttering: Bottom hero | `images/redesign/hero-declutter-bedroom.webp` |
| **`hero-styling-couch`** | WebP | Staging: Bottom hero | `images/redesign/hero-styling-couch.webp` |
| **`card-price-short-session`**| WebP | Pricing: Short session | `images/redesign/card-price-short-session.webp` |
| **`card-price-full-day`** | WebP | Pricing: Full day | `images/redesign/card-price-full-day.webp` |
| **`card-price-staging`** | WebP | Pricing: Property staging | `images/redesign/card-price-staging.webp` |
| **`icon-step-consultation`** | WebP / PNG (alpha) | How it works: Step 1 | `images/redesign/icon-step-consultation.webp` |
| **`icon-step-declutter-basket`** | WebP / PNG (alpha)| How it works: Step 2 | `images/redesign/icon-step-declutter-basket.webp` |
| **`icon-step-enjoy-house`** | WebP / PNG (alpha) | How it works: Step 3 | `images/redesign/icon-step-enjoy-house.webp` |

---

## 📄 Canonical Page Content Specifications

### Page 1 — Home / Hero (`src/pages/Home.tsx`)
* **Header:** Wide logo lockup (`quiet-space-logo-wide.webp`), nav links (`Home`, `About`, `Services`, `Contact`).
* **Hero Image:** `hero-wardrobe-woman.webp` (Woman in linen shirt arranging clothes in minimalist wardrobe).
* **Research Callout Card:**
  * **Title:** Did you know?
  * **Paragraph 1:** Research from Yale University suggests that visual clutter can affect how visual information is processed in the brain.
  * **Paragraph 2:** For some people, being surrounded by too many things can feel distracting. Creating a calmer, more organised space may help make everyday life feel easier.
  * **Action Button:** `[Explore Services →]` (links to `/services`).

---

### Page 2 — About Me (`src/pages/About.tsx`)
* **Portrait Photo:** `magda-kitchen-portrait.webp` (Magda holding a ceramic mug by kitchen island).
* **Header / Eyebrow:** About Me
* **Salutation:** Hi, I’m Magda.
* **Paragraph 1:** I’ve always had a natural passion for creating clean, organised and calm spaces. Organising comes naturally to me. It’s something I genuinely enjoy and have always found calming.
* **Paragraph 2:** I understand how clutter and having too many things around can affect your focus, wellbeing and everyday life.
* **Paragraph 3:** For me, creating an organised home isn’t just about making it look beautiful — it’s about making daily life feel simpler and easier.
* *(Divider Rule)*
* **Paragraph 4:** For the past 10 years, I’ve worked in private homes, holiday homes, hotels and offices. I also work at St Richard’s Hospital.
* **Paragraph 5:** This experience has given me the chance to see many different spaces and ways of organising them. I’m always finding new ideas and inspiration, but most importantly, I can see what really works in everyday life and what doesn’t.
* **Paragraph 6:** I love creating calm, functional spaces that make everyday life easier and more enjoyable. My goal is to help you feel happier in your home, with a space that truly works for you.
* **Sign-off:** `magda-signature.webp` + olive branch flourish (`leaf-corner-olives.webp`).

---

### Page 3 — Home Organising (`src/pages/Services.tsx` or `/services/organising`)
* **Top Header:** HOME ORGANISING
* **Tagline:** A home that works for the way you live.
* **Decorative Accents:** Olive sprigs on either side of header rule (`leaf-sprig-watercolor.webp`).
* **5 Structured Service Items (Each with Title + Illustration + Description):**
  1. **Moving to a new home?** (`ill-moving-boxes.webp`)
     * *Copy:* I can help you sort and organise your belongings before the move, then unpack and find the right place for everything in your new home.
  2. **Planning a renovation?** (`ill-renovation-plan.webp`)
     * *Copy:* A new space needs a new approach. Together, we can plan practical storage and a layout that works for you.
  3. **Have your children outgrown their space?** (`ill-children-toys.webp`)
     * *Copy:* Let’s rethink their rooms, clothes and toys to suit their changing needs.
  4. **Is your family growing?** (`ill-nursery-cot.webp`)
     * *Copy:* Whether you’re welcoming a new partner or a baby, I can help you make room for your next chapter.
  5. **Is your current organisation no longer working?** (`ill-pantry-jars.webp`)
     * *Copy:* I can help you create simple, practical systems that make everyday life easier.
* **Bottom Hero Photo:** `hero-folding-laundry.webp` (Serene bedroom scene with laundry folding in basket).

---

### Page 4 — Decluttering (`src/pages/Services.tsx` or `/services/decluttering`)
* **Top Header:** DECLUTTERING
* **Tagline:** Make space for what matters.
* **Section Title:** When is it time to declutter?
* **8 Bullet Points (styled with `leaf-sprig-watercolor.webp` icons):**
  * You feel overwhelmed by the amount of stuff in your home.
  * Your cupboards and drawers are full, but you struggle to find what you need.
  * You’re holding on to things you haven’t used in a long time.
  * Clothes, toys and other belongings no longer suit your family’s needs.
  * Cleaning and putting things away takes too much time.
  * You’re running out of space for the things you really need.
  * You want to own less and make your home easier to care for.
  * You want to start, but don’t know what to keep, donate or sell.
* **Donation / Rehoming Callout:**
  * **Heading:** Give your unwanted items a new home.
  * **Text:** Together, we can donate them to a charity shop, or I can help you list them on Vinted.
* **Bottom Hero Photo:** `hero-declutter-bedroom.webp` (Styling wardrobe in peaceful bedroom).
* **Closing Quote:** *"You decide what stays and what goes. Sometimes, we need to let go of the old to make room for the new."* — QUIET SPACE

---

### Page 5 — Home Staging (`src/pages/Services.tsx` or `/services/staging`)
* **Top Header:** HOME STAGING
* **Tagline:** Help people picture themselves at home.
* **Section Title:** When can home staging help?
* **8 Bullet Points (styled with `leaf-sprig-watercolor.webp` icons):**
  * You’re preparing your property for sale.
  * You want to get your property ready for new tenants.
  * You’re preparing a holiday home for guests.
  * Your property is empty and needs a welcoming touch.
  * Your rooms feel crowded or their purpose is unclear.
  * You want to make better use of your existing furniture and accessories.
  * You’re getting ready for property photos or viewings.
  * You want help bringing the finishing touches together.
* **Value Proposition Block:**
  * **Heading:** Make the most of your property.
  * **Text:** I can help you declutter, rearrange furniture and add thoughtful finishing touches to create a welcoming space that shows your property at its best.
* **Bottom Hero Photo:** `hero-styling-couch.webp` (Styling green sofa with knitted throw and cushions).
* **Tagline:** *"A fresh perspective. A welcoming first impression."* — QUIET SPACE

---

### Page 6 — Pricing & "How It Works" (`src/pages/Services.tsx` & `/services`)
* **Main Title:** Space to feel at home
* **Subtitle:** Practical support, tailored to your home, your goals and your lifestyle.
* **3 Pricing Packages:**
  1. **Short Session**
     * *Image:* `card-price-short-session.webp`
     * *Duration:* 3–4 hours
     * *Price:* £120 – £160
     * *Description:* Perfect for a specific area, getting started or a quick reset.
  2. **Full Day**
     * *Image:* `card-price-full-day.webp`
     * *Duration:* 6–10 hours
     * *Price:* £240 – £400
     * *Description:* More time for bigger projects, multiple rooms or a complete refresh.
  3. **Property Staging**
     * *Image:* `card-price-staging.webp`
     * *Price:* From £160 – £450+
     * *Description:* Tailored staging to help your property look its best for sale or let.
* **"How it works" Section (Soft Sage Curved Container / Arched Card):**
  * **Step 1:**
    * *Badge:* `1` (Olive circle)
    * *Icon:* `icon-step-consultation.webp`
    * *Title:* Consultation
    * *Description:* We’ll discuss your needs, your space and your goals. A few photos or a short video are sometimes enough. In most cases, I prefer to visit in person so I can see the space, take measurements and give myself time to think through what will work best for you.
  * **Step 2:**
    * *Badge:* `2`
    * *Icon:* `icon-step-declutter-basket.webp`
    * *Title:* Declutter & organise
    * *Description:* Together we’ll sort, organise and create systems that work for you.
  * **Step 3:**
    * *Badge:* `3`
    * *Icon:* `icon-step-enjoy-house.webp`
    * *Title:* Enjoy your space
    * *Description:* A calmer, more functional and beautiful home to live in and love.
  * **CTA Button:** `[Book a consultation →]` (Olive pill button, links to `/contact`).
