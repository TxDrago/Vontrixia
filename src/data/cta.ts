import {
  ShieldCheck,
  FileCheck,
  Cpu,
  Boxes,
  Handshake,
  LucideIcon,
} from "lucide-react";

export interface TrustPillar {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface CTAContent {
  badge: string;
  title: string;
  highlight: string;
  description: string;
  primaryButton: string;
  secondaryButton: string;
}

export const ctaContent: CTAContent = {
  badge: "Start Your Digital Journey",

  title: "Launch Your\nNext Big Idea",

  highlight: "With Vontrixia Technologies",

  description:
    "Whether you're launching a startup, modernizing enterprise software, building AI-powered applications, or accelerating digital transformation, our engineering team is ready to turn ambitious ideas into secure, scalable, and future-ready digital solutions.",

  primaryButton: "Start Your Project",

  secondaryButton: "Schedule Discovery Call",
};

export const trustPillars: TrustPillar[] = [
  {
    id: 1,
    title: "Transparent Communication",
    description:
      "Clear timelines, regular updates, and complete project visibility from start to finish.",
    icon: ShieldCheck,
  },
  {
    id: 2,
    title: "NDA Friendly",
    description:
      "Your ideas, intellectual property, and business information remain protected and confidential.",
    icon: FileCheck,
  },
  {
    id: 3,
    title: "AI-Ready Engineering",
    description:
      "Modern architectures designed to seamlessly integrate AI capabilities today and in the future.",
    icon: Cpu,
  },
  {
    id: 4,
    title: "Scalable Architecture",
    description:
      "Solutions engineered to grow with your users, business, and long-term objectives.",
    icon: Boxes,
  },
  {
    id: 5,
    title: "Long-Term Partnership",
    description:
      "We focus on building lasting relationships through continuous support and product evolution.",
    icon: Handshake,
  },
];