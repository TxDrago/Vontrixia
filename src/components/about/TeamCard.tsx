"use client";

import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

import { HoverLift } from "@/components/common/motion";

import { TeamMember } from "@/data/team";

interface TeamCardProps {
  member: TeamMember;
  featured?: boolean;
}

const TeamCard = ({
  member,
  featured = false,
}: TeamCardProps) => {
  return (
    <HoverLift>
      <div
        className={`
          group
          relative
          h-full
          overflow-hidden
          rounded-3xl
          border
          border-white/10
          bg-white/5
          p-8
          backdrop-blur-xl
          transition-all
          duration-500
          hover:border-cyan-400/40
          hover:bg-white/[0.07]

          ${featured ? "lg:p-10" : ""}
        `}
      >
        {/* Aurora Glow */}

        <div
          className="
            absolute
            inset-0
            opacity-0
            transition-opacity
            duration-500
            group-hover:opacity-100
            bg-gradient-to-br
            from-cyan-500/10
            via-transparent
            to-violet-500/10
          "
        />

        <div className="relative z-10 flex flex-col items-center text-center">
          {/* Avatar */}

          {member.image ? (
            <Image
              src={member.image}
              alt={member.name}
              width={featured ? 130 : 110}
              height={featured ? 130 : 110}
              className="
                rounded-full
                object-cover
                ring-4
                ring-cyan-500/20
              "
            />
          ) : (
            <div
              className={`
                flex
                items-center
                justify-center
                rounded-full
                bg-gradient-to-br
                from-cyan-500
                via-blue-500
                to-violet-600
                font-black
                text-white
                shadow-lg
                shadow-cyan-500/20
                transition-transform
                duration-500
                group-hover:scale-110

                ${
                  featured
                    ? "h-32 w-32 text-4xl"
                    : "h-28 w-28 text-3xl"
                }
              `}
            >
              {member.initials}
            </div>
          )}

          {/* Name */}

          <h3
            className={`
              mt-8
              font-bold
              text-white

              ${
                featured
                  ? "text-3xl"
                  : "text-2xl"
              }
            `}
          >
            {member.name}
          </h3>

          {/* Designation */}

          <p
            className="
              mt-3
              rounded-full
              border
              border-cyan-500/20
              bg-cyan-500/10
              px-4
              py-2
              text-sm
              font-semibold
              tracking-wide
              text-cyan-300
            "
          >
            {member.designation}
          </p>

          {/* Bio */}

          <p
            className="
              mt-6
              leading-8
              text-slate-400
            "
          >
            {member.bio}
          </p>

          {/* Quote */}

          {member.quote && (
            <blockquote
              className="
                mt-8
                border-t
                border-white/10
                pt-6
                italic
                text-slate-300
              "
            >
              "{member.quote}"
            </blockquote>
          )}

          {/* LinkedIn */}

          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-8
                inline-flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/5
                transition-all
                duration-300
                hover:border-cyan-400
                hover:bg-cyan-500/10
                hover:text-cyan-300
              "
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
    </HoverLift>
  );
};

export default TeamCard;