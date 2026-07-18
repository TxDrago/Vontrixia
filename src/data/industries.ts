import {
  HeartPulse,
  Factory,
  Landmark,
  GraduationCap,
  ShoppingBag,
  Building2,
  Truck,
  Building,
  Plane,
  Scale,
  Rocket,
  LandmarkIcon,
  LucideIcon,
} from "lucide-react";

export interface Industry {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  solutions: string[];
  accent: string;
  gradient: string;
  featured?: boolean;
}

export const industries: Industry[] = [
  {
    id: 1,
    title: "Healthcare",
    description:
      "Secure and intelligent healthcare platforms that improve patient care, streamline operations, and enable data-driven clinical decisions.",
    icon: HeartPulse,
    solutions: [
      "Patient Portal",
      "EHR",
      "Appointments",
      "Billing",
      "Laboratory",
      "AI Diagnostics",
    ],
    accent: "text-cyan-400",
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
    featured: true,
  },

  {
    id: 2,
    title: "Manufacturing",
    description:
      "Modern ERP and production management systems that optimize operations, inventory, and supply chain efficiency.",
    icon: Factory,
    solutions: [
      "ERP",
      "Inventory",
      "Warehouse",
      "Production",
      "Procurement",
      "Analytics",
    ],
    accent: "text-orange-400",
    gradient: "from-orange-500/20 via-amber-500/10 to-transparent",
  },

  {
    id: 3,
    title: "Finance",
    description:
      "Secure financial platforms with automation, analytics, compliance, and intelligent reporting for modern businesses.",
    icon: Landmark,
    solutions: [
      "Accounting",
      "Lending",
      "Expense Tracking",
      "Fraud Detection",
      "Payments",
      "AI Analytics",
    ],
    accent: "text-emerald-400",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
  },

  {
    id: 4,
    title: "Education",
    description:
      "Scalable learning platforms that deliver engaging digital education experiences for institutions and learners.",
    icon: GraduationCap,
    solutions: [
      "LMS",
      "Student Portal",
      "Assessments",
      "Certificates",
      "Live Classes",
      "AI Learning",
    ],
    accent: "text-violet-400",
    gradient: "from-violet-500/20 via-fuchsia-500/10 to-transparent",
  },

  {
    id: 5,
    title: "Retail & E-Commerce",
    description:
      "Customer-focused commerce platforms that simplify sales, inventory management, and personalized shopping experiences.",
    icon: ShoppingBag,
    solutions: [
      "Online Store",
      "POS",
      "CRM",
      "Inventory",
      "Loyalty",
      "Recommendations",
    ],
    accent: "text-pink-400",
    gradient: "from-pink-500/20 via-rose-500/10 to-transparent",
  },

  {
    id: 6,
    title: "Enterprise",
    description:
      "Business-critical software solutions that improve productivity, collaboration, and operational efficiency across organizations.",
    icon: Building2,
    solutions: [
      "CRM",
      "ERP",
      "HRMS",
      "Workflow",
      "Business Intelligence",
      "Automation",
    ],
    accent: "text-sky-400",
    gradient: "from-sky-500/20 via-cyan-500/10 to-transparent",
  },

  {
    id: 7,
    title: "Logistics",
    description:
      "Smart logistics platforms for fleet management, warehouse operations, shipment tracking, and route optimization.",
    icon: Truck,
    solutions: [
      "Fleet",
      "GPS Tracking",
      "Warehouse",
      "Delivery",
      "Route Planning",
      "Analytics",
    ],
    accent: "text-indigo-400",
    gradient: "from-indigo-500/20 via-blue-500/10 to-transparent",
  },

  {
    id: 8,
    title: "Real Estate",
    description:
      "Digital property management solutions for developers, agencies, and buyers with modern customer experiences.",
    icon: Building,
    solutions: [
      "Property Portal",
      "CRM",
      "Bookings",
      "Virtual Tours",
      "Lead Management",
      "Analytics",
    ],
    accent: "text-green-400",
    gradient: "from-green-500/20 via-emerald-500/10 to-transparent",
  },

  {
    id: 9,
    title: "Travel & Hospitality",
    description:
      "Comprehensive travel platforms with booking engines, hotel management, payments, and customer engagement.",
    icon: Plane,
    solutions: [
      "Bookings",
      "Hotel Management",
      "Travel CRM",
      "Payments",
      "Reviews",
      "Customer Portal",
    ],
    accent: "text-blue-400",
    gradient: "from-blue-500/20 via-sky-500/10 to-transparent",
  },

  {
    id: 10,
    title: "Legal Services",
    description:
      "Digital legal solutions that simplify case management, document workflows, compliance, and client communication.",
    icon: Scale,
    solutions: [
      "Case Management",
      "Client Portal",
      "Documents",
      "eSign",
      "Compliance",
      "Scheduling",
    ],
    accent: "text-yellow-400",
    gradient: "from-yellow-500/20 via-amber-500/10 to-transparent",
  },

  {
    id: 11,
    title: "Startups",
    description:
      "Rapid MVP development and scalable SaaS platforms that help founders launch, validate, and grow faster.",
    icon: Rocket,
    solutions: [
      "MVP",
      "SaaS",
      "AI Features",
      "Mobile Apps",
      "Dashboards",
      "Growth Analytics",
    ],
    accent: "text-rose-400",
    gradient: "from-rose-500/20 via-pink-500/10 to-transparent",
  },

  {
    id: 12,
    title: "Government & Public Services",
    description:
      "Citizen-centric digital platforms that improve accessibility, transparency, automation, and public service delivery.",
    icon: LandmarkIcon,
    solutions: [
      "Citizen Portal",
      "e-Governance",
      "Digital Records",
      "Payments",
      "Automation",
      "Analytics",
    ],
    accent: "text-slate-300",
    gradient: "from-slate-500/20 via-slate-400/10 to-transparent",
  },
];