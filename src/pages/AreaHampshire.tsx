/* Quiet Space — Hampshire regional landing page (Emsworth, Havant, Petersfield, Portsmouth, Southsea, Fareham). */
import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "wouter";
import { SiteShell } from "@/components/SiteShell";
import { SplitHero } from "@/components/SplitHero";
import { Wordmark, leafBulletUrl } from "@/components/ServiceParts";
import { WHATSAPP_URL } from "@/seo/routes";

const towns = [
  "Emsworth & Hayling Island — Free travel (within 15 miles of Chichester) for coastal homes and downsizing.",
  "Havant & Waterlooville — Short sessions (£120–£160) and full-day resets (£240–£400) for busy family homes.",
  "Petersfield & Liss — Pre-sale occupied property staging, move-in unpacking, and wardrobe/kitchen systems.",
  "Portsmouth, Southsea & Fareham — Calm decluttering, small-space storage solutions, and rental/Airbnb styling.",
];

export default function AreaHampshire() {
  return (
    <SiteShell>
      <div className="qs-redesign">
        <SplitHero
          image="hero-staging-room"
          imageAlt="Sunlit Hampshire living room styled with a sage throw, wooden coffee table and houseplants"
          imagePosition="center"
          labelledBy="hants-title"
        >
          <h1 id="hants-title">Home Organising &amp; Property Staging in Hampshire</h1>
          <p className="lede">Based just across the border in Chichester—with free travel to Emsworth &amp; Havant.</p>
          <p>
            Quiet Space brings calm, non-judgemental home organising, decluttering, and affordable occupied property
            staging to homeowners across East Hampshire, including Emsworth, Havant, Petersfield, Portsmouth,
            Southsea, and Fareham.
          </p>
          <p>
            With 10 years’ experience in private homes, holiday homes, and boutique hotels—plus St Richard’s Hospital
            discretion and reliability—every session is practical, discreet, and tailored to real life.
          </p>
          <div className="qs-home-actions">
            <a className="qs-button" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={18} /> Free WhatsApp Photo Review
            </a>
            <Link className="qs-button qs-button-outline" href="/services/">
              See Prices <ArrowRight size={18} />
            </Link>
          </div>
        </SplitHero>

        <section className="qs-sheet" aria-labelledby="hants-areas-title">
          <h2 id="hants-areas-title">Hampshire towns we serve</h2>
          <ul className="qs-checklist">
            {towns.map((t) => (
              <li key={t}>
                <img src={leafBulletUrl} alt="" aria-hidden="true" width={36} height={36} />
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <hr className="qs-rule qs-rule-long" />
          <h2>Simple, transparent travel from Chichester</h2>
          <p className="qs-sheet-text">
            Emsworth and Havant sit inside our 15-mile free travel zone. Further Hampshire towns (such as Petersfield,
            Portsmouth, Southsea, and Fareham) are charged at just 45p per excess mile one-way.
          </p>
        </section>

        <section className="qs-closing">
          <Wordmark />
        </section>

        <div className="qs-cta-row">
          <Link href="/contact/" className="qs-button">
            Book a Consultation <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </SiteShell>
  );
}
