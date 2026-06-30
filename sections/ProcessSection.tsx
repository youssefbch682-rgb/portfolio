"use client";

import { motion } from "framer-motion";
import { Target, Search, Pen, CheckCircle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { processData } from "@/data/portfolio";

const iconMap: Record<string, React.ReactNode> = {
  Target: <Target size={28} />,
  Search: <Search size={28} />,
  Pen: <Pen size={28} />,
  CheckCircle: <CheckCircle size={28} />,
};

export default function ProcessSection() {
  return (
    <section id="process" className="relative section-padding bg-night-blue-mid/20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-ring-grid opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ring-red/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ring-red/30 to-transparent" />
      <div className="absolute -right-40 top-1/2 w-80 h-80 bg-ring-red/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section label */}
        <ScrollReveal direction="left">
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-ring-red text-sm tracking-widest">05</span>
            <div className="h-px w-12 bg-ring-red" />
            <span className="font-mono text-steel-light text-sm tracking-widest uppercase">Process</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-5xl md:text-7xl text-neon-white mb-4 leading-none">
            MA <span className="text-ring-red">MÉTHODE</span>
          </h2>
          <p className="font-body text-steel-light max-w-xl mb-16">
            Un combat bien préparé est à moitié gagné. Voici comment je travaille, étape par étape.
          </p>
        </ScrollReveal>

        {/* Process steps */}
        <div className="relative">
          {/* Vertical connecting line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-ring-red/0 via-ring-red/30 to-ring-red/0 hidden lg:block" />

          <div className="space-y-8">
            {processData.map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 0.15} direction="left">
                <motion.div
                  whileHover={{ x: 8, borderColor: "rgba(192,57,43,0.5)" }}
                  transition={{ duration: 0.3 }}
                  className="group relative border border-ring-red/20 bg-night-blue p-6 lg:pl-24 transition-all duration-300"
                >
                  {/* Step number (absolute left for desktop) */}
                  <div className="lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 lg:-translate-x-1/2 w-16 h-16 bg-night-blue border-2 border-ring-red/40 group-hover:border-ring-red transition-colors duration-300 flex items-center justify-center mb-4 lg:mb-0">
                    <span className="font-display text-2xl text-ring-red">{step.step}</span>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                    {/* Icon */}
                    <div className="text-ring-red flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {iconMap[step.icon]}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                        <h3 className="font-display text-2xl md:text-3xl tracking-wider text-neon-white group-hover:text-ring-red transition-colors duration-300">
                          {step.title}
                        </h3>
                        <span className="font-mono text-xs text-ring-red border border-ring-red/30 px-3 py-1 self-start sm:self-auto">
                          {step.duration}
                        </span>
                      </div>
                      <p className="font-body text-steel-light leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Hover accent */}
                  <motion.div
                    animate={{ scaleY: 0 }}
                    whileHover={{ scaleY: 1 }}
                    className="absolute left-0 top-0 bottom-0 w-0.5 bg-ring-red origin-top"
                  />
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* CTA after process */}
        <ScrollReveal delay={0.3}>
          <div className="mt-16 text-center">
            <p className="font-body text-steel-light mb-6">
              Prêt à démarrer votre projet ?
            </p>
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-primary"
            >
              Démarrer une mission
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
