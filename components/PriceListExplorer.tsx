"use client";

import { useMemo, useState } from "react";
import { ceTreatmentCategories, priceListSource } from "@/data/ce-treatments";
import { mesibonCategories, mesibonSource } from "@/data/mesibon-products";
import { PriceTable } from "./PriceTable";
import { IconSearch } from "./icons";

type Tab = "ce" | "mesibon";

function matches(name: string, query: string) {
  return name.toLowerCase().includes(query.toLowerCase());
}

export function PriceListExplorer({ initialTab = "ce" }: { initialTab?: Tab }) {
  const [tab, setTab] = useState<Tab>(initialTab);
  const [query, setQuery] = useState("");

  const filteredCe = useMemo(() => {
    if (!query) return ceTreatmentCategories;
    return ceTreatmentCategories
      .map((cat) => ({ ...cat, items: cat.items.filter((i) => matches(i.name, query)) }))
      .filter((cat) => matches(cat.name, query) || cat.items.length > 0);
  }, [query]);

  const filteredMesibon = useMemo(() => {
    if (!query) return mesibonCategories;
    return mesibonCategories
      .map((cat) => ({ ...cat, products: cat.products.filter((p) => matches(p.name, query)) }))
      .filter((cat) => matches(cat.name, query) || cat.products.length > 0);
  }, [query]);

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div role="tablist" aria-label="Price list" className="inline-flex rounded-full border border-grey p-1">
          <button
            role="tab"
            aria-selected={tab === "ce"}
            onClick={() => setTab("ce")}
            className={`rounded-full px-5 py-2 font-label text-xs uppercase tracking-wide transition ${
              tab === "ce" ? "bg-charcoal text-white" : "text-charcoal/60"
            }`}
          >
            Clinique Estique Treatments
          </button>
          <button
            role="tab"
            aria-selected={tab === "mesibon"}
            onClick={() => setTab("mesibon")}
            className={`rounded-full px-5 py-2 font-label text-xs uppercase tracking-wide transition ${
              tab === "mesibon" ? "bg-charcoal text-white" : "text-charcoal/60"
            }`}
          >
            Me Si Bon Products
          </button>
        </div>

        <label className="relative w-full sm:w-72">
          <span className="sr-only">Search prices</span>
          <IconSearch className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal/40" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search treatments or products…"
            className="w-full rounded-full border border-grey bg-white py-2.5 pl-10 pr-4 font-body text-sm text-charcoal placeholder:text-charcoal/40 focus:border-sage-deep focus:outline-none"
          />
        </label>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={tab === "ce" ? priceListSource.publicPath : mesibonSource.publicPath}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-charcoal/45 px-5 py-2.5 font-label text-xs uppercase tracking-widest2 text-charcoal transition hover:border-charcoal hover:bg-charcoal hover:text-white"
        >
          View {tab === "ce" ? "Treatment" : "Me Si Bon 2026"} Price List (PDF)
        </a>
        <a
          href={tab === "ce" ? priceListSource.publicPath : mesibonSource.publicPath}
          download
          className="rounded-full border border-charcoal/45 px-5 py-2.5 font-label text-xs uppercase tracking-widest2 text-charcoal transition hover:border-charcoal hover:bg-charcoal hover:text-white"
        >
          Download {tab === "ce" ? "Treatment" : "Me Si Bon 2026"} Price List (PDF)
        </a>
      </div>

      {tab === "ce" && (
        <div className="mt-4 rounded-md border border-grey/70 bg-silver/40 px-5 py-3 font-body text-xs text-charcoal/60">
          This price list is dated 2024 in the original document. Please confirm current pricing
          with the clinic before booking — see our launch checklist for details.
        </div>
      )}

      <div className="mt-10 space-y-14">
        {tab === "ce"
          ? filteredCe.map((cat) => (
              <section key={cat.slug} id={cat.slug} aria-labelledby={`${cat.slug}-heading`}>
                <div className="flex items-baseline justify-between gap-4">
                  <h2 id={`${cat.slug}-heading`} className="font-display text-2xl text-charcoal">
                    {cat.name}
                  </h2>
                  <span className="font-label text-xs uppercase tracking-wide text-sage-deep">
                    {cat.startingFrom}
                  </span>
                </div>
                <div className="mt-5">
                  <PriceTable items={cat.items} caption={`${cat.name} pricing`} />
                </div>
              </section>
            ))
          : filteredMesibon.map((cat) => (
              <section key={cat.slug} id={cat.slug} aria-labelledby={`${cat.slug}-heading`}>
                <h2 id={`${cat.slug}-heading`} className="font-display text-2xl text-charcoal">
                  {cat.name}
                </h2>
                <p className="mt-2 font-body text-sm text-charcoal/60">{cat.intro}</p>
                <div className="mt-5 overflow-x-auto rounded-md border border-grey/70">
                  <table className="w-full border-collapse text-left">
                    <thead>
                      <tr className="bg-silver/70">
                        <th scope="col" className="px-5 py-3 font-label text-xs uppercase tracking-wide text-charcoal">
                          Product
                        </th>
                        <th scope="col" className="px-5 py-3 font-label text-xs uppercase tracking-wide text-charcoal">
                          Size
                        </th>
                        <th scope="col" className="px-5 py-3 text-right font-label text-xs uppercase tracking-wide text-charcoal">
                          Price
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {cat.products.map((p) => (
                        <tr key={`${p.name}-${p.size ?? ""}`} className="border-t border-grey/60">
                          <td className="px-5 py-3 font-body text-sm text-charcoal">{p.name}</td>
                          <td className="px-5 py-3 font-body text-sm text-charcoal/70">{p.size ?? "—"}</td>
                          <td className="whitespace-nowrap px-5 py-3 text-right font-body text-sm font-medium text-charcoal">
                            {p.price}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            ))}
      </div>
    </div>
  );
}
