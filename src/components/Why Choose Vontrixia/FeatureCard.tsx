"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import clsx from "clsx";

import { WhyChooseFeature } from "@/data/whyChoose";

import FeatureIcon from "./FeatureIcon";
import FeatureNumber from "./FeatureNumber";

interface FeatureCardProps {
  feature: WhyChooseFeature;
}

const FeatureCard = ({ feature }: FeatureCardProps) => {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.35 }}
      className={clsx(
        "group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-500 hover:shadow-2xl",
        feature.styles.border,
        feature.styles.glow,
        feature.styles.bg
      )}
    >
      {/* Animated Background Gradient */}
      <div
        className={clsx(
          "absolute inset-0 bg-gradient-to-br opacity-60 transition-all duration-500 group-hover:opacity-100",
          feature.styles.gradient
        )}
      />

      {/* Decorative Glow */}
      <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-white/5 blur-3xl transition-all duration-700 group-hover:scale-125" />

      {/* Ring */}
      <div className="absolute inset-0 rounded-3xl ring-1 ring-white/5 transition-all duration-500 group-hover:ring-white/10" />

      {/* Background Number */}
      <FeatureNumber number={feature.number} />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col p-8">

        <FeatureIcon
          icon={feature.icon}
          accent={feature.styles.icon}
          gradient={feature.styles.gradient}
        />

        {/* Title */}
        <h3
          className={clsx(
            "mt-8 text-2xl font-bold text-white transition-colors duration-300",
            feature.styles.icon.replace("400", "300")
          )}
        >
          {feature.title}
        </h3>

        {/* Description */}
        <p className="mt-5 leading-8 text-slate-400">
          {feature.description}
        </p>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Footer */}
        <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6">

          <span
            className={clsx(
              "text-sm font-semibold transition-colors duration-300",
              feature.styles.icon
            )}
          >
            Discover More
          </span>

          <div
            className={clsx(
              "flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1",
              feature.styles.bg
            )}
          >
            <ArrowUpRight
              className={clsx(
                "h-5 w-5 transition-transform duration-300",
                feature.styles.icon
              )}
            />
          </div>

        </div>

      </div>

      {/* Bottom Accent Line */}
      <div
        className={clsx(
          "absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100",
          feature.styles.gradient,
          "to-transparent"
        )}
      />
    </motion.article>
  );
};

export default FeatureCard;