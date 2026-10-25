import { business, whatsappLink } from "@/data/business";
import { IconPhone, IconChat, IconMail, IconDirections, IconPin, IconClock, IconInstagram } from "./icons";
import { Reveal } from "./Reveal";
import Link from "next/link";

export function LocationSection() {
  return (
    <section className="container-x py-24 md:py-32">
      <div className="grid gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="font-label text-xs uppercase tracking-widest2 text-sage-deep">Visit Us</p>
          <h2 className="mt-4 font-display text-3xl leading-tight text-charcoal md:text-4xl">
            A calm space to slow down, right in Middelburg.
          </h2>

          <ul className="mt-8 space-y-4 font-body text-sm text-charcoal/75">
            <li className="flex items-start gap-3">
              <IconPin className="mt-0.5 h-5 w-5 shrink-0 text-sage-deep" />
              <span>{business.address.full}</span>
            </li>
            <li className="flex items-start gap-3">
              <IconClock className="mt-0.5 h-5 w-5 shrink-0 text-sage-deep" />
              <span>
                {business.hours.map((h) => (
                  <span key={h.days} className="block">
                    {h.days}: {h.time}
                  </span>
                ))}
              </span>
            </li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={whatsappLink("Hi Clinique Estique, I'd like to book an appointment.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-sage-deep px-5 py-3 font-label text-xs uppercase tracking-widest2 text-white transition hover:bg-charcoal"
            >
              <IconChat className="h-4 w-4" /> WhatsApp
            </a>
            <a
              href={business.phone.href}
              className="inline-flex items-center gap-2 rounded-full border border-charcoal/45 px-5 py-3 font-label text-xs uppercase tracking-widest2 text-charcoal transition hover:border-charcoal hover:bg-charcoal hover:text-white"
            >
              <IconPhone className="h-4 w-4" /> Call
            </a>
            <a
              href={`mailto:${business.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-charcoal/45 px-5 py-3 font-label text-xs uppercase tracking-widest2 text-charcoal transition hover:border-charcoal hover:bg-charcoal hover:text-white"
            >
              <IconMail className="h-4 w-4" /> Email
            </a>
            <a
              href={business.map.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-charcoal/45 px-5 py-3 font-label text-xs uppercase tracking-widest2 text-charcoal transition hover:border-charcoal hover:bg-charcoal hover:text-white"
            >
              <IconDirections className="h-4 w-4" /> Get Directions
            </a>
            <a
              href={business.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-charcoal/45 px-5 py-3 font-label text-xs uppercase tracking-widest2 text-charcoal transition hover:border-charcoal hover:bg-charcoal hover:text-white"
            >
              <IconInstagram className="h-4 w-4" /> Instagram
            </a>
          </div>

          <Link
            href="/contact"
            className="mt-8 inline-block font-label text-xs uppercase tracking-widest2 text-charcoal underline underline-offset-4 hover:text-sage-deep"
          >
            Go to full contact &amp; booking form
          </Link>
        </Reveal>

        <Reveal delay={0.15} className="overflow-hidden rounded-md border border-grey/70">
          <iframe
            title="Clinique Estique location map"
            src={business.map.embedSrc}
            className="h-[420px] w-full grayscale-[15%]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </div>
    </section>
  );
}
