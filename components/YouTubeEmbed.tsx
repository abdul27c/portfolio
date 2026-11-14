"use client";

import { useState } from "react";
import Image from "next/image";
import { Clock, Play } from "lucide-react";
import { getYouTubeId } from "@/lib/youtube";

type Props = {
  /** YouTube video ID or URL. Empty → "Coming soon" placeholder. */
  video: string;
  title: string;
  /** Text under the play icon in the placeholder state. */
  placeholderLabel?: string;
  /** Smaller play affordance for use inside cards. */
  compact?: boolean;
};

/**
 * Lightweight YouTube facade: shows a static thumbnail and only loads the
 * YouTube iframe after the visitor clicks play (privacy-enhanced domain).
 * With no video set, renders a "Coming soon" placeholder in the same 16:9 box,
 * so dropping in a URL later never shifts the layout.
 */
export default function YouTubeEmbed({
  video,
  title,
  placeholderLabel = "video coming soon",
  compact = false,
}: Props) {
  const [active, setActive] = useState(false);
  const id = getYouTubeId(video);

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-md border border-ink-600 bg-ink-900">
      {!id ? (
        <div
          role="img"
          aria-label={`${title} — coming soon`}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="grid-bg absolute inset-0 opacity-60" aria-hidden />
          <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded border border-cyan/30 bg-ink-950/80 px-2 py-0.5 font-mono text-[11px] text-cyan">
            <Clock className="h-3 w-3" aria-hidden />
            coming soon
          </span>
          <span className="relative flex flex-col items-center gap-3">
            <span
              className={`flex items-center justify-center rounded-full border border-ink-600 bg-ink-950/80 text-fog-500 ${
                compact ? "h-12 w-12" : "h-16 w-16 sm:h-20 sm:w-20"
              }`}
            >
              <Play className={compact ? "h-5 w-5" : "h-7 w-7 sm:h-8 sm:w-8"} fill="currentColor" aria-hidden />
            </span>
            <span className="px-4 text-center font-mono text-xs text-fog-500">{placeholderLabel}</span>
          </span>
        </div>
      ) : active ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setActive(true)}
          aria-label={`Play video: ${title}`}
          className="group absolute inset-0 flex h-full w-full items-center justify-center"
        >
          <Image
            src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
            alt=""
            fill
            sizes="(min-width: 1024px) 800px, 100vw"
            className="object-cover opacity-70 transition-opacity group-hover:opacity-90"
          />
          <span
            className={`relative flex items-center justify-center rounded-full border border-signal/50 bg-ink-950/80 text-signal transition group-hover:scale-105 group-hover:bg-signal group-hover:text-ink-950 ${
              compact ? "h-12 w-12" : "h-16 w-16 sm:h-20 sm:w-20"
            }`}
          >
            <Play className={compact ? "h-5 w-5" : "h-7 w-7 sm:h-8 sm:w-8"} fill="currentColor" aria-hidden />
          </span>
        </button>
      )}
    </div>
  );
}
