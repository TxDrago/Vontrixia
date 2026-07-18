"use client";

import { Sparkles, Quote } from "lucide-react";

import {
  FadeLeft,
  FadeRight,
} from "@/components/common/motion";

const OurStory = () => {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background Glow */}

      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

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
        <div className="mx-auto max-w-5xl text-center">
          <span
            className="
              inline-flex
              rounded-full
              border
              border-cyan-500/20
              bg-cyan-500/10
              px-5
              py-2
              text-sm
              font-semibold
              uppercase
              tracking-[0.25em]
              text-cyan-300
            "
          >
            Our Story
          </span>

          <h2 className="mt-8 text-4xl font-black leading-tight text-white md:text-6xl">
            Every Great Company
            <br />
            Begins With{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              A Decision
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
            Behind every product is a vision. Behind every vision is a
            decision—the decision to build something that truly makes a
            difference.
          </p>
        </div>

        <div className="mt-20 grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          {/* Story */}

          <FadeLeft>
            <div className="space-y-8">
              <p className="text-lg leading-9 text-slate-300">
                Every successful business eventually reaches a point where
                manual processes become obstacles, disconnected systems slow
                progress, and technology no longer supports growth. Those
                challenges became the inspiration behind{" "}
                <span className="font-semibold text-white">
                  Vontrixia Technologies.
                </span>
              </p>

              <p className="text-lg leading-9 text-slate-300">
                We didn't start with the goal of becoming just another software
                company. We started with a simple belief that technology should
                solve meaningful problems, simplify complexity, and help
                businesses move forward with confidence.
              </p>

              <p className="text-lg leading-9 text-slate-300">
                Every project begins by understanding our client's vision before
                writing a single line of code. Whether we're developing AI
                solutions, enterprise software, web applications, or digital
                platforms, our focus remains the same—creating products that
                deliver lasting value.
              </p>

              <p className="text-lg leading-9 text-slate-300">
                Our journey is only beginning, but our ambition is clear: to
                become a trusted technology partner recognized for innovation,
                craftsmanship, transparency, and long-term relationships with
                the businesses we serve.
              </p>
            </div>
          </FadeLeft>

          {/* Promise Card */}

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
              <div
                className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-gradient-to-br
                  from-cyan-500/20
                  to-violet-500/20
                  text-cyan-300
                "
              >
                <Sparkles className="h-8 w-8" />
              </div>

              <h3 className="mt-8 text-3xl font-bold text-white">
                Our Promise
              </h3>

              <div className="mt-8 space-y-5">
                {[
                  "Understand before we build",
                  "Deliver with quality and purpose",
                  "Communicate with transparency",
                  "Grow together for the long term",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4"
                  >
                    <div className="h-2.5 w-2.5 rounded-full bg-cyan-400" />

                    <span className="text-slate-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div
                className="
                  mt-10
                  rounded-2xl
                  border
                  border-cyan-500/20
                  bg-cyan-500/10
                  p-6
                "
              >
                <p className="leading-7 text-cyan-100">
                  Every partnership starts with a conversation, grows through
                  trust, and succeeds through collaboration.
                </p>
              </div>
            </div>
          </FadeRight>
        </div>

        {/* Quote */}

        <div className="mx-auto mt-24 max-w-4xl text-center">
          <Quote className="mx-auto h-12 w-12 text-cyan-400/70" />

          <blockquote className="mt-8 text-2xl font-medium italic leading-10 text-white md:text-3xl">
            "The future isn't something we wait for.
            <br />
            It's something we build—together."
          </blockquote>

          <p className="mt-8 text-lg font-semibold tracking-wide text-cyan-300">
            — Vontrixia Technologies
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurStory;