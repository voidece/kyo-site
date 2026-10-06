"use client";

import { useQuery } from "@tanstack/react-query";
import { LuActivity, LuRefreshCw } from "react-icons/lu";
import { getStatus } from "@/actions";
import { BotStatistics, LavalinkNodeCard } from "@/components/status/statistics";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import type { Status } from "@/types";

export function StatusClient() {
	const {
		data: status,
		isLoading: statusLoading,
		error: statusError,
		refetch,
		isFetching,
		dataUpdatedAt,
	} = useQuery<Status | null>({
		queryKey: ["status"],
		queryFn: () => getStatus(),
		refetchInterval: 30000,
	});

	if (statusLoading) {
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

	if (statusError || !status) {
		return (
			<section className="py-24">
				<div className="w-full px-4">
					<div className="mx-auto max-w-7xl text-center">
						<h1 className="font-bold text-4xl text-destructive">Error Loading Status</h1>
						<p className="mt-4 text-muted-foreground">
							Unable to fetch system status. Please try again later.
						</p>
					</div>
				</div>
			</section>
		);
	}

	return (
		<section className="relative py-24">
			<div className="glow-orb top-0 right-0 h-75 w-75 animate-pulse-glow bg-primary/8" />
			<div className="w-full px-4">
				<div className="relative z-10 mx-auto max-w-7xl">
					<div className="mb-10 text-center">
						<div className="mb-4 inline-flex items-center gap-2">
							<LuActivity className="h-8 w-8 text-primary" />
							<h1 className="font-bold text-4xl sm:text-5xl">
								System <span className="gradient-text">Status</span>
							</h1>
						</div>
						<p className="text-muted-foreground">Real-time monitoring of Kyo bot and services</p>
						<div className="mt-4 flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-3">
							<p className="text-sm text-muted-foreground">
								Last updated at{" "}
								{new Date(dataUpdatedAt).toLocaleTimeString([], {
									hour: "2-digit",
									minute: "2-digit",
								})}
							</p>
							<Button
								variant="outline"
								size="sm"
								className="rounded-full"
								disabled={isFetching}
								onClick={() => refetch()}
							>
								<LuRefreshCw className={isFetching ? "animate-spin" : ""} />
								Refresh Live
							</Button>
						</div>
					</div>
					<BotStatistics status={status} />
					{status.lavalink.nodes.map((node, index) => (
						<div key={node.name ?? index} className="mt-6">
							<LavalinkNodeCard node={node} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
