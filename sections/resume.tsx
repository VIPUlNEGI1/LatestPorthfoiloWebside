"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { advancedLearnings, education, experience, tools } from "@/constants/portfolio";

export function Resume() {
  return (
    <section id="experience" data-gsap-section className="px-4 py-24 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Experience" title="React Native work, education, and mobile depth.">
        Real resume data presented as a sharp portfolio section: professional roles, education,
        daily tools, and the advanced mobile systems learned through production work.
      </SectionHeading>

      <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-5">
          {experience.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={`${item.company}-${item.period}`}
                data-gsap-card
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 260, damping: 24 }}
                className="rounded-lg border border-white/10 bg-white/[0.035] p-6 sm:p-7"
              >
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="font-mono text-sm text-zinc-600">0{index + 1}</p>
                    <h3 className="mt-3 text-2xl font-semibold text-white">{item.role}</h3>
                    <p className="mt-2 text-zinc-400">{item.company}</p>
                  </div>
                  <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black px-4 py-2 text-sm text-zinc-400">
                    <Icon size={16} />
                    {item.period}
                  </div>
                </div>
                <ul className="mt-6 grid gap-3 text-sm leading-6 text-zinc-400 sm:grid-cols-2">
                  {item.points.map((point) => (
                    <li key={point} className="rounded-md border border-white/10 bg-black/40 p-4">
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>

        <aside className="space-y-5">
          <div className="premium-panel p-6">
            <p className="text-sm uppercase tracking-[0.32em] text-zinc-600">Education</p>
            <div className="mt-6 space-y-4">
              {education.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={`${item.degree}-${item.period}`} className="border-t border-white/10 pt-4">
                    <div className="mb-3 flex items-center justify-between gap-4">
                      <Icon className="text-zinc-500" size={18} />
                      <span className="font-mono text-xs text-zinc-600">{item.period}</span>
                    </div>
                    <h3 className="font-semibold text-white">{item.degree}</h3>
                    <p className="mt-2 text-sm leading-6 text-zinc-500">{item.school}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/[0.035] p-6">
            <p className="text-sm uppercase tracking-[0.32em] text-zinc-600">Tools</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span key={tool} className="rounded-full bg-white/[0.07] px-3 py-1.5 text-sm text-zinc-300">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </div>

      <div className="mx-auto mt-5 grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-3">
        {advancedLearnings.map((item) => {
          const Icon = item.icon;

          return (
            <motion.article
              key={item.title}
              data-gsap-card
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="rounded-lg border border-white/10 bg-zinc-950 p-6"
            >
              <span className="grid h-11 w-11 place-items-center rounded-md border border-white/10 bg-black text-white">
                <Icon size={20} />
              </span>
              <h3 className="mt-6 text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-500">{item.body}</p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
