import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */ 
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "res.cloudinary.com",
        pathname: "/dsvcr6xza/image/upload/**",
      },
    ],
  },
  
};

export default nextConfig;
