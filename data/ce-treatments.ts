// Treatment names and prices from the official "2026 CE Price List" PDF
// (public/documents/clinique-estique-price-list-2026.pdf). This file is the
// single source for every price on the site: treatment pages, cards, the
// price list and the "From" labels (computed below, never typed by hand).
// Prices are exactly as printed; ranges use a plain hyphen.

export type PriceItem = {
  name: string;
  price: string; // as printed, e.g. "R950" or "R690-R4750"
  note?: string; // conditions printed with the item, e.g. touch-up timing
  group?: string; // sub-heading within a category, e.g. "Feet" / "Hands"
};

export type TreatmentCategory = {
  slug: string;
  name: string;
  shortName: string;
  intro: string;
  benefits: string[];
  items: PriceItem[];
  priceNote?: string; // printed note for the whole category
  startingFrom: string;
  signature: "facial" | "microneedling" | "waxing" | "nails" | "ipl" | "massage" | "pmu" | "grooming" | "hairmakeup" | "plasma";
};

export const priceListSource = {
  title: "Clinique Estique Price List 2026",
  fileName: "2026 CE Price List (1).pdf",
  publicPath: "/documents/clinique-estique-price-list-2026.pdf",
  label: "Clinique Estique Treatment Price List (2026)",
};

// Lowest standalone price in a category. Add-ons, touch-ups and per-nail
// prices are left out so the label reflects a full treatment.
function startingFrom(items: PriceItem[]) {
  const amounts = items
    .filter((i) => !/add on|touch-up|per nail/i.test(i.name))
    .map((i) => Number(i.price.match(/R(\d+)/)?.[1]))
    .filter((n) => Number.isFinite(n));
  return amounts.length ? `From R${Math.min(...amounts)}` : "Price on enquiry";
}

const categories: Omit<TreatmentCategory, "startingFrom">[] = [
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
      { name: "Standard Facial", price: "R950" },
      { name: "Facial (under 13 years)", price: "R480" },
      { name: "Chemical Peel (only)", price: "R690-R4750" },
      { name: "Back Cleanse", price: "R850" },
      { name: "Deep Cleanse Facial", price: "R690" },
      { name: "Lamelle Mask - add on", price: "R110" },
      { name: "Eyelash Lift - add on", price: "R360" },
      { name: "Dermaplaning (only)", price: "R490" },
      { name: "Dermaplaning - add on", price: "R120" },
    ],
    signature: "facial",
  },
  {
    slug: "microneedling",
    name: "Micro-Needling",
    shortName: "Micro-Needling",
    intro:
      "Microneedling is a cosmetic procedure that works with the skin's own natural healing response to encourage a firmer, more refined-looking complexion. It's often used to help address the appearance of scarring, pigmentation, fine lines, and enlarged pores, and results build gradually over a course of sessions.",
    benefits: [
      "May help reduce the visible appearance of scarring and fine lines",
      "Designed to support the skin's natural collagen response",
      "Can help refine the look of enlarged pores and uneven tone",
      "Results vary and a consultation is recommended beforehand",
    ],
    items: [
      { name: "Micro-Needling Facial", price: "R1890" },
      { name: "Micro-Needling Face Only", price: "R1590" },
      { name: "Micro-Needling Face and Neck", price: "R1750" },
      { name: "Derma-Roller Facial incl. Transderm", price: "R1140" },
      { name: "Vitamin A Serum - add on", price: "R200" },
    ],
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
      { name: "Chin Wax", price: "R180" },
      { name: "Eyebrow Tint", price: "R85" },
      { name: "Eyebrow Tint & Shape", price: "R180" },
      { name: "Eyebrow Tint & Shape, Eyelash Tint", price: "R280" },
      { name: "Eyebrow Wax", price: "R130" },
      { name: "Eyelash Tint", price: "R180" },
      { name: "Lip Wax", price: "R115" },
      { name: "Nose Hair Wax", price: "R120" },
      { name: "Neck Wax", price: "R150" },
      { name: "Brow Lamination", price: "R450" },
      { name: "Eyelash Lift", price: "R480" },
    ],
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
      { name: "1/2 Leg Wax", price: "R230" },
      { name: "3/4 Leg Wax", price: "R300" },
      { name: "Full Leg Wax", price: "R340" },
      { name: "Full Leg & Bikini Wax", price: "R560" },
      { name: "Bikini Wax Basic", price: "R240" },
      { name: "Bikini Wax Full", price: "R330" },
      { name: "Brazilian Wax", price: "R430" },
      { name: "Hollywood Wax", price: "R490" },
      { name: "Full Face Wax", price: "R330" },
      { name: "Cheek Wax", price: "R180" },
      { name: "Feet Wax", price: "R120" },
      { name: "Full Arm Wax", price: "R420" },
      { name: "Men's Full Arm Wax", price: "R470" },
      { name: "Hand Wax", price: "R140" },
      { name: "Men's Back Wax", price: "R650" },
      { name: "Men's Full Leg Wax", price: "R580" },
      { name: "Tummy Wax", price: "R220" },
      { name: "Underarm Wax", price: "R170" },
      { name: "Ladies Back Wax", price: "R240" },
    ],
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
      { name: "Buff & Shine Toe Nails", price: "R180", group: "Feet" },
      { name: "Buff & Paint Toe Nails", price: "R280", group: "Feet" },
      { name: "Pedicure", price: "R490", group: "Feet" },
      { name: "Men's Pedicure", price: "R450", group: "Feet" },
      { name: "Pedicure (under 13 years)", price: "R340", group: "Feet" },
      { name: "Medi-Heel - add on", price: "R160", group: "Feet" },
      { name: "Soak Off Toes", price: "R120", group: "Feet" },
      { name: "Building Toe Nail", price: "R50", group: "Feet" },
      { name: "Gel Toes", price: "R340", group: "Feet" },
      { name: "Manicure", price: "R320", group: "Hands" },
      { name: "Manicure (under 13 years)", price: "R235", group: "Hands" },
      { name: "Buff & Paint - Nails", price: "R290", group: "Hands" },
      { name: "Buff & Shine - Nails", price: "R175", group: "Hands" },
    ],
    signature: "nails",
  },
  {
    slug: "nails",
    name: "Nails",
    shortName: "Nails",
    intro:
      "From a fresh gel set to fine, considered nail art, our nail menu covers repairs, overlays, and finishing touches for hands that are ready for anything.",
    benefits: [
      "Full set gel nails and gel overlays",
      "Nail art priced per nail for custom detail",
      "Repair and soak-off services to keep nails healthy",
    ],
    items: [
      { name: "Full Set Gel Nails", price: "R530" },
      { name: "File & Paint", price: "R310" },
      { name: "Gel Overlay", price: "R470" },
      { name: "Nail Repair", price: "R65" },
      { name: "Soak Off", price: "R170" },
      { name: "Nail Art (per nail)", price: "R5-R15" },
    ],
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
    items: [],
    priceNote:
      "Massage is not on the 2026 price list. Please contact the clinic for current availability and pricing.",
    signature: "massage",
  },
  {
    slug: "plasma-plex",
    name: "Plasma-Plex",
    shortName: "Plasma-Plex",
    intro:
      "A precise plasma-based treatment used for the appearance of skin tags, warts and moles, and fine lines around the eyes and forehead. Always begins with a consultation to confirm suitability.",
    benefits: [
      "May help with the appearance of skin tags and small blemishes",
      "Targeted treatment for forehead lines and under-eye bags",
      "Send a photo or visit us for a consultation before your treatment",
    ],
    items: [
      { name: "Skin Tag Removal", price: "R390-R1900" },
      { name: "Wart/Mole Removal (1-5)", price: "R390" },
      { name: "Wart/Mole Removal (6-10)", price: "R750" },
      { name: "Wart/Mole Removal (11+)", price: "R1900" },
      { name: "Forehead Lines", price: "R900" },
      { name: "Bags Under Eyes", price: "R1200" },
      { name: "Stretch Mark Treatment", price: "R3500" },
    ],
    priceNote:
      "Clients have the option to either send a photo or visit us for a consultation prior to their treatment.",
    signature: "plasma",
  },
  {
    slug: "permanent-makeup",
    name: "Permanent Make-Up",
    shortName: "Permanent Make-Up",
    intro:
      "Save time on your daily routine with Pixel Ombré permanent makeup, applied by our trained therapist to enhance your natural features with a soft, long-lasting finish.",
    benefits: [
      "Pixel Ombré technique for a soft, natural gradient",
      "Options for brows, eyeliner, and lips",
      "Touch-up sessions available to maintain results",
    ],
    items: [
      { name: "Pixel Ombré Brows", price: "R2280" },
      { name: "Pixel Ombré Brows Touch-up", price: "R1150", note: "Must be done 3 months after the first treatment" },
      { name: "Pixel Ombré Eyeliner (upper & lower lid)", price: "R2700" },
      { name: "Pixel Ombré Eyeliner Touch-up (upper & lower lid)", price: "R1250", note: "Must be done 3 months after the first treatment" },
      { name: "Pixel Ombré Eyeliner (upper & lower lid) Touch-up after 1 year", price: "R1600", note: "With consultation" },
      { name: "Pixel Ombré Eyeliner (upper lid only)", price: "R2200" },
      { name: "Pixel Ombré Eyeliner Touch-up (upper lid only)", price: "R1100", note: "Must be done 3 months after the first treatment" },
      { name: "Pixel Ombré Lips", price: "R2900" },
      { name: "Pixel Ombré Lips Touch-up", price: "R1550", note: "Must be done 3 months after the first treatment" },
      { name: "Pixel Ombré Brow Touch-up after 1 year", price: "R1500" },
      { name: "Pixel Ombré Brow Touch-up after 2 years", price: "R1900" },
      { name: "Designer Eyeliner, Brushed Wing", price: "R2600" },
    ],
    signature: "pmu",
  },
  {
    slug: "hair-and-makeup",
    name: "Hair & Make-Up",
    shortName: "Hair & Make-Up",
    intro:
      "Polished make-up and special-occasion hair for everyday confidence or a big event, plus make-up classes to learn what works for you.",
    benefits: [
      "Day makeup and special-occasion makeup application",
      "Special-occasion trials and make-up classes",
      "Special-occasion hair styling",
    ],
    items: [
      { name: "Day Make-Up", price: "R450" },
      { name: "Special Occasion Make-Up", price: "R650" },
      { name: "Special Occasion Make-Up with False Lashes", price: "R720" },
      { name: "Special Occasion Make-Up Trial", price: "R550" },
      { name: "Make-Up Class", price: "R650" },
      { name: "Special Occasion Hair", price: "R450" },
    ],
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
      { name: "Veins (around the nose)", price: "R800" },
      { name: "Full Face", price: "R1500" },
      { name: "Face & Neck", price: "R2200" },
      { name: "Half Face", price: "R850" },
      { name: "Face incl. Facial", price: "R1815" },
      { name: "Cheeks & Forehead", price: "R890" },
      { name: "Bikini (Advanced)", price: "R1300" },
      { name: "Bikini (Basic)", price: "R960" },
      { name: "Bikini (Full)", price: "R1140" },
      { name: "Brazilian", price: "R2200" },
      { name: "IPL Breasts", price: "R990" },
      { name: "Ladies' Chest", price: "R1290" },
      { name: "Full Legs", price: "R3650" },
      { name: "Half Leg", price: "R3010" },
      { name: "Half Legs (under the knee)", price: "R2460" },
      { name: "Arms (including hands)", price: "R2800" },
      { name: "Lower Arms & Hands", price: "R2200" },
      { name: "Hands", price: "R895" },
      { name: "Underarm", price: "R850" },
      { name: "Sun Spots (1-4)", price: "R290" },
      { name: "Sun Spots (5-10)", price: "R640" },
      { name: "Back", price: "R3500" },
      { name: "Belly Button", price: "R520" },
      { name: "Men's Chest", price: "R4320" },
      { name: "Men's Neck (under chin)", price: "R820" },
    ],
    signature: "ipl",
  },
];

export const ceTreatmentCategories: TreatmentCategory[] = categories.map((c) => ({
  ...c,
  startingFrom: startingFrom(c.items),
}));

export function findCeCategory(slug: string) {
  return ceTreatmentCategories.find((c) => c.slug === slug);
}
