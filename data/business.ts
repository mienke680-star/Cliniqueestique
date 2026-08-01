// Verified business information — see LAUNCH-CHECKLIST.md for anything still
// awaiting owner confirmation. Do not add treatments, prices, staff, reviews,
// or claims here without a verified source.

export const business = {
  name: "Clinique Estique",
  category: "Specialised Beauty Clinic",
  founder: "Yvette Botha",
  address: {
    line1: "5A Lillian Ngoyi Street",
    line2: "Middelburg, Mpumalanga, 1055",
    country: "South Africa",
    full: "5A Lillian Ngoyi Street, Middelburg, Mpumalanga, 1055, South Africa",
  },
  phone: {
    display: "082 927 6738",
    tel: "+27829276738",
    href: "tel:+27829276738",
  },
  whatsapp: {
    number: "27829276738",
    baseUrl: "https://wa.me/27829276738",
  },
  email: "info@cliniqueestique.co.za",
  instagram: {
    handle: "@clinique_estique",
    url: "https://www.instagram.com/clinique_estique/",
  },
  facebook: "https://www.facebook.com/clinique.estique/",
  website: "https://www.cliniqueestique.co.za/",
  hours: [
    { days: "Monday – Friday", time: "08:00 – 17:00" },
    { days: "Saturday", time: "08:00 – 13:00" },
    { days: "Sunday", time: "Closed" },
  ],
  googleRating: {
    value: 4.8,
    count: 83,
    source: "Google Business profile screenshot supplied by owner",
    // No live Google Places integration is wired up — this is a manually
    // recorded figure. Update it by hand, or wire up a Google Places API
    // key and swap this static value for a live fetch.
    isLive: false,
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Clinique+Estique+Middelburg",
  },
  map: {
    // Standard Google Maps embed centred on the street address. Replace with
    // the exact Place ID embed once the owner confirms the pinned location.
    embedSrc:
      "https://www.google.com/maps?q=5A+Lillian+Ngoyi+Street,+Middelburg,+Mpumalanga,+1055,+South+Africa&output=embed",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=5A+Lillian+Ngoyi+Street,+Middelburg,+Mpumalanga,+1055,+South+Africa",
  },
} as const;

export function whatsappLink(message: string) {
  return `${business.whatsapp.baseUrl}?text=${encodeURIComponent(message)}`;
}
