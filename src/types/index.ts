export interface Command {
	name: string;
	description: {
		content: string;
	};
	aliases: string[];
	cooldown: number;
	category: string;
}

export interface Node {
	name: string;
	connected: boolean;
	players: number;
	playing: number;
	uptime: string;
	cpu: {
		cores: number;
		load: {
			system: number;
			lavalink: number;
		};
	};
	memory: {
		used: number;
		free: number;
		allocated: number;
		reservable: number;
	};
}

export interface Status {
	status: "online" | "offline" | "degraded";
	bot: {
		name: string;
		id: string;
		uptime: string;
		ping: number;
	};
	lavalink: {
		players: {
			active: number;
			total: number;
		};
		nodes: Node[];
	};
}
