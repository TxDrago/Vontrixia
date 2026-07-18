import {
  MonitorSmartphone,
  ServerCog,
  BrainCircuit,
  CloudCog,
  Database,
  Smartphone,
  LucideIcon,
} from "lucide-react";

export interface TechnologyCategory {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  accent: string;
  technologies: string[];
}

export const technologyCategories: TechnologyCategory[] = [
  {
    id: 1,
    title: "Frontend Development",
    subtitle: "Modern User Experiences",
    description:
      "Fast, responsive, and engaging interfaces built with modern frontend technologies and best practices.",

    icon: MonitorSmartphone,

    gradient: "from-cyan-500/20 via-sky-500/10 to-blue-500/20",

    accent: "text-cyan-400",

    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Material UI",
      "Redux Toolkit",
      "Framer Motion",
    ],
  },

  {
    id: 2,
    title: "Backend Engineering",
    subtitle: "Scalable APIs & Services",
    description:
      "Reliable backend architectures designed for performance, scalability, and seamless system integrations.",

    icon: ServerCog,

    gradient: "from-violet-500/20 via-fuchsia-500/10 to-indigo-500/20",

    accent: "text-violet-400",

    technologies: [
      "Node.js",
      "Express",
      "NestJS",
      "Laravel",
      "ASP.NET Core",
      "Python",
      "REST APIs",
      "GraphQL",
    ],
  },

  {
    id: 3,
    title: "Artificial Intelligence",
    subtitle: "Intelligent Digital Solutions",
    description:
      "AI-powered experiences using modern language models, automation, and intelligent workflows.",

    icon: BrainCircuit,

    gradient: "from-blue-500/20 via-cyan-500/10 to-indigo-500/20",

    accent: "text-blue-400",

    technologies: [
      "OpenAI",
      "LangChain",
      "AI Agents",
      "Prompt Engineering",
      "RAG",
      "Vector Search",
      "LLMs",
      "Automation",
    ],
  },

  {
    id: 4,
    title: "Cloud & DevOps",
    subtitle: "Deployment & Infrastructure",
    description:
      "Cloud-native infrastructure, automated deployments, and scalable DevOps workflows.",

    icon: CloudCog,

    gradient: "from-emerald-500/20 via-green-500/10 to-teal-500/20",

    accent: "text-emerald-400",

    technologies: [
      "AWS",
      "Azure",
      "Google Cloud",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "CI/CD",
      "Linux",
    ],
  },

  {
    id: 5,
    title: "Database Solutions",
    subtitle: "Reliable Data Management",
    description:
      "Efficient database architectures optimized for speed, reliability, and long-term scalability.",

    icon: Database,

    gradient: "from-amber-500/20 via-orange-500/10 to-yellow-500/20",

    accent: "text-amber-400",

    technologies: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Redis",
      "Firebase",
      "Supabase",
      "Prisma",
      "SQL Server",
    ],
  },

  {
    id: 6,
    title: "Mobile Solutions",
    subtitle: "Cross-Platform Apps",
    description:
      "High-performance mobile experiences built for Android, iOS, and Progressive Web Applications.",

    icon: Smartphone,

    gradient: "from-pink-500/20 via-rose-500/10 to-red-500/20",

    accent: "text-pink-400",

    technologies: [
      "React Native",
      "Flutter",
      "PWA",
      "Android",
      "iOS",
      "Responsive Design",
      "Expo",
      "Capacitor",
    ],
  },
];