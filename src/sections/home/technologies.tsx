"use client";

import { motion } from "framer-motion";

import FloatingBackground from "@/components/common/FloatingBackground";
import SectionHeader from "@/components/common/SectionHeader";

import TechnologyCard from "@/components/technologies/TechnologyCard";

import { technologyCategories } from "@/data/technologies";

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

const Technologies = () => {
  return (
    <section
      id="technologies"
      className="relative overflow-hidden bg-[#020617] py-24 lg:py-32"
    >
      {/* Background */}
      <FloatingBackground />

      {/* Gradient Orbs */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-violet-500/10 blur-[150px]" />

      <div className="container relative z-10 mx-auto px-6">

        <SectionHeader
          badge="Technology Ecosystem"
          title="Built with Modern"
          highlight="Technologies"
          description="We leverage a carefully selected technology stack to engineer secure, scalable, AI-ready digital products that deliver exceptional performance and long-term business value."
          note="Technology evolves rapidly. Our engineering culture is centered around continuous learning, innovation, and adopting modern tools that create meaningful impact."
        />

        {/* Technology Cards */}
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
          {technologyCategories.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
            //   className={
            //     category.title === "Artificial Intelligence"
            //       ? "xl:col-span-3"
            //       : ""
            //   }
            >
              <TechnologyCard category={category} />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
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
            delay: 0.25,
          }}
          className="mt-24"
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
              text-center
            "
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-violet-500/5" />

            <div className="relative z-10">

              <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Engineering Culture
              </span>

              <h3 className="mt-6 text-3xl font-bold text-white lg:text-4xl">
                Always Learning. Always Evolving.
              </h3>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
                Technology changes rapidly, and so do we. Our team continuously
                explores modern frameworks, cloud platforms, AI innovations,
                and engineering best practices to build future-ready digital
                products that stand the test of time.
              </p>

              <button
                className="
                  mt-10
                  rounded-full
                  border
                  border-cyan-500/30
                  bg-cyan-500/10
                  px-8
                  py-4
                  font-semibold
                  text-cyan-300
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-cyan-400
                  hover:bg-cyan-500/20
                  hover:shadow-xl
                  hover:shadow-cyan-500/20
                "
              >
                Explore Our Expertise
              </button>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Technologies;