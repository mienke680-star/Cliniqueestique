// Original editorial content written for this rebuild. The previous site's
// articles could not be migrated — cliniqueestique.co.za returned a 404 for
// every page fetched this session, so no existing article text was
// available to preserve. See LAUNCH-CHECKLIST.md.

export type JournalPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  body: string[];
};

export const journalPosts: JournalPost[] = [
  {
    slug: "preparing-for-your-first-facial",
    title: "Preparing for Your First Facial",
    excerpt: "What to expect from a consultation-led facial, and how to get the most from it.",
    category: "Skincare",
    body: [
      "Every facial at Clinique Estique starts with a conversation, not a treatment bed. Your therapist will ask about your skin history, current products, and any concerns before recommending a plan — because what works for one skin rarely works identically for another.",
      "Arriving with a clean face (or a few minutes early to remove makeup) helps your therapist assess your skin accurately. It's also worth listing any actives you use at home, like retinol or vitamin C, so your treatment and aftercare advice can be adjusted around them.",
      "Afterwards, your skin may look slightly flushed for a short while — this is a normal response to stimulation and cleansing, not a sign anything went wrong. Your therapist will talk you through a simple aftercare routine to help support your results.",
    ],
  },
  {
    slug: "microneedling-aftercare-basics",
    title: "Microneedling Aftercare Basics",
    excerpt: "Gentle guidance for the days after a microneedling session.",
    category: "Advanced Treatments",
    body: [
      "Microneedling encourages the skin's own healing response, so the days that follow matter as much as the treatment itself. Keeping skin clean, hydrated, and away from direct sun helps support the process.",
      "It's normal for skin to feel tight or appear slightly pink for a day or two. Avoid active ingredients like retinol or exfoliating acids until your therapist confirms your skin is ready for them again.",
      "A broad-spectrum SPF is non-negotiable during this period — freshly treated skin is more sensitive to UV exposure. If you have any concerns after your treatment, contact the clinic directly rather than waiting for your next appointment.",
    ],
  },
  {
    slug: "understanding-ipl-treatments",
    title: "Understanding IPL: What It Can (and Can't) Do",
    excerpt: "A plain-language look at how Intense Pulsed Light treatments work.",
    category: "IPL",
    body: [
      "IPL uses broad-spectrum light energy, absorbed by pigment in the skin or hair, to target concerns like sun spots, visible veins, or unwanted hair. Because it targets pigment specifically, it tends to involve less downtime than more invasive options.",
      "IPL works gradually — most concerns respond best to a course of sessions rather than a single visit, and results vary depending on skin tone, hair colour, and the concern being treated. A consultation beforehand helps confirm whether IPL is a good fit for you.",
      "Sun exposure before and after treatment affects both safety and results, so your therapist will talk you through timing your sessions around any sun exposure, including recent tanning.",
    ],
  },
  {
    slug: "essential-oil-safety-at-home",
    title: "Using Essential Oils Safely at Home",
    excerpt: "A few simple guidelines for enjoying Me Si Bon oils safely.",
    category: "Me Si Bon",
    body: [
      "Pure essential oils are concentrated, which is part of what makes them effective — and part of why a little care goes a long way. Always dilute oils in a carrier oil before applying to skin, unless a product is specifically labelled ready-to-use, like our rollers.",
      "Patch-test any new oil on a small area of skin before wider use, and keep oils away from eyes and broken skin. Some oils aren't suitable during pregnancy — our 'Expecting Soon' blend is formulated with this in mind, but it's worth checking with your care provider before introducing any new oil.",
      "For diffusing at home, a few drops go further than you'd expect. Store your oils away from direct sunlight and heat to help preserve their quality for longer.",
    ],
  },
];

export function findJournalPost(slug: string) {
  return journalPosts.find((p) => p.slug === slug);
}
