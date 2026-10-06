import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

const url = "https://kyobot.voidev.in/commands";

export const metadata: Metadata = {
	title: "Commands",
	description: "Explore Kyo commands for music, queue control, and server settings.",
	alternates: {
		canonical: url,
	},
	openGraph: {
		type: "website",
		locale: "en_US",
		siteName: "Kyo",
		title: "Commands | Kyo",
		description: "Discover Kyo commands for music, queues, and more.",
		url,
	},
};

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
};

export default function CommandsLayout({ children }: { children: ReactNode }) {
	return <>{children}</>;
}
