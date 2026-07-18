"use client";

import React from "react";
import clsx from "clsx";

interface TechnologyChipProps {
  label: string;
  accent?: string;
  className?: string;
}

const accentStyles: Record<
  string,
  {
    dot: string;
    border: string;
    hoverBorder: string;
    glow: string;
  }
> = {
  "text-cyan-400": {
    dot: "bg-cyan-400",
    border: "border-cyan-500/10",
    hoverBorder: "group-hover:border-cyan-400/30",
    glow: "group-hover:shadow-cyan-500/20",
  },

  "text-violet-400": {
    dot: "bg-violet-400",
    border: "border-violet-500/10",
    hoverBorder: "group-hover:border-violet-400/30",
    glow: "group-hover:shadow-violet-500/20",
  },

  "text-blue-400": {
    dot: "bg-blue-400",
    border: "border-blue-500/10",
    hoverBorder: "group-hover:border-blue-400/30",
    glow: "group-hover:shadow-blue-500/20",
  },

  "text-emerald-400": {
    dot: "bg-emerald-400",
    border: "border-emerald-500/10",
    hoverBorder: "group-hover:border-emerald-400/30",
    glow: "group-hover:shadow-emerald-500/20",
  },

  "text-amber-400": {
    dot: "bg-amber-400",
    border: "border-amber-500/10",
    hoverBorder: "group-hover:border-amber-400/30",
    glow: "group-hover:shadow-amber-500/20",
  },

  "text-pink-400": {
    dot: "bg-pink-400",
    border: "border-pink-500/10",
    hoverBorder: "group-hover:border-pink-400/30",
    glow: "group-hover:shadow-pink-500/20",
  },
};

const TechnologyChip: React.FC<TechnologyChipProps> = ({
  label,
  accent = "text-cyan-400",
  className,
}) => {
  const style = accentStyles[accent] ?? accentStyles["text-cyan-400"];

  return (
    <span
      className={clsx(
        "group",
        "inline-flex items-center gap-2",
        "rounded-full",
        "border",
        style.border,
        style.hoverBorder,
        "bg-white/[0.04]",
        "px-3 py-2",
        "text-sm font-medium text-slate-300",
        "backdrop-blur-md",
        "transition-all duration-300",
        "hover:-translate-y-0.5",
        "hover:bg-white/[0.08]",
        "hover:text-white",
        "hover:shadow-lg",
        style.glow,
        className
      )}
    >
      <span
        className={clsx(
          "h-2 w-2 rounded-full transition-all duration-300",
          style.dot,
          "group-hover:scale-125"
        )}
      />

      <span>{label}</span>
    </span>
  );
};

export default TechnologyChip;