import fs from "node:fs";
import path from "node:path";

// Official logo artwork as a data URI for server-rendered images (favicon,
// social card), with its `currentColor` fill resolved to a brand colour.
export function brandLogoDataUri(file: string, color: string) {
  const svg = fs
    .readFileSync(path.join(process.cwd(), "public/brand/logo", file), "utf8")
    .replaceAll("currentColor", color);
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
}
