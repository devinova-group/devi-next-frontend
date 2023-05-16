const withSvgr = require("next-svgr");



const nextConfig = {
  reactStrictMode: true,
  distDir: "build",
};
module.exports = nextConfig;
module.exports = withSvgr({
  // your config for other plugins or the general next.js here...
});