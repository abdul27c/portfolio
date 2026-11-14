import { Cloud, FileCode, ShieldCheck } from "lucide-react";
import { skillGroups } from "@/lib/site";
import SectionHeading from "./SectionHeading";

const icons = [Cloud, FileCode, ShieldCheck];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-14 border-t border-ink-800 py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          index="03"
          label="skills"
          title="Technical positioning"
          description="Customer-facing roles taught me to diagnose problems under pressure and explain them clearly. I now apply that to cloud infrastructure and security."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {skillGroups.map((group, i) => {
            const Icon = icons[i];
            return (
              <div key={group.title} className="overflow-hidden rounded-lg border border-ink-700 bg-ink-900/60">
                <div className="flex items-center gap-2 border-b border-ink-700 bg-ink-800/70 px-5 py-3 font-mono text-xs text-fog-500">
                  <span className="text-signal">$</span> {group.command}
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2.5">
                    <Icon className="h-5 w-5 text-signal" aria-hidden />
                    <h3 className="font-medium text-fog-100">{group.title}</h3>
                  </div>
                  <ul className="mt-5 space-y-2.5 font-mono text-sm">
                    {group.skills.map((s) => (
                      <li key={s} className="flex items-center gap-2 text-fog-300">
                        <span className="text-signal" aria-hidden>
                          ✓
                        </span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
