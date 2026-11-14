"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

type Props = {
  videoId: string;
  title: string;
  /** Visual size of the play affordance. */
  compact?: boolean;
};

const PLACEHOLDER_ID = "YOUR_VIDEO_ID";

/**
 * Lightweight YouTube facade: renders a static thumbnail and only loads the
 * (heavy) YouTube iframe after the user clicks play. Uses the privacy-enhanced
 * youtube-nocookie.com domain.
 */
export default function YouTubeEmbed({ videoId, title, compact = false }: Props) {
  const [active, setActive] = useState(false);
  const isPlaceholder = !videoId || videoId === PLACEHOLDER_ID;

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-md border border-ink-600 bg-ink-900">
      {active && !isPlaceholder ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setActive(true)}
          disabled={isPlaceholder}
          aria-label={isPlaceholder ? `${title} — video coming soon` : `Play video: ${title}`}
          className="group absolute inset-0 flex h-full w-full items-center justify-center disabled:cursor-default"
        >
          {isPlaceholder ? (
            <div className="grid-bg absolute inset-0 opacity-60" aria-hidden />
          ) : (
            <Image
              src={`https://i.ytimg.com/vi/${encodeURIComponent(videoId)}/hqdefault.jpg`}
              alt=""
              fill
              sizes="(min-width: 1024px) 800px, 100vw"
              className="object-cover opacity-70 transition-opacity group-hover:opacity-90"
            />
          )}
          <span className="relative flex flex-col items-center gap-3">
            <span
              className={`flex items-center justify-center rounded-full border border-signal/50 bg-ink-950/80 text-signal transition group-enabled:group-hover:scale-105 group-enabled:group-hover:bg-signal group-enabled:group-hover:text-ink-950 ${
                compact ? "h-12 w-12" : "h-16 w-16 sm:h-20 sm:w-20"
              }`}
            >
              <Play className={compact ? "h-5 w-5" : "h-7 w-7 sm:h-8 sm:w-8"} fill="currentColor" aria-hidden />
            </span>
            {isPlaceholder && (
              <span className="font-mono text-xs text-fog-500">walkthrough video coming soon</span>
            )}
          </span>
        </button>
      )}
    </div>
  );
}
