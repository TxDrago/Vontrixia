"use client";

import { ArrowUpRight, CheckCircle2 } from "lucide-react";

import { FadeUp } from "@/components/common/motion";
import { services } from "@/data/services";

const ServiceShowcase = () => {
  return (
    <div className="space-y-16 lg:space-y-24">
      {services.map((service, index) => {
        const Icon = service.icon;
        const reverse = index % 2 !== 0;

        return (
          <FadeUp key={service.id}>
            <section
              className="
                relative
                overflow-hidden
                rounded-[2rem]
                border
                border-white/10
                bg-white/[0.04]
                backdrop-blur-xl
              "
            >
              {/* Glow */}

              <div
                className={`
                  absolute
                  -right-32
                  top-1/2
                  h-96
                  w-96
                  -translate-y-1/2
                  rounded-full
                  bg-gradient-to-br
                  ${service.gradient}
                  opacity-10
                  blur-[140px]
                `}
              />

              <div
                className={`
                  grid
                  gap-16
                  px-8
                  py-12
                  lg:grid-cols-2
                  lg:px-14
                  lg:py-16
                  ${
                    reverse
                      ? "lg:[&>*:first-child]:order-2"
                      : ""
                  }
                `}
              >
                {/* Content */}

                <div className="relative z-10 flex flex-col justify-center">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
                    {service.tagline}
                  </p>

                  <h2 className="mt-4 text-4xl font-black leading-tight text-white lg:text-5xl">
                    {service.title}
                  </h2>

                  <p className="mt-6 text-lg leading-8 text-slate-400">
                    {service.description}
                  </p>

                  <div className="mt-10">
                    <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">
                      What We Deliver
                    </h4>

                    <div className="mt-5 grid gap-4 sm:grid-cols-2">
                      {service.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-3"
                        >
                          <CheckCircle2 className="h-5 w-5 text-cyan-400" />

                          <span className="text-slate-300">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-10">
                    <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">
                      Technologies
                    </h4>

                    <div className="mt-5 flex flex-wrap gap-3">
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="
                            rounded-full
                            border
                            border-white/10
                            bg-white/5
                            px-4
                            py-2
                            text-sm
                            text-slate-300
                          "
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    className="
                      mt-10
                      inline-flex
                      w-fit
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-cyan-400/30
                      bg-cyan-500/10
                      px-6
                      py-3
                      text-cyan-300
                      transition-all
                      hover:border-cyan-400
                      hover:bg-cyan-500/20
                    "
                  >
                    Discuss Your Project

                    <ArrowUpRight className="h-5 w-5" />
                  </button>
                </div>

                {/* Artwork */}

                <div
                  className="
                    relative
                    flex
                    items-center
                    justify-center
                    min-h-[400px]
                  "
                >
                  <div
                    className={`
                      absolute
                      h-80
                      w-80
                      rounded-full
                      bg-gradient-to-br
                      ${service.gradient}
                      opacity-20
                      blur-[120px]
                    `}
                  />

                  <Icon
                    strokeWidth={1}
                    className="
                      h-72
                      w-72
                      text-white/5
                      transition-all
                      duration-500
                      group-hover:scale-110
                    "
                  />

                  <div
                    className={`
                      absolute
                      flex
                      h-32
                      w-32
                      items-center
                      justify-center
                      rounded-3xl
                      bg-gradient-to-br
                      ${service.gradient}
                      shadow-2xl
                    `}
                  >
                    <Icon className="h-16 w-16 text-white" />
                  </div>
                </div>
              </div>
            </section>
          </FadeUp>
        );
      })}
    </div>
  );
};

export default ServiceShowcase;