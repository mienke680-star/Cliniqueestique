import { ImageResponse } from "next/og";

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
        <svg width="52" height="52" viewBox="0 0 240 200">
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
      </div>
    ),
    { ...size }
  );
}
