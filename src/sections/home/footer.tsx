"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronUp } from "lucide-react";

import FooterBrand from "@/components/footer/FooterBrand";
import FooterColumn from "@/components/footer/FooterColumn";
import SocialButton from "@/components/footer/SocialButton";

import {
  footerBrand,
  footerColumns,
  socialLinks,
  contactItems,
} from "@/data/footer";

const Footer = () => {
  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t
        border-white/10
        bg-[#020617]
      "
    >
      {/* Background Glow */}
      <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="absolute -right-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-violet-500/10 blur-[200px]" />

      <div className="container relative z-10 mx-auto px-6">

        {/* Top */}
        <div className="grid gap-20 py-20 lg:grid-cols-[1.3fr_2fr]">

          {/* Brand */}
          <div>

            <FooterBrand />

            {/* Social */}
            <div className="mt-10 flex gap-4">
              {socialLinks.map((social) => (
                <SocialButton
                  key={social.id}
                  social={social}
                />
              ))}
            </div>

          </div>

          {/* Right Side */}
          <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-4">

            {/* Dynamic Columns */}
            {footerColumns.map((column) => (
              <FooterColumn
                key={column.id}
                column={column}
              />
            ))}

            {/* Contact */}
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
                duration: 0.7,
              }}
            >
              <h3 className="text-lg font-semibold text-white">
                Contact
              </h3>

              <div className="mt-6 space-y-5">

                {contactItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.id}
                      href={item.href}
                      className="
                        group
                        flex
                        items-start
                        gap-3
                      "
                    >
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
                          transition-all
                          duration-300
                          group-hover:border-cyan-400/30
                        "
                      >
                        <Icon className="h-5 w-5 text-cyan-300" />
                      </div>

                      <div>

                        <p className="text-xs uppercase tracking-wider text-slate-500">
                          {item.label}
                        </p>

                        <p
                          className="
                            mt-1
                            text-sm
                            text-slate-300
                            transition-colors
                            duration-300
                            group-hover:text-white
                          "
                        >
                          {item.value}
                        </p>

                      </div>
                    </Link>
                  );
                })}

              </div>
            </motion.div>

          </div>

        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Bottom */}
        <div
          className="
            flex
            flex-col
            gap-6
            py-8
            text-sm
            text-slate-500
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <div>
            <p>{footerBrand.copyright}</p>

            <p className="mt-2">
              {footerBrand.builtWith}
            </p>
          </div>

          <div className="flex items-center gap-6">

            <Link
              href="/privacy-policy"
              className="transition hover:text-cyan-300"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms-and-conditions"
              className="transition hover:text-cyan-300"
            >
              Terms & Conditions
            </Link>

            {/* Back To Top */}
            <button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="
                group
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/[0.04]
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-cyan-400/30
                hover:bg-cyan-500/10
                hover:shadow-lg
                hover:shadow-cyan-500/20
              "
            >
              <ChevronUp
                className="
                  h-5
                  w-5
                  text-slate-300
                  transition-all
                  duration-300
                  group-hover:-translate-y-1
                  group-hover:text-cyan-300
                "
              />
            </button>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;