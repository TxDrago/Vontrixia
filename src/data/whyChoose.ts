import {
  BrainCircuit,
  Building2,
  Layers3,
  Handshake,
  ShieldCheck,
  Rocket,
  LucideIcon,
} from "lucide-react";

export interface WhyChooseFeature {
  id: number;
  number: string;
  title: string;
  description: string;

  icon: LucideIcon;

  styles: {
    icon: string;
    gradient: string;
    glow: string;
    border: string;
    bg: string;
  };
}

export const whyChooseFeatures: WhyChooseFeature[] = [
  {
    id: 1,
    number: "01",
    title: "AI-Driven Innovation",
    description:
      "Harness the power of Artificial Intelligence to automate workflows, uncover actionable insights, and create intelligent digital experiences that accelerate business growth.",

    icon: BrainCircuit,

    styles: {
      icon: "text-cyan-400",
      gradient: "from-cyan-500/20 via-sky-500/10 to-blue-500/20",
      glow: "shadow-cyan-500/30",
      border: "group-hover:border-cyan-400/30",
      bg: "group-hover:bg-cyan-500/5",
    },
  },

  {
    id: 2,
    number: "02",
    title: "Enterprise-Grade Engineering",
    description:
      "We architect scalable, maintainable, and high-performance software using modern engineering principles that support long-term business success.",

    icon: Building2,

    styles: {
      icon: "text-violet-400",
      gradient: "from-violet-500/20 via-fuchsia-500/10 to-indigo-500/20",
      glow: "shadow-violet-500/30",
      border: "group-hover:border-violet-400/30",
      bg: "group-hover:bg-violet-500/5",
    },
  },

  {
    id: 3,
    number: "03",
    title: "Modern Technology Stack",
    description:
      "Our solutions leverage React, Next.js, TypeScript, Node.js, Cloud, DevOps, AI, and scalable backend technologies to build future-ready applications.",

    icon: Layers3,

    styles: {
      icon: "text-blue-400",
      gradient: "from-blue-500/20 via-cyan-500/10 to-indigo-500/20",
      glow: "shadow-blue-500/30",
      border: "group-hover:border-blue-400/30",
      bg: "group-hover:bg-blue-500/5",
    },
  },

  {
    id: 4,
    number: "04",
    title: "Transparent Collaboration",
    description:
      "Successful products are built through communication. We work closely with our clients, providing complete visibility from discovery to deployment.",

    icon: Handshake,

    styles: {
      icon: "text-emerald-400",
      gradient: "from-emerald-500/20 via-green-500/10 to-teal-500/20",
      glow: "shadow-emerald-500/30",
      border: "group-hover:border-emerald-400/30",
      bg: "group-hover:bg-emerald-500/5",
    },
  },

  {
    id: 5,
    number: "05",
    title: "Security & Performance",
    description:
      "Every application is engineered with security, reliability, and performance at its core, ensuring production-ready software from day one.",

    icon: ShieldCheck,

    styles: {
      icon: "text-amber-400",
      gradient: "from-amber-500/20 via-orange-500/10 to-yellow-500/20",
      glow: "shadow-amber-500/30",
      border: "group-hover:border-amber-400/30",
      bg: "group-hover:bg-amber-500/5",
    },
  },

  {
    id: 6,
    number: "06",
    title: "Long-Term Partnership",
    description:
      "Our commitment doesn't end at deployment. We continue to optimize, support, and evolve your digital products as your business grows.",

    icon: Rocket,

    styles: {
      icon: "text-pink-400",
      gradient: "from-pink-500/20 via-rose-500/10 to-red-500/20",
      glow: "shadow-pink-500/30",
      border: "group-hover:border-pink-400/30",
      bg: "group-hover:bg-pink-500/5",
    },
  },
];