import { motion } from "../lib/motion.jsx";
import { skills } from "../data/portfolio.js";
import SectionHeader from "./SectionHeader.jsx";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

const card = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function Skills() {
  return (
    <section id="skills" className="section-pad">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Skills"
          title="A balanced toolkit for software, analytics, and AI-assisted projects."
          description="Hands-on skills across programming, frontend development, databases, analytical workflows, engineering tools, and computer science fundamentals."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
          className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3"
        >
          {skills.map((group) => (
            <motion.div
              key={group.title}
              variants={card}
              whileHover={{ y: -8 }}
              className="glass-card rounded-3xl p-6 transition"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">Capability</p>
                  <h3 className="mt-2 font-display text-xl font-bold text-slate-950 dark:text-white">{group.title}</h3>
                </div>
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-teal-50 text-teal-700 dark:bg-teal-300/10 dark:text-teal-200">
                  <group.icon size={22} />
                </span>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span key={skill} className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 dark:border-white/10 dark:bg-white/[0.045] dark:text-slate-200">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
