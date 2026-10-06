import { getCommands } from "@/actions";
import { CommandSearch } from "@/components/commands/search";
import type { Command } from "@/types";

export default async function Commands() {
	const commands: Command[] | null = await getCommands().catch(() => null);

	return (
		<section className="py-24">
			<div className="w-full px-4">
				<div className="mx-auto max-w-7xl">
					<div className="mb-10 text-center">
						<h1 className="font-bold text-3xl sm:text-4xl md:text-5xl">
							Command <span className="gradient-text">Library</span>
						</h1>
						<p className="mx-auto mt-4 max-w-xl px-4 text-muted-foreground text-sm sm:text-base">
							Browse through our comprehensive list of commands. From music playback to server
							configuration.
						</p>
					</div>
					<CommandSearch commands={commands} />
				</div>
			</div>
		</section>
	);
}
