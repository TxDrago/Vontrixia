"use client";

import { motion } from "framer-motion";

import AuroraBackground from "@/components/cta/AuroraBackground";
import CTAButton from "@/components/cta/CTAButton";
import TrustIndicators from "@/components/cta/TrustIndicators";

import { ctaContent } from "@/data/cta";

const CTASection = () => {
  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-[#030712] py-24 lg:py-32"
    >
      {/* Aurora */}
      <AuroraBackground />

      <div className="container relative z-10 mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="
            relative
            overflow-hidden
            rounded-[40px]
            border
            border-white/10
            bg-white/[0.04]
            backdrop-blur-2xl
          "
        >
          {/* Glass Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-cyan-500/[0.04]" />

          {/* Decorative Glow */}
          <div className="absolute -left-40 top-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />

          <div className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-violet-500/10 blur-[160px]" />

          <div className="relative z-10 px-8 py-16 lg:px-16 lg:py-24">

            {/* Badge */}
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="
                inline-flex
                rounded-full
                border
                border-cyan-400/20
                bg-cyan-500/10
                px-5
                py-2
                text-xs
                font-semibold
                uppercase
                tracking-[0.2em]
                text-cyan-300
              "
            >
              {ctaContent.badge}
            </motion.span>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="
                mt-8
                whitespace-pre-line
                text-5xl
                font-black
                leading-tight
                tracking-tight
                text-white
                md:text-6xl
                lg:text-7xl
              "
            >
              {ctaContent.title}
            </motion.h2>

            {/* Highlight */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="
                mt-5
                text-2xl
                font-semibold
                text-cyan-300
                md:text-3xl
              "
            >
              {ctaContent.highlight}
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="
                mt-8
                max-w-4xl
                text-lg
                leading-9
                text-slate-400
              "
            >
              {ctaContent.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="
                mt-12
                flex
                flex-col
                gap-5
                sm:flex-row
              "
            >
              <CTAButton>
                {ctaContent.primaryButton}
              </CTAButton>

              <CTAButton variant="secondary">
                {ctaContent.secondaryButton}
              </CTAButton>
            </motion.div>

            {/* Divider */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="
                my-14
                h-px
                w-full
                bg-gradient-to-r
                from-transparent
                via-white/10
                to-transparent
              "
            />

            {/* Trust Indicators */}
            <TrustIndicators />

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default CTASection;