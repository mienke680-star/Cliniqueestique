import Image from "next/image";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { whatsappLink } from "@/data/business";
import { IconArrowRight } from "./icons";
import teamPhoto from "@/public/images/clinique-estique-team.jpg";

// Hero-only typefaces: scoped to this component so the rest of the site keeps
// its existing type system.
const heroSerif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-hero-serif",
});

const heroSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-hero-sans",
});

// The photograph is the authentic, unaltered team portrait. All of the
// editorial styling around it (ivory field, light, monogram) is CSS layered
// beside it, never painted over the people.
export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className={`ce-hero ${heroSerif.variable} ${heroSans.variable}`}
    >
      <div aria-hidden className="ce-hero__light" />
      <div aria-hidden className="ce-hero__monogram">
        CE
      </div>

      <div className="ce-hero__content">
        <div className="ce-hero__brand ce-hero__reveal" style={{ "--d": "0.05s" } as React.CSSProperties}>
          <p className="ce-hero__wordmark">
            <span className="ce-hero__wordmark-top">Clinique</span>
            <span className="ce-hero__wordmark-bottom">Estique</span>
          </p>
          <p className="ce-hero__tagline">
            Skin <span aria-hidden>·</span> Beauty <span aria-hidden>·</span> Confidence
          </p>
          <span aria-hidden className="ce-hero__rule" />
        </div>

        <h1 id="hero-heading" className="ce-hero__heading">
          <span className="ce-hero__reveal" style={{ "--d": "0.2s" } as React.CSSProperties}>
            Enhancing
          </span>
          <span className="ce-hero__reveal" style={{ "--d": "0.3s" } as React.CSSProperties}>
            Your Natural
          </span>
          <em className="ce-hero__accent ce-hero__reveal" style={{ "--d": "0.42s" } as React.CSSProperties}>
            Beauty
          </em>
        </h1>

        <p className="ce-hero__support ce-hero__reveal" style={{ "--d": "0.58s" } as React.CSSProperties}>
          <span>Expert treatments.</span> <span>Real results.</span>
        </p>

        <div className="ce-hero__reveal" style={{ "--d": "0.7s" } as React.CSSProperties}>
          <a
            href={whatsappLink("Hi Clinique Estique, I'd like to book an appointment.")}
            target="_blank"
            rel="noopener noreferrer"
            className="ce-hero__cta"
          >
            <span>Book your appointment</span>
            <span aria-hidden className="ce-hero__cta-arrow">
              <IconArrowRight className="h-full w-full" />
            </span>
            <span className="sr-only">(opens WhatsApp in a new tab)</span>
          </a>
        </div>
      </div>

      <div className="ce-hero__photo">
        <Image
          src={teamPhoto}
          alt="The Clinique Estique team: five therapists dressed in black, smiling together"
          fill
          priority
          quality={90}
          placeholder="blur"
          sizes="(min-width: 1024px) 72vw, 125vw"
          className="ce-hero__img"
        />
      </div>
    </section>
  );
}
