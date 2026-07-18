"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { footerBrand } from "@/data/footer";

const FooterBrand = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
      }}
      className="max-w-md"
    >
      {/* Logo + Brand */}
      <div className="flex items-center gap-4">

        {/* Logo */}
        <div
          className="
            flex
            h-16
            w-16
            items-center
            justify-center
            overflow-hidden
            rounded-2xl
            border
            border-white/10
            bg-white/[0.04]
            backdrop-blur-xl
            transition-all
            duration-500
            hover:border-cyan-400/30
            hover:shadow-lg
            hover:shadow-cyan-500/10
          "
        >
          {/* Replace with your logo */}

          <Image
            src="/logo.png"
            alt="Vontrixia"
            width={48}
            height={48}
            className="object-contain"
          />

          {/*

          If logo is unavailable, use:

          <span className="text-2xl font-black text-cyan-300">
            V
          </span>

          */}
        </div>

        {/* Brand */}
        <div>

          <h3
            className="
              text-2xl
              font-bold
              tracking-tight
              text-white
            "
          >
            {footerBrand.name}
          </h3>

          <p
            className="
              mt-1
              text-sm
              font-medium
              uppercase
              tracking-[0.18em]
              text-cyan-300
            "
          >
            {footerBrand.tagline}
          </p>

        </div>

      </div>

      {/* Description */}
      <p
        className="
          mt-8
          leading-8
          text-slate-400
        "
      >
        {footerBrand.description}
      </p>

      {/* Divider */}
      <div
        className="
          my-8
          h-px
          w-full
          bg-gradient-to-r
          from-cyan-400/20
          via-white/10
          to-transparent
        "
      />

      {/* Brand Statement */}
      <p
        className="
          text-sm
          italic
          leading-7
          text-slate-500
        "
      >
        {footerBrand.builtWith}
      </p>
    </motion.div>
  );
};

export default FooterBrand;