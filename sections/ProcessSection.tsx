"use client";

import { motion } from "framer-motion";
import { Target, Search, Pen, CheckCircle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { processData } from "@/data/portfolio";

const iconMap: Record<string, React.ReactNode> = {
  Target: <Target size={28} />, Search: <Search size={28} />,
  Pen: <Pen size={28} />, CheckCircle: <CheckCircle size={28} />,
};

export default function ProcessSection() {
  return (
    <section id="process" className="relative section-padding bg-carbon overflow-hidden">
      <div className="absolute inset-0 bg-grid-violet opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-electric/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-electric/30 to-transparent" />
      <div className="absolute -right-40 top-1/2 w-80 h-80 bg-violet-deep/8 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        <ScrollReveal direction="left">
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-violet-neon text-sm tracking-widest">05</span>
            <div className="h-px w-12 bg-gradient-to-r from-violet-electric to-transparent" />
            <span className="font-mono text-mist text-sm tracking-widest uppercase">Process</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-5xl md:text-7xl text-frost mb-4 leading-none">
            MA <span className="text-gradient-violet">MÉTHODE</span>
          </h2>
          <p className="font-body text-silver max-w-xl mb-16">
            Un combat bien préparé est à moitié gagné. Voici comment je travaille, étape par étape.
          </p>
        </ScrollReveal>

        <div className="space-y-6">
          {processData.map((step, i) => (
            <ScrollReveal key={step.step} delay={i * 0.15} direction="left">
              <motion.div
                whileHover={{ x: 8, borderColor: "rgba(139,92,246,0.5)", boxShadow: "0 0 30px rgba(139,92,246,0.1)" }}
                transition={{ duration: 0.3 }}
                className="group relative border border-violet-electric/15 bg-charcoal/50 backdrop-blur-sm p-6 lg:pl-24 card-violet"
              >
                {/* Step circle */}
                <div className="lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 lg:-translate-x-1/2 w-14 h-14 bg-deep-black border-2 border-violet-electric/40 group-hover:border-violet-neon group-hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all duration-300 flex items-center justify-center mb-4 lg:mb-0">
                  <span className="font-display text-xl text-gradient-violet">{step.step}</span>
                </div>

                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                  <div className="text-violet-soft flex-shrink-0 group-hover:text-violet-neon group-hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.8)] transition-all duration-300">
                    {iconMap[step.icon]}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <h3 className="font-display text-2xl md:text-3xl tracking-wider text-frost group-hover:text-gradient-violet transition-all duration-300">
                        {step.title}
                      </h3>
                      <span className="font-mono text-xs text-violet-soft border border-violet-electric/25 px-3 py-1 self-start sm:self-auto">
                        {step.duration}
                      </span>
                    </div>
                    <p className="font-body text-mist leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {/* Left glow bar on hover */}
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-electric via-violet-soft to-violet-electric origin-top opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-16 text-center">
            <p className="font-body text-mist mb-6">Prêt à démarrer votre projet ?</p>
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-violet"
            >
              Démarrer une mission
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
