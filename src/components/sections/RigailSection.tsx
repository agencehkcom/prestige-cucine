"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import { ExternalLink } from "lucide-react";

const rigailImages = [
  {
    src: "https://www.rigail.fr/wp-content/uploads/2024-06-13-Hardelot-011-scaled.jpg",
    alt: "Plan de travail en marbre - Cuisine moderne",
  },
  {
    src: "https://www.rigail.fr/wp-content/uploads/2024-06-13-Hardelot-021-scaled.jpg",
    alt: "Plan de travail en pierre naturelle",
  },
  {
    src: "https://www.rigail.fr/wp-content/uploads/2024-06-13-Hardelot-017-scaled.jpg",
    alt: "Îlot central en marbre",
  },
  {
    src: "https://www.rigail.fr/wp-content/uploads/PLAN-4-scaled.jpg",
    alt: "Plan de travail Dekton",
  },
  {
    src: "https://www.rigail.fr/wp-content/uploads/Dekton-2.jpg",
    alt: "Cuisine avec plan Dekton",
  },
  {
    src: "https://www.rigail.fr/wp-content/uploads/dekton-5.jpg",
    alt: "Finition Dekton premium",
  },
];

export function RigailSection() {
  return (
    <section className="section-apple bg-zinc-900" id="partenaire-rigail">
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
            Notre partenaire marbrier
          </p>
          <h2 className="headline-section headline-gold-animated mb-6">
            Rigail - Marbrerie depuis 1909
          </h2>
          <p className="body-large max-w-3xl mx-auto mb-8">
            Nous collaborons avec la maison Rigail, marbriers de père en fils depuis plus d&apos;un siècle.
            Leur savoir-faire d&apos;exception en pierre naturelle, quartz et Dekton sublime chaque cuisine
            que nous réalisons.
          </p>
          <a
            href="https://www.rigail.fr/marbrerie-de-decoration/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-zinc-100 transition-colors"
          >
            <span>Découvrir Rigail</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Images Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {rigailImages.map((image, index) => (
            <motion.div
              key={image.src}
              variants={staggerItem}
              className={`group relative overflow-hidden rounded-2xl ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div className={`relative ${index === 0 ? "aspect-[4/3]" : "aspect-[4/3]"}`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes={index === 0 ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-zinc-950/0 group-hover:bg-zinc-950/40 transition-colors duration-300" />

                {/* Caption on hover */}
                <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-zinc-100 text-sm font-medium">{image.alt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          {[
            {
              title: "Pierre naturelle",
              description: "Marbre, granit, pierre bleue du Hainaut. Des matériaux nobles et intemporels.",
            },
            {
              title: "Quartz & Dekton",
              description: "Surfaces ultra-résistantes, hygiéniques et disponibles dans une large palette de teintes.",
            },
            {
              title: "Sur-mesure",
              description: "Découpe millimétrique, finitions soignées, pose parfaite pour un résultat d'exception.",
            },
          ].map((feature) => (
            <motion.div
              key={feature.title}
              variants={staggerItem}
              className="text-center"
            >
              <h3 className="text-xl font-semibold text-zinc-100 mb-3">
                {feature.title}
              </h3>
              <p className="text-zinc-500 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
