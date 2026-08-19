/* Quiet Space — Linen House: a restorative about page that treats organisation as supportive, human, and practical. */
import { ArrowUpRight, CircleCheck, Leaf, Heart, MapPin, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { SiteShell } from "@/components/SiteShell";
import { assetUrl } from "@/lib/assets";

const processUrl = assetUrl("images/quiet-space-process.jpg");

const principles = [
  "No judgement, no pressure, no one-size-fits-all plan.",
  "Practical, enduring systems built around your real routines.",
  "Thoughtful, empathetic decisions that make room for what matters.",
  "Rooted in Worthing, serving homes across East and West Sussex.",
];

export default function About() {
  return (
    <SiteShell>
      <section className="page-hero about-hero">
        <p className="eyebrow"><span /> About Magdalena & Quiet Space</p>
        <h1>More room for your <em>real</em> life.</h1>
        <p className="page-hero-lead">Quiet Space was founded by Magdalena ("Magda") around a simple belief: a well-organised home should make everyday life feel lighter, calmer, and more joyful.</p>
        <div className="page-hero-scroll">A quieter rhythm begins here <span>↓</span></div>
      </section>

      <section className="about-intro section-wrap">
        <div className="about-intro-visual">
          <img src={processUrl} alt="A carefully organised wardrobe in calm natural tones" />
          <div className="visual-note"><Leaf size={17} /> Empathetic, never clinical</div>
        </div>
        <div className="about-intro-copy">
          <p className="eyebrow"><span /> Magdalena’s Approach</p>
          <h2>Organisation is not about owning less for the sake of it.</h2>
          <p>It is about giving your belongings, your time, and your attention a more considered place to land. Whether your home feels crowded, in transition, or simply ready for a seasonal reset, Quiet Space meets you exactly where you are.</p>
          <p>Based in Worthing and working throughout Sussex (including Brighton, Hove, Chichester, and surrounding towns), Magda works side-by-side with you to bring order, aesthetic balance, and functional flow into every space.</p>
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
        <Link href="/contact" className="button-primary">Book a free consultation <ArrowUpRight size={17} /></Link>
      </section>
    </SiteShell>
  );
}
