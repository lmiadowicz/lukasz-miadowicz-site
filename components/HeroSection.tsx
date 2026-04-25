"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Linkedin, Mail, Twitter, BookOpen, ChevronDown } from "lucide-react";
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
  "AI Product Leader.",
  "Head of AI Product.",
  "Senior AI PM.",
  "I own the AI roadmap.",
  "I ship 0→1 AI products.",
];

export function HeroSection() {
  const typed = useTypingEffect(TYPING_WORDS);

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0">
        <Image
          src={HERO_BG}
          alt=""
          fill
          className="object-cover opacity-40"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.1_0.005_265/0.3)] via-[oklch(0.1_0.005_265/0.6)] to-[oklch(0.1_0.005_265)]" />
      </div>
      <div className="absolute inset-0 dot-grid opacity-30" />

      <div className="container relative z-10 pt-24 pb-16">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="section-number">01 - Hello</span>
              <div className="h-px flex-1 max-w-16 bg-indigo-500/40" />
            </motion.div>

            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="hero-headline text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight mb-4 text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Łukasz Miądowicz
              <br />
              <span className="gradient-text">{typed}</span>
              <span className="text-indigo-400 animate-pulse">|</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="hero-subtitle text-lg text-zinc-400 mb-8 leading-relaxed"
            >
              <strong className="text-zinc-200">AI Product Leader · PhD Quantum Physics · Ex-Google SWE.</strong>{" "}
              My job shifted from &ldquo;what to build?&rdquo; to &ldquo;how should AI behave?&rdquo; - defining the character, knowledge, and capabilities of intelligent systems that solve problems no human process could.{" "}
              10+ years in product. $80M ARR scaled. UC Berkeley Haas.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-md transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25"
              >
                Work with me <ArrowRight size={16} />
              </a>
              <a
                href="#portfolio"
                className="flex items-center gap-2 px-6 py-3 border border-white/15 hover:border-white/30 text-zinc-300 hover:text-white font-medium rounded-md transition-all duration-200"
              >
                See my work
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
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

          {/* Right: profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="hidden md:flex justify-center items-center"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-indigo-600/25 blur-3xl scale-110" />
              <Image
                src={PROFILE_IMG}
                alt="Łukasz Miądowicz - AI Product Leader"
                width={400}
                height={400}
                className="relative w-72 h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 object-cover object-top rounded-full border-2 border-indigo-500/30 shadow-2xl"
                priority
              />
              <div className="absolute -bottom-3 -right-3 bg-[oklch(0.14_0.008_265)] border border-indigo-500/30 rounded-xl px-4 py-2.5 text-center shadow-xl">
                <div className="text-xs text-indigo-400 font-medium mb-0.5" style={{ fontFamily: "var(--font-mono)" }}>Open to</div>
                <div className="text-sm font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>Full-time roles</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-400 flex flex-col items-center gap-1"
      >
        <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "var(--font-mono)" }}>
          scroll
        </span>
        <ChevronDown size={16} className="animate-bounce" />
      </motion.div>
    </section>
  );
}
