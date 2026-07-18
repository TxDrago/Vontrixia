import {
  Handshake,
  ShieldCheck,
  Lightbulb,
  Rocket,
} from "lucide-react";

export interface Value {
  id: number;
  icon: typeof Handshake;
  title: string;
  description: string;
}

export const values: Value[] = [
  {
    id: 1,
    icon: Handshake,
    title: "Transparent Communication",
    description:
      "We believe great partnerships are built on honesty, clear expectations, and regular communication throughout every stage of your project.",
  },
  {
    id: 2,
    icon: ShieldCheck,
    title: "Quality You Can Trust",
    description:
      "Every solution is designed with performance, security, scalability, and maintainability in mind to support your long-term success.",
  },
  {
    id: 3,
    icon: Lightbulb,
    title: "Innovation with Purpose",
    description:
      "We combine modern technologies with practical business thinking to create solutions that deliver real value—not just impressive features.",
  },
  {
    id: 4,
    icon: Rocket,
    title: "Long-Term Partnership",
    description:
      "Our commitment doesn't end at launch. We're here to help your business grow through continuous support, improvements, and future innovation.",
  },
];