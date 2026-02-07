"use client";

import Image from "next/image";
import { forwardRef } from "react";
import { motion } from "framer-motion";
import { sectorsData } from "@/content/sectors";
import {
  fadeUp,
  fadeUpFast,
  durations,
  PREMIUM_EASE,
  useInViewReplay
} from "@/lib/motion";

type SectorsSectionProps = {
  id?: string;
  sectionLabel?: string;
};

export const SectorsSection = forwardRef<HTMLElement, SectorsSectionProps>(
  ({ id, sectionLabel }, ref) => {
    const sectionReveal = useInViewReplay({ amount: 0.3 });
    const gridReveal = useInViewReplay({ amount: 0.15 });

    return (
      <section
        ref={ref}
        id={id}
        aria-label={sectionLabel}
        className="relative isolate min-h-screen w-screen bg-paper lg:h-screen lg:overflow-hidden"
      >
        {sectionLabel ? <span className="sr-only">{sectionLabel}</span> : null}

        <div className="relative z-10 mx-auto flex w-full max-w-[1180px] flex-col px-6 section-shell lg:h-full">
          <div className="flex flex-col lg:h-full">
            <motion.h2
              variants={fadeUp}
              {...sectionReveal}
              className="text-center text-[clamp(2rem,3.5vw,3rem)] font-semibold uppercase tracking-[0.08em] text-ink"
            >
              We Serve
            </motion.h2>

            <div className="mt-[clamp(1.5rem,4vh,3rem)] flex flex-1 items-start">
              <div className="grid w-full grid-cols-2 gap-x-[clamp(1rem,2.5vw,2rem)] gap-y-[clamp(1.5rem,3.5vh,2.5rem)] sm:grid-cols-3 lg:grid-cols-6">
                {sectorsData.map((sector, index) => (
                  <motion.div
                    key={sector.id}
                    variants={fadeUpFast}
                    {...gridReveal}
                    transition={{
                      duration: durations.entryFast,
                      delay: index * 0.04,
                      ease: PREMIUM_EASE
                    }}
                    className="group flex flex-col items-center text-center"
                  >
                    <div className="flex h-[clamp(48px,8vh,80px)] w-[clamp(48px,8vh,80px)] items-center justify-center overflow-hidden rounded-lg transition-transform duration-300 ease-out group-hover:scale-105">
                      <Image
                        src={`/images/sectors/${sector.id}.jpg`}
                        alt={`${sector.name} logo`}
                        width={80}
                        height={80}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <p className="mt-[clamp(0.4rem,1vh,0.75rem)] text-[clamp(0.72rem,0.85vw,0.85rem)] font-medium leading-snug text-ink/80">
                      {sector.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
);

SectorsSection.displayName = "SectorsSection";
