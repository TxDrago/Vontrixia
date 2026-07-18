"use client";

import {
  ArrowRight,
  CheckCircle2,
  XCircle,
  Brain,
  ShieldCheck,
  Rocket,
  Users,
  Sparkles,
  HeartHandshake,
} from "lucide-react";

import Link from "next/link";

import {
  FadeUp,
  HoverScale,
} from "@/components/common/motion";

const comparisons = [
  {
    other: "Delivers software features",
    us: "Builds measurable business value",
  },
  {
    other: "Works only on requirements",
    us: "Understands your business vision",
  },
  {
    other: "One-size-fits-all solutions",
    us: "Tailor-made digital products",
  },
  {
    other: "Project ends after delivery",
    us: "Long-term technology partnership",
  },
  {
    other: "Limited communication",
    us: "Transparent collaboration",
  },
  {
    other: "Builds for today",
    us: "Builds for the future",
  },
];

const principles = [
  {
    icon: Brain,
    title: "Strategy Before Development",
    description:
      "Every successful product begins with understanding your business, users, and long-term goals before writing a single line of code.",
  },
  {
    icon: ShieldCheck,
    title: "Security by Design",
    description:
      "Security isn't an afterthought. We build secure systems from day one using modern engineering practices.",
  },
  {
    icon: Rocket,
    title: "Built to Scale",
    description:
      "Whether you're launching a startup or running an enterprise, our architecture grows with your business.",
  },
  {
    icon: Users,
    title: "Transparent Collaboration",
    description:
      "We become an extension of your team through open communication, regular updates, and complete transparency.",
  },
  {
    icon: Sparkles,
    title: "Modern Technology",
    description:
      "We select technologies that solve real business problems—not simply because they're trending.",
  },
  {
    icon: HeartHandshake,
    title: "Long-Term Partnership",
    description:
      "Our commitment continues long after launch through maintenance, improvements, and ongoing support.",
  },
];

export default function WhatMakesVontrixiaDifferent() {
  return (
    <section className="relative overflow-hidden py-28">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="absolute right-0 bottom-0 h-[30rem] w-[30rem] rounded-full bg-violet-500/10 blur-[160px]" />

        <div
          className="
            absolute
            inset-0
            opacity-[0.03]
            [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)]
            [background-size:48px_48px]
          "
        />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-6">

        {/* Heading */}

        <FadeUp>

          <div className="mx-auto max-w-4xl text-center">

            <span
              className="
                inline-flex
                rounded-full
                border
                border-cyan-500/30
                bg-cyan-500/10
                px-5
                py-2
                text-xs
                font-bold
                uppercase
                tracking-[0.35em]
                text-cyan-300
              "
            >
              Why Clients Stay With Us
            </span>

            <h2 className="mt-8 text-5xl font-black leading-tight text-white lg:text-6xl">
              What Makes
              <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                {" "}
                Vontrixia Different
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
              Choosing a technology partner is one of the most important
              business decisions you'll make. Here's what sets our approach
              apart.
            </p>

          </div>

        </FadeUp>

        {/* Comparison */}

        <FadeUp>

          <div className="mt-20 overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl">

            <div className="grid grid-cols-2 border-b border-white/10">

              <div className="p-6 text-center text-lg font-bold text-slate-400">
                Typical Project Delivery
              </div>

              <div className="border-l border-white/10 bg-cyan-500/10 p-6 text-center text-lg font-bold text-cyan-300">
                The Vontrixia Way
              </div>

            </div>

            {comparisons.map((item) => (
              <div
                key={item.other}
                className="grid grid-cols-2 border-b border-white/5 last:border-none"
              >
                <div className="flex items-center gap-3 p-6 text-slate-400">

                  <XCircle className="h-5 w-5 text-red-400" />

                  {item.other}

                </div>

                <div className="flex items-center gap-3 border-l border-white/10 p-6 font-medium text-white">

                  <CheckCircle2 className="h-5 w-5 text-cyan-400" />

                  {item.us}

                </div>

              </div>
            ))}

          </div>

        </FadeUp>

        {/* Quote */}

        <FadeUp>

          <div className="mx-auto mt-24 max-w-4xl text-center">

            <h3 className="text-4xl font-black leading-tight text-white">

              We don't believe software should simply work.

            </h3>

            <p className="mt-8 text-xl leading-9 text-slate-400">

              We believe software should create opportunities,
              remove complexity,
              and help businesses grow with confidence.

            </p>

          </div>

        </FadeUp>

        {/* Principles */}

        <div className="mt-24 space-y-10">

          {principles.map((item) => {

            const Icon = item.icon;

            return (
              <FadeUp key={item.title}>

                <div className="flex gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-cyan-500/10">

                    <Icon className="h-8 w-8 text-cyan-400" />

                  </div>

                  <div>

                    <h4 className="text-2xl font-bold text-white">
                      {item.title}
                    </h4>

                    <p className="mt-3 leading-8 text-slate-400">
                      {item.description}
                    </p>

                  </div>

                </div>

              </FadeUp>
            );

          })}

        </div>

        {/* Closing */}

        <FadeUp>

          <div className="mt-24 rounded-[2rem] border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 p-12 text-center">

            <h3 className="text-4xl font-black text-white">

              Technology changes every day.

            </h3>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">

              Our commitment to quality, innovation, transparency,
              and long-term partnerships never will.

            </p>

            <HoverScale>

              <Link
                href="/contact"
                className="
                  mt-10
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-gradient-to-r
                  from-cyan-500
                  to-violet-500
                  px-8
                  py-4
                  font-semibold
                  text-white
                "
              >
                Let's Build Together

                <ArrowRight className="h-5 w-5" />

              </Link>

            </HoverScale>

          </div>

        </FadeUp>

      </div>

    </section>
  );
}