"use client";

import SectionHeader from "@/components/common/SectionHeader";
import ProcessGrid from "@/components/contact/ProcessGrid";

import { processSteps } from "@/data/process";

const WhatHappensNext = () => {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background Glow */}

      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-violet-500/10 blur-[140px]" />

      {/* Background Pattern */}

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
        <SectionHeader
          badge="What Happens Next?"
          title="From Your First Message"
          highlight="To Project Success"
          description="We've designed a simple, transparent process that keeps you informed from the first conversation to the successful launch of your product."
        />

        <div className="mt-20">
          <ProcessGrid steps={processSteps} />
        </div>

        {/* Bottom Message */}

        <div
          className="
            mx-auto
            mt-20
            max-w-4xl
            rounded-3xl
            border
            border-cyan-500/20
            bg-gradient-to-r
            from-cyan-500/10
            via-slate-900/40
            to-violet-500/10
            p-8
            text-center
            backdrop-blur-xl
          "
        >
          <h3 className="text-2xl font-bold text-white">
            Every Great Product Starts With a Conversation
          </h3>

          <p className="mt-4 text-lg leading-8 text-slate-400">
            Whether you're building a startup, scaling your business, or
            modernizing existing software, we're here to guide you through
            every step—from strategy and design to development, launch, and
            long-term growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatHappensNext;