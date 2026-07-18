"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { SocialLink } from "@/data/footer";

interface SocialButtonProps {
  social: SocialLink;
}

const SocialButton = ({ social }: SocialButtonProps) => {
  const Icon = social.icon;

  return (
    <motion.div
      whileHover={{
        y: -4,
      }}
      whileTap={{
        scale: 0.96,
      }}
      transition={{
        duration: 0.2,
      }}
    >
      <Link
        href={social.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={social.label}
        className="
          group
          relative
          flex
          h-14
          w-14
          items-center
          justify-center
          overflow-hidden
          rounded-2xl
          border
          border-white/10
          bg-white/[0.04]
          backdrop-blur-xl
          transition-all
          duration-300
          hover:border-cyan-400/30
          hover:bg-white/[0.08]
          hover:shadow-xl
          hover:shadow-cyan-500/15
        "
      >
        {/* Glow */}
        <span
          className="
            absolute
            inset-0
            rounded-2xl
            bg-gradient-to-br
            from-cyan-500/10
            to-violet-500/10
            opacity-0
            transition-opacity
            duration-300
            group-hover:opacity-100
          "
        />

        {/* Icon */}
        <Icon
          className="
            relative
            z-10
            h-5
            w-5
            text-slate-300
            transition-all
            duration-300
            group-hover:scale-110
            group-hover:text-cyan-300
          "
        />

        {/* Arrow */}
        <ArrowUpRight
          className="
            absolute
            right-2
            top-2
            h-3
            w-3
            text-cyan-300
            opacity-0
            transition-all
            duration-300
            group-hover:translate-x-0.5
            group-hover:-translate-y-0.5
            group-hover:opacity-100
          "
        />
      </Link>
    </motion.div>
  );
};

export default SocialButton;