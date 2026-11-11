/* Quiet Space — Linen House: calm editorial page with ample breathing room, warm paper, and eucalyptus detail. */
import { ArrowRight, ArrowUpRight, Check, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { SiteShell } from "@/components/SiteShell";
import { assetUrl } from "@/lib/assets";
import "@/redesign.css";

const heroWardrobeUrl = assetUrl("images/redesign/hero-wardrobe-woman.webp");
const magdaBioUrl = assetUrl("images/magda-bio.webp");
const kitchenUrl = assetUrl("images/quiet-space-gallery-kitchen.jpg");
const livingUrl = assetUrl("images/quiet-space-gallery-living.jpg");

const ways = [
  {
    number: "01",
    title: "See your home with fresh eyes",
    text: "We begin with the rooms, routines, and belongings that are asking for a little more ease.",
  },
  {
    number: "02",
    title: "Keep what supports your life",
    text: "Together, we make thoughtful decisions at a pace that feels manageable, respectful, and entirely judgement-free.",
  },
  {
    number: "03",
    title: "Create a rhythm that holds",
    text: "Simple, intuitive systems help the newly clear space keep working for the way you really live.",
  },
];

export default function Home() {
  return (
    <SiteShell>
      <div className="qs-redesign">
        <section className="qs-hero" aria-labelledby="home-title">
          <img className="qs-hero-photo" src={heroWardrobeUrl} alt="Magda arranging neutral and sage clothes in a calm, light wardrobe" width={1536} height={1024} />
          <div className="qs-hero-copy">
            <h1 id="home-title">Make room for the life you want to live.</h1>
            <p>Home organising, gentle decluttering and property staging across Chichester, Sussex and Hampshire. Bring peace and beauty to your home and enjoy living in it.</p>
            <Link className="qs-button" href="/contact">Book a consultation <ArrowRight size={18} /></Link>
          </div>
        </section>

        <section className="qs-know" aria-labelledby="know-title">
          <h2 id="know-title">Did you know?</h2>
          <p>Research from Yale University suggests that visual clutter can affect how visual information is processed in the brain.</p>
          <p>For some people, being surrounded by too many things can feel distracting. Creating a calmer, more organised space may help make everyday life feel easier.</p>
          <Link className="qs-button" href="/services">Explore Services <ArrowRight size={18} /></Link>
        </section>
      </div>

      <section className="services-preview section-wrap">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow"><span /> How we help</p>
            <h2>Small shifts.<br /><em>Lasting calm.</em></h2>
          </div>
          <Link href="/services" className="circle-link" aria-label="View all services"><ArrowUpRight size={21} /></Link>
        </div>
        <div className="ways-list">
          {ways.map((way) => (
            <article key={way.number} className="way-item">
              <span className="way-number">{way.number}</span>
              <div><h3>{way.title}</h3><p>{way.text}</p></div>
              <ArrowUpRight className="way-arrow" size={20} strokeWidth={1.4} />
            </article>
          ))}
        </div>
      </section>

      <section className="story-section">
        <div className="story-image-wrap"><img src={magdaBioUrl} alt="Magdalena, founder of Quiet Space" className="story-image" style={{ objectPosition: "center 20%" }} /></div>
        <div className="story-copy">
          <p className="eyebrow"><span /> Made for real life</p>
          <h2>There is no right way to live at home.</h2>
          <p>There is only the way that feels more supportive for you. Magdalena brings an attentive eye, a practical plan, and space for the decisions that matter.</p>
          <Link href="/about" className="text-action">Meet Magda <span>→</span></Link>
        </div>
        <div className="story-note"><Sparkles size={16} strokeWidth={1.5} /> Quiet systems, tailored around you.</div>
      </section>

      <section className="affirmation-section">
        <p className="eyebrow eyebrow-light"><span /> A note from Quiet Space</p>
        <blockquote>“Your home can hold your life <em>without holding you back.</em>”</blockquote>
        <div className="affirmation-line"><Check size={15} /> Based in Chichester — serving West Sussex, Hampshire, and South Surrey.</div>
      </section>

      <section className="gallery-tease section-wrap">
        <div className="gallery-tease-copy">
          <p className="eyebrow"><span /> A glimpse of the feeling</p>
          <h2>Order that feels like <em>exhale.</em></h2>
          <p>Discover example spaces designed around everyday rituals, beautiful belongings, and a little more room to spare.</p>
          <Link href="/gallery" className="button-outline">View example work <ArrowUpRight size={17} /></Link>
        </div>
        <div className="gallery-tease-grid">
          <img src={kitchenUrl} alt="An organised pantry with natural baskets" />
          <img src={livingUrl} alt="A calm, edited living room shelf" />
        </div>
      </section>

      <section className="page-cta section-wrap">
        <div>
          <p className="eyebrow"><span /> Start your transformation</p>
          <h2>Ready to bring calm to your home?</h2>
        </div>
        <Link href="/contact" className="button-primary">Get in touch with Magda <ArrowUpRight size={17} /></Link>
      </section>
    </SiteShell>
  );
}
