"use client";

import ProcessCard from "./ProcessCard";
import { ProcessStep } from "@/data/process";

interface ProcessGridProps {
  steps: ProcessStep[];
}

const ProcessGrid = ({ steps }: ProcessGridProps) => {
  return (
    <div
      className="
        grid
        gap-8
        sm:grid-cols-2
        xl:grid-cols-4
      "
    >
      {steps.map((step) => (
        <ProcessCard
          key={step.id}
          step={step}
        />
      ))}
    </div>
  );
};

export default ProcessGrid;