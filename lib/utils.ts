export function formatSize(bytes: number): string {
  if (!Number.isFinite(bytes) || bytes < 0) return "0 B";
  if (bytes < 1024) return `${bytes} B`;

  const kb = bytes / 1024;
  if (kb < 1024) return `${kb.toFixed(1).replace(/\.0$/, "")} KB`;

  const mb = kb / 1024;
  if (mb < 1024) return `${mb.toFixed(1).replace(/\.0$/, "")} MB`;

  const gb = mb / 1024;
  return `${gb.toFixed(1).replace(/\.0$/, "")} GB`;
}

export const generateUUID = () => crypto.randomUUID();
