import { ImageResponse } from "next/og";

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
        <svg width="120" height="100" viewBox="0 0 240 200">
          <path
            d="M 27 100 A 58 58 0 1 1 143 100 A 58 58 0 1 1 27 100"
            fill="none"
            stroke="#444A54"
            strokeWidth={20}
          />
          <path
            d="M 97 100 A 58 58 0 1 1 213 100 A 58 58 0 1 1 97 100"
            fill="none"
            stroke="#444A54"
            strokeWidth={20}
          />
          <circle cx={38} cy={168} r={6} fill="#444A54" />
          <circle cx={202} cy={168} r={6} fill="#444A54" />
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
