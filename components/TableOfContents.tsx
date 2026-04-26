"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronRight } from "lucide-react";

export interface TocHeading {
  id: string;
  text: string;
  level: 2 | 3;
}

export function TableOfContents({ headings }: { headings: TocHeading[] }) {
  const [activeId, setActiveId] = useState<string>("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!headings.length) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: "0px 0px -70% 0px", threshold: 0 }
    );

    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observerRef.current!.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, [headings]);

  if (!headings.length) return null;

  const items = (
    <ul className="space-y-1.5" role="list">
      {headings.map((h) => (
        <li key={h.id}>
          <a
            href={`#${h.id}`}
            onClick={() => setMobileOpen(false)}
            className={`block text-[13px] leading-snug transition-colors duration-150 ${
              h.level === 3 ? "pl-3 border-l border-white/10" : ""
            } ${
              activeId === h.id
                ? "text-indigo-400 font-medium"
                : "text-zinc-500 hover:text-zinc-300"
            }`}
          >
            {h.text}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      {/* Desktop sticky sidebar */}
      <nav
        aria-label="Table of contents"
        className="hidden xl:block sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pr-2"
      >
        <p className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest mb-4">
          On this page
        </p>
        {items}
      </nav>

      {/* Mobile collapsible */}
      <div className="xl:hidden mb-8 rounded-xl border border-white/8 bg-[oklch(0.13_0.007_265)] overflow-hidden">
        <button
          onClick={() => setMobileOpen((o) => !o)}
          className="flex items-center justify-between w-full px-4 py-3.5 text-sm text-zinc-300 hover:text-white transition-colors"
          aria-expanded={mobileOpen}
        >
          <span className="font-medium">Table of contents</span>
          <ChevronRight
            size={14}
            className={`text-zinc-500 transition-transform duration-200 ${mobileOpen ? "rotate-90" : ""}`}
            aria-hidden="true"
          />
        </button>
        {mobileOpen && <div className="px-4 pb-4">{items}</div>}
      </div>
    </>
  );
}
