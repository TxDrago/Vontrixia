"use client";

import { motion } from "framer-motion";

import { EngineeringStandard } from "@/data/standards";

import StandardBadge from "./StandardBadge";

interface StandardCardProps {
  standard: EngineeringStandard;
}

const StandardCard = ({ standard }: StandardCardProps) => {
  const Icon = standard.icon;

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35 }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        p-8
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
          ${standard.gradient}
          opacity-40
          transition-all
          duration-500
          group-hover:opacity-70
        `}
      />

      {/* Glow */}
      <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-white/5 blur-3xl transition-all duration-500 group-hover:scale-125" />

      {/* Border Glow */}
      <div className="absolute inset-0 rounded-3xl ring-1 ring-white/5 transition-all duration-500 group-hover:ring-cyan-400/20" />

      {/* Content */}
      <div className="relative z-10">

        {/* Number */}
        <span
          className="
            text-5xl
            font-black
            tracking-tight
            text-white/10
            transition-all
            duration-500
            group-hover:text-white/20
          "
        >
          {standard.number}
        </span>

        {/* Icon */}
        <div
          className="
            mt-6
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
            group-hover:-translate-y-1
            group-hover:rotate-6
            group-hover:scale-105
            group-hover:border-cyan-400/20
          "
        >
          <Icon
            className={`h-8 w-8 ${standard.accent}`}
          />
        </div>

        {/* Title */}
        <h3
          className="
            mt-8
            text-2xl
            font-bold
            text-white
            transition-colors
            duration-300
            group-hover:text-cyan-300
          "
        >
          {standard.title}
        </h3>

        {/* Description */}
        <p
          className="
            mt-5
            leading-8
            text-slate-400
          "
        >
          {standard.description}
        </p>

        {/* Badge */}
        <div className="mt-8">
          <StandardBadge
            label={standard.badge}
          />
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

export default StandardCard;