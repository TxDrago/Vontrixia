"use client";

import SectionHeader from "@/components/common/SectionHeader";
import { FadeUp } from "@/components/common/motion";

const values = [
  {
    title: "Purpose",
    description:
      "We build technology that solves real business challenges and creates measurable value.",
  },
  {
    title: "Excellence",
    description:
      "Every line of code, every design decision, and every interaction reflects our commitment to quality.",
  },
  {
    title: "Trust",
    description:
      "We believe lasting partnerships are built through honesty, transparency, and accountability.",
  },
  {
    title: "Innovation",
    description:
      "Technology never stands still, and neither do we. We continuously learn, improve, and innovate.",
  },
  {
    title: "Ownership",
    description:
      "We treat every project as our own, taking responsibility from the first conversation to long after launch.",
  },
  {
    title: "Impact",
    description:
      "Our success is measured by the growth, efficiency, and success we create for our clients.",
  },
];

const CoreValues = () => {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background Glow */}

      <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-violet-500/10 blur-[140px]" />

      <div className="container relative z-10 mx-auto px-6">
        <SectionHeader
          badge="Our Core Values"
          title="The Principles That"
          highlight="Guide Everything We Build"
          description="Our values define how we think, collaborate, and deliver technology that creates lasting impact."
        />

        <div className="mx-auto mt-20 max-w-5xl">
          {values.map((value, index) => (
            <FadeUp key={value.title}>
              <div
                className={`
                  py-10
                  ${
                    index !== values.length - 1
                      ? "border-b border-white/10"
                      : ""
                  }
                `}
              >
                <h3 className="text-4xl font-black uppercase tracking-widest text-white">
                  {value.title}
                </h3>

                <p className="mt-5 max-w-3xl text-lg leading-9 text-slate-400">
                  {value.description}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp>
          <div className="mx-auto mt-20 max-w-4xl text-center">
            <p className="text-3xl font-light italic leading-relaxed text-white lg:text-4xl">
              "We don't just build software.
              <br />
              We build trust, partnerships, and lasting impact."
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default CoreValues;