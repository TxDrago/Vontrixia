"use client";

import { motion } from "framer-motion";

import { engineeringStandards } from "@/data/standards";

import StandardCard from "./StandardCard";

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

const groups = [
  {
    title: "Foundation",
    subtitle:
      "The engineering principles that form the backbone of every reliable digital product.",
    ids: [1, 2, 4],
  },
  {
    title: "Delivery Excellence",
    subtitle:
      "Everything required to deliver production-ready software with confidence.",
    ids: [3, 6, 7, 8],
  },
  {
    title: "Long-Term Success",
    subtitle:
      "Our commitment extends beyond launch with quality, innovation, and partnership.",
    ids: [5, 9, 10],
  },
];

const StandardGrid = () => {
  return (
    <div className="space-y-24">
      {groups.map((group) => {
        const items = engineeringStandards.filter((item) =>
          group.ids.includes(item.id)
        );

        return (
          <section key={group.title}>
            {/* Section Heading */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
              }}
              className="mb-12"
            >
              <span
                className="
                  inline-flex
                  rounded-full
                  border
                  border-cyan-500/20
                  bg-cyan-500/10
                  px-4
                  py-2
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-cyan-300
                "
              >
                Engineering Pillar
              </span>

              <h3 className="mt-6 text-3xl font-bold text-white">
                {group.title}
              </h3>

              <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-400">
                {group.subtitle}
              </p>
            </motion.div>

            {/* Cards */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
            >
              {items.map((standard) => (
                <motion.div
                  key={standard.id}
                  variants={itemVariants}
                  className={
                    items.length === 4 && standard.id === 8
                      ? "md:col-span-2 xl:col-span-3"
                      : ""
                  }
                >
                  <StandardCard standard={standard} />
                </motion.div>
              ))}
            </motion.div>
          </section>
        );
      })}
    </div>
  );
};

export default StandardGrid;