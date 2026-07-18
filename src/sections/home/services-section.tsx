"use client";

import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Globe,
  Smartphone,
  Cloud,
  Palette,
  Database,
} from "lucide-react";

const services = [
  {
    title: "AI Solutions",
    description:
      "Intelligent chatbots, AI assistants, workflow automation, recommendation engines, and custom AI-powered applications.",
    icon: Bot,
    featured: true,
  },
  {
    title: "Web Development",
    description:
      "Modern websites, enterprise portals, SaaS platforms, dashboards, and high-performance web applications.",
    icon: Globe,
  },
  {
    title: "Mobile Apps",
    description:
      "Cross-platform Android & iOS applications built with Flutter and React Native.",
    icon: Smartphone,
  },
  {
    title: "Cloud & DevOps",
    description:
      "AWS, Azure, Docker, CI/CD pipelines, deployment automation, and scalable infrastructure.",
    icon: Cloud,
  },
  {
    title: "UI / UX Design",
    description:
      "User-centric interfaces, wireframes, prototypes, branding, and complete design systems.",
    icon: Palette,
  },
  {
    title: "Custom Software",
    description:
      "ERP, CRM, HRM, automation platforms, APIs, and fully customized enterprise software.",
    icon: Database,
  },
];

export default function Services() {
  const featured = services[0];
  const remaining = services.slice(1);

  const FeaturedIcon = featured.icon;

  return (
    <section className="relative overflow-hidden py-28">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-[#0450C3]/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[170px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-[#0450C3]/30 bg-[#0450C3]/10 px-5 py-2 text-sm font-medium uppercase tracking-[0.3em] text-cyan-300">
            OUR SERVICES
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white lg:text-5xl">
            Digital Solutions
            <span className="block bg-gradient-to-r from-[#00D4FF] via-white to-[#0450C3] bg-clip-text text-transparent">
              Built for Tomorrow
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/60">
            We combine engineering excellence, modern technologies, and
            business-focused strategies to build digital products that scale.
          </p>
        </div>

        {/* Featured Card */}
        <div className="mt-20">
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#0450C3]/40">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#0450C3]/10 blur-[120px]" />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-[#0450C3] to-[#00D4FF] shadow-xl shadow-[#0450C3]/30">
                  <FeaturedIcon className="h-10 w-10 text-white" />
                </div>

                <h3 className="text-3xl font-bold text-white">
                  {featured.title}
                </h3>

                <p className="mt-5 leading-8 text-white/60">
                  {featured.description}
                </p>
              </div>

              <Link
                href="/services"
                className="group inline-flex items-center gap-3 rounded-full border border-[#0450C3]/30 bg-[#0450C3]/10 px-7 py-4 font-medium text-cyan-300 transition-all duration-300 hover:bg-[#0450C3]/20"
              >
                Learn More

                <ArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
              </Link>
            </div>
          </div>
        </div>

        {/* Service Cards */}
        <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {remaining.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#0450C3]/40"
              >
                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#0450C3]/10 blur-3xl" />
                </div>

                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0450C3] to-[#00D4FF] shadow-lg shadow-[#0450C3]/20 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                  <Icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="mt-8 text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-cyan-300">
                  {service.title}
                </h3>

                <p className="mt-4 leading-8 text-white/60">
                  {service.description}
                </p>

                <Link
                  href="/services"
                  className="mt-8 inline-flex items-center gap-2 font-medium text-cyan-300 transition-colors duration-300 hover:text-white"
                >
                  Learn More

                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <div className="mt-8 h-[2px] w-14 rounded-full bg-gradient-to-r from-[#0450C3] to-[#00D4FF] transition-all duration-500 group-hover:w-full" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}