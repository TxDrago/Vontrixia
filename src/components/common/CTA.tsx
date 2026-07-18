"use client";

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";

import {
  FadeUp,
  HoverScale,
} from "@/components/common/motion";

interface CTAProps {
  badge?: string;
  title?: string;
  highlight?: string;
  description?: string;

  primaryText?: string;
  primaryHref?: string;

  secondaryText?: string;
  secondaryHref?: string;
}

const CTA = ({
  badge = "Let's Build Together",

  title = "Ready to Build",

  highlight = "Something Extraordinary?",

  description =
    "Whether you're launching a startup, modernizing your business, or exploring AI-powered solutions, we're ready to transform your vision into scalable digital products.",

  primaryText = "Start Your Project",
  primaryHref = "/contact",

  secondaryText = "Let's Talk",
  secondaryHref = "/contact",
}: CTAProps) => {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Glow */}

      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-violet-500/10 blur-[140px]" />

      {/* Grid */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
          [background-size:42px_42px]
        "
      />

      <div className="container relative z-10 mx-auto px-6">
        <FadeUp>
          <div
            className="
              relative
              overflow-hidden
              rounded-[2rem]
              border
              border-white/10
              bg-white/[0.04]
              px-8
              py-14
              text-center
              backdrop-blur-2xl
              lg:px-16
              lg:py-20
            "
          >
            {/* Gradient */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-br
                from-cyan-500/5
                via-transparent
                to-violet-500/5
              "
            />

            <div className="relative z-10">
              {/* Badge */}

              <span
                className="
                  inline-flex
                  rounded-full
                  border
                  border-cyan-400/30
                  bg-cyan-500/10
                  px-5
                  py-2
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-cyan-300
                "
              >
                {badge}
              </span>

              {/* Heading */}

              <h2 className="mt-8 text-4xl font-black leading-tight text-white lg:text-6xl">
                {title}

                <br />

                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                  {highlight}
                </span>
              </h2>

              {/* Description */}

              <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
                {description}
              </p>

              {/* Buttons */}

              <div className="mt-12 flex flex-wrap justify-center gap-5">
                <HoverScale>
                  <Link
                    href={primaryHref}
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      bg-gradient-to-r
                      from-cyan-500
                      to-violet-500
                      px-8
                      py-4
                      text-base
                      font-semibold
                      text-white
                      shadow-lg
                      shadow-cyan-500/20
                    "
                  >
                    {primaryText}

                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </HoverScale>

                <HoverScale>
                  <Link
                    href={secondaryHref}
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-white/10
                      bg-white/5
                      px-8
                      py-4
                      text-base
                      font-semibold
                      text-white
                      transition-all
                      duration-300
                      hover:border-cyan-400
                      hover:bg-white/10
                    "
                  >
                    <MessageCircle className="h-5 w-5" />

                    {secondaryText}
                  </Link>
                </HoverScale>
              </div>

              {/* Divider */}

              <div className="mx-auto mt-14 h-px w-40 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

              {/* Trust */}

              <div className="mt-10 flex flex-wrap justify-center gap-x-10 gap-y-5">
                {[
                  "Free Consultation",
                  "Transparent Communication",
                  "Long-Term Partnership",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle2 className="h-5 w-5 text-cyan-400" />

                    <span className="text-sm text-slate-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bottom Quote */}

              <p className="mx-auto mt-12 max-w-2xl text-lg italic text-slate-400">
                "Every great product begins with a conversation.
                Let's build something remarkable together."
              </p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default CTA;