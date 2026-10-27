import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ceTreatmentCategories, findCeCategory, priceListSource } from "@/data/ce-treatments";
import { whatsappLink } from "@/data/business";
import { TreatmentPhoto } from "@/components/TreatmentPhoto";
import { PriceTable } from "@/components/PriceTable";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { IconChat } from "@/components/icons";

export function generateStaticParams() {
  return ceTreatmentCategories.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const cat = findCeCategory(params.slug);
  if (!cat) return {};
  return {
    title: `${cat.name} in Middelburg`,
    description: `${cat.intro} ${cat.items.length ? `Pricing ${cat.startingFrom.toLowerCase()}` : "Price on enquiry"} at Clinique Estique, Middelburg, Mpumalanga.`,
    alternates: { canonical: `/treatments/${cat.slug}` },
  };
}

export default function TreatmentDetailPage({ params }: { params: { slug: string } }) {
  const cat = findCeCategory(params.slug);
  if (!cat) notFound();

  const others = ceTreatmentCategories.filter((c) => c.slug !== cat.slug).slice(0, 3);

  return (
    <div className="pb-24">
      <section className="container-x grid gap-12 py-16 md:grid-cols-2 md:items-center md:py-24">
        <Reveal>
          <Link
            href="/treatments"
            className="font-label text-xs uppercase tracking-widest2 text-sage-deep hover:text-charcoal"
          >
            ← All Treatments
          </Link>
          <h1 className="mt-4 font-display text-4xl leading-tight text-charcoal md:text-5xl">
            {cat.name}
          </h1>
          <p className="mt-5 font-body leading-relaxed text-charcoal/75">{cat.intro}</p>

          <ul className="mt-6 space-y-2.5">
            {cat.benefits.map((b) => (
              <li key={b} className="flex items-start gap-2.5 font-body text-sm text-charcoal/75">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sage-deep" />
                {b}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button
              href={whatsappLink(`Hi Clinique Estique, I'd like to enquire about ${cat.name}.`)}
              external
              icon={<IconChat className="h-4 w-4" />}
            >
              Enquire on WhatsApp
            </Button>
            <Button href="/price-list" variant="outline">
              View all prices
            </Button>
          </div>
          <p className="mt-4 font-body text-xs text-charcoal/50">
            Results vary from person to person. Advanced treatments are only recommended following
            a consultation with our therapists.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <TreatmentPhoto slug={cat.slug} fallback={cat.signature} className="w-full" sizes="(min-width: 1024px) 40vw, 90vw" priority />
        </Reveal>
      </section>

      <section className="container-x">
        <Reveal>
          <div className="flex items-center justify-between">
            <h2 className="font-display text-2xl text-charcoal">Pricing</h2>
            <span className="font-label text-xs uppercase tracking-wide text-sage-deep">
              {cat.startingFrom}
            </span>
          </div>
          <div className="mt-6">
            <PriceTable items={cat.items} caption={`${cat.name} pricing`} note={cat.priceNote} />
          </div>
          <p className="mt-4 font-body text-xs text-charcoal/50">
            Prices from the {priceListSource.title}. See our{" "}
            <Link href="/price-list" className="underline">
              full price list
            </Link>
            .
          </p>
        </Reveal>
      </section>

      <section className="container-x mt-20">
        <Reveal>
          <h2 className="font-display text-2xl text-charcoal">You might also like</h2>
        </Reveal>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {others.map((o) => (
            <Link
              key={o.slug}
              href={`/treatments/${o.slug}`}
              className="rounded-md border border-grey/60 bg-white p-5 transition hover:border-sage-deep"
            >
              <p className="font-display text-lg text-charcoal">{o.name}</p>
              <p className="mt-1 font-label text-xs uppercase tracking-wide text-sage-deep">
                {o.startingFrom}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
