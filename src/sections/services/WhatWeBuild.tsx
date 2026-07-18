"use client";

import SectionHeader from "@/components/common/SectionHeader";
import { FadeUp } from "@/components/common/motion";
import CapabilityGrid from "@/components/services/CapabilityGrid";

const WhatWeBuild = () => {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background Glow */}

      <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-[30rem] w-[30rem] rounded-full bg-violet-500/10 blur-[140px]" />

      {/* Background Grid */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)]
          [background-size:48px_48px]
        "
      />

      <div className="container relative z-10 mx-auto px-6">
        {/* Header */}

        <SectionHeader
          badge="What We Build"
          title="Solutions That"
          highlight="Power Your Business"
          description="Every business has unique challenges. We build intelligent, scalable, and future-ready digital solutions that help organizations innovate, streamline operations, and achieve sustainable growth."
        />

        {/* Capabilities */}

        <div className="mt-20">
          <CapabilityGrid />
        </div>

        {/* Closing Statement */}

        <FadeUp>
          <div className="mx-auto mt-24 max-w-5xl text-center">
            <p className="text-2xl font-light leading-relaxed text-white lg:text-3xl">
              No matter where you are in your digital journey,
            </p>

            <h3 className="mt-4 text-3xl font-bold leading-tight lg:text-5xl">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                Vontrixia delivers solutions designed around your business,
              </span>

              <br />

              <span className="text-white">
                not the other way around.
              </span>
            </h3>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
              From your first idea to enterprise-scale digital transformation,
              we combine strategy, design, engineering, and innovation to build
              technology that creates measurable business impact.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default WhatWeBuild;