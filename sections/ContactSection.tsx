"use client";

import { useState, forwardRef } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Mail, Phone, MapPin, Send, Instagram, Linkedin, ExternalLink } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { siteConfig } from "@/data/portfolio";
import { cn } from "@/lib/utils";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

// ─── FormField ───────────────────────────────────────────
interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const FormField = forwardRef<HTMLInputElement, FormFieldProps>(
  ({ label, error, ...rest }, ref) => (
    <div>
      <label className="block font-mono text-xs text-steel-light tracking-widest uppercase mb-2">
        {label}
      </label>
      <input
        ref={ref}
        className={cn(
          "w-full bg-night-blue-mid/50 border text-neon-white font-body text-sm px-4 py-3",
          "placeholder-steel focus:outline-none focus:border-ring-red transition-colors duration-300",
          error ? "border-red-500" : "border-ring-red/20"
        )}
        {...rest}
      />
      {error && <p className="font-mono text-xs text-red-400 mt-1">{error}</p>}
    </div>
  )
);
FormField.displayName = "FormField";

// ─── SocialLink ──────────────────────────────────────────
function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-10 h-10 border border-ring-red/30 flex items-center justify-center text-steel-light hover:border-ring-red hover:text-ring-red hover:bg-ring-red/10 transition-all duration-300"
    >
      {icon}
    </a>
  );
}

// ─── ContactSection ──────────────────────────────────────
export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    // TODO: connectez votre service email ici (Resend, Formspree, etc.)
    await new Promise((r) => setTimeout(r, 1200));
    console.log("Form data:", data);
    setLoading(false);
    setSubmitted(true);
    reset();
  };

  return (
    <section id="contact" className="relative section-padding bg-night-blue overflow-hidden">
      <div className="absolute inset-0 bg-ring-grid opacity-30" />
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-ring-red/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-ring-red/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        <ScrollReveal direction="left">
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-ring-red text-sm tracking-widest">06</span>
            <div className="h-px w-12 bg-ring-red" />
            <span className="font-mono text-steel-light text-sm tracking-widest uppercase">Contact</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-5xl md:text-7xl text-neon-white mb-4 leading-none">
            SONNEZ <span className="text-ring-red">LA CLOCHE</span>
          </h2>
          <p className="font-body text-steel-light max-w-xl mb-16">
            Vous avez un projet ? Une idée ? Un défi visuel ? Je suis dans le coin rouge, prêt à me battre pour votre marque.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left — Info */}
          <ScrollReveal direction="left" delay={0.2} className="lg:col-span-2">
            <div className="space-y-8">
              <div className="space-y-4">
                {siteConfig.email && (
                  <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 border border-ring-red/30 flex items-center justify-center group-hover:border-ring-red group-hover:bg-ring-red/10 transition-all duration-300">
                      <Mail size={18} className="text-ring-red" />
                    </div>
                    <div>
                      <p className="font-mono text-xs text-steel-light mb-1">Email</p>
                      <p className="font-body text-neon-white group-hover:text-ring-red transition-colors duration-300">{siteConfig.email}</p>
                    </div>
                  </a>
                )}
                {siteConfig.phone && (
                  <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 border border-ring-red/30 flex items-center justify-center group-hover:border-ring-red group-hover:bg-ring-red/10 transition-all duration-300">
                      <Phone size={18} className="text-ring-red" />
                    </div>
                    <div>
                      <p className="font-mono text-xs text-steel-light mb-1">Téléphone</p>
                      <p className="font-body text-neon-white group-hover:text-ring-red transition-colors duration-300">{siteConfig.phone}</p>
                    </div>
                  </a>
                )}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 border border-ring-red/30 flex items-center justify-center">
                    <MapPin size={18} className="text-ring-red" />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-steel-light mb-1">Localisation</p>
                    <p className="font-body text-neon-white">{siteConfig.location}</p>
                  </div>
                </div>
              </div>

              <div className="h-px bg-ring-red/20" />

              <div>
                <p className="font-mono text-xs text-steel-light tracking-widest uppercase mb-4">Réseaux</p>
                <div className="flex gap-3">
                  {siteConfig.socials.instagram && (
                    <SocialLink href={siteConfig.socials.instagram} icon={<Instagram size={18} />} label="Instagram" />
                  )}
                  {siteConfig.socials.linkedin && (
                    <SocialLink href={siteConfig.socials.linkedin} icon={<Linkedin size={18} />} label="LinkedIn" />
                  )}
                  {siteConfig.socials.behance && (
                    <SocialLink href={siteConfig.socials.behance} icon={<ExternalLink size={18} />} label="Behance" />
                  )}
                </div>
              </div>

              <div className="border border-ring-red/30 bg-ring-red/5 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-ring-red animate-pulse" />
                  <span className="font-mono text-xs text-ring-red tracking-widest">DISPONIBLE</span>
                </div>
                <p className="font-body text-sm text-steel-light">
                  Actuellement disponible pour de nouvelles missions. Réponse sous 24h.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right — Form */}
          <ScrollReveal direction="right" delay={0.3} className="lg:col-span-3">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="border border-ring-red/30 bg-ring-red/10 p-12 text-center h-full flex flex-col items-center justify-center"
              >
                <div className="w-16 h-16 border-2 border-ring-red flex items-center justify-center mb-6">
                  <Send size={28} className="text-ring-red" />
                </div>
                <h3 className="font-display text-3xl text-neon-white mb-3">MESSAGE ENVOYÉ</h3>
                <p className="font-body text-steel-light mb-6">
                  Je reviendrai vers vous dans les plus brefs délais. Le combat continue !
                </p>
                <button onClick={() => setSubmitted(false)} className="btn-outline text-sm py-2 px-6">
                  Envoyer un autre message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    label="Nom"
                    placeholder="Votre nom"
                    error={errors.name?.message}
                    {...register("name", { required: "Votre nom est requis" })}
                  />
                  <FormField
                    label="Email"
                    type="email"
                    placeholder="votre@email.fr"
                    error={errors.email?.message}
                    {...register("email", {
                      required: "Votre email est requis",
                      pattern: { value: /^\S+@\S+$/i, message: "Email invalide" },
                    })}
                  />
                </div>
                <FormField
                  label="Sujet"
                  placeholder="Objet de votre demande"
                  error={errors.subject?.message}
                  {...register("subject", { required: "Le sujet est requis" })}
                />
                <div>
                  <label className="block font-mono text-xs text-steel-light tracking-widest uppercase mb-2">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    placeholder="Décrivez votre projet, vos besoins, votre délai..."
                    className={cn(
                      "w-full bg-night-blue-mid/50 border text-neon-white font-body text-sm px-4 py-3 resize-none",
                      "placeholder-steel focus:outline-none focus:border-ring-red transition-colors duration-300",
                      errors.message ? "border-red-500" : "border-ring-red/20"
                    )}
                    {...register("message", { required: "Un message est requis" })}
                  />
                  {errors.message && (
                    <p className="font-mono text-xs text-red-400 mt-1">{errors.message.message}</p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Envoyer le message
                    </>
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
