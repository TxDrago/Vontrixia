"use client";

import TeamCard from "./TeamCard";

import { TeamMember } from "@/data/team";

interface TeamGridProps {
  team: TeamMember[];
}

const TeamGrid = ({ team }: TeamGridProps) => {
  const tarun = team.find(
    (member) => member.initials === "TR"
  );

  const topMembers = team.filter((member) =>
    ["HS", "SR"].includes(member.initials)
  );

  const bottomMembers = team.filter((member) =>
    ["RR", "MR"].includes(member.initials)
  );

  return (
    <div className="mx-auto max-w-7xl">
      {/* Top Row */}

      <div className="grid gap-8 md:grid-cols-2">
        {topMembers.map((member) => (
          <TeamCard
            key={member.id}
            member={member}
          />
        ))}
      </div>

      {/* Center */}

      {tarun && (
        <div className="my-12 flex justify-center">
          <div className="w-full max-w-xl">
            <TeamCard
              member={tarun}
              featured
            />
          </div>
        </div>
      )}

      {/* Bottom Row */}

      <div className="grid gap-8 md:grid-cols-2">
        {bottomMembers.map((member) => (
          <TeamCard
            key={member.id}
            member={member}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamGrid;