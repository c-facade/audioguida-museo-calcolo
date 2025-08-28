/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
  images: {
    unoptimized: true,
		/*remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd1lfxha3ugu3d4.cloudfront.net',
			},
		],*/
	},
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.alias.canvas = false
    return config
  }
};


export default nextConfig;
