"use client";

import { MapPin } from "lucide-react";
import { BentoCard } from "./BentoCard";

export function DunkerqueCard() {
  return (
    <BentoCard size="1x2" delay={0.2}>
      <div className="relative h-full min-h-[400px] flex flex-col">
        {/* Map illustration area */}
        <div className="flex-1 relative overflow-hidden">
          {/* Stylized map background */}
          <div className="absolute inset-0 bg-zinc-900">
            <svg
              className="absolute inset-0 w-full h-full opacity-20"
              viewBox="0 0 400 400"
              fill="none"
            >
              {/* Simplified coastal outline */}
              <path
                d="M50 200 Q100 150, 200 160 T350 140"
                stroke="currentColor"
                strokeWidth="2"
                className="text-zinc-600"
              />
              <path
                d="M80 250 Q150 200, 250 210 T380 180"
                stroke="currentColor"
                strokeWidth="1"
                className="text-zinc-700"
              />
              {/* Location marker */}
              <circle
                cx="200"
                cy="180"
                r="8"
                className="fill-zinc-100"
              />
              <circle
                cx="200"
                cy="180"
                r="16"
                className="fill-zinc-100/20"
              />
            </svg>
          </div>

          {/* Location pin */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="absolute inset-0 animate-ping bg-zinc-100/30 rounded-full w-8 h-8" />
              <div className="relative bg-zinc-100 rounded-full p-2">
                <MapPin className="w-4 h-4 text-zinc-950" />
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 bg-zinc-900/80 backdrop-blur">
          <p className="text-zinc-400 text-sm uppercase tracking-widest mb-2">
            Ancrage local
          </p>
          <h3 className="headline-card text-zinc-100 mb-2">
            Dunkerque Native
          </h3>
          <p className="body-default text-sm">
            De Malo-les-Bains à Rosendaël, nous connaissons chaque quartier.
            Proximité et réactivité garanties.
          </p>
        </div>
      </div>
    </BentoCard>
  );
}
