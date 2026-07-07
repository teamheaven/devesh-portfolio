import {
  BarChart3,
  BrainCircuit,
  BriefcaseBusiness,
  Building2,
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
  { label: "GitHub", href: "https://github.com/teamheaven/", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/devesh-naik1003", icon: Linkedin },
  { label: "Email", href: "mailto:deveshnaik1003@gmail.com", icon: Mail }
];

export const skills = [
  {
    title: "Programming",
    icon: Code2,
    items: ["Java", "Python", "SQL"]
  },
  {
    title: "Development",
    icon: Layers3,
    items: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Flutter",
      "Firebase",
      "REST APIs"
    ]
  },
  {
    title: "Database",
    icon: Database,
    items: ["MySQL", "Oracle", "MongoDB"]
  },
  {
    title: "Data Analytics",
    icon: BarChart3,
    items: [
      "Pandas",
      "NumPy",
      "Excel",
      "Power BI",
      "Data Cleaning",
      "Data Transformation",
      "Data Visualization",
      "SQL Analysis",
      "Reporting"
    ]
  },
  {
    title: "Tools",
    icon: Wrench,
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Jupyter Notebook",
      "WordPress"
    ]
  },
  {
    title: "Concepts",
    icon: BrainCircuit,
    items: [
      "Object-Oriented Programming",
      "Data Structures",
      "DBMS",
      "Software Testing",
      "Machine Learning"
    ]
  }
];

export const experiences = [
  {
    role: "Frontend Developer Intern",
    company: "IBM",
    duration: "June 2024 - July 2024",
    description:
      "Developed responsive web interfaces and reusable UI components while ensuring accessibility, cross-browser compatibility, and an improved user experience."
  },
  {
    role: "UI/UX Designer",
    company: "Chandel Production",
    duration: "January 2023 - June 2023",
    description:
      "Designed responsive website layouts and chatbot interfaces using WordPress, XAMPP, HTML, CSS, and JavaScript while improving usability and user experience."
  }
];

export const projects = [
  {
    title: "TravAI - AI Travel Recommendation System",
    description:
      "Developed an AI-powered travel recommendation system that provides personalized destination suggestions based on user preferences, budget, distance, ratings, and interests.",
    features: [
      "Personalized travel recommendations",
      "Content-based recommendation engine",
      "TF-IDF similarity analysis",
      "Machine learning prediction model"
    ],
    tech: [
      "Python",
      "Machine Learning",
      "TF-IDF",
      "Content Similarity",
      "Linear Regression"
    ],
    accent: "from-teal-400 to-sky-500",
    icon: Sparkles
  },

  {
    title: "Cafe Management System (CMS)",
    description:
      "Developed a Java-based desktop application for managing cafe operations including orders, billing, payments, inventory, and customer records.",
    features: [
      "User login and registration",
      "Order, table, inventory, and customer management",
      "UPI QR and cash payment support",
      "Automatic PDF receipt generation",
      "Dashboard and reporting"
    ],
    tech: ["Java", "Java Swing", "MySQL", "JDBC"],
    accent: "from-amber-300 to-teal-500",
    icon: FileSpreadsheet
  },

  {
    title: "Travel Recommendation System",
    description:
      "Built a Java Swing and MySQL based travel management system with role-based access for administrators and customers.",
    features: [
      "Admin and customer authentication",
      "Travel package browsing and booking",
      "User profile management",
      "Ratings-based recommendations",
      "Reviews and wishlist management"
    ],
    tech: ["Java Swing", "JDBC", "MySQL"],
    accent: "from-sky-400 to-indigo-500",
    icon: BriefcaseBusiness
  },

  {
    title: "Plant Disease Prediction",
    description:
      "Built a deep learning image classification system using CNN to identify plant leaf diseases and support automated disease detection.",
    features: [
      "CNN-based image classification",
      "Automated disease detection",
      "Prediction using trained deep learning models"
    ],
    tech: ["Python", "CNN", "Deep Learning"],
    accent: "from-lime-300 to-teal-500",
    icon: BrainCircuit
  },

  {
    title: "Reconnaissance Detection System",
    description:
      "Developing a cybersecurity platform that detects reconnaissance activities across servers, endpoints, and cloud environments using anomaly detection, rule-based logic, and ML-assisted threat analysis.",
    features: [
      "Reconnaissance activity detection",
      "Threat pattern analysis",
      "Rule-based anomaly detection",
      "ML-assisted security insights"
    ],
    tech: ["Python", "Cybersecurity", "Machine Learning"],
    accent: "from-rose-400 to-orange-400",
    icon: ShieldCheck
  },

  {
    title: "Doodle Homes Mobile Application",
    description:
      "Contributed to the development of a cross-platform real estate application using Flutter and Firebase, implementing responsive UI, real-time database integration, authentication, performance optimization, and application testing.",
    features: [
      "Responsive Flutter user interface development",
      "Firebase Authentication and Cloud Firestore integration",
      "Real-time data synchronization",
      "Performance optimization and bug fixing",
      "Collaborative development using Git and Agile practices"
    ],
    tech: [
      "Flutter",
      "Dart",
      "Firebase",
      "REST APIs",
      "Git"
    ],
    accent: "from-purple-400 to-pink-500",
    icon: BriefcaseBusiness
  }
];

export const analyticsCards = [
  {
    title: "Data Cleaning",
    icon: FileSpreadsheet,
    value: "01",
    description:
      "Prepare raw datasets by handling missing values, duplicates, inconsistencies, and noisy records."
  },
  {
    title: "Data Visualization",
    icon: LineChart,
    value: "02",
    description:
      "Create meaningful visualizations to identify trends, comparisons, and actionable insights."
  },
  {
    title: "SQL Analysis",
    icon: Database,
    value: "03",
    description:
      "Write optimized SQL queries to retrieve, analyze, and report business data."
  },
  {
    title: "Machine Learning Insights",
    icon: BrainCircuit,
    value: "04",
    description:
      "Apply analytical and machine learning techniques to generate predictive insights and recommendations."
  }
];

export const leadership = {
  title: "Vice President - Information Technology Student Association (ITSA)",
  duration: "2025 - 2026",
  icon: UsersRound,
  badgeIcon: Trophy,
  description:
    "Led a team of 40+ students by managing operations, coordinating technical events, assigning responsibilities, maintaining discipline, and ensuring adherence to organizational standards and the code of conduct."
};
