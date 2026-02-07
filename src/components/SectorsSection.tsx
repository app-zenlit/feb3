"use client";

import Image from "next/image";
import { forwardRef } from "react";
import { motion } from "framer-motion";
import { sectorsData } from "@/content/sectors";
import {
  fadeUp,
  fadeLeft,
  fadeRight,
  stagger,
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
    const sectionReveal = useInViewReplay({ amount: 0.6 });
    const sectionRevealPartial = useInViewReplay({ amount: 0.35 });

    return (
      <section
        ref={ref}
        id={id}
        aria-label={sectionLabel}
        className="relative isolate min-h-screen w-screen bg-paper lg:h-screen lg:overflow-hidden"
      >
        {sectionLabel ? <span className="sr-only">{sectionLabel}</span> : null}

        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-white/85" />

        <div className="relative z-10 mx-auto flex w-full max-w-[1180px] flex-col px-6 pb-24 section-shell lg:h-full lg:pb-0">
          <div className="space-y-[clamp(0.5rem,1.5vh,1rem)]">
            <div className="max-w-3xl space-y-[clamp(0.5rem,1.4vh,1rem)]">
              <motion.div
                variants={fadeUp}
                {...sectionReveal}
                className="flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.42em] text-muted/70"
              >
                <span className="inline-block h-px w-8 bg-[color:var(--gold)]" aria-hidden />
                Industry Expertise
              </motion.div>
              <motion.h2
                variants={fadeUp}
                {...sectionReveal}
                className="text-[clamp(2rem,3.5vw,3rem)] font-semibold text-ink"
              >
                Sectors We Service
              </motion.h2>
              <motion.p
                variants={fadeUp}
                {...sectionReveal}
                className="text-[clamp(0.98rem,1.25vw,1.2rem)] leading-relaxed text-muted"
              >
                Deep domain knowledge across diverse industries, enabling us to
                deliver tailored financial solutions that address sector-specific
                challenges and opportunities.
              </motion.p>
            </div>

            <div className="flex-1 mt-[clamp(0.5rem,1vh,0.75rem)]">
              <div className="grid auto-rows-fr grid-cols-1 gap-[clamp(0.75rem,1.8vw,1.25rem)] sm:grid-cols-2 lg:grid-cols-3">
                {sectorsData.map((sector, index) => {
                  const isOdd = index % 2 === 0;
                  return (
                    <motion.div
                      key={sector.id}
                      variants={isOdd ? fadeLeft : fadeRight}
                      {...sectionRevealPartial}
                      transition={{
                        duration: durations.entry,
                        delay: index * stagger.relaxed,
                        ease: PREMIUM_EASE
                      }}
                      className="group relative flex min-h-[clamp(90px,12vh,120px)] flex-col justify-center overflow-hidden rounded-xl border border-[color:var(--rule)] bg-ink/[0.03] p-[clamp(0.75rem,1.6vw,1.25rem)] shadow-[0_8px_24px_rgba(11,27,59,0.08)] transition-all duration-300 ease-out hover:border-[color:var(--gold)] hover:shadow-[0_16px_40px_rgba(11,27,59,0.14)]"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-[rgba(176,141,87,0.04)] to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                      <div className="relative">
                        <h3 className="text-[clamp(0.95rem,1.2vw,1.1rem)] font-semibold text-ink">
                          {sector.name}
                        </h3>
                        <p className="mt-1.5 text-[clamp(0.78rem,0.95vw,0.88rem)] leading-relaxed text-muted/80">
                          {sector.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
);

SectorsSection.displayName = "SectorsSection";
