import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "./lib/motion.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import DataAnalytics from "./components/DataAnalytics.jsx";
import ExtraCurricular from "./components/ExtraCurricular.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] grid place-items-center bg-ink text-white"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 font-display text-sm tracking-wide shadow-glow"
      >
        &lt;Devesh.dev /&gt; Loading...
      </motion.div>
    </motion.div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState("dark");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 130, damping: 22, restDelta: 0.001 });

  const sections = useMemo(
    () => ["home", "about", "skills", "experience", "projects", "analytics", "extra", "contact"],
    []
  );

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 900);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="portfolio-root min-h-screen bg-[#071a33] text-slate-100 antialiased transition-colors duration-300">
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>
      <motion.div
        style={{ scaleX }}
        className="fixed left-0 top-0 z-[90] h-1 w-full origin-left bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500"
      />
      <Navbar sections={sections} theme={theme} setTheme={setTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <DataAnalytics />
        <ExtraCurricular />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
