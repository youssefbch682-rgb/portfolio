"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { siteConfig } from "@/data/portfolio";

const INTRO_LINES = ["ROUND 1.", "FIGHT."];

interface HeroParticle {
  id: number;
  left: number;
  top: number;
  size: number;
  duration: number;
  delay: number;
}

export default function HeroSection() {
  const [introComplete, setIntroComplete] = useState(false);
  const [lineIndex, setLineIndex] = useState(0);
  const [showHero, setShowHero] = useState(false);
  const [particles, setParticles] = useState<HeroParticle[]>([]);

  const heroRef = useRef<HTMLDivElement>(null);
  const videoLayerRef = useRef<HTMLDivElement>(null);
  const smokeLayerRef = useRef<HTMLDivElement>(null);
  const particlesLayerRef = useRef<HTMLDivElement>(null);
  const textLayerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Séquence d'intro cinématique
  useEffect(() => {
    const t1 = setTimeout(() => setLineIndex(0), 300);
    const t2 = setTimeout(() => setLineIndex(1), 1000);
    const t3 = setTimeout(() => setIntroComplete(true), 1800);
    const t4 = setTimeout(() => setShowHero(true), 2000);
    return () => [t1, t2, t3, t4].forEach(clearTimeout);
  }, []);

  // Génère les particules côté client uniquement (évite tout mismatch d'hydratation lié à Math.random)
  useEffect(() => {
    const count = window.innerWidth < 768 ? 8 : 16;
    setParticles(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 2 + 1.5,
        duration: Math.random() * 5 + 6,
        delay: Math.random() * 5,
      }))
    );
  }, []);

  // Parallax scroll : GSAP + ScrollTrigger, synchronisé avec Lenis (voir SmoothScrollProvider)
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    let ctx: { revert: () => void } | undefined;

    (async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      gsap.registerPlugin(ScrollTrigger);

      if (!heroRef.current) return;

      const gsapCtx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
          defaults: { ease: "none" },
        });

        // Couche vidéo : avance très légère + léger zoom + rotation subtile (2-4°)
        tl.to(videoLayerRef.current, { yPercent: 10, scale: 1.1, rotateY: 3 }, 0)
          // Couche fumée : vitesse différente pour créer la profondeur
          .to(smokeLayerRef.current, { yPercent: 22 }, 0)
          // Couche particules : vitesse intermédiaire
          .to(particlesLayerRef.current, { yPercent: 6 }, 0)
          // Couche texte : remonte et s'efface progressivement
          .to(textLayerRef.current, { yPercent: -16, opacity: 0.1 }, 0);
      }, heroRef);

      ctx = gsapCtx;
    })();

    return () => ctx?.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="hero-perspective relative min-h-screen flex items-center justify-center overflow-hidden bg-deep-black"
    >
      {/* ── Couche 1 : Vidéo ── */}
      <div ref={videoLayerRef} className="absolute inset-0 z-0 will-change-transform">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          // @ts-expect-error -- fetchPriority est supporté par les navigateurs modernes mais pas encore dans les types React
          fetchpriority="high"
          poster="/hero-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* ── Overlay premium : noir profond + violet transparent + dégradé ── */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-deep-black/80 via-deep-black/50 to-deep-black/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-violet-dark/30 via-transparent to-violet-dark/25" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(109,40,217,0.15)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-grid-violet opacity-20" />
      </div>

      {/* ── Couche 2 : Fumée ── */}
      <div
        ref={smokeLayerRef}
        className="absolute inset-0 z-[2] overflow-hidden pointer-events-none will-change-transform"
        aria-hidden="true"
      >
        <div className="smoke-blob smoke-blob-1" />
        <div className="smoke-blob smoke-blob-2" />
        <div className="smoke-blob smoke-blob-3" />
        {/* Lumières violettes qui "respirent" */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-violet-electric/10 rounded-full blur-3xl animate-float breathing-light" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-glow/8 rounded-full blur-3xl animate-float breathing-light"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* ── Couche 3 : Particules ── */}
      <div
        ref={particlesLayerRef}
        className="absolute inset-0 z-[3] pointer-events-none will-change-transform"
        aria-hidden="true"
      >
        {particles.map((p) => (
          <span
            key={p.id}
            className="hero-particle"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* ── Couche 4 : Texte / contenu ── */}
      <div ref={textLayerRef} className="relative z-10 w-full will-change-transform">
        {/* Intro cinématique */}
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

        {/* Contenu principal */}
        <AnimatePresence>
          {showHero && (
            <motion.div
              className="relative text-center px-6 max-w-6xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
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

              {/* Nom — apparition progressive + déplacement vertical + blur reveal */}
              <div className="overflow-hidden mb-2">
                <motion.h1
                  initial={{ y: "100%", opacity: 0, filter: "blur(8px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="font-display text-7xl sm:text-8xl md:text-[10rem] lg:text-[12rem] leading-none tracking-tight text-gradient-violet"
                >
                  {siteConfig.name.split(" ")[0].toUpperCase()}
                </motion.h1>
              </div>
              <div className="overflow-hidden mb-8">
                <motion.h1
                  initial={{ y: "100%", opacity: 0, filter: "blur(8px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="font-display text-7xl sm:text-8xl md:text-[10rem] lg:text-[12rem] leading-none tracking-tight text-frost"
                >
                  {(siteConfig.name.split(" ")[1] || "DESIGN").toUpperCase()}
                </motion.h1>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.7, delay: 0.8 }}
                className="font-display text-xl md:text-3xl text-silver tracking-widest mb-3"
              >
                {siteConfig.title.toUpperCase()}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
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
      </div>
    </section>
  );
}

// ─── Bouton magnétique premium (glow violet + scale + transition) ─────
function MagneticButton({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className: string;
  onClick?: () => void;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const offset = useRef({ x: 0, y: 0 });

  const applyTransform = () => {
    const btn = ref.current;
    if (!btn) return;
    const scale = isHovering ? 1.06 : 1;
    btn.style.transform = `translate(${offset.current.x}px, ${offset.current.y}px) scale(${scale})`;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const btn = ref.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    offset.current = {
      x: (e.clientX - rect.left - rect.width / 2) * 0.25,
      y: (e.clientY - rect.top - rect.height / 2) * 0.25,
    };
    applyTransform();
  };

  const handleMouseEnter = () => setIsHovering(true);

  const handleMouseLeave = () => {
    setIsHovering(false);
    offset.current = { x: 0, y: 0 };
    if (ref.current) ref.current.style.transform = "translate(0,0) scale(1)";
  };

  return (
    <button
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`${className} transition-transform duration-300 ease-out`}
    >
      {children}
    </button>
  );
}
