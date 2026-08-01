// Extracted from "Copy of CE PRICELIST.pdf" — titled PRICE LIST 2024 in the
// source document. Prices are preserved exactly as printed. Do not silently
// mark this as a 2026 price list — see LAUNCH-CHECKLIST.md.

export type PriceItem = {
  name: string;
  price: string; // preserved as printed, e.g. "R890" or "R650-R4750"
  note?: string;
};

export type TreatmentCategory = {
  slug: string;
  name: string;
  shortName: string;
  intro: string;
  benefits: string[];
  items: PriceItem[];
  startingFrom: string;
  signature: "facial" | "microneedling" | "waxing" | "nails" | "ipl" | "massage" | "pmu" | "grooming" | "hairmakeup" | "plasma";
};

export const priceListSource = {
  title: "CLINIQUE ESTIQUE PRICE LIST 2024",
  fileName: "Copy_of_CE_PRICELIST.pdf",
  publicPath: "/documents/clinique-estique-price-list-2024.pdf",
  label: "Clinique Estique Treatment Price List (2024)",
};

export const ceTreatmentCategories: TreatmentCategory[] = [
  {
    slug: "facial-treatments",
    name: "Facial Treatments",
    shortName: "Facials",
    intro:
      "Every skin is different, so every facial at Clinique Estique begins with an honest analysis of your skin and a plan for ongoing care — not a one-size treatment. Our therapists work exclusively with Lamelle skincare to help support healthier-looking, more balanced skin over time.",
    benefits: [
      "Personalised skin analysis with every visit",
      "Formulated with professional-grade Lamelle products",
      "Designed to help refine tone, texture, and hydration",
      "A tailored take-home routine recommendation",
    ],
    items: [
      { name: "Standard Facial", price: "R890" },
      { name: "Facial (under 13 years)", price: "R480" },
      { name: "Chemical Peel (only)", price: "R650–R4750", note: "Price depends on peel strength and area" },
      { name: "Back Cleanse", price: "R800" },
      { name: "Lamelle Mask — add on", price: "R110" },
      { name: "Eyelash Lift — add on", price: "R370" },
      { name: "Dermaplaning (only)", price: "R450" },
      { name: "Dermaplaning — add on", price: "R100" },
    ],
    startingFrom: "From R450",
    signature: "facial",
  },
  {
    slug: "microneedling",
    name: "Microneedling",
    shortName: "Microneedling",
    intro:
      "Microneedling is a cosmetic procedure that works with the skin's own natural healing response to encourage a firmer, more refined-looking complexion. It's often used to help address the appearance of scarring, pigmentation, fine lines, and enlarged pores, and results build gradually over a course of sessions.",
    benefits: [
      "May help reduce the visible appearance of scarring and fine lines",
      "Designed to support the skin's natural collagen response",
      "Can help refine the look of enlarged pores and uneven tone",
      "Results vary and a consultation is recommended beforehand",
    ],
    items: [
      { name: "Micro-needling Facial", price: "R1890" },
      { name: "Micro-needling Face Only", price: "R1490" },
      { name: "Micro-needling Face and Neck", price: "R1690" },
      { name: "Derma-roller Facial", price: "R800" },
      { name: "Vitamin A Serum — add on", price: "R200" },
    ],
    startingFrom: "From R800",
    signature: "microneedling",
  },
  {
    slug: "grooming-and-tinting",
    name: "Grooming & Tinting",
    shortName: "Grooming & Tinting",
    intro:
      "From a precise brow shape to a lifted lash line, our grooming and tinting menu keeps everyday beauty low-maintenance — designed to leave brows and lashes looking polished for weeks at a time.",
    benefits: [
      "Brow lamination and tinting for a fuller, groomed shape",
      "Eyelash lift and tint for definition without mascara",
      "Quick, precise waxing for chin, lip, nose, and neck",
    ],
    items: [
      { name: "Chin Wax", price: "R90" },
      { name: "Eyebrow Tint", price: "R60" },
      { name: "Eyebrow Tint & Shape", price: "R160" },
      { name: "Eyebrow Tint & Shape, Eyelash Tint", price: "R250" },
      { name: "Eyebrow Wax", price: "R110" },
      { name: "Eyelash Tint", price: "R160" },
      { name: "Lip Wax", price: "R100" },
      { name: "Nose Hair Wax", price: "R100" },
      { name: "Neck Wax", price: "R130" },
      { name: "Brow Lamination", price: "R450" },
      { name: "Eyelash Lift", price: "R450" },
    ],
    startingFrom: "From R60",
    signature: "grooming",
  },
  {
    slug: "waxing",
    name: "Waxing",
    shortName: "Waxing",
    intro:
      "Smooth, precise hair removal for face and body, using warm wax for a thorough finish with minimal discomfort. Suitable for regular grooming or special-occasion preparation.",
    benefits: [
      "Full menu from facial waxing to full-leg and Brazilian",
      "Options tailored for both ladies and men",
      "Skilled, hygienic application for sensitive areas",
    ],
    items: [
      { name: "1/2 Leg Wax", price: "R200" },
      { name: "3/4 Leg Wax", price: "R270" },
      { name: "Full Leg Wax", price: "R315" },
      { name: "Full Leg & Bikini Wax", price: "R380" },
      { name: "Bikini Wax Basic", price: "R260" },
      { name: "Bikini Wax Full", price: "R300" },
      { name: "Brazilian Wax", price: "R395" },
      { name: "Hollywood Wax", price: "R450" },
      { name: "Full Face Wax", price: "R300" },
      { name: "Cheek Wax", price: "R160" },
      { name: "Feet Wax", price: "R100" },
      { name: "Full Arm Wax", price: "R330" },
      { name: "Hand Wax", price: "R110" },
      { name: "Men's Back Wax", price: "R560" },
      { name: "Men's Full Leg Wax", price: "R480" },
      { name: "Tummy Wax", price: "R205" },
      { name: "Underarm Wax", price: "R140" },
      { name: "Ladies Back Wax", price: "R220" },
    ],
    startingFrom: "From R90",
    signature: "waxing",
  },
  {
    slug: "hands-and-feet",
    name: "Hands & Feet",
    shortName: "Hands & Feet",
    intro:
      "Considered care for hands and feet — from a quick buff and polish to a full restorative pedicure, including options for younger clients and gentlemen.",
    benefits: [
      "Full pedicure and manicure menu",
      "Medi-heel add-on for dry or cracked heels",
      "Gentle options available for clients under 13",
    ],
    items: [
      { name: "Buff & Shine Toe Nails", price: "R160" },
      { name: "Buff & Paint Toe Nails", price: "R260" },
      { name: "Pedicure", price: "R450" },
      { name: "Men's Pedicure", price: "R400" },
      { name: "Pedicure (under 13 years)", price: "R310" },
      { name: "Medi-Heel — add on", price: "R150" },
      { name: "Soak Off Toes", price: "R110" },
      { name: "Building Toe Nail", price: "R50" },
      { name: "Gel Toes", price: "R300" },
      { name: "Manicure", price: "R290" },
      { name: "Manicure (under 13 years)", price: "R220" },
      { name: "Buff & Paint — Nails", price: "R260" },
      { name: "Buff & Shine — Nails", price: "R165" },
    ],
    startingFrom: "From R50",
    signature: "nails",
  },
  {
    slug: "nails",
    name: "Gel Nails & Nail Art",
    shortName: "Nails",
    intro:
      "From a fresh gel set to fine, considered nail art, our nail menu covers repairs, overlays, and finishing touches for hands that are ready for anything.",
    benefits: [
      "Full set gel nails and gel overlays",
      "Nail art priced per nail for custom detail",
      "Repair and soak-off services to keep nails healthy",
    ],
    items: [
      { name: "Full Set Gel Nails", price: "R480" },
      { name: "File & Paint", price: "R280" },
      { name: "Gel Overlay", price: "R420" },
      { name: "Nail Repair", price: "R50" },
      { name: "Soak Off", price: "R150" },
      { name: "Nail Art (per nail)", price: "R2–R10" },
    ],
    startingFrom: "From R50",
    signature: "nails",
  },
  {
    slug: "massage-therapy",
    name: "Massage Therapy",
    shortName: "Massage",
    intro:
      "Slow down with a Swedish or aroma massage designed to ease tension and support circulation, or choose a focused foot, head, or lymph-drain treatment.",
    benefits: [
      "Full body and half body Swedish or aroma massage",
      "Focused foot and head massage options",
      "Lymph drainage for the legs",
    ],
    items: [
      { name: "Half Body (Swedish / Aroma)", price: "R400" },
      { name: "Full Body (Swedish / Aroma)", price: "R800" },
      { name: "Foot Massage", price: "R270" },
      { name: "Head Massage", price: "R290" },
      { name: "Lymph Drain Legs", price: "R260" },
    ],
    startingFrom: "From R260",
    signature: "massage",
  },
  {
    slug: "plasma-plex",
    name: "Plasma Plex",
    shortName: "Plasma Plex",
    intro:
      "A precise plasma-based treatment used for the appearance of skin tags, warts and moles, and fine lines around the eyes and forehead. Always begins with a consultation to confirm suitability.",
    benefits: [
      "May help with the appearance of skin tags and small blemishes",
      "Targeted treatment for forehead lines and under-eye bags",
      "Consultation required to assess treatment area and pricing",
    ],
    items: [
      { name: "Skin Tag Removal", price: "R390–R1900" },
      { name: "Wart/Mole Removal (1–5)", price: "R390" },
      { name: "Wart/Mole Removal (6–10)", price: "R750" },
      { name: "Wart/Mole Removal (11+)", price: "R1900" },
      { name: "Forehead Lines", price: "R900" },
      { name: "Bags Under Eyes", price: "R1200" },
      { name: "Stretch Mark Treatment", price: "R3500" },
    ],
    startingFrom: "From R390",
    signature: "plasma",
  },
  {
    slug: "permanent-makeup",
    name: "Permanent Makeup",
    shortName: "Permanent Makeup",
    intro:
      "Save time on your daily routine with Pixel Ombré permanent makeup, applied by our trained therapist to enhance your natural features with a soft, long-lasting finish.",
    benefits: [
      "Pixel Ombré technique for a soft, natural gradient",
      "Options for brows, eyeliner, and lips",
      "Touch-up sessions available to maintain results",
    ],
    items: [
      { name: "Pixel Ombré Brows", price: "R2200" },
      { name: "Pixel Ombré Brows Touch-up", price: "R1100" },
      { name: "Pixel Ombré Eyeliner (upper & lower lid)", price: "R2600" },
      { name: "Pixel Ombré Eyeliner Touch-up (upper & lower)", price: "R1200" },
      { name: "Pixel Ombré Eyeliner (upper lid only)", price: "R2200" },
      { name: "Pixel Ombré Eyeliner Touch-up (upper lid only)", price: "R1100" },
      { name: "Pixel Ombré Lips", price: "R2900" },
      { name: "Pixel Ombré Lips Touch-up", price: "R1450" },
    ],
    startingFrom: "From R1100",
    signature: "pmu",
  },
  {
    slug: "hair-and-makeup",
    name: "Hair & Makeup",
    shortName: "Hair & Makeup",
    intro:
      "Polished makeup and special-occasion hair for everyday confidence or a big event, plus one-on-one makeup consultations to learn what works for you.",
    benefits: [
      "Day makeup and special-occasion makeup application",
      "Personalised makeup consultations",
      "Special-occasion hair styling",
    ],
    items: [
      { name: "Day Makeup", price: "R400" },
      { name: "Special Occasion Makeup", price: "R590" },
      { name: "Makeup Consultation", price: "R630" },
      { name: "Special Occasion Hair", price: "R240" },
    ],
    startingFrom: "From R240",
    signature: "hairmakeup",
  },
  {
    slug: "ipl-treatments",
    name: "IPL Treatments",
    shortName: "IPL",
    intro:
      "Intense Pulsed Light (IPL) uses targeted light energy to treat pigmentation, visible spider veins, and unwanted hair — with minimal downtime since only the pigment is targeted, not the surrounding tissue. A consultation is recommended to confirm the right course for you.",
    benefits: [
      "May help reduce the appearance of pigmentation and sun spots",
      "Designed to target visible facial and leg veins",
      "Long-term hair reduction across face and body areas",
      "Minimal downtime compared to more invasive options",
    ],
    items: [
      { name: "Lip", price: "R650" },
      { name: "Chin", price: "R650" },
      { name: "Brow", price: "R650" },
      { name: "Veins (around the nose)", price: "R700" },
      { name: "Full Face", price: "R1280" },
      { name: "Face & Neck", price: "R2100" },
      { name: "Half Face", price: "R820" },
      { name: "Face incl. Facial", price: "R1760" },
      { name: "Cheeks & Forehead", price: "R870" },
      { name: "Bikini (Advanced)", price: "R1280" },
      { name: "Bikini (Basic)", price: "R940" },
      { name: "Bikini (Full)", price: "R1110" },
      { name: "Brazilian", price: "R2100" },
      { name: "IPL Breasts", price: "R970" },
      { name: "Ladies' Chest", price: "R1260" },
      { name: "Full Legs", price: "R3500" },
      { name: "Half Leg", price: "R2920" },
      { name: "Half Legs (under the knee)", price: "R2390" },
      { name: "Arms (including hands)", price: "R2640" },
      { name: "Lower Arms & Hands", price: "R2100" },
      { name: "Hands", price: "R870" },
      { name: "Underarm", price: "R820" },
      { name: "Sun Spots (1–4)", price: "R290" },
      { name: "Sun Spots (5–10)", price: "R640" },
      { name: "Back", price: "R3500" },
      { name: "Belly Button", price: "R520" },
      { name: "Men's Chest", price: "R4320" },
      { name: "Men's Neck (under chin)", price: "R820" },
    ],
    startingFrom: "From R650",
    signature: "ipl",
  },
];

export function findCeCategory(slug: string) {
  return ceTreatmentCategories.find((c) => c.slug === slug);
}
