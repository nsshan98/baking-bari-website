import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
   remotePatterns: [
    {
      protocol: 'https',
      hostname: 'cdn.pixabay.com',
      port: '',
      search: '',
    }
   ]
  }
};

export default nextConfig;
