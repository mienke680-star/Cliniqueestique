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
      className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-4 border-t border-[#E8DDD0] bg-[#FBF8F3]/95 shadow-[0_-10px_30px_-20px_rgba(91,66,40,0.35)] backdrop-blur md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      {items.map((item) => {
        const Icon = item.icon;
        const content = (
          <>
            <Icon className="h-[1.2rem] w-[1.2rem] text-[#8B6B4A]" />
            <span className="mt-0.5 font-label text-[10.5px] uppercase tracking-[0.14em] text-[#252321]">
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
            className="flex min-h-[3.6rem] flex-col items-center justify-center gap-0.5 py-2 transition-colors active:bg-[#F1E9DD]"
          >
            {content}
          </a>
        ) : (
          <Link
            key={item.label}
            href={item.href}
            className="flex min-h-[3.6rem] flex-col items-center justify-center gap-0.5 py-2 transition-colors active:bg-[#F1E9DD]"
          >
            {content}
          </Link>
        );
      })}
    </nav>
  );
}
