"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { siteConfig } from "@/data/portfolio";

const INTRO_LINES = ["ROUND 1.", "FIGHT."];

export default function HeroSection() {
  const [introComplete, setIntroComplete] = useState(false);
  const [lineIndex, setLineIndex] = useState(0);
  const [showHero, setShowHero] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Parallax transforms on video
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const videoRotate = useTransform(scrollYProgress, [0, 1], [0, 2]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  useEffect(() => {
    const t1 = setTimeout(() => setLineIndex(0), 300);
    const t2 = setTimeout(() => setLineIndex(1), 1000);
    const t3 = setTimeout(() => setIntroComplete(true), 1800);
    const t4 = setTimeout(() => setShowHero(true), 2000);
    return () => [t1, t2, t3, t4].forEach(clearTimeout);
  }, []);

  return (
    <section ref={heroRef} id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-deep-black">

      {/* ── Video background ── */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: videoY, scale: videoScale, rotateY: videoRotate }}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/hero-poster.jpg"
        >
          {/* Place your video in /public/hero.mp4 */}
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        {/* Multi-layer overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-deep-black/70 via-deep-black/40 to-deep-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-violet-dark/30 via-transparent to-violet-dark/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(109,40,217,0.12)_0%,transparent_70%)]" />
      </motion.div>

      {/* ── Grid overlay ── */}
      <div className="absolute inset-0 bg-grid-violet opacity-30 z-1" />

      {/* ── Animated orbs ── */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-violet-electric/10 rounded-full blur-3xl animate-float z-1" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-glow/8 rounded-full blur-3xl animate-float z-1" style={{ animationDelay: "2s" }} />

      {/* ── Intro cinematic ── */}
      <AnimatePresence>
        {!introComplete && (
          <motion.div
            className="absolute inset-0 z-20 flex items-center justify-center bg-deep-black"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={lineIndex}
                initial={{ opacity: 0, scale: 1.4, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                transition={{ duration: 0.5 }}
                className="font-display text-7xl md:text-9xl neon-violet text-violet-soft"
              >
                {INTRO_LINES[lineIndex]}
              </motion.p>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Hero content ── */}
      <AnimatePresence>
        {showHero && (
          <motion.div
            className="relative z-10 text-center px-6 max-w-6xl mx-auto"
            style={{ y: textY, opacity }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 border border-violet-electric/30 bg-violet-electric/10 backdrop-blur-sm px-4 py-2 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-violet-neon animate-pulse shadow-[0_0_8px_rgba(139,92,246,1)]" />
              <span className="font-mono text-xs text-violet-soft tracking-widest uppercase">
                {siteConfig.availableForWork ? "Disponible pour missions" : "En mission"}
              </span>
            </motion.div>

            {/* Name */}
            <div className="overflow-hidden mb-2">
              <motion.h1
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-7xl sm:text-8xl md:text-[10rem] lg:text-[12rem] leading-none tracking-tight text-gradient-violet"
              >
                {siteConfig.name.split(" ")[0].toUpperCase()}
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-8">
              <motion.h1
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-7xl sm:text-8xl md:text-[10rem] lg:text-[12rem] leading-none tracking-tight text-frost"
              >
                {(siteConfig.name.split(" ")[1] || "DESIGN").toUpperCase()}
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="font-display text-xl md:text-3xl text-silver tracking-widest mb-3"
            >
              {siteConfig.title.toUpperCase()}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1 }}
              className="font-body text-lg text-violet-soft font-light italic mb-12 max-w-xl mx-auto"
            >
              &ldquo;{siteConfig.tagline}&rdquo;
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <MagneticButton
                onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-violet"
              >
                Voir mes projets
              </MagneticButton>
              <MagneticButton
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-outline-violet"
              >
                Travailler ensemble
              </MagneticButton>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="absolute -bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-mist"
            >
              <span className="font-mono text-xs tracking-widest uppercase">Scroll</span>
              <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                <ChevronDown size={16} className="text-violet-neon" />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Corner brackets */}
      {showHero && (
        <>
          {[
            "top-8 left-8 border-t-2 border-l-2",
            "top-8 right-8 border-t-2 border-r-2",
            "bottom-8 left-8 border-b-2 border-l-2",
            "bottom-8 right-8 border-b-2 border-r-2",
          ].map((cls, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5 + i * 0.1 }}
              className={`absolute w-10 h-10 border-violet-electric/50 z-10 ${cls}`}
            />
          ))}
        </>
      )}
    </section>
  );
}

// ─── Magnetic Button ────────────────────────────────────
function MagneticButton({ children, className, onClick }: {
  children: React.ReactNode;
  className: string;
  onClick?: () => void;
}) {
  const ref = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const btn = ref.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
  };

  const handleMouseLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  };

  return (
    <button
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`${className} transition-transform duration-300`}
    >
      {children}
    </button>
  );
}
