import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { BookingForm } from "@/components/BookingForm";
import { business, whatsappLink } from "@/data/business";
import { IconPhone, IconChat, IconMail, IconDirections, IconPin, IconClock, IconInstagram } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact & Book",
  description:
    "Contact Clinique Estique in Middelburg, Mpumalanga — call, WhatsApp, email, or send a booking enquiry.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="pb-24">
      <section className="container-x py-16 md:py-24">
        <Reveal className="max-w-2xl">
          <p className="font-label text-xs uppercase tracking-widest2 text-sage-deep">
            Contact &amp; Book
          </p>
          <h1 className="mt-4 font-display text-4xl leading-tight text-charcoal md:text-5xl">
            Let's find your next appointment.
          </h1>
          <p className="mt-5 font-body text-charcoal/70">
            Reach us directly, or send an enquiry below and we'll confirm availability with you on
            WhatsApp.
          </p>
        </Reveal>
      </section>

      <section className="container-x grid gap-14 lg:grid-cols-[1fr_1.1fr]">
        <Reveal>
          <div className="rounded-3xl border border-grey/60 bg-white p-8">
            <h2 className="font-display text-2xl text-charcoal">Send an Enquiry</h2>
            <div className="mt-6">
              <BookingForm />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="space-y-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <a
              href={whatsappLink("Hi Clinique Estique, I'd like to book an appointment.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-grey/60 bg-white p-5 hover:border-sage-deep"
            >
              <IconChat className="h-5 w-5 text-sage-deep" />
              <div>
                <p className="font-label text-xs uppercase tracking-wide text-charcoal">WhatsApp</p>
                <p className="font-body text-sm text-charcoal/60">{business.phone.display}</p>
              </div>
            </a>
            <a
              href={business.phone.href}
              className="flex items-center gap-3 rounded-2xl border border-grey/60 bg-white p-5 hover:border-sage-deep"
            >
              <IconPhone className="h-5 w-5 text-sage-deep" />
              <div>
                <p className="font-label text-xs uppercase tracking-wide text-charcoal">Call</p>
                <p className="font-body text-sm text-charcoal/60">{business.phone.display}</p>
              </div>
            </a>
            <a
              href={`mailto:${business.email}`}
              className="flex items-center gap-3 rounded-2xl border border-grey/60 bg-white p-5 hover:border-sage-deep"
            >
              <IconMail className="h-5 w-5 text-sage-deep" />
              <div>
                <p className="font-label text-xs uppercase tracking-wide text-charcoal">Email</p>
                <p className="font-body text-sm text-charcoal/60">{business.email}</p>
              </div>
            </a>
            <a
              href={business.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-grey/60 bg-white p-5 hover:border-sage-deep"
            >
              <IconInstagram className="h-5 w-5 text-sage-deep" />
              <div>
                <p className="font-label text-xs uppercase tracking-wide text-charcoal">Instagram</p>
                <p className="font-body text-sm text-charcoal/60">{business.instagram.handle}</p>
              </div>
            </a>
          </div>

          <ul className="space-y-3 rounded-2xl border border-grey/60 bg-white p-6 font-body text-sm text-charcoal/75">
            <li className="flex items-start gap-3">
              <IconPin className="mt-0.5 h-5 w-5 shrink-0 text-sage-deep" />
              {business.address.full}
            </li>
            {business.hours.map((h) => (
              <li key={h.days} className="flex items-start gap-3">
                <IconClock className="mt-0.5 h-5 w-5 shrink-0 text-sage-deep" />
                {h.days}: {h.time}
              </li>
            ))}
          </ul>

          <a
            href={business.map.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-charcoal px-6 py-3 font-label text-xs uppercase tracking-widest2 text-charcoal hover:bg-charcoal hover:text-white"
          >
            <IconDirections className="h-4 w-4" /> Get Directions
          </a>

          <div className="overflow-hidden rounded-3xl border border-grey/70">
            <iframe
              title="Clinique Estique location map"
              src={business.map.embedSrc}
              className="h-[340px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </section>
    </div>
  );
}
