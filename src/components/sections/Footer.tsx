"use client";

import { Facebook, Instagram, Linkedin, ArrowUp } from "lucide-react";

const footerLinks = {
  services: [
    { label: "Cuisine sur-mesure", href: "#" },
    { label: "Rénovation", href: "#" },
    { label: "Aménagement", href: "#" },
    { label: "Conseil décoration", href: "#" },
  ],
  company: [
    { label: "À propos", href: "#" },
    { label: "Nos réalisations", href: "#realisations" },
    { label: "Témoignages", href: "#temoignages" },
    { label: "Contact", href: "#contact" },
  ],
  legal: [
    { label: "Mentions légales", href: "#" },
    { label: "Politique de confidentialité", href: "#" },
    { label: "CGV", href: "#" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-noir text-ivoire">
      {/* Main Footer */}
      <div className="container-luxury py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="inline-block mb-6">
              <span className="text-2xl font-serif font-bold">
                Le <span className="italic">Cuisiniste</span>
              </span>
            </a>
            <p className="text-gris-light leading-relaxed mb-6">
              Artisan cuisiniste à Dunkerque depuis plus de 15 ans. Conception
              sur-mesure, matériaux nobles et savoir-faire d&apos;exception.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-noir-50 hover:bg-ivoire hover:text-noir rounded-lg flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gris-light hover:text-ivoire transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6">Entreprise</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gris-light hover:text-ivoire transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6">
              Nous trouver
            </h4>
            <div className="space-y-3 text-gris-light">
              <p>
                123 Avenue de la République
                <br />
                59140 Dunkerque
              </p>
              <p>
                <a
                  href="tel:+33328000000"
                  className="hover:text-ivoire transition-colors"
                >
                  03 28 00 00 00
                </a>
              </p>
              <p>
                <a
                  href="mailto:contact@lecuisiniste-dunkerque.fr"
                  className="hover:text-ivoire transition-colors"
                >
                  contact@lecuisiniste-dunkerque.fr
                </a>
              </p>
              <div className="pt-2">
                <p className="text-sm">
                  <strong className="text-ivoire">Horaires :</strong>
                </p>
                <p className="text-sm">Lun - Ven : 9h - 18h</p>
                <p className="text-sm">Sam : 10h - 17h</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-noir-50">
        <div className="container-luxury py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gris text-sm text-center md:text-left">
            © {new Date().getFullYear()} Le Cuisiniste Dunkerque. Tous droits
            réservés.
          </p>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {footerLinks.legal.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gris hover:text-ivoire transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Scroll to top */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-ivoire hover:bg-ivoire/80 rounded-lg flex items-center justify-center transition-colors"
            aria-label="Retour en haut"
          >
            <ArrowUp className="w-5 h-5 text-noir" />
          </button>
        </div>
      </div>
    </footer>
  );
}
