import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { LogoMark } from "@/components/Logo";
import { business } from "@/data/business";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The story of Clinique Estique, a specialised beauty clinic in Middelburg founded by Yvette Botha, built on personalised skincare and long-term client relationships.",
  alternates: { canonical: "/about" },
};

const timeline = [
  {
    year: "The beginning",
    title: "A single rented nail station",
    body: "Yvette Botha started out renting one nail space inside an established hair salon — building trust with clients one considered appointment at a time.",
  },
  {
    year: "Growing",
    title: "A home at Midpark",
    body: "As the client base grew, the business moved into its own space at Midpark, allowing the treatment menu — and the team — to expand.",
  },
  {
    year: "Today",
    title: "A specialised beauty clinic",
    body: "Clinique Estique now offers a full menu spanning skincare, cosmetic treatments, IPL, permanent makeup, nails, and massage — still guided by the same personal attention it began with.",
  },
];

export default function AboutPage() {
  return (
    <div className="pb-24">
      <section className="container-x py-16 md:py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <LogoMark className="mx-auto h-14 w-auto" />
          <p className="mt-6 font-label text-xs uppercase tracking-widest2 text-sage-deep">
            About Clinique Estique
          </p>
          <h1 className="mt-4 font-display text-4xl leading-tight text-charcoal md:text-5xl">
            Personal attention, from the very first appointment.
          </h1>
          <p className="mt-6 font-script text-3xl text-sage-deep">
            "Clients are listened to, remembered, and cared for individually."
          </p>
        </Reveal>
      </section>

      <section className="container-x grid gap-6 md:grid-cols-3">
        {timeline.map((t, i) => (
          <Reveal key={t.title} delay={i * 0.1}>
            <div className="h-full rounded-md border border-grey/60 bg-white p-7">
              <p className="font-label text-xs uppercase tracking-widest2 text-sage-deep">{t.year}</p>
              <h2 className="mt-3 font-display text-xl text-charcoal">{t.title}</h2>
              <p className="mt-3 font-body text-sm leading-relaxed text-charcoal/70">{t.body}</p>
            </div>
          </Reveal>
        ))}
      </section>

      <section className="container-x mt-20 grid gap-14 md:grid-cols-2">
        <Reveal className="space-y-5 font-body leading-relaxed text-charcoal/75">
          <h2 className="font-display text-2xl text-charcoal">Founder, {business.founder}</h2>
          <p>
            What began as a single service inside someone else's salon grew because {business.founder}
            {" "}paid close attention — to each client's skin, preferences, and the small details that
            make a treatment feel considered rather than routine.
          </p>
          <p>
            Skincare became a particular focus along the way: watching clients see and feel a real
            difference, and helping them understand the "why" behind their routine, not just the
            "what." That same approach now runs through every treatment at Clinique Estique, from a
            first facial consultation to advanced IPL and permanent makeup work.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="space-y-5 font-body leading-relaxed text-charcoal/75">
          <h2 className="font-display text-2xl text-charcoal">Our Philosophy</h2>
          <p>
            Clinique Estique aims to feel more like a considered ritual than a quick appointment —
            a luxurious, sustainable, welcoming space where clients are known by name and by skin
            type. Every visit begins with listening, not a fixed script.
          </p>
          <p>
            We use language like "may help" and "designed to" deliberately: results vary from
            person to person, and advanced treatments are only recommended following a proper
            consultation with our therapists.
          </p>
        </Reveal>
      </section>
    </div>
  );
}
