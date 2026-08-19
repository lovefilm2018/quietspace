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
];

export default function Services() {
  return (
    <SiteShell>
      <section className="page-hero services-hero">
        <p className="eyebrow"><span /> Our Services</p>
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
