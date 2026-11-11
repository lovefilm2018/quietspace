/* Quiet Space — Home Organising page (client design, Page 3). */
import { SiteShell } from "@/components/SiteShell";
import { ConsultationButton, PageHead, ServiceTabs, Wordmark } from "@/components/ServiceParts";
import { assetUrl } from "@/lib/assets";

const photoUrl = assetUrl("images/redesign/hero-folding-laundry.webp");

const moments = [
  { img: "ill-moving-boxes", alt: "Stacked moving boxes beside a vase of leaves", title: "Moving to a new home?", text: "I can help you sort and organise your belongings before the move, then unpack and find the right place for everything in your new home." },
  { img: "ill-renovation-plan", alt: "A floor plan with colour swatches and a pencil", title: "Planning a renovation?", text: "A new space needs a new approach. Together, we can plan practical storage and a layout that works for you." },
  { img: "ill-children-toys", alt: "A woven basket with soft toys, books and a wooden car", title: "Have your children outgrown their space?", text: "Let’s rethink their rooms, clothes and toys to suit their changing needs." },
  { img: "ill-nursery-cot", alt: "A wooden cot with a teddy and folded blankets", title: "Is your family growing?", text: "Whether you’re welcoming a new partner or a baby, I can help you make room for your next chapter." },
  { img: "ill-pantry-jars", alt: "Glass storage jars on a shelf beside a trailing plant", title: "Is your current organisation no longer working?", text: "I can help you create simple, practical systems that make everyday life easier." },
];

export default function Organising() {
  return (
    <SiteShell>
      <div className="qs-redesign">
        <ServiceTabs />
        <PageHead title="Home Organising" tagline="A home that works for the way you live." />
        <section className="qs-rows">
          {moments.map((m) => (
            <article className="qs-row" key={m.title}>
              <img src={assetUrl(`images/redesign/${m.img}.webp`)} alt={m.alt} width={1536} height={1024} loading="lazy" />
              <div>
                <h2>{m.title}</h2>
                <p>{m.text}</p>
              </div>
            </article>
          ))}
        </section>
        <div className="qs-photo-fade">
          <img src={photoUrl} alt="Magda folding soft linen into a woven basket in a bright bedroom" width={1536} height={1024} loading="lazy" />
        </div>
        <section className="qs-closing"><Wordmark /></section>
        <ConsultationButton />
      </div>
    </SiteShell>
  );
}
