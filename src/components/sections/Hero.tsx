"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Check, Star, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { fadeInUp, slideInLeft, slideInRight } from "@/lib/animations";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-ivoire via-ivoire-cream to-ivoire-dark">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container-luxury py-32 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInLeft}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 bg-noir/5 border border-noir/10 rounded-full mb-6"
            >
              <MapPin className="w-4 h-4 text-noir" />
              <span className="text-sm font-medium text-noir italic">
                Artisan Cuisiniste à Dunkerque
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-noir leading-tight mb-6"
            >
              Votre Cuisine{" "}
              <span className="italic">Sur-Mesure</span> à Dunkerque
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-gris-dark mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Conception personnalisée, matériaux nobles et savoir-faire
              artisanal. Créons ensemble la cuisine de vos rêves.
            </motion.p>

            {/* Benefits */}
            <motion.ul variants={fadeInUp} className="space-y-3 mb-8">
              {[
                "Conception 3D gratuite",
                "Fabrication 100% française",
                "Garantie 10 ans",
              ].map((benefit, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 justify-center lg:justify-start"
                >
                  <span className="flex-shrink-0 w-5 h-5 bg-noir rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </span>
                  <span className="text-noir">{benefit}</span>
                </li>
              ))}
            </motion.ul>

            {/* CTAs */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button variant="gold" size="lg">
                <a href="#contact" className="flex items-center gap-2">
                  Demander un Devis
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg">
                <a href="tel:+33328000000" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  03 28 00 00 00
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInRight}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/images/portfolio/cuisine-1.png"
                  alt="Cuisine haut de gamme sur-mesure"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-noir/30 to-transparent" />
            </div>

            {/* Floating Card - Rating */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-noir text-noir"
                    />
                  ))}
                </div>
                <div>
                  <p className="font-bold text-noir">4.9/5</p>
                  <p className="text-xs text-gris">+150 avis clients</p>
                </div>
              </div>
            </motion.div>

            {/* Floating Card - Stats */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute -top-4 -right-4 bg-noir text-white rounded-xl p-4 shadow-xl"
            >
              <p className="text-3xl font-bold italic">15+</p>
              <p className="text-sm opacity-90">années d&apos;expérience</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-noir rounded-full flex justify-center"
        >
          <motion.div className="w-1 h-2 bg-noir rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
}
