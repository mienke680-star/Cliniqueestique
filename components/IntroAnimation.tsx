"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { BrandLogo, LogoMark } from "./Logo";


const EASE = [0.16, 0.8, 0.3, 1] as const;
const AUTO_ADVANCE_MS = 4200;
const REDUCED_AUTO_ADVANCE_MS = 1500;

// Small decorative hints of the treatment world — glass serum bottle, warm
// wax ribbon, essential-oil droplet, nail-polish stroke, and a soft IPL
// light pulse. Simple, restrained line icons; not literal product photos.
function HintIcons() {
  const items = [
    {
      label: "Serum",
      node: (
        <path d="M10 2h6v4l3 4v14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V10l3-4V2Z" />
      ),
    },
    {
      label: "Waxing ribbon",
      node: <path d="M3 12c4-6 8-6 10-2s6 4 10-2" />,
    },
    {
      label: "Essential oil droplet",
      node: <path d="M14 3c4 5 7 9 7 12.5A7 7 0 1 1 7 15.5C7 12 10 8 14 3Z" />,
    },
    {
      label: "Nail polish stroke",
      node: <path d="M4 20c4-8 8-12 16-16" />,
    },
    {
      label: "IPL light pulse",
      node: (
        <>
          <circle cx="14" cy="14" r="3" />
          <path d="M14 3v4M14 21v4M3 14h4M21 14h4M6 6l3 3M20 6l-3 3M6 22l3-3M20 22l-3-3" />
        </>
      ),
    },
  ];
  return (
    <div className="flex items-center justify-center gap-6 md:gap-9">
      {items.map((item, i) => (
        <motion.svg
          key={item.label}
          role="img"
          aria-label={item.label}
          viewBox="0 0 28 28"
          className="h-5 w-5 text-sage-deep md:h-6 md:w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.4}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ delay: 2.85 + i * 0.08, duration: 0.5, ease: EASE }}
        >
          {item.node}
        </motion.svg>
      ))}
    </div>
  );
}

export function IntroAnimation({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onDone, AUTO_ADVANCE_MS);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-paper via-silver to-sage-pale/60"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.7, ease: EASE } }}
    >
      {/* slow calming light movement */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -inset-32 rounded-full bg-[radial-gradient(circle,rgba(163,189,185,0.35),transparent_65%)]"
        initial={{ x: -40, y: -20, scale: 0.9 }}
        animate={{ x: 30, y: 20, scale: 1.05 }}
        transition={{ duration: 4.2, ease: "easeInOut" }}
      />

      <button
        onClick={onDone}
        className="absolute right-5 top-5 z-10 rounded-full border border-charcoal/20 px-4 py-2 font-label text-xs uppercase tracking-widest2 text-charcoal/70 transition hover:border-charcoal/50 hover:text-charcoal md:right-8 md:top-8"
      >
        Skip intro
      </button>

      <div className="relative flex flex-col items-center">
        {/* invisible-pen reveal: a soft ink wipe uncovers the real
            monogram left to right, as though it's being drawn on */}
        <div className="relative h-24 md:h-32">
          <motion.div
            className="h-24 overflow-hidden md:h-32"
            style={{ aspectRatio: 216.08 / 129.85 }}
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 1.6, ease: EASE, delay: 0.2 }}
          >
            <LogoMark className="h-full w-full text-charcoal" />
          </motion.div>
          <motion.div
            aria-hidden
            className="pointer-events-none absolute top-0 h-24 w-1 bg-gradient-to-b from-transparent via-sage-deep/70 to-transparent md:h-32"
            initial={{ left: "0%", opacity: 1 }}
            animate={{ left: "100%", opacity: [1, 1, 0] }}
            transition={{ duration: 1.6, ease: EASE, delay: 0.2, times: [0, 0.85, 1] }}
          />
        </div>

        <motion.div
          className="mt-5 text-center"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 2.15 }}
        >
          <BrandLogo variant="wordmark" className="h-7 text-charcoal md:h-9" />
          <p className="mt-2 font-label text-xs uppercase tracking-widest2 text-sage-deep md:text-sm">
            Specialised Beauty Clinic
          </p>
        </motion.div>

        {/* serum droplet fall + ripple */}
        <div className="relative mt-6 h-10 w-10">
          <motion.div
            className="serum-drop absolute left-1/2 top-0 h-3 w-2.5 -translate-x-1/2 rounded-b-full rounded-t-sm bg-sage"
            initial={{ y: -18, opacity: 0 }}
            animate={{ y: [-18, 22], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 0.9, delay: 2.55, ease: "easeIn", times: [0, 0.6, 0.85, 1] }}
          />
          <motion.span
            className="absolute left-1/2 top-[26px] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-sage-deep/60"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 4, opacity: [0, 0.6, 0] }}
            transition={{ duration: 1, delay: 3.35, ease: "easeOut" }}
          />
        </div>

        <div className="mt-2">
          <HintIcons />
        </div>
      </div>
    </motion.div>
  );
}

export function ReducedMotionIntro({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onDone, REDUCED_AUTO_ADVANCE_MS);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-paper"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <button
        onClick={onDone}
        className="absolute right-5 top-5 rounded-full border border-charcoal/20 px-4 py-2 font-label text-xs uppercase tracking-widest2 text-charcoal/70"
      >
        Skip intro
      </button>
      <LogoMark className="h-20 text-charcoal" />
      <BrandLogo variant="wordmark" className="mt-5 h-7 text-charcoal" />
      <p className="mt-1 font-label text-xs uppercase tracking-widest2 text-sage-deep">
        Specialised Beauty Clinic
      </p>
    </motion.div>
  );
}
