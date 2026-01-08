"use client";

import { motion } from "framer-motion";
import { Ruler, Award, Users, Shield } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";

const icons = {
  Ruler: Ruler,
  Award: Award,
  Users: Users,
  Shield: Shield,
};

const values = [
  {
    icon: "Ruler",
    title: "Sur-Mesure",
    description:
      "Chaque cuisine est unique, conçue selon vos envies et l'espace disponible.",
  },
  {
    icon: "Award",
    title: "Qualité Française",
    description:
      "Fabrication locale avec des matériaux nobles sélectionnés avec soin.",
  },
  {
    icon: "Users",
    title: "Accompagnement",
    description:
      "De la conception à l'installation, nous vous guidons à chaque étape.",
  },
  {
    icon: "Shield",
    title: "Garantie 10 ans",
    description:
      "Tranquillité d'esprit avec notre garantie décennale sur tous nos travaux.",
  },
];

export function ValueProps() {
  return (
    <section className="section-luxury bg-white">
      <div className="container-luxury">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-noir font-medium tracking-wider uppercase text-sm italic"
          >
            Pourquoi nous choisir
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title mt-3"
          >
            L&apos;<span className="italic">Excellence</span> au Service de Votre Cuisine
          </motion.h2>
          <div className="line-gold mt-6" />
        </div>

        {/* Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {values.map((value, index) => {
            const IconComponent = icons[value.icon as keyof typeof icons];
            return (
              <motion.div
                key={index}
                variants={staggerItem}
                className="card-luxury text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-noir/5 rounded-2xl flex items-center justify-center group-hover:bg-noir transition-colors duration-500">
                  <IconComponent className="w-8 h-8 text-noir group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-noir mb-3 italic">
                  {value.title}
                </h3>
                <p className="text-gris leading-relaxed">{value.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
