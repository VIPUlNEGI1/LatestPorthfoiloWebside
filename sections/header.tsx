"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { navItems, profile } from "@/constants/portfolio";

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed left-0 right-0 top-4 z-40 px-4 sm:top-6"
    >
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between rounded-full border border-white/10 bg-black/55 px-4 shadow-2xl shadow-black/30 backdrop-blur-xl sm:px-6">
        <a href="#home" className="text-sm font-semibold tracking-tight text-white">
          {profile.name}
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-zinc-400 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-zinc-200"
        >
          Let&apos;s Talk
          <ArrowUpRight size={16} />
        </a>
      </nav>
    </motion.header>
  );
}
