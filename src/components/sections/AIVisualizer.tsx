"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Wand2, Download, RefreshCw, ArrowRight, Sparkles, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ImageUploader } from "@/components/ui/ImageUploader";
import { fadeInUp } from "@/lib/animations";
import { portfolio } from "@/lib/data";

export function AIVisualizer() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [selectedKitchen, setSelectedKitchen] = useState<number | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleImageSelect = (file: File, preview: string) => {
    setUploadedImage(preview);
    setGeneratedImage(null);
    setError(null);
  };

  const handleClear = () => {
    setUploadedImage(null);
    setGeneratedImage(null);
    setError(null);
  };

  // Convert image URL to base64
  const imageUrlToBase64 = async (imageUrl: string): Promise<string> => {
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  };

  const handleGenerate = async () => {
    if (!uploadedImage || selectedKitchen === null) {
      setError("Veuillez télécharger votre photo et sélectionner un modèle de cuisine");
      return;
    }

    setIsGenerating(true);
    setError(null);

    try {
      const selectedModel = portfolio[selectedKitchen];

      // Convert the catalog kitchen image to base64
      const referenceImageBase64 = await imageUrlToBase64(selectedModel.image);

      const response = await fetch("/api/generate-kitchen", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          image: uploadedImage,                    // Photo de l'espace du prospect (base64)
          referenceImage: referenceImageBase64,    // Cuisine du catalogue (base64)
          style: selectedModel.style,
          title: selectedModel.title,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Erreur lors de la génération");
      }

      setGeneratedImage(data.imageUrl);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Une erreur est survenue"
      );
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownload = () => {
    if (generatedImage) {
      const link = document.createElement("a");
      link.href = generatedImage;
      link.download = "ma-future-cuisine.png";
      link.click();
    }
  };

  return (
    <section id="visualiser" className="section-luxury bg-ivoire-cream">
      <div className="container-luxury">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-noir/5 border border-noir/10 rounded-full mb-4"
          >
            <Sparkles className="w-4 h-4 text-noir" />
            <span className="text-noir font-medium text-sm italic">
              Nouveauté IA
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title"
          >
            Visualisez Votre Future Cuisine
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="section-subtitle"
          >
            Téléchargez une photo de votre espace actuel, choisissez un modèle
            de cuisine et découvrez le résultat en conservant votre agencement.
          </motion.p>
        </div>

        {/* Visualizer Container */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10">
            {/* Step 1: Upload */}
            <div className="mb-10">
              <h3 className="text-lg font-serif font-semibold text-noir mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-noir text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                Téléchargez une photo de votre espace
              </h3>
              <ImageUploader
                onImageSelect={handleImageSelect}
                onClear={handleClear}
                preview={uploadedImage}
              />
            </div>

            {/* Step 2: Select Kitchen Model */}
            <div className="mb-10">
              <h3 className="text-lg font-serif font-semibold text-noir mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-noir text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                Choisissez un modèle de cuisine
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {portfolio.map((item, index) => (
                  <motion.button
                    key={item.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedKitchen(index)}
                    className={`relative rounded-xl overflow-hidden aspect-square transition-all duration-300 ${
                      selectedKitchen === index
                        ? "ring-4 ring-noir shadow-lg"
                        : "ring-1 ring-gray-200 hover:ring-noir/50"
                    }`}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 20vw"
                    />
                    {/* Selected Overlay */}
                    {selectedKitchen === index && (
                      <div className="absolute inset-0 bg-noir/20 flex items-center justify-center">
                        <div className="w-10 h-10 bg-noir rounded-full flex items-center justify-center">
                          <Check className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    )}
                    {/* Title on hover */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-noir/80 to-transparent p-2">
                      <p className="text-white text-xs font-medium truncate">
                        {item.title}
                      </p>
                    </div>
                  </motion.button>
                ))}
              </div>
              {selectedKitchen !== null && (
                <p className="mt-3 text-sm text-noir font-medium italic">
                  Modèle sélectionné : {portfolio[selectedKitchen].title}
                </p>
              )}
            </div>

            {/* Step 3: Generate & Result */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Generate Button */}
              <div>
                <h3 className="text-lg font-serif font-semibold text-noir mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-noir text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                  Générez votre visualisation
                </h3>

                <div className="bg-ivoire-cream rounded-xl p-6">
                  <p className="text-gris-dark mb-4 text-sm">
                    Notre IA va intégrer le style de la cuisine choisie dans votre espace
                    tout en respectant l&apos;agencement et la structure de votre pièce.
                  </p>

                  <Button
                    variant="gold"
                    size="lg"
                    className="w-full"
                    onClick={handleGenerate}
                    disabled={!uploadedImage || selectedKitchen === null || isGenerating}
                  >
                    {isGenerating ? (
                      <span className="flex items-center gap-2">
                        <RefreshCw className="w-5 h-5 animate-spin" />
                        Génération en cours...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Wand2 className="w-5 h-5" />
                        Visualiser ma future cuisine
                      </span>
                    )}
                  </Button>

                  {error && (
                    <p className="mt-4 text-red-500 text-sm text-center">
                      {error}
                    </p>
                  )}
                </div>
              </div>

              {/* Result */}
              <div>
                <h3 className="text-lg font-serif font-semibold text-noir mb-4">
                  Résultat
                </h3>
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-ivoire-dark">
                  <AnimatePresence mode="wait">
                    {isGenerating ? (
                      <motion.div
                        key="loading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 flex flex-col items-center justify-center"
                      >
                        <div className="relative">
                          <div className="w-16 h-16 border-4 border-noir/30 rounded-full" />
                          <div className="absolute inset-0 w-16 h-16 border-4 border-noir border-t-transparent rounded-full animate-spin" />
                        </div>
                        <p className="mt-4 text-gris-dark text-sm">
                          Transformation en cours...
                        </p>
                        <p className="text-gris text-xs mt-1">
                          Cela peut prendre 20-30 secondes
                        </p>
                      </motion.div>
                    ) : generatedImage ? (
                      <motion.div
                        key="result"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="relative w-full h-full"
                      >
                        <img
                          src={generatedImage}
                          alt="Votre future cuisine"
                          className="w-full h-full object-cover"
                        />
                        <button
                          onClick={handleDownload}
                          className="absolute bottom-4 right-4 p-3 bg-noir/70 hover:bg-noir text-white rounded-full transition-colors"
                        >
                          <Download className="w-5 h-5" />
                        </button>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="placeholder"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 flex flex-col items-center justify-center text-center p-6"
                      >
                        <div className="w-20 h-20 bg-noir/5 rounded-full flex items-center justify-center mb-4">
                          <Wand2 className="w-10 h-10 text-noir" />
                        </div>
                        <p className="text-gris-dark">
                          Votre future cuisine apparaîtra ici
                        </p>
                        <p className="text-gris text-sm mt-2">
                          Téléchargez une photo et choisissez un modèle
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* CTA after result */}
                {generatedImage && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 text-center"
                  >
                    <p className="text-gris-dark mb-4">
                      Cette vision vous plaît ? Concrétisons-la ensemble.
                    </p>
                    <Button variant="outline">
                      <a
                        href="#contact"
                        className="flex items-center gap-2"
                      >
                        Demander un devis personnalisé
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </Button>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
