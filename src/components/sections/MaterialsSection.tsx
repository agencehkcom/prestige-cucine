"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const materials = [
  {
    name: "Silestone",
    category: "Plans de travail",
    description: "Quartz composite haute résistance. Hygiénique, anti-rayures, 25 ans de garantie fabricant.",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
  },
  {
    name: "Chêne Massif",
    category: "Façades & Plans",
    description: "Bois noble d'origine française. Finitions huilées ou vernis mat pour un toucher naturel.",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
  },
  {
    name: "Laqué Mat",
    category: "Façades",
    description: "Finition premium sans traces de doigts. 200 teintes disponibles, effet velours au toucher.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
  {
    name: "Dekton",
    category: "Plans de travail",
    description: "Ultra-compact, résiste à la chaleur jusqu'à 300°C. Idéal autour des plaques de cuisson.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  },
];

export function MaterialsSection() {
  return (
    <section className="section-apple bg-zinc-900">
      <div className="container-wide">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-zinc-500 text-sm uppercase tracking-widest mb-4">
            Matériaux
          </p>
          <h2 className="headline-section headline-gold-animated mb-6">
            L&apos;excellence des matières
          </h2>
          <p className="body-large max-w-2xl mx-auto">
            Nous sélectionnons uniquement des matériaux premium, durables et esthétiques. Chaque surface est choisie pour sa qualité et sa longévité.
          </p>
        </motion.div>

        {/* Materials grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {materials.map((material) => (
            <motion.div
              key={material.name}
              variants={staggerItem}
              className="group relative overflow-hidden rounded-3xl bg-zinc-950 h-[400px]"
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${material.image})` }}
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-8">
                <p className="text-zinc-500 text-sm uppercase tracking-widest mb-2">
                  {material.category}
                </p>
                <h3 className="text-3xl font-semibold text-zinc-100 mb-3">
                  {material.name}
                </h3>
                <p className="text-zinc-400 leading-relaxed max-w-md">
                  {material.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
