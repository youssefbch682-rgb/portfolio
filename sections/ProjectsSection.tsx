"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
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
    <section id="projects" className="relative section-padding bg-deep-black overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-violet-electric/20 to-transparent" />
      <div className="absolute -right-40 top-1/3 w-80 h-80 bg-violet-deep/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto">
        <ScrollReveal direction="left">
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-violet-neon text-sm tracking-widest">04</span>
            <div className="h-px w-12 bg-gradient-to-r from-violet-electric to-transparent" />
            <span className="font-mono text-mist text-sm tracking-widest uppercase">Projets</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-5xl md:text-7xl text-frost mb-4 leading-none">
            LES <span className="text-gradient-violet">MISSIONS</span>
          </h2>
          <p className="font-body text-silver max-w-xl mb-10">
            Chaque projet est une mission accomplie. Voici les combats que j&rsquo;ai menés et gagnés.
          </p>
        </ScrollReveal>

        {/* Filters */}
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
                    ? "bg-violet-electric border-violet-neon text-white shadow-[0_0_15px_rgba(139,92,246,0.4)]"
                    : "border-violet-electric/20 text-mist hover:border-violet-electric/50 hover:text-frost"
                )}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </ScrollReveal>

        {/* Grid */}
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
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: typeof projectsData[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [8, -8]);
  const rotateY = useTransform(x, [-100, 100], [-8, 8]);
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };
  const handleMouseLeave = () => { x.set(0); y.set(0); setHovered(false); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group relative border border-violet-electric/15 bg-charcoal/50 backdrop-blur-sm overflow-hidden cursor-pointer card-violet"
    >
      {/* Color block / image */}
      <div className="relative h-52 overflow-hidden bg-gradient-to-br from-violet-dark/30 to-deep-black">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-7xl opacity-5 text-frost">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <div className="absolute inset-0 bg-grid-violet opacity-30" />

        {/* Spotlight hover */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.25),transparent_70%)]"
        />

        {/* Hover overlay */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-violet-electric/20 backdrop-blur-sm flex items-center justify-center"
        >
          <motion.div
            animate={{ scale: hovered ? 1 : 0.5, opacity: hovered ? 1 : 0 }}
            className="border border-frost/50 p-3"
          >
            <ArrowUpRight size={24} className="text-frost" />
          </motion.div>
        </motion.div>

        {project.featured && (
          <div className="absolute top-3 left-3 bg-violet-electric px-2 py-1 shadow-[0_0_10px_rgba(139,92,246,0.5)]">
            <span className="font-mono text-xs text-white tracking-widest">FEATURED</span>
          </div>
        )}
        <div className="absolute top-3 right-3">
          <span className="font-mono text-xs text-mist">{project.year}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6" style={{ transform: "translateZ(20px)" }}>
        <p className="font-mono text-xs text-violet-soft tracking-widest uppercase mb-2">{project.category}</p>
        <h3 className="font-display text-2xl text-frost tracking-wider mb-3 group-hover:text-gradient-violet transition-all duration-300">
          {project.title}
        </h3>
        <p className="font-body text-sm text-mist leading-relaxed mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="font-mono text-xs text-mist border border-violet-electric/15 px-2 py-0.5">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Animated border bottom */}
      <motion.div
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-violet-electric via-violet-soft to-violet-electric origin-left shadow-[0_0_8px_rgba(139,92,246,0.8)]"
      />
    </motion.div>
  );
}
