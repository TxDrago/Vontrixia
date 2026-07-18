"use client";

import { HoverLift } from "@/components/common/motion";
import { Value } from "@/data/values";

interface ValueCardProps {
  value: Value;
}

const ValueCard = ({ value }: ValueCardProps) => {
  const Icon = value.icon;

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
            duration-500
            group-hover:scale-110
            group-hover:rotate-6
          "
        >
          <Icon className="h-8 w-8" />
        </div>

        {/* Content */}

        <div className="relative z-10 mt-8">
          <h3 className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-300">
            {value.title}
          </h3>

          <p className="mt-4 leading-8 text-slate-400">
            {value.description}
          </p>
        </div>

        {/* Bottom Accent */}

        <div
          className="
            relative
            z-10
            mt-8
            h-px
            w-full
            bg-gradient-to-r
            from-cyan-500/40
            via-white/10
            to-transparent
          "
        />
      </div>
    </HoverLift>
  );
};

export default ValueCard;