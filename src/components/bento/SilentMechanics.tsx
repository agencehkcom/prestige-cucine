"use client";

import { motion } from "framer-motion";
import { BentoCard } from "./BentoCard";

export function SilentMechanics() {
  return (
    <BentoCard size="2x1" delay={0.1}>
      <div className="relative h-full min-h-[280px] overflow-hidden">
        {/* Background with hinge image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1556909114-44e3e70034e2?w=800&q=80)",
          }}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent" />

        {/* Content */}
        <div className="relative h-full flex flex-col justify-center p-8">
          <p className="text-zinc-500 text-sm uppercase tracking-widest mb-2">
            Blumotion
          </p>
          <h3 className="headline-card text-zinc-100 mb-4">
            Silent Mechanics
          </h3>
          <p className="body-default max-w-sm">
            Silence. Précision. Durabilité.
          </p>

          {/* Animated indicator */}
          <div className="mt-6 flex items-center gap-3">
            <motion.div
              animate={{
                x: [0, 8, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-8 h-0.5 bg-zinc-400 rounded-full"
            />
            <span className="text-zinc-500 text-xs">Fermeture amortie</span>
          </div>
        </div>
      </div>
    </BentoCard>
  );
}
