"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface HoverScaleProps {
  children: ReactNode;
  className?: string;

  hoverScale?: number;
  tapScale?: number;

  duration?: number;
}

const HoverScale = ({
  children,
  className = "",

  hoverScale = 1.03,
  tapScale = 0.98,

  duration = 0.25,
}: HoverScaleProps) => {
  return (
    <motion.div
      className={className}
      whileHover={{
        scale: hoverScale,
      }}
      whileTap={{
        scale: tapScale,
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

export default HoverScale;