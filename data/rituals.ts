// "Find Your Ritual" tool — maps visitor goals to treatment categories.
// Recommendations only; never diagnostic.

export type RitualGoal = {
  id: string;
  label: string;
  description: string;
  categorySlugs: string[]; // slugs into ceTreatmentCategories, or mesibon
};

export const ritualGoals: RitualGoal[] = [
  {
    id: "glow-hydration",
    label: "Glow & Hydration",
    description: "Brighter, more hydrated-looking skin",
    categorySlugs: ["facial-treatments"],
  },
  {
    id: "pigmentation",
    label: "Pigmentation & Uneven Tone",
    description: "Support for sun spots and uneven-looking tone",
    categorySlugs: ["ipl-treatments", "facial-treatments"],
  },
  {
    id: "smoother-skin",
    label: "Smoother-Looking Skin",
    description: "Refined texture, fine lines, and scarring",
    categorySlugs: ["microneedling", "plasma-plex"],
  },
  {
    id: "brows-lashes",
    label: "Beautiful Brows & Lashes",
    description: "Definition and shape without daily effort",
    categorySlugs: ["grooming-and-tinting", "permanent-makeup"],
  },
  {
    id: "hair-removal",
    label: "Hair Removal",
    description: "Smooth skin, from waxing to long-term IPL",
    categorySlugs: ["waxing", "ipl-treatments"],
  },
  {
    id: "hands-feet",
    label: "Hands & Feet",
    description: "Polished nails and considered foot care",
    categorySlugs: ["hands-and-feet", "nails"],
  },
  {
    id: "relaxation",
    label: "Relaxation",
    description: "Slow down with massage and touch therapy",
    categorySlugs: ["massage-therapy"],
  },
  {
    id: "permanent-makeup",
    label: "Permanent Makeup",
    description: "Low-maintenance definition for brows, eyes, and lips",
    categorySlugs: ["permanent-makeup"],
  },
  {
    id: "natural-wellness",
    label: "Natural Wellness & Essential Oils",
    description: "Me Si Bon oils, rollers, and everyday rituals",
    categorySlugs: ["me-si-bon"],
  },
];
