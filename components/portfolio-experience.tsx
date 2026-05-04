"use client";

import { motion } from "framer-motion";
import { CustomCursor } from "@/components/custom-cursor";
import { ScrollProgress } from "@/components/scroll-progress";
import { useGsapPortfolio } from "@/hooks/use-gsap-portfolio";
import { About } from "@/sections/about";
import { Contact } from "@/sections/contact";
import { Header } from "@/sections/header";
import { Hero } from "@/sections/hero";
import { Projects } from "@/sections/projects";
import { Resume } from "@/sections/resume";

export function PortfolioExperience() {
  useGsapPortfolio();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen overflow-x-hidden bg-black text-white"
    >
      <ScrollProgress />
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <About />
        <Resume />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-white/10 px-4 py-8 text-center text-sm text-zinc-600 sm:px-6">
        <p>Designed and built with Next.js, GSAP, Framer Motion, and a low tolerance for ordinary.</p>
      </footer>
    </motion.div>
  );
}
