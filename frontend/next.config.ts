import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  reactStrictMode: true,
  // Disable the App Router so only your `pages/` folder is used
  appDir: false,

};

export default nextConfig;
