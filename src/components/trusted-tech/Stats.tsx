"use client";

const stats = [
  {
    value: "15+",
    label: "Technologies",
  },
  {
    value: "10+",
    label: "Development Services",
  },
  {
    value: "100%",
    label: "Custom Solutions",
  },
  {
    value: "24/7",
    label: "Support",
  },
];

export default function Stats() {
  return (
    <section className="relative py-20">
      {/* Heading */}
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center rounded-full border border-[#0450C3]/30 bg-[#0450C3]/10 px-5 py-2 text-sm font-medium tracking-widest text-cyan-300 uppercase">
          Numbers That Matter
        </span>

        <h2 className="mt-6 text-4xl font-bold text-white lg:text-5xl">
          Built for Growth
        </h2>

        <p className="mt-5 text-lg leading-8 text-white/60">
          We may be a new company, but we're building with modern technologies,
          scalable architecture, and enterprise-grade engineering practices.
        </p>
      </div>

      {/* Stats */}
      <div className="mx-auto mt-20 max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-y-12 lg:grid-cols-4">
          {stats.map((item, index) => (
            <div
              key={item.label}
              className="relative flex flex-col items-center justify-center text-center"
            >
              {/* Vertical Separator */}
              {index !== stats.length - 1 && (
                <div className="absolute right-0 top-1/2 hidden h-20 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-[#0450C3]/60 to-transparent lg:block" />
              )}

              {/* Glow */}
              <div className="absolute h-20 w-20 rounded-full bg-[#0450C3]/10 blur-3xl" />

              <h3 className="relative bg-gradient-to-r from-white via-cyan-300 to-[#00D4FF] bg-clip-text text-5xl font-extrabold text-transparent lg:text-6xl">
                {item.value}
              </h3>

              <p className="relative mt-4 text-sm uppercase tracking-[0.25em] text-white/55">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="mx-auto mt-20 h-px w-64 bg-gradient-to-r from-transparent via-[#0450C3] to-transparent opacity-70" />
    </section>
  );
}