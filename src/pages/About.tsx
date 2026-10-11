/* Quiet Space — Linen House: a restorative about page that treats organisation as supportive, human, and practical. */
import { ArrowUpRight, CircleCheck, Leaf, Heart, MapPin, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { SiteShell } from "@/components/SiteShell";
import { assetUrl } from "@/lib/assets";

const magdaBioUrl = assetUrl("images/magda-bio.webp");

const principles = [
  "No judgement, no pressure, no one-size-fits-all plan.",
  "Practical, enduring systems built around your real routines.",
  "High standards of cleanliness, reliability, and NHS-trained discretion.",
  "Based in Chichester, serving West Sussex, Hampshire & South Surrey.",
];

export default function About() {
  return (
    <SiteShell>
      <section className="page-hero about-hero">
        <p className="eyebrow"><span /> About Magdalena &amp; Quiet Space</p>
        <h1>Bring peace and beauty to your home and <em>enjoy living in it.</em></h1>
        <p className="page-hero-lead">Quiet Space was founded by Magdalena ("Magda") around a simple belief: a well-organised home should make everyday life feel lighter, calmer, and more joyful.</p>
        <div className="page-hero-scroll">A quieter rhythm begins here <span>↓</span></div>
      </section>

      <section className="about-intro section-wrap">
        <div className="about-intro-visual">
          <img src={magdaBioUrl} alt="Magdalena, founder and specialist at Quiet Space" style={{ objectPosition: "center 20%" }} />
          <div className="visual-note"><Leaf size={17} /> Magdalena — Professional Organiser &amp; Stylist</div>
        </div>
        <div className="about-intro-copy">
          <p className="eyebrow"><span /> Magdalena’s Journey &amp; Approach</p>
          <h2>Organisation has always come naturally to me, and I genuinely enjoy it.</h2>
          <p>
            For the past 10 years, I have worked across boutique hotels, holiday homes, corporate offices, and private residences. This experience has given me the opportunity to see many different spaces, understand varied interior styles, and continuously learn what truly works in everyday life—and what doesn’t.
          </p>
          <p>
            I also work at <strong>St Richard’s Hospital</strong> within the <strong>NHS</strong> in Chichester, where I have developed rigorous standards of cleanliness, meticulous attention to detail, dependability, and absolute discretion.
          </p>
          <p>
            Based in Chichester, I travel regularly to clients across West Sussex (including Worthing, Chichester, Arundel, Bognor Regis, Littlehampton, and Midhurst), Hampshire (Portsmouth, Southsea, Emsworth, Havant, Petersfield), and South Surrey.
          </p>
        </div>
      </section>

      <section className="principles-section section-wrap">
        <div className="principles-header">
          <p className="eyebrow"><span /> The Quiet Space way</p>
          <h2>Gentle in manner.<br /><em>Grounded in practice.</em></h2>
        </div>
        <div className="principles-list">
          {principles.map((principle, index) => (
            <div className="principle" key={principle}>
              <span>0{index + 1}</span>
              <CircleCheck size={19} strokeWidth={1.4} />
              <p>{principle}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="about-quote-section">
        <div className="about-quote-mark">“</div>
        <div><p className="eyebrow eyebrow-light"><span /> Why it matters</p><h2>When your home works with you, it becomes easier to be <em>present</em> in it.</h2></div>
      </section>

      <section className="page-cta section-wrap">
        <div><p className="eyebrow"><span /> A considered next step</p><h2>Ready to create your quiet space?</h2></div>
        <Link href="/contact" className="button-primary">Book a consultation <ArrowUpRight size={17} /></Link>
      </section>
    </SiteShell>
  );
}
