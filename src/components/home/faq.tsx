"use client";

import { useState } from "react";

type FAQItem = {
	question: string;
	answer: string;
};

export function FAQ({ items }: { items: FAQItem[] }) {
	const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

	function toggleItem(question: string) {
		setOpenItems((current) => ({
			...current,
			[question]: !current[question],
		}));
	}

	return (
		<div className="space-y-3">
			{items.map((item) => {
				const isOpen = openItems[item.question] ?? false;

				return (
					<div
						key={item.question}
						className="rounded-2xl border border-border bg-card/50 px-5 py-4 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-card/80"
					>
						<button
							type="button"
							aria-expanded={isOpen}
							onClick={() => toggleItem(item.question)}
							className="flex w-full cursor-pointer items-center justify-between gap-4 bg-transparent p-0 text-left font-semibold text-foreground/80"
						>
							{item.question}
							<span
								className={`text-2xl text-primary leading-none transition-transform duration-250 ease-in-out ${isOpen ? "rotate-45" : "rotate-0"}`}
								aria-hidden="true"
							>
								+
							</span>
						</button>
						<button
							type="button"
							aria-expanded={isOpen}
							onClick={() => toggleItem(item.question)}
							className={`grid w-full cursor-pointer overflow-hidden border-0 bg-transparent p-0 text-left transition-[grid-template-rows,opacity] duration-250 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
						>
							<span className="min-h-0">
								<span className="block max-w-2xl pt-3 pr-8 text-muted-foreground text-sm leading-relaxed">
									{item.answer}
								</span>
							</span>
						</button>
					</div>
				);
			})}
		</div>
	);
}
