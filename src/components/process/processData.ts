export interface ProcessStep {
  id: number;
  step: string;
  title: string;
  description: string;
  deliverables: string[];
  duration: string;
  icon: string;
  color: string;
}

export const processSteps: ProcessStep[] = [
  {
    id: 1,
    step: "01",
    title: "Discovery & Consultation",
    description:
      "We begin by understanding your business, goals, target audience, competitors, and project requirements. This helps us define the right technical approach before development begins.",

    deliverables: [
      "Business Requirement Analysis",
      "Project Scope",
      "Market Research",
      "Technical Consultation",
    ],

    duration: "1 – 3 Days",

    icon: "Search",

    color: "#0450C3",
  },

  {
    id: 2,
    step: "02",
    title: "Planning & Strategy",
    description:
      "After gathering requirements, we prepare the complete project roadmap including architecture, timelines, milestones, technologies, and execution strategy.",

    deliverables: [
      "Project Roadmap",
      "Technology Stack",
      "Database Planning",
      "Sprint Planning",
    ],

    duration: "2 – 5 Days",

    icon: "ClipboardList",

    color: "#0EA5E9",
  },

  {
    id: 3,
    step: "03",
    title: "UI / UX Design",
    description:
      "Our designers craft intuitive user experiences and beautiful interfaces that focus on usability, accessibility, branding, and conversion.",

    deliverables: [
      "Wireframes",
      "High Fidelity UI",
      "Prototype",
      "Design System",
    ],

    duration: "4 – 10 Days",

    icon: "Palette",

    color: "#06B6D4",
  },

  {
    id: 4,
    step: "04",
    title: "Development",
    description:
      "Our engineers transform approved designs into scalable applications using modern technologies, secure architecture, and clean coding practices.",

    deliverables: [
      "Frontend Development",
      "Backend APIs",
      "Database Integration",
      "Admin Panel",
    ],

    duration: "Depends on Project",

    icon: "Code2",

    color: "#3B82F6",
  },

  {
    id: 5,
    step: "05",
    title: "Testing & QA",
    description:
      "Before launch, every feature undergoes extensive testing to ensure performance, responsiveness, security, and reliability across devices.",

    deliverables: [
      "Bug Fixing",
      "Performance Testing",
      "Security Checks",
      "Cross Browser Testing",
    ],

    duration: "2 – 5 Days",

    icon: "ShieldCheck",

    color: "#14B8A6",
  },

  {
    id: 6,
    step: "06",
    title: "Deployment",
    description:
      "After approval, we deploy your application on production infrastructure with proper monitoring, backups, SSL, and optimization.",

    deliverables: [
      "Cloud Deployment",
      "SSL Configuration",
      "Performance Optimization",
      "Production Release",
    ],

    duration: "1 – 2 Days",

    icon: "Rocket",

    color: "#2563EB",
  },

  {
    id: 7,
    step: "07",
    title: "Support & Growth",
    description:
      "Our partnership doesn't end after launch. We provide continuous maintenance, feature enhancements, monitoring, and technical support as your business grows.",

    deliverables: [
      "Maintenance",
      "Performance Monitoring",
      "Feature Updates",
      "Priority Support",
    ],

    duration: "Ongoing",

    icon: "LifeBuoy",

    color: "#0284C7",
  },
];