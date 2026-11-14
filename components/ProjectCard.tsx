import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/lib/site";
import { site } from "@/lib/site";
import YouTubeEmbed from "./YouTubeEmbed";

type Props = { project: Project; featured?: boolean; className?: string };

export default function ProjectCard({ project, featured = false, className = "" }: Props) {
  return (
    <article
      id={project.id}
      className={`group relative flex flex-col rounded-lg border border-ink-700 bg-ink-900/60 p-6 transition-colors hover:border-signal/40 sm:p-7 ${
        featured ? "md:col-span-2 lg:col-span-3 lg:grid lg:grid-cols-[1fr_1.1fr] lg:gap-10" : ""
      } ${className}`}
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-between font-mono text-xs">
          <span className="text-signal">{project.index}</span>
          {featured && (
            <span className="rounded border border-cyan/30 bg-cyan/5 px-2 py-0.5 text-cyan">featured</span>
          )}
        </div>

        <h3 className="mt-4 text-xl font-semibold tracking-tight text-fog-100 sm:text-2xl">{project.title}</h3>
        <p className="mt-3 leading-relaxed text-fog-300">{project.summary}</p>

        <ul className="mt-5 space-y-2 text-sm text-fog-300">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-2.5">
              <span className="mt-0.5 font-mono text-signal" aria-hidden>
                ›
              </span>
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <ul className="mt-6 flex flex-wrap gap-1.5" aria-label="Tech stack">
          {project.stack.map((s) => (
            <li key={s} className="rounded bg-ink-800 px-2 py-0.5 font-mono text-[11px] text-fog-300">
              {s}
            </li>
          ))}
        </ul>

        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex w-fit items-center gap-1.5 font-mono text-sm text-fog-100 transition-colors hover:text-signal lg:mt-auto lg:pt-6"
          >
            <Github className="h-4 w-4" aria-hidden />
            view source
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
          </a>
        )}
      </div>

      {featured && project.hasVideo && (
        <div className="mt-8 lg:mt-0 lg:self-center">
          <YouTubeEmbed videoId={site.walkthroughVideoId} title={`${project.title} walkthrough`} compact />
          <p className="mt-3 font-mono text-xs text-fog-500">
            ▶ demo: blocking a prompt-injection attempt in real time
          </p>
        </div>
      )}
    </article>
  );
}
