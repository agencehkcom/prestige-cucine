"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { portfolio } from "@/lib/data";

export function Portfolio() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handlePrev = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === 0 ? portfolio.length - 1 : selectedImage - 1
      );
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === portfolio.length - 1 ? 0 : selectedImage + 1
      );
    }
  };

  return (
    <section id="realisations" className="section-luxury section-dark">
      <div className="container-luxury">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-ivoire font-medium tracking-wider uppercase text-sm italic"
          >
            Nos Réalisations
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title mt-3 text-ivoire"
          >
            Découvrez Nos Créations
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="section-subtitle text-gris-light"
          >
            Chaque projet est unique, réalisé avec passion et précision pour nos
            clients dans les Hauts-de-France.
          </motion.p>
        </div>

        {/* Portfolio Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {portfolio.map((item, index) => (
            <motion.div
              key={item.id}
              variants={staggerItem}
              onClick={() => setSelectedImage(index)}
              className="group cursor-pointer relative rounded-xl overflow-hidden aspect-[4/3]"
            >
              {/* Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-ivoire text-sm font-medium mb-2 italic">
                  {item.style}
                </span>
                <h3 className="text-xl font-serif font-semibold text-ivoire mb-2">
                  {item.title}
                </h3>
                <p className="text-ivoire/70 text-sm mb-3">
                  {item.description}
                </p>
                <div className="flex items-center gap-2 text-gris-light text-sm">
                  <MapPin className="w-4 h-4" />
                  <span>{item.location}</span>
                </div>
              </div>

              {/* Border Animation */}
              <div className="absolute inset-0 border-2 border-ivoire/0 group-hover:border-ivoire/50 rounded-xl transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-noir/95 flex items-center justify-center p-4"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-2 text-ivoire hover:text-or transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-6 p-3 bg-ivoire/10 hover:bg-ivoire hover:text-noir text-ivoire rounded-full transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-6 p-3 bg-ivoire/10 hover:bg-ivoire hover:text-noir text-ivoire rounded-full transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image Content */}
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-5xl w-full"
            >
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-6">
                <Image
                  src={portfolio[selectedImage].image}
                  alt={portfolio[selectedImage].title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority
                />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-serif font-semibold text-ivoire mb-2">
                  {portfolio[selectedImage].title}
                </h3>
                <p className="text-gris-light">
                  {portfolio[selectedImage].description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
