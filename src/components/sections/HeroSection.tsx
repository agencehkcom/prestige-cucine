"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { fadeInUp, scaleUp } from "@/lib/animations";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const textY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[200vh] bg-zinc-950"
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background Image - Full screen */}
        <motion.div
          style={{
            scale: imageScale,
            opacity: imageOpacity,
            y: imageY,
          }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&q=90"
            alt="Cuisine haut de gamme sur-mesure"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-zinc-950/30" />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 container-apple text-center">
          <motion.div
            style={{ y: textY, opacity: textOpacity }}
            className="mb-8"
          >
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="text-zinc-400 text-lg md:text-xl mb-6 tracking-widest uppercase"
            >
              Cuisiniste à Dunkerque
            </motion.p>
            <motion.h1
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.1 }}
              className="logo-calligraphy text-[clamp(56px,10vw,120px)] leading-none mb-4"
            >
              Prestige Cucine
            </motion.h1>
            <motion.h2
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl font-light text-zinc-400 tracking-wide"
            >
              By <span className="headline-gold-animated font-semibold">Lino</span>
            </motion.h2>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
            style={{ opacity: textOpacity }}
            className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto mb-12"
          >
            Design. Fonction. Émotion.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
            style={{ opacity: textOpacity }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="#contact" className="btn-apple btn-primary text-lg px-8 py-4">
              Demander un devis gratuit
            </a>
            <a href="#process" className="btn-apple btn-secondary text-lg px-8 py-4">
              Découvrir notre savoir-faire
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          style={{ opacity: textOpacity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-zinc-600 rounded-full flex justify-center p-1"
          >
            <motion.div className="w-1 h-2 bg-zinc-400 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
