import {
  MessageSquareMore,
  PhoneCall,
  FileCheck,
  Rocket,
} from "lucide-react";

export interface ProcessStep {
  id: number;
  step: string;
  icon: typeof MessageSquareMore;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    id: 1,
    step: "01",
    icon: MessageSquareMore,
    title: "Share Your Idea",
    description:
      "Tell us about your vision, business goals, and project requirements. The more details you share, the better we can understand your needs.",
  },
  {
    id: 2,
    step: "02",
    icon: PhoneCall,
    title: "Discovery Call",
    description:
      "Our team will connect with you to discuss your objectives, answer your questions, and recommend the best technology approach.",
  },
  {
    id: 3,
    step: "03",
    icon: FileCheck,
    title: "Proposal & Planning",
    description:
      "We'll prepare a detailed proposal including project scope, timeline, technology stack, milestones, and estimated investment.",
  },
  {
    id: 4,
    step: "04",
    icon: Rocket,
    title: "Design, Develop & Launch",
    description:
      "Once approved, we begin designing, developing, testing, and deploying your solution while keeping you involved at every stage.",
  },
];