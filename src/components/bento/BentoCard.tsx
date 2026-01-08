"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { bentoCardReveal } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  size?: "1x1" | "1x2" | "2x1" | "2x2";
  delay?: number;
}

export function BentoCard({
  children,
  className,
  size = "1x1",
  delay = 0,
}: BentoCardProps) {
  const sizeClasses = {
    "1x1": "bento-1x1",
    "1x2": "bento-1x2",
    "2x1": "bento-2x1",
    "2x2": "bento-2x2",
  };

  return (
    <motion.div
      variants={bentoCardReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay }}
      className={cn("bento-card", sizeClasses[size], className)}
    >
      {children}
    </motion.div>
  );
}

// Card with image background
interface BentoImageCardProps extends Omit<BentoCardProps, "children"> {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle?: string;
}

export function BentoImageCard({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  className,
  size = "1x1",
  delay = 0,
}: BentoImageCardProps) {
  return (
    <BentoCard size={size} delay={delay} className={cn("group", className)}>
      <div className="relative h-full min-h-[280px]">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url(${imageSrc})` }}
          role="img"
          aria-label={imageAlt}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

        {/* Content */}
        <div className="relative h-full flex flex-col justify-end p-6">
          {subtitle && (
            <p className="text-zinc-400 text-sm mb-1">{subtitle}</p>
          )}
          <h3 className="headline-card text-zinc-100">{title}</h3>
        </div>
      </div>
    </BentoCard>
  );
}

// Card with text content
interface BentoTextCardProps extends Omit<BentoCardProps, "children"> {
  title: string;
  description: string;
  icon?: ReactNode;
}

export function BentoTextCard({
  title,
  description,
  icon,
  className,
  size = "1x1",
  delay = 0,
}: BentoTextCardProps) {
  return (
    <BentoCard size={size} delay={delay} className={className}>
      <div className="h-full min-h-[200px] flex flex-col p-6">
        {icon && (
          <div className="mb-4 text-zinc-400">{icon}</div>
        )}
        <h3 className="headline-card text-zinc-100 mb-2">{title}</h3>
        <p className="body-default flex-1">{description}</p>
      </div>
    </BentoCard>
  );
}
