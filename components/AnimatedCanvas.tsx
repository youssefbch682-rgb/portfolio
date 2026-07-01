"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  size: number; opacity: number;
  life: number; maxLife: number;
}

export default function AnimatedCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Respecte la préférence "mouvement réduit" de l'utilisateur
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    let animId: number;
    let particles: Particle[] = [];
    let resizeTimeout: ReturnType<typeof setTimeout>;
    let running = true;

    // Moins de particules sur petits écrans / mobiles
    const getParticleCount = () => (window.innerWidth < 768 ? 25 : 45);

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const spawn = (): Particle => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3 - 0.1,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.7 + 0.1,
      life: 0,
      maxLife: Math.random() * 300 + 200,
    });

    resize();
    particles = Array.from({ length: getParticleCount() }, spawn);

    // Connexions dessinées avec un seuil précalculé (évite un sqrt() par paire inutile)
    const maxDist = 110;
    const maxDistSq = maxDist * maxDist;
    const drawConnections = () => {
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distSq = dx * dx + dy * dy;
          if (distSq < maxDistSq) {
            const dist = Math.sqrt(distSq);
            const alpha = (1 - dist / maxDist) * 0.12;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(139,92,246,${alpha})`;
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      if (!running) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawConnections();

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        p.life++;

        const lifePct = p.life / p.maxLife;
        const alpha = lifePct < 0.1
          ? (lifePct / 0.1) * p.opacity
          : lifePct > 0.8
            ? ((1 - lifePct) / 0.2) * p.opacity
            : p.opacity;

        if (p.life >= p.maxLife) {
          particles[i] = spawn();
          return;
        }
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Point simple (le glow en dégradé recréé par particule à chaque frame était trop coûteux)
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(167,139,250,${alpha})`;
        ctx.fill();
      });

      animId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        resize();
        particles = Array.from({ length: getParticleCount() }, spawn);
      }, 200);
    };

    // Coupe l'animation quand l'onglet n'est pas visible (économise CPU/batterie)
    const handleVisibility = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(animId);
      } else if (!running) {
        running = true;
        animate();
      }
    };

    animate();
    window.addEventListener("resize", handleResize);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      running = false;
      cancelAnimationFrame(animId);
      clearTimeout(resizeTimeout);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
