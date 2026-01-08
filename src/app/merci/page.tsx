import Link from "next/link";
import { CheckCircle, ArrowLeft, Phone } from "lucide-react";

export const metadata = {
  title: "Merci | Le Cuisiniste Dunkerque",
  description: "Votre demande a été envoyée avec succès.",
};

export default function MerciPage() {
  return (
    <main className="min-h-screen bg-ivoire flex items-center justify-center p-6">
      <div className="max-w-lg w-full text-center">
        {/* Success Icon */}
        <div className="w-20 h-20 mx-auto mb-8 bg-green-100 rounded-full flex items-center justify-center">
          <CheckCircle className="w-12 h-12 text-green-600" />
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-noir mb-4">
          Merci pour votre demande !
        </h1>

        {/* Message */}
        <p className="text-gris-dark text-lg mb-8 leading-relaxed">
          Nous avons bien reçu votre demande de devis. Notre équipe vous
          recontactera dans les <strong>24 heures ouvrées</strong> pour
          discuter de votre projet de cuisine.
        </p>

        {/* Next Steps */}
        <div className="bg-white rounded-xl p-6 mb-8 text-left shadow-sm">
          <h2 className="font-serif font-semibold text-noir mb-4">
            Prochaines étapes
          </h2>
          <ul className="space-y-3 text-gris-dark">
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-or text-white rounded-full flex items-center justify-center text-sm font-medium">
                1
              </span>
              <span>Analyse de votre demande par notre équipe</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-or text-white rounded-full flex items-center justify-center text-sm font-medium">
                2
              </span>
              <span>Appel téléphonique pour affiner vos besoins</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-or text-white rounded-full flex items-center justify-center text-sm font-medium">
                3
              </span>
              <span>Rendez-vous en showroom ou à domicile</span>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <p className="text-gris mb-6">
          Une question urgente ? Appelez-nous directement :
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+33328000000"
            className="btn-gold inline-flex items-center justify-center gap-2"
          >
            <Phone className="w-5 h-5" />
            03 28 00 00 00
          </a>
          <Link
            href="/"
            className="btn-outline inline-flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </main>
  );
}
