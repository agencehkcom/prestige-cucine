"use client";

import { motion } from "framer-motion";
import { MessageSquare, Ruler, Factory, Wrench, HeartHandshake } from "lucide-react";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Rencontre",
    description: "Échange sur vos envies, votre budget et vos contraintes. Visite à domicile pour prendre les mesures exactes.",
  },
  {
    number: "02",
    icon: Ruler,
    title: "Conception 3D",
    description: "Modélisation complète de votre cuisine. Vous visualisez le rendu final avant la fabrication.",
  },
  {
    number: "03",
    icon: Factory,
    title: "Fabrication",
    description: "Production sur-mesure dans nos ateliers partenaires français. Contrôle qualité rigoureux.",
  },
  {
    number: "04",
    icon: Wrench,
    title: "Installation",
    description: "Pose par nos artisans qualifiés. Respect des délais et de votre intérieur.",
  },
  {
    number: "05",
    icon: HeartHandshake,
    title: "Suivi",
    description: "Service après-vente local et réactif. Garantie 10 ans sur tous nos meubles.",
  },
];

export function ProcessSection() {
  return (
    <section className="section-apple bg-zinc-950" id="process">
      <div className="container-apple">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-zinc-500 text-sm uppercase tracking-widest mb-4">
            Notre méthode
          </p>
          <h2 className="headline-section headline-gold-animated mb-6">
            5 étapes vers votre cuisine idéale
          </h2>
          <p className="body-large max-w-2xl mx-auto">
            Un accompagnement personnalisé de A à Z. Nous gérons tout pour que vous n&apos;ayez qu&apos;à profiter du résultat.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Connection line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-px bg-zinc-800" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                variants={staggerItem}
                className="relative text-center lg:text-left"
              >
                {/* Number badge */}
                <div className="relative inline-flex items-center justify-center w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 mb-6 lg:mb-8">
                  <span className="text-zinc-400 text-sm font-medium">{step.number}</span>
                  {/* Dot on line */}
                  <div className="hidden lg:block absolute -bottom-[26px] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-zinc-800 border-2 border-zinc-950" />
                </div>

                {/* Icon */}
                <div className="flex justify-center lg:justify-start mb-4">
                  <step.icon className="w-8 h-8 text-zinc-500" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-zinc-100 mb-2">
                  {step.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
