"use server";

import { cacheLife } from "next/cache";
import { unstable_rethrow } from "next/navigation";
import type { Command, Status } from "@/types";

const API_URL = process.env.BACKEND_API_URL;

async function fetchJson<T>(path: string): Promise<T | null> {
	if (!API_URL) {
		console.warn("API URL not configured, skipping fetch");
		return null;
	}

	const res = await fetch(`${API_URL.replace(/\/$/, "")}/api/${path}`, {
		headers: { "Content-Type": "application/json" },
	});

	if (!res.ok) throw new Error(`Failed to fetch ${path}: ${res.status} ${res.statusText}`);
	return res.json() as Promise<T>;
}

export async function getStatus(): Promise<Status | null> {
	try {
		return await fetchJson<Status>("status");
	} catch (error) {
		unstable_rethrow(error);
		console.error("Error fetching status:", error);
		throw new Error("Failed to fetch status", { cause: error });
	}
}

export async function getCommands(): Promise<Command[] | null> {
	"use cache";
	cacheLife("days");

	try {
		return await fetchJson<Command[]>("commands");
	} catch (error) {
		unstable_rethrow(error);
		console.error("Error fetching commands:", error);
		throw new Error("Failed to fetch commands", { cause: error });
	}
}
