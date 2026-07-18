"use client";

import { motion } from "framer-motion";

import { trustPillars } from "@/data/cta";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    //   ease: "easeOut",
    },
  },
};

const TrustIndicators = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      className="grid gap-5 md:grid-cols-2 xl:grid-cols-5"
    >
      {trustPillars.map((pillar) => {
        const Icon = pillar.icon;

        return (
          <motion.article
            key={pillar.id}
            variants={itemVariants}
            whileHover={{ y: -6 }}
            className="
              group
              relative
              overflow-hidden
              rounded-2xl
              border
              border-white/10
              bg-white/[0.03]
              p-6
              backdrop-blur-xl
              transition-all
              duration-300
              hover:border-cyan-400/30
              hover:bg-white/[0.05]
              hover:shadow-xl
              hover:shadow-cyan-500/10
            "
          >
            {/* Glow */}
            <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-cyan-500/10 blur-3xl transition-all duration-500 group-hover:scale-125" />

            <div className="relative z-10">

              {/* Icon */}
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.05]
                  transition-all
                  duration-300
                  group-hover:rotate-6
                  group-hover:scale-110
                  group-hover:border-cyan-400/30
                "
              >
                <Icon className="h-6 w-6 text-cyan-400" />
              </div>

              {/* Title */}
              <h4 className="mt-5 text-base font-semibold text-white">
                {pillar.title}
              </h4>

              {/* Description */}
              <p className="mt-3 text-sm leading-7 text-slate-400">
                {pillar.description}
              </p>

            </div>
          </motion.article>
        );
      })}
    </motion.div>
  );
};

export default TrustIndicators;