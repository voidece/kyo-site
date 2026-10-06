export function formatBytes(mb: number): string {
	if (mb >= 1024) return `${(mb / 1024).toFixed(2)} GB`;
	return `${mb.toFixed(2)} MB`;
}
