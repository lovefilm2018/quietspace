/* Quiet Space — site chrome rebuilt from the client's designs: simple linen header, olive accents, calm footer. */
import { Menu, X, Mail } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { assetUrl } from "@/lib/assets";
import "@/redesign.css";

const logoUrl = assetUrl("images/redesign/logo-header.webp");
const sprigLeft = assetUrl("images/redesign/sprig-left.webp");
const sprigRight = assetUrl("images/redesign/sprig-right.webp");

const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Me" },
  { href: "/services", label: "Services & Prices" },
  { href: "/contact", label: "Contact" },
];

function isActive(location: string, href: string) {
  if (href === "/") return location === "/";
  return location === href || location.startsWith(`${href}/`);
}

function NavLinks({ onNavigate, className }: { onNavigate?: () => void; className: string }) {
  const [location] = useLocation();
  return (
    <nav aria-label="Primary navigation" className={className}>
      {navigation.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={onNavigate}
          aria-current={isActive(location, item.href) ? "page" : undefined}
          className={`qs-nav-link ${isActive(location, item.href) ? "qs-nav-link-active" : ""}`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="qs-chrome qs-header">
      <div className="qs-header-inner">
        <Link href="/" className="qs-brand" aria-label="Quiet Space — home">
          <img src={logoUrl} alt="Quiet Space — Home Organising & Property Staging" width={1945} height={373} />
        </Link>
        <NavLinks className="qs-nav qs-nav-desktop" />
        <button
          type="button"
          className="qs-menu-button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && <NavLinks className="qs-nav qs-nav-mobile" onNavigate={() => setOpen(false)} />}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="qs-chrome qs-footer">
      <img className="qs-footer-sprig qs-footer-sprig-left" src={sprigLeft} alt="" aria-hidden="true" loading="lazy" />
      <img className="qs-footer-sprig qs-footer-sprig-right" src={sprigRight} alt="" aria-hidden="true" loading="lazy" />
      <div className="qs-footer-inner">
        <Link href="/" className="qs-brand" aria-label="Quiet Space — home">
          <img src={logoUrl} alt="Quiet Space — Home Organising & Property Staging" width={1945} height={373} loading="lazy" />
        </Link>
        <NavLinks className="qs-nav qs-footer-nav" />
      </div>
      <div className="qs-footer-meta">
        <span>Based in Chichester, West Sussex — serving Sussex &amp; Hampshire</span>
        <a href="mailto:quietspace.chichester@gmail.com"><Mail size={14} /> quietspace.chichester@gmail.com</a>
        <Link href="/gallery">Gallery</Link>
        <span>© {new Date().getFullYear()} Quiet Space</span>
      </div>
    </footer>
  );
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="qs-shell">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
