"use client";

import { InputHTMLAttributes } from "react";
import clsx from "clsx";

interface ContactInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  required?: boolean;

  error?: boolean;
  errorMessage?: string;

  helperText?: string;
}

const ContactInput = ({
  label,
  required = false,

  error = false,
  errorMessage,
  helperText,

  className,

  id,

  ...props
}: ContactInputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="text-sm font-medium text-slate-300"
      >
        {label}

        {required && (
          <span className="ml-1 text-red-400">*</span>
        )}
      </label>

      <input
        id={id}
        required={required}
        aria-invalid={error}
        aria-describedby={
          error
            ? `${id}-error`
            : helperText
            ? `${id}-helper`
            : undefined
        }
        className={clsx(
          `
          h-14
          w-full
          rounded-2xl
          border
          bg-white/5
          px-5
          text-white
          backdrop-blur-xl
          outline-none
          transition-all
          duration-300

          placeholder:text-slate-500

          disabled:cursor-not-allowed
          disabled:opacity-50

          focus:ring-4
          `,
          error
            ? `
              border-red-500
              focus:border-red-500
              focus:ring-red-500/20
            `
            : `
              border-white/10
              focus:border-cyan-400
              focus:bg-white/10
              focus:ring-cyan-500/10
            `,
          className
        )}
        {...props}
      />

      {error && errorMessage ? (
        <p
          id={`${id}-error`}
          className="text-sm text-red-400"
        >
          {errorMessage}
        </p>
      ) : helperText ? (
        <p
          id={`${id}-helper`}
          className="text-sm text-slate-500"
        >
          {helperText}
        </p>
      ) : null}
    </div>
  );
};

export default ContactInput;