"use client";

import ValueCard from "./ValueCard";

import { Value } from "@/data/values";

interface ValueGridProps {
  values: Value[];
}

const ValueGrid = ({ values }: ValueGridProps) => {
  return (
    <div
      className="
        grid
        gap-8
        sm:grid-cols-2
        xl:grid-cols-4
      "
    >
      {values.map((value) => (
        <ValueCard
          key={value.id}
          value={value}
        />
      ))}
    </div>
  );
};

export default ValueGrid;