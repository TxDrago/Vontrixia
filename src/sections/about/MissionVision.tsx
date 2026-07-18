"use client";

import { Compass, Telescope } from "lucide-react";

import SectionHeader from "@/components/common/SectionHeader";

import {
  FadeLeft,
  FadeRight,
} from "@/components/common/motion";

const MissionVision = () => {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background Glow */}

      <div className="absolute left-0 top-24 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

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
          badge="Mission & Vision"
          title="Purpose That"
          highlight="Drives Every Solution"
          description="Every decision we make is guided by a clear purpose today and an ambitious vision for tomorrow."
        />

        <div className="mt-20 grid gap-10 lg:grid-cols-2">

          {/* Mission */}

          <FadeLeft>

            <div
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-10
                backdrop-blur-xl
                transition-all
                duration-500
                hover:border-cyan-400/40
              "
            >
              <div
                className="
                  absolute
                  inset-0
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                  bg-gradient-to-br
                  from-cyan-500/10
                  via-transparent
                  to-violet-500/10
                "
              />

              <div className="relative z-10">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/20 text-cyan-300">

                  <Compass className="h-8 w-8" />

                </div>

                <h3 className="mt-8 text-3xl font-bold text-white">
                  Our Mission
                </h3>

                <p className="mt-6 text-lg leading-8 text-slate-400">
                  To empower businesses through innovative, scalable, and
                  purpose-driven technology solutions that solve real-world
                  challenges, accelerate growth, and create lasting value.
                </p>

                <p className="mt-6 leading-8 text-slate-400">
                  We strive to build every product with transparency,
                  craftsmanship, and a deep understanding of our clients'
                  vision—because successful software starts with meaningful
                  partnerships.
                </p>

              </div>

            </div>

          </FadeLeft>

          {/* Vision */}

          <FadeRight>

            <div
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-10
                backdrop-blur-xl
                transition-all
                duration-500
                hover:border-violet-400/40
              "
            >
              <div
                className="
                  absolute
                  inset-0
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                  bg-gradient-to-br
                  from-violet-500/10
                  via-transparent
                  to-cyan-500/10
                "
              />

              <div className="relative z-10">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-500/20 text-violet-300">

                  <Telescope className="h-8 w-8" />

                </div>

                <h3 className="mt-8 text-3xl font-bold text-white">
                  Our Vision
                </h3>

                <p className="mt-6 text-lg leading-8 text-slate-400">
                  To become a globally trusted technology partner recognized
                  for transforming ideas into impactful digital products that
                  inspire innovation, drive sustainable growth, and shape the
                  future of businesses.
                </p>

                <p className="mt-6 leading-8 text-slate-400">
                  We envision a future where technology becomes an enabler of
                  opportunity, empowering organizations of every size to
                  innovate with confidence and compete on a global scale.
                </p>

              </div>

            </div>

          </FadeRight>

        </div>

        {/* Closing Statement */}

        <div className="mx-auto mt-24 max-w-4xl text-center">

          <p
            className="
              text-3xl
              font-light
              italic
              leading-relaxed
              text-white
              lg:text-4xl
            "
          >
            "Every innovation begins with a purpose,
            and every lasting partnership begins with trust."
          </p>

          <p className="mt-8 text-lg font-semibold uppercase tracking-[0.3em] text-cyan-300">
            — Team Vontrixia
          </p>

        </div>

      </div>
    </section>
  );
};

export default MissionVision;