// ═══════════════════════════════════════════════════════════
//  DATA PORTFOLIO — Modifiez ce fichier pour mettre à jour
//  le contenu du site : projets, compétences, textes, liens.
// ═══════════════════════════════════════════════════════════

// ─── Informations personnelles ───────────────────────────
export const siteConfig = {
  name: "BACHIR YOUSEF",
  title: "Graphiste & Designer Visuel",
  tagline: "Je frappe fort. Je crée précis.",
  description:
    "Chaque projet est un combat : préparation, stratégie, exécution. Je transforme vos idées en identités visuelles qui marquent les esprits.",
  email: "youssef.bch682@gmail.com",
  phone: "+33 7 49 37 81 98",
  location: "Lyon, France",
  availableForWork: true,
  socials: {
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/in/",
    behance: "https://behance.net/",
    dribbble: "https://dribbble.com/",
  },
};

// ─── À propos ────────────────────────────────────────────
export const aboutData = {
  headline: "L'IMPACT D'UN VISUEL, LA PRÉCISION D'UN COMBAT",
  text: `Designer graphique passionné, je travaille à l'intersection de la créativité brute et de la communication stratégique. Mon terrain : la rue, le bitume, les écrans. Ma philosophie : chaque trait compte, chaque couleur parle, chaque projet mérite d'être mémorable.

Depuis plus de X ans, j'accompagne marques, entreprises et indépendants dans la construction d'identités visuelles percutantes — du covering véhicule au web design, de l'affiche grand format à la communication digitale.`,
  stats: [
    { value: "5+", label: "Années d'expérience" },
    { value: "80+", label: "Projets réalisés" },
    { value: "40+", label: "Clients satisfaits" },
    { value: "100%", label: "Passion & engagement" },
  ],
};

// ─── Compétences ─────────────────────────────────────────
export const skillsData = [
  {
    id: "graphisme",
    icon: "Palette",
    title: "Graphisme",
    description: "Identité visuelle, logo, charte graphique, affiches, flyers, supports print et digital.",
    level: 95,
    tags: ["Illustrator", "Photoshop", "InDesign"],
  },
  {
    id: "signaletique",
    icon: "Layout",
    title: "Signalétique",
    description: "Enseignes, panneaux, habillage vitrine, signalétique intérieure et extérieure.",
    level: 95,
    tags: ["Grand Format", "Enseignes", "Vitrophanie"],
  },
  {
    id: "maquettes",
    icon: "Box",
    title: "Maquettes",
    description: "Création de maquettes 3D et mise en situation pour visualiser vos projets avant production.",
    level: 65,
    tags: ["3D", "Mockup", "Visualisation"],
  },
  {
    id: "communication",
    icon: "Megaphone",
    title: "Communication Visuelle",
    description: "Stratégie visuelle, supports de communication, cohérence de marque cross-media.",
    level: 92,
    tags: ["Branding", "Stratégie", "Print & Digital"],
  },
  {
    id: "webdesign",
    icon: "Monitor",
    title: "Web Design",
    description: "Interfaces modernes, UX/UI, maquettes web et direction artistique digitale.",
    level: 90,
    tags: ["Figma", "UI/UX", "Responsive"],
  },
  {
    id: "ia",
    icon: "Zap",
    title: "IA Créative",
    description: "Utilisation des outils IA pour accélérer la création : Midjourney, Stable Diffusion, Firefly.",
    level: 80,
    tags: ["Midjourney", "Firefly", "ControlNet"],
  },
];

// ─── Projets ─────────────────────────────────────────────
export const projectsData = [
  {
    id: 1,
    title: "COVERING RACING",
    category: "Covering Véhicule",
    description:
      "Habillage complet d'un véhicule de compétition. Direction artistique inspirée du monde motorsport avec effets dynamiques et chromatiques.",
    tags: ["Covering", "Motorsport", "Vinyle"],
    image: "/projects/project-1.jpg",
    color: "#C0392B",
    featured: true,
    year: "2024",
  },
  {
    id: 2,
    title: "BRAND IDENTITY",
    category: "Graphisme",
    description:
      "Création d'une identité visuelle complète pour une startup urbaine : logo, charte, supports print et digital.",
    tags: ["Logo", "Charte", "Branding"],
    image: "/projects/project-2.jpg",
    color: "#1A2E44",
    featured: true,
    year: "2024",
  },
  {
    id: 3,
    title: "SIGNALÉTIQUE PREMIUM",
    category: "Signalétique",
    description:
      "Conception et réalisation d'une signalétique complète pour un espace commercial haut de gamme.",
    tags: ["Enseigne", "Intérieur", "Premium"],
    image: "/projects/project-3.jpg",
    color: "#4A5568",
    featured: false,
    year: "2024",
  },
  {
    id: 4,
    title: "CAMPAIGN VISUELLE",
    category: "Communication",
    description:
      "Direction artistique d'une campagne digitale multi-supports : réseaux sociaux, affichage, email.",
    tags: ["Campagne", "Digital", "Réseaux"],
    image: "/projects/project-4.jpg",
    color: "#96281B",
    featured: true,
    year: "2023",
  },
  {
    id: 5,
    title: "WEB DESIGN URBAIN",
    category: "Web Design",
    description:
      "Design d'interface pour une application mobile lifestyle urbaine. UX moderne et immersive.",
    tags: ["UI/UX", "Mobile", "Figma"],
    image: "/projects/project-5.jpg",
    color: "#1A2E44",
    featured: false,
    year: "2023",
  },
  {
    id: 6,
    title: "RETOUCHE & COMPOSITING",
    category: "Retouche",
    description:
      "Série de retouches photo avancées et compositions pour une marque lifestyle. Ambiance sombre et cinématique.",
    tags: ["Photoshop", "Compositing", "Cinématic"],
    image: "/projects/project-6.jpg",
    color: "#C0392B",
    featured: false,
    year: "2023",
  },
];

// ─── Process ─────────────────────────────────────────────
export const processData = [
  {
    step: "01",
    title: "BRIEF & ANALYSE",
    icon: "Target",
    description:
      "On échange sur vos objectifs, votre cible, vos contraintes. Je pose les bases stratégiques avant de toucher un seul outil créatif.",
    duration: "J1 - J3",
  },
  {
    step: "02",
    title: "RECHERCHE & CONCEPT",
    icon: "Search",
    description:
      "Moodboard, références, benchmarks. Je construis une direction artistique solide avant de dessiner la première ligne.",
    duration: "J3 - J7",
  },
  {
    step: "03",
    title: "CRÉATION & ITÉRATION",
    icon: "Pen",
    description:
      "Je crée, vous validez. Chaque retour est intégré avec précision. L'objectif : un résultat qui dépasse vos attentes.",
    duration: "J7 - J21",
  },
  {
    step: "04",
    title: "LIVRAISON & SUIVI",
    icon: "CheckCircle",
    description:
      "Fichiers sources, exports optimisés, guide d'utilisation. Je livre un projet complet et prêt à être déployé.",
    duration: "J21+",
  },
];
