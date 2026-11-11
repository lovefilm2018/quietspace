/* Quiet Space — Home Staging page (client design, Page 5). */
import { SiteShell } from "@/components/SiteShell";
import { ConsultationButton, PageHead, ServiceTabs, Wordmark, leafBulletUrl } from "@/components/ServiceParts";
import { assetUrl } from "@/lib/assets";

const photoUrl = assetUrl("images/redesign/hero-styling-couch.webp");

const reasons = [
  "You’re preparing your property for sale.",
  "You want to get your property ready for new tenants.",
  "You’re preparing a holiday home for guests.",
  "Your property is empty and needs a welcoming touch.",
  "Your rooms feel crowded or their purpose is unclear.",
  "You want to make better use of your existing furniture and accessories.",
  "You’re getting ready for property photos or viewings.",
  "You want help bringing the finishing touches together.",
];

export default function Staging() {
  return (
    <SiteShell>
      <div className="qs-redesign">
        <ServiceTabs />
        <PageHead title="Home Staging" tagline="Help people picture themselves at home." />
        <section className="qs-sheet" aria-labelledby="when-title">
          <h2 id="when-title">When can home staging help?</h2>
          <ul className="qs-checklist">
            {reasons.map((s) => (
              <li key={s}><img src={leafBulletUrl} alt="" aria-hidden="true" /><span>{s}</span></li>
            ))}
          </ul>
          <hr className="qs-rule qs-rule-long" />
          <h2>Make the most of your property.</h2>
          <p className="qs-sheet-text">I can help you declutter, rearrange furniture and add thoughtful finishing touches to create a welcoming space that shows your property at its best.</p>
        </section>
        <div className="qs-photo-fade">
          <img src={photoUrl} alt="Magda plumping cushions on a sage-green sofa in a bright living room" width={1672} height={941} loading="lazy" />
        </div>
        <section className="qs-closing">
          <p className="serif">A fresh perspective. A welcoming first impression.</p>
          <Wordmark />
        </section>
        <ConsultationButton />
      </div>
    </SiteShell>
  );
}
