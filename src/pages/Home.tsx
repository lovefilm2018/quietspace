/* Quiet Space — Home (client design): split hero, trust strip, and three service tiles beneath. */
import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "wouter";
import { SiteShell } from "@/components/SiteShell";
import { SplitHero } from "@/components/SplitHero";
import { assetUrl } from "@/lib/assets";
import { WHATSAPP_URL } from "@/seo/routes";
import "@/redesign.css";

const tiles = [
  {
    href: "/services/decluttering/",
    image: "tile-decluttering",
    alt: "Organised wooden shelves with a plant and woven basket in Chichester, West Sussex",
    title: "Decluttering",
    text: "Let go of what no longer serves you.",
  },
  {
    href: "/services/organising/",
    image: "tile-organising",
    alt: "Minimalist kitchen pantry shelf with labelled glass jars in West Sussex",
    title: "Home Organising",
    text: "Find the right place for everything.",
  },
  {
    href: "/services/staging/",
    image: "tile-staging",
    alt: "Occupied bedroom staged with sage and linen cushions for property photography",
    title: "Property Staging",
    text: "Prepare your home to look its best.",
  },
];

const trustItems = [
  { title: "10 Years’ Experience", detail: "Private homes, holiday homes, hotels & offices" },
  { title: "NHS-Trained Discretion", detail: "Calm, reliable & thorough (St Richard’s Hospital)" },
  { title: "Sussex, Hants & Surrey", detail: "Based in Chichester; wider travel upon request" },
  { title: "Zero-Judgement Promise", detail: "Please never tidy up before I arrive" },
];

export default function Home() {
  return (
    <SiteShell>
      <div className="qs-redesign">
        <SplitHero
          image="hero-wardrobe-empty"
          imageAlt="Calm, sunlit bedroom and open oak wardrobe with neutral and sage clothes neatly arranged in Chichester"
          imagePosition="75% 40%"
          labelledBy="home-title"
          className="qs-split-home"
        >
          <h1 id="home-title">Home Organising, Decluttering &amp; Practical Help at Home</h1>
          <p className="lede">If you need some help at home because you feel like things have piled up, you’re in the right place.</p>
          <div className="qs-home-body">
            <p>I love looking after homes and organising spaces. Before we get started, I can help you make a practical plan. We’ll work out what needs doing first, where things should go and how to make better use of the space you have.</p>
            <p>I can help you sort through your belongings, organise cupboards and wardrobes, and find practical storage solutions that work for you. If you’ve just moved, I can help you unpack and find a place for everything. I can also help you pack before a move or get your home ready to sell.</p>
            <p>I can help with other things too, like arranging cleaning or laundry services, picking up an order or dropping things off at a charity shop.</p>
            <p>I’m hardworking, very organised and hands-on. I pay attention to the little details and enjoy finding practical ways to make your home easier to live in.</p>
            <p className="qs-home-close">Just get in touch and tell me what you need, and we’ll see how I can help.</p>
          </div>
          <div className="qs-home-actions">
            <a className="qs-button" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={18} /> Free WhatsApp Photo Review
            </a>
            <Link className="qs-button qs-button-outline" href="/services/">
              Explore Services &amp; Prices <ArrowRight size={18} />
            </Link>
          </div>
        </SplitHero>

        <section className="qs-trust-strip" aria-label="Why homeowners trust Quiet Space">
          {trustItems.map((item) => (
            <div className="qs-trust-item" key={item.title}>
              <strong>{item.title}</strong>
              <span>{item.detail}</span>
            </div>
          ))}
        </section>

        <section className="qs-tiles" aria-label="Our services">
          {tiles.map((t) => (
            <Link key={t.href} href={t.href} className="qs-tile">
              <img src={assetUrl(`images/redesign/${t.image}.webp`)} alt={t.alt} loading="lazy" />
              <div className="qs-tile-body">
                <div>
                  <h2>{t.title}</h2>
                  <p>{t.text}</p>
                </div>
                <span className="qs-tile-arrow" aria-hidden="true"><ArrowRight size={20} /></span>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </SiteShell>
  );
}
