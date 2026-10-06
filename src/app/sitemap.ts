import type { MetadataRoute } from "next";

const BASE_URL = "https://kyobot.voidev.in";

const LAST_MODIFIED = {
	HOME: new Date("2026-09-25"),
	COMMANDS: new Date("2026-09-25"),
	STATUS: new Date("2026-09-25"),
	PRIVACY: new Date("2026-09-25"),
	TERMS: new Date("2026-09-25"),
} as const;

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: BASE_URL,
			lastModified: LAST_MODIFIED.HOME,
			changeFrequency: "weekly",
			priority: 1,
		},
		{
			url: `${BASE_URL}/commands`,
			lastModified: LAST_MODIFIED.COMMANDS,
			changeFrequency: "weekly",
			priority: 0.8,
		},
		{
			url: `${BASE_URL}/status`,
			lastModified: LAST_MODIFIED.STATUS,
			changeFrequency: "daily",
			priority: 0.7,
		},
		{
			url: `${BASE_URL}/privacy`,
			lastModified: LAST_MODIFIED.PRIVACY,
			changeFrequency: "monthly",
			priority: 0.5,
		},
		{
			url: `${BASE_URL}/terms`,
			lastModified: LAST_MODIFIED.TERMS,
			changeFrequency: "monthly",
			priority: 0.5,
		},
	];
}
