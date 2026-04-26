"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

const COMPANIES = [
  "Google for Startups",
  "Tiugo · ButterCMS",
  "Qtravel.ai",
  "AirHelp",
  "Huuuge Games",
];

export function TrustBar() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="border-y border-white/5 bg-[oklch(0.115_0.006_265)] py-5"
      aria-label="Companies and recognition"
    >
      <div className="container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 flex-wrap">

          {/* Company list */}
          <div className="flex items-center gap-3 flex-wrap justify-center sm:justify-start">
            <span
              className="text-xs text-zinc-600 uppercase tracking-widest shrink-0"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Previously at
            </span>
            {COMPANIES.map((name, i) => (
              <span key={name} className="flex items-center gap-3">
                <span className="text-sm font-medium text-zinc-400 hover:text-zinc-200 transition-colors cursor-default">
                  {name}
                </span>
                {i < COMPANIES.length - 1 && (
                  <span className="text-zinc-700 text-xs" aria-hidden>·</span>
                )}
              </span>
            ))}
          </div>

          {/* Award pill */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-yellow-500/20 bg-yellow-500/5 shrink-0">
            <Trophy size={12} className="text-yellow-400" aria-hidden />
            <span className="text-yellow-400/80 text-xs font-medium whitespace-nowrap">
              AI Leadership Spotlight 2025 · Unsung Hero 2025
            </span>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
