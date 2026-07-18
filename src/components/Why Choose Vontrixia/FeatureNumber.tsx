import React from "react";
import clsx from "clsx";

interface FeatureNumberProps {
  number: string;
  className?: string;
}

const FeatureNumber: React.FC<FeatureNumberProps> = ({
  number,
  className,
}) => {
  return (
    <div
      aria-hidden="true"
      className={clsx(
        "pointer-events-none absolute right-6 top-4 select-none",
        className
      )}
    >
      {/* Glow */}
      <div className="absolute inset-0 blur-3xl opacity-30">
        <span className="text-8xl font-black tracking-tight text-cyan-500">
          {number}
        </span>
      </div>

      {/* Main Number */}
      <span
        className="
          relative
          text-7xl
          md:text-8xl
          font-black
          tracking-tight
          text-white/[0.04]
          transition-all
          duration-500
          group-hover:text-white/[0.08]
        "
      >
        {number}
      </span>
    </div>
  );
};

export default FeatureNumber;