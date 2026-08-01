import { ImageResponse } from "next/og";
import { monogramPaths, monogramViewBox } from "@/components/Logo";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#FFFFFF",
        }}
      >
        <svg width="58" height="46" viewBox={monogramViewBox}>
          <path d={monogramPaths.rightGlyph} fill="#444A54" />
          <path d={monogramPaths.leftGlyph} fill="#444A54" />
          <path d={monogramPaths.rightTail} fill="none" stroke="#444A54" strokeWidth={3} strokeLinecap="round" />
          <path d={monogramPaths.leftTail} fill="none" stroke="#444A54" strokeWidth={3} strokeLinecap="round" />
          <circle {...monogramPaths.dotRight} fill="#444A54" />
          <circle {...monogramPaths.dotLeft} fill="#444A54" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
