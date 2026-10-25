"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoMark } from "./Logo";
import { primaryNav } from "@/data/nav";
import { whatsappLink } from "@/data/business";
import { IconMenu, IconClose, IconChat } from "./icons";
import { Magnetic } from "./MagneticButton";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 border-b border-[#E8DDD0]/80 bg-white/95 backdrop-blur md:border-grey/70">
      <div className="container-x flex h-16 items-center justify-between md:h-20">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <LogoMark className="h-8 w-auto md:h-10" />
          <span className="hidden flex-col whitespace-nowrap leading-tight sm:flex">
            <span className="font-display text-lg text-charcoal md:text-xl">Clinique Estique</span>
            <span className="font-label text-[10px] uppercase tracking-widest2 text-sage-deep">
              Specialised Beauty Clinic
            </span>
          </span>
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
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-charcoal px-5 py-2.5 font-label text-xs uppercase tracking-widest2 text-white transition hover:bg-sage-deep"
            >
              <IconChat className="h-4 w-4" />
              Book on WhatsApp
            </a>
          </Magnetic>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E8DDD0] text-charcoal transition hover:border-[#A88660] md:h-auto md:w-auto md:border-grey md:p-2.5 xl:hidden"
          >
            {open ? <IconClose className="h-5 w-5 md:h-6 md:w-6" /> : <IconMenu className="h-5 w-5 md:h-6 md:w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-grey/70 bg-white xl:hidden">
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
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-charcoal px-5 py-3 font-label text-xs uppercase tracking-widest2 text-white md:hidden"
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
