/* Quiet Space — Linen House: calm editorial page with ample breathing room, warm paper, and eucalyptus detail. */
import { ArrowDown, ArrowUpRight, Check, Flower2, Sparkles, MapPin, Mail, MessageCircle } from "lucide-react";
import { Link } from "wouter";
import { SiteShell } from "@/components/SiteShell";
import { assetUrl } from "@/lib/assets";

const heroUrl = assetUrl("images/quiet-space-hero.jpg");
const processUrl = assetUrl("images/quiet-space-process.jpg");
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
      <section className="hero-section">
        <div className="hero-content">
          <div className="eyebrow"><span /> Worthing & Sussex • Home Organising</div>
          <h1>Make room for the <em>life</em> you want to live.</h1>
          <p className="hero-copy">
            Thoughtful home organising and decluttering by Magdalena, designed to bring calm, function, and enduring beauty to everyday life.
          </p>
          <div className="hero-actions">
            <Link className="button-primary" href="/contact">
              Book a consultation <ArrowUpRight size={17} />
            </Link>
            <Link className="text-action" href="/services">
              Explore our services <span>→</span>
            </Link>
          </div>
        </div>
        <div className="hero-image-wrap">
          <img src={heroUrl} alt="A calm organised home office with natural storage" className="hero-image" />
          <div className="hero-image-caption"><span>Quiet Space</span><span>Worthing & Sussex</span></div>
        </div>
        <div className="hero-scroll"><ArrowDown size={15} /> Scroll to settle in</div>
      </section>

      <section className="intro-section section-wrap">
        <div className="intro-mark"><Flower2 size={26} strokeWidth={1.25} /></div>
        <div className="intro-text">
          <p className="eyebrow"><span /> Space to breathe</p>
          <h2>A calm home is not about perfection. It is about creating enough space for your day to unfold.</h2>
        </div>
        <p className="intro-support">Quiet Space helps you step out of the overwhelm and into practical, enduring order—without losing the warmth and personality that makes a home yours.</p>
      </section>

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
        <div className="story-image-wrap"><img src={processUrl} alt="Thoughtfully arranged linen and wardrobe storage" className="story-image" /></div>
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
        <div className="affirmation-line"><Check size={15} /> Based in Worthing — serving Brighton, Chichester, and across Sussex.</div>
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
