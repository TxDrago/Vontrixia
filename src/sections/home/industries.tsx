"use client";

import { motion } from "framer-motion";

import FloatingBackground from "@/components/common/FloatingBackground";
import SectionHeader from "@/components/common/SectionHeader";

import IndustryGrid from "@/components/industries/IndustryGrid";

const Industries = () => {
  return (
    <section
      id="solutions-across-industries"
      className="relative overflow-hidden bg-[#030712] py-24 lg:py-32"
    >
      {/* Background */}
      <FloatingBackground />

      {/* Ambient Glow */}
      <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[160px]" />

      <div className="absolute right-0 bottom-10 h-[34rem] w-[34rem] rounded-full bg-violet-500/10 blur-[180px]" />

      <div className="container relative z-10 mx-auto px-6">

        {/* Header */}
        <SectionHeader
          badge="Industry Expertise"
          title="Solutions Across"
          highlight="Industries"
          description="Every industry operates differently. We design secure, scalable, and AI-ready software tailored to unique business workflows, operational challenges, and growth opportunities."
          note="The examples below demonstrate the types of industry-focused digital solutions our engineering team is capable of designing and developing. They represent our expertise—not existing client engagements."
        />

        {/* Industry Cards */}
        <div className="mt-20">
          <IndustryGrid />
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="mt-28"
        >
          <div
            className="
              relative
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-white/[0.03]
              p-10
              backdrop-blur-xl
            "
          >
            {/* Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-violet-500/5" />

            <div className="relative z-10 max-w-4xl">

              <span
                className="
                  inline-flex
                  rounded-full
                  border
                  border-cyan-500/20
                  bg-cyan-500/10
                  px-4
                  py-2
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-cyan-300
                "
              >
                Beyond Industries
              </span>

              <h3 className="mt-8 text-3xl font-bold leading-tight text-white lg:text-4xl">
                Every business has unique challenges.
                <br />
                Every great solution starts with understanding them.
              </h3>

              <div className="mt-8 h-px w-32 bg-gradient-to-r from-cyan-400 to-transparent" />

              <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400">
                Whether you're building a startup, modernizing enterprise
                operations, or exploring AI-powered innovation, our approach
                begins with your business goals—not generic software templates.
                We engineer technology that adapts to your industry, your
                processes, and your long-term vision.
              </p>

              <div className="mt-10 inline-flex items-center gap-3 text-cyan-300 font-medium">
                <span>Need a solution tailored to your industry?</span>

                <motion.span
                  animate={{ x: [0, 6, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                  }}
                >
                  →
                </motion.span>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Industries;