"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import { Loader2 } from "lucide-react";

interface ContactButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;

  loading?: boolean;

  leftIcon?: ReactNode;
  rightIcon?: ReactNode;

  fullWidth?: boolean;
}

const ContactButton = ({
  children,

  loading = false,

  leftIcon,
  rightIcon,

  fullWidth = false,

  className,

  disabled,

  ...props
}: ContactButtonProps) => {
  const isDisabled = disabled || loading;

  return (
    <button
      disabled={isDisabled}
      className={clsx(
        `
        group
        inline-flex
        h-14
        items-center
        justify-center
        gap-3
        rounded-2xl

        bg-gradient-to-r
        from-cyan-500
        via-sky-500
        to-violet-600

        px-8

        text-base
        font-semibold
        text-white

        shadow-lg
        shadow-cyan-500/20

        transition-all
        duration-300

        hover:-translate-y-1
        hover:shadow-cyan-500/40

        active:translate-y-0

        focus:outline-none
        focus:ring-4
        focus:ring-cyan-500/20

        disabled:cursor-not-allowed
        disabled:opacity-60
        disabled:hover:translate-y-0
        disabled:hover:shadow-cyan-500/20
        `,
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {loading ? (
        <>
          <Loader2 className="h-5 w-5 animate-spin" />
          Sending...
        </>
      ) : (
        <>
          {leftIcon}

          <span>{children}</span>

          {rightIcon}
        </>
      )}
    </button>
  );
};

export default ContactButton;