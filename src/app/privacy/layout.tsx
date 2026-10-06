import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

const url = "https://kyobot.voidev.in/privacy";

export const metadata: Metadata = {
	title: "Privacy Policy",
	description: "Learn how Kyo handles your data and protects your privacy.",
	alternates: {
		canonical: url,
	},
	openGraph: {
		type: "website",
		locale: "en_US",
		siteName: "Kyo",
		title: "Privacy Policy | Kyo",
		description: "Learn how Kyo handles your data and protects your privacy.",
		url,
	},
};

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
};

export default function PrivacyLayout({ children }: { children: ReactNode }) {
	return <>{children}</>;
}
