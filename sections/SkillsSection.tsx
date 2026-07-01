"use client";

import { motion } from "framer-motion";
import { Palette, Car, Layout, Box, Megaphone, Monitor, Image, Zap } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { skillsData } from "@/data/portfolio";

const iconMap: Record<string, React.ReactNode> = {
  Palette: <Palette size={24} />, Car: <Car size={24} />, Layout: <Layout size={24} />,
  Box: <Box size={24} />, Megaphone: <Megaphone size={24} />, Monitor: <Monitor size={24} />,
  Image: <Image size={24} />, Zap: <Zap size={24} />,
};

export default function SkillsSection() {
  return (
    <section id="skills" className="relative section-padding bg-carbon overflow-hidden">
      <div className="absolute inset-0 bg-grid-violet opacity-40" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-electric/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-electric/40 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-electric/3 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        <ScrollReveal direction="left">
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-violet-neon text-sm tracking-widest">03</span>
            <div className="h-px w-12 bg-gradient-to-r from-violet-electric to-transparent" />
            <span className="font-mono text-mist text-sm tracking-widest uppercase">Compétences</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-5xl md:text-7xl text-frost mb-4 leading-none">
            MON <span className="text-gradient-violet">ARSENAL</span>
          </h2>
          <p className="font-body text-silver max-w-xl mb-16">
            Chaque compétence est une arme affûtée. Voici mes outils de combat pour chaque terrain créatif.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillsData.map((skill, i) => (
            <ScrollReveal key={skill.id} delay={i * 0.07} direction="up">
              <motion.div
                whileHover={{
                  y: -8,
                  rotateY: 3,
                  rotateX: -2,
                  borderColor: "rgba(139,92,246,0.6)",
                  boxShadow: "0 20px 60px rgba(139,92,246,0.2), 0 0 30px rgba(139,92,246,0.1)",
                }}
                transition={{ duration: 0.3 }}
                className="group relative border border-violet-electric/15 bg-charcoal/60 backdrop-blur-sm p-6 h-full card-violet"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Animated border top */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-neon to-transparent opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-violet-electric/30 group-hover:border-violet-neon transition-colors duration-300" />

                {/* Icon with glow */}
                <div className="text-violet-soft mb-4 group-hover:text-violet-neon transition-colors duration-300 group-hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.8)]">
                  {iconMap[skill.icon]}
                </div>

                <h3 className="font-display text-xl tracking-wider text-frost mb-2 group-hover:text-gradient-violet transition-all duration-300">
                  {skill.title.toUpperCase()}
                </h3>
                <p className="font-body text-sm text-mist leading-relaxed mb-4">{skill.description}</p>

                {/* Skill bar */}
                <div className="mt-auto">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-mono text-xs text-mist">Maîtrise</span>
                    <span className="font-mono text-xs text-violet-soft">{skill.level}%</span>
                  </div>
                  <div className="h-0.5 bg-anthracite rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: i * 0.05, ease: "easeOut" }}
                      className="h-full skill-bar-violet rounded-full"
                    />
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {skill.tags.map((tag) => (
                    <span key={tag} className="font-mono text-xs text-mist border border-violet-electric/15 px-2 py-0.5 group-hover:border-violet-electric/40 transition-colors duration-300">
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
