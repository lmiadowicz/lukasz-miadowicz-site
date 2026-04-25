"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Linkedin, Mail, Twitter } from "lucide-react";
import { sendContactMessage } from "@/app/actions/contact";

function SectionHeader({ num, label }: { num: string; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="section-number">{num} - {label}</span>
      <div className="h-px flex-1 max-w-16 bg-indigo-500/40" />
    </div>
  );
}

export function ContactSection() {
  const [state, formAction, isPending] = useActionState(sendContactMessage, {});
  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const [captchaError, setCaptchaError] = useState(false);
  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (state.success && successRef.current) {
      successRef.current.focus();
    }
  }, [state.success]);
  const [captcha, setCaptcha] = useState({ a: 3, b: 5, answer: 8 });

  useEffect(() => {
    const a = Math.floor(Math.random() * 9) + 1;
    const b = Math.floor(Math.random() * 9) + 1;
    setCaptcha({ a, b, answer: a + b });
  }, []);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    if (parseInt(captchaAnswer) !== captcha.answer) {
      e.preventDefault();
      setCaptchaError(true);
      const na = Math.floor(Math.random() * 9) + 1;
      const nb = Math.floor(Math.random() * 9) + 1;
      setCaptcha({ a: na, b: nb, answer: na + nb });
      setCaptchaAnswer("");
    }
  }

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="py-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 dot-grid opacity-15" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
      <div className="container relative">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <SectionHeader num="08" label="Contact" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Looking for an<br /><span className="gradient-text">AI Product Leader?</span>
          </h2>
          <p className="text-zinc-400">
            I&apos;m open to full-time AI Product Leader, Senior AI PM, and fractional roles.
            If you&apos;re building AI products and need someone who owns the roadmap end-to-end,
            I&apos;d like to hear about it.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          {state.success ? (
            <div ref={successRef} role="status" aria-live="assertive" aria-atomic="true" tabIndex={-1} className="text-center p-10 rounded-2xl border border-indigo-500/30 bg-indigo-600/10 outline-none">
              <div className="text-4xl mb-3" aria-hidden="true">✓</div>
              <h2 className="text-white font-semibold text-lg mb-2" style={{ fontFamily: "var(--font-display)" }}>Message sent successfully!</h2>
              <div className="text-zinc-400 text-sm">I&apos;ll get back to you within 24 hours.</div>
            </div>
          ) : (
            <form action={formAction} onSubmit={handleSubmit} className="space-y-4" aria-label="Contact form" noValidate>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs text-zinc-500 mb-1.5 uppercase tracking-wider" style={{ fontFamily: "var(--font-mono)" }}>
                    Name <span aria-hidden="true">*</span><span className="sr-only">(required)</span>
                  </label>
                  <input
                    id="contact-name" name="name" type="text" required autoComplete="name"
                    className="w-full px-4 py-3 rounded-lg bg-[oklch(0.14_0.008_265)] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500/60 transition-colors text-sm"
                    placeholder="Your name" aria-required="true"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-xs text-zinc-500 mb-1.5 uppercase tracking-wider" style={{ fontFamily: "var(--font-mono)" }}>
                    Email <span aria-hidden="true">*</span><span className="sr-only">(required)</span>
                  </label>
                  <input
                    id="contact-email" name="email" type="email" required autoComplete="email"
                    className="w-full px-4 py-3 rounded-lg bg-[oklch(0.14_0.008_265)] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500/60 transition-colors text-sm"
                    placeholder="you@company.com" aria-required="true"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-xs text-zinc-500 mb-1.5 uppercase tracking-wider" style={{ fontFamily: "var(--font-mono)" }}>
                  Message <span aria-hidden="true">*</span><span className="sr-only">(required)</span>
                </label>
                <textarea
                  id="contact-message" name="message" required rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-[oklch(0.14_0.008_265)] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500/60 transition-colors text-sm resize-none"
                  placeholder="Tell me about your project, timeline, and what you're looking for..."
                  aria-required="true"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-captcha" className="block text-xs text-zinc-500 uppercase tracking-wider" style={{ fontFamily: "var(--font-mono)" }}>
                  Spam check: What is {captcha.a} + {captcha.b}? <span aria-hidden="true">*</span><span className="sr-only">(required)</span>
                </label>
                <input
                  id="contact-captcha" type="number" required
                  value={captchaAnswer}
                  onChange={(e) => { setCaptchaAnswer(e.target.value); setCaptchaError(false); }}
                  className={`w-32 px-4 py-3 rounded-lg bg-[oklch(0.14_0.008_265)] border text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500/60 transition-colors text-sm ${captchaError ? "border-red-500/60 field-error" : "border-white/10"}`}
                  placeholder="?" aria-required="true"
                  aria-describedby={captchaError ? "captcha-error" : state.error ? "form-error" : undefined}
                  aria-invalid={captchaError}
                />
                {captchaError && (
                  <p id="captcha-error" role="alert" className="field-error-message">Incorrect answer - try again.</p>
                )}
              </div>
              {state.error && (
                <p id="form-error" role="alert" className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">
                  {state.error}
                </p>
              )}
              <button
                type="submit"
                disabled={isPending}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25"
              >
                {isPending ? "Sending…" : <> Send message <ArrowRight size={16} /> </>}
              </button>
            </form>
          )}
          <div className="mt-8 pt-6 border-t border-white/8 flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-500">
            <a href="mailto:l.miadowicz@gmail.com" className="flex items-center gap-2 hover:text-zinc-300 transition-colors">
              <Mail size={14} /> l.miadowicz@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/lukaszmiadowicz/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-zinc-300 transition-colors">
              <Linkedin size={14} /> LinkedIn
            </a>
            <a href="https://x.com/miadowicz" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-zinc-300 transition-colors">
              <Twitter size={14} /> @miadowicz
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
