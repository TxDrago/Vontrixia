"use client";

import { FadeUp } from "@/components/common/motion";
import { capabilities } from "@/data/capabilities";

import CapabilityCard from "./CapabilityCard";

const CapabilityGrid = () => {
  return (
    <div
      className="
        grid
        gap-8
        sm:grid-cols-2
        xl:grid-cols-3
      "
    >
      {capabilities.map((capability, index) => (
        <FadeUp
          key={capability.id}
          delay={index * 0.08}
        >
          <CapabilityCard capability={capability} />
        </FadeUp>
      ))}
    </div>
  );
};

export default CapabilityGrid;