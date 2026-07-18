import React from "react";
import { SolutionStatus } from "../../data/featuredSolutions";

interface StatusChipProps {
  status: SolutionStatus;
  className?: string;
}

const statusStyles: Record<
  SolutionStatus,
  {
    bg: string;
    border: string;
    text: string;
    dot: string;
  }
> = {
  "Capability Demonstration": {
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
    text: "text-blue-300",
    dot: "bg-blue-400",
  },

  "Product Concept": {
    bg: "bg-violet-500/10",
    border: "border-violet-500/30",
    text: "text-violet-300",
    dot: "bg-violet-400",
  },

  "Solution Blueprint": {
    bg: "bg-amber-500/10",
    border: "border-amber-500/30",
    text: "text-amber-300",
    dot: "bg-amber-400",
  },

  "Engineering Showcase": {
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
    text: "text-emerald-300",
    dot: "bg-emerald-400",
  },

  "Innovation Prototype": {
    bg: "bg-pink-500/10",
    border: "border-pink-500/30",
    text: "text-pink-300",
    dot: "bg-pink-400",
  },
};

const StatusChip: React.FC<StatusChipProps> = ({
  status,
  className = "",
}) => {
  const style = statusStyles[status];

  return (
    <span
      className={`
        inline-flex
        items-center
        gap-2
        rounded-full
        border
        px-3
        py-1
        text-xs
        font-medium
        tracking-wide
        backdrop-blur-xl
        transition-all
        duration-300
        hover:scale-105
        ${style.bg}
        ${style.border}
        ${style.text}
        ${className}
      `}
    >
      <span
        className={`
          h-2
          w-2
          rounded-full
          ${style.dot}
          animate-pulse
        `}
      />

      {status}
    </span>
  );
};

export default StatusChip;