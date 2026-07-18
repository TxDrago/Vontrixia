"use client";

import AudienceCard from "./AudienceCard";

import { Audience } from "@/data/audience";

interface AudienceGridProps {
  audiences: Audience[];
}

const AudienceGrid = ({ audiences }: AudienceGridProps) => {
  return (
    <div
      className="
        grid
        gap-8
        md:grid-cols-2
      "
    >
      {audiences.map((audience) => (
        <AudienceCard
          key={audience.id}
          audience={audience}
        />
      ))}
    </div>
  );
};

export default AudienceGrid;