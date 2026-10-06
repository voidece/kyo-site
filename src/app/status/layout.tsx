import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

const url = "https://kyobot.voidev.in/status";

export const metadata: Metadata = {
	title: "Status",
	description: "View current status, latency, and uptime.",
	alternates: {
		canonical: url,
	},
	openGraph: {
		type: "website",
		locale: "en_US",
		siteName: "Kyo",
		title: "Status | Kyo",
		description: "Real-time status, latency, and uptime.",
		url,
	},
};

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
};

export default function BotStatusLayout({ children }: { children: ReactNode }) {
	return <>{children}</>;
}
