"use client";

import { motion } from "framer-motion";
import { Instagram, Linkedin, ExternalLink } from "lucide-react";
import { siteConfig } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-ring-red/20 py-12 px-6 bg-night-blue">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="font-display text-2xl tracking-widest">
            <span className="text-ring-red">[</span>
            {siteConfig.name.toUpperCase()}
            <span className="text-ring-red">]</span>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-4">
            {siteConfig.socials.instagram && (
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-steel-light hover:text-ring-red transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            )}
            {siteConfig.socials.linkedin && (
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-steel-light hover:text-ring-red transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            )}
            {siteConfig.socials.behance && (
              <a
                href={siteConfig.socials.behance}
                target="_blank"
                rel="noopener noreferrer"
                className="text-steel-light hover:text-ring-red transition-colors duration-300"
                aria-label="Behance"
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>

          {/* Copyright */}
          <p className="text-steel text-sm font-mono">
            © {year} {siteConfig.name} — Tous droits réservés
          </p>
        </div>
      </div>

      {/* Bottom neon line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ring-red to-transparent opacity-50" />
    </footer>
  );
}
