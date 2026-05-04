"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, ArrowRight, Code2 } from "lucide-react";
import profileImage from "@/assets/iamge.jpeg";
import { Button } from "@/components/ui/button";
import { metrics, profile } from "@/constants/portfolio";

export function Hero() {
  return (
    <section
      id="home"
      data-hero
      className="relative isolate flex min-h-screen items-center overflow-hidden px-4 pb-20 pt-28 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.16),transparent_34%),linear-gradient(180deg,#050505_0%,#0a0a0a_55%,#000_100%)]" />
      <div className="absolute inset-0 -z-10 opacity-[0.18] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:72px_72px]" />

      <div
        data-parallax-orbit
        className="absolute right-[-18rem] top-24 -z-10 h-[38rem] w-[38rem] rounded-full border border-white/10 bg-[conic-gradient(from_140deg,transparent,rgba(255,255,255,0.22),transparent,rgba(255,255,255,0.08),transparent)] blur-[1px]"
      />

      <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <div
            data-hero-reveal
            className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-zinc-300"
          >
            <span className="h-2 w-2 rounded-full bg-white shadow-[0_0_18px_rgba(255,255,255,0.85)]" />
            {profile.location}
          </div>
          <h1
            data-hero-reveal
            className="max-w-4xl text-4xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            {profile.name}
            <span className="block text-zinc-500">{profile.role}</span>
          </h1>
          <p
            data-hero-reveal
            className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:mt-7 sm:text-xl sm:leading-8"
          >
            {profile.tagline}
          </p>
          <div data-hero-reveal className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="#projects">
              View Work
              <ArrowRight size={17} />
            </Button>
            <Button href="#contact" variant="secondary">
              Contact Me
            </Button>
          </div>
        </div>

        <motion.div
          data-hero-reveal
          initial={{ opacity: 1, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          className="relative"
        >
          <div className="premium-panel overflow-hidden p-5 sm:p-7">
            <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-5">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-zinc-500" />
                <span className="h-3 w-3 rounded-full bg-zinc-700" />
                <span className="h-3 w-3 rounded-full bg-zinc-300" />
              </div>
              <div className="flex items-center gap-3">
                <Image
                  src="/window.svg"
                  alt=""
                  width={18}
                  height={18}
                  className="opacity-80 invert"
                  aria-hidden="true"
                />
                <Code2 className="text-zinc-500" size={20} />
              </div>
            </div>
            <div className="relative mb-6 overflow-hidden rounded-md border border-white/10 bg-zinc-950">
              <div className="relative aspect-[4/5] sm:aspect-[5/6]">
                <Image
                  src={profileImage}
                  alt={`${profile.name}, ${profile.role}`}
                  fill
                  priority
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover object-[50%_22%] grayscale"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_48%,rgba(0,0,0,0.78)_100%)]" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-400">
                    React Native
                  </p>
                  <p className="mt-2 text-2xl font-semibold tracking-tight text-white">
                    {profile.name}
                  </p>
                </div>
              </div>
            </div>

         
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {metrics.map((metric) => (
                <div key={metric.label} className="rounded-md border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-2xl font-semibold text-white">{metric.value}</p>
                  <p className="mt-2 text-xs leading-5 text-zinc-500">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-600 transition hover:text-white md:flex"
      >
        Scroll
        <ArrowDown size={16} />
      </a>
    </section>
  );
}
