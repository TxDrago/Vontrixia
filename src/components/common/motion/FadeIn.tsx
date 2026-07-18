"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface FadeInProps {
  children: ReactNode;
  className?: string;

  delay?: number;
  duration?: number;

  once?: boolean;
  amount?: number;
}

const FadeIn = ({
  children,
  className = "",

  delay = 0,
  duration = 0.7,

  once = true,
  amount = 0.2,
}: FadeInProps) => {
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
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

export default FadeIn;