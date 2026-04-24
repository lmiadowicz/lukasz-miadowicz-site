import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "d2xsxph8kpxj0f.cloudfront.net" },
      { protocol: "https", hostname: "d36hbw14aib5lz.cloudfront.net" },
      { protocol: "https", hostname: "bear-images.sfo2.cdn.digitaloceanspaces.com" },
    ],
  },
};

export default nextConfig;
