"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface HoverLiftProps {
  children: ReactNode;
  className?: string;

  lift?: number;
  scale?: number;

  duration?: number;
}

const HoverLift = ({
  children,
  className = "",

  lift = -8,
  scale = 1.01,

  duration = 0.3,
}: HoverLiftProps) => {
  return (
    <motion.div
      className={className}
      whileHover={{
        y: lift,
        scale,
      }}
      transition={{
        duration,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

export default HoverLift;