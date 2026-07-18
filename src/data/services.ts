import {
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  Laptop,
  LayoutDashboard,
  LifeBuoy,
  Palette,
  ShieldCheck,
  Smartphone,
  Workflow,
} from "lucide-react";

export interface Service {
  id: number;
  slug: string;

  category: string;

  title: string;

  tagline: string;

  description: string;

  icon: typeof Code2;

  gradient: string;

  features: string[];

  technologies: string[];

  idealFor: string[];

  highlights: string[];

  cta: string;
}

export const services: Service[] = [
  {
    id: 1,

    slug: "custom-software-development",

    category: "Development",

    title: "Custom Software Development",

    tagline: "Software Built Around Your Business",

    description:
      "We design and develop tailor-made software solutions that streamline operations, improve productivity, and support long-term business growth.",

    icon: Code2,

    gradient: "from-cyan-500 to-blue-500",

    features: [
      "Business Applications",
      "Custom SaaS Platforms",
      "Workflow Automation",
      "Business Dashboards",
      "Internal Management Systems",
      "Enterprise Solutions",
    ],

    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "MongoDB",
    ],

    idealFor: [
      "Startups",
      "Growing Businesses",
      "SMEs",
      "Enterprises",
    ],

    highlights: [
      "Tailored Solutions",
      "Scalable Architecture",
      "Future Ready",
    ],

    cta: "Let's Build Your Software",
  },

  {
    id: 2,

    slug: "web-development",

    category: "Development",

    title: "Web Development",

    tagline: "Fast, Secure & Scalable Websites",

    description:
      "From corporate websites to enterprise web applications, we build high-performance digital experiences optimized for speed, security, and business growth.",

    icon: Laptop,

    gradient: "from-blue-500 to-indigo-500",

    features: [
      "Corporate Websites",
      "Web Applications",
      "Admin Dashboards",
      "Customer Portals",
      "Progressive Web Apps",
      "E-Commerce Platforms",
    ],

    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Node.js",
      "REST APIs",
      "Vercel",
    ],

    idealFor: [
      "Corporate Websites",
      "Digital Platforms",
      "E-Commerce",
      "SaaS Products",
    ],

    highlights: [
      "SEO Optimized",
      "Lightning Fast",
      "Mobile Responsive",
    ],

    cta: "Build Your Website",
  },

  {
    id: 3,

    slug: "mobile-app-development",

    category: "Development",

    title: "Mobile App Development",

    tagline: "Apps Designed For Every Device",

    description:
      "Create powerful Android and iOS applications that deliver exceptional user experiences while helping your business grow across every platform.",

    icon: Smartphone,

    gradient: "from-violet-500 to-fuchsia-500",

    features: [
      "Android Applications",
      "iOS Applications",
      "Cross-Platform Apps",
      "Enterprise Mobility",
      "Customer Apps",
      "App Maintenance",
    ],

    technologies: [
      "Flutter",
      "React Native",
      "Firebase",
      "Android",
      "iOS",
    ],

    idealFor: [
      "Startups",
      "Retail",
      "Healthcare",
      "Business Applications",
    ],

    highlights: [
      "Android & iOS",
      "Cross Platform",
      "High Performance",
    ],

    cta: "Launch Your Mobile App",
  },
    {
    id: 4,

    slug: "artificial-intelligence",

    category: "Artificial Intelligence",

    title: "AI & Intelligent Automation",

    tagline: "Smarter Solutions With Artificial Intelligence",

    description:
      "Empower your business with intelligent automation, AI-powered assistants, and advanced machine learning solutions that improve efficiency, reduce manual work, and unlock new opportunities for innovation.",

    icon: BrainCircuit,

    gradient: "from-purple-500 to-pink-500",

    features: [
      "AI Chatbots",
      "AI Agents",
      "Workflow Automation",
      "Document Intelligence",
      "OCR Solutions",
      "Generative AI Integration",
    ],

    technologies: [
      "Python",
      "OpenAI",
      "LangChain",
      "FastAPI",
      "Vector Database",
      "TensorFlow",
    ],

    idealFor: [
      "Customer Support",
      "Business Automation",
      "Data Processing",
      "AI Transformation",
    ],

    highlights: [
      "AI Powered",
      "Workflow Automation",
      "Future Ready",
    ],

    cta: "Build AI Solutions",
  },

  {
    id: 5,

    slug: "enterprise-solutions",

    category: "Enterprise",

    title: "Enterprise Business Solutions",

    tagline: "Powering Modern Organizations",

    description:
      "Transform the way your organization operates with integrated enterprise platforms that simplify processes, improve collaboration, and provide complete visibility across your business.",

    icon: LayoutDashboard,

    gradient: "from-emerald-500 to-cyan-500",

    features: [
      "CRM Solutions",
      "ERP Systems",
      "HRMS",
      "Payroll Management",
      "Inventory Management",
      "Asset Management",
    ],

    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "REST APIs",
    ],

    idealFor: [
      "Manufacturing",
      "Healthcare",
      "Education",
      "Large Organizations",
    ],

    highlights: [
      "Business Automation",
      "Integrated Systems",
      "Enterprise Scale",
    ],

    cta: "Transform Your Business",
  },

  {
    id: 6,

    slug: "cloud-devops",

    category: "Cloud",

    title: "Cloud & DevOps",

    tagline: "Reliable Infrastructure For Modern Businesses",

    description:
      "Deploy, monitor, and scale modern applications with secure cloud infrastructure, automated deployment pipelines, and resilient DevOps practices built for continuous innovation.",

    icon: Cloud,

    gradient: "from-sky-500 to-cyan-500",

    features: [
      "Cloud Deployment",
      "Cloud Migration",
      "CI/CD Pipelines",
      "Docker & Containers",
      "Infrastructure Automation",
      "Monitoring & Logging",
    ],

    technologies: [
      "AWS",
      "Microsoft Azure",
      "Google Cloud",
      "Docker",
      "GitHub Actions",
      "Linux",
    ],

    idealFor: [
      "Cloud Migration",
      "Growing SaaS Companies",
      "High Traffic Applications",
      "Digital Transformation",
    ],

    highlights: [
      "Secure Infrastructure",
      "Automated Deployment",
      "High Availability",
    ],

    cta: "Modernize Your Infrastructure",
  },
    {
    id: 7,

    slug: "data-engineering",

    category: "Data",

    title: "Data Engineering & Analytics",

    tagline: "Transform Data Into Business Intelligence",

    description:
      "Your business generates valuable data every day. We help you collect, organize, analyze, and visualize that information so you can make smarter decisions with confidence.",

    icon: Database,

    gradient: "from-orange-500 to-amber-500",

    features: [
      "Data Warehousing",
      "ETL Pipelines",
      "Business Intelligence",
      "Interactive Dashboards",
      "Real-Time Analytics",
      "Data Visualization",
    ],

    technologies: [
      "SQL",
      "Python",
      "Power BI",
      "PostgreSQL",
      "Apache Spark",
      "Apache Airflow",
    ],

    idealFor: [
      "Business Intelligence",
      "Reporting",
      "Decision Making",
      "Analytics Platforms",
    ],

    highlights: [
      "Data Driven",
      "Real-Time Insights",
      "Scalable Pipelines",
    ],

    cta: "Unlock Your Data",
  },

  {
    id: 8,

    slug: "cyber-security",

    category: "Cybersecurity",

    title: "Cybersecurity & Secure Software",

    tagline: "Security Built Into Every Solution",

    description:
      "Security isn't an afterthought—it's part of every application we build. We follow secure development practices to protect your business, users, and sensitive information.",

    icon: ShieldCheck,

    gradient: "from-red-500 to-orange-500",

    features: [
      "Secure Application Development",
      "API Security",
      "Authentication & Authorization",
      "Data Encryption",
      "Security Reviews",
      "OWASP Best Practices",
    ],

    technologies: [
      "OAuth 2.0",
      "JWT",
      "HTTPS",
      "Encryption",
      "OWASP",
      "Cloud Security",
    ],

    idealFor: [
      "Financial Applications",
      "Healthcare",
      "Enterprise Software",
      "Compliance",
    ],

    highlights: [
      "Security First",
      "Protected Data",
      "Trusted Architecture",
    ],

    cta: "Secure Your Business",
  },

  {
    id: 9,

    slug: "ui-ux-design",

    category: "Design",

    title: "UI / UX Design",

    tagline: "Designs That People Love To Use",

    description:
      "Great software begins with great user experience. We design intuitive, accessible, and visually engaging interfaces that delight users and strengthen your brand.",

    icon: Palette,

    gradient: "from-pink-500 to-rose-500",

    features: [
      "User Research",
      "Wireframes",
      "UI Design",
      "Interactive Prototypes",
      "Design Systems",
      "Accessibility",
    ],

    technologies: [
      "Figma",
      "Adobe XD",
      "Framer",
      "Miro",
      "Illustrator",
      "Photoshop",
    ],

    idealFor: [
      "Startups",
      "SaaS Platforms",
      "Mobile Applications",
      "Digital Products",
    ],

    highlights: [
      "User-Centered Design",
      "Modern Interfaces",
      "Exceptional Experience",
    ],

    cta: "Design Better Experiences",
  },
    {
    id: 10,

    slug: "api-integrations",

    category: "Integration",

    title: "API & System Integration",

    tagline: "Connect Everything. Automate Anything.",

    description:
      "Modern businesses rely on multiple platforms working together. We seamlessly integrate your applications, payment gateways, communication tools, and enterprise systems to create efficient, automated workflows.",

    icon: Workflow,

    gradient: "from-indigo-500 to-violet-500",

    features: [
      "REST API Development",
      "Third-Party API Integration",
      "Payment Gateway Integration",
      "WhatsApp & SMS Integration",
      "ERP & CRM Integration",
      "Custom API Development",
    ],

    technologies: [
      "REST APIs",
      "GraphQL",
      "Stripe",
      "Razorpay",
      "Twilio",
      "Webhooks",
    ],

    idealFor: [
      "Business Automation",
      "Enterprise Applications",
      "E-Commerce",
      "SaaS Platforms",
    ],

    highlights: [
      "Seamless Connectivity",
      "Reliable APIs",
      "Automated Workflows",
    ],

    cta: "Connect Your Systems",
  },

  {
    id: 11,

    slug: "technical-support",

    category: "Support",

    title: "Maintenance & Technical Support",

    tagline: "Your Long-Term Technology Partner",

    description:
      "Launching software is only the beginning. We provide continuous maintenance, monitoring, performance optimization, and technical support to keep your applications secure, reliable, and ready for future growth.",

    icon: LifeBuoy,

    gradient: "from-cyan-500 to-emerald-500",

    features: [
      "Application Maintenance",
      "Bug Fixes & Issue Resolution",
      "Performance Optimization",
      "Security Updates",
      "Feature Enhancements",
      "24×7 Monitoring & Support",
    ],

    technologies: [
      "GitHub",
      "Docker",
      "Cloud Hosting",
      "CI/CD",
      "Monitoring Tools",
      "Issue Tracking",
    ],

    idealFor: [
      "Existing Products",
      "Growing Businesses",
      "Enterprise Applications",
      "Long-Term Partnerships",
    ],

    highlights: [
      "Reliable Support",
      "Continuous Improvement",
      "Peace of Mind",
    ],

    cta: "Let's Support Your Growth",
  },
];