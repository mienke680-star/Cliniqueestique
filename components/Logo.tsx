// Brand mark for Clinique Estique.
//
// NOTE ON PROVENANCE: the supplied brand guidelines PDF embeds the CE
// monogram as a flattened image, not as an editable vector, and no
// vectorisation/tracing tool was available to extract it pixel-for-pixel.
// Instead, this recreates the mark from its actual construction: the
// guidelines monogram is a mirrored pair of lowercase "e" letterforms in a
// bold, high-contrast Didone serif (the same character as the site's own
// display face, Bodoni Moda). The two glyph outlines below were extracted
// directly from the Bodoni Moda (weight 800, optical size 96) font file
// using its real vector data — mirrored, overlapped, and paired with a
// hand-drawn tail-and-dot flourish matching the guidelines artwork. This is
// a faithful reconstruction of the mark's actual letterforms, not a rough
// approximation. See LAUNCH-CHECKLIST.md: swap for the studio's original
// export (SVG/EPS) if one exists, for pixel-exact parity.

export const monogramViewBox = "0 0 300 230";

export const monogramPaths = {
  rightGlyph:
    "M203.98 171.2 L203.98 171.2 Q180.62 171.2 162.46 162.48 Q144.3 153.76 133.9 136.64 Q123.5 119.52 123.5 94.4 L123.5 94.4 Q123.5 69.28 133.66 52.16 Q143.82 35.04 161.74 26.32 Q179.66 17.6 203.02 17.6 L203.02 17.6 Q226.86 17.6 242.86 27.12 Q258.86 36.64 266.94 52 Q275.02 67.36 275.02 84.8 L275.02 84.8 L144.94 84.8 L144.94 84.16 L221.26 84.16 Q221.1 72.96 220.62 61.44 Q220.14 49.92 218.38 40.08 Q216.62 30.24 212.94 24.24 Q209.26 18.24 203.02 18.24 L203.02 18.24 Q196.46 18.24 192.06 24.16 Q187.66 30.08 185.1 40.32 Q182.54 50.56 181.5 63.28 Q180.46 76 180.46 89.76 L180.46 89.76 Q180.46 106.08 181.9 120.4 Q183.34 134.72 186.94 145.52 Q190.54 156.32 197.18 162.48 Q203.82 168.64 214.38 168.64 L214.38 168.64 Q236.46 168.64 252.62 155.52 Q268.78 142.4 274.7 122.24 L274.7 122.24 L275.34 122.24 Q269.1 143.04 251.66 157.12 Q234.22 171.2 203.98 171.2",
  leftGlyph:
    "M96.02 171.2 L96.02 171.2 Q119.38 171.2 137.54 162.48 Q155.7 153.76 166.1 136.64 Q176.5 119.52 176.5 94.4 L176.5 94.4 Q176.5 69.28 166.34 52.16 Q156.18 35.04 138.26 26.32 Q120.34 17.6 96.98 17.6 L96.98 17.6 Q73.14 17.6 57.14 27.12 Q41.14 36.64 33.06 52 Q24.98 67.36 24.98 84.8 L24.98 84.8 L155.06 84.8 L155.06 84.16 L78.74 84.16 Q78.9 72.96 79.38 61.44 Q79.86 49.92 81.62 40.08 Q83.38 30.24 87.06 24.24 Q90.74 18.24 96.98 18.24 L96.98 18.24 Q103.54 18.24 107.94 24.16 Q112.34 30.08 114.9 40.32 Q117.46 50.56 118.5 63.28 Q119.54 76 119.54 89.76 L119.54 89.76 Q119.54 106.08 118.1 120.4 Q116.66 134.72 113.06 145.52 Q109.46 156.32 102.82 162.48 Q96.18 168.64 85.62 168.64 L85.62 168.64 Q63.54 168.64 47.38 155.52 Q31.22 142.4 25.3 122.24 L25.3 122.24 L24.66 122.24 Q30.9 143.04 48.34 157.12 Q65.78 171.2 96.02 171.2",
  rightTail: "M238 166 C252 176, 258 188, 252 197 C247 204, 236 204, 229 197",
  leftTail: "M62 166 C48 176, 42 188, 48 197 C53 204, 64 204, 71 197",
  dotRight: { cx: 254, cy: 200, r: 4.4 },
  dotLeft: { cx: 46, cy: 200, r: 4.4 },
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
      viewBox={monogramViewBox}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d={monogramPaths.rightGlyph} fill={fill} />
      <path d={monogramPaths.leftGlyph} fill={fill} />
      <path d={monogramPaths.rightTail} stroke={fill} strokeWidth={2} strokeLinecap="round" />
      <path d={monogramPaths.leftTail} stroke={fill} strokeWidth={2} strokeLinecap="round" />
      <circle {...monogramPaths.dotRight} fill={fill} />
      <circle {...monogramPaths.dotLeft} fill={fill} />
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
