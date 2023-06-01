/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd1lfxha3ugu3d4.cloudfront.net',
      },
    ],
  },
  experimental: {
    appDir: true,
  },
  // https://github.com/kkomelin/isomorphic-dompurify/issues/54#issuecomment-1523500940
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.alias.canvas = false
    return config
  }
};

export default nextConfig;
