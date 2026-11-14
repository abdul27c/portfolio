import { projects } from "@/lib/site";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-14 border-t border-ink-800 py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          index="02"
          label="projects"
          title="Featured engineering work"
          description="Security tooling built around one idea: make the secure path the default path — at build time, deploy time and runtime."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard
              key={p.id}
              project={p}
              featured={i === 0}
              // On 2-column tablets, let the last card span the row instead of leaving a gap
              className={i === projects.length - 1 && projects.length % 2 === 0 ? "md:col-span-2 lg:col-span-1" : ""}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
