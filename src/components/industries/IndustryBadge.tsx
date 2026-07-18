"use client";

import clsx from "clsx";

interface IndustryBadgeProps {
  label: string;
  className?: string;
}

const IndustryBadge = ({
  label,
  className,
}: IndustryBadgeProps) => {
  return (
    <span
      className={clsx(
        `
        group
        inline-flex
        items-center
        gap-2
        rounded-full
        border
        border-white/10
        bg-white/[0.04]
        px-4
        py-2
        text-xs
        font-semibold
        uppercase
        tracking-[0.18em]
        text-slate-300
        backdrop-blur-md
        transition-all
        duration-300
        hover:border-cyan-400/30
        hover:bg-white/[0.07]
        hover:text-white
        hover:shadow-lg
        hover:shadow-cyan-500/10
      `,
        className
      )}
    >
      {/* Indicator */}
      <span
        className="
          h-2
          w-2
          rounded-full
          bg-cyan-400
          transition-all
          duration-300
          group-hover:scale-125
          group-hover:shadow-md
          group-hover:shadow-cyan-400/50
        "
      />

      <span>{label}</span>
    </span>
  );
};

export default IndustryBadge;