"use client";

import { motion } from "framer-motion";
import { fadeUp, fadeUpFast, staggerContainer, scaleYReveal, viewportConfig } from "@/lib/motion";

export function VisionPurposeFlow() {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className="relative overflow-hidden rounded-2xl border border-[color:var(--rule)] bg-paper/80 p-7 shadow-[0_20px_45px_rgba(11,27,59,0.18)] backdrop-blur-sm"
    >
      <h3 className="mb-6 text-3xl font-semibold text-ink">
        Vision & Purpose
      </h3>

      <motion.div
        variants={staggerContainer(0.12)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="space-y-5"
      >
        <motion.div
          variants={fadeUpFast}
          className="rounded-xl bg-[rgba(139,70,83,0.08)] p-6"
        >
          <p className="mb-2 text-xs uppercase tracking-[0.38em] text-muted">
            Our Big Picture
          </p>
          <p className="text-base leading-relaxed text-muted">
            To uphold our decades of legacy of trust and professional excellence, embracing the future with a steadfast commitment to integrity and quality in service.
          </p>
        </motion.div>

        <div className="flex justify-center">
          <motion.div
            variants={scaleYReveal}
            className="h-7 w-px origin-top bg-[color:var(--gold)] opacity-40"
          />
        </div>

        <motion.div
          variants={fadeUpFast}
          className="rounded-xl bg-[rgba(123,139,122,0.08)] p-6"
        >
          <p className="mb-2 text-xs uppercase tracking-[0.38em] text-muted">
            Purpose in Action
          </p>
          <p className="text-base leading-relaxed text-muted">
            To honor our legacy by upholding professional integrity and delivering ethical, insightful, and precise financial solutions that drive client success, while cultivating excellence and empowerment.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
