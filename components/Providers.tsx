"use client";

import { useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { MotionConfig } from "framer-motion";
import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";

// Initialize at module load time (client only) so posthog is ready
// before any useEffect pageview capture runs.
if (typeof window !== "undefined" && process.env.NEXT_PUBLIC_POSTHOG_KEY && !posthog.__loaded) {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: "https://eu.i.posthog.com",
    person_profiles: "identified_only",
    persistence: "memory",        // cookieless — no consent banner needed
    capture_pageview: false,      // tracked manually below (App Router)
    capture_pageleave: true,
  });
}

function PageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!posthog.__loaded) return;
    const url = window.location.origin + pathname +
      (searchParams.toString() ? `?${searchParams.toString()}` : "");
    posthog.capture("$pageview", { $current_url: url });
  }, [pathname, searchParams]);

  return null;
}

export function Providers({ children }: { children: React.ReactNode }) {
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
