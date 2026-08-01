import Link from "next/link";
import { ceTreatmentCategories } from "@/data/ce-treatments";
import { whatsappLink } from "@/data/business";
import { SignatureVisual } from "./SignatureVisual";
import { DragGallery } from "./DragGallery";
import { TiltCard } from "./TiltCard";
import { Reveal } from "./Reveal";
import { IconChat } from "./icons";

const featured = [
  "facial-treatments",
  "microneedling",
  "waxing",
  "ipl-treatments",
  "nails",
  "permanent-makeup",
  "massage-therapy",
  "grooming-and-tinting",
];

export function TreatmentExplorer() {
  const cards = featured
    .map((slug) => ceTreatmentCategories.find((c) => c.slug === slug))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  return (
    <section className="bg-silver/50 py-24 md:py-32">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <p className="font-label text-xs uppercase tracking-widest2 text-sage-deep">
            Treatment Explorer
          </p>
          <h2 className="mt-4 font-display text-3xl leading-tight text-charcoal md:text-4xl">
            Find the ritual that fits your skin, your schedule, your goals.
          </h2>
          <p className="mt-4 font-body text-charcoal/70">
            Drag or swipe through our treatment families. Every visit begins with a consultation —
            results vary, and our therapists will always recommend what suits your skin best.
          </p>
        </Reveal>

        <DragGallery className="mt-12">
          {cards.map((cat) => (
            <TiltCard key={cat.slug} className="w-[280px] shrink-0 snap-start sm:w-[320px]">
              <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-grey/60 bg-white">
                <SignatureVisual type={cat.signature} className="w-full" />
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl text-charcoal">{cat.name}</h3>
                  <p className="mt-2 line-clamp-3 font-body text-sm text-charcoal/65">{cat.intro}</p>
                  <p className="mt-4 font-label text-xs uppercase tracking-wide text-sage-deep">
                    {cat.startingFrom}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 border-t border-grey/60 pt-4 text-xs">
                    <Link
                      href={`/treatments/${cat.slug}`}
                      className="font-label uppercase tracking-wide text-charcoal underline underline-offset-4 hover:text-sage-deep"
                    >
                      View all prices
                    </Link>
                    <a
                      href={whatsappLink(
                        `Hi Clinique Estique, I'd like to enquire about ${cat.name}.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-label uppercase tracking-wide text-charcoal underline underline-offset-4 hover:text-sage-deep"
                    >
                      <IconChat className="h-3.5 w-3.5" /> Enquire
                    </a>
                  </div>
                </div>
              </div>
            </TiltCard>
          ))}
        </DragGallery>

        <div className="mt-4 flex justify-center">
          <Link
            href="/treatments"
            className="font-label text-xs uppercase tracking-widest2 text-charcoal underline underline-offset-4 hover:text-sage-deep"
          >
            View All Treatments
          </Link>
        </div>
      </div>
    </section>
  );
}
