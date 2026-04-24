"use client";

import { useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { MotionConfig } from "framer-motion";
import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";

function init() {
  if (typeof window === "undefined") return;
  if (!process.env.NEXT_PUBLIC_POSTHOG_KEY) return;
  if (posthog.__loaded) return;
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: "https://eu.i.posthog.com",
    person_profiles: "identified_only",
    persistence: "memory",        // cookieless — no consent banner needed
    capture_pageview: false,      // we track manually below (App Router)
    capture_pageleave: true,
  });
}

function PageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = window.location.origin + pathname +
      (searchParams.toString() ? `?${searchParams.toString()}` : "");
    posthog.capture("$pageview", { $current_url: url });
  }, [pathname, searchParams]);

  return null;
}

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => { init(); }, []);

  return (
    <PHProvider client={posthog}>
      <MotionConfig reducedMotion="user">
        <Suspense fallback={null}>
          <PageView />
        </Suspense>
        {children}
      </MotionConfig>
    </PHProvider>
  );
}
