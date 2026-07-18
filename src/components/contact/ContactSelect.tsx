"use client";

import { SelectHTMLAttributes } from "react";
import clsx from "clsx";
import { ChevronDown } from "lucide-react";

export interface SelectOption {
  label: string;
  value: string;
}

interface ContactSelectProps
  extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: SelectOption[];

  required?: boolean;

  error?: boolean;
  errorMessage?: string;

  helperText?: string;

  placeholder?: string;
}

const ContactSelect = ({
  label,
  options,

  required = false,

  error = false,
  errorMessage,
  helperText,

  placeholder = "Please select",

  className,

  id,

  ...props
}: ContactSelectProps) => {
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

      <div className="relative">
        <select
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
            appearance-none
            rounded-2xl
            border
            bg-white/5
            px-5
            pr-12
            text-white
            backdrop-blur-xl
            outline-none
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
        >
          <option
            value=""
            disabled
            hidden
            className="bg-slate-900"
          >
            {placeholder}
          </option>

          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              className="bg-slate-900 text-white"
            >
              {option.label}
            </option>
          ))}
        </select>

        <ChevronDown
          className="
            pointer-events-none
            absolute
            right-4
            top-1/2
            h-5
            w-5
            -translate-y-1/2
            text-slate-400
          "
        />
      </div>

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

export default ContactSelect;