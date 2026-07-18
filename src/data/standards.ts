import {
  ShieldCheck,
  Zap,
  MonitorSmartphone,
  Blocks,
  BrainCircuit,
  PlugZap,
  CloudCog,
  FileText,
  Bug,
  Handshake,
  LucideIcon,
} from "lucide-react";

export interface EngineeringStandard {
  id: number;
  number: string;
  title: string;
  description: string;
  badge: string;
  icon: LucideIcon;
  accent: string;
  gradient: string;
}

export const engineeringStandards: EngineeringStandard[] = [
  {
    id: 1,
    number: "01",
    title: "Security by Design",
    description:
      "Security is considered from architecture to deployment with secure authentication, authorization, encrypted communication, and industry best practices built into every solution.",
    badge: "Included in Every Project",
    icon: ShieldCheck,
    accent: "text-cyan-400",
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
  },

  {
    id: 2,
    number: "02",
    title: "Performance Optimized",
    description:
      "Every application is engineered for speed using optimized assets, efficient rendering, scalable APIs, and modern performance techniques.",
    badge: "Optimized for Speed",
    icon: Zap,
    accent: "text-amber-400",
    gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
  },

  {
    id: 3,
    number: "03",
    title: "Responsive by Default",
    description:
      "Every interface is crafted to provide a seamless experience across desktop, tablet, and mobile devices without compromise.",
    badge: "All Devices Supported",
    icon: MonitorSmartphone,
    accent: "text-violet-400",
    gradient: "from-violet-500/20 via-fuchsia-500/10 to-transparent",
  },

  {
    id: 4,
    number: "04",
    title: "Scalable Architecture",
    description:
      "Our modular architecture enables software to grow with your business while remaining maintainable, extensible, and future-ready.",
    badge: "Built for Growth",
    icon: Blocks,
    accent: "text-emerald-400",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
  },

  {
    id: 5,
    number: "05",
    title: "AI-Ready Engineering",
    description:
      "Applications are designed with extensibility in mind, making future AI integration, automation, and intelligent workflows straightforward.",
    badge: "Future Ready",
    icon: BrainCircuit,
    accent: "text-sky-400",
    gradient: "from-sky-500/20 via-cyan-500/10 to-transparent",
  },

  {
    id: 6,
    number: "06",
    title: "Integration Ready",
    description:
      "Clean API-first development enables seamless integration with payment gateways, CRMs, ERPs, cloud services, and third-party platforms.",
    badge: "API First",
    icon: PlugZap,
    accent: "text-pink-400",
    gradient: "from-pink-500/20 via-rose-500/10 to-transparent",
  },

  {
    id: 7,
    number: "07",
    title: "Cloud Deployment Ready",
    description:
      "Deployment strategies support cloud-native infrastructure, CI/CD pipelines, Docker containers, and production-ready environments.",
    badge: "Cloud Native",
    icon: CloudCog,
    accent: "text-indigo-400",
    gradient: "from-indigo-500/20 via-blue-500/10 to-transparent",
  },

  {
    id: 8,
    number: "08",
    title: "Clear Documentation",
    description:
      "Every delivery includes well-structured documentation covering architecture, APIs, deployment, and maintainable code for long-term success.",
    badge: "Well Documented",
    icon: FileText,
    accent: "text-slate-300",
    gradient: "from-slate-500/20 via-slate-400/10 to-transparent",
  },

  {
    id: 9,
    number: "09",
    title: "Quality Assurance",
    description:
      "Comprehensive testing, quality reviews, and cross-browser verification ensure reliable, stable, and production-ready software.",
    badge: "Quality Verified",
    icon: Bug,
    accent: "text-red-400",
    gradient: "from-red-500/20 via-orange-500/10 to-transparent",
  },

  {
    id: 10,
    number: "10",
    title: "Long-Term Partnership",
    description:
      "Our commitment continues after launch with ongoing support, maintenance, enhancements, and continuous product evolution.",
    badge: "Beyond Delivery",
    icon: Handshake,
    accent: "text-green-400",
    gradient: "from-green-500/20 via-emerald-500/10 to-transparent",
  },
];