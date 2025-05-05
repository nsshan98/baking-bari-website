import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
        port: "",
        search: "",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co.com",
        port: "",
        search: "",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        search: "",
      },
    ],
  },
};

export default nextConfig;
