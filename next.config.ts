import type { NextConfig } from "next";

const config: NextConfig = {
	cacheComponents: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "cdn.discordapp.com",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "media.discordapp.com",
				port: "",
				pathname: "/**",
			},
		],
	},
	async headers() {
		return [
			{
				source: "/(.*)",
				headers: [
					{ key: "X-Frame-Options", value: "DENY" },
					{ key: "X-Content-Type-Options", value: "nosniff" },
					{ key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
					{ key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
				],
			},
		];
	},
	async redirects() {
		return [
			{
				source: "/invite",
				destination: "https://discord.com/oauth2/authorize?client_id=1352131392993230869",
				permanent: true,
			},
			{
				source: "/discord",
				destination: "https://discord.gg/cpT6Ycehv9",
				permanent: true,
			},
			{
				source: "/vote",
				destination: "https://top.gg/bot/1352131392993230869/vote",
				permanent: true,
			},
		];
	},
};

export default config;
