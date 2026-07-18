export interface TeamMember {
  id: number;
  initials: string;
  name: string;
  designation: string;
  bio: string;
  quote: string;
  image?: string;
  linkedin?: string;
}

export const team: TeamMember[] = [
  {
    id: 1,
    initials: "TR",
    name: "Tarun Kumar Raikwar",
    designation: "Founder, Managing Director & CEO",
    bio: "Passionate about transforming ambitious ideas into impactful digital products through innovation, leadership, and long-term client partnerships.",
    quote: "Great technology begins with understanding people.",
  },
  {
    id: 2,
    initials: "HS",
    name: "Himanshu Swamy",
    designation: "Director & Co-Founder",
    bio: "Committed to building scalable technology solutions while fostering collaboration, quality, and continuous innovation.",
    quote: "Innovation grows stronger through collaboration and trust.",
  },
  {
    id: 3,
    initials: "SR",
    name: "Shashank Raikwar",
    designation: "Director & Co-Founder",
    bio: "Focused on delivering reliable software experiences through thoughtful engineering, modern technologies, and attention to detail.",
    quote: "Great products are built by paying attention to every detail.",
  },
  {
    id: 4,
    initials: "RR",
    name: "Rahul Raikwar",
    designation: "Co-Founder & Strategic Shareholder",
    bio: "Supporting Vontrixia's long-term vision through strategic guidance, business insight, and a commitment to sustainable growth.",
    quote: "Strong businesses are built on vision, patience, and trust.",
  },
  {
    id: 5,
    initials: "MR",
    name: "Manish Kumar Raikwar",
    designation: "Co-Founder & Strategic Shareholder",
    bio: "Contributing to the company's future with a focus on stability, long-term value creation, and organizational excellence.",
    quote: "Sustainable growth begins with shared purpose and commitment.",
  },
];