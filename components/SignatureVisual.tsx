"use client";

import { motion, useReducedMotion } from "framer-motion";

export type SignatureType =
  | "facial"
  | "microneedling"
  | "waxing"
  | "nails"
  | "ipl"
  | "massage"
  | "pmu"
  | "grooming"
  | "hairmakeup"
  | "plasma"
  | "oils";

// A cohesive system of restrained, brand-coloured motion motifs, shown for
// treatment families that do not have an owner-supplied photograph yet
// (see TreatmentPhoto and LAUNCH-CHECKLIST.md). No stock imagery.
function Frame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-md bg-gradient-to-br from-silver via-white to-sage/15">
      {children}
    </div>
  );
}

export function SignatureVisual({ type, className }: { type: SignatureType; className?: string }) {
  const reduce = useReducedMotion();
  const repeat = reduce ? 0 : Infinity;

  switch (type) {
    case "facial":
      return (
        <div className={className}>
          <Frame>
            {[...Array(4)].map((_, i) => (
              <motion.span
                key={i}
                className="absolute rounded-full bg-sage/50 blur-[1px]"
                style={{
                  width: 14 + i * 6,
                  height: 18 + i * 8,
                  left: `${18 + i * 18}%`,
                }}
                initial={{ top: "-10%", opacity: 0 }}
                animate={{ top: "105%", opacity: [0, 0.8, 0.8, 0] }}
                transition={{ duration: 5 + i, repeat, delay: i * 0.9, ease: "easeIn" }}
              />
            ))}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.6),transparent_60%)]" />
          </Frame>
        </div>
      );

    case "microneedling":
      return (
        <div className={className}>
          <Frame>
            <svg viewBox="0 0 200 250" className="absolute inset-0 h-full w-full">
              {[...Array(6)].map((_, row) =>
                [...Array(5)].map((_, col) => {
                  const x = 25 + col * 38;
                  const y = 25 + row * 38;
                  return (
                    <motion.circle
                      key={`${row}-${col}`}
                      cx={x}
                      cy={y}
                      r={2.4}
                      fill="#677877"
                      initial={{ opacity: 0.15 }}
                      animate={{ opacity: [0.15, 0.7, 0.15] }}
                      transition={{ duration: 2.4, repeat, delay: (row + col) * 0.12 }}
                    />
                  );
                })
              )}
            </svg>
          </Frame>
        </div>
      );

    case "waxing":
      return (
        <div className={className}>
          <Frame>
            <motion.div
              className="absolute inset-x-6 top-1/2 h-16 -translate-y-1/2 rounded-full bg-gradient-to-r from-sage/70 via-sage-pale/90 to-sage/70"
              initial={{ scaleX: 0, opacity: 0.4 }}
              whileInView={{ scaleX: 1, opacity: 0.85 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: [0.16, 0.8, 0.3, 1] }}
              style={{ transformOrigin: "left" }}
            />
          </Frame>
        </div>
      );

    case "nails":
      return (
        <div className={className}>
          <Frame>
            <div className="absolute inset-0 bg-gradient-to-tr from-sage/40 to-silver" />
            <motion.div
              className="absolute -inset-y-10 w-24 -rotate-12 bg-charcoal/90"
              initial={{ left: "-30%" }}
              whileInView={{ left: "120%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 0.8, 0.3, 1] }}
            />
          </Frame>
        </div>
      );

    case "ipl":
      return (
        <div className={className}>
          <Frame>
            <div className="absolute inset-0 flex items-center justify-center">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="absolute h-24 w-24 rounded-full border border-sage-deep/50"
                  initial={{ scale: 0.4, opacity: 0.7 }}
                  animate={{ scale: 2.4, opacity: 0 }}
                  transition={{ duration: 2.6, repeat, delay: i * 0.7, ease: "easeOut" }}
                />
              ))}
              <span className="h-6 w-6 rounded-full bg-sage-deep/70" />
            </div>
          </Frame>
        </div>
      );

    case "massage":
      return (
        <div className={className}>
          <Frame>
            <div className="absolute inset-0 flex items-center justify-center">
              {[0, 1, 2, 3].map((i) => (
                <motion.span
                  key={i}
                  className="absolute rounded-full border border-charcoal/15"
                  style={{ width: 20, height: 20 }}
                  animate={{ width: [20, 220], height: [20, 220], opacity: [0.5, 0] }}
                  transition={{ duration: 3.5, repeat, delay: i * 0.85, ease: "easeOut" }}
                />
              ))}
            </div>
          </Frame>
        </div>
      );

    case "pmu":
      return (
        <div className={className}>
          <Frame>
            <svg viewBox="0 0 200 250" className="absolute inset-0 h-full w-full">
              {[...Array(9)].map((_, i) => (
                <motion.path
                  key={i}
                  d={`M ${60 + i * 9} 150 q 4 -${20 + (i % 3) * 6} 10 -38`}
                  fill="none"
                  stroke="#444A54"
                  strokeWidth={1.4}
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.75 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                />
              ))}
            </svg>
          </Frame>
        </div>
      );

    case "grooming":
      return (
        <div className={className}>
          <Frame>
            <svg viewBox="0 0 200 250" className="absolute inset-0 h-full w-full">
              <motion.path
                d="M 50 140 Q 100 90 150 140"
                fill="none"
                stroke="#677877"
                strokeWidth={5}
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              />
              <motion.circle
                cx={150}
                cy={140}
                r={5}
                fill="#A3BDB9"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1, duration: 0.4 }}
              />
            </svg>
          </Frame>
        </div>
      );

    case "hairmakeup":
      return (
        <div className={className}>
          <Frame>
            {[...Array(10)].map((_, i) => (
              <motion.span
                key={i}
                className="absolute h-1 w-1 rounded-full bg-sage-deep/60"
                style={{ left: `${(i * 37) % 90 + 5}%`, top: `${(i * 53) % 90 + 5}%` }}
                animate={{ opacity: [0.2, 0.9, 0.2], scale: [0.8, 1.3, 0.8] }}
                transition={{ duration: 2.2, repeat, delay: i * 0.15 }}
              />
            ))}
          </Frame>
        </div>
      );

    case "plasma":
      return (
        <div className={className}>
          <Frame>
            {[...Array(7)].map((_, i) => (
              <motion.span
                key={i}
                className="absolute h-1.5 w-1.5 rounded-full bg-charcoal/70"
                style={{ left: `${20 + i * 9}%`, top: `${40 + (i % 2) * 12}%` }}
                animate={{ opacity: [0.1, 1, 0.1] }}
                transition={{ duration: 1.4, repeat, delay: i * 0.18 }}
              />
            ))}
          </Frame>
        </div>
      );

    case "oils":
    default:
      return (
        <div className={className}>
          <Frame>
            <svg viewBox="0 0 200 250" className="absolute inset-0 h-full w-full opacity-70">
              <motion.path
                d="M100 40c30 40 55 70 55 100a55 55 0 1 1-110 0c0-30 25-60 55-100Z"
                fill="none"
                stroke="#677877"
                strokeWidth={1.6}
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4 }}
              />
            </svg>
            {[...Array(3)].map((_, i) => (
              <motion.span
                key={i}
                className="absolute h-2 w-1.5 rounded-full bg-sage/60"
                style={{ left: `${40 + i * 10}%`, top: "10%" }}
                animate={{ top: ["10%", "80%"], opacity: [0, 1, 0] }}
                transition={{ duration: 3.5, repeat, delay: i * 1.1 }}
              />
            ))}
          </Frame>
        </div>
      );
  }
}
