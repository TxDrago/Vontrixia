"use client";

import SectionHeader from "@/components/common/SectionHeader";
import TeamGrid from "@/components/about/TeamGrid";

import {
  FadeUp,
} from "@/components/common/motion";

import { team } from "@/data/team";

const MeetTheTeam = () => {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background Glow */}

      <div className="absolute left-0 top-24 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-[30rem] w-[30rem] rounded-full bg-violet-500/10 blur-[140px]" />

      {/* Background Grid */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)]
          [background-size:48px_48px]
        "
      />

      <div className="container relative z-10 mx-auto px-6">
        <SectionHeader
          badge="Leadership"
          title="The People Behind"
          highlight="Vontrixia"
          description="Different backgrounds. One shared vision. Together, we're building technology that empowers businesses, creates meaningful impact, and grows through lasting partnerships."
        />

        <FadeUp>
          <div className="mt-20">
            <TeamGrid team={team} />
          </div>
        </FadeUp>

        {/* Closing Message */}

        <div className="mx-auto mt-24 max-w-4xl text-center">
          <p
            className="
              text-2xl
              font-light
              italic
              leading-relaxed
              text-white
              lg:text-3xl
            "
          >
            "Great companies aren't built by one person.
            <br />
            They're built by people who believe in the same vision."
          </p>

          <p
            className="
              mt-8
              text-sm
              font-semibold
              uppercase
              tracking-[0.35em]
              text-cyan-300
            "
          >
            — Team Vontrixia
          </p>
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;