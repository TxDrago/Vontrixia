"use client";

import { motion } from "framer-motion";

const FloatingBackground = () => {
  return (
    <>
      {/* Top Left */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -left-32
          top-10
          h-72
          w-72
          rounded-full
          bg-cyan-500/10
          blur-[120px]
        "
      />

      {/* Bottom Right */}
      <motion.div
        animate={{
          y: [0, 25, 0],
          x: [0, -25, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -right-32
          bottom-10
          h-96
          w-96
          rounded-full
          bg-violet-500/10
          blur-[150px]
        "
      />

      {/* Center */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-1/2
          h-64
          w-64
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-400/5
          blur-[120px]
        "
      />
    </>
  );
};

export default FloatingBackground;