import {
  Mail,
  Phone,
  MapPin,
  CalendarClock,
} from "lucide-react";

export interface ContactItem {
  id: number;
  icon: typeof Mail;
  title: string;
  value: string;
  description: string;
  href: string;
}

export const contactItems: ContactItem[] = [
  {
    id: 1,
    icon: Mail,
    title: "Email Us",
    value: "hello@vontrixia.in",
    description: "Typically responds within 24 hours.",
    href: "mailto:hello@vontrixia.in",
  },
  {
    id: 2,
    icon: Phone,
    title: "Call Us",
    value: "+91 XXXXX XXXXX",
    description: "Monday – Saturday • 9:30 AM – 7:00 PM",
    href: "tel:+91XXXXXXXXXX",
  },
  {
    id: 3,
    icon: MapPin,
    title: "Remote First",
    value: "Serving Clients Worldwide",
    description:
      "We collaborate remotely with startups and businesses across India and globally.",
    href: "#",
  },
  {
    id: 4,
    icon: CalendarClock,
    title: "Free Consultation",
    value: "30-Minute Discovery Call",
    description:
      "Discuss your project, goals, and technology requirements with our team.",
    href: "#contact-form",
  },
];