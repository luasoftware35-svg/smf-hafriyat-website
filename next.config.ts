import type { NextConfig } from "next";

const CANONICAL_HOST = "www.smfhafriyat.com";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "smfhafriyat.com" }],
        destination: `https://${CANONICAL_HOST}/:path*`,
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
