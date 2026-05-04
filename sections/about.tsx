"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { highlights, skills } from "@/constants/portfolio";

export function About() {
  return (
    <section id="about" data-gsap-section className="px-4 py-24 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="About" title="Precision, taste, and engineering range.">
        React Native developer with 1+ year of experience building cross-platform mobile
        applications for Android and iOS.
      </SectionHeading>

      <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="premium-panel p-6 sm:p-8">
          <p className="text-xl leading-9 text-zinc-200">
            I focus on scalable app architecture, high-performance optimization, pixel-perfect
            UI/UX, REST API integration, and team collaboration. I&apos;ve worked on production
            features involving maps, location tracking, push notifications, background services,
            permissions, third-party SDKs, and real-time updates.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {highlights.map((item) => (
              <div key={item.title} className="border-t border-white/10 pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-600">
                  {item.period}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-500">{item.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.article
                key={skill.name}
                data-gsap-card
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="rounded-lg border border-white/10 bg-white/[0.035] p-6"
              >
                <div className="mb-8 flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-md border border-white/10 bg-black text-white">
                    <Icon size={20} />
                  </span>
                  <span className="font-mono text-sm text-zinc-500">0{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                <div className="mt-6 h-1.5 rounded-full bg-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.value}%` }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 1, delay: index * 0.08, ease: "easeOut" }}
                    className="h-full rounded-full bg-white"
                  />
                </div>
                <p className="mt-4 font-mono text-sm text-zinc-500">{skill.value}% fluency</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
