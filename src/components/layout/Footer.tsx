"use client";

import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800">
      <div className="container-apple py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="mb-4">
              <span className="logo-calligraphy text-2xl">Prestige Cucine</span>
              <span className="text-zinc-400 font-light text-sm ml-2">By Lino</span>
            </h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Cuisines sur-mesure haut de gamme à Dunkerque. Design. Fonction.
              Émotion.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-zinc-100 font-medium mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+33328000000"
                  className="flex items-center gap-3 text-zinc-500 hover:text-zinc-300 transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  03 28 00 00 00
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@lecuisiniste.fr"
                  className="flex items-center gap-3 text-zinc-500 hover:text-zinc-300 transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  contact@lecuisiniste.fr
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-zinc-500 text-sm">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>
                    Zone d&apos;intervention : Dunkerque, Malo-les-Bains,
                    Rosendaël, Grande-Synthe
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-zinc-100 font-medium mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#realisations"
                  className="text-zinc-500 hover:text-zinc-300 transition-colors text-sm"
                >
                  Réalisations
                </Link>
              </li>
              <li>
                <Link
                  href="#savoir-faire"
                  className="text-zinc-500 hover:text-zinc-300 transition-colors text-sm"
                >
                  Savoir-faire
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-zinc-500 hover:text-zinc-300 transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-xs">
            © {new Date().getFullYear()} Prestige Cucine By Lino. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <Link
              href="/mentions-legales"
              className="text-zinc-600 hover:text-zinc-400 transition-colors text-xs"
            >
              Mentions légales
            </Link>
            <Link
              href="/confidentialite"
              className="text-zinc-600 hover:text-zinc-400 transition-colors text-xs"
            >
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
