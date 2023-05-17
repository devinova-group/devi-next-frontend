const withSvgr = require("next-svgr");



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
module.exports = withSvgr({
  // your config for other plugins or the general next.js here...
});