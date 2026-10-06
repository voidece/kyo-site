"use client";

import { cn } from "cn";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const links = [
	{ href: "/", label: "Home" },
	{ href: "/commands", label: "Commands" },
	{ href: "/status", label: "Status" },
	{ href: "/discord", label: "Discord" },
];

export function Navbar() {
	const [mobileOpen, setMobileOpen] = useState(false);
	const [mobileMenuRendered, setMobileMenuRendered] = useState(false);
	const pathname = usePathname();
	const isMobile = useIsMobile();

	return (
		<nav
			className="fixed inset-x-0 top-0 z-50 px-2.5 pt-4 sm:px-4 sm:pt-5"
			aria-label="Main navigation"
		>
			<div
				className={cn(
					"mx-auto flex h-16 max-w-7xl items-center justify-between rounded-full border px-4 sm:h-20 sm:px-6",
					"border-foreground/10 bg-background/80 shadow-[0_12px_40px_hsl(var(--foreground)/0.08)] backdrop-blur-sm",
				)}
			>
				<div className="flex items-center gap-6">
					<Link href="/" className="group flex items-center gap-3" aria-label="Kyo home">
						<Image
							src="/logo.jpg"
							alt="Kyo"
							width={42}
							height={42}
							priority
							className="size-9 rounded-full object-cover transition-transform group-hover:scale-105 sm:size-11"
						/>
					</Link>

					<div className="hidden items-center gap-1 md:flex">
						{links
							.filter((link) => link.href !== "/")
							.map((link) => (
								<Link
									key={link.href}
									href={link.href}
									className={cn(
										"rounded-full px-4 py-2 font-semibold text-sm transition-colors hover:bg-muted hover:text-foreground",
										pathname === link.href ? "bg-muted text-foreground" : "text-muted-foreground",
									)}
								>
									{link.label}
								</Link>
							))}
					</div>
				</div>

				<div className="flex items-center gap-2 sm:gap-3">
					<Button
						asChild
						className="gradient-bg hidden rounded-full font-semibold hover:opacity-90 md:inline-flex"
					>
						<Link href="/invite" target="_blank" rel="noopener noreferrer">
							Invite
						</Link>
					</Button>
					<Button
						variant="outline"
						className="on-hover h-10 min-w-0 justify-center gap-2 rounded-full border-foreground/10 bg-muted/60 px-5 font-semibold text-base sm:h-12 sm:px-6 sm:text-lg md:hidden"
						onClick={() => {
							setMobileOpen(!mobileOpen);
							setMobileMenuRendered(true);
						}}
						aria-expanded={mobileOpen}
					>
						<span>Menu</span>
						{isMobile && mobileOpen ? <LuX /> : <LuMenu />}
					</Button>
				</div>
			</div>

			{(mobileMenuRendered || (isMobile && mobileOpen)) && (
				<div
					className={`motion-collapse ${isMobile && mobileOpen ? "motion-collapse-open" : ""} mx-auto mt-2 w-[calc(100%-1rem)] max-w-xl overflow-hidden rounded-3xl border border-foreground/10 bg-background/80 shadow-xl backdrop-blur-sm md:hidden`}
					onTransitionEnd={(event) => {
						if (!(isMobile && mobileOpen) && event.propertyName === "grid-template-rows") {
							setMobileMenuRendered(false);
						}
					}}
				>
					<div className="motion-collapse-content">
						<div className="flex flex-col gap-1 p-3">
							{links.map((link) => (
								<Link
									key={link.href}
									href={link.href}
									onClick={() => setMobileOpen(false)}
									className={cn(
										"on-hover rounded-2xl px-4 py-3 font-semibold text-base transition-colors",
										pathname === link.href ? "text-foreground" : "text-muted-foreground",
									)}
								>
									{link.label}
								</Link>
							))}
							<Button asChild className="gradient-bg mt-1 rounded-lg">
								<Link
									href="/invite"
									target="_blank"
									rel="noopener noreferrer"
									onClick={() => setMobileOpen(false)}
								>
									Invite Bot
								</Link>
							</Button>
						</div>
					</div>
				</div>
			)}
		</nav>
	);
}
