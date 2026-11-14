import { ArrowRight, Github, Linkedin } from "lucide-react";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden />
      <div className="container-x relative grid gap-12 py-20 sm:py-28 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-16">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-signal/30 bg-signal/5 px-3 py-1 font-mono text-xs text-signal">
            <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden />
            open to DevSecOps & cloud security roles
          </p>

          <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight text-fog-100 sm:text-5xl lg:text-6xl">
            From customer service to{" "}
            <span className="bg-gradient-to-r from-signal to-cyan bg-clip-text text-transparent">
              securing the cloud.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-fog-300">{site.tagline}</p>

          <ul className="mt-8 flex flex-wrap gap-2" aria-label="Core technical focus">
            {site.focus.map((f) => (
              <li
                key={f}
                className="rounded border border-ink-600 bg-ink-800/60 px-2.5 py-1 font-mono text-xs text-fog-300"
              >
                {f}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-signal px-5 py-3 font-mono text-sm font-medium text-ink-950 transition hover:bg-signal/90"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
            </a>
            <a
              href={site.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-ink-600 px-5 py-3 font-mono text-sm text-fog-100 transition hover:border-signal hover:text-signal"
            >
              <Github className="h-4 w-4" aria-hidden />
              GitHub
            </a>
            <a
              href={site.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-ink-600 px-5 py-3 font-mono text-sm text-fog-100 transition hover:border-cyan hover:text-cyan"
            >
              <Linkedin className="h-4 w-4" aria-hidden />
              Get in Touch
            </a>
          </div>
        </div>

        <TerminalCard />
      </div>
    </section>
  );
}

function TerminalCard() {
  return (
    <div
      className="overflow-hidden rounded-lg border border-ink-600 bg-ink-900/90 shadow-2xl shadow-signal/5"
      role="img"
      aria-label="Terminal showing a security scan with zero critical findings"
    >
      <div className="flex items-center gap-2 border-b border-ink-700 bg-ink-800 px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-xs text-fog-500">zsh — infraguard</span>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-[12.5px] leading-6 text-fog-300 sm:text-sm">
        <code>
          <span className="text-signal">➜</span> <span className="text-cyan">~</span> whoami{"\n"}
          <span className="text-fog-100">cloud-security / devsecops engineer</span>
          {"\n\n"}
          <span className="text-signal">➜</span> <span className="text-cyan">~</span> infraguard scan ./terraform{"\n"}
          <span className="text-fog-500">[*] parsing 42 resources…</span>{"\n"}
          <span className="text-signal">[✓]</span> iam: least-privilege enforced{"\n"}
          <span className="text-signal">[✓]</span> s3: public access blocked{"\n"}
          <span className="text-signal">[✓]</span> kms: encryption at rest{"\n"}
          <span className="text-[#febc2e]">[!]</span> logging: 1 bucket missing logs{"\n\n"}
          <span className="text-fog-100">0 critical · 1 warning · pipeline </span>
          <span className="text-signal">PASSED</span>
          {"\n\n"}
          <span className="text-signal">➜</span> <span className="text-cyan">~</span>{" "}
          <span className="inline-block h-4 w-2 translate-y-0.5 animate-blink bg-signal" aria-hidden />
        </code>
      </pre>
    </div>
  );
}
