import Image from "next/image";
import { treatmentPhotos } from "@/data/treatment-photos";
import { SignatureVisual, type SignatureType } from "./SignatureVisual";

// The owner's photograph for a treatment family when one has been supplied,
// otherwise the existing brand illustration. Same 4:5 frame either way, so
// cards stay aligned whichever they show.
export function TreatmentPhoto({
  slug,
  fallback,
  className,
  sizes = "(min-width: 768px) 320px, 280px",
  priority = false,
}: {
  slug: string;
  fallback: SignatureType;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  const photo = treatmentPhotos[slug];
  if (!photo) return <SignatureVisual type={fallback} className={className} />;

  return (
    <div className={className}>
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-md bg-silver">
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes={sizes}
          placeholder="blur"
          priority={priority}
          className="object-cover"
          style={{ objectPosition: photo.position }}
        />
      </div>
    </div>
  );
}
