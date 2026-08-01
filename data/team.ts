// Team names and roles as given in the confirmed business brief / existing
// site listing. These could NOT be independently cross-checked against a
// live Instagram or website fetch this session (both were unreachable) —
// see LAUNCH-CHECKLIST.md. Do not publish without the owner confirming this
// list is current.

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  unverified?: boolean;
};

export const team: TeamMember[] = [
  {
    name: "Yvette Botha",
    role: "Owner & Founder",
    bio: "Yvette founded Clinique Estique from a single rented nail space inside a hair salon, and has grown it into a specialised beauty clinic built on personal attention and long-term client relationships.",
  },
  {
    name: "Lorraine",
    role: "Skincare & Cosmetic Treatments",
    bio: "Lorraine focuses on skincare and advanced cosmetic treatments, guiding clients through facials, peels, and skin-focused care.",
    unverified: true,
  },
  {
    name: "Katia",
    role: "Nail Art",
    bio: "Katia brings a fine, considered hand to nail art and gel finishes.",
    unverified: true,
  },
  {
    name: "Hesri",
    role: "Nail Treatments & Nail Art",
    bio: "Hesri specialises in nail treatments and nail art, from everyday manicures to detailed designs.",
    unverified: true,
  },
  {
    name: "Erin",
    role: "Front of House",
    bio: "Erin is often the first friendly face you'll meet, helping coordinate bookings and welcome clients.",
    unverified: true,
  },
  {
    name: "Beauty",
    role: "Salon Support",
    bio: "Beauty helps keep the clinic running smoothly behind the scenes.",
    unverified: true,
  },
];
