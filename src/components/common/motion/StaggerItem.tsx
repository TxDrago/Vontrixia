"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

type Direction =
  | "up"
  | "left"
  | "right"
  | "scale"
  | "none";

interface StaggerItemProps {
  children: ReactNode;
  className?: string;

  direction?: Direction;

  distance?: number;

  duration?: number;
}

const StaggerItem = ({
  children,
  className = "",

  direction = "up",

  distance = 40,

  duration = 0.7,
}: StaggerItemProps) => {
  const hiddenVariants = {
    up: {
      opacity: 0,
      y: distance,
    },

    left: {
      opacity: 0,
      x: -distance,
    },

    right: {
      opacity: 0,
      x: distance,
    },

    scale: {
      opacity: 0,
      scale: 0.95,
    },

    none: {
      opacity: 0,
    },
  };

  const showVariants = {
    up: {
      opacity: 1,
      y: 0,
    },

    left: {
      opacity: 1,
      x: 0,
    },

    right: {
      opacity: 1,
      x: 0,
    },

    scale: {
      opacity: 1,
      scale: 1,
    },

    none: {
      opacity: 1,
    },
  };

  return (
    <motion.div
      className={className}
      variants={{
        hidden: hiddenVariants[direction],
        show: showVariants[direction],
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

export default StaggerItem;