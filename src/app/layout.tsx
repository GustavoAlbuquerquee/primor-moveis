// src/app/layout.tsx
import StyledComponentsRegistry from '@/lib/registry';
import  Providers  from './providers';
import Header from '@/components/Header'; // Importe o Header
import Footer from '@/components/Footer'; // Importe o Footer

export const metadata = {
  title: 'Primor Móveis - Marcenaria de Excelência',
  description: 'Móveis planejados com design e qualidade.',
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
            <Header /> {/* Header aqui */}
            {children}
            <Footer /> {/* Footer aqui */}
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}