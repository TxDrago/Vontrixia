"use client";

import clsx from "clsx";
import { CheckCircle2 } from "lucide-react";

interface TrustBadgeProps {
  label: string;
  className?: string;
}

const TrustBadge = ({
  label,
  className,
}: TrustBadgeProps) => {
  return (
    <span
      className={clsx(
        `
        group
        inline-flex
        items-center
        gap-3
        rounded-full
        border
        border-white/10
        bg-white/[0.04]
        px-4
        py-2.5
        backdrop-blur-xl
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:border-cyan-400/30
        hover:bg-cyan-500/10
        hover:shadow-lg
        hover:shadow-cyan-500/10
        `,
        className
      )}
    >
      {/* Icon */}
      <CheckCircle2
        className="
          h-4
          w-4
          shrink-0
          text-cyan-400
          transition-all
          duration-300
          group-hover:scale-110
          group-hover:text-cyan-300
        "
      />

      {/* Label */}
      <span
        className="
          text-sm
          font-medium
          tracking-wide
          text-slate-300
          transition-colors
          duration-300
          group-hover:text-white
        "
      >
        {label}
      </span>
    </span>
  );
};

export default TrustBadge;