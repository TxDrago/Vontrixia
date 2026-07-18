"use client";

import { FadeUp } from "@/components/common/motion";
import IndustryRow from "@/components/services/IndustryRow";
import { serviceIndustries } from "@/data/serviceindustries";

const groupedIndustries = serviceIndustries.reduce((acc, industry) => {
  if (!acc[industry.category]) {
    acc[industry.category] = [];
  }

  acc[industry.category].push(industry);

  return acc;
}, {} as Record<string, typeof serviceIndustries>);

const categoryDescriptions: Record<string, string> = {
  "Core Industries":
    "Powering mission-critical businesses with scalable, secure, and intelligent software solutions.",

  "Growth Industries":
    "Helping fast-growing industries embrace digital transformation and accelerate innovation.",

  "Specialized Industries":
    "Delivering tailored technology solutions for industries with unique operational and regulatory challenges.",
};

const capabilityHighlights = [
  "16+ Industries",
  "AI • Cloud • Enterprise",
  "Web • Mobile • SaaS",
  "Built for Startups to Enterprises",
];

const IndustriesWeServe = () => {
  return (
    <section className="relative overflow-hidden py-28">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-[28rem] w-[28rem] rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="absolute bottom-0 right-0 h-[32rem] w-[32rem] rounded-full bg-violet-500/10 blur-[160px]" />

        <div
          className="
            absolute
            inset-0
            opacity-[0.03]
            [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)]
            [background-size:48px_48px]
          "
        />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        {/* Heading */}

        <FadeUp>
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.35em] text-cyan-300">
              Industries We Empower
            </span>

            <h2 className="mt-8 text-5xl font-black leading-tight text-white lg:text-6xl">
              Technology That Understands
              <br />

              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                Every Industry
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
              Every industry has its own workflows, challenges, and
              opportunities. We build intelligent software that adapts to
              your business, helping you innovate, automate, and grow with
              confidence.
            </p>

            {/* Capability Strip */}

            <div className="mt-12 flex flex-wrap justify-center gap-4">
              {capabilityHighlights.map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-slate-300 backdrop-blur-xl"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* Categories */}

        <div className="mt-28 space-y-12">
          {Object.entries(groupedIndustries).map(
            ([category, industries]) => (
              <div key={category}>
                {/* Category Header */}

                <FadeUp>
                  <div className="mb-16 text-center">
                    <div className="mx-auto mb-8 h-px w-40 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

                    <h3 className="text-3xl font-black uppercase tracking-[0.25em] text-white">
                      {category}
                    </h3>

                    <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-400">
                      {categoryDescriptions[category]}
                    </p>
                  </div>
                </FadeUp>

                {industries.map((industry, index) => (
                  <IndustryRow
                    key={industry.id}
                    industry={industry}
                    reverse={index % 2 === 1}
                  />
                ))}
              </div>
            )
          )}
        </div>

        {/* Closing */}

        <FadeUp>
          <div className="mx-auto mt-28 max-w-5xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
              One Mission. Every Industry.
            </p>

            <h3 className="mt-6 text-4xl font-black leading-tight text-white lg:text-5xl">
              Different Industries.
              <br />
              One Technology Partner.
            </h3>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
              Whether you're building the next AI startup, modernizing an
              enterprise, transforming healthcare, or creating exceptional
              customer experiences,
              <span className="font-semibold text-white">
                {" "}
                Vontrixia delivers secure, scalable, and future-ready
                software designed to solve real business problems.
              </span>
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default IndustriesWeServe;