"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";

// import HeroSymbol from "@/assets/Home/Hero/hero-symbol.png";
import Earth from "@/assets/Home/Hero/earth-glow.png";

export default function Hero() {
  return (
    <section   className="relative min-h-fit
overflow-hidden mt-5" >

      {/* Content */}
      <div className=" mx-auto  w-full px-5 lg:px-10 gap-12 lg:gap-0 grid lg:grid-cols-2 ">
        {/* LEFT */}
        <div className=" z-40 order-2 lg:order-1 flex flex-col justify-between gap-6 lg:gap-8">

          <div className=" inline-flex items-center gap-2  border-[#00D4FF] bg-black px-5 py-2 text-sm text-cyan-300 backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            AI • CLOUD • WEB • MOBILE
          </div>

          <h1 className="text-5xl font-bold leading-tight text-white md:text-6xl xl:text-7xl">
            Building Intelligent
            <br /> 
            Solutions for a
            <br /> 
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-300 bg-clip-text text-transparent">
              Smarter Tomorrow
            </span>
            
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/70">
            Vontrixia Technologies delivers AI-powered digital solutions that
            transform ideas into scalable, future-ready products.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 mb-5">
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500  px-8
              py-4
              font-medium
              text-white
              transition-all
              duration-300
              hover:scale-105
            "
            >
              Explore Services
              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/portfolio"
              className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-cyan-500/20
              bg-white/5
              px-8
              py-4
              text-white
              backdrop-blur-xl
              transition
              hover:border-cyan-400
            "
            >
              <PlayCircle size={18} />
              Our Work
            </Link>
          </div>
        </div>

        {/* RIGHT */}
        <div className="  relative order-1 lg:order-2 ">
          <div className=" lg:absolute lg:left-[-15%] top-0 right-0 bottom-0 z-10 flex items-end justify-end">
          <Image
            src={Earth}
            alt="Earth Horizon"
            priority
            className="
              opacity-90
h-full
            "
          />
          </div>
        </div>
      </div>

    </section>
  );
}
