import { ImageResponse } from "next/og";
import { brandLogoDataUri } from "@/lib/brand-svg";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Clinique Estique: Specialised Beauty Clinic in Middelburg, Mpumalanga";

export default function OgImage() {
  // Full official lockup (monogram, wordmark, descriptor, est. 1993)
  const logo = brandLogoDataUri("ce-logo-full.svg", "#444A54");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#E9EBEB",
          borderBottom: "14px solid #8EB6AC",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logo} width={720} height={384} alt="" />
      </div>
    ),
    { ...size }
  );
}
