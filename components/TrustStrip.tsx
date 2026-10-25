import { business } from "@/data/business";
import { IconStar, IconPin, IconClock, IconTag, IconChat } from "./icons";

const points = [
  {
    icon: IconStar,
    label: `${business.googleRating.value} Google rating`,
    sub: `${business.googleRating.count} reviews`,
    href: business.googleRating.mapsUrl,
  },
  {
    icon: IconPin,
    label: "Middelburg, Mpumalanga",
    sub: "5A Lillian Ngoyi Street",
  },
  {
    icon: IconClock,
    label: "Mon – Fri, 08:00–17:00",
    sub: "Sat 08:00–13:00",
  },
  {
    icon: IconTag,
    label: "More than a typical salon",
    sub: "Personalised treatment guidance",
  },
];

export function TrustStrip({ className = "" }: { className?: string }) {
  return (
    <div
      className={`grid grid-cols-2 gap-px overflow-hidden rounded-md border border-grey/70 bg-grey/70 shadow-[0_20px_60px_-30px_rgba(68,74,84,0.35)] md:grid-cols-4 ${className}`}
    >
      {points.map((p) => {
        const Icon = p.icon;
        const inner = (
          <div className="flex h-full flex-col items-start gap-2 bg-white/95 p-5 backdrop-blur">
            <Icon className="h-5 w-5 text-sage-deep" />
            <p className="font-label text-xs uppercase tracking-wide text-charcoal">{p.label}</p>
            <p className="text-xs text-charcoal/60">{p.sub}</p>
          </div>
        );
        return p.href ? (
          <a key={p.label} href={p.href} target="_blank" rel="noopener noreferrer" className="hover:bg-silver">
            {inner}
          </a>
        ) : (
          <div key={p.label}>{inner}</div>
        );
      })}
    </div>
  );
}
