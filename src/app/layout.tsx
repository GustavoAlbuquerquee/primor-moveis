// src/app/layout.tsx
import { Montserrat, Lato } from "next/font/google";
import StyledComponentsRegistry from "@/lib/registry";
import { Providers } from "./providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import type { Metadata } from "next";

// Configuração das fontes
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-montserrat",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
});

// SEO Metadata
export const metadata: Metadata = {
  title: "Primor Móveis - Marcenaria de Excelência",
  description: "Móveis planejados com design e qualidade.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${montserrat.variable} ${lato.variable}`}>
      <body suppressHydrationWarning>
        <StyledComponentsRegistry>
          <Providers>
            <Header />
            {children}
            <FloatingWhatsApp />
            <Footer />
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
