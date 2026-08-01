import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { PriceListExplorer } from "@/components/PriceListExplorer";

export const metadata: Metadata = {
  title: "Price List",
  description:
    "Full, searchable price list for Clinique Estique treatments (facials, microneedling, IPL, waxing, nails, massage, permanent makeup) and Me Si Bon essential oils.",
  alternates: { canonical: "/price-list" },
};

export default function PriceListPage() {
  return (
    <div className="pb-24">
      <section className="container-x py-16 md:py-24">
        <Reveal className="max-w-2xl">
          <p className="font-label text-xs uppercase tracking-widest2 text-sage-deep">Price Lists</p>
          <h1 className="mt-4 font-display text-4xl leading-tight text-charcoal md:text-5xl">
            Every treatment and product, clearly priced.
          </h1>
          <p className="mt-5 font-body text-charcoal/70">
            Search or browse by category below, or open the original PDF price lists in full.
          </p>
        </Reveal>
      </section>
      <section className="container-x">
        <PriceListExplorer />
      </section>
    </div>
  );
}
