import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/utils/cn";

type ButtonProps = ComponentPropsWithoutRef<"a"> & {
  variant?: "primary" | "secondary";
};

export function Button({ className, variant = "primary", ...props }: ButtonProps) {
  return (
    <a
      className={cn(
        "group inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-white/40 focus:ring-offset-2 focus:ring-offset-black",
        variant === "primary"
          ? "bg-white text-black hover:bg-zinc-200"
          : "border border-white/15 bg-white/5 text-white hover:border-white/35 hover:bg-white/10",
        className,
      )}
      {...props}
    />
  );
}
