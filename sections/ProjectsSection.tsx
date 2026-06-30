"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Filter } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { projectsData } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const CATEGORIES = ["Tous", "Graphisme", "Covering Véhicule", "Signalétique", "Communication", "Web Design", "Retouche"];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filtered = activeCategory === "Tous"
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="relative section-padding bg-night-blue overflow-hidden">
      {/* Side accent */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-ring-red/20 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <ScrollReveal direction="left">
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-ring-red text-sm tracking-widest">04</span>
            <div className="h-px w-12 bg-ring-red" />
            <span className="font-mono text-steel-light text-sm tracking-widest uppercase">Projets</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-5xl md:text-7xl text-neon-white mb-4 leading-none">
            LES <span className="text-ring-red">MISSIONS</span>
          </h2>
          <p className="font-body text-steel-light max-w-xl mb-10">
            Chaque projet est une mission accomplie. Voici les combats que j&rsquo;ai menés et gagnés.
          </p>
        </ScrollReveal>

        {/* Category Filter */}
        <ScrollReveal delay={0.2}>
          <div className="flex flex-wrap gap-2 mb-12">
            {CATEGORIES.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  "font-mono text-xs tracking-wider px-4 py-2 border transition-all duration-300",
                  activeCategory === cat
                    ? "bg-ring-red border-ring-red text-white"
                    : "border-steel/30 text-steel-light hover:border-ring-red/50 hover:text-neon-white"
                )}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <ProjectCard project={project} index={i} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="font-display text-2xl text-steel-light">Aucun projet dans cette catégorie.</p>
          </div>
        )}
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: typeof projectsData[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group relative border border-ring-red/20 bg-night-blue-mid/30 overflow-hidden cursor-pointer"
      style={{ perspective: "1000px" }}
    >
      {/* Image placeholder / color block */}
      <div
        className="relative h-52 overflow-hidden"
        style={{ backgroundColor: project.color + "20" }}
      >
        {/* Placeholder visual */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-6xl opacity-10 text-neon-white">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-ring-grid opacity-30" />

        {/* Hover overlay */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-ring-red/20 backdrop-blur-sm flex items-center justify-center"
        >
          <motion.div
            animate={{ scale: hovered ? 1 : 0.5, opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="border border-neon-white/50 p-3"
          >
            <ArrowUpRight size={24} className="text-neon-white" />
          </motion.div>
        </motion.div>

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-3 left-3 bg-ring-red px-2 py-1">
            <span className="font-mono text-xs text-white tracking-widest">FEATURED</span>
          </div>
        )}

        {/* Year */}
        <div className="absolute top-3 right-3">
          <span className="font-mono text-xs text-steel-light">{project.year}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category */}
        <p className="font-mono text-xs text-ring-red tracking-widest uppercase mb-2">
          {project.category}
        </p>

        {/* Title */}
        <h3 className="font-display text-2xl text-neon-white tracking-wider mb-3 group-hover:text-ring-red transition-colors duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="font-body text-sm text-steel-light leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs text-steel border border-steel/20 px-2 py-0.5"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom accent */}
      <motion.div
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-ring-red origin-left"
      />
    </motion.div>
  );
}
