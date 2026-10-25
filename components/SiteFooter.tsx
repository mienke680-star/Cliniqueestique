import Link from "next/link";
import { BrandLogo } from "./Logo";
import { business } from "@/data/business";
import { primaryNav } from "@/data/nav";
import { IconPhone, IconMail, IconPin, IconInstagram, IconStar } from "./icons";

export function SiteFooter() {
  return (
    <footer className="bg-charcoal pb-24 pt-16 text-white md:pb-16 md:pt-20">
      <div className="container-x grid gap-12 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <div>
          {/* Full official lockup, dark-ground version */}
          <Link href="/" aria-label="Clinique Estique home" className="inline-block text-white">
            <BrandLogo variant="full" className="h-28 md:h-32" />
          </Link>
          <p className="mt-6 max-w-xs font-body text-sm leading-relaxed text-white/75">
            A specialised beauty clinic in Middelburg, Mpumalanga — personalised skincare,
            beauty, and cosmetic care from founder Yvette Botha and her team.
          </p>
          <a
            href={business.googleRating.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 font-label text-xs uppercase tracking-wide text-white/80 hover:text-white"
          >
            <span className="flex text-seafoam">
              {Array.from({ length: 5 }).map((_, i) => (
                <IconStar key={i} className="h-3.5 w-3.5" />
              ))}
            </span>
            {business.googleRating.value} Google rating · {business.googleRating.count} reviews
          </a>
        </div>

        <div>
          <p className="font-label text-xs uppercase tracking-widest2 text-sage">Explore</p>
          <ul className="mt-4 space-y-2.5">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="font-body text-sm text-white/75 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-label text-xs uppercase tracking-widest2 text-sage">Visit</p>
          <ul className="mt-4 space-y-3 font-body text-sm text-white/75">
            <li className="flex gap-2">
              <IconPin className="mt-0.5 h-4 w-4 shrink-0 text-sage" />
              <span>{business.address.full}</span>
            </li>
            {business.hours.map((h) => (
              <li key={h.days} className="pl-6 text-xs text-white/60">
                {h.days}: {h.time}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-label text-xs uppercase tracking-widest2 text-sage">Contact</p>
          <ul className="mt-4 space-y-3 font-body text-sm text-white/75">
            <li>
              <a href={business.phone.href} className="flex items-center gap-2 hover:text-white">
                <IconPhone className="h-4 w-4 text-sage" /> {business.phone.display}
              </a>
            </li>
            <li>
              <a href={`mailto:${business.email}`} className="flex items-center gap-2 hover:text-white">
                <IconMail className="h-4 w-4 text-sage" /> {business.email}
              </a>
            </li>
            <li>
              <a
                href={business.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white"
              >
                <IconInstagram className="h-4 w-4 text-sage" /> {business.instagram.handle}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-x mt-12 flex flex-col gap-3 border-t border-white/15 pt-6 text-xs text-white/60 md:flex-row md:items-center md:justify-between">
        <p>&copy; {new Date().getFullYear()} Clinique Estique. All rights reserved.</p>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <Link href="/privacy" className="hover:text-white">
            Privacy Policy
          </Link>
          <Link href="/cookies" className="hover:text-white">
            Cookie Notice
          </Link>
          <span>Prices verified against the supplied 2024 &amp; 2026 price lists.</span>
        </div>
      </div>
    </footer>
  );
}
