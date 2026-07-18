"use client";

import { motion } from "framer-motion";

import FloatingBackground from "@/components/common/FloatingBackground";
import SectionHeader from "@/components/common/SectionHeader";

import FeatureCard from "@/components/Why Choose Vontrixia/FeatureCard";

import { whyChooseFeatures } from "@/data/whyChoose";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    //   ease: "easeOut",
    },
  },
};

const WhyChoose = () => {
  return (
    <section
      id="why-choose"
      className="relative overflow-hidden bg-[#030712] py-28 lg:py-36"
    >
      {/* Background */}
      <FloatingBackground />

      {/* Gradient Orbs */}
      <div className="absolute left-[-150px] top-0 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="absolute right-[-150px] bottom-0 h-[420px] w-[420px] rounded-full bg-violet-500/10 blur-[180px]" />

      <div className="container relative z-10 mx-auto max-w-7xl px-6">

        {/* Section Header */}
        <SectionHeader
          badge="Why Choose Vontrixia"
          title="Engineering Excellence That Drives"
          highlight="Business Growth"
          description="We combine strategic thinking, AI-powered innovation, and enterprise engineering to build secure, scalable, and future-ready digital products."
          note="Every solution is designed with transparency, performance, security, and long-term maintainability at its core."
        />

        {/* Decorative Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto mt-14 h-px w-40 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"
        />

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3"
        >
          {whyChooseFeatures.map((feature) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
            >
              <FeatureCard feature={feature} />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="mt-28"
        >
          <div
            className="
              relative
              overflow-hidden
              rounded-[32px]
              border
              border-white/10
              bg-white/[0.03]
              px-8
              py-14
              backdrop-blur-2xl
            "
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-violet-500/5" />

            <div className="absolute left-1/2 top-0 h-56 w-56 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

            <div className="relative z-10 flex flex-col items-center text-center">

              <span
                className="
                  rounded-full
                  border
                  border-cyan-500/20
                  bg-cyan-500/10
                  px-5
                  py-2
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-cyan-300
                "
              >
                Our Commitment
              </span>

              <h3 className="mt-8 text-3xl font-bold text-white md:text-4xl">
                Your Technology Partner for the Long Run
              </h3>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
                We don't believe in simply delivering software and walking away.
                We build long-term partnerships by continuously improving,
                optimizing, and scaling digital products as your business grows.
              </p>

              <button
                className="
                  mt-10
                  rounded-full
                  border
                  border-cyan-500/30
                  bg-gradient-to-r
                  from-cyan-500/10
                  to-blue-500/10
                  px-8
                  py-4
                  font-semibold
                  text-cyan-300
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-cyan-400
                  hover:shadow-2xl
                  hover:shadow-cyan-500/20
                "
              >
                Let's Build Something Extraordinary
              </button>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default WhyChoose;