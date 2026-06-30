import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio — Graphiste & Designer Visuel",
  description:
    "Portfolio de création graphique, covering véhicule, signalétique, web design et communication visuelle.",
  keywords: ["graphiste", "designer", "covering", "signalétique", "web design", "communication visuelle"],
};

// NOTE : Sur Vercel / localhost, activez les Google Fonts en décommentant
// le bloc <head> et en supprimant la balise <head /> ci-dessous.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-night-blue text-neon-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
