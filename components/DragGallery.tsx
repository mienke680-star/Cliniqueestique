"use client";

import { useRef } from "react";

export function DragGallery({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const state = useRef({ down: false, startX: 0, startScroll: 0 });

  function onDown(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    state.current = { down: true, startX: e.pageX, startScroll: el.scrollLeft };
  }
  function onMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el || !state.current.down) return;
    el.scrollLeft = state.current.startScroll - (e.pageX - state.current.startX);
  }
  function stop() {
    state.current.down = false;
  }

  return (
    <div
      ref={ref}
      onMouseDown={onDown}
      onMouseMove={onMove}
      onMouseUp={stop}
      onMouseLeave={stop}
      className={`scrollbar-thin flex snap-x snap-mandatory gap-5 overflow-x-auto pb-6 pt-1 [-webkit-overflow-scrolling:touch] cursor-grab active:cursor-grabbing ${className}`}
    >
      {children}
    </div>
  );
}
