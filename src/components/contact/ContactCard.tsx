"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { HoverLift } from "@/components/common/motion";
import { ContactItem } from "@/data/contact";

interface ContactCardProps {
  item: ContactItem;
}

const ContactCard = ({ item }: ContactCardProps) => {
  const Icon = item.icon;

  return (
    <HoverLift>
      <Link
        href={item.href}
        className="
          group
          relative
          flex
          h-full
          flex-col
          overflow-hidden
          rounded-3xl
          border
          border-white/10
          bg-white/5
          p-7
          backdrop-blur-xl
          transition-all
          duration-300
          hover:border-cyan-400/40
          hover:bg-white/[0.08]
        "
      >
        {/* Glow Effect */}
        <div
          className="
            absolute
            inset-0
            opacity-0
            transition-opacity
            duration-500
            group-hover:opacity-100
            bg-gradient-to-br
            from-cyan-500/10
            via-transparent
            to-violet-500/10
          "
        />

        {/* Icon */}
        <div
          className="
            relative
            z-10
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            bg-gradient-to-br
            from-cyan-500/20
            to-violet-500/20
            text-cyan-300
            transition-transform
            duration-300
            group-hover:scale-110
            group-hover:rotate-6
          "
        >
          <Icon className="h-7 w-7" />
        </div>

        {/* Content */}
        <div className="relative z-10 mt-6 flex-1">
          <h3 className="text-xl font-semibold text-white">
            {item.title}
          </h3>

          <p className="mt-3 text-lg font-medium text-cyan-300 break-words">
            {item.value}
          </p>

          <p className="mt-3 leading-7 text-slate-400">
            {item.description}
          </p>
        </div>

        {/* Footer */}
        <div
          className="
            relative
            z-10
            mt-8
            flex
            items-center
            justify-between
          "
        >
          <span className="text-sm font-medium text-slate-400 group-hover:text-cyan-300 transition-colors">
            Get in Touch
          </span>

          <ArrowUpRight
            className="
              h-5
              w-5
              text-slate-500
              transition-all
              duration-300
              group-hover:translate-x-1
              group-hover:-translate-y-1
              group-hover:text-cyan-300
            "
          />
        </div>
      </Link>
    </HoverLift>
  );
};

export default ContactCard;