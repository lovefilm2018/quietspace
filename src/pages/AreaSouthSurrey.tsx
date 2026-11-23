/* Quiet Space — South Surrey regional landing page (Haslemere, Guildford, Farnham). */
import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "wouter";
import { SiteShell } from "@/components/SiteShell";
import { SplitHero } from "@/components/SplitHero";
import { Wordmark, leafBulletUrl } from "@/components/ServiceParts";
import { WHATSAPP_URL } from "@/seo/routes";

const highlights = [
  "Haslemere & Surrey Hills — Minimalist wardrobe editing, pantry systems, and pre-sale occupied staging.",
  "Guildford & Godalming — Full-day home transformations (£240–£400) and calm day-one move-in unpacking.",
  "Farnham & Surrey Borders — Gentle downsizing support, charity/Vinted sorting, and photo-ready listing prep.",
  "Occupied Property Staging (From £160) — Make character homes shine on Rightmove using your existing furniture.",
];

export default function AreaSouthSurrey() {
  return (
    <SiteShell>
      <div className="qs-redesign">
        <SplitHero
          image="hero-wardrobe-empty"
          imageAlt="Minimalist sunlit bedroom and open oak wardrobe in a calm South Surrey home"
          imagePosition="75% 40%"
          labelledBy="surrey-title"
        >
          <h1 id="surrey-title">Home Organising &amp; Property Staging in Haslemere &amp; South Surrey</h1>
          <p className="lede">Discreet, minimalist home systems and pre-sale staging across the Surrey borders.</p>
          <p>
            Quiet Space travels up the A286 from Chichester to help busy families, downsizers, and home sellers in
            Haslemere, Farnham, Godalming, and Guildford create serene, clutter-free spaces that work effortlessly.
          </p>
          <p>
            Whether you are preparing a property for estate agent photography or resetting wardrobes, kitchens, and
            study spaces, we build lasting systems around what you already own.
          </p>
          <div className="qs-home-actions">
            <a className="qs-button" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={18} /> Free WhatsApp Video Review
            </a>
            <Link className="qs-button qs-button-outline" href="/services/">
              View Services &amp; Prices <ArrowRight size={18} />
            </Link>
          </div>
        </SplitHero>

        <section className="qs-sheet" aria-labelledby="surrey-areas-title">
          <h2 id="surrey-areas-title">How we help South Surrey homeowners</h2>
          <ul className="qs-checklist">
            {highlights.map((h) => (
              <li key={h}>
                <img src={leafBulletUrl} alt="" aria-hidden="true" width={36} height={36} />
                <span>{h}</span>
              </li>
            ))}
          </ul>
          <hr className="qs-rule qs-rule-long" />
          <h2>Clear rates with no London-agency markups</h2>
          <p className="qs-sheet-text">
            Short Sessions (3–4 hrs) are £120–£160, Full Days (6–10 hrs) are £240–£400, and Property Staging starts
            from £160–£450+ across Haslemere, Guildford, and Farnham—with wider travel considered upon request.
          </p>
        </section>

        <section className="qs-closing">
          <Wordmark />
        </section>

        <div className="qs-cta-row">
          <Link href="/contact/" className="qs-button">
            Get in Touch <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </SiteShell>
  );
}
