"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const KEY = "ce-cookie-notice-dismissed";

export function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem(KEY) !== "true") setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  function dismiss() {
    try {
      localStorage.setItem(KEY, "true");
    } catch {
      /* ignore */
    }
    setVisible(false);
  }

  return (
    <div className="fixed inset-x-0 bottom-16 z-50 border-t border-grey bg-white/98 px-5 py-4 shadow-[0_-10px_30px_-15px_rgba(68,74,84,0.3)] backdrop-blur md:bottom-4 md:left-4 md:right-auto md:max-w-md md:rounded-2xl md:border">
      <p className="font-body text-xs leading-relaxed text-charcoal/75">
        We use essential cookies to run this site, and would like to use basic analytics to
        understand how visitors use it. See our{" "}
        <Link href="/cookies" className="underline">
          Cookie Notice
        </Link>{" "}
        and{" "}
        <Link href="/privacy" className="underline">
          Privacy Policy
        </Link>
        .
      </p>
      <div className="mt-3 flex gap-3">
        <button
          onClick={dismiss}
          className="rounded-full bg-charcoal px-4 py-2 font-label text-[11px] uppercase tracking-widest2 text-white"
        >
          Accept
        </button>
        <button
          onClick={dismiss}
          className="rounded-full border border-grey px-4 py-2 font-label text-[11px] uppercase tracking-widest2 text-charcoal/70"
        >
          Dismiss
        </button>
      </div>
    </div>
  );
}
