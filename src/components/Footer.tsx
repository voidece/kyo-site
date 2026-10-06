import { cacheLife } from "next/cache";
import Image from "next/image";
import Link from "next/link";

async function CopyrightYear() {
	"use cache";
	cacheLife("days");
	return <>{new Date().getFullYear()}</>;
}

export function Footer() {
	return (
		<footer className="border-border border-t bg-background">
			<div className="w-full px-4">
				<div className="mx-auto max-w-7xl py-12">
					<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
						<div className="col-span-1 sm:col-span-2 md:col-span-1">
							<div className="mb-4 flex items-center gap-2">
								<Image src="/logo.jpg" alt="Kyo" width={28} height={28} className="rounded-full" />
								<span className="font-bold text-foreground text-lg">Kyo</span>
							</div>
							<p className="text-muted-foreground text-sm">
								The ultimate Discord music experience. High quality, fast, and reliable.
							</p>
						</div>
						<div>
							<h4 className="mb-3 font-semibold text-foreground text-sm uppercase tracking-wider">
								Legal
							</h4>
							<ul className="space-y-2">
								<li>
									<Link
										href="/privacy"
										className="text-muted-foreground text-sm transition-colors hover:text-foreground"
									>
										Privacy Policy
									</Link>
								</li>
								<li>
									<Link
										href="/terms"
										className="text-muted-foreground text-sm transition-colors hover:text-foreground"
									>
										Terms of Service
									</Link>
								</li>
							</ul>
						</div>
						<div>
							<h4 className="mb-3 font-semibold text-foreground text-sm uppercase tracking-wider">
								Links
							</h4>
							<ul className="space-y-2">
								<li>
									<Link
										href="/discord"
										target="_blank"
										rel="noopener noreferrer"
										className="text-muted-foreground text-sm transition-colors hover:text-foreground"
									>
										Discord
									</Link>
								</li>
								<li>
									<Link
										href="/vote"
										target="_blank"
										rel="noopener noreferrer"
										className="text-muted-foreground text-sm transition-colors hover:text-foreground"
									>
										Top.gg
									</Link>
								</li>
							</ul>
						</div>
						<div>
							<h4 className="mb-3 font-semibold text-foreground text-sm uppercase tracking-wider">
								Pages
							</h4>
							<ul className="space-y-2">
								<li>
									<Link
										href="/commands"
										className="text-muted-foreground text-sm transition-colors hover:text-foreground"
									>
										Commands
									</Link>
								</li>
								<li>
									<Link
										href="/status"
										className="text-muted-foreground text-sm transition-colors hover:text-foreground"
									>
										Status
									</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="mt-10 border-border border-t pt-6 text-center text-muted-foreground text-sm">
						&copy; <CopyrightYear /> Kyo. All rights reserved.
					</div>
				</div>
			</div>
		</footer>
	);
}
