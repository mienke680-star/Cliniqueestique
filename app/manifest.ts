import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Clinique Estique — Specialised Beauty Clinic",
    short_name: "Clinique Estique",
    description: "Specialised beauty clinic in Middelburg, Mpumalanga.",
    start_url: "/",
    display: "standalone",
    background_color: "#E9EBEB",
    theme_color: "#444A54",
    icons: [],
  };
}
