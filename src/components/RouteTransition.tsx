"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { durations, PREMIUM_EASE } from "@/lib/motion";

const transitionVariants = {
  initial: { opacity: 0.96 },
  animate: { opacity: 1 },
  exit: { opacity: 0.96 }
};

export function RouteTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: durations.page, ease: PREMIUM_EASE }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
