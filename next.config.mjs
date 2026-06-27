/** @type {import('next').NextConfig} */
const nextConfig = {
  // ─── Images ──────────────────────────────────────────────────────────────────
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" },
    ],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 3600,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },

  // ─── Compiler ─────────────────────────────────────────────────────────────────
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // ─── Performance ──────────────────────────────────────────────────────────────
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["framer-motion", "lucide-react"],
  },
};

export default nextConfig;
