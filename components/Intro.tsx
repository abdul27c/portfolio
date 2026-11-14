import { Cloud, Linkedin, Mail, ShieldCheck, Workflow } from "lucide-react";
import { site } from "@/lib/site";
import SectionHeading from "./SectionHeading";
import YouTubeEmbed from "./YouTubeEmbed";

const pillars = [
  { icon: ShieldCheck, text: "Runtime guardrails for AI agents and LLM-powered services" },
  { icon: Workflow, text: "Automated compliance and security gates in CI/CD" },
  { icon: Cloud, text: "Least-privilege, policy-as-code AWS architectures" },
];

export default function Intro() {
  return (
    <section id="about" className="scroll-mt-14 border-t border-ink-800 bg-ink-900/40 py-20 sm:py-28">
      <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.25fr] lg:items-center lg:gap-14">
        <div>
          <SectionHeading
            index="01"
            label="about"
            title="A quick introduction"
            description="A short video intro for recruiters and hiring teams: what I build, how I approach security engineering, and the kind of team I want to join."
          />
          <ul className="-mt-4 space-y-3 sm:-mt-6">
            {pillars.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-3 text-fog-300">
                <Icon className="mt-0.5 h-5 w-5 shrink-0 text-signal" aria-hidden />
                <span>{text}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={site.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-ink-600 px-4 py-2 font-mono text-sm text-fog-100 transition hover:border-cyan hover:text-cyan"
            >
              <Linkedin className="h-4 w-4" aria-hidden />
              LinkedIn
            </a>
            <a
              href={`mailto:${site.links.email}`}
              className="inline-flex items-center gap-2 rounded-md border border-ink-600 px-4 py-2 font-mono text-sm text-fog-100 transition hover:border-signal hover:text-signal"
            >
              <Mail className="h-4 w-4" aria-hidden />
              Email me
            </a>
          </div>
        </div>

        <figure>
          <div className="rounded-lg border border-ink-700 bg-ink-950 p-2 sm:p-3">
            <YouTubeEmbed video={site.videos.intro} title={`${site.name} — introduction`} placeholderLabel="intro video coming soon" />
          </div>
          <figcaption className="mt-3 font-mono text-xs text-fog-500">
            <span className="text-signal">#</span> recruiter intro
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
