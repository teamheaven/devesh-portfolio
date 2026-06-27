/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Sora", "Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      colors: {
        ink: "#06111f",
        paper: "#f7fafc",
        line: "rgba(148, 163, 184, 0.22)"
      },
      boxShadow: {
        glow: "0 24px 80px rgba(45, 212, 191, 0.16)",
        card: "0 20px 70px rgba(2, 6, 23, 0.18)"
      }
    }
  },
  plugins: []
};
