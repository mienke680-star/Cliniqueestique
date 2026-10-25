import type { StaticImageData } from "next/image";
import facial from "@/public/images/treatments/facial-treatments.jpg";
import microneedling from "@/public/images/treatments/microneedling.jpg";
import waxing from "@/public/images/treatments/waxing.jpg";
import ipl from "@/public/images/treatments/ipl-treatments.jpg";
import nails from "@/public/images/treatments/nails.jpg";
import pmu from "@/public/images/treatments/permanent-makeup.jpg";
import massage from "@/public/images/treatments/massage-therapy.jpg";
import hairMakeup from "@/public/images/treatments/hair-and-makeup.jpg";

export type TreatmentPhoto = {
  src: StaticImageData;
  alt: string;
  // Where the subject sits, so the 4:5 card frame never crops it out.
  position: string;
};

// Owner-supplied photographs, matched to their treatment families (placed
// in the order supplied; the makeup photo moved to Hair & Makeup at the
// owner's request). Files are the
// originals (JPEGs copied as-is; PNGs saved as high-quality JPEG) with no
// retouching, recolouring or cropping baked in.
export const treatmentPhotos: Record<string, TreatmentPhoto> = {
  "facial-treatments": {
    src: facial,
    alt: "Therapist in black gloves preparing a skin treatment from a glass vial beside a client",
    position: "50% 42%",
  },
  microneedling: {
    src: microneedling,
    alt: "Microneedling pen being applied to a client's forehead",
    position: "50% 50%",
  },
  waxing: {
    src: waxing,
    alt: "Warm wax lifted from a wax heater on a wooden spatula",
    position: "50% 50%",
  },
  "ipl-treatments": {
    src: ipl,
    alt: "IPL handpiece being used on a client's forearm",
    position: "50% 50%",
  },
  nails: {
    src: nails,
    alt: "Hands with almond-shaped French manicure nails",
    position: "50% 50%",
  },
  "permanent-makeup": {
    src: pmu,
    alt: "Brow mapping ruler held in place before a permanent makeup brow treatment",
    position: "50% 40%",
  },
  "massage-therapy": {
    src: massage,
    alt: "Therapist pouring massage oil into one hand before a back massage",
    position: "50% 50%",
  },
  "hair-and-makeup": {
    src: hairMakeup,
    alt: "Makeup brush held over a client's eye, showing a finished makeup look",
    position: "50% 50%",
  },
};
