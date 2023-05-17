/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: "build",
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: '@svgr/webpack'
    })
    return config
  },
  images: {
    remotePatterns: [{
      protocol: "https",
      hostname: "res.cloudinary.com",
      port: "",
    }, ],
  },
};

module.exports = nextConfig;