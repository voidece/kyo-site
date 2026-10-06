"use client";

import Link from "next/link";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function ErrorPage({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<section className="relative flex flex-1 items-center justify-center py-24">
			<div className="text-center">
				<h1 className="font-bold text-3xl text-foreground">Something went wrong</h1>
				<p className="mt-4 max-w-sm text-muted-foreground">
					An unexpected error occurred. Please try again.
				</p>
				<div className="mt-8 flex items-center justify-center gap-4">
					<Button
						onClick={reset}
						className="gradient-bg rounded-full px-8 font-semibold hover:opacity-90"
					>
						Try again
					</Button>
					<Button asChild variant="ghost" className="rounded-full px-8">
						<Link href="/">Go home</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}
