"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import { ArrowRight, Check } from "lucide-react";

export function CTASection() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    postalCode: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation - UI only
    setIsSubmitted(true);
  };

  return (
    <section className="section-apple bg-background" id="contact">
      <div className="container-apple">
        <div className="max-w-2xl mx-auto">
          {/* Section header */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-zinc-500 text-sm uppercase tracking-widest mb-4">
              Contact
            </p>
            <h2 className="headline-section headline-gold-animated mb-4">
              Commençons votre projet
            </h2>
            <p className="body-large">
              Devis gratuit et sans engagement. Réponse sous 24h.
            </p>
          </motion.div>

          {/* Form */}
          {!isSubmitted ? (
            <motion.form
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Name field */}
              <motion.div variants={staggerItem}>
                <label
                  htmlFor="name"
                  className="block text-zinc-400 text-sm mb-2"
                >
                  Votre nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  className="input-apple"
                  placeholder="Jean Dupont"
                />
              </motion.div>

              {/* Phone field */}
              <motion.div variants={staggerItem}>
                <label
                  htmlFor="phone"
                  className="block text-zinc-400 text-sm mb-2"
                >
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formState.phone}
                  onChange={(e) =>
                    setFormState({ ...formState, phone: e.target.value })
                  }
                  className="input-apple"
                  placeholder="06 12 34 56 78"
                />
              </motion.div>

              {/* Postal code field */}
              <motion.div variants={staggerItem}>
                <label
                  htmlFor="postalCode"
                  className="block text-zinc-400 text-sm mb-2"
                >
                  Code postal
                </label>
                <input
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  required
                  value={formState.postalCode}
                  onChange={(e) =>
                    setFormState({ ...formState, postalCode: e.target.value })
                  }
                  className="input-apple"
                  placeholder="59140"
                />
              </motion.div>

              {/* Submit button */}
              <motion.div variants={staggerItem} className="pt-4">
                <button
                  type="submit"
                  className="btn-apple btn-primary w-full group"
                >
                  <span>Demander un devis gratuit</span>
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </button>
              </motion.div>

              {/* Privacy note */}
              <motion.p
                variants={staggerItem}
                className="text-zinc-600 text-xs text-center"
              >
                Vos données restent confidentielles et ne seront jamais
                partagées.
              </motion.p>
            </motion.form>
          ) : (
            /* Success state */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-zinc-800 mb-6">
                <Check className="w-8 h-8 text-zinc-100" />
              </div>
              <h3 className="headline-card text-zinc-100 mb-2">
                Demande envoyée
              </h3>
              <p className="body-default">
                Nous vous recontacterons sous 24 heures.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
