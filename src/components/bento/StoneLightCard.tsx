"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BentoCard } from "./BentoCard";

export function StoneLightCard() {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  // Subtle parallax effect on the image
  const imageY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <BentoCard size="2x2" delay={0}>
      <div ref={cardRef} className="relative h-full min-h-[400px] overflow-hidden">
        {/* Parallax background */}
        <motion.div
          style={{ y: imageY }}
          className="absolute inset-[-10%] bg-cover bg-center"
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=90)",
            }}
          />
        </motion.div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />

        {/* Content */}
        <div className="relative h-full flex flex-col justify-end p-8">
          <p className="text-zinc-400 text-sm uppercase tracking-widest mb-2">
            Silestone
          </p>
          <h3 className="headline-section text-zinc-100 mb-2">
            Stone & Light
          </h3>
          <p className="body-default max-w-md">
            Plans de travail en quartz composite. Résistance et élégance pour
            les décennies à venir.
          </p>
        </div>
      </div>
    </BentoCard>
  );
}
