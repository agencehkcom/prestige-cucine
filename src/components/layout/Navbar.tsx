"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Navbar() {
  const { scrollY } = useScroll();

  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(9, 9, 11, 0)", "rgba(9, 9, 11, 0.8)"]
  );

  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(20px)"]
  );

  return (
    <motion.header
      style={{
        backgroundColor,
        backdropFilter: backdropBlur,
        WebkitBackdropFilter: backdropBlur,
      }}
      className="fixed top-0 left-0 right-0 z-50 transition-colors"
    >
      <nav className="container-apple">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="tracking-tight"
          >
            <span className="logo-calligraphy text-2xl">Prestige Cucine</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#realisations"
              className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
            >
              Réalisations
            </Link>
            <Link
              href="#savoir-faire"
              className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
            >
              Savoir-faire
            </Link>
            <Link
              href="#contact"
              className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* CTA Button + Theme Toggle */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link
              href="#contact"
              className="btn-apple btn-primary text-sm px-5 py-2"
            >
              Devis gratuit
            </Link>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}
