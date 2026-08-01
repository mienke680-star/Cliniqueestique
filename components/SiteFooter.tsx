import Link from "next/link";
import { LogoMark } from "./Logo";
import { business } from "@/data/business";
import { primaryNav } from "@/data/nav";
import { IconPhone, IconMail, IconPin, IconInstagram, IconStar } from "./icons";

export function SiteFooter() {
  return (
    <footer className="border-t border-grey/70 bg-silver/60 pb-24 pt-16 md:pb-16">
      <div className="container-x grid gap-12 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <LogoMark className="h-10 w-auto" />
            <span className="font-display text-xl text-charcoal">Clinique Estique</span>
          </Link>
          <p className="mt-4 max-w-xs font-body text-sm leading-relaxed text-charcoal/70">
            A specialised beauty clinic in Middelburg, Mpumalanga — personalised skincare,
            beauty, and cosmetic care from founder Yvette Botha and her team.
          </p>
          <a
            href={business.googleRating.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 font-label text-xs uppercase tracking-wide text-charcoal/80 hover:text-charcoal"
          >
            <span className="flex text-sage-deep">
              {Array.from({ length: 5 }).map((_, i) => (
                <IconStar key={i} className="h-3.5 w-3.5" />
              ))}
            </span>
            {business.googleRating.value} Google rating · {business.googleRating.count} reviews
          </a>
        </div>

        <div>
          <p className="font-label text-xs uppercase tracking-widest2 text-charcoal">Explore</p>
          <ul className="mt-4 space-y-2.5">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="font-body text-sm text-charcoal/70 hover:text-charcoal">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-label text-xs uppercase tracking-widest2 text-charcoal">Visit</p>
          <ul className="mt-4 space-y-3 font-body text-sm text-charcoal/70">
            <li className="flex gap-2">
              <IconPin className="mt-0.5 h-4 w-4 shrink-0 text-sage-deep" />
              <span>{business.address.full}</span>
            </li>
            {business.hours.map((h) => (
              <li key={h.days} className="pl-6 text-xs text-charcoal/60">
                {h.days}: {h.time}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-label text-xs uppercase tracking-widest2 text-charcoal">Contact</p>
          <ul className="mt-4 space-y-3 font-body text-sm text-charcoal/70">
            <li>
              <a href={business.phone.href} className="flex items-center gap-2 hover:text-charcoal">
                <IconPhone className="h-4 w-4 text-sage-deep" /> {business.phone.display}
              </a>
            </li>
            <li>
              <a href={`mailto:${business.email}`} className="flex items-center gap-2 hover:text-charcoal">
                <IconMail className="h-4 w-4 text-sage-deep" /> {business.email}
              </a>
            </li>
            <li>
              <a
                href={business.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-charcoal"
              >
                <IconInstagram className="h-4 w-4 text-sage-deep" /> {business.instagram.handle}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-x mt-12 flex flex-col gap-3 border-t border-grey/70 pt-6 text-xs text-charcoal/50 md:flex-row md:items-center md:justify-between">
        <p>&copy; {new Date().getFullYear()} Clinique Estique. All rights reserved.</p>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <Link href="/privacy" className="hover:text-charcoal">
            Privacy Policy
          </Link>
          <Link href="/cookies" className="hover:text-charcoal">
            Cookie Notice
          </Link>
          <span>Prices verified against the supplied 2024 &amp; 2026 price lists.</span>
        </div>
      </div>
    </footer>
  );
}
