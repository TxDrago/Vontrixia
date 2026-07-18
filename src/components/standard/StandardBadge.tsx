"use client";

import clsx from "clsx";
import { CheckCircle2 } from "lucide-react";

interface StandardBadgeProps {
  label: string;
  className?: string;
}

const StandardBadge = ({
  label,
  className,
}: StandardBadgeProps) => {
  return (
    <span
      className={clsx(
        `
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
      <CheckCircle2
        className="
          h-4
          w-4
          text-cyan-400
          transition-transform
          duration-300
          group-hover:scale-110
        "
      />

      <span>{label}</span>
    </span>
  );
};

export default StandardBadge;