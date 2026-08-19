/* Quiet Space — Contact Page: clear, elegant enquiry channels to Magda */
import { Mail, MessageCircle, MapPin, Phone, ArrowUpRight, CheckCircle2, HeartHandshake } from "lucide-react";
import { SiteShell } from "@/components/SiteShell";

const serviceAreas = [
  "Worthing & Goring-by-Sea",
  "Brighton & Hove",
  "Shoreham-by-Sea",
  "Chichester & Arundel",
  "Lancing & Steyning",
  "Across East & West Sussex",
];

export default function Contact() {
  const mailtoLink = "mailto:mada_7017@yahoo.com?subject=Quiet%20Space%20Consultation%20Enquiry&body=Hello%20Magda,%0A%0AI%20would%20like%20to%20enquire%20about%20your%20home%20organising%20and%20decluttering%20services.%0A%0AMy%20location:%0ARooms%20/%20Projects%20in%20mind:%0APreferred%20days%20/%20times:%0A%0AThank%20you!";

  return (
    <SiteShell>
      <section className="page-hero">
        <p className="eyebrow"><span /> Get In Touch</p>
        <h1>Let’s start with a <em>quiet conversation.</em></h1>
        <p className="page-hero-lead">
          Whether you need a full-home reset, an organised pantry, or guidance with a wardrobe declutter, Magdalena is here to help without judgement.
        </p>
      </section>

      <section className="section-wrap" style={{ paddingBottom: "120px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "40px" }}>
          {/* Direct Contact Card */}
          <div style={{ background: "#fffdf8", border: "1px solid #d9d6c9", padding: "48px 36px", borderRadius: "4px" }}>
            <p className="eyebrow"><span /> Reach Magda Directly</p>
            <h2 style={{ fontSize: "2.4rem", marginBottom: "20px" }}>Book Your Free Consultation</h2>
            <p style={{ color: "#596b6a", fontSize: "15px", lineHeight: "1.8", marginBottom: "32px" }}>
              Every project starts with an unhurried consultation to understand your home, your lifestyle, and what will bring you the most ease.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "36px" }}>
              <a
                href={mailtoLink}
                className="button-primary"
                style={{ width: "100%", textDecoration: "none" }}
              >
                <Mail size={17} /> Email: mada_7017@yahoo.com
              </a>

              <a
                href="https://wa.me/447000000000?text=Hello%20Magda,%20I%20would%20like%20to%20enquire%20about%20Quiet%20Space%20organising%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="button-outline"
                style={{ width: "100%", textDecoration: "none" }}
              >
                <MessageCircle size={17} /> Chat on WhatsApp
              </a>
            </div>

            <div style={{ borderTop: "1px solid #e2ded5", paddingTop: "24px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#2d6264", fontWeight: 600, fontSize: "14px", marginBottom: "8px" }}>
                <HeartHandshake size={18} /> Zero Judgement Guarantee
              </div>
              <p style={{ margin: 0, color: "#6d746e", fontSize: "13px", lineHeight: "1.6" }}>
                We understand that inviting someone into your home requires trust. Every conversation and home session is completely confidential and respectful.
              </p>
            </div>
          </div>

          {/* Service Area Coverage */}
          <div style={{ background: "#2d6264", color: "#fffdf8", padding: "48px 36px", borderRadius: "4px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <p className="eyebrow eyebrow-light"><span /> Service Area</p>
              <h2 style={{ fontSize: "2.4rem", marginBottom: "20px", color: "#fffdf8" }}>Serving Worthing & Across Sussex</h2>
              <p style={{ color: "#d5ded7", fontSize: "15px", lineHeight: "1.8", marginBottom: "28px" }}>
                Magdalena provides hands-on organising and decluttering across West & East Sussex:
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "12px", marginBottom: "32px" }}>
                {serviceAreas.map((area) => (
                  <div key={area} style={{ display: "flex", alignItems: "center", gap: "10px", color: "#fffdf8", fontSize: "14px" }}>
                    <MapPin size={16} color="#d8b776" /> {area}
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: "rgba(255,255,255,0.08)", padding: "20px", borderRadius: "4px", border: "1px solid rgba(255,255,255,0.15)" }}>
              <p style={{ margin: 0, color: "#f8f6f0", fontSize: "13px", lineHeight: "1.6" }}>
                <em>Outside these areas?</em> Get in touch to discuss bespoke travel arrangements for whole-home or multi-day projects.
              </p>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
