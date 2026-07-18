import {
  Rocket,
  Building2,
  Landmark,
  Handshake,
} from "lucide-react";

export interface Audience {
  id: number;
  icon: typeof Rocket;
  title: string;
  description: string;
}

export const audiences: Audience[] = [
  {
    id: 1,
    icon: Rocket,
    title: "Startups",
    description:
      "From validating ideas to launching MVPs, we help startups move faster with scalable, future-ready digital products.",
  },
  {
    id: 2,
    icon: Building2,
    title: "Growing Businesses",
    description:
      "Streamline operations, automate workflows, and accelerate business growth with modern software solutions.",
  },
  {
    id: 3,
    icon: Landmark,
    title: "Enterprises",
    description:
      "Develop secure, high-performance enterprise applications designed for scalability, reliability, and long-term success.",
  },
  {
    id: 4,
    icon: Handshake,
    title: "Long-Term Partnerships",
    description:
      "Our relationship doesn't end after deployment. We continue supporting, improving, and evolving your software as your business grows.",
  },
];