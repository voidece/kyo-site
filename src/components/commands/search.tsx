"use client";

import { useMemo, useState } from "react";
import { LuCircleAlert, LuSearch } from "react-icons/lu";
import { CommandList } from "@/components/commands/list";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Command } from "@/types";

export function CommandSearch({ commands }: { commands: Command[] | null }) {
	const [search, setSearch] = useState("");
	const [activeTab, setActiveTab] = useState("all");

	const categories = useMemo(() => {
		const list = commands ?? [];
		return [...new Set(list.map((c) => c.category))];
	}, [commands]);

	const filtered = useMemo(() => {
		const list = commands ?? [];
		const base = list.filter((c) => activeTab === "all" || c.category === activeTab);
		const q = search.trim().toLowerCase();

		if (!q) return base;

		const score = (cmd: Command) => {
			const name = cmd.name.toLowerCase();
			const desc = cmd.description.content.toLowerCase();
			const aliases = cmd.aliases.map((a) => a.toLowerCase());

			if (name === q) return 100;
			if (aliases.includes(q)) return 90;

			if (name.startsWith(q)) return 80;
			if (aliases.some((a) => a.startsWith(q))) return 70;

			if (name.includes(q)) return 50;
			if (aliases.some((a) => a.includes(q))) return 40;
			if (desc.includes(q)) return 20;

			return 0;
		};

		return base
			.map((cmd) => ({ cmd, item: score(cmd) }))
			.filter(({ item }) => item > 0)
			.sort((a, b) => b.item - a.item)
			.map(({ cmd }) => cmd);
	}, [search, activeTab, commands]);

	if (commands === null) {
		return (
			<div className="flex flex-col items-center justify-center gap-3 py-16 text-muted-foreground">
				<LuCircleAlert className="h-8 w-8 text-destructive" />
				<span className="font-medium text-foreground text-lg">Failed to load</span>
				<span className="text-sm">Backend may be down. Please try again later.</span>
			</div>
		);
	}

	return (
		<Tabs value={activeTab} onValueChange={setActiveTab} className="w-full flex-col">
			<div className="mb-8 w-full">
				<div className="glass rounded-3xl p-4 sm:p-6">
					<div className="flex flex-wrap items-center gap-3">
						<div className="relative w-full sm:w-72">
							<LuSearch className="pointer-events-none absolute top-1/2 left-4 z-10 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
							<Input
								type="text"
								placeholder="Search commands..."
								value={search}
								onChange={(e) => setSearch(e.target.value)}
								className="h-12 w-full rounded-full border-border/70 bg-background/40 py-3 pr-4 pl-12 text-sm focus:ring-1 focus:ring-ring/30 focus-visible:ring-1 focus-visible:ring-ring/30 sm:h-11 sm:text-base"
							/>
						</div>

						<TabsList className="contents">
							<TabsTrigger
								value="all"
								className="shrink-0 rounded-full border-2 border-border/70 bg-transparent px-5 py-2.5 font-bold text-muted-foreground text-xs uppercase tracking-wider hover:border-primary/40 hover:text-foreground data-active:border-primary/40 data-active:bg-primary/10 data-active:text-primary data-active:shadow-none data-active:hover:text-primary sm:px-6 sm:text-sm"
							>
								All
							</TabsTrigger>
							{categories.map((cat) => (
								<TabsTrigger
									key={cat}
									value={cat}
									className="shrink-0 rounded-full border-2 border-border/70 bg-transparent px-5 py-2.5 font-bold text-muted-foreground text-xs uppercase tracking-wider hover:border-primary/40 hover:text-foreground data-active:border-primary/40 data-active:bg-primary/10 data-active:text-primary data-active:shadow-none data-active:hover:text-primary sm:px-6 sm:text-sm"
								>
									{cat}
								</TabsTrigger>
							))}
						</TabsList>
					</div>
				</div>
			</div>

			<TabsContent value={activeTab} className="mt-0">
				<CommandList commands={filtered} />
			</TabsContent>
		</Tabs>
	);
}
