import {
  BrainCircuit,
  Cloud,
  Code2,
  LayoutDashboard,
  MonitorSmartphone,
  Smartphone,
} from "lucide-react";

export interface Capability {
  id: number;
  title: string;
  description: string;
  icon: typeof Code2;
  gradient: string;
}

export const capabilities: Capability[] = [
  {
    id: 1,
    title: "Custom Software",
    description:
      "Tailor-made software solutions designed around your unique business processes, goals, and future growth.",
    icon: Code2,
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    id: 2,
    title: "Web Applications",
    description:
      "Fast, secure, and scalable web applications that deliver seamless user experiences across every device.",
    icon: MonitorSmartphone,
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    id: 3,
    title: "Mobile Apps",
    description:
      "Beautiful Android and iOS applications built to engage users and support your business anywhere.",
    icon: Smartphone,
    gradient: "from-violet-500 to-fuchsia-500",
  },
  {
    id: 4,
    title: "AI Solutions",
    description:
      "AI-powered products, intelligent automation, chatbots, and smart workflows that improve productivity.",
    icon: BrainCircuit,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: 5,
    title: "Cloud & DevOps",
    description:
      "Reliable cloud infrastructure, deployment pipelines, monitoring, and scalable environments for modern applications.",
    icon: Cloud,
    gradient: "from-sky-500 to-cyan-500",
  },
  {
    id: 6,
    title: "Enterprise Systems",
    description:
      "CRM, ERP, HRMS, dashboards, and enterprise platforms that streamline operations and drive business efficiency.",
    icon: LayoutDashboard,
    gradient: "from-amber-500 to-yellow-500",
  },
];