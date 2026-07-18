"use client";

import { motion } from "framer-motion";
import React from "react";
import { ArrowUpRight } from "lucide-react";

import {
  FeaturedSolution,
} from "../../data/featuredSolutions";

import StatusChip from "./StatusChip";
import TechBadge from "./TechBadge";

interface SolutionCardProps {
  solution: FeaturedSolution;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ solution }) => {
  const Icon = solution.icon;

  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.35 }}
      className={`
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
        hover:border-cyan-400/30
        hover:shadow-2xl
        hover:shadow-cyan-500/10
        ${
          solution.featured
            ? "lg:col-span-2 min-h-[420px]"
            : "min-h-[380px]"
        }
      `}
    >
      {/* Animated Gradient */}
      <div
        className={`
          absolute
          inset-0
          bg-gradient-to-br
          ${solution.gradient}
          opacity-60
          transition-opacity
          duration-500
          group-hover:opacity-100
        `}
      />

      {/* Glow */}
      <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl transition-all duration-500 group-hover:bg-cyan-500/20" />

      {/* Border Glow */}
      <div className="absolute inset-0 rounded-3xl ring-1 ring-white/5 group-hover:ring-cyan-400/20 transition-all duration-500" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col p-8">

        {/* Header */}
        <div className="flex items-start justify-between gap-4">

          <div className="space-y-4">

            {/* Icon */}
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:border-cyan-400/30">
              <Icon className="h-7 w-7 text-cyan-300" />
            </div>

            {/* Category */}
            <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-slate-400 backdrop-blur-md">
              {solution.category}
            </span>
          </div>

          <StatusChip status={solution.status} />
        </div>

        {/* Title */}
        <h3 className="mt-8 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-300">
          {solution.title}
        </h3>

        {/* Description */}
        <p className="mt-4 leading-7 text-slate-400">
          {solution.description}
        </p>

        {/* Tech Stack */}
        <div className="mt-8 flex flex-wrap gap-2">
          {solution.technologies.map((tech) => (
            <TechBadge
              key={tech}
              tech={tech}
            />
          ))}
        </div>

        {/* Footer */}
        <div className="mt-auto pt-10">

          <button
            className="
              inline-flex
              items-center
              gap-2
              font-medium
              text-cyan-300
              transition-all
              duration-300
              group-hover:gap-3
            "
          >
            Explore Solution

            <ArrowUpRight
              className="
                h-5
                w-5
                transition-transform
                duration-300
                group-hover:translate-x-1
                group-hover:-translate-y-1
              "
            />
          </button>

        </div>
      </div>
    </motion.article>
  );
};

export default SolutionCard;