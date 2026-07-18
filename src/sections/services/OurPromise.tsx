"use client";

import { FadeUp } from "@/components/common/motion";

const OurPromise = () => {
  return (
    <section className="relative overflow-hidden py-32">
      {/* Background Glow */}

      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-violet-500/10 blur-[150px]" />

        <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-blue-500/10 blur-[140px]" />

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
      </div>

      <div className="container relative z-10 mx-auto max-w-5xl px-6">
        <FadeUp>
          <div className="text-center">
            {/* Badge */}

            <span
              className="
                inline-flex
                rounded-full
                border
                border-cyan-500/30
                bg-cyan-500/10
                px-5
                py-2
                text-xs
                font-bold
                uppercase
                tracking-[0.35em]
                text-cyan-300
              "
            >
              Our Promise
            </span>

            {/* Heading */}

            <h2 className="mt-10 text-5xl font-black leading-tight text-white lg:text-7xl">
              We Don't Just Build
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                Software.
              </span>
            </h2>

            {/* Statement */}

            <div className="mx-auto mt-16 max-w-4xl space-y-10">
              <p className="text-2xl leading-relaxed text-slate-300 lg:text-3xl">
                We build
                <span className="font-semibold text-white">
                  {" "}
                  long-term digital foundations
                </span>{" "}
                that empower businesses to innovate, scale with confidence, and
                stay ahead in a rapidly changing world.
              </p>

              <p className="text-xl leading-9 text-slate-400">
                Every strategy we create.
                <br />
                Every interface we design.
                <br />
                Every line of code we write.
                <br />
                Every partnership we build.
              </p>

              <p className="text-2xl font-semibold leading-relaxed text-white lg:text-3xl">
                is driven by one simple belief—
              </p>

              <h3 className="mt-6 leading-none">
                <span className="block text-4xl font-black text-white lg:text-6xl">
                  Technology
                </span>

                <span className="mt-4 block text-2xl font-medium tracking-wide text-slate-400 lg:text-3xl">
                  should create
                </span>

                <span className="mt-5 block bg-gradient-to-r from-cyan-400 via-violet-400 to-blue-400 bg-clip-text text-5xl font-black text-transparent lg:text-7xl">
                  Opportunities.
                </span>

                <span className="mt-5 block text-3xl font-semibold text-white/90 lg:text-5xl">
                  Not Complexity.
                </span>
              </h3>
            </div>

            {/* Bottom Line */}

            <div className="mx-auto mt-20 max-w-3xl border-t border-white/10 pt-10">
              <p className="text-lg leading-8 text-slate-400">
                Whether you're launching your first startup, modernizing
                enterprise operations, or building the next generation of
                AI-powered products,
                <span className="font-semibold text-white">
                  {" "}
                  Vontrixia is committed to becoming your trusted long-term
                  technology partner.
                </span>
              </p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default OurPromise;
