import { motion } from "../lib/motion.jsx";
import { ArrowRight, BarChart3, Download, Github, Linkedin, Sparkles } from "../icons.jsx";
import { socials } from "../data/portfolio.js";

export default function Hero() {
  const github = socials.find((item) => item.label === "GitHub");
  const linkedin = socials.find((item) => item.label === "LinkedIn");

  return (
    <section id="home" className="relative isolate min-h-screen overflow-hidden pt-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(37,99,235,0.34),transparent_30%),radial-gradient(circle_at_78%_18%,rgba(14,165,233,0.22),transparent_26%),linear-gradient(180deg,#071a33_0%,#0a2142_52%,#07162b_100%)]" />
      <div className="section-shell grid min-h-[calc(100vh-6rem)] items-center gap-12 pb-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="inline-flex items-center gap-2 rounded-full border border-blue-300/25 bg-blue-400/10 px-4 py-2 text-sm font-semibold text-blue-100 shadow-glow"
          >
            <Sparkles size={16} /> Software Developer with data-driven product thinking
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.65 }}
            className="mt-7 font-display text-4xl font-extrabold tracking-normal text-white sm:text-6xl lg:text-7xl"
          >
            Hi, I'm Devesh Naik <span aria-hidden="true">👋</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mt-5 text-xl font-semibold text-blue-100 sm:text-2xl"
          >
            Software Developer | IT Engineer | Data Analytics Enthusiast
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.6 }}
            className="muted-text mt-6 max-w-2xl text-base leading-8 sm:text-lg"
          >
            Information Technology graduate passionate about building software solutions, analyzing data, and creating technology-driven products using programming, databases, analytics, and machine learning.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32, duration: 0.55 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <motion.a whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }} href="#projects" className="focus-ring inline-flex items-center gap-2 rounded-full bg-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-card transition hover:bg-blue-400">
              View Projects <ArrowRight size={17} />
            </motion.a>
            <motion.a whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }} href="/Devesh Naik_CV.pdf" download className="focus-ring inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-white/[0.06] px-5 py-3 text-sm font-semibold text-blue-50 transition hover:border-blue-300/50 hover:bg-blue-400/10">
              Download Resume <Download size={17} />
            </motion.a>
            <motion.a whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }} href="https://github.com/teamheaven" target="_blank" rel="noreferrer" className="focus-ring inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-white/[0.06] px-5 py-3 text-sm font-semibold text-blue-50 transition hover:border-blue-300/50 hover:bg-blue-400/10">
              GitHub <Github size={17} />
            </motion.a>
            <motion.a whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }} href="https://www.linkedin.com/in/devesh-naik1003/" target="_blank" rel="noreferrer" className="focus-ring inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-white/[0.06] px-5 py-3 text-sm font-semibold text-blue-50 transition hover:border-blue-300/50 hover:bg-blue-400/10">
              LinkedIn <Linkedin size={17} />
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28, rotate: -1 }}
          animate={{ opacity: 1, y: [0, -12, 0], rotate: 0 }}
          transition={{ opacity: { duration: 0.75, delay: 0.22 }, y: { repeat: Infinity, duration: 5.5, ease: "easeInOut" } }}
          className="glass-card relative mx-auto w-full max-w-lg rounded-[2rem] p-5"
        >
          <div className="rounded-[1.45rem] border border-blue-300/10 bg-[#030b1f] p-5 text-white">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-400" />
                <span className="h-3 w-3 rounded-full bg-amber-300" />
                <span className="h-3 w-3 rounded-full bg-cyan-300" />
              </div>
              <span className="text-xs text-slate-400">developer.profile</span>
            </div>
            <div className="space-y-5 py-6 font-mono text-sm leading-7">
              <p><span className="text-sky-300">const</span> candidate = &#123;</p>
              <p className="pl-5"><span className="text-cyan-300">role</span>: "Software Developer",</p>
              <p className="pl-5"><span className="text-cyan-300">focus</span>: ["Python", "Java", "React", "SQL"],</p>
              <p className="pl-5"><span className="text-cyan-300">analytics</span>: "Data cleaning, BI insights, ML exposure",</p>
              <p className="pl-5"><span className="text-cyan-300">mindset</span>: "Build practical solutions"</p>
              <p>&#125;;</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-white/[0.06] p-4">
                <BarChart3 className="text-cyan-300" size={22} />
                <p className="mt-3 text-sm font-semibold">Data to Decisions</p>
                <p className="mt-1 text-xs text-slate-400">SQL, reporting, visual insights</p>
              </div>
              <div className="rounded-2xl bg-white/[0.06] p-4">
                <Sparkles className="text-amber-200" size={22} />
                <p className="mt-3 text-sm font-semibold">AI/ML Exposure</p>
                <p className="mt-1 text-xs text-slate-400">Recommendation and prediction systems</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
