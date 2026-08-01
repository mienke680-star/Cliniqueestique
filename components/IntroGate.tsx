"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IntroAnimation, ReducedMotionIntro } from "./IntroAnimation";

const STORAGE_KEY = "ce-intro-seen";

export function IntroGate({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);
  const [showIntro, setShowIntro] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const seen = typeof window !== "undefined" && sessionStorage.getItem(STORAGE_KEY) === "true";
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setReducedMotion(prefersReduced);
    setShowIntro(!seen);
    setReady(true);
  }, []);

  function finishIntro() {
    try {
      sessionStorage.setItem(STORAGE_KEY, "true");
    } catch {
      // sessionStorage unavailable — still proceed
    }
    setShowIntro(false);
  }

  if (!ready) {
    // Avoid a flash of content before we know intro state; renders instantly.
    return <div aria-hidden className="min-h-screen bg-white" />;
  }

  return (
    <>
      <AnimatePresence>
        {showIntro &&
          (reducedMotion ? (
            <ReducedMotionIntro key="intro" onDone={finishIntro} />
          ) : (
            <IntroAnimation key="intro" onDone={finishIntro} />
          ))}
      </AnimatePresence>
      <motion.div
        initial={showIntro ? { opacity: 0 } : false}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: showIntro ? 0 : 0 }}
      >
        {children}
      </motion.div>
    </>
  );
}
