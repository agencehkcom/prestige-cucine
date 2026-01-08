"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const stats = [
  {
    value: "200+",
    label: "Cuisines réalisées",
    description: "dans la région dunkerquoise",
  },
  {
    value: "15",
    label: "Années d'expérience",
    description: "en conception sur-mesure",
  },
  {
    value: "98%",
    label: "Clients satisfaits",
    description: "nous recommandent",
  },
  {
    value: "10",
    label: "Ans de garantie",
    description: "sur tous nos meubles",
  },
];

export function StatsSection() {
  return (
    <section className="py-20 bg-zinc-900 border-y border-zinc-800">
      <div className="container-wide">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={staggerItem}
              className="text-center"
            >
              <div className="text-5xl lg:text-6xl font-bold text-zinc-100 mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-medium text-zinc-300 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-zinc-500">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
