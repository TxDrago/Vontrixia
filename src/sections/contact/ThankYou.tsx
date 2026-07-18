"use client";

import SectionHeader from "@/components/common/SectionHeader";
import ValueGrid from "@/components/contact/ValueGrid";

import { values } from "@/data/values";

const ThankYou = () => {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background Glow */}

      <div className="absolute left-0 top-1/4 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-violet-500/10 blur-[140px]" />

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
          badge="Thank You"
          title="Thank You for"
          highlight="Considering Vontrixia"
          description="Whether you're planning your next digital product, exploring AI-powered solutions, or simply researching the right technology partner, we genuinely appreciate your time and interest."
        />

        <div className="mt-20">
          <ValueGrid values={values} />
        </div>

        {/* Closing Message */}

        <div
          className="
            mx-auto
            mt-20
            max-w-5xl
            rounded-3xl
            border
            border-white/10
            bg-white/5
            p-10
            text-center
            backdrop-blur-xl
          "
        >
          <h3 className="text-3xl font-bold text-white">
            Every Great Partnership Begins With Trust
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            At{" "}
            <span className="font-semibold text-white">
              Vontrixia Technologies
            </span>
            , we don't just build software—we build long-term relationships.
            Every conversation matters, every project is unique, and every
            solution is crafted with care, innovation, and a commitment to your
            success.
          </p>

          <div
            className="
              mx-auto
              my-10
              h-px
              w-40
              bg-gradient-to-r
              from-transparent
              via-cyan-400
              to-transparent
            "
          />

          <blockquote
            className="
              mx-auto
              max-w-3xl
              text-xl
              italic
              leading-9
              text-slate-300
            "
          >
            “We believe the best technology isn't measured by lines of code—it's
            measured by the value it creates, the problems it solves, and the
            relationships it builds..”
          </blockquote>

          <p className="mt-8 font-semibold tracking-wide text-cyan-300">
            — Team Vontrixia
          </p>
        </div>
      </div>
    </section>
  );
};

export default ThankYou;
