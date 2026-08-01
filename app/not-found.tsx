import Link from "next/link";
import { LogoMark } from "@/components/Logo";

export default function NotFound() {
  return (
    <div className="container-x flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <LogoMark className="h-12 w-auto" />
      <p className="mt-6 font-label text-xs uppercase tracking-widest2 text-sage-deep">
        Page not found
      </p>
      <h1 className="mt-3 font-display text-3xl text-charcoal md:text-4xl">
        This page has wandered off.
      </h1>
      <p className="mt-4 max-w-md font-body text-charcoal/70">
        The page you're looking for may have moved. Try one of these instead.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="rounded-full bg-charcoal px-6 py-3 font-label text-xs uppercase tracking-widest2 text-white"
        >
          Home
        </Link>
        <Link
          href="/treatments"
          className="rounded-full border border-charcoal px-6 py-3 font-label text-xs uppercase tracking-widest2 text-charcoal"
        >
          Treatments
        </Link>
        <Link
          href="/price-list"
          className="rounded-full border border-charcoal px-6 py-3 font-label text-xs uppercase tracking-widest2 text-charcoal"
        >
          Price List
        </Link>
      </div>
    </div>
  );
}
