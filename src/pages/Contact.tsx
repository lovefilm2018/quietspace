/* Quiet Space — Contact Page: clear, elegant enquiry channels to Magda */
import { Mail, MessageCircle, MapPin, Phone, ArrowUpRight, CheckCircle2, HeartHandshake } from "lucide-react";
import { SiteShell } from "@/components/SiteShell";

const sussexAreas = [
  "Chichester (Base Location)",
  "Worthing & Goring-by-Sea",
  "Arundel & Littlehampton",
  "Bognor Regis & Pagham",
  "Midhurst & Petworth",
  "Brighton, Hove & Shoreham",
];

const hampshireSurreyAreas = [
  "Portsmouth & Southsea",
  "Emsworth & Havant",
  "Petersfield & Mid-Hampshire",
  "Fareham & Surrounds",
  "South Surrey",
  "Nationwide travel upon arrangement",
];

export default function Contact() {
  const mailtoLink = "mailto:mada_7017@yahoo.com?subject=Quiet%20Space%20Consultation%20Enquiry&body=Hello%20Magda,%0A%0AI%20would%20like%20to%20enquire%20about%20your%20home%20organising%20and%20staging%20services.%0A%0AMy%20location:%0ARooms%20/%20Projects%20in%20mind:%0APreferred%20days%20/%20times:%0A%0AThank%20you!";

  return (
    <SiteShell>
      <section className="page-hero">
        <p className="eyebrow"><span /> Get In Touch</p>
        <h1>Let’s start with a <em>quiet conversation.</em></h1>
        <p className="page-hero-lead">
          Whether you need a full-home reset, property staging for sale, or a single wardrobe refresh, Magdalena is here to help with warmth, care, and zero judgement.
        </p>
      </section>

      <section className="section-wrap" style={{ paddingBottom: "120px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "40px" }}>
          {/* Direct Contact Card */}
          <div style={{ background: "#fffdf8", border: "1px solid #d9d6c9", padding: "48px 36px", borderRadius: "4px" }}>
            <p className="eyebrow"><span /> Reach Magda Directly</p>
            <h2 style={{ fontSize: "2.4rem", marginBottom: "20px" }}>Arrange Your Consultation</h2>
            <p style={{ color: "#596b6a", fontSize: "15px", lineHeight: "1.8", marginBottom: "20px" }}>
              Every home is unique. Share a few details, photos, or video of your space to receive tailored session recommendations.
            </p>

            <div style={{ background: "#f5f3eb", padding: "16px 20px", borderRadius: "4px", marginBottom: "28px", border: "1px solid #e2ded5" }}>
              <p style={{ margin: 0, fontSize: "13px", color: "#455843", lineHeight: "1.6" }}>
                <strong>Assessment policy:</strong> Initial photo/video assessment is complimentary. In-person consultations are <strong>£50</strong>, which is <em>fully credited towards your service invoice</em> upon booking.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "36px" }}>
              <a
                href={mailtoLink}
                className="button-primary"
                style={{ width: "100%", textDecoration: "none" }}
              >
                <Mail size={17} /> Email: mada_7017@yahoo.com
              </a>

              <a
                href="https://wa.me/447000000000?text=Hello%20Magda,%20I%20would%20like%20to%20enquire%20about%20Quiet%20Space%20organising%20and%20staging%20services"
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
                <HeartHandshake size={18} /> Discretion &amp; Zero Judgement Guarantee
              </div>
              <p style={{ margin: 0, color: "#6d746e", fontSize: "13px", lineHeight: "1.6" }}>
                With a background in healthcare and private residences, Magda treats every home with the highest standards of confidentiality, cleanliness, and non-judgemental care.
              </p>
            </div>
          </div>

          {/* Service Area Coverage */}
          <div style={{ background: "#2d6264", color: "#fffdf8", padding: "48px 36px", borderRadius: "4px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <p className="eyebrow eyebrow-light"><span /> Service Area &amp; Travel</p>
              <h2 style={{ fontSize: "2.4rem", marginBottom: "16px", color: "#fffdf8" }}>Based in Chichester</h2>
              <p style={{ color: "#d5ded7", fontSize: "14px", lineHeight: "1.7", marginBottom: "24px" }}>
                Regularly visiting homes and properties across West Sussex, Hampshire, and South Surrey:
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "28px" }}>
                <div>
                  <h4 style={{ color: "#d8b776", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 10px 0" }}>West Sussex</h4>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    {sussexAreas.map((area) => (
                      <div key={area} style={{ display: "flex", alignItems: "center", gap: "8px", color: "#fffdf8", fontSize: "13px" }}>
                        <MapPin size={14} color="#d8b776" /> {area}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 style={{ color: "#d8b776", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 10px 0" }}>Hampshire &amp; Surrey</h4>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    {hampshireSurreyAreas.map((area) => (
                      <div key={area} style={{ display: "flex", alignItems: "center", gap: "8px", color: "#fffdf8", fontSize: "13px" }}>
                        <MapPin size={14} color="#d8b776" /> {area}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div style={{ background: "rgba(255,255,255,0.08)", padding: "20px", borderRadius: "4px", border: "1px solid rgba(255,255,255,0.15)" }}>
              <p style={{ margin: 0, color: "#f8f6f0", fontSize: "13px", lineHeight: "1.6" }}>
                <strong>Travel:</strong> Within 15 miles of Chichester: <strong>FREE</strong>. Nationwide travel: 45p per mile fuel charge added to invoice. Multi-day or overnight projects arranged in advance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
