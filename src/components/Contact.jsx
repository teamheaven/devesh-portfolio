import { useState } from "react";
import { motion } from "../lib/motion.jsx";
import { Github, Linkedin, Mail, Send } from "../icons.jsx";
import SectionHeader from "./SectionHeader.jsx";

const contactLinks = [
  { label: "Email", value: "deveshnaik1003@gmail.com", href: "mailto:deveshnaik1003@gmail.com", icon: Mail },
  { label: "GitHub", value: "github.com/teamheaven", href: "https://github.com/teamheaven", icon: Github },
  { label: "LinkedIn", value: "linkedin.com/in/devesh-naik1003", href: "https://www.linkedin.com/in/devesh-naik1003/", icon: Linkedin }
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || "Recruiter"}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name}\nEmail: ${form.email}`);
    window.location.href = `mailto:deveshnaik1003@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="section-pad border-t border-slate-200/80 bg-white/70 dark:border-white/10 dark:bg-white/[0.025]">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Contact"
          title="Open to software, analytics, and associate engineering opportunities."
          description="Reach out for Software Developer, Associate Software Engineer, Python Developer, Data Analyst, or Data/BI Associate roles."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            className="glass-card rounded-3xl p-6 sm:p-8"
          >
            <h3 className="font-display text-xl font-bold text-slate-950 dark:text-white">Direct links</h3>
            <div className="mt-6 grid gap-3">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.label === "Email" ? undefined : "_blank"}
                  rel={link.label === "Email" ? undefined : "noreferrer"}
                  className="focus-ring flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-teal-300 hover:text-teal-700 dark:border-white/10 dark:bg-white/[0.045] dark:hover:text-teal-200"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-teal-50 text-teal-700 dark:bg-teal-300/10 dark:text-teal-200">
                    <link.icon size={20} />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-slate-500 dark:text-slate-400">{link.label}</span>
                    <span className="block font-semibold text-slate-900 dark:text-white">{link.value}</span>
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: 0.08 }}
            onSubmit={handleSubmit}
            className="glass-card rounded-3xl p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
                Name
                <input
                  required
                  value={form.name}
                  onChange={(event) => setForm((value) => ({ ...value, name: event.target.value }))}
                  className="focus-ring rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base font-medium text-slate-900 transition placeholder:text-slate-400 dark:border-white/10 dark:bg-white/[0.04] dark:text-white"
                  placeholder="Your name"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
                Email
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(event) => setForm((value) => ({ ...value, email: event.target.value }))}
                  className="focus-ring rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base font-medium text-slate-900 transition placeholder:text-slate-400 dark:border-white/10 dark:bg-white/[0.04] dark:text-white"
                  placeholder="name@example.com"
                />
              </label>
            </div>
            <label className="mt-5 grid gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
              Message
              <textarea
                required
                rows="6"
                value={form.message}
                onChange={(event) => setForm((value) => ({ ...value, message: event.target.value }))}
                className="focus-ring resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base font-medium text-slate-900 transition placeholder:text-slate-400 dark:border-white/10 dark:bg-white/[0.04] dark:text-white"
                placeholder="Tell me about the role, project, or interview opportunity."
              />
            </label>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-card transition hover:bg-teal-600 dark:bg-white dark:text-slate-950 dark:hover:bg-teal-200"
              >
                Send Message <Send size={17} />
              </motion.button>
              {sent && <p className="text-sm font-semibold text-teal-700 dark:text-teal-200">Opening your email client...</p>}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
