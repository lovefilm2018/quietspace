/* Quiet Space — About: rebuilt from Magda's design (QS Pics / Page 2) as live, accessible text with her portrait, signature and olive sprig. */
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { SiteShell } from "@/components/SiteShell";
import { assetUrl } from "@/lib/assets";
import "@/redesign.css";

const portraitUrl = assetUrl("images/redesign/magda-kitchen-portrait.webp");
const signatureUrl = assetUrl("images/redesign/magda-signature.webp");
const sprigUrl = assetUrl("images/redesign/leaf-corner-olives.webp");

export default function About() {
  return (
    <SiteShell>
      <div className="qs-redesign">
        <section className="qs-about" aria-labelledby="about-title">
          <div className="qs-about-inner">
            <div className="qs-about-copy">
              <h1 id="about-title" className="qs-about-title">About Me</h1>
              <hr className="qs-rule" />
              <h2 className="qs-about-hello">Hi, I’m Magda.</h2>

              <p>
                I’ve always had a natural passion for creating clean, organised and calm spaces. Organising comes naturally to me. It’s something I genuinely enjoy and have always found calming.
              </p>
              <p>I understand how clutter and having too many things around can affect your focus, wellbeing and everyday life.</p>
              <p>For me, creating an organised home isn’t just about making it look beautiful — it’s about making daily life feel simpler and easier.</p>

              <hr className="qs-rule" />

              <p>
                For the past 10 years, I’ve worked in private homes, holiday homes, hotels and offices. I also work at St Richard’s Hospital.
              </p>
              <p>
                This experience has given me the chance to see many different spaces and ways of organising them. I’m always finding new ideas and inspiration, but most importantly, I can see what really works in everyday life and what doesn’t.
              </p>
              <p>
                I love creating calm, functional spaces that make everyday life easier and more enjoyable. My goal is to help you feel happier in your home, with a space that truly works for you.
              </p>

              <img className="qs-about-signature" src={signatureUrl} alt="Magda" width={240} height={73} />
            </div>

            <aside className="qs-about-aside">
              <img
                className="qs-about-portrait"
                src={portraitUrl}
                alt="Magda smiling, holding a mug in a bright, tidy kitchen"
                width={1536}
                height={1024}
              />
              <p className="qs-about-caption">Based in Chichester, serving Sussex &amp; Hampshire</p>
            </aside>
          </div>

          <img className="qs-sprig-corner" src={sprigUrl} alt="" aria-hidden="true" loading="lazy" />
        </section>

        <section className="qs-about-cta">
          <h2>Ready to create your quiet space?</h2>
          <Link href="/contact" className="qs-button">
            Book a consultation <ArrowRight size={18} />
          </Link>
        </section>
      </div>
    </SiteShell>
  );
}
