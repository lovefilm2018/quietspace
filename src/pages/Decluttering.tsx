/* Quiet Space — Decluttering page (client design, Page 4). */
import { SiteShell } from "@/components/SiteShell";
import { ConsultationButton, PageHead, ServiceTabs, Wordmark, leafBulletUrl } from "@/components/ServiceParts";
import { assetUrl } from "@/lib/assets";

const photoUrl = assetUrl("images/redesign/hero-declutter-bedroom.webp");

const signs = [
  "You feel overwhelmed by the amount of stuff in your home.",
  "Your cupboards and drawers are full, but you struggle to find what you need.",
  "You’re holding on to things you haven’t used in a long time.",
  "Clothes, toys and other belongings no longer suit your family’s needs.",
  "Cleaning and putting things away takes too much time.",
  "You’re running out of space for the things you really need.",
  "You want to own less and make your home easier to care for.",
  "You want to start, but don’t know what to keep, donate or sell.",
];

export default function Decluttering() {
  return (
    <SiteShell>
      <div className="qs-redesign">
        <ServiceTabs />
        <PageHead title="Decluttering" tagline="Make space for what matters." />
        <section className="qs-sheet" aria-labelledby="when-title">
          <h2 id="when-title">When is it time to declutter?</h2>
          <ul className="qs-checklist">
            {signs.map((s) => (
              <li key={s}><img src={leafBulletUrl} alt="" aria-hidden="true" /><span>{s}</span></li>
            ))}
          </ul>
          <hr className="qs-rule qs-rule-long" />
          <h2>Give your unwanted items a new home.</h2>
          <p className="qs-sheet-text">Together, we can donate them to a charity shop, or I can help you list them on Vinted.</p>
        </section>
        <div className="qs-photo-fade">
          <img src={photoUrl} alt="Magda choosing clothes in a calm, light bedroom wardrobe" width={1752} height={897} loading="lazy" />
        </div>
        <section className="qs-closing">
          <p className="small">You decide what stays and what goes.</p>
          <p className="serif">Sometimes, we need to let go of the old to make room for the new.</p>
          <Wordmark />
        </section>
        <ConsultationButton />
      </div>
    </SiteShell>
  );
}
