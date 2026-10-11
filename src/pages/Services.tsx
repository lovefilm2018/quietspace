/* Quiet Space — Linen House: an inviting services page that balances clear practical help with softness and care. */
import { ArrowUpRight, Check, CornerDownRight } from "lucide-react";
import { Link } from "wouter";
import { SiteShell } from "@/components/SiteShell";
import { assetUrl } from "@/lib/assets";

const serviceMomentUrl = assetUrl("images/quiet-space-gallery-linen.jpg");

const services = [
  {
    number: "01",
    title: "Full-Room Decluttering & Reorganisation",
    description: "Bring clarity and calm flow to the spaces that carry your everyday life—from wardrobes and pantries to kitchens, home offices, and living areas.",
    includes: [
      "Thoughtful evaluation of how you move through and use the space",
      "Hands-on categorisation, sorting, and gentle decluttering",
      "Tailored, intuitive storage solutions that keep belongings tidy",
      "Donation and recycling coordination support",
    ],
  },
  {
    number: "02",
    title: "Move-In Organisation & Unpacking",
    description: "Start fresh in your new home without the stress of lingering cardboard boxes and chaotic cupboards.",
    includes: [
      "Structured, intentional unpacking from day one",
      "Setting up logical pantry, kitchen, and wardrobe layouts",
      "Bespoke system setup to prevent clutter before it starts",
    ],
  },
  {
    number: "03",
    title: "Downsizing & Life Transitions",
    description: "A gentle, supportive process for letting go of what no longer belongs in your current chapter of life.",
    includes: [
      "Unhurried, empathetic decision-making guidance",
      "A compassionate pace tailored to your emotional comfort",
      "Harmonising cherished items into a lighter, manageable space",
    ],
  },
  {
    number: "04",
    title: "Maintenance & Seasonal Refreshes",
    description: "Periodic tune-ups and seasonal wardrobe shifts to keep your organisation systems working effortlessly year-round.",
    includes: [
      "Wardrobe seasonal swap and edit",
      "Pantry and kitchen system realignment",
      "Refining routines as household needs evolve",
    ],
  },
  {
    number: "05",
    title: "Property Staging (Rental & Sale Preparation)",
    description: "Surface decluttering and aesthetic staging using your existing furnishings to prepare properties for marketing photography, sales, or rentals.",
    includes: [
      "Decluttering key visual surfaces and high-impact focal points",
      "Room-by-room staging to accentuate light, flow, and spatial proportions",
      "Photo-ready styling for estate agent listings, Airbnb, or holiday homes",
      "High attention to architectural angles that shine on camera",
    ],
  },
];

const pricingSessions = [
  {
    title: "Short Session",
    duration: "3 – 5 Hours",
    price: "£135 – £225",
    tag: "Targeted Refresh",
    description: "Best for quick fixes, smaller spaces, or focused areas that need a light refresh and a smart, tidy system.",
    examples: ["Kitchen pantry or larder", "Single wardrobe refresh", "Linen cupboard", "Home office desk & filing"],
  },
  {
    title: "Full Day Session",
    duration: "6 – 10 Hours",
    price: "£260 – £450",
    tag: "Deep Transformation",
    description: "Best for larger rooms, spaces requiring deep sorting, heavy decluttering, or a complete overhaul of storage systems.",
    examples: ["Full family kitchen", "Children's playroom", "Garage or utility room", "Whole-room transformations"],
  },
  {
    title: "Property Staging",
    duration: "Hours as Required",
    price: "From £160 – £450+",
    tag: "Market & Photo Ready",
    description: "Surface decluttering, property styling using your existing items, and preparing holiday lets or properties for estate photography.",
    examples: ["Airbnb & holiday let setup", "Pre-sale photography staging", "Rental property handover", "Open-house visual styling"],
  },
];

export default function Services() {
  return (
    <SiteShell>
      <section className="page-hero services-hero">
        <p className="eyebrow"><span /> Our Services &amp; Pricing</p>
        <h1>Practical help for a <em>lighter</em> home.</h1>
        <p className="page-hero-lead">Every Quiet Space session is shaped around your rooms, your routines, and the feeling you want to come home to.</p>
      </section>

      <section className="services-intro section-wrap">
        <p>There is no need to do everything at once. Start with the room that is taking the most energy, the routine that needs some breathing room, or simply the desire to feel more settled at home.</p>
        <div className="services-intro-aside"><CornerDownRight size={23} strokeWidth={1.2} /><span>We work side-by-side, at your pace.</span></div>
      </section>

      <section className="service-moment section-wrap">
        <img src={serviceMomentUrl} alt="A thoughtful linen closet with natural storage baskets" />
        <div className="service-moment-copy"><p className="eyebrow"><span /> A useful kind of beauty</p><h2>Organisation should feel <em>natural</em> in the hand.</h2><p>From a well-placed basket to a wardrobe with a clearer rhythm, the details we create are there to support your real routines.</p></div>
      </section>

      <section className="service-list section-wrap">
        {services.map((service, index) => (
          <article className="service-card" key={service.number}>
            <div className="service-number">{service.number}</div>
            <div className="service-copy"><h2>{service.title}</h2><p>{service.description}</p></div>
            <div className="service-includes"><span>What this includes</span>{service.includes.map((item) => <p key={item}><Check size={14} strokeWidth={1.7} /> {item}</p>)}</div>
            <div className="service-watermark">0{index + 1}</div>
          </article>
        ))}
      </section>

      {/* SESSIONS & PRICING SECTION */}
      <section className="section-wrap" style={{ paddingTop: "40px", paddingBottom: "70px" }}>
        <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 48px auto" }}>
          <p className="eyebrow" style={{ justifyContent: "center" }}><span /> Clear &amp; Transparent Rates</p>
          <h2 style={{ fontSize: "clamp(2.4rem, 4vw, 3.4rem)", marginBottom: "16px" }}>Sessions &amp; <em>Pricing</em></h2>
          <p style={{ color: "#596b6a", fontSize: "15px", lineHeight: "1.8" }}>
            Every home is unique. I always assess the space first—either via photos, video, or in person—to recommend the ideal session length for your project.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(310px, 1fr))", gap: "28px", marginBottom: "40px" }}>
          {pricingSessions.map((session) => (
            <div
              key={session.title}
              style={{
                background: "#fffdf8",
                border: "1px solid #d9d6c9",
                borderRadius: "4px",
                padding: "36px 30px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
              }}
            >
              <div>
                <span style={{ display: "inline-block", background: "#f0ece1", color: "#455843", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "4px 10px", borderRadius: "2px", marginBottom: "16px" }}>
                  {session.tag}
                </span>
                <h3 style={{ fontSize: "1.8rem", margin: "0 0 6px 0", color: "#244d4f" }}>{session.title}</h3>
                <p style={{ color: "#8a9688", fontSize: "13px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "16px" }}>
                  {session.duration}
                </p>
                <div style={{ fontSize: "2rem", fontFamily: "var(--font-display)", color: "#b98d3c", marginBottom: "18px" }}>
                  {session.price}
                </div>
                <p style={{ color: "#596b6a", fontSize: "14px", lineHeight: "1.7", marginBottom: "24px" }}>
                  {session.description}
                </p>
              </div>

              <div style={{ borderTop: "1px solid #eeece3", paddingTop: "20px" }}>
                <span style={{ display: "block", fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#455843", marginBottom: "10px" }}>
                  Ideal For
                </span>
                <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
                  {session.examples.map((ex) => (
                    <li key={ex} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#516367" }}>
                      <Check size={14} color="#556b2f" /> {ex}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CONSULTATION & TRAVEL DETAILS */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px", background: "#f4f1e8", padding: "32px", borderRadius: "4px", border: "1px solid #d9d6c9" }}>
          <div>
            <h4 style={{ margin: "0 0 8px 0", fontSize: "15px", fontWeight: 700, color: "#244d4f" }}>📋 Assessment &amp; In-Person Consultation</h4>
            <p style={{ margin: 0, fontSize: "13px", color: "#506366", lineHeight: "1.7" }}>
              Initial assessment via photos or video is free. For an in-person assessment, the consultation is <strong>£50</strong>, which is <em>fully deducted from your total invoice</em> if you proceed with the booking.
            </p>
          </div>
          <div>
            <h4 style={{ margin: "0 0 8px 0", fontSize: "15px", fontWeight: 700, color: "#244d4f" }}>🚗 Chichester Base &amp; Travel Policy</h4>
            <p style={{ margin: 0, fontSize: "13px", color: "#506366", lineHeight: "1.7" }}>
              Travel within <strong>15 miles of Chichester is FREE</strong>. For journeys beyond 15 miles across Sussex, Hampshire, Surrey or nationwide, travel is charged at 45p per mile for fuel.
            </p>
          </div>
          <div>
            <h4 style={{ margin: "0 0 8px 0", fontSize: "15px", fontWeight: 700, color: "#244d4f" }}>👥 Large Homes &amp; Transformations</h4>
            <p style={{ margin: 0, fontSize: "13px", color: "#506366", lineHeight: "1.7" }}>
              For extensive properties or complex overhauls requiring multi-person assistance or multi-day scheduling, bespoke quotes and travel/accommodation arrangements are agreed in advance.
            </p>
          </div>
        </div>
      </section>

      <section className="services-note section-wrap">
        <div className="note-symbol">QS</div>
        <div>
          <p className="eyebrow"><span /> Not sure where to start?</p>
          <h2>Begin with what feels <em>most present.</em></h2>
          <p>One cupboard, one room, or a whole-home refresh—there is immense value in choosing the point that will make the greatest difference to your peace of mind.</p>
        </div>
      </section>

      <section className="page-cta page-cta-plain section-wrap">
        <div>
          <p className="eyebrow"><span /> Begin your journey</p>
          <h2>Ready to arrange a consultation?</h2>
        </div>
        <Link href="/contact" className="button-primary">Contact Magda <ArrowUpRight size={17} /></Link>
      </section>
    </SiteShell>
  );
}
