"use client";

import { useEffect, useRef } from "react";

export function CursorLight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const capable = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!capable || reduced) return;

    document.documentElement.classList.add("can-hover");
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    function handleMove(e: MouseEvent) {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el!.style.setProperty("--x", `${e.clientX}px`);
        el!.style.setProperty("--y", `${e.clientY}px`);
      });
    }
    window.addEventListener("mousemove", handleMove);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={ref} className="cursor-light" aria-hidden="true" />;
}
