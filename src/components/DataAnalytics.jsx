import { motion } from "../lib/motion.jsx";
import { analyticsCards } from "../data/portfolio.js";
import SectionHeader from "./SectionHeader.jsx";

export default function DataAnalytics() {
  return (
    <section id="analytics" className="section-pad border-y border-slate-200/80 bg-white/70 dark:border-white/10 dark:bg-white/[0.025]">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Data Analytics"
          title="Data Analytics & Insights"
          description="Experienced in analyzing datasets, cleaning and transforming data, creating visualizations, and extracting meaningful insights using programming and analytical techniques."
          align="center"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {analyticsCards.map((card, index) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.08, duration: 0.55 }}
              whileHover={{ y: -8 }}
              className="glass-card rounded-3xl p-6"
            >
              <div className="flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-teal-50 text-teal-700 dark:bg-teal-300/10 dark:text-teal-200">
                  <card.icon size={22} />
                </span>
                <span className="font-display text-3xl font-bold text-slate-200 dark:text-white/10">{card.value}</span>
              </div>
              <h3 className="mt-6 font-display text-xl font-bold text-slate-950 dark:text-white">{card.title}</h3>
              <p className="muted-text mt-3 text-sm leading-7">{card.description}</p>
              <div className="mt-6 h-20 rounded-2xl border border-slate-200 bg-slate-50 p-3 dark:border-white/10 dark:bg-white/[0.035]">
                <div className="flex h-full items-end gap-2">
                  {[46, 72, 54, 86, 64].map((height, barIndex) => (
                    <motion.span
                      key={`${card.title}-${height}-${barIndex}`}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${height}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.15 + index * 0.05 + barIndex * 0.05, duration: 0.5 }}
                      className="flex-1 rounded-t-md bg-gradient-to-t from-teal-500 to-sky-300"
                    />
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
