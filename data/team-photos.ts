import type { StaticImageData } from "next/image";
import yvette from "@/public/images/team/yvette.jpg";
import lorraine from "@/public/images/team/lorraine.jpg";
import christie from "@/public/images/team/christie.jpg";
import hesri from "@/public/images/team/hesri.jpg";
import erin from "@/public/images/team/erin.jpg";
import group from "@/public/images/team/team-group.jpg";

// Owner-supplied portraits, matched by name as the owner listed them.
// Unaltered photographs (saved as high-quality JPEG only).
export const teamPortraits: Record<string, StaticImageData> = {
  "Yvette Botha": yvette,
  Lorraine: lorraine,
  Christie: christie,
  Hesri: hesri,
  Erin: erin,
};

// Where each face sits in its photo. The portraits were shot with generous
// backdrop, so the card frame zooms in a little around this point (a
// display crop only; the files are untouched).
export const teamPortraitFocus: Record<string, string> = {
  "Yvette Botha": "53% 38%",
  Lorraine: "48% 38%",
  Christie: "48% 36%",
  Hesri: "50% 34%",
  Erin: "46% 36%",
};

export const teamGroupPhoto = group;
