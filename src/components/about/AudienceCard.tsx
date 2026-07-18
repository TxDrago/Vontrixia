"use client";

import { ArrowUpRight } from "lucide-react";

import { HoverLift } from "@/components/common/motion";
import { Audience } from "@/data/audience";

interface AudienceCardProps {
  audience: Audience;
}

const AudienceCard = ({ audience }: AudienceCardProps) => {
  const Icon = audience.icon;

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
        {/* Aurora Glow */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-br
            from-cyan-500/10
            via-transparent
            to-violet-500/10
            opacity-0
            transition-opacity
            duration-500
            group-hover:opacity-100
          "
        />

        {/* Top Row */}

        <div className="relative z-10 flex items-start justify-between">
          <div
            className="
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
              duration-500
              group-hover:scale-110
              group-hover:rotate-6
            "
          >
            <Icon className="h-8 w-8" />
          </div>

          <ArrowUpRight
            className="
              h-5
              w-5
              text-slate-500
              transition-all
              duration-300
              group-hover:translate-x-1
              group-hover:-translate-y-1
              group-hover:text-cyan-300
            "
          />
        </div>

        {/* Content */}

        <div className="relative z-10 mt-8">
          <h3
            className="
              text-2xl
              font-bold
              text-white
              transition-colors
              duration-300
              group-hover:text-cyan-300
            "
          >
            {audience.title}
          </h3>

          <p className="mt-5 leading-8 text-slate-400">
            {audience.description}
          </p>
        </div>

        {/* Bottom Accent */}

        <div
          className="
            relative
            z-10
            mt-8
            h-1
            w-16
            rounded-full
            bg-gradient-to-r
            from-cyan-400
            to-violet-500
            transition-all
            duration-500
            group-hover:w-28
          "
        />
      </div>
    </HoverLift>
  );
};

export default AudienceCard;