import type { PriceItem } from "@/data/ce-treatments";

export function PriceTable({ items, caption }: { items: PriceItem[]; caption?: string }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-grey/70">
      <table className="w-full border-collapse text-left">
        {caption && <caption className="sr-only">{caption}</caption>}
        <thead>
          <tr className="bg-silver/70">
            <th scope="col" className="px-5 py-3 font-label text-xs uppercase tracking-wide text-charcoal">
              Treatment
            </th>
            <th scope="col" className="px-5 py-3 text-right font-label text-xs uppercase tracking-wide text-charcoal">
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.name} className="border-t border-grey/60">
              <td className="px-5 py-3 font-body text-sm text-charcoal">
                {item.name}
                {item.note && <span className="block text-xs text-charcoal/50">{item.note}</span>}
              </td>
              <td className="whitespace-nowrap px-5 py-3 text-right font-body text-sm font-medium text-charcoal">
                {item.price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
