import Link from "next/link";
import { LuHouse } from "react-icons/lu";
import { Button } from "@/components/ui/button";

export default function NotFound() {
	return (
		<section className="relative flex flex-1 items-center justify-center overflow-hidden py-24">
			<div className="glow-orb top-1/4 left-0 h-75 w-75 animate-pulse-glow bg-primary/15 md:h-125 md:w-125" />
			<div
				className="glow-orb right-0 bottom-1/4 h-62.5 w-62.5 animate-pulse-glow bg-accent/10 md:h-100 md:w-100"
				style={{ animationDelay: "2s" }}
			/>

			<div className="relative z-10 w-full px-4 text-center">
				<div>
					<span className="gradient-text select-none font-black text-8xl leading-none tracking-tight sm:text-9xl md:text-[10rem]">
						404
					</span>
				</div>

				<div className="mx-auto my-6 h-px w-32 bg-border sm:w-48" />

				<div>
					<h1 className="font-bold text-foreground text-xl sm:text-2xl md:text-3xl">
						Page Not Found
					</h1>
				</div>

				<div>
					<p className="mx-auto mt-3 max-w-xs text-muted-foreground text-sm sm:max-w-sm sm:text-base">
						Looks like this page went missing. It may have been moved, deleted, or never existed.
					</p>
				</div>

				<div className="mt-8 flex items-center justify-center">
					<Button
						asChild
						size="lg"
						className="gradient-bg rounded-full px-8 font-semibold hover:opacity-90"
					>
						<Link href="/" className="flex items-center gap-2">
							<LuHouse className="h-4 w-4" />
							Return to Home
						</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}
