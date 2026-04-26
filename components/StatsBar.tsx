"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function AnimatedCounter({ target, prefix = "", suffix = "" }: { target: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let frame = 0;
    const total = 60;
    const timer = setInterval(() => {
      frame++;
      const progress = frame / total;
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (frame >= total) clearInterval(timer);
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
}

const STATS = [
  { prefix: "$", target: 80, suffix: "M",  label: "ARR scaled",          context: "multi-product portfolio",      glow: "shadow-emerald-500/20" },
  { prefix: "",  target: 98, suffix: "%",  label: "Task time reduction",  context: "4 hours → 5 minutes",          glow: "shadow-indigo-500/20"  },
  { prefix: "+", target: 80, suffix: "%",  label: "Conversion increase",  context: "AI personalisation layer",     glow: "shadow-violet-500/20"  },
  { prefix: "",  target: 3,  suffix: "×",  label: "Capacity increase",    context: "same headcount",               glow: "shadow-blue-500/20"    },
  { prefix: "$", target: 191, suffix: "",  label: "Net savings / task",   context: "1.3-year payback period",      glow: "shadow-rose-500/20"    },
];

export function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative py-14 border-y border-white/5 bg-[oklch(0.12_0.006_265)] overflow-hidden"
      aria-label="Key impact metrics"
    >
      {/* Subtle radial glow behind numbers */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, oklch(0.2 0.04 265 / 0.15), transparent)" }}
        aria-hidden
      />

      <div className="container relative">
        <dl className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-4">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              className="text-center flex flex-col items-center group"
            >
              <dd
                className={`text-3xl md:text-4xl font-bold text-white mb-1.5 tabular-nums drop-shadow-lg group-hover:drop-shadow-2xl transition-all duration-300 ${s.glow}`}
                style={{ fontFamily: "var(--font-display)" }}
              >
                <AnimatedCounter prefix={s.prefix} target={s.target} suffix={s.suffix} />
              </dd>
              <dt className="text-xs font-semibold text-zinc-300 mb-0.5 leading-tight">{s.label}</dt>
              <span
                className="text-xs text-zinc-600 leading-tight"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {s.context}
              </span>
            </motion.div>
          ))}
        </dl>
      </div>
    </motion.section>
  );
}
