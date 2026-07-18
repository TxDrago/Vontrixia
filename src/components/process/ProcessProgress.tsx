"use client";

import { processSteps } from "./processData";

interface ProcessProgressProps {
  activeIndex: number;
}

export default function ProcessProgress({
  activeIndex,
}: ProcessProgressProps) {
  return (
    <div className="mt-16 hidden lg:block">
      <div className="relative mx-auto max-w-6xl">
        {/* Background Line */}
        <div className="absolute top-5 left-0 right-0 h-[2px] bg-white/10" />

        {/* Active Progress Line */}
        <div
          className="absolute top-5 left-0 h-[2px] bg-gradient-to-r from-[#0450C3] via-[#00D4FF] to-[#00D4FF] transition-all duration-700"
          style={{
            width: `${
              (activeIndex / (processSteps.length - 1)) * 100
            }%`,
          }}
        />

        <div className="relative flex justify-between">
          {processSteps.map((step, index) => {
            const active = index === activeIndex;
            const completed = index < activeIndex;

            return (
              <div
                key={step.id}
                className="flex flex-col items-center"
              >
                {/* Circle */}
                <div
                  className={`
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    font-semibold
                    text-sm
                    transition-all
                    duration-500

                    ${
                      active
                        ? `
                          border-[#00D4FF]
                          bg-gradient-to-br
                          from-[#0450C3]
                          to-[#00D4FF]
                          text-white
                          shadow-[0_0_25px_rgba(0,212,255,0.7)]
                          scale-110
                        `
                        : completed
                        ? `
                          border-[#0450C3]
                          bg-[#0450C3]
                          text-white
                        `
                        : `
                          border-white/20
                          bg-[#09111D]
                          text-white/50
                        `
                    }
                  `}
                >
                  {index + 1}
                </div>

                {/* Step Name */}
                <p
                  className={`
                    mt-4
                    text-center
                    text-sm
                    font-medium
                    transition-all
                    duration-300

                    ${
                      active
                        ? "text-white"
                        : completed
                        ? "text-cyan-300"
                        : "text-white/40"
                    }
                  `}
                >
                  {step.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}