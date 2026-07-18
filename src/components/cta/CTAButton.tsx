"use client";

import { ArrowUpRight } from "lucide-react";
import clsx from "clsx";

interface CTAButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const CTAButton = ({
  children,
  variant = "primary",
  onClick,
  className,
  type = "button",
  disabled = false,
}: CTAButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        `
        group
        relative
        inline-flex
        items-center
        justify-center
        gap-3
        overflow-hidden
        rounded-full
        px-8
        py-4
        text-sm
        font-semibold
        tracking-wide
        transition-all
        duration-300
        focus:outline-none
        focus:ring-2
        focus:ring-cyan-400/40
        disabled:pointer-events-none
        disabled:opacity-50
        `,
        variant === "primary"
          ? `
            border
            border-cyan-400/30
            bg-gradient-to-r
            from-cyan-500
            to-sky-500
            text-white
            shadow-lg
            shadow-cyan-500/20
            hover:-translate-y-1
            hover:shadow-2xl
            hover:shadow-cyan-500/30
          `
          : `
            border
            border-white/10
            bg-white/[0.04]
            text-slate-200
            backdrop-blur-xl
            hover:-translate-y-1
            hover:border-cyan-400/30
            hover:bg-white/[0.08]
            hover:text-white
            hover:shadow-xl
            hover:shadow-cyan-500/10
          `,
        className
      )}
    >
      {/* Hover Glow */}
      <span
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-cyan-400/20
          to-sky-400/20
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
      />

      {/* Label */}
      <span className="relative z-10">
        {children}
      </span>

      {/* Arrow */}
      <ArrowUpRight
        className="
          relative
          z-10
          h-5
          w-5
          transition-all
          duration-300
          group-hover:translate-x-1
          group-hover:-translate-y-1
        "
      />
    </button>
  );
};

export default CTAButton;