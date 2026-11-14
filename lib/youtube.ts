const ID_RE = /^[A-Za-z0-9_-]{11}$/;

/**
 * Accepts a bare YouTube video ID or any common YouTube URL and returns the
 * 11-character video ID, or null if none can be found (e.g. empty / placeholder).
 */
export function getYouTubeId(input: string | null | undefined): string | null {
  const value = input?.trim();
  if (!value) return null;
  if (ID_RE.test(value)) return value;

  try {
    const url = new URL(value.startsWith("http") ? value : `https://${value}`);
    const host = url.hostname.replace(/^(www\.|m\.)/, "");
    let candidate: string | null = null;

    if (host === "youtu.be") {
      candidate = url.pathname.split("/")[1] ?? null;
    } else if (host === "youtube.com" || host === "youtube-nocookie.com") {
      candidate =
        url.searchParams.get("v") ??
        url.pathname.match(/^\/(?:embed|shorts|live|v)\/([^/?#]+)/)?.[1] ??
        null;
    }
    return candidate && ID_RE.test(candidate) ? candidate : null;
  } catch {
    return null;
  }
}
