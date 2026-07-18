import {
  Briefcase,
  Building2,
  Cpu,
  Factory,
  GraduationCap,
  HeartPulse,
  Home,
  Hotel,
  Landmark,
  Plane,
  ShoppingCart,
  Truck,
  Leaf,
  Shield,
  Smartphone,
  Globe2,
} from "lucide-react";

import { LucideIcon } from "lucide-react";

export interface ServiceIndustry {
  id: number;

  category: string;

  title: string;

  subtitle: string;

  description: string;

  icon: LucideIcon;

  gradient: string;

  solutions: string[];
}

export const serviceIndustries: ServiceIndustry[] = [
  // ==========================================================
  // CORE INDUSTRIES
  // ==========================================================

  {
    id: 1,

    category: "Core Industries",

    title: "Healthcare",

    subtitle: "Digital Healthcare Solutions",

    description:
      "Building secure and intelligent healthcare platforms that improve patient care, streamline operations, and simplify medical workflows.",

    icon: HeartPulse,

    gradient: "from-red-500 to-pink-500",

    solutions: [
      "Hospital Management",
      "Patient Portal",
      "Telemedicine",
      "EMR / EHR",
      "Appointment Management",
      "Pharmacy Systems",
    ],
  },

  {
    id: 2,

    category: "Core Industries",

    title: "Manufacturing",

    subtitle: "Smart Manufacturing Systems",

    description:
      "Helping manufacturers optimize production, automate operations, and improve efficiency through intelligent software solutions.",

    icon: Factory,

    gradient: "from-orange-500 to-amber-500",

    solutions: [
      "ERP",
      "Inventory",
      "Warehouse Management",
      "Production Planning",
      "Quality Control",
      "Asset Tracking",
    ],
  },

  {
    id: 3,

    category: "Core Industries",

    title: "Retail & E-Commerce",

    subtitle: "Modern Commerce Platforms",

    description:
      "Delivering scalable retail and e-commerce solutions that enhance customer experiences and accelerate business growth.",

    icon: ShoppingCart,

    gradient: "from-cyan-500 to-blue-500",

    solutions: [
      "Online Stores",
      "POS Systems",
      "CRM",
      "Inventory",
      "Order Management",
      "Customer Loyalty",
    ],
  },

  {
    id: 4,

    category: "Core Industries",

    title: "Banking & Finance",

    subtitle: "Secure Financial Technology",

    description:
      "Developing highly secure financial software that supports digital banking, payments, compliance, and business intelligence.",

    icon: Landmark,

    gradient: "from-emerald-500 to-green-500",

    solutions: [
      "FinTech Platforms",
      "Loan Management",
      "Digital Payments",
      "Risk Analytics",
      "Insurance Systems",
      "Compliance Solutions",
    ],
  },

  {
    id: 5,

    category: "Core Industries",

    title: "Corporate & Enterprise",

    subtitle: "Enterprise Digital Transformation",

    description:
      "Enterprise-grade software that improves collaboration, productivity, automation, and business decision-making.",

    icon: Building2,

    gradient: "from-indigo-500 to-violet-500",

    solutions: [
      "CRM",
      "ERP",
      "HRMS",
      "Payroll",
      "Business Dashboards",
      "Workflow Automation",
    ],
  },

  {
    id: 6,

    category: "Core Industries",

    title: "Startups",

    subtitle: "From Idea to Scalable Product",

    description:
      "Helping startups validate ideas, launch faster, and scale confidently with modern cloud-native technology.",

    icon: Cpu,

    gradient: "from-violet-500 to-fuchsia-500",

    solutions: [
      "MVP Development",
      "SaaS Platforms",
      "AI Integration",
      "Cloud Infrastructure",
      "Product Strategy",
      "Scalable Architecture",
    ],
  },
    // ==========================================================
  // GROWTH INDUSTRIES
  // ==========================================================

  {
    id: 7,

    category: "Growth Industries",

    title: "Education",

    subtitle: "Digital Learning Platforms",

    description:
      "Empowering schools, universities, and training organizations with modern digital learning experiences and academic management solutions.",

    icon: GraduationCap,

    gradient: "from-purple-500 to-violet-500",

    solutions: [
      "Learning Management System",
      "Student Portal",
      "Online Examinations",
      "Attendance Management",
      "Fee Management",
      "Academic Analytics",
    ],
  },

  {
    id: 8,

    category: "Growth Industries",

    title: "Logistics & Supply Chain",

    subtitle: "Connected Logistics Solutions",

    description:
      "Helping logistics companies improve visibility, automate operations, and optimize transportation through intelligent software.",

    icon: Truck,

    gradient: "from-sky-500 to-cyan-500",

    solutions: [
      "Fleet Management",
      "Warehouse Management",
      "GPS Tracking",
      "Delivery Management",
      "Inventory Control",
      "Route Optimization",
    ],
  },

  {
    id: 9,

    category: "Growth Industries",

    title: "Hospitality",

    subtitle: "Exceptional Guest Experiences",

    description:
      "Technology solutions for hotels, restaurants, and hospitality businesses focused on seamless operations and memorable customer experiences.",

    icon: Hotel,

    gradient: "from-pink-500 to-rose-500",

    solutions: [
      "Hotel Management",
      "Booking Systems",
      "Restaurant POS",
      "Guest Portal",
      "CRM",
      "Business Analytics",
    ],
  },

  {
    id: 10,

    category: "Growth Industries",

    title: "Real Estate",

    subtitle: "Modern Property Technology",

    description:
      "Helping real estate businesses manage properties, engage clients, and accelerate sales with intelligent digital platforms.",

    icon: Home,

    gradient: "from-amber-500 to-orange-500",

    solutions: [
      "Property Management",
      "Lead Management",
      "CRM",
      "Booking Platform",
      "Virtual Property Tours",
      "Sales Analytics",
    ],
  },

  {
    id: 11,

    category: "Growth Industries",

    title: "Travel & Tourism",

    subtitle: "Smart Travel Experiences",

    description:
      "Building digital platforms that simplify travel bookings, itinerary management, and customer engagement for travel businesses.",

    icon: Plane,

    gradient: "from-blue-500 to-sky-500",

    solutions: [
      "Booking Systems",
      "Travel CRM",
      "Package Management",
      "Customer Portal",
      "Mobile Applications",
      "Payment Integration",
    ],
  },
    // ==========================================================
  // SPECIALIZED INDUSTRIES
  // ==========================================================

  {
    id: 12,

    category: "Specialized Industries",

    title: "Government",

    subtitle: "Digital Public Services",

    description:
      "Secure and scalable digital platforms that improve transparency, streamline public services, and enhance citizen engagement.",

    icon: Shield,

    gradient: "from-slate-500 to-gray-500",

    solutions: [
      "Citizen Portals",
      "e-Governance",
      "Document Management",
      "Workflow Automation",
      "Digital Identity",
      "Public Service Platforms",
    ],
  },

  {
    id: 13,

    category: "Specialized Industries",

    title: "Agriculture",

    subtitle: "Smart Agriculture Solutions",

    description:
      "Modern AgriTech platforms that help farmers and agribusinesses improve productivity through data, automation, and connected technologies.",

    icon: Leaf,

    gradient: "from-green-500 to-lime-500",

    solutions: [
      "Farm Management",
      "IoT Monitoring",
      "Crop Analytics",
      "Supply Chain Tracking",
      "Inventory Management",
      "Mobile Applications",
    ],
  },

  {
    id: 14,

    category: "Specialized Industries",

    title: "Telecommunications",

    subtitle: "Connected Communication Platforms",

    description:
      "Scalable software solutions that help telecom providers automate operations, improve customer experiences, and manage large-scale networks.",

    icon: Smartphone,

    gradient: "from-purple-500 to-indigo-500",

    solutions: [
      "Customer Portal",
      "Billing Systems",
      "CRM",
      "Support Ticketing",
      "Analytics Dashboard",
      "Workflow Automation",
    ],
  },

  {
    id: 15,

    category: "Specialized Industries",

    title: "Media & Entertainment",

    subtitle: "Digital Media Experiences",

    description:
      "Creating engaging digital platforms for content creators, media companies, and entertainment businesses with modern streaming and content management solutions.",

    icon: Globe2,

    gradient: "from-fuchsia-500 to-pink-500",

    solutions: [
      "Content Management",
      "Streaming Platforms",
      "Subscription Systems",
      "Mobile Applications",
      "Analytics",
      "Digital Monetization",
    ],
  },

  {
    id: 16,

    category: "Specialized Industries",

    title: "Professional Services",

    subtitle: "Business Productivity Solutions",

    description:
      "Helping consulting firms, legal practices, agencies, and professional organizations streamline operations with intelligent business software.",

    icon: Briefcase,

    gradient: "from-teal-500 to-cyan-500",

    solutions: [
      "Client Portals",
      "Project Management",
      "CRM",
      "Billing Systems",
      "Document Management",
      "Workflow Automation",
    ],
  },
];