"use client";

import TechnologyPills from "./TechnologyPills";
import Capabilities from "./Capabilities";
import Stats from "./Stats";
import WhyChoose from "./WhyChoose";

export default function TrustedTech() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#020817]
        py-24
        lg:py-32
      "
    >
      {/* -------------------------------- */}
      {/* Background Image */}
      {/* -------------------------------- */}

      <div
        className="
          absolute
          inset-0
          bg-cover
          bg-center
          bg-no-repeat
          opacity-40
        "
        style={{
          backgroundImage: "url('/star-bg.png')",
        }}
      />

      {/* -------------------------------- */}
      {/* Top Glow */}
      {/* -------------------------------- */}

      <div
        className="
          absolute
          left-1/2
          top-[-220px]
          h-[700px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-[#0450C3]/20
          blur-[180px]
        "
      />

      {/* -------------------------------- */}
      {/* Left Glow */}
      {/* -------------------------------- */}

      <div
        className="
          absolute
          left-[-150px]
          top-1/2
          h-[500px]
          w-[500px]
          -translate-y-1/2
          rounded-full
          bg-cyan-500/10
          blur-[170px]
        "
      />

      {/* -------------------------------- */}
      {/* Right Glow */}
      {/* -------------------------------- */}

      <div
        className="
          absolute
          right-[-120px]
          bottom-[-120px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#0450C3]/15
          blur-[170px]
        "
      />

      {/* -------------------------------- */}
      {/* Grid Overlay */}
      {/* -------------------------------- */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.04]
          [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
          [background-size:80px_80px]
        "
      />

      {/* -------------------------------- */}
      {/* Noise Overlay */}
      {/* -------------------------------- */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          mix-blend-soft-light
          bg-[radial-gradient(circle,rgba(255,255,255,0.08)_1px,transparent_1px)]
          [background-size:22px_22px]
        "
      />

      {/* -------------------------------- */}
      {/* Content */}
      {/* -------------------------------- */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-6
          lg:px-10
        "
      >
        {/* ============================= */}
        {/* Section Heading */}
        {/* ============================= */}

        <div className="mx-auto max-w-3xl text-center">
          {/* Small Heading */}

          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-[#0450C3]" />

            <span
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.45em]
                text-cyan-400
              "
            >
              TRUSTED TECHNOLOGIES
            </span>

            <div className="h-px w-20 bg-gradient-to-l from-transparent to-[#0450C3]" />
          </div>

          {/* Main Heading */}

          <h2
            className="
              mt-6
              text-4xl
              font-bold
              leading-tight
              text-white
              md:text-5xl
              xl:text-6xl
            "
          >
            Built with
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-300 bg-clip-text text-transparent">
              Industry-Leading Technologies
            </span>
          </h2>

          {/* Description */}

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-lg
              leading-8
              text-white/60
            "
          >
            We combine modern technologies, scalable architecture,
            and engineering best practices to build secure,
            high-performance digital products for startups,
            enterprises, and growing businesses.
          </p>
        </div>

        {/* ====================================== */}
        {/* Technology Pills */}
        {/* ====================================== */}

        <div className="mt-20">
          <TechnologyPills />
        </div>

        {/* ====================================== */}
        {/* Development Capabilities */}
        {/* ====================================== */}

        <div className="mt-28">
          <Capabilities />
        </div>

        {/* ====================================== */}
        {/* Stats */}
        {/* ====================================== */}

        <div className="mt-28">
          <Stats />
        </div>

        {/* ====================================== */}
        {/* Why Choose */}
        {/* ====================================== */}

        <div className="mt-28">
          <WhyChoose />
        </div>
      </div>
    </section>
  );
}