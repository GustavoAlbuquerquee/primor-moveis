// src/app/layout.tsx
import StyledComponentsRegistry from "@/lib/registry";
import { Providers } from "./providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const metadata = {
  title: "Primor Móveis - Marcenaria de Excelência",
  description: "Móveis planejados com design e qualidade.",
  logo: "/cropped-logo-primor.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <StyledComponentsRegistry>
          <Providers>
            {/* NENHUMA TAG <l> AQUI */}
            <Header />
            {children}
            <FloatingWhatsApp/>
            <Footer />
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
