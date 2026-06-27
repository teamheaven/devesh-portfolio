import { motion } from "../lib/motion.jsx";
import { Code2, Database, Lightbulb, TrendingUp } from "../icons.jsx";
import SectionHeader from "./SectionHeader.jsx";

const groups = [
  { title: "Software Skills", icon: Code2, items: ["Java", "Python", "SQL", "Web Development"] },
  { title: "Data Skills", icon: TrendingUp, items: ["Data Cleaning", "Data Analysis", "Data Visualization", "Machine Learning Insights"] }
];

const focus = [
  { label: "Problem solving", icon: Lightbulb },
  { label: "Building practical solutions", icon: Database },
  { label: "Continuous learning", icon: TrendingUp }
];

export default function About() {
  return (
    <section id="about" className="section-pad border-y border-slate-200/80 bg-white/70 dark:border-white/10 dark:bg-white/[0.025]">
      <div className="section-shell">
        <SectionHeader
          eyebrow="About"
          title="Software engineering foundation with analytical depth."
          description="Information Technology graduate with hands-on experience in software development, web technologies, databases, AI/ML projects, and data-driven applications."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55 }}
            className="glass-card rounded-3xl p-6 sm:p-8"
          >
            <p className="text-lg font-semibold text-slate-950 dark:text-white">Recruiter snapshot</p>
            <p className="muted-text mt-4 leading-8">
              I focus on turning technical ideas into useful products: writing maintainable code, connecting applications to databases, cleaning data for analysis, and applying machine learning concepts where they create practical value.
            </p>
            <div className="mt-6 grid gap-3">
              {focus.map((item) => (
                <div key={item.label} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-3 dark:border-white/10 dark:bg-white/[0.04]">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-teal-50 text-teal-700 dark:bg-teal-300/10 dark:text-teal-200">
                    <item.icon size={19} />
                  </span>
                  <span className="font-medium text-slate-800 dark:text-slate-100">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2">
            {groups.map((group, index) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ delay: index * 0.08, duration: 0.55 }}
                className="glass-card rounded-3xl p-6 sm:p-8"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-950 text-white dark:bg-white dark:text-slate-950">
                    <group.icon size={22} />
                  </span>
                  <h3 className="font-display text-xl font-bold text-slate-950 dark:text-white">{group.title}</h3>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 dark:border-white/10 dark:bg-white/[0.05] dark:text-slate-200">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
