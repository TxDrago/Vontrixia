"use client";

import { InputHTMLAttributes } from "react";
import clsx from "clsx";

interface ContactCheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: string;

  required?: boolean;

  error?: boolean;
  errorMessage?: string;

  helperText?: string;
}

const ContactCheckbox = ({
  label,

  required = false,

  error = false,
  errorMessage,
  helperText,

  className,

  id,

  ...props
}: ContactCheckboxProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="flex cursor-pointer items-start gap-3"
      >
        <input
          id={id}
          type="checkbox"
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
            mt-1
            h-5
            w-5
            shrink-0
            rounded-md
            border
            border-white/20
            bg-white/5
            accent-cyan-500
            transition-all
            duration-300

            focus:ring-4
            focus:ring-cyan-500/20

            disabled:cursor-not-allowed
            disabled:opacity-50
            `,
            error && "border-red-500",
            className
          )}
          {...props}
        />

        <span className="text-sm leading-6 text-slate-300">
          {label}

          {required && (
            <span className="ml-1 text-red-400">*</span>
          )}
        </span>
      </label>

      {error && errorMessage ? (
        <p
          id={`${id}-error`}
          className="ml-8 text-sm text-red-400"
        >
          {errorMessage}
        </p>
      ) : helperText ? (
        <p
          id={`${id}-helper`}
          className="ml-8 text-sm text-slate-500"
        >
          {helperText}
        </p>
      ) : null}
    </div>
  );
};

export default ContactCheckbox;