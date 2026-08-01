import { ImageResponse } from "next/og";
import { monogramPaths, monogramViewBox } from "@/components/Logo";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Clinique Estique — Specialised Beauty Clinic in Middelburg, Mpumalanga";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #FFFFFF 0%, #E9EBEB 60%, #A3BDB9 140%)",
        }}
      >
        <svg width="140" height="107" viewBox={monogramViewBox}>
          <path d={monogramPaths.rightGlyph} fill="#444A54" />
          <path d={monogramPaths.leftGlyph} fill="#444A54" />
          <path d={monogramPaths.rightTail} fill="none" stroke="#444A54" strokeWidth={3} strokeLinecap="round" />
          <path d={monogramPaths.leftTail} fill="none" stroke="#444A54" strokeWidth={3} strokeLinecap="round" />
          <circle {...monogramPaths.dotRight} fill="#444A54" />
          <circle {...monogramPaths.dotLeft} fill="#444A54" />
        </svg>
        <div style={{ marginTop: 28, fontSize: 56, color: "#444A54", fontWeight: 600 }}>
          Clinique Estique
        </div>
        <div
          style={{
            marginTop: 14,
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#677877",
          }}
        >
          Specialised Beauty Clinic · Middelburg
        </div>
      </div>
    ),
    { ...size }
  );
}
