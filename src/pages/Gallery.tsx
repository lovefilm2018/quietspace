/* Quiet Space — Linen House: an asymmetrical example-work gallery with soft natural interiors and quiet editorial captions. */
import { ArrowUpRight, Image as ImageIcon } from "lucide-react";
import { Link } from "wouter";
import { SiteShell } from "@/components/SiteShell";
import { assetUrl } from "@/lib/assets";

const gallery = [
  { title: "Kitchen Pantry Reset", category: "Clear flow", image: assetUrl("images/quiet-space-gallery-kitchen.jpg"), alt: "A natural and organised kitchen pantry" },
  { title: "Edited Living Space", category: "Room to rest", image: assetUrl("images/quiet-space-gallery-living.jpg"), alt: "A calm organised living room shelf" },
  { title: "A Softer Wardrobe Rhythm", category: "Everyday ease", image: assetUrl("images/quiet-space-process.jpg"), alt: "Organised wardrobe and folded linen" },
  { title: "A Place for Each Ritual", category: "Considered storage", image: assetUrl("images/quiet-space-gallery-pantry.jpg"), alt: "An organised pantry with everyday items in clear view" },
  { title: "Breathing Room in the Linen Cupboard", category: "Gentle reset", image: assetUrl("images/quiet-space-gallery-linen.jpg"), alt: "A tidy linen closet with natural basket storage" },
  { title: "Bespoke Closet Arrangement", category: "Simpler systems", image: assetUrl("images/quiet-space-gallery-closet.jpg"), alt: "An organised household closet with practical storage" },
];

export default function Gallery() {
  return (
    <SiteShell>
      <section className="page-hero gallery-hero">
        <p className="eyebrow"><span /> Portfolio & Transformations</p>
        <h1>Space with a little more <em>ease</em> in it.</h1>
        <p className="page-hero-lead">A collection of spaces transformed across Sussex: useful, beautifully ordered, and easier to move through each day.</p>
      </section>

      <section className="gallery-intro section-wrap">
        <ImageIcon size={23} strokeWidth={1.25} />
        <p>Good organisation is rarely about cold minimalism. It is about choosing what belongs, and creating intuitive order that brings daily peace.</p>
      </section>

      <section className="work-gallery section-wrap">
        {gallery.map((item, index) => (
          <figure key={item.title} className={`gallery-item gallery-item-${index + 1}`}>
            <div className="gallery-image-wrap"><img src={item.image} alt={item.alt} /></div>
            <figcaption><span>{item.category}</span><h2>{item.title}</h2><span className="figure-no">0{index + 1}</span></figcaption>
          </figure>
        ))}
      </section>

      <section className="gallery-outro">
        <p className="eyebrow eyebrow-light"><span /> Your space, your story</p>
        <h2>Every home is unique.<br />Every transformation begins with <em>one conversation.</em></h2>
        <Link href="/contact" className="button-light">Book your consultation <ArrowUpRight size={17} /></Link>
      </section>
    </SiteShell>
  );
}
