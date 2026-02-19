/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rrudbk.liora.business",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;