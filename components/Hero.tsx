"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "./Button";
import { TrustStrip } from "./TrustStrip";
import { whatsappLink } from "@/data/business";
import { IconChat } from "./icons";

// No authentic clinic photography was supplied or reachable this session
// (see LAUNCH-CHECKLIST.md), so the hero uses an original, brand-coloured
// atmosphere in place of a photo — never a stock image of unrelated people
// or premises standing in for the real clinic.
export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative flex min-h-[92svh] flex-col overflow-hidden bg-white pt-8">
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          style={{ y: y1 }}
          className="absolute -left-24 top-[-10%] h-[420px] w-[420px] rounded-full bg-sage/30 blur-3xl"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute -right-32 top-[15%] h-[500px] w-[500px] rounded-full bg-silver blur-3xl"
        />
        <motion.div
          style={{ y: y1 }}
          className="absolute bottom-[-15%] left-1/3 h-[380px] w-[380px] rounded-full bg-sage-deep/10 blur-3xl"
        />
        <svg className="absolute inset-0 h-full w-full opacity-[0.35]" preserveAspectRatio="none">
          <defs>
            <pattern id="grain" width="3" height="3" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="0.5" fill="#444A54" opacity="0.05" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grain)" />
        </svg>
        {[...Array(3)].map((_, i) => (
          <motion.span
            key={i}
            className="serum-drop absolute rounded-b-full rounded-t-sm bg-sage/70"
            style={{ left: `${28 + i * 24}%`, width: 10, height: 14 }}
            initial={{ top: "-5%", opacity: 0 }}
            animate={{ top: "115%", opacity: [0, 0.6, 0.6, 0] }}
            transition={{ duration: 9 + i * 2, repeat: Infinity, delay: i * 2.4, ease: "linear" }}
          />
        ))}
      </div>

      <motion.div style={{ opacity }} className="container-x relative flex flex-1 flex-col justify-center py-20">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-label text-xs uppercase tracking-widest2 text-sage-deep md:text-sm"
        >
          Specialised Beauty Clinic • Middelburg
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 0.8, 0.3, 1] }}
          className="mt-5 max-w-3xl font-display text-4xl leading-[1.08] text-charcoal text-balance sm:text-5xl md:text-6xl lg:text-[4.2rem]"
        >
          The key to rejuvenation is rediscovering your glow.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-6 max-w-xl font-body text-base leading-relaxed text-charcoal/70 md:text-lg"
        >
          Personalised skincare, beauty treatments, and advanced cosmetic care — delivered with
          the kind of individual attention and quiet relaxation that turns a routine appointment
          into a considered ritual.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <Button
            href={whatsappLink("Hi Clinique Estique, I'd like to book an appointment.")}
            external
            icon={<IconChat className="h-4 w-4" />}
          >
            Book on WhatsApp
          </Button>
          <Button href="/treatments" variant="outline">
            Explore Treatments
          </Button>
          <Button href="/price-list" variant="ghost">
            View Price Lists
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="mt-14"
        >
          <TrustStrip />
        </motion.div>
      </motion.div>
    </section>
  );
}
