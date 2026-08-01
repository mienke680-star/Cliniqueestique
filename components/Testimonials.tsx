import { business } from "@/data/business";
import { IconStar } from "./icons";
import { Reveal } from "./Reveal";

// No verified review text was reachable this session (Google, Instagram, and
// the official website were all unreachable — see LAUNCH-CHECKLIST.md), so
// no testimonial wording or reviewer names are invented here. The rating
// itself is the one verified figure supplied, clearly labelled as a Google
// rating and linked to the live profile rather than presented as auto-updating.
export function Testimonials() {
  return (
    <section className="bg-charcoal py-24 text-white md:py-32">
      <div className="container-x">
        <Reveal className="mx-auto max-w-xl text-center">
          <p className="font-label text-xs uppercase tracking-widest2 text-sage">
            Trusted in Middelburg
          </p>
          <div className="mt-5 flex justify-center gap-1 text-sage">
            {Array.from({ length: 5 }).map((_, i) => (
              <IconStar key={i} className="h-6 w-6" />
            ))}
          </div>
          <p className="mt-4 font-display text-4xl md:text-5xl">{business.googleRating.value}</p>
          <p className="mt-2 font-body text-white/70">
            Google rating from {business.googleRating.count} reviews
          </p>
          <p className="mt-6 font-body text-sm leading-relaxed text-white/60">
            We'd rather point you to our real, unedited reviews than write our own — read what
            clients are saying directly on Google, or follow along with recent work on Instagram.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <a
              href={business.googleRating.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/30 px-6 py-3 font-label text-xs uppercase tracking-widest2 text-white transition hover:bg-white hover:text-charcoal"
            >
              Read Google Reviews
            </a>
            <a
              href={business.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/30 px-6 py-3 font-label text-xs uppercase tracking-widest2 text-white transition hover:bg-white hover:text-charcoal"
            >
              See Recent Work on Instagram
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
