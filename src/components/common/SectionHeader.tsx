"use client";

import { FadeUp } from "@/components/common/motion";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  highlight?: string;
  description: string;
  note?: string;
  align?: "left" | "center";
}

const SectionHeader = ({
  badge,
  title,
  highlight,
  description,
  note,
  align = "center",
}: SectionHeaderProps) => {
  const alignment =
    align === "left"
      ? "items-start text-left"
      : "items-center text-center";

  return (
    <FadeUp>
      <div className={`mx-auto flex max-w-4xl flex-col ${alignment}`}>
        {badge && (
          <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-sm font-medium text-cyan-300 backdrop-blur-xl">
            {badge}
          </span>
        )}

        <h2 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
          {title}

          {highlight && (
            <>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                {highlight}
              </span>
            </>
          )}
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          {description}
        </p>

        {note && (
          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm leading-7 text-slate-300 backdrop-blur-xl">
            {note}
          </div>
        )}
      </div>
    </FadeUp>
  );
};

export default SectionHeader;