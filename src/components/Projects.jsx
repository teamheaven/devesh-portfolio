import { motion } from "../lib/motion.jsx";
import { ExternalLink, Github } from "../icons.jsx";
import { projects } from "../data/portfolio.js";
import SectionHeader from "./SectionHeader.jsx";

export default function Projects() {
  return (
    <section id="projects" className="section-pad">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Projects"
          title="Technical projects that connect software development with data and AI."
          description="A recruiter-friendly view of project scope, feature ownership, and technology choices across Java, Python, databases, machine learning, and cybersecurity."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{ delay: index * 0.07, duration: 0.55 }}
              whileHover={{ y: -8 }}
              className="glass-card group overflow-hidden rounded-3xl"
            >
              <div className={`h-1.5 bg-gradient-to-r ${project.accent}`} />
              <div className="p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <span className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${project.accent} p-3 text-white shadow-glow`}>
                    <project.icon size={24} />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold text-slate-950 dark:text-white">{project.title}</h3>
                    <p className="muted-text mt-3 leading-7">{project.description}</p>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">Features</p>
                  <div className="mt-3 grid gap-2">
                    {project.features.map((feature) => (
                      <div key={feature} className="flex gap-3 text-sm text-slate-700 dark:text-slate-300">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-400" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 dark:border-white/10 dark:bg-white/[0.045] dark:text-slate-200">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a href="https://github.com/" target="_blank" rel="noreferrer" className="focus-ring inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-600 dark:bg-white dark:text-slate-950 dark:hover:bg-teal-200">
                    GitHub <Github size={16} />
                  </a>
                  <a href="#contact" className="focus-ring inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-teal-300 hover:text-teal-700 dark:border-white/10 dark:bg-white/[0.06] dark:text-white dark:hover:text-teal-200">
                    Demo <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
