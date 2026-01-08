"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

const brands = [
  { name: "Miele", description: "L'excellence allemande" },
  { name: "Siemens", description: "Innovation connectée" },
  { name: "Bosch", description: "Fiabilité éprouvée" },
  { name: "Neff", description: "Design coulissant" },
  { name: "Gaggenau", description: "Ultra premium" },
  { name: "Bora", description: "Aspiration intégrée" },
];

export function AppliancesSection() {
  return (
    <section className="section-apple bg-zinc-950">
      <div className="container-apple">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-zinc-500 text-sm uppercase tracking-widest mb-4">
              Électroménager
            </p>
            <h2 className="headline-section headline-gold-animated mb-6">
              Les meilleures marques intégrées
            </h2>
            <p className="body-large mb-8">
              Nous travaillons exclusivement avec les leaders de l&apos;électroménager haut de gamme. Fours, plaques, hottes, réfrigérateurs : chaque appareil est sélectionné pour sa performance et son intégration parfaite.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-zinc-400">
                <div className="w-2 h-2 rounded-full bg-zinc-600" />
                <span>Installation et mise en service incluses</span>
              </div>
              <div className="flex items-center gap-4 text-zinc-400">
                <div className="w-2 h-2 rounded-full bg-zinc-600" />
                <span>Garantie constructeur + extension possible</span>
              </div>
              <div className="flex items-center gap-4 text-zinc-400">
                <div className="w-2 h-2 rounded-full bg-zinc-600" />
                <span>SAV local pour toutes les marques</span>
              </div>
            </div>
          </motion.div>

          {/* Right - Brands grid */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4"
          >
            {brands.map((brand, index) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-zinc-900 rounded-2xl p-6 text-center hover:bg-zinc-800 transition-colors"
              >
                <h3 className="text-xl font-semibold text-zinc-100 mb-1">
                  {brand.name}
                </h3>
                <p className="text-zinc-500 text-sm">
                  {brand.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
