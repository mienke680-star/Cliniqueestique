import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Notice",
  alternates: { canonical: "/cookies" },
  robots: { index: false, follow: true },
};

export default function CookiesPage() {
  return (
    <article className="container-x max-w-2xl py-16 pb-24 md:py-24">
      <h1 className="font-display text-3xl text-charcoal md:text-4xl">Cookie Notice</h1>
      <div className="mt-8 space-y-5 font-body text-sm leading-relaxed text-charcoal/75">
        <p>
          This site uses a minimal set of cookies and local storage entries to function properly:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Session storage:</strong> remembers that you've seen the opening animation so
            it doesn't replay on every page.
          </li>
          <li>
            <strong>Local storage:</strong> remembers that you've dismissed the cookie notice
            banner.
          </li>
        </ul>
        <p>
          If basic visit analytics are enabled in future, this notice will be updated to describe
          exactly what is collected and how to opt out. No advertising or cross-site tracking
          cookies are used by this site.
        </p>
      </div>
    </article>
  );
}
