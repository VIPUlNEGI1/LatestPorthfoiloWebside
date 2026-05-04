import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  children?: ReactNode;
};

export function SectionHeading({ eyebrow, title, children }: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-10 grid max-w-6xl gap-4 md:mb-12 md:grid-cols-[0.8fr_1.2fr] md:items-end">
      <div>
        <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-zinc-500 sm:mb-4 sm:text-xs sm:tracking-[0.34em]">
          {eyebrow}
        </p>
        <h2 className="text-2xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </div>
      {children ? <p className="max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">{children}</p> : null}
    </div>
  );
}
