/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	i18n: {
		locales: ['it', 'en', 'fr'],
		defaultLocale: 'it',
	},
  images: {
    unoptimized: true,
	},
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.alias.canvas = false
    return config
  }
};


export default nextConfig;
