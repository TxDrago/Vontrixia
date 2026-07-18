"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import Logo from "@/assets/NavBar/Logo6.png";
import ResponsiveLogo from "@/assets/NavBar/Responsive_Logo.png";

import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services" },
  // { label: "Portfolio", href: "/portfolio" },
  // { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Navbar */}
      <header
        className={`
          relative
          top-0
          left-0
          right-0
          z-50
          transition-all
          duration-500
          ease-out

          ${
            scrolled
              ? `
               bg-[#050B16]/95
backdrop-blur-3xl
border-b
border-[#0450C3]/20
shadow-[0_10px_40px_rgba(4,80,195,0.15)]
              `
              : `
                bg-transparent
              `
          }
        `}
      >
        {/* Blue Shine Border */}
      <div
  className="
    absolute
    inset-x-0
    bottom-0
    h-px
    bg-gradient-to-r
    from-transparent
    via-[#00D4FF]
    to-transparent
  "
/>

<div
  className="
    absolute
    left-1/2
    bottom-0
    h-[12px]
    w-[300px]
    -translate-x-1/2
    bg-[#00D4FF]
    blur-xl
    opacity-50
  "
/>

        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <Link
            href="/"
            className="
  transition-all
  duration-300
  hover:drop-shadow-[0_0_25px_rgba(4,80,195,0.7)]
"
          >
            <Image
              src={Logo}
              alt="Vontrixia Technologies"
              width={180}
              height={60}
              priority
              className="hidden lg:block"
            />

            <Image
              src={ResponsiveLogo}
              alt="Vontrixia Technologies"
              width={50}
              height={50}
              priority
              className="lg:hidden"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="
                  group
                  relative
                  text-sm
                  font-medium
                  text-white/80
                  transition-all
                  duration-300
                 hover:text-[#0450C3]
                "
              >
                {item.label}

                <span
                  className="
                    absolute
                    -bottom-2
                    left-0
                    h-[2px]
                    w-0
                    bg-gradient-to-r
from-[#0450C3]
to-[#00D4FF]
                    transition-all
                    duration-300
                    group-hover:w-full
                    shadow-[0_0_12px_rgba(4,80,195,0.9)]
                  "
                />
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center">
            <button
              className="
                group
                flex
                items-center
                gap-2
                rounded-full
                bg-gradient-to-r
                from-[#0450C3] to-[#00D4FF]
                px-6
                py-3
                text-sm
                font-medium
                text-white
                shadow-lg
                shadow-cyan-500/30
                transition-all
                duration-300
                hover:scale-105
              "
            >
              Get Started
              <ArrowRight
                size={16}
                className="transition group-hover:translate-x-1"
              />
            </button>
          </div>

          {/* Mobile Menu */}
          <button onClick={() => setOpen(true)} className="lg:hidden">
            <Menu size={30} className="text-white" />
          </button>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-[60] transition-all duration-300 ${
          open ? "visible bg-black/70 backdrop-blur-sm" : "invisible opacity-0"
        }`}
      >
        {/* Mobile Sidebar */}
        <div
          onClick={(e) => e.stopPropagation()}
          className={`
            absolute
            right-0
            top-0
            h-full
            w-full
            bg-[#050B16]/95
            backdrop-blur-3xl
            border-l
            border-[#0450C3]/20
            transition-transform
            duration-300
            ${open ? "translate-x-0" : "translate-x-full"}
          `}
        >
          {/* Glow */}
          <div className="absolute bottom-0 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />

          {/* Header */}
          <div className="flex items-center justify-between p-6">
            <Image src={Logo} alt="Vontrixia" width={180} height={60} />

            <button
              onClick={() => setOpen(false)}
              className="rounded-full p-2 hover:bg-white/10"
            >
              <X size={28} className="text-white" />
            </button>
          </div>

          {/* Menu */}
          <nav className="mt-10 flex flex-col items-center">
            {navLinks.map((item, index) => (
              <div
                key={item.label}
                className="flex w-full flex-col items-center"
              >
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="
                    group
                    relative
                    py-5
                    text-xl
                    font-medium
                    text-white/80
                    transition-all
                    duration-300
               hover:text-[#0450C3]
                  "
                >
                  <span className="absolute inset-0 rounded-xl bg-cyan-500/10 opacity-0 blur-md transition-all duration-300 group-hover:opacity-100" />

                  <span className="relative z-10 group-hover:tracking-[0.15em]">
                    {item.label}
                  </span>

                  <span
                    className="absolute bottom-2 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-gradient-to-r from-[#0450C3]
via-[#00D4FF]
to-[#0450C3] transition-all duration-300 group-hover:w-full shadow-[0_0_12px_rgba(4,80,195,0.9)]"
                  />
                </Link>

                {index !== navLinks.length - 1 && (
                  <div
                    className="
                      h-px
                      w-3/4
                      bg-gradient-to-r
                      from-transparent
                      via-cyan-400
                      to-transparent
                      opacity-70
                    "
                  />
                )}
              </div>
            ))}
          </nav>

          {/* CTA */}
          <div className="mt-12 flex justify-center">
            <button
              className="
                w-3/4
                rounded-full
                bg-gradient-to-r
                from-[#0450C3] to-[#00D4FF]
                py-3
                font-medium
                text-white
                shadow-lg
                shadow-cyan-500/30
                transition-all
                duration-300
              hover:scale-105
hover:shadow-[0_0_30px_rgba(0,212,255,0.5)]
              "
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
