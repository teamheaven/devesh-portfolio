import {
  BarChart3,
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  Database,
  FileSpreadsheet,
  Github,
  GraduationCap,
  Layers3,
  LineChart,
  Linkedin,
  Mail,
  ShieldCheck,
  Sparkles,
  Trophy,
  UsersRound,
  Wrench
} from "../icons.jsx";

export const socials = [
  { label: "GitHub", href: "https://github.com/", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/", icon: Linkedin },
  { label: "Email", href: "mailto:deveshnaik1003@gmail.com", icon: Mail }
];

export const skills = [
  { title: "Programming", icon: Code2, items: ["Java", "Python", "SQL"] },
  { title: "Development", icon: Layers3, items: ["React", "HTML", "CSS", "JavaScript", "Flutter", "Firebase"] },
  { title: "Database", icon: Database, items: ["MySQL", "Oracle"] },
  {
    title: "Data Analytics",
    icon: BarChart3,
    items: ["Pandas", "NumPy", "Data Cleaning", "Data Transformation", "Data Visualization", "SQL Analysis", "Reporting"]
  },
  { title: "Tools", icon: Wrench, items: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "Excel", "PowerBI", "Wordpress"] },
  { title: "Concepts", icon: BrainCircuit, items: ["OOP", "DBMS", "Software Testing", "Machine Learning"] }
];

export const experiences = [
  {
    role: "Mobile App Developer",
    company: "Doodle Homes",
    duration: "July 2024 - July 2025",
    description:
      "Developed a cross-platform Flutter and Firebase application with real-time features, performed testing, debugging, and collaborated with stakeholders."
  },
  {
    role: "Frontend Developer Intern",
    company: "IBM",
    duration: "June 2024 - July 2024",
    description:
      "Developed responsive web interfaces and interactive components while ensuring usability, accessibility, and cross-device compatibility."
  },
  {
    role: "UI/UX Designer",
    company: "Chandel Production",
    duration: "January 2023 - June 2023",
    description:
      "Designed responsive website layouts and chatbot interfaces using WordPress and XAMPP while improving user experience."
  }
];

export const projects = [
  {
    title: "TravAI - AI Travel Recommendation System",
    description:
      "Developed an AI-powered travel recommendation system that provides personalized destination suggestions based on user preferences, budget, distance, ratings, and interests.",
    features: ["Processed and analyzed datasets", "Performed data transformation", "Identified patterns for recommendation improvement"],
    tech: ["Python", "Machine Learning", "TF-IDF", "Content Similarity", "Linear Regression"],
    accent: "from-teal-400 to-sky-500",
    icon: Sparkles
  },
  {
    title: "Cafe Management System (CMS)",
    description:
      "Developed a Java-based desktop application for managing cafe operations including orders, payments, billing, inventory, and customer records.",
    features: [
      "User login and registration",
      "Order, table, stock, and customer management",
      "UPI QR and cash payment support",
      "PDF receipt generation",
      "Dashboard and reports"
    ],
    tech: ["Java", "Java Swing", "MySQL", "JDBC"],
    accent: "from-amber-300 to-teal-500",
    icon: FileSpreadsheet
  },
  {
    title: "Travel Recommendation System",
    description:
      "Built a Java Swing and MySQL based travel management system with role-based access for Admin and Customers.",
    features: [
      "Admin and customer login",
      "Travel package browsing",
      "Booking and profile management",
      "Ratings-based recommendations",
      "Reviews, wishlist, and package management"
    ],
    tech: ["Java Swing", "JDBC", "MySQL"],
    accent: "from-sky-400 to-indigo-500",
    icon: BriefcaseBusiness
  },
  {
    title: "Plant Disease Prediction",
    description:
      "Built a deep learning image classification system using CNN to identify plant leaf diseases and support automated disease detection.",
    features: ["CNN image classification", "Disease detection workflow", "Model-driven prediction output"],
    tech: ["Python", "CNN", "Deep Learning"],
    accent: "from-lime-300 to-teal-500",
    icon: BrainCircuit
  },
  {
    title: "Reconnaissance Detection System",
    description:
      "Developing a cybersecurity monitoring platform that identifies reconnaissance activities across servers, endpoints, and cloud environments using anomaly detection, rule-based logic, and ML-assisted threat analysis.",
    features: ["Analyzes activity logs", "Identifies abnormal patterns", "Extracts insights from security data"],
    tech: ["Python", "Cybersecurity", "Machine Learning"],
    accent: "from-rose-400 to-orange-400",
    icon: ShieldCheck
  }
];

export const analyticsCards = [
  { title: "Data Cleaning", icon: FileSpreadsheet, value: "01", description: "Prepare raw datasets by handling missing values, duplicates, inconsistencies, and noisy records." },
  { title: "Data Visualization", icon: LineChart, value: "02", description: "Create readable visual summaries that help teams compare trends, segments, and outcomes." },
  { title: "SQL Analysis", icon: Database, value: "03", description: "Query relational data to extract patterns, metrics, and reporting-ready insights." },
  { title: "Machine Learning Insights", icon: BrainCircuit, value: "04", description: "Use model outputs and analytical techniques to support recommendation and prediction use cases." }
];

export const leadership = {
  title: "Vice President - Information Technology Student Association (ITSA)",
  duration: "2025 - 2026",
  icon: UsersRound,
  badgeIcon: Trophy,
  description:
    "Led a team of 40+ students, managing operations, coordination, and execution of technical events. Assisted in planning activities, assigning responsibilities, maintaining team discipline, and ensuring adherence to the code of conduct."
};
