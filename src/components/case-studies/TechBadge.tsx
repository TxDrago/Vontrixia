import React from "react";

interface TechBadgeProps {
  tech: string;
  className?: string;
}

const TechBadge: React.FC<TechBadgeProps> = ({
  tech,
  className = "",
}) => {
  return (
    <span
      className={`
        inline-flex
        items-center
        rounded-full
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        px-3
        py-1.5
        text-xs
        font-medium
        text-slate-300
        transition-all
        duration-300
        hover:border-cyan-400/30
        hover:bg-cyan-500/10
        hover:text-cyan-300
        hover:shadow-lg
        hover:shadow-cyan-500/10
        hover:-translate-y-0.5
        ${className}
      `}
    >
      {tech}
    </span>
  );
};

export default TechBadge;
