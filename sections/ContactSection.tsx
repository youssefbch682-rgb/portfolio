"use client";

import { useState, forwardRef } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Mail, Phone, MapPin, Send, Instagram, Linkedin, ExternalLink } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { siteConfig } from "@/data/portfolio";
import { cn } from "@/lib/utils";

type FormData = { name: string; email: string; subject: string; message: string };

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string; error?: string;
}

const FormField = forwardRef<HTMLInputElement, FormFieldProps>(({ label, error, ...rest }, ref) => (
  <div>
    <label className="block font-mono text-xs text-mist tracking-widest uppercase mb-2">{label}</label>
    <input
      ref={ref}
      className={cn(
        "w-full bg-charcoal/60 border text-frost font-body text-sm px-4 py-3 backdrop-blur-sm",
        "placeholder-mist focus:outline-none transition-all duration-300",
        error ? "border-red-500" : "border-violet-electric/20 focus:border-violet-neon focus:shadow-[0_0_15px_rgba(139,92,246,0.2)]"
      )}
      {...rest}
    />
    {error && <p className="font-mono text-xs text-red-400 mt-1">{error}</p>}
  </div>
));
FormField.displayName = "FormField";

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
      className="w-10 h-10 border border-violet-electric/25 flex items-center justify-center text-mist hover:border-violet-neon hover:text-violet-soft hover:bg-violet-electric/10 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all duration-300">
      {icon}
    </a>
  );
}

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    console.log("Form data:", data);
    setLoading(false);
    setSubmitted(true);
    reset();
  };

  return (
    <section id="contact" className="relative section-padding bg-deep-black overflow-hidden">
      <div className="absolute inset-0 bg-grid-violet opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-electric/3 rounded-full blur-3xl" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-electric/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto">
        <ScrollReveal direction="left">
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-violet-neon text-sm tracking-widest">06</span>
            <div className="h-px w-12 bg-gradient-to-r from-violet-electric to-transparent" />
            <span className="font-mono text-mist text-sm tracking-widest uppercase">Contact</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-5xl md:text-7xl text-frost mb-4 leading-none">
            SONNEZ <span className="text-gradient-violet">LA CLOCHE</span>
          </h2>
          <p className="font-body text-silver max-w-xl mb-16">
            Vous avez un projet ? Une idée ? Un défi visuel ? Je suis prêt à me battre pour votre marque.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Info */}
          <ScrollReveal direction="left" delay={0.2} className="lg:col-span-2">
            <div className="space-y-8">
              <div className="space-y-4">
                {siteConfig.email && (
                  <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 border border-violet-electric/25 flex items-center justify-center group-hover:border-violet-neon group-hover:bg-violet-electric/10 group-hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all duration-300">
                      <Mail size={18} className="text-violet-soft" />
                    </div>
                    <div>
                      <p className="font-mono text-xs text-mist mb-1">Email</p>
                      <p className="font-body text-frost group-hover:text-violet-soft transition-colors duration-300">{siteConfig.email}</p>
                    </div>
                  </a>
                )}
                {siteConfig.phone && (
                  <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 border border-violet-electric/25 flex items-center justify-center group-hover:border-violet-neon group-hover:bg-violet-electric/10 group-hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all duration-300">
                      <Phone size={18} className="text-violet-soft" />
                    </div>
                    <div>
                      <p className="font-mono text-xs text-mist mb-1">Téléphone</p>
                      <p className="font-body text-frost group-hover:text-violet-soft transition-colors duration-300">{siteConfig.phone}</p>
                    </div>
                  </a>
                )}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 border border-violet-electric/25 flex items-center justify-center">
                    <MapPin size={18} className="text-violet-soft" />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-mist mb-1">Localisation</p>
                    <p className="font-body text-frost">{siteConfig.location}</p>
                  </div>
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-violet-electric/20 to-transparent" />

              <div>
                <p className="font-mono text-xs text-mist tracking-widest uppercase mb-4">Réseaux</p>
                <div className="flex gap-3">
                  {siteConfig.socials.instagram && <SocialLink href={siteConfig.socials.instagram} icon={<Instagram size={18} />} label="Instagram" />}
                  {siteConfig.socials.linkedin && <SocialLink href={siteConfig.socials.linkedin} icon={<Linkedin size={18} />} label="LinkedIn" />}
                  {siteConfig.socials.behance && <SocialLink href={siteConfig.socials.behance} icon={<ExternalLink size={18} />} label="Behance" />}
                </div>
              </div>

              <div className="border border-violet-electric/25 bg-violet-electric/8 p-4 backdrop-blur-sm glow-box-violet">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-violet-neon animate-pulse shadow-[0_0_10px_rgba(139,92,246,1)]" />
                  <span className="font-mono text-xs text-violet-soft tracking-widest">DISPONIBLE</span>
                </div>
                <p className="font-body text-sm text-mist">Actuellement disponible pour de nouvelles missions. Réponse sous 24h.</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal direction="right" delay={0.3} className="lg:col-span-3">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="border border-violet-electric/30 bg-violet-electric/8 p-12 text-center h-full flex flex-col items-center justify-center glow-box-violet"
              >
                <div className="w-16 h-16 border-2 border-violet-neon flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(139,92,246,0.5)]">
                  <Send size={28} className="text-violet-soft" />
                </div>
                <h3 className="font-display text-3xl text-frost mb-3">MESSAGE ENVOYÉ</h3>
                <p className="font-body text-mist mb-6">Je reviendrai vers vous dans les plus brefs délais.</p>
                <button onClick={() => setSubmitted(false)} className="btn-outline-violet text-sm py-2 px-6">
                  Envoyer un autre message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField label="Nom" placeholder="Votre nom" error={errors.name?.message}
                    {...register("name", { required: "Requis" })} />
                  <FormField label="Email" type="email" placeholder="votre@email.fr" error={errors.email?.message}
                    {...register("email", { required: "Requis", pattern: { value: /^\S+@\S+$/i, message: "Email invalide" } })} />
                </div>
                <FormField label="Sujet" placeholder="Objet de votre demande" error={errors.subject?.message}
                  {...register("subject", { required: "Requis" })} />
                <div>
                  <label className="block font-mono text-xs text-mist tracking-widest uppercase mb-2">Message</label>
                  <textarea rows={6} placeholder="Décrivez votre projet..."
                    className={cn(
                      "w-full bg-charcoal/60 border text-frost font-body text-sm px-4 py-3 resize-none backdrop-blur-sm",
                      "placeholder-mist focus:outline-none transition-all duration-300",
                      errors.message ? "border-red-500" : "border-violet-electric/20 focus:border-violet-neon focus:shadow-[0_0_15px_rgba(139,92,246,0.2)]"
                    )}
                    {...register("message", { required: "Requis" })}
                  />
                  {errors.message && <p className="font-mono text-xs text-red-400 mt-1">{errors.message.message}</p>}
                </div>
                <button type="submit" disabled={loading}
                  className="btn-violet w-full flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed">
                  {loading ? (
                    <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Envoi...</>
                  ) : (
                    <><Send size={16} />Envoyer le message</>
                  )}
                </button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
