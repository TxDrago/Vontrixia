import {
  BrainCircuit,
  Users,
  Factory,
  HeartPulse,
  Headset,
  GraduationCap,
} from "lucide-react";

export type SolutionStatus =
  | "Capability Demonstration"
  | "Product Concept"
  | "Solution Blueprint"
  | "Engineering Showcase"
  | "Innovation Prototype";

export interface FeaturedSolution {
  id: number;
  featured: boolean;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  status: SolutionStatus;
  icon: any;
  gradient: string;
}

export const featuredSolutions: FeaturedSolution[] = [
  {
    id: 1,
    featured: true,
    title: "AI CRM Platform",
    category: "Enterprise SaaS",
    description:
      "Intelligent customer relationship platform featuring AI-powered lead scoring, workflow automation, customer analytics, omnichannel communication, and sales forecasting.",

    technologies: [
      "React",
      "Node.js",
      "OpenAI",
      "PostgreSQL",
      "AWS",
    ],

    status: "Capability Demonstration",

    icon: BrainCircuit,

    gradient:
      "from-blue-500/20 via-cyan-500/10 to-indigo-500/20",
  },

  {
    id: 2,
    featured: false,
    title: "Smart HRMS",

    category: "Enterprise Software",

    description:
      "Comprehensive HR platform covering payroll, attendance, recruitment, employee self-service, performance reviews, and AI-driven workforce insights.",

    technologies: [
      "React",
      "Laravel",
      "MySQL",
      "Redis",
      "Docker",
    ],

    status: "Product Concept",

    icon: Users,

    gradient:
      "from-violet-500/20 via-fuchsia-500/10 to-pink-500/20",
  },

  {
    id: 3,

    featured: false,

    title: "Manufacturing ERP",

    category: "Business Operations",

    description:
      "End-to-end ERP solution managing inventory, finance, warehouse operations, production planning, procurement, and business intelligence dashboards.",

    technologies: [
      "React",
      "ASP.NET Core",
      "SQL Server",
      "Azure",
      "Power BI",
    ],

    status: "Solution Blueprint",

    icon: Factory,

    gradient:
      "from-amber-500/20 via-orange-500/10 to-yellow-500/20",
  },

  {
    id: 4,

    featured: false,

    title: "Healthcare Platform",

    category: "Digital Healthcare",

    description:
      "Modern healthcare platform featuring patient records, appointment scheduling, laboratory integration, billing, and secure doctor portals.",

    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "FHIR",
      "AWS",
    ],

    status: "Engineering Showcase",

    icon: HeartPulse,

    gradient:
      "from-emerald-500/20 via-green-500/10 to-teal-500/20",
  },

  {
    id: 5,

    featured: false,

    title: "AI Customer Support",

    category: "Customer Experience",

    description:
      "AI-powered customer support platform with chatbots, ticket management, workflow automation, knowledge base, and advanced analytics.",

    technologies: [
      "Next.js",
      "OpenAI",
      "LangChain",
      "Supabase",
      "Vercel",
    ],

    status: "Innovation Prototype",

    icon: Headset,

    gradient:
      "from-sky-500/20 via-cyan-500/10 to-blue-500/20",
  },

  {
    id: 6,

    featured: false,

    title: "Learning Management System",

    category: "EdTech Platform",

    description:
      "Scalable learning platform supporting online courses, certificates, assessments, live classes, and personalized student analytics.",

    technologies: [
      "React",
      "Firebase",
      "Node.js",
      "MongoDB",
      "WebRTC",
    ],

    status: "Capability Demonstration",

    icon: GraduationCap,

    gradient:
      "from-rose-500/20 via-red-500/10 to-orange-500/20",
  },
];