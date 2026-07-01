"use client";

import { Instagram, Linkedin, ExternalLink } from "lucide-react";
import { siteConfig } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="relative border-t border-violet-electric/15 py-12 px-6 bg-void">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-display text-2xl tracking-widest">
            <span className="text-gradient-violet">[</span>
            {siteConfig.name.toUpperCase()}
            <span className="text-gradient-violet">]</span>
          </div>
          <div className="flex items-center gap-4">
            {siteConfig.socials.instagram && (
              <a href={siteConfig.socials.instagram} target="_blank" rel="noopener noreferrer"
                className="text-mist hover:text-violet-soft transition-colors duration-300 hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.8)]">
                <Instagram size={20} />
              </a>
            )}
            {siteConfig.socials.linkedin && (
              <a href={siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer"
                className="text-mist hover:text-violet-soft transition-colors duration-300 hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.8)]">
                <Linkedin size={20} />
              </a>
            )}
            {siteConfig.socials.behance && (
              <a href={siteConfig.socials.behance} target="_blank" rel="noopener noreferrer"
                className="text-mist hover:text-violet-soft transition-colors duration-300 hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.8)]">
                <ExternalLink size={20} />
              </a>
            )}
          </div>
          <p className="text-mist text-sm font-mono">© {new Date().getFullYear()} {siteConfig.name}</p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-electric/40 to-transparent" />
    </footer>
  );
}
