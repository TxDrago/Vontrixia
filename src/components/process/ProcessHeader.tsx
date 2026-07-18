"use client";

export default function ProcessHeader() {
  return (
    <div className="relative mx-auto mb-20 max-w-4xl text-center">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 -z-10 h-56 w-56 -translate-x-1/2 rounded-full bg-[#0450C3]/20 blur-[120px]" />

      {/* Badge */}
      <div
        className="
          inline-flex
          items-center
          gap-2
          rounded-full
          border
          border-[#0450C3]/30
          bg-[#0450C3]/10
          px-5
          py-2
          text-sm
          font-medium
          uppercase
          tracking-[0.2em]
          text-cyan-300
          backdrop-blur-xl
        "
      >
        <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />

        OUR DEVELOPMENT PROCESS
      </div>

      {/* Heading */}
      <h2
        className="
          mt-8
          text-4xl
          font-bold
          leading-tight
          text-white
          md:text-5xl
          lg:text-6xl
        "
      >
        From{" "}
        <span className="bg-gradient-to-r from-white via-cyan-300 to-[#00D4FF] bg-clip-text text-transparent">
          Vision
        </span>{" "}
        to{" "}
        <span className="bg-gradient-to-r from-[#0450C3] via-cyan-400 to-[#00D4FF] bg-clip-text text-transparent">
          Digital Success
        </span>
      </h2>

      {/* Description */}
      <p
        className="
          mx-auto
          mt-8
          max-w-3xl
          text-lg
          leading-8
          text-white/70
          md:text-xl
        "
      >
        Every successful digital product starts with a structured process.
        Our proven development methodology ensures transparency, faster
        delivery, exceptional quality, and scalable solutions that grow with
        your business.
      </p>

      {/* Decorative Line */}
      <div className="mx-auto mt-10 h-px w-48 bg-gradient-to-r from-transparent via-[#0450C3] to-transparent" />

      {/* Bottom Glow */}
      <div className="mx-auto mt-2 h-2 w-32 rounded-full bg-[#0450C3] blur-xl opacity-80" />
    </div>
  );
}