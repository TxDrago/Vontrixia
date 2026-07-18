import {
  Building2,
  Briefcase,
  Cpu,
  Mail,
  Phone,
  MapPin,
  Globe,
  LucideIcon,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { IconType } from "react-icons";

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  id: number;
  title: string;
  icon: LucideIcon;
  links: FooterLink[];
}

export interface SocialLink {
  id: number;
  label: string;
  href: string;
  icon: IconType | LucideIcon;
}

export interface ContactItem {
  id: number;
  label: string;
  value: string;
  href: string;
  icon: LucideIcon;
}

export const footerBrand = {
  name: "Vontrixia Technologies",

  tagline: "Engineering Digital Excellence",

  description:
    "Building secure, scalable, cloud-native and AI-powered digital products for startups, growing businesses, and enterprises through thoughtful engineering and modern technology.",

  copyright: `© ${new Date().getFullYear()} Vontrixia Technologies Pvt. Ltd. All rights reserved.`,

  builtWith:
    "Designed and engineered with precision, passion, and purpose.",
};

export const footerColumns: FooterColumn[] = [
  {
    id: 1,
    title: "Company",
    icon: Building2,
    links: [
      {
        label: "About Us",
        href: "/about",
      },
      {
        label: "Services",
        href: "#services",
      },
      {
        label: "Featured Solutions",
        href: "#featured-solutions",
      },
      {
        label: "Industries",
        href: "#industries",
      },
      {
        label: "FAQ",
        href: "#faq",
      },
    ],
  },

  {
    id: 2,
    title: "Capabilities",
    icon: Briefcase,
    links: [
      {
        label: "Custom Software",
        href: "#services",
      },
      {
        label: "Web Applications",
        href: "#services",
      },
      {
        label: "AI Solutions",
        href: "#services",
      },
      {
        label: "Cloud Solutions",
        href: "#services",
      },
      {
        label: "Enterprise Platforms",
        href: "#featured-solutions",
      },
    ],
  },

  {
    id: 3,
    title: "Engineering",
    icon: Cpu,
    links: [
      {
        label: "Development Process",
        href: "#process",
      },
      {
        label: "Technology Stack",
        href: "#technologies",
      },
      {
        label: "Our Standards",
        href: "#standards",
      },
      {
        label: "Security First",
        href: "#standards",
      },
      {
        label: "Scalable Architecture",
        href: "#standards",
      },
    ],
  },
];

export const socialLinks: SocialLink[] = [
  {
    id: 1,
    label: "LinkedIn",
    href: "https://linkedin.com/company/vontrixia",
    icon: FaLinkedin,
  },
  {
    id: 2,
    label: "GitHub",
    href: "https://github.com/vontrixia",
    icon: FaGithub,
  },
  {
    id: 3,
    label: "Website",
    href: "https://vontrixia.in",
    icon: Globe,
  },
];

export const contactItems: ContactItem[] = [
  {
    id: 1,
    label: "Email",
    value: "hello@vontrixia.in",
    href: "mailto:hello@vontrixia.in",
    icon: Mail,
  },
  {
    id: 2,
    label: "Phone",
    value: "+91 XXXXX XXXXX",
    href: "tel:+91XXXXXXXXXX",
    icon: Phone,
  },
  {
    id: 3,
    label: "Location",
    value: "India",
    href: "#",
    icon: MapPin,
  },
];