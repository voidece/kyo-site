import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Terms() {
	return (
		<section className="relative overflow-hidden py-24 font-[--font-sofia]">
			<div className="glow-orb top-0 right-0 h-75 w-75 animate-pulse-glow bg-primary/8 md:h-100 md:w-100" />
			<div className="glow-orb bottom-0 left-0 h-62.5 w-62.5 animate-pulse-glow bg-accent/8 md:h-87.5 md:w-87.5" />

			<div className="relative z-10 w-full px-6 sm:px-8">
				<div className="mx-auto max-w-3xl">
					<main className="max-w-3xl">
						<header className="mb-14 animate-slide-up">
							<h1 className="mt-4 font-[--font-michroma] font-bold text-4xl text-foreground tracking-tight sm:text-5xl">
								Fair use, clear rules.
							</h1>
							<p className="mt-4 text-muted-foreground text-sm leading-relaxed sm:text-base">
								By inviting Kyo to your server, you agree to these terms. They&apos;re here to keep
								things fair for everyone.
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
									Please read these Terms of Service (&quot;Terms&quot;) carefully before using Kyo
									(the &quot;Service&quot;). By inviting or using Kyo, you agree to be bound by
									these Terms. If you do not agree, do not use the Service.
								</p>
								<Separator className="mt-10" />
							</section>

							<section id="eligibility" className="scroll-mt-24 space-y-4">
								<h2 className="font-[--font-michroma] font-bold text-foreground text-lg sm:text-xl">
									<span className="mr-2 font-normal text-muted-foreground">2.</span>Eligibility
								</h2>
								<p className="text-muted-foreground leading-relaxed">
									You must meet Discord&apos;s own minimum age and account requirements to use Kyo.
									By using the Service, you confirm that you meet these requirements and that your
									use complies with Discord&apos;s Terms of Service and Community Guidelines.
								</p>
								<Separator className="mt-10" />
							</section>

							<section id="acceptable-use" className="scroll-mt-24 space-y-4">
								<h2 className="font-[--font-michroma] font-bold text-foreground text-lg sm:text-xl">
									<span className="mr-2 font-normal text-muted-foreground">3.</span>Acceptable Use
								</h2>
								<p className="text-muted-foreground leading-relaxed">
									You agree not to misuse, or attempt to misuse, the Service. Prohibited behavior
									includes, but is not limited to:
								</p>
								<ul className="list-disc space-y-3 pl-5 text-muted-foreground leading-relaxed marker:text-muted-foreground">
									<li>
										<span className="font-medium text-foreground">Abuse</span> — Spamming actions,
										bypassing rate limits or cooldowns, or otherwise degrading the Service for
										others.
									</li>
									<li>
										<span className="font-medium text-foreground">Harmful Activity</span> — Using
										Kyo to harass, defraud, threaten, or harm others.
									</li>
									<li>
										<span className="font-medium text-foreground">
											Automation &amp; Manipulation
										</span>{" "}
										— Running unauthorized scripts, self-bots, or artificially inflating listening
										stats or rankings.
									</li>
									<li>
										<span className="font-medium text-foreground">Exploits</span> — Attempting to
										exploit bugs or vulnerabilities in the Service instead of reporting them.
									</li>
								</ul>
								<p className="text-muted-foreground leading-relaxed">
									Violations may result in a warning, temporary suspension, or permanent ban from
									the Service, at our discretion.
								</p>
								<Separator className="mt-10" />
							</section>

							<section id="third-party-content" className="scroll-mt-24 space-y-4">
								<h2 className="font-[--font-michroma] font-bold text-foreground text-lg sm:text-xl">
									<span className="mr-2 font-normal text-muted-foreground">4.</span>Third-Party
									Content
								</h2>
								<p className="text-muted-foreground leading-relaxed">
									Kyo provides certain features, such as music playback, by connecting to
									third-party services. We do not host, own, or control this content, and it remains
									subject to each service&apos;s own terms. Kyo is not affiliated with, endorsed by,
									or sponsored by any third-party service it connects to, including Discord. You are
									responsible for ensuring your use of the Service complies with those
									services&apos; terms in addition to ours.
								</p>
								<Separator className="mt-10" />
							</section>

							<section id="intellectual-property" className="scroll-mt-24 space-y-4">
								<h2 className="font-[--font-michroma] font-bold text-foreground text-lg sm:text-xl">
									<span className="mr-2 font-normal text-muted-foreground">5.</span>Intellectual
									Property
								</h2>
								<p className="text-muted-foreground leading-relaxed">
									The Kyo name, logo, and Service (excluding third-party content it streams) are the
									property of its developers. You may not copy, modify, reverse-engineer, or
									redistribute the Service without permission.
								</p>
								<Separator className="mt-10" />
							</section>

							<section id="service-availability" className="scroll-mt-24 space-y-4">
								<h2 className="font-[--font-michroma] font-bold text-foreground text-lg sm:text-xl">
									<span className="mr-2 font-normal text-muted-foreground">6.</span>Service
									Availability
								</h2>
								<p className="text-muted-foreground leading-relaxed">
									We strive to keep the Service online but do not guarantee uninterrupted,
									error-free, or continuous access. We reserve the right to modify, suspend, or
									discontinue the Service — in whole or in part — at any time, with or without
									notice.
								</p>
								<Separator className="mt-10" />
							</section>

							<section id="termination" className="scroll-mt-24 space-y-4">
								<h2 className="font-[--font-michroma] font-bold text-foreground text-lg sm:text-xl">
									<span className="mr-2 font-normal text-muted-foreground">7.</span>Termination
								</h2>
								<p className="text-muted-foreground leading-relaxed">
									We may suspend or terminate your access to the Service, or remove Kyo from your
									server, at any time if we believe these Terms have been violated, without prior
									notice.
								</p>
								<Separator className="mt-10" />
							</section>

							<section id="disclaimer-of-warranties" className="scroll-mt-24 space-y-4">
								<h2 className="font-[--font-michroma] font-bold text-foreground text-lg sm:text-xl">
									<span className="mr-2 font-normal text-muted-foreground">8.</span>Disclaimer of
									Warranties
								</h2>
								<p className="text-muted-foreground leading-relaxed">
									The Service is provided &quot;as is&quot; and &quot;as available,&quot; without
									warranties of any kind, express or implied, including but not limited to fitness
									for a particular purpose or non-infringement.
								</p>
								<Separator className="mt-10" />
							</section>

							<section id="limitation-of-liability" className="scroll-mt-24 space-y-4">
								<h2 className="font-[--font-michroma] font-bold text-foreground text-lg sm:text-xl">
									<span className="mr-2 font-normal text-muted-foreground">9.</span>Limitation of
									Liability
								</h2>
								<p className="text-muted-foreground leading-relaxed">
									To the maximum extent permitted by law, Kyo shall not be liable for any indirect,
									incidental, special, consequential, or punitive damages — including loss of data,
									music, playlists, or profits — arising from your use of or inability to use the
									Service.
								</p>
								<Separator className="mt-10" />
							</section>

							<section id="changes-to-these-terms" className="scroll-mt-24 space-y-4">
								<h2 className="font-[--font-michroma] font-bold text-foreground text-lg sm:text-xl">
									<span className="mr-2 font-normal text-muted-foreground">10.</span>Changes to
									These Terms
								</h2>
								<p className="text-muted-foreground leading-relaxed">
									We may update these Terms from time to time. Changes take effect once posted,
									reflected by the &quot;Last updated&quot; date. Continuing to use the Service
									after changes means you accept the updated Terms.
								</p>
								<Separator className="mt-10" />
							</section>

							<section id="contact-us" className="scroll-mt-24 space-y-4">
								<h2 className="font-[--font-michroma] font-bold text-foreground text-lg sm:text-xl">
									<span className="mr-2 font-normal text-muted-foreground">11.</span>Contact Us
								</h2>
								<p className="text-muted-foreground leading-relaxed">
									Have a question about these Terms? Join our Discord support server and our team
									will be glad to help.
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
