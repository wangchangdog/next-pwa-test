/** @type {import('next').NextConfig} */

const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
});

module.exports = withPWA({
  reactStrictMode: true,
  pwa: {
    register: true,
    scope: "/",
    sw: "service-worker.js",
    dest: "public",
  },
});
