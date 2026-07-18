"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;

  stagger?: number;
  delayChildren?: number;

  once?: boolean;
  amount?: number;
}

const StaggerContainer = ({
  children,
  className = "",

  stagger = 0.12,
  delayChildren = 0,

  once = true,
  amount = 0.15,
}: StaggerContainerProps) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{
        once,
        amount,
      }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: stagger,
            delayChildren,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default StaggerContainer;