export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: 1,
    question: "Do you work with startups as well as enterprises?",
    answer:
      "Absolutely. Whether you're validating an MVP, launching a SaaS platform, or modernizing enterprise software, we tailor our engineering approach to your business goals, timeline, and growth stage.",
  },
  {
    id: 2,
    question: "Can you modernize our existing software?",
    answer:
      "Yes. We can redesign, refactor, migrate, optimize, or rebuild legacy applications while preserving critical business workflows while improving performance, security, scalability, and user experience.",
  },
  {
    id: 3,
    question: "Can you integrate AI into our existing product?",
    answer:
      "Absolutely. We build AI-powered features including intelligent chatbots, workflow automation, predictive analytics, recommendation engines, AI assistants, and custom AI solutions that integrate seamlessly into your existing systems.",
  },
  {
    id: 4,
    question: "Will you sign an NDA before discussing our idea?",
    answer:
      "Yes. We understand the importance of confidentiality and are happy to sign a Non-Disclosure Agreement before discussing your product, business strategy, intellectual property, or technical requirements.",
  },
  {
    id: 5,
    question: "Who owns the source code after project completion?",
    answer:
      "Once the project is completed and all agreed contractual terms are fulfilled, you retain ownership of the source code and project assets as outlined in our agreement.",
  },
  {
    id: 6,
    question: "Do you provide support after launch?",
    answer:
      "Yes. We offer ongoing maintenance, security updates, cloud support, performance optimization, feature enhancements, monitoring, and long-term technical partnership after deployment.",
  },
  {
    id: 7,
    question: "Which technologies do you specialize in?",
    answer:
      "We engineer modern digital products using React, Next.js, TypeScript, Node.js, Python, Java, .NET, cloud platforms, AI technologies, mobile frameworks, APIs, databases, and scalable enterprise architectures.",
  },
  {
    id: 8,
    question: "How long does a software project usually take?",
    answer:
      "Every project is unique. Timelines depend on the scope, complexity, integrations, and business requirements. Following our discovery phase, we provide a realistic roadmap with milestones, delivery timelines, and transparent communication throughout development.",
  },
];

export const faqContent = {
  badge: "Need More Clarity?",

  title: "Questions Before\nWe Build Together",

  description:
    "Choosing the right technology partner is an important decision. Here are answers to some of the most common questions about our development process, collaboration model, project ownership, and long-term support.",

  footerTitle: "Didn't find the answer you were looking for?",

  footerDescription:
    "Our team is always happy to answer your questions and discuss your project requirements.",

  footerCTA: "Talk to Our Team",
};