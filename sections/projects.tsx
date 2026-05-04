"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Bell, MapPin, Radio, Smartphone } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/constants/portfolio";

const previewIcons = [MapPin, Smartphone, Radio];

export function Projects() {
  return (
    <section id="projects" data-gsap-section className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <SectionHeading eyebrow="Projects" title="Mobile products and advanced feature work.">
        Real React Native project experience across service booking, fitness workflows,
        live updates, maps, Firebase notifications, and background mobile systems.
      </SectionHeading>

      <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            data-gsap-card
            whileHover={{ y: -10, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 240, damping: 24 }}
            className="group relative overflow-hidden rounded-lg border border-white/10 bg-zinc-950 p-4 sm:p-5"
          >
            <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
              <div className="absolute inset-x-0 top-0 h-44 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.2),transparent_62%)]" />
            </div>
            <div className="relative z-10 flex h-full flex-col">
              <div className="mb-5 flex items-center justify-between gap-3">
                <span className="rounded-full border border-white/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-zinc-500">
                  {project.type}
                </span>
                {/* <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/10 text-white transition group-hover:bg-white group-hover:text-black">
                  <ArrowUpRight size={18} />
                </span> */}
              </div>

              {/* <MobileProjectPreview projectTitle={project.title} index={index} /> */}

              <p className="mt-6 font-mono text-xs text-zinc-600">0{index + 1}</p>
              <h3 className="mt-2 text-xl font-semibold tracking-tight text-white sm:text-2xl">{project.title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400 sm:text-base sm:leading-7">{project.description}</p>
              {"learnings" in project ? (
                <div className="mt-5 border-t border-white/10 pt-4">
                  <p className="mb-3 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-zinc-600">
                    What I learned
                  </p>
                  <div className="grid gap-2">
                    {project.learnings.map((item) => (
                      <span key={item} className="inline-flex items-center gap-2 text-sm leading-5 text-zinc-500">
                        <span className="h-1 w-1 rounded-full bg-zinc-600" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}
              <div className="mt-auto flex flex-wrap gap-2 pt-6">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-full bg-white/[0.07] px-3 py-1 text-[0.7rem] font-medium text-zinc-300">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function MobileProjectPreview({ projectTitle, index }: { projectTitle: string; index: number }) {
  const Icon = previewIcons[index % previewIcons.length];

  return (
    <div className="relative overflow-hidden rounded-md border border-white/10 bg-black p-4">
      <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:26px_26px]" />
      <div className="relative mx-auto w-full max-w-[13rem] rounded-[1.8rem] border border-white/15 bg-zinc-950 p-2 shadow-2xl shadow-black">
        <div className="rounded-[1.35rem] border border-white/10 bg-black p-3">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-[0.62rem] font-semibold text-zinc-500">9:41</span>
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-4 rounded-full bg-zinc-700" />
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
            <div className="flex items-center justify-between">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-white text-black">
                <Icon size={17} />
              </span>
              <Bell size={16} className="text-zinc-500" />
            </div>
            <p className="mt-4 text-sm font-semibold tracking-tight text-white">{projectTitle}</p>
            <p className="mt-1 text-[0.68rem] leading-4 text-zinc-500">React Native app flow</p>
          </div>

          <div className="mt-3 grid grid-cols-2 gap-2">
            <span className="h-14 rounded-xl border border-white/10 bg-white/[0.06]" />
            <span className="h-14 rounded-xl border border-white/10 bg-white/[0.1]" />
          </div>

          <div className="mt-3 space-y-2">
            <span className="block h-2 w-full rounded-full bg-white/15" />
            <span className="block h-2 w-3/4 rounded-full bg-white/10" />
          </div>

          <div className="mt-5 grid grid-cols-3 gap-2 border-t border-white/10 pt-3">
            <span className="h-7 rounded-full bg-white text-center text-[0.58rem] font-bold leading-7 text-black">
              UI
            </span>
            <span className="h-7 rounded-full bg-white/[0.08] text-center text-[0.58rem] font-bold leading-7 text-zinc-400">
              API
            </span>
            <span className="h-7 rounded-full bg-white/[0.08] text-center text-[0.58rem] font-bold leading-7 text-zinc-400">
              LIVE
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
