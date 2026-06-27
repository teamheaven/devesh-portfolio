const paths = {
  ArrowRight: ["M5 12h14", "M13 5l7 7-7 7"],
  BarChart3: ["M3 3v18h18", "M8 17V9", "M13 17V5", "M18 17v-6"],
  BrainCircuit: ["M9 3a4 4 0 0 0-4 4v1a4 4 0 0 0 0 8v1a4 4 0 0 0 4 4", "M15 3a4 4 0 0 1 4 4v1a4 4 0 0 1 0 8v1a4 4 0 0 1-4 4", "M9 8h2", "M13 8h2", "M12 12h4", "M8 16h3"],
  BriefcaseBusiness: ["M10 6V5a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v1", "M3 8h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8Z", "M9 12h6"],
  CalendarDays: ["M8 2v4", "M16 2v4", "M3 10h18", "M5 4h14a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"],
  Code2: ["M18 16l4-4-4-4", "M6 8l-4 4 4 4", "M14.5 4l-5 16"],
  Database: ["M4 6c0-2 4-4 8-4s8 2 8 4-4 4-8 4-8-2-8-4Z", "M4 6v6c0 2 4 4 8 4s8-2 8-4V6", "M4 12v6c0 2 4 4 8 4s8-2 8-4v-6"],
  Download: ["M12 3v12", "M7 10l5 5 5-5", "M5 21h14"],
  ExternalLink: ["M15 3h6v6", "M10 14L21 3", "M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"],
  FileSpreadsheet: ["M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z", "M14 2v6h6", "M8 13h8", "M8 17h8", "M10 9v10"],
  Github: ["M15 22v-4a4 4 0 0 0-1-3c3 0 6-2 6-6a5 5 0 0 0-1-3 5 5 0 0 0 0-3s-1 0-3 1a10 10 0 0 0-6 0C8 3 7 3 7 3a5 5 0 0 0 0 3 5 5 0 0 0-1 3c0 4 3 6 6 6a4 4 0 0 0-1 3v4", "M9 18c-4 2-4-2-6-2"],
  GraduationCap: ["M22 10L12 5 2 10l10 5 10-5Z", "M6 12v5c3 3 9 3 12 0v-5"],
  Layers3: ["M12 2 2 7l10 5 10-5-10-5Z", "m2 12 10 5 10-5", "m2 17 10 5 10-5"],
  Lightbulb: ["M9 18h6", "M10 22h4", "M12 2a7 7 0 0 0-4 13c1 1 1 2 1 3h6c0-1 0-2 1-3a7 7 0 0 0-4-13Z"],
  LineChart: ["M3 3v18h18", "M7 16l4-4 3 3 5-7"],
  Linkedin: ["M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V9h4v2", "M2 9h4v12H2Z", "M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"],
  Mail: ["M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z", "m22 6-10 7L2 6"],
  Menu: ["M4 6h16", "M4 12h16", "M4 18h16"],
  Moon: ["M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"],
  Send: ["M22 2 11 13", "M22 2 15 22l-4-9-9-4 20-7Z"],
  ShieldCheck: ["M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z", "m9 12 2 2 4-5"],
  Sparkles: ["M12 3l1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3Z", "M5 3v4", "M3 5h4", "M19 17v4", "M17 19h4"],
  Sun: ["M12 4V2", "M12 22v-2", "M4.9 4.9 3.5 3.5", "M20.5 20.5l-1.4-1.4", "M2 12h2", "M20 12h2", "M4.9 19.1l-1.4 1.4", "M20.5 3.5l-1.4 1.4", "M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"],
  TrendingUp: ["M3 17l6-6 4 4 8-8", "M14 7h7v7"],
  Trophy: ["M8 21h8", "M12 17v4", "M7 4h10v5a5 5 0 0 1-10 0V4Z", "M5 6H3a3 3 0 0 0 3 3h1", "M19 6h2a3 3 0 0 1-3 3h-1"],
  UsersRound: ["M18 21a6 6 0 0 0-12 0", "M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z", "M22 21a4 4 0 0 0-5-4", "M17 3a3 3 0 0 1 0 6"],
  Wrench: ["M14.7 6.3a4 4 0 0 0-5 5L3 18l3 3 6.7-6.7a4 4 0 0 0 5-5l-3 3-3-3 3-3Z"],
  X: ["M18 6 6 18", "M6 6l12 12"]
};

function Icon({ name, size = 24, strokeWidth = 2, className = "", ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {(paths[name] || paths.Sparkles).map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}

const makeIcon = (name) => (props) => <Icon name={name} {...props} />;

export const ArrowRight = makeIcon("ArrowRight");
export const BarChart3 = makeIcon("BarChart3");
export const BrainCircuit = makeIcon("BrainCircuit");
export const BriefcaseBusiness = makeIcon("BriefcaseBusiness");
export const CalendarDays = makeIcon("CalendarDays");
export const Code2 = makeIcon("Code2");
export const Database = makeIcon("Database");
export const Download = makeIcon("Download");
export const ExternalLink = makeIcon("ExternalLink");
export const FileSpreadsheet = makeIcon("FileSpreadsheet");
export const Github = makeIcon("Github");
export const GraduationCap = makeIcon("GraduationCap");
export const Layers3 = makeIcon("Layers3");
export const Lightbulb = makeIcon("Lightbulb");
export const LineChart = makeIcon("LineChart");
export const Linkedin = makeIcon("Linkedin");
export const Mail = makeIcon("Mail");
export const Menu = makeIcon("Menu");
export const Moon = makeIcon("Moon");
export const Send = makeIcon("Send");
export const ShieldCheck = makeIcon("ShieldCheck");
export const Sparkles = makeIcon("Sparkles");
export const Sun = makeIcon("Sun");
export const TrendingUp = makeIcon("TrendingUp");
export const Trophy = makeIcon("Trophy");
export const UsersRound = makeIcon("UsersRound");
export const Wrench = makeIcon("Wrench");
export const X = makeIcon("X");
