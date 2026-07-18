"use client";

import clsx from "clsx";

interface IndustryTagProps {
  label: string;
  className?: string;
}

const IndustryTag = ({
  label,
  className,
}: IndustryTagProps) => {
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
        bg-white/[0.03]
        px-3
        py-2
        text-xs
        font-medium
        text-slate-300
        backdrop-blur-md
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:border-cyan-400/30
        hover:bg-cyan-500/10
        hover:text-white
        hover:shadow-lg
        hover:shadow-cyan-500/10
      `,
        className
      )}
    >
      {/* Dot */}
      <span
        className="
          h-1.5
          w-1.5
          rounded-full
          bg-cyan-400
          transition-all
          duration-300
          group-hover:scale-150
          group-hover:shadow-md
          group-hover:shadow-cyan-400/60
        "
      />

      {label}
    </span>
  );
};

export default IndustryTag;