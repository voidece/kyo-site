import { FaAmazon } from "react-icons/fa";
import { LuMusic2 } from "react-icons/lu";
import {
	SiApplemusic,
	SiDeezer,
	SiJio,
	SiSoundcloud,
	SiSpotify,
	SiTidal,
	SiYoutubemusic,
} from "react-icons/si";

const PLATFORMS = [
	{ name: "Spotify", icon: SiSpotify },
	{ name: "Apple Music", icon: SiApplemusic },
	{ name: "SoundCloud", icon: SiSoundcloud },
	{ name: "Deezer", icon: SiDeezer },
	{ name: "Tidal", icon: SiTidal },
	{ name: "JioSaavn", icon: SiJio },
	{ name: "Amazon Music", icon: FaAmazon },
	{ name: "YouTube Music", icon: SiYoutubemusic },
	{ name: "Gaana", icon: LuMusic2 },
];

export function Platforms() {
	return (
		<section
			aria-labelledby="platforms-heading"
			className="relative overflow-hidden py-20 sm:py-28"
		>
			<div className="mx-auto flex max-w-7xl flex-col items-center gap-12 text-center sm:gap-16">
				<p
					id="platforms-heading"
					className="px-4 font-semibold text-2xl text-muted-foreground sm:text-4xl"
				>
					Play from the places you already listen.
				</p>
				<div className="w-full overflow-hidden py-2">
					<div className="hover:scroll-paused flex w-max animate-infinite-scroll gap-6 whitespace-nowrap">
						{PLATFORMS.flatMap((platform) => [
							{ ...platform, key: platform.name },
							{ ...platform, key: `${platform.name}-duplicate` },
						]).map(({ name, icon: Icon, key }) => (
							<div
								key={key}
								className="flex h-23 w-[min(60vw,300px)] shrink-0 items-center justify-start gap-3 rounded-3xl border-2 border-border bg-card/60 px-5 font-semibold text-foreground text-lg backdrop-blur-sm sm:h-23 sm:gap-4 sm:px-6 sm:text-xl"
							>
								<Icon aria-hidden="true" className="size-7 text-muted-foreground sm:size-8" />
								<span>{name}</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Platforms;
