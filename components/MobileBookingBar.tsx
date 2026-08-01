"use client";

import Link from "next/link";
import { business, whatsappLink } from "@/data/business";
import { IconChat, IconPhone, IconDirections, IconTag } from "./icons";

export function MobileBookingBar() {
  const items = [
    {
      label: "WhatsApp",
      href: whatsappLink("Hi Clinique Estique, I'd like to book an appointment."),
      icon: IconChat,
      external: true,
    },
    { label: "Call", href: business.phone.href, icon: IconPhone, external: true },
    {
      label: "Directions",
      href: business.map.directionsUrl,
      icon: IconDirections,
      external: true,
    },
    { label: "Prices", href: "/price-list", icon: IconTag, external: false },
  ];

  return (
    <nav
      aria-label="Quick actions"
      className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-4 border-t border-grey bg-white/95 backdrop-blur md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      {items.map((item) => {
        const Icon = item.icon;
        const content = (
          <>
            <Icon className="h-5 w-5 text-charcoal" />
            <span className="mt-0.5 font-label text-[10px] uppercase tracking-wide text-charcoal">
              {item.label}
            </span>
          </>
        );
        return item.external ? (
          <a
            key={item.label}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-0.5 py-2.5 active:bg-silver"
          >
            {content}
          </a>
        ) : (
          <Link
            key={item.label}
            href={item.href}
            className="flex flex-col items-center justify-center gap-0.5 py-2.5 active:bg-silver"
          >
            {content}
          </Link>
        );
      })}
    </nav>
  );
}
