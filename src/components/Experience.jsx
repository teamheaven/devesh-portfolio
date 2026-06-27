import { motion } from "../lib/motion.jsx";
import { CalendarDays } from "../icons.jsx";
import { experiences } from "../data/portfolio.js";
import SectionHeader from "./SectionHeader.jsx";

export default function Experience() {
  return (
    <section id="experience" className="section-pad border-y border-slate-200/80 bg-white/70 dark:border-white/10 dark:bg-white/[0.025]">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Experience"
          title="Practical experience across mobile, frontend, and UI workflows."
          description="A timeline of roles where I built interfaces, tested features, collaborated with stakeholders, and improved user-facing systems."
        />

        <div className="relative mt-14">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-slate-200 dark:bg-white/10 md:block" />
          <div className="space-y-6">
            {experiences.map((item, index) => (
              <motion.article
                key={`${item.role}-${item.company}`}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ delay: index * 0.1, duration: 0.55 }}
                className="relative md:pl-12"
              >
                <span className="absolute left-0 top-7 hidden h-8 w-8 rounded-full border-4 border-white bg-teal-400 shadow-lg dark:border-ink md:block" />
                <div className="glass-card rounded-3xl p-6 sm:p-8">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="font-display text-xl font-bold text-slate-950 dark:text-white">{item.role}</h3>
                      <p className="mt-1 font-semibold text-teal-700 dark:text-teal-200">{item.company}</p>
                    </div>
                    <span className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-600 dark:border-white/10 dark:bg-white/[0.05] dark:text-slate-300">
                      <CalendarDays size={16} /> {item.duration}
                    </span>
                  </div>
                  <p className="muted-text mt-5 leading-8">{item.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
