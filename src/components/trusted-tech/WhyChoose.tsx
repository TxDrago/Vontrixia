"use client";

import {
  ShieldCheck,
  Cpu,
  Zap,
  Layers3,
  Workflow,
  Users,
} from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "Modern Technology Stack",
    description:
      "Built using the latest frameworks and cloud-native technologies to ensure scalability and long-term maintainability.",
  },
  {
    icon: Zap,
    title: "Performance First",
    description:
      "Every project is optimized for speed, responsiveness, accessibility, and exceptional user experience.",
  },
  {
    icon: ShieldCheck,
    title: "Security by Design",
    description:
      "Security isn't an afterthought. We follow modern development practices to build secure and reliable applications.",
  },
  {
    icon: Layers3,
    title: "Scalable Architecture",
    description:
      "Clean architecture and modular codebases that grow with your business without unnecessary complexity.",
  },
  {
    icon: Workflow,
    title: "Agile Development",
    description:
      "Fast iterations, transparent communication, and continuous delivery help transform ideas into products efficiently.",
  },
  {
    icon: Users,
    title: "Business Focused",
    description:
      "We don't just write code—we build digital solutions that align with your business goals and future vision.",
  },
];

export default function WhyChoose() {
  return (
    <section className="relative overflow-hidden py-28">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#0450C3]/10 blur-[140px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-[#0450C3]/30 bg-[#0450C3]/10 px-5 py-2 text-sm font-medium uppercase tracking-[0.25em] text-cyan-300">
            WHY VONTRIXIA
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white lg:text-5xl">
            Engineering Software
            <span className="block bg-gradient-to-r from-[#00D4FF] via-white to-[#0450C3] bg-clip-text text-transparent">
              Built for the Future
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/60">
            We combine modern technologies, thoughtful design, and scalable
            engineering practices to create digital products that are reliable,
            secure, and ready for tomorrow.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-8
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-[#0450C3]/40
                  hover:bg-white/[0.05]
                "
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#0450C3]/20 blur-3xl" />
                </div>

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
                    bg-gradient-to-br
                    from-[#0450C3]
                    to-[#00D4FF]
                    shadow-lg
                    shadow-[#0450C3]/20
                    transition-transform
                    duration-500
                    group-hover:scale-110
                    group-hover:rotate-6
                  "
                >
                  <Icon className="h-8 w-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="mt-8 text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-cyan-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="mt-4 leading-8 text-white/60">
                  {feature.description}
                </p>

                {/* Accent Line */}
                <div
                  className="
                    mt-8
                    h-[2px]
                    w-14
                    rounded-full
                    bg-gradient-to-r
                    from-[#0450C3]
                    to-[#00D4FF]
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}