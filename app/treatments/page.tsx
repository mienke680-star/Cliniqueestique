import type { Metadata } from "next";
import Link from "next/link";
import { ceTreatmentCategories } from "@/data/ce-treatments";
import { whatsappLink } from "@/data/business";
import { SignatureVisual } from "@/components/SignatureVisual";
import { Reveal } from "@/components/Reveal";
import { TiltCard } from "@/components/TiltCard";
import { IconChat } from "@/components/icons";

export const metadata: Metadata = {
  title: "Treatments",
  description:
    "Explore facials, microneedling, IPL, waxing, nails, massage, permanent makeup and more at Clinique Estique, a specialised beauty clinic in Middelburg, Mpumalanga.",
  alternates: { canonical: "/treatments" },
};

export default function TreatmentsPage() {
  return (
    <div className="pb-24">
      <section className="container-x py-20 md:py-28">
        <Reveal className="max-w-2xl">
          <p className="font-label text-xs uppercase tracking-widest2 text-sage-deep">Treatments</p>
          <h1 className="mt-4 font-display text-4xl leading-tight text-charcoal md:text-5xl">
            A full menu of personalised beauty and skin care.
          </h1>
          <p className="mt-5 font-body text-charcoal/70">
            Every category below includes accurate pricing from our current price list.
            Treatments involving advanced devices or skin concerns always begin with a
            consultation — results vary from person to person.
          </p>
        </Reveal>
      </section>

      <section className="container-x grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {ceTreatmentCategories.map((cat, i) => (
          <Reveal key={cat.slug} delay={(i % 3) * 0.08}>
            <TiltCard className="h-full">
              <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-grey/60 bg-white">
                <SignatureVisual type={cat.signature} className="w-full" />
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="font-display text-xl text-charcoal">{cat.name}</h2>
                  <p className="mt-2 line-clamp-3 font-body text-sm text-charcoal/65">{cat.intro}</p>
                  <p className="mt-4 font-label text-xs uppercase tracking-wide text-sage-deep">
                    {cat.startingFrom}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 border-t border-grey/60 pt-4 text-xs">
                    <Link
                      href={`/treatments/${cat.slug}`}
                      className="font-label uppercase tracking-wide text-charcoal underline underline-offset-4 hover:text-sage-deep"
                    >
                      View details &amp; prices
                    </Link>
                    <a
                      href={whatsappLink(`Hi Clinique Estique, I'd like to enquire about ${cat.name}.`)}
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
          </Reveal>
        ))}

        <Reveal delay={0.2}>
          <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-grey/60 bg-white">
            <SignatureVisual type="oils" className="w-full" />
            <div className="flex flex-1 flex-col p-6">
              <h2 className="font-display text-xl text-charcoal">Lamelle Skincare</h2>
              <p className="mt-2 font-body text-sm text-charcoal/65">
                Our facial treatments are built around Lamelle's professional skincare range,
                selected and applied by our therapists as part of your personalised facial plan.
              </p>
              <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 border-t border-grey/60 pt-4 text-xs">
                <Link
                  href="/treatments/facial-treatments"
                  className="font-label uppercase tracking-wide text-charcoal underline underline-offset-4 hover:text-sage-deep"
                >
                  See facials using Lamelle
                </Link>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-grey/60 bg-white">
            <SignatureVisual type="oils" className="w-full" />
            <div className="flex flex-1 flex-col p-6">
              <h2 className="font-display text-xl text-charcoal">Me Si Bon Essential Oils</h2>
              <p className="mt-2 font-body text-sm text-charcoal/65">
                100% pure essential oils, blends, rollers, lotions, and sprays — for the salon
                chair and for home.
              </p>
              <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 border-t border-grey/60 pt-4 text-xs">
                <Link
                  href="/me-si-bon"
                  className="font-label uppercase tracking-wide text-charcoal underline underline-offset-4 hover:text-sage-deep"
                >
                  Explore Me Si Bon
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
