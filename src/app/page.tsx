import Link from "next/link";
import { FaDiscord } from "react-icons/fa";
import {
	LuClock,
	LuHeadphones,
	LuListMusic,
	LuRadio,
	LuShield,
	LuSlidersHorizontal,
	LuVolume2,
	LuZap,
} from "react-icons/lu";
import { FAQ } from "@/components/home/faq";
import { Platforms } from "@/components/home/platforms";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const FEATURES = [
	{
		icon: LuHeadphones,
		title: "High Quality Audio",
		description:
			"Crystal clear audio streaming with support for multiple formats and lossless quality playback.",
	},
	{
		icon: LuZap,
		title: "Lightning Fast",
		description:
			"Near-instant response times with optimized performance. No lag, no delays, just music.",
	},
	{
		icon: LuClock,
		title: "24/7 Uptime",
		description:
			"Always online and ready to play your favorite tracks. Reliable hosting with 99.9% uptime.",
	},
	{
		icon: LuSlidersHorizontal,
		title: "Audio Filters",
		description:
			"Customize your listening experience with bass boost, nightcore, vaporwave, and more filters.",
	},
	{
		icon: LuListMusic,
		title: "Queue Management",
		description: "Full queue control with shuffle, loop, skip, and drag-to-reorder functionality.",
	},
	{
		icon: LuRadio,
		title: "Multi-Platform Support",
		description: "Play from YouTube, Spotify, SoundCloud, and more. All your music in one place.",
	},
	{
		icon: LuShield,
		title: "Permission System",
		description:
			"Fine-grained DJ and admin controls. Manage who can control the bot in your server.",
	},
	{
		icon: LuVolume2,
		title: "Volume Control",
		description: "Smooth volume adjustment with per-server settings that persist between sessions.",
	},
];

const HOW_IT_WORKS = [
	{
		step: 1,
		title: "Invite Kyo",
		description: "Add Kyo to your Discord server with one click.",
	},
	{
		step: 2,
		title: "Join a Voice Channel",
		description: "Hop into any voice channel in your server.",
	},
	{ step: 3, title: "Play Music", description: "Use /play to start jamming. It's that simple!" },
];

const FAQS = [
	{
		question: "How do I add Kyo to my Discord server?",
		answer:
			"Click Authorize, choose your server, and approve the requested permissions. Kyo will be ready to use in your server right away.",
	},
	{
		question: "Which music platforms does Kyo support?",
		answer:
			"Kyo supports popular sources including YouTube, Spotify, and SoundCloud, so you can play music from the services you already use.",
	},
	{
		question: "How do I start playing music?",
		answer:
			"Join a voice channel and use the /play command with a song, artist, or URL. Kyo will add the result to your queue and start playback.",
	},
	{
		question: "Can multiple people control the queue?",
		answer:
			"Yes. Queue controls are available to members with the appropriate Discord permissions, and server moderators can manage playback access.",
	},
	{
		question: "Where can I get help?",
		answer:
			"Join the Kyo Discord support server through the Discord link in the navigation or footer to ask questions and report issues.",
	},
];

const faqSchema = {
	"@context": "https://schema.org",
	"@type": "FAQPage",
	mainEntity: FAQS.map((faq) => ({
		"@type": "Question",
		name: faq.question,
		acceptedAnswer: {
			"@type": "Answer",
			text: faq.answer,
		},
	})),
};

export default function Home() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
				}}
			/>
			<section className="relative flex min-h-screen items-center justify-center overflow-hidden py-24 md:min-h-[calc(100vh-4rem)] md:py-28 lg:py-32">
				<div className="w-full px-4">
					<div className="relative z-10 mx-auto max-w-7xl text-center">
						<div>
							<h1 className="mx-auto max-w-4xl text-balance font-black text-[3.5rem] leading-[1.08] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
								<span className="text-foreground">Keep the music going</span>
								<br />
								<span className="gradient-text font-medium italic">with Kyo</span>
							</h1>
						</div>
						<div>
							<p className="mx-auto mt-6 max-w-xl px-4 text-base text-muted-foreground leading-relaxed sm:text-lg md:text-xl">
								Crystal-clear music, smart queues, and powerful controls for every Discord server.
							</p>
						</div>
						<div className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:mt-12">
							<Button
								asChild
								className="on-hover gradient-bg h-12 w-[52vw] min-w-0 max-w-135 rounded-full px-5 font-bold text-base transition-transform duration-200 ease-out hover:-translate-y-0.5 sm:h-14"
							>
								<Link
									href="/invite"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center justify-center gap-3"
								>
									<FaDiscord className="h-6 w-6" />
									Authorize
								</Link>
							</Button>
							<Button
								asChild
								variant="ghost"
								className="on-hover h-12 w-[52vw] min-w-0 max-w-135 rounded-full border-2 border-border bg-card/40 px-5 font-bold text-base text-foreground transition-transform duration-200 ease-out hover:-translate-y-0.5 sm:h-14"
							>
								<Link href="/commands">Commands</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>

			<Platforms />

			<section className="relative overflow-hidden py-24">
				<div className="glow-orb top-0 right-0 h-75 w-75 animate-pulse-glow bg-primary/8 md:h-100 md:w-100" />
				<div className="w-full px-4">
					<div className="relative z-10 mx-auto max-w-7xl">
						<div className="mb-14">
							<span className="font-semibold text-primary text-xs uppercase tracking-widest">
								Features
							</span>
							<h2 className="mt-2 font-bold text-3xl text-foreground md:text-4xl">
								Why Choose Kyo?
							</h2>
							<p className="mt-3 max-w-lg text-muted-foreground">
								Packed with features that make your music experience seamless.
							</p>
						</div>
						<div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
							{FEATURES.slice(0, 4).map((feature) => (
								<div key={feature.title}>
									<Card className="h-full border-border bg-card transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30">
										<CardContent>
											<feature.icon className="mb-4 h-9 w-9 text-primary" />
											<h3 className="mb-2 font-semibold text-foreground">{feature.title}</h3>
											<p className="text-muted-foreground text-sm">{feature.description}</p>
										</CardContent>
									</Card>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			<section className="relative overflow-hidden py-24">
				<div className="glow-orb bottom-0 left-0 h-62.5 w-62.5 animate-pulse-glow bg-primary/8 md:h-87.5 md:w-87.5" />
				<div className="w-full px-4">
					<div className="relative z-10 mx-auto max-w-7xl">
						<div className="mb-14">
							<span className="font-semibold text-primary text-xs uppercase tracking-widest">
								Getting Started
							</span>
							<h2 className="mt-2 font-bold text-3xl text-foreground md:text-4xl">
								3 Simple Steps
							</h2>
						</div>
						<div className="grid grid-cols-1 gap-5 md:grid-cols-3">
							{HOW_IT_WORKS.map((item) => (
								<div key={item.step}>
									<Card className="h-full border-border bg-card transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30">
										<CardContent>
											<div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-primary/40 font-bold text-primary text-sm">
												{item.step}
											</div>
											<h3 className="mb-2 font-semibold text-foreground">{item.title}</h3>
											<p className="text-muted-foreground text-sm">{item.description}</p>
										</CardContent>
									</Card>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			<section className="relative overflow-hidden py-24">
				<div className="glow-orb top-0 right-0 h-75 w-75 animate-pulse-glow bg-primary/8 md:h-100 md:w-100" />
				<div className="w-full px-4">
					<div className="relative z-10 mx-auto max-w-3xl">
						<div className="mb-10 text-center">
							<span className="font-semibold text-primary text-xs uppercase tracking-widest">
								FAQ
							</span>
							<h2 className="mt-2 font-bold text-3xl text-foreground md:text-4xl">
								Frequently Asked Questions
							</h2>
							<p className="mx-auto mt-3 max-w-lg text-muted-foreground">
								Everything you need to know about getting started with Kyo.
							</p>
						</div>
						<FAQ items={FAQS} />
					</div>
				</div>
			</section>
		</>
	);
}
