// Extracted from "Me Si bon Pricelist nuwe 2026.pdf" (5 pages of pricing plus
// supporting "why choose Me Si Bon" copy). Every product name and price is
// preserved as printed. Items with `flagged: true` have a spelling or
// duplication quirk in the source PDF — see LAUNCH-CHECKLIST.md before
// renaming anything.

export type MesibonProduct = {
  name: string;
  size?: string;
  price: string;
  flagged?: boolean;
};

export type MesibonCategory = {
  slug: string;
  name: string;
  intro: string;
  products: MesibonProduct[];
};

export const mesibonSource = {
  title: "ME SI BON PRICE LIST",
  fileName: "Me_Si_bon_Pricelist_nuwe_2026.pdf",
  publicPath: "/documents/me-si-bon-price-list-2026.pdf",
  label: "Me Si Bon 2026 Price List",
};

export const mesibonWhyChoose = [
  {
    title: "100% Pure & Natural",
    body: "Me Si Bon oils are not diluted or mixed with synthetic ingredients, so every drop carries the natural character of the plant. Oils are typically steam-distilled or cold-pressed to preserve their properties.",
  },
  {
    title: "Concentrated, Long-Lasting",
    body: "Because pure essential oils are highly concentrated, only a few drops are needed to experience their benefits — making each bottle long-lasting and cost-effective.",
  },
  {
    title: "Wide Wellness Use",
    body: "Widely used for stress relief and relaxation (lavender, ylang ylang), mood and mental clarity, sleep support, respiratory comfort (eucalyptus, peppermint), and skin and hair care (tea tree, rosemary).",
  },
  {
    title: "Professional & Home Use",
    body: "Suitable for aromatherapy diffusers, massage when blended with a carrier oil, skincare treatments, and salon use.",
  },
  {
    title: "No Harsh Chemicals",
    body: "Free from synthetic fragrances, mineral oils, and harmful additives — a clean, holistic choice for natural wellness.",
  },
  {
    title: "Professional Quality",
    body: "Higher-quality oils support better treatment results, a more luxurious client experience, and stronger brand trust in a salon setting.",
  },
];

export const mesibonCategories: MesibonCategory[] = [
  {
    slug: "essential-oils",
    name: "Essential Oils",
    intro: "Our full range of 100% pure essential oils, 10ml unless noted otherwise.",
    products: [
      { name: "All Spice", size: "10ml", price: "R225.00" },
      { name: "Amyris", size: "10ml", price: "R345.00" },
      { name: "Anti Fungal", size: "10ml", price: "R270.00" },
      { name: "Basil", size: "10ml", price: "R190.00" },
      { name: "Bergamot", size: "10ml", price: "R195.00" },
      { name: "Bitter Orange", size: "10ml", price: "R170.00" },
      { name: "Black Cumin", size: "10ml", price: "R160.00" },
      { name: "Black Pepper", size: "10ml", price: "R195.00" },
      { name: "Blood Orange", size: "10ml", price: "R205.00" },
      { name: "Brain Power", size: "10ml", price: "R280.00" },
      { name: "Breathe Easy", size: "10ml", price: "R220.00" },
      { name: "Camphor", size: "10ml", price: "R200.00" },
      { name: "Cardamom", size: "10ml", price: "R375.00", flagged: true },
      { name: "Carrot Seed", size: "10ml", price: "R250.00" },
      { name: "Cassia", size: "10ml", price: "R230.00" },
      { name: "Cedarwood", size: "10ml", price: "R220.00" },
      { name: "Cinnamon", size: "10ml", price: "R195.00" },
      { name: "Citronella", size: "10ml", price: "R180.00" },
      { name: "Citrus", size: "10ml", price: "R180.00" },
      { name: "Clary Sage", size: "10ml", price: "R270.00" },
      { name: "Clove Bud", size: "10ml", price: "R248.00" },
      { name: "Copaiba", size: "10ml", price: "R250.00" },
      { name: "Cypress", size: "10ml", price: "R230.00" },
      { name: "Easy Digest", size: "10ml", price: "R180.00" },
      { name: "Energizing", size: "10ml", price: "R220.00" },
      { name: "Esther", price: "R180.00", flagged: true },
      { name: "Eucalyptus", size: "10ml", price: "R185.00" },
      { name: "Expecting Soon", size: "10ml", price: "R220.00" },
      { name: "Fir Needle", size: "10ml", price: "R230.00" },
      { name: "Frankincense", size: "10ml", price: "R270.00" },
      { name: "Gardenia", size: "10ml", price: "R340.00" },
      { name: "Geranium", size: "10ml", price: "R300.00" },
      { name: "Get Motivated", size: "10ml", price: "R180.00" },
      { name: "Ginger", size: "10ml", price: "R250.00" },
      { name: "Ginger Lilly", size: "10ml", price: "R270.00" },
      { name: "Grapefruit", size: "10ml", price: "R180.00" },
      { name: "Helichrysum", size: "10ml", price: "R500.00" },
      { name: "Hemp Seed", size: "10ml", price: "R130.00" },
      { name: "Honeysuckle", size: "10ml", price: "R390.00" },
      { name: "Just Relax", size: "10ml", price: "R220.00" },
      { name: "Juniper Berry", size: "10ml", price: "R260.00" },
      { name: "Labdanum", size: "10ml", price: "R250.00" },
      { name: "Laurel Berry", size: "10ml", price: "R225.00" },
      { name: "Lavender", size: "10ml", price: "R205.00" },
      { name: "Lemon", size: "10ml", price: "R180.00" },
      { name: "Lemon Balm", size: "10ml", price: "R270.00" },
      { name: "Lemongrass", size: "10ml", price: "R180.00" },
      { name: "Lime", size: "10ml", price: "R175.00" },
      { name: "Mandarin", size: "10ml", price: "R172.00" },
      { name: "Marjoram", size: "10ml", price: "R215.00" },
      { name: "Mental Clarity", size: "10ml", price: "R250.00" },
      { name: "Mentha Piperata", size: "10ml", price: "R250.00" },
      { name: "Migraine Relief", size: "10ml", price: "R250.00" },
      { name: "Minus Sinus", size: "10ml", price: "R200.00" },
      { name: "Moringa Carrier Oil", size: "10ml", price: "R150.00" },
      { name: "Myrrh", size: "10ml", price: "R248.00" },
      { name: "Myrtle", size: "10ml", price: "R230.00" },
      { name: "Neroli", size: "10ml", price: "R280.00" },
      { name: "Orange Blossom", size: "10ml", price: "R480.00" },
      { name: "Origano", size: "10ml", price: "R195.00", flagged: true },
      { name: "Palma Rosa", size: "10ml", price: "R280.00" },
      { name: "Peppermint", size: "10ml", price: "R205.00" },
      { name: "Pink Grapefruit", size: "10ml", price: "R205.00" },
      { name: "Pink Pepper", size: "10ml", price: "R335.00" },
      { name: "Pitt Grain", size: "10ml", price: "R235.00", flagged: true },
      { name: "Roman Camomile", size: "10ml", price: "R600.00", flagged: true },
      { name: "Romancing Stones", size: "10ml", price: "R265.00" },
      { name: "Rose", size: "10ml", price: "R600.00" },
      { name: "Rosemary", size: "10ml", price: "R180.00" },
      { name: "Sentation All", size: "10ml", price: "R260.00", flagged: true },
      { name: "Simply Calaming", size: "10ml", price: "R180.00", flagged: true },
      { name: "Sleep Assist", size: "10ml", price: "R290.00" },
      { name: "Sleep Easy", size: "10ml", price: "R220.00" },
      { name: "Spearmint", size: "10ml", price: "R200.00" },
      { name: "Sweet Fennel", size: "10ml", price: "R215.00" },
      { name: "Sweet Orange", size: "10ml", price: "R180.00" },
      { name: "Tangerine", size: "10ml", price: "R205.00" },
      { name: "Tea Tree", size: "10ml", price: "R185.00" },
      { name: "Tranquility", size: "10ml", price: "R302.00" },
      { name: "True Equilibrium", size: "10ml", price: "R160.00" },
      { name: "Tumeric", size: "10ml", price: "R195.00", flagged: true },
      { name: "Vanilla", size: "10ml", price: "R400.00" },
      { name: "Vetiver", size: "10ml", price: "R580.00" },
      { name: "White Thyme", size: "10ml", price: "R205.00" },
      { name: "Wintergreen", size: "10ml", price: "R205.00" },
      { name: "Yara", size: "10ml", price: "R290.00", flagged: true },
      { name: "Yarrow", size: "10ml", price: "R270.00" },
      { name: "Ylang Ylang", size: "10ml", price: "R285.00" },
    ],
  },
  {
    slug: "oil-blends",
    name: "Oil Blends",
    intro: "Signature blends addressing everyday wellness needs.",
    products: [
      { name: "Constipation Relief", size: "30ml", price: "R380.00" },
      { name: "Crossfit", size: "30ml", price: "R200.00" },
      { name: "Weight Loss", size: "30ml", price: "R350.00" },
    ],
  },
  {
    slug: "30ml-oils",
    name: "30ml Oils",
    intro: "Larger 30ml bottles for our most-loved everyday blends.",
    products: [
      { name: "Skin Rescue", size: "30ml", price: "R360.00" },
      { name: "Esther", size: "30ml", price: "R450.00" },
      { name: "Constipation Relief", size: "30ml", price: "R380.00", flagged: true },
      { name: "Hair with Flair", size: "30ml", price: "R230.00" },
      { name: "Aches & Pains", size: "30ml", price: "R350.00" },
      { name: "Cuticle Oil", size: "30ml", price: "R330.00" },
    ],
  },
  {
    slug: "essential-oil-kit",
    name: "Essential Oil Kit & Carrier Bag",
    intro: "A curated starter kit for building an at-home or in-salon essential oil ritual.",
    products: [
      { name: "Essential Oil Kit", price: "R1000.00" },
      { name: "Essential Oil Black Bag (carrier bag only)", price: "R400.00" },
      { name: "Cuticle Oil", size: "10ml", price: "R130.00" },
    ],
  },
  {
    slug: "rollers",
    name: "Rollers",
    intro: "Convenient roll-on blends, ready for on-the-go application.",
    products: [
      { name: "Aches and Pains Roller", size: "10ml", price: "R200.00" },
      { name: "Sleep Easy Roller", size: "10ml", price: "R200.00" },
      { name: "Just Relax Roller", size: "10ml", price: "R150.00" },
      { name: "Minus Sinus Roller", size: "10ml", price: "R150.00" },
      { name: "Acne Clear Roller", size: "10ml", price: "R140.00" },
    ],
  },
  {
    slug: "lotions",
    name: "Lotions",
    intro: "Nourishing everyday lotions in two of our best-loved blends.",
    products: [
      { name: "Acne Clear Lotion", size: "50ml", price: "R185.00" },
      { name: "Skin Rescue Lotion", size: "50ml", price: "R178.00" },
      { name: "Skin Rescue Lotion", size: "150ml", price: "R290.00" },
      { name: "Esthers Lotion", size: "50ml", price: "R215.00" },
      { name: "Esthers Lotion", size: "150ml", price: "R350.00" },
    ],
  },
  {
    slug: "spray",
    name: "Spray & Insect Repellent",
    intro: "A natural, essential-oil based spray.",
    products: [{ name: "Me Si Bon Spray (Insect Repellent)", price: "R210.00" }],
  },
];

export function findMesibonCategory(slug: string) {
  return mesibonCategories.find((c) => c.slug === slug);
}
