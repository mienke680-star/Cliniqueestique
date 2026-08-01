import type { MetadataRoute } from "next";
import { ceTreatmentCategories } from "@/data/ce-treatments";
import { journalPosts } from "@/data/journal";

const base = "https://www.cliniqueestique.co.za";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/treatments",
    "/price-list",
    "/me-si-bon",
    "/about",
    "/team",
    "/results",
    "/journal",
    "/contact",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));

  const treatmentRoutes = ceTreatmentCategories.map((cat) => ({
    url: `${base}/treatments/${cat.slug}`,
    lastModified: new Date(),
  }));

  const journalRoutes = journalPosts.map((post) => ({
    url: `${base}/journal/${post.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...treatmentRoutes, ...journalRoutes];
}
