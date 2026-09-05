import { Montserrat, Lato } from "next/font/google";
import { Toaster } from "react-hot-toast";
import StyledComponentsRegistry from "@/lib/registry";
import { Providers } from "./providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import type { Metadata } from "next";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://primormoveis.com.br"),

  title: "Primor Móveis - Marcenaria de Excelência em BH",
  description:
    "Móveis planejados com design, qualidade e responsabilidade. Atendemos BH e região com projetos residenciais e corporativos.",

  openGraph: {
    title: "Primor Móveis - Marcenaria de Excelência em BH",
    description: "Móveis planejados com design, qualidade e responsabilidade.",
    url: "https://primormoveis.com.br",
    siteName: "Primor Móveis",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "pt_BR",
    type: "website",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FurnitureStore",
  name: "Primor Móveis",
  description:
    "Marcenaria de móveis planejados sob medida em Belo Horizonte, com mais de 25 anos de experiência em projetos residenciais e corporativos.",
  url: "https://primormoveis.com.br",
  telephone: "+5531997115473",
  email: "faleconosco@primormoveis.com.br",
  image: "https://primormoveis.com.br/og-image.jpg",
  logo: "https://primormoveis.com.br/cropped-logo-primor.png",
  taxID: "12.654.132/0001-16",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Teodomira Diniz Lara, 48 - Sagrada Família",
    addressLocality: "Belo Horizonte",
    addressRegion: "MG",
    addressCountry: "BR",
  },
  areaServed: {
    "@type": "City",
    name: "Belo Horizonte",
  },
  sameAs: [
    "https://instagram.com/primormoveisbh",
    "https://facebook.com/primormoveis",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${montserrat.variable} ${lato.variable}`}>
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <StyledComponentsRegistry>
          <Providers>
            <Header />
            {children}
            <FloatingWhatsApp />
            <Footer />
          </Providers>
        </StyledComponentsRegistry>

        <Toaster
          position="top-right"
          toastOptions={{
            duration: 5000,
            success: {
              style: {
                background: "#28a745",
                color: "white",
              },
            },
            error: {
              style: {
                background: "#dc3545",
                color: "white",
              },
            },
          }}
        />
      </body>
    </html>
  );
}
