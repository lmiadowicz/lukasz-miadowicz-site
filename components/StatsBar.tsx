"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(value / (1500 / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 80, suffix: "M", label: "ARR scaled" },
  { value: 98, suffix: "%", label: "Task time reduction" },
  { value: 3, suffix: "×", label: "Capacity increase" },
  { value: 10, suffix: "+", label: "Years in Product" },
];

export function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="border-y border-white/5 bg-[oklch(0.12_0.006_265)]"
    >
      <div className="container py-10">
        <dl className="grid grid-cols-2 md:grid-cols-4 gap-8" aria-label="Key metrics">
          {stats.map((s) => (
            <div key={s.label} className="text-center flex flex-col">
              <dt className="text-sm text-zinc-500 order-2">{s.label}</dt>
              <dd
                className="text-3xl md:text-4xl font-bold text-white mb-1 order-1"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </motion.section>
  );
}
