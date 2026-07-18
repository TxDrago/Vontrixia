"use client";

import { motion } from "framer-motion";

import { industries } from "@/data/industries";
import IndustryCard from "./IndustryCard";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    //   ease: "easeOut",
    },
  },
};

const IndustryGrid = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      className="
        grid
        gap-8
        md:grid-cols-2
        xl:grid-cols-3
      "
    >
      {industries.map((industry) => (
        <motion.div
          key={industry.id}
          variants={itemVariants}
          className={
            industry.featured
              ? "md:col-span-2 xl:col-span-2"
              : ""
          }
        >
          <IndustryCard industry={industry} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default IndustryGrid;
