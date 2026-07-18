"use client";

import { LucideIcon } from "lucide-react";
import clsx from "clsx";

interface FeatureIconProps {
  icon: LucideIcon;
  accent: string;
  gradient: string;
  className?: string;
}

const FeatureIcon = ({
  icon: Icon,
  accent,
  gradient,
  className,
}: FeatureIconProps) => {
  return (
    <div
      className={clsx(
        "relative flex h-16 w-16 items-center justify-center",
        className
      )}
    >
      {/* Animated Glow */}
      <div
        className={clsx(
          "absolute inset-0 rounded-2xl bg-gradient-to-br blur-xl opacity-40 transition-all duration-500",
          gradient,
          "group-hover:scale-125 group-hover:opacity-80"
        )}
      />

      {/* Glass Icon Container */}
      <div
        className="
          relative
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          border
          border-white/10
          bg-white/[0.05]
          backdrop-blur-xl
          transition-all
          duration-500
          shadow-lg
          group-hover:-translate-y-1
          group-hover:scale-110
          group-hover:rotate-6
          group-hover:border-white/20
        "
      >
        <Icon
          className={clsx(
            "h-8 w-8 transition-all duration-500 group-hover:scale-110",
            accent
          )}
        />
      </div>
    </div>
  );
};

export default FeatureIcon;