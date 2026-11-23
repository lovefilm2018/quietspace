/* Quiet Space — Downsizing & Bereavement Decluttering page. */
import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "wouter";
import { SiteShell } from "@/components/SiteShell";
import { PageHead, ServiceTabs, Wordmark, leafBulletUrl } from "@/components/ServiceParts";
import { assetUrl } from "@/lib/assets";
import { WHATSAPP_URL } from "@/seo/routes";

const ways = [
  "Gentle, unhurried downsizing when moving to a smaller home or retirement property—never feeling rushed.",
  "Sensitive, respectful sorting after a bereavement, helping families honour treasured memories while clearing space.",
  "Practical support for adult children and executors coordinating a home transition from afar.",
  "Strict confidentiality, calm reliability, and high hygiene standards shaped by my work at St Richard's Hospital, Chichester.",
  "Thoughtful rehoming: keeping family heirlooms safe while sorting clean donations for local charities or Vinted.",
];

export default function DownsizingBereavement() {
  return (
    <SiteShell>
      <div className="qs-redesign">
        <ServiceTabs />
        <PageHead
          title="Downsizing & Bereavement"
          tagline="Compassionate, discreet support at your own pace."
        />

        <section className="qs-sheet" aria-labelledby="downsize-title">
          <h2 id="downsize-title">A calm, trusted pair of hands during life’s bigger transitions</h2>
          <ul className="qs-checklist">
            {ways.map((s) => (
              <li key={s}>
                <img src={leafBulletUrl} alt="" aria-hidden="true" width={36} height={36} />
                <span>{s}</span>
              </li>
            ))}
          </ul>
          <hr className="qs-rule qs-rule-long" />
          <h2>Every decision stays yours</h2>
          <p className="qs-sheet-text">
            Serving Chichester, Emsworth, Arundel, Midhurst, Worthing, and Petersfield, I work quietly alongside you
            or your family—sorting keepsakes, coordinating charity drop-offs, and preparing rooms for sale or handover.
          </p>
        </section>

        <div className="qs-photo-fade">
          <img
            src={assetUrl("images/redesign/card-price-short-session.webp")}
            alt="A woven basket of neatly folded linen with an olive sprig in a calm home"
            width={1536}
            height={1024}
            loading="lazy"
          />
        </div>

        <section className="qs-closing">
          <p className="small">Zero judgement. Zero rush. Complete discretion.</p>
          <p className="serif">Taking gentle care of the things that mattered, and the home ahead.</p>
          <Wordmark />
        </section>

        <div className="qs-cta-row qs-home-actions" style={{ justifyContent: "center" }}>
          <a className="qs-button" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <MessageCircle size={18} /> Message Magda Privately
          </a>
          <Link href="/contact/" className="qs-button qs-button-outline">
            Arrange a Home Visit <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </SiteShell>
  );
}
