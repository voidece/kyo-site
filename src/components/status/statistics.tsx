"use client";

import { useState } from "react";
import {
	LuChevronDown,
	LuClock,
	LuCpu,
	LuHardDrive,
	LuHeadphones,
	LuMusic,
	LuRadio,
	LuServer,
	LuTimer,
	LuUsers,
	LuZap,
} from "react-icons/lu";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { formatBytes } from "@/lib/format";
import type { Node, Status } from "@/types";

export function BotStatistics({ status }: { status: Status }) {
	const stats = [
		{ icon: LuClock, label: "Uptime", value: status.bot.uptime },
		{ icon: LuRadio, label: "Latency", value: `${status.bot.ping}ms` },
		{ icon: LuUsers, label: "Total Players", value: status.lavalink.players.total },
		{ icon: LuHeadphones, label: "Active Players", value: status.lavalink.players.active },
	];

	return (
		<Card className="mb-6 border-border bg-card/40 backdrop-blur-sm">
			<CardHeader>
				<CardTitle className="flex items-center gap-2 font-sans text-2xl tracking-tight">
					<LuZap className="h-5 w-5 text-primary" />
					{status.bot.name}
				</CardTitle>
				<CardDescription>Core bot performance metrics</CardDescription>
			</CardHeader>
			<Separator />
			<CardContent>
				<div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
					{stats.map(({ icon: Icon, label, value }) => (
						<div key={label} className="rounded-lg border border-border bg-background/50 p-4">
							<div className="flex items-center gap-2 text-muted-foreground text-sm">
								<Icon className="h-4 w-4" />
								{label}
							</div>
							<p className="mt-2 font-bold text-2xl">{value}</p>
						</div>
					))}
				</div>
			</CardContent>
		</Card>
	);
}

export function LavalinkNodeCard({ node }: { node: Node }) {
	const [expanded, setExpanded] = useState(false);

	const cpuUsage = node.cpu.load.lavalink;
	const systemCpu = node.cpu.load.system;
	const heapUsage = (node.memory.used / node.memory.allocated) * 100;
	const realMemoryUsage = (node.memory.used / node.memory.reservable) * 100;

	return (
		<Card className="overflow-hidden border-border bg-card/40 backdrop-blur-sm">
			<Collapsible
				open={expanded}
				onOpenChange={setExpanded}
				className="flex flex-col gap-(--card-spacing)"
			>
				<CollapsibleTrigger className="w-full text-left focus:outline-none">
					<CardHeader className="transition-colors duration-200 hover:bg-muted/20">
						<div className="flex items-center justify-between">
							<div className="flex items-center gap-3">
								<div
									className={`h-2.5 w-2.5 shrink-0 rounded-full ${
										{
											true: "animate-pulse bg-primary",
											false: "bg-destructive",
										}[String(node.connected)]
									}`}
								/>
								<CardTitle className="flex items-center gap-2 font-sans text-2xl tracking-tight">
									<LuServer className="h-5 w-5 text-primary" />
									{node.name}
								</CardTitle>
								<Badge
									variant="outline"
									className={
										{
											true: "border-primary/30 bg-primary/10 text-primary",
											false: "border-destructive/30 bg-destructive/10 text-destructive",
										}[String(node.connected)]
									}
								>
									{node.connected ? "Connected" : "Disconnected"}
								</Badge>
							</div>
							<div
								className={`transition-transform duration-300 ease-in-out ${expanded ? "rotate-180" : "rotate-0"}`}
							>
								<LuChevronDown className="h-5 w-5 text-muted-foreground" />
							</div>
						</div>
						<div className="mt-3 grid grid-cols-2 gap-x-6 gap-y-1 sm:grid-cols-4">
							{[
								{ icon: LuMusic, label: "Players", value: node.players },
								{ icon: LuHeadphones, label: "Playing", value: node.playing },
								{ icon: LuCpu, label: "CPU", value: `${cpuUsage.toFixed(1)}%` },
								{ icon: LuHardDrive, label: "RAM", value: `${realMemoryUsage.toFixed(1)}%` },
							].map(({ icon: Icon, label, value }) => (
								<div key={label} className="flex items-center gap-1.5">
									<Icon className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
									<span className="text-muted-foreground text-xs">{label}:</span>
									<span className="font-semibold text-foreground text-xs">{value}</span>
								</div>
							))}
						</div>
					</CardHeader>
				</CollapsibleTrigger>

				<CollapsibleContent className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
					<Separator className="mb-(--card-spacing)" />
					<CardContent className="space-y-6">
						<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
							{[
								{ icon: LuMusic, label: "Total Players", value: node.players },
								{ icon: LuHeadphones, label: "Playing Now", value: node.playing },
								{ icon: LuTimer, label: "Node Uptime", value: node.uptime },
							].map(({ icon: Icon, label, value }) => (
								<div key={label} className="rounded-lg border border-border bg-background/50 p-4">
									<div className="flex items-center gap-2 text-muted-foreground text-sm">
										<Icon className="h-4 w-4" />
										{label}
									</div>
									<p className="mt-2 font-bold text-2xl">{value}</p>
								</div>
							))}
							<div className="space-y-2 rounded-lg border border-border bg-background/50 p-4">
								<div>
									<div className="mb-1 flex items-center justify-between">
										<div className="flex items-center gap-1.5 text-muted-foreground text-xs">
											<LuCpu className="h-3.5 w-3.5" /> CPU
										</div>
										<span className="font-medium text-xs">{cpuUsage.toFixed(1)}%</span>
									</div>
									<Progress value={cpuUsage} className="h-2" />
									<div className="mt-1 flex justify-between text-[0.625rem] text-muted-foreground">
										<span>Lavalink: {cpuUsage.toFixed(1)}%</span>
										<span>Sys: {systemCpu.toFixed(1)}%</span>
									</div>
								</div>
								<div>
									<div className="mb-1 flex items-center justify-between">
										<div className="flex items-center gap-1.5 text-muted-foreground text-xs">
											<LuHardDrive className="h-3.5 w-3.5" /> Memory
										</div>
										<span className="font-medium text-xs">{realMemoryUsage.toFixed(1)}%</span>
									</div>
									<Progress value={realMemoryUsage} className="h-2" />
									<div className="mt-1 flex justify-between text-[0.625rem] text-muted-foreground">
										<span>
											Used: {formatBytes(node.memory.used)} / {formatBytes(node.memory.reservable)}
										</span>
										<span>Heap: {heapUsage.toFixed(1)}%</span>
									</div>
								</div>
							</div>
						</div>
					</CardContent>
				</CollapsibleContent>
			</Collapsible>
		</Card>
	);
}
