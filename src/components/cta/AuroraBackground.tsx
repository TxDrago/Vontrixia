"use client";

import { motion } from "framer-motion";

const AuroraBackground = () => {
  return (
    <>
      {/* Main Aurora */}
      <motion.div
        animate={{
          x: [0, 80, -60, 0],
          y: [0, -40, 20, 0],
          rotate: [0, 8, -6, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[-10%]
          top-[-15%]
          h-[38rem]
          w-[38rem]
          rounded-full
          bg-cyan-500/15
          blur-[180px]
        "
      />

      {/* Secondary Aurora */}
      <motion.div
        animate={{
          x: [0, -100, 70, 0],
          y: [0, 30, -30, 0],
          rotate: [0, -10, 6, 0],
          scale: [1, 0.9, 1.12, 1],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[-12%]
          bottom-[-20%]
          h-[42rem]
          w-[42rem]
          rounded-full
          bg-violet-500/15
          blur-[200px]
        "
      />

      {/* Center Glow */}
      <motion.div
        animate={{
          opacity: [0.25, 0.45, 0.25],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-1/2
          h-[28rem]
          w-[28rem]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-gradient-to-r
          from-cyan-500/10
          via-sky-400/10
          to-violet-500/10
          blur-[140px]
        "
      />

      {/* Floating Light 1 */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          opacity: [0.25, 0.5, 0.25],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[18%]
          top-[22%]
          h-56
          w-56
          rounded-full
          bg-cyan-400/10
          blur-[100px]
        "
      />

      {/* Floating Light 2 */}
      <motion.div
        animate={{
          y: [0, 35, 0],
          opacity: [0.2, 0.45, 0.2],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[18%]
          bottom-[18%]
          h-60
          w-60
          rounded-full
          bg-fuchsia-500/10
          blur-[120px]
        "
      />

      {/* Top Highlight */}
      <div
        className="
          absolute
          inset-x-0
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-cyan-400/30
          to-transparent
        "
      />

      {/* Bottom Highlight */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-violet-400/30
          to-transparent
        "
      />
    </>
  );
};

export default AuroraBackground;