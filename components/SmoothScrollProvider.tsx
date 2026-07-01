"use client";

import { useEffect } from "react";

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let lenis: any = null;
    let tickerFn: ((time: number) => void) | null = null;

    const init = async () => {
      try {
        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        const [{ default: Lenis }, gsapModule, stModule] = await Promise.all([
          import("lenis"),
          import("gsap"),
          import("gsap/ScrollTrigger"),
        ]);
        const gsap = gsapModule.gsap;
        const ScrollTrigger = stModule.ScrollTrigger;
        gsap.registerPlugin(ScrollTrigger);

        lenis = new Lenis({
          duration: reducedMotion ? 0.1 : 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: !reducedMotion,
        });

        // Synchronise Lenis <-> ScrollTrigger : c'est ce qui permet aux
        // animations scrub GSAP de rester alignées avec le scroll lissé.
        lenis.on("scroll", ScrollTrigger.update);

        tickerFn = (time: number) => {
          lenis!.raf(time * 1000);
        };
        gsap.ticker.add(tickerFn);
        gsap.ticker.lagSmoothing(0);

        // Exposé pour les composants qui ont besoin d'accéder à l'instance
        (window as unknown as { __lenis?: unknown }).__lenis = lenis;
      } catch {
        // Lenis/GSAP indisponibles : le scroll natif du navigateur prend le relais
      }
    };

    init();

    return () => {
      if (tickerFn) {
        import("gsap").then(({ gsap }) => gsap.ticker.remove(tickerFn!));
      }
      lenis?.destroy();
      delete (window as unknown as { __lenis?: unknown }).__lenis;
    };
  }, []);

  return <>{children}</>;
}
