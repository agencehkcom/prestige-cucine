"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, X, Image as ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImageUploaderProps {
  onImageSelect: (file: File, preview: string) => void;
  onClear: () => void;
  preview: string | null;
  className?: string;
}

export function ImageUploader({
  onImageSelect,
  onClear,
  preview,
  className,
}: ImageUploaderProps) {
  const [isDragging, setIsDragging] = useState(false);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragIn = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragOut = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);

      const files = e.dataTransfer.files;
      if (files && files.length > 0) {
        handleFile(files[0]);
      }
    },
    [onImageSelect]
  );

  const handleFile = (file: File) => {
    if (!file.type.startsWith("image/")) {
      alert("Veuillez sélectionner une image");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("L'image ne doit pas dépasser 5 Mo");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      onImageSelect(file, result);
    };
    reader.readAsDataURL(file);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFile(files[0]);
    }
  };

  return (
    <div className={cn("w-full", className)}>
      <AnimatePresence mode="wait">
        {preview ? (
          <motion.div
            key="preview"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative rounded-lg overflow-hidden"
          >
            <img
              src={preview}
              alt="Aperçu de votre cuisine"
              className="w-full h-64 object-cover"
            />
            <button
              onClick={onClear}
              className="absolute top-3 right-3 p-2 bg-noir/70 text-white rounded-full hover:bg-noir transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </motion.div>
        ) : (
          <motion.label
            key="uploader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onDragEnter={handleDragIn}
            onDragLeave={handleDragOut}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            className={cn(
              "flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer transition-all duration-300",
              isDragging
                ? "border-or bg-or/5"
                : "border-gray-300 hover:border-or hover:bg-ivoire-cream"
            )}
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <motion.div
                animate={{ y: isDragging ? -5 : 0 }}
                className="p-4 bg-ivoire-dark rounded-full mb-4"
              >
                {isDragging ? (
                  <ImageIcon className="w-8 h-8 text-or" />
                ) : (
                  <Upload className="w-8 h-8 text-gris" />
                )}
              </motion.div>
              <p className="mb-2 text-sm text-gris-dark">
                <span className="font-semibold text-or">
                  Cliquez pour télécharger
                </span>{" "}
                ou glissez-déposez
              </p>
              <p className="text-xs text-gris">PNG, JPG (max. 5 Mo)</p>
            </div>
            <input
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleInputChange}
            />
          </motion.label>
        )}
      </AnimatePresence>
    </div>
  );
}
