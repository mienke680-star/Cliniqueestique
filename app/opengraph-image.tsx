import { ImageResponse } from "next/og";
import fs from "node:fs";
import path from "node:path";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Clinique Estique — Specialised Beauty Clinic in Middelburg, Mpumalanga";

export default function OgImage() {
  const file = fs.readFileSync(path.join(process.cwd(), "public/brand/ce-monogram.png"));
  const dataUri = `data:image/png;base64,${file.toString("base64")}`;

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
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={dataUri} width={168} height={100} alt="" />
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
