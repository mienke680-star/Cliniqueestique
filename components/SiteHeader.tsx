"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandLogo, LogoMark } from "./Logo";
import { primaryNav } from "@/data/nav";
import { whatsappLink } from "@/data/business";
import { IconMenu, IconClose, IconChat } from "./icons";
import { Magnetic } from "./MagneticButton";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 border-b border-grey bg-paper/95 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between md:h-20">
        {/* Official lockup proportions: monogram, hairline rule, wordmark */}
        <Link
          href="/"
          aria-label="Clinique Estique home"
          className="flex items-center gap-3.5 text-charcoal md:gap-4"
          onClick={() => setOpen(false)}
        >
          <LogoMark className="h-8 md:h-9" />
          <span aria-hidden className="hidden h-8 w-px bg-charcoal/40 sm:block" />
          <BrandLogo variant="wordmark" className="hidden h-[1.15rem] sm:inline-block md:h-5" />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-5 xl:flex 2xl:gap-7">
          {primaryNav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`whitespace-nowrap font-label text-[13px] uppercase tracking-wide transition hover:text-charcoal ${
                  active ? "text-charcoal" : "text-charcoal/60"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Magnetic className="hidden md:block">
            <a
              href={whatsappLink("Hi Clinique Estique, I'd like to book an appointment.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-sage-deep px-5 py-2.5 font-label text-xs uppercase tracking-widest2 text-white transition hover:bg-charcoal"
            >
              <IconChat className="h-4 w-4" />
              Book on WhatsApp
            </a>
          </Magnetic>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-grey text-charcoal transition hover:border-sage-deep md:h-auto md:w-auto md:p-2.5 xl:hidden"
          >
            {open ? <IconClose className="h-5 w-5 md:h-6 md:w-6" /> : <IconMenu className="h-5 w-5 md:h-6 md:w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-grey bg-paper xl:hidden">
          <nav aria-label="Mobile" className="container-x flex flex-col gap-1 py-4">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 font-label text-sm uppercase tracking-wide text-charcoal/80 hover:bg-silver hover:text-charcoal"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={whatsappLink("Hi Clinique Estique, I'd like to book an appointment.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-sage-deep px-5 py-3 font-label text-xs uppercase tracking-widest2 text-white md:hidden"
            >
              <IconChat className="h-4 w-4" />
              Book on WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
