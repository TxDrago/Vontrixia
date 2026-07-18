import { Variants } from "framer-motion";

/* -------------------------------------------------------------------------- */
/*                                  Viewport                                  */
/* -------------------------------------------------------------------------- */

export const viewport = {
  once: true,
  amount: 0.2,
};

/* -------------------------------------------------------------------------- */
/*                                Transitions                                 */
/* -------------------------------------------------------------------------- */

export const transitions = {
  fast: {
    duration: 0.25,
    ease: "easeOut" as const,
  },

  normal: {
    duration: 0.45,
    ease: "easeOut" as const,
  },

  slow: {
    duration: 0.7,
    ease: "easeOut" as const,
  },

  slower: {
    duration: 1,
    ease: "easeOut" as const,
  },

  spring: {
    type: "spring" as const,
    stiffness: 120,
    damping: 18,
  },
};

/* -------------------------------------------------------------------------- */
/*                            Entrance Animations                             */
/* -------------------------------------------------------------------------- */

export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.slow,
  },
};

export const fadeDown: Variants = {
  hidden: {
    opacity: 0,
    y: -40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.slow,
  },
};

export const fadeLeft: Variants = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: transitions.slow,
  },
};

export const fadeRight: Variants = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: transitions.slow,
  },
};

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.92,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: transitions.normal,
  },
};

/* -------------------------------------------------------------------------- */
/*                             Stagger Containers                             */
/* -------------------------------------------------------------------------- */

export const staggerContainer: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export const staggerFast: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export const staggerSlow: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

/* -------------------------------------------------------------------------- */
/*                               Hover Effects                                */
/* -------------------------------------------------------------------------- */

export const cardHover = {
  whileHover: {
    y: -8,
    scale: 1.015,
    transition: transitions.fast,
  },
};

export const buttonHover = {
  whileHover: {
    scale: 1.04,
    y: -2,
    transition: transitions.fast,
  },

  whileTap: {
    scale: 0.97,
  },
};

export const iconHover = {
  whileHover: {
    rotate: 8,
    scale: 1.12,
    transition: transitions.fast,
  },
};

/* -------------------------------------------------------------------------- */
/*                           Infinite Animations                              */
/* -------------------------------------------------------------------------- */

export const floating = {
  animate: {
    y: [0, -10, 0],
  },

  transition: {
    duration: 5,
    repeat: Infinity,
    repeatType: "loop" as const,
    ease: "easeInOut" as const,
  },
};

export const floatingSlow = {
  animate: {
    y: [0, -16, 0],
  },

  transition: {
    duration: 8,
    repeat: Infinity,
    repeatType: "loop" as const,
    ease: "easeInOut" as const,
  },
};

export const glowPulse = {
  animate: {
    opacity: [0.4, 0.8, 0.4],
    scale: [1, 1.08, 1],
  },

  transition: {
    duration: 4,
    repeat: Infinity,
    repeatType: "loop" as const,
    ease: "easeInOut" as const,
  },
};

export const rotateSlow = {
  animate: {
    rotate: 360,
  },

  transition: {
    duration: 40,
    repeat: Infinity,
    repeatType: "loop" as const,
    ease: "linear" as const,
  },
};

/* -------------------------------------------------------------------------- */
/*                            Default Motion Props                            */
/* -------------------------------------------------------------------------- */

export const defaultMotionProps = {
  initial: "hidden",
  whileInView: "visible",
  viewport,
};