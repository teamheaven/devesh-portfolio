import { motion } from "../lib/motion.jsx";
import { leadership } from "../data/portfolio.js";
import SectionHeader from "./SectionHeader.jsx";

export default function ExtraCurricular() {
  const Icon = leadership.icon;
  const BadgeIcon = leadership.badgeIcon;

  return (
    <section id="extra" className="section-pad">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Leadership"
          title="Extra Curricular Activities"
          description="Leadership experience that demonstrates ownership, communication, coordination, and execution under real organizational responsibility."
        />

        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -6 }}
          className="glass-card mt-12 overflow-hidden rounded-3xl"
        >
          <div className="grid gap-0 lg:grid-cols-[0.78fr_1.22fr]">
            <div className="bg-slate-950 p-8 text-white dark:bg-white/[0.06]">
              <div className="flex items-center justify-between">
                <span className="grid h-16 w-16 place-items-center rounded-3xl bg-teal-300/15 text-teal-200">
                  <Icon size={30} />
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 text-sm font-semibold text-amber-100">
                  <BadgeIcon size={16} /> {leadership.duration}
                </span>
              </div>
              <p className="mt-10 text-sm font-semibold uppercase tracking-[0.2em] text-teal-200">Leadership achievement</p>
              <h3 className="mt-3 font-display text-2xl font-bold">{leadership.title}</h3>
            </div>
            <div className="p-8 sm:p-10">
              <p className="text-lg leading-9 text-slate-700 dark:text-slate-200">{leadership.description}</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {["40+ students led", "Technical events", "Operations coordination"].map((item) => (
                  <div key={item} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-200">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
