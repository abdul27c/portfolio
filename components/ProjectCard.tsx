import { ArrowUpRight, Github, Youtube } from "lucide-react";
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

        {(project.repo || project.walkthroughUrl) && (
          <div className="mt-6 flex flex-wrap gap-2 lg:mt-auto lg:pt-6">
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} source code`}
                className="inline-flex items-center gap-1.5 rounded-md border border-ink-600 px-3 py-1.5 font-mono text-xs text-fog-100 transition-colors hover:border-signal hover:text-signal"
              >
                <Github className="h-3.5 w-3.5" aria-hidden />
                Source
                <ArrowUpRight className="h-3 w-3" aria-hidden />
              </a>
            )}
            {project.walkthroughUrl && (
              <a
                href={project.walkthroughUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} video walkthrough`}
                className="inline-flex items-center gap-1.5 rounded-md border border-cyan/40 bg-cyan/5 px-3 py-1.5 font-mono text-xs text-cyan transition-colors hover:border-cyan hover:bg-cyan/10"
              >
                <Youtube className="h-3.5 w-3.5" aria-hidden />
                Walkthrough
                <ArrowUpRight className="h-3 w-3" aria-hidden />
              </a>
            )}
          </div>
        )}
      </div>

      {featured && project.videoKey && (
        <div className="mt-8 lg:mt-0 lg:self-center">
          <YouTubeEmbed
            video={site.videos[project.videoKey]}
            title={`${project.title} — quick walkthrough`}
            placeholderLabel="walkthrough video coming soon"
            compact
          />
          <p className="mt-3 font-mono text-xs text-fog-500">
            ▶ quick walkthrough · full deep dive below
          </p>
        </div>
      )}
    </article>
  );
}
