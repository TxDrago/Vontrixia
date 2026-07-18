"use client";

const technologies = [
  "Next.js",
  "React.js",
  "TypeScript",
  "Node.js",
  "Express.js",
  "Python",
  "AI",
  "OpenAI",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "Firebase",
  "AWS",
  "Docker",
  "Git",
  "Tailwind CSS",
  "Flutter",
  "React Native",
  "REST APIs",
  "GraphQL",
];

export default function TechnologyPills() {
  return (
    <section>

      {/* Heading */}

      <div className="text-center">

        <div className="flex items-center justify-center gap-4">

          <div className="h-px w-20 bg-gradient-to-r from-transparent to-[#0450C3]" />

          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#00D4FF]">
            TECHNOLOGY STACK
          </p>

          <div className="h-px w-20 bg-gradient-to-l from-transparent to-[#0450C3]" />

        </div>

        <h3 className="mt-5 text-3xl font-bold text-white md:text-4xl">
          Technologies We Build With
        </h3>

        <p className="mx-auto mt-4 max-w-2xl text-white/60">
          We leverage modern frameworks, cloud platforms, AI, and scalable
          backend technologies to build reliable digital products.
        </p>

      </div>

      {/* Technology Pills */}

      <div
        className="
          mt-14
          flex
          flex-wrap
          md:justify-center
          justify-around
          md:
          gap-4
          lg:gap-5
        "
      >
        {technologies.map((tech, index) => (
          <div
            key={tech}
            className="
              group
              relative
              overflow-hidden
              rounded-full
              border
              border-[#0450C3]/20
              bg-white/[0.03]
              px-6
              py-3
              backdrop-blur-xl
              transition-all
              duration-500
              hover:-translate-y-2
              hover:border-[#00D4FF]
              hover:shadow-[0_0_35px_rgba(4,80,195,0.35)]
            "
            style={{
              animationDelay: `${index * 80}ms`,
            }}
          >
            {/* Glow */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-r
                from-[#0450C3]/0
                via-[#0450C3]/10
                to-[#00D4FF]/0
                opacity-0
                transition-all
                duration-500
                group-hover:opacity-100
              "
            />

            {/* Dot */}

            <span
              className="
                relative
                mr-3
                inline-flex
                h-2.5
                w-2.5
                rounded-full
                bg-[#00D4FF]
                shadow-[0_0_12px_#00D4FF]
              "
            />

            {/* Text */}

            <span
              className="
                relative
                font-medium
                tracking-wide
                text-white
                transition-colors
                duration-300
                group-hover:text-[#00D4FF]
              "
            >
              {tech}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}