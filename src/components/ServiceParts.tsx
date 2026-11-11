/* Quiet Space — shared building blocks for the service pages (tabs, page heading, closing wordmark, consultation button). */
import { ArrowRight } from "lucide-react";
import { Link, useLocation } from "wouter";
import { assetUrl } from "@/lib/assets";
import "@/redesign.css";

export const leafBulletUrl = assetUrl("images/redesign/leaf-bullet.webp");
const sprigLeft = assetUrl("images/redesign/sprig-left.webp");
const sprigRight = assetUrl("images/redesign/sprig-right.webp");

const tabs = [
  { href: "/services", label: "Pricing" },
  { href: "/services/organising", label: "Home Organising" },
  { href: "/services/decluttering", label: "Decluttering" },
  { href: "/services/staging", label: "Home Staging" },
];

export function ServiceTabs() {
  const [location] = useLocation();
  return (
    <nav className="qs-tabs" aria-label="Services">
      {tabs.map((t) => (
        <Link key={t.href} href={t.href} className={`qs-tab ${location === t.href ? "qs-tab-active" : ""}`} aria-current={location === t.href ? "page" : undefined}>
          {t.label}
        </Link>
      ))}
    </nav>
  );
}

export function PageHead({ title, tagline }: { title: string; tagline: string }) {
  return (
    <header className="qs-page-head">
      <div className="qs-page-head-row">
        <img src={sprigLeft} alt="" aria-hidden="true" />
        <h1>{title}</h1>
        <img src={sprigRight} alt="" aria-hidden="true" />
      </div>
      <p className="qs-tagline">{tagline}</p>
    </header>
  );
}

export function Wordmark() {
  return <div className="qs-wordmark" aria-hidden="true">Quiet Space</div>;
}

export function ConsultationButton() {
  return (
    <div className="qs-cta-row">
      <Link href="/contact" className="qs-button">
        Book a consultation <ArrowRight size={18} />
      </Link>
    </div>
  );
}
