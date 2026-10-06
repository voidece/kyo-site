import type { Metadata, Viewport } from "next";
import { Inter, Michroma, Sofia_Sans_Condensed } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { QueryProvider } from "@/components/providers/query-provider";
import { TooltipProvider } from "@/components/ui/tooltip";

const BASE_URL = "https://kyobot.voidev.in";

const michroma = Michroma({
	weight: "400",
	subsets: ["latin"],
	display: "swap",
	variable: "--font-michroma",
});

const sofia = Sofia_Sans_Condensed({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-sofia",
	weight: ["400", "500", "600", "700"],
});

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
});

export const metadata: Metadata = {
	metadataBase: new URL(BASE_URL),
	title: {
		default: "Kyo – Discord Music Bot",
		template: "%s | Kyo",
	},
	/*
	verification: {
		google: "",
	},
	*/
	description:
		"Play music in Discord with fast playback, clear audio, and support for YouTube, Spotify, and SoundCloud.",
	authors: [{ name: "Void" }],
	creator: "Void",
	publisher: "Void",
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	openGraph: {
		type: "website",
		locale: "en_US",
		url: BASE_URL,
		siteName: "Kyo",
		title: "Kyo",
		description:
			"Stream music in Discord from YouTube, Spotify, and SoundCloud with smooth playback and clear audio.",
	},
	alternates: {
		canonical: BASE_URL,
	},
	icons: {
		icon: "/favicon.ico",
		apple: "/logo.jpg",
	},
};

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 5,
	userScalable: true,
	themeColor: "#0c0e0d",
	colorScheme: "dark",
};

const schema = {
	"@context": "https://schema.org",
	"@type": "SoftwareApplication",
	name: "Kyo",
	applicationCategory: "MusicApplication",
	operatingSystem: "Discord",
	url: BASE_URL,
	description:
		"Play music in Discord with fast playback, clear audio, and support for YouTube, Spotify, and SoundCloud.",
	offers: {
		"@type": "Offer",
		price: "0",
		priceCurrency: "USD",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html
			lang="en"
			data-scroll-behavior="smooth"
			className={`${michroma.variable} ${sofia.variable} ${inter.variable}`}
		>
			<body className="font-sans antialiased">
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(schema).replace(/</g, "\\u003c"),
					}}
				/>
				<QueryProvider>
					<TooltipProvider>
						<div className="flex min-h-screen w-full flex-col overflow-x-hidden">
							<Navbar />
							<main className="flex flex-1 flex-col pt-16">{children}</main>
							<Footer />
						</div>
					</TooltipProvider>
				</QueryProvider>
				<SpeedInsights />
			</body>
		</html>
	);
}
