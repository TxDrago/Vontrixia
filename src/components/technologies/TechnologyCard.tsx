"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { TechnologyCategory } from "@/data/technologies";

import CategoryIcon from "./CategoryIcon";
import TechnologyChip from "./TechnologyChip";

interface TechnologyCardProps {
  category: TechnologyCategory;
}

const TechnologyCard = ({ category }: TechnologyCardProps) => {
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
      {/* Animated Gradient */}
      <div
        className={`
          absolute
          inset-0
          bg-gradient-to-br
          ${category.gradient}
          opacity-60
          transition-all
          duration-500
          group-hover:opacity-100
        `}
      />

      {/* Glow */}
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/5 blur-3xl transition-all duration-500 group-hover:scale-125" />

      {/* Border Glow */}
      <div className="absolute inset-0 rounded-3xl ring-1 ring-white/5 transition-all duration-500 group-hover:ring-cyan-400/20" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col p-8">

        {/* Header */}
        <div className="flex items-start justify-between gap-6">

          <CategoryIcon
            icon={category.icon}
            accent={category.accent}
            gradient={category.gradient}
          />

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

        {/* Title */}
        <h3 className="mt-8 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-300">
          {category.title}
        </h3>

        {/* Subtitle */}
        <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
          {category.subtitle}
        </p>

        {/* Description */}
        <p className="mt-5 leading-8 text-slate-400">
          {category.description}
        </p>

        {/* Technology Chips */}
        <div className="mt-8 flex flex-wrap gap-3">
          {category.technologies.map((tech) => (
            <TechnologyChip
              key={tech}
              label={tech}
              accent={category.accent}
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
            Engineering Excellence

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

      {/* Bottom Accent Line */}
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

export default TechnologyCard;