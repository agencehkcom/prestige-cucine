"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { fadeInUp } from "@/lib/animations";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=90",
    alt: "Cuisine moderne avec îlot central",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=90",
    alt: "Cuisine contemporaine minimaliste",
  },
  {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=90",
    alt: "Détail de rangements cuisine",
  },
];

export function GallerySection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax for each image (different speeds)
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -60]);

  const parallaxValues = [y1, y2, y3];

  return (
    <section ref={containerRef} className="section-apple bg-background">
      <div className="container-wide">
        {/* Section header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-zinc-500 text-sm uppercase tracking-widest mb-4">
            Portfolio
          </p>
          <h2 className="headline-section headline-gold-animated">
            Réalisations récentes
          </h2>
        </motion.div>

        {/* Gallery grid with parallax */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.src}
              style={{ y: parallaxValues[index] }}
              className="relative overflow-hidden rounded-2xl"
            >
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="aspect-[4/5] relative group"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-zinc-950/0 group-hover:bg-zinc-950/20 transition-colors duration-300" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Full-width image */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-16 image-edge"
      >
        <div className="relative aspect-[21/9] max-h-[60vh]">
          <Image
            src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=2400&q=90"
            alt="Vue panoramique cuisine haut de gamme"
            fill
            className="object-cover"
            sizes="100vw"
          />
          {/* Gradient overlays for edge blend */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/50" />
        </div>
      </motion.div>
    </section>
  );
}
