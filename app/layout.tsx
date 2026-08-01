import type { Metadata } from "next";
import { Bodoni_Moda, Pinyon_Script, Alegreya_Sans, Alegreya_Sans_SC } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { MobileBookingBar } from "@/components/MobileBookingBar";
import { IntroGate } from "@/components/IntroGate";
import { CursorLight } from "@/components/CursorLight";
import { CookieNotice } from "@/components/CookieNotice";
import { business } from "@/data/business";

const display = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const script = Pinyon_Script({
  subsets: ["latin"],
  variable: "--font-script",
  weight: "400",
});

const label = Alegreya_Sans_SC({
  subsets: ["latin"],
  variable: "--font-label",
  weight: ["400", "500", "700"],
});

const body = Alegreya_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cliniqueestique.co.za"),
  title: {
    default: "Clinique Estique | Specialised Beauty Clinic in Middelburg, Mpumalanga",
    template: "%s | Clinique Estique",
  },
  description:
    "Clinique Estique is a specialised beauty clinic in Middelburg, Mpumalanga offering facials, microneedling, IPL, waxing, nails, massage, and permanent makeup — personalised skincare guidance from founder Yvette Botha and her team.",
  keywords: [
    "beauty salon Middelburg",
    "beauty clinic Middelburg Mpumalanga",
    "facials Middelburg",
    "microneedling Middelburg",
    "IPL treatment Middelburg",
    "permanent makeup Middelburg",
    "waxing Middelburg",
    "nails and pedicures Middelburg",
  ],
  openGraph: {
    title: "Clinique Estique | Specialised Beauty Clinic in Middelburg, Mpumalanga",
    description:
      "Personalised skincare, beauty, and cosmetic treatments in Middelburg, Mpumalanga. Book on WhatsApp.",
    url: "https://www.cliniqueestique.co.za",
    siteName: "Clinique Estique",
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clinique Estique | Specialised Beauty Clinic",
    description:
      "Personalised skincare, beauty, and cosmetic treatments in Middelburg, Mpumalanga.",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: business.name,
    image: "https://www.cliniqueestique.co.za/opengraph-image",
    "@id": "https://www.cliniqueestique.co.za",
    url: business.website,
    telephone: business.phone.tel,
    email: business.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.line1,
      addressLocality: "Middelburg",
      addressRegion: "Mpumalanga",
      postalCode: "1055",
      addressCountry: "ZA",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "08:00",
        closes: "13:00",
      },
    ],
    sameAs: [business.instagram.url, business.facebook],
    founder: {
      "@type": "Person",
      name: business.founder,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: business.googleRating.value,
      reviewCount: business.googleRating.count,
    },
  };

  return (
    <html lang="en-ZA" className={`${display.variable} ${script.variable} ${label.variable} ${body.variable}`}>
      <body className="font-body">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <CursorLight />
        <IntroGate>
          <SiteHeader />
          <main id="main-content">{children}</main>
          <SiteFooter />
          <MobileBookingBar />
          <CookieNotice />
        </IntroGate>
      </body>
    </html>
  );
}
