import { Layers, ShieldAlert, Workflow } from "lucide-react";
import { site } from "@/lib/site";
import SectionHeading from "./SectionHeading";
import YouTubeEmbed from "./YouTubeEmbed";

const chapters = [
  {
    icon: Layers,
    title: "Architectural breakdown",
    body: "How the proxy intercepts agent ↔ LLM traffic, the request pipeline, and where each guardrail sits.",
  },
  {
    icon: ShieldAlert,
    title: "Threat modeling",
    body: "Mapping prompt injection, data leakage and insecure output handling to the OWASP LLM Top 10.",
  },
  {
    icon: Workflow,
    title: "Secure delivery",
    body: "Dockerised build, automated tests and security gates in the CI/CD pipeline.",
  },
];

export default function VideoSection() {
  return (
    <section id="walkthrough" className="scroll-mt-14 border-t border-ink-800 bg-ink-900/40 py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          index="02"
          label="walkthrough"
          title="AI Agent Security Proxy — deep dive"
          description="A recorded walkthrough of the system: architecture, threat model, and a live demo of guardrails stopping real attack patterns."
        />

        <figure>
          <div className="rounded-lg border border-ink-700 bg-ink-950 p-2 sm:p-3">
            <YouTubeEmbed videoId={site.walkthroughVideoId} title="AI Agent Security Proxy — architecture & threat-modeling walkthrough" />
          </div>
          <figcaption className="mt-4 font-mono text-xs text-fog-500">
            <span className="text-signal">#</span> architecture breakdown · threat modeling · live attack demo
          </figcaption>
        </figure>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {chapters.map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-lg border border-ink-700 bg-ink-900/60 p-5">
              <Icon className="h-5 w-5 text-cyan" aria-hidden />
              <h3 className="mt-3 font-medium text-fog-100">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-fog-300">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
