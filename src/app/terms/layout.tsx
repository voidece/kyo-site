import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

const url = "https://kyobot.voidev.in/terms";

export const metadata: Metadata = {
	title: "Terms of Service",
	description: "Terms and conditions for using Kyo.",
	alternates: {
		canonical: url,
	},
	openGraph: {
		type: "website",
		locale: "en_US",
		siteName: "Kyo",
		title: "Terms of Service | Kyo",
		description: "View the terms and conditions for using Kyo.",
		url,
	},
};

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
};

export default function TermsLayout({ children }: { children: ReactNode }) {
	return <>{children}</>;
}
