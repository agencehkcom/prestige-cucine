"use client";

import { Star } from "lucide-react";
import { BentoCard } from "./BentoCard";

export function TestimonialCard() {
  return (
    <BentoCard size="1x1" delay={0.3}>
      <div className="h-full min-h-[200px] flex flex-col justify-between p-6">
        {/* Stars */}
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-4 h-4 fill-zinc-100 text-zinc-100"
            />
          ))}
        </div>

        {/* Quote */}
        <blockquote className="flex-1 flex items-center py-4">
          <p className="text-zinc-100 text-lg font-medium leading-relaxed">
            &ldquo;Une installation parfaite à Malo-les-Bains.&rdquo;
          </p>
        </blockquote>

        {/* Author */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-zinc-700 flex items-center justify-center">
            <span className="text-zinc-300 text-sm font-medium">VD</span>
          </div>
          <div>
            <p className="text-zinc-100 text-sm font-medium">Vincent D.</p>
            <p className="text-zinc-500 text-xs">Malo-les-Bains</p>
          </div>
        </div>
      </div>
    </BentoCard>
  );
}
