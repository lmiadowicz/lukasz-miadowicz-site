"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Linkedin, Mail, Twitter, BookOpen, ChevronDown, TrendingUp, Zap, GraduationCap, Code2 } from "lucide-react";
import Image from "next/image";

const HERO_BG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663586308671/LgBonsnnKaw8XvNGJedAgJ/hero-abstract-95fKZrv7oG6ADjNnuBmm7U.webp";
const PROFILE_IMG = "/avatars/lukasz.png";

function useTypingEffect(words: string[], speed = 80, pause = 2200) {
  const [displayed, setDisplayed] = useState(words[0]);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(words[0].length);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex((i) => i + 1), speed);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((i) => i - 1), speed / 2);
    } else {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    }
    setDisplayed(current.slice(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex, words, speed, pause]);

  return displayed;
}

const TYPING_WORDS = [
  "who defines what gets built.",
  "who turns signals into strategy.",
  "who aligns AI with business goals.",
  "built $80M ARR.",
  "who ships AI that moves metrics.",
];

const CREDENTIALS = [
  { Icon: TrendingUp, label: "$80M ARR scaled", cls: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400" },
  { Icon: Zap,        label: "98% task time cut", cls: "border-indigo-500/30 bg-indigo-500/10 text-indigo-400" },
  { Icon: GraduationCap, label: "PhD Quantum Physics", cls: "border-violet-500/30 bg-violet-500/10 text-violet-400" },
  { Icon: Code2,      label: "Ex-Google SWE", cls: "border-blue-500/30 bg-blue-500/10 text-blue-400" },
];

export function HeroSection() {
  const typed = useTypingEffect(TYPING_WORDS);

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={HERO_BG}
          alt=""
          fill
          className="object-cover opacity-30"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.1_0.005_265/0.4)] via-[oklch(0.1_0.005_265/0.75)] to-[oklch(0.1_0.005_265)]" />
      </div>
      <div className="absolute inset-0 dot-grid opacity-20" />

      <div className="container relative z-10 pt-24 pb-20">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left: copy ── */}
          <div>
            {/* Open-to-work pill */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 mb-7"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs text-emerald-400 font-medium">Open to full-time &amp; fractional roles</span>
            </motion.div>

            {/* Name — always visible, slides in */}
            <motion.h1
              id="hero-heading"
              initial={{ opacity: 1, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.0] tracking-tight mb-4 text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Łukasz<br />Miądowicz
            </motion.h1>

            {/* Role + typing completion */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="mb-7"
            >
              <p className="text-xl md:text-2xl font-semibold text-zinc-200 leading-snug mb-1" style={{ fontFamily: "var(--font-display)" }}>
                AI Product Leader
              </p>
              <p className="text-lg text-zinc-500">
                <span className="gradient-text font-medium">{typed}</span>
                <span className="text-indigo-400 animate-pulse">|</span>
              </p>
            </motion.div>

            {/* Credential chips */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.6 }}
              className="flex flex-wrap gap-2 mb-7"
            >
              {CREDENTIALS.map(({ Icon, label, cls }) => (
                <span
                  key={label}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full border ${cls}`}
                >
                  <Icon size={11} aria-hidden />
                  {label}
                </span>
              ))}
            </motion.div>

            {/* One-line positioning */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.34, duration: 0.7 }}
              className="text-zinc-400 leading-relaxed mb-9 max-w-md"
            >
              I own the AI roadmap end-to-end — strategy, prototype, ship.
              I build the first version myself in Claude Code, get C-suite buy-in,
              then lead the team to production.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.42, duration: 0.6 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-md transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25"
              >
                Work with me <ArrowRight size={16} />
              </a>
              <a
                href="#work"
                className="flex items-center gap-2 px-6 py-3 border border-white/15 hover:border-white/30 text-zinc-300 hover:text-white font-medium rounded-md transition-all duration-200"
              >
                See my impact
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.58, duration: 0.6 }}
              className="flex items-center gap-5"
              role="list"
              aria-label="Social links"
            >
              {[
                { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/lukaszmiadowicz/", label: "LinkedIn profile", me: true },
                { icon: <Twitter size={18} />, href: "https://x.com/miadowicz", label: "X (Twitter) profile", me: true },
                { icon: <Mail size={18} />, href: "mailto:l.miadowicz@gmail.com", label: "Send email", me: false },
                { icon: <BookOpen size={18} />, href: "https://miadowicz.com/blog", label: "Blog", me: false },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={s.href.startsWith("mailto") ? undefined : s.me ? "noopener noreferrer me" : "noopener noreferrer"}
                  aria-label={s.label}
                  role="listitem"
                  className="text-zinc-500 hover:text-indigo-400 transition-colors duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </motion.div>
          </div>

          {/* ── Right: photo + badges ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.45, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="hidden md:flex justify-center items-center"
          >
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-indigo-600/20 blur-3xl scale-110" />

              {/* Photo */}
              <Image
                src={PROFILE_IMG}
                alt="Łukasz Miądowicz — AI Product Leader"
                width={400}
                height={400}
                className="relative w-72 h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 object-cover object-top rounded-full border-2 border-indigo-500/30 shadow-2xl"
                priority
              />

              {/* Award badge — bottom-left */}
              <div className="absolute -bottom-4 -left-6 bg-[oklch(0.14_0.008_265)] border border-yellow-500/30 rounded-xl px-4 py-2.5 shadow-xl backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <span className="text-xl leading-none" aria-hidden>🏆</span>
                  <div>
                    <div className="text-white text-xs font-semibold leading-tight">AI Leadership Award</div>
                    <div className="text-zinc-500 text-xs">Tiugo · 2025</div>
                  </div>
                </div>
              </div>

              {/* Building badge — top-right */}
              <div className="absolute -top-2 -right-4 bg-[oklch(0.14_0.008_265)] border border-indigo-500/30 rounded-xl px-3 py-2 shadow-xl backdrop-blur-sm">
                <div className="flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" />
                  </span>
                  <span className="text-indigo-400 text-xs font-medium">Building with Claude</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-zinc-700 pointer-events-none"
          aria-hidden
        >
          <span className="text-xs" style={{ fontFamily: "var(--font-mono)" }}>scroll</span>
          <ChevronDown size={16} className="animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
