"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { siteConfig } from "@/data/portfolio";

const INTRO_LINES = ["ROUND 1.", "FIGHT."];

export default function HeroSection() {
  const [introComplete, setIntroComplete] = useState(false);
  const [lineIndex, setLineIndex] = useState(0);
  const [showHero, setShowHero] = useState(false);

  useEffect(() => {
    // Intro sequence
    const timers: NodeJS.Timeout[] = [];

    timers.push(setTimeout(() => setLineIndex(0), 300));
    timers.push(setTimeout(() => setLineIndex(1), 1000));
    timers.push(setTimeout(() => setIntroComplete(true), 1800));
    timers.push(setTimeout(() => setShowHero(true), 2000));

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-night-blue"
    >
      {/* Ring grid background */}
      <div className="absolute inset-0 bg-ring-grid opacity-60" />

      {/* Skyline gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-night-blue to-transparent" />

      {/* Red corner light */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-ring-red/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-ring-red/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      {/* Rope lines (ring aesthetic) */}
      <div className="absolute left-0 top-1/3 right-0 h-px bg-gradient-to-r from-ring-red/0 via-ring-red/20 to-ring-red/0" />
      <div className="absolute left-0 top-2/3 right-0 h-px bg-gradient-to-r from-ring-red/0 via-ring-red/20 to-ring-red/0" />

      {/* Intro cinematic */}
      <AnimatePresence>
        {!introComplete && (
          <motion.div
            className="absolute inset-0 z-20 flex items-center justify-center bg-night-blue"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={lineIndex}
                initial={{ opacity: 0, scale: 1.3 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="font-display text-7xl md:text-9xl text-ring-red neon-red"
              >
                {INTRO_LINES[lineIndex]}
              </motion.p>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Content */}
      <AnimatePresence>
        {showHero && (
          <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 border border-ring-red/30 bg-ring-red/10 px-4 py-2 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-ring-red animate-pulse" />
              <span className="font-mono text-xs text-ring-red tracking-widest uppercase">
                {siteConfig.availableForWork ? "Disponible pour missions" : "En mission"}
              </span>
            </motion.div>

            {/* Main title */}
            <div className="overflow-hidden mb-4">
              <motion.h1
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-7xl sm:text-8xl md:text-[10rem] lg:text-[12rem] leading-none tracking-tight"
              >
                <span className="text-gradient-red">{siteConfig.name.split(" ")[0].toUpperCase()}</span>
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-8">
              <motion.h1
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-7xl sm:text-8xl md:text-[10rem] lg:text-[12rem] leading-none tracking-tight text-neon-white"
              >
                {(siteConfig.name.split(" ")[1] || "DESIGN").toUpperCase()}
              </motion.h1>
            </div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="font-display text-xl md:text-3xl text-steel-light tracking-widest mb-4"
            >
              {siteConfig.title.toUpperCase()}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1 }}
              className="font-body text-lg md:text-xl text-ring-red font-light italic mb-12 max-w-xl mx-auto"
            >
              &ldquo;{siteConfig.tagline}&rdquo;
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button
                onClick={() => {
                  document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-primary text-sm tracking-widest"
              >
                Voir mes projets
              </button>
              <button
                onClick={() => {
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-outline text-sm tracking-widest"
              >
                Travailler ensemble
              </button>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-steel"
            >
              <span className="font-mono text-xs tracking-widest uppercase">Scroll</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <ChevronDown size={16} className="text-ring-red" />
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Corner brackets */}
      {showHero && (
        <>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.4 }}
            className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-ring-red/50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.6, duration: 0.4 }}
            className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-ring-red/50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.7, duration: 0.4 }}
            className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2 border-ring-red/50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.8, duration: 0.4 }}
            className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-ring-red/50"
          />
        </>
      )}
    </section>
  );
}
