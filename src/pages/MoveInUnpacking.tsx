/* Quiet Space — Move-In Unpacking & Pre-Move Decluttering page. */
import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "wouter";
import { SiteShell } from "@/components/SiteShell";
import { ServiceTabs, Wordmark, leafBulletUrl } from "@/components/ServiceParts";
import { SplitHero } from "@/components/SplitHero";
import { assetUrl } from "@/lib/assets";
import { WHATSAPP_URL } from "@/seo/routes";

const steps = [
  "Declutter before you pack—stop paying removals to move items you no longer use or love.",
  "Label and group boxes by room and daily priority so unpacking feels calm rather than chaotic.",
  "Day-one move-in unpacking: kitchens, wardrobes, and bedrooms organised so your first night feels like home.",
  "Seamless coordination alongside your local removals team across Chichester, West Sussex, Hampshire, and Surrey.",
];

export default function MoveInUnpacking() {
  return (
    <SiteShell>
      <div className="qs-redesign">
        <ServiceTabs />
        <SplitHero
          image="hero-folding-laundry"
          imageAlt="Magda folding soft linen into a woven basket in a bright bedroom after a move"
          imagePosition="center"
          labelledBy="move-title"
        >
          <h1 id="move-title">Pre-Move Decluttering &amp; Move-In Unpacking</h1>
          <p className="lede">Settle into your new home calmly from day one.</p>
          <p>
            Moving house is exciting, yet living out of cardboard boxes for months quickly drains your energy.
            I help you edit belongings before packing day, then unpack and organise your new kitchen, wardrobes,
            and living spaces into intuitive systems right away.
          </p>
          <p>
            Whether you are relocating to Chichester, Emsworth, Arundel, Petersfield, or Haslemere, we can book
            around your completion date (ideally 4–6 weeks ahead where possible).
          </p>
          <div className="qs-home-actions">
            <a className="qs-button" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={18} /> Message on WhatsApp
            </a>
            <Link className="qs-button qs-button-outline" href="/services/">
              View Session Prices <ArrowRight size={18} />
            </Link>
          </div>
        </SplitHero>

        <section className="qs-sheet" aria-labelledby="move-how-title">
          <h2 id="move-how-title">How move-in support works</h2>
          <ul className="qs-checklist">
            {steps.map((s) => (
              <li key={s}>
                <img src={leafBulletUrl} alt="" aria-hidden="true" width={36} height={36} />
                <span>{s}</span>
              </li>
            ))}
          </ul>
          <hr className="qs-rule qs-rule-long" />
          <h2>Transparent day rates, zero hidden extras</h2>
          <p className="qs-sheet-text">
            Pre-move sorting and unpacking sessions are booked as Short Sessions (3–4 hours, £120–£160) or Full Days
            (6–10 hours, £240–£400), with free travel within 15 miles of Chichester and 45p/mile one-way thereafter.
          </p>
        </section>

        <div className="qs-photo-fade">
          <img
            src={assetUrl("images/redesign/ill-moving-boxes.webp")}
            alt="Neatly stacked moving boxes beside a vase of olive leaves"
            width={1536}
            height={1024}
            loading="lazy"
          />
        </div>

        <section className="qs-closing">
          <p className="small">From removal boxes to calm daily living.</p>
          <p className="serif">A fresh home deserves a peaceful start.</p>
          <Wordmark />
        </section>

        <div className="qs-cta-row">
          <Link href="/contact/" className="qs-button">
            Book a Free Video Review <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </SiteShell>
  );
}
