"use client";

import ProcessBackground from "./ProcessBackground";
import ProcessHeader from "./ProcessHeader";
import ProcessCarousel from "./ProcessCarousel";

export default function Process() {
  return (
    <section
      id="process"
      className="
        relative
        overflow-hidden
        py-20
        sm:py-24
        lg:py-32
      "
    >
      {/* Background Effects */}
      <ProcessBackground />

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ProcessHeader />

        {/* Carousel */}
        <ProcessCarousel />
      </div>
    </section>
  );
}