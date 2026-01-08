import type { Metadata } from "next";
import { Inter, Pinyon_Script } from "next/font/google";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const pinyonScript = Pinyon_Script({
  variable: "--font-calligraphy",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prestige Cucine By Lino | L'Art de la Cuisine Sur-Mesure",
  description:
    "Cuisines sur-mesure haut de gamme à Dunkerque. Matériaux nobles, charnières Blumotion, plans Silestone. Conception 100% personnalisée.",
  keywords:
    "cuisiniste dunkerque, cuisine sur-mesure, cuisine haut de gamme, Silestone, Blumotion, Malo-les-Bains, Prestige Cucine",
  authors: [{ name: "Prestige Cucine By Lino" }],
  openGraph: {
    title: "Prestige Cucine By Lino | L'Art de la Cuisine Sur-Mesure",
    description:
      "Cuisines sur-mesure haut de gamme à Dunkerque. Design. Fonction. Émotion.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${pinyonScript.variable}`} suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
