import { useEffect, useState } from "react";
import { motion } from "../lib/motion.jsx";
import { Menu, Moon, Sun, X } from "../icons.jsx";

const labels = {
  home: "Home",
  about: "About",
  skills: "Skills",
  experience: "Experience",
  projects: "Projects",
  analytics: "Data Analytics",
  extra: "Extra Curricular",
  contact: "Contact"
};

export default function Navbar({ sections, theme, setTheme }) {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: "-18% 0px -62% 0px", threshold: [0.15, 0.35, 0.55] }
    );

    sections.forEach((id) => {
      const node = document.getElementById(id);
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, [sections]);

  const navItems = sections.map((id) => ({ id, label: labels[id] }));

  const handleNav = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-blue-300/10 bg-[#071a33]/82 shadow-sm backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav className="section-shell flex h-16 items-center justify-between gap-4">
        <button
          onClick={() => handleNav("home")}
          className="focus-ring rounded-md font-display text-base font-bold text-white"
          aria-label="Go to home"
        >
          Devesh Naik
        </button>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className={`relative rounded-full px-3 py-2 text-sm font-medium transition hover:text-blue-200 ${
                active === item.id ? "text-white" : "text-blue-100/70"
              }`}
            >
              {item.label}
              {active === item.id && (
                <motion.span layoutId="activeSection" className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-blue-400" />
              )}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="focus-ring grid h-10 w-10 place-items-center rounded-full border border-blue-300/15 bg-white/[0.06] text-blue-100 transition hover:border-blue-300/40 hover:text-white"
            aria-label="Toggle color theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setOpen((value) => !value)}
            className="focus-ring grid h-10 w-10 place-items-center rounded-full border border-blue-300/15 bg-white/[0.06] text-blue-100 lg:hidden"
            aria-label="Toggle navigation"
          >
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-shell pb-4 lg:hidden"
        >
          <div className="grid gap-1 rounded-2xl border border-blue-300/15 bg-[#06162d] p-2 shadow-card">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`rounded-xl px-3 py-3 text-left text-sm font-medium ${
                  active === item.id ? "bg-blue-400/10 text-blue-100" : "text-blue-100/70"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
