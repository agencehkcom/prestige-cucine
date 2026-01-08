"use client";

import { motion } from "framer-motion";
import { Shield, Award, MapPin, Clock, Leaf, CreditCard } from "lucide-react";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const trustPoints = [
  {
    icon: Shield,
    title: "Garantie 10 ans",
    description: "Tous nos meubles sont garantis 10 ans. Charnières, tiroirs, caissons : nous assurons la durabilité.",
  },
  {
    icon: Award,
    title: "Artisan certifié",
    description: "Qualibat RGE, assurance décennale. Vous travaillez avec un professionnel reconnu.",
  },
  {
    icon: MapPin,
    title: "100% local",
    description: "Basés à Dunkerque, nous intervenons de Calais à la frontière belge. Réactivité garantie.",
  },
  {
    icon: Clock,
    title: "Délais respectés",
    description: "Planning défini ensemble et tenu. Pas de mauvaise surprise, votre cuisine livrée à la date prévue.",
  },
  {
    icon: Leaf,
    title: "Éco-responsable",
    description: "Bois certifiés PEFC, peintures sans solvants, gestion des déchets de chantier.",
  },
  {
    icon: CreditCard,
    title: "Facilités de paiement",
    description: "Paiement en 3, 4 ou 10 fois sans frais. Financement sur-mesure selon votre projet.",
  },
];

export function TrustSection() {
  return (
    <section className="section-apple bg-zinc-950">
      <div className="container-apple">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-zinc-500 text-sm uppercase tracking-widest mb-4">
            Engagements
          </p>
          <h2 className="headline-section headline-gold-animated mb-6">
            Pourquoi nous faire confiance
          </h2>
          <p className="body-large max-w-2xl mx-auto">
            Au-delà du design, nous nous engageons sur la qualité, les délais et le service. Votre tranquillité d&apos;esprit est notre priorité.
          </p>
        </motion.div>

        {/* Trust points grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {trustPoints.map((point) => (
            <motion.div
              key={point.title}
              variants={staggerItem}
              className="bg-zinc-900 rounded-2xl p-8 hover:bg-zinc-800/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center mb-6">
                <point.icon className="w-6 h-6 text-zinc-400" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-100 mb-3">
                {point.title}
              </h3>
              <p className="text-zinc-500 leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
