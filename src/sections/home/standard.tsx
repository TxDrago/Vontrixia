"use client";

import { motion } from "framer-motion";

import FloatingBackground from "@/components/common/FloatingBackground";
import SectionHeader from "@/components/common/SectionHeader";

import StandardGrid from "@/components/standard/StandardGrid";

const Standard = () => {
  return (
    <section
      id="vontrixia-standard"
      className="relative overflow-hidden bg-[#030712] py-24 lg:py-32"
    >
      {/* Background */}
      {/* <FloatingBackground /> */}

      {/* Ambient Glow */}
      <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="absolute right-0 bottom-20 h-[32rem] w-[32rem] rounded-full bg-violet-500/10 blur-[170px]" />

      <div className="container relative z-10 mx-auto px-6">

        {/* Section Header */}
        <SectionHeader
          badge="The Vontrixia Standard"
          title="Our Commitment,"
          highlight="Built Into Every Solution"
          description="Every project we undertake follows a consistent set of engineering standards, quality principles, and delivery commitments. These aren't optional extras—they're the foundation of how we build secure, scalable, and future-ready software."
          note="We believe exceptional software is created through disciplined engineering, transparent collaboration, and long-term thinking. These principles define every solution we deliver."
        />

        {/* Engineering Standards */}
        <div className="mt-20">
          <StandardGrid />
        </div>

        {/* Closing Manifesto */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
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
            {/* Soft Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-violet-500/5" />

            <div className="relative z-10 max-w-4xl">

              <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Engineering Philosophy
              </span>

              <blockquote className="mt-8 text-3xl font-bold leading-relaxed text-white lg:text-4xl">
                "Great software isn't defined by features alone. It's defined by
                the engineering discipline, attention to detail, and long-term
                thinking behind every decision we make."
              </blockquote>

              <div className="mt-8 h-px w-32 bg-gradient-to-r from-cyan-400 to-transparent" />

              <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400">
                At Vontrixia, our mission is to build digital products that are
                reliable today, adaptable tomorrow, and valuable for years to
                come. Every line of code reflects our commitment to quality,
                innovation, and lasting partnerships.
              </p>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Standard;