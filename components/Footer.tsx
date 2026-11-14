import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { site } from "@/lib/site";

const contacts = [
  { label: "GitHub", value: "github.com/abdul27c", href: site.links.github, icon: Github, external: true },
  { label: "LinkedIn", value: "linkedin.com/in/abdallahhatem", href: site.links.linkedin, icon: Linkedin, external: true },
  { label: "Email", value: site.links.email, href: `mailto:${site.links.email}`, icon: Mail, external: false },
];

export default function Footer() {
  return (
    <footer id="contact" className="scroll-mt-14 border-t border-ink-800 bg-ink-900/40">
      <div className="container-x py-20 sm:py-24">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal">
          <span className="text-fog-500">05 /</span> contact
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          Let&apos;s build systems that are secure by default.
        </h2>
        <p className="mt-4 max-w-xl text-fog-300">
          Open to Cloud Security, DevSecOps and Platform Security roles. The fastest way to reach me is email or LinkedIn.
        </p>

        <ul className="mt-10 grid gap-3 sm:grid-cols-3">
          {contacts.map(({ label, value, href, icon: Icon, external }) => (
            <li key={label}>
              <a
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group flex items-center justify-between gap-3 rounded-lg border border-ink-700 bg-ink-950 p-4 transition-colors hover:border-signal/50"
              >
                <span className="flex min-w-0 items-center gap-3">
                  <Icon className="h-5 w-5 shrink-0 text-fog-300 group-hover:text-signal" aria-hidden />
                  <span className="min-w-0">
                    <span className="block text-sm text-fog-100">{label}</span>
                    <span className="block truncate font-mono text-xs text-fog-500">{value}</span>
                  </span>
                </span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-fog-500 group-hover:text-signal" aria-hidden />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-ink-800">
        <div className="container-x flex flex-col gap-2 py-6 font-mono text-xs text-fog-500 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} {site.name}. Built with Next.js & Tailwind CSS.
          </span>
          <span>
            <span className="text-signal">●</span> all systems operational
          </span>
        </div>
      </div>
    </footer>
  );
}
