"use client";

import { ReactNode } from "react";
import { motion, TargetAndTransition } from "framer-motion";

interface RevealProps {
  children: ReactNode;
  className?: string;

  initial?: TargetAndTransition;
  animate?: TargetAndTransition;

  delay?: number;
  duration?: number;

  once?: boolean;
  amount?: number;
}

const Reveal = ({
  children,
  className = "",

  initial = {
    opacity: 0,
  },

  animate = {
    opacity: 1,
  },

  delay = 0,
  duration = 0.7,

  once = true,
  amount = 0.2,
}: RevealProps) => {
  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={animate}
      viewport={{
        once,
        amount,
      }}
      transition={{
        delay,
        duration,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;