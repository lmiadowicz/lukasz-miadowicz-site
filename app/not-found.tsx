import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[oklch(0.1_0.005_265)] flex items-center justify-center">
      <div className="text-center px-4">
        <div className="text-8xl font-bold text-indigo-500/30 mb-4" style={{ fontFamily: "var(--font-display)" }}>
          404
        </div>
        <h1 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-display)" }}>
          Page not found
        </h1>
        <p className="text-zinc-400 mb-8 max-w-sm mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link
            href="/"
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-md transition-all duration-200"
          >
            Go home
          </Link>
          <Link
            href="/blog"
            className="px-6 py-3 border border-white/15 hover:border-white/30 text-zinc-300 hover:text-white font-medium rounded-md transition-all duration-200"
          >
            Read blog
          </Link>
        </div>
      </div>
    </div>
  );
}
