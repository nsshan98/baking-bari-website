import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
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
