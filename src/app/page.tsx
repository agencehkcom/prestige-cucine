import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { ScrollSection } from "@/components/sections/ScrollSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { MaterialsSection } from "@/components/sections/MaterialsSection";
import { BentoGrid } from "@/components/sections/BentoGrid";
import { AppliancesSection } from "@/components/sections/AppliancesSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero immersif */}
        <HeroSection />

        {/* Chiffres clés */}
        <StatsSection />

        {/* Philosophie */}
        <ScrollSection
          subheadline="Notre philosophie"
          headline="Précision. Matériaux nobles. Sur-mesure."
          description="Chaque cuisine que nous créons est une pièce unique, conçue avec une attention obsessionnelle aux détails. Des charnières Blumotion aux plans Silestone, nous sélectionnons les meilleurs composants pour une expérience d'exception."
        />

        {/* Notre processus en 5 étapes */}
        <ProcessSection />

        {/* Matériaux premium */}
        <MaterialsSection />

        {/* Features Bento Grid */}
        <BentoGrid />

        {/* Électroménager partenaires */}
        <AppliancesSection />

        {/* Galerie de réalisations */}
        <GallerySection />

        {/* Témoignages clients */}
        <TestimonialsSection />

        {/* Garanties et confiance */}
        <TrustSection />

        {/* Formulaire de contact */}
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
