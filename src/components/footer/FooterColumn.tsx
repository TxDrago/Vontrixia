"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { FooterColumn as FooterColumnType } from "@/data/footer";

interface FooterColumnProps {
  column: FooterColumnType;
}

const FooterColumn = ({ column }: FooterColumnProps) => {
  const Icon = column.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
      }}
      className="space-y-6"
    >
      {/* Heading */}
      <div className="flex items-center gap-3">
        <div
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            border
            border-white/10
            bg-white/[0.04]
            backdrop-blur-xl
          "
        >
          <Icon className="h-5 w-5 text-cyan-300" />
        </div>

        <h3
          className="
            text-lg
            font-semibold
            tracking-wide
            text-white
          "
        >
          {column.title}
        </h3>
      </div>

      {/* Links */}
      <ul className="space-y-4">
        {column.links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="
                group
                inline-flex
                items-center
                gap-2
                text-slate-400
                transition-all
                duration-300
                hover:text-cyan-300
              "
            >
              <span
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                {link.label}
              </span>

              <ArrowUpRight
                className="
                  h-4
                  w-4
                  opacity-0
                  transition-all
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                  group-hover:opacity-100
                "
              />
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default FooterColumn;