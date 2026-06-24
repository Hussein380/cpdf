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

  // ─── Output ───────────────────────────────────────────────────────────────────
  // "standalone" bundles only what's needed — ideal for Vercel / Docker
  output: "standalone",

  // ─── Performance ──────────────────────────────────────────────────────────────
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["framer-motion", "lucide-react"],
  },

  // ─── Headers ──────────────────────────────────────────────────────────────────
  // Minimal headers here — full set is in vercel.json
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-DNS-Prefetch-Control", value: "on" },
        ],
      },
    ];
  },

  // ─── Redirects ────────────────────────────────────────────────────────────────
  // Canonical domain redirect — forces www → non-www in production
  async redirects() {
    return process.env.NODE_ENV === "production"
      ? [
          {
            source: "/(.*)",
            has: [{ type: "host", value: "www.cpdforum.org" }],
            destination: "https://cpdforum.org/:path*",
            permanent: true,
          },
        ]
      : [];
  },
};

export default nextConfig;
