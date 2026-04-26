"use client";

import { useEffect, useState } from "react";

export function ReadingProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total <= 0) return;
      setPct(Math.min(100, (scrolled / total) * 100));
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[200] h-[2px] pointer-events-none" aria-hidden="true">
      <div
        className="h-full bg-gradient-to-r from-indigo-500 to-indigo-400"
        style={{ width: `${pct}%`, opacity: pct > 0.5 ? 1 : 0 }}
      />
    </div>
  );
}
