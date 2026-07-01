# 🥊 Portfolio Graphiste — Documentation

> Portfolio personnel premium pour graphiste / designer / communication visuelle.
> Direction artistique : Boxe anglaise × Superhéros urbain.

---

## 🚀 Démarrage rapide

### Prérequis
- Node.js 18+ ([télécharger](https://nodejs.org))
- npm ou yarn

### Installation

```bash
# 1. Cloner le dépôt
git clone https://github.com/VOTRE_USERNAME/VOTRE_REPO.git
cd VOTRE_REPO

# 2. Installer les dépendances
npm install

# 3. Lancer en développement
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000).

### Build pour la production

```bash
npm run build
npm run start
```

---

## 📁 Structure du projet

```
portfolio/
├── app/
│   ├── globals.css          # Styles globaux, variables CSS, effets neon
│   ├── layout.tsx           # Layout racine (meta, fonts, body)
│   └── page.tsx             # Page principale (assemble toutes les sections)
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx       # Navigation fixe avec menu mobile
│   │   └── Footer.tsx       # Pied de page avec liens sociaux
│   ├── AnimatedCanvas.tsx   # Canvas de particules animées (arrière-plan)
│   ├── ScrollReveal.tsx     # Composant d'animation au scroll (réutilisable)
│   └── SmoothScrollProvider.tsx  # Provider Lenis scroll fluide
│
├── sections/
│   ├── HeroSection.tsx      # Page d'accueil cinématique (intro + nom + CTA)
│   ├── AboutSection.tsx     # À propos + statistiques
│   ├── SkillsSection.tsx    # Compétences avec barres de progression
│   ├── ProjectsSection.tsx  # Grille de projets avec filtres par catégorie
│   ├── ProcessSection.tsx   # Méthode de travail étape par étape
│   └── ContactSection.tsx   # Formulaire de contact + infos
│
├── data/
│   └── portfolio.ts         # ⭐ TOUTES LES DONNÉES ÉDITABLES ICI
│
├── lib/
│   └── utils.ts             # Utilitaires (cn, helpers)
│
├── public/
│   └── projects/            # Placez ici vos images de projets
│       ├── project-1.jpg
│       ├── project-2.jpg
│       └── ...
│
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── next.config.ts
└── vercel.json
```

---

## ✏️ Personnaliser le contenu

**Tout le contenu modifiable est dans un seul fichier : `data/portfolio.ts`**

### 1. Informations personnelles

```typescript
export const siteConfig = {
  name: "VOTRE NOM",           // Votre prénom et nom
  title: "Graphiste & Designer Visuel",
  tagline: "Je frappe fort. Je crée précis.",
  email: "contact@votreportfolio.fr",
  phone: "+33 6 00 00 00 00",
  location: "Paris, France",
  availableForWork: true,       // true = badge "Disponible" affiché
  socials: {
    instagram: "https://instagram.com/VOTRE_COMPTE",
    linkedin: "https://linkedin.com/in/VOTRE_PROFIL",
    behance: "https://behance.net/VOTRE_PROFIL",
  },
};
```

### 2. Ajouter / modifier un projet

```typescript
{
  id: 7,                           // ID unique (incrémenter)
  title: "MON NOUVEAU PROJET",
  category: "Graphisme",           // Doit correspondre à un filtre
  description: "Description courte et percutante.",
  tags: ["Tag1", "Tag2"],
  image: "/projects/mon-projet.jpg",  // Placer l'image dans /public/projects/
  color: "#C0392B",                // Couleur de la vignette (hex)
  featured: true,                  // Badge "FEATURED" affiché
  year: "2024",
},
```

### 3. Ajouter une image de projet

1. Placez votre image dans `public/projects/` (ex: `mon-projet.jpg`)
2. Mettez à jour le champ `image` dans `data/portfolio.ts`
3. Format recommandé : JPG/WebP, 800×500px minimum

### 4. Modifier les compétences

Chaque compétence dans `skillsData` a :
- `level` : niveau de 0 à 100 (barre de progression)
- `icon` : nom d'une icône Lucide React
- `tags` : outils/logiciels associés

---

## 🚢 Déploiement sur Vercel

### Option 1 — Interface Vercel (recommandé)

1. Pushez votre code sur GitHub
2. Allez sur [vercel.com](https://vercel.com) → Import Project
3. Sélectionnez votre repo
4. Vercel détecte automatiquement Next.js
5. Cliquez Deploy 🎉

### Option 2 — CLI Vercel

```bash
npm install -g vercel
vercel
```

---

## 📧 Connecter le formulaire de contact

Le formulaire est prêt mais n'envoie pas encore d'emails. Pour l'activer :

### Avec Resend (recommandé)

```bash
npm install resend
```

Créez `app/api/contact/route.ts` :

```typescript
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, subject, message } = await req.json();
  await resend.emails.send({
    from: "portfolio@votre-domaine.fr",
    to: "votre@email.fr",
    subject: `[Portfolio] ${subject}`,
    text: `De: ${name} (${email})\n\n${message}`,
  });
  return Response.json({ success: true });
}
```

Puis dans `ContactSection.tsx`, remplacez le `console.log` par un `fetch("/api/contact", ...)`.

### Avec Formspree (sans backend)

Créez un compte sur [formspree.io](https://formspree.io), obtenez votre endpoint, et remplacez l'action du form.

---

## 🎨 Personnaliser les couleurs

Les couleurs sont dans `tailwind.config.ts` et `app/globals.css` :

| Variable | Valeur | Usage |
|---|---|---|
| `--ring-red` | `#C0392B` | Accent principal, néon, CTA |
| `--night-blue` | `#0D1B2A` | Fond principal |
| `--night-blue-mid` | `#1A2E44` | Fond secondaire |
| `--neon-white` | `#F0F4F8` | Texte principal |
| `--steel-light` | `#718096` | Texte secondaire |

---

## 🛠 Technologies utilisées

| Tech | Usage |
|---|---|
| Next.js 14 | Framework React (App Router) |
| TypeScript | Typage statique |
| Tailwind CSS | Styles utilitaires |
| Framer Motion | Animations et transitions |
| Lenis | Scroll fluide |
| Lucide React | Icônes |
| React Hook Form | Gestion du formulaire |

---

## 📝 Roadmap / Améliorations possibles

- [ ] Connexion formulaire email (Resend/Formspree)
- [ ] Modal projet avec galerie d'images
- [ ] Page projet individuelle (`/projects/[slug]`)
- [ ] Dark/Light mode toggle
- [ ] Animation Three.js sur la hero
- [ ] Intégration CMS (Notion, Sanity, Contentful)
- [ ] Mode multilingue (FR/EN)

---

## 📄 Licence

Projet personnel — Tous droits réservés.

---

*Créé avec ❤️ et beaucoup de café noir.*
