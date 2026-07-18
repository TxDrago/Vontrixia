"use client";

import { ArrowRight } from "lucide-react";

import { HoverLift } from "@/components/common/motion";
import { ProcessStep } from "@/data/process";

interface ProcessCardProps {
  step: ProcessStep;
}

const ProcessCard = ({ step }: ProcessCardProps) => {
  const Icon = step.icon;

  return (
    <HoverLift>
      <div
        className="
          group
          relative
          h-full
          overflow-hidden
          rounded-3xl
          border
          border-white/10
          bg-white/5
          p-8
          backdrop-blur-xl
          transition-all
          duration-500
          hover:border-cyan-400/40
          hover:bg-white/[0.07]
        "
      >
        {/* Background Number */}

        <span
          className="
            absolute
            right-6
            top-4
            text-7xl
            font-black
            text-white/[0.04]
            transition-all
            duration-500
            group-hover:text-cyan-400/10
          "
        >
          {step.step}
        </span>

        {/* Glow */}

        <div
          className="
            absolute
            inset-0
            opacity-0
            transition-opacity
            duration-500
            group-hover:opacity-100
            bg-gradient-to-br
            from-cyan-500/10
            via-transparent
            to-violet-500/10
          "
        />

        {/* Icon */}

        <div
          className="
            relative
            z-10
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-2xl
            bg-gradient-to-br
            from-cyan-500/20
            to-violet-500/20
            text-cyan-300
            transition-all
            duration-300
            group-hover:scale-110
            group-hover:rotate-6
          "
        >
          <Icon className="h-8 w-8" />
        </div>

        {/* Content */}

        <div className="relative z-10 mt-8">
          <span
            className="
              inline-flex
              rounded-full
              border
              border-cyan-500/20
              bg-cyan-500/10
              px-3
              py-1
              text-xs
              font-semibold
              tracking-wider
              text-cyan-300
            "
          >
            Step {step.step}
          </span>

          <h3 className="mt-5 text-2xl font-bold text-white">
            {step.title}
          </h3>

          <p className="mt-4 leading-8 text-slate-400">
            {step.description}
          </p>
        </div>

        {/* Bottom */}

        <div
          className="
            relative
            z-10
            mt-10
            flex
            items-center
            gap-2
            text-cyan-300
            transition-all
            duration-300
            group-hover:gap-3
          "
        >
          <span className="text-sm font-semibold">
            Next Step
          </span>

          <ArrowRight
            className="
              h-4
              w-4
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />
        </div>
      </div>
    </HoverLift>
  );
};

export default ProcessCard;