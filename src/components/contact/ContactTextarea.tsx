"use client";

import { TextareaHTMLAttributes } from "react";
import clsx from "clsx";

interface ContactTextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  required?: boolean;

  error?: boolean;
  errorMessage?: string;

  helperText?: string;
}

const ContactTextarea = ({
  label,
  required = false,

  error = false,
  errorMessage,
  helperText,

  className,

  id,

  ...props
}: ContactTextareaProps) => {
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

      <textarea
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
        rows={6}
        className={clsx(
          `
          w-full
          rounded-2xl
          border
          bg-white/5
          px-5
          py-4
          text-white
          placeholder:text-slate-500
          backdrop-blur-xl
          outline-none
          resize-none
          transition-all
          duration-300

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

export default ContactTextarea;