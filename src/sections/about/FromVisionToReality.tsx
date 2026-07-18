"use client";

import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import SectionHeader from "@/components/common/SectionHeader";

import {
  FadeLeft,
  FadeRight,
} from "@/components/common/motion";

const process = [
  "Discover",
  "Design",
  "Develop",
  "Launch",
  "Grow",
];

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "AI",
  "Cloud",
  "AWS",
];

const FromVisionToReality = () => {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Glow */}

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-violet-500/10 blur-[140px]" />

      {/* Grid */}

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
          title="From Vision"
          highlight="To Reality"
          description="Every successful product starts with understanding your vision. Our proven development process and modern technology stack help transform ideas into scalable digital solutions."
        />

        <div className="mt-20 grid gap-10 lg:grid-cols-2">

          {/* Process */}

          <FadeLeft>

            <div
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-8
                backdrop-blur-xl
              "
            >
              <h3 className="text-3xl font-bold text-white">
                How We Build
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                A transparent and collaborative process that keeps your
                project moving forward from the first conversation to
                long-term growth.
              </p>

              <div className="mt-10 space-y-5">

                {process.map((step, index) => (

                  <div
                    key={step}
                    className="
                      flex
                      items-center
                      gap-5
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/5
                      px-5
                      py-4
                    "
                  >
                    <div
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        bg-cyan-500/20
                        font-bold
                        text-cyan-300
                      "
                    >
                      {index + 1}
                    </div>

                    <span className="text-lg font-medium text-white">
                      {step}
                    </span>

                    <ArrowRight className="ml-auto h-5 w-5 text-slate-500" />

                  </div>

                ))}

              </div>

            </div>

          </FadeLeft>

          {/* Tech */}

          <FadeRight>

            <div
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-8
                backdrop-blur-xl
              "
            >
              <h3 className="text-3xl font-bold text-white">
                Powered by Modern Technologies
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                We choose technologies that are reliable, scalable, secure,
                and built for long-term business success.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                {technologies.map((tech) => (

                  <div
                    key={tech}
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-cyan-500/20
                      bg-cyan-500/10
                      px-5
                      py-3
                      text-sm
                      font-semibold
                      text-cyan-300
                    "
                  >
                    <CheckCircle2 className="h-4 w-4" />

                    {tech}

                  </div>

                ))}

              </div>

              <div
                className="
                  mt-10
                  rounded-2xl
                  border
                  border-white/10
                  bg-gradient-to-r
                  from-cyan-500/10
                  via-transparent
                  to-violet-500/10
                  p-6
                "
              >
                <p className="text-xl italic leading-8 text-white">
                  "Powered by Technology.
                  <br />
                  Driven by People."
                </p>
              </div>

            </div>

          </FadeRight>

        </div>

      </div>
    </section>
  );
};

export default FromVisionToReality;