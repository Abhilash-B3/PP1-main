"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

export function PageHero({ eyebrow, title, description, children }) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-primary-soft/60">
      <motion.div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-40"
        style={{
          background:
            "radial-gradient(60% 80% at 15% 0%, color-mix(in oklab, var(--primary) 22%, transparent), transparent 60%), radial-gradient(40% 60% at 90% 100%, color-mix(in oklab, var(--gold) 25%, transparent), transparent 60%)",
        }}
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 1.2, ease: EASE }}
      />

      <motion.div
        aria-hidden
        className="absolute -top-24 right-[-10%] -z-10 h-72 w-72 rounded-full bg-gold/15 blur-3xl"
        animate={{ y: [0, 18, 0], x: [0, -10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container-page py-14 sm:py-16 md:py-20">
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.05 }}
            className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold"
          >
            {eyebrow}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: EASE, delay: 0.15 }}
          className="max-w-3xl text-3xl font-bold leading-tight text-foreground sm:text-4xl md:text-5xl"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.45 }}
            className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg"
          >
            {description}
          </motion.p>
        )}
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.6 }}
            className="mt-6"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}
