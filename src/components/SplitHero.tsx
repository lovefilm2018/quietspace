/* Quiet Space — split hero used on Home, Contact and service pages: calm copy on the left, a sunlit photo fading in from the right. */
import { assetUrl } from "@/lib/assets";
import "@/redesign.css";

const leavesUrl = assetUrl("images/redesign/leaf-corner-olives.webp");

type Props = {
  image: string;
  imageAlt: string;
  /** CSS object-position for the photo, e.g. "70% 30%". */
  imagePosition?: string;
  children: React.ReactNode;
  labelledBy?: string;
};

export function SplitHero({ image, imageAlt, imagePosition = "center", children, labelledBy }: Props) {
  return (
    <section className="qs-split" aria-labelledby={labelledBy}>
      <img className="qs-split-leaves" src={leavesUrl} alt="" aria-hidden="true" />
      <div className="qs-split-photo">
        <img src={assetUrl(`images/redesign/${image}.webp`)} alt={imageAlt} style={{ objectPosition: imagePosition }} />
      </div>
      <div className="qs-split-copy">{children}</div>
    </section>
  );
}
