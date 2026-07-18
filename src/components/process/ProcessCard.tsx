"use client";

import {
  Search,
  ClipboardList,
  Palette,
  Code2,
  ShieldCheck,
  Rocket,
  LifeBuoy,
  CheckCircle2,
  Clock3,
} from "lucide-react";

import { ProcessStep } from "./processData";

const icons = {
  Search,
  ClipboardList,
  Palette,
  Code2,
  ShieldCheck,
  Rocket,
  LifeBuoy,
};

interface Props {
  process: ProcessStep;
  active?: boolean;
}

export default function ProcessCard({
  process,
  active = false,
}: Props) {
  const Icon =
    icons[process.icon as keyof typeof icons] || Search;

  return (
    <div
      className={`
        group
        relative
        h-full
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/[0.04]
        backdrop-blur-2xl
        transition-all
        duration-500
        hover:-translate-y-3
        hover:border-[#0450C3]/40
        hover:bg-white/[0.06]
        ${
          active
            ? "shadow-[0_0_45px_rgba(4,80,195,0.18)]"
            : ""
        }
      `}
    >
      {/* Animated Glow */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute -top-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-[#0450C3]/20 blur-[90px]" />
      </div>

      {/* Gradient Border */}
      <div className="absolute inset-0 rounded-3xl p-[1px]">
        <div className="h-full w-full rounded-3xl bg-gradient-to-br from-[#0450C3]/20 via-transparent to-cyan-400/20" />
      </div>

      <div className="relative z-10 flex h-full flex-col p-8">
        {/* Header */}
        <div className="flex items-start justify-between">
          {/* Step */}
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-300">
              Step {process.step}
            </p>

            <h3 className="mt-3 text-2xl font-bold text-white">
              {process.title}
            </h3>
          </div>

          {/* Icon */}
          <div
            className="
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-2xl
              border
              border-[#0450C3]/30
              bg-[#0450C3]/10
              transition-all
              duration-500
              group-hover:rotate-6
              group-hover:scale-110
            "
          >
            <Icon
              size={30}
              className="text-cyan-300"
            />
          </div>
        </div>

        {/* Large Number */}
        <h1
          className="
            mt-8
            text-7xl
            font-black
            leading-none
            text-white/5
            transition-all
            duration-500
            group-hover:text-[#0450C3]/15
          "
        >
          {process.step}
        </h1>

        {/* Description */}
        <p className="mt-4 text-[15px] leading-8 text-white/70">
          {process.description}
        </p>

        {/* Timeline */}
        <div
          className="
            mt-7
            inline-flex
            w-fit
            items-center
            gap-2
            rounded-full
            border
            border-[#0450C3]/20
            bg-[#0450C3]/10
            px-4
            py-2
            text-sm
            text-cyan-300
          "
        >
          <Clock3 size={16} />

          {process.duration}
        </div>

        {/* Divider */}
        <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

        {/* Deliverables */}
        <div className="space-y-4">
          {process.deliverables.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3"
            >
              <CheckCircle2
                size={18}
                className="mt-1 shrink-0 text-cyan-400"
              />

              <span className="text-white/75">
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Line */}
        <div className="mt-auto pt-10">
          <div className="h-px w-full bg-gradient-to-r from-[#0450C3] via-cyan-400 to-transparent opacity-60 transition-all duration-500 group-hover:opacity-100" />
        </div>
      </div>
    </div>
  );
}