import { ImageResponse } from "next/og";
import { brandLogoDataUri } from "@/lib/brand-svg";

export const runtime = "nodejs";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  const dataUri = brandLogoDataUri("ce-monogram.svg", "#444A54");

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
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={dataUri} width={54} height={32} alt="" />
      </div>
    ),
    { ...size }
  );
}
