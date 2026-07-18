"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import FloatingBackground from "@/components/common/FloatingBackground";
import SectionHeader from "@/components/common/SectionHeader";

import FAQList from "@/components/faq/FAQList";
import { faqContent } from "@/data/faq";

const FAQSection = () => {
  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#030712] py-24 lg:py-32"
    >
      {/* Background */}
      <FloatingBackground />

      {/* Ambient Glow */}
      <div className="absolute left-0 top-24 h-96 w-96 rounded-full bg-cyan-500/10 blur-[160px]" />

      <div className="absolute right-0 bottom-20 h-[34rem] w-[34rem] rounded-full bg-violet-500/10 blur-[180px]" />

      <div className="container relative z-10 mx-auto px-6">

        {/* Section Header */}
        <SectionHeader
          badge={faqContent.badge}
          title="Questions Before"
          highlight="We Build Together"
          description={faqContent.description}
        />

        {/* FAQ */}
        <div className="mx-auto mt-20 max-w-5xl">
          <FAQList />
        </div>

        {/* Bottom Card */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="mx-auto mt-20 max-w-5xl"
        >
          <div
            className="
              group
              relative
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-white/[0.03]
              p-10
              backdrop-blur-xl
              transition-all
              duration-500
              hover:border-cyan-400/30
              hover:bg-white/[0.05]
            "
          >
            {/* Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-violet-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative z-10">

              <h3 className="text-2xl font-bold text-white">
                {faqContent.footerTitle}
              </h3>

              <p className="mt-4 max-w-2xl leading-8 text-slate-400">
                {faqContent.footerDescription}
              </p>

              <button
                className="
                  mt-8
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-cyan-500/20
                  bg-cyan-500/10
                  px-6
                  py-3
                  font-medium
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
                {faqContent.footerCTA}

                <ArrowRight
                  className="
                    h-5
                    w-5
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </button>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default FAQSection;