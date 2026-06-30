"use client";

import { motion } from "framer-motion";
import {
  Palette, Car, Layout, Box, Megaphone, Monitor, Image, Zap,
  Target, Search, Pen, CheckCircle,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { skillsData } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ReactNode> = {
  Palette: <Palette size={24} />,
  Car: <Car size={24} />,
  Layout: <Layout size={24} />,
  Box: <Box size={24} />,
  Megaphone: <Megaphone size={24} />,
  Monitor: <Monitor size={24} />,
  Image: <Image size={24} />,
  Zap: <Zap size={24} />,
  Target: <Target size={24} />,
  Search: <Search size={24} />,
  Pen: <Pen size={24} />,
  CheckCircle: <CheckCircle size={24} />,
};

export default function SkillsSection() {
  return (
    <section id="skills" className="relative section-padding bg-night-blue-mid/30 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-ring-grid opacity-30" />

      {/* Accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ring-red/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ring-red/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section label */}
        <ScrollReveal direction="left">
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-ring-red text-sm tracking-widest">03</span>
            <div className="h-px w-12 bg-ring-red" />
            <span className="font-mono text-steel-light text-sm tracking-widest uppercase">Compétences</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-5xl md:text-7xl text-neon-white mb-4 leading-none">
            MON <span className="text-ring-red">ARSENAL</span>
          </h2>
          <p className="font-body text-steel-light max-w-xl mb-16">
            Chaque compétence est une arme affûtée. Voici mes outils de combat pour chaque terrain créatif.
          </p>
        </ScrollReveal>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillsData.map((skill, i) => (
            <ScrollReveal key={skill.id} delay={i * 0.07} direction="up">
              <motion.div
                whileHover={{
                  y: -6,
                  borderColor: "rgba(192,57,43,0.6)",
                  boxShadow: "0 0 30px rgba(192,57,43,0.2)",
                }}
                className="group relative border border-ring-red/20 bg-night-blue p-6 h-full transition-all duration-300 card-3d"
              >
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-ring-red/30 group-hover:border-ring-red transition-colors duration-300" />

                {/* Icon */}
                <div className="text-ring-red mb-4 group-hover:scale-110 transition-transform duration-300">
                  {iconMap[skill.icon]}
                </div>

                {/* Title */}
                <h3 className="font-display text-xl tracking-wider text-neon-white mb-2">
                  {skill.title.toUpperCase()}
                </h3>

                {/* Description */}
                <p className="font-body text-sm text-steel-light leading-relaxed mb-4">
                  {skill.description}
                </p>

                {/* Skill bar */}
                <div className="mt-auto">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-mono text-xs text-steel">Maîtrise</span>
                    <span className="font-mono text-xs text-ring-red">{skill.level}%</span>
                  </div>
                  <div className="h-0.5 bg-night-blue-mid rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: i * 0.05, ease: "easeOut" }}
                      className="h-full skill-bar-fill rounded-full"
                    />
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs text-steel-light border border-steel/20 px-2 py-0.5 group-hover:border-ring-red/30 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
