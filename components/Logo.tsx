// Brand mark for Clinique Estique.
//
// NOTE ON PROVENANCE: the supplied brand guidelines PDF embeds the authentic
// CE monogram as a flattened image, not as an editable vector. No
// vectorisation tool was available in this environment to trace it
// pixel-for-pixel, so the interlocking ring-and-dot monogram below is an
// original, best-effort recreation in the same spirit (two interlocking
// rounded forms with two accent dots and a fine inner line) — it is NOT a
// literal trace of the supplied artwork. The wordmark treatment ("Clinique
// Estique" / "Specialised Beauty Clinic" in the approved editorial and
// label typefaces) carries the primary brand identity and is authentic to
// the guidelines. See LAUNCH-CHECKLIST.md: swap `monogramPaths` for the
// real exported SVG/EPS before this goes live.

export const monogramPaths = {
  leftRing: "M 27 100 A 58 58 0 1 1 143 100 A 58 58 0 1 1 27 100",
  rightRing: "M 97 100 A 58 58 0 1 1 213 100 A 58 58 0 1 1 97 100",
  innerAccent: "M 113 132 C 130 145, 160 142, 178 116",
  dotLeft: { cx: 38, cy: 168, r: 5 },
  dotRight: { cx: 202, cy: 168, r: 5 },
};

export function LogoMark({
  className,
  fill = "#444A54",
}: {
  className?: string;
  fill?: string;
}) {
  return (
    <svg
      viewBox="0 0 240 200"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d={monogramPaths.leftRing} stroke={fill} strokeWidth={20} />
      <path d={monogramPaths.rightRing} stroke={fill} strokeWidth={20} />
      <path
        d={monogramPaths.innerAccent}
        stroke={fill}
        strokeWidth={2}
        strokeLinecap="round"
      />
      <circle {...monogramPaths.dotLeft} fill={fill} />
      <circle {...monogramPaths.dotRight} fill={fill} />
    </svg>
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
