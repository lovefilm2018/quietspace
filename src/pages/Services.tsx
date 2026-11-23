/* Quiet Space — Services & pricing: three session cards, consultation & travel clarity, 3-step process, and plain-English FAQs. */
import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "wouter";
import { SiteShell } from "@/components/SiteShell";
import { ServiceTabs } from "@/components/ServiceParts";
import { assetUrl } from "@/lib/assets";
import { SERVICES_FAQS } from "@/seo/routes";
import "@/redesign.css";

const img = (name: string) => assetUrl(`images/redesign/${name}.webp`);

const packages = [
  {
    image: "card-price-short-session",
    alt: "A woven basket of folded linen with an olive sprig",
    title: "Short Session",
    when: "3–4 hours",
    price: "£120 – £160",
    desc: "Perfect for a specific area, getting started or a quick reset.",
  },
  {
    image: "card-price-full-day",
    alt: "A wooden shelving unit with baskets, jars and a trailing plant",
    title: "Full Day",
    when: "6–10 hours",
    price: "£240 – £400",
    desc: "More time for bigger projects, multiple rooms or a complete refresh.",
  },
  {
    image: "card-price-staging",
    alt: "A neatly dressed bed beside a bedside table with olive leaves",
    title: "Property Staging",
    when: "From",
    price: "£160 – £450+",
    desc: "Tailored staging to help your property look its best for sale or let.",
  },
];

export default function Services() {
  return (
    <SiteShell>
      <div className="qs-redesign">
        <ServiceTabs />
        <header className="qs-price-head">
          <h1>Space to feel at home</h1>
          <hr className="qs-rule" />
          <p>Practical support, tailored to your home, your goals and your lifestyle.</p>
        </header>

        <section className="qs-cards" aria-label="Session prices">
          {packages.map((p) => (
            <article className="qs-card" key={p.title}>
              <img src={img(p.image)} alt={p.alt} width={1536} height={1024} loading="lazy" />
              <h3>{p.title}</h3>
              <hr className="qs-rule" />
              <p className="when">{p.when}</p>
              <p className="price">{p.price}</p>
              <p className="desc">{p.desc}</p>
            </article>
          ))}
        </section>

        <section className="qs-info-banner" aria-label="Consultation and travel policy">
          <div>
            <h3>Free Photo Review or £50 Assessment</h3>
            <p>
              Start free by sending 3–5 room photos or booking a short WhatsApp video chat. Prefer an on-site visit?
              A 45–60 minute in-person home assessment is <strong>£50</strong>—and <strong>100% is deducted</strong>{" "}
              from your invoice when you book a session.
            </p>
          </div>
          <div>
            <h3>Areas Covered</h3>
            <p>
              Based in Chichester, serving West Sussex (Arundel, Worthing, Bognor Regis, Midhurst), Hampshire
              (Emsworth, Havant, Petersfield, Portsmouth, Southsea), and South Surrey (Haslemere, Guildford, Farnham).{" "}
              <strong>Travel outside these areas is considered upon request.</strong>
            </p>
          </div>
        </section>

        <section className="qs-how" aria-labelledby="how-title">
          <h2 id="how-title">How it works</h2>
          <hr className="qs-rule" />
          <div className="qs-how-arch">
            <div className="qs-how-inner">
              <div className="qs-step">
                <span className="qs-badge">1</span>
                <div className="qs-step-title"><img src={img("icon-step-consultation")} alt="" aria-hidden="true" /><h3>Consultation</h3></div>
                <p>We’ll discuss your needs, your space and your goals. A few photos or a short video are sometimes enough. In most cases, I prefer to visit in person so I can see the space, take measurements and give myself time to think through what will work best for you.</p>
              </div>
              <div className="qs-steps-pair">
                <div className="qs-step">
                  <span className="qs-badge">2</span>
                  <div className="qs-step-title"><img src={img("icon-step-declutter-basket")} alt="" aria-hidden="true" /><h3>Declutter &amp; organise</h3></div>
                  <p>Together we’ll sort, organise and create systems that work for you.</p>
                </div>
                <div className="qs-step">
                  <span className="qs-badge">3</span>
                  <div className="qs-step-title"><img src={img("icon-step-enjoy-house")} alt="" aria-hidden="true" /><h3>Enjoy your space</h3></div>
                  <p>A calmer, more functional and beautiful home to live in and love.</p>
                </div>
              </div>
              <div className="qs-cta-row" style={{ paddingTop: 48, paddingBottom: 0 }}>
                <Link href="/contact/" className="qs-button">Book a consultation <ArrowRight size={18} /></Link>
              </div>
            </div>
          </div>
        </section>

        <section className="qs-faq" aria-labelledby="faq-title">
          <h2 id="faq-title">Frequently asked questions</h2>
          <hr className="qs-rule" />
          <div className="qs-faq-list">
            {SERVICES_FAQS.map((f) => (
              <details className="qs-faq-item" key={f.question}>
                <summary>
                  <span>{f.question}</span>
                  <ChevronDown size={18} aria-hidden="true" />
                </summary>
                <p>{f.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
