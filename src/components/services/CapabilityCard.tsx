"use client";

import { ArrowUpRight } from "lucide-react";

import { Capability } from "@/data/capabilities";
import { HoverScale } from "@/components/common/motion";

interface CapabilityCardProps {
  capability: Capability;
}

const CapabilityCard = ({ capability }: CapabilityCardProps) => {
  const Icon = capability.icon;

  return (
    <HoverScale>
      <article
        className="
          group
          relative
          h-full
          overflow-hidden
          rounded-3xl
          border
          border-white/10
          bg-white/[0.04]
          p-8
          backdrop-blur-xl
          transition-all
          duration-500
          hover:-translate-y-2
          hover:border-cyan-400/40
          hover:bg-white/[0.06]
        "
      >
        {/* Background Glow */}

        <div
          className={`
            absolute
            -right-10
            -top-10
            h-40
            w-40
            rounded-full
            bg-gradient-to-br
            ${capability.gradient}
            opacity-10
            blur-3xl
            transition-all
            duration-500
            group-hover:opacity-20
          `}
        />

        {/* Icon */}

        <div
          className={`
            inline-flex
            h-16
            w-16
            items-center
            justify-center
            rounded-2xl
            bg-gradient-to-br
            ${capability.gradient}
            shadow-lg
            transition-transform
            duration-500
            group-hover:scale-110
            group-hover:rotate-6
          `}
        >
          <Icon className="h-8 w-8 text-white" />
        </div>

        {/* Title */}

        <h3 className="mt-8 text-2xl font-bold text-white">
          {capability.title}
        </h3>

        {/* Description */}

        <p className="mt-4 leading-8 text-slate-400">
          {capability.description}
        </p>

        {/* Bottom */}

        <div className="mt-8 flex items-center justify-between">
          <span className="text-sm font-medium tracking-wide text-cyan-300">
            Learn More
          </span>

          <ArrowUpRight
            className="
              h-5
              w-5
              text-cyan-400
              transition-transform
              duration-300
              group-hover:translate-x-1
              group-hover:-translate-y-1
            "
          />
        </div>

        {/* Bottom Border */}

        <div
          className={`
            absolute
            bottom-0
            left-0
            h-1
            w-0
            bg-gradient-to-r
            ${capability.gradient}
            transition-all
            duration-500
            group-hover:w-full
          `}
        />
      </article>
    </HoverScale>
  );
};

export default CapabilityCard;