"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeUpProps {
  children: ReactNode;
  className?: string;

  delay?: number;
  duration?: number;

  distance?: number;

  once?: boolean;
  amount?: number;
}

const FadeUp = ({
  children,
  className = "",

  delay = 0,
  duration = 0.7,

  distance = 40,

  once = true,
  amount = 0.2,
}: FadeUpProps) => {
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y: distance,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
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

export default FadeUp;