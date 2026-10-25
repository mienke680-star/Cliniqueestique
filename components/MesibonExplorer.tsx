"use client";

import { useMemo, useState } from "react";
import { mesibonCategories, mesibonSource } from "@/data/mesibon-products";
import { IconSearch } from "./icons";

export function MesibonExplorer() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!query) return mesibonCategories;
    return mesibonCategories
      .map((cat) => ({
        ...cat,
        products: cat.products.filter((p) => p.name.toLowerCase().includes(query.toLowerCase())),
      }))
      .filter((cat) => cat.products.length > 0);
  }, [query]);

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <label className="relative w-full sm:w-80">
          <span className="sr-only">Search Me Si Bon products</span>
          <IconSearch className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal/40" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search oils, rollers, lotions…"
            className="w-full rounded-full border border-grey bg-white py-2.5 pl-10 pr-4 font-body text-sm text-charcoal placeholder:text-charcoal/40 focus:border-sage-deep focus:outline-none"
          />
        </label>
        <div className="flex flex-wrap gap-3">
          <a
            href={mesibonSource.publicPath}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-charcoal/45 px-5 py-2.5 font-label text-xs uppercase tracking-widest2 text-charcoal transition hover:border-charcoal hover:bg-charcoal hover:text-white"
          >
            View Me Si Bon 2026 Price List
          </a>
          <a
            href={mesibonSource.publicPath}
            download
            className="rounded-full border border-charcoal/45 px-5 py-2.5 font-label text-xs uppercase tracking-widest2 text-charcoal transition hover:border-charcoal hover:bg-charcoal hover:text-white"
          >
            Download Me Si Bon 2026 Price List
          </a>
        </div>
      </div>

      <div className="mt-10 space-y-14">
        {filtered.map((cat) => (
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
