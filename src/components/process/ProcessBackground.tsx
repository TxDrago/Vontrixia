"use client";

export default function ProcessBackground() {
  return (
    <>
      {/* Main Background */}
      <div className="absolute inset-0 -z-30 bg-[#030712]" />

      {/* Top Glow */}
      <div
        className="
          absolute
          top-[-250px]
          left-1/2
          -translate-x-1/2
          h-[700px]
          w-[700px]
          rounded-full
          bg-[#0450C3]/20
          blur-[180px]
          animate-pulse
          -z-20
        "
      />

      {/* Left Glow */}
      <div
        className="
          absolute
          left-[-180px]
          top-1/3
          h-[450px]
          w-[450px]
          rounded-full
          bg-cyan-500/10
          blur-[160px]
          -z-20
        "
      />

      {/* Right Glow */}
      <div
        className="
          absolute
          right-[-180px]
          bottom-0
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#0450C3]/15
          blur-[170px]
          -z-20
        "
      />

      {/* Bottom Glow */}
      <div
        className="
          absolute
          bottom-[-220px]
          left-1/2
          -translate-x-1/2
          h-[600px]
          w-[600px]
          rounded-full
          bg-cyan-500/10
          blur-[170px]
          -z-20
        "
      />

      {/* Grid */}
      <div
        className="
          absolute
          inset-0
          -z-20
          opacity-[0.06]
          [background-image:
            linear-gradient(rgba(255,255,255,.15)_1px,transparent_1px),
            linear-gradient(90deg,rgba(255,255,255,.15)_1px,transparent_1px)]
          [background-size:70px_70px]
        "
      />

      {/* Noise Texture */}
      <div
        className="
          absolute
          inset-0
          -z-10
          opacity-[0.03]
          mix-blend-soft-light
          bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]
        "
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {[...Array(18)].map((_, index) => (
          <span
            key={index}
            className="absolute rounded-full bg-white/30 animate-pulse"
            style={{
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${2 + Math.random() * 6}s`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Top Fade */}
      <div
        className="
          absolute
          top-0
          left-0
          h-40
          w-full
          bg-gradient-to-b
          from-[#030712]
          to-transparent
          -z-10
        "
      />

      {/* Bottom Fade */}
      <div
        className="
          absolute
          bottom-0
          left-0
          h-40
          w-full
          bg-gradient-to-t
          from-[#030712]
          to-transparent
          -z-10
        "
      />

      {/* Decorative Horizontal Line */}
      <div
        className="
          absolute
          top-0
          left-1/2
          h-px
          w-3/4
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-[#0450C3]/70
          to-transparent
          -z-10
        "
      />

      {/* Decorative Vertical Line */}
      <div
        className="
          absolute
          left-1/2
          top-0
          h-full
          w-px
          -translate-x-1/2
          bg-gradient-to-b
          from-transparent
          via-[#0450C3]/10
          to-transparent
          -z-20
        "
      />
    </>
  );
}