import { Reveal } from "./Reveal";
import Link from "next/link";

export function BrandStory() {
  return (
    <section className="container-x py-24 md:py-32">
      <div className="grid gap-14 md:grid-cols-2 md:gap-20">
        <Reveal>
          <p className="font-label text-xs uppercase tracking-widest2 text-sage-deep">Our Story</p>
          <h2 className="mt-4 font-display text-3xl leading-tight text-charcoal md:text-4xl">
            Built one client, one appointment, at a time.
          </h2>
          <p className="mt-6 font-script text-3xl leading-tight text-sage-deep md:text-4xl">
            "Every face has its own story worth listening to."
          </p>
        </Reveal>

        <Reveal delay={0.15} className="space-y-5 font-body text-[15px] leading-relaxed text-charcoal/75 md:text-base">
          <p>
            Clinique Estique began modestly — founder Yvette Botha started out renting a single
            nail station inside an established hair salon, building her client base one careful
            appointment at a time. As word spread and the chair list grew, the business found a
            home of its own at Midpark before expanding further into the specialised beauty
            clinic it is today.
          </p>
          <p>
            Along the way, skincare became Yvette's particular passion — watching clients see and
            feel a genuine improvement in their skin, and helping them understand why, rather than
            simply performing a treatment and sending them on their way.
          </p>
          <p>
            That philosophy still shapes every visit: clients are listened to, remembered, and
            guided individually, in a space designed to feel as luxurious and considered as the
            treatments themselves.
          </p>
          <Link
            href="/about"
            className="inline-block font-label text-xs uppercase tracking-widest2 text-charcoal underline underline-offset-4 hover:text-sage-deep"
          >
            Read our full story
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
