import type { PriceItem } from "@/data/ce-treatments";

export function PriceTable({
  items,
  caption,
  note,
}: {
  items: PriceItem[];
  caption?: string;
  note?: string;
}) {
  if (items.length === 0) {
    return (
      <div className="rounded-md border border-grey/70 bg-white px-5 py-6 font-body text-sm text-charcoal/75">
        {note ?? "Please contact the clinic for current pricing."}
      </div>
    );
  }

  return (
    <div>
      <div className="overflow-hidden rounded-md border border-grey/70 bg-white">
        <table className="w-full table-fixed border-collapse text-left">
          {caption && <caption className="sr-only">{caption}</caption>}
          <colgroup>
            <col />
            <col className="w-[6.75rem] sm:w-[9rem]" />
          </colgroup>
          <thead>
            <tr className="bg-silver/70">
              <th scope="col" className="px-3.5 py-3 font-label text-xs uppercase tracking-wide text-charcoal sm:px-5">
                Treatment
              </th>
              <th scope="col" className="px-3.5 py-3 text-right font-label text-xs uppercase tracking-wide text-charcoal sm:px-5">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, i) => {
              const startsGroup = item.group && item.group !== items[i - 1]?.group;
              return [
                startsGroup && (
                  <tr key={`group-${item.group}`} className="border-t border-grey/60 bg-sage-pale/25">
                    <th
                      scope="colgroup"
                      colSpan={2}
                      className="px-3.5 py-2.5 font-label text-xs uppercase tracking-widest2 text-sage-deep sm:px-5"
                    >
                      {item.group}
                    </th>
                  </tr>
                ),
                <tr key={`${item.group ?? ""}-${item.name}`} className="border-t border-grey/60">
                  <td className="break-words px-3.5 py-3 font-body text-sm leading-snug text-charcoal sm:px-5">
                    {item.name}
                    {item.note && (
                      <span className="mt-0.5 block text-xs text-charcoal/60">{item.note}</span>
                    )}
                  </td>
                  <td className="whitespace-nowrap px-3.5 py-3 text-right align-top font-body text-sm font-medium tabular-nums text-charcoal sm:px-5">
                    {item.price}
                  </td>
                </tr>,
              ];
            })}
          </tbody>
        </table>
      </div>
      {note && <p className="mt-3 font-body text-sm text-charcoal/75">{note}</p>}
    </div>
  );
}
