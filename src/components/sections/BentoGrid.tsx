"use client";

import { motion } from "framer-motion";
import { StoneLightCard } from "@/components/bento/StoneLightCard";
import { SilentMechanics } from "@/components/bento/SilentMechanics";
import { DunkerqueCard } from "@/components/bento/DunkerqueCard";
import { TestimonialCard } from "@/components/bento/TestimonialCard";
import { BentoTextCard } from "@/components/bento/BentoCard";
import { Ruler, Palette } from "lucide-react";
import { fadeInUp } from "@/lib/animations";

export function BentoGrid() {
  return (
    <section className="section-apple bg-background" id="realisations">
      <div className="container-wide">
        {/* Section header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-zinc-500 text-sm uppercase tracking-widest mb-4">
            Savoir-faire
          </p>
          <h2 className="headline-section headline-gold-animated">
            Chaque détail compte
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="bento-grid">
          {/* Large card - Stone & Light (2x2) */}
          <StoneLightCard />

          {/* Silent Mechanics (2x1) */}
          <SilentMechanics />

          {/* Text card - Sur-mesure (1x1) */}
          <BentoTextCard
            size="1x1"
            delay={0.15}
            icon={<Ruler className="w-6 h-6" />}
            title="Sur-mesure"
            description="Chaque cuisine est unique. Dimensions millimétriques, agencement personnalisé."
          />

          {/* Dunkerque Native (1x2) */}
          <DunkerqueCard />

          {/* Testimonial (1x1) */}
          <TestimonialCard />

          {/* Text card - Finitions (1x1) */}
          <BentoTextCard
            size="1x1"
            delay={0.25}
            icon={<Palette className="w-6 h-6" />}
            title="Finitions"
            description="Laqué mat, bois massif, stratifié premium. Votre style, notre exécution."
          />
        </div>
      </div>
    </section>
  );
}
