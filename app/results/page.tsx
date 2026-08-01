import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { business } from "@/data/business";
import { SignatureVisual } from "@/components/SignatureVisual";

export const metadata: Metadata = {
  title: "Results & Transformations",
  description:
    "Real before-and-after results from Clinique Estique will be published here once supplied by the clinic — verified via Instagram and Google reviews in the meantime.",
  alternates: { canonical: "/results" },
};

export default function ResultsPage() {
  return (
    <div className="pb-24">
      <section className="container-x py-16 md:py-24">
        <Reveal className="max-w-2xl">
          <p className="font-label text-xs uppercase tracking-widest2 text-sage-deep">Results</p>
          <h1 className="mt-4 font-display text-4xl leading-tight text-charcoal md:text-5xl">
            Real results, honestly shown.
          </h1>
          <p className="mt-5 font-body text-charcoal/70">
            We only ever publish authentic client images, with consent. No before-and-after
            photography was supplied or reachable for this build, so this gallery is intentionally
            empty rather than filled with stock or AI-generated results — it will be populated
            directly from Clinique Estique's own Instagram once images are provided.
          </p>
        </Reveal>
      </section>

      <section className="container-x">
        <Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {["microneedling", "ipl", "pmu"].map((type) => (
              <div key={type} className="overflow-hidden rounded-3xl border border-dashed border-grey">
                <SignatureVisual type={type as never} className="w-full opacity-60" />
                <div className="p-5 text-center">
                  <p className="font-label text-xs uppercase tracking-wide text-charcoal/50">
                    Before &amp; after coming soon
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15} className="mt-12 rounded-3xl border border-grey/70 bg-silver/50 p-8 text-center">
          <p className="font-body text-sm text-charcoal/70">
            In the meantime, see recent, real client work and reviews directly on our channels.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-4">
            <a
              href={business.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-charcoal px-6 py-3 font-label text-xs uppercase tracking-widest2 text-charcoal hover:bg-charcoal hover:text-white"
            >
              View Instagram
            </a>
            <a
              href={business.googleRating.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-charcoal px-6 py-3 font-label text-xs uppercase tracking-widest2 text-charcoal hover:bg-charcoal hover:text-white"
            >
              Read Google Reviews
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
