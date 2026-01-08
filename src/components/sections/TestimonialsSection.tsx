"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const testimonials = [
  {
    name: "Vincent D.",
    location: "Malo-les-Bains",
    text: "Une installation parfaite. L'équipe a été à l'écoute de nos besoins et le résultat dépasse nos attentes. Notre cuisine est devenue la pièce préférée de la maison.",
    rating: 5,
  },
  {
    name: "Marie-Claire L.",
    location: "Dunkerque Centre",
    text: "Professionnalisme exemplaire du début à la fin. La conception 3D nous a permis de visualiser exactement le rendu final. Aucune mauvaise surprise.",
    rating: 5,
  },
  {
    name: "Jean-Philippe M.",
    location: "Rosendaël",
    text: "Troisième cuisine que je fais faire, et de loin la meilleure expérience. Qualité des matériaux irréprochable, pose soignée, délais tenus.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="section-apple bg-zinc-900">
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
            Témoignages
          </p>
          <h2 className="headline-section headline-gold-animated mb-6">
            Ce que disent nos clients
          </h2>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              variants={staggerItem}
              className="bg-zinc-950 rounded-2xl p-8 relative"
            >
              {/* Quote icon */}
              <Quote className="w-10 h-10 text-zinc-800 mb-6" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-zinc-100 text-zinc-100"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-zinc-300 leading-relaxed mb-6">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center">
                  <span className="text-zinc-400 text-sm font-medium">
                    {testimonial.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <p className="text-zinc-100 font-medium">{testimonial.name}</p>
                  <p className="text-zinc-500 text-sm">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
