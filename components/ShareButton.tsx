"use client";

import { Share2 } from "lucide-react";

export function ShareButton({ url }: { url: string }) {
  return (
    <button
      onClick={() => navigator.clipboard?.writeText(url)}
      className="inline-flex items-center gap-1.5 px-3 py-2 min-h-[44px] text-xs text-zinc-400 hover:text-zinc-200 transition-colors rounded-md hover:bg-white/5"
      aria-label="Copy link to this article"
      title="Copy link"
    >
      <Share2 size={13} aria-hidden="true" /> Share
    </button>
  );
}
