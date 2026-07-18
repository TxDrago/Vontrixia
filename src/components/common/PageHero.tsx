"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

import { FadeLeft, FadeRight } from "@/components/common/motion";

interface PageHeroProps {
  image: string;
  imageAlt: string;
  breadcrumb?: string[];
}

const PageHero = ({
  image,
  imageAlt,
  breadcrumb = ["Home"],
}: PageHeroProps) => {
  return (
    <section className="relative overflow-hidden bg-[#030712] pt-10 pb-12">
      {/* Background Glow */}
      <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-[30rem] w-[30rem] rounded-full bg-violet-500/10 blur-[140px]" />

      <div className="container relative z-10 mx-auto px-6">
        {/* Breadcrumb */}
        <FadeLeft>
          <div className="mb-10 flex flex-wrap items-center gap-2 text-sm text-slate-400">
            {breadcrumb.map((item, index) => (
              <div key={`${item}-${index}`} className="flex items-center gap-2">
                <span>{item}</span>

                {index !== breadcrumb.length - 1 && (
                  <ChevronRight className="h-4 w-4" />
                )}
              </div>
            ))}
          </div>
        </FadeLeft>

        {/* Hero Image */}
        <FadeRight>
          <div className="relative">
            {/* Glow */}
            <div
              className="
                absolute
                inset-0
                -z-10
                rounded-full
                bg-gradient-to-r
                from-cyan-500/20
                via-violet-500/10
                to-cyan-500/20
                blur-3xl
              "
            />

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            >
              <div className="relative w-full h-[280px] md:h-[420px] lg:h-[720px] overflow-hidden rounded-3xl">
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  priority
                  className="object-fill"
                />
              </div>
            </motion.div>
          </div>
        </FadeRight>
      </div>
    </section>
  );
};

export default PageHero;
