import type { Metadata } from "next";
import { business } from "@/data/business";

export const metadata: Metadata = {
  title: "Privacy Policy",
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <article className="container-x max-w-2xl py-16 pb-24 md:py-24">
      <h1 className="font-display text-3xl text-charcoal md:text-4xl">Privacy Policy</h1>
      <div className="mt-8 space-y-5 font-body text-sm leading-relaxed text-charcoal/75">
        <p>
          Clinique Estique ("we", "us") respects your privacy. This policy explains what
          information we collect through this website and how it is used.
        </p>
        <h2 className="font-display text-xl text-charcoal">What we collect</h2>
        <p>
          When you use our contact or booking form, we collect the details you choose to provide
          (name, phone number, email, treatment interest, preferred date/time, and any message).
          Submitting the form opens a pre-filled WhatsApp message to our business number — we do
          not automatically store form submissions on a server, since the form sends your enquiry
          directly to WhatsApp rather than to a database.
        </p>
        <h2 className="font-display text-xl text-charcoal">How we use it</h2>
        <p>
          Information shared via WhatsApp, phone, or email is used solely to respond to your
          enquiry, confirm bookings, and provide the service you've requested. We do not sell or
          share your personal information with third parties for marketing purposes.
        </p>
        <h2 className="font-display text-xl text-charcoal">Cookies and analytics</h2>
        <p>
          This site may use essential cookies required for the site to function, and basic,
          privacy-respecting analytics to understand how the site is used. See our{" "}
          <a href="/cookies" className="underline">
            Cookie Notice
          </a>{" "}
          for details.
        </p>
        <h2 className="font-display text-xl text-charcoal">Contact us</h2>
        <p>
          Questions about this policy can be sent to{" "}
          <a href={`mailto:${business.email}`} className="underline">
            {business.email}
          </a>
          .
        </p>
      </div>
    </article>
  );
}
