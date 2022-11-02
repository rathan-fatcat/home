// next.config.js

const accessDomains = process.env.NEXT_PUBLIC_ACCESS_IMAGES_DOMAINS || "";
const domains = accessDomains.split(",").filter((a)=>a);
const nextConfig = {
  compress: true,
  swcMinify: true,
  eslint: {
    dirs: ['src'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  images: {
    domains
  },
  webpack(config, { isServer }) {
    if (isServer) {
      require('./scripts/generate-sitemap');
    }
    return config;
  },
};

module.exports = nextConfig;
