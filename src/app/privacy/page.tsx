import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Privacy() {
	return (
		<section className="font-(family-name:--font-sofia) relative overflow-hidden py-24">
			<div className="glow-orb top-0 right-0 h-75 w-75 animate-pulse-glow bg-primary/8 md:h-100 md:w-100" />
			<div className="glow-orb bottom-0 left-0 h-62.5 w-62.5 animate-pulse-glow bg-accent/8 md:h-87.5 md:w-87.5" />

			<div className="relative z-10 w-full px-6 sm:px-8">
				<div className="mx-auto max-w-3xl">
					<main className="max-w-3xl">
						<header className="mb-14 animate-slide-up">
							<h1 className="mt-4 font-[--font-michroma] font-bold text-4xl text-foreground tracking-tight sm:text-5xl">
								Your data, protected.
							</h1>
							<p className="mt-4 text-muted-foreground text-sm leading-relaxed sm:text-base">
								We believe privacy matters. Kyo collects the bare minimum needed to function —
								nothing more, nothing personal.
							</p>
							<p className="mt-3 text-muted-foreground text-xs sm:text-sm">
								Effective August 2026 · Last updated September 6, 2026
							</p>
						</header>

						<div className="space-y-10">
							<section id="introduction" className="scroll-mt-24 space-y-4">
								<h2 className="font-[--font-michroma] font-bold text-foreground text-lg sm:text-xl">
									<span className="mr-2 font-normal text-muted-foreground">1.</span>Introduction
								</h2>
								<p className="text-muted-foreground leading-relaxed">
									Kyo (&quot;us&quot;, &quot;we&quot;, &quot;our&quot;) is the Service this Privacy
									Policy applies to. This policy explains what information we collect when you use
									Kyo, why we collect it, who can see it, and what choices you have. By using Kyo,
									you agree to the practices described here. We do not collect your email address,
									IP address, real name, or any payment information.
								</p>
								<Separator className="mt-10" />
							</section>

							<section id="who-controls-your-data" className="scroll-mt-24 space-y-4">
								<h2 className="font-[--font-michroma] font-bold text-foreground text-lg sm:text-xl">
									<span className="mr-2 font-normal text-muted-foreground">2.</span>Who Controls
									Your Data
								</h2>
								<p className="text-muted-foreground leading-relaxed">
									Kyo is responsible for the data described in this policy. If you have questions or
									requests about your data, you can reach us through our official Discord support
									server.
								</p>
								<Separator className="mt-10" />
							</section>

							<section id="information-we-collect" className="scroll-mt-24 space-y-4">
								<h2 className="font-[--font-michroma] font-bold text-foreground text-lg sm:text-xl">
									<span className="mr-2 font-normal text-muted-foreground">3.</span>Information We
									Collect
								</h2>
								<p className="text-muted-foreground leading-relaxed">
									We only collect what&apos;s needed to run the Service:
								</p>
								<ul className="list-disc space-y-3 pl-5 text-muted-foreground leading-relaxed marker:text-muted-foreground">
									<li>
										<span className="font-medium text-foreground">Server Settings</span> — Your
										server&apos;s ID, command prefix, configured log channel, and default playback
										settings (music source and volume), so your setup stays saved.
									</li>
									<li>
										<span className="font-medium text-foreground">Account Data</span> — Your Discord
										user ID and the date you first used Kyo.
									</li>
									<li>
										<span className="font-medium text-foreground">Listening Activity</span> — The
										songs you play, the server they were played in, and when you played them. This
										is used to build stats, top tracks, and rankings.
									</li>
									<li>
										<span className="font-medium text-foreground">Playlists &amp; Liked Songs</span>{" "}
										— The names of playlists you create and the tracks saved in them, including
										songs you mark as liked.
									</li>
									<li>
										<span className="font-medium text-foreground">Usage Records</span> — A record of
										what actions are performed, by whom, and where, kept for debugging and
										monitoring the Service.
									</li>
								</ul>
								<p className="text-muted-foreground leading-relaxed">
									We do not collect voice audio, private messages, or any data beyond what&apos;s
									listed above.
								</p>
								<Separator className="mt-10" />
							</section>

							<section id="why-we-collect-it" className="scroll-mt-24 space-y-4">
								<h2 className="font-[--font-michroma] font-bold text-foreground text-lg sm:text-xl">
									<span className="mr-2 font-normal text-muted-foreground">4.</span>Why We Collect
									It
								</h2>
								<p className="text-muted-foreground leading-relaxed">Your data is used only to:</p>
								<ul className="list-disc space-y-3 pl-5 text-muted-foreground leading-relaxed marker:text-muted-foreground">
									<li>
										Keep your server settings, playlists, and liked songs working correctly over
										time.
									</li>
									<li>
										Show your listening history, top tracks, play counts, and rankings when you or
										others look up this information.
									</li>
									<li>
										Detect and fix bugs, monitor performance, and keep the Service stable and
										reliable.
									</li>
									<li>Prevent abuse and enforce our Terms of Service.</li>
								</ul>
								<p className="text-muted-foreground leading-relaxed">
									We do not sell your data, use it for advertising, or share it with data brokers.
								</p>
								<Separator className="mt-10" />
							</section>

							<section id="visibility-to-other-users" className="scroll-mt-24 space-y-4">
								<h2 className="font-[--font-michroma] font-bold text-foreground text-lg sm:text-xl">
									<span className="mr-2 font-normal text-muted-foreground">5.</span>Visibility to
									Other Users
								</h2>
								<p className="text-muted-foreground leading-relaxed">
									Some information isn&apos;t private between you and us. Anyone in a shared server
									can look up your top track, total plays, and rank, and aggregate listening numbers
									are visible to everyone. If you&apos;d prefer your activity not be visible this
									way, contact our support team and we&apos;ll look into it.
								</p>
								<Separator className="mt-10" />
							</section>

							<section id="sharing-with-third-parties" className="scroll-mt-24 space-y-4">
								<h2 className="font-[--font-michroma] font-bold text-foreground text-lg sm:text-xl">
									<span className="mr-2 font-normal text-muted-foreground">6.</span>Sharing With
									Third Parties
								</h2>
								<p className="text-muted-foreground leading-relaxed">
									Kyo operates entirely through Discord&apos;s platform — please review
									Discord&apos;s own Privacy Policy for how they handle your data. Kyo also relies
									on select third-party services to provide certain features, such as music
									playback. Using these features means relevant information, such as your playback
									requests, may be processed through those third-party services. We do not share
									your data with any other third party, advertiser, or analytics company.
								</p>
								<Separator className="mt-10" />
							</section>

							<section id="data-retention" className="scroll-mt-24 space-y-4">
								<h2 className="font-[--font-michroma] font-bold text-foreground text-lg sm:text-xl">
									<span className="mr-2 font-normal text-muted-foreground">7.</span>Data Retention
								</h2>
								<p className="text-muted-foreground leading-relaxed">
									We keep your data for as long as you actively use the Service. Listening history,
									playlists, and settings are retained to keep features working, and are deleted
									upon request. Records used for debugging are kept only as long as necessary and
									are not stored indefinitely.
								</p>
								<Separator className="mt-10" />
							</section>

							<section id="data-security" className="scroll-mt-24 space-y-4">
								<h2 className="font-[--font-michroma] font-bold text-foreground text-lg sm:text-xl">
									<span className="mr-2 font-normal text-muted-foreground">8.</span>Data Security
								</h2>
								<p className="text-muted-foreground leading-relaxed">
									We take reasonable steps to protect the data we hold from unauthorized access,
									loss, or misuse. However, no system is completely secure, and we can&apos;t
									guarantee absolute protection.
								</p>
								<Separator className="mt-10" />
							</section>

							<section id="childrens-privacy" className="scroll-mt-24 space-y-4">
								<h2 className="font-[--font-michroma] font-bold text-foreground text-lg sm:text-xl">
									<span className="mr-2 font-normal text-muted-foreground">9.</span>Children&apos;s
									Privacy
								</h2>
								<p className="text-muted-foreground leading-relaxed">
									Kyo is intended for use in accordance with Discord&apos;s own age requirements. We
									do not knowingly collect data from children below the age required by
									Discord&apos;s Terms of Service. If you believe a child has provided data to us,
									contact us and we will take appropriate action.
								</p>
								<Separator className="mt-10" />
							</section>

							<section id="your-rights-and-choices" className="scroll-mt-24 space-y-4">
								<h2 className="font-[--font-michroma] font-bold text-foreground text-lg sm:text-xl">
									<span className="mr-2 font-normal text-muted-foreground">10.</span>Your Rights and
									Choices
								</h2>
								<p className="text-muted-foreground leading-relaxed">You have the right to:</p>
								<ul className="list-disc space-y-3 pl-5 text-muted-foreground leading-relaxed marker:text-muted-foreground">
									<li>Request access to the data we hold about you.</li>
									<li>Request correction of inaccurate data.</li>
									<li>
										Request deletion of your data, including listening history, playlists, and liked
										songs.
									</li>
									<li>Object to certain uses of your data.</li>
								</ul>
								<p className="text-muted-foreground leading-relaxed">
									To exercise any of these rights, reach out through our Contact and Support page.
									We may ask you to verify your Discord account before processing the request.
								</p>
								<Separator className="mt-10" />
							</section>

							<section id="changes-to-this-policy" className="scroll-mt-24 space-y-4">
								<h2 className="font-[--font-michroma] font-bold text-foreground text-lg sm:text-xl">
									<span className="mr-2 font-normal text-muted-foreground">11.</span>Changes to This
									Policy
								</h2>
								<p className="text-muted-foreground leading-relaxed">
									We may update this Privacy Policy from time to time. Changes will be reflected by
									updating the &quot;Last updated&quot; date at the top of this page. Continued use
									of the Service after changes means you accept the updated policy.
								</p>
								<Separator className="mt-10" />
							</section>

							<section id="contact-us" className="scroll-mt-24 space-y-4">
								<h2 className="font-[--font-michroma] font-bold text-foreground text-lg sm:text-xl">
									<span className="mr-2 font-normal text-muted-foreground">12.</span>Contact Us
								</h2>
								<p className="text-muted-foreground leading-relaxed">
									Questions about this policy? Reach out through our official Discord support server
									and we&apos;ll help.
								</p>
								<div className="mt-6">
									<Button
										asChild
										className="gradient-bg rounded-full font-semibold hover:opacity-90"
									>
										<Link href="/discord" target="_blank" rel="noopener noreferrer">
											Contact Support
										</Link>
									</Button>
								</div>
							</section>
						</div>
					</main>
				</div>
			</div>
		</section>
	);
}
