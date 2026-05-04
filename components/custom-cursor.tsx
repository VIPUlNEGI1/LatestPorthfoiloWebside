"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 420, damping: 34 });
  const springY = useSpring(cursorY, { stiffness: 420, damping: 34 });

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      const finePointer = window.matchMedia("(pointer: fine)").matches;
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (!finePointer || reduceMotion) {
        return;
      }

      setVisible(true);
      cursorX.set(event.clientX - 12);
      cursorY.set(event.clientY - 12);
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [cursorX, cursorY]);

  if (!visible) {
    return null;
  }

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-50 hidden h-6 w-6 rounded-full border border-white/45 mix-blend-difference md:block"
      style={{ x: springX, y: springY }}
    />
  );
}
