"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { aboutData, siteConfig } from "@/data/portfolio";

export default function AboutSection() {
  return (
    <section id="about" className="relative section-padding bg-deep-black overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-violet-electric/20 to-transparent" />
      <div className="absolute -left-40 top-1/2 w-96 h-96 bg-violet-electric/5 rounded-full blur-3xl" />
      <div className="absolute right-0 bottom-0 w-64 h-64 bg-violet-deep/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative">
        {/* Label */}
        <ScrollReveal direction="left">
          <div className="flex items-center gap-4 mb-16">
            <span className="font-mono text-violet-neon text-sm tracking-widest">02</span>
            <div className="h-px w-12 bg-gradient-to-r from-violet-electric to-transparent" />
            <span className="font-mono text-mist text-sm tracking-widest uppercase">À Propos</span>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left */}
          <ScrollReveal direction="left" delay={0.1}>
            <div className="relative">
              <div className="absolute -top-8 -left-4 font-display text-[12rem] text-violet-electric/5 leading-none select-none pointer-events-none">02</div>
              <div className="relative border border-violet-electric/20 bg-charcoal/50 backdrop-blur-sm p-8 glow-box-violet">
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-violet-neon -translate-x-1 -translate-y-1" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-violet-neon translate-x-1 translate-y-1" />
                <h2 className="font-display text-3xl md:text-4xl text-frost leading-tight mb-6">
                  {aboutData.headline}
                </h2>
                {aboutData.text.split("\n\n").map((para, i) => (
                  <p key={i} className="font-body text-silver leading-relaxed mb-4 last:mb-0">{para}</p>
                ))}
                <div className="mt-8 pt-8 border-t border-violet-electric/20 flex items-center gap-4">
                  <button
                    onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                    className="btn-violet text-sm py-3 px-6"
                  >
                    Travailler ensemble
                  </button>
                  <span className="font-mono text-xs text-mist">{siteConfig.location}</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right — Stats */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {aboutData.stats.map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.04, borderColor: "rgba(139,92,246,0.6)" }}
                  className="relative border border-violet-electric/15 bg-charcoal/40 p-6 group transition-all duration-300 card-violet"
                >
                  <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-violet-neon/40" />
                  <p className="font-display text-5xl text-gradient-violet mb-2">{stat.value}</p>
                  <p className="font-mono text-xs text-mist tracking-wider uppercase">{stat.label}</p>
                  <motion.div
                    className="absolute inset-0 bg-violet-electric/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </motion.div>
              ))}
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="mt-4 border border-violet-electric/25 bg-violet-electric/8 p-4 flex items-center gap-3 backdrop-blur-sm"
            >
              <span className="w-3 h-3 rounded-full bg-violet-neon animate-pulse flex-shrink-0 shadow-[0_0_10px_rgba(139,92,246,1)]" />
              <div>
                <p className="font-display text-sm tracking-wider text-violet-soft">DISPONIBLE POUR MISSIONS</p>
                <p className="font-mono text-xs text-mist mt-1">Freelance · CDI · Collaboration</p>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
