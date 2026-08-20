/* Quiet Space — Linen House: a warm, slow-living editorial shell with eucalyptus accents and calm spacing. */
import { Menu, X, ArrowUpRight, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { assetUrl } from "@/lib/assets";

const logoUrl = assetUrl("images/quiet-space-horizontal-logo.png");
const iconUrl = assetUrl("images/quiet-space-icon.png");

const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
  const [location] = useLocation();

  return (
    <nav aria-label="Primary navigation" className="flex flex-col gap-1 md:flex-row md:items-center md:gap-7">
      {navigation.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={onNavigate}
          className={`nav-link ${location === item.href ? "nav-link-active" : ""}`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

function MobileTabBar() {
  const [location] = useLocation();

  return (
    <nav aria-label="Mobile page navigation" className="mobile-page-strip md:hidden">
      <div className="mobile-page-strip-inner">
        {navigation.map((item) => {
          const isActive = location === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`mobile-tab-item ${isActive ? "mobile-tab-item-active" : ""}`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link href="/" className="brand-lockup" aria-label="Quiet Space home">
          <img className="brand-wordmark" src={logoUrl} alt="Quiet Space — Home Organising & Decluttering" />
        </Link>

        <div className="hidden md:block">
          <NavLinks />
        </div>

        <div className="flex items-center gap-2.5">
          <Link href="/contact" className="header-cta hidden sm:inline-flex">
            Book Consultation <ArrowUpRight size={15} strokeWidth={1.8} />
          </Link>

          <button
            type="button"
            className="mobile-menu-button md:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Persistent horizontal page strip on mobile for immediate visual page access */}
      <MobileTabBar />

      {open && (
        <div className="mobile-nav md:hidden">
          <NavLinks onNavigate={() => setOpen(false)} />
          <Link href="/contact" onClick={() => setOpen(false)} className="header-cta mt-5 inline-flex w-full justify-center">
            Book Consultation <ArrowUpRight size={15} strokeWidth={1.8} />
          </Link>
          <div className="mobile-nav-footer mt-4 pt-3 border-t border-[rgba(45,98,100,0.15)] flex flex-col gap-1.5 text-xs text-[#597171]">
            <span className="font-semibold text-[#244d4f]">Worthing &amp; Sussex, UK</span>
            <a href="mailto:mada_7017@yahoo.com" className="text-[#2d6264] flex items-center gap-1.5 hover:underline">
              <Mail size={13} /> mada_7017@yahoo.com
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <img src={iconUrl} alt="Quiet Space house and leaf icon" className="footer-icon" />
          <div>
            <p className="footer-title">Quiet Space</p>
            <p className="footer-subtitle">Home Organising &amp; Decluttering • Magdalena</p>
          </div>
        </div>
        <div className="footer-message">
          <p style={{ margin: "0 0 6px 0", color: "#fffdf8", fontWeight: 600 }}>Worthing &amp; Sussex, UK</p>
          <a href="mailto:mada_7017@yahoo.com" style={{ color: "#d9b973", textDecoration: "none", fontSize: "13px", display: "inline-flex", alignItems: "center", gap: "6px" }}>
            <Mail size={14} /> mada_7017@yahoo.com
          </a>
        </div>
        <div className="footer-links">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Quiet Space (QuietSpace.org.uk)</span>
        <span>Creating calm, functional, and aesthetically pleasing homes.</span>
      </div>
    </footer>
  );
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
