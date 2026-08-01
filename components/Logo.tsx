// Brand mark for Clinique Estique.
//
// This is the authentic CE monogram exactly as supplied by the owner
// (public/brand/ce-monogram.png), not a redrawn or approximated version.
// The only processing applied was a whitespace crop to the artwork's own
// bounding box and converting the background to transparent — no pixel of
// the mark itself was altered, recoloured, or redrawn. Do not replace this
// with a recreated/vector version.

const MONOGRAM_SRC = "/brand/ce-monogram.png";
const MONOGRAM_ASPECT = 560 / 333;

export function LogoMark({
  className,
}: {
  className?: string;
  fill?: string;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={MONOGRAM_SRC}
      alt="Clinique Estique monogram"
      className={className}
      style={{ aspectRatio: MONOGRAM_ASPECT, objectFit: "contain" }}
    />
  );
}

export function LogoLockup({
  className,
  markClassName = "h-14 w-auto",
  tagline = true,
}: {
  className?: string;
  markClassName?: string;
  tagline?: boolean;
}) {
  return (
    <div className={className}>
      <LogoMark className={markClassName} />
      <div className="mt-2 text-center">
        <p className="font-display text-2xl tracking-wide text-charcoal md:text-3xl">
          Clinique Estique
        </p>
        {tagline && (
          <p className="mt-1 font-label text-[11px] uppercase tracking-widest2 text-sage-deep">
            Specialised Beauty Clinic
          </p>
        )}
      </div>
    </div>
  );
}

export function LogoWordmark({ className }: { className?: string }) {
  return (
    <span className={className}>
      <span className="font-display text-xl tracking-wide text-charcoal md:text-2xl">
        Clinique Estique
      </span>
    </span>
  );
}
