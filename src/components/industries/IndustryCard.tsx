"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { Industry } from "@/data/industries";

import IndustryBadge from "./IndustryBadge";
import IndustryTag from "./IndustryTag";

interface IndustryCardProps {
  industry: Industry;
}

const IndustryCard = ({ industry }: IndustryCardProps) => {
  const Icon = industry.icon;

  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.35 }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        transition-all
        duration-500
        hover:border-cyan-400/20
        hover:shadow-2xl
        hover:shadow-cyan-500/10
      "
    >
      {/* Background Gradient */}
      <div
        className={`
          absolute
          inset-0
          bg-gradient-to-br
          ${industry.gradient}
          opacity-50
          transition-all
          duration-500
          group-hover:opacity-90
        `}
      />

      {/* Glow */}
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/5 blur-3xl transition-all duration-500 group-hover:scale-125" />

      {/* Border Glow */}
      <div className="absolute inset-0 rounded-3xl ring-1 ring-white/5 transition-all duration-500 group-hover:ring-cyan-400/20" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col p-8">

        {/* Header */}
        <div className="flex items-start justify-between gap-6">

          <div
            className="
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-2xl
              border
              border-white/10
              bg-white/[0.05]
              backdrop-blur-md
              transition-all
              duration-500
              group-hover:rotate-6
              group-hover:scale-110
              group-hover:border-cyan-400/30
            "
          >
            <Icon className={`h-8 w-8 ${industry.accent}`} />
          </div>

          <ArrowUpRight
            className="
              h-6
              w-6
              text-slate-500
              transition-all
              duration-300
              group-hover:-translate-y-1
              group-hover:translate-x-1
              group-hover:text-cyan-300
            "
          />
        </div>

        {/* Badge */}
        <div className="mt-8">
          <IndustryBadge label="Industry Solutions" />
        </div>

        {/* Title */}
        <h3
          className="
            mt-6
            text-2xl
            font-bold
            text-white
            transition-colors
            duration-300
            group-hover:text-cyan-300
          "
        >
          {industry.title}
        </h3>

        {/* Description */}
        <p className="mt-5 leading-8 text-slate-400">
          {industry.description}
        </p>

        {/* Solution Tags */}
        <div className="mt-8 flex flex-wrap gap-3">
          {industry.solutions.map((solution) => (
            <IndustryTag
              key={solution}
              label={solution}
            />
          ))}
        </div>

        {/* Footer */}
        <div className="mt-auto pt-8">
          <div
            className="
              inline-flex
              items-center
              gap-2
              text-sm
              font-medium
              text-cyan-300
              transition-all
              duration-300
              group-hover:gap-3
            "
          >
            Tailored Digital Solutions

            <ArrowUpRight
              className="
                h-4
                w-4
                transition-all
                duration-300
                group-hover:-translate-y-1
                group-hover:translate-x-1
              "
            />
          </div>
        </div>

      </div>

      {/* Bottom Accent */}
      <div
        className="
          absolute
          bottom-0
          left-0
          h-px
          w-full
          bg-gradient-to-r
          from-transparent
          via-cyan-400/40
          to-transparent
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />
    </motion.article>
  );
};

export default IndustryCard;