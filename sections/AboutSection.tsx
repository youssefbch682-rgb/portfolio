"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { aboutData, siteConfig } from "@/data/portfolio";

export default function AboutSection() {
  return (
    <section id="about" className="relative section-padding bg-night-blue overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-ring-red/30 to-transparent" />
      <div className="absolute -left-40 top-1/2 w-80 h-80 bg-ring-red/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <ScrollReveal direction="left">
          <div className="flex items-center gap-4 mb-16">
            <span className="font-mono text-ring-red text-sm tracking-widest">02</span>
            <div className="h-px w-12 bg-ring-red" />
            <span className="font-mono text-steel-light text-sm tracking-widest uppercase">À Propos</span>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — Visual block */}
          <ScrollReveal direction="left" delay={0.1}>
            <div className="relative">
              {/* Big number background */}
              <div className="absolute -top-8 -left-4 font-display text-[12rem] text-ring-red/5 leading-none select-none pointer-events-none">
                02
              </div>

              {/* Main visual card */}
              <div className="relative border border-ring-red/20 bg-night-blue-mid/50 p-8 neon-border-red">
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-ring-red -translate-x-1 -translate-y-1" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-ring-red translate-x-1 translate-y-1" />

                <h2 className="font-display text-3xl md:text-4xl text-neon-white leading-tight mb-6">
                  {aboutData.headline}
                </h2>

                {aboutData.text.split("\n\n").map((para, i) => (
                  <p key={i} className="font-body text-steel-light leading-relaxed mb-4 last:mb-0">
                    {para}
                  </p>
                ))}

                {/* CTA inline */}
                <div className="mt-8 pt-8 border-t border-ring-red/20 flex items-center gap-4">
                  <button
                    onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                    className="btn-primary text-sm py-3 px-6"
                  >
                    Travailler ensemble
                  </button>
                  <span className="font-mono text-xs text-steel-light">{siteConfig.location}</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right — Stats */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="grid grid-cols-2 gap-6">
              {aboutData.stats.map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.03, borderColor: "rgba(192,57,43,0.6)" }}
                  className="relative border border-ring-red/20 bg-night-blue-mid/30 p-6 transition-colors duration-300 group"
                >
                  <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-ring-red/50" />

                  <p className="font-display text-5xl text-ring-red mb-2 group-hover:neon-red transition-all duration-300">
                    {stat.value}
                  </p>
                  <p className="font-mono text-xs text-steel-light tracking-wider uppercase">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Availability badge */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="mt-6 border border-ring-red/30 bg-ring-red/10 p-4 flex items-center gap-3"
            >
              <span className="w-3 h-3 rounded-full bg-ring-red animate-pulse flex-shrink-0" />
              <div>
                <p className="font-display text-sm tracking-wider text-ring-red">DISPONIBLE POUR MISSIONS</p>
                <p className="font-mono text-xs text-steel-light mt-1">Freelance · CDI · Collaboration</p>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
