"use client";

import {
  BrainCircuit,
  Globe,
  Smartphone,
  Palette,
  Cloud,
  Database,
  Workflow,
  ShieldCheck,
} from "lucide-react";

const capabilities = [
  {
    title: "AI Development",
    description:
      "Build intelligent applications powered by AI, automation, and machine learning.",
    icon: BrainCircuit,
  },
  {
    title: "Web Applications",
    description:
      "Modern, scalable and high-performance web applications using the latest technologies.",
    icon: Globe,
  },
  {
    title: "Mobile Apps",
    description:
      "Cross-platform Android and iOS applications with exceptional user experiences.",
    icon: Smartphone,
  },
  {
    title: "UI / UX Design",
    description:
      "Beautiful, intuitive interfaces designed to improve engagement and usability.",
    icon: Palette,
  },
  {
    title: "Cloud Solutions",
    description:
      "Deploy secure and scalable applications with modern cloud infrastructure.",
    icon: Cloud,
  },
  {
    title: "Backend APIs",
    description:
      "Powerful REST APIs and backend architectures built for performance and reliability.",
    icon: Database,
  },
  {
    title: "DevOps",
    description:
      "CI/CD pipelines, Docker, cloud deployment and infrastructure automation.",
    icon: Workflow,
  },
  {
    title: "Cyber Security",
    description:
      "Security-first architecture with authentication, encryption and best practices.",
    icon: ShieldCheck,
  },
];

export default function Capabilities() {
  return (
    <section>

      {/* Heading */}

      <div className="text-center">

        <div className="flex items-center justify-center gap-4">

          <div className="h-px w-20 bg-gradient-to-r from-transparent to-[#0450C3]" />

          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-[#00D4FF]">
            DEVELOPMENT CAPABILITIES
          </span>

          <div className="h-px w-20 bg-gradient-to-l from-transparent to-[#0450C3]" />

        </div>

        <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl">
          Solutions Built For Every Stage
        </h2>

        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/60">
          From concept to deployment, we build secure, scalable and
          future-ready digital products tailored to your business goals.
        </p>

      </div>

      {/* Cards */}

      <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

        {capabilities.map((item) => {

          const Icon = item.icon;

          return (

            <div
              key={item.title}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-[#0450C3]/20
                bg-white/[0.04]
                p-7
                backdrop-blur-2xl
                transition-all
                duration-500
                hover:-translate-y-3
                hover:border-[#00D4FF]/40
                hover:shadow-[0_0_45px_rgba(4,80,195,0.25)]
              "
            >
              {/* Background Glow */}

              <div
                className="
                  absolute
                  -right-20
                  -top-20
                  h-44
                  w-44
                  rounded-full
                  bg-[#0450C3]/10
                  blur-3xl
                  transition-all
                  duration-500
                  group-hover:bg-[#00D4FF]/15
                "
              />

              {/* Icon */}

              <div
                className="
                  relative
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-[#0450C3]/20
                  bg-[#0450C3]/10
                  transition-all
                  duration-500
                  group-hover:rotate-6
                  group-hover:scale-110
                  group-hover:border-[#00D4FF]
                  group-hover:bg-[#0450C3]/20
                "
              >
                <Icon
                  size={30}
                  className="
                    text-[#00D4FF]
                    transition-transform
                    duration-500
                    group-hover:scale-110
                  "
                />
              </div>

              {/* Content */}

              <div className="relative mt-8">

                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-white/60">
                  {item.description}
                </p>

              </div>

              {/* Bottom Line */}

              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  h-[2px]
                  w-0
                  bg-gradient-to-r
                  from-[#0450C3]
                  via-[#00D4FF]
                  to-[#0450C3]
                  transition-all
                  duration-500
                  group-hover:w-full
                "
              />

            </div>

          );

        })}

      </div>

    </section>
  );
}