"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";

import { FAQ } from "@/data/faq";

interface FAQItemProps {
  faq: FAQ;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem = ({
  faq,
  isOpen,
  onToggle,
}: FAQItemProps) => {
  return (
    <motion.div
      layout
      transition={{
        layout: {
          duration: 0.35,
          ease: "easeInOut",
        },
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-cyan-400/30
        hover:bg-white/[0.05]
      "
    >
      {/* Glow */}
      <div
        className="
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
          bg-gradient-to-r
          from-cyan-500/[0.03]
          via-transparent
          to-violet-500/[0.03]
        "
      />

      <button
        onClick={onToggle}
        className="
          relative
          z-10
          flex
          w-full
          items-center
          justify-between
          gap-6
          p-8
          text-left
        "
      >
        <h3
          className="
            text-lg
            font-semibold
            text-white
            transition-colors
            duration-300
            group-hover:text-cyan-300
          "
        >
          {faq.question}
        </h3>

        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="
            flex
            h-12
            w-12
            shrink-0
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-white/[0.05]
          "
        >
          {isOpen ? (
            <Minus className="h-5 w-5 text-cyan-300" />
          ) : (
            <Plus className="h-5 w-5 text-slate-300" />
          )}
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.35,
              ease: "easeInOut",
            }}
            className="overflow-hidden"
          >
            <div className="px-8 pb-8">
              <div className="mb-6 h-px bg-gradient-to-r from-cyan-400/20 via-white/10 to-transparent" />

              <p
                className="
                  leading-8
                  text-slate-400
                "
              >
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FAQItem;