"use client";

import { cn } from "cn";
import { useState } from "react";
import { LuCheck, LuCopy } from "react-icons/lu";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import type { Command } from "@/types";

function CommandCard({ cmd }: { cmd: Command }) {
	const [copied, setCopied] = useState(false);
	const displayName = cmd.name.startsWith("/") ? cmd.name.slice(1) : cmd.name;
	const bareUsage = `/${displayName}`;

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(bareUsage);
			setCopied(true);
			setTimeout(() => setCopied(false), 1500);
		} catch {
			/* ignore */
		}
	};

	return (
		<div className="flex h-full flex-col rounded-3xl border border-border bg-card/50 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 sm:p-6">
			<div className="flex items-center justify-between gap-2">
				<span className="min-w-0 truncate rounded-full border border-border bg-secondary/60 px-3.5 py-1 font-bold font-mono text-foreground text-sm sm:text-base">
					/{displayName}
				</span>
				{cmd.cooldown > 0 && (
					<span className="shrink-0 rounded-full border border-border bg-secondary px-2.5 py-1 font-medium font-mono text-muted-foreground text-xs sm:text-sm">
						{cmd.cooldown}s
					</span>
				)}
			</div>

			<Separator className="my-4" />

			{cmd.description.content && (
				<p className="flex-1 text-muted-foreground text-sm leading-relaxed sm:text-base">
					{cmd.description.content}
				</p>
			)}

			<Separator className="my-4" />

			<div className="flex flex-wrap items-center justify-between gap-3">
				<div className="flex flex-wrap items-center gap-2">
					<Badge
						variant="secondary"
						className="h-7 rounded-full border border-border px-3.5 font-bold text-xs uppercase tracking-wider sm:h-8 sm:text-sm"
					>
						{cmd.category}
					</Badge>
					{cmd.aliases.map((a) => (
						<Badge
							key={a}
							variant="outline"
							className="h-6 rounded-full border-border px-3 font-mono font-normal text-muted-foreground text-xs sm:h-7 sm:text-sm"
						>
							{a}
						</Badge>
					))}
				</div>

				<Tooltip open={copied}>
					<TooltipTrigger asChild>
						<button
							type="button"
							onClick={handleCopy}
							className={cn(
								"flex shrink-0 cursor-pointer items-center gap-1.5 font-medium text-xs transition-colors sm:text-sm",
								copied ? "text-primary" : "text-muted-foreground hover:text-primary",
							)}
						>
							<LuCopy className="h-3.5 w-3.5" />
							Click to copy
						</button>
					</TooltipTrigger>
					<TooltipContent side="top">
						<span className="flex items-center gap-1">
							<LuCheck className="h-3 w-3" />
							Copied!
						</span>
					</TooltipContent>
				</Tooltip>
			</div>
		</div>
	);
}

export function CommandList({ commands }: { commands: Command[] }) {
	if (commands.length === 0) {
		return (
			<div className="py-16 text-center text-muted-foreground">
				No commands found matching your search.
			</div>
		);
	}

	return (
		<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
			{commands.map((cmd) => (
				<CommandCard key={cmd.name} cmd={cmd} />
			))}
		</div>
	);
}
