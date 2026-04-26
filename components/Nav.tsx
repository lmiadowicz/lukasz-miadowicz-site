"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const links = [
  { label: "About", href: "/about" },
  { label: "Hire Me", href: "/fractional" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Speaking", href: "/speaking" },
  { label: "Books", href: "/books" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      const first = menuRef.current?.querySelector<HTMLElement>("a, button");
      first?.focus();
    }
  }, [menuOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!menuOpen) return;
      if (e.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (e.key === "Tab" && menuRef.current) {
        const focusable = Array.from(
          menuRef.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled])")
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last?.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first?.focus();
          }
        }
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [menuOpen]);

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[oklch(0.09_0.006_265/0.92)] backdrop-blur-xl shadow-[0_1px_0_0_oklch(1_0_0/0.06)]"
          : "bg-transparent"
      }`}
    >
      <div
        className={`transition-all duration-500 overflow-hidden border-b border-indigo-500/20 bg-indigo-600/10 ${
          scrolled ? "h-0 opacity-0" : "h-10 opacity-100"
        }`}
      >
        <div className="container flex items-center justify-between h-10">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-[12px] text-zinc-300 font-medium">
              Open to{" "}
              <span className="text-indigo-300 font-semibold">full-time AI Product Leader</span>
              <span className="text-zinc-400 mx-1">·</span>
              <span className="text-indigo-300 font-semibold">Senior AI PM</span>
              <span className="text-zinc-400 mx-1">·</span>
              <span className="text-indigo-300 font-semibold">fractional &amp; advisory</span>
              <span className="text-zinc-400"> roles</span>
            </span>
          </div>
          <a
            href="/#contact"
            className="hidden md:flex items-center gap-1.5 text-[12px] text-indigo-400 hover:text-indigo-300 font-semibold transition-colors"
          >
            Get in touch <ArrowRight size={11} />
          </a>
        </div>
      </div>

      <div className="container flex items-center justify-between h-14">
        <Link href="/" className="group flex items-center gap-1" aria-label="miadowicz home">
          <span className="font-bold text-[22px] text-white tracking-tight leading-none" style={{ fontFamily: "var(--font-display)" }}>
            miadowicz
          </span>
          <span className="text-indigo-400 text-[26px] font-bold leading-none group-hover:text-indigo-300 transition-colors" style={{ fontFamily: "var(--font-display)" }}>
            .
          </span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-1 bg-white/[0.04] border border-white/[0.08] rounded-full px-2 py-1.5 backdrop-blur-sm">
          {links.map((l) =>
            l.href.startsWith("/") && !l.href.startsWith("/#") ? (
              <Link
                key={l.href}
                href={l.href}
                className="px-4 py-1.5 text-[13px] text-zinc-400 hover:text-white hover:bg-white/[0.07] rounded-full transition-all duration-200 font-medium"
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.href}
                href={l.href}
                className="px-4 py-1.5 text-[13px] text-zinc-400 hover:text-white hover:bg-white/[0.07] rounded-full transition-all duration-200 font-medium"
              >
                {l.label}
              </a>
            )
          )}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/lukaszmiadowicz/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href="/#contact"
            className="flex items-center gap-2 text-[13px] font-semibold px-5 py-2 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-0.5"
          >
            Let&apos;s talk <ArrowRight size={13} />
          </a>
        </div>

        <button
          ref={toggleRef}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 text-zinc-400 hover:text-white"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span className={`block h-[1.5px] w-5 bg-current transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[5px]" : ""}`} />
          <span className={`block h-[1.5px] w-5 bg-current transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
          <span className={`block h-[1.5px] w-5 bg-current transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[5px]" : ""}`} />
        </button>
      </div>

      <motion.div
        ref={menuRef}
        id="mobile-menu"
        role="navigation"
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
        initial={false}
        animate={menuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="md:hidden overflow-hidden bg-[oklch(0.1_0.006_265/0.98)] backdrop-blur-xl border-b border-white/5"
      >
        <div className="container py-5 space-y-1">
          {links.map((l) =>
            l.href.startsWith("/") && !l.href.startsWith("/#") ? (
              <Link
                key={l.href}
                href={l.href}
                className="flex items-center justify-between py-3 px-4 rounded-xl text-zinc-300 hover:text-white hover:bg-white/5 transition-all"
                onClick={() => setMenuOpen(false)}
              >
                <span className="font-medium">{l.label}</span>
                <ArrowRight size={14} className="text-zinc-400" />
              </Link>
            ) : (
              <a
                key={l.href}
                href={l.href}
                className="flex items-center justify-between py-3 px-4 rounded-xl text-zinc-300 hover:text-white hover:bg-white/5 transition-all"
                onClick={() => setMenuOpen(false)}
              >
                <span className="font-medium">{l.label}</span>
                <ArrowRight size={14} className="text-zinc-400" />
              </a>
            )
          )}
          <div className="pt-3 border-t border-white/5">
            <a
              href="/#contact"
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-indigo-600 text-white font-semibold text-sm"
              onClick={() => setMenuOpen(false)}
            >
              Let&apos;s talk <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </motion.div>
    </header>
  );
}
