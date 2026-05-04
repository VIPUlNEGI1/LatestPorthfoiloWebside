"use client";

import { FormEvent, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Send } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { contactDetails, profile } from "@/constants/portfolio";

export function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    window.setTimeout(() => setSent(false), 3200);
  }

  return (
    <section id="contact" data-gsap-section className="px-4 py-24 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Contact" title="Let&apos;s build the sharp mobile version.">
        Reach out for React Native applications, Android/iOS features, real-time modules,
        map-based flows, Firebase notifications, or polished mobile UI work.
      </SectionHeading>

      <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-[0.8fr_1.2fr]">
        <aside className="premium-panel p-6 sm:p-8">
          <p className="text-sm uppercase tracking-[0.32em] text-zinc-600">Details</p>
          <div className="mt-6 space-y-3">
            {contactDetails.map((detail) => {
              const Icon = detail.icon;
              const content = (
                <span className="flex items-start gap-3">
                  <Icon className="mt-0.5 shrink-0 text-zinc-500" size={18} />
                  <span>
                    <span className="block text-xs uppercase tracking-[0.22em] text-zinc-600">
                      {detail.label}
                    </span>
                    <span className="mt-1 block text-sm leading-6 text-zinc-300">{detail.value}</span>
                  </span>
                </span>
              );

              return detail.href ? (
                <a
                  key={detail.label}
                  href={detail.href}
                  className="block rounded-md border border-white/10 bg-white/[0.03] p-4 transition hover:border-white/25 hover:bg-white/[0.07]"
                >
                  {content}
                </a>
              ) : (
                <div key={detail.label} className="rounded-md border border-white/10 bg-white/[0.03] p-4">
                  {content}
                </div>
              );
            })}
          </div>

          <p className="mt-8 text-sm uppercase tracking-[0.32em] text-zinc-600">Social</p>
          <div className="mt-6 space-y-3">
            {profile.socials.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.label}
                  href={social.href}
                  className="flex items-center justify-between rounded-md border border-white/10 bg-white/[0.03] p-4 text-zinc-300 transition hover:border-white/25 hover:bg-white/[0.07] hover:text-white"
                >
                  <span className="inline-flex items-center gap-3">
                    <Icon size={18} />
                    {social.label}
                  </span>
                  <span className="text-xs text-zinc-600">Open</span>
                </a>
              );
            })}
          </div>
        </aside>

        <form onSubmit={onSubmit} className="rounded-lg border border-white/10 bg-white/[0.035] p-5 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="group block">
              <span className="mb-2 block text-sm text-zinc-500">Name</span>
              <input
                required
                name="name"
                className="h-12 w-full rounded-md border border-white/10 bg-black px-4 text-white outline-none transition placeholder:text-zinc-700 focus:border-white/40"
                placeholder="Your name"
              />
            </label>
            <label className="group block">
              <span className="mb-2 block text-sm text-zinc-500">Email</span>
              <input
                required
                type="email"
                name="email"
                className="h-12 w-full rounded-md border border-white/10 bg-black px-4 text-white outline-none transition placeholder:text-zinc-700 focus:border-white/40"
                placeholder="you@example.com"
              />
            </label>
          </div>
          <label className="mt-4 block">
            <span className="mb-2 block text-sm text-zinc-500">Message</span>
            <textarea
              required
              name="message"
              rows={7}
              className="w-full resize-none rounded-md border border-white/10 bg-black px-4 py-4 text-white outline-none transition placeholder:text-zinc-700 focus:border-white/40"
              placeholder="A few lines about the project..."
            />
          </label>
          <div className="mt-5 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-black transition hover:bg-zinc-200"
            >
              Send Message
              <Send size={16} />
            </motion.button>
            <AnimatePresence>
              {sent ? (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="text-sm text-zinc-400"
                >
                  Message staged. Wire this form to your preferred backend next.
                </motion.p>
              ) : null}
            </AnimatePresence>
          </div>
        </form>
      </div>
    </section>
  );
}
