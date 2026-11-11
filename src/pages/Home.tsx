/* Quiet Space — Home (client design): "Did you know?" split hero with three service tiles beneath. */
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { SiteShell } from "@/components/SiteShell";
import { SplitHero } from "@/components/SplitHero";
import { assetUrl } from "@/lib/assets";
import "@/redesign.css";

const tiles = [
  { href: "/services/decluttering", image: "tile-decluttering", alt: "Neat shelves with a plant and a woven basket", title: "Decluttering", text: "Let go of what no longer serves you." },
  { href: "/services/organising", image: "tile-organising", alt: "A pantry shelf of labelled glass jars", title: "Home Organising", text: "Find the right place for everything." },
  { href: "/services/staging", image: "tile-staging", alt: "A neatly dressed bed with sage and linen cushions", title: "Property Staging", text: "Prepare your home to look its best." },
];

export default function Home() {
  return (
    <SiteShell>
      <div className="qs-redesign">
        <SplitHero
          image="hero-wardrobe-woman"
          imageAlt="Magda arranging neutral and sage clothes in a calm, light wardrobe"
          imagePosition="75% 30%"
          labelledBy="home-title"
        >
          <h1 id="home-title">Did you know?</h1>
          <p>Research from Yale University suggests that visual clutter can affect how visual information is processed in the brain.</p>
          <p>For some people, being surrounded by too many things can feel distracting. Creating a calmer, more organised space may help make everyday life feel easier.</p>
          <p className="lede">Less clutter. More calm.</p>
          <Link className="qs-button" href="/services">Explore Services <ArrowRight size={18} /></Link>
        </SplitHero>

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
