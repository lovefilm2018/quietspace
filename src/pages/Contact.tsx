/* Quiet Space — Contact (client design): calm reassurance copy, then Magda's direct details beside a sunlit bedroom. */
import { Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { SiteShell } from "@/components/SiteShell";
import { SplitHero } from "@/components/SplitHero";
import { BUSINESS_EMAIL, BUSINESS_PHONE_DISPLAY, BUSINESS_PHONE_E164, WHATSAPP_URL } from "@/seo/routes";
import "@/redesign.css";

const EMAIL = BUSINESS_EMAIL;
const PHONE_DISPLAY = BUSINESS_PHONE_DISPLAY;
const PHONE_TEL = BUSINESS_PHONE_E164;
const WHATSAPP = WHATSAPP_URL;
const INSTAGRAM = "https://www.instagram.com/quietspace.organising/";

export default function Contact() {
  return (
    <SiteShell>
      <div className="qs-redesign">
        <SplitHero
          image="hero-bedroom-desk"
          imageAlt="A sunlit bedroom with a tidy desk, plants and a woven rug"
          imagePosition="40% 50%"
          labelledBy="contact-title"
        >
          <div className="qs-contact-lines">
            <p>Your brain is very good at dealing with distractions, but filtering them out takes energy.</p>
            <p>When you choose to simplify and organise your surroundings, you give your mind a <strong>PRICELESS GIFT.</strong></p>
            <p>You give it a moment to rest from constantly filtering information.</p>
            <hr className="qs-rule" style={{ width: 280, margin: "24px 0" }} />
            <h1 id="contact-title">Get in touch</h1>
            <ul className="qs-contact-list">
              <li>
                <span className="qs-contact-icon"><Mail size={24} /></span>
                <a href={`mailto:${EMAIL}?subject=Quiet%20Space%20enquiry`}>Email: {EMAIL}</a>
              </li>
              <li>
                <span className="qs-contact-icon"><Phone size={24} /></span>
                <span>
                  Phone / WhatsApp: <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
                  <small><a href={WHATSAPP} target="_blank" rel="noopener noreferrer"><MessageCircle size={13} style={{ display: "inline", verticalAlign: "-2px" }} /> Message on WhatsApp</a></small>
                </span>
              </li>
              <li>
                <span className="qs-contact-icon"><MapPin size={24} /></span>
                <span>Location: Chichester<small>Free travel ≤ 15 miles (45p/mile one-way beyond) across West Sussex, Hampshire &amp; South Surrey</small></span>
              </li>
              <li>
                <span className="qs-contact-icon"><Instagram size={24} /></span>
                <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">Instagram: @quietspace.organising</a>
              </li>
            </ul>
          </div>
        </SplitHero>
      </div>
    </SiteShell>
  );
}
