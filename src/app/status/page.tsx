import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { connection } from "next/server";
import { Suspense } from "react";
import { getStatus } from "@/actions";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { StatusClient } from "./status-client";

async function StatusData() {
	await connection();
	const queryClient = new QueryClient();
	await queryClient.prefetchQuery({
		queryKey: ["status"],
		queryFn: () => getStatus(),
	});

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<StatusClient />
		</HydrationBoundary>
	);
}

function StatusFallback() {
	return (
		<section className="py-24">
			<div className="w-full px-4">
				<div className="mx-auto max-w-7xl">
					<div className="mb-10 text-center">
						<h1 className="font-bold text-4xl">
							System <span className="gradient-text">Status</span>
						</h1>
						<p className="mt-4 text-muted-foreground">Loading status information...</p>
					</div>

					<Card className="mb-6 border-border bg-card/40 backdrop-blur-sm">
						<CardHeader>
							<Skeleton className="h-7 w-40" />
							<Skeleton className="mt-2 h-4 w-56" />
						</CardHeader>
						<Separator />
						<CardContent>
							<div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
								{[1, 2, 3, 4].map((i) => (
									<div key={i} className="rounded-lg border border-border bg-background/50 p-4">
										<Skeleton className="h-4 w-20" />
										<Skeleton className="mt-3 h-7 w-16" />
									</div>
								))}
							</div>
						</CardContent>
					</Card>

					{[1, 2].map((i) => (
						<Card key={i} className="mt-6 border-border bg-card/40 backdrop-blur-sm">
							<CardHeader>
								<div className="flex items-center gap-3">
									<Skeleton className="h-2.5 w-2.5 rounded-full" />
									<Skeleton className="h-7 w-32" />
									<Skeleton className="h-5 w-24 rounded-full" />
								</div>
								<div className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-4">
									{[1, 2, 3, 4].map((j) => (
										<Skeleton key={j} className="h-4 w-full" />
									))}
								</div>
							</CardHeader>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}

export default function StatusPage() {
	return (
		<Suspense fallback={<StatusFallback />}>
			<StatusData />
		</Suspense>
	);
}
