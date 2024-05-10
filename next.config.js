/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      net: false,
      emitter: false,
      tls: false,
    };

    return config;
  },
};

module.exports = nextConfig;
