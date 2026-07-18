"use client";

import { motion } from "framer-motion";

import SectionHeader from "@/components/common/SectionHeader";
import FloatingBackground from "@/components/common/FloatingBackground";

import SolutionCard from "@/components/case-studies/SolutionCard";
import { featuredSolutions } from "@/data/featuredSolutions";

const CaseStudies = () => {
  return (
    <section
      id="featured-solutions"
      className="relative overflow-hidden bg-[#030712] py-24 lg:py-32"
    >
      {/* Background */}
      <FloatingBackground />

      {/* Gradient Orbs */}
      <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="absolute right-0 bottom-20 h-96 w-96 rounded-full bg-violet-500/10 blur-[140px]" />

      <div className="container relative z-10 mx-auto px-6">
        {/* Section Header */}
        <SectionHeader
          badge="Featured Solutions"
          title="Intelligent Products"
          highlight="We Can Build Together"
          description="Every business is unique, and so is every solution we create. These featured concepts showcase the kinds of scalable digital products, AI-powered platforms, cloud-native applications, and enterprise systems our engineering team is equipped to design, develop, and deliver."
          note="Transparency Matters. As a growing technology company, we don't showcase fictional client work. Instead, these solution concepts demonstrate our technical capabilities, architectural expertise, and the quality standards we bring to every project."
        />

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          className="mt-20 grid gap-8 lg:grid-cols-2"
        >
          {featuredSolutions.map((solution) => (
            <motion.div
              key={solution.id}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 50,
                },
                show: {
                  opacity: 1,
                  y: 0,
                },
              }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
            >
              <SolutionCard solution={solution} />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
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
              <h3 className="text-3xl font-bold text-white">
                Have an Idea Worth Building?
              </h3>

              <p className="mx-auto mt-4 max-w-2xl text-slate-400 leading-8">
                Whether you're launching a startup, modernizing enterprise
                software, or exploring AI-powered solutions, Vontrixia is ready
                to transform your vision into a scalable digital product.
              </p>

              <button
                className="
                  mt-8
                  rounded-full
                  border
                  border-cyan-500/30
                  bg-cyan-500/10
                  px-8
                  py-4
                  text-sm
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
                Let's Build Together
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
