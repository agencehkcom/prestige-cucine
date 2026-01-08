"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, Phone, Mail, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/Button";
import { Input, Textarea, Select } from "@/components/ui/Input";
import { fadeInUp, slideInLeft, slideInRight } from "@/lib/animations";

const contactSchema = z.object({
  firstName: z.string().min(2, "Prénom requis (min. 2 caractères)"),
  lastName: z.string().min(2, "Nom requis (min. 2 caractères)"),
  email: z.string().email("Email invalide"),
  phone: z.string().min(10, "Numéro de téléphone invalide"),
  projectType: z.string().min(1, "Veuillez sélectionner un type de projet"),
  budget: z.string().min(1, "Veuillez sélectionner un budget"),
  message: z.string().optional(),
  consent: z.boolean().refine((val) => val === true, {
    message: "Vous devez accepter la politique de confidentialité",
  }),
});

type ContactFormData = z.infer<typeof contactSchema>;

const projectTypes = [
  { value: "renovation", label: "Rénovation de cuisine" },
  { value: "neuf", label: "Cuisine neuve" },
  { value: "agrandissement", label: "Agrandissement" },
  { value: "autre", label: "Autre projet" },
];

const budgetOptions = [
  { value: "10-20k", label: "10 000 € - 20 000 €" },
  { value: "20-40k", label: "20 000 € - 40 000 €" },
  { value: "40-60k", label: "40 000 € - 60 000 €" },
  { value: "60k+", label: "Plus de 60 000 €" },
];

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi");
      }

      toast.success("Demande envoyée avec succès !", {
        description: "Nous vous recontacterons sous 24h.",
      });
      reset();
    } catch {
      toast.error("Erreur lors de l'envoi", {
        description: "Veuillez réessayer ou nous contacter par téléphone.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-luxury section-dark">
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Info */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="text-ivoire font-medium tracking-wider uppercase text-sm italic">
              Contact
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-ivoire mt-3 mb-6">
              Parlons de Votre Projet
            </h2>
            <p className="text-gris-light mb-10 leading-relaxed">
              Vous avez un projet de cuisine ? Notre équipe est à votre écoute
              pour vous accompagner et vous proposer une solution sur-mesure.
              Remplissez le formulaire ou contactez-nous directement.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-ivoire/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-ivoire" />
                </div>
                <div>
                  <p className="font-semibold text-ivoire">Téléphone</p>
                  <a
                    href="tel:+33328000000"
                    className="text-gris-light hover:text-ivoire transition-colors"
                  >
                    03 28 00 00 00
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-ivoire/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-ivoire" />
                </div>
                <div>
                  <p className="font-semibold text-ivoire">Email</p>
                  <a
                    href="mailto:contact@lecuisiniste-dunkerque.fr"
                    className="text-gris-light hover:text-ivoire transition-colors"
                  >
                    contact@lecuisiniste-dunkerque.fr
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-ivoire/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-ivoire" />
                </div>
                <div>
                  <p className="font-semibold text-ivoire">Showroom</p>
                  <p className="text-gris-light">
                    123 Avenue de la République
                    <br />
                    59140 Dunkerque
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-ivoire/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-ivoire" />
                </div>
                <div>
                  <p className="font-semibold text-ivoire">Horaires</p>
                  <p className="text-gris-light">
                    Lun - Ven : 9h00 - 18h00
                    <br />
                    Sam : 10h00 - 17h00
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-noir-50 rounded-2xl p-6 md:p-10"
            >
              <h3 className="text-xl font-serif font-semibold text-ivoire mb-6">
                Demande de Devis Gratuit
              </h3>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <Input
                  label="Prénom"
                  placeholder="Jean"
                  error={errors.firstName?.message}
                  {...register("firstName")}
                />
                <Input
                  label="Nom"
                  placeholder="Dupont"
                  error={errors.lastName?.message}
                  {...register("lastName")}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <Input
                  label="Email"
                  type="email"
                  placeholder="jean.dupont@email.fr"
                  error={errors.email?.message}
                  {...register("email")}
                />
                <Input
                  label="Téléphone"
                  type="tel"
                  placeholder="06 12 34 56 78"
                  error={errors.phone?.message}
                  {...register("phone")}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <Select
                  label="Type de projet"
                  options={projectTypes}
                  error={errors.projectType?.message}
                  {...register("projectType")}
                />
                <Select
                  label="Budget estimé"
                  options={budgetOptions}
                  error={errors.budget?.message}
                  {...register("budget")}
                />
              </div>

              <div className="mb-6">
                <Textarea
                  label="Message (optionnel)"
                  placeholder="Décrivez votre projet..."
                  {...register("message")}
                />
              </div>

              {/* Consent Checkbox */}
              <div className="mb-6">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    {...register("consent")}
                    className="mt-1 w-4 h-4 accent-noir"
                  />
                  <span className="text-sm text-gris-light">
                    J&apos;accepte que mes données soient traitées conformément à
                    la{" "}
                    <a href="#" className="text-ivoire hover:underline">
                      politique de confidentialité
                    </a>
                    .
                  </span>
                </label>
                {errors.consent && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.consent.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                variant="gold"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Envoi en cours..."
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-5 h-5" />
                    Envoyer ma demande
                  </span>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
