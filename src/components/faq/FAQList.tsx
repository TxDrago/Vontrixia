"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { faqs } from "@/data/faq";
import FAQItem from "./FAQItem";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
    //   ease: "easeOut",
    },
  },
};

const FAQList = () => {
  const [openId, setOpenId] = useState<number | null>(1);

  const handleToggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      className="space-y-6"
    >
      {faqs.map((faq) => (
        <motion.div
          key={faq.id}
          variants={itemVariants}
        >
          <FAQItem
            faq={faq}
            isOpen={openId === faq.id}
            onToggle={() => handleToggle(faq.id)}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default FAQList;