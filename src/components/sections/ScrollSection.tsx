"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ScrollSectionProps {
  headline: string;
  subheadline?: string;
  description: string;
}

export function ScrollSection({
  headline,
  subheadline,
  description,
}: ScrollSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Progressive text reveal
  const opacity1 = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  const opacity3 = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);

  const y1 = useTransform(scrollYProgress, [0.1, 0.3], [40, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.4], [40, 0]);
  const y3 = useTransform(scrollYProgress, [0.3, 0.5], [40, 0]);

  return (
    <section
      ref={containerRef}
      className="section-apple bg-background"
      id="savoir-faire"
    >
      <div className="container-apple">
        <div className="max-w-4xl mx-auto text-center">
          {/* Subheadline */}
          {subheadline && (
            <motion.p
              style={{ opacity: opacity1, y: y1 }}
              className="text-zinc-500 text-lg uppercase tracking-widest mb-6"
            >
              {subheadline}
            </motion.p>
          )}

          {/* Main headline */}
          <motion.h2
            style={{ opacity: opacity2, y: y2 }}
            className="headline-section headline-gold-animated mb-8"
          >
            {headline}
          </motion.h2>

          {/* Description */}
          <motion.p
            style={{ opacity: opacity3, y: y3 }}
            className="body-large max-w-2xl mx-auto"
          >
            {description}
          </motion.p>
        </div>
      </div>
    </section>
  );
}

// Variant with split text reveal
export function ScrollSectionSplit() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const words = ["Précision.", "Matériaux nobles.", "Sur-mesure."];

  return (
    <section ref={containerRef} className="section-apple bg-background">
      <div className="container-apple">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {words.map((word, index) => {
              const start = 0.1 + index * 0.1;
              const end = start + 0.2;
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const opacity = useTransform(
                scrollYProgress,
                [start, end],
                [0, 1]
              );
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const y = useTransform(scrollYProgress, [start, end], [30, 0]);

              return (
                <motion.span
                  key={word}
                  style={{ opacity, y }}
                  className="headline-section headline-gold-animated"
                >
                  {word}
                </motion.span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
