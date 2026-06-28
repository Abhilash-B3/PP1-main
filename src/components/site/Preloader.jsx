"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import logoAsset from "@/assets/crystal-logo.jpeg";

export function Preloader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("chs_preloaded") === "1") {
      setShow(false);
      return;
    }
    const t = setTimeout(() => {
      sessionStorage.setItem("chs_preloaded", "1");
      setShow(false);
    }, 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center gradient-royal"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.35, ease: "easeInOut" } }}
        >
          <motion.div
            className="absolute inset-0"
            initial={{ y: 0 }}
            exit={{ y: "-100%", transition: { duration: 0.55, ease: [0.76, 0, 0.24, 1] } }}
            style={{
              background: "linear-gradient(135deg, var(--primary) 0%, oklch(0.28 0.14 264) 100%)",
            }}
          />

          <div className="relative flex flex-col items-center">
            <motion.img
              src={logoAsset}
              alt="Crystal House Maid Service"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="h-24 w-24 rounded-2xl bg-white object-contain p-2 shadow-elegant md:h-28 md:w-28"
            />

            <div className="mt-5 overflow-hidden">
              <motion.h1
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                className="font-display text-3xl font-bold text-primary-foreground md:text-4xl"
              >
                Crystal House
              </motion.h1>
            </div>
            <div className="mt-2 overflow-hidden">
              <motion.p
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
                className="text-xs font-semibold uppercase tracking-[0.3em] text-gold"
              >
                Trusted · Trained · Top Quality
              </motion.p>
            </div>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, ease: "easeInOut", delay: 0.2 }}
              className="mt-6 h-[2px] w-40 origin-left bg-gold/70"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
