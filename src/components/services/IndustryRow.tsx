"use client";

import { CheckCircle2 } from "lucide-react";

import { ServiceIndustry } from "@/data/serviceindustries";
import { FadeUp, HoverScale } from "@/components/common/motion";

interface IndustryRowProps {
  industry: ServiceIndustry;
  reverse?: boolean;
}

const IndustryRow = ({
  industry,
  reverse = false,
}: IndustryRowProps) => {
  const Icon = industry.icon;

  return (
    <FadeUp>
      <div className="group py-20">

        {/* Divider */}

        <div className="mb-20 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-500 group-hover:via-cyan-400/60" />

        <div
          className={`grid items-center gap-16 lg:grid-cols-2 ${
            reverse ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          {/* ================= LEFT CONTENT ================= */}

          <div>

            {/* Number */}

            <span className="text-7xl font-black text-white/5">
              {industry.id.toString().padStart(2, "0")}
            </span>

            {/* Subtitle */}

            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
              {industry.subtitle}
            </p>

            {/* Title */}

            <h3 className="mt-4 text-4xl font-black leading-tight text-white lg:text-5xl">
              {industry.title}
            </h3>

            {/* Description */}

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
              {industry.description}
            </p>

            {/* Solutions */}

            <div className="mt-10">

              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                Solutions We Deliver
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {industry.solutions.map((solution) => (
                  <HoverScale key={solution}>
                    <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/10">

                      <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-400" />

                      <span className="text-sm font-medium text-slate-200">
                        {solution}
                      </span>

                    </div>
                  </HoverScale>
                ))}
              </div>

            </div>

          </div>

          {/* ================= RIGHT VISUAL ================= */}

          <div className="flex justify-center">

            <HoverScale>

              <div className="relative flex h-80 w-80 items-center justify-center">

                {/* Glow */}

                <div
                  className={`absolute inset-0 rounded-full bg-gradient-to-br ${industry.gradient} opacity-20 blur-[100px]`}
                />

                {/* Decorative Rings */}

                <div className="absolute inset-4 rounded-full border border-white/10" />

                <div className="absolute inset-10 rounded-full border border-white/5" />

                <div className="absolute inset-16 rounded-full border border-white/5" />

                {/* Floating Orbs */}

                <span className="absolute left-6 top-10 h-4 w-4 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/40" />

                <span className="absolute right-8 top-16 h-3 w-3 rounded-full bg-violet-400 shadow-lg shadow-violet-500/40" />

                <span className="absolute bottom-10 left-12 h-2.5 w-2.5 rounded-full bg-white/80" />

                <span className="absolute bottom-14 right-12 h-5 w-5 rounded-full bg-cyan-400/20 blur-sm" />

                {/* Glass Icon Card */}

                <div
                  className={`
                    relative
                    flex
                    h-36
                    w-36
                    items-center
                    justify-center
                    rounded-[2rem]
                    border
                    border-white/10
                    bg-gradient-to-br
                    ${industry.gradient}
                    shadow-[0_20px_60px_rgba(0,0,0,0.45)]
                  `}
                >
                  <div className="absolute inset-0 rounded-[2rem] bg-white/10" />

                  <Icon className="relative h-16 w-16 text-white" />
                </div>

              </div>

            </HoverScale>

          </div>

        </div>

      </div>
    </FadeUp>
  );
};

export default IndustryRow;