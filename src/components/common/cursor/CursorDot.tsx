"use client";

import { motion } from "framer-motion";
import { CursorState } from "./useCursor";

interface CursorDotProps {
  cursor: CursorState;
}

const CursorDot = ({ cursor }: CursorDotProps) => {
  const { x, y, isVisible, isPressed } = cursor;

  return (
    <motion.div
      className="
        fixed
        left-0
        top-0
        z-[9999]
        h-2
        w-2
        rounded-full
        bg-cyan-400
        pointer-events-none
      "
      animate={{
        x: x - 4,
        y: y - 4,
        opacity: isVisible ? 1 : 0,
        scale: isPressed ? 0.8 : 1,
      }}
      transition={{
        duration: 0.08,
        ease: "linear",
      }}
    />
  );
};

export default CursorDot;