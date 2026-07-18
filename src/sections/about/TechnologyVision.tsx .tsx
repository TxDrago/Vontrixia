"use client";

import { Lightbulb } from "lucide-react";

import SectionHeader from "@/components/common/SectionHeader";
import AudienceGrid from "@/components/about/AudienceGrid";

import { FadeLeft, FadeRight } from "@/components/common/motion";

import { audiences } from "@/data/audience";

const TechnologyBuiltAroundYourVision = () => {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background Glow */}

      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-violet-500/10 blur-[140px]" />

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
        <SectionHeader
          badge="Our Approach"
          title="Technology Built"
          highlight="Around Your Vision"
          description="Every successful product begins with understanding your business. We combine strategy, design, and engineering to create digital experiences that solve real-world challenges and drive measurable growth."
        />

        <div className="mt-20 grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left Content */}

          <FadeLeft>
            <div>
              <h3 className="text-3xl font-bold leading-tight text-white">
                Your Vision.
                <br />
                Our Technology.
                <br />
                One Shared Goal.
              </h3>

              <p className="mt-8 text-lg leading-8 text-slate-400">
                At <span className="font-semibold text-white">Vontrixia Technologies</span>,
                we believe technology should adapt to your business—not the
                other way around. Every solution is carefully designed around
                your goals, ensuring it is scalable, secure, and built for
                long-term success.
              </p>

              <p className="mt-6 text-lg leading-8 text-slate-400">
                Whether you're launching a startup, modernizing operations, or
                scaling an enterprise platform, we become your technology
                partner—helping transform ambitious ideas into meaningful
                digital products.
              </p>

              {/* Highlight Card */}

              <div
                className="
                  mt-10
                  rounded-3xl
                  border
                  border-cyan-500/20
                  bg-gradient-to-r
                  from-cyan-500/10
                  via-white/5
                  to-violet-500/10
                  p-6
                  backdrop-blur-xl
                "
              >
                <div className="flex items-start gap-4">
                  <div
                    className="
                      flex
                      h-14
                      w-14
                      shrink-0
                      items-center
                      justify-center
                      rounded-2xl
                      bg-cyan-500/20
                      text-cyan-300
                    "
                  >
                    <Lightbulb className="h-7 w-7" />
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-white">
                      Building More Than Software
                    </h4>

                    <p className="mt-3 leading-7 text-slate-400">
                      We build lasting partnerships through transparency,
                      innovation, and a commitment to delivering technology that
                      creates real business value.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeLeft>

          {/* Right Content */}

          <FadeRight>
            <AudienceGrid audiences={audiences} />
          </FadeRight>
        </div>
      </div>
    </section>
  );
};

export default TechnologyBuiltAroundYourVision;