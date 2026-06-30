"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#about", label: "À Propos" },
  { href: "#skills", label: "Compétences" },
  { href: "#projects", label: "Projets" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.5, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-night-blue/95 backdrop-blur-md border-b border-ring-red/20 py-3"
            : "bg-transparent py-6"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-display text-2xl tracking-widest hover:text-ring-red transition-colors duration-300"
          >
            <span className="text-ring-red">[</span>
            {siteConfig.name.split(" ")[0].toUpperCase()}
            <span className="text-ring-red">]</span>
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={cn(
                  "font-body text-sm tracking-wider uppercase transition-colors duration-300 relative group",
                  activeSection === link.href.slice(1)
                    ? "text-ring-red"
                    : "text-steel-light hover:text-neon-white"
                )}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-ring-red transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
            <button
              onClick={() => handleNavClick("#contact")}
              className="btn-primary text-sm py-2 px-6"
            >
              Me Contacter
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-neon-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-night-blue/98 backdrop-blur-lg flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, ease: "easeOut" }}
                onClick={() => handleNavClick(link.href)}
                className="font-display text-4xl tracking-widest hover:text-ring-red transition-colors duration-300"
              >
                {link.label}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.08 }}
              onClick={() => handleNavClick("#contact")}
              className="btn-primary mt-4"
            >
              Me Contacter
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
