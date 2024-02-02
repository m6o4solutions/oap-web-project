/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "res.cloudinary.com",
			},
			{
				protocol: "https",
				hostname: "media.graphassets.com",
			},
			{
				protocol: "https",
				hostname: "openweathermap.org",
			},
		],
	},
};

module.exports = nextConfig;
