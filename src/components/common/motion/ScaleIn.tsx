"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface ScaleInProps {
  children: ReactNode;
  className?: string;

  delay?: number;
  duration?: number;

  scale?: number;

  once?: boolean;
  amount?: number;
}

const ScaleIn = ({
  children,
  className = "",

  delay = 0,
  duration = 0.7,

  scale = 0.95,

  once = true,
  amount = 0.2,
}: ScaleInProps) => {
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        scale,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
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

export default ScaleIn;