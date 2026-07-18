"use client";

import { motion } from "framer-motion";
import { CursorState } from "./useCursor";

interface CursorRingProps {
  cursor: CursorState;
}

const CursorRing = ({ cursor }: CursorRingProps) => {
  const { x, y, isVisible, isPointer, isPressed } = cursor;

  return (
    <motion.div
      className="
        fixed
        left-0
        top-0
        z-[9998]
        h-10
        w-10
        rounded-full
        border
        border-cyan-400/60
        pointer-events-none
      "
      animate={{
        x: x - 20,
        y: y - 20,

        opacity: isVisible ? 1 : 0,

        scale: isPressed
          ? 0.9
          : isPointer
          ? 1.5
          : 1,
      }}
      transition={{
        x: {
          duration: 0.18,
          ease: [0.22, 1, 0.36, 1],
        },
        y: {
          duration: 0.18,
          ease: [0.22, 1, 0.36, 1],
        },
        scale: {
          duration: 0.2,
        },
        opacity: {
          duration: 0.15,
        },
      }}
    />
  );
};

export default CursorRing;