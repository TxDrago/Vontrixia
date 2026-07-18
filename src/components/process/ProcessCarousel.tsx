"use client";

import { useCallback, useEffect, useState } from "react";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import { ChevronLeft, ChevronRight } from "lucide-react";

import ProcessCard from "./ProcessCard";
import ProcessProgress from "./ProcessProgress";
import { processSteps } from "./processData";

export default function ProcessCarousel() {
  const autoplay = Autoplay({
    delay: 5000,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
  });

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
      duration: 40,
    },
    [autoplay]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;

    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      {/* Previous Button */}
      <button
        onClick={scrollPrev}
        className="
          absolute
          left-0
          top-1/2
          z-30
          hidden
          h-12
          w-12
          -translate-x-1/2
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          border
          border-white/10
          bg-[#09111D]/80
          backdrop-blur-xl
          transition-all
          duration-300
          hover:border-[#0450C3]
          hover:bg-[#0450C3]/20
          hover:shadow-[0_0_25px_rgba(4,80,195,0.35)]
          lg:flex
        "
      >
        <ChevronLeft className="h-5 w-5 text-white" />
      </button>

      {/* Next Button */}
      <button
        onClick={scrollNext}
        className="
          absolute
          right-0
          top-1/2
          z-30
          hidden
          h-12
          w-12
          translate-x-1/2
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          border
          border-white/10
          bg-[#09111D]/80
          backdrop-blur-xl
          transition-all
          duration-300
          hover:border-[#0450C3]
          hover:bg-[#0450C3]/20
          hover:shadow-[0_0_25px_rgba(4,80,195,0.35)]
          lg:flex
        "
      >
        <ChevronRight className="h-5 w-5 text-white" />
      </button>

      {/* Carousel */}
      <div
        ref={emblaRef}
        className="overflow-hidden"
      >
        <div className="flex">
          {processSteps.map((step, index) => (
            <div
              key={step.id}
              className="
                min-w-0
                flex-[0_0_100%]
                px-4

                md:flex-[0_0_70%]

                xl:flex-[0_0_33.333%]
              "
            >
              <div
                className={`
                  transition-all
                  duration-500
                  ${
                    selectedIndex === index
                      ? "scale-100 opacity-100"
                      : "scale-95 opacity-60"
                  }
                `}
              >
                <ProcessCard
                  process={step}
                  active={selectedIndex === index}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Dots */}
      <div className="mt-10 flex justify-center gap-3 lg:hidden">
        {processSteps.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`
              h-2.5
              rounded-full
              transition-all
              duration-300
              ${
                selectedIndex === index
                  ? "w-8 bg-gradient-to-r from-[#0450C3] to-[#00D4FF]"
                  : "w-2.5 bg-white/20"
              }
            `}
          />
        ))}
      </div>

      {/* Desktop Timeline */}
      <ProcessProgress activeIndex={selectedIndex} />
    </div>
  );
}