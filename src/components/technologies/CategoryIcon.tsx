"use client";

import { LucideIcon } from "lucide-react";
import clsx from "clsx";

interface CategoryIconProps {
  icon: LucideIcon;
  accent?: string;
  gradient?: string;
  className?: string;
}

const CategoryIcon = ({
  icon: Icon,
  accent = "text-cyan-400",
  gradient = "from-cyan-500/20 via-blue-500/10 to-indigo-500/20",
  className,
}: CategoryIconProps) => {
  return (
    <div
      className={clsx(
        "relative flex h-20 w-20 items-center justify-center",
        className
      )}
    >
      {/* Background Glow */}
      <div
        className={clsx(
          "absolute inset-0 rounded-3xl bg-gradient-to-br blur-2xl opacity-60 transition-all duration-500",
          gradient,
          "group-hover:scale-125 group-hover:opacity-100"
        )}
      />

      {/* Glass Container */}
      <div
        className="
          relative
          flex
          h-20
          w-20
          items-center
          justify-center
          rounded-3xl
          border
          border-white/10
          bg-white/[0.05]
          backdrop-blur-xl
          transition-all
          duration-500
          shadow-lg
          group-hover:-translate-y-2
          group-hover:rotate-6
          group-hover:scale-110
          group-hover:border-white/20
        "
      >
        {/* Inner Glow */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-60" />

        <Icon
          className={clsx(
            "relative z-10 h-10 w-10 transition-all duration-500",
            accent,
            "group-hover:scale-110"
          )}
        />
      </div>

      {/* Floating Ring */}
      <div
        className="
          absolute
          -inset-2
          rounded-[28px]
          border
          border-white/5
          opacity-0
          transition-all
          duration-500
          group-hover:opacity-100
          group-hover:scale-110
        "
      />
    </div>
  );
};

export default CategoryIcon;